
import type { NextPage } from 'next'; 



const Home: NextPage = () => {
  return (
    <div className='font-mainfont text-th-fonting'>

      <h1 className='text-5xl text-center mt-8 sm-text-xl'>Hi, I'm Brian Swanberg.
      <br/>
      <br/>
      <br/>
      </h1>

      <p className='mx-[15%] text-xl sm-text-m'>
          I'm a data scientist and software engineer interested in leveraging data to help improve quality of life, whether it would be through biotechnology or education. 
          <br/>
          <br/>
          Previously I double-majored in Data Science and Biology at Minerva University, an innovative university where students typically study in 7 countries over 4 years.
          <br/>
          <br/>
          
          Currently, I'm building <a href="reworded.io"><span className="font-dyslexia text-reworded">reworded</span> </a>, the premier AI-based reading comprehension assistant.
          <br/>
          <br/>
          My goal: improve the quality of life of 1 million people by May 2031.

          <br/>
          <br/>
      </p>

    </div>
  );
};

export default Home;