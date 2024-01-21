import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import './app.scss';

function App() {
  
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
