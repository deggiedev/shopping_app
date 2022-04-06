import React from "react";
import { Layout } from "./components/layout";
import { ProductContainer } from "./containers/ProductContainer";
import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
{
  product(productId: 1) {
    id
    name
    power
    description
    price
    quantity
    brand
    weight
    height
    width
    length
    modelCode
    colour
    imgUrl
  }
}
`;
const App = () => {
  return (
    <Layout>
      <ProductContainer />
    </Layout>
  );
};

export default App;
