
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import Main from './pages/Main/Main';
import Router from './components/Router/Router'

function App() {
  return (
    <div className="App">
      <Router />

      <NavBar />
      
    </div>
  );
}

export default App;
