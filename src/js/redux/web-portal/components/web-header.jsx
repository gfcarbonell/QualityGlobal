import React from 'react';
import {WebSlider} from '../../utils/components/slider';
import {WebHead} from './web-head'

class WebHeader extends React.Component {
    render (){
        return (
            <header>
                <WebHead head={this.props.head}/>
                <WebSlider sliders={this.props.sliders}/>
            </header>
        )
    }
}
export {WebHeader}