import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'materialize-css';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


class Banner extends React.Component {
    componentDidMount(){
        $('.collapsible').collapsible();
    }

    render (){
        let banner = (this.props.data.banner)? this.props.data.banner:this.propTypes.banner;
        let title = (this.props.data.title)? this.props.data.title: "cargando...";
        let description = (this.props.data.description)? this.props.data.description: "cargando...";
        return (  
            <div>
                <figure className='banner'>
                    <div className='banner-wrapper'>
                        <Bounce top>
                            <img className='z-depth-4' src={banner.src} alt={banner.alt}/>
                        </Bounce>
                    </div>
                    <figcaption>
                        <Zoom>
                            <h5 className="center-align white-text text-shadow-black font-weight-bold">
                                {title}
                            </h5>
                        </Zoom>
                        <Zoom left>
                            <p>
                                {description}
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
                                            this.props.data.services.map((service, item)=>{
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
        )
    }
}

Banner.propTypes = {
    img: PropTypes.object.isRequired
};

Banner.defaultProps = {
    img:{
        src: require(`./../../../../media/images/png/Default-1.png`),
        alt: 'Image Default'
    }
};

export {Banner}