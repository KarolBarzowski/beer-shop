import { Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Details from 'views/Details/Details';
import Cart from 'views/Cart/Cart';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Root = () => (
  <MainTemplate>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beer/:beerId" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </MainTemplate>
);

export default Root;
