// import { LineChart, Line,XAxis,YAxis } from 'recharts';
import{
    ComposedChart,
    Line,
    XAxis,
    YAxis ,
    CartesianGrid,
    ResponsiveContainer,
    Area,
    Bar,
    Scatter,
    Tooltip,
    Legend         

} from 'recharts';

const Rechart = () => {
    // const studentData = [
    //     { student: 1, mathScore: 75, physicsScore: 80, chemistryScore: 85 },
    //     { student: 2, mathScore: 80, physicsScore: 85, chemistryScore: 90 },
    //     { student: 3, mathScore: 85, physicsScore: 88, chemistryScore: 92 },
    //     { student: 4, mathScore: 78, physicsScore: 82, chemistryScore: 88 },
    //     { student: 5, mathScore: 82, physicsScore: 87, chemistryScore: 89 },
    //     { student: 6, mathScore: 88, physicsScore: 90, chemistryScore: 94 },
    //     { student: 7, mathScore: 72, physicsScore: 78, chemistryScore: 80 },
    //     { student: 8, mathScore: 90, physicsScore: 92, chemistryScore: 95 },
    //     { student: 9, mathScore: 76, physicsScore: 81, chemistryScore: 86 },
    //     { student: 10, mathScore: 84, physicsScore: 89, chemistryScore: 91 }
    // ];
    const chartData = [
        { name: "Data Point 1", dataPoint: 1, lineValue: 5, barValue: 20, areaValue: 10 },
        { name: "Data Point 2", dataPoint: 2, lineValue: 7, barValue: 18, areaValue: 12 },
        { name: "Data Point 3", dataPoint: 3, lineValue: 9, barValue: 22, areaValue: 14 },
        { name: "Data Point 4", dataPoint: 4, lineValue: 6, barValue: 19, areaValue: 11 },
        { name: "Data Point 5", dataPoint: 5, lineValue: 8, barValue: 21, areaValue: 13 },
        { name: "Data Point 6", dataPoint: 6, lineValue: 10, barValue: 24, areaValue: 15 },
        { name: "Data Point 7", dataPoint: 7, lineValue: 7, barValue: 20, areaValue: 12 },
        { name: "Data Point 8", dataPoint: 8, lineValue: 6, barValue: 18, areaValue: 11 },
        { name: "Data Point 9", dataPoint: 9, lineValue: 8, barValue: 23, areaValue: 13 },
        { name: "Data Point 10", dataPoint: 10, lineValue: 9, barValue: 25, areaValue: 14 }
    ];
    return (
        <div>
            {/* <LineChart width={500} height={400} data={studentData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
              <Line dataKey={'physicsScore'} ></Line>
            </LineChart> */}
        <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer>
        <ComposedChart
        width={500}
        height={400}
        data={chartData}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        }}
        >
        <CartesianGrid stroke="#f5f5f5" /> 
        <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis> 
          <Tooltip />
          <Legend />
          <Area dataKey={'lineValue'}></Area>
          <Bar dataKey="dataPoint" barSize={30} fill="#413ea0"></Bar>
          <Scatter dataKey="dataPoint" fill="red" />
          <Line dataKey={'barValue' } stroke='red'></Line>

        </ComposedChart>
            
        </div>
    );
};

export default Rechart;