
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
          I&apos;m a data scientist and software engineer interested in leveraging data to help improve quality of life. I have a product-oriented focus, and recently, I have focused on innovations that quantify natural language.
          <br/>
          <br/>
          Previously I double-majored in Data Science and Biology at <a href="https://www.minerva.edu/undergraduate-program/" className='text-th-fontingsecondary hover:text-reworded'> Minerva University</a>, an innovative college where students typically study in 7 countries over 4 years.
          <br/>
          <br/>
          
          Currently, I&apos;m spearheading data science development at <a href="https://www.mentra.me" className='text-th-fontingsecondary hover:text-reworded'>Mentra</a>, whose mission is to tap into the potential of 1 billion neurodivergents worldwide. I&apos;m also building a premium multilingual text shortener in stealth, which is currently under a test period in schools. Previously I created <a href="https://www.reworded.io"><span className="font-dyslexia text-reworded hover:text-th-fontingsecondary">reworded</span> </a>, the premier AI-based reading comprehension assistant, along with many other NLP-focused or decision-inference applications. 
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
