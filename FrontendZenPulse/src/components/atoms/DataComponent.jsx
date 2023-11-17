import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from 'recharts';

const SOCKET_SERVER_URL = 'http://localhost:3001';
const MAX_VALUE = 90; // Valor máximo para completar el anillo
const FIXED_COLOR = '#FF0000'; // Color fijo para el anillo

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, { transports: ['websocket'], withCredentials: true });

    socket.on('data', (socketData) => {
      if (socketData.exchange === 'Pulse_Sensor') {
        const newData = {
          value: parseFloat(socketData.data),
        };
        setData([newData]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Ajusta el ángulo del anillo según el porcentaje del valor máximo permitido
  const angleScale = (value) => {
    const percentage = value / MAX_VALUE;
    return percentage * 180; // Ángulo máximo es 180 grados
  };

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90} // Ajusta el valor para hacer el anillo más delgado
            innerRadius={60} // Ajusta el valor para hacer el anillo más delgado
            fill={FIXED_COLOR} // Establecer un color fijo para el anillo
            startAngle={angleScale(0)}
            endAngle={angleScale(data[0]?.value || 0)}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={FIXED_COLOR} />
            ))}
            <Label value={data[0]?.value || ''} position="center" fill="#000" fontSize={16} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataComponent;
