import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { formDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const StartupCard = ({ post }: { post: any }) => {
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
          <Link href={`/user/${author._id}`}>
            <p className="text-16-medium line-clamp-1">{author.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1 ">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author._id}`}>
          <Image
            src={author.image}
            alt="placehold"
            width={48}
            height={48}
            className="rounded-full"
            loading="eager"
          />
        </Link>
      </div>

      {/* Description */}

      <Link href={`/startup/${_id}`}>
        <h3 className="startup-card_desc">{description}</h3>
      </Link>

      {/* Post Image */}

      <Link href={`/startup/${_id}`}>
      <img
            src={image}
            alt="image post"
            className="startup-card_img"
          />
      </Link>

      {/* Post Category */}

      <div className="flex-between gap-3 mt-5">

      <Link className="text-16-medium" href={`/?query=${category.toLowerCase()}`}>
         {category}
      </Link>

      <Link href={`/startup/${_id}`}>
      
      <button className="startup-card_btn">
        Details
      </button>
      </Link>


      </div>
    </li>
  );
};


export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={index}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard;
