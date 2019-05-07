import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  getModule2Loading,
  getModule2Error,
  getModule2Data
} from "../selectors";

const Page = () => {
  return (
    <React.Fragment>
      <Link to="/">Module1</Link>
      <p>Loaded page</p>
    </React.Fragment>
  );
};

export default connect(state => ({
  isLoading: getModule2Loading,
  data: getModule2Data,
  error: getModule2Error
}))(Page);
