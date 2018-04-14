import React from "react";
import $ from "jquery";
import "materialize-css";


class WebSlider extends React.Component {

    componentDidMount(){
        $(".slider").slider({height: "100vh"});
    }

    render (){
        /*
            Move intro -> Caption
        */
        const moveCaption = [
            'caption center-align text-shadow-black', 'caption right-align text-shadow-black', 'caption left-align text-shadow-black'
        ]
        
        return (
            <div className="slider"  style={{height:"100vh"}}>
                <ul className="slides">
                    {
                        this.props.sliders.map((slider, index)=>{
                            return (
                                <li key={slider.id}>
                                    <img src={slider.img.src} alt={slider.img.alt}/>
                                    <div className={moveCaption[index]}>
                                        <h3>{slider.caption}</h3>
                                        <h5 className="light grey-text text-lighten-3">
                                            {slider.slogan}
                                        </h5>
                                    </div>
                                </li>
                            )
                        })
                    }            
                </ul>
            </div>
        )
    }

}
export {WebSlider}
