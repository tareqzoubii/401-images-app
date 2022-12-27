import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './Components/Parent'
import Home from './Components/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
          <Route 
              path="/"
              element={<Home />}
            >
            </Route>
            <Route 
              path="/parent"
              element={<Parent />}
            >
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
