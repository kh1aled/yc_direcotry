import StartupCard from "@/app/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownit from 'markdown-it'
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import View from "@/app/components/View";
const md = markdownit()


export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const posts: any = [
    {
      _created_at: new Date(),
      author: { _id: 1, name: "khaled hamdy" },
      views: 400,
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _created_at: new Date(),
      author: { _id: 1, name: "khaled hamdy" },
      views: 400,
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _created_at: new Date(),
      author: { _id: 1, name: "khaled hamdy" },
      views: 400,
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _created_at: new Date(),
      author: { _id: 1, name: "khaled hamdy" },
      views: 400,
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _created_at: new Date(),
      author: { _id: 1, name: "khaled hamdy" },
      views: 400,
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _created_at: new Date(),
      author: { _id: 1, name: "khaled hamdy" },
      views: 400,
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });

  if (!post) return notFound();


  const {
    title,
    image,
    pitch,
    _id,
    slug,
    _createdAt,
    author,
    views,
    description,
    category,
  } = post;

  const parsedContent = md.render(pitch || "");


  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formDate(_createdAt)}</p>
        <h1 className="heading">{title}</h1>
        <p className="sub-heading !max-w-5xl">{slug.current}</p>
      </section>

      {/** Detials */}

      <section className="section_container ">
        <img src={image} className="startup-details_img" alt="thumbnail" />

        {/** Profile Detials */}

        <div className="px-24 mt-5 space-y-5">
          <div className="flex-between  gap-5">
            <div className="flex justify-center items-center gap-3">
              <Link href={`/user/${author?._id}`}>
                <Image
                  src={author?.image}
                  alt="placehold"
                  width={48}
                  height={48}
                  className="rounded-full size-10"
                />
              </Link>

              <div>
                <Link href={`/user/${author?._id}`}>
                  <h3 className="text-26-semibold line-clamp-1 capitalize">
                    {author.name}
                  </h3>
                </Link>
                <Link href={`/user/${author?._id}`}>
                  <p className="text-16-medium line-clamp-1">
                    {author.username}
                  </p>
                </Link>
              </div>
            </div>

            <div>
              <p className="category-tag">{category}</p>
            </div>
          </div>

          {/* Pitch */}

          <div>
            <h3 className="text-30-bold">pitch detials</h3>


            {
            parsedContent ?  
            (
              <article className="prose max-w-4xl font-work-sans break-all" dangerouslySetInnerHTML={{__html  : parsedContent}}/>
            )
            :
            
            (
              <p className="no-result">no details provided</p>
            )
            }

            {/* <p className="startup-details_desc mt-5">{pitch}</p> */}
          </div>

          <hr className="divider"/>

          {/* Similar Startups */}

          <p className="text-30-semibold">Similar Startups </p>

          <Suspense fallback={<Skeleton className="view_skeleton"/>} >
              <View id={id}/>
          </Suspense>

          {/* <ul className="card_grid">
            {posts?.length > 0 ? (
              posts.map((post: any, key: any) => (
                <StartupCard post={post} key={key} />
              ))
            ) : (
              <p className="no-result">No startups found</p>
            )}
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default page;
