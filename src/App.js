import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Drops from './components/Drops/Drops';
import Community from './components/Community/Community';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import Navbar from './components/Base/Navbar/Navbar.js';
import Footer from './components/Base/Footer/Footer';
import ConnectModal from './components/Base/ConnectModal/ConnectModal';


const supportedChainIds = [4]
const connectors = {
  injected: {},
}


function App() {


  return (
   
    <div className="App">
      <ThirdwebWeb3Provider
    supportedChainIds={supportedChainIds}
    connectors={connectors}
  >
     <Router>
    <Navbar/>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore}/>
        <Route path='/drops' component={Drops} />
        <Route path='/community' component={Community} />
        <Route path='/connect' component={Home} />
       
      </Switch>
    </Router>
    </ThirdwebWeb3Provider>

    <Footer/>
    </div>
  );
}

export default App;
