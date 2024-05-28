import React, { useState } from "react";
import FeaturesSection from "./section";
import MyChart from "./MyCharts.tsx";
import "./index.css";

function App() {
  const [slippage, setSlippage] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const strategies = [
    {
      rank: 1,
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 2,
      name: "strategy_name_1",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentage: 0.64,
      price: 500,
      action: "Buy",
    },
    {
      rank: 3,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentage: 0.64,
      price: "-",
      action: "View",
    },
    {
      rank: 4,
      name: "strategy_name_2",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
  ];

  const handleSlippageChange = (event) => {
    setSlippage(parseInt(event.target.value));
  };

  const handleStrategySelect = (strategy) => {
    setSelectedStrategy(strategy);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="./public/logo.jpg" alt="Unfl Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">LeaderBoard</a>
            </li>
            <li>
              <a href="#">Historical Trading</a>
            </li>
            <li>
              <a href="#">Historical Chart</a>
            </li>
            <li>
              <a href="#">Scanners</a>
            </li>
            <li>
              <a href="#">Alerts</a>
            </li>
            <li>
              <a href="#">Basic Backtest</a>
            </li>
            <li>
              <a href="#">Advanced Backtest</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">My Earnings</a>
            </li>
          </ul>
        </nav>
        <div className="user-info">
          <span className="notification">
            <i className="fas fa-bell"></i>
            <span className="count">0</span>
          </span>
          <span className="profile">
            <img src="user-icon.png" alt="User Profile" />
          </span>
        </div>
      </header>
      <main>
        <h2>LeaderBoards</h2>
        <section className="basic-backtest">
          <h3>Basic Backtest</h3>
          <div className="slippage-control">
            <label htmlFor="slippage">Slippage:</label>
            <select
              id="slippage"
              value={slippage}
              onChange={handleSlippageChange}
            >
              <option value="0">0%</option>
              <option value="1">1%</option>
              <option value="2">2%</option>
              <option value="3">3%</option>
              <option value="4">4%</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win %(Day)</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((strategy) => (
                <tr
                  key={strategy.rank}
                  className={selectedStrategy === strategy ? "selected" : ""}
                  onClick={() => handleStrategySelect(strategy)}
                >
                  <td>{strategy.rank}</td>
                  <td>{strategy.name}</td>
                  <td>{strategy.calmarRatio}</td>
                  <td>{strategy.overallProfit}</td>
                  <td>{strategy.avgDailyProfit}</td>
                  <td>{strategy.winPercentage}</td>
                  <td>{strategy.price}</td>
                  <td>
                    <button onClick={() => alert(`Action: ${strategy.action}`)}>
                      {strategy.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedStrategy && (
            <div className="strategy-details">
              <h4>Strategy Details</h4>
              <p>
                <strong>Name:</strong> {selectedStrategy.name}
              </p>
              <p>
                <strong>Calmar Ratio:</strong> {selectedStrategy.calmarRatio}
              </p>
              <p>
                <strong>Overall Profit:</strong>{" "}
                {selectedStrategy.overallProfit}
              </p>
              {/* Add more details as needed */}
            </div>
          )}
        </section>
      </main>
      <MyChart></MyChart>
      {/* <FeaturesSection></FeaturesSection> */}
      <footer>{/* Add footer content */}</footer>
    </div>
  );
}

export default App;
