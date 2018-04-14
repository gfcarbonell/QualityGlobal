import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'materialize-css';
import uid from 'uid';
import {Banner} from './banner';


class ModalBody extends React.Component {

    componentDidMount(){
        $('.carousel').carousel({
            dist: 0,
            padding: 0,
            fullWidth: true,
            duration: 100,
        });
        this.autoplay();
    }

    autoplay() {
        $('.carousel').carousel('next');
        setTimeout(this.autoplay, 4500);
    }

    render (){
        return (
            <div className='modal-body' >
                <div className='modal-content '>
                    <div className='modal-content-wrapper'>
                        <Banner data={this.props.item}/>
                        <div className="carousel box-shadow-black">
                            {
                                this.props.item.galery.map((photo, index)=>{
                                    return <a key={uid(10)} className="carousel-item"> <img src={photo.src} alt={photo.alt} /> </a>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ModalBody.propTypes = {
    img: PropTypes.object.isRequired
};

ModalBody.defaultProps = {
    img:{
        src: require(`./../../../../media/images/png/Default-1.png`),
        alt: 'Image Default'
    }
};

export {ModalBody}