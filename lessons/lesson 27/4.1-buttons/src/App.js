import './App.css';
import Button from './Button'
function App() {
  let bolder = {
    fontWeight: 'bold'
  }
  return (
    <div className="App">
      <Button txt ="Important" styles={bolder}/>
      <Button txt = "Not Important"/>
    </div>
  );
}

export default App;
