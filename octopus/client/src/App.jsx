import React from "react";
import { Layout } from "./components/layout";
import { ProductContainer } from "./containers/ProductContainer";

const App = () => {
  return (
    <Layout>
      <ProductContainer />
    </Layout>
  );
};

export default App;
