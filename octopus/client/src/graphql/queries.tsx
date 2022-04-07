import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(productId: $productId) {
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
