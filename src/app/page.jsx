"use client";
import { useState, useEffect } from 'react';
import { productsData } from '../../data/products.js';
import ProductCard from '@/components/ProductCard/ProductCard.jsx'
import styles from './page.module.css';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);


  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className={styles.products}>
      {products.map(product => (
       <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
