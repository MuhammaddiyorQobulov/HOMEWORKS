const fakeProducts = [
  {
    id: "867255",
    name: "Licensed Cotton",
    price: "583.00",
    seller: "Luna",
    img: "https://loremflickr.com/500/500/food",
    path: "/users/infos:productID",
  },
  {
    id: "556636",
    name: "Licensed Plastic",
    price: "908.00",
    seller: "Forest",
    img: "https://loremflickr.com/500/500/transport",
    path: "/users/infos:productID",
  },
  {
    id: "809085",
    name: "Bespoke Granite",
    price: "356.00",
    seller: "Abagail",
    img: "https://loremflickr.com/500/500/food",
    path: "/users/infos:productID",
  },
  {
    id: "136604",
    name: "Tasty Granite",
    price: "107.00",
    seller: "Humberto",
    img: "https://loremflickr.com/500/500/sports",
    path: "/users/infos:productID",
  },
  {
    id: "363308",
    name: "Bespoke Metal",
    price: "171.00",
    seller: "Deron",
    img: "https://loremflickr.com/500/500/business",
    path: "/users/infos:productID",
  },
  {
    id: "682616",
    name: "Gorgeous Concrete",
    price: "70.00",
    seller: "Deon",
    img: "https://loremflickr.com/500/500/people",
    path: "/users/infos:productID",
  },
  {
    id: "768032",
    name: "Unbranded Fresh",
    price: "915.00",
    seller: "Jalon",
    img: "https://loremflickr.com/500/500/sports",
    path: "/users/infos:productID",
  },
  {
    id: "416682",
    name: "Recycled Frozen",
    price: "116.00",
    seller: "Daphney",
    img: "https://loremflickr.com/500/500/animals",
    path: "/users/infos:productID",
  },
  {
    id: "645061",
    name: "Handmade Bronze",
    price: "865.00",
    seller: "Elissa",
    img: "https://loremflickr.com/500/500/cats",
    path: "/users/infos:productID",
  },
  {
    id: "275288",
    name: "Unbranded Metal",
    price: "214.00",
    seller: "Marquise",
    img: "https://loremflickr.com/500/500/sports",
    path: "/users/infos:productID",
  },
];

export function getFakeProducts() {
  return fakeProducts;
}

export const getProduct = (productID) => {
  return new Promise((resolve) => {
    const time = Math.ceil(Math.random() * 3) * 1000;
    setTimeout(() => {
      const product = fakeProducts.find(({ id }) => id === productID);
      resolve(product);
    }, time);
  });
};
