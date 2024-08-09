import React from 'react';
import Header from './ Header';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials'; // Import the new component
import Signup from './SignUp';

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeaturedArticles />
      <FeaturedTutorials /> 
    </div>
  );
};

export default HomePage;
