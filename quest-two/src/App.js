import logo from './logo.svg';
import './App.css';
import Explorer from './components/Explorer';
import { data } from './constants/data';

function App() {
  return (
    <div className="App">
        <Explorer data={data}/>
    </div>
  );
}

export default App;
