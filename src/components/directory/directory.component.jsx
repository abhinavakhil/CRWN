import React from "react";
import  "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {

    return(
      <div className="directory-menu">
      {
        sections.map(({title,imageUrl,id, size,  linkUrl})=>{
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}  linkUrl={linkUrl}/>
        })
      }
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);