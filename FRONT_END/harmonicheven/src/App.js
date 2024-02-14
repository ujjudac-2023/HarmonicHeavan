import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UpcomingEvent from './Activity/UpcomingEvent';
import LocalTalent from './Activity/LocalTalent';
import RespectToLegends from './Activity/RespectToLegends';
import SignIn from './pages/SignIn';
import Shop from './pages/Shop';
import Music from './pages/Music';
import Service from './pages/Service';

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='upcomingevent' element={<UpcomingEvent/>}/>
       <Route path='localtalent' element={<LocalTalent/>}/>
       <Route path='respecttolegends' element={<RespectToLegends/>}/>
       <Route path='signin' element={<SignIn/>}/>
       <Route path='shop' element={<Shop/>}/>
       <Route path='music' element={<Music/>}/>
       <Route path='service' element={<Service/>}/>
       
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
