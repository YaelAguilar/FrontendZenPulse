import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Graflineal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001/Pulse_irt');

    ws.onmessage = (event) => {
      const newValue = parseInt(event.data);
      setData((prevData) => [...prevData, { x: new Date().getTime(), y: newValue }]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#b39ddb'], // Cambiado a morado claro
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#a5d6a7'], // Color verde claro
          inverseColors: true,
          opacityFrom: 0.7,
          opacityTo: 0.3,
        },
      },
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
      max: 200,
    },
    legend: {
      show: false,
    },
    annotations: {
      yaxis: [
        {
          y: 40,
          y2: 0,
          fillColor: '	#ff0000',
          opacity: 0.3,
        },
        {
          y: 50,
          y2: 40,
          fillColor: '	#ffff00',
          opacity: 0.5,
        },
        {
          y: 80,
          y2: 50,
          fillColor: '#aed581',
          opacity: 0.5,
        },
        {
          y: 95,
          y2: 80,
          fillColor: '	#ffff00',
          opacity: 0.5,
        },
        {
          y: 120,
          y2: 95,
          fillColor: '	#ff8000',
          opacity: 0.5,
        },
        {
          y: 200,
          y2: 120,
          fillColor: '	#ff0000',
          opacity: 0.3,
        }
      ],
    },
  };

  return (
    <div>
      <ReactApexChart options={chartOptions} series={[{ data }]} type="line" height={350} />
    </div>
  );
};

export default Graflineal;
