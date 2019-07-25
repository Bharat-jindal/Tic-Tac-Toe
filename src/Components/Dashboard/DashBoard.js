import React , {Component} from 'react';
import './DashBoard.css';
import UserCard from '../UserCard/UserCard';
import winningLogic from '../utilities/winningLogic';
import compmove from '../utilities/compmove'

class DashBoard extends Component {
    state={
        Ticked:[
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        classes:[
            ['ticbox','ticbox','ticbox'],
            ['ticbox','ticbox','ticbox'],
            ['ticbox','ticbox','ticbox']
        ],
        turn:1,
        player:'',
        showResult:'',
        game:'open',
        count:1,
        wait:false
    }
    componentDidMount(){
        if(this.props.player==='multiplayer'){
            this.setState({player:'User2'})
        }else{
            this.setState({player:'Computer'})
        }
    }
    computerMoveHandler=()=>{
        this.setState({wait:true})
        if(this.state.count<10 && this.state.game==='open'){
             const [i,j]=compmove(this.state.Ticked,this.state.count)
            this.onBoxCheckHandler(i,j)
        }
        
    }
    onBoxCheckHandler =(i,j) =>{
        if(this.state.Ticked[i][j]===0 && this.state.game==='open'){
            var player=''
        if(this.state.turn===1){
            player='User1';
        }else{
            player=this.state.player;
        }
        const count=this.state.count+1;
        const classname=this.state.turn===1?'ticboxCross':'ticboxCircle';
        const turn =this.state.turn===1?2:1;
        const updatedClasses=this.state.classes;
        updatedClasses[i][j]=classname;
        const updatedTicked=this.state.Ticked;
        updatedTicked[i][j]=this.state.turn;
        const win=winningLogic(this.state.Ticked,this.state.turn)
        if(win==='win'){
            this.setState({classes:updatedClasses,showResult:`${player} win the game`,game:'closed'})
        }
        this.setState({
            turn:turn,
            classes:updatedClasses,
            Ticked:updatedTicked,
            count:count,
            wait:false
        },()=>{
            if(this.state.player==='Computer' && this.state.turn===2){this.computerMoveHandler()}
        })
        if(count===10){
            this.setState({showResult:'Game is Draw',game:'closed'})
        }
        }
    }
    reloadHandler = () =>{
        document.location.reload()
    }
    render(){var result=null;
        var waitMessage=null;
        if(this.state.wait){
            waitMessage=<h4>Please Wait....</h4>
        }
        if(this.state.showResult!==''){
        result=<h1 style={{color:'white'}}>{this.state.showResult}</h1>
        }
        return(
            <div>
            <div style={{position:'fixed',top:'0px',left:'0px'}}>
                <UserCard user='User1'/>
            </div>
            <div style={{position:'fixed',top:'0px',right:'0px'}}>
                <UserCard user={this.props.player==='multiplayer'?'User2':'Mr. Computer'} />
            </div>

            <div className='MainBox'>
                <span onClick={this.onBoxCheckHandler.bind(this,0,0)} className={this.state.classes[0][0]}></span>
                <span onClick={this.onBoxCheckHandler.bind(this,0,1)} className={this.state.classes[0][1]}></span>
                <span onClick={this.onBoxCheckHandler.bind(this,0,2)} className={this.state.classes[0][2]}></span>
                <br />
                <span onClick={this.onBoxCheckHandler.bind(this,1,0)} className={this.state.classes[1][0]}></span>
                <span onClick={this.onBoxCheckHandler.bind(this,1,1)} className={this.state.classes[1][1]}></span>
                <span onClick={this.onBoxCheckHandler.bind(this,1,2)} className={this.state.classes[1][2]}></span>
                <br />
                <span onClick={this.onBoxCheckHandler.bind(this,2,0)} className={this.state.classes[2][0]}></span>
                <span onClick={this.onBoxCheckHandler.bind(this,2,1)} className={this.state.classes[2][1]}></span>
                <span onClick={this.onBoxCheckHandler.bind(this,2,2)} className={this.state.classes[2][2]}></span>
            </div>
            {result}
            <button className='reloadButton' onClick={this.reloadHandler}>Replay</button>
            <div style={{position:"fixed",bottom:"0px"}}>
                {waitMessage}
            </div>
            </div>
            
        )
    }
}

export default DashBoard