import Hero from "../components/Hero";
import StartupCard, { StartupCardSkeleton, StartupTypeCard } from "../components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Suspense } from "react";


const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const params = {search : query || null};

  const {data : posts} = await sanityFetch({query : STARTUPS_QUERY , params});

  return (
    <div>
      <Hero query={query} />


      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : `All Startups`}
        </p>

        <Suspense fallback={<StartupCardSkeleton />}>
          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupTypeCard) => <StartupCard post={post} key={post._id} />)
            ) : (
              <p className="no-result">No startups found</p>
            )}
          </ul>
        </Suspense>
  
      </section>
      <SanityLive/>
    </div>
  );
};

export default page;
