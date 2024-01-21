import './app.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='app'>
        <Nav />
        <Header />
        <Main />
        <Footer />
    </div>
  );
};

export default App
