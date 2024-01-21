import './app.scss'
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Nav from './component/Nav/Nav';

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