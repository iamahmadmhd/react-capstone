import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from "./pages/home";
import Reservations from "./pages/reservations";
import ReservationConfirmation from "./pages/reservation-confirmation";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="reservation-confirmation" element={<ReservationConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
