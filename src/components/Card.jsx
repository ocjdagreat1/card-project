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

    // Fetch data from API
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=18")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Split data into 6 chunks (3 cards each)
  const chunk1 = data.slice(0, 3);
  const chunk2 = data.slice(3, 6);
  const chunk3 = data.slice(6, 9);
  const chunk4 = data.slice(9, 12);
  const chunk5 = data.slice(12, 15);
  const chunk6 = data.slice(15, 18);

  const getAosType = (index) => {
    const directions = ["fade-up", "fade-right", "fade-left", "zoom-in"];
    return directions[index % directions.length];
  };

  // Random tech/media image generator
  const getImage = (index) =>
    `https://picsum.photos/seed/tech${index}/400/250`;

  return (
    <div className="services-wrapper">

      {/* SECTION 1 */}
      <section className="service-container theme-blue" data-aos="fade-up">
        <h2 className="service-title">Web Development & Engineering</h2>
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
        <h2 className="service-title">Data & Analytics</h2>
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
        <h2 className="service-title">Creative Media</h2>
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

      {/* SECTION 4 */}
      <section className="service-container theme-red" data-aos="fade-up">
        <h2 className="service-title">Digital Marketing</h2>
        {chunk4.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 3)}
            data-aos-delay={index * 150}
          >
            <img src={getImage(index + 9)} alt="Marketing" className="service-img" />
            <i className="fa-solid fa-bullhorn icon-red"></i>
            <h3>{item.title.slice(0, 35)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

      {/* SECTION 5 */}
      <section className="service-container theme-teal" data-aos="fade-right">
        <h2 className="service-title">Video Editing</h2>
        {chunk5.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 4)}
            data-aos-delay={index * 150}
          >
            <img src={getImage(index + 12)} alt="Video" className="service-img" />
            <i className="fa-solid fa-video icon-teal"></i>
            <h3>{item.title.slice(0, 35)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

      {/* SECTION 6 */}
      <section className="service-container theme-green" data-aos="fade-left">
        <h2 className="service-title">Graphics Design</h2>
        {chunk6.map((item, index) => (
          <div
            key={item.id}
            className="service"
            data-aos={getAosType(index + 5)}
            data-aos-delay={index * 150}
          >
            <img src={getImage(index + 15)} alt="Graphics" className="service-img" />
            <i className="fa-solid fa-pen-nib icon-green"></i>
            <h3>{item.title.slice(0, 35)}...</h3>
            <p>{item.body.slice(0, 100)}...</p>
          </div>
        ))}
      </section>

    </div>
  );
}
