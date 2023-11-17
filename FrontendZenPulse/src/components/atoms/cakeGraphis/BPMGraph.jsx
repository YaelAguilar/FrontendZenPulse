import { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import io from 'socket.io-client';

const COLORS = ['#FF0826', '#FFFFFF'];

const BPMGraph = () => {
  const [percent, setPercent] = useState(0);

  // Conectar al servidor de Socket.IO
  const socket = io('http://localhost:3001', {
    transports: ['websocket'],
    withCredentials: true,
  });

  useEffect(() => {
    // Escuchar eventos 'data' para actualizaciones en tiempo real
    const handleData = (socketData) => {
      if (socketData.exchange === 'Sensor_Pulse') {
        const newPercent = parseFloat(socketData.data);
        if (!isNaN(newPercent)) {
          setPercent(newPercent);
        }
      }
    };

    socket.on('data', handleData);

    // Limpieza: desconectar el evento 'data' cuando el componente se desmonta
    return () => {
      socket.off('data', handleData);
      socket.disconnect();
    };
  }, [socket]);

  const data = [{ name: 'Actividad', value: percent }, { name: '', value: 100 - percent }];

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} innerRadius={40} outerRadius={60} fill="#084DFF">
            {data.map((entry, index) => (
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
            {Math.round(percent)}°
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BPMGraph;
