import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Label from "./Label";
import { chartData, getTotal } from "../utility/helper";
import { useGetLabelsQuery } from "../store/expenseApi";

Chart.register(ArcElement);

function Graph() {
  const { data, isError, isFetching, isSuccess } = useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Loading...</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chartData(data)} />;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {/* charts */}
          {graphData}
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">
              &#8358;{getTotal(data)}
            </span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          {/* labels */}
          <Label />
        </div>
      </div>
    </div>
  );
}

export default Graph;
