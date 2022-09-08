var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/array.js
var require_array = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/array.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    exports.__esModule = true;
    exports.diff = exports.iterate = exports.sift = exports.replaceOrAppend = exports.merge = exports.fork = exports.intersects = exports.flat = exports.list = exports.range = exports.unique = exports.cluster = exports.min = exports.max = exports.select = exports.objectify = exports.replace = exports.counting = exports.alphabetical = exports.sort = exports.last = exports.first = exports.sum = exports.boil = exports.group = void 0;
    var group = function(array, getGropuId) {
      return array.reduce(function(acc, item) {
        var _a;
        var _b;
        var groupId = getGropuId(item);
        var groupList = (_b = acc[groupId]) !== null && _b !== void 0 ? _b : [];
        return __assign(__assign({}, acc), (_a = {}, _a[groupId] = __spreadArray(__spreadArray([], groupList, true), [item], false), _a));
      }, {});
    };
    exports.group = group;
    var boil = function(array, compareFunc) {
      var _a;
      if (!array || ((_a = array.length) !== null && _a !== void 0 ? _a : 0) === 0)
        return null;
      return array.reduce(compareFunc);
    };
    exports.boil = boil;
    var sum = function(array, fn) {
      return (array || []).reduce(function(acc, item) {
        return acc + (fn ? fn(item) : item);
      }, 0);
    };
    exports.sum = sum;
    var first = function(array, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = void 0;
      }
      return (array === null || array === void 0 ? void 0 : array.length) > 0 ? array[0] : defaultValue;
    };
    exports.first = first;
    var last = function(array, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = void 0;
      }
      return (array === null || array === void 0 ? void 0 : array.length) > 0 ? array[array.length - 1] : defaultValue;
    };
    exports.last = last;
    var sort = function(array, getter, desc) {
      if (desc === void 0) {
        desc = false;
      }
      if (!array)
        return [];
      var asc = function(a, b) {
        return getter(a) - getter(b);
      };
      var dsc = function(a, b) {
        return getter(b) - getter(a);
      };
      return array.slice().sort(desc === true ? dsc : asc);
    };
    exports.sort = sort;
    var alphabetical = function(array, getter, dir) {
      if (dir === void 0) {
        dir = "asc";
      }
      if (!array)
        return [];
      var asc = function(a, b) {
        return ("" + getter(a)).localeCompare(getter(b));
      };
      var dsc = function(a, b) {
        return ("" + getter(b)).localeCompare(getter(a));
      };
      return array.slice().sort(dir === "desc" ? dsc : asc);
    };
    exports.alphabetical = alphabetical;
    var counting = function(list2, identity) {
      return list2.reduce(function(acc, item) {
        var _a;
        var _b;
        var id = identity(item);
        return __assign(__assign({}, acc), (_a = {}, _a[id] = ((_b = acc[id]) !== null && _b !== void 0 ? _b : 0) + 1, _a));
      }, {});
    };
    exports.counting = counting;
    var replace = function(list2, newItem, match) {
      if (!list2)
        return [];
      if (!newItem)
        return __spreadArray([], list2, true);
      for (var idx = 0; idx < list2.length; idx++) {
        var item = list2[idx];
        if (match(item, idx)) {
          return __spreadArray(__spreadArray(__spreadArray([], list2.slice(0, idx), true), [
            newItem
          ], false), list2.slice(idx + 1, list2.length), true);
        }
      }
      return __spreadArray([], list2, true);
    };
    exports.replace = replace;
    var objectify = function(array, getKey, getValue) {
      if (getValue === void 0) {
        getValue = function(item) {
          return item;
        };
      }
      return array.reduce(function(acc, item) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[getKey(item)] = getValue(item), _a));
      }, {});
    };
    exports.objectify = objectify;
    var select = function(array, mapper, condition) {
      return array.reduce(function(acc, item) {
        if (!condition(item))
          return acc;
        return __spreadArray(__spreadArray([], acc, true), [mapper(item)], false);
      }, []);
    };
    exports.select = select;
    var max = function(array, getter) {
      var get = getter ? getter : function(v) {
        return v;
      };
      return (0, exports.boil)(array, function(a, b) {
        return get(a) > get(b) ? a : b;
      });
    };
    exports.max = max;
    var min = function(array, getter) {
      var get = getter ? getter : function(v) {
        return v;
      };
      return (0, exports.boil)(array, function(a, b) {
        return get(a) < get(b) ? a : b;
      });
    };
    exports.min = min;
    var cluster = function(list2, size) {
      if (size === void 0) {
        size = 2;
      }
      var clusterCount = Math.ceil(list2.length / size);
      return new Array(clusterCount).fill(null).map(function(_c, i) {
        return list2.slice(i * size, i * size + size);
      });
    };
    exports.cluster = cluster;
    var unique = function(array, toKey) {
      var valueMap = array.reduce(function(acc, item) {
        var _a;
        var key = toKey ? toKey(item) : item;
        if (acc[key])
          return acc;
        return __assign(__assign({}, acc), (_a = {}, _a[key] = item, _a));
      }, {});
      return Object.values(valueMap);
    };
    exports.unique = unique;
    function range2(start, end, step) {
      var i;
      if (step === void 0) {
        step = 1;
      }
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            i = start;
            _a.label = 1;
          case 1:
            if (!(i <= end))
              return [3, 4];
            return [4, i];
          case 2:
            _a.sent();
            if (i + step > end)
              return [3, 4];
            _a.label = 3;
          case 3:
            i += step;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    }
    exports.range = range2;
    var list = function(start, end, step) {
      if (step === void 0) {
        step = 1;
      }
      return Array.from(range2(start, end, step));
    };
    exports.list = list;
    var flat = function(lists) {
      return lists.reduce(function(acc, list2) {
        return __spreadArray(__spreadArray([], acc, true), list2, true);
      }, []);
    };
    exports.flat = flat;
    var intersects = function(listA, listB, identity) {
      if (!listA || !listB)
        return false;
      var ident = identity !== null && identity !== void 0 ? identity : function(x) {
        return x;
      };
      var dictB = listB.reduce(function(acc, item) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[ident(item)] = true, _a));
      }, {});
      return listA.some(function(value) {
        return dictB[ident(value)];
      });
    };
    exports.intersects = intersects;
    var fork = function(list2, condition) {
      if (!list2)
        return [[], []];
      return list2.reduce(function(acc, item) {
        var a = acc[0], b = acc[1];
        if (condition(item)) {
          return [__spreadArray(__spreadArray([], a, true), [item], false), b];
        } else {
          return [a, __spreadArray(__spreadArray([], b, true), [item], false)];
        }
      }, [[], []]);
    };
    exports.fork = fork;
    var merge = function(root, others, matcher) {
      if (!others && !root)
        return [];
      if (!others)
        return root;
      if (!root)
        return [];
      if (!matcher)
        return root;
      return root.reduce(function(acc, r) {
        var matched = others.find(function(o) {
          return matcher(r) === matcher(o);
        });
        if (matched)
          return __spreadArray(__spreadArray([], acc, true), [matched], false);
        else
          return __spreadArray(__spreadArray([], acc, true), [r], false);
      }, []);
    };
    exports.merge = merge;
    var replaceOrAppend = function(list2, newItem, match) {
      if (!list2 && !newItem)
        return [];
      if (!newItem)
        return __spreadArray([], list2, true);
      if (!list2)
        return [newItem];
      for (var idx = 0; idx < list2.length; idx++) {
        var item = list2[idx];
        if (match(item, idx)) {
          return __spreadArray(__spreadArray(__spreadArray([], list2.slice(0, idx), true), [
            newItem
          ], false), list2.slice(idx + 1, list2.length), true);
        }
      }
      return __spreadArray(__spreadArray([], list2, true), [newItem], false);
    };
    exports.replaceOrAppend = replaceOrAppend;
    var sift = function(list2) {
      var _a;
      return (_a = list2 === null || list2 === void 0 ? void 0 : list2.filter(function(x) {
        return !!x;
      })) !== null && _a !== void 0 ? _a : [];
    };
    exports.sift = sift;
    var iterate = function(count, func, initValue) {
      var value = initValue;
      for (var i = 1; i <= count; i++) {
        value = func(value, i);
      }
      return value;
    };
    exports.iterate = iterate;
    var diff = function(root, other, identity) {
      if (identity === void 0) {
        identity = function(t) {
          return t;
        };
      }
      if (!(root === null || root === void 0 ? void 0 : root.length) && !(other === null || other === void 0 ? void 0 : other.length))
        return [];
      if (!(root === null || root === void 0 ? void 0 : root.length))
        return other;
      if (!(other === null || other === void 0 ? void 0 : other.length))
        return root;
      var bKeys = other.reduce(function(acc, item) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[identity(item)] = true, _a));
      }, {});
      return root.filter(function(a) {
        return !bKeys[identity(a)];
      });
    };
    exports.diff = diff;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/async.js
