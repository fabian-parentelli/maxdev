import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

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

export default App;