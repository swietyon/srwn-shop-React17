import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';
import ProductCard from '../../components/poduct-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

  return (
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
  );
}

export default Category;
