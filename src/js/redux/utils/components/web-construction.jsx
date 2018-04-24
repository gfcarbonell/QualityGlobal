import React from 'react';
import Zoom from 'react-reveal/Zoom';


class WebConstruction extends React.Component {
    render (){
        
        return (
            <figure className='construction'>
                <Zoom>
                    <img src={require(`./../../../../media/images/jpg/Construction-1.jpg`)} 
                            alt="Section in contruction" />
                </Zoom>
            </figure>
        )
    }
}

export {WebConstruction}