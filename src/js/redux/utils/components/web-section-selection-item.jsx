import React from 'react';
import PropTypes from 'prop-types';
//import $ from 'jquery';
import 'materialize-css';
import Zoom from 'react-reveal/Zoom';


class WebSectionSelectionItem extends React.Component {

    render (){
        let img = (this.props.item.img!==null || this.props.item.img!==undefined) ? this.props.item.img:this.propTypes.img;
        let title = (this.props.item.title!==null || this.props.item.title!==undefined) ? this.props.item.title:this.propTypes.title;  
        let href = '#'+this.props.item.title.replace(/\s/g,"-").toLowerCase().trim();
       
        return (
            <Zoom left={this.props.item.position.left} top={this.props.item.position.top} bottom={this.props.item.position.bottom} right={this.props.item.position.right}>
                <div className='post'>
                    <a className='post-modal modal-trigger modal-trigger' href={href}>
                        <figure>
                            <div>
                                <img src={img.src} alt={img.alt}/>
                            </div>
                            <figcaption>
                                <h5 className='center-align light grey-text text-lighten-3 text-shadow-black'>
                                    {title}
                                </h5>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </Zoom>
        )
    }
}

WebSectionSelectionItem.propTypes = {
    title:PropTypes.string.isRequired,
    position:PropTypes.string.isRequired,
    img: PropTypes.object.isRequired
};

WebSectionSelectionItem.defaultProps = {
    title: 'Title Default',
    position: 'top',
    img:{
        src: require(`./../../../../media/images/png/Default-1.png`),
        alt: 'Image Default'
    }
};

export {WebSectionSelectionItem}