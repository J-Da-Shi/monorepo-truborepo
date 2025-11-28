import Q from "react";
var S = { exports: {} }, m = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function K() {
  if ($) return m;
  $ = 1;
  var l = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function c(i, o, s) {
    var f = null;
    if (s !== void 0 && (f = "" + s), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      s = {};
      for (var d in o)
        d !== "key" && (s[d] = o[d]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: i,
      key: f,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return m.Fragment = E, m.jsx = c, m.jsxs = c, m;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ee() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case W:
          return "Profiler";
        case M:
          return "StrictMode";
        case q:
          return "Suspense";
        case G:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case v:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function E(e) {
      return "" + e;
    }
    function c(e) {
      try {
        E(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), E(e);
      }
    }
    function i(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === v)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        x || (x = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function F() {
      var e = l(this.type);
      return h[e] || (h[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, r, t, n, R, O) {
      var a = t.ref;
      return e = {
        $$typeof: g,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, R, O) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (H(a)) {
            for (n = 0; n < a.length; n++)
              w(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(a);
      if (j.call(r, "key")) {
        a = l(e);
        var u = Object.keys(r).filter(function(Z) {
          return Z !== "key";
        });
        n = 0 < u.length ? "{key: someKey, " + u.join(": ..., ") + ": ...}" : "{key: someKey}", Y[a + n] || (u = 0 < u.length ? "{" + u.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          u,
          a
        ), Y[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), f(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return a && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        a,
        t,
        o(),
        R,
        O
      );
    }
    function w(e) {
      y(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === v && (e._payload.status === "fulfilled" ? y(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    var b = Q, g = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), V = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), T = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, H = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var x, h = {}, N = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), C = k(i(s)), Y = {};
    _.Fragment = p, _.jsx = function(e, r, t) {
      var n = 1e4 > T.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : N,
        n ? k(i(e)) : C
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > T.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : N,
        n ? k(i(e)) : C
      );
    };
  }()), _;
}
process.env.NODE_ENV === "production" ? S.exports = K() : S.exports = ee();
var re = S.exports;
const ne = ({ children: l }) => /* @__PURE__ */ re.jsx("button", { style: { padding: "8px 16px", background: "#007bff", color: "white" }, children: l });
export {
  ne as Button
};
