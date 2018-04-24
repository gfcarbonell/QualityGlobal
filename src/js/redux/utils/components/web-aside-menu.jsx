import React from "react";
import uid from "uid";


class WebAsideMenu extends React.Component {

    render (){
        let style = "aside-menu " + this.props.position
        
        return (
            <aside id="bar_menu" className={style}  style={this.props.style}>
                {
                    this.props.items.map((item, index)=>{
                        return (
                            <a  href={item.url} 
                                key={uid(10)}
                                classame="aside-menu-item"
                                target="_blank">  
                                <img classame="aside-menu-item-img" src={item.img.src}  alt={item.img.alt}/> 
                            </a>
                        )
                    })
                }
            </aside>
        )
  }

}

export {WebAsideMenu}
