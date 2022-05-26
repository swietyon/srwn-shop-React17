import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './category.styles.scss';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import ProductCard from '../../components/poduct-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

  return (
  <>
    <h2>{category.toUpperCase()}</h2>
      <div className='category-container'>
          {
              products &&
              products.map((product) => {
                  return (
                      <ProductCard key={product.id} product={product} /> 
                  )
              })
          }
      </div>
  </>
  
  );
}

export default Category;
