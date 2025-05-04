import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Details from './components/Details'

function App() {

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <div className='grow'>
          <Navbar />
          <Routes>
              <Route path='/' element={<main><Home /></main>} />
              <Route path='/shop' element={<main><Shop /></main>} />
              <Route path='/shop/:id' element={<main><Details /></main>} />
              <Route path='/cart' element={<main><Cart /></main>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

  // return (
  //   <div className='flex flex-col min-h-screen'>
  //     <Navbar />
  //     <div className='flex flex-col grow-1 mx-auto text-center justify-center'>
  //       <Link to="/shop">
  //         <h1 className='text-xl'>Start Shopping</h1>
  //       </Link>
  //     </div>
  //     <Footer />
  //   </div>
  // )

  // const [data, setData] = useState();

  // useEffect(() => {
  //   // fetch data
  //   const dataFetch = async () => {
  //     const data = await (
  //       await fetch(
  //         'https://fakestoreapi.com/products',
  //       )
  //     ).json();

  //     // set state when the data received
  //     setData(data);
  //   };

  //   dataFetch();
  // }, []);

  // console.log(data)