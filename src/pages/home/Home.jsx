import {useEffect , useState} from 'react'
import Slider from './../../components/Slider/Slider';
import HeadingTitle from './../../components/HeadingTitle/HeadingTitle';
import Brands from './../../components/Brands/Brands';
import Banner from './../../components/Banner/Banner';
import Category from './../../components/Category/Category';
import SpecialOffers from './../../components/SpecialOffers/SpecialOffers';

const Home = () => {
  const [products , setProducts] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/products")
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])



  const laptops = products.filter(p => p.isLaptop === true)
  const mobiles = products.filter(p => p.isLaptop === false)
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
  )
}

export default Home