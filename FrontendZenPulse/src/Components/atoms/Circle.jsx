import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Monday', bpm: 0 },
  { day: 'Tuesday', bpm: 65 },
  { day: 'Wednesday', bpm: 180 },
  { day: 'Thursday', bpm: 150 },
  { day: 'Friday', bpm: 120 },
  { day: 'Saturday', bpm: 90 },
  { day: 'Sunday', bpm: 60 },
];

const DemoArea = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bpm" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DemoArea;



