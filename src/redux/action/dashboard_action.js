import reduxConstants from "../constants/reduxConstants";

// ------------------- GET_DASHBOARD_STATS_ACTION ------------------- //
export const getDashboardStatsActionLoad = () => ({
  type: reduxConstants.GET_DASHBOARD_STATS_LOAD,
});
export const getDashboardStatsActionSuccess = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_STATS_SUCCESS,
  payload,
});
export const getDashboardStatsActionFail = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_STATS_FAIL,
  payload,
});
// ------------------------------------------------------------------ //

// -------------------- GET_DASHBOARD_PIE_ACTION -------------------- //
export const getDashboardPieActionLoad = () => ({
  type: reduxConstants.GET_DASHBOARD_PIE_LOAD,
});
export const getDashboardPieActionSuccess = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_PIE_SUCCESS,
  payload,
});
export const getDashboardPieActionFail = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_PIE_FAIL,
  payload,
});
// ------------------------------------------------------------------ //

// -------------------- GET_DASHBOARD_BAR_ACTION -------------------- //
export const getDashboardBarActionLoad = () => ({
  type: reduxConstants.GET_DASHBOARD_BAR_LOAD,
});
export const getDashboardBarActionSuccess = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_BAR_SUCCESS,
  payload,
});
export const getDashboardBarActionFail = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_BAR_FAIL,
  payload,
});
// ------------------------------------------------------------------ //

// ------------------- GET_DASHBOARD_LINE_ACTION -------------------- //
export const getDashboardLineActionLoad = () => ({
  type: reduxConstants.GET_DASHBOARD_LINE_LOAD,
});
export const getDashboardLineActionSuccess = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_LINE_SUCCESS,
  payload,
});
export const getDashboardLineActionFail = (payload) => ({
  type: reduxConstants.GET_DASHBOARD_LINE_FAIL,
  payload,
});
// ------------------------------------------------------------------ //
