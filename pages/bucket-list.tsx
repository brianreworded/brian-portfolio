
import type { NextPage } from 'next';



const BucketList: NextPage = () => {
  return (
    <div className='font-mainfont text-th-fonting'>

      <h1 className='text-5xl text-center mt-8'>Bucket List
      <br/>
      <br/>

      </h1>

      <p className= 'text-xl text-center'> Most of my bucket list was achieved during college (Thank you Minerva!)</p>

      



      <div className='mx-[15%] mt-6 text-xl'>
      <ul>
        <li className='mt-3 line-through'> &bull; Go outside the United States</li>
        <li className='mt-3 line-through'> &bull; See the Sequoia trees</li>
        <li className='mt-3'> &bull; Visit Jerusalem</li>  
        <li className='mt-3 line-through'> &bull; See Coldplay live in concert</li>
        <li className='mt-3'> &bull; Spend a week in Goiânia</li>
        <li className='mt-3 line-through'>&bull; Live in Korea</li>
        <li className='mt-3 line-through'>&bull; Live vegan and largely sugar-free for 10 days</li>
        <li className='mt-3 line-through'>&bull; Visit the Great Pyramid of Giza (inspired by <span className='italic'>The Alchemist</span>)</li>
        <li className='mt-3'> &bull; Explore Istanbul with friends from Minerva</li>   
        <li className='mt-3'> &bull; Fly to Pakistan for a friend&apos;s wedding</li>   
        <li className='mt-3 line-through'>&bull; Stay in a foreign country where most people do not speak the language and I know no one for more than a week </li>
        <li className='mt-3 '> &bull; Learn the song &ldquo;O&rdquo; on piano</li>
        <li className='mt-3 line-through'>&bull; Walk inside the Library of Alexandria</li>
        <li className='mt-3'>&bull; Become a professional pickleball player</li>
        <li className='mt-3 line-through'>&bull; Try ice cream and pizza in Italy</li>
        <li className='mt-3'> &bull; Re-create the best chicken shawarma from Hyderabad</li>  
        <li className='mt-3'>&bull; Become pescatarian</li>
        <li className='mt-3 '> &bull; Become fluent in Spanish</li>
        <li className='mt-3 '> &bull; Celebrate the miracle that is life at Machu Picchu</li>
      </ul>

      </div>
      <br/>

    </div>
  );
};

export default BucketList;
