import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import ReadUser from './ReadUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/readuser/:id" element={<ReadUser></ReadUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
