import { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const LinesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetchStressData();
  }, []);

  const asyncFetchStressData = () => {
    // Datos de estrés con etiquetas
    const stressData = [
      { timePeriod: '2023-01-01', stressLevel: 'bajo nivel' },
      { timePeriod: '2023-01-02', stressLevel: 'medio nivel' },
      { timePeriod: '2023-01-03', stressLevel: 'alto nivel' },
      // Agrega más datos aquí
    ];

    setData(stressData);
  };

  const config = {
    data,
    xField: 'timePeriod',
    yField: 'stressLevel', // El eje Y ahora representa las etiquetas de estrés
    xAxis: {
      title: { text: 'Fecha' },
    },
    yAxis: {
      title: { text: 'Nivel de Estrés' },
    },
  };

  return <Area {...config} />;
};

export default LinesChart;
