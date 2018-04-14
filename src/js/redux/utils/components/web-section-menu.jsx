import React from 'react';
import {Welcome} from '../../utils/components/welcome'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


class WebSectionMenu extends React.Component {

  render (){
    return (
        <div>
            <Welcome message={"Bienvenidos"}/>
            <div className="section-menu padding-up-down-2">
                <article className="section-menu-item">
                  <div className="center section-menu-item-content">
                    <Fade left>
                        <img src={this.props.images.left.src} alt={this.props.images.left.alt}/>
                    </Fade>
                    <Zoom top cascade>
                        <div className="padding-up-down-1">
                            <h4 className="text-weight-bold">Enfocado al Usuario</h4>
                        </div>
                        <div>
                            <p className="light center padding">
                                  Profesionales altamente <strong> Competentes y Capacitados </strong>,
                                  nos permiten dar el máximo nivel de Calidad en los
                                  servicios que brindamos.
                            </p>
                        </div>
                    </Zoom>
                  </div>
                </article>
                <article className="section-menu-item">
                  <div className="center section-menu-item-content">
                    <Fade top>
                        <img className="" src={this.props.images.center.src} alt={this.props.images.center.alt}/>
                    </Fade>
                    <Zoom top cascade>
                        <div className="padding-up-down-1">
                            <h4 className="text-weight-bold">Acelera el desarrollo</h4>
                        </div>
                        <div>
                            <p className="light center padding">
                                Amplia Experiencia en el campo <strong> Gubernamental y Empresarial </strong> que nos permite comprender
                                los procesos administrativos y estar un paso adelante al plantear soluciones innovadoras y
                                efectivas.
                            </p>
                        </div>
                    </Zoom>
                  </div>
                </article>
                <article className="section-menu-item">
                  <div className="center section-menu-item-content">
                    <Fade right>
                        <img className="" src={this.props.images.right.src} alt={this.props.images.right.alt}/>
                    </Fade>
                    <Zoom top cascade>
                        <div className="padding-up-down-1">
                            <h4 className="text-weight-bold">Fácil de trabajar</h4>
                        </div>
                        <div>
                            <p className="light center padding">
                                  Sistema de Coaching (entrenamiento) en Gestión Pública que permite
                                  una transferencia de  conocimiento teórico Practico a los funcionarios
                                  en su respectivo centro de trabajo <strong> "Haciendo - Aprendo" </strong>.
                            </p>
                        </div>
                    </Zoom>
                  </div>
                </article>
            </div>
        </div>
    )
  }

}
export {WebSectionMenu}
