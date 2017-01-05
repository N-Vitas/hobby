import React,{ Component } from 'react';
import {Chart} from 'react-google-charts';
import {Button,Grid,Row,Col} from 'react-bootstrap';

export default class Exchange extends Component{
  constructor(props){
    super(props);
    this.state={
      options:{
        title: 'Курсы акций',
        "legend":{"position":"top","maxLines":3},
        "hAxis":{
          "title":"Время"
        },
        "vAxis":{
          "title":"Цена"
        }
      },
      rows:[[0,20,30]],
      columns:[
        {"label":"Время","type":"number","p":{}},
        {"label":"USD","type":"number"},
        {"label":"EUR","type":"number"}
      ],
    }
    this.generateTimer = null;
  }
  generateNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateCurency(){
    let USD = this.generateNumber(20,200);
    let EUR = this.generateNumber(30,90);
    let newRows = this.state.rows;
    newRows.push([newRows.length,USD,EUR]);
    this.setState({rows:newRows});
  }
  startGenerate(){
    if(this.generateTimer != null){
      clearInterval(this.generateTimer);
    }
    this.generateTimer = setInterval(()=>this.generateCurency(),500)
  }
  stopGenerate(){
    clearInterval(this.generateTimer);
  }
  render() {
    const {rows} = this.state;
    let usd = "PromStarMetall = "+rows[rows.length-1][1];
    let eur = "Delivering = "+rows[rows.length-1][2];
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Chart
              chartType="SteppedAreaChart"
              rows={this.state.rows}
              columns={[
                  {"label":"Время","type":"number","p":{}},
                  {"label":usd,"type":"number"},
                  {"label":eur,"type":"number"}
                ]}
              options={this.state.options}
              graph_id="ScatterChart"
              width={"100%"}
              height={"300px"}
              legend_toggle={true}
             />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6} mdPush={6}><Button block onClick={()=>this.startGenerate()} bsStyle="primary">Старт</Button></Col>
          <Col md={6} mdPull={6}><Button block onClick={()=>this.stopGenerate()} bsStyle="primary">Стоп</Button></Col>
        </Row>
      </Grid>
    )
  }
}