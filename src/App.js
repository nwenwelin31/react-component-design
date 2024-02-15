import './App.css';
import './component/home.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Category from './component/Category';
import Service from './component/Service';
import { MdCategory } from 'react-icons/md';

function App() {
  return (

      <div className='divall'>
      <Header></Header>
      <Home></Home>
      <Service></Service>
      <Category></Category>
      <Footer></Footer>
      </div>

  );
}

export default App;
