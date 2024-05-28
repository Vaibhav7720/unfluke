import React from "react";
import { useMemo } from "react";
import { Chart, AxisOptions } from "react-charts";
type MyDatum = { name: String; avgDailyProfit: number; overallProfit: number };

const MyChart = () => {
  const data = [
    {
      label: "Selling with re entr",
      data: [
        {
          name: "Selling with re entr",
          avgDailyProfit: 319.54,
          overallProfit: 381845,
        },
      ],
    },
    {
      label: "Based on premium and",
      data: [
        {
          name: "Based on premium and",
          avgDailyProfit: 208.51,
          overallProfit: 255425,
        },
      ],
    },
    {
      label: "strategy_name_1",
      data: [
        {
          name: "strategy_name_1",
          avgDailyProfit: 216.31,
          overallProfit: 268872.5,
        },
      ],
    },
    {
      label: "strategy_name_2",
      data: [
        {
          name: "strategy_name_2",
          avgDailyProfit: 303.47,
          overallProfit: 370845,
        },
      ],
    },
  ];

  const primaryAxis = useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.name,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.avgDailyProfit,
        elementType: "bar", // Display as bars
      },
    ],
    []
  );

  const secondaryAxes2 = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.overallProfit,
        elementType: "bar", // Display as bars
      },
    ],
    []
  );

  return (
    <>
      <section style={{ height: "50vh" , marginBottom:"6em"}}>
        <h2>Daily Profit</h2>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            initialHeight: 200,
            initialWidth: 200,
          }}
        />
      </section>
      <section style={{ height: "50vh" }}>
        <h2>Overall Profit</h2>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes: secondaryAxes2,
            initialHeight: 200,
            initialWidth: 200,
          }}
        />
      </section>
    </>
  );
};

export default MyChart;
