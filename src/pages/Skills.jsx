import React, { useEffect, useRef } from "react";

import c from "/src/assets/tech/clogo.png";
import cpp from "/src/assets/tech/cpplogo.png";
import css from "/src/assets/tech/csslogo.png";
import github from "/src/assets/tech/githublogo.png";
import git from "/src/assets/tech/gitlogo.png";
import go from "/src/assets/tech/Go.png";
import haskell from "/src/assets/tech/Haskell.png";
import html from "/src/assets/tech/htmllogo.png";
import js from "/src/assets/tech/jslogo.png";
import jupyter from "/src/assets/tech/Jupyter.png";
import linux from "/src/assets/tech/Linux.png";
import python from "/src/assets/tech/Python.png";
import reactLogo from "/src/assets/tech/reactlogo.png";

function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { img: html, alt: "HTML" },
    { img: css, alt: "CSS" },
    { img: js, alt: "JavaScript" },
    { img: python, alt: "Python" },
    { img: cpp, alt: "C++" },
    { img: c, alt: "C" },
    { img: go, alt: "Go" },
    { img: haskell, alt: "Haskell" },
    { img: reactLogo, alt: "React" },
    { img: git, alt: "Git" },
    { img: github, alt: "GitHub" },
    { img: linux, alt: "Linux" },
    { img: jupyter, alt: "Jupyter Notebook" },
  ];

  return (
    <section className="skills-page" id="skills">
      <div className="skills-content">
        <h2>Tech Stack</h2>

        <div className="skills-grid">
          {techStack.map((tech, index) => (
            <div
              className="skill-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={tech.img} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
