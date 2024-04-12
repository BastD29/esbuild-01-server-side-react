import React, { useEffect, useState } from "react";
import { fetchData } from "./services/fetchService";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData("/api/hello")
      .then((data) => setData(data.message))
      .catch(() => console.log("setError(true)"));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center text-secondary">Hello {data}</h1>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi
        odio. Ad necessitatibus officiis ab, unde ratione, sunt cum fugit saepe
        quos facere dolore natus enim quaerat iure, obcaecati a!
      </p> */}
    </div>
  );
};

export default App;
