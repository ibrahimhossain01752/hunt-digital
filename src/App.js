// import logo from './logo.svg';
import './App.css';
import Card from './components/Home/Card';
import UpcomingCard from './components/Home/UpcomingCard';
import Footer from './components/Shared/Footer';
import Banner from './components/Home/Banner';
// import Navbar from './components/Home/Navbar';

function App() {
  return (
    <div className="App">
     <Banner/>
     {/* <Navbar/> */}
     <Card/>
     <UpcomingCard/>
     <Footer/>
    </div>
  );
}

export default App;
