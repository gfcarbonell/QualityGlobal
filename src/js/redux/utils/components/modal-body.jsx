import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'materialize-css';
import uid from 'uid';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

class ModalBody extends React.Component {

    componentDidMount(){
        $('.carousel').carousel({
            dist: 0,
            padding: 0,
            fullWidth: true,
            duration: 100,
        });
        this.autoplay();
        $('.collapsible').collapsible();
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
                        <div>
                            <figure className='banner'>
                                <div className='banner-wrapper'>
                                    <Bounce top>
                                        <img className='z-depth-4' src={this.props.item.img.src} alt={this.props.item.img.alt}/>
                                    </Bounce>
                                </div>
                                <figcaption>
                                    <Zoom>
                                        <h5 className="center-align white-text text-shadow-black font-weight-bold">
                                            {this.props.item.title} 
                                        </h5>
                                    </Zoom>
                                    <Zoom left>
                                        <p>
                                            {this.props.item.description}
                                        </p>
                                    </Zoom>
                                </figcaption>
                                <Zoom right>
                                    <ul className='collapsible box-shadow-black'>
                                        <li>
                                            <div className='collapsible-header waves-effect waves-light light-green darken-1 white-text text-shadow-black'>
                                                <i className='material-icons left white-text'>assignment</i>
                                                Nuestros Servicios Incluyen:
                                            </div>
                                            <div className='collapsible-body'>
                                                <ul>
                                                    {
                                                        this.props.item.services.map((service, item)=>{
                                                            let href = '#' + service.id;
                                                            return(
                                                                <Slide key={service.id}>
                                                                    <li className='carousel-item' href={href} >
                                                                        <i className='material-icons green-text left'>check</i>
                                                                        {service.description}
                                                                    </li>
                                                                </Slide>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </Zoom>
                                                    
                            </figure>
                            
                        </div>
                       
                        
                        <div className="carousel box-shadow-black">
                            {
                                this.props.item.galery.map((photo, index)=>{
                                    return <a key={uid(12)} className="carousel-item"> <img src={photo.src} alt={photo.alt} /> </a>
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