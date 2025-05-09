
import SearchForm from "@/app/components/SearchForm"
const Hero = ({query} : {query ?: string}) => {
  
  

  return (
    <section className="pink_container">
      <h1 className="heading">
      Pitch Your Startup, <br />
      Connect with Entrepreneurs
      </h1>

      
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual 
        Competitions
      </p>
      <SearchForm query={query}/>
    </section>
  );
};

export default Hero;


