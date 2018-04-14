import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css';
import {MediaBox} from 'react-materialize'


class Logo extends React.Component {
    render (){
        let img = (this.props.img!==null || this.props.img!==undefined) ? this.props.img:this.propTypes.img;
        return (
            <figure className='logo'>
              <MediaBox src={img.src} caption={img.alt}/>
            </figure>
        )
    }
}

Logo.propTypes = {
    img: PropTypes.object.isRequired
};

Logo.defaultProps = {
    img:{
        src: require(`./../../../../media/images/png/Default-1.png`),
        alt: 'Image Default'
    }
};

export {Logo}