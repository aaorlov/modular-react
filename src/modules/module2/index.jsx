import * as React from "react";
import { connect } from "react-redux";

import { fetchDataForModule2 } from "./actions";
import module2Reducer from "./reducer";
import useReduxModule from "../../utils/useReduxModule";
import saga from "./saga";

const Page = React.lazy(() => import("./pages/index"));

const Module2 = ({ fetchModule2Data }) => {
  useReduxModule("module2", module2Reducer, saga, fetchModule2Data);
  return <Page />;
};

export default connect(
  null,
  {
    fetchModule2Data: fetchDataForModule2
  }
)(Module2);
