import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../index.css"; // your CSS file

export default function ServiceSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Fetch API data
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Split fetched data into 3 groups (3 cards per section)
  const chunk1 = data.slice(0, 3);
  const chunk2 = data.slice(3, 6);
  const chunk3 = data.slice(6, 9);

  // Helper for alternating animation directions
  const getAosType = (index) => {
    const directions = ["fade-up", "fade-right", "fade-left", "zoom-in"];
    return directions[index % directions.length];
  };

  return (
    <div className="services-wrapper">
      {/* Section 1 — Web Development */}
      <section className="service-container theme-blue" data-aos="fade-up">
        <h2 className="service-title">Web Development & Tech</h2>
        {chunk1.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index)}
            data-aos-delay={index * 200}
          >
            <i className="fa-solid fa-laptop-code"></i>
            <h3>{item.title.slice(0, 30)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

      {/* Section 2 — Data & Analytics */}
      <section className="service-container theme-orange" data-aos="fade-right">
        <h2 className="service-title">Data & Analytics</h2>
        {chunk2.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 1)}
            data-aos-delay={index * 200}
          >
            <i className="fa-solid fa-chart-column"></i>
            <h3>{item.title.slice(0, 30)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

      {/* Section 3 — Creative Media */}
      <section className="service-container theme-purple" data-aos="fade-left">
        <h2 className="service-title">Creative Media & Marketing</h2>
        {chunk3.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 2)}
            data-aos-delay={index * 200}
          >
            <i className="fa-solid fa-camera"></i>
            <h3>{item.title.slice(0, 30)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>
    </div>
  );
}