var require_async = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/async.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    exports.__esModule = true;
    exports.tryit = exports.sleep = exports.retry = exports.parallel = exports.AggregateError = exports.defer = exports.map = exports.reduce = void 0;
    var array_1 = require_array();
    var reduce = function(array, asyncReducer, initValue) {
      return __awaiter(void 0, void 0, void 0, function() {
        var initProvided, iter, value, _i, iter_1, item;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              initProvided = initValue !== void 0;
              if (!initProvided && (array === null || array === void 0 ? void 0 : array.length) < 1) {
                throw new Error("Cannot reduce empty array with no init value");
              }
              iter = initProvided ? array : array.slice(1);
              value = initProvided ? initValue : array[0];
              _i = 0, iter_1 = iter;
              _a.label = 1;
            case 1:
              if (!(_i < iter_1.length))
                return [3, 4];
              item = iter_1[_i];
              return [4, asyncReducer(value, item)];
            case 2:
              value = _a.sent();
              _a.label = 3;
            case 3:
              _i++;
              return [3, 1];
            case 4:
              return [2, value];
          }
        });
      });
    };
    exports.reduce = reduce;
    var map = function(array, asyncMapFunc) {
      return __awaiter(void 0, void 0, void 0, function() {
        var result, _i, array_2, value, newValue;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              result = [];
              _i = 0, array_2 = array;
              _a.label = 1;
            case 1:
              if (!(_i < array_2.length))
                return [3, 4];
              value = array_2[_i];
              return [4, asyncMapFunc(value)];
            case 2:
              newValue = _a.sent();
              result.push(newValue);
              _a.label = 3;
            case 3:
              _i++;
              return [3, 1];
            case 4:
              return [2, result];
          }
        });
      });
    };
    exports.map = map;
    var defer = function(func) {
      return __awaiter(void 0, void 0, void 0, function() {
        var callbacks, register, _a, err, response, _i, callbacks_1, _b, fn, rethrow, rethrown;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              callbacks = [];
              register = function(fn2, options) {
                var _a2;
                return callbacks.push({
                  fn: fn2,
                  rethrow: (_a2 = options === null || options === void 0 ? void 0 : options.rethrow) !== null && _a2 !== void 0 ? _a2 : false
                });
              };
              return [4, (0, exports.tryit)(func)(register)];
            case 1:
              _a = _c.sent(), err = _a[0], response = _a[1];
              _i = 0, callbacks_1 = callbacks;
              _c.label = 2;
            case 2:
              if (!(_i < callbacks_1.length))
                return [3, 5];
              _b = callbacks_1[_i], fn = _b.fn, rethrow = _b.rethrow;
              return [4, (0, exports.tryit)(fn)(err)];
            case 3:
              rethrown = _c.sent()[0];
              if (rethrow)
                throw rethrown;
              _c.label = 4;
            case 4:
              _i++;
              return [3, 2];
            case 5:
              if (err)
                throw err;
              return [2, response];
          }
        });
      });
    };
    exports.defer = defer;
    var AggregateError = function(_super) {
      __extends(AggregateError2, _super);
      function AggregateError2(errors) {
        var _this = _super.call(this) || this;
        _this.errors = errors;
        return _this;
      }
      return AggregateError2;
    }(Error);
    exports.AggregateError = AggregateError;
    var parallel = function(limit, array, func) {
      return __awaiter(void 0, void 0, void 0, function() {
        var work, processor, queues, itemResults, _a, errors, results;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              work = array.map(function(item, index) {
                return {
                  index,
                  item
                };
              });
              processor = function(res) {
                return __awaiter(void 0, void 0, void 0, function() {
                  var results2, next, _a2, error, result;
                  return __generator(this, function(_b2) {
                    switch (_b2.label) {
                      case 0:
                        results2 = [];
                        _b2.label = 1;
                      case 1:
                        if (false)
                          return [3, 3];
                        next = work.pop();
                        if (!next)
                          return [2, res(results2)];
                        return [4, (0, exports.tryit)(func)(next.item)];
                      case 2:
                        _a2 = _b2.sent(), error = _a2[0], result = _a2[1];
                        results2.push({
                          error,
                          result,
                          index: next.index
                        });
                        return [3, 1];
                      case 3:
                        return [2];
                    }
                  });
                });
              };
              queues = (0, array_1.list)(1, limit).map(function() {
                return new Promise(processor);
              });
              return [4, Promise.all(queues)];
            case 1:
              itemResults = _b.sent();
              _a = (0, array_1.fork)((0, array_1.sort)(itemResults.flat(), function(r) {
                return r.index;
              }), function(x) {
                return !!x.error;
              }), errors = _a[0], results = _a[1];
              if (errors.length > 0) {
                throw new AggregateError(errors.map(function(error) {
                  return error.error;
                }));
              }
              return [2, results.map(function(r) {
                return r.result;
              })];
          }
        });
      });
    };
    exports.parallel = parallel;
    var retry = function(options, func) {
      return __awaiter(void 0, void 0, void 0, function() {
        var times, delay2, backoff, _i, _a, i, _b, err, result;
        var _c, _d;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              times = (_c = options === null || options === void 0 ? void 0 : options.times) !== null && _c !== void 0 ? _c : 3;
              delay2 = options === null || options === void 0 ? void 0 : options.delay;
              backoff = (_d = options === null || options === void 0 ? void 0 : options.backoff) !== null && _d !== void 0 ? _d : null;
              _i = 0, _a = (0, array_1.list)(1, times);
              _e.label = 1;
            case 1:
              if (!(_i < _a.length))
                return [3, 7];
              i = _a[_i];
              return [4, (0, exports.tryit)(func)(function(err2) {
                throw { _exited: err2 };
              })];
            case 2:
              _b = _e.sent(), err = _b[0], result = _b[1];
              if (!err)
                return [2, result];
              if (err._exited)
                throw err._exited;
              if (i === times)
                throw err;
              if (!delay2)
                return [3, 4];
              return [4, (0, exports.sleep)(delay2)];
            case 3:
              _e.sent();
              _e.label = 4;
            case 4:
              if (!backoff)
                return [3, 6];
              return [4, (0, exports.sleep)(backoff(i))];
            case 5:
              _e.sent();
              _e.label = 6;
            case 6:
              _i++;
              return [3, 1];
            case 7:
              return [2];
          }
        });
      });
    };
    exports.retry = retry;
    var sleep = function(milliseconds) {
      return new Promise(function(res) {
        return setTimeout(res, milliseconds);
      });
    };
    exports.sleep = sleep;
    var tryit = function(func) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function() {
          var _a, err_1;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _b.trys.push([0, 2, , 3]);
                _a = [null];
                return [4, func.apply(void 0, args)];
              case 1:
                return [2, _a.concat([_b.sent()])];
              case 2:
                err_1 = _b.sent();
                return [2, [err_1, null]];
              case 3:
                return [2];
            }
          });
        });
      };
    };
    exports.tryit = tryit;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/curry.js
