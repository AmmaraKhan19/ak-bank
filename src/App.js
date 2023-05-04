import './App.css';
import Navbar from './components/Navbar';
import Bank from './components/Bank'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Bank />
      </div>
    </>
  );
}

export default App;
