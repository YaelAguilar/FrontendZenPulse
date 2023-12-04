import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Graflineal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001/Pulse_irt');

    ws.onmessage = (event) => {
      const receivedValue = event.data.trim();
      console.log('Valor recibido:', receivedValue);

      try {
        const dataObject = JSON.parse(receivedValue);

        // Asumo que solo estamos interesados en Pulse_irt
        const newValue = parseInt(dataObject.Pulse_irt);
        if (!isNaN(newValue)) {
          setData((prevData) => [...prevData, { x: new Date().getTime(), y: newValue }]);
        } else {
          console.error('Error al convertir a número:', receivedValue);
        }
      } catch (error) {
        console.error('Error al analizar JSON:', error);
      }
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
      colors: ['#b39ddb'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#a5d6a7'],
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
      axisBorder: {
        show: true,
        color: '#78909C',
        offsetX: 0,
        offsetY: 0,
      },
    },
    legend: {
      show: false,
    },
    annotations: {
      yaxis: [
        {
          y: 40,
          y2: 0,
          fillColor: '#ff0000',
          opacity: 0.3,
        },
        {
          y: 50,
          y2: 40,
          fillColor: '#ffff00',
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
          fillColor: '#ffff00',
          opacity: 0.5,
        },
        {
          y: 120,
          y2: 95,
          fillColor: '#ff8000',
          opacity: 0.5,
        },
        {
          y: 200,
          y2: 120,
          fillColor: '#ff0000',
          opacity: 0.3,
        },
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
