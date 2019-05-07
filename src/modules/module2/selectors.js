import { createSelector } from "reselect";

const getModule2 = state => state.module2;

export const getModule1Loading = createSelector(getModule2, m => m.isLoading);

export const getModule2Data = createSelector(getModule2, m => m.data);

export const getModule2Error = createSelector(getModule2, m => m.error);
