import { client } from "@/sanity/lib/client";
import StartupCard from "./StartupCard";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";

const UserStartups = async ({ id }: { id: string }) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
    
    
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup : any) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};

export default UserStartups;

// {
//     _id: '0hVj8qS3i8vEk4KBoHtbX0',
//     slug: { current: 'new', _type: 'new' },
//     views: 0,
//     description: 'new new new',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s',
//     title: 'new',
//     _createdAt: '2025-03-20T07:23:49Z',
//     author: {
//       _id: '152563513',
//       name: 'kh1aled',
//       image: 'https://avatars.githubusercontent.com/u/152563513?v=4',
//       bio: '',
//       username: 'kh1aled'
//     },
//     category: 'new',
//     pitch: 'Test'
//   }
