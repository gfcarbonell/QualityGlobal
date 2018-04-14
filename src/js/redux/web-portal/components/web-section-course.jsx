import React from 'react';
import $ from 'jquery';
import 'materialize-css';
import {Welcome} from '../../utils/components/welcome';

var img1 = "http://www.infoarequipa.com/clasificados/oc-content/uploads/4/925.png";

class WebSectionCourse extends React.Component {
    componentDidMount(){
        $('.collapsible').collapsible();
        $('ul.tabs').css({width:"100%"}).tabs({
            swipeable : true,
            
         });
    }
    render (){
        return (
            <div className="courses">
                <Welcome message={"Nuestros Cursos:"} />
                <div className="panel row" id="panel_course">
                    <div className="panel-left col s12 m4 l3"> 
                        <figure className="panel-left-banner">
                            <img src={img1} alt="" />
                        </figure>
                        <ul className="panel-left-items collapsible">
                            <li className="panel-left-items-item" >
                                <figure className="panel-left-items-item-header waves-effect waves-light collapsible-header">
                                    <div className="panel-left-items-item-header-logo">
                                        <img src={img1}/>
                                    </div> 
                                </figure>
                                <div className="collapsible-body ">
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>
                            </li>
                            
                        </ul>
                        
                    </div>
                    <div className="panel-right  col s12 m8 l9"> 
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <br/> <br/> <br/>
                    </div>      
                </div> 
            </div>
        )
    }
}


export {WebSectionCourse}