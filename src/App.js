import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      charData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //Chamadas para API
    this.setState({
      chartData: {
        labels: ['MATA120', 'MATA110', 'MATA103', 'MATA241'],
        datasets: [
          {
            label: 'Suites Executadas',
            data: [
              60,
              80,
              200,
              100
            ],
            backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E9E1ED",
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">

        <Chart chartData={this.state.chartData} textChart="Execuções de Suites" legendPosition="bottom" />

      </div>
    );
  }

}

export default App;
