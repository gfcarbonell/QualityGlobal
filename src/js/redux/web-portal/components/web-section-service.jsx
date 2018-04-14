import React from 'react';
import {WebSectionSelection} from '../../utils/components/web-section-selection'


class WebSectionService extends React.Component {
   
    render (){
        return (
            <div>
                <WebSectionSelection head={this.props.head} items={this.props.items} style={this.props.style}/>
            </div>
        )
    }
}
export {WebSectionService}