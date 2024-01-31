"use strict";

const { expect, it } = require("@jest/globals");
const circle = require("./circle");

it("Calculates the area of a circle", function () {
	const area = circle.area(37);
	expect(area).toBeCloseTo(4300.84);
});

it("Calculates the circumference of a circle", function () {
	const circumference = circle.circumference(52);
	expect(circumference).toBeCloseTo(326.73);
});
