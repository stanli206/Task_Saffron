import sac from "../assets/sac.jpg";
import saa from "../assets/saa.jpg";
import sad from "../assets/sad.jpg";
import sab from "../assets/sab.jpg";

export const products = [
    {
      _id: "67dd17c9fa0343a84871cc79-1",
      name: "Spain Saffron",
      price: 3600,
      weight: 2, // grams
      stock: 50,
      image: sac, // <-- keep these paths correct
      flipimage: saa,
      fullProduct: {
        _id: "67dd17c9fa0343a84871cc79",
        name: "Spain Saffron",
        description:
          "High-quality Spanish saffron with deep red stigmas and intense flavor.",
        content: "Sourced from the best saffron farms in Spain.",
        variants: [
          { weight: 2, price: 1600 },
          { weight: 5, price: 3600 },
        ],
      },
    },

    // duplicate few more for grid demo (change ids/images if you have)
    {
      _id: "67dd17c9fa0343a84871cc79-2",
      name: "Spain Saffron",
      price: 3600,
      weight: 5,
      stock: 50,
      image: sad,
      flipimage: sab,
      fullProduct: {
        _id: "67dd17c9fa0343a84871cc79",
        name: "Spain Saffron",
        description:
          "High-quality Spanish saffron with deep red stigmas and intense flavor.",
        content: "Sourced from the best saffron farms in Spain.",
        variants: [
          { weight: 2, price: 1600 },
          { weight: 5, price: 3600 },
        ],
      },
    },
    {
      _id: "67dd17c9fa0343a84871cc79-3",
      name: "Spain Saffron",
      price: 3600,
      weight: 4,
      stock: 50,
      image: sac,
      flipimage: saa,
      fullProduct: {
        _id: "67dd17c9fa0343a84871cc79",
        name: "Spain Saffron",
        description:
          "High-quality Spanish saffron with deep red stigmas and intense flavor.",
        content: "Sourced from the best saffron farms in Spain.",
        variants: [
          { weight: 2, price: 1600 },
          { weight: 5, price: 3600 },
        ],
      },
    },
    {
      _id: "67dd17c9fa0343a84871cc79-4",
      name: "Spain Saffron",
      price: 3600,
      weight: 6,
      stock: 50,
      image: sad,
      flipimage: sab,
      fullProduct: {
        _id: "67dd17c9fa0343a84871cc79",
        name: "Spain Saffron",
        description:
          "High-quality Spanish saffron with deep red stigmas and intense flavor.",
        content: "Sourced from the best saffron farms in Spain.",
        variants: [
          { weight: 2, price: 1600 },
          { weight: 5, price: 3600 },
        ],
      },
    },
  ];