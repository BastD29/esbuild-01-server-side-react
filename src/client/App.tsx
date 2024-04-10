import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("World");

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
