import React from 'react';

export default function About() {
  return (
    <div className='container text-slate-900 text-xl font-bold '>
      <h1>About Page</h1>

      <div className='rounded-full bg-slate-900 bg-contain  w-1/12' style={{backgroundImage: 'url("https://avatars.githubusercontent.com/u/125517131?v=4")'}}>
        <section></section>
      </div>
      
      <p>
        I have been working since I as 16 years old. I held just about every position you could
        think of in a restauraunt. After about 11 years or so of that I decided to change careers
        and enter the Automotive field as a technician due to my deep interest in cars. I had a fairly
        sucessful career as a mechanic but this job didnt quite fit the lifestyle I wanted to give myself
        in 2023 I entered a full stack coding bootcamp at Georgia Institute of Technology and now I
        am currently working hard on projects such as this very site youre on right now. I enjoy
        the challenges and joy this new skill brings me!
      </p>
    </div>
  );
}
