import React from "react";
import { withRouter } from "react-router-dom";
// withRouter -is a higher order component(a hoc is a fn that take a component as argument and returns a modified component)
import "./menu-item.styles.scss";

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return(
        <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
              <div 
              className="background-image"
              style={{
              backgroundImage:`url(${imageUrl})`
               }}>

              </div>
             <div className="content">
               <h1 className="title">{title.toUpperCase()}</h1>
               <span className="sub-title">SHOP NOW</span>
             </div>
        </div>
    )
}

export default withRouter(MenuItem);
// withRouter(MenuItem) - this will now give us back the history, match and location props,
// which without withRouter we have to take with props from homePage comp then pass to directory then to 
// menuitem and that is a bad practice as it is a props drilling( as we need Routingprops only in menuitem and need to pass in  directory also)