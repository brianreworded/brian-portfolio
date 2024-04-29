import type { NextPage } from 'next';

const StartupLessons: NextPage = () => {
  return (
    <div className='font-mainfont text-th-fonting'>

      <h1 className='text-5xl text-center mt-8'>Startup Lessons
      <br/>
      <br/>

      </h1>

      <p className= 'text-xl text-center mx-[15%]'>When I interned at Second Time Founders, I learned about how important leading a company is, how many mistakes first-time founders make, and how that all impacts both their companies and themselves.
      </p>
      <p className= 'text-xl text-center mx-[15%] mt-6'>
      Some lessons I learned were easier, some lessons were harder, and some lessons I still process. There are many more valuable startup life experiences for it on the internet. These are a just a few that I wear on my sleeve and take with me.
      </p>
      



      <div className='mx-[15%] mt-6 text-xl'>
      <ul>
        <li className='mt-3'> &bull; Every meeting should have next steps.</li>
        <li className='mt-3'> &bull; UX Design mean much more than people believe it does.</li>
        <li className='mt-3'> &bull; Work on maximizing your ability to explain ideas within 30 seconds. </li>
        <li className='mt-3'> &bull; Founders should be very generous in equity compensation to early employees.</li>
        <li className='mt-3'> &bull; Especially in early stages, minimize time before new learnings. Feedback is super important.</li>
        <li className='mt-3'> &bull; Employees for the company are painters for the original vision. When the original vision changes, employees need to paint over the canvas. Founders having a clear vision and communicating that vision time and time again is everything.</li>
      </ul>

      </div>
      <br/>

    </div>
  );
};

export default StartupLessons;
