import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css';
import {MediaBox} from 'react-materialize'


class ModalHeader extends React.Component {
    
    render (){
        let title = (this.props.head.title)? this.props.head.title:this.propTypes.title;
        let img = (this.props.head.logo1!==null || this.props.head.logo1!==undefined)? this.props.head.logo1 :this.propTypes.img;
        return (
            <div className="modal-nav border-bottom-white-1 z-depth-4" style={this.props.style}>
                <div className="modal-nav-buttom">
                    <a className="modal-action modal-close white-text waves-effect waves-light waves-green btn-flat center-align text-shadow-black">
                        <i className="material-icons left large">chevron_left</i>
                        Atrás
                    </a>
                </div>
                <div>
                    <h2 className="white-text text-shadow-black text-weight-bold">
                        {title}
                    </h2>
                </div>
                <figure>
                    <MediaBox src={img.src} caption={img.alt} />
                </figure>
            </div>
        )
    }
}

ModalHeader.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired
};

ModalHeader.defaultProps = {
    title:'Title Default',
    img:{
        src: require(`./../../../../media/images/png/Default-1.png`),
        alt: 'Image Default'
    }
};

export {ModalHeader}