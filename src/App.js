import Collection from './Collection';
import './App.css';
import Header from './UI/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='content'>
        <Collection />
      </div>
    </div>
  );
}

export default App;