var require_curry = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/curry.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    exports.__esModule = true;
    exports.throttle = exports.debounce = exports.memo = exports.proxied = exports.partob = exports.partial = exports.compose = exports.chain = void 0;
    var chain = function() {
      var funcs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
      }
      return function() {
        var args = [];
        for (var _i2 = 0; _i2 < arguments.length; _i2++) {
          args[_i2] = arguments[_i2];
        }
        return funcs.slice(1).reduce(function(acc, fn) {
          return fn(acc);
        }, funcs[0].apply(funcs, args));
      };
    };
    exports.chain = chain;
    var compose = function() {
      var funcs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
      }
      return funcs.reverse().reduce(function(acc, fn) {
        return fn(acc);
      });
    };
    exports.compose = compose;
    var partial = function(fn) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      return function() {
        var rest = [];
        for (var _i2 = 0; _i2 < arguments.length; _i2++) {
          rest[_i2] = arguments[_i2];
        }
        return fn.apply(void 0, __spreadArray(__spreadArray([], args, false), rest, false));
      };
    };
    exports.partial = partial;
    var partob = function(fn, argobj) {
      return function(restobj) {
        return fn(__assign(__assign({}, argobj), restobj));
      };
    };
    exports.partob = partob;
    var proxied = function(handler) {
      return new Proxy({}, {
        get: function(target, propertyName) {
          return handler(propertyName);
        }
      });
    };
    exports.proxied = proxied;
    var memoize = function(cache, func, keyFunc, ttl) {
      return function callWithMemo() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var key = keyFunc ? keyFunc.apply(void 0, args) : JSON.stringify({ args });
        var existing = cache[key];
        if (existing !== void 0) {
          if (existing.exp > new Date().getTime()) {
            return existing.value;
          }
        }
        var result = func.apply(void 0, args);
        cache[key] = {
          exp: new Date().getTime() + ttl,
          value: result
        };
        return result;
      };
    };
    var memo = function(func, _a) {
      var _b = _a === void 0 ? {} : _a, _c = _b.key, key = _c === void 0 ? null : _c, _d = _b.ttl, ttl = _d === void 0 ? 300 : _d;
      return memoize({}, func, key, ttl);
    };
    exports.memo = memo;
    var debounce = function(_a, func) {
      var delay2 = _a.delay;
      var timer = null;
      var debounced = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
          return func.apply(void 0, args);
        }, delay2);
      };
      return debounced;
    };
    exports.debounce = debounce;
    var throttle = function(_a, func) {
      var interval = _a.interval;
      var ready = true;
      var throttled = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!ready)
          return;
        func.apply(void 0, args);
        ready = false;
        setTimeout(function() {
          ready = true;
        }, interval);
      };
      return throttled;
    };
    exports.throttle = throttle;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/number.js
