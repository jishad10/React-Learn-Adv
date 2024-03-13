import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

//array te ja ja aace sob golo ni e nicchi mapping ko re ko re 
const Products = ({ products }) => {
  console.log(products);
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

//props er maddome ey ta pass ko rer dicchi
Products.propTypes = {
  products: PropTypes.array
};

export default Products;
