// import React, { useState, useRef, useEffect } from "react";
// import * as d3 from "d3";

// export const BarChart = () => {
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products"))
//       .sort((a, b) => {
//         return b.price - a.price;
//       })
//       .map((product) => product.price)
//       .slice(0, 5)
//   );

//   const svgRef = useRef();

//   useEffect(() => {
//     const w = 400;
//     const h = 400;
//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", w)
//       .attr("height", h)
//       .style("overflow", "visible")
//       .style("margin-top", "75px")
//       .style("margin-left", "75px");

//     const xScale = d3
//       .scaleBand()
//       .domain(products.map((val, i) => i))
//       .range([0, w])
//       .padding(0.5);
//     const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

//     const xAxis = d3.axisBottom(xScale).ticks(products.length);
//     const yAxis = d3.axisLeft(xScale).ticks(5);
//     svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
//     svg.append("g").call(yAxis);

//     svg
//       .selectAll(".bar")
//       .data(products)
//       .join("rect")
//       .attr("x", (v, i) => xScale(i))
//       .attr("y", yScale)
//       .attr("width", xScale.bandwidth())
//       .attr("height", (val) => h - yScale(val));
//   }, [products]);

//   return (
//     <div className="bar-chart">
//       <h6>Price of medicine</h6>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// };
