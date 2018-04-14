import React from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const MyMapComponent = compose(
    withProps({
      /**
       * Note: create and replace your own key in the Google console.
       * https://console.developers.google.com/apis/dashboard
       * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
       */
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdiSvKx8q8GyTixvDhEJSiNhqSsCbRKRU",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat: -14.069464, lng: -75.736647 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -14.069464, lng: -75.736647 }} />
      )}
    </GoogleMap>
  ));

class WebSectionContact extends React.Component {
    render (){
       
        return (
            <div>
                <div className="padding">
                    <h4 className="white-text text-shadow-black font-weight-bold padding"> 
                    Comuniquese con nosotros de una manera rápida
                    </h4>
                    <p className="sub-border background-red">

                    </p>
                    <p className="border-bottom-red-2">
                    </p>
                    <p className="padding"> 
                        Nuestra relación con usted significa mucho para nosotros y nos 
                        gustaría saber como estamos haciendo nuestro trabajo, 
                        por favor tome un momento para enviarnos sus preguntas, 
                        comentarios y sugerencias, que nosotros le responderemos 
                        tan pronto como sea posible.
                    </p>
                </div>
                <div className="row padding-up-down-2">
                    <div className="col s12 m6 l5"> 
                       
                        <div className="row">
                            <fieldset>
                                <legend></legend>
                                <form className="col s12" method="post" action="/">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="name" type="text" required className="validate"/>
                                            <label htmlFor ="name">Apellidos</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">person_pin_circle</i>
                                            <input id="name" type="text" required className="validate"/>
                                            <label htmlFor ="name">Nombres</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">phone_iphone</i>
                                            <input id="cell_phone" type="number" required min="900000000" max="999999999" className="validate"/>
                                            <label htmlFor ="cell_phone">Celular</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">phone</i>
                                            <input id="phone" type="number" min="0" />
                                            <label htmlFor ="phone">Telefono</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input id="email" type="email" required className="validate"/>
                                            <label htmlFor ="email">Correo Electrónico</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <textarea id="description" required className="materialize-textarea validate" data-length="255">
                                            </textarea>
                                            <label htmlFor ="textarea2"> Descripción</label>
                                        </div>
                                    </div>
                                    <div className="row right">
                                        <div className="input-field col s12">
                                            <button className="btn red waves-effect waves-light" type="submit" name="action">Enviar.
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </fieldset>   
                        </div>                       
                    </div>
                    <div className="col s12 m6 l7"> 
                        
                        <MyMapComponent isMarkerShown />
                    </div>
                </div>
            </div>
        )
    }
}


export {WebSectionContact}