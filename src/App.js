import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login";
import './bootstrap.min.css'
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./pages/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./pages/MyOrder";

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myOrder" element={<MyOrder />} />
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
