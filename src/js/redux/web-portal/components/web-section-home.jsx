import React from 'react';
import {WebSectionMenu} from '../../utils/components/web-section-menu'


class WebSectionHome extends React.Component {
   
    render (){
        return (
            <div>
                <WebSectionMenu images={this.props.images}/>
            </div>
        )
    }
}
export {WebSectionHome}