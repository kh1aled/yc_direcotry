"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState, useEffect, useState } from "react";
import MDEditor from "@uiw/react-markdown-editor";
import { formSchema } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";

const Form = () => {
  // VARIABLES
  const [pitch, setPitch] = useState("**!Hello World**");
  const { toast } = useToast();
  const router = useRouter();

  // Submit Form
  //we proccess multi steps

  useEffect(() => {
    toast({
      title: "Error",
      description: "Please check your inputs and try again",
      variant: "destructive",
    });
  }, []); 

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    //1️⃣ collect data form
    const formValues = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      link: formData.get("link") as string,
      pitch,
    };

    //2️⃣ Validation using Zod
    const resultFromValidation = await formSchema.safeParseAsync(formValues);

    //3️⃣ if validation failed ❌

    if (!resultFromValidation.success) {
      //4️⃣ Extract errors in a more efficient way
      const fieldErrors = resultFromValidation.error.errors.reduce(
        (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
        {} as Record<string, string>
      );

      toast({
        title: "Error",
        description: "Please check your inputs and try again",
        variant: "destructive",
      });

      return { errors: fieldErrors, status: "ERROR" };
    }

    //5️⃣ Submit data to sanity database
    const result = await createPitch(prevState, formData, pitch);

    //✅ if data is success submitted
    if (result.status === "SUCCESS") {
      toast({
        title: "Success",
        description: "Your startup pitch has been created successfully",
      });

      //⬅redirct to startup detials to this startup
      router.push(`/startup/${result._id}`);
    }

    return result;
  };

  // ACTION STATE
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    errors: {},
    status: "INITIAL",
  });

  return (
    <div className="mx-auto">
      <form className="startup-form" action={formAction}>
        {/* Title */}
        <div>
          <label htmlFor="title" className="startup-form_label">
            Title
          </label>
          <Input
            id="title"
            type="text"
            placeholder="JSM Academy Masterclass"
            name="title"
            className="startup-form_input"
            required
          />
          {state.errors?.title && (
            <p className="startup-form_error">{state.errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="startup-form_label">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Startup Description"
            name="description"
            className="startup-form_textarea"
            required
          />
          {state.errors?.description && (
            <p className="startup-form_error">{state.errors.description}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="startup-form_label">
            Category
          </label>
          <Input
            id="category"
            type="text"
            placeholder="Startup Category (Tech, Health, Education)"
            name="category"
            className="startup-form_input"
            required
          />
          {state.errors?.category && (
            <p className="startup-form_error">{state.errors.category}</p>
          )}
        </div>

        {/* Image Link */}
        <div>
          <label htmlFor="link" className="startup-form_label">
            Image Link
          </label>
          <Input
            id="link"
            type="text"
            placeholder="Startup Image URL"
            name="link"
            className="startup-form_input"
            required
          />
          {state.errors?.link && (
            <p className="startup-form_error">{state.errors.link}</p>
          )}
        </div>

        {/* Markdown Editor */}
        <div data-color-mode="light">
          <label htmlFor="pitch" className="startup-form_label">
            Pitch
          </label>
          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            id="pitch"
            height="300px"
            style={{ borderRadius: 20, overflow: "hidden" }}
            placeholder="Briefly describe your idea and what problem it solves"
          />
          {state.errors?.pitch && (
            <p className="startup-form_error">{state.errors.pitch}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="startup-form_btn text-white"
        >
          {isPending ? "Submitting..." : "Submit your pitch"}{" "}
          <i className="ri-send-plane-fill ml-2 text-white"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
