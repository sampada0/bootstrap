import logo from './logo.svg';
import './App.css';
import Projects from './component/Projects';
import Education from './component/Education';
import Technologies from './component/Technologies';
import Home from './component/Home';
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Technologies/>
      <Education/>
      <Projects/>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
