import Button from '../Button/Button';

export const Card = ({
  titleProduct,
  titleCategory,
  price,
  image,
  classname,
}) => {
  return (
    <div
      className={`poppins-semibold ${classname} bg-whiteColor p-2 rounded-2xl mt-7 shadow-md flex flex-col justify-between`}
    >
      <div className='mb-4'>
        <p className='max-sm:text-xs text-sm text-gray-400'>{titleCategory}</p>
        <h3 className='max-lg:text-[10px]'>
          {titleProduct && titleProduct.length > 20
            ? `${titleProduct.substring(0, 100)}...`
            : titleProduct}
        </h3>
      </div>
      <img className='w-full md:w-64 md:h-64' src={image} alt={titleProduct} />

      <div className='max-[425px]:flex-col  flex justify-between items-center mt-5 mb-2'>
        <p className='max-md:text-sm max-sm:text-xs pl-2'>{price}</p>
        <Button
          classname={
            'bg-blue-600 max-xl:text-sm max-lg:text-xs max-lg:px-2  text-whiteColor hover:bg-blue-700 active:bg-blue-800'
          }
        >
          Beli Sekarang
        </Button>
      </div>
    </div>
  );
};
