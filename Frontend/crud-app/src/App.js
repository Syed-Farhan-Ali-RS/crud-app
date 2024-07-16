import { Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="bg-blue-500">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
