import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from '../../utils/components/logo';


class WebHead extends React.Component {
    render (){
        let title = (this.props.head.title)? this.props.head.title:this.propTypes.title;
        return (
            <div className='head box-shadow-white position-absolute top-0'>
                <Logo img={this.props.head.logo2}/>
                <div className='head-wrapper'>
                    <h1 className='head-wrapper-title white-text text-shadow-black font-weight-bold'> {title} </h1>
                </div>
                <Logo img={this.props.head.logo1}/>
            </div>
        )
    }
}

WebHead.propTypes = {
    title: PropTypes.string.isRequired
};

WebHead.defaultProps = {
    title: "Title Default"
};
export {WebHead}