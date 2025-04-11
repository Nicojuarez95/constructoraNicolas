import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  location: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, location, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "5493584834859"; // Reemplazá esto con tu número de WhatsApp
    const text = `Hola, mi nombre es ${name}, soy de ${location}. Mi email es ${email} y quería consultar lo siguiente:\n\n${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    clearState();
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contactanos</h2>
                <p>
                  ¿Tenés alguna consulta o proyecto en mente? Escribinos y te responderemos lo antes posible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>

                {/* Select de ciudad */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <select
                        id="location"
                        name="location"
                        className="form-control"
                        required
                        value={location}
                        onChange={handleChange}
                      >
                        <option value="">Seleccioná tu ciudad</option>
                        <option value="Monte Hermoso">Monte Hermoso</option>
                        <option value="Bahía Blanca">Bahía Blanca</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Celular
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Todos los derechos reservados. Hecha por{" "}
            <a href="http://www.nodex.com.ar" rel="nofollow">
              nodex
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

