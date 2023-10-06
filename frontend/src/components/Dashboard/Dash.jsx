import React from "react";
import Alert from "./Alert";
import CheckSimilarity from "./utils/CheckSimilarity";
import Results from "./utils/Results";

import Layout from "./Layout";

const Dash = () => {
  const handleFile = (file) => {
    console.log("File uploaded:", file);
  };
  return (
    <Layout>
      <section>
        <Alert />
        <CheckSimilarity handleFile={handleFile} /> <Results />
      </section>
    </Layout>
  );
};

export default Dash;
