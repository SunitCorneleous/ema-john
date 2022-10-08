import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Ema-john e-commerce</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad distinctio
        repellat mollitia delectus dicta eligendi! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Distinctio repellat optio, architecto
        deleniti quibusdam exercitationem.
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