var require_number = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/number.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.toInt = exports.toFloat = void 0;
    var toFloat = function(value, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = 0;
      }
      if (value === null || value === void 0) {
        return defaultValue;
      }
      var result = parseFloat(value);
      return isNaN(result) ? defaultValue : result;
    };
    exports.toFloat = toFloat;
    var toInt = function(value, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = 0;
      }
      if (value === null || value === void 0) {
        return defaultValue;
      }
      var result = parseInt(value);
      return isNaN(result) ? defaultValue : result;
    };
    exports.toInt = toInt;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/typed.js
var require_typed = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/typed.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.isEmpty = exports.isNumber = exports.isFloat = exports.isInt = exports.isString = exports.isFunction = exports.isObject = exports.isArray = exports.isSymbol = void 0;
    var isSymbol = function(value) {
      return !!value && value.constructor === Symbol;
    };
    exports.isSymbol = isSymbol;
    var isArray = function(value) {
      return !!value && value.constructor === Array;
    };
    exports.isArray = isArray;
    var isObject2 = function(value) {
      return !!value && value.constructor === Object;
    };
    exports.isObject = isObject2;
    var isFunction = function(value) {
      return !!(value && value.constructor && value.call && value.apply);
    };
    exports.isFunction = isFunction;
    var isString = function(value) {
      return typeof value === "string" || value instanceof String;
    };
    exports.isString = isString;
    var isInt = function(value) {
      return Number(value) === value && value % 1 === 0;
    };
    exports.isInt = isInt;
    var isFloat = function(value) {
      return Number(value) === value && value % 1 !== 0;
    };
    exports.isFloat = isFloat;
    var isNumber = function(value) {
      return Number(value) === value;
    };
    exports.isNumber = isNumber;
    var isEmpty = function(value) {
      if (value === true)
        return true;
      if (value === false)
        return true;
      if ((0, exports.isNumber)(value))
        return true;
      if (value === null || value === void 0)
        return true;
      var length = value.length;
      if ((0, exports.isNumber)(length))
        return length === 0;
      var size = value.size;
      if ((0, exports.isNumber)(size))
        return size === 0;
      var keys = Object.keys(value).length;
      return keys === 0;
    };
    exports.isEmpty = isEmpty;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/object.js
var require_object = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/object.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    exports.__esModule = true;
    exports.zip = exports.get = exports.omit = exports.pick = exports.listify = exports.clone = exports.upperize = exports.lowerize = exports.invert = exports.mapEntries = exports.mapValues = exports.mapKeys = exports.shake = void 0;
    var typed_1 = require_typed();
    var shake = function(obj, filter) {
      if (filter === void 0) {
        filter = function(x) {
          return x === void 0;
        };
      }
      if (!obj)
        return {};
      return Object.keys(obj).reduce(function(acc, key) {
        var _a;
        if (filter(obj[key])) {
          return acc;
        } else
          return __assign(__assign({}, acc), (_a = {}, _a[key] = obj[key], _a));
      }, {});
    };
    exports.shake = shake;
    var mapKeys = function(obj, mapFunc) {
      return Object.keys(obj).reduce(function(acc, key) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[mapFunc(key, obj[key])] = obj[key], _a));
      }, {});
    };
    exports.mapKeys = mapKeys;
    var mapValues = function(obj, mapFunc) {
      return Object.keys(obj).reduce(function(acc, key) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[key] = mapFunc(obj[key], key), _a));
      }, {});
    };
    exports.mapValues = mapValues;
    var mapEntries = function(obj, toEntry) {
      if (!obj)
        return {};
      return Object.entries(obj).reduce(function(acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        var _c = toEntry(key, value), newKey = _c[0], newValue = _c[1];
        return __assign(__assign({}, acc), (_b = {}, _b[newKey] = newValue, _b));
      }, {});
    };
    exports.mapEntries = mapEntries;
    var invert = function(obj) {
      if (!obj)
        return {};
      return Object.keys(obj).reduce(function(acc, key) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[obj[key]] = key, _a));
      }, {});
    };
    exports.invert = invert;
    var lowerize = function(obj) {
      return (0, exports.mapKeys)(obj, function(k) {
        return k.toLowerCase();
      });
    };
    exports.lowerize = lowerize;
    var upperize = function(obj) {
      return (0, exports.mapKeys)(obj, function(k) {
        return k.toUpperCase();
      });
    };
    exports.upperize = upperize;
    var clone = function(obj) {
      return Object.getOwnPropertyNames(obj).reduce(function(acc, name) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[name] = obj[name], _a));
      }, {});
    };
    exports.clone = clone;
    var listify = function(obj, toItem) {
      if (!obj)
        return [];
      var entries = Object.entries(obj);
      if (entries.length === 0)
        return [];
      return entries.reduce(function(acc, entry) {
        return __spreadArray(__spreadArray([], acc, true), [toItem(entry[0], entry[1])], false);
      }, []);
    };
    exports.listify = listify;
    var pick = function(obj, keys) {
      if (!obj)
        return {};
      return keys.reduce(function(acc, key) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[key] = obj[key], _a));
      }, {});
    };
    exports.pick = pick;
    var omit2 = function(obj, keys) {
      if (!obj)
        return {};
      if (!keys || keys.length === 0)
        return obj;
      return keys.reduce(function(acc, key) {
        delete acc[key];
        return acc;
      }, __assign({}, obj));
    };
    exports.omit = omit2;
    var get = function(value, getter, defaultValue) {
      var _a;
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      try {
        return (_a = getter(value)) !== null && _a !== void 0 ? _a : defaultValue;
      } catch (_b) {
        return defaultValue;
      }
    };
    exports.get = get;
    var zip = function(a, b) {
      if (!a && !b)
        return {};
      if (!a)
        return b;
      if (!b)
        return a;
      return Object.entries(a).reduce(function(acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return __assign(__assign({}, acc), (_b = {}, _b[key] = function() {
          if ((0, typed_1.isObject)(value))
            return (0, exports.zip)(value, b[key]);
          return b[key];
        }(), _b));
      }, {});
    };
    exports.zip = zip;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/random.js
