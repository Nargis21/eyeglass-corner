import './App.css';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <h1 className='title'>Eyeglass Corner</h1>
      <h1 className='title2'>Choose 4 Glasses</h1>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
