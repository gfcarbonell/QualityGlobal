import React from 'react';
import $ from 'jquery';
import 'materialize-css';
import {Welcome} from '../../utils/components/welcome';
import uid from 'uid';
import {Link} from "react-router-dom";


var img1 = "http://www.infoarequipa.com/clasificados/oc-content/uploads/4/925.png";


class WebSectionCourse extends React.Component {
    
    componentDidMount(){
        $('.collapsible').collapsible();
        $('.tabs').tabs();
    }
    
    render (){
        
        return (
            <div className="courses">
                <Welcome message={"Nuestros Cursos:"} />
                <div className="panel row" id="panel_course">
                    <div className="panel-left col s12 m5 l3"> 
                        <figure className="panel-left-banner">
                            <img src={require(`./../../../../media/images/png/QG3.png`)} alt="" />
                        </figure>
                        <div>
                            <h5 className="center-align font-weight-bold">
                                Cursos
                            </h5>
                        </div>
                        <ul className="panel-left-items collapsible">
                            {
                                this.props.courses.map((course, index)=>{
                                    return(
                                        <li className="panel-left-items-item" key={uid(10)}>
                                            <figure className="panel-left-items-item-header waves-effect waves-light collapsible-header">
                                                <div className="panel-left-items-item-header-logo">
                                                    <img src={course.logo.src} alt={course.logo.alt}/>
                                                </div> 
                                            </figure>
                                            <div className="panel-left-items-item-body collapsible-body ">
                                                <ul>
                                                    {
                                                        course.modules.map((module, index)=>{
                                                            return(
                                                                <li key={uid(10)} >
                                                                    <Link to={module.url} className="black-text hover-underline">
                                                                        <i className="material-icons left green-text">done</i>
                                                                        {module.name}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="panel-right  col s12  m7 l9"> 
                        <div className="panel-right-title">
                            <h3 className="center-align font-weight-bold">
                                SIAF - MÓDULO ADMINISTRATIVO
                            </h3>
                            
                        </div>
                        <div className="row ">
                            <div className="col s12 m6 l6">
                                <div className="">
                                    <h5 className="center-align">
                                        Temario
                                    </h5>
                                </div>
                                <ul className="collapsible box-shadow-black">
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col s12 m6 l6">
                                <div>
                                    <h5 className="center-align">
                                        Incluye
                                    </h5>
                                </div>
                                <ul className="collapsible box-shadow-black">
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">
                                            <p className="font-weight-bold">
                                                <i className="material-icons left green-text">content_paste</i>
                                                First
                                            </p>
                                        </div>
                                        <div className="collapsible-body">
                                            <span >No hay Sub Temas.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <p className="padding font-weight-bold">
                                    Remitir pagos e inscripciones a las sgtes cuentas:
                                </p>
                            </div>
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s4"><a className="font-weight-bold active"  href="#test1">N° de Cuenta - 1</a></li>
                                    <li className="tab col s4"><a className="font-weight-bold" href="#test2">N° de Cuenta - 2</a></li>
                                    <li className="tab col s4 "><a className="font-weight-bold" href="#test3">N° de Cuenta - 3</a></li>                 
                                </ul>
                            </div>
                            <div id="test1" className="bank col s12">
                             
                                <ul className="bank-account">
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">account_balance</i>
                                            Banco
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            BBVA Continental
                                        </p>
                                       
                                    </li>
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">credit_card</i>
                                            Número de Cuenta
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            0011-0203-0200174015
                                        </p>
                                    </li>
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">person_pin</i>
                                            Persona
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            Cynthia Ordoñez Triveño
                                        </p>
                                    </li>
                                </ul>
                                <div className="bank-logo">
                                    <img src={img1} alt="" />
                                </div>

                            </div>
                            <div id="test2" className="bank col s12">
                            <ul className="bank-account">
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">account_balance</i>
                                            Banco
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            BBVA Continental
                                        </p>
                                       
                                    </li>
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">credit_card</i>
                                            Número de Cuenta
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            0011-0203-0200174015
                                        </p>
                                    </li>
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">person_pin</i>
                                            Persona
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            Cynthia Ordoñez Triveño
                                        </p>
                                    </li>
                                </ul>
                                <div className="bank-logo">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div id="test3" className="bank col s12">
                                <ul className="bank-account">
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">account_balance</i>
                                            Banco
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            BBVA Continental
                                        </p>
                                       
                                    </li>
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">credit_card</i>
                                            Número de Cuenta
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            0011-0203-0200174015
                                        </p>
                                    </li>
                                    <li className="bank-account-item">
                                        <p className="bank-account-item-key green-text ">
                                            <i className="material-icons left ">person_pin</i>
                                            Persona
                                            <span>
                                            :
                                            </span>
                                        </p>
                                        <p className="bank-account-item-value padding-left-2">
                                            Cynthia Ordoñez Triveño
                                        </p>
                                    </li>
                                </ul>
                                <div className="bank-logo">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>  
            </div>
        )
    }
}

export {WebSectionCourse}