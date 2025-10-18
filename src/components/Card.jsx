import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css"
export default function ImgMediaCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "25px",
        padding: "40px 20px",
        backgroundColor: "#f5f6fa",
      }}
    >
      {data.map((info, index) => (
        <Card
          key={info.id}
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt={info.title}
            height="180"
            image={`https://picsum.photos/400/200?random=${index + 1}`} // Random image
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                color: "#333",
                textTransform: "capitalize",
              }}
            >
              {info.title.length > 40
                ? info.title.slice(0, 40) + "..."
                : info.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.6 }}
            >
              {info.body.length > 100
                ? info.body.slice(0, 100) + "..."
                : info.body}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
            <Button size="small" variant="outlined" color="secondary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>

{data.map((info, index) => (
    <div class="service-container">
       
      <div class="service">
        <i class="fa-solid fa-laptop-code"></i>
        <h3>{info.title}</h3>
        <p>{info.body}.</p>
      </div>
      <div class="service">
        <i class="fa-solid fa-chart-column"></i>
        <h3>Data Analysis</h3>
        <p>turning raw numbers into meaningful insights that drive smarter decisions.</p>
      </div>
      <div class="service">
        <i class="fa-solid fa-globe"></i>
        <h3>Digital Marketing And Content Creation</h3>
        <p>Digital marketing powered by great content doesn’t just sell—it tells a story that connects and inspires..</p>
      </div>

      <div class="service">
        <i class="fa-solid fa-camera"></i>
        <h3>Photography/Video editing</h3>
        <p>In our photography and video editing class,we combine technical skill with creativity, playing a vital role in modern media, communication, and visual storytelling.</p>
      </div>
    </div>
       ))}

    </>
  );
}
