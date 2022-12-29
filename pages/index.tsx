import { Header, Hero, PopularProducts } from "../components";

export default function Home() {
  return (
    <div className='w-full min-h-screen'>
      <Header />
      <Hero />
      <PopularProducts />
    </div>
  );
}
