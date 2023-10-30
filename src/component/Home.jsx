import Layout from "../Layout/Layout";

import ProductList from "../page/ProductList ";
// import stripHtml from 'string-strip-html';

const Home = () => {
  return (
    <Layout title="Home">
      <ProductList></ProductList>
    </Layout>
  );
};

export default Home;
