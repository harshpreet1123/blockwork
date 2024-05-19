import BarChart from "../../components/graphs/BarChart";
import PieChat from "../../components/graphs/PieChart";
import SplineGraph from "../../components/graphs/SplineGraph";

const Stats = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-16">
        <PieChat />
        <BarChart/>
      </div>
      <div>
        <SplineGraph />
      </div>
    </div>
  );
};

export default Stats;
