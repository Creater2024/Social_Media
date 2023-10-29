import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import CreatePost from './components/createpost';
function App() {
  return (
    <Router>
    <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/Home" element= {<Home/>}/>
         <Route path="/createpost" element= {<CreatePost/>}/>
    </Routes>
    </Router>
  );
}

export default App;
