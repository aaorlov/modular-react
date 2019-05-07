import { createSelector } from "reselect";

const getModule1 = state => state.module1;

export const getModule1Loading = createSelector(getModule1, m => m.isLoading);

export const getModule1Data = createSelector(getModule1, m => m.data);

export const getModule1Error = createSelector(getModule1, m => m.error);
