export const mockProduct = {
  id: "1",
  name: "Energy saving light bulb",
  power: "25W",
  description:
    "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
  price: 1299,
  quantity: 4,
  brand: "Philips",
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  modelCode: "E27 ES",
  colour: "Cool daylight",
  imgUrl: "https://i.ibb.co/2nzwxnQ/bulb.png",
};

export const mockCompanyInfo = [
  {
    content: "Octopus Energy Ltd is a company registered in England and Wales.",
  },
  { content: "Registered number: 09263424.Registered office: 33 Holborn." },
  { content: "London, EC1N 2HT. Trading office: 20-24 Broadwick Street," },
  { content: "London, W1f 8HT" },
];

export const mockCartItems = [
  { name: "bulb", price: 8, quantity: 5 },
  { name: "bulb", price: 8, quantity: 5 },
  { name: "bulb", price: 8, quantity: 5 },
];

export const mockSubTitle = `${mockProduct.power} // Packet of ${mockProduct.quantity}.`;

export const mockSpecifications = {
  brand: "Philips",
  weight: 77,
  dimensions: "12.6x6.2x6.2",
  modelNumber: "E27 ES",
  colour: "cool daylight",
};
