import "./Portfolio.css";

import IMG1 from "../../assets/Currency-Converter.png";
import IMG2 from "../../assets/Quiz_App.png";
import IMG3 from "../../assets/Star_Rating.png";
import IMG4 from "../../assets/Password_Generator.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    
    {
      id: 1,
      title: "Currency Converter",
      img: IMG1,
      description: "Currency Converter with React JS and Tailwind CSS",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://currency-converter-lime-five.vercel.app/",
      github: "https://github.com/sutartejas/currency-converter",
    },
    {
      id: 2,
      title: "Quiz App",
      img: IMG2,
      description: "Quiz app for taking and creating MCQ's based quizzes using ReactJS.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://quiz-app-flame-chi.vercel.app/",
      github: "https://github.com/sutartejas/quiz-app",
    },
    {
      id: 3,
      title: "Star Rating App",
      img: IMG3,
      description: "Simple Star Rating React Component.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://star-rating-cyan.vercel.app/",
      github: "https://github.com/sutartejas/star-rating",
      
    },
    {
      id: 4,
      title: "Password Generator",
      img: IMG4,
      description: "Password Generator is an application to generate a strong password.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://password-generator-eight-sepia.vercel.app/",
      github: "https://github.com/sutartejas/password-generator",
      
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
