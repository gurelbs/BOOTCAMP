import './App.css';
import CheckBox from './CheckBox'
function App() {
  return (
    <div className="App">
        <CheckBox txt={'nice CheckBox 1'} checked={false}/>
        <CheckBox txt={'nice CheckBox 2'} checked={false}/>
        <CheckBox txt={'nice CheckBox 3'} checked={true}/>
        <CheckBox txt={'nice CheckBox 4'} checked={true}/>
    </div>
  );
}

export default App;
