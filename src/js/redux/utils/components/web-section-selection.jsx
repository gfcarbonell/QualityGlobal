import React from "react";
import $ from "jquery";
import "materialize-css";
import uid from 'uid'
import {Welcome} from './welcome';

import {WebSectionSelectionItem} from './web-section-selection-item';
import {WebSectionSelectionItemModal} from './web-section-selection-item-modal';


class WebSectionSelection extends React.Component {
    componentDidMount(){
        $('.modal').modal();
    }

    render (){
        
        return (
            <div>
                <Welcome message={"Nuestros Servicios:"} />
                <div className="services">
                    {
                        this.props.items.map((item, index)=>{
                            return  (
                                <div key={uid(10)} className='wrapper-modal'>
                                    <WebSectionSelectionItem item={item} />
                                    <WebSectionSelectionItemModal head={this.props.head} item={item} style={this.props.style} />
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
      )
    }
}

export {WebSectionSelection}