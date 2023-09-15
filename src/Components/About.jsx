/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Hack.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  `🌐 I'm a dedicated Cybersecurity Enthusiast currently pursuing a Bachelor of Science in Computer Science at the University of Karachi-UBIT.

  🔒 My fascination with the world of cybersecurity goes beyond the classroom, where I explore the ever-evolving landscape of digital security.
  
  💡 When I'm not immersed in the world of code and cybersecurity, I enjoy painting and baking.`;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "CyberSecurity",
  "Kali Linux",
  "Python programming",
  "Artificial Intelligence",
  "Artist",
  "Pastry Chef",
  "Lead and Founder of Cyber Security Club UBIT CyberConnect",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  `I'm a passionate Cybersecurity Enthusiast with a knack for deciphering the intricate dance between data and security. My belief in cybersecurity as both a career and a responsibility drives my constant quest for innovative solutions.

  🤝 I thrive in diverse teams and firmly believe that the best solutions emerge when people with varied backgrounds and experiences collaborate.
  
  🚀 When it comes to productivity, I'm all about organization and time management. These skills help me excel in tackling real-world cybersecurity challenges.`;

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
