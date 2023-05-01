
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import routes from './Routes/routes';
import Context from './components/context/context';
function App() {
  return (
    <div className="App">
      <Context>
      <Router>
        <Routes>
          {routes.map((n)=>(
             <Route key={n.path} path={n.path} element={n.element}></Route>
          ))}
        </Routes>
      </Router>
      </Context>
    </div>
  );
}

export default App;
