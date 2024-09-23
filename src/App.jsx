import React from 'react';
import ResourceCard from './components/ResourceCard';
import './App.css'; 

const sections = [
  {
    title: "Python Resources",
    resources: [
      {
        title: "Python Basics",
        description: "A comprehensive guide to Python programming.",
        link: "https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/"
      },
      {
        title: "Advanced Python",
        description: "Deep dive into advanced Python concepts.",
        link: "https://pythonistaplanet.com/advanced-python/",
      },
      {
        title: "Python Data Science",
        description: "Learn Python for data science applications.",
        link: "https://www.geeksforgeeks.org/python-for-data-science/"
      }
    ]
  },
  {
    title: "Web Development Resources",
    resources: [
      {
        title: "HTML & CSS Crash Course",
        description: "Learn HTML and CSS for building web pages.",
        link: "https://www.browserstack.com/guide/build-a-website-using-html-css"
      },
      {
        title: "JavaScript Basics",
        description: "Introduction to JavaScript programming.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
      },
      {
        title: "Responsive Design",
        description: "Create responsive websites with CSS.",
        link: "https://www.w3schools.com/css/css_rwd_intro.asp"
      }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    resources: [
      {
        title: "Introduction to Algorithms",
        description: "Fundamentals of algorithms and data structures.",
        link: "https://hackernoon.com/a-beginners-guide-to-data-structures-and-algorithms"
      },
      {
        title: "Data Structures Overview",
        description: "Learn about various data structures.",
        link: "https://www.geeksforgeeks.org/data-structures/"
      },
      {
      title: "Tips to Solving DSA Interviews",
      description: "Learn how to approach and solve challenges in software development interviews.",
      link: "https://moldstud.com/articles/p-how-to-approach-and-solve-algorithmic-challenges-in-software-development-interviews#:~:text=Strategies%20for%20Success-,1.,common%20algorithms%20and%20data%20structures."
      },
      {
        title: "Algorithmic Challenges",
        description: "Practice algorithmic challenges and improve problem-solving skills.",
        link: "https://leetcode.com/"
      }
    ]
  }
];

const App = () => {
  return (
    <div className="app">
      <h1>Software Engineering Resources for Beginners</h1>
      {sections.map((section, index) => (
        <section className="resource-section" key={index}>
          <h2>{section.title}</h2>
          <div className="resource-grid">
            {section.resources.map((resource, i) => (
              <ResourceCard
                key={i}
                title={resource.title}
                description={resource.description}
                link={resource.link}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;
