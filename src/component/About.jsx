import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <Layout title="About">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default About;
