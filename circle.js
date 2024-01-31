"use strict";

const { PI } = Math;

/**
 * Calculates the area of a circle.
 * @param {number} r The radius of the circle.
 * @returns {number} The area of the circle.
 */
exports.area = function (r) {
	return PI * r ** 2;
};

/**
 * Calculates the circumference of a circle.
 * @param {number} r The radius of the circle.
 * @returns {number} The circumference of the circle.
 */
exports.circumference = function (r) {
	return 2 * PI * r;
};
