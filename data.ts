import { Testimonial, Dish, onlineStore } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sara Smith",
    location: "California",
    stars: 5,
    text: "“Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few mr at discretion reasonable. Age out full gate bed day lose.”",
    image: "./assets/avatars/avatar-woman.png",
  },
  {
    id: 2,
    name: "John Doe",
    location: "New York",
    stars: 5,
    text: "“Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.”",
    image: "./assets/avatars/avatar-man.png",
  },
];

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Dishim with Fries and Sause",
    description:
      "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
    price: "$7.10",
    image: "./assets/dishes/dishim-with-fries.png",
    stars: 5,
  },
  {
    id: 2,
    name: "Chicken Hot Wings",
    description:
      "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
    price: "$6.40",
    image: "./assets/dishes/chicken-hot-wings.png",
    stars: 5,
  },
  {
    id: 3,
    name: "Samosas with Green Chatni",
    description:
      "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
    price: "$4.80",
    image: "./assets/dishes/samosas.png",
    stars: 5,
  },
  {
    id: 4,
    name: "Sweet Sawaiyan",
    description:
      "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
    price: "$5.20",
    image: "./assets/dishes/sweet-dish.png",
    stars: 5,
  },
  {
    id: 5,
    name: "Fried Raw Fish",
    description:
      "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
    price: "$6.40",
    image: "./assets/dishes/fried-raw-dish.png",
    stars: 5,
  },
  {
    id: 6,
    name: "Brakefast with Half Fried Egg",
    description:
      "Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.",
    price: "$3.20",
    image: "./assets/dishes/brakefast.png",
    stars: 5,
  },
];

export const onlineStoreDishes: onlineStore[] = [
  {
    id: 1,
    name: "Hot Wings",
    country: "Chinese Style",

    image: "/assets/dishes/chicken-hot-wings.png",
    stars: 4.5,
  },
  {
    id: 2,
    name: "Rice with Curry",
    country: "Indian Style",

    image: "/assets/dishes/rice-with-curry.png",
    stars: 4.5,
  },
  {
    id: 3,
    name: "Chapatees",
    country: "Pakistani Style",

    image: "/assets/dishes/chapatees.png",
    stars: 3.5,
  },
  {
    id: 4,
    name: "Sweetdish",
    country: "Western Style",

    image: "/assets/dishes/sweet-dish.png",
    stars: 5,
  },
];
