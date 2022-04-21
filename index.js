"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkhemataTestimonial = void 0;
var _excluded = ["attribute", "defaultValue"],
    _excluded2 = ["defaultValue", "set"],
    _excluded3 = ["defaultValue", "set"],
    _excluded4 = ["defaultValue", "set"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest2(); }

function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit2(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray2(arr) { return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread2(); }

function _nonIterableSpread2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function __defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) __defineProperties(Constructor.prototype, protoProps); if (staticProps) __defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    e = Symbol();

var s = /*#__PURE__*/function () {
  function s(t, _s2) {
    _classCallCheck2(this, s);

    if (_s2 !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  _createClass2(s, [{
    key: "styleSheet",
    get: function get() {
      return t && void 0 === this.t && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return s;
}();

var n = new Map(),
    o = function o(t) {
  var o = n.get(t);
  return void 0 === o && n.set(t, o = new s(t, e)), o;
},
    r = function r(t) {
  return o("string" == typeof t ? t : t + "");
},
    i = function i(t) {
  for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    e[_key2 - 1] = arguments[_key2];
  }

  var n = 1 === t.length ? t[0] : e.reduce(function (e, n, o) {
    return e + function (t) {
      if (t instanceof s) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    }(n) + t[o + 1];
  }, t[0]);
  return o(n);
},
    S = function S(e, s) {
  t ? e.adoptedStyleSheets = s.map(function (t) {
    return t instanceof CSSStyleSheet ? t : t.styleSheet;
  }) : s.forEach(function (t) {
    var s = document.createElement("style");
    s.textContent = t.cssText, e.appendChild(s);
  });
},
    u = t ? function (t) {
  return t;
} : function (t) {
  return t instanceof CSSStyleSheet ? function (t) {
    var e = "";

    var _iterator = _createForOfIteratorHelper(t.cssRules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _s3 = _step.value;
        e += _s3.cssText;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return r(e);
  }(t) : t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


var s$1, e$1, h, r$1;

var o$1 = {
  toAttribute: function toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? "" : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },
  fromAttribute: function fromAttribute(t, i) {
    var s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }
},
    n$1 = function n$1(t, i) {
  return i !== t && (i == i || t == t);
},
    l = {
  attribute: !0,
  type: String,
  converter: o$1,
  reflect: !1,
  hasChanged: n$1
};

var a = /*#__PURE__*/function (_HTMLElement) {
  _inherits(a, _HTMLElement);

  var _super = _createSuper(a);

  function a() {
    var _this2;

    _classCallCheck2(this, a);

    _this2 = _super.call(this), _this2.Πi = new Map(), _this2.Πo = void 0, _this2.Πl = void 0, _this2.isUpdatePending = !1, _this2.hasUpdated = !1, _this2.Πh = null, _this2.u();
    return _this2;
  }

  _createClass2(a, [{
    key: "u",
    value: function u() {
      var _this3 = this;

      var t;
      this.Πg = new Promise(function (t) {
        return _this3.enableUpdating = t;
      }), this.L = new Map(), this.Π_(), this.requestUpdate(), null === (t = this.constructor.v) || void 0 === t || t.forEach(function (t) {
        return t(_this3);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var i, s;
      (null !== (i = this.ΠU) && void 0 !== i ? i : this.ΠU = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var i;
      null === (i = this.ΠU) || void 0 === i || i.splice(this.ΠU.indexOf(t) >>> 0, 1);
    }
  }, {
    key: "\u03A0_",
    value: function Π_() {
      var _this4 = this;

      this.constructor.elementProperties.forEach(function (t, i) {
        _this4.hasOwnProperty(i) && (_this4.Πi.set(i, _this4[i]), delete _this4[i]);
      });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t;
      var s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s, this.constructor.elementStyles), s;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this.ΠU) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
      }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this5 = this;

      var t;
      null === (t = this.ΠU) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
      }), this.Πo = new Promise(function (t) {
        return _this5.Πl = t;
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, i, s) {
      this.K(t, s);
    }
  }, {
    key: "\u03A0j",
    value: function Πj(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l;
      var e, h;
      var r = this.constructor.Πp(t, s);

      if (void 0 !== r && !0 === s.reflect) {
        var _n2 = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : o$1.toAttribute)(i, s.type);

        this.Πh = t, null == _n2 ? this.removeAttribute(r) : this.setAttribute(r, _n2), this.Πh = null;
      }
    }
  }, {
    key: "K",
    value: function K(t, i) {
      var s, e, h;
      var r = this.constructor,
          n = r.Πm.get(t);

      if (void 0 !== n && this.Πh !== n) {
        var _t = r.getPropertyOptions(n),
            _l = _t.converter,
            _a3 = null !== (h = null !== (e = null === (s = _l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof _l ? _l : null) && void 0 !== h ? h : o$1.fromAttribute;

        this.Πh = n, this[n] = _a3(i, _t.type), this.Πh = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, i, s) {
      var e = !0;
      void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$1)(this[t], i) ? (this.L.has(t) || this.L.set(t, i), !0 === s.reflect && this.Πh !== t && (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, s))) : e = !1), !this.isUpdatePending && e && (this.Πg = this.Πq());
    }
  }, {
    key: "\u03A0q",
    value: function () {
      var _Πq = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var t;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isUpdatePending = !0;
                _context.prev = 1;
                _context.next = 4;
                return this.Πg;

              case 4:
                if (!this.Πo) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return this.Πo;

              case 7:
                _context.next = 4;
                break;

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                Promise.reject(_context.t0);

              case 14:
                t = this.performUpdate();
                _context.t1 = null != t;

                if (!_context.t1) {
                  _context.next = 19;
                  break;
                }

                _context.next = 19;
                return t;

              case 19:
                return _context.abrupt("return", !this.isUpdatePending);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function Πq() {
        return _Πq.apply(this, arguments);
      }

      return Πq;
    }()
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this6 = this;

      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this.Πi && (this.Πi.forEach(function (t, i) {
        return _this6[i] = t;
      }), this.Πi = void 0);
      var i = !1;
      var s = this.L;

      try {
        i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this.ΠU) || void 0 === t || t.forEach(function (t) {
          var i;
          return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
        }), this.update(s)) : this.Π$();
      } catch (t) {
        throw i = !1, this.Π$(), t;
      }

      i && this.E(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "E",
    value: function E(t) {
      var i;
      null === (i = this.ΠU) || void 0 === i || i.forEach(function (t) {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
      }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "\u03A0$",
    value: function Π$() {
      this.L = new Map(), this.isUpdatePending = !1;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this.Πg;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return !0;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this7 = this;

      void 0 !== this.Πk && (this.Πk.forEach(function (t, i) {
        return _this7.Πj(i, _this7[i], t);
      }), this.Πk = void 0), this.Π$();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var i;
      null !== (i = this.v) && void 0 !== i || (this.v = []), this.v.push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this8 = this;

      this.finalize();
      var t = [];
      return this.elementProperties.forEach(function (i, s) {
        var e = _this8.Πp(s, i);

        void 0 !== e && (_this8.Πm.set(e, s), t.push(e));
      }), t;
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;

      if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
        var _s4 = "symbol" == _typeof(t) ? Symbol() : "__" + t,
            _e2 = this.getPropertyDescriptor(t, _s4, i);

        void 0 !== _e2 && Object.defineProperty(this.prototype, t, _e2);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, i, s) {
      return {
        get: function get() {
          return this[i];
        },
        set: function set(e) {
          var h = this[t];
          this[i] = e, this.requestUpdate(t, h, s);
        },
        configurable: !0,
        enumerable: !0
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      return this.elementProperties.get(t) || l;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      var t = Object.getPrototypeOf(this);

      if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
        var _t2 = this.properties,
            _i2 = [].concat(_toConsumableArray2(Object.getOwnPropertyNames(_t2)), _toConsumableArray2(Object.getOwnPropertySymbols(_t2)));

        var _iterator2 = _createForOfIteratorHelper(_i2),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _s5 = _step2.value;
            this.createProperty(_s5, _t2[_s5]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(i) {
      var s = [];

      if (Array.isArray(i)) {
        var _e3 = new Set(i.flat(1 / 0).reverse());

        var _iterator3 = _createForOfIteratorHelper(_e3),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _i3 = _step3.value;
            s.unshift(u(_i3));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else void 0 !== i && s.push(u(i));

      return s;
    }
  }, {
    key: "\u03A0p",
    value: function Πp(t, i) {
      var s = i.attribute;
      return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);

  return a;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

a.finalized = !0, a.elementProperties = new Map(), a.elementStyles = [], a.shadowRootOptions = {
  mode: "open"
}, null === (e$1 = (s$1 = globalThis).reactiveElementPlatformSupport) || void 0 === e$1 || e$1.call(s$1, {
  ReactiveElement: a
}), (null !== (h = (r$1 = globalThis).reactiveElementVersions) && void 0 !== h ? h : r$1.reactiveElementVersions = []).push("1.0.0-rc.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var t$1, i$1, s$2, e$2;

var o$2 = globalThis.trustedTypes,
    l$1 = o$2 ? o$2.createPolicy("lit-html", {
  createHTML: function createHTML(t) {
    return t;
  }
}) : void 0,
    n$2 = "lit$".concat((Math.random() + "").slice(9), "$"),
    h$1 = "?" + n$2,
    r$2 = "<".concat(h$1, ">"),
    u$1 = document,
    c = function c() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return u$1.createComment(t);
},
    d = function d(t) {
  return null === t || "object" != _typeof(t) && "function" != typeof t;
},
    v = Array.isArray,
    a$1 = function a$1(t) {
  var i;
  return v(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
    f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    _ = /-->/g,
    m = />/g,
    p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
    $ = /'/g,
    g = /"/g,
    y = /^(?:script|style|textarea)$/i,
    b = function b(t) {
  return function (i) {
    for (var _len3 = arguments.length, s = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      s[_key3 - 1] = arguments[_key3];
    }

    return {
      _$litType$: t,
      strings: i,
      values: s
    };
  };
},
    T = b(1),
    w = Symbol["for"]("lit-noChange"),
    A = Symbol["for"]("lit-nothing"),
    P = new WeakMap(),
    V = function V(t, i, s) {
  var e, o;
  var l = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  var n = l._$litPart$;

  if (void 0 === n) {
    var _t3 = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;

    l._$litPart$ = n = new C(i.insertBefore(c(), _t3), _t3, void 0, s);
  }

  return n.I(t), n;
},
    E = u$1.createTreeWalker(u$1, 129, null, !1),
    M = function M(t, i) {
  var s = t.length - 1,
      e = [];
  var o,
      h = 2 === i ? "<svg>" : "",
      u = f;

  for (var _i4 = 0; _i4 < s; _i4++) {
    var _s6 = t[_i4];

    var _l2 = void 0,
        _c = void 0,
        _d2 = -1,
        _v = 0;

    for (; _v < _s6.length && (u.lastIndex = _v, _c = u.exec(_s6), null !== _c);) {
      _v = u.lastIndex, u === f ? "!--" === _c[1] ? u = _ : void 0 !== _c[1] ? u = m : void 0 !== _c[2] ? (y.test(_c[2]) && (o = RegExp("</" + _c[2], "g")), u = p) : void 0 !== _c[3] && (u = p) : u === p ? ">" === _c[0] ? (u = null != o ? o : f, _d2 = -1) : void 0 === _c[1] ? _d2 = -2 : (_d2 = u.lastIndex - _c[2].length, _l2 = _c[1], u = void 0 === _c[3] ? p : '"' === _c[3] ? g : $) : u === g || u === $ ? u = p : u === _ || u === m ? u = f : (u = p, o = void 0);
    }

    var _a4 = u === p && t[_i4 + 1].startsWith("/>") ? " " : "";

    h += u === f ? _s6 + r$2 : _d2 >= 0 ? (e.push(_l2), _s6.slice(0, _d2) + "$lit$" + _s6.slice(_d2) + n$2 + _a4) : _s6 + n$2 + (-2 === _d2 ? (e.push(void 0), _i4) : _a4);
  }

  var c = h + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
  return [void 0 !== l$1 ? l$1.createHTML(c) : c, e];
};

var N = /*#__PURE__*/function () {
  function N(_ref3, s) {
    var t = _ref3.strings,
        i = _ref3._$litType$;

    _classCallCheck2(this, N);

    var e;
    this.parts = [];
    var l = 0,
        r = 0;

    var u = t.length - 1,
        d = this.parts,
        _M = M(t, i),
        _M2 = _slicedToArray2(_M, 2),
        v = _M2[0],
        a = _M2[1];

    if (this.el = N.createElement(v, s), E.currentNode = this.el.content, 2 === i) {
      var _t4 = this.el.content,
          _i5 = _t4.firstChild;
      _i5.remove(), _t4.append.apply(_t4, _toConsumableArray2(_i5.childNodes));
    }

    for (; null !== (e = E.nextNode()) && d.length < u;) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          var _t5 = [];

          var _iterator4 = _createForOfIteratorHelper(e.getAttributeNames()),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _i8 = _step4.value;

              if (_i8.endsWith("$lit$") || _i8.startsWith(n$2)) {
                var _s7 = a[r++];

                if (_t5.push(_i8), void 0 !== _s7) {
                  var _t7 = e.getAttribute(_s7.toLowerCase() + "$lit$").split(n$2),
                      _i9 = /([.?@])?(.*)/.exec(_s7);

                  d.push({
                    type: 1,
                    index: l,
                    name: _i9[2],
                    strings: _t7,
                    ctor: "." === _i9[1] ? I : "?" === _i9[1] ? L : "@" === _i9[1] ? R : H
                  });
                } else d.push({
                  type: 6,
                  index: l
                });
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          for (var _i6 = 0, _t6 = _t5; _i6 < _t6.length; _i6++) {
            var _i7 = _t6[_i6];
            e.removeAttribute(_i7);
          }
        }

        if (y.test(e.tagName)) {
          var _t8 = e.textContent.split(n$2),
              _i10 = _t8.length - 1;

          if (_i10 > 0) {
            e.textContent = o$2 ? o$2.emptyScript : "";

            for (var _s8 = 0; _s8 < _i10; _s8++) {
              e.append(_t8[_s8], c()), E.nextNode(), d.push({
                type: 2,
                index: ++l
              });
            }

            e.append(_t8[_i10], c());
          }
        }
      } else if (8 === e.nodeType) if (e.data === h$1) d.push({
        type: 2,
        index: l
      });else {
        var _t9 = -1;

        for (; -1 !== (_t9 = e.data.indexOf(n$2, _t9 + 1));) {
          d.push({
            type: 7,
            index: l
          }), _t9 += n$2.length - 1;
        }
      }

      l++;
    }
  }

  _createClass2(N, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = u$1.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);

  return N;
}();

function S$1(t, i) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  var o, l, n, h;
  if (i === w) return i;
  var r = void 0 !== e ? null === (o = s.Σi) || void 0 === o ? void 0 : o[e] : s.Σo;
  var u = d(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== u && (null === (l = null == r ? void 0 : r.O) || void 0 === l || l.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r.T(t, s, e)), void 0 !== e ? (null !== (n = (h = s).Σi) && void 0 !== n ? n : h.Σi = [])[e] = r : s.Σo = r), void 0 !== r && (i = S$1(t, r.S(t, i.values), r, e)), i;
}

var k = /*#__PURE__*/function () {
  function k(t, i) {
    _classCallCheck2(this, k);

    this.l = [], this.N = void 0, this.D = t, this.M = i;
  }

  _createClass2(k, [{
    key: "u",
    value: function u(t) {
      var i;
      var _this$D = this.D,
          s = _this$D.el.content,
          e = _this$D.parts,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : u$1).importNode(s, !0);
      E.currentNode = o;
      var l = E.nextNode(),
          n = 0,
          h = 0,
          r = e[0];

      for (; void 0 !== r;) {
        if (n === r.index) {
          var _i11 = void 0;

          2 === r.type ? _i11 = new C(l, l.nextSibling, this, t) : 1 === r.type ? _i11 = new r.ctor(l, r.name, r.strings, this, t) : 6 === r.type && (_i11 = new z(l, this, t)), this.l.push(_i11), r = e[++h];
        }

        n !== (null == r ? void 0 : r.index) && (l = E.nextNode(), n++);
      }

      return o;
    }
  }, {
    key: "v",
    value: function v(t) {
      var i = 0;

      var _iterator5 = _createForOfIteratorHelper(this.l),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _s9 = _step5.value;
          void 0 !== _s9 && (void 0 !== _s9.strings ? (_s9.I(t, _s9, i), i += _s9.strings.length - 2) : _s9.I(t[i])), i++;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);

  return k;
}();

var C = /*#__PURE__*/function () {
  function C(t, i, s, e) {
    _classCallCheck2(this, C);

    this.type = 2, this.N = void 0, this.A = t, this.B = i, this.M = s, this.options = e;
  }

  _createClass2(C, [{
    key: "setConnected",
    value: function setConnected(t) {
      var i;
      null === (i = this.P) || void 0 === i || i.call(this, t);
    }
  }, {
    key: "parentNode",
    get: function get() {
      return this.A.parentNode;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this.A;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this.B;
    }
  }, {
    key: "I",
    value: function I(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = S$1(this, t, i), d(t) ? t === A || null == t || "" === t ? (this.H !== A && this.R(), this.H = A) : t !== this.H && t !== w && this.m(t) : void 0 !== t._$litType$ ? this._(t) : void 0 !== t.nodeType ? this.$(t) : a$1(t) ? this.g(t) : this.m(t);
    }
  }, {
    key: "k",
    value: function k(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.B;
      return this.A.parentNode.insertBefore(t, i);
    }
  }, {
    key: "$",
    value: function $(t) {
      this.H !== t && (this.R(), this.H = this.k(t));
    }
  }, {
    key: "m",
    value: function m(t) {
      var i = this.A.nextSibling;
      null !== i && 3 === i.nodeType && (null === this.B ? null === i.nextSibling : i === this.B.previousSibling) ? i.data = t : this.$(u$1.createTextNode(t)), this.H = t;
    }
  }, {
    key: "_",
    value: function _(t) {
      var i;
      var s = t.values,
          e = t._$litType$,
          o = "number" == typeof e ? this.C(t) : (void 0 === e.el && (e.el = N.createElement(e.h, this.options)), e);
      if ((null === (i = this.H) || void 0 === i ? void 0 : i.D) === o) this.H.v(s);else {
        var _t10 = new k(o, this),
            _i12 = _t10.u(this.options);

        _t10.v(s), this.$(_i12), this.H = _t10;
      }
    }
  }, {
    key: "C",
    value: function C(t) {
      var i = P.get(t.strings);
      return void 0 === i && P.set(t.strings, i = new N(t)), i;
    }
  }, {
    key: "g",
    value: function g(t) {
      v(this.H) || (this.H = [], this.R());
      var i = this.H;
      var s,
          e = 0;

      var _iterator6 = _createForOfIteratorHelper(t),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _o = _step6.value;
          e === i.length ? i.push(s = new C(this.k(c()), this.k(c()), this, this.options)) : s = i[e], s.I(_o), e++;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      e < i.length && (this.R(s && s.B.nextSibling, e), i.length = e);
    }
  }, {
    key: "R",
    value: function R() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.A.nextSibling;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var s;

      for (null === (s = this.P) || void 0 === s || s.call(this, !1, !0, i); t && t !== this.B;) {
        var _i13 = t.nextSibling;
        t.remove(), t = _i13;
      }
    }
  }]);

  return C;
}();

var H = /*#__PURE__*/function () {
  function H(t, i, s, e, o) {
    _classCallCheck2(this, H);

    this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t, this.name = i, this.M = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this.H = Array(s.length - 1).fill(A), this.strings = s) : this.H = A;
  }

  _createClass2(H, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "I",
    value: function I(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var o = this.strings;
      var l = !1;
      if (void 0 === o) t = S$1(this, t, i, 0), l = !d(t) || t !== this.H && t !== w, l && (this.H = t);else {
        var _e4 = t;

        var _n3, _h;

        for (t = o[0], _n3 = 0; _n3 < o.length - 1; _n3++) {
          _h = S$1(this, _e4[s + _n3], i, _n3), _h === w && (_h = this.H[_n3]), l || (l = !d(_h) || _h !== this.H[_n3]), _h === A ? t = A : t !== A && (t += (null != _h ? _h : "") + o[_n3 + 1]), this.H[_n3] = _h;
        }
      }
      l && !e && this.W(t);
    }
  }, {
    key: "W",
    value: function W(t) {
      t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }]);

  return H;
}();

var I = /*#__PURE__*/function (_H) {
  _inherits(I, _H);

  var _super2 = _createSuper(I);

  function I() {
    var _this9;

    _classCallCheck2(this, I);

    _this9 = _super2.apply(this, arguments), _this9.type = 3;
    return _this9;
  }

  _createClass2(I, [{
    key: "W",
    value: function W(t) {
      this.element[this.name] = t === A ? void 0 : t;
    }
  }]);

  return I;
}(H);

var L = /*#__PURE__*/function (_H2) {
  _inherits(L, _H2);

  var _super3 = _createSuper(L);

  function L() {
    var _this10;

    _classCallCheck2(this, L);

    _this10 = _super3.apply(this, arguments), _this10.type = 4;
    return _this10;
  }

  _createClass2(L, [{
    key: "W",
    value: function W(t) {
      t && t !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
    }
  }]);

  return L;
}(H);

var R = /*#__PURE__*/function (_H3) {
  _inherits(R, _H3);

  var _super4 = _createSuper(R);

  function R() {
    var _this11;

    _classCallCheck2(this, R);

    _this11 = _super4.apply(this, arguments), _this11.type = 5;
    return _this11;
  }

  _createClass2(R, [{
    key: "I",
    value: function I(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s;
      if ((t = null !== (s = S$1(this, t, i, 0)) && void 0 !== s ? s : A) === w) return;
      var e = this.H,
          o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          l = t !== A && (e === A || o);
      o && this.element.removeEventListener(this.name, this, e), l && this.element.addEventListener(this.name, this, t), this.H = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var i, s;
      "function" == typeof this.H ? this.H.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this.H.handleEvent(t);
    }
  }]);

  return R;
}(H);

var z = /*#__PURE__*/function () {
  function z(t, i, s) {
    _classCallCheck2(this, z);

    this.element = t, this.type = 6, this.N = void 0, this.V = void 0, this.M = i, this.options = s;
  }

  _createClass2(z, [{
    key: "I",
    value: function I(t) {
      S$1(this, t);
    }
  }]);

  return z;
}();

null === (i$1 = (t$1 = globalThis).litHtmlPlatformSupport) || void 0 === i$1 || i$1.call(t$1, N, C), (null !== (s$2 = (e$2 = globalThis).litHtmlVersions) && void 0 !== s$2 ? s$2 : e$2.litHtmlVersions = []).push("2.0.0-rc.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var i$2, l$2, o$3, s$3, n$3, a$2;
(null !== (i$2 = (a$2 = globalThis).litElementVersions) && void 0 !== i$2 ? i$2 : a$2.litElementVersions = []).push("3.0.0-rc.2");

var h$2 = /*#__PURE__*/function (_a5) {
  _inherits(h$2, _a5);

  var _super5 = _createSuper(h$2);

  function h$2() {
    var _this12;

    _classCallCheck2(this, h$2);

    _this12 = _super5.apply(this, arguments), _this12.renderOptions = {
      host: _assertThisInitialized(_this12)
    }, _this12.Φt = void 0;
    return _this12;
  }

  _createClass2(h$2, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t, e;

      var r = _get(_getPrototypeOf(h$2.prototype), "createRenderRoot", this).call(this);

      return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r;
    }
  }, {
    key: "update",
    value: function update(t) {
      var r = this.render();
      _get(_getPrototypeOf(h$2.prototype), "update", this).call(this, t), this.Φt = V(r, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      _get(_getPrototypeOf(h$2.prototype), "connectedCallback", this).call(this), null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      _get(_getPrototypeOf(h$2.prototype), "disconnectedCallback", this).call(this), null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
    }
  }, {
    key: "render",
    value: function render() {
      return w;
    }
  }]);

  return h$2;
}(a);

h$2.finalized = !0, h$2._$litElement$ = !0, null === (o$3 = (l$2 = globalThis).litElementHydrateSupport) || void 0 === o$3 || o$3.call(l$2, {
  LitElement: h$2
}), null === (n$3 = (s$3 = globalThis).litElementPlatformSupport) || void 0 === n$3 || n$3.call(s$3, {
  LitElement: h$2
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var i$3 = function i$3(i, e) {
  return "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? _objectSpread2(_objectSpread2({}, e), {}, {
    finisher: function finisher(n) {
      n.createProperty(e.key, i);
    }
  }) : {
    kind: "field",
    key: Symbol(),
    placement: "own",
    descriptor: {},
    originalKey: e.key,
    initializer: function initializer() {
      "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
    },
    finisher: function finisher(n) {
      n.createProperty(e.key, i);
    }
  };
};

function e$3(e) {
  return function (n, t) {
    return void 0 !== t ? function (i, e, n) {
      e.constructor.createProperty(n, i);
    }(e, n, t) : i$3(e, n);
  };
}

(function () {
  function g(a) {
    var b = 0;
    return function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      };
    };
  }

  if (!ShadowRoot.prototype.createElement) {
    var h = window.HTMLElement,
        l = window.customElements.define,
        m = window.customElements.get,
        n = window.customElements,
        p = new WeakMap(),
        q = new WeakMap(),
        r = new WeakMap(),
        t = new WeakMap();

    window.CustomElementRegistry = function () {
      this.l = new Map();
      this.o = new Map();
      this.i = new Map();
      this.h = new Map();
    };

    window.CustomElementRegistry.prototype.define = function (a, b) {
      a = a.toLowerCase();
      if (void 0 !== this.j(a)) throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': the name \"" + a + '" has already been used with this registry');
      if (void 0 !== this.o.get(b)) throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");
      var c = b.prototype.attributeChangedCallback,
          d = new Set(b.observedAttributes || []);
      u(b, d, c);
      c = {
        g: b,
        connectedCallback: b.prototype.connectedCallback,
        disconnectedCallback: b.prototype.disconnectedCallback,
        adoptedCallback: b.prototype.adoptedCallback,
        attributeChangedCallback: c,
        observedAttributes: d
      };
      this.l.set(a, c);
      this.o.set(b, c);
      d = m.call(n, a);
      d || (d = v(a), l.call(n, a, d));
      this === window.customElements && (r.set(b, c), c.s = d);

      if (d = this.h.get(a)) {
        this.h["delete"](a);
        var e = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];
        d = e ? e.call(d) : {
          next: g(d)
        };

        for (e = d.next(); !e.done; e = d.next()) {
          e = e.value, q["delete"](e), w(e, c, !0);
        }
      }

      c = this.i.get(a);
      void 0 !== c && (c.resolve(b), this.i["delete"](a));
      return b;
    };

    window.CustomElementRegistry.prototype.upgrade = function () {
      x.push(this);
      n.upgrade.apply(n, arguments);
      x.pop();
    };

    window.CustomElementRegistry.prototype.get = function (a) {
      var b;
      return null == (b = this.l.get(a)) ? void 0 : b.g;
    };

    window.CustomElementRegistry.prototype.j = function (a) {
      return this.l.get(a);
    };

    window.CustomElementRegistry.prototype.whenDefined = function (a) {
      var b = this.j(a);
      if (void 0 !== b) return Promise.resolve(b.g);
      var c = this.i.get(a);
      void 0 === c && (c = {}, c.promise = new Promise(function (d) {
        return c.resolve = d;
      }), this.i.set(a, c));
      return c.promise;
    };

    window.CustomElementRegistry.prototype.m = function (a, b, c) {
      var d = this.h.get(b);
      d || this.h.set(b, d = new Set());
      c ? d.add(a) : d["delete"](a);
    };

    var y;

    window.HTMLElement = function () {
      var a = y;
      if (a) return y = void 0, a;
      var b = r.get(this.constructor);
      if (!b) throw new TypeError("Illegal constructor (custom element class must be registered with global customElements registry to be newable)");
      a = Reflect.construct(h, [], b.s);
      Object.setPrototypeOf(a, this.constructor.prototype);
      p.set(a, b);
      return a;
    };

    window.HTMLElement.prototype = h.prototype;

    var v = function v(a) {
      function b() {
        var c = Reflect.construct(h, [], this.constructor);
        Object.setPrototypeOf(c, HTMLElement.prototype);

        a: {
          var d = c.getRootNode();

          if (!(d === document || d instanceof ShadowRoot)) {
            d = x[x.length - 1];

            if (d instanceof CustomElementRegistry) {
              var e = d;
              break a;
            }

            d = d.getRootNode();
            d === document || d instanceof ShadowRoot || (d = (null == (e = t.get(d)) ? void 0 : e.getRootNode()) || document);
          }

          e = d.customElements;
        }

        e = e || window.customElements;
        (d = e.j(a)) ? w(c, d) : q.set(c, e);
        return c;
      }

      b.prototype.connectedCallback = function () {
        var c = p.get(this);
        c ? c.connectedCallback && c.connectedCallback.apply(this, arguments) : q.get(this).m(this, a, !0);
      };

      b.prototype.disconnectedCallback = function () {
        var c = p.get(this);
        c ? c.disconnectedCallback && c.disconnectedCallback.apply(this, arguments) : q.get(this).m(this, a, !1);
      };

      b.prototype.adoptedCallback = function () {
        var c, d;
        null == (c = p.get(this)) || null == (d = c.adoptedCallback) || d.apply(this, arguments);
      };

      return b;
    },
        u = function u(a, b, c) {
      if (0 !== b.size && void 0 !== c) {
        var d = a.prototype.setAttribute;
        d && (a.prototype.setAttribute = function (f, k) {
          if (b.has(f)) {
            var C = this.getAttribute(f);
            d.call(this, f, k);
            c.call(this, f, C, k);
          } else d.call(this, f, k);
        });
        var e = a.prototype.removeAttribute;
        e && (a.prototype.removeAttribute = function (f) {
          if (b.has(f)) {
            var k = this.getAttribute(f);
            e.call(this, f);
            c.call(this, f, k, null);
          } else e.call(this, f);
        });
      }
    },
        z = function z(a) {
      var b = Object.getPrototypeOf(a);
      if (b !== window.HTMLElement) return b === h ? Object.setPrototypeOf(a, window.HTMLElement) : z(b);
    },
        w = function w(a, b, c) {
      c = void 0 === c ? !1 : c;
      Object.setPrototypeOf(a, b.g.prototype);
      p.set(a, b);
      y = a;

      try {
        new b.g();
      } catch (d) {
        z(b.g), new b.g();
      }

      b.observedAttributes.forEach(function (d) {
        a.hasAttribute(d) && b.attributeChangedCallback.call(a, d, null, a.getAttribute(d));
      });
      c && b.connectedCallback && a.isConnected && b.connectedCallback.call(a);
    },
        A = Element.prototype.attachShadow;

    Element.prototype.attachShadow = function (a) {
      var b = A.apply(this, arguments);
      a.customElements && (b.customElements = a.customElements);
      return b;
    };

    var x = [document],
        B = function B(a, b, c) {
      var d = (c ? Object.getPrototypeOf(c) : a.prototype)[b];

      a.prototype[b] = function () {
        x.push(this);
        var e = d.apply(c || this, arguments);
        void 0 !== e && t.set(e, this);
        x.pop();
        return e;
      };
    };

    B(ShadowRoot, "createElement", document);
    B(ShadowRoot, "importNode", document);
    B(Element, "insertAdjacentHTML");

    var D = function D(a) {
      var b = Object.getOwnPropertyDescriptor(a.prototype, "innerHTML");
      Object.defineProperty(a.prototype, "innerHTML", Object.assign({}, b, {
        set: function set(c) {
          x.push(this);
          b.set.call(this, c);
          x.pop();
        }
      }));
    };

    D(Element);
    D(ShadowRoot);
    Object.defineProperty(window, "customElements", {
      value: new CustomElementRegistry(),
      configurable: !0,
      writable: !0
    });
  }
}).call(self);
var appliedClassMixins = new WeakMap();
/** Vefify if the Mixin was previously applyed
 * @private
 * @param {function} mixin      Mixin being applyed
 * @param {object} superClass   Class receiving the new mixin
 * @returns {boolean}
 */

function wasMixinPreviouslyApplied(mixin, superClass) {
  var klass = superClass;

  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }

    klass = Object.getPrototypeOf(klass);
  }

  return false;
}
/** Apply each mixin in the chain to make sure they are not applied more than once to the final class.
 * @export
 * @param {function} mixin      Mixin to be applyed
 * @returns {object}            Mixed class with mixin applied
 */


function dedupeMixin(mixin) {
  return function (superClass) {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }

    var mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}
/**
 * @typedef {import('./types').RenderOptions} RenderOptions
 * @typedef {import('./types').ScopedElementsMixin} ScopedElementsMixin
 * @typedef {import('./types').ScopedElementsHost} ScopedElementsHost
 * @typedef {import('./types').ScopedElementsMap} ScopedElementsMap
 * @typedef {import('@lit/reactive-element').CSSResultFlatArray} CSSResultFlatArray
 */

/**
 * @template {import('./types').Constructor<HTMLElement>} T
 * @param {T} superclass
 * @return {T & import('./types').Constructor<ScopedElementsHost>}
 */


var ScopedElementsMixinImplementation = function ScopedElementsMixinImplementation(superclass) {
  return (
    /*#__PURE__*/

    /** @type {ScopedElementsHost} */
    function (_superclass) {
      _inherits(ScopedElementsHost, _superclass);

      var _super6 = _createSuper(ScopedElementsHost);

      // either TS or ESLint will complain here
      // eslint-disable-next-line no-unused-vars
      function ScopedElementsHost() {
        var _this13;

        _classCallCheck2(this, ScopedElementsHost);

        _this13 = _super6.call(this);
        /** @type {RenderOptions} */

        _this13.renderOptions = _this13.renderOptions || undefined;
        return _this13;
      }
      /**
       * Obtains the CustomElementRegistry associated to the ShadowRoot.
       *
       * @returns {CustomElementRegistry}
       */


      _createClass2(ScopedElementsHost, [{
        key: "registry",
        get: function get() {
          // @ts-ignore
          return this.constructor.__registry;
        }
        /**
         * Set the CustomElementRegistry associated to the ShadowRoot
         *
         * @param {CustomElementRegistry} registry
         */
        ,
        set: function set(registry) {
          // @ts-ignore
          this.constructor.__registry = registry;
        }
        /** @override */

      }, {
        key: "createRenderRoot",
        value: function createRenderRoot() {
          var _this14 = this;

          var _this$constructor =
          /** @type {typeof ScopedElementsHost} */
          this.constructor,
              scopedElements = _this$constructor.scopedElements,
              shadowRootOptions = _this$constructor.shadowRootOptions,
              elementStyles = _this$constructor.elementStyles;

          if (!this.registry) {
            this.registry = new CustomElementRegistry();
            Object.entries(scopedElements).forEach(function (_ref4) {
              var _ref5 = _slicedToArray2(_ref4, 2),
                  tagName = _ref5[0],
                  klass = _ref5[1];

              return _this14.registry.define(tagName, klass);
            });
          }
          /** @type {ShadowRootInit} */


          var options = _objectSpread2(_objectSpread2({
            mode: 'open'
          }, shadowRootOptions), {}, {
            customElements: this.registry
          });

          this.renderOptions.creationScope = this.attachShadow(options);
          if (this.renderOptions.creationScope instanceof ShadowRoot) S(this.renderOptions.creationScope, elementStyles);
          return this.renderOptions.creationScope;
        }
        /**
         * Defines a scoped element.
         *
         * @param {string} tagName
         * @param {typeof HTMLElement} klass
         */

      }, {
        key: "defineScopedElement",
        value: function defineScopedElement(tagName, klass) {
          return this.registry.get(tagName) || this.registry.define(tagName, klass);
        }
        /**
         * @deprecated use the native el.tagName instead
         *
         * @param {string} tagName
         * @returns {string} the tag name
         */
        // eslint-disable-next-line class-methods-use-this

      }, {
        key: "getScopedTagName",
        value: function getScopedTagName(tagName) {
          return tagName;
        }
        /**
         * @deprecated use the native el.tagName instead
         *
         * @param {string} tagName
         * @returns {string} the tag name
         */
        // eslint-disable-next-line class-methods-use-this

      }], [{
        key: "scopedElements",
        get:
        /**
         * Obtains the scoped elements definitions map if specified.
         *
         * @returns {ScopedElementsMap}
         */
        function get() {
          return {};
        }
        /**
         * Obtains the ShadowRoot options.
         *
         * @type {ShadowRootInit}
         */

      }, {
        key: "shadowRootOptions",
        get: function get() {
          return this.__shadowRootOptions;
        }
        /**
         * Set the shadowRoot options.
         *
         * @param {ShadowRootInit} value
         */
        ,
        set: function set(value) {
          this.__shadowRootOptions = value;
        }
        /**
         * Obtains the element styles.
         *
         * @returns {CSSResultFlatArray}
         */

      }, {
        key: "elementStyles",
        get: function get() {
          return this.__elementStyles;
        },
        set: function set(styles) {
          this.__elementStyles = styles;
        }
      }, {
        key: "getScopedTagName",
        value: function getScopedTagName(tagName) {
          return tagName;
        }
      }]);

      return ScopedElementsHost;
    }(superclass)
  );
};

var ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);
var RequestMethod;

(function (RequestMethod) {
  RequestMethod["POST"] = "post";
  RequestMethod["GET"] = "get";
  RequestMethod["PUT"] = "put";
  RequestMethod["DELETE"] = "delete";
})(RequestMethod || (RequestMethod = {}));

var APICall = /*#__PURE__*/function () {
  /**
   *
   * @param apiUrl api url
   * @param authToken x-auth-token token
   */
  function APICall(apiUrl, authToken) {
    _classCallCheck2(this, APICall);

    this.apiUrl = '';
    this.authToken = '';
    this.apiUrl = apiUrl;
    this.authToken = authToken;
  }
  /**
   *
   * @param request APIRequest
   */


  _createClass2(APICall, [{
    key: "send",
    value: function send(request) {
      var _this15 = this;

      return new Promise(function (resolve, reject) {
        var requestMethod = request.requestMethod,
            endpoint = request.endpoint,
            data = request.data,
            searchParams = request.searchParams;
        var options = {
          method: requestMethod,
          headers: {}
        };

        if (_this15.authToken) {
          options.headers['x-auth-token'] = _this15.authToken;
        }

        if (data) {
          options.headers['Content-Type'] = 'application/json';

          try {
            options.body = JSON.stringify(data);
          } catch (error) {
            reject(error);
          }
        }

        var url = new URL("".concat(_this15.apiUrl, "/").concat(endpoint));

        if (searchParams) {
          url.search = searchParams.toString();
        }

        fetch(url.toString(), options).then(function (res) {
          return res.json();
        }).then(function (resData) {
          resolve(resData);
        })["catch"](resolve);
      });
    }
  }]);

  return APICall;
}();

var Campaign = /*#__PURE__*/function () {
  function Campaign() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var api = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck2(this, Campaign);

    this.data = {};
    this.images = [];
    this.data = data;
    this.id = data.id;
    this.api = api;
  }

  _createClass2(Campaign, [{
    key: "save",
    value: function save(data) {
      var _this16 = this;

      return new Promise(function (resolve, reject) {
        var request = {
          requestMethod: _this16.id ? RequestMethod.PUT : RequestMethod.POST,
          endpoint: _this16.id ? "campaign/".concat(_this16.id) : 'campaign',
          data: data
        };

        _this16.api.send(request).then(function (res) {
          _this16.data = res;
          resolve(res);
        })["catch"](reject);
      });
    }
  }]);

  return Campaign;
}();

var Subscription = /*#__PURE__*/function () {
  function Subscription() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var api = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck2(this, Subscription);

    this.data = {};
    this.data = data;
    this.id = data.id;
    this.api = api;
  }
  /**
   *
   * @param stripe the stripe object to create the subscription with
   * @param cardToken token ID of tokenized card
   * @returns
   */


  _createClass2(Subscription, [{
    key: "payWithStripe",
    value: function () {
      var _payWithStripe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(stripe, cardToken) {
        var _this17 = this;

        var subscriptionData, request;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subscriptionData = {
                  token: cardToken,
                  email: this.data.email,
                  first_name: this.data.first_name,
                  last_name: this.data.last_name,
                  street1: this.data.street1,
                  mail_code: this.data.mail_code,
                  city_id: this.data.city_id,
                  subscription_plan_id: this.data.subscription_plan_id,
                  portal_name: this.data.portal_name.trim().replace(/ /g, '_'),
                  terms: this.data.terms,
                  use_sca: 1,
                  source: this.data.source,
                  create_sample_data: this.data.create_sample_data,
                  secure_site: 0,
                  custom_domain: 'custom'
                };
                /*
                if (this.data.plan.addon) {
                  subscriptionData.addon_domain = 1;
                } */

                request = {
                  requestMethod: RequestMethod.POST,
                  endpoint: 'subscription',
                  data: subscriptionData
                };
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this17.api.send(request).then(function (success) {
                    if (success.sca_status === 'requies_action' || success.sca_status === 'requires_source_action') {
                      stripe.confirmCardPayment(success.client_secret).then(function (pi) {
                        if (pi.error) {
                          reject(pi.error);
                        } else {
                          resolve(success);
                        }
                      })["catch"](function (error) {
                        reject(error);
                      });
                    } else {
                      console.log('no auth, resolving');
                      resolve(success);
                    }
                  })["catch"](function (error) {
                    reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function payWithStripe(_x, _x2) {
        return _payWithStripe.apply(this, arguments);
      }

      return payWithStripe;
    }()
  }]);

  return Subscription;
}();
/**
 * constants
 */


var AUTH_TOKEN = 'skhemataToken';
var CampaignFileRegion;

(function (CampaignFileRegion) {
  CampaignFileRegion[CampaignFileRegion["header"] = 1] = "header";
  CampaignFileRegion[CampaignFileRegion["body"] = 2] = "body";
  CampaignFileRegion[CampaignFileRegion["thumbnail"] = 3] = "thumbnail";
  CampaignFileRegion[CampaignFileRegion["top_header"] = 5] = "top_header";
  CampaignFileRegion[CampaignFileRegion["thumbnail_video"] = 6] = "thumbnail_video";
})(CampaignFileRegion || (CampaignFileRegion = {}));

var Skhemata = /*#__PURE__*/function () {
  /**
   *
   * @param apiUrl string
   * @param authToken string
   */
  function Skhemata(apiUrl, authToken) {
    var _this18 = this;

    _classCallCheck2(this, Skhemata);

    this.api = new APICall(apiUrl, authToken);
    window.addEventListener('skhemata-login', function (e) {
      _this18.api.authToken = e.detail.authToken;
    });
  }
  /**
   * initialize skhemata api object
   * @returns boolean of auth status
   */


  _createClass2(Skhemata, [{
    key: "init",
    value: function init() {
      var _this19 = this;

      var authToken = localStorage.getItem(AUTH_TOKEN) || undefined;
      return new Promise(function (resolve) {
        if (!authToken) {
          resolve(false);
        }

        _this19.authenticate({
          authToken: authToken
        }).then(function () {
          return resolve(true);
        })["catch"](function () {
          return resolve(false);
        });
      });
    }
    /**
     * authenticate
     * @param auth auth info
     * @returns Promise with api response
     */

  }, {
    key: "authenticate",
    value: function authenticate(auth) {
      var _this20 = this;

      var authToken = auth.authToken,
          email = auth.email,
          password = auth.password;
      var data;

      if (email && password) {
        data = {
          email: email,
          password: password
        };
      }

      if (authToken) {
        this.api.authToken = authToken;
      }

      var request = {
        requestMethod: data ? RequestMethod.POST : RequestMethod.GET,
        endpoint: 'authenticate',
        data: data
      };
      return this.api.send(request).then(function (res) {
        _this20.api.authToken = res.authToken;
        localStorage.set(AUTH_TOKEN, _this20.api.authToken);
        window.dispatchEvent(new CustomEvent('skhemata-login', {
          detail: {
            authToken: _this20.api.authToken
          }
        }));
        return res;
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      this.api.authToken = undefined;
      localStorage.removeItem(AUTH_TOKEN);
      window.dispatchEvent(new CustomEvent('skhemata-logout'));
    }
    /***************
    * Campaign *
    ***************/

    /**
     *
     * @param id ID of the campaign
     * @returns Promise<Campaign>
     */

  }, {
    key: "getCampaign",
    value: function getCampaign(id) {
      var _this21 = this;

      var campaignRequest = {
        requestMethod: RequestMethod.GET,
        endpoint: "campaign/".concat(id)
      };
      var imageRequest = {
        requestMethod: RequestMethod.GET,
        endpoint: "campaign/".concat(id, "/resource/file")
      };
      var newCampaign;
      return this.api.send(campaignRequest).then(function (campaign) {
        newCampaign = new Campaign(campaign, _this21.api);
      }).then(function () {
        return _this21.api.send(imageRequest);
      }).then(function (images) {
        newCampaign.images = images.filter(function (image) {
          return image.region_id === CampaignFileRegion.thumbnail;
        });
        return newCampaign;
      });
    }
    /**
     *
     * @param data campaign data
     * @returns Promise<Campaign>
     */

  }, {
    key: "createCampaign",
    value: function createCampaign(data) {
      var _this22 = this;

      var request = {
        requestMethod: RequestMethod.POST,
        endpoint: 'campaign',
        data: data
      };
      return this.api.send(request).then(function (campaign) {
        return new Campaign(campaign, _this22.api);
      });
    }
    /**
     *  getCampaigns
     * @param params CampaignSearch object
     * @returns Promise with Array of Campaign objects or Error
     */

  }, {
    key: "getCampaigns",
    value: function getCampaigns(params) {
      var _this23 = this;

      var sort = params.sort,
          filter = params.filter,
          page = params.page;
      var searchParams = new URLSearchParams();

      if (sort) {
        searchParams.set('sort', JSON.stringify(sort));
      }

      if (sort) {
        searchParams.set('filter', JSON.stringify(filter));
      }

      if (page) {
        if (_typeof(page.page) !== undefined) {
          searchParams.set('page', "".concat(page.page));
        }

        if (_typeof(page.page_entries) !== undefined) {
          searchParams.set('page_entries', "".concat(page.page_entries));
        }
      }

      var request = {
        requestMethod: RequestMethod.GET,
        endpoint: 'campaign',
        searchParams: searchParams
      };
      return this.api.send(request).then(function (res) {
        return res.map(function (campaign) {
          return new Campaign(campaign, _this23.api);
        });
      })["catch"](function () {
        return new Error('Error');
      });
    }
    /***************
    * SUBSCRIPTION *
    ***************/

    /**
     *
     * @param data data to create the subscription
     * @returns Subscription object
     */

  }, {
    key: "createSubscription",
    value: function createSubscription(data) {
      return new Subscription(data, this.api);
    }
  }]);

  return Skhemata;
}();
/**
 *
 * This element is needed for bulma styling
 * Refer to documentation: https://bulma.io/documentation
 *
 **/


var Bulma = i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n/*! bulma.io v0.9.2 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.button, .input, .textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n\n.button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,\n.file-name:focus, .pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n.is-focused.file-name, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,\n.file-name:active, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,\n.is-active.file-name, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis {\n  outline: none;\n}\n\n.button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],\n.file-name[disabled], .pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled],\n.pagination-ellipsis[disabled],\nfieldset[disabled] .button,\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select,\nfieldset[disabled] .file-cta,\nfieldset[disabled] .file-name,\nfieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis {\n  cursor: not-allowed;\n}\n\n.button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs, .is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .pagination:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.delete, .modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n\n.delete::before, .modal-close::before {\n  height: 2px;\n  width: 50%;\n}\n\n.delete::after, .modal-close::after {\n  height: 50%;\n  width: 2px;\n}\n\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n\n.delete:active, .modal-close:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n\n.is-small.delete, .is-small.modal-close {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n\n.is-medium.delete, .is-medium.modal-close {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n\n.is-large.delete, .is-large.modal-close {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .modal, .modal-background, .is-overlay, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na strong {\n  color: currentColor;\n}\n\na:hover {\n  color: #363636;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\n\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\n\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit;\n}\n\ntable th {\n  color: #363636;\n}\n\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n}\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n}\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n\n.button strong {\n  color: inherit;\n}\n\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em;\n}\n\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px);\n}\n\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px);\n}\n\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n\n.button:focus, .button.is-focused {\n  border-color: #3273dc;\n  color: #363636;\n}\n\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n\n.button.is-text[disabled],\nfieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #3273dc;\n  text-decoration: none;\n}\n\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #3273dc;\n  text-decoration: underline;\n}\n\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white[disabled],\nfieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n\n.button.is-white.is-inverted[disabled],\nfieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-white.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-white.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black[disabled],\nfieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-black.is-inverted[disabled],\nfieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-black.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-black.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light[disabled],\nfieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-inverted[disabled],\nfieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke;\n}\n\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-light.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n\n.button.is-light.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark[disabled],\nfieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-dark.is-inverted[disabled],\nfieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636;\n}\n\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-dark.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n\n.button.is-dark.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary[disabled],\nfieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-primary.is-inverted[disabled],\nfieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-primary.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  box-shadow: none;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n\n.button.is-primary.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #defffa;\n  border-color: transparent;\n  color: #00947e;\n}\n\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #d1fff8;\n  border-color: transparent;\n  color: #00947e;\n}\n\n.button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link[disabled],\nfieldset[disabled] .button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #3273dc;\n}\n\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-link.is-inverted[disabled],\nfieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3273dc;\n}\n\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  color: #3273dc;\n}\n\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-link.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  box-shadow: none;\n  color: #3273dc;\n}\n\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3273dc;\n}\n\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n\n.button.is-link.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-link.is-light {\n  background-color: #eef3fc;\n  color: #2160c4;\n}\n\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #e3ecfa;\n  border-color: transparent;\n  color: #2160c4;\n}\n\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #d8e4f8;\n  border-color: transparent;\n  color: #2160c4;\n}\n\n.button.is-info {\n  background-color: #3298dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #2793da;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);\n}\n\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #238cd1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info[disabled],\nfieldset[disabled] .button.is-info {\n  background-color: #3298dc;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #3298dc;\n}\n\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-info.is-inverted[disabled],\nfieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3298dc;\n}\n\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3298dc;\n  color: #3298dc;\n}\n\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #3298dc;\n  border-color: #3298dc;\n  color: #fff;\n}\n\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #3298dc #3298dc !important;\n}\n\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-info.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3298dc;\n  box-shadow: none;\n  color: #3298dc;\n}\n\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3298dc;\n}\n\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3298dc #3298dc !important;\n}\n\n.button.is-info.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-info.is-light {\n  background-color: #eef6fc;\n  color: #1d72aa;\n}\n\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e3f1fa;\n  border-color: transparent;\n  color: #1d72aa;\n}\n\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #d8ebf8;\n  border-color: transparent;\n  color: #1d72aa;\n}\n\n.button.is-success {\n  background-color: #48c774;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec46d;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);\n}\n\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb67;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success[disabled],\nfieldset[disabled] .button.is-success {\n  background-color: #48c774;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c774;\n}\n\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-success.is-inverted[disabled],\nfieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #48c774;\n}\n\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c774;\n  color: #48c774;\n}\n\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c774;\n  border-color: #48c774;\n  color: #fff;\n}\n\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c774 #48c774 !important;\n}\n\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-success.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c774;\n  box-shadow: none;\n  color: #48c774;\n}\n\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c774;\n}\n\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c774 #48c774 !important;\n}\n\n.button.is-success.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-success.is-light {\n  background-color: #effaf3;\n  color: #257942;\n}\n\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ec;\n  border-color: transparent;\n  color: #257942;\n}\n\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e4;\n  border-color: transparent;\n  color: #257942;\n}\n\n.button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning[disabled],\nfieldset[disabled] .button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-inverted[disabled],\nfieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffdd57;\n}\n\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  color: #ffdd57;\n}\n\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-warning.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  box-shadow: none;\n  color: #ffdd57;\n}\n\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n\n.button.is-warning.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-light {\n  background-color: #fffbeb;\n  color: #947600;\n}\n\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff8de;\n  border-color: transparent;\n  color: #947600;\n}\n\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff6d1;\n  border-color: transparent;\n  color: #947600;\n}\n\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger[disabled],\nfieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-danger.is-inverted[disabled],\nfieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #f14668;\n}\n\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668;\n}\n\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-danger.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  box-shadow: none;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n\n.button.is-danger.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35;\n}\n\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35;\n}\n\n.button.is-small {\n  font-size: 0.75rem;\n}\n\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px;\n}\n\n.button.is-normal {\n  font-size: 1rem;\n}\n\n.button.is-medium {\n  font-size: 1.25rem;\n}\n\n.button.is-large {\n  font-size: 1.5rem;\n}\n\n.button[disabled],\nfieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5;\n}\n\n.button.is-fullwidth {\n  display: flex;\n  width: 100%;\n}\n\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em / 2));\n  top: calc(50% - (1em / 2));\n  position: absolute !important;\n}\n\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none;\n}\n\n.button.is-rounded {\n  border-radius: 290486px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em);\n}\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem;\n}\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px;\n}\n\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.buttons.is-centered {\n  justify-content: center;\n}\n\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.buttons.is-right {\n  justify-content: flex-end;\n}\n\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%;\n}\n\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}\n\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n\n.content ul ul ul {\n  list-style-type: square;\n}\n\n.content dd {\n  margin-left: 2em;\n}\n\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n\n.content figure img {\n  display: inline-block;\n}\n\n.content figure figcaption {\n  font-style: italic;\n}\n\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n\n.content table {\n  width: 100%;\n}\n\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n\n.content table th {\n  color: #363636;\n}\n\n.content table th:not([align]) {\n  text-align: inherit;\n}\n\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n\n.content .tabs li + li {\n  margin-top: 0;\n}\n\n.content.is-small {\n  font-size: 0.75rem;\n}\n\n.content.is-medium {\n  font-size: 1.25rem;\n}\n\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.icon-text {\n  align-items: flex-start;\n  color: inherit;\n  display: inline-flex;\n  flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top;\n}\n\n.icon-text .icon {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em;\n}\n\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em;\n}\n\ndiv.icon-text {\n  display: flex;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n\n.image img.is-rounded {\n  border-radius: 290486px;\n}\n\n.image.is-fullwidth {\n  width: 100%;\n}\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n\n.image.is-5by4 {\n  padding-top: 80%;\n}\n\n.image.is-4by3 {\n  padding-top: 75%;\n}\n\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n\n.image.is-5by3 {\n  padding-top: 60%;\n}\n\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n\n.image.is-2by1 {\n  padding-top: 50%;\n}\n\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n\n.image.is-4by5 {\n  padding-top: 125%;\n}\n\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n\n.image.is-2by3 {\n  padding-top: 150%;\n}\n\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n\n.image.is-1by2 {\n  padding-top: 200%;\n}\n\n.image.is-1by3 {\n  padding-top: 300%;\n}\n\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.notification strong {\n  color: currentColor;\n}\n\n.notification code,\n.notification pre {\n  background: white;\n}\n\n.notification pre code {\n  background: transparent;\n}\n\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.notification.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.notification.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.notification.is-link.is-light {\n  background-color: #eef3fc;\n  color: #2160c4;\n}\n\n.notification.is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.notification.is-info.is-light {\n  background-color: #eef6fc;\n  color: #1d72aa;\n}\n\n.notification.is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.notification.is-success.is-light {\n  background-color: #effaf3;\n  color: #257942;\n}\n\n.notification.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.notification.is-warning.is-light {\n  background-color: #fffbeb;\n  color: #947600;\n}\n\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n\n.progress::-webkit-progress-bar {\n  background-color: #ededed;\n}\n\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n\n.progress.is-white::-webkit-progress-value {\n  background-color: white;\n}\n\n.progress.is-white::-moz-progress-bar {\n  background-color: white;\n}\n\n.progress.is-white::-ms-fill {\n  background-color: white;\n}\n\n.progress.is-white:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #ededed 30%);\n}\n\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);\n}\n\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke;\n}\n\n.progress.is-light:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);\n}\n\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636;\n}\n\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636;\n}\n\n.progress.is-dark::-ms-fill {\n  background-color: #363636;\n}\n\n.progress.is-dark:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);\n}\n\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary:indeterminate {\n  background-image: linear-gradient(to right, #00d1b2 30%, #ededed 30%);\n}\n\n.progress.is-link::-webkit-progress-value {\n  background-color: #3273dc;\n}\n\n.progress.is-link::-moz-progress-bar {\n  background-color: #3273dc;\n}\n\n.progress.is-link::-ms-fill {\n  background-color: #3273dc;\n}\n\n.progress.is-link:indeterminate {\n  background-image: linear-gradient(to right, #3273dc 30%, #ededed 30%);\n}\n\n.progress.is-info::-webkit-progress-value {\n  background-color: #3298dc;\n}\n\n.progress.is-info::-moz-progress-bar {\n  background-color: #3298dc;\n}\n\n.progress.is-info::-ms-fill {\n  background-color: #3298dc;\n}\n\n.progress.is-info:indeterminate {\n  background-image: linear-gradient(to right, #3298dc 30%, #ededed 30%);\n}\n\n.progress.is-success::-webkit-progress-value {\n  background-color: #48c774;\n}\n\n.progress.is-success::-moz-progress-bar {\n  background-color: #48c774;\n}\n\n.progress.is-success::-ms-fill {\n  background-color: #48c774;\n}\n\n.progress.is-success:indeterminate {\n  background-image: linear-gradient(to right, #48c774 30%, #ededed 30%);\n}\n\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffdd57;\n}\n\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffdd57;\n}\n\n.progress.is-warning::-ms-fill {\n  background-color: #ffdd57;\n}\n\n.progress.is-warning:indeterminate {\n  background-image: linear-gradient(to right, #ffdd57 30%, #ededed 30%);\n}\n\n.progress.is-danger::-webkit-progress-value {\n  background-color: #f14668;\n}\n\n.progress.is-danger::-moz-progress-bar {\n  background-color: #f14668;\n}\n\n.progress.is-danger::-ms-fill {\n  background-color: #f14668;\n}\n\n.progress.is-danger:indeterminate {\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);\n}\n\n.progress:indeterminate {\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: moveIndeterminate;\n          animation-name: moveIndeterminate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n\n.progress:indeterminate::-ms-fill {\n  animation-name: none;\n}\n\n.progress.is-small {\n  height: 0.75rem;\n}\n\n.progress.is-medium {\n  height: 1.25rem;\n}\n\n.progress.is-large {\n  height: 1.5rem;\n}\n\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n.table {\n  background-color: white;\n  color: #363636;\n}\n\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n\n.table td.is-link,\n.table th.is-link {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.table td.is-info,\n.table th.is-info {\n  background-color: #3298dc;\n  border-color: #3298dc;\n  color: #fff;\n}\n\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c774;\n  border-color: #48c774;\n  color: #fff;\n}\n\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle;\n}\n\n.table th {\n  color: #363636;\n}\n\n.table th:not([align]) {\n  text-align: inherit;\n}\n\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n\n.table thead {\n  background-color: transparent;\n}\n\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n\n.table tfoot {\n  background-color: transparent;\n}\n\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n\n.table tbody {\n  background-color: transparent;\n}\n\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n\n.table.is-fullwidth {\n  width: 100%;\n}\n\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n\n.tags.is-centered {\n  justify-content: center;\n}\n\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n\n.tags.is-right {\n  justify-content: flex-end;\n}\n\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.tag:not(body).is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.tag:not(body).is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.tag:not(body).is-link.is-light {\n  background-color: #eef3fc;\n  color: #2160c4;\n}\n\n.tag:not(body).is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.tag:not(body).is-info.is-light {\n  background-color: #eef6fc;\n  color: #1d72aa;\n}\n\n.tag:not(body).is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.tag:not(body).is-success.is-light {\n  background-color: #effaf3;\n  color: #257942;\n}\n\n.tag:not(body).is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.tag:not(body).is-warning.is-light {\n  background-color: #fffbeb;\n  color: #947600;\n}\n\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n\n.tag:not(body).is-rounded {\n  border-radius: 290486px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.title + .highlight {\n  margin-top: -0.75rem;\n}\n\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n\n.title.is-1 {\n  font-size: 3rem;\n}\n\n.title.is-2 {\n  font-size: 2.5rem;\n}\n\n.title.is-3 {\n  font-size: 2rem;\n}\n\n.title.is-4 {\n  font-size: 1.5rem;\n}\n\n.title.is-5 {\n  font-size: 1.25rem;\n}\n\n.title.is-6 {\n  font-size: 1rem;\n}\n\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n\n.highlight pre {\n  overflow: auto;\n  max-width: 100%;\n}\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n/* Bulma Form */\n.input, .textarea, .select select {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636;\n}\n\n.input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {\n  border-color: #b5b5b5;\n}\n\n.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {\n  border-color: #3273dc;\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.input[disabled], .textarea[disabled], .select select[disabled],\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n\n.input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,\nfieldset[disabled] .input::-moz-placeholder,\nfieldset[disabled] .textarea::-moz-placeholder,\nfieldset[disabled] .select select::-moz-placeholder,\n.select fieldset[disabled] select::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,\nfieldset[disabled] .input::-webkit-input-placeholder,\nfieldset[disabled] .textarea::-webkit-input-placeholder,\nfieldset[disabled] .select select::-webkit-input-placeholder,\n.select fieldset[disabled] select::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,\nfieldset[disabled] .input:-moz-placeholder,\nfieldset[disabled] .textarea:-moz-placeholder,\nfieldset[disabled] .select select:-moz-placeholder,\n.select fieldset[disabled] select:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,\nfieldset[disabled] .input:-ms-input-placeholder,\nfieldset[disabled] .textarea:-ms-input-placeholder,\nfieldset[disabled] .select select:-ms-input-placeholder,\n.select fieldset[disabled] select:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input, .textarea {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%;\n}\n\n.input[readonly], .textarea[readonly] {\n  box-shadow: none;\n}\n\n.is-white.input, .is-white.textarea {\n  border-color: white;\n}\n\n.is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.is-black.input, .is-black.textarea {\n  border-color: #0a0a0a;\n}\n\n.is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.is-light.input, .is-light.textarea {\n  border-color: whitesmoke;\n}\n\n.is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.is-dark.input, .is-dark.textarea {\n  border-color: #363636;\n}\n\n.is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.is-primary.input, .is-primary.textarea {\n  border-color: #00d1b2;\n}\n\n.is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.is-link.input, .is-link.textarea {\n  border-color: #3273dc;\n}\n\n.is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.is-info.input, .is-info.textarea {\n  border-color: #3298dc;\n}\n\n.is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);\n}\n\n.is-success.input, .is-success.textarea {\n  border-color: #48c774;\n}\n\n.is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);\n}\n\n.is-warning.input, .is-warning.textarea {\n  border-color: #ffdd57;\n}\n\n.is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n\n.is-danger.input, .is-danger.textarea {\n  border-color: #f14668;\n}\n\n.is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.is-small.input, .is-small.textarea {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n\n.is-medium.input, .is-medium.textarea {\n  font-size: 1.25rem;\n}\n\n.is-large.input, .is-large.textarea {\n  font-size: 1.5rem;\n}\n\n.is-fullwidth.input, .is-fullwidth.textarea {\n  display: block;\n  width: 100%;\n}\n\n.is-inline.input, .is-inline.textarea {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em);\n}\n\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical;\n}\n\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em;\n}\n\n.textarea[rows] {\n  height: initial;\n}\n\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n\n.checkbox input, .radio input {\n  cursor: pointer;\n}\n\n.checkbox:hover, .radio:hover {\n  color: #363636;\n}\n\n.checkbox[disabled], .radio[disabled],\nfieldset[disabled] .checkbox,\nfieldset[disabled] .radio,\n.checkbox input[disabled],\n.radio input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n\n.select:not(.is-multiple) {\n  height: 2.5em;\n}\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #3273dc;\n  right: 1.125em;\n  z-index: 4;\n}\n\n.select.is-rounded select {\n  border-radius: 290486px;\n  padding-left: 1em;\n}\n\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n\n.select select::-ms-expand {\n  display: none;\n}\n\n.select select[disabled]:hover,\nfieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n\n.select.is-white select {\n  border-color: white;\n}\n\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n\n.select.is-light select {\n  border-color: whitesmoke;\n}\n\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n\n.select.is-dark select {\n  border-color: #363636;\n}\n\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2;\n}\n\n.select.is-primary select {\n  border-color: #00d1b2;\n}\n\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c;\n}\n\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.select.is-link:not(:hover)::after {\n  border-color: #3273dc;\n}\n\n.select.is-link select {\n  border-color: #3273dc;\n}\n\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #2366d1;\n}\n\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.select.is-info:not(:hover)::after {\n  border-color: #3298dc;\n}\n\n.select.is-info select {\n  border-color: #3298dc;\n}\n\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #238cd1;\n}\n\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);\n}\n\n.select.is-success:not(:hover)::after {\n  border-color: #48c774;\n}\n\n.select.is-success select {\n  border-color: #48c774;\n}\n\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb67;\n}\n\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);\n}\n\n.select.is-warning:not(:hover)::after {\n  border-color: #ffdd57;\n}\n\n.select.is-warning select {\n  border-color: #ffdd57;\n}\n\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd83d;\n}\n\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668;\n}\n\n.select.is-danger select {\n  border-color: #f14668;\n}\n\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55;\n}\n\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n\n.select.is-medium {\n  font-size: 1.25rem;\n}\n\n.select.is-large {\n  font-size: 1.5rem;\n}\n\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n\n.select.is-fullwidth {\n  width: 100%;\n}\n\n.select.is-fullwidth select {\n  width: 100%;\n}\n\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none;\n}\n\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff;\n}\n\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff;\n}\n\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link .file-cta {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n  color: #fff;\n}\n\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info .file-cta {\n  background-color: #3298dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #2793da;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(50, 152, 220, 0.25);\n  color: #fff;\n}\n\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #238cd1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success .file-cta {\n  background-color: #48c774;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec46d;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.25);\n  color: #fff;\n}\n\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb67;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-warning .file-cta {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff;\n}\n\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-small {\n  font-size: 0.75rem;\n}\n\n.file.is-medium {\n  font-size: 1.25rem;\n}\n\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n\n.file.is-large {\n  font-size: 1.5rem;\n}\n\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n\n.file.is-boxed .file-label {\n  flex-direction: column;\n}\n\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n\n.file.is-centered {\n  justify-content: center;\n}\n\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none;\n}\n\n.file.is-right {\n  justify-content: flex-end;\n}\n\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1;\n}\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n\n.label.is-small {\n  font-size: 0.75rem;\n}\n\n.label.is-medium {\n  font-size: 1.25rem;\n}\n\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n\n.help.is-white {\n  color: white;\n}\n\n.help.is-black {\n  color: #0a0a0a;\n}\n\n.help.is-light {\n  color: whitesmoke;\n}\n\n.help.is-dark {\n  color: #363636;\n}\n\n.help.is-primary {\n  color: #00d1b2;\n}\n\n.help.is-link {\n  color: #3273dc;\n}\n\n.help.is-info {\n  color: #3298dc;\n}\n\n.help.is-success {\n  color: #48c774;\n}\n\n.help.is-warning {\n  color: #ffdd57;\n}\n\n.help.is-danger {\n  color: #f14668;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.field.has-addons.has-addons-centered {\n  justify-content: center;\n}\n\n.field.has-addons.has-addons-right {\n  justify-content: flex-end;\n}\n\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.field.is-grouped > .control {\n  flex-shrink: 0;\n}\n\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.field.is-grouped.is-grouped-centered {\n  justify-content: center;\n}\n\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end;\n}\n\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap;\n}\n\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit;\n}\n\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a;\n}\n\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4;\n}\n\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em;\n}\n\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em;\n}\n\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.breadcrumb a {\n  align-items: center;\n  color: #3273dc;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em;\n}\n\n.breadcrumb a:hover {\n  color: #363636;\n}\n\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"\\0002f\";\n}\n\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center;\n}\n\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end;\n}\n\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"\\02192\";\n}\n\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"\\02022\";\n}\n\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"\\000b7\";\n}\n\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"\\0227B\";\n}\n\n.card {\n  background-color: white;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-header:first-child, .card-content:first-child, .card-footer:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card-header:last-child, .card-content:last-child, .card-footer:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem;\n}\n\n.card-header-title.is-centered {\n  justify-content: center;\n}\n\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem 1rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  align-items: stretch;\n  display: flex;\n}\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%;\n}\n\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\n\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.level code {\n  border-radius: 4px;\n}\n\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.level.is-mobile {\n  display: flex;\n}\n\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex;\n}\n\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1;\n}\n\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1;\n  }\n}\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1;\n}\n\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n  .level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex;\n  }\n}\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex;\n  }\n}\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit;\n}\n\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem;\n}\n\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n\n.media .media .media {\n  padding-top: 0.5rem;\n}\n\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n\n.menu {\n  font-size: 1rem;\n}\n\n.menu.is-small {\n  font-size: 0.75rem;\n}\n\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n\n.menu-list a.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.message strong {\n  color: currentColor;\n}\n\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.message.is-small {\n  font-size: 0.75rem;\n}\n\n.message.is-medium {\n  font-size: 1.25rem;\n}\n\n.message.is-large {\n  font-size: 1.5rem;\n}\n\n.message.is-white {\n  background-color: white;\n}\n\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.message.is-white .message-body {\n  border-color: white;\n}\n\n.message.is-black {\n  background-color: #fafafa;\n}\n\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n}\n\n.message.is-light {\n  background-color: #fafafa;\n}\n\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.message.is-light .message-body {\n  border-color: whitesmoke;\n}\n\n.message.is-dark {\n  background-color: #fafafa;\n}\n\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff;\n}\n\n.message.is-dark .message-body {\n  border-color: #363636;\n}\n\n.message.is-primary {\n  background-color: #ebfffc;\n}\n\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #00947e;\n}\n\n.message.is-link {\n  background-color: #eef3fc;\n}\n\n.message.is-link .message-header {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.message.is-link .message-body {\n  border-color: #3273dc;\n  color: #2160c4;\n}\n\n.message.is-info {\n  background-color: #eef6fc;\n}\n\n.message.is-info .message-header {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.message.is-info .message-body {\n  border-color: #3298dc;\n  color: #1d72aa;\n}\n\n.message.is-success {\n  background-color: #effaf3;\n}\n\n.message.is-success .message-header {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.message.is-success .message-body {\n  border-color: #48c774;\n  color: #257942;\n}\n\n.message.is-warning {\n  background-color: #fffbeb;\n}\n\n.message.is-warning .message-header {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.message.is-warning .message-body {\n  border-color: #ffdd57;\n  color: #947600;\n}\n\n.message.is-danger {\n  background-color: #feecf0;\n}\n\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35;\n}\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em;\n}\n\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n\n.modal.is-active {\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n\n@media screen and (min-width: 769px) {\n  .modal-content,\n  .modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n  .navbar.is-white .navbar-start .navbar-link,\n  .navbar.is-white .navbar-end > .navbar-item,\n  .navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n  .navbar.is-white .navbar-start .navbar-link:focus,\n  .navbar.is-white .navbar-start .navbar-link:hover,\n  .navbar.is-white .navbar-start .navbar-link.is-active,\n  .navbar.is-white .navbar-end > a.navbar-item:focus,\n  .navbar.is-white .navbar-end > a.navbar-item:hover,\n  .navbar.is-white .navbar-end > a.navbar-item.is-active,\n  .navbar.is-white .navbar-end .navbar-link:focus,\n  .navbar.is-white .navbar-end .navbar-link:hover,\n  .navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n  .navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n  .navbar.is-black .navbar-start .navbar-link,\n  .navbar.is-black .navbar-end > .navbar-item,\n  .navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n  .navbar.is-black .navbar-start .navbar-link:focus,\n  .navbar.is-black .navbar-start .navbar-link:hover,\n  .navbar.is-black .navbar-start .navbar-link.is-active,\n  .navbar.is-black .navbar-end > a.navbar-item:focus,\n  .navbar.is-black .navbar-end > a.navbar-item:hover,\n  .navbar.is-black .navbar-end > a.navbar-item.is-active,\n  .navbar.is-black .navbar-end .navbar-link:focus,\n  .navbar.is-black .navbar-end .navbar-link:hover,\n  .navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n  .navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n  .navbar.is-light .navbar-start .navbar-link,\n  .navbar.is-light .navbar-end > .navbar-item,\n  .navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n  .navbar.is-light .navbar-start .navbar-link:focus,\n  .navbar.is-light .navbar-start .navbar-link:hover,\n  .navbar.is-light .navbar-start .navbar-link.is-active,\n  .navbar.is-light .navbar-end > a.navbar-item:focus,\n  .navbar.is-light .navbar-end > a.navbar-item:hover,\n  .navbar.is-light .navbar-end > a.navbar-item.is-active,\n  .navbar.is-light .navbar-end .navbar-link:focus,\n  .navbar.is-light .navbar-end .navbar-link:hover,\n  .navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n  .navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-dark .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n  .navbar.is-dark .navbar-start .navbar-link,\n  .navbar.is-dark .navbar-end > .navbar-item,\n  .navbar.is-dark .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-start .navbar-link:focus,\n  .navbar.is-dark .navbar-start .navbar-link:hover,\n  .navbar.is-dark .navbar-start .navbar-link.is-active,\n  .navbar.is-dark .navbar-end > a.navbar-item:focus,\n  .navbar.is-dark .navbar-end > a.navbar-item:hover,\n  .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-end .navbar-link:focus,\n  .navbar.is-dark .navbar-end .navbar-link:hover,\n  .navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n  .navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff;\n  }\n}\n\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n  .navbar.is-primary .navbar-start .navbar-link,\n  .navbar.is-primary .navbar-end > .navbar-item,\n  .navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-start .navbar-link:focus,\n  .navbar.is-primary .navbar-start .navbar-link:hover,\n  .navbar.is-primary .navbar-start .navbar-link.is-active,\n  .navbar.is-primary .navbar-end > a.navbar-item:focus,\n  .navbar.is-primary .navbar-end > a.navbar-item:hover,\n  .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-end .navbar-link:focus,\n  .navbar.is-primary .navbar-end .navbar-link:hover,\n  .navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n  .navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff;\n  }\n}\n\n.navbar.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n  .navbar.is-link .navbar-start .navbar-link,\n  .navbar.is-link .navbar-end > .navbar-item,\n  .navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n  .navbar.is-link .navbar-start .navbar-link:focus,\n  .navbar.is-link .navbar-start .navbar-link:hover,\n  .navbar.is-link .navbar-start .navbar-link.is-active,\n  .navbar.is-link .navbar-end > a.navbar-item:focus,\n  .navbar.is-link .navbar-end > a.navbar-item:hover,\n  .navbar.is-link .navbar-end > a.navbar-item.is-active,\n  .navbar.is-link .navbar-end .navbar-link:focus,\n  .navbar.is-link .navbar-end .navbar-link:hover,\n  .navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n  .navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3273dc;\n    color: #fff;\n  }\n}\n\n.navbar.is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #238cd1;\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n  .navbar.is-info .navbar-start .navbar-link,\n  .navbar.is-info .navbar-end > .navbar-item,\n  .navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n  .navbar.is-info .navbar-start .navbar-link:focus,\n  .navbar.is-info .navbar-start .navbar-link:hover,\n  .navbar.is-info .navbar-start .navbar-link.is-active,\n  .navbar.is-info .navbar-end > a.navbar-item:focus,\n  .navbar.is-info .navbar-end > a.navbar-item:hover,\n  .navbar.is-info .navbar-end > a.navbar-item.is-active,\n  .navbar.is-info .navbar-end .navbar-link:focus,\n  .navbar.is-info .navbar-end .navbar-link:hover,\n  .navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #238cd1;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n  .navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #238cd1;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3298dc;\n    color: #fff;\n  }\n}\n\n.navbar.is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb67;\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n  .navbar.is-success .navbar-start .navbar-link,\n  .navbar.is-success .navbar-end > .navbar-item,\n  .navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n  .navbar.is-success .navbar-start .navbar-link:focus,\n  .navbar.is-success .navbar-start .navbar-link:hover,\n  .navbar.is-success .navbar-start .navbar-link.is-active,\n  .navbar.is-success .navbar-end > a.navbar-item:focus,\n  .navbar.is-success .navbar-end > a.navbar-item:hover,\n  .navbar.is-success .navbar-end > a.navbar-item.is-active,\n  .navbar.is-success .navbar-end .navbar-link:focus,\n  .navbar.is-success .navbar-end .navbar-link:hover,\n  .navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb67;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n  .navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb67;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c774;\n    color: #fff;\n  }\n}\n\n.navbar.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n  .navbar.is-warning .navbar-start .navbar-link,\n  .navbar.is-warning .navbar-end > .navbar-item,\n  .navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-start .navbar-link:focus,\n  .navbar.is-warning .navbar-start .navbar-link:hover,\n  .navbar.is-warning .navbar-start .navbar-link.is-active,\n  .navbar.is-warning .navbar-end > a.navbar-item:focus,\n  .navbar.is-warning .navbar-end > a.navbar-item:hover,\n  .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-end .navbar-link:focus,\n  .navbar.is-warning .navbar-end .navbar-link:hover,\n  .navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n  .navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n  .navbar.is-danger .navbar-start .navbar-link,\n  .navbar.is-danger .navbar-end > .navbar-item,\n  .navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-start .navbar-link:focus,\n  .navbar.is-danger .navbar-start .navbar-link:hover,\n  .navbar.is-danger .navbar-start .navbar-link.is-active,\n  .navbar.is-danger .navbar-end > a.navbar-item:focus,\n  .navbar.is-danger .navbar-end > a.navbar-item:hover,\n  .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-end .navbar-link:focus,\n  .navbar.is-danger .navbar-end .navbar-link:hover,\n  .navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n  .navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff;\n  }\n}\n\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke;\n}\n\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke;\n}\n\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\n\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px;\n}\n\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg);\n}\n\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\n\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #3273dc;\n}\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.navbar-item img {\n  max-height: 1.75rem;\n}\n\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n}\n\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #3273dc;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #3273dc;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n  }\n  .navbar-link::after {\n    display: none;\n  }\n  .navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n  html.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex;\n  }\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n  .navbar.is-spaced .navbar-end {\n    align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n  .navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n  .navbar.is-transparent .navbar-link:focus,\n  .navbar.is-transparent .navbar-link:hover,\n  .navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar-burger {\n    display: none;\n  }\n  .navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex;\n  }\n  .navbar-item.has-dropdown {\n    align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n  .navbar-divider {\n    display: block;\n  }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n  html.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n  a.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n  .navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 290486px;\n}\n\n.pagination.is-rounded .pagination-link {\n  border-radius: 290486px;\n}\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em;\n}\n\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #3273dc;\n}\n\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  flex-wrap: wrap;\n}\n\n.pagination-list li {\n  list-style: none;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n  }\n  .pagination-previous {\n    order: 2;\n  }\n  .pagination-next {\n    order: 3;\n  }\n  .pagination {\n    justify-content: space-between;\n  }\n  .pagination.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3;\n  }\n}\n\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem;\n}\n\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white;\n}\n\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white;\n}\n\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a;\n}\n\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a;\n}\n\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke;\n}\n\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke;\n}\n\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff;\n}\n\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636;\n}\n\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636;\n}\n\n.panel.is-primary .panel-heading {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #00d1b2;\n}\n\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #00d1b2;\n}\n\n.panel.is-link .panel-heading {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #3273dc;\n}\n\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #3273dc;\n}\n\n.panel.is-info .panel-heading {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #3298dc;\n}\n\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #3298dc;\n}\n\n.panel.is-success .panel-heading {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c774;\n}\n\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c774;\n}\n\n.panel.is-warning .panel-heading {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffdd57;\n}\n\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffdd57;\n}\n\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668;\n}\n\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668;\n}\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed;\n}\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n}\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n\n.panel-list a:hover {\n  color: #3273dc;\n}\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n\n.panel-block input[type=\"checkbox\"] {\n  margin-right: 0.75em;\n}\n\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.panel-block.is-wrapped {\n  flex-wrap: wrap;\n}\n\n.panel-block.is-active {\n  border-left-color: #3273dc;\n  color: #363636;\n}\n\n.panel-block.is-active .panel-icon {\n  color: #3273dc;\n}\n\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\n\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n\n.tabs li {\n  display: block;\n}\n\n.tabs li.is-active a {\n  border-bottom-color: #3273dc;\n  color: #3273dc;\n}\n\n.tabs ul {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start;\n}\n\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em;\n}\n\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n\n.tabs.is-centered ul {\n  justify-content: center;\n}\n\n.tabs.is-right ul {\n  justify-content: flex-end;\n}\n\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.tabs.is-toggle li.is-active a {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n  z-index: 1;\n}\n\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 290486px;\n  border-top-left-radius: 290486px;\n  padding-left: 1.25em;\n}\n\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 290486px;\n  border-top-right-radius: 290486px;\n  padding-right: 1.25em;\n}\n\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n  width: unset;\n}\n\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%;\n}\n\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%;\n}\n\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%;\n}\n\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%;\n}\n\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%;\n}\n\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%;\n}\n\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%;\n}\n\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%;\n}\n\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66667%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66667%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66667%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66667%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n\n.columns.is-centered {\n  justify-content: center;\n}\n\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n\n.columns.is-mobile {\n  display: flex;\n}\n\n.columns.is-multiline {\n  flex-wrap: wrap;\n}\n\n.columns.is-vcentered {\n  align-items: center;\n}\n\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n}\n\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.tile.is-child {\n  margin: 0 !important;\n}\n\n.tile.is-parent {\n  padding: 0.75rem;\n}\n\n.tile.is-vertical {\n  flex-direction: column;\n}\n\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex;\n  }\n  .tile.is-1 {\n    flex: none;\n    width: 8.33333%;\n  }\n  .tile.is-2 {\n    flex: none;\n    width: 16.66667%;\n  }\n  .tile.is-3 {\n    flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    flex: none;\n    width: 33.33333%;\n  }\n  .tile.is-5 {\n    flex: none;\n    width: 41.66667%;\n  }\n  .tile.is-6 {\n    flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    flex: none;\n    width: 58.33333%;\n  }\n  .tile.is-8 {\n    flex: none;\n    width: 66.66667%;\n  }\n  .tile.is-9 {\n    flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    flex: none;\n    width: 83.33333%;\n  }\n  .tile.is-11 {\n    flex: none;\n    width: 91.66667%;\n  }\n  .tile.is-12 {\n    flex: none;\n    width: 100%;\n  }\n}\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #00d1b2 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important;\n}\n\n.has-background-primary {\n  background-color: #00d1b2 !important;\n}\n\n.has-text-primary-light {\n  color: #ebfffc !important;\n}\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #b8fff4 !important;\n}\n\n.has-background-primary-light {\n  background-color: #ebfffc !important;\n}\n\n.has-text-primary-dark {\n  color: #00947e !important;\n}\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #00c7a9 !important;\n}\n\n.has-background-primary-dark {\n  background-color: #00947e !important;\n}\n\n.has-text-link {\n  color: #3273dc !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important;\n}\n\n.has-background-link {\n  background-color: #3273dc !important;\n}\n\n.has-text-link-light {\n  color: #eef3fc !important;\n}\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #c2d5f5 !important;\n}\n\n.has-background-link-light {\n  background-color: #eef3fc !important;\n}\n\n.has-text-link-dark {\n  color: #2160c4 !important;\n}\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #3b79de !important;\n}\n\n.has-background-link-dark {\n  background-color: #2160c4 !important;\n}\n\n.has-text-info {\n  color: #3298dc !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #207dbc !important;\n}\n\n.has-background-info {\n  background-color: #3298dc !important;\n}\n\n.has-text-info-light {\n  color: #eef6fc !important;\n}\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #c2e0f5 !important;\n}\n\n.has-background-info-light {\n  background-color: #eef6fc !important;\n}\n\n.has-text-info-dark {\n  color: #1d72aa !important;\n}\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #248fd6 !important;\n}\n\n.has-background-info-dark {\n  background-color: #1d72aa !important;\n}\n\n.has-text-success {\n  color: #48c774 !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a85c !important;\n}\n\n.has-background-success {\n  background-color: #48c774 !important;\n}\n\n.has-text-success-light {\n  color: #effaf3 !important;\n}\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eed6 !important;\n}\n\n.has-background-success-light {\n  background-color: #effaf3 !important;\n}\n\n.has-text-success-dark {\n  color: #257942 !important;\n}\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a058 !important;\n}\n\n.has-background-success-dark {\n  background-color: #257942 !important;\n}\n\n.has-text-warning {\n  color: #ffdd57 !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important;\n}\n\n.has-background-warning {\n  background-color: #ffdd57 !important;\n}\n\n.has-text-warning-light {\n  color: #fffbeb !important;\n}\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #fff1b8 !important;\n}\n\n.has-background-warning-light {\n  background-color: #fffbeb !important;\n}\n\n.has-text-warning-dark {\n  color: #947600 !important;\n}\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79f00 !important;\n}\n\n.has-background-warning-dark {\n  background-color: #947600 !important;\n}\n\n.has-text-danger {\n  color: #f14668 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important;\n}\n\n.has-background-danger {\n  background-color: #f14668 !important;\n}\n\n.has-text-danger-light {\n  color: #feecf0 !important;\n}\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important;\n}\n\n.has-background-danger-light {\n  background-color: #feecf0 !important;\n}\n\n.has-text-danger-dark {\n  color: #cc0f35 !important;\n}\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important;\n}\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.is-flex-direction-row {\n  flex-direction: row !important;\n}\n\n.is-flex-direction-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.is-flex-direction-column {\n  flex-direction: column !important;\n}\n\n.is-flex-direction-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.is-flex-wrap-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.is-flex-wrap-wrap {\n  flex-wrap: wrap !important;\n}\n\n.is-flex-wrap-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.is-justify-content-flex-start {\n  justify-content: flex-start !important;\n}\n\n.is-justify-content-flex-end {\n  justify-content: flex-end !important;\n}\n\n.is-justify-content-center {\n  justify-content: center !important;\n}\n\n.is-justify-content-space-between {\n  justify-content: space-between !important;\n}\n\n.is-justify-content-space-around {\n  justify-content: space-around !important;\n}\n\n.is-justify-content-space-evenly {\n  justify-content: space-evenly !important;\n}\n\n.is-justify-content-start {\n  justify-content: start !important;\n}\n\n.is-justify-content-end {\n  justify-content: end !important;\n}\n\n.is-justify-content-left {\n  justify-content: left !important;\n}\n\n.is-justify-content-right {\n  justify-content: right !important;\n}\n\n.is-align-content-flex-start {\n  align-content: flex-start !important;\n}\n\n.is-align-content-flex-end {\n  align-content: flex-end !important;\n}\n\n.is-align-content-center {\n  align-content: center !important;\n}\n\n.is-align-content-space-between {\n  align-content: space-between !important;\n}\n\n.is-align-content-space-around {\n  align-content: space-around !important;\n}\n\n.is-align-content-space-evenly {\n  align-content: space-evenly !important;\n}\n\n.is-align-content-stretch {\n  align-content: stretch !important;\n}\n\n.is-align-content-start {\n  align-content: start !important;\n}\n\n.is-align-content-end {\n  align-content: end !important;\n}\n\n.is-align-content-baseline {\n  align-content: baseline !important;\n}\n\n.is-align-items-stretch {\n  align-items: stretch !important;\n}\n\n.is-align-items-flex-start {\n  align-items: flex-start !important;\n}\n\n.is-align-items-flex-end {\n  align-items: flex-end !important;\n}\n\n.is-align-items-center {\n  align-items: center !important;\n}\n\n.is-align-items-baseline {\n  align-items: baseline !important;\n}\n\n.is-align-items-start {\n  align-items: start !important;\n}\n\n.is-align-items-end {\n  align-items: end !important;\n}\n\n.is-align-items-self-start {\n  align-items: self-start !important;\n}\n\n.is-align-items-self-end {\n  align-items: self-end !important;\n}\n\n.is-align-self-auto {\n  align-self: auto !important;\n}\n\n.is-align-self-flex-start {\n  align-self: flex-start !important;\n}\n\n.is-align-self-flex-end {\n  align-self: flex-end !important;\n}\n\n.is-align-self-center {\n  align-self: center !important;\n}\n\n.is-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.is-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.is-flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.is-flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.is-flex-grow-2 {\n  flex-grow: 2 !important;\n}\n\n.is-flex-grow-3 {\n  flex-grow: 3 !important;\n}\n\n.is-flex-grow-4 {\n  flex-grow: 4 !important;\n}\n\n.is-flex-grow-5 {\n  flex-grow: 5 !important;\n}\n\n.is-flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.is-flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.is-flex-shrink-2 {\n  flex-shrink: 2 !important;\n}\n\n.is-flex-shrink-3 {\n  flex-shrink: 3 !important;\n}\n\n.is-flex-shrink-4 {\n  flex-shrink: 4 !important;\n}\n\n.is-flex-shrink-5 {\n  flex-shrink: 5 !important;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  box-shadow: none !important;\n}\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.75rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.75rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-5 {\n  margin: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.75rem !important;\n}\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n\n.is-flex {\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important;\n  }\n}\n\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n\n.is-inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important;\n  }\n}\n\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n\n/* Bulma Layout */\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hero .navbar {\n  background: none;\n}\n\n.hero .tabs ul {\n  border-bottom: none;\n}\n\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-white .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n  }\n}\n\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n\n.hero.is-black .title {\n  color: white;\n}\n\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-black .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-light .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n\n.hero.is-dark .title {\n  color: #fff;\n}\n\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636;\n}\n\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n\n.hero.is-primary .title {\n  color: #fff;\n}\n\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2;\n  }\n}\n\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2;\n}\n\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n  }\n}\n\n.hero.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n\n.hero.is-link .title {\n  color: #fff;\n}\n\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #3273dc;\n  }\n}\n\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-link .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3273dc;\n}\n\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n  }\n}\n\n.hero.is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n\n.hero.is-info .title {\n  color: #fff;\n}\n\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #3298dc;\n  }\n}\n\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #238cd1;\n  color: #fff;\n}\n\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-info .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3298dc;\n}\n\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #159dc6 0%, #3298dc 71%, #4389e5 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #159dc6 0%, #3298dc 71%, #4389e5 100%);\n  }\n}\n\n.hero.is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n\n.hero.is-success .title {\n  color: #fff;\n}\n\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c774;\n  }\n}\n\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb67;\n  color: #fff;\n}\n\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-success .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c774;\n}\n\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);\n  }\n}\n\n.hero.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffdd57;\n  }\n}\n\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n  }\n}\n\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n\n.hero.is-danger .title {\n  color: #fff;\n}\n\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668;\n  }\n}\n\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668;\n}\n\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n  }\n}\n\n.hero.is-small .hero-body {\n  padding: 1.5rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 1.5rem;\n  }\n}\n\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex;\n}\n\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n\n@media screen and (min-width: 1024px) {\n  .section.is-medium {\n    padding: 9rem 1.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 1.5rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n/*# sourceMappingURL=bulma.css.map */\n"], ["\n/*! bulma.io v0.9.2 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.button, .input, .textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n\n.button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,\n.file-name:focus, .pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n.is-focused.file-name, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,\n.file-name:active, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,\n.is-active.file-name, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis {\n  outline: none;\n}\n\n.button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],\n.file-name[disabled], .pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled],\n.pagination-ellipsis[disabled],\nfieldset[disabled] .button,\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select,\nfieldset[disabled] .file-cta,\nfieldset[disabled] .file-name,\nfieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis {\n  cursor: not-allowed;\n}\n\n.button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs, .is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .pagination:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.delete, .modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n\n.delete::before, .modal-close::before {\n  height: 2px;\n  width: 50%;\n}\n\n.delete::after, .modal-close::after {\n  height: 50%;\n  width: 2px;\n}\n\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n\n.delete:active, .modal-close:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n\n.is-small.delete, .is-small.modal-close {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n\n.is-medium.delete, .is-medium.modal-close {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n\n.is-large.delete, .is-large.modal-close {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio, .modal, .modal-background, .is-overlay, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none;\n}\n\na strong {\n  color: currentColor;\n}\n\na:hover {\n  color: #363636;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\n\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\n\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit;\n}\n\ntable th {\n  color: #363636;\n}\n\n@-webkit-keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n}\n\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n}\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n\n.button strong {\n  color: inherit;\n}\n\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em;\n}\n\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px);\n}\n\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px);\n}\n\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n\n.button:focus, .button.is-focused {\n  border-color: #3273dc;\n  color: #363636;\n}\n\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n\n.button.is-text[disabled],\nfieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #3273dc;\n  text-decoration: none;\n}\n\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #3273dc;\n  text-decoration: underline;\n}\n\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.button.is-white[disabled],\nfieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n\n.button.is-white.is-inverted[disabled],\nfieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-white.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-white.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-black[disabled],\nfieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-black.is-inverted[disabled],\nfieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-black.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n\n.button.is-black.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light[disabled],\nfieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-inverted[disabled],\nfieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke;\n}\n\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-light.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n\n.button.is-light.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-dark[disabled],\nfieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-dark.is-inverted[disabled],\nfieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636;\n}\n\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-dark.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636;\n}\n\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n\n.button.is-dark.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-primary[disabled],\nfieldset[disabled] .button.is-primary {\n  background-color: #00d1b2;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-primary.is-inverted[disabled],\nfieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-primary.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #00d1b2;\n  box-shadow: none;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #00d1b2;\n}\n\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #00d1b2 #00d1b2 !important;\n}\n\n.button.is-primary.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #defffa;\n  border-color: transparent;\n  color: #00947e;\n}\n\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #d1fff8;\n  border-color: transparent;\n  color: #00947e;\n}\n\n.button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-link[disabled],\nfieldset[disabled] .button.is-link {\n  background-color: #3273dc;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #3273dc;\n}\n\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-link.is-inverted[disabled],\nfieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3273dc;\n}\n\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  color: #3273dc;\n}\n\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-link.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #3273dc;\n  box-shadow: none;\n  color: #3273dc;\n}\n\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3273dc;\n}\n\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3273dc #3273dc !important;\n}\n\n.button.is-link.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-link.is-light {\n  background-color: #eef3fc;\n  color: #2160c4;\n}\n\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #e3ecfa;\n  border-color: transparent;\n  color: #2160c4;\n}\n\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #d8e4f8;\n  border-color: transparent;\n  color: #2160c4;\n}\n\n.button.is-info {\n  background-color: #3298dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #2793da;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);\n}\n\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #238cd1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-info[disabled],\nfieldset[disabled] .button.is-info {\n  background-color: #3298dc;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #3298dc;\n}\n\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-info.is-inverted[disabled],\nfieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #3298dc;\n}\n\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3298dc;\n  color: #3298dc;\n}\n\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #3298dc;\n  border-color: #3298dc;\n  color: #fff;\n}\n\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #3298dc #3298dc !important;\n}\n\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-info.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #3298dc;\n  box-shadow: none;\n  color: #3298dc;\n}\n\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #3298dc;\n}\n\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #3298dc #3298dc !important;\n}\n\n.button.is-info.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-info.is-light {\n  background-color: #eef6fc;\n  color: #1d72aa;\n}\n\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e3f1fa;\n  border-color: transparent;\n  color: #1d72aa;\n}\n\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #d8ebf8;\n  border-color: transparent;\n  color: #1d72aa;\n}\n\n.button.is-success {\n  background-color: #48c774;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec46d;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);\n}\n\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb67;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-success[disabled],\nfieldset[disabled] .button.is-success {\n  background-color: #48c774;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c774;\n}\n\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-success.is-inverted[disabled],\nfieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #48c774;\n}\n\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c774;\n  color: #48c774;\n}\n\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c774;\n  border-color: #48c774;\n  color: #fff;\n}\n\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c774 #48c774 !important;\n}\n\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-success.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c774;\n  box-shadow: none;\n  color: #48c774;\n}\n\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c774;\n}\n\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c774 #48c774 !important;\n}\n\n.button.is-success.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-success.is-light {\n  background-color: #effaf3;\n  color: #257942;\n}\n\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ec;\n  border-color: transparent;\n  color: #257942;\n}\n\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e4;\n  border-color: transparent;\n  color: #257942;\n}\n\n.button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning[disabled],\nfieldset[disabled] .button.is-warning {\n  background-color: #ffdd57;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-inverted[disabled],\nfieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffdd57;\n}\n\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  color: #ffdd57;\n}\n\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n\n.button.is-warning.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffdd57;\n  box-shadow: none;\n  color: #ffdd57;\n}\n\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n\n.button.is-warning.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.button.is-warning.is-light {\n  background-color: #fffbeb;\n  color: #947600;\n}\n\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff8de;\n  border-color: transparent;\n  color: #947600;\n}\n\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff6d1;\n  border-color: transparent;\n  color: #947600;\n}\n\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n\n.button.is-danger[disabled],\nfieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n\n.button.is-danger.is-inverted[disabled],\nfieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #f14668;\n}\n\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668;\n}\n\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n\n.button.is-danger.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  box-shadow: none;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668;\n}\n\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n\n.button.is-danger.is-inverted.is-outlined[disabled],\nfieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35;\n}\n\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35;\n}\n\n.button.is-small {\n  font-size: 0.75rem;\n}\n\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px;\n}\n\n.button.is-normal {\n  font-size: 1rem;\n}\n\n.button.is-medium {\n  font-size: 1.25rem;\n}\n\n.button.is-large {\n  font-size: 1.5rem;\n}\n\n.button[disabled],\nfieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5;\n}\n\n.button.is-fullwidth {\n  display: flex;\n  width: 100%;\n}\n\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em / 2));\n  top: calc(50% - (1em / 2));\n  position: absolute !important;\n}\n\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none;\n}\n\n.button.is-rounded {\n  border-radius: 290486px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em);\n}\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem;\n}\n\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px;\n}\n\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.buttons.is-centered {\n  justify-content: center;\n}\n\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.buttons.is-right {\n  justify-content: flex-end;\n}\n\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%;\n}\n\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}\n\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n\n.content ul ul ul {\n  list-style-type: square;\n}\n\n.content dd {\n  margin-left: 2em;\n}\n\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n\n.content figure img {\n  display: inline-block;\n}\n\n.content figure figcaption {\n  font-style: italic;\n}\n\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n\n.content table {\n  width: 100%;\n}\n\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n\n.content table th {\n  color: #363636;\n}\n\n.content table th:not([align]) {\n  text-align: inherit;\n}\n\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n\n.content .tabs li + li {\n  margin-top: 0;\n}\n\n.content.is-small {\n  font-size: 0.75rem;\n}\n\n.content.is-medium {\n  font-size: 1.25rem;\n}\n\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.icon-text {\n  align-items: flex-start;\n  color: inherit;\n  display: inline-flex;\n  flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top;\n}\n\n.icon-text .icon {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em;\n}\n\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em;\n}\n\ndiv.icon-text {\n  display: flex;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n\n.image img.is-rounded {\n  border-radius: 290486px;\n}\n\n.image.is-fullwidth {\n  width: 100%;\n}\n\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n\n.image.is-5by4 {\n  padding-top: 80%;\n}\n\n.image.is-4by3 {\n  padding-top: 75%;\n}\n\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n\n.image.is-5by3 {\n  padding-top: 60%;\n}\n\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n\n.image.is-2by1 {\n  padding-top: 50%;\n}\n\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n\n.image.is-4by5 {\n  padding-top: 125%;\n}\n\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n\n.image.is-2by3 {\n  padding-top: 150%;\n}\n\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n\n.image.is-1by2 {\n  padding-top: 200%;\n}\n\n.image.is-1by3 {\n  padding-top: 300%;\n}\n\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.notification strong {\n  color: currentColor;\n}\n\n.notification code,\n.notification pre {\n  background: white;\n}\n\n.notification pre code {\n  background: transparent;\n}\n\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.notification.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.notification.is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.notification.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.notification.is-link.is-light {\n  background-color: #eef3fc;\n  color: #2160c4;\n}\n\n.notification.is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.notification.is-info.is-light {\n  background-color: #eef6fc;\n  color: #1d72aa;\n}\n\n.notification.is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.notification.is-success.is-light {\n  background-color: #effaf3;\n  color: #257942;\n}\n\n.notification.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.notification.is-warning.is-light {\n  background-color: #fffbeb;\n  color: #947600;\n}\n\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n\n.progress::-webkit-progress-bar {\n  background-color: #ededed;\n}\n\n.progress::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n\n.progress::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n\n.progress::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n\n.progress.is-white::-webkit-progress-value {\n  background-color: white;\n}\n\n.progress.is-white::-moz-progress-bar {\n  background-color: white;\n}\n\n.progress.is-white::-ms-fill {\n  background-color: white;\n}\n\n.progress.is-white:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #ededed 30%);\n}\n\n.progress.is-black::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black::-ms-fill {\n  background-color: #0a0a0a;\n}\n\n.progress.is-black:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);\n}\n\n.progress.is-light::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n\n.progress.is-light::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n\n.progress.is-light::-ms-fill {\n  background-color: whitesmoke;\n}\n\n.progress.is-light:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);\n}\n\n.progress.is-dark::-webkit-progress-value {\n  background-color: #363636;\n}\n\n.progress.is-dark::-moz-progress-bar {\n  background-color: #363636;\n}\n\n.progress.is-dark::-ms-fill {\n  background-color: #363636;\n}\n\n.progress.is-dark:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);\n}\n\n.progress.is-primary::-webkit-progress-value {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary::-moz-progress-bar {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary::-ms-fill {\n  background-color: #00d1b2;\n}\n\n.progress.is-primary:indeterminate {\n  background-image: linear-gradient(to right, #00d1b2 30%, #ededed 30%);\n}\n\n.progress.is-link::-webkit-progress-value {\n  background-color: #3273dc;\n}\n\n.progress.is-link::-moz-progress-bar {\n  background-color: #3273dc;\n}\n\n.progress.is-link::-ms-fill {\n  background-color: #3273dc;\n}\n\n.progress.is-link:indeterminate {\n  background-image: linear-gradient(to right, #3273dc 30%, #ededed 30%);\n}\n\n.progress.is-info::-webkit-progress-value {\n  background-color: #3298dc;\n}\n\n.progress.is-info::-moz-progress-bar {\n  background-color: #3298dc;\n}\n\n.progress.is-info::-ms-fill {\n  background-color: #3298dc;\n}\n\n.progress.is-info:indeterminate {\n  background-image: linear-gradient(to right, #3298dc 30%, #ededed 30%);\n}\n\n.progress.is-success::-webkit-progress-value {\n  background-color: #48c774;\n}\n\n.progress.is-success::-moz-progress-bar {\n  background-color: #48c774;\n}\n\n.progress.is-success::-ms-fill {\n  background-color: #48c774;\n}\n\n.progress.is-success:indeterminate {\n  background-image: linear-gradient(to right, #48c774 30%, #ededed 30%);\n}\n\n.progress.is-warning::-webkit-progress-value {\n  background-color: #ffdd57;\n}\n\n.progress.is-warning::-moz-progress-bar {\n  background-color: #ffdd57;\n}\n\n.progress.is-warning::-ms-fill {\n  background-color: #ffdd57;\n}\n\n.progress.is-warning:indeterminate {\n  background-image: linear-gradient(to right, #ffdd57 30%, #ededed 30%);\n}\n\n.progress.is-danger::-webkit-progress-value {\n  background-color: #f14668;\n}\n\n.progress.is-danger::-moz-progress-bar {\n  background-color: #f14668;\n}\n\n.progress.is-danger::-ms-fill {\n  background-color: #f14668;\n}\n\n.progress.is-danger:indeterminate {\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);\n}\n\n.progress:indeterminate {\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: moveIndeterminate;\n          animation-name: moveIndeterminate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n\n.progress:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n\n.progress:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n\n.progress:indeterminate::-ms-fill {\n  animation-name: none;\n}\n\n.progress.is-small {\n  height: 0.75rem;\n}\n\n.progress.is-medium {\n  height: 1.25rem;\n}\n\n.progress.is-large {\n  height: 1.5rem;\n}\n\n@-webkit-keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n\n.table {\n  background-color: white;\n  color: #363636;\n}\n\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #00d1b2;\n  border-color: #00d1b2;\n  color: #fff;\n}\n\n.table td.is-link,\n.table th.is-link {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.table td.is-info,\n.table th.is-info {\n  background-color: #3298dc;\n  border-color: #3298dc;\n  color: #fff;\n}\n\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c774;\n  border-color: #48c774;\n  color: #fff;\n}\n\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffdd57;\n  border-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle;\n}\n\n.table th {\n  color: #363636;\n}\n\n.table th:not([align]) {\n  text-align: inherit;\n}\n\n.table tr.is-selected {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n\n.table thead {\n  background-color: transparent;\n}\n\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n\n.table tfoot {\n  background-color: transparent;\n}\n\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n\n.table tbody {\n  background-color: transparent;\n}\n\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n\n.table.is-fullwidth {\n  width: 100%;\n}\n\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n\n.tags.is-centered {\n  justify-content: center;\n}\n\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n\n.tags.is-right {\n  justify-content: flex-end;\n}\n\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.tag:not(body).is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.tag:not(body).is-primary.is-light {\n  background-color: #ebfffc;\n  color: #00947e;\n}\n\n.tag:not(body).is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.tag:not(body).is-link.is-light {\n  background-color: #eef3fc;\n  color: #2160c4;\n}\n\n.tag:not(body).is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.tag:not(body).is-info.is-light {\n  background-color: #eef6fc;\n  color: #1d72aa;\n}\n\n.tag:not(body).is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.tag:not(body).is-success.is-light {\n  background-color: #effaf3;\n  color: #257942;\n}\n\n.tag:not(body).is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.tag:not(body).is-warning.is-light {\n  background-color: #fffbeb;\n  color: #947600;\n}\n\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n\n.tag:not(body).is-rounded {\n  border-radius: 290486px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.title + .highlight {\n  margin-top: -0.75rem;\n}\n\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n\n.title.is-1 {\n  font-size: 3rem;\n}\n\n.title.is-2 {\n  font-size: 2.5rem;\n}\n\n.title.is-3 {\n  font-size: 2rem;\n}\n\n.title.is-4 {\n  font-size: 1.5rem;\n}\n\n.title.is-5 {\n  font-size: 1.25rem;\n}\n\n.title.is-6 {\n  font-size: 1rem;\n}\n\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n\n.highlight pre {\n  overflow: auto;\n  max-width: 100%;\n}\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n/* Bulma Form */\n.input, .textarea, .select select {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636;\n}\n\n.input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n\n.input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {\n  border-color: #b5b5b5;\n}\n\n.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {\n  border-color: #3273dc;\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.input[disabled], .textarea[disabled], .select select[disabled],\nfieldset[disabled] .input,\nfieldset[disabled] .textarea,\nfieldset[disabled] .select select,\n.select fieldset[disabled] select {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n\n.input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,\nfieldset[disabled] .input::-moz-placeholder,\nfieldset[disabled] .textarea::-moz-placeholder,\nfieldset[disabled] .select select::-moz-placeholder,\n.select fieldset[disabled] select::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,\nfieldset[disabled] .input::-webkit-input-placeholder,\nfieldset[disabled] .textarea::-webkit-input-placeholder,\nfieldset[disabled] .select select::-webkit-input-placeholder,\n.select fieldset[disabled] select::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,\nfieldset[disabled] .input:-moz-placeholder,\nfieldset[disabled] .textarea:-moz-placeholder,\nfieldset[disabled] .select select:-moz-placeholder,\n.select fieldset[disabled] select:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,\nfieldset[disabled] .input:-ms-input-placeholder,\nfieldset[disabled] .textarea:-ms-input-placeholder,\nfieldset[disabled] .select select:-ms-input-placeholder,\n.select fieldset[disabled] select:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.input, .textarea {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%;\n}\n\n.input[readonly], .textarea[readonly] {\n  box-shadow: none;\n}\n\n.is-white.input, .is-white.textarea {\n  border-color: white;\n}\n\n.is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.is-black.input, .is-black.textarea {\n  border-color: #0a0a0a;\n}\n\n.is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.is-light.input, .is-light.textarea {\n  border-color: whitesmoke;\n}\n\n.is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.is-dark.input, .is-dark.textarea {\n  border-color: #363636;\n}\n\n.is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.is-primary.input, .is-primary.textarea {\n  border-color: #00d1b2;\n}\n\n.is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.is-link.input, .is-link.textarea {\n  border-color: #3273dc;\n}\n\n.is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.is-info.input, .is-info.textarea {\n  border-color: #3298dc;\n}\n\n.is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);\n}\n\n.is-success.input, .is-success.textarea {\n  border-color: #48c774;\n}\n\n.is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);\n}\n\n.is-warning.input, .is-warning.textarea {\n  border-color: #ffdd57;\n}\n\n.is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n\n.is-danger.input, .is-danger.textarea {\n  border-color: #f14668;\n}\n\n.is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.is-small.input, .is-small.textarea {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n\n.is-medium.input, .is-medium.textarea {\n  font-size: 1.25rem;\n}\n\n.is-large.input, .is-large.textarea {\n  font-size: 1.5rem;\n}\n\n.is-fullwidth.input, .is-fullwidth.textarea {\n  display: block;\n  width: 100%;\n}\n\n.is-inline.input, .is-inline.textarea {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em);\n}\n\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical;\n}\n\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em;\n}\n\n.textarea[rows] {\n  height: initial;\n}\n\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n\n.checkbox input, .radio input {\n  cursor: pointer;\n}\n\n.checkbox:hover, .radio:hover {\n  color: #363636;\n}\n\n.checkbox[disabled], .radio[disabled],\nfieldset[disabled] .checkbox,\nfieldset[disabled] .radio,\n.checkbox input[disabled],\n.radio input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n\n.select:not(.is-multiple) {\n  height: 2.5em;\n}\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #3273dc;\n  right: 1.125em;\n  z-index: 4;\n}\n\n.select.is-rounded select {\n  border-radius: 290486px;\n  padding-left: 1em;\n}\n\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n\n.select select::-ms-expand {\n  display: none;\n}\n\n.select select[disabled]:hover,\nfieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n\n.select.is-white select {\n  border-color: white;\n}\n\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n\n.select.is-light select {\n  border-color: whitesmoke;\n}\n\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n\n.select.is-dark select {\n  border-color: #363636;\n}\n\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n\n.select.is-primary:not(:hover)::after {\n  border-color: #00d1b2;\n}\n\n.select.is-primary select {\n  border-color: #00d1b2;\n}\n\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #00b89c;\n}\n\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n}\n\n.select.is-link:not(:hover)::after {\n  border-color: #3273dc;\n}\n\n.select.is-link select {\n  border-color: #3273dc;\n}\n\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #2366d1;\n}\n\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n\n.select.is-info:not(:hover)::after {\n  border-color: #3298dc;\n}\n\n.select.is-info select {\n  border-color: #3298dc;\n}\n\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #238cd1;\n}\n\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25);\n}\n\n.select.is-success:not(:hover)::after {\n  border-color: #48c774;\n}\n\n.select.is-success select {\n  border-color: #48c774;\n}\n\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb67;\n}\n\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);\n}\n\n.select.is-warning:not(:hover)::after {\n  border-color: #ffdd57;\n}\n\n.select.is-warning select {\n  border-color: #ffdd57;\n}\n\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd83d;\n}\n\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668;\n}\n\n.select.is-danger select {\n  border-color: #f14668;\n}\n\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55;\n}\n\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n\n.select.is-medium {\n  font-size: 1.25rem;\n}\n\n.select.is-large {\n  font-size: 1.5rem;\n}\n\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n\n.select.is-fullwidth {\n  width: 100%;\n}\n\n.select.is-fullwidth select {\n  width: 100%;\n}\n\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none;\n}\n\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff;\n}\n\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary .file-cta {\n  background-color: #00d1b2;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #00c4a7;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n  color: #fff;\n}\n\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #00b89c;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link .file-cta {\n  background-color: #3273dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #276cda;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n  color: #fff;\n}\n\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #2366d1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info .file-cta {\n  background-color: #3298dc;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #2793da;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(50, 152, 220, 0.25);\n  color: #fff;\n}\n\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #238cd1;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success .file-cta {\n  background-color: #48c774;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec46d;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.25);\n  color: #fff;\n}\n\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb67;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-warning .file-cta {\n  background-color: #ffdd57;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdb4a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd83d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff;\n}\n\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n\n.file.is-small {\n  font-size: 0.75rem;\n}\n\n.file.is-medium {\n  font-size: 1.25rem;\n}\n\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n\n.file.is-large {\n  font-size: 1.5rem;\n}\n\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n\n.file.is-boxed .file-label {\n  flex-direction: column;\n}\n\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n\n.file.is-centered {\n  justify-content: center;\n}\n\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none;\n}\n\n.file.is-right {\n  justify-content: flex-end;\n}\n\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1;\n}\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n\n.label.is-small {\n  font-size: 0.75rem;\n}\n\n.label.is-medium {\n  font-size: 1.25rem;\n}\n\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n\n.help.is-white {\n  color: white;\n}\n\n.help.is-black {\n  color: #0a0a0a;\n}\n\n.help.is-light {\n  color: whitesmoke;\n}\n\n.help.is-dark {\n  color: #363636;\n}\n\n.help.is-primary {\n  color: #00d1b2;\n}\n\n.help.is-link {\n  color: #3273dc;\n}\n\n.help.is-info {\n  color: #3298dc;\n}\n\n.help.is-success {\n  color: #48c774;\n}\n\n.help.is-warning {\n  color: #ffdd57;\n}\n\n.help.is-danger {\n  color: #f14668;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.field.has-addons.has-addons-centered {\n  justify-content: center;\n}\n\n.field.has-addons.has-addons-right {\n  justify-content: flex-end;\n}\n\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.field.is-grouped > .control {\n  flex-shrink: 0;\n}\n\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.field.is-grouped.is-grouped-centered {\n  justify-content: center;\n}\n\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end;\n}\n\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap;\n}\n\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit;\n}\n\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a;\n}\n\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4;\n}\n\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em;\n}\n\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em;\n}\n\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.breadcrumb a {\n  align-items: center;\n  color: #3273dc;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em;\n}\n\n.breadcrumb a:hover {\n  color: #363636;\n}\n\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"\\\\0002f\";\n}\n\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center;\n}\n\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end;\n}\n\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"\\\\02192\";\n}\n\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"\\\\02022\";\n}\n\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"\\\\000b7\";\n}\n\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"\\\\0227B\";\n}\n\n.card {\n  background-color: white;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-header:first-child, .card-content:first-child, .card-footer:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card-header:last-child, .card-content:last-child, .card-footer:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem;\n}\n\n.card-header-title.is-centered {\n  justify-content: center;\n}\n\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem 1rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  align-items: stretch;\n  display: flex;\n}\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%;\n}\n\na.dropdown-item:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\n\na.dropdown-item.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.level code {\n  border-radius: 4px;\n}\n\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.level.is-mobile {\n  display: flex;\n}\n\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex;\n}\n\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1;\n}\n\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1;\n  }\n}\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1;\n}\n\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n  .level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex;\n  }\n}\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex;\n  }\n}\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit;\n}\n\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem;\n}\n\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n\n.media .media .media {\n  padding-top: 0.5rem;\n}\n\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n\n.menu {\n  font-size: 1rem;\n}\n\n.menu.is-small {\n  font-size: 0.75rem;\n}\n\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n\n.menu-list a.is-active {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.message strong {\n  color: currentColor;\n}\n\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.message.is-small {\n  font-size: 0.75rem;\n}\n\n.message.is-medium {\n  font-size: 1.25rem;\n}\n\n.message.is-large {\n  font-size: 1.5rem;\n}\n\n.message.is-white {\n  background-color: white;\n}\n\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.message.is-white .message-body {\n  border-color: white;\n}\n\n.message.is-black {\n  background-color: #fafafa;\n}\n\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n}\n\n.message.is-light {\n  background-color: #fafafa;\n}\n\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.message.is-light .message-body {\n  border-color: whitesmoke;\n}\n\n.message.is-dark {\n  background-color: #fafafa;\n}\n\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff;\n}\n\n.message.is-dark .message-body {\n  border-color: #363636;\n}\n\n.message.is-primary {\n  background-color: #ebfffc;\n}\n\n.message.is-primary .message-header {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.message.is-primary .message-body {\n  border-color: #00d1b2;\n  color: #00947e;\n}\n\n.message.is-link {\n  background-color: #eef3fc;\n}\n\n.message.is-link .message-header {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.message.is-link .message-body {\n  border-color: #3273dc;\n  color: #2160c4;\n}\n\n.message.is-info {\n  background-color: #eef6fc;\n}\n\n.message.is-info .message-header {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.message.is-info .message-body {\n  border-color: #3298dc;\n  color: #1d72aa;\n}\n\n.message.is-success {\n  background-color: #effaf3;\n}\n\n.message.is-success .message-header {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.message.is-success .message-body {\n  border-color: #48c774;\n  color: #257942;\n}\n\n.message.is-warning {\n  background-color: #fffbeb;\n}\n\n.message.is-warning .message-header {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.message.is-warning .message-body {\n  border-color: #ffdd57;\n  color: #947600;\n}\n\n.message.is-danger {\n  background-color: #feecf0;\n}\n\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35;\n}\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em;\n}\n\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n\n.modal.is-active {\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n\n@media screen and (min-width: 769px) {\n  .modal-content,\n  .modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n  .navbar.is-white .navbar-start .navbar-link,\n  .navbar.is-white .navbar-end > .navbar-item,\n  .navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n  .navbar.is-white .navbar-start .navbar-link:focus,\n  .navbar.is-white .navbar-start .navbar-link:hover,\n  .navbar.is-white .navbar-start .navbar-link.is-active,\n  .navbar.is-white .navbar-end > a.navbar-item:focus,\n  .navbar.is-white .navbar-end > a.navbar-item:hover,\n  .navbar.is-white .navbar-end > a.navbar-item.is-active,\n  .navbar.is-white .navbar-end .navbar-link:focus,\n  .navbar.is-white .navbar-end .navbar-link:hover,\n  .navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n  .navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n  .navbar.is-black .navbar-start .navbar-link,\n  .navbar.is-black .navbar-end > .navbar-item,\n  .navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n  .navbar.is-black .navbar-start .navbar-link:focus,\n  .navbar.is-black .navbar-start .navbar-link:hover,\n  .navbar.is-black .navbar-start .navbar-link.is-active,\n  .navbar.is-black .navbar-end > a.navbar-item:focus,\n  .navbar.is-black .navbar-end > a.navbar-item:hover,\n  .navbar.is-black .navbar-end > a.navbar-item.is-active,\n  .navbar.is-black .navbar-end .navbar-link:focus,\n  .navbar.is-black .navbar-end .navbar-link:hover,\n  .navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n  .navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n  .navbar.is-light .navbar-start .navbar-link,\n  .navbar.is-light .navbar-end > .navbar-item,\n  .navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n  .navbar.is-light .navbar-start .navbar-link:focus,\n  .navbar.is-light .navbar-start .navbar-link:hover,\n  .navbar.is-light .navbar-start .navbar-link.is-active,\n  .navbar.is-light .navbar-end > a.navbar-item:focus,\n  .navbar.is-light .navbar-end > a.navbar-item:hover,\n  .navbar.is-light .navbar-end > a.navbar-item.is-active,\n  .navbar.is-light .navbar-end .navbar-link:focus,\n  .navbar.is-light .navbar-end .navbar-link:hover,\n  .navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n  .navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-dark .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n  .navbar.is-dark .navbar-start .navbar-link,\n  .navbar.is-dark .navbar-end > .navbar-item,\n  .navbar.is-dark .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-start .navbar-link:focus,\n  .navbar.is-dark .navbar-start .navbar-link:hover,\n  .navbar.is-dark .navbar-start .navbar-link.is-active,\n  .navbar.is-dark .navbar-end > a.navbar-item:focus,\n  .navbar.is-dark .navbar-end > a.navbar-item:hover,\n  .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n  .navbar.is-dark .navbar-end .navbar-link:focus,\n  .navbar.is-dark .navbar-end .navbar-link:hover,\n  .navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n  .navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff;\n  }\n}\n\n.navbar.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n  .navbar.is-primary .navbar-start .navbar-link,\n  .navbar.is-primary .navbar-end > .navbar-item,\n  .navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-start .navbar-link:focus,\n  .navbar.is-primary .navbar-start .navbar-link:hover,\n  .navbar.is-primary .navbar-start .navbar-link.is-active,\n  .navbar.is-primary .navbar-end > a.navbar-item:focus,\n  .navbar.is-primary .navbar-end > a.navbar-item:hover,\n  .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n  .navbar.is-primary .navbar-end .navbar-link:focus,\n  .navbar.is-primary .navbar-end .navbar-link:hover,\n  .navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n  .navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #00b89c;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #00d1b2;\n    color: #fff;\n  }\n}\n\n.navbar.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n  .navbar.is-link .navbar-start .navbar-link,\n  .navbar.is-link .navbar-end > .navbar-item,\n  .navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n  .navbar.is-link .navbar-start .navbar-link:focus,\n  .navbar.is-link .navbar-start .navbar-link:hover,\n  .navbar.is-link .navbar-start .navbar-link.is-active,\n  .navbar.is-link .navbar-end > a.navbar-item:focus,\n  .navbar.is-link .navbar-end > a.navbar-item:hover,\n  .navbar.is-link .navbar-end > a.navbar-item.is-active,\n  .navbar.is-link .navbar-end .navbar-link:focus,\n  .navbar.is-link .navbar-end .navbar-link:hover,\n  .navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n  .navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #2366d1;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3273dc;\n    color: #fff;\n  }\n}\n\n.navbar.is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #238cd1;\n  color: #fff;\n}\n\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n  .navbar.is-info .navbar-start .navbar-link,\n  .navbar.is-info .navbar-end > .navbar-item,\n  .navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n  .navbar.is-info .navbar-start .navbar-link:focus,\n  .navbar.is-info .navbar-start .navbar-link:hover,\n  .navbar.is-info .navbar-start .navbar-link.is-active,\n  .navbar.is-info .navbar-end > a.navbar-item:focus,\n  .navbar.is-info .navbar-end > a.navbar-item:hover,\n  .navbar.is-info .navbar-end > a.navbar-item.is-active,\n  .navbar.is-info .navbar-end .navbar-link:focus,\n  .navbar.is-info .navbar-end .navbar-link:hover,\n  .navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #238cd1;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n  .navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #238cd1;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #3298dc;\n    color: #fff;\n  }\n}\n\n.navbar.is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb67;\n  color: #fff;\n}\n\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n  .navbar.is-success .navbar-start .navbar-link,\n  .navbar.is-success .navbar-end > .navbar-item,\n  .navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n  .navbar.is-success .navbar-start .navbar-link:focus,\n  .navbar.is-success .navbar-start .navbar-link:hover,\n  .navbar.is-success .navbar-start .navbar-link.is-active,\n  .navbar.is-success .navbar-end > a.navbar-item:focus,\n  .navbar.is-success .navbar-end > a.navbar-item:hover,\n  .navbar.is-success .navbar-end > a.navbar-item.is-active,\n  .navbar.is-success .navbar-end .navbar-link:focus,\n  .navbar.is-success .navbar-end .navbar-link:hover,\n  .navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb67;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n  .navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb67;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c774;\n    color: #fff;\n  }\n}\n\n.navbar.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n  .navbar.is-warning .navbar-start .navbar-link,\n  .navbar.is-warning .navbar-end > .navbar-item,\n  .navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-start .navbar-link:focus,\n  .navbar.is-warning .navbar-start .navbar-link:hover,\n  .navbar.is-warning .navbar-start .navbar-link.is-active,\n  .navbar.is-warning .navbar-end > a.navbar-item:focus,\n  .navbar.is-warning .navbar-end > a.navbar-item:hover,\n  .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n  .navbar.is-warning .navbar-end .navbar-link:focus,\n  .navbar.is-warning .navbar-end .navbar-link:hover,\n  .navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n  .navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd83d;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n  .navbar.is-danger .navbar-start .navbar-link,\n  .navbar.is-danger .navbar-end > .navbar-item,\n  .navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-start .navbar-link:focus,\n  .navbar.is-danger .navbar-start .navbar-link:hover,\n  .navbar.is-danger .navbar-start .navbar-link.is-active,\n  .navbar.is-danger .navbar-end > a.navbar-item:focus,\n  .navbar.is-danger .navbar-end > a.navbar-item:hover,\n  .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n  .navbar.is-danger .navbar-end .navbar-link:focus,\n  .navbar.is-danger .navbar-end .navbar-link:hover,\n  .navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n  .navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff;\n  }\n}\n\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke;\n}\n\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke;\n}\n\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\n\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px;\n}\n\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg);\n}\n\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\n\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #3273dc;\n}\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.navbar-item img {\n  max-height: 1.75rem;\n}\n\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n}\n\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #3273dc;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #3273dc;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #3273dc;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n  }\n  .navbar-link::after {\n    display: none;\n  }\n  .navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n  html.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex;\n  }\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n  .navbar.is-spaced .navbar-end {\n    align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n  .navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n  .navbar.is-transparent .navbar-link:focus,\n  .navbar.is-transparent .navbar-link:hover,\n  .navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar-burger {\n    display: none;\n  }\n  .navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex;\n  }\n  .navbar-item.has-dropdown {\n    align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #3273dc;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n  .navbar-divider {\n    display: block;\n  }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n  html.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n  a.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n  .navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 290486px;\n}\n\n.pagination.is-rounded .pagination-link {\n  border-radius: 290486px;\n}\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em;\n}\n\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #3273dc;\n}\n\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  flex-wrap: wrap;\n}\n\n.pagination-list li {\n  list-style: none;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n  }\n  .pagination-previous {\n    order: 2;\n  }\n  .pagination-next {\n    order: 3;\n  }\n  .pagination {\n    justify-content: space-between;\n  }\n  .pagination.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3;\n  }\n}\n\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem;\n}\n\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white;\n}\n\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white;\n}\n\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a;\n}\n\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a;\n}\n\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke;\n}\n\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke;\n}\n\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff;\n}\n\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636;\n}\n\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636;\n}\n\n.panel.is-primary .panel-heading {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #00d1b2;\n}\n\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #00d1b2;\n}\n\n.panel.is-link .panel-heading {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #3273dc;\n}\n\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #3273dc;\n}\n\n.panel.is-info .panel-heading {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #3298dc;\n}\n\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #3298dc;\n}\n\n.panel.is-success .panel-heading {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c774;\n}\n\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c774;\n}\n\n.panel.is-warning .panel-heading {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffdd57;\n}\n\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffdd57;\n}\n\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668;\n}\n\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668;\n}\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed;\n}\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n}\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n\n.panel-list a:hover {\n  color: #3273dc;\n}\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n\n.panel-block input[type=\"checkbox\"] {\n  margin-right: 0.75em;\n}\n\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.panel-block.is-wrapped {\n  flex-wrap: wrap;\n}\n\n.panel-block.is-active {\n  border-left-color: #3273dc;\n  color: #363636;\n}\n\n.panel-block.is-active .panel-icon {\n  color: #3273dc;\n}\n\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\n\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n\n.tabs li {\n  display: block;\n}\n\n.tabs li.is-active a {\n  border-bottom-color: #3273dc;\n  color: #3273dc;\n}\n\n.tabs ul {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start;\n}\n\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em;\n}\n\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n\n.tabs.is-centered ul {\n  justify-content: center;\n}\n\n.tabs.is-right ul {\n  justify-content: flex-end;\n}\n\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.tabs.is-toggle li.is-active a {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n  z-index: 1;\n}\n\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 290486px;\n  border-top-left-radius: 290486px;\n  padding-left: 1.25em;\n}\n\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 290486px;\n  border-top-right-radius: 290486px;\n  padding-right: 1.25em;\n}\n\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n  width: unset;\n}\n\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%;\n}\n\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%;\n}\n\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%;\n}\n\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%;\n}\n\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%;\n}\n\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%;\n}\n\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%;\n}\n\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%;\n}\n\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66667%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66667%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66667%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66667%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.33333%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333%;\n  }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.66667%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66667%;\n  }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.33333%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333%;\n  }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.66667%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66667%;\n  }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.33333%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333%;\n  }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.66667%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66667%;\n  }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.33333%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333%;\n  }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.66667%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66667%;\n  }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n\n.columns.is-centered {\n  justify-content: center;\n}\n\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n\n.columns.is-mobile {\n  display: flex;\n}\n\n.columns.is-multiline {\n  flex-wrap: wrap;\n}\n\n.columns.is-vcentered {\n  align-items: center;\n}\n\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n}\n\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.tile.is-child {\n  margin: 0 !important;\n}\n\n.tile.is-parent {\n  padding: 0.75rem;\n}\n\n.tile.is-vertical {\n  flex-direction: column;\n}\n\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex;\n  }\n  .tile.is-1 {\n    flex: none;\n    width: 8.33333%;\n  }\n  .tile.is-2 {\n    flex: none;\n    width: 16.66667%;\n  }\n  .tile.is-3 {\n    flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    flex: none;\n    width: 33.33333%;\n  }\n  .tile.is-5 {\n    flex: none;\n    width: 41.66667%;\n  }\n  .tile.is-6 {\n    flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    flex: none;\n    width: 58.33333%;\n  }\n  .tile.is-8 {\n    flex: none;\n    width: 66.66667%;\n  }\n  .tile.is-9 {\n    flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    flex: none;\n    width: 83.33333%;\n  }\n  .tile.is-11 {\n    flex: none;\n    width: 91.66667%;\n  }\n  .tile.is-12 {\n    flex: none;\n    width: 100%;\n  }\n}\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #00d1b2 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important;\n}\n\n.has-background-primary {\n  background-color: #00d1b2 !important;\n}\n\n.has-text-primary-light {\n  color: #ebfffc !important;\n}\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #b8fff4 !important;\n}\n\n.has-background-primary-light {\n  background-color: #ebfffc !important;\n}\n\n.has-text-primary-dark {\n  color: #00947e !important;\n}\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #00c7a9 !important;\n}\n\n.has-background-primary-dark {\n  background-color: #00947e !important;\n}\n\n.has-text-link {\n  color: #3273dc !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important;\n}\n\n.has-background-link {\n  background-color: #3273dc !important;\n}\n\n.has-text-link-light {\n  color: #eef3fc !important;\n}\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #c2d5f5 !important;\n}\n\n.has-background-link-light {\n  background-color: #eef3fc !important;\n}\n\n.has-text-link-dark {\n  color: #2160c4 !important;\n}\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #3b79de !important;\n}\n\n.has-background-link-dark {\n  background-color: #2160c4 !important;\n}\n\n.has-text-info {\n  color: #3298dc !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #207dbc !important;\n}\n\n.has-background-info {\n  background-color: #3298dc !important;\n}\n\n.has-text-info-light {\n  color: #eef6fc !important;\n}\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #c2e0f5 !important;\n}\n\n.has-background-info-light {\n  background-color: #eef6fc !important;\n}\n\n.has-text-info-dark {\n  color: #1d72aa !important;\n}\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #248fd6 !important;\n}\n\n.has-background-info-dark {\n  background-color: #1d72aa !important;\n}\n\n.has-text-success {\n  color: #48c774 !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a85c !important;\n}\n\n.has-background-success {\n  background-color: #48c774 !important;\n}\n\n.has-text-success-light {\n  color: #effaf3 !important;\n}\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eed6 !important;\n}\n\n.has-background-success-light {\n  background-color: #effaf3 !important;\n}\n\n.has-text-success-dark {\n  color: #257942 !important;\n}\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a058 !important;\n}\n\n.has-background-success-dark {\n  background-color: #257942 !important;\n}\n\n.has-text-warning {\n  color: #ffdd57 !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important;\n}\n\n.has-background-warning {\n  background-color: #ffdd57 !important;\n}\n\n.has-text-warning-light {\n  color: #fffbeb !important;\n}\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #fff1b8 !important;\n}\n\n.has-background-warning-light {\n  background-color: #fffbeb !important;\n}\n\n.has-text-warning-dark {\n  color: #947600 !important;\n}\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79f00 !important;\n}\n\n.has-background-warning-dark {\n  background-color: #947600 !important;\n}\n\n.has-text-danger {\n  color: #f14668 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important;\n}\n\n.has-background-danger {\n  background-color: #f14668 !important;\n}\n\n.has-text-danger-light {\n  color: #feecf0 !important;\n}\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important;\n}\n\n.has-background-danger-light {\n  background-color: #feecf0 !important;\n}\n\n.has-text-danger-dark {\n  color: #cc0f35 !important;\n}\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important;\n}\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.is-flex-direction-row {\n  flex-direction: row !important;\n}\n\n.is-flex-direction-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.is-flex-direction-column {\n  flex-direction: column !important;\n}\n\n.is-flex-direction-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.is-flex-wrap-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.is-flex-wrap-wrap {\n  flex-wrap: wrap !important;\n}\n\n.is-flex-wrap-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.is-justify-content-flex-start {\n  justify-content: flex-start !important;\n}\n\n.is-justify-content-flex-end {\n  justify-content: flex-end !important;\n}\n\n.is-justify-content-center {\n  justify-content: center !important;\n}\n\n.is-justify-content-space-between {\n  justify-content: space-between !important;\n}\n\n.is-justify-content-space-around {\n  justify-content: space-around !important;\n}\n\n.is-justify-content-space-evenly {\n  justify-content: space-evenly !important;\n}\n\n.is-justify-content-start {\n  justify-content: start !important;\n}\n\n.is-justify-content-end {\n  justify-content: end !important;\n}\n\n.is-justify-content-left {\n  justify-content: left !important;\n}\n\n.is-justify-content-right {\n  justify-content: right !important;\n}\n\n.is-align-content-flex-start {\n  align-content: flex-start !important;\n}\n\n.is-align-content-flex-end {\n  align-content: flex-end !important;\n}\n\n.is-align-content-center {\n  align-content: center !important;\n}\n\n.is-align-content-space-between {\n  align-content: space-between !important;\n}\n\n.is-align-content-space-around {\n  align-content: space-around !important;\n}\n\n.is-align-content-space-evenly {\n  align-content: space-evenly !important;\n}\n\n.is-align-content-stretch {\n  align-content: stretch !important;\n}\n\n.is-align-content-start {\n  align-content: start !important;\n}\n\n.is-align-content-end {\n  align-content: end !important;\n}\n\n.is-align-content-baseline {\n  align-content: baseline !important;\n}\n\n.is-align-items-stretch {\n  align-items: stretch !important;\n}\n\n.is-align-items-flex-start {\n  align-items: flex-start !important;\n}\n\n.is-align-items-flex-end {\n  align-items: flex-end !important;\n}\n\n.is-align-items-center {\n  align-items: center !important;\n}\n\n.is-align-items-baseline {\n  align-items: baseline !important;\n}\n\n.is-align-items-start {\n  align-items: start !important;\n}\n\n.is-align-items-end {\n  align-items: end !important;\n}\n\n.is-align-items-self-start {\n  align-items: self-start !important;\n}\n\n.is-align-items-self-end {\n  align-items: self-end !important;\n}\n\n.is-align-self-auto {\n  align-self: auto !important;\n}\n\n.is-align-self-flex-start {\n  align-self: flex-start !important;\n}\n\n.is-align-self-flex-end {\n  align-self: flex-end !important;\n}\n\n.is-align-self-center {\n  align-self: center !important;\n}\n\n.is-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.is-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.is-flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.is-flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.is-flex-grow-2 {\n  flex-grow: 2 !important;\n}\n\n.is-flex-grow-3 {\n  flex-grow: 3 !important;\n}\n\n.is-flex-grow-4 {\n  flex-grow: 4 !important;\n}\n\n.is-flex-grow-5 {\n  flex-grow: 5 !important;\n}\n\n.is-flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.is-flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.is-flex-shrink-2 {\n  flex-shrink: 2 !important;\n}\n\n.is-flex-shrink-3 {\n  flex-shrink: 3 !important;\n}\n\n.is-flex-shrink-4 {\n  flex-shrink: 4 !important;\n}\n\n.is-flex-shrink-5 {\n  flex-shrink: 5 !important;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  box-shadow: none !important;\n}\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.75rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.75rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-5 {\n  margin: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.75rem !important;\n}\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n\n.is-flex {\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important;\n  }\n}\n\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n\n.is-inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important;\n  }\n}\n\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n\n/* Bulma Layout */\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.hero .navbar {\n  background: none;\n}\n\n.hero .tabs ul {\n  border-bottom: none;\n}\n\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-white .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n  }\n}\n\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n\n.hero.is-black .title {\n  color: white;\n}\n\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-black .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-light .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n\n.hero.is-dark .title {\n  color: #fff;\n}\n\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636;\n}\n\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n\n.hero.is-primary {\n  background-color: #00d1b2;\n  color: #fff;\n}\n\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n\n.hero.is-primary .title {\n  color: #fff;\n}\n\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #00d1b2;\n  }\n}\n\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #00b89c;\n  color: #fff;\n}\n\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #00d1b2;\n}\n\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);\n  }\n}\n\n.hero.is-link {\n  background-color: #3273dc;\n  color: #fff;\n}\n\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n\n.hero.is-link .title {\n  color: #fff;\n}\n\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #3273dc;\n  }\n}\n\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #2366d1;\n  color: #fff;\n}\n\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-link .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3273dc;\n}\n\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n  }\n}\n\n.hero.is-info {\n  background-color: #3298dc;\n  color: #fff;\n}\n\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n\n.hero.is-info .title {\n  color: #fff;\n}\n\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #3298dc;\n  }\n}\n\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #238cd1;\n  color: #fff;\n}\n\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-info .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #3298dc;\n}\n\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #159dc6 0%, #3298dc 71%, #4389e5 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #159dc6 0%, #3298dc 71%, #4389e5 100%);\n  }\n}\n\n.hero.is-success {\n  background-color: #48c774;\n  color: #fff;\n}\n\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n\n.hero.is-success .title {\n  color: #fff;\n}\n\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c774;\n  }\n}\n\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb67;\n  color: #fff;\n}\n\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-success .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c774;\n}\n\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b342 0%, #48c774 71%, #56d296 100%);\n  }\n}\n\n.hero.is-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffdd57;\n  }\n}\n\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd83d;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffdd57;\n}\n\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n  }\n}\n\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n\n.hero.is-danger .title {\n  color: #fff;\n}\n\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668;\n  }\n}\n\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668;\n}\n\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n  }\n}\n\n.hero.is-small .hero-body {\n  padding: 1.5rem;\n}\n\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 1.5rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 1.5rem;\n  }\n}\n\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex;\n}\n\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n\n@media screen and (min-width: 1024px) {\n  .section.is-medium {\n    padding: 9rem 1.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 1.5rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n/*# sourceMappingURL=bulma.css.map */\n"])));

var SkhemataBase = /*#__PURE__*/function (_ScopedElementsMixin) {
  _inherits(SkhemataBase, _ScopedElementsMixin);

  var _super7 = _createSuper(SkhemataBase);

  function SkhemataBase() {
    var _this24;

    _classCallCheck2(this, SkhemataBase);

    _this24 = _super7.apply(this, arguments);
    /**
     * Skhemata API URL
     */

    _this24.api = {
      url: ''
    };
    /**
     * Translations directory
     */

    _this24.translationDir = '';
    /**
     * Language code (ISO)
     */

    _this24.translationLang = 'eng';
    /**
     * path to Configuration File
     */

    _this24.configSrc = '';
    return _this24;
  }
  /* TODO: add validation and form error handling
  validateFormInputs(){
  }
     displayAPIFormErrors(){
  } */


  _createClass2(SkhemataBase, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'translation-lang') {
        this.translationSelected = this.translationData[this.translationLang];
      }

      _get(_getPrototypeOf(SkhemataBase.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);
    }
    /**
     * getStr
     * @param key key for translation
     * @returns translated string
     */

  }, {
    key: "getStr",
    value: function getStr(key) {
      try {
        var value = key.split('.').reduce(function (o, i) {
          return o[i];
        }, this.translationSelected);
        return typeof value === 'string' ? value : key;
      } catch (_a) {
        return key;
      }
    }
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this25 = this;

        var _a;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // init API
                if ((_a = this.api) === null || _a === void 0 ? void 0 : _a.url) {
                  this.skhemata = new Skhemata(this.api.url);
                  this.skhemata.init();
                }

                if (!this.configSrc) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 4;
                return fetch(this.configSrc).then(function (res) {
                  return res.json();
                });

              case 4:
                this.configData = _context3.sent;

              case 5:
                // Load translations
                if (this.translationDir || this.translationData) {
                  if (this.translationDir) {
                    fetch("".concat(this.translationDir).concat(this.translationLang, ".json")).then(function (res) {
                      _this25.translationSelected = res.json();
                    });
                  } else {
                    this.translationSelected = this.translationData[this.translationLang];
                  }
                }

                this.requestUpdate();

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }]);

  return SkhemataBase;
}(ScopedElementsMixin(h$2));

SkhemataBase.styles = [Bulma];

__decorate([e$3({
  type: Object,
  attribute: 'api'
})], SkhemataBase.prototype, "api", void 0);

__decorate([e$3({
  type: String,
  attribute: 'translation-dir'
})], SkhemataBase.prototype, "translationDir", void 0);

__decorate([e$3({
  type: Object,
  attribute: 'translation-data'
})], SkhemataBase.prototype, "translationData", void 0);

__decorate([e$3({
  type: String,
  attribute: 'translation-lang'
})], SkhemataBase.prototype, "translationLang", void 0);

__decorate([e$3({
  type: Object,
  attribute: false
})], SkhemataBase.prototype, "translationSelected", void 0);

__decorate([e$3({
  type: Object,
  attribute: false
})], SkhemataBase.prototype, "skhemata", void 0);

__decorate([e$3({
  type: String,
  attribute: 'config-src'
})], SkhemataBase.prototype, "configSrc", void 0);

__decorate([e$3({
  type: Object,
  attribute: 'config-data'
})], SkhemataBase.prototype, "configData", void 0);
/**
 *
 * Use createContextualFragment to return the string to html
 *
 */


var stringToHtml = function stringToHtml(string) {
  if (string) {
    var fragmentResult = document.createRange().createContextualFragment("".concat(string));
    return fragmentResult;
  }

  return true;
};

var faQuoteLeft = {
  prefix: 'fas',
  iconName: 'quote-left',
  icon: [512, 512, [], "f10d", "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"]
};
var faUser = {
  prefix: 'fas',
  iconName: 'user',
  icon: [448, 512, [], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]
};
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';

var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();

var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;
var w$1 = WINDOW || {};
if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$1[NAMESPACE_IDENTIFIER];
var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var d$1 = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}

var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}

function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$1 - width / 2, "em, ").concat(transform.y / d$1 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$1, "em), calc(-50% + ").concat(transform.y / d$1, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$1, "em, ").concat(transform.y / d$1, "em) ");
  }

  val += "scale(".concat(transform.size / d$1 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$1 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = 'black';
  }

  return _abstract;
}

function deGroup(_abstract2) {
  if (_abstract2.tag === 'g') {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}

function makeIconMasking(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon(_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol(_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        "class": 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p$1 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = ('far' in styles);
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};

build();
var styles$1 = namespace.styles;

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;
var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var styles$2 = namespace.styles;

function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

var styles$3 = namespace.styles;
var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val["abstract"].map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var _cssInserted = false;
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};

var a$3 = '\nsvg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black; }\n\n.fad.fa-inverse {\n  color: #fff; }\n\n';

function o$4(_ref6, t) {
  var n = _ref6.prototype;

  for (var _i14 = 0, _Object$entries = Object.entries(t); _i14 < _Object$entries.length; _i14++) {
    var _Object$entries$_i = _slicedToArray2(_Object$entries[_i14], 2),
        _e5 = _Object$entries$_i[0],
        _i15 = _Object$entries$_i[1];

    r$3(n, _e5, _i15);
  }

  n.connectedCallback = function () {
    for (var _i16 = 0, _Object$entries2 = Object.entries(t); _i16 < _Object$entries2.length; _i16++) {
      var _Object$entries2$_i = _slicedToArray2(_Object$entries2[_i16], 2),
          _n4 = _Object$entries2$_i[0],
          _Object$entries2$_i$ = _Object$entries2$_i[1].connect,
          _e6 = _Object$entries2$_i$ === void 0 ? function () {} : _Object$entries2$_i$;

      _e6(this, _n4);
    }
  };
}

function r$3(n, t, _ref7) {
  var e = _ref7.get,
      i = _ref7.set,
      _ref7$observe = _ref7.observe,
      a = _ref7$observe === void 0 ? function () {} : _ref7$observe,
      o = _ref7.defaultValue;

  var r = e || function (n, t) {
    return t;
  },
      s = i || function (n, t) {
    return t;
  },
      f = Symbol("cached-".concat(t));

  n[f] = o, Object.defineProperty(n, t, {
    get: function get() {
      var n = this[f];
      return this[f] = r(this, this[f]), this[f] !== n && a(this, this[f], n), this[f];
    },
    set: function set(n) {
      var t = this[f],
          e = s(this, n, this[f]);
      void 0 !== e && (this[f] = r(this, e), t !== this[f] && a(this, this[f], t));
    },
    enumerable: !0,
    configurable: !1
  });
}

function s$4(_ref8) {
  var n = _ref8.attribute,
      t = _ref8.defaultValue,
      e = _objectWithoutProperties(_ref8, _excluded);

  return _objectSpread2({
    connect: u$2(n, t),
    defaultValue: t
  }, e);
}

function f$1(_ref9) {
  var _ref9$defaultValue = _ref9.defaultValue,
      n = _ref9$defaultValue === void 0 ? !1 : _ref9$defaultValue,
      _ref9$set = _ref9.set,
      t = _ref9$set === void 0 ? function (n, t) {
    return t;
  } : _ref9$set,
      e = _objectWithoutProperties(_ref9, _excluded2);

  return s$4(_objectSpread2({
    defaultValue: n,
    set: function set(n, e) {
      return t(n, Boolean(e));
    }
  }, e));
}

function l$3(_ref10) {
  var _ref10$defaultValue = _ref10.defaultValue,
      n = _ref10$defaultValue === void 0 ? "" : _ref10$defaultValue,
      _ref10$set = _ref10.set,
      t = _ref10$set === void 0 ? function (n, t) {
    return t;
  } : _ref10$set,
      e = _objectWithoutProperties(_ref10, _excluded3);

  return s$4(_objectSpread2({
    defaultValue: n,
    set: function set(n, e) {
      return t(n, m$1(e));
    }
  }, e));
}

function c$1(_ref11) {
  var _ref11$defaultValue = _ref11.defaultValue,
      n = _ref11$defaultValue === void 0 ? "" : _ref11$defaultValue,
      _ref11$set = _ref11.set,
      t = _ref11$set === void 0 ? function (n, t) {
    return t;
  } : _ref11$set,
      e = _objectWithoutProperties(_ref11, _excluded4);

  return s$4(_objectSpread2({
    defaultValue: n,
    set: function set(n, e) {
      var i = "object" == _typeof(e) ? e : m$1(e);
      return t(n, i);
    }
  }, e));
}

function m$1(n) {
  return null == n ? "" : String(n);
}

function u$2(n, t) {
  var e = "boolean" == typeof t ? function () {
    return !0;
  } : function (t) {
    return t.getAttribute(n);
  };
  return function (t, i) {
    t.hasAttribute(n) && (t[i] = e(t));
  };
}

var g$1, d$2, p$2, h$3;

function b$1(n) {
  return g$1 ? "string" == typeof n ? g$1({
    iconName: n
  }) : n && 2 <= n.length ? g$1({
    prefix: n[0],
    iconName: n[1]
  }) : n : n;
}

function v$1() {
  return d$2 ? x("html", d$2.apply(void 0, arguments)) : void 0;
}

function w$2() {
  return p$2 ? x("html", p$2.apply(void 0, arguments)) : void 0;
}

function y$1() {
  var _h$;

  return h$3 ? (_h$ = h$3).transform.apply(_h$, arguments) : void 0;
}

function x(n, t) {
  if (t) return t[n];
}

function k$1(n, t) {
  if (void 0 === t) return function (t) {
    return k$1(n, t);
  };

  var e = function e(n, t) {
    return "function" == typeof n ? n((e = t) ? e.replace(/[^0-9a-zA-Z-_]/g, "") : "") : n;
    var e;
  };

  return function (i, a, o) {
    (o || a) && (i[n].classList.remove(e(t, o)), a && i[n].classList.add(e(t, a)));
  };
}

var A$1 = document.createElement("template");

function R$1() {
  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref12$icon = _ref12.icon,
      n = _ref12$icon === void 0 ? [] : _ref12$icon;

  var _n5 = _slicedToArray2(n, 5),
      _n5$ = _n5[0],
      t = _n5$ === void 0 ? 1 : _n5$,
      _n5$2 = _n5[1],
      e = _n5$2 === void 0 ? 1 : _n5$2,
      _n5$3 = _n5[4],
      i = _n5$3 === void 0 ? "" : _n5$3;

  return ["<svg\n\t\t\tclass=\"svg-inline--fa\"\n\t\t\taria-hidden=\"true\"\n\t\t\trole=\"img\"\n\t\t\tfocusable=\"false\"\n\t\t\txmlns=\"http://www.w3.org/2000/svg\"\n\t\t\tviewBox=\"0 0 ".concat(t, " ").concat(e, "\"\n\t\t>\n\t\t\t").concat(Array.isArray(i) ? "<g class=\"fa-group\">\n\t\t\t<path class=\"fa-secondary\" fill=\"currentColor\" d=\"".concat(i[1], "\" />\n\t\t\t<path class=\"fa-primary\" fill=\"currentColor\" d=\"").concat(i[0], "\" />\n\t\t</g>") : "<path fill=\"currentColor\" d=\"".concat(i, "\" />"), "\n\t\t</svg>")];
}

A$1.innerHTML = "\n<style>\n\t:host {\n\t\tbox-sizing: border-box;\n\t\tdisplay: inline-block;\n\t\tline-height: 1; }\n\n\t\t:host([pull=\"left\"]) {\n\t\t\tfloat: left;\n\t\t\tmargin-right: .3em; }\n\n\t\t:host([pull=\"right\"]) {\n\t\t\tfloat: right;\n\t\t\tmargin-left: .3em; }\n\n\t".concat(a$3, "\n</style>\n").concat(R$1({
  icon: []
}), "\n");

var E$1 = {
  SVG: Symbol("svg"),
  PATH_PRIMARY: Symbol("path-primary"),
  PATH_SECONDARY: Symbol("path-secondary"),
  NEEDS_REDRAW: Symbol("needs-complete-redraw-of-structure")
},
    T$1 = k$1(E$1.SVG),
    S$2 = function S$2(n) {
  return T$1(function (t) {
    return n.concat(t);
  });
},
    N$1 = {
  icon: c$1({
    attribute: "icon",
    observe: _$1
  }),
  resolvedIcon: {
    get: function get(_ref13) {
      var n = _ref13.icon,
          t = _ref13._resolve;
      return t(n);
    }
  },
  isDuotone: {
    get: z$1
  },
  transform: c$1({
    attribute: "transform",
    observe: _$1
  }),
  parsedTransform: {
    get: function get(_ref14) {
      var n = _ref14._parseTransform,
          t = _ref14.transform;
      return t && "string" == typeof t ? n(t) : t;
    }
  },
  size: l$3({
    attribute: "size",
    observe: S$2("fa-")
  }),
  rotation: l$3({
    attribute: "rotation",
    observe: S$2("fa-rotate-")
  }),
  flip: l$3({
    attribute: "flip",
    observe: S$2("fa-flip-")
  }),
  pull: l$3({
    attribute: "pull",
    observe: (I$1 = "pull", function (n, t) {
      return n.setAttribute(I$1, t);
    })
  }),
  mask: c$1({
    attribute: "mask",
    observe: _$1
  }),
  resolvedMask: {
    get: function get(_ref15) {
      var n = _ref15.mask,
          t = _ref15._resolve;
      return t(n);
    }
  },
  fixedWidth: f$1({
    attribute: "fixed-width",
    observe: T$1("fa-fw")
  }),
  spin: f$1({
    attribute: "spin",
    observe: T$1("fa-spin")
  }),
  pulse: f$1({
    attribute: "pulse",
    observe: T$1("fa-pulse")
  }),
  inverse: f$1({
    attribute: "inverse",
    observe: T$1("fa-inverse")
  }),
  swapOpacity: f$1({
    attribute: "swap-opacity",
    observe: T$1("fa-swap-opacity")
  })
};

var I$1;

var D = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(D, _HTMLElement2);

  var _super8 = _createSuper(D);

  function D() {
    var _this26;

    _classCallCheck2(this, D);

    _this26 = _super8.call(this);

    var n = _this26.attachShadow({
      mode: "open"
    });

    n.appendChild(A$1.content.cloneNode(!0)), _this26[E$1.SVG] = n.querySelector("svg"), _this26[E$1.PATH_PRIMARY] = n.querySelector("path"), _this26[E$1.NEEDS_REDRAW] = function (n) {
      return n.isDuotone || n.transform || n.mask;
    }, _this26._toHtml = v$1, _this26._resolve = b$1, _this26._parseTransform = y$1, _this26.spin = !1;
    return _this26;
  }

  return _createClass2(D);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function z$1(_ref16) {
  var n = _ref16.resolvedIcon;
  return n && n.icon && Array.isArray(n.icon[4]);
}

function _$1(n) {
  n[E$1.NEEDS_REDRAW](n) ? function (n) {
    var _n$E$1$SVG$classList;

    var t = n[E$1.SVG].classList;
    n[E$1.SVG].remove();

    var e = {
      transform: n.parsedTransform,
      mask: n.resolvedMask
    },
        _ref17 = n._toHtml(n.resolvedIcon, e) || R$1(n.resolvedIcon),
        _ref18 = _slicedToArray2(_ref17, 1),
        i = _ref18[0];

    n.shadowRoot.innerHTML = n.shadowRoot.innerHTML.concat(i), n[E$1.SVG] = n.shadowRoot.querySelector("svg"), (_n$E$1$SVG$classList = n[E$1.SVG].classList).add.apply(_n$E$1$SVG$classList, _toConsumableArray2(t));
    var a = n.shadowRoot.querySelectorAll("path");
    n[E$1.PATH_PRIMARY] = a[1] ? a[1] : a[0], n[E$1.PATH_SECONDARY] = a[1] ? a[0] : void 0;
    var o = n.isDuotone;

    n[E$1.NEEDS_REDRAW] = function (n) {
      return o !== n.isDuotone || n.transform || n.mask;
    };
  }(n) : function (n) {
    var t = n.resolvedIcon;
    if (!t) return;
    n[E$1.SVG].setAttribute("viewBox", "0 0 ".concat(t.icon[0], " ").concat(t.icon[1]));
    (z$1(n) ? M$1 : C$1)(n, {
      vectorDefinition: t.icon[4]
    });
  }(n);
}

function C$1(n, _ref19) {
  var t = _ref19.vectorDefinition;
  n[E$1.PATH_PRIMARY].setAttribute("d", t);
}

function M$1(n, _ref20) {
  var t = _ref20.vectorDefinition;
  n[E$1.PATH_PRIMARY].setAttribute("d", t[0]), n[E$1.PATH_SECONDARY].setAttribute("d", t[1]);
}

o$4(D, N$1);
var H$1 = document.createElement("template");
H$1.innerHTML = "\n<style>\n\t:host {\n\t\tbox-sizing: border-box;\n\t\tdisplay: inline-block;\n\t\tline-height: 1; }\n\n\t\t:host([pull=\"left\"]) {\n\t\t\tfloat: left;\n\t\t\tmargin-right: .3em; }\n\n\t\t:host([pull=\"right\"]) {\n\t\t\tfloat: right;\n\t\t\tmargin-left: .3em; }\n\n\t::slotted(*) {\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tmargin: auto;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 0; }\n\n\t".concat(a$3, "\n</style>\n<span class=\"fa-layers\">\n\t<slot></slot>\n</span>\n");
var L$1 = {
  LAYERS: Symbol("layers")
},
    O = k$1(L$1.LAYERS),
    V$1 = {
  size: _objectSpread2(_objectSpread2({}, N$1.size), {}, {
    observe: (P$1 = "fa-", O(function (n) {
      return P$1.concat(n);
    }))
  }),
  fixedWidth: _objectSpread2(_objectSpread2({}, N$1.fixedWidth), {}, {
    observe: O("fa-fw")
  }),
  pull: N$1.pull
};
var P$1;

var $$1 = /*#__PURE__*/function (_HTMLElement3) {
  _inherits($$1, _HTMLElement3);

  var _super9 = _createSuper($$1);

  function $$1() {
    var _this27;

    _classCallCheck2(this, $$1);

    _this27 = _super9.call(this);

    var n = _this27.attachShadow({
      mode: "open"
    });

    n.appendChild(H$1.content.cloneNode(!0)), _this27[L$1.LAYERS] = n.querySelector(".fa-layers");
    return _this27;
  }

  return _createClass2($$1);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

o$4($$1, V$1);
var W = document.createElement("template");
W.innerHTML = "\n<style>\n\t:host {\n\t\tbox-sizing: border-box;\n\t\tdisplay: inline-block;\n\t\tline-height: 1; }\n\n\t".concat(a$3, "\n\n\t.fa-layers-counter {\n\t\tbackground: var(--fa-layers-counter-background, #ff253a); }\n</style>\n<span class=\"fa-layers-text\"></span>\n");

var Y = {
  CONTAINER: Symbol("container"),
  NEEDS_REDRAW: Symbol("needs-complete-redraw-of-structure")
},
    B = k$1(Y.CONTAINER),
    G = function G(n) {
  return B(function (t) {
    return n.concat(t);
  });
},
    q = {
  value: l$3({
    attribute: "value",
    observe: j
  }),
  transform: _objectSpread2(_objectSpread2({}, N$1.transform), {}, {
    observe: j
  }),
  parsedTransform: N$1.parsedTransform,
  size: l$3({
    attribute: "size",
    observe: G("fa-")
  }),
  position: l$3({
    attribute: "position",
    observe: G("fa-layers-")
  }),
  fixedWidth: f$1({
    attribute: "fixed-width",
    observe: B("fa-fw")
  }),
  inverse: f$1({
    attribute: "inverse",
    observe: B("fa-inverse")
  }),
  counter: f$1({
    attribute: "counter",
    observe: j
  })
};

var X = /*#__PURE__*/function (_HTMLElement4) {
  _inherits(X, _HTMLElement4);

  var _super10 = _createSuper(X);

  function X() {
    var _this28;

    _classCallCheck2(this, X);

    _this28 = _super10.call(this);

    var n = _this28.attachShadow({
      mode: "open"
    });

    n.appendChild(W.content.cloneNode(!0)), _this28[Y.CONTAINER] = n.querySelector(".fa-layers-text"), _this28[Y.NEEDS_REDRAW] = function (n) {
      return n.transform;
    }, _this28._toHtml = w$2, _this28._parseTransform = y$1;
    return _this28;
  }

  return _createClass2(X);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

function j(n) {
  n[Y.NEEDS_REDRAW](n) && function (n) {
    var _n$Y$CONTAINER$classL;

    var t = n[Y.CONTAINER].classList;
    n[Y.CONTAINER].remove();

    var e = {
      transform: n.parsedTransform
    },
        _ref21 = n._toHtml(String(n.value), e) || function () {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var t = document.createElement("span");
      return t.className = "fa-layers-text", t.textContent = n, [t.outerHTML];
    }(n.value),
        _ref22 = _slicedToArray2(_ref21, 1),
        i = _ref22[0];

    n.shadowRoot.innerHTML = n.shadowRoot.innerHTML.concat(i), n[Y.CONTAINER] = n.shadowRoot.querySelector(".fa-layers-text"), (_n$Y$CONTAINER$classL = n[Y.CONTAINER].classList).add.apply(_n$Y$CONTAINER$classL, _toConsumableArray2(t));
    var a = n.transform;

    n[Y.NEEDS_REDRAW] = function (n) {
      return a !== n.transform;
    };
  }(n), function (n) {
    var t = n[Y.CONTAINER].classList,
        e = n.counter ? "fa-layers-counter" : "fa-layers-text";
    if (t.contains(e)) return;
    n[Y.CONTAINER].classList.remove("fa-layers-counter", "fa-layers-text"), n[Y.CONTAINER].classList.add(e);
  }(n), function (n) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n.value;
    var e = n.counter && !t ? 0 : t;
    n[Y.CONTAINER].textContent = e;
  }(n);
}

o$4(X, q), function (_ref23) {
  var n = _ref23.findIconDefinition,
      t = _ref23.icon,
      e = _ref23.text,
      i = _ref23.parse;
  g$1 = n, d$2 = t, p$2 = e, h$3 = i;
}({
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  parse: parse
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */

var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */

var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(function () {
  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time


if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


if (typeof window.ShadyCSS === 'undefined') ;else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */

window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */


var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();

var CSSResult = /*#__PURE__*/function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck2(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  _createClass2(CSSResult, [{
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return CSSResult;
}();

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


var css$1 = function css$1(strings) {
  for (var _len4 = arguments.length, values = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    values[_key4 - 1] = arguments[_key4];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time


(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
/**
 *
 * Lit Blog Post Styles
 *
 **/

var SkhemataTestimonialStyle = css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n    \n    --default-text-color: var(--skhemata-testimonial-text-color, rgb(100,100,100));\n    --light-grey-color: #969ea2;\n    --lighter-grey-color: #dce3e6;\n    \n    color: var(--default-text-color);\n  }\n\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing : border-box;\n    box-sizing : border-box;\n  }\n  \n  html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6, strong, em {\n    color: var(--default-text-color);\n  }\n\n  a {\n    color: #3295dc;\n    -webkit-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n\n  a:hover {\n    color: #1c77b9;\n  }\n\n\n  .testimonials {\n    max-width: 480px;\n    margin: 0 auto;\n    overflow: hidden;\n  }\n\n  .testimonials-carousel {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow-x: hidden;\n    -ms-scroll-snap-type: x mandatory;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    padding: 40px 10px;\n  }\n\n  .testimonials-carousel::-webkit-scrollbar {\n    display: none;\n  }\n  \n  .testimonial-item {\n    scroll-snap-align: center;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    max-width: 480px;\n    width: 100%;\n\n  }\n  \n  .testimonials .flex-card {\n    -webkit-box-shadow: none;\n    box-shadow: 1px 2px 9px -1px #d9d9d9;\n    background-color: var(--skhemata-testimonial-background-color, rgba(25, 118, 210, 0.05));\n    border: 1px solid rgba(25, 118, 210, 0.1);\n    height: 100%;\n  }\n\n  .testimonials .testimonial-avatar img {\n    background: #ffffff;\n    border: 1px solid rgba(25, 118, 210, 0.1);\n  }\n\n  @media (max-width: 768px) {\n    .testimonial-item .testimonial-content p {\n      padding: 20px !important;\n    }\n  }\n\n  .testimonials {\n    position: relative;\n    width: 100%;\n    display: block;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  .testimonial-item {\n    margin-right: 40px;\n    outline: none !important;\n  }\n\n  .testimonial-item:last-child {\n    margin-right: 0;\n  }\n  \n  .testimonial-avatar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n\n  .testimonial-avatar-placeholder,\n  .testimonial-avatar img {\n    border-radius: 100px;\n    width: 75px;\n    height: 75px;\n    position: relative;\n    top: -40px;\n  }\n\n  .testimonial-name {\n    text-align: center;\n    font-weight: 900\n  }\n\n  .testimonial-name h3 {\n    font-weight: bold;\n    font-size: 18px;\n    color: var(--skhemata-testimonial-title-color, rgb(68,79,86));\n    position: relative;\n    top: -20px;\n  }\n\n  .testimonial-name span {\n    font-size: 14px;\n    color: #A9ABAC;\n    position: relative;\n    top: -15px;\n  }\n\n  .testimonial-content {\n    display:flex;\n  }\n\n  .testimonial-content .quote {\n    font-size: 2rem;\n    margin: 25px 10px 0 20px;\n    color: #DCE2E6;\n\n  }\n  .avatar-placeholder {\n    color: white;\n    font-size: 2.5rem;\n  }\n\n  .testimonial-content p {\n    padding: 20px 30px 20px 0;\n    color: var(--default-text-color);\n    line-height:1.3rem;\n  }\n\n  .testimonial-avatar-placeholder {\n    background: #cccccc;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .testimonial-avatar-placeholder i.fa-icon {\n    width: 40px;\n    display: inline-block;\n    color: #ffffff;\n  }\n\n  .testimonial-carousel-buttons {\n    margin-top: 15px;\n  }\n\n  .carousel-dots {\n    display: flex;\n    justify-content: center;\n  }\n  \n  .carousel-dots li {\n    margin: 0 6px;\n  }\n\n  .carousel-dots li.is-active button {\n    background-color: var(--skhemata-testimonial-dot-color-active, rgba(136, 136, 136, 1));\n  }\n  \n  .carousel-dots button {\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    background-color: var(--skhemata-testimonial-dot-color, rgba(136, 136, 136, 0.5));\n    border-radius: 100%;\n    border: none;\n  }\n"])));
/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */

var SkhemataTestimonial = /*#__PURE__*/function (_SkhemataBase) {
  _inherits(SkhemataTestimonial, _SkhemataBase);

  var _super11 = _createSuper(SkhemataTestimonial);

  function SkhemataTestimonial() {
    var _this29;

    _classCallCheck2(this, SkhemataTestimonial);

    _this29 = _super11.apply(this, arguments); // Component specific properties

    _this29.carouselInterval = 5000;
    _this29.activeTestimonial = 0;
    /**
     * Click function for carousel dots
     * */

    _this29.handleCarouselDotClick = function (event) {
      event.preventDefault();
      var elementId = event.target.value;

      _this29.makeActive(elementId);
    };
    /**
     * Make a testimonial active
     */


    _this29.makeActive = function (elementId) {
      _this29.activeTestimonial = parseInt(elementId.substring(elementId.length - 1, elementId.length), 10);

      if (_this29.shadowRoot) {
        var selectedElement = _this29.shadowRoot.querySelector(elementId);

        var carouselElement = _this29.shadowRoot.querySelector('.testimonials-carousel');

        if (carouselElement !== null) {
          carouselElement.scroll(carouselElement.clientWidth * _this29.activeTestimonial, 0);
        } // Add/remove class from slide elements


        var carouselItems = _this29.shadowRoot.querySelectorAll('.testimonial-item');

        for (var index = 0; index < carouselItems.length; index += 1) {
          if (carouselItems[index].classList.contains('is-active')) {
            carouselItems[index].classList.remove('is-active');
          }
        }

        selectedElement.classList.add('is-active'); // Add/remove class from dot navigation

        var carouselDots = _this29.shadowRoot.querySelectorAll('.carousel-dots li');

        for (var _index = 0; _index < carouselDots.length; _index += 1) {
          // Remove is-active from all elements
          if (_index === _this29.activeTestimonial) {
            carouselDots[_index].classList.add('is-active');
          } else if (carouselDots[_index].classList.contains('is-active')) {
            carouselDots[_index].classList.remove('is-active');
          }
        } // selectedElement.parentNode.classList.add('is-active');

      }
    };
    /**
     * Template for carousel items
     * */


    _this29.carouselItem = function () {
      var testimonials = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return T(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    <div class=\"testimonials-carousel\">\n      ", "\n    </div>\n  "])), testimonials.map(function (testimonial, index) {
        return T(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          <div\n            class=\"testimonial-item ", "\"\n            id=\"slide-", "\"\n          >\n            <div class=\"flex-card card-overflow raised\">\n              <div class=\"testimonial-avatar\">\n                ", "\n              </div>\n              <div class=\"testimonial-name\">\n                <h3 class=\"title is-4\">", "</h3>\n              </div>\n              <div class=\"testimonial-content\">\n                <fa-icon class=\"quote\" .icon=", "></fa-icon>\n                ", "\n              </div>\n            </div>\n          </div>\n        "])), index === 0 ? 'is-active' : '', index, testimonial.avatar ? T(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n                      <img\n                        src=\"", "\"\n                        alt=\"", "\"\n                      />\n                    "])), testimonial.avatar, testimonial.name) : T(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n                      <div class=\"testimonial-avatar-placeholder\">\n                        <fa-icon\n                          class=\"avatar-placeholder\"\n                          .icon=", "\n                        ></fa-icon>\n                      </div>\n                    "])), faUser), testimonial.name, faQuoteLeft, stringToHtml(testimonial.comment));
      }));
    };
    /**
     * Template for carousel dots
     * */


    _this29.carouselDots = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return T(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    <ul class=\"carousel-dots\">\n      ", "\n    </u>\n  "])), data.map(function (_data, index) {
        return T(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          <li class=\"", "\">\n            <button\n              value=\"#slide-", "\"\n              @click=", "\n            ></button>\n          </li>\n        "])), index === 0 ? 'is-active' : '', index, _this29.handleCarouselDotClick);
      }));
    };

    return _this29;
  }

  _createClass2(SkhemataTestimonial, [{
    key: "firstUpdated",
    value: function () {
      var _firstUpdated2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this30 = this;

        var _a;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _get(_getPrototypeOf(SkhemataTestimonial.prototype), "firstUpdated", this).call(this);

              case 2:
                if (((_a = this.configData) === null || _a === void 0 ? void 0 : _a.length) && this.carouselInterval > 0) {
                  setInterval(function () {
                    _this30.activeTestimonial = (_this30.activeTestimonial + 1) % _this30.configData.length;

                    _this30.makeActive("#slide-".concat(_this30.activeTestimonial));
                  }, this.carouselInterval);
                }

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function firstUpdated() {
        return _firstUpdated2.apply(this, arguments);
      }

      return firstUpdated;
    }()
  }, {
    key: "render",
    value: function render() {
      return T(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      <div class=\"testimonials\">\n          ", "\n        </div>\n        \n        <div class=\"testimonial-carousel-buttons\">\n          ", "\n        </div>\n      </div>\n    "])), this.carouselItem(this.configData), this.carouselDots(this.configData));
    }
  }], [{
    key: "scopedElements",
    get: function get() {
      return {
        'fa-icon': D
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [].concat(_toConsumableArray2(_get(_getPrototypeOf(SkhemataTestimonial), "styles", this)), [SkhemataTestimonialStyle]);
    }
  }]);

  return SkhemataTestimonial;
}(SkhemataBase);

exports.SkhemataTestimonial = SkhemataTestimonial;

__decorate([e$3({
  type: Number,
  attribute: 'interval'
})], SkhemataTestimonial.prototype, "carouselInterval", void 0);

__decorate([e$3({
  type: Number,
  attribute: 'active-testimonial'
})], SkhemataTestimonial.prototype, "activeTestimonial", void 0);

customElements.define('skhemata-testimonial', SkhemataTestimonial); // export { SkhemataTestimonial };
// # sourceMappingURL=index.js.map