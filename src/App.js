import './App.css';
import HomePage from './Home/Page/HomePage'
import ArticlePage from './Articles/ArticlePage'
import AboutPage from './About/AboutPage'
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage/> 
        </Route>
        <Route path="/src/Articles/ArticlePage.js">
          <ArticlePage/>
        </Route>
        <Route path="/src/About/AboutPage.js">
          <AboutPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
