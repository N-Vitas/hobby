import React,{ Component,PropTypes } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Finance from '../models/finance';

export default class Profile extends Component{
  /*
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  */
  static propsTypes = {
    finance:PropTypes.object
  };
  static defaultProps = {
    finance:new Finance(),
  }
  constructor(props){
    super(props);
    this.state={
      
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
    const {finance} = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <p className="App-intro">Название: <code>{finance.getTitle()}</code></p>
            <p className="App-intro">Доходы:  <code style={{cursor:"pointer"}} onClick={()=>this.pushIncome()}>{finance.getIncome()}</code></p>
            <p className="App-intro">Расходы: <code style={{cursor:"pointer"}} onClick={()=>this.popIncome()}>{finance.getExpense()}</code></p>
            <p className="App-intro">Денежный поток: <code>{finance.getCashFlow()}</code></p>
            <p className="App-intro">Наличные: <code>{finance.getMoney()}</code></p>
            <p className="App-intro">Кредиты: <code>{finance.getCredit()}</code></p>
            <p className="App-intro">Дети (кол-3, 9.3% от дохода): <code>{finance.getChildren(3)}</code></p>
          </Col>
        </Row>
        <Row className="show-grid">
        </Row>
      </Grid>
    )
  }
}