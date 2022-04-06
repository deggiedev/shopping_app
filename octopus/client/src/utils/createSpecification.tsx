import { Product } from "../containers/ProductContainer"

export const createSpecification = (product: Product) => {
    return {
      brand: product?.brand,
      weight: product?.weight,
      dimensions: `${product?.height} x ${product?.width} x ${product?.length}`,
      modelNumber: product?.modelCode,
      colour: product?.colour,
    };
  };