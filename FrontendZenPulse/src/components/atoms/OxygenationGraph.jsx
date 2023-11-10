import { Component } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const COLORS = ['#0839FF', '#F5F9F6'];

class OxygenationGraph extends Component {
  constructor() {
    super();
    this.state = {
      percent: 25,
      data: this.getData(25),
    };
  }

  componentDidMount() {
    this.updateInterval = setInterval(this.updateTemperature, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  updateTemperature = () => {
    let newPercent = this.state.percent + Math.random() * 25;
    if (newPercent > 105) {
      newPercent = 0; // Reinicia a 0 si supera 100
    }
    this.setState({ percent: newPercent, data: this.getData(newPercent) });
  };

  getData(percent) {
    return [{ name: 'Actividad', value: percent }, { name: '', value: 100 - percent }];
  }

  render() {
    return (
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={this.state.data}
              innerRadius={40}
              outerRadius={60}
              fill="#084DFF"
            >
              {this.state.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="30"
              fill="#000"
            >
              {Math.round(this.state.percent)}°
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default OxygenationGraph;
