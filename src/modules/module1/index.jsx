import * as React from "react";
import { connect } from "react-redux";

import { fetchDataForModule1 } from "./actions";
import module1Reducer from "./reducer";
import useReduxModule from "../../utils/useReduxModule";
import saga from "./saga";

const Page = React.lazy(() => import("./pages/index"));

const Module1 = ({ fetchModule1Data }) => {
  useReduxModule("module1", module1Reducer, saga, fetchModule1Data);
  return <Page />;
};

export default connect(
  null,
  {
    fetchModule1Data: fetchDataForModule1
  }
)(Module1);
