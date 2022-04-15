
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import Router from './components/Router/Router';


function App() {
  return (
    <div className="App">

      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
