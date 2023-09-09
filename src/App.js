
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import routes from './Routes/routes';
import Context from './components/context/context';
import Data from './components/context/data';

function App() {
  
  return (
    <div className="App">
      <Context>
        <Data>
      <Router>
        <Routes>
          {routes.map((n)=>(
             <Route key={n.path} path={n.path} element={n.element}></Route>
          ))}
        </Routes>
      </Router>
      </Data>
      </Context>
    </div>
  );
}

export default App;
