import React from "react";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const image1 = "https://itpropartners.com/blog/wp-content/uploads/2016/03/Fotolia_52402403_Subscription_Monthly_M.jpg";
const image2 = "http://www.intac-edu.com/sites/default/files/architecture-reseau.jpg";
const image3 = "https://3.bp.blogspot.com/-o03iQ6O_Udo/WZL3D94lUGI/AAAAAAAAMSY/DORdGwnEIKQBrDYQ1QJC5Vg1Iw5ivpTXgCLcBGAs/s640/Contabilidad%2By%2Basesor%25C3%25ADa%2Bpara%2Bagencias%2Bde%2Bviajes.jpg";
const image4 = "https://www.esan.edu.pe/apuntes-empresariales/2016/04/19/mercadofinanciero_principal.jpg";


class WebParallax extends React.Component {
  render() {
      return (
        <div style={styles}>

          <Parallax bgImage={image1} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text text-shadow-black font-weight-bold"> Quiénes somos</h3>
                  <p className="white-text text-shadow-black">
                      <strong> Quality Global</strong>, es una empresa moderna y de calidad dedicada a la Asesoría,
                      Consultoría y Capacitación en el ámbito de la Gestión Publica y Empresarial,
                      con amplia experiencia, capacidad, efectividad y competitividad de nuestro personal.
                  </p>
              </div>
            </div>
          </Parallax>

          <Parallax bgImage={image3} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text text-shadow-black font-weight-bold"> Misión </h3>
                  <p className="white-text text-shadow-black">
                      Brindar servicios con <strong> Alta Calidad</strong>, planteando soluciones innovadoras y eficientes,
                      superando las expectativas de nuestros clientes.
                  </p>
              </div>
            </div>
          </Parallax>

          <Parallax bgImage={image2} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text text-shadow-black font-weight-bold"> Visión </h3>
                  <p className="white-text text-shadow-black">
                      Ser una Empresa Líder en Asesoría, Consultoría y
                      Capacitación en Gestión Publica y Empresarial.
                  </p>
              </div>
            </div>
          </Parallax>


          <Parallax bgImage={image4} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text text-shadow-black font-weight-bold"> Nuestros Valores </h3>
                  <ul className="white-text text-shadow-black">
                      <li className='' >
                          Confianza
                      </li>
                      <li>
                        Honestidad
                      </li>
                      <li>
                        Integridad
                      </li>
                      <li>
                        Confidencialidad
                      </li>
                      <li>
                        Ética Profesional
                      </li>
                      <li>
                        Responsabilidad
                      </li>
                      <li>
                        Calidad y Garantía.
                      </li>
                  </ul>
              </div>
            </div>
          </Parallax>
        </div>
      )
  }
}

export {WebParallax}
