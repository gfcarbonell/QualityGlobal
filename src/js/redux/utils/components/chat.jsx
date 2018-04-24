import React from 'react';
import $ from 'jquery';
import 'materialize-css';
import PropTypes from 'prop-types';


class Chat extends React.Component {

    constructor(...props){
        super(...props);
        this.handleShowHidden = this.handleShowHidden.bind(this);
    }

    componentDidMount(){
        $('.tooltipped').tooltip();
    }
    handleShowHidden(){
        
        let chatHeight = $("#chat").css("bottom");
        
        if(chatHeight==="-501px"){
            $("#chat").animate({bottom:"10px"}, 300 );
        }
        else{
            $("#chat").animate({bottom:"-501px"}, 300 );
        }
    }
    render (){
        let url = (this.props.url)? this.props.url:this.props.propTypes.url;
        return (      
            <div id="wrapper_chat">
                <div id="chat" className="chat box-shadow-black ">
                    <div id="" data-position="top" data-tooltip="Conversa con nosotros... ¡Haz click aquí!" onClick={this.handleShowHidden} 
                        className="chat-title light-green darken-1 white-text text-shadow-black tooltipped">
                        <a className="font-weight-bold center-align ">
                            Chat On-Line!
                        </a>
                    </div>
                    <iframe src={url}
                        title="This is a chat - messenger"
                        id="messenger"
                        className="chat-body"
                        scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
}


Chat.propTypes = {
    url: PropTypes.string.isRequired
};

Chat.defaultProps = {
    url:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FqualityAsesoresyconsultores%2F&tabs=messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1561539847294825"
};

export {Chat}