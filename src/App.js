import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import SectionTwo from './Pages/SectionTwo';
import ButtonBox from './Pages/ButtonBox';
import SectionThree from './Pages/SectionThree';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <SectionTwo/>
     <ButtonBox/>
     <SectionThree/>
    </div>
  );
}

export default App;
