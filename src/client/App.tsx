import React, { useEffect, useState } from "react";
import { fetchData } from "./services/fetchService";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      document.body.classList.add("debug-screens");
    }
  }, []);

  useEffect(() => {
    fetchData("/api/hello")
      .then((data) => setData(data.message))
      .catch(() => console.log("setError(true)"));
  }, []);

  // return (
  //   <div className="mt-5">
  //     <h1 className="text-center text-secondary">Hello {data}</h1>
  //   </div>
  // );
  return (
    <div className="container">
      <h1 className="text-red-700 bg-green-200">Hello {data}</h1>
      <button className="btn-primary">Test</button>
    </div>
  );
};

export default App;
