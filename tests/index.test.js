import React from "react";
import { Text, View } from "react-native";
import { shallow } from "enzyme";
import MyComponent from "../components";
import { expect } from "chai";
import sinon from "sinon";

// todo: add functional test cases
describe("<MyComponent />", () => {
  it("should render text content", () => {
    const spy = sinon.spy();
    const wrapper = shallow(
      <MyComponent
        minVal={0}
        maxVal={1000}
        range={20000}
        paddingRight={0}
        onChange={spy}
        showLabels={true}
      />
    );
  });
});
