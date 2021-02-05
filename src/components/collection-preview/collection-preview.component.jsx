import React from 'react';

import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';

const CollectionPreview = ({title ,items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
               {
                 items.filter((item,idx) => idx<4)
                  .map(({id, ...otheritemProps}) => {
                    return <CollectionItem key={id} {...otheritemProps} />
                 })
               }
            </div>
        </div>
    )
}

export default CollectionPreview;

// items.filter((item,index) => idx<4) 
// this means filter only 4 items (as index starts from 0)

// collectionItem component is how single collection should look like
