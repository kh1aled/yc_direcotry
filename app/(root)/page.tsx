import Hero from "../components/Hero";
import StartupCard from "../components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const params = {search : query || null};

  const {data : posts} = await sanityFetch({query : STARTUPS_QUERY , params});


  
  

  // const posts : any = [
  //   {
  //     _created_at:new Date(),
  //     author: { _id: 1  , name :"khaled hamdy"},
  //     views: 400,
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _created_at:new Date(),
  //     author: { _id: 1  , name :"khaled hamdy"},
  //     views: 400,
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _created_at:new Date(),
  //     author: { _id: 1  , name :"khaled hamdy"},
  //     views: 400,
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _created_at:new Date(),
  //     author: { _id: 1  , name :"khaled hamdy"},
  //     views: 400,
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _created_at:new Date(),
  //     author: { _id: 1  , name :"khaled hamdy"},
  //     views: 400,
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _created_at:new Date(),
  //     author: { _id: 1  , name :"khaled hamdy"},
  //     views: 400,
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://images.unsplash.com/photo-1557446772-bea6e6bf56eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

  return (
    <div>
      <Hero query={query} />

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post : any, key : any) => (
             <StartupCard post={post} key={key}/>
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
  
      </section>
      <SanityLive/>
    </div>
  );
};

export default page;
