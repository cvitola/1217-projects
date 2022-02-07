import { useState } from 'react'
import './App.css';
import Create from './pages/Create/Create';
import Users from './pages/Users/Users';
import Todo from './pages/Todo/Todo'
function App() {

  const [consumed, setConsumed] = useState(false) //para automatizar la llamada al backend.
  return (
    <div className="App">
      <Create created={() => setConsumed(!consumed)}/>
      <Users onGet={consumed}/>
      <Todo />
    </div>
  );
}

export default App;
