import { Skeleton } from "@/components/ui/skeleton";
import { formDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Author, Startup } from "@/sanity/typee";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    author,
    views,
    _id,
    description,
    image,
    category,
    title,
  } = post;


  return (
    <li className="startup-card group">
      {/* Head */}
      <div className="flex-between">
        <p className="startup-card_date">{formDate(_createdAt)}</p>
        <div className="flex justify-center items-center gap-1">
          <i className="ri-eye-line text-primary "></i>
          <span className="text-black ">{views}</span>
        </div>
      </div>

      {/* Profile */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-2">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1 ">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image!}
            alt={author?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Description */}
      <Link href={`/startup/${_id}`}>
        <h3 className="startup-card_desc">{description}</h3>
      </Link>

      {/* Post Image */}
      <Link href={`/startup/${_id}`}>
        {/* <img src={image} alt="placeholder" className="startup-card_img" /> */}

        <img src={image} alt="placeholder" className="startup-card_img" />

      </Link>

      {/* Post Category */}
      <div className="flex-between gap-3 mt-5">
        <Link
          className="text-16-medium"
          href={`/?query=${category?.toLowerCase()}`}
        >
          {category}
        </Link>

        <Link href={`/startup/${_id}`}>
          <button className="startup-card_btn">Details</button>
        </Link>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {Array.from({ length: 5 }).map((_, index) => (
      <li key={index}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;
