import React from 'react';
import $ from 'jquery';
import 'materialize-css';
import PropTypes from 'prop-types';


class EmbedFansPage extends React.Component {

    constructor(...props){
        super(...props);
        this.handleShowHidden = this.handleShowHidden.bind(this);
    }

    handleShowHidden(){
        let top = $("#wrapper_fans_page").css("top");
        
        let number = parseFloat(top);
        
        if(number===0){
            
            $("#wrapper_fans_page")
                .animate({top:"60vh"}, .350 )
                .animate({right:"-340px"}, 400 );

            
        }
        else if(number>=300){
           
            $("#wrapper_fans_page")
            .animate({top:"0"}, 350 )
            .animate({right:"0"}, 400 );

        }
        
    }

    componentDidMount(){
        $('.tooltipped').tooltip();
    }

    render (){
        let url = (this.props.url)? this.props.url:this.props.propTypes.url;
        url = url + "&output=embed";
        return (      
            <div id="wrapper_fans_page">
                <div className="fans-page">
                    <div 
                            id="buttom_fans_page"
                            className="fans-page-logo btn white pulse tooltipped"
                            data-position="top" 
                            data-tooltip="Nuestras ultimas noticias... ¡Haz click aquí!" 
                           
                            onClick={this.handleShowHidden}>
                            <p className="icon-facebook3">
                            </p>
                    </div>
                    <iframe src={url}
                        title="This is a fans page"
                        id="fans_page"
                        className="fans-page-body box-shadow-black "
                        scrolling="no" 
                        frameBorder="0" 
                        allow="encrypted-media">
                    </iframe>
                </div>
            </div>
        )
    }
}


EmbedFansPage.propTypes = {
    url: PropTypes.string.isRequired,
};

EmbedFansPage.defaultProps = {
    url:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FqualityAsesoresyconsultores%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1561539847294825",
};

export {EmbedFansPage}