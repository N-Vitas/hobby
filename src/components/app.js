import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/app.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';
// import {Button,Grid,Row,Col,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import Finance from '../models/finance';
import cards from '../models/cards';
import Exchange from './Exchange';
import Profile from './profile';
import {generate} from '../utilites/helpers';
class App extends Component {
  constructor(props){
    super(props)
    var card = generate(0,5);
    this.state={
      finance:new Finance(cards[card].title,cards[card].income,cards[card].expense,cards[card].money,cards[card].credit,cards[card].children),  
    }
  } 
  pushIncome(){
    const {finance} = this.state;
    finance.setIncome(finance.getIncome()+1);
    this.setState({finance:finance})
  } 
  popIncome(){
    const {finance} = this.state;
    finance.setIncome(finance.getIncome()-1);
    this.setState({finance:finance})
  } 
  render() {
    return(
      <div className="container-fluid">
        <div className="container">
          <div className="row" >
            <div className="col-xs-3 col-md-3">
              <h1>Профессия</h1>
              <Profile finance={this.state.finance}/>
            </div>
            <div className="col-xs-3 col-md-3">
              В работе
            </div>
          </div>
          <div className="row" >
            <div className="col-xs-12 col-md-12">
              В работе
            </div>
          </div>
        </div>
      </div>
    );
  }
}

    // const {finance} = this.state;
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <Profile/>
    //     <p className="App-intro">Название: <code>{finance.getTitle()}</code></p>
    //     <p className="App-intro">Доходы:  <code style={{cursor:"pointer"}} onClick={()=>this.pushIncome()}>{finance.getIncome()}</code></p>
    //     <p className="App-intro">Расходы: <code style={{cursor:"pointer"}} onClick={()=>this.popIncome()}>{finance.getExpense()}</code></p>
    //     <p className="App-intro">Денежный поток: <code>{finance.getCashFlow()}</code></p>
    //     <p className="App-intro">Наличные: <code>{finance.getMoney()}</code></p>
    //     <p className="App-intro">Кредиты: <code>{finance.getCredit()}</code></p>
    //     <p className="App-intro">Дети (% от дохода): <code>{finance.getChildren(3)}</code></p>
    //     <Exchange/>
    //   </div>
    // );
export default App;
