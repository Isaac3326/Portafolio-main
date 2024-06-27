import React, { useEffect } from "react";

function AnimatedComponent() {
  useEffect(() => {
    const animatedElement = document.querySelector(".animated-element");

    function handleScroll() {
      const bounding = animatedElement.getBoundingClientRect();
      if (bounding.top < window.innerHeight * 0.8) {
        animatedElement.classList.add("show");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="animated-element">Contenido animado</div>;
}

export default AnimatedComponent;
