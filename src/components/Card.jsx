import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "../index.css";

export default function ServiceSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize animations
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Fetch data
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Split data into 3 chunks
  const chunk1 = data.slice(0, 3);
  const chunk2 = data.slice(3, 6);
  const chunk3 = data.slice(6, 9);

  const getAosType = (index) => {
    const directions = ["fade-up", "fade-right", "fade-left", "zoom-in"];
    return directions[index % directions.length];
  };

  // Random tech image generator
  const getImage = (index) =>
    `https://picsum.photos/seed/tech${index}/400/250?grayscale`;

  return (
    <div className="services-wrapper">
      {/* SECTION 1 */}
      <section className="service-container theme-blue" data-aos="fade-up">
        <h2 className="service-title">Wonderland</h2>
        {chunk1.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index)}
            data-aos-delay={index * 150}
          >
            <img src={getImage(index)} alt="Tech" className="service-img" />
            <i className="fa-solid fa-laptop-code icon-blue"></i>
            <h3>{item.title.slice(0, 35)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

      {/* SECTION 2 */}
      <section className="service-container theme-orange" data-aos="fade-right">
        <h2 className="service-title">Magnificient Land</h2>
        {chunk2.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 1)}
            data-aos-delay={index * 150}
          >
            <img src={getImage(index + 3)} alt="Data" className="service-img" />
            <i className="fa-solid fa-chart-line icon-orange"></i>
            <h3>{item.title.slice(0, 35)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

      {/* SECTION 3 */}
      <section className="service-container theme-purple" data-aos="fade-left">
        <h2 className="service-title">Harmonous Land</h2>
        {chunk3.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 2)}
            data-aos-delay={index * 150}
          >
            <img src={getImage(index + 6)} alt="Media" className="service-img" />
            <i className="fa-solid fa-camera-retro icon-purple"></i>
            <h3>{item.title.slice(0, 35)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>
    </div>
  );
}
