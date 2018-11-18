import React from 'react';
import PageLayout from './PageLayout';
import photo from '../images/tamal-anwar.jpg';

const Home = () => {
  return (
    <PageLayout title="Tamal Anwar's Website">
      <p>Hello there, this is my website.</p>
      <img
        src={photo}
        width="300px"
        alt="Tamal Anwar in 2018"
        className="alignright"
      />
      <p>
        I am a full stack web developer, specializing in JavaScript. I write and
        share my JavaScript journey over here.
      </p>
      <p>
        As you can tell, this site is currently under construction, so please
        feel free to check back often.
      </p>
      <p>
        Now you can go to the <a href="/blog">blog section</a> and start reading
        my thoughts.
      </p>
    </PageLayout>
  );
};

export default Home;
