import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  getModule1Loading,
  getModule1Error,
  getModule1Data
} from "../selectors";

const Page = () => {
  return (
    <React.Fragment>
      <Link to="/module2">Module2</Link>
      <p>Loaded page</p>
    </React.Fragment>
  );
};

export default connect(state => ({
  isLoading: getModule1Loading,
  data: getModule1Data,
  error: getModule1Error
}))(Page);
