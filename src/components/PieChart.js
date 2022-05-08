import React, { useState, useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";

export const PieChart = () => {
  const [manufacturers, setManufacturers] = useState(
    Object.entries(
      JSON.parse(localStorage.getItem("products"))
        .map((product) => product.manufacturer)
        .reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
        }, {})
    )
  );
  console.log(setManufacturers);
  let array = useMemo(() => [], []);
  manufacturers.forEach(([key, value]) => {
    array.push({ property: key, value: value });
  });
  console.log(array);
  const svgRef = useRef();

  useEffect(() => {
    const w = 200;
    const h = 400;
    const radius = w / 2;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "300px")
      .style("margin-left", "200px");

    const formatData = d3.pie().value((d) => d.value)(array);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet1);

    svg
      .selectAll(".bar")
      .data(formatData)
      .join("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.value), "#4d4d4d")
      .style("opacity", 0.7)
      .style("stroke", "white");
    svg
      .selectAll(".bar")
      .data(formatData)
      .join("text")
      .text((d) => d.data.property)
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle");
  }, [array]);
  return (
    <div className="pie-chart-wrapper">
      <svg ref={svgRef}></svg>
    </div>
  );
};
