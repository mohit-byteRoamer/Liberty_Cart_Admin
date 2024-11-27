import reduxConstants from "../constants/reduxConstants";

export const dashboardStatsActionLoad = () => ({
  type: reduxConstants.DASHBOARD_STATS_LOAD,
});

export const dashboardStatsActionSuccess = (action) => ({
  type: reduxConstants.DASHBOARD_STATS_SUCCESS,
  payload: action,
});

export const dashboardStatsActionFail = (action) => ({
  type: reduxConstants.DASHBOARD_STATS_FAIL,
  payload: action,
});
