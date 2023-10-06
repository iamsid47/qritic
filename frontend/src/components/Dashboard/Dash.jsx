import React from "react";
import Alert from "./Alert";
import CheckSimilarity from "./utils/CheckSimilarity";
import Results from "./utils/Results";

import Layout from "./Layout";

const Dash = () => {
  return (
    <Layout>
      <section>
        <Alert />
        <CheckSimilarity />
        <Results />
      </section>
    </Layout>
  );
};

export default Dash;
