import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    textChart: ''
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={40}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.textChart,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }

          }}
        />

        <Pie
          data={this.state.chartData}
          width={100}
          height={40}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.textChart,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }

          }}
        />

        <Line
          data={this.state.chartData}
          width={100}
          height={40}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.textChart,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }

          }}
        />

      </div>
    )
  }
}

export default Chart;
