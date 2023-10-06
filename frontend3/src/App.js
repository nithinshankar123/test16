
import './App.css';
import F1 from './components/F1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter,Routes,Route} from "react-router-dom";
import { Home,About } from './components/Home';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <F1 />
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
