import reduxConstants from "../constants/reduxConstants";

const initialState = {
  createCouponCodeData: [],
  createCouponCodeLoader: false,
  getAllCouponCodeData: [],
  getAllCouponCodeLoader: false,
  deleteCouponCodeData: [],
  deleteCouponCodeLoader: false,
};

export const CouponReducer = (state = initialState, action) => {
  switch (action.type) {
    // ------------------------------ CREATE_COUPON_CODE_REDUCER ------------------------------ //
    case reduxConstants.CREATE_COUPON_CODE_LOAD: {
        return { ...state, createCouponCodeLoader: true };
    }
    case reduxConstants.CREATE_COUPON_CODE_SUCCESS: {
        return { ...state, createCouponCodeLoader: false, createCouponCodeData: action.payload };
    }
    case reduxConstants.CREATE_COUPON_CODE_FAIL: {
        return { ...state, createCouponCodeLoader: false };
    }
    // ---------------------------------------------------------------------------------------- //
    
    // ------------------------------ GET_ALL_COUPON_CODE_REDUCER ----------------------------- //
    case reduxConstants.GET_ALL_COUPON_CODE_LOAD: {
        return { ...state, getAllCouponCodeLoader: true };
    }
    case reduxConstants.GET_ALL_COUPON_CODE_SUCCESS: {
        return { ...state, getAllCouponCodeLoader: false, getAllCouponCodeData: action.payload };
    }
    case reduxConstants.GET_ALL_COUPON_CODE_FAIL: {
        return { ...state, getAllCouponCodeLoader: false };
    }
    // ---------------------------------------------------------------------------------------- //
    
    // ------------------------------ DELETE_COUPON_CODE_REDUCER ------------------------------ //
    case reduxConstants.DELETE_COUPON_CODE_LOAD: {
        return { ...state, deleteCouponCodeLoader: true };
    }
    case reduxConstants.DELETE_COUPON_CODE_SUCCESS: {
        return { ...state, deleteCouponCodeLoader: false, deleteCouponCodeData: action.payload };
    }
    case reduxConstants.DELETE_COUPON_CODE_FAIL: {
        return { ...state, deleteCouponCodeLoader: false };
    }
    // ---------------------------------------------------------------------------------------- //
    
    // ---------------------------------------- DEFAULT ----------------------------------------//
    default:
        return state;
    }
    // ---------------------------------------------------------------------------------------- //
};
