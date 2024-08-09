import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './FeaturedTutorials.css'; 

const tutorials = [
  {
    id: 1,
    image: 'https://easydrawingguides.com/wp-content/uploads/2021/11/51-really-easy-step-by-step-drawing-tutorials-featured-image-1.png', 
    title: 'Tutorial 1',
    description: 'This is the first tutorial.',
    users: ['User1'],
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHncwYJ1G19zJDUsRzONIYMwQDHbMo5Sefig&s', 
    title: 'Tutorial 2',
    description: 'This is the second tutorial.',
    users: ['User2'],
  },
  {
    id: 3,
    image: 'https://optinmonster.com/wp-content/uploads/2017/11/Popup-Video-Featured-Image.png', 
    title: 'Tutorial 3',
    description: 'This is the third tutorial.',
    users: ['User3'],
  },
];

const FeaturedTutorials = () => {
  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-cards">
        {tutorials.map(tutorial => (
          <Card key={tutorial.id} className="tutorial-card">
            <Image src={tutorial.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{tutorial.title}</Card.Header>
              <Card.Description>{tutorial.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="users">
                {tutorial.users.join(', ')}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTutorials;
