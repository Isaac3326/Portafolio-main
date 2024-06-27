import React from 'react';

const Contact = () => {
    return (
        <div>
            <section>
            <article id="contact" className="contact">
          <h2>Pongamonos en contacto!</h2>
          <p>Correo</p>
          <p>isaacneftali1996@gmail.com</p>
          <form action="" className="form">
            <label htmlFor="" />
            <input type="text" placeholder="Nombre" />
            <label htmlFor="" />
            <input type="text" placeholder="Email" />
            <label htmlFor="" />
            <input type="text" placeholder="Mensaje" />
            <button>Enviar <box-icon name='mail-send' color='color: #FFFFFF;'/></button>
          </form>
        </article>
        </section>
        </div>
    );
};

export default Contact;