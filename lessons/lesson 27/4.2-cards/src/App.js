import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
        <Card 
          imgSrc='https://source.unsplash.com/random/200x200'
          header='some header'
          description={'this is my description'}
        />
        <Card 
          imgSrc='https://source.unsplash.com/random/200x201'
          header='other header'
          description={'this is my description another time weeeeee'}
        />
        <Card 
          imgSrc='https://source.unsplash.com/random/200x202'
          header='cool header'
          description={'this is my description yalla balagan!'}
        />
    </div>
  );
}

export default App;
