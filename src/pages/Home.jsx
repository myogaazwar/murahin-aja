import { Footer } from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Navbar } from '../components/Navbar/Navbar';
import { Products } from '../components/Products/Products';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Products />
      <Footer />
    </>
  );
};
