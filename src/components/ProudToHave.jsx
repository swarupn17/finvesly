import React from 'react';
import '../styles/ProudToHave.css';
import { FaHandHoldingUsd, FaChartPie, FaUsers, FaMapMarkerAlt, FaHandshake } from 'react-icons/fa';

const ProudToHave = () => {
  const stats = [
    {
      id: 1,
      icon: <FaHandHoldingUsd />,
      value: "₹1.62",
      suffix: " Cr.",
      label: "AUM"
    },
    {
      id: 2,
      icon: <FaChartPie />,
      value: "150+",
      suffix: "",
      label: "Investors"
    },
    {
      id: 3,
      icon: <FaUsers />,
      value: "5+",
      suffix: "Yrs.",
      label: "of experience in Finance Sector"
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt />,
      value: "53+",
      suffix: "",
      label: "Locations"
    },
    {
      id: 5,
      icon: <FaHandshake />,
      value: "10,000+",
      suffix: "",
      label: "People Financially Educated"
    }
  ];

  return (
    <section className="proud-container" aria-labelledby="proud-title">
      <h2 id="proud-title" className="proud-title">Proud To Have</h2>

      <div className="stats-grid" role="list">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="stat-item"
            role="listitem"
            aria-label={`${stat.value}${stat.suffix ? ' ' + stat.suffix : ''} — ${stat.label}`}
          >
            <div className="stat-icon" aria-hidden="true">
              {stat.icon}
            </div>
            <div className="stat-value-group">
              <span className="stat-value">{stat.value}</span>
              {stat.suffix && <span className="stat-suffix"> {stat.suffix}</span>}
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="proud-footer" aria-live="polite">
        As on 31st December 2025
      </div>
    </section>
  );
};

export default ProudToHave;
