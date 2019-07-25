import React ,{Component} from 'react';
import './App.css';

import Background from './assets/tic_background.png';
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';

class App extends Component {
  state={
    player:'multiplayer',
    show:'Home'
  }

  playerChangeHandler=(event)=>{
    this.setState({player:event.target.value})
  }
  onSubmitHandler=()=>{
    this.setState({show:'dashboard'})
  }

  render(){
    var show =<Home playerChangeHandler={this.playerChangeHandler}
                    player={this.state.player}
                    onclick={this.onSubmitHandler}/>

    if(this.state.show==='dashboard'){
      show=<DashBoard player={this.state.player}/> 
    }
    return(
      <div className="App" style={{backgroundImage:`url(${Background})`}}>
        {show}
      </div>
    )
  }
}

export default App;
