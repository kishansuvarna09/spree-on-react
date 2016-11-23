import productList from './product-list';
import products from './products';
import taxonomies from './taxonomies';

export default {
  fetchProducts: productList.fetchProducts,
  addProducts: products.addProducts,
  fetchProduct: products.fetchProduct,
  addProduct: products.addProduct,
  fetchTaxonomies: taxonomies.fetchTaxonomies,
  addTaxonomies: taxonomies.addTaxonomies
};
