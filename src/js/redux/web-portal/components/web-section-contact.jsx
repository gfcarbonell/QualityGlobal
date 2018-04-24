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

    constructor(...props){
        super(...props)
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }

   
    handleSubmit(e){
        e.preventDefault();
        var self = this;
        var data = {
                last_name: self.refs.last_name.value.toUpperCase(),
                name: self.refs.name.value.toUpperCase(),
                email: self.refs.email.value,
                cell_phone: self.refs.cell_phone.value,
                phone: self.refs.phone.value,
                affair:self.refs.affair.value.toUpperCase(),
                description: self.refs.description.value.toUpperCase(),
            }
        console.log(data);
    }

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
                        comentarios y sugerencias que nosotros le responderemos 
                        tan pronto como sea posible.
                    </p>
                </div>
                <div className="row padding-up-down-2">
                    <div className="col s12 m6 l5"> 
                       
                        <div className="row">
                            <fieldset>
                                <legend></legend>
                                <form className="col s12" method="post"  onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input  id="last_name" 
                                                    name="last_name"
                                                    ref="last_name"
                                                    
                                                    type="text" required className="validate"/>
                                            <label htmlFor ="last_name">Apellidos</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">person_pin_circle</i>
                                            <input  id="name" 
                                                    name="name"
                                                    ref="name"
                                                    
                                                    type="text" 
                                                    required className="validate"/>
                                            <label htmlFor ="name">Nombres</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">phone_iphone</i>
                                            <input  id="cell_phone" 
                                                    name="cell_phone"
                                                    ref="cell_phone"
                                                    type="number" 
                                                    required min="900000000" max="999999999" className="validate"/>
                                            <label htmlFor ="cell_phone">Celular</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">phone</i>
                                            <input  id="phone" 
                                                    name="phone"
                                                    ref="phone"
                                                    type="number" min="0" />
                                            <label htmlFor ="phone">Telefono</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input  id="email" 
                                                    name="email"
                                                    ref="email"
                                                    type="email" 
                                                    required className="validate"/>
                                            <label htmlFor ="email">Correo Electrónico</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <input  id="affair" 
                                                    name="affair"
                                                    ref="affair"
                                                    type="text" 
                                                    required className="validate"/>
                                            <label htmlFor ="email">Asunto</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">description</i>
                                            <textarea   id="description" 
                                                        name="description"
                                                        ref="description"
                                                        required className="materialize-textarea validate" data-length="255">
                                            </textarea>
                                            <label htmlFor ="description"> Descripción</label>
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