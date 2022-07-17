import './App.css';

import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { Output } from './components/Output/Output';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <div className='wrapper'>
          <Header />
          <Input />
          <Output />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
