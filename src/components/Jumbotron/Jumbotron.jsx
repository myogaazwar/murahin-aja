import Button from '../Elements/Button/Button';
import Section from '../Elements/Section/Section';

import jumbotronImage from '/image/jumbotron-image.jpg';

const Jumbotron = () => {
  return (
    <Section
      id={'home'}
      classname={
        'poppins-semibold bg-gradient-to-t from-black to-blue-700 max-w-full max-sm:h-screen'
      }
    >
      <div className='grid grid-cols-2 h-full items-center gap-x-5 max-sm:grid-cols-1 max-w-7xl mx-auto'>
        <div className='flex flex-col justify-center items-center gap-y-10'>
          <div className='text-justify'>
            <h1 className='font max-xl:text-5xl  text-6xl max-sm:text-4xl text-center mb-4 text-white mt-28'>
              <span className='underline decoration-blue-700 tracking-wide'>
                Murahin
              </span>
              Aja
            </h1>
            <p className='max-xl:text-md max-sm:text-sm poppins-light text-white'>
              Belanja cerdas tanpa menguras kantong, hanya di sini! Temukan
              harga super hemat, lebih murah dari biasanya. Pilihan lengkap,
              harga bersahabat, dan kualitas terbaik, semua ada di Murahin Aja!
              Karena belanja hemat, siapa takut?
            </p>
          </div>

          <Button classname='max-xl:text-sm poppins-semibold bg-blue-600 py-3 px-5 rounded-lg hover:bg-blue-700 text-white'>
            Belanja Sekarang
          </Button>
        </div>

        <img
          className='mx-auto rounded-tl-full rounded-tr-full shadow-xl max-sm:w-[400px] '
          width={500}
          src={jumbotronImage}
          alt=''
        />
      </div>
    </Section>
  );
};

export default Jumbotron;
