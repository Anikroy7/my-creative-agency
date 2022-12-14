
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';

function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/portfolio' element={<Home></Home>}> </Route>
        <Route path='/team' element={<Home></Home>}> </Route>
        <Route path='/contact' element={<Home></Home>}> </Route>
        <Route path='/team' element={<Home></Home>}> </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