var require_random = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/random.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.uid = exports.shuffle = exports.draw = exports.random = void 0;
    var array_1 = require_array();
    var random = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    exports.random = random;
    var draw = function(array) {
      var max = array.length;
      if (max === 0) {
        return null;
      }
      var index = (0, exports.random)(0, max - 1);
      return array[index];
    };
    exports.draw = draw;
    var shuffle = function(array) {
      return array.map(function(a) {
        return { rand: Math.random(), value: a };
      }).sort(function(a, b) {
        return a.rand - b.rand;
      }).map(function(a) {
        return a.value;
      });
    };
    exports.shuffle = shuffle;
    var uid = function(length, specials) {
      if (specials === void 0) {
        specials = "";
      }
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + specials;
      return (0, array_1.iterate)(length, function(acc) {
        return acc + characters.charAt((0, exports.random)(0, characters.length - 1));
      }, "");
    };
    exports.uid = uid;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/series.js
var require_series = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/series.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    exports.__esModule = true;
    exports.series = void 0;
    var series = function() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      var _a = items.reduce(function(acc, item, idx) {
        var _a2, _b;
        return {
          itemsByValue: __assign(__assign({}, acc.itemsByValue), (_a2 = {}, _a2[item] = idx, _a2)),
          itemsByIndex: __assign(__assign({}, acc.itemsByIndex), (_b = {}, _b[idx] = item, _b))
        };
      }, {
        itemsByValue: {},
        itemsByIndex: {}
      }), itemsByValue = _a.itemsByValue, itemsByIndex = _a.itemsByIndex;
      return {
        min: function(a, b) {
          return itemsByValue[a] < itemsByValue[b] ? a : b;
        },
        max: function(a, b) {
          return itemsByValue[a] > itemsByValue[b] ? a : b;
        },
        first: function() {
          return itemsByIndex[0];
        },
        last: function() {
          return itemsByIndex[items.length - 1];
        },
        next: function(current, defaultValue) {
          var _a2;
          return (_a2 = itemsByIndex[itemsByValue[current] + 1]) !== null && _a2 !== void 0 ? _a2 : defaultValue;
        },
        previous: function(current, defaultValue) {
          var _a2;
          return (_a2 = itemsByIndex[itemsByValue[current] - 1]) !== null && _a2 !== void 0 ? _a2 : defaultValue;
        }
      };
    };
    exports.series = series;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/string.js
var require_string = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/string.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.template = exports.dash = exports._dash = exports.snake = exports._snake = exports.camal = exports._camal = exports.capitalize = void 0;
    var capitalize = function(str) {
      if (!str || str.length === 0)
        return "";
      var lower = str.toLowerCase();
      return lower.substring(0, 1).toUpperCase() + lower.substring(1, lower.length);
    };
    exports.capitalize = capitalize;
    var _camal = function() {
      var parts = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
      }
      if (parts.length === 0)
        return "";
      if (parts.length === 1)
        return parts[0];
      return parts.reduce(function(acc, part) {
        return "" + acc + part.charAt(0).toUpperCase() + part.slice(1);
      });
    };
    exports._camal = _camal;
    var camal = function(str) {
      return exports._camal.apply(void 0, str.split(/[\.\-\s_]/).map(function(x) {
        return x.toLowerCase();
      }));
    };
    exports.camal = camal;
    var _snake = function() {
      var parts = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
      }
      if (parts.length === 0)
        return "";
      if (parts.length === 1)
        return parts[0];
      return parts.reduce(function(acc, part) {
        return acc + "_" + part.toLowerCase();
      });
    };
    exports._snake = _snake;
    var snake = function(str) {
      return exports._snake.apply(void 0, str.split(/[\.\-\s_]/).map(function(x) {
        return x.toLowerCase();
      }));
    };
    exports.snake = snake;
    var _dash = function() {
      var parts = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
      }
      if (parts.length === 0)
        return "";
      if (parts.length === 1)
        return parts[0];
      return parts.reduce(function(acc, part) {
        return acc + "-" + part.toLowerCase();
      });
    };
    exports._dash = _dash;
    var dash = function(str) {
      return exports._dash.apply(void 0, str.split(/[\.\-\s_]/).map(function(x) {
        return x.toLowerCase();
      }));
    };
    exports.dash = dash;
    var template = function(str, data, regex) {
      if (regex === void 0) {
        regex = /\{\{(.+?)\}\}/g;
      }
      return Array.from(str.matchAll(regex)).reduce(function(acc, match) {
        return acc.replace(match[0], data[match[1]]);
      }, str);
    };
    exports.template = template;
  }
});

