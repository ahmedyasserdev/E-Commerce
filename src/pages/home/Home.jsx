import { useEffect } from 'react';
import Slider from './../../components/Slider/Slider';
import HeadingTitle from './../../components/HeadingTitle/HeadingTitle';
import Brands from './../../components/Brands/Brands';
import Banner from './../../components/Banner/Banner';
import Category from './../../components/Category/Category';
import SpecialOffers from './../../components/SpecialOffers/SpecialOffers';
import { fetchProducts, selectProducts } from '../../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const laptops = products.filter(p => p.isLaptop === true);
  const mobiles = products.filter(p => p.isLaptop === false);

  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title={"الجديد من اجهزه الابتوب"} />
      <Slider data={laptops} />
      <HeadingTitle title={"الجديد من الهواتف"} />
      <Slider data={mobiles} />
      <HeadingTitle title={"اشتري حسب البراند"} />
      <Brands />
    </>
  );
};

export default Home;