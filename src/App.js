import './App.css';
import  { Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

      <Route path={['/posts','/myposts','/create','/help']}>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;
