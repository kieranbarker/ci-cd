"use strict";

const { PI } = Math;

/**
 * Calculates the area of a circle.
 * @param {number} radius The radius of the circle.
 * @returns {number} The area of the circle.
 */
exports.area = function (radius) {
	return PI * radius ** 2;
};

/**
 * Calculates the circumference of a circle.
 * @param {number} radius The radius of the circle.
 * @returns {number} The circumference of the circle.
 */
exports.circumference = function (radius) {
	return 2 * PI * radius;
};
