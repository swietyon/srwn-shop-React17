import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';
const categories = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
      route: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'jackets',
      route: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'sneakers',
      route: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'women',
      route: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'men',
      route: 'shop/mens'
    }
  ]

const Directory = () => {
  
  return (
    <div className='directory-container'>
      {categories.map((category) => {
        return(
            <DirectoryItem key={category.id} category={category}/>
        )
      })}
    </div>
  );
}

export default Directory;
