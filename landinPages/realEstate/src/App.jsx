import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import SeparatorA from './components/Separator/SeparatorA/SeparatorA';

function App() {

  return (
    <div className='app'>
        <Nav />
        <Header />
        <SeparatorA />
        <Main />
        <Footer />
    </div>
  )
}

export default App
