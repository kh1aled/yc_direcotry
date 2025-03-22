"use client";
import { Input } from "@/components/ui/input";
import { userSchema } from "@/lib/validation";
import { useActionState } from "react";

const TestForm = () => {
  const handleSubmit = async (prevState: any, formData: FormData) => {
    const data = {
      name: formData.get("name"),
    };

    // التحقق من صحة البيانات باستخدام Zod
    const result = userSchema.safeParse(data);

    // في حالة وجود أخطاء
    if (!result.success) {
      const errors: Record<string, string> = {};

      result.error.errors.forEach((err) => {
        console.log("ERROR" , err);
        
        errors[err.path[0]] = err.message;

      });

      return { status: "ERROR", errors };
    }

    // محاكاة إرسال البيانات
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { status: "SUCCESS", errors: {} };
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    status: "INITIAL",
    errors: {},
  });

  return (
    <form className="startup-form" action={formAction}>
      <div>
        <label htmlFor="name" className="startup-form_label">
          Title
        </label>
        <Input
          id="name"
          type="text"
          placeholder="JSM Academy Masterclass"
          name="name"
          className="startup-form_input"
        />

        {state.errors?.name && (
          <p className="startup-form_error">{state.errors.name}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="startup-form_btn text-white"
      >
        {isPending ? "Submitting..." : "Submit your pitch"}
        <i className="ri-send-plane-fill ml-2 text-white"></i>
      </button>

      {state.status == "SUCCESS" && (<p className="startup-form_success">Saved User Data</p>)}
    </form>
  );
};

export default TestForm;
