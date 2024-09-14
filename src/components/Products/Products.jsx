import { useEffect, useState } from 'react';
import { productData } from '../../utility/productData';
import Button from '../Elements/Button/Button';
import { Card } from '../Elements/Card/Card';
import Section from '../Elements/Section/Section';
import redShirt from '/image/shirt-red.png';
import { getDataProducts } from '../../services/product.service';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProducts = await getDataProducts();
        setProducts(dataProducts);
        setLoading(false);
        console.log(dataProducts);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Section id={'products'} classname={' max-sm:px-0 p-5 h-full'}>
        <main className='shadow-inner rounded-3xl p-5'>
          <div className='text-left poppins-bold text-3xl'>
            <h2 className='border-b-2 border-blue-500 w-52 max-sm:text-lg'>
              Our Products
            </h2>
          </div>

          {loading && (
            <div className='bg-whiteColor max-w-2xl mx-auto h-40 shadow-inner drop-shadow-md flex flex-col items-center justify-center rounded-3xl'>
              <h1 className='poppins-bold-italic text-3xl'>Loading...</h1>
            </div>
          )}

          <div className=' grid grid-cols-4 gap-x-4 max-[863px]:grid-cols-3 max-[711px]:grid-cols-2 max-[345px]:grid-cols-1'>
            {products.map((item) => (
              <Card
                key={item.title}
                classname={
                  ' mb-3 mx-auto max-lg:w-48 max-[863px]:w-60 max-[807px]:w-52 max-[711px]:w-60 max-[557px]:w-44 max-[425px]:w-36 max-[345px]:w-56'
                }
                titleProduct={item.title}
                titleCategory={item.category}
                image={item.image}
                price={`$${item.price}`}
              />
            ))}
          </div>
        </main>
      </Section>
    </>
  );
};

export default Products;
