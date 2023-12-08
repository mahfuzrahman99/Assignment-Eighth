import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DemoPieChart = () => {
  const myDonation = JSON.parse(localStorage.getItem("donations"));

  const data = [
    { name: "Total Donation", value: 12 },
    { name: "Your Donation", value: 0 },
  ];

  data[0].value = 12 - myDonation.length;
  data[1].value = myDonation.length;

  return (
    <div className="mb-8 md:w-9/12 w-11/12 mx-auto bg-gray-50 rounded-md p-3 md:p-5">
      <div className="flex justify-center items-center w-full">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className="flex justify-center gap-1 md:gap-10">
        <div className="text-xs md:text-base">
          <button className="bg-[#FF444A] w-10 h-3 rounded-md"></button> Total
          Donation
        </div>
        <div className="text-xs md:text-base">
          <button className="bg-[#00C49F] w-10 h-3 rounded-md"></button> Your
          Donation
        </div>
      </div>
    </div>
  );
};

export default DemoPieChart;
