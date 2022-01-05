import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    // expect(1).toBe(3);
    // const component = shallow(<Header />);
    // const component = setUp();
    console.log(component.debug());
    // const wrapper = component.find('.headerComponent);
    // const wrapper = component.find(`[data-test='headerComponent']`);
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    // const component = shallow(<Header />);
    // const component = setUp();
    console.log(component.debug());
    // const wrapper = component.find(`[data-test='logoIMG']`);
    const wrapper = findByTestAttr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
