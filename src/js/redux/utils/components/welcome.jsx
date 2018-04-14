import React from 'react';
import 'materialize-css';
import PropTypes from 'prop-types';
import Zoom from "react-reveal/Zoom";

class Welcome extends React.Component {
    render (){
        let message = (this.props.message!==null || this.props.message!==undefined)? this.props.message:this.propTypes.message;

        return (
            <div className="z-depth-4">
                <Zoom left>
                    <h4 className="white-text text-shadow-black font-weight-bold padding">
                        {message}
                    </h4>
                </Zoom>
                <p className="sub-border background-red">

                </p>
                <p className="border-bottom-red-2">
                </p>
            </div>
        )
    }
}

Welcome.propTypes = {
    message: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
    message:'Welcome',
};

export {Welcome}