import { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const DemoArea = () => {
  const data = [
    {
      type: 'Lunes',
      sales: 38,
    },
    {
      type: 'Martes',
      sales: 52,
    },
    {
      type: 'Miercoles',
      sales: 61,
    },
    {
      type: 'Jueves',
      sales: 145,
    },
    {
      type: 'Viernes',
      sales: 48,
    },
    {
      type: 'Sabado',
      sales: 38,
    },
    {
      type: 'Domingo',
      sales: 38,
    },
   
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Nivel',
      },
      sales: {
        alias: 'Nivel',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return <Column {...config} />;
};
export default DemoArea;