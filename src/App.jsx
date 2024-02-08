import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Detail from './components/Detail';

function App() {

  return (
    <>
      <Routes>
      <Route path={'/'} element={ <Home /> } />
        <Route path={'/detail/:lat/:lon'} element={<Detail />} />
      </Routes> 
    </>
  )
}

export default App;
