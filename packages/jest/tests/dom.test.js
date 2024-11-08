const { generateDiv } = require("../src/dom");
require("../src/jsdom-config");
describe("Dom测试", () => {
  test("测试dom操作", () => {
    generateDiv();
    expect(document.getElementsByClassName("c1").length).toBe(1);
  });
});