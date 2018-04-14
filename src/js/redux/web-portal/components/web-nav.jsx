import React from 'react';
import $ from 'jquery';
import 'materialize-css';
import {Link} from "react-router-dom";


class WebNav extends React.Component {
    
    componentDidMount(){
        $('.button-collapse').sideNav();
        $('#navbar').pushpin({
            top: $('#navbar').offset().top
        });
    }

    render (){
        return (
            <div id="wrapper_navbar">
                <nav id="navbar" className="pushpin-demo-nav z-depth-4 padding-left-right-2 border-bottom-white-1" style={this.props.style}>
                    <div className="nav-wrapper">
                        <a href="#!" id="brand_logo" className="brand-logo text-shadow-black" >Quality Global</a>
                        <a href="#!" data-activates="mobile-demo" className="button-collapse text-shadow-black"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down text-shadow-black">
                            <li> 
                                <Link to="/">
                                    <i className="material-icons left">home</i>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios">
                                    <i className="material-icons left">work</i>
                                    Servicios
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/cursos">
                                    <i className="material-icons left">book</i>
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link to="/quienes-somos">
                                    <i className="material-icons left">assessment</i>
                                    Quienes Somos
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactanos">
                                    <i className="material-icons left">business</i>
                                    Contáctanos
                                </Link>
                            </li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li>
                                <Link to="/">
                                    <i className="material-icons left">home</i>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios">
                                    <i className="material-icons left">work</i>
                                    Servicios
                                </Link>
                            </li>
                           
                            <li>
                                <Link to="/cursos">
                                    <i className="material-icons left">book</i>
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link to="/quienes-somos">
                                    <i className="material-icons left">assessment</i>
                                    Quienes Somos
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactanos">
                                    <i className="material-icons left">business</i>
                                    Contáctanos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>     
            </div>   
        )
    }
}
export {WebNav}