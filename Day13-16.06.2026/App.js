import logo from './logo.svg';
import './App.css';

import App1 from './App1';
import cimg from './cafe.jpg';

export const App=()=> {
  return (
    <div>
      <h1>Srisha S</h1>
      <h1>Information Technology</h1>

      
      <img src={cimg}/>

      <App1 />
    </div>
  );
}

//export default App;
