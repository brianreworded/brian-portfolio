
import type { NextPage } from 'next'; 



const Home: NextPage = () => {
  return (
    <div className='font-mainfont text-th-fonting'>

      <h1 className='text-5xl text-center mt-8 sm-text-xl'>Hi, I&apos;m Brian Swanberg.
      <br/>
      <br/>
      <br/>
      </h1>

      <p className='mx-[15%] text-xl sm-text-m'>
          I&apos;m a data scientist and software engineer interested in leveraging data to help improve quality of life, whether through biotechnology, health care, or education. I have a product-oriented focus, and recently, I have focused on innovations that quantify natural language.
          <br/>
          <br/>
          Previously I double-majored in Data Science and Biology at <a href="https://www.minerva.edu/undergraduate-program/" className='text-th-fontingsecondary hover:text-reworded'> Minerva University</a>, an innovative college where students typically study in 7 countries over 4 years.
          <br/>
          <br/>
          
          Currently, I&apos;m building <a href="https://www.reworded.io"><span className="font-dyslexia text-reworded hover:text-th-fontingsecondary">reworded</span> </a>, the premier AI-based reading comprehension assistant. I also created other products, like a <a href="https://reduction.lol" className="text-th-fontingsecondary hover:text-reworded">multilingual text shortener</a> for ESL college students and a <a href="https://nointextcitations.herokuapp.com/" className="text-th-fontingsecondary hover:text-reworded">specialized word counter</a> for my college classmates at Minerva.
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
