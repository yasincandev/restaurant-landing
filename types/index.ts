export type Dish = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  stars: number;
};

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  stars: number;
  text: string;
  image: string;
}

export interface onlineStore {
  id: number;
  name: string;
  country: string;
  stars: number;
  image: string;
}
