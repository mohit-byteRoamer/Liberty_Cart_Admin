import reduxConstants from "../constants/reduxConstants";

const initialState = {
  getDashboardStatsLoader: false,
  getDashboardStatsData: [],
  getDashboardPieLoader: false,
  getDashboardPieData: [],
  getDashboardBarLoader: false,
  getDashboardBarData: [],
  getDashboardLineLoader: false,
  getDashboardLineData: [],
};

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    // ------------------------------ DASHBOARD_STATS_REDUCER ------------------------------ //
    case reduxConstants.GET_DASHBOARD_STATS_LOAD: {
      return { ...state, getDashboardStatsLoader: true };
    }
    case reduxConstants.GET_DASHBOARD_STATS_SUCCESS: {
      return { ...state, getDashboardStatsLoader: false, getDashboardStatsData: action.payload };
    }
    case reduxConstants.GET_DASHBOARD_STATS_FAIL: {
      return { ...state, getDashboardStatsLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // ------------------------------- DASHBOARD_PIE_REDUCER ------------------------------- //
    case reduxConstants.GET_DASHBOARD_PIE_LOAD: {
      return { ...state, getDashboardPieLoader: true };
    }
    case reduxConstants.GET_DASHBOARD_PIE_SUCCESS: {
      return { ...state, getDashboardPieLoader: false, getDashboardPieData: action.payload };
    }
    case reduxConstants.GET_DASHBOARD_PIE_FAIL: {
      return { ...state, getDashboardPieLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // ------------------------------- DASHBOARD_BAR_REDUCER ------------------------------- //
    case reduxConstants.GET_DASHBOARD_BAR_LOAD: {
      return { ...state, getDashboardBarLoader: true };
    }
    case reduxConstants.GET_DASHBOARD_BAR_SUCCESS: {
      return { ...state, getDashboardBarLoader: false, getDashboardBarData: action.payload };
    }
    case reduxConstants.GET_DASHBOARD_BAR_FAIL: {
      return { ...state, getDashboardBarLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // ------------------------------- DASHBOARD_LINE_REDUCER ------------------------------ //
    case reduxConstants.GET_DASHBOARD_LINE_LOAD: {
      return { ...state, getDashboardLineLoader: true };
    }
    case reduxConstants.GET_DASHBOARD_LINE_SUCCESS: {
      return { ...state, getDashboardLineLoader: false, getDashboardLineData: action.payload };
    }
    case reduxConstants.GET_DASHBOARD_LINE_FAIL: {
      return { ...state, getDashboardLineLoader: false };
    }
    // ------------------------------------------------------------------------------------- //

    // -------------------------------------- DEFAULT ---------------------------------------//
    default:
      return state;
  }
};
