import React from 'react';
//import $ from 'jquery';
import 'materialize-css';
import {ModalHeader} from './modal-header';
import {ModalBody} from './modal-body';



class WebSectionSelectionItemModal extends React.Component {
    
    render (){
        let id = this.props.item.title.replace(/\s/g,"-").toLowerCase().trim();
        
        return (
            <article id={id} className='modal modal-fullscreen'>
                <ModalHeader head={this.props.head} style={this.props.style}/>
                <ModalBody item={this.props.item}   />               
            </article>
        )
    }

}

export {WebSectionSelectionItemModal}