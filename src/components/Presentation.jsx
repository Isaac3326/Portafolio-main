import React from "react";
import Typewriter from "typewriter-effect";

const Presentation = () => {
  return (
    <div className="card-presentation">
      <div>
        <Typewriter
          options={{
            strings: ["Hola! ", "Hello! ", "Isaac! "],
            autoStart: true,
            loop: true,
          }}
        />
        <h1>Soy Isaac Moya.</h1>
      </div>
      <p className="developer">Desarrollador Web Full Stack</p>
      <div>
        <a
          href="https://www.linkedin.com/in/isaac-moya-polanco/"
          target="_blank"
        >
          <button>Linkedln</button>
        </a>
        <a href="https://github.com/Isaac3326" target="_blank">
          <button>Github</button>
        </a>
      </div>
    </div>
  );
};

export default Presentation;