// ../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/radash@7.1.0/node_modules/radash/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    exports.__esModule = true;
    exports.mapKeys = exports.mapEntries = exports.lowerize = exports.listify = exports.invert = exports.get = exports.clone = exports.toInt = exports.toFloat = exports.throttle = exports.proxied = exports.partob = exports.partial = exports.memo = exports.debounce = exports.compose = exports.chain = exports.tryit = exports["try"] = exports.sleep = exports.retry = exports.reduce = exports.parallel = exports.map = exports.defer = exports.unique = exports.sum = exports.sort = exports.sift = exports.select = exports.replaceOrAppend = exports.replace = exports.range = exports.objectify = exports.min = exports.merge = exports.max = exports.list = exports.last = exports.iterate = exports.intersects = exports.group = exports.fork = exports.flat = exports.first = exports.diff = exports.counting = exports.cluster = exports.boil = exports.alphabetical = void 0;
    exports.isSymbol = exports.isString = exports.isObject = exports.isInt = exports.isFloat = exports.isNumber = exports.isFunction = exports.isEmpty = exports.isArray = exports.template = exports.snake = exports.dash = exports.capitalize = exports.camal = exports.series = exports.uid = exports.shuffle = exports.random = exports.draw = exports.zip = exports.upperize = exports.shake = exports.pick = exports.omit = exports.mapValues = void 0;
    var array_1 = require_array();
    __createBinding(exports, array_1, "alphabetical");
    __createBinding(exports, array_1, "boil");
    __createBinding(exports, array_1, "cluster");
    __createBinding(exports, array_1, "counting");
    __createBinding(exports, array_1, "diff");
    __createBinding(exports, array_1, "first");
    __createBinding(exports, array_1, "flat");
    __createBinding(exports, array_1, "fork");
    __createBinding(exports, array_1, "group");
    __createBinding(exports, array_1, "intersects");
    __createBinding(exports, array_1, "iterate");
    __createBinding(exports, array_1, "last");
    __createBinding(exports, array_1, "list");
    __createBinding(exports, array_1, "max");
    __createBinding(exports, array_1, "merge");
    __createBinding(exports, array_1, "min");
    __createBinding(exports, array_1, "objectify");
    __createBinding(exports, array_1, "range");
    __createBinding(exports, array_1, "replace");
    __createBinding(exports, array_1, "replaceOrAppend");
    __createBinding(exports, array_1, "select");
    __createBinding(exports, array_1, "sift");
    __createBinding(exports, array_1, "sort");
    __createBinding(exports, array_1, "sum");
    __createBinding(exports, array_1, "unique");
    var async_1 = require_async();
    __createBinding(exports, async_1, "defer");
    __createBinding(exports, async_1, "map");
    __createBinding(exports, async_1, "parallel");
    __createBinding(exports, async_1, "reduce");
    __createBinding(exports, async_1, "retry");
    __createBinding(exports, async_1, "sleep");
    __createBinding(exports, async_1, "tryit", "try");
    __createBinding(exports, async_1, "tryit");
    var curry_1 = require_curry();
    __createBinding(exports, curry_1, "chain");
    __createBinding(exports, curry_1, "compose");
    __createBinding(exports, curry_1, "debounce");
    __createBinding(exports, curry_1, "memo");
    __createBinding(exports, curry_1, "partial");
    __createBinding(exports, curry_1, "partob");
    __createBinding(exports, curry_1, "proxied");
    __createBinding(exports, curry_1, "throttle");
    var number_1 = require_number();
    __createBinding(exports, number_1, "toFloat");
    __createBinding(exports, number_1, "toInt");
    var object_1 = require_object();
    __createBinding(exports, object_1, "clone");
    __createBinding(exports, object_1, "get");
    __createBinding(exports, object_1, "invert");
    __createBinding(exports, object_1, "listify");
    __createBinding(exports, object_1, "lowerize");
    __createBinding(exports, object_1, "mapEntries");
    __createBinding(exports, object_1, "mapKeys");
    __createBinding(exports, object_1, "mapValues");
    __createBinding(exports, object_1, "omit");
    __createBinding(exports, object_1, "pick");
    __createBinding(exports, object_1, "shake");
    __createBinding(exports, object_1, "upperize");
    __createBinding(exports, object_1, "zip");
    var random_1 = require_random();
    __createBinding(exports, random_1, "draw");
    __createBinding(exports, random_1, "random");
    __createBinding(exports, random_1, "shuffle");
    __createBinding(exports, random_1, "uid");
    var series_1 = require_series();
    __createBinding(exports, series_1, "series");
    var string_1 = require_string();
    __createBinding(exports, string_1, "camal");
    __createBinding(exports, string_1, "capitalize");
    __createBinding(exports, string_1, "dash");
    __createBinding(exports, string_1, "snake");
    __createBinding(exports, string_1, "template");
    var typed_1 = require_typed();
    __createBinding(exports, typed_1, "isArray");
    __createBinding(exports, typed_1, "isEmpty");
    __createBinding(exports, typed_1, "isFunction");
    __createBinding(exports, typed_1, "isNumber");
    __createBinding(exports, typed_1, "isFloat");
    __createBinding(exports, typed_1, "isInt");
    __createBinding(exports, typed_1, "isObject");
    __createBinding(exports, typed_1, "isString");
    __createBinding(exports, typed_1, "isSymbol");
  }
});

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/errors/HTTPError.js
var HTTPError = class extends Error {
  constructor(response, request, options) {
    const code = response.status || response.status === 0 ? response.status : "";
    const title = response.statusText || "";
    const status = `${code} ${title}`.trim();
    const reason = status ? `status code ${status}` : "an unknown error";
    super(`Request failed with ${reason}`);
    Object.defineProperty(this, "response", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "request", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = "HTTPError";
    this.response = response;
    this.request = request;
    this.options = options;
  }
};

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/errors/TimeoutError.js
var TimeoutError = class extends Error {
  constructor(request) {
    super("Request timed out");
    Object.defineProperty(this, "request", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = "TimeoutError";
    this.request = request;
  }
};

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/utils/is.js
var isObject = (value) => value !== null && typeof value === "object";

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/utils/merge.js
var validateAndMerge = (...sources) => {
  for (const source of sources) {
    if ((!isObject(source) || Array.isArray(source)) && typeof source !== "undefined") {
      throw new TypeError("The `options` argument must be an object");
    }
  }
  return deepMerge({}, ...sources);
};
var mergeHeaders = (source1 = {}, source2 = {}) => {
  const result = new globalThis.Headers(source1);
  const isHeadersInstance = source2 instanceof globalThis.Headers;
  const source = new globalThis.Headers(source2);
  for (const [key, value] of source.entries()) {
    if (isHeadersInstance && value === "undefined" || value === void 0) {
      result.delete(key);
    } else {
      result.set(key, value);
    }
  }
  return result;
};
var deepMerge = (...sources) => {
  let returnValue = {};
  let headers = {};
  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }
      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && key in returnValue) {
          value = deepMerge(returnValue[key], value);
        }
        returnValue = { ...returnValue, [key]: value };
      }
      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
        returnValue.headers = headers;
      }
    }
  }
  return returnValue;
};

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/core/constants.js
var supportsStreams = (() => {
  let duplexAccessed = false;
  let hasContentType = false;
  const supportsReadableStream = typeof globalThis.ReadableStream === "function";
  if (supportsReadableStream) {
    hasContentType = new globalThis.Request("https://a.com", {
      body: new globalThis.ReadableStream(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
  }
  return duplexAccessed && !hasContentType;
})();
var supportsAbortController = typeof globalThis.AbortController === "function";
var supportsFormData = typeof globalThis.FormData === "function";
var requestMethods = ["get", "post", "put", "patch", "head", "delete"];
var validate = () => void 0;
validate();
var responseTypes = {
  json: "application/json",
  text: "text/*",
  formData: "multipart/form-data",
  arrayBuffer: "*/*",
  blob: "*/*"
};
var maxSafeTimeout = 2147483647;
var stop = Symbol("stop");

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/utils/normalize.js
var normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
var retryMethods = ["get", "put", "head", "delete", "options", "trace"];
var retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
var retryAfterStatusCodes = [413, 429, 503];
var defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes,
  maxRetryAfter: Number.POSITIVE_INFINITY
};
var normalizeRetryOptions = (retry = {}) => {
  if (typeof retry === "number") {
    return {
      ...defaultRetryOptions,
      limit: retry
    };
  }
  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error("retry.methods must be an array");
  }
  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error("retry.statusCodes must be an array");
  }
  return {
    ...defaultRetryOptions,
    ...retry,
    afterStatusCodes: retryAfterStatusCodes
  };
};

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/utils/time.js
var timeout = async (request, abortController, options) => new Promise((resolve, reject) => {
  const timeoutId = setTimeout(() => {
    if (abortController) {
      abortController.abort();
    }
    reject(new TimeoutError(request));
  }, options.timeout);
  void options.fetch(request).then(resolve).catch(reject).then(() => {
    clearTimeout(timeoutId);
  });
});
var delay = async (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/core/Ky.js
var Ky = class {
  constructor(input, options = {}) {
    Object.defineProperty(this, "request", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "abortController", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_retryCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_input", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._input = input;
    this._options = {
      credentials: this._input.credentials || "same-origin",
      ...options,
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        beforeError: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod(options.method ?? this._input.method),
      prefixUrl: String(options.prefixUrl || ""),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === "undefined" ? 1e4 : options.timeout,
      fetch: options.fetch ?? globalThis.fetch.bind(globalThis)
    };
    if (typeof this._input !== "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
      throw new TypeError("`input` must be a string, URL, or Request");
    }
    if (this._options.prefixUrl && typeof this._input === "string") {
      if (this._input.startsWith("/")) {
        throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      }
      if (!this._options.prefixUrl.endsWith("/")) {
        this._options.prefixUrl += "/";
      }
      this._input = this._options.prefixUrl + this._input;
    }
    if (supportsAbortController) {
      this.abortController = new globalThis.AbortController();
      if (this._options.signal) {
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort();
        });
      }
      this._options.signal = this.abortController.signal;
    }
    this.request = new globalThis.Request(this._input, this._options);
    if (supportsStreams) {
      this.request.duplex = "half";
    }
    if (this._options.searchParams) {
      const textSearchParams = typeof this._options.searchParams === "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString();
      const searchParams = "?" + textSearchParams;
      const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
      if ((supportsFormData && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"])) {
        this.request.headers.delete("content-type");
      }
      this.request = new globalThis.Request(new globalThis.Request(url, this.request), this._options);
    }
    if (this._options.json !== void 0) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json");
      this.request = new globalThis.Request(this.request, { body: this._options.body });
    }
  }
  static create(input, options) {
    const ky2 = new Ky(input, options);
    const fn = async () => {
      if (ky2._options.timeout > maxSafeTimeout) {
        throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
      }
      await Promise.resolve();
      let response = await ky2._fetch();
      for (const hook of ky2._options.hooks.afterResponse) {
        const modifiedResponse = await hook(ky2.request, ky2._options, ky2._decorateResponse(response.clone()));
        if (modifiedResponse instanceof globalThis.Response) {
          response = modifiedResponse;
        }
      }
      ky2._decorateResponse(response);
      if (!response.ok && ky2._options.throwHttpErrors) {
        let error = new HTTPError(response, ky2.request, ky2._options);
        for (const hook of ky2._options.hooks.beforeError) {
          error = await hook(error);
        }
        throw error;
      }
      if (ky2._options.onDownloadProgress) {
        if (typeof ky2._options.onDownloadProgress !== "function") {
          throw new TypeError("The `onDownloadProgress` option must be a function");
        }
        if (!supportsStreams) {
          throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
        }
        return ky2._stream(response.clone(), ky2._options.onDownloadProgress);
      }
      return response;
    };
    const isRetriableMethod = ky2._options.retry.methods.includes(ky2.request.method.toLowerCase());
    const result = isRetriableMethod ? ky2._retry(fn) : fn();
    for (const [type, mimeType] of Object.entries(responseTypes)) {
      result[type] = async () => {
        ky2.request.headers.set("accept", ky2.request.headers.get("accept") || mimeType);
        const awaitedResult = await result;
        const response = awaitedResult.clone();
        if (type === "json") {
          if (response.status === 204) {
            return "";
          }
          if (options.parseJson) {
            return options.parseJson(await response.text());
          }
        }
        return response[type]();
      };
    }
    return result;
  }
  _calculateRetryDelay(error) {
    this._retryCount++;
    if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
      if (error instanceof HTTPError) {
        if (!this._options.retry.statusCodes.includes(error.response.status)) {
          return 0;
        }
        const retryAfter = error.response.headers.get("Retry-After");
        if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
          let after = Number(retryAfter);
          if (Number.isNaN(after)) {
            after = Date.parse(retryAfter) - Date.now();
          } else {
            after *= 1e3;
          }
          if (typeof this._options.retry.maxRetryAfter !== "undefined" && after > this._options.retry.maxRetryAfter) {
            return 0;
          }
          return after;
        }
        if (error.response.status === 413) {
          return 0;
        }
      }
      const BACKOFF_FACTOR = 0.3;
      return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1e3;
    }
    return 0;
  }
  _decorateResponse(response) {
    if (this._options.parseJson) {
      response.json = async () => this._options.parseJson(await response.text());
    }
    return response;
  }
  async _retry(fn) {
    try {
      return await fn();
    } catch (error) {
      const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
      if (ms !== 0 && this._retryCount > 0) {
        await delay(ms);
        for (const hook of this._options.hooks.beforeRetry) {
          const hookResult = await hook({
            request: this.request,
            options: this._options,
            error,
            retryCount: this._retryCount
          });
          if (hookResult === stop) {
            return;
          }
        }
        return this._retry(fn);
      }
      throw error;
    }
  }
  async _fetch() {
    for (const hook of this._options.hooks.beforeRequest) {
      const result = await hook(this.request, this._options);
      if (result instanceof Request) {
        this.request = result;
        break;
      }
      if (result instanceof Response) {
        return result;
      }
    }
    if (this._options.timeout === false) {
      return this._options.fetch(this.request.clone());
    }
    return timeout(this.request.clone(), this.abortController, this._options);
  }
  _stream(response, onDownloadProgress) {
    const totalBytes = Number(response.headers.get("content-length")) || 0;
    let transferredBytes = 0;
    if (response.status === 204) {
      if (onDownloadProgress) {
        onDownloadProgress({ percent: 1, totalBytes, transferredBytes }, new Uint8Array());
      }
      return new globalThis.Response(null, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    }
    return new globalThis.Response(new globalThis.ReadableStream({
      async start(controller) {
        const reader = response.body.getReader();
        if (onDownloadProgress) {
          onDownloadProgress({ percent: 0, transferredBytes: 0, totalBytes }, new Uint8Array());
        }
        async function read() {
          const { done, value } = await reader.read();
          if (done) {
            controller.close();
            return;
          }
          if (onDownloadProgress) {
            transferredBytes += value.byteLength;
            const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
            onDownloadProgress({ percent, transferredBytes, totalBytes }, value);
          }
          controller.enqueue(value);
          await read();
        }
        await read();
      }
    }), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }
};

// ../../node_modules/.pnpm/ky@0.31.3/node_modules/ky/distribution/index.js
var createInstance = (defaults) => {
  const ky2 = (input, options) => Ky.create(input, validateAndMerge(defaults, options));
  for (const method of requestMethods) {
    ky2[method] = (input, options) => Ky.create(input, validateAndMerge(defaults, options, { method }));
  }
  ky2.create = (newDefaults) => createInstance(validateAndMerge(newDefaults));
  ky2.extend = (newDefaults) => createInstance(validateAndMerge(defaults, newDefaults));
  ky2.stop = stop;
  return ky2;
};
var ky = createInstance();
var distribution_default = ky;

// src/geometry/transformer.ts
var import_radash = __toESM(require_dist());

// src/utils/type-cast.ts
function isNumeric(num) {
  return (typeof num === "number" || typeof num === "string" && num.trim() !== "") && !isNaN(num);
}
function parseString(val) {
  if (!isNumeric(val)) {
    return val;
  }
  return parseFloat(val);
}

// src/geometry/transformer.ts
var transformer = {
  POINT(geom) {
    return { type: "Point", coordinates: [geom.points[0].x, geom.points[0].y] };
  },
  REGION(geom) {
    return { type: "Polygon", coordinates: [geom.points.map((p) => [p.x, p.y])] };
  }
};
function toGeoJSON(features, typeCast = true) {
  const geojson = { type: "FeatureCollection", features: [] };
  for (const f of features) {
    const gt = f.geometry.type;
    const geom = geomTransformer[gt](f.geometry);
    const prop = {};
    for (const i of (0, import_radash.range)(0, f.fieldNames.length - 1)) {
      prop[f.fieldNames[i]] = typeCast ? parseString(f.fieldValues[i]) : f.fieldValues[i];
    }
    const feature = { type: "Feature", geometry: geom, properties: prop };
    geojson.features.push(feature);
  }
  return geojson;
}

// src/services/data.ts
async function getBySQL(url, options, kyOptions = {}) {
  const res = await distribution_default.post(`${url}/featureResults.json`, {
    ...kyOptions,
    searchParams: {
      returnContent: true,
      fromIndex: options.fromIndex ?? 0,
      toIndex: options.toIndex ?? -1,
      token: options.token ?? void 0
    },
    json: {
      datasetNames: [`${options.datasource}:${options.dataset}`],
      getFeatureMode: "SQL",
      queryParameter: {
        name: `${options.dataset}@${options.datasource}`,
        attributeFilter: options.filter.select
      }
    }
  }).json();
  if (res.error != null && res.succeed === false) {
    throw new Error(`${res.error.code}: ${res.error.errorMsg}`);
  }
  return toGeoJSON(res.features, options.typeCast);
}

// src/utils/smfields.ts
var import_radash2 = __toESM(require_dist());
var SMFIELDS = ["SMAREA", "SMGEOMETRY", "SMID", "SMPERIMETER", "SMUSERID", "USERID"];
function removeSMField(prop) {
  return (0, import_radash2.omit)(prop, SMFIELDS);
}
export {
  SMFIELDS,
  getBySQL,
  removeSMField,
  toGeoJSON,
  transformer
};
/*! MIT License © Sindre Sorhus */
