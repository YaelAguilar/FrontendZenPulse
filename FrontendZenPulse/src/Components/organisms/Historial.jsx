import { useState, useEffect } from 'react';
import { FaHistory } from 'react-icons/fa';
import DemoArea from '../atoms/Circle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Historial = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [demoAreaKey, setDemoAreaKey] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const historialExtendido = [
    { date: '2023-01-01', action: 'Acción 1', stressLevel: 3 },
    { date: '2023-02-15', action: 'Acción 2', stressLevel: 7 },
    { date: '2023-03-22', action: 'Acción 3', stressLevel: 2 },
  ];

  const promedioNivelEstres =
    historialExtendido.reduce((acc, item) => acc + item.stressLevel, 0) /
    historialExtendido.length;
  const nivelMaximoEstres = Math.max(
    ...historialExtendido.map((item) => item.stressLevel)
  );

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Cambiar la clave de DemoArea cada vez que cambies de sección
  useEffect(() => {
    setDemoAreaKey((prevKey) => prevKey + 1);
  }, []); // Se ejecuta solo en el montaje inicial

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-6">
        <FaHistory className="text-gray-600 mr-2" />
        Record
      </h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 mb-8 lg:mb-0 mx-auto">
          <Calendar
            className="custom-calendar bg-white shadow-md p-4 rounded-md w-full"
            locale="en-LR"
            tileClassName={({ date, view }) =>
              view === 'month' && date.getDay() === 0 ? 'sunday' : null
            }
            next2Label={<span>&#9654;&#9654;</span>}
            prev2Label={<span>&#9664;&#9664;</span>}
            tileContent={({ date }) =>
              isToday(date) ? (
                <div className="circle-marker bg-blue-500"></div>
              ) : null
            }
          />
        </div>
        <div className="lg:w-2/3 mx-auto">
          <DemoArea key={demoAreaKey} />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Additional statistics:</h2>
        <p className="text-gray-700">
          Average Stress Level: {promedioNivelEstres.toFixed(2)}
        </p>
        <p className="text-gray-700">
          Maximum Stress Level: {nivelMaximoEstres}
        </p>
      </div>
    </div>
  );
};

export default Historial;
