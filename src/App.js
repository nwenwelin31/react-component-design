import './App.css';
import './home.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Category from './Category';
import Service from './Service';
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
