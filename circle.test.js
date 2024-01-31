"use strict";

var { expect, it } = require("@jest/globals");
var circle = require("./circle");

it("Calculates the area of a circle", () => {
	var area = circle.area(37);
	expect(area).toBeCloseTo(4300.84);
});

it("Calculates the circumference of a circle", () => {
	var circumference = circle.circumference(52);
	expect(circumference).toBeCloseTo(326.73);
});
