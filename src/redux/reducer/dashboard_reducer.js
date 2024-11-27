import reduxConstants from "../constants/reduxConstants";

const initialState = {
  dashboardStatsLoader: false,
  dashboardStatsData: [],
  dashboardPieLoader: false,
  dashboardPieData: [],
  dashboardBarLoader: false,
  dashboardBarData: [],
  dashboardLineLoader: false,
  dashboardLineData: [],
};

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    // ------------------------------ DASHBOARD_STATS_REDUCER ------------------------------ //
    case reduxConstants.DASHBOARD_STATS_LOAD: {
      return { ...state, dashboardStatsLoader: true };
    }
    case reduxConstants.DASHBOARD_STATS_SUCCESS: {
      return { ...state, dashboardStatsLoader: false, dashboardStatsData: action.payload };
    }
    case reduxConstants.DASHBOARD_STATS_FAIL: {
      return { ...state, dashboardStatsLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // ------------------------------- DASHBOARD_PIE_REDUCER ------------------------------- //
    case reduxConstants.DASHBOARD_PIE_LOAD: {
      return { ...state, dashboardPieLoader: true };
    }
    case reduxConstants.DASHBOARD_PIE_SUCCESS: {
      return { ...state, dashboardPieLoader: false, dashboardPieData: action.payload };
    }
    case reduxConstants.DASHBOARD_PIE_FAIL: {
      return { ...state, dashboardPieLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // ------------------------------- DASHBOARD_BAR_REDUCER ------------------------------- //
    case reduxConstants.DASHBOARD_BAR_LOAD: {
      return { ...state, dashboardBarLoader: true };
    }
    case reduxConstants.DASHBOARD_BAR_SUCCESS: {
      return { ...state, dashboardBarLoader: false, dashboardBarData: action.payload };
    }
    case reduxConstants.DASHBOARD_BAR_FAIL: {
      return { ...state, dashboardBarLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // ------------------------------- DASHBOARD_LINE_REDUCER ------------------------------ //
    case reduxConstants.DASHBOARD_LINE_LOAD: {
      return { ...state, dashboardLineLoader: true };
    }
    case reduxConstants.DASHBOARD_LINE_SUCCESS: {
      return { ...state, dashboardLineLoader: false, dashboardLineData: action.payload };
    }
    case reduxConstants.DASHBOARD_LINE_FAIL: {
      return { ...state, dashboardLineLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // -------------------------------------- DEFAULT ---------------------------------------//
    default:
      return state;
  }
};
