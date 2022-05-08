import React from "react";
import { PieChart } from "../components/PieChart";
import "../styles/StatisticsPage.css";

function StatisticsPage() {
  return (
    <div className="statistics">
      {/* <div className="bar-chart">
        <BarChart />
      </div> */}
      <div className="pie-chart">
        <div className="company-wrapper">
          <p>manufacturer product count</p>
        </div>
        <PieChart />
      </div>
    </div>
  );
}

export default StatisticsPage;
