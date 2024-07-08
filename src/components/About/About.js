import React from "react";
import "../About/About.css";

function About() {
  return (
    <>
      {/* <header className="about-header">
        <div className="about">
          <h1>About</h1>
        </div>
      </header> */}

      <main>
        <section className="flex">
          <div className="image1"></div>
          <div className="about-info">
            <h2>
              Welcome to Food <br />
              Palace Restaurant
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi voluptatum at
              nostrum voluptatibus natus consequatur doloribus facilis reprehenderit quae eos, neque
              blanditiis iusto aut! Nam nisi optio itaque ratione.
            </p>
            <button>Explore Our Tray</button>
          </div>
        </section>
        <section className="flex flex-reverse">
          <div className="image2"></div>
          <div className="about-info">
            <h2>
              Discover our <br />
              Restaurant Story
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero similique maxime
              optio tempore eos illo laborum ipsam. Eveniet iste nobis inventore quae aperiam
              praesentium expedita architecto, eum mollitia quod similique, distinctio vero pariatur
              quaerat.
            </p>
            <button>Read More</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

