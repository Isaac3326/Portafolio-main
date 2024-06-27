import "./App.css";
import { useEffect } from "react";
import ScrollMagic from 'scrollmagic'
import Technologies from "./components/Technologies";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MenuPlegable from "./components/MenuPlegable";

function App() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: '.animated-element',
      offset: -400 
    })
    .setClassToggle('.animated-element', 'show')
    .addTo(controller);
  }, []);

  return (
    <div className="background">

        <MenuPlegable/>
      <section>
          <article id="home"> 
            <Presentation />
          </article>
      </section>
      <section>
        <article id="aboutMe" className="aboutme">
          <h2 className="animated-element">Sobre Mi</h2>
            <div className="about-me">
              <p>
                ¡Hola! Soy Isaac, tengo 28 años y soy Web Developer FullStack Dominicano con
                una alta capacidad de adaptabilidad y aprendizaje, me encantan los
                retos, las cosas complejas y los deportes. Descubrí mi pasión por el
                diseño y la programación así que me encuentro constantemente
                aprendiendo cosas nuevas dentro de la industria.
              </p>
            </div>
          <Technologies/>
        </article>
        <article>
          <Projects/>
        </article>
        <article>
          <Contact/>
        </article>
      </section>
    </div>
  );
}

export default App;
