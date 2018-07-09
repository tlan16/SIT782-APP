import properties from "../../reducer/";
import { Reducer } from "redux-testkit";

const initialState = {
  byId: {},
  listByColumn: {
    errorMessage: null,
    isFetching: false,
    lists: {
      results: [],
      saved: []
    }
  },
  agency: {}
};


describe("store/properties/reducer/index", () => {
  it("should have initial state", () => {
    expect(properties()).toEqual(initialState);
  });

  it("should not affect state", () => {
    Reducer(properties)
      .expect({ type: "NOT_EXISTING" })
      .toReturnState(initialState);
  });
});
