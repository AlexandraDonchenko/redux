
import { useSelector } from 'react-redux';
import './App.css';


function App() {
  const counter = useSelector((state)=> state);
  return (
    <div className="App">
    HELLO
    </div>
  );
}

export default App;
