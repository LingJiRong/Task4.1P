import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import Header from './header';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Signup from './SignUp';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div>
    <Header />
    <FeaturedArticles />
    <div className="button-container">
      <button className="custom-button">See all articles</button>
    </div>
    <FeaturedTutorials />
    <div className="button-container">
      <button className="custom-button">See all articles</button>
    </div>
    <Signup />
    <Footer />
    </div>


);
