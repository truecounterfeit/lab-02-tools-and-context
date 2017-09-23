'use strict';
//create stand alone functions with concat, filter, map, splice and reduce, using call, bind, and apply

const fp = module.exports = exports = {};

//concat
fp.concat1.first = function (a, cb) {
  return Array.prototype.concat.call(a, cb);
};

fp.concat1.second = function (a, b) {
  return Array.prototype.concat.bind(a, b);
};

fp.concat1.third = function (a, b) {
  return Array.prototype.concat.apply(a, b);
};

//filter
fp.filter2.first = function (a, cb) {
  return Array.prototype.filter.call(a, cb);
};

fp.filter2.second = function (a, b) {
  return Array.prototype.filter.bind(a, b);
};

fp.filter2.third = function (a, b) {
  return Array.prototype.filter.apply(a, b);
};

//map
fp.map3.first = function (a, cb) {
  return Array.prototype.map.call(a, cb);
};

fp.map3.second = function (a, b) {
  return Array.prototype.map.bind(a, b);
};

fp.map3.third = function (a, b) {
  return Array.prototype.map.apply(a, b);
};

//splice
fp.splice4.first = function (a, cb) {
  return Array.prototype.splice.call(a, cb);
};

fp.splice4.second = function (a, b) {
  return Array.prototype.splice.bind(a, b);
};

fp.splice4.third = function (a, b) {
  return Array.prototype.splice.apply(a, b);
};

//reduce
fp.reduce5.first = function (a, cb) {
  return Array.prototype.reduce.call(a, cb);
};

fp.reduce5.second = function (a, b) {
  return Array.prototype.reduce.bind(a, b);
};

fp.reduce5.third = function (a, b) {
  return Array.prototype.reduce.apply(a, b);
};
