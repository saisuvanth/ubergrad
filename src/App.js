import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import NewNavbar from "./components/Navbar";
import Specializations from './components/Specializations';
import Requirements from './components/Requirements';
import Universities from "./components/Universities";
import Companies from "./components/Companies";
import Salary from "./components/Salary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NewNavbar/>
      <Banner/>
      <Introduction/>
      <Specializations/>
      <Requirements/>
      <Universities/>
      <Companies/>
      <Salary/>
      <Footer/>
    </div>
  );
}

export default App;
