import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { state: { products } } = useProducts();
  console.log(products);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product) => {
          return (
            <h3 key={product.id}>{product.username}</h3>
          )
        })
      }
    </div>
  );
};

export default Home;
