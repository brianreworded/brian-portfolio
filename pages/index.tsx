
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
          I&apos;m a data scientist interested in leveraging data to help improve quality of life. I have a product-oriented focus, and in the past, I have focused on innovations that quantify natural language.
          <br/>
          <br/>
          Currently, I&apos;m an AI Engineer at <a href="https://www.quantified.ai" className='text-th-fontingsecondary hover:text-reworded'>Quantified</a>, building on a vision I had with a project, <a href="https://jumpmail.vercel.app" className='text-th-fontingsecondary hover:text-reworded'>Jumpmail</a>.
          <br /> <br />
          Previously, I spearheaded data science development at a seed stage startup, <a href="https://unlocked.microsoft.com/mentra-neuroinclusion/" className='text-th-fontingsecondary hover:text-reworded'>Mentra</a>, trying to help tap into the potential of neurodivergents. Prior, before the world of ChatGPT, I built <a href="https://www.reworded.io"><span className="font-dyslexia text-reworded hover:text-th-fontingsecondary">reworded</span></a>, the premier AI-based reading comprehension assistant, and a <a href="https://www.reduction.ai" className='text-th-fontingsecondary hover:text-reworded'>site for auto-generated Sparknotes</a>.
        <br/>  
        <br/>
        I&apos;m a proud alum of the innovative and global university, <a href="https://www.minerva.edu/undergraduate-program/" className='text-th-fontingsecondary hover:text-reworded'> Minerva</a>, where I studied biology and data science.
        <br/>
        <br/>
          My current end goal: improve the quality of life of 1 million people by May 2031.

          <br/>
          <br/>
      </p>

    </div>
  );
};

export default Home;
