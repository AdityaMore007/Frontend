import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav';
import Testimonial from './Components/Testimonials/Testimonial';
import Signup from './Components/Signup/Signup';
import DishPage from './Components/SinglePage/SinglePage';
import CartPage from './Components/Cart/CartPage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/category" element={<Category />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dish" element={<DishPage />} />
        {/* <Route path="/cart" element={<CartPage userId={userId} />} /> */}

        {/* <Route exact path="/dish/:id" render={(props) => (
          <DishPage id={props.match.params.id}/>
        )} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

