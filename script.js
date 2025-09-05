function Sc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
function kc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ec = {
    exports: {}
}
  , Di = {}
  , Nc = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul = Symbol.for("react.element")
  , Ep = Symbol.for("react.portal")
  , Np = Symbol.for("react.fragment")
  , Cp = Symbol.for("react.strict_mode")
  , jp = Symbol.for("react.profiler")
  , Pp = Symbol.for("react.provider")
  , _p = Symbol.for("react.context")
  , Rp = Symbol.for("react.forward_ref")
  , Lp = Symbol.for("react.suspense")
  , Tp = Symbol.for("react.memo")
  , Dp = Symbol.for("react.lazy")
  , As = Symbol.iterator;
function Mp(e) {
    return e === null || typeof e != "object" ? null : (e = As && e[As] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Cc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , jc = Object.assign
  , Pc = {};
function dr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Pc,
    this.updater = n || Cc
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
dr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function _c() {}
_c.prototype = dr.prototype;
function _a(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Pc,
    this.updater = n || Cc
}
var Ra = _a.prototype = new _c;
Ra.constructor = _a;
jc(Ra, dr.prototype);
Ra.isPureReactComponent = !0;
var $s = Array.isArray
  , Rc = Object.prototype.hasOwnProperty
  , La = {
    current: null
}
  , Lc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Tc(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Rc.call(t, r) && !Lc.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        l.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: ul,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: La.current
    }
}
function zp(e, t) {
    return {
        $$typeof: ul,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ta(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ul
}
function Op(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Bs = /\/+/g;
function to(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Op("" + e.key) : t.toString(36)
}
function Bl(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ul:
            case Ep:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + to(o, 0) : r,
        $s(l) ? (n = "",
        e != null && (n = e.replace(Bs, "$&/") + "/"),
        Bl(l, t, n, "", function(u) {
            return u
        })) : l != null && (Ta(l) && (l = zp(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Bs, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    $s(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var s = r + to(i, a);
            o += Bl(i, t, n, s, l)
        }
    else if (s = Mp(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + to(i, a++),
            o += Bl(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function El(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Bl(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function Fp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var $e = {
    current: null
}
  , Vl = {
    transition: null
}
  , Ip = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: Vl,
    ReactCurrentOwner: La
};
function Dc() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: El,
    forEach: function(e, t, n) {
        El(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return El(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return El(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ta(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = dr;
K.Fragment = Np;
K.Profiler = jp;
K.PureComponent = _a;
K.StrictMode = Cp;
K.Suspense = Lp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
K.act = Dc;
K.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = jc({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = La.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            Rc.call(t, s) && !Lc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ul,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
K.createContext = function(e) {
    return e = {
        $$typeof: _p,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Pp,
        _context: e
    },
    e.Consumer = e
}
;
K.createElement = Tc;
K.createFactory = function(e) {
    var t = Tc.bind(null, e);
    return t.type = e,
    t
}
;
K.createRef = function() {
    return {
        current: null
    }
}
;
K.forwardRef = function(e) {
    return {
        $$typeof: Rp,
        render: e
    }
}
;
K.isValidElement = Ta;
K.lazy = function(e) {
    return {
        $$typeof: Dp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Fp
    }
}
;
K.memo = function(e, t) {
    return {
        $$typeof: Tp,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
K.startTransition = function(e) {
    var t = Vl.transition;
    Vl.transition = {};
    try {
        e()
    } finally {
        Vl.transition = t
    }
}
;
K.unstable_act = Dc;
K.useCallback = function(e, t) {
    return $e.current.useCallback(e, t)
}
;
K.useContext = function(e) {
    return $e.current.useContext(e)
}
;
K.useDebugValue = function() {}
;
K.useDeferredValue = function(e) {
    return $e.current.useDeferredValue(e)
}
;
K.useEffect = function(e, t) {
    return $e.current.useEffect(e, t)
}
;
K.useId = function() {
    return $e.current.useId()
}
;
K.useImperativeHandle = function(e, t, n) {
    return $e.current.useImperativeHandle(e, t, n)
}
;
K.useInsertionEffect = function(e, t) {
    return $e.current.useInsertionEffect(e, t)
}
;
K.useLayoutEffect = function(e, t) {
    return $e.current.useLayoutEffect(e, t)
}
;
K.useMemo = function(e, t) {
    return $e.current.useMemo(e, t)
}
;
K.useReducer = function(e, t, n) {
    return $e.current.useReducer(e, t, n)
}
;
K.useRef = function(e) {
    return $e.current.useRef(e)
}
;
K.useState = function(e) {
    return $e.current.useState(e)
}
;
K.useSyncExternalStore = function(e, t, n) {
    return $e.current.useSyncExternalStore(e, t, n)
}
;
K.useTransition = function() {
    return $e.current.useTransition()
}
;
K.version = "18.3.1";
Nc.exports = K;
var _ = Nc.exports;
const bt = kc(_)
  , Up = Sc({
    __proto__: null,
    default: bt
}, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ap = _
  , $p = Symbol.for("react.element")
  , Bp = Symbol.for("react.fragment")
  , Vp = Object.prototype.hasOwnProperty
  , Hp = Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Wp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mc(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Vp.call(t, r) && !Wp.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: $p,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Hp.current
    }
}
Di.Fragment = Bp;
Di.jsx = Mc;
Di.jsxs = Mc;
Ec.exports = Di;
var v = Ec.exports
  , zc = {
    exports: {}
}
  , et = {}
  , Oc = {
    exports: {}
}
  , Fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, V) {
        var H = T.length;
        T.push(V);
        e: for (; 0 < H; ) {
            var te = H - 1 >>> 1
              , ne = T[te];
            if (0 < l(ne, V))
                T[te] = V,
                T[H] = ne,
                H = te;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var V = T[0]
          , H = T.pop();
        if (H !== V) {
            T[0] = H;
            e: for (var te = 0, ne = T.length, ct = ne >>> 1; te < ct; ) {
                var Ye = 2 * (te + 1) - 1
                  , Oe = T[Ye]
                  , Fe = Ye + 1
                  , nt = T[Fe];
                if (0 > l(Oe, H))
                    Fe < ne && 0 > l(nt, Oe) ? (T[te] = nt,
                    T[Fe] = H,
                    te = Fe) : (T[te] = Oe,
                    T[Ye] = H,
                    te = Ye);
                else if (Fe < ne && 0 > l(nt, H))
                    T[te] = nt,
                    T[Fe] = H,
                    te = Fe;
                else
                    break e
            }
        }
        return V
    }
    function l(T, V) {
        var H = T.sortIndex - V.sortIndex;
        return H !== 0 ? H : T.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var s = []
      , u = []
      , f = 1
      , d = null
      , p = 3
      , w = !1
      , S = !1
      , E = !1
      , R = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(T) {
        for (var V = n(u); V !== null; ) {
            if (V.callback === null)
                r(u);
            else if (V.startTime <= T)
                r(u),
                V.sortIndex = V.expirationTime,
                t(s, V);
            else
                break;
            V = n(u)
        }
    }
    function N(T) {
        if (E = !1,
        y(T),
        !S)
            if (n(s) !== null)
                S = !0,
                It(L);
            else {
                var V = n(u);
                V !== null && Ut(N, V.startTime - T)
            }
    }
    function L(T, V) {
        S = !1,
        E && (E = !1,
        m(j),
        j = -1),
        w = !0;
        var H = p;
        try {
            for (y(V),
            d = n(s); d !== null && (!(d.expirationTime > V) || T && !ee()); ) {
                var te = d.callback;
                if (typeof te == "function") {
                    d.callback = null,
                    p = d.priorityLevel;
                    var ne = te(d.expirationTime <= V);
                    V = e.unstable_now(),
                    typeof ne == "function" ? d.callback = ne : d === n(s) && r(s),
                    y(V)
                } else
                    r(s);
                d = n(s)
            }
            if (d !== null)
                var ct = !0;
            else {
                var Ye = n(u);
                Ye !== null && Ut(N, Ye.startTime - V),
                ct = !1
            }
            return ct
        } finally {
            d = null,
            p = H,
            w = !1
        }
    }
    var O = !1
      , g = null
      , j = -1
      , B = 5
      , D = -1;
    function ee() {
        return !(e.unstable_now() - D < B)
    }
    function re() {
        if (g !== null) {
            var T = e.unstable_now();
            D = T;
            var V = !0;
            try {
                V = g(!0, T)
            } finally {
                V ? Se() : (O = !1,
                g = null)
            }
        } else
            O = !1
    }
    var Se;
    if (typeof c == "function")
        Se = function() {
            c(re)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var je = new MessageChannel
          , ut = je.port2;
        je.port1.onmessage = re,
        Se = function() {
            ut.postMessage(null)
        }
    } else
        Se = function() {
            R(re, 0)
        }
        ;
    function It(T) {
        g = T,
        O || (O = !0,
        Se())
    }
    function Ut(T, V) {
        j = R(function() {
            T(e.unstable_now())
        }, V)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || w || (S = !0,
        It(L))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(T) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = p
        }
        var H = p;
        p = V;
        try {
            return T()
        } finally {
            p = H
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, V) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var H = p;
        p = T;
        try {
            return V()
        } finally {
            p = H
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, V, H) {
        var te = e.unstable_now();
        switch (typeof H == "object" && H !== null ? (H = H.delay,
        H = typeof H == "number" && 0 < H ? te + H : te) : H = te,
        T) {
        case 1:
            var ne = -1;
            break;
        case 2:
            ne = 250;
            break;
        case 5:
            ne = 1073741823;
            break;
        case 4:
            ne = 1e4;
            break;
        default:
            ne = 5e3
        }
        return ne = H + ne,
        T = {
            id: f++,
            callback: V,
            priorityLevel: T,
            startTime: H,
            expirationTime: ne,
            sortIndex: -1
        },
        H > te ? (T.sortIndex = H,
        t(u, T),
        n(s) === null && T === n(u) && (E ? (m(j),
        j = -1) : E = !0,
        Ut(N, H - te))) : (T.sortIndex = ne,
        t(s, T),
        S || w || (S = !0,
        It(L))),
        T
    }
    ,
    e.unstable_shouldYield = ee,
    e.unstable_wrapCallback = function(T) {
        var V = p;
        return function() {
            var H = p;
            p = V;
            try {
                return T.apply(this, arguments)
            } finally {
                p = H
            }
        }
    }
}
)(Fc);
Oc.exports = Fc;
var Qp = Oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp = _
  , qe = Qp;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ic = new Set
  , Wr = {};
function Tn(e, t) {
    rr(e, t),
    rr(e + "Capture", t)
}
function rr(e, t) {
    for (Wr[e] = t,
    e = 0; e < t.length; e++)
        Ic.add(t[e])
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Mo = Object.prototype.hasOwnProperty
  , Xp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Vs = {}
  , Hs = {};
function Yp(e) {
    return Mo.call(Hs, e) ? !0 : Mo.call(Vs, e) ? !1 : Xp.test(e) ? Hs[e] = !0 : (Vs[e] = !0,
    !1)
}
function Gp(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function bp(e, t, n, r) {
    if (t === null || typeof t > "u" || Gp(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Le[e] = new Be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Le[t] = new Be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Le[e] = new Be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Le[e] = new Be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Le[e] = new Be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Le[e] = new Be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Le[e] = new Be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Le[e] = new Be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Le[e] = new Be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Da = /[\-:]([a-z])/g;
function Ma(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Da, Ma);
    Le[t] = new Be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Da, Ma);
    Le[t] = new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Da, Ma);
    Le[t] = new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Le[e] = new Be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Le.xlinkHref = new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Le[e] = new Be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function za(e, t, n, r) {
    var l = Le.hasOwnProperty(t) ? Le[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (bp(t, n, l, r) && (n = null),
    r || l === null ? Yp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ft = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Nl = Symbol.for("react.element")
  , An = Symbol.for("react.portal")
  , $n = Symbol.for("react.fragment")
  , Oa = Symbol.for("react.strict_mode")
  , zo = Symbol.for("react.profiler")
  , Uc = Symbol.for("react.provider")
  , Ac = Symbol.for("react.context")
  , Fa = Symbol.for("react.forward_ref")
  , Oo = Symbol.for("react.suspense")
  , Fo = Symbol.for("react.suspense_list")
  , Ia = Symbol.for("react.memo")
  , Ht = Symbol.for("react.lazy")
  , $c = Symbol.for("react.offscreen")
  , Ws = Symbol.iterator;
function xr(e) {
    return e === null || typeof e != "object" ? null : (e = Ws && e[Ws] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fe = Object.assign, no;
function Lr(e) {
    if (no === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            no = t && t[1] || ""
        }
    return `
` + no + e
}
var ro = !1;
function lo(e, t) {
    if (!e || ro)
        return "";
    ro = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || l[o] !== i[a]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        ro = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Lr(e) : ""
}
function Zp(e) {
    switch (e.tag) {
    case 5:
        return Lr(e.type);
    case 16:
        return Lr("Lazy");
    case 13:
        return Lr("Suspense");
    case 19:
        return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = lo(e.type, !1),
        e;
    case 11:
        return e = lo(e.type.render, !1),
        e;
    case 1:
        return e = lo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Io(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case $n:
        return "Fragment";
    case An:
        return "Portal";
    case zo:
        return "Profiler";
    case Oa:
        return "StrictMode";
    case Oo:
        return "Suspense";
    case Fo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ac:
            return (e.displayName || "Context") + ".Consumer";
        case Uc:
            return (e._context.displayName || "Context") + ".Provider";
        case Fa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ia:
            return t = e.displayName || null,
            t !== null ? t : Io(e.type) || "Memo";
        case Ht:
            t = e._payload,
            e = e._init;
            try {
                return Io(e(t))
            } catch {}
        }
    return null
}
function Jp(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Io(t);
    case 8:
        return t === Oa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function an(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Bc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function qp(e) {
    var t = Bc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Cl(e) {
    e._valueTracker || (e._valueTracker = qp(e))
}
function Vc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Bc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ei(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Uo(e, t) {
    var n = t.checked;
    return fe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Qs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = an(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Hc(e, t) {
    t = t.checked,
    t != null && za(e, "checked", t, !1)
}
function Ao(e, t) {
    Hc(e, t);
    var n = an(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $o(e, t.type, n) : t.hasOwnProperty("defaultValue") && $o(e, t.type, an(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ks(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function $o(e, t, n) {
    (t !== "number" || ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Tr = Array.isArray;
function Zn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + an(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function Bo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return fe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Xs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (Tr(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: an(n)
    }
}
function Wc(e, t) {
    var n = an(t.value)
      , r = an(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ys(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Qc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Vo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var jl, Kc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (jl = jl || document.createElement("div"),
        jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = jl.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Qr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , eh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
    eh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Or[t] = Or[e]
    })
});
function Xc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px"
}
function Yc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Xc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var th = fe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ho(e, t) {
    if (t) {
        if (th[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function Wo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Qo = null;
function Ua(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ko = null
  , Jn = null
  , qn = null;
function Gs(e) {
    if (e = fl(e)) {
        if (typeof Ko != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = Ii(t),
        Ko(e.stateNode, e.type, t))
    }
}
function Gc(e) {
    Jn ? qn ? qn.push(e) : qn = [e] : Jn = e
}
function bc() {
    if (Jn) {
        var e = Jn
          , t = qn;
        if (qn = Jn = null,
        Gs(e),
        t)
            for (e = 0; e < t.length; e++)
                Gs(t[e])
    }
}
function Zc(e, t) {
    return e(t)
}
function Jc() {}
var io = !1;
function qc(e, t, n) {
    if (io)
        return e(t, n);
    io = !0;
    try {
        return Zc(e, t, n)
    } finally {
        io = !1,
        (Jn !== null || qn !== null) && (Jc(),
        bc())
    }
}
function Kr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ii(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var Xo = !1;
if (Dt)
    try {
        var wr = {};
        Object.defineProperty(wr, "passive", {
            get: function() {
                Xo = !0
            }
        }),
        window.addEventListener("test", wr, wr),
        window.removeEventListener("test", wr, wr)
    } catch {
        Xo = !1
    }
function nh(e, t, n, r, l, i, o, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var Fr = !1
  , ti = null
  , ni = !1
  , Yo = null
  , rh = {
    onError: function(e) {
        Fr = !0,
        ti = e
    }
};
function lh(e, t, n, r, l, i, o, a, s) {
    Fr = !1,
    ti = null,
    nh.apply(rh, arguments)
}
function ih(e, t, n, r, l, i, o, a, s) {
    if (lh.apply(this, arguments),
    Fr) {
        if (Fr) {
            var u = ti;
            Fr = !1,
            ti = null
        } else
            throw Error(P(198));
        ni || (ni = !0,
        Yo = u)
    }
}
function Dn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ed(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function bs(e) {
    if (Dn(e) !== e)
        throw Error(P(188))
}
function oh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dn(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return bs(l),
                    e;
                if (i === r)
                    return bs(l),
                    t;
                i = i.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, a = l.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function td(e) {
    return e = oh(e),
    e !== null ? nd(e) : null
}
function nd(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = nd(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var rd = qe.unstable_scheduleCallback
  , Zs = qe.unstable_cancelCallback
  , ah = qe.unstable_shouldYield
  , sh = qe.unstable_requestPaint
  , ye = qe.unstable_now
  , uh = qe.unstable_getCurrentPriorityLevel
  , Aa = qe.unstable_ImmediatePriority
  , ld = qe.unstable_UserBlockingPriority
  , ri = qe.unstable_NormalPriority
  , ch = qe.unstable_LowPriority
  , id = qe.unstable_IdlePriority
  , Mi = null
  , Et = null;
function dh(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
        try {
            Et.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var vt = Math.clz32 ? Math.clz32 : hh
  , fh = Math.log
  , ph = Math.LN2;
function hh(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (fh(e) / ph | 0) | 0
}
var Pl = 64
  , _l = 4194304;
function Dr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function li(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = Dr(a) : (i &= o,
        i !== 0 && (r = Dr(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = Dr(o) : i !== 0 && (r = Dr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - vt(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function mh(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function vh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - vt(i)
          , a = 1 << o
          , s = l[o];
        s === -1 ? (!(a & n) || a & r) && (l[o] = mh(a, t)) : s <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Go(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function od() {
    var e = Pl;
    return Pl <<= 1,
    !(Pl & 4194240) && (Pl = 64),
    e
}
function oo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function cl(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - vt(t),
    e[t] = n
}
function yh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - vt(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function $a(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - vt(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var q = 0;
function ad(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var sd, Ba, ud, cd, dd, bo = !1, Rl = [], Zt = null, Jt = null, qt = null, Xr = new Map, Yr = new Map, Qt = [], gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Js(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Zt = null;
        break;
    case "dragenter":
    case "dragleave":
        Jt = null;
        break;
    case "mouseover":
    case "mouseout":
        qt = null;
        break;
    case "pointerover":
    case "pointerout":
        Xr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Yr.delete(t.pointerId)
    }
}
function Sr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = fl(t),
    t !== null && Ba(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function xh(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return Zt = Sr(Zt, e, t, n, r, l),
        !0;
    case "dragenter":
        return Jt = Sr(Jt, e, t, n, r, l),
        !0;
    case "mouseover":
        return qt = Sr(qt, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return Xr.set(i, Sr(Xr.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        Yr.set(i, Sr(Yr.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function fd(e) {
    var t = wn(e.target);
    if (t !== null) {
        var n = Dn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ed(n),
                t !== null) {
                    e.blockedOn = t,
                    dd(e.priority, function() {
                        ud(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Hl(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Qo = r,
            n.target.dispatchEvent(r),
            Qo = null
        } else
            return t = fl(n),
            t !== null && Ba(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function qs(e, t, n) {
    Hl(e) && n.delete(t)
}
function wh() {
    bo = !1,
    Zt !== null && Hl(Zt) && (Zt = null),
    Jt !== null && Hl(Jt) && (Jt = null),
    qt !== null && Hl(qt) && (qt = null),
    Xr.forEach(qs),
    Yr.forEach(qs)
}
function kr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    bo || (bo = !0,
    qe.unstable_scheduleCallback(qe.unstable_NormalPriority, wh)))
}
function Gr(e) {
    function t(l) {
        return kr(l, e)
    }
    if (0 < Rl.length) {
        kr(Rl[0], e);
        for (var n = 1; n < Rl.length; n++) {
            var r = Rl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Zt !== null && kr(Zt, e),
    Jt !== null && kr(Jt, e),
    qt !== null && kr(qt, e),
    Xr.forEach(t),
    Yr.forEach(t),
    n = 0; n < Qt.length; n++)
        r = Qt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0],
    n.blockedOn === null); )
        fd(n),
        n.blockedOn === null && Qt.shift()
}
var er = Ft.ReactCurrentBatchConfig
  , ii = !0;
function Sh(e, t, n, r) {
    var l = q
      , i = er.transition;
    er.transition = null;
    try {
        q = 1,
        Va(e, t, n, r)
    } finally {
        q = l,
        er.transition = i
    }
}
function kh(e, t, n, r) {
    var l = q
      , i = er.transition;
    er.transition = null;
    try {
        q = 4,
        Va(e, t, n, r)
    } finally {
        q = l,
        er.transition = i
    }
}
function Va(e, t, n, r) {
    if (ii) {
        var l = Zo(e, t, n, r);
        if (l === null)
            yo(e, t, r, oi, n),
            Js(e, r);
        else if (xh(l, e, t, n, r))
            r.stopPropagation();
        else if (Js(e, r),
        t & 4 && -1 < gh.indexOf(e)) {
            for (; l !== null; ) {
                var i = fl(l);
                if (i !== null && sd(i),
                i = Zo(e, t, n, r),
                i === null && yo(e, t, r, oi, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            yo(e, t, r, null, n)
    }
}
var oi = null;
function Zo(e, t, n, r) {
    if (oi = null,
    e = Ua(r),
    e = wn(e),
    e !== null)
        if (t = Dn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ed(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return oi = e,
    null
}
function pd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (uh()) {
        case Aa:
            return 1;
        case ld:
            return 4;
        case ri:
        case ch:
            return 16;
        case id:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Xt = null
  , Ha = null
  , Wl = null;
function hd() {
    if (Wl)
        return Wl;
    var e, t = Ha, n = t.length, r, l = "value"in Xt ? Xt.value : Xt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Wl = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Ql(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ll() {
    return !0
}
function eu() {
    return !1
}
function tt(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ll : eu,
        this.isPropagationStopped = eu,
        this
    }
    return fe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ll)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ll)
        },
        persist: function() {},
        isPersistent: Ll
    }),
    t
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Wa = tt(fr), dl = fe({}, fr, {
    view: 0,
    detail: 0
}), Eh = tt(dl), ao, so, Er, zi = fe({}, dl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qa,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (ao = e.screenX - Er.screenX,
        so = e.screenY - Er.screenY) : so = ao = 0,
        Er = e),
        ao)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : so
    }
}), tu = tt(zi), Nh = fe({}, zi, {
    dataTransfer: 0
}), Ch = tt(Nh), jh = fe({}, dl, {
    relatedTarget: 0
}), uo = tt(jh), Ph = fe({}, fr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), _h = tt(Ph), Rh = fe({}, fr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Lh = tt(Rh), Th = fe({}, fr, {
    data: 0
}), nu = tt(Th), Dh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Mh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, zh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Oh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zh[e]) ? !!t[e] : !1
}
function Qa() {
    return Oh
}
var Fh = fe({}, dl, {
    key: function(e) {
        if (e.key) {
            var t = Dh[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ql(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mh[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qa,
    charCode: function(e) {
        return e.type === "keypress" ? Ql(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Ih = tt(Fh)
  , Uh = fe({}, zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ru = tt(Uh)
  , Ah = fe({}, dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qa
})
  , $h = tt(Ah)
  , Bh = fe({}, fr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Vh = tt(Bh)
  , Hh = fe({}, zi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Wh = tt(Hh)
  , Qh = [9, 13, 27, 32]
  , Ka = Dt && "CompositionEvent"in window
  , Ir = null;
Dt && "documentMode"in document && (Ir = document.documentMode);
var Kh = Dt && "TextEvent"in window && !Ir
  , md = Dt && (!Ka || Ir && 8 < Ir && 11 >= Ir)
  , lu = " "
  , iu = !1;
function vd(e, t) {
    switch (e) {
    case "keyup":
        return Qh.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function yd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Bn = !1;
function Xh(e, t) {
    switch (e) {
    case "compositionend":
        return yd(t);
    case "keypress":
        return t.which !== 32 ? null : (iu = !0,
        lu);
    case "textInput":
        return e = t.data,
        e === lu && iu ? null : e;
    default:
        return null
    }
}
function Yh(e, t) {
    if (Bn)
        return e === "compositionend" || !Ka && vd(e, t) ? (e = hd(),
        Wl = Ha = Xt = null,
        Bn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return md && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Gh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gh[e.type] : t === "textarea"
}
function gd(e, t, n, r) {
    Gc(r),
    t = ai(t, "onChange"),
    0 < t.length && (n = new Wa("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ur = null
  , br = null;
function bh(e) {
    Rd(e, 0)
}
function Oi(e) {
    var t = Wn(e);
    if (Vc(t))
        return e
}
function Zh(e, t) {
    if (e === "change")
        return t
}
var xd = !1;
if (Dt) {
    var co;
    if (Dt) {
        var fo = "oninput"in document;
        if (!fo) {
            var au = document.createElement("div");
            au.setAttribute("oninput", "return;"),
            fo = typeof au.oninput == "function"
        }
        co = fo
    } else
        co = !1;
    xd = co && (!document.documentMode || 9 < document.documentMode)
}
function su() {
    Ur && (Ur.detachEvent("onpropertychange", wd),
    br = Ur = null)
}
function wd(e) {
    if (e.propertyName === "value" && Oi(br)) {
        var t = [];
        gd(t, br, e, Ua(e)),
        qc(bh, t)
    }
}
function Jh(e, t, n) {
    e === "focusin" ? (su(),
    Ur = t,
    br = n,
    Ur.attachEvent("onpropertychange", wd)) : e === "focusout" && su()
}
function qh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Oi(br)
}
function em(e, t) {
    if (e === "click")
        return Oi(t)
}
function tm(e, t) {
    if (e === "input" || e === "change")
        return Oi(t)
}
function nm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gt = typeof Object.is == "function" ? Object.is : nm;
function Zr(e, t) {
    if (gt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Mo.call(t, l) || !gt(e[l], t[l]))
            return !1
    }
    return !0
}
function uu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function cu(e, t) {
    var n = uu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = uu(n)
    }
}
function Sd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function kd() {
    for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ei(e.document)
    }
    return t
}
function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function rm(e) {
    var t = kd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Xa(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = cu(n, i);
                var o = cu(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var lm = Dt && "documentMode"in document && 11 >= document.documentMode
  , Vn = null
  , Jo = null
  , Ar = null
  , qo = !1;
function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qo || Vn == null || Vn !== ei(r) || (r = Vn,
    "selectionStart"in r && Xa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ar && Zr(Ar, r) || (Ar = r,
    r = ai(Jo, "onSelect"),
    0 < r.length && (t = new Wa("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Vn)))
}
function Tl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Hn = {
    animationend: Tl("Animation", "AnimationEnd"),
    animationiteration: Tl("Animation", "AnimationIteration"),
    animationstart: Tl("Animation", "AnimationStart"),
    transitionend: Tl("Transition", "TransitionEnd")
}
  , po = {}
  , Ed = {};
Dt && (Ed = document.createElement("div").style,
"AnimationEvent"in window || (delete Hn.animationend.animation,
delete Hn.animationiteration.animation,
delete Hn.animationstart.animation),
"TransitionEvent"in window || delete Hn.transitionend.transition);
function Fi(e) {
    if (po[e])
        return po[e];
    if (!Hn[e])
        return e;
    var t = Hn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ed)
            return po[e] = t[n];
    return e
}
var Nd = Fi("animationend")
  , Cd = Fi("animationiteration")
  , jd = Fi("animationstart")
  , Pd = Fi("transitionend")
  , _d = new Map
  , fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
    _d.set(e, t),
    Tn(t, [e])
}
for (var ho = 0; ho < fu.length; ho++) {
    var mo = fu[ho]
      , im = mo.toLowerCase()
      , om = mo[0].toUpperCase() + mo.slice(1);
    un(im, "on" + om)
}
un(Nd, "onAnimationEnd");
un(Cd, "onAnimationIteration");
un(jd, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Pd, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , am = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    ih(r, t, void 0, e),
    e.currentTarget = null
}
function Rd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    pu(l, a, u),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    pu(l, a, u),
                    i = s
                }
        }
    }
    if (ni)
        throw e = Yo,
        ni = !1,
        Yo = null,
        e
}
function oe(e, t) {
    var n = t[la];
    n === void 0 && (n = t[la] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ld(t, e, 2, !1),
    n.add(r))
}
function vo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ld(n, e, r, t)
}
var Dl = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
    if (!e[Dl]) {
        e[Dl] = !0,
        Ic.forEach(function(n) {
            n !== "selectionchange" && (am.has(n) || vo(n, !1, e),
            vo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Dl] || (t[Dl] = !0,
        vo("selectionchange", !1, t))
    }
}
function Ld(e, t, n, r) {
    switch (pd(t)) {
    case 1:
        var l = Sh;
        break;
    case 4:
        l = kh;
        break;
    default:
        l = Va
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !Xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function yo(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = wn(a),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    qc(function() {
        var u = i
          , f = Ua(n)
          , d = [];
        e: {
            var p = _d.get(e);
            if (p !== void 0) {
                var w = Wa
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Ql(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Ih;
                    break;
                case "focusin":
                    S = "focus",
                    w = uo;
                    break;
                case "focusout":
                    S = "blur",
                    w = uo;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = uo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = tu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = Ch;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = $h;
                    break;
                case Nd:
                case Cd:
                case jd:
                    w = _h;
                    break;
                case Pd:
                    w = Vh;
                    break;
                case "scroll":
                    w = Eh;
                    break;
                case "wheel":
                    w = Wh;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Lh;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = ru
                }
                var E = (t & 4) !== 0
                  , R = !E && e === "scroll"
                  , m = E ? p !== null ? p + "Capture" : null : p;
                E = [];
                for (var c = u, y; c !== null; ) {
                    y = c;
                    var N = y.stateNode;
                    if (y.tag === 5 && N !== null && (y = N,
                    m !== null && (N = Kr(c, m),
                    N != null && E.push(qr(c, N, y)))),
                    R)
                        break;
                    c = c.return
                }
                0 < E.length && (p = new w(p,S,null,n,f),
                d.push({
                    event: p,
                    listeners: E
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                p && n !== Qo && (S = n.relatedTarget || n.fromElement) && (wn(S) || S[Mt]))
                    break e;
                if ((w || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window,
                w ? (S = n.relatedTarget || n.toElement,
                w = u,
                S = S ? wn(S) : null,
                S !== null && (R = Dn(S),
                S !== R || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null,
                S = u),
                w !== S)) {
                    if (E = tu,
                    N = "onMouseLeave",
                    m = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (E = ru,
                    N = "onPointerLeave",
                    m = "onPointerEnter",
                    c = "pointer"),
                    R = w == null ? p : Wn(w),
                    y = S == null ? p : Wn(S),
                    p = new E(N,c + "leave",w,n,f),
                    p.target = R,
                    p.relatedTarget = y,
                    N = null,
                    wn(f) === u && (E = new E(m,c + "enter",S,n,f),
                    E.target = y,
                    E.relatedTarget = R,
                    N = E),
                    R = N,
                    w && S)
                        t: {
                            for (E = w,
                            m = S,
                            c = 0,
                            y = E; y; y = In(y))
                                c++;
                            for (y = 0,
                            N = m; N; N = In(N))
                                y++;
                            for (; 0 < c - y; )
                                E = In(E),
                                c--;
                            for (; 0 < y - c; )
                                m = In(m),
                                y--;
                            for (; c--; ) {
                                if (E === m || m !== null && E === m.alternate)
                                    break t;
                                E = In(E),
                                m = In(m)
                            }
                            E = null
                        }
                    else
                        E = null;
                    w !== null && hu(d, p, w, E, !1),
                    S !== null && R !== null && hu(d, R, S, E, !0)
                }
            }
            e: {
                if (p = u ? Wn(u) : window,
                w = p.nodeName && p.nodeName.toLowerCase(),
                w === "select" || w === "input" && p.type === "file")
                    var L = Zh;
                else if (ou(p))
                    if (xd)
                        L = tm;
                    else {
                        L = qh;
                        var O = Jh
                    }
                else
                    (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (L = em);
                if (L && (L = L(e, u))) {
                    gd(d, L, n, f);
                    break e
                }
                O && O(e, p, u),
                e === "focusout" && (O = p._wrapperState) && O.controlled && p.type === "number" && $o(p, "number", p.value)
            }
            switch (O = u ? Wn(u) : window,
            e) {
            case "focusin":
                (ou(O) || O.contentEditable === "true") && (Vn = O,
                Jo = u,
                Ar = null);
                break;
            case "focusout":
                Ar = Jo = Vn = null;
                break;
            case "mousedown":
                qo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                qo = !1,
                du(d, n, f);
                break;
            case "selectionchange":
                if (lm)
                    break;
            case "keydown":
            case "keyup":
                du(d, n, f)
            }
            var g;
            if (Ka)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                Bn ? vd(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (md && n.locale !== "ko" && (Bn || j !== "onCompositionStart" ? j === "onCompositionEnd" && Bn && (g = hd()) : (Xt = f,
            Ha = "value"in Xt ? Xt.value : Xt.textContent,
            Bn = !0)),
            O = ai(u, j),
            0 < O.length && (j = new nu(j,e,null,n,f),
            d.push({
                event: j,
                listeners: O
            }),
            g ? j.data = g : (g = yd(n),
            g !== null && (j.data = g)))),
            (g = Kh ? Xh(e, n) : Yh(e, n)) && (u = ai(u, "onBeforeInput"),
            0 < u.length && (f = new nu("onBeforeInput","beforeinput",null,n,f),
            d.push({
                event: f,
                listeners: u
            }),
            f.data = g))
        }
        Rd(d, t)
    })
}
function qr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = Kr(e, n),
        i != null && r.unshift(qr(e, i, l)),
        i = Kr(e, t),
        i != null && r.push(qr(e, i, l))),
        e = e.return
    }
    return r
}
function In(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function hu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        l ? (s = Kr(n, i),
        s != null && o.unshift(qr(n, s, a))) : l || (s = Kr(n, i),
        s != null && o.push(qr(n, s, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var sm = /\r\n?/g
  , um = /\u0000|\uFFFD/g;
function mu(e) {
    return (typeof e == "string" ? e : "" + e).replace(sm, `
`).replace(um, "")
}
function Ml(e, t, n) {
    if (t = mu(t),
    mu(e) !== t && n)
        throw Error(P(425))
}
function si() {}
var ea = null
  , ta = null;
function na(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ra = typeof setTimeout == "function" ? setTimeout : void 0
  , cm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , vu = typeof Promise == "function" ? Promise : void 0
  , dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof vu < "u" ? function(e) {
    return vu.resolve(null).then(e).catch(fm)
}
: ra;
function fm(e) {
    setTimeout(function() {
        throw e
    })
}
function go(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Gr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Gr(t)
}
function en(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var pr = Math.random().toString(36).slice(2)
  , kt = "__reactFiber$" + pr
  , el = "__reactProps$" + pr
  , Mt = "__reactContainer$" + pr
  , la = "__reactEvents$" + pr
  , pm = "__reactListeners$" + pr
  , hm = "__reactHandles$" + pr;
function wn(e) {
    var t = e[kt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Mt] || n[kt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = yu(e); e !== null; ) {
                    if (n = e[kt])
                        return n;
                    e = yu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function fl(e) {
    return e = e[kt] || e[Mt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Wn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function Ii(e) {
    return e[el] || null
}
var ia = []
  , Qn = -1;
function cn(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > Qn || (e.current = ia[Qn],
    ia[Qn] = null,
    Qn--)
}
function ie(e, t) {
    Qn++,
    ia[Qn] = e.current,
    e.current = t
}
var sn = {}
  , ze = cn(sn)
  , Qe = cn(!1)
  , jn = sn;
function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function Ke(e) {
    return e = e.childContextTypes,
    e != null
}
function ui() {
    ae(Qe),
    ae(ze)
}
function gu(e, t, n) {
    if (ze.current !== sn)
        throw Error(P(168));
    ie(ze, t),
    ie(Qe, n)
}
function Td(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(P(108, Jp(e) || "Unknown", l));
    return fe({}, n, r)
}
function ci(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn,
    jn = ze.current,
    ie(ze, e),
    ie(Qe, Qe.current),
    !0
}
function xu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = Td(e, t, jn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(Qe),
    ae(ze),
    ie(ze, e)) : ae(Qe),
    ie(Qe, n)
}
var _t = null
  , Ui = !1
  , xo = !1;
function Dd(e) {
    _t === null ? _t = [e] : _t.push(e)
}
function mm(e) {
    Ui = !0,
    Dd(e)
}
function dn() {
    if (!xo && _t !== null) {
        xo = !0;
        var e = 0
          , t = q;
        try {
            var n = _t;
            for (q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            _t = null,
            Ui = !1
        } catch (l) {
            throw _t !== null && (_t = _t.slice(e + 1)),
            rd(Aa, dn),
            l
        } finally {
            q = t,
            xo = !1
        }
    }
    return null
}
var Kn = []
  , Xn = 0
  , di = null
  , fi = 0
  , rt = []
  , lt = 0
  , Pn = null
  , Rt = 1
  , Lt = "";
function vn(e, t) {
    Kn[Xn++] = fi,
    Kn[Xn++] = di,
    di = e,
    fi = t
}
function Md(e, t, n) {
    rt[lt++] = Rt,
    rt[lt++] = Lt,
    rt[lt++] = Pn,
    Pn = e;
    var r = Rt;
    e = Lt;
    var l = 32 - vt(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - vt(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        Rt = 1 << 32 - vt(t) + l | n << l | r,
        Lt = i + e
    } else
        Rt = 1 << i | n << l | r,
        Lt = e
}
function Ya(e) {
    e.return !== null && (vn(e, 1),
    Md(e, 1, 0))
}
function Ga(e) {
    for (; e === di; )
        di = Kn[--Xn],
        Kn[Xn] = null,
        fi = Kn[--Xn],
        Kn[Xn] = null;
    for (; e === Pn; )
        Pn = rt[--lt],
        rt[lt] = null,
        Lt = rt[--lt],
        rt[lt] = null,
        Rt = rt[--lt],
        rt[lt] = null
}
var Je = null
  , Ze = null
  , ue = !1
  , mt = null;
function zd(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function wu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Ze = en(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Ze = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Pn !== null ? {
            id: Rt,
            overflow: Lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = it(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Je = e,
        Ze = null,
        !0) : !1;
    default:
        return !1
    }
}
function oa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function aa(e) {
    if (ue) {
        var t = Ze;
        if (t) {
            var n = t;
            if (!wu(e, t)) {
                if (oa(e))
                    throw Error(P(418));
                t = en(n.nextSibling);
                var r = Je;
                t && wu(e, t) ? zd(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                Je = e)
            }
        } else {
            if (oa(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            Je = e
        }
    }
}
function Su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Je = e
}
function zl(e) {
    if (e !== Je)
        return !1;
    if (!ue)
        return Su(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps)),
    t && (t = Ze)) {
        if (oa(e))
            throw Od(),
            Error(P(418));
        for (; t; )
            zd(e, t),
            t = en(t.nextSibling)
    }
    if (Su(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ze = en(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ze = null
        }
    } else
        Ze = Je ? en(e.stateNode.nextSibling) : null;
    return !0
}
function Od() {
    for (var e = Ze; e; )
        e = en(e.nextSibling)
}
function ir() {
    Ze = Je = null,
    ue = !1
}
function ba(e) {
    mt === null ? mt = [e] : mt.push(e)
}
var vm = Ft.ReactCurrentBatchConfig;
function Nr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function Ol(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ku(e) {
    var t = e._init;
    return t(e._payload)
}
function Fd(e) {
    function t(m, c) {
        if (e) {
            var y = m.deletions;
            y === null ? (m.deletions = [c],
            m.flags |= 16) : y.push(c)
        }
    }
    function n(m, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(m, c),
            c = c.sibling;
        return null
    }
    function r(m, c) {
        for (m = new Map; c !== null; )
            c.key !== null ? m.set(c.key, c) : m.set(c.index, c),
            c = c.sibling;
        return m
    }
    function l(m, c) {
        return m = ln(m, c),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, c, y) {
        return m.index = y,
        e ? (y = m.alternate,
        y !== null ? (y = y.index,
        y < c ? (m.flags |= 2,
        c) : y) : (m.flags |= 2,
        c)) : (m.flags |= 1048576,
        c)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, c, y, N) {
        return c === null || c.tag !== 6 ? (c = jo(y, m.mode, N),
        c.return = m,
        c) : (c = l(c, y),
        c.return = m,
        c)
    }
    function s(m, c, y, N) {
        var L = y.type;
        return L === $n ? f(m, c, y.props.children, N, y.key) : c !== null && (c.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Ht && ku(L) === c.type) ? (N = l(c, y.props),
        N.ref = Nr(m, c, y),
        N.return = m,
        N) : (N = Jl(y.type, y.key, y.props, null, m.mode, N),
        N.ref = Nr(m, c, y),
        N.return = m,
        N)
    }
    function u(m, c, y, N) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== y.containerInfo || c.stateNode.implementation !== y.implementation ? (c = Po(y, m.mode, N),
        c.return = m,
        c) : (c = l(c, y.children || []),
        c.return = m,
        c)
    }
    function f(m, c, y, N, L) {
        return c === null || c.tag !== 7 ? (c = Cn(y, m.mode, N, L),
        c.return = m,
        c) : (c = l(c, y),
        c.return = m,
        c)
    }
    function d(m, c, y) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = jo("" + c, m.mode, y),
            c.return = m,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Nl:
                return y = Jl(c.type, c.key, c.props, null, m.mode, y),
                y.ref = Nr(m, null, c),
                y.return = m,
                y;
            case An:
                return c = Po(c, m.mode, y),
                c.return = m,
                c;
            case Ht:
                var N = c._init;
                return d(m, N(c._payload), y)
            }
            if (Tr(c) || xr(c))
                return c = Cn(c, m.mode, y, null),
                c.return = m,
                c;
            Ol(m, c)
        }
        return null
    }
    function p(m, c, y, N) {
        var L = c !== null ? c.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return L !== null ? null : a(m, c, "" + y, N);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Nl:
                return y.key === L ? s(m, c, y, N) : null;
            case An:
                return y.key === L ? u(m, c, y, N) : null;
            case Ht:
                return L = y._init,
                p(m, c, L(y._payload), N)
            }
            if (Tr(y) || xr(y))
                return L !== null ? null : f(m, c, y, N, null);
            Ol(m, y)
        }
        return null
    }
    function w(m, c, y, N, L) {
        if (typeof N == "string" && N !== "" || typeof N == "number")
            return m = m.get(y) || null,
            a(c, m, "" + N, L);
        if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
            case Nl:
                return m = m.get(N.key === null ? y : N.key) || null,
                s(c, m, N, L);
            case An:
                return m = m.get(N.key === null ? y : N.key) || null,
                u(c, m, N, L);
            case Ht:
                var O = N._init;
                return w(m, c, y, O(N._payload), L)
            }
            if (Tr(N) || xr(N))
                return m = m.get(y) || null,
                f(c, m, N, L, null);
            Ol(c, N)
        }
        return null
    }
    function S(m, c, y, N) {
        for (var L = null, O = null, g = c, j = c = 0, B = null; g !== null && j < y.length; j++) {
            g.index > j ? (B = g,
            g = null) : B = g.sibling;
            var D = p(m, g, y[j], N);
            if (D === null) {
                g === null && (g = B);
                break
            }
            e && g && D.alternate === null && t(m, g),
            c = i(D, c, j),
            O === null ? L = D : O.sibling = D,
            O = D,
            g = B
        }
        if (j === y.length)
            return n(m, g),
            ue && vn(m, j),
            L;
        if (g === null) {
            for (; j < y.length; j++)
                g = d(m, y[j], N),
                g !== null && (c = i(g, c, j),
                O === null ? L = g : O.sibling = g,
                O = g);
            return ue && vn(m, j),
            L
        }
        for (g = r(m, g); j < y.length; j++)
            B = w(g, m, j, y[j], N),
            B !== null && (e && B.alternate !== null && g.delete(B.key === null ? j : B.key),
            c = i(B, c, j),
            O === null ? L = B : O.sibling = B,
            O = B);
        return e && g.forEach(function(ee) {
            return t(m, ee)
        }),
        ue && vn(m, j),
        L
    }
    function E(m, c, y, N) {
        var L = xr(y);
        if (typeof L != "function")
            throw Error(P(150));
        if (y = L.call(y),
        y == null)
            throw Error(P(151));
        for (var O = L = null, g = c, j = c = 0, B = null, D = y.next(); g !== null && !D.done; j++,
        D = y.next()) {
            g.index > j ? (B = g,
            g = null) : B = g.sibling;
            var ee = p(m, g, D.value, N);
            if (ee === null) {
                g === null && (g = B);
                break
            }
            e && g && ee.alternate === null && t(m, g),
            c = i(ee, c, j),
            O === null ? L = ee : O.sibling = ee,
            O = ee,
            g = B
        }
        if (D.done)
            return n(m, g),
            ue && vn(m, j),
            L;
        if (g === null) {
            for (; !D.done; j++,
            D = y.next())
                D = d(m, D.value, N),
                D !== null && (c = i(D, c, j),
                O === null ? L = D : O.sibling = D,
                O = D);
            return ue && vn(m, j),
            L
        }
        for (g = r(m, g); !D.done; j++,
        D = y.next())
            D = w(g, m, j, D.value, N),
            D !== null && (e && D.alternate !== null && g.delete(D.key === null ? j : D.key),
            c = i(D, c, j),
            O === null ? L = D : O.sibling = D,
            O = D);
        return e && g.forEach(function(re) {
            return t(m, re)
        }),
        ue && vn(m, j),
        L
    }
    function R(m, c, y, N) {
        if (typeof y == "object" && y !== null && y.type === $n && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Nl:
                e: {
                    for (var L = y.key, O = c; O !== null; ) {
                        if (O.key === L) {
                            if (L = y.type,
                            L === $n) {
                                if (O.tag === 7) {
                                    n(m, O.sibling),
                                    c = l(O, y.props.children),
                                    c.return = m,
                                    m = c;
                                    break e
                                }
                            } else if (O.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Ht && ku(L) === O.type) {
                                n(m, O.sibling),
                                c = l(O, y.props),
                                c.ref = Nr(m, O, y),
                                c.return = m,
                                m = c;
                                break e
                            }
                            n(m, O);
                            break
                        } else
                            t(m, O);
                        O = O.sibling
                    }
                    y.type === $n ? (c = Cn(y.props.children, m.mode, N, y.key),
                    c.return = m,
                    m = c) : (N = Jl(y.type, y.key, y.props, null, m.mode, N),
                    N.ref = Nr(m, c, y),
                    N.return = m,
                    m = N)
                }
                return o(m);
            case An:
                e: {
                    for (O = y.key; c !== null; ) {
                        if (c.key === O)
                            if (c.tag === 4 && c.stateNode.containerInfo === y.containerInfo && c.stateNode.implementation === y.implementation) {
                                n(m, c.sibling),
                                c = l(c, y.children || []),
                                c.return = m,
                                m = c;
                                break e
                            } else {
                                n(m, c);
                                break
                            }
                        else
                            t(m, c);
                        c = c.sibling
                    }
                    c = Po(y, m.mode, N),
                    c.return = m,
                    m = c
                }
                return o(m);
            case Ht:
                return O = y._init,
                R(m, c, O(y._payload), N)
            }
            if (Tr(y))
                return S(m, c, y, N);
            if (xr(y))
                return E(m, c, y, N);
            Ol(m, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        c !== null && c.tag === 6 ? (n(m, c.sibling),
        c = l(c, y),
        c.return = m,
        m = c) : (n(m, c),
        c = jo(y, m.mode, N),
        c.return = m,
        m = c),
        o(m)) : n(m, c)
    }
    return R
}
var or = Fd(!0)
  , Id = Fd(!1)
  , pi = cn(null)
  , hi = null
  , Yn = null
  , Za = null;
function Ja() {
    Za = Yn = hi = null
}
function qa(e) {
    var t = pi.current;
    ae(pi),
    e._currentValue = t
}
function sa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function tr(e, t) {
    hi = e,
    Za = Yn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (We = !0),
    e.firstContext = null)
}
function at(e) {
    var t = e._currentValue;
    if (Za !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Yn === null) {
            if (hi === null)
                throw Error(P(308));
            Yn = e,
            hi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Yn = Yn.next = e;
    return t
}
var Sn = null;
function es(e) {
    Sn === null ? Sn = [e] : Sn.push(e)
}
function Ud(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    es(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    zt(e, r)
}
function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Wt = !1;
function ts(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ad(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Tt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    G & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        zt(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    es(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    zt(e, n)
}
function Kl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        $a(e, n)
    }
}
function Eu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function mi(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        o === null ? i = u : o.next = u,
        o = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== o && (a === null ? f.firstBaseUpdate = u : a.next = u,
        f.lastBaseUpdate = s))
    }
    if (i !== null) {
        var d = l.baseState;
        o = 0,
        f = u = s = null,
        a = i;
        do {
            var p = a.lane
              , w = a.eventTime;
            if ((r & p) === p) {
                f !== null && (f = f.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , E = a;
                    switch (p = t,
                    w = n,
                    E.tag) {
                    case 1:
                        if (S = E.payload,
                        typeof S == "function") {
                            d = S.call(w, d, p);
                            break e
                        }
                        d = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = E.payload,
                        p = typeof S == "function" ? S.call(w, d, p) : S,
                        p == null)
                            break e;
                        d = fe({}, d, p);
                        break e;
                    case 2:
                        Wt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                p = l.effects,
                p === null ? l.effects = [a] : p.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (u = f = w,
                s = d) : f = f.next = w,
                o |= p;
            if (a = a.next,
            a === null) {
                if (a = l.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                l.lastBaseUpdate = p,
                l.shared.pending = null
            }
        } while (!0);
        if (f === null && (s = d),
        l.baseState = s,
        l.firstBaseUpdate = u,
        l.lastBaseUpdate = f,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Rn |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function Nu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(P(191, l));
                l.call(r)
            }
        }
}
var pl = {}
  , Nt = cn(pl)
  , tl = cn(pl)
  , nl = cn(pl);
function kn(e) {
    if (e === pl)
        throw Error(P(174));
    return e
}
function ns(e, t) {
    switch (ie(nl, t),
    ie(tl, e),
    ie(Nt, pl),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Vo(t, e)
    }
    ae(Nt),
    ie(Nt, t)
}
function ar() {
    ae(Nt),
    ae(tl),
    ae(nl)
}
function $d(e) {
    kn(nl.current);
    var t = kn(Nt.current)
      , n = Vo(t, e.type);
    t !== n && (ie(tl, e),
    ie(Nt, n))
}
function rs(e) {
    tl.current === e && (ae(Nt),
    ae(tl))
}
var ce = cn(0);
function vi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var wo = [];
function ls() {
    for (var e = 0; e < wo.length; e++)
        wo[e]._workInProgressVersionPrimary = null;
    wo.length = 0
}
var Xl = Ft.ReactCurrentDispatcher
  , So = Ft.ReactCurrentBatchConfig
  , _n = 0
  , de = null
  , ke = null
  , Ne = null
  , yi = !1
  , $r = !1
  , rl = 0
  , ym = 0;
function Te() {
    throw Error(P(321))
}
function is(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function os(e, t, n, r, l, i) {
    if (_n = i,
    de = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Xl.current = e === null || e.memoizedState === null ? Sm : km,
    e = n(r, l),
    $r) {
        i = 0;
        do {
            if ($r = !1,
            rl = 0,
            25 <= i)
                throw Error(P(301));
            i += 1,
            Ne = ke = null,
            t.updateQueue = null,
            Xl.current = Em,
            e = n(r, l)
        } while ($r)
    }
    if (Xl.current = gi,
    t = ke !== null && ke.next !== null,
    _n = 0,
    Ne = ke = de = null,
    yi = !1,
    t)
        throw Error(P(300));
    return e
}
function as() {
    var e = rl !== 0;
    return rl = 0,
    e
}
function St() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ne === null ? de.memoizedState = Ne = e : Ne = Ne.next = e,
    Ne
}
function st() {
    if (ke === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ke.next;
    var t = Ne === null ? de.memoizedState : Ne.next;
    if (t !== null)
        Ne = t,
        ke = e;
    else {
        if (e === null)
            throw Error(P(310));
        ke = e,
        e = {
            memoizedState: ke.memoizedState,
            baseState: ke.baseState,
            baseQueue: ke.baseQueue,
            queue: ke.queue,
            next: null
        },
        Ne === null ? de.memoizedState = Ne = e : Ne = Ne.next = e
    }
    return Ne
}
function ll(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ko(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = ke
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var a = o = null
          , s = null
          , u = i;
        do {
            var f = u.lane;
            if ((_n & f) === f)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = d,
                o = r) : s = s.next = d,
                de.lanes |= f,
                Rn |= f
            }
            u = u.next
        } while (u !== null && u !== i);
        s === null ? o = r : s.next = a,
        gt(r, t.memoizedState) || (We = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            de.lanes |= i,
            Rn |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Eo(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        gt(i, t.memoizedState) || (We = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Bd() {}
function Vd(e, t) {
    var n = de
      , r = st()
      , l = t()
      , i = !gt(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    We = !0),
    r = r.queue,
    ss(Qd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Ne !== null && Ne.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        il(9, Wd.bind(null, n, r, l, t), void 0, null),
        Ce === null)
            throw Error(P(349));
        _n & 30 || Hd(n, t, l)
    }
    return l
}
function Hd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Wd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Kd(t) && Xd(e)
}
function Qd(e, t, n) {
    return n(function() {
        Kd(t) && Xd(e)
    })
}
function Kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}
function Xd(e) {
    var t = zt(e, 1);
    t !== null && yt(t, e, 1, -1)
}
function Cu(e) {
    var t = St();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = wm.bind(null, de, e),
    [t.memoizedState, e]
}
function il(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Yd() {
    return st().memoizedState
}
function Yl(e, t, n, r) {
    var l = St();
    de.flags |= e,
    l.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ai(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ke !== null) {
        var o = ke.memoizedState;
        if (i = o.destroy,
        r !== null && is(r, o.deps)) {
            l.memoizedState = il(t, n, i, r);
            return
        }
    }
    de.flags |= e,
    l.memoizedState = il(1 | t, n, i, r)
}
function ju(e, t) {
    return Yl(8390656, 8, e, t)
}
function ss(e, t) {
    return Ai(2048, 8, e, t)
}
function Gd(e, t) {
    return Ai(4, 2, e, t)
}
function bd(e, t) {
    return Ai(4, 4, e, t)
}
function Zd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Jd(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ai(4, 4, Zd.bind(null, t, e), n)
}
function us() {}
function qd(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && is(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ef(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && is(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function tf(e, t, n) {
    return _n & 21 ? (gt(n, t) || (n = od(),
    de.lanes |= n,
    Rn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    We = !0),
    e.memoizedState = n)
}
function gm(e, t) {
    var n = q;
    q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = So.transition;
    So.transition = {};
    try {
        e(!1),
        t()
    } finally {
        q = n,
        So.transition = r
    }
}
function nf() {
    return st().memoizedState
}
function xm(e, t, n) {
    var r = rn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    rf(e))
        lf(t, n);
    else if (n = Ud(e, t, n, r),
    n !== null) {
        var l = Ae();
        yt(n, e, r, l),
        of(n, t, r)
    }
}
function wm(e, t, n) {
    var r = rn(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (rf(e))
        lf(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = a,
                gt(a, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    es(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Ud(e, t, l, r),
        n !== null && (l = Ae(),
        yt(n, e, r, l),
        of(n, t, r))
    }
}
function rf(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de
}
function lf(e, t) {
    $r = yi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function of(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        $a(e, n)
    }
}
var gi = {
    readContext: at,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
  , Sm = {
    readContext: at,
    useCallback: function(e, t) {
        return St().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: at,
    useEffect: ju,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Yl(4194308, 4, Zd.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Yl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Yl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = St();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = St();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = xm.bind(null, de, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = St();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Cu,
    useDebugValue: us,
    useDeferredValue: function(e) {
        return St().memoizedState = e
    },
    useTransition: function() {
        var e = Cu(!1)
          , t = e[0];
        return e = gm.bind(null, e[1]),
        St().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = de
          , l = St();
        if (ue) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            Ce === null)
                throw Error(P(349));
            _n & 30 || Hd(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        ju(Qd.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        il(9, Wd.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = St()
          , t = Ce.identifierPrefix;
        if (ue) {
            var n = Lt
              , r = Rt;
            n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = rl++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = ym++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , km = {
    readContext: at,
    useCallback: qd,
    useContext: at,
    useEffect: ss,
    useImperativeHandle: Jd,
    useInsertionEffect: Gd,
    useLayoutEffect: bd,
    useMemo: ef,
    useReducer: ko,
    useRef: Yd,
    useState: function() {
        return ko(ll)
    },
    useDebugValue: us,
    useDeferredValue: function(e) {
        var t = st();
        return tf(t, ke.memoizedState, e)
    },
    useTransition: function() {
        var e = ko(ll)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: Bd,
    useSyncExternalStore: Vd,
    useId: nf,
    unstable_isNewReconciler: !1
}
  , Em = {
    readContext: at,
    useCallback: qd,
    useContext: at,
    useEffect: ss,
    useImperativeHandle: Jd,
    useInsertionEffect: Gd,
    useLayoutEffect: bd,
    useMemo: ef,
    useReducer: Eo,
    useRef: Yd,
    useState: function() {
        return Eo(ll)
    },
    useDebugValue: us,
    useDeferredValue: function(e) {
        var t = st();
        return ke === null ? t.memoizedState = e : tf(t, ke.memoizedState, e)
    },
    useTransition: function() {
        var e = Eo(ll)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: Bd,
    useSyncExternalStore: Vd,
    useId: nf,
    unstable_isNewReconciler: !1
};
function ft(e, t) {
    if (e && e.defaultProps) {
        t = fe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ua(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : fe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $i = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , l = rn(e)
          , i = Tt(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = tn(e, i, l),
        t !== null && (yt(t, e, l, r),
        Kl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , l = rn(e)
          , i = Tt(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = tn(e, i, l),
        t !== null && (yt(t, e, l, r),
        Kl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ae()
          , r = rn(e)
          , l = Tt(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = tn(e, l, r),
        t !== null && (yt(t, e, r, n),
        Kl(t, e, r))
    }
};
function Pu(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(l, i) : !0
}
function af(e, t, n) {
    var r = !1
      , l = sn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = at(i) : (l = Ke(t) ? jn : ze.current,
    r = t.contextTypes,
    i = (r = r != null) ? lr(e, l) : sn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = $i,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function _u(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null)
}
function ca(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    ts(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = at(i) : (i = Ke(t) ? jn : ze.current,
    l.context = lr(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ua(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && $i.enqueueReplaceState(l, l.state, null),
    mi(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function sr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Zp(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function No(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function da(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Nm = typeof WeakMap == "function" ? WeakMap : Map;
function sf(e, t, n) {
    n = Tt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        wi || (wi = !0,
        Sa = r),
        da(e, t)
    }
    ,
    n
}
function uf(e, t, n) {
    n = Tt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            da(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        da(e, t),
        typeof r != "function" && (nn === null ? nn = new Set([this]) : nn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Ru(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Nm;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Um.bind(null, e, t, n),
    t.then(e, e))
}
function Lu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Tu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1),
    t.tag = 2,
    tn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Cm = Ft.ReactCurrentOwner
  , We = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? Id(t, null, n, r) : or(t, e.child, n, r)
}
function Du(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return tr(t, l),
    r = os(e, t, n, r, i, l),
    n = as(),
    e !== null && !We ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ot(e, t, l)) : (ue && n && Ya(t),
    t.flags |= 1,
    Ue(e, t, r, l),
    t.child)
}
function Mu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ys(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        cf(e, t, i, r, l)) : (e = Jl(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Zr,
        n(o, r) && e.ref === t.ref)
            return Ot(e, t, l)
    }
    return t.flags |= 1,
    e = ln(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function cf(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Zr(i, r) && e.ref === t.ref)
            if (We = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (We = !0);
            else
                return t.lanes = e.lanes,
                Ot(e, t, l)
    }
    return fa(e, t, n, r, l)
}
function df(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(bn, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(bn, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ie(bn, Ge),
            Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(bn, Ge),
        Ge |= r;
    return Ue(e, t, l, n),
    t.child
}
function ff(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function fa(e, t, n, r, l) {
    var i = Ke(n) ? jn : ze.current;
    return i = lr(t, i),
    tr(t, l),
    n = os(e, t, n, r, i, l),
    r = as(),
    e !== null && !We ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ot(e, t, l)) : (ue && r && Ya(t),
    t.flags |= 1,
    Ue(e, t, n, l),
    t.child)
}
function zu(e, t, n, r, l) {
    if (Ke(n)) {
        var i = !0;
        ci(t)
    } else
        i = !1;
    if (tr(t, l),
    t.stateNode === null)
        Gl(e, t),
        af(t, n, r),
        ca(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var s = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = at(u) : (u = Ke(n) ? jn : ze.current,
        u = lr(t, u));
        var f = n.getDerivedStateFromProps
          , d = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== u) && _u(t, o, r, u),
        Wt = !1;
        var p = t.memoizedState;
        o.state = p,
        mi(t, r, o, l),
        s = t.memoizedState,
        a !== r || p !== s || Qe.current || Wt ? (typeof f == "function" && (ua(t, n, f, r),
        s = t.memoizedState),
        (a = Wt || Pu(t, n, a, r, p, s, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Ad(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : ft(t.type, a),
        o.props = u,
        d = t.pendingProps,
        p = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = at(s) : (s = Ke(n) ? jn : ze.current,
        s = lr(t, s));
        var w = n.getDerivedStateFromProps;
        (f = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || p !== s) && _u(t, o, r, s),
        Wt = !1,
        p = t.memoizedState,
        o.state = p,
        mi(t, r, o, l);
        var S = t.memoizedState;
        a !== d || p !== S || Qe.current || Wt ? (typeof w == "function" && (ua(t, n, w, r),
        S = t.memoizedState),
        (u = Wt || Pu(t, n, u, r, p, S, s) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        o.props = r,
        o.state = S,
        o.context = s,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return pa(e, t, n, r, i, l)
}
function pa(e, t, n, r, l, i) {
    ff(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && xu(t, n, !1),
        Ot(e, t, i);
    r = t.stateNode,
    Cm.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = or(t, e.child, null, i),
    t.child = or(t, null, a, i)) : Ue(e, t, a, i),
    t.memoizedState = r.state,
    l && xu(t, n, !0),
    t.child
}
function pf(e) {
    var t = e.stateNode;
    t.pendingContext ? gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gu(e, t.context, !1),
    ns(e, t.containerInfo)
}
function Ou(e, t, n, r, l) {
    return ir(),
    ba(l),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var ha = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ma(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function hf(e, t, n) {
    var r = t.pendingProps, l = ce.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(ce, l & 1),
    e === null)
        return aa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Hi(o, r, 0, null),
        e = Cn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ma(n),
        t.memoizedState = ha,
        e) : cs(t, o));
    if (l = e.memoizedState,
    l !== null && (a = l.dehydrated,
    a !== null))
        return jm(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        a = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = ln(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        a !== null ? i = ln(a, i) : (i = Cn(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? ma(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ha,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = ln(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function cs(e, t) {
    return t = Hi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Fl(e, t, n, r) {
    return r !== null && ba(r),
    or(t, e.child, null, n),
    e = cs(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function jm(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = No(Error(P(422))),
        Fl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = Hi({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Cn(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && or(t, e.child, null, o),
        t.child.memoizedState = ma(o),
        t.memoizedState = ha,
        i);
    if (!(t.mode & 1))
        return Fl(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(P(419)),
        r = No(i, r, void 0),
        Fl(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    We || a) {
        if (r = Ce,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            zt(e, l),
            yt(r, e, l, -1))
        }
        return vs(),
        r = No(Error(P(421))),
        Fl(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Am.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    Ze = en(l.nextSibling),
    Je = t,
    ue = !0,
    mt = null,
    e !== null && (rt[lt++] = Rt,
    rt[lt++] = Lt,
    rt[lt++] = Pn,
    Rt = e.id,
    Lt = e.overflow,
    Pn = t),
    t = cs(t, r.children),
    t.flags |= 4096,
    t)
}
function Fu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    sa(e.return, t, n)
}
function Co(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function mf(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (Ue(e, t, r.children, n),
    r = ce.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Fu(e, n, t);
                else if (e.tag === 19)
                    Fu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(ce, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && vi(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Co(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && vi(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Co(t, !0, n, null, i);
            break;
        case "together":
            Co(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Gl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Rn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ln(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ln(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Pm(e, t, n) {
    switch (t.tag) {
    case 3:
        pf(t),
        ir();
        break;
    case 5:
        $d(t);
        break;
    case 1:
        Ke(t.type) && ci(t);
        break;
    case 4:
        ns(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        ie(pi, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(ce, ce.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? hf(e, t, n) : (ie(ce, ce.current & 1),
            e = Ot(e, t, n),
            e !== null ? e.sibling : null);
        ie(ce, ce.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return mf(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        ie(ce, ce.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        df(e, t, n)
    }
    return Ot(e, t, n)
}
var vf, va, yf, gf;
vf = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
va = function() {}
;
yf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        kn(Nt.current);
        var i = null;
        switch (n) {
        case "input":
            l = Uo(e, l),
            r = Uo(e, r),
            i = [];
            break;
        case "select":
            l = fe({}, l, {
                value: void 0
            }),
            r = fe({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = Bo(e, l),
            r = Bo(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = si)
        }
        Ho(n, r);
        var o;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var a = l[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = l != null ? l[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wr.hasOwnProperty(u) ? (s != null && u === "onScroll" && oe("scroll", e),
                    i || a === s || (i = [])) : (i = i || []).push(u, s))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
gf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Cr(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function _m(e, t, n) {
    var r = t.pendingProps;
    switch (Ga(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return De(t),
        null;
    case 1:
        return Ke(t.type) && ui(),
        De(t),
        null;
    case 3:
        return r = t.stateNode,
        ar(),
        ae(Qe),
        ae(ze),
        ls(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (zl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        mt !== null && (Na(mt),
        mt = null))),
        va(e, t),
        De(t),
        null;
    case 5:
        rs(t);
        var l = kn(nl.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            yf(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return De(t),
                null
            }
            if (e = kn(Nt.current),
            zl(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[kt] = t,
                r[el] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Mr.length; l++)
                        oe(Mr[l], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Qs(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Xs(r, i),
                    oe("invalid", r)
                }
                Ho(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ml(r.textContent, a, e),
                        l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ml(r.textContent, a, e),
                        l = ["children", "" + a]) : Wr.hasOwnProperty(o) && a != null && o === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Cl(r),
                    Ks(r, i, !0);
                    break;
                case "textarea":
                    Cl(r),
                    Ys(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = si)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Qc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[kt] = t,
                e[el] = r,
                vf(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Wo(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Mr.length; l++)
                            oe(Mr[l], e);
                        l = r;
                        break;
                    case "source":
                        oe("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        l = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Qs(e, r),
                        l = Uo(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = fe({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Xs(e, r),
                        l = Bo(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Ho(n, l),
                    a = l;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var s = a[i];
                            i === "style" ? Yc(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Kc(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qr(e, s) : typeof s == "number" && Qr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wr.hasOwnProperty(i) ? s != null && i === "onScroll" && oe("scroll", e) : s != null && za(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        Cl(e),
                        Ks(e, r, !1);
                        break;
                    case "textarea":
                        Cl(e),
                        Ys(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + an(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Zn(e, !!r.multiple, i, !1) : r.defaultValue != null && Zn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = si)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return De(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            gf(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = kn(nl.current),
            kn(Nt.current),
            zl(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[kt] = t,
                (i = r.nodeValue !== n) && (e = Je,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ml(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ml(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[kt] = t,
                t.stateNode = r
        }
        return De(t),
        null;
    case 13:
        if (ae(ce),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128))
                Od(),
                ir(),
                t.flags |= 98560,
                i = !1;
            else if (i = zl(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(P(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(P(317));
                    i[kt] = t
                } else
                    ir(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                De(t),
                i = !1
            } else
                mt !== null && (Na(mt),
                mt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ce.current & 1 ? Ee === 0 && (Ee = 3) : vs())),
        t.updateQueue !== null && (t.flags |= 4),
        De(t),
        null);
    case 4:
        return ar(),
        va(e, t),
        e === null && Jr(t.stateNode.containerInfo),
        De(t),
        null;
    case 10:
        return qa(t.type._context),
        De(t),
        null;
    case 17:
        return Ke(t.type) && ui(),
        De(t),
        null;
    case 19:
        if (ae(ce),
        i = t.memoizedState,
        i === null)
            return De(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Cr(i, !1);
            else {
                if (Ee !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = vi(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Cr(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(ce, ce.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && ye() > ur && (t.flags |= 128,
                r = !0,
                Cr(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = vi(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Cr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !ue)
                        return De(t),
                        null
                } else
                    2 * ye() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Cr(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = ye(),
        t.sibling = null,
        n = ce.current,
        ie(ce, r ? n & 1 | 2 : n & 1),
        t) : (De(t),
        null);
    case 22:
    case 23:
        return ms(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (De(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function Rm(e, t) {
    switch (Ga(t),
    t.tag) {
    case 1:
        return Ke(t.type) && ui(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ar(),
        ae(Qe),
        ae(ze),
        ls(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return rs(t),
        null;
    case 13:
        if (ae(ce),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            ir()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(ce),
        null;
    case 4:
        return ar(),
        null;
    case 10:
        return qa(t.type._context),
        null;
    case 22:
    case 23:
        return ms(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Il = !1
  , Me = !1
  , Lm = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function Gn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                me(e, t, r)
            }
        else
            n.current = null
}
function ya(e, t, n) {
    try {
        n()
    } catch (r) {
        me(e, t, r)
    }
}
var Iu = !1;
function Tm(e, t) {
    if (ea = ii,
    e = kd(),
    Xa(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , f = 0
                      , d = e
                      , p = null;
                    t: for (; ; ) {
                        for (var w; d !== n || l !== 0 && d.nodeType !== 3 || (a = o + l),
                        d !== i || r !== 0 && d.nodeType !== 3 || (s = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (w = d.firstChild) !== null; )
                            p = d,
                            d = w;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (p === n && ++u === l && (a = o),
                            p === i && ++f === r && (s = o),
                            (w = d.nextSibling) !== null)
                                break;
                            d = p,
                            p = d.parentNode
                        }
                        d = w
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ta = {
        focusedElem: e,
        selectionRange: n
    },
    ii = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var E = S.memoizedProps
                                  , R = S.memoizedState
                                  , m = t.stateNode
                                  , c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : ft(t.type, E), R);
                                m.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (N) {
                    me(t, t.return, N)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return S = Iu,
    Iu = !1,
    S
}
function Br(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && ya(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function Bi(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ga(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function xf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    xf(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[kt],
    delete t[el],
    delete t[la],
    delete t[pm],
    delete t[hm])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function wf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Uu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || wf(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function xa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = si));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (xa(e, t, n),
        e = e.sibling; e !== null; )
            xa(e, t, n),
            e = e.sibling
}
function wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wa(e, t, n),
        e = e.sibling; e !== null; )
            wa(e, t, n),
            e = e.sibling
}
var _e = null
  , pt = !1;
function Bt(e, t, n) {
    for (n = n.child; n !== null; )
        Sf(e, t, n),
        n = n.sibling
}
function Sf(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
        try {
            Et.onCommitFiberUnmount(Mi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Me || Gn(n, t);
    case 6:
        var r = _e
          , l = pt;
        _e = null,
        Bt(e, t, n),
        _e = r,
        pt = l,
        _e !== null && (pt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
    case 18:
        _e !== null && (pt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? go(e.parentNode, n) : e.nodeType === 1 && go(e, n),
        Gr(e)) : go(_e, n.stateNode));
        break;
    case 4:
        r = _e,
        l = pt,
        _e = n.stateNode.containerInfo,
        pt = !0,
        Bt(e, t, n),
        _e = r,
        pt = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Me && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && ya(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Bt(e, t, n);
        break;
    case 1:
        if (!Me && (Gn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                me(n, t, a)
            }
        Bt(e, t, n);
        break;
    case 21:
        Bt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null,
        Bt(e, t, n),
        Me = r) : Bt(e, t, n);
        break;
    default:
        Bt(e, t, n)
    }
}
function Au(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Lm),
        t.forEach(function(r) {
            var l = $m.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        _e = a.stateNode,
                        pt = !1;
                        break e;
                    case 3:
                        _e = a.stateNode.containerInfo,
                        pt = !0;
                        break e;
                    case 4:
                        _e = a.stateNode.containerInfo,
                        pt = !0;
                        break e
                    }
                    a = a.return
                }
                if (_e === null)
                    throw Error(P(160));
                Sf(i, o, l),
                _e = null,
                pt = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (u) {
                me(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            kf(t, e),
            t = t.sibling
}
function kf(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (dt(t, e),
        wt(e),
        r & 4) {
            try {
                Br(3, e, e.return),
                Bi(3, e)
            } catch (E) {
                me(e, e.return, E)
            }
            try {
                Br(5, e, e.return)
            } catch (E) {
                me(e, e.return, E)
            }
        }
        break;
    case 1:
        dt(t, e),
        wt(e),
        r & 512 && n !== null && Gn(n, n.return);
        break;
    case 5:
        if (dt(t, e),
        wt(e),
        r & 512 && n !== null && Gn(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Qr(l, "")
            } catch (E) {
                me(e, e.return, E)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Hc(l, i),
                    Wo(a, o);
                    var u = Wo(a, i);
                    for (o = 0; o < s.length; o += 2) {
                        var f = s[o]
                          , d = s[o + 1];
                        f === "style" ? Yc(l, d) : f === "dangerouslySetInnerHTML" ? Kc(l, d) : f === "children" ? Qr(l, d) : za(l, f, d, u)
                    }
                    switch (a) {
                    case "input":
                        Ao(l, i);
                        break;
                    case "textarea":
                        Wc(l, i);
                        break;
                    case "select":
                        var p = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var w = i.value;
                        w != null ? Zn(l, !!i.multiple, w, !1) : p !== !!i.multiple && (i.defaultValue != null ? Zn(l, !!i.multiple, i.defaultValue, !0) : Zn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[el] = i
                } catch (E) {
                    me(e, e.return, E)
                }
        }
        break;
    case 6:
        if (dt(t, e),
        wt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (E) {
                me(e, e.return, E)
            }
        }
        break;
    case 3:
        if (dt(t, e),
        wt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Gr(t.containerInfo)
            } catch (E) {
                me(e, e.return, E)
            }
        break;
    case 4:
        dt(t, e),
        wt(e);
        break;
    case 13:
        dt(t, e),
        wt(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (ps = ye())),
        r & 4 && Au(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Me = (u = Me) || f,
        dt(t, e),
        Me = u) : dt(t, e),
        wt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (z = e,
                f = e.child; f !== null; ) {
                    for (d = z = f; z !== null; ) {
                        switch (p = z,
                        w = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Br(4, p, p.return);
                            break;
                        case 1:
                            Gn(p, p.return);
                            var S = p.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (E) {
                                    me(r, n, E)
                                }
                            }
                            break;
                        case 5:
                            Gn(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Bu(d);
                                continue
                            }
                        }
                        w !== null ? (w.return = p,
                        z = w) : Bu(d)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (f === null) {
                        f = d;
                        try {
                            l = d.stateNode,
                            u ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            s = d.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = Xc("display", o))
                        } catch (E) {
                            me(e, e.return, E)
                        }
                    }
                } else if (d.tag === 6) {
                    if (f === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (E) {
                            me(e, e.return, E)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    f === d && (f = null),
                    d = d.return
                }
                f === d && (f = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        dt(t, e),
        wt(e),
        r & 4 && Au(e);
        break;
    case 21:
        break;
    default:
        dt(t, e),
        wt(e)
    }
}
function wt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (wf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Qr(l, ""),
                r.flags &= -33);
                var i = Uu(e);
                wa(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Uu(e);
                xa(e, a, o);
                break;
            default:
                throw Error(P(161))
            }
        } catch (s) {
            me(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Dm(e, t, n) {
    z = e,
    Ef(e)
}
function Ef(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var l = z
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Il;
            if (!o) {
                var a = l.alternate
                  , s = a !== null && a.memoizedState !== null || Me;
                a = Il;
                var u = Me;
                if (Il = o,
                (Me = s) && !u)
                    for (z = l; z !== null; )
                        o = z,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Vu(l) : s !== null ? (s.return = o,
                        z = s) : Vu(l);
                for (; i !== null; )
                    z = i,
                    Ef(i),
                    i = i.sibling;
                z = l,
                Il = a,
                Me = u
            }
            $u(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            z = i) : $u(e)
    }
}
function $u(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Me || Bi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Me)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Nu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Nu(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && Gr(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                Me || t.flags & 512 && ga(t)
            } catch (p) {
                me(t, t.return, p)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function Bu(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function Vu(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Bi(4, t)
                } catch (s) {
                    me(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        me(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    ga(t)
                } catch (s) {
                    me(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    ga(t)
                } catch (s) {
                    me(t, o, s)
                }
            }
        } catch (s) {
            me(t, t.return, s)
        }
        if (t === e) {
            z = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            z = a;
            break
        }
        z = t.return
    }
}
var Mm = Math.ceil
  , xi = Ft.ReactCurrentDispatcher
  , ds = Ft.ReactCurrentOwner
  , ot = Ft.ReactCurrentBatchConfig
  , G = 0
  , Ce = null
  , we = null
  , Re = 0
  , Ge = 0
  , bn = cn(0)
  , Ee = 0
  , ol = null
  , Rn = 0
  , Vi = 0
  , fs = 0
  , Vr = null
  , He = null
  , ps = 0
  , ur = 1 / 0
  , Pt = null
  , wi = !1
  , Sa = null
  , nn = null
  , Ul = !1
  , Yt = null
  , Si = 0
  , Hr = 0
  , ka = null
  , bl = -1
  , Zl = 0;
function Ae() {
    return G & 6 ? ye() : bl !== -1 ? bl : bl = ye()
}
function rn(e) {
    return e.mode & 1 ? G & 2 && Re !== 0 ? Re & -Re : vm.transition !== null ? (Zl === 0 && (Zl = od()),
    Zl) : (e = q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : pd(e.type)),
    e) : 1
}
function yt(e, t, n, r) {
    if (50 < Hr)
        throw Hr = 0,
        ka = null,
        Error(P(185));
    cl(e, n, r),
    (!(G & 2) || e !== Ce) && (e === Ce && (!(G & 2) && (Vi |= n),
    Ee === 4 && Kt(e, Re)),
    Xe(e, r),
    n === 1 && G === 0 && !(t.mode & 1) && (ur = ye() + 500,
    Ui && dn()))
}
function Xe(e, t) {
    var n = e.callbackNode;
    vh(e, t);
    var r = li(e, e === Ce ? Re : 0);
    if (r === 0)
        n !== null && Zs(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Zs(n),
        t === 1)
            e.tag === 0 ? mm(Hu.bind(null, e)) : Dd(Hu.bind(null, e)),
            dm(function() {
                !(G & 6) && dn()
            }),
            n = null;
        else {
            switch (ad(r)) {
            case 1:
                n = Aa;
                break;
            case 4:
                n = ld;
                break;
            case 16:
                n = ri;
                break;
            case 536870912:
                n = id;
                break;
            default:
                n = ri
            }
            n = Tf(n, Nf.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Nf(e, t) {
    if (bl = -1,
    Zl = 0,
    G & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n)
        return null;
    var r = li(e, e === Ce ? Re : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ki(e, r);
    else {
        t = r;
        var l = G;
        G |= 2;
        var i = jf();
        (Ce !== e || Re !== t) && (Pt = null,
        ur = ye() + 500,
        Nn(e, t));
        do
            try {
                Fm();
                break
            } catch (a) {
                Cf(e, a)
            }
        while (!0);
        Ja(),
        xi.current = i,
        G = l,
        we !== null ? t = 0 : (Ce = null,
        Re = 0,
        t = Ee)
    }
    if (t !== 0) {
        if (t === 2 && (l = Go(e),
        l !== 0 && (r = l,
        t = Ea(e, l))),
        t === 1)
            throw n = ol,
            Nn(e, 0),
            Kt(e, r),
            Xe(e, ye()),
            n;
        if (t === 6)
            Kt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !zm(l) && (t = ki(e, r),
            t === 2 && (i = Go(e),
            i !== 0 && (r = i,
            t = Ea(e, i))),
            t === 1))
                throw n = ol,
                Nn(e, 0),
                Kt(e, r),
                Xe(e, ye()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                yn(e, He, Pt);
                break;
            case 3:
                if (Kt(e, r),
                (r & 130023424) === r && (t = ps + 500 - ye(),
                10 < t)) {
                    if (li(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        Ae(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = ra(yn.bind(null, e, He, Pt), t);
                    break
                }
                yn(e, He, Pt);
                break;
            case 4:
                if (Kt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - vt(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = ye() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mm(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ra(yn.bind(null, e, He, Pt), r);
                    break
                }
                yn(e, He, Pt);
                break;
            case 5:
                yn(e, He, Pt);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Xe(e, ye()),
    e.callbackNode === n ? Nf.bind(null, e) : null
}
function Ea(e, t) {
    var n = Vr;
    return e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    e = ki(e, t),
    e !== 2 && (t = He,
    He = n,
    t !== null && Na(t)),
    e
}
function Na(e) {
    He === null ? He = e : He.push.apply(He, e)
}
function zm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!gt(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Kt(e, t) {
    for (t &= ~fs,
    t &= ~Vi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - vt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Hu(e) {
    if (G & 6)
        throw Error(P(327));
    nr();
    var t = li(e, 0);
    if (!(t & 1))
        return Xe(e, ye()),
        null;
    var n = ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Go(e);
        r !== 0 && (t = r,
        n = Ea(e, r))
    }
    if (n === 1)
        throw n = ol,
        Nn(e, 0),
        Kt(e, t),
        Xe(e, ye()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    yn(e, He, Pt),
    Xe(e, ye()),
    null
}
function hs(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n,
        G === 0 && (ur = ye() + 500,
        Ui && dn())
    }
}
function Ln(e) {
    Yt !== null && Yt.tag === 0 && !(G & 6) && nr();
    var t = G;
    G |= 1;
    var n = ot.transition
      , r = q;
    try {
        if (ot.transition = null,
        q = 1,
        e)
            return e()
    } finally {
        q = r,
        ot.transition = n,
        G = t,
        !(G & 6) && dn()
    }
}
function ms() {
    Ge = bn.current,
    ae(bn)
}
function Nn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    cm(n)),
    we !== null)
        for (n = we.return; n !== null; ) {
            var r = n;
            switch (Ga(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ui();
                break;
            case 3:
                ar(),
                ae(Qe),
                ae(ze),
                ls();
                break;
            case 5:
                rs(r);
                break;
            case 4:
                ar();
                break;
            case 13:
                ae(ce);
                break;
            case 19:
                ae(ce);
                break;
            case 10:
                qa(r.type._context);
                break;
            case 22:
            case 23:
                ms()
            }
            n = n.return
        }
    if (Ce = e,
    we = e = ln(e.current, null),
    Re = Ge = t,
    Ee = 0,
    ol = null,
    fs = Vi = Rn = 0,
    He = Vr = null,
    Sn !== null) {
        for (t = 0; t < Sn.length; t++)
            if (n = Sn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        Sn = null
    }
    return e
}
function Cf(e, t) {
    do {
        var n = we;
        try {
            if (Ja(),
            Xl.current = gi,
            yi) {
                for (var r = de.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                yi = !1
            }
            if (_n = 0,
            Ne = ke = de = null,
            $r = !1,
            rl = 0,
            ds.current = null,
            n === null || n.return === null) {
                Ee = 1,
                ol = t,
                we = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , a = n
                  , s = t;
                if (t = Re,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , f = a
                      , d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = f.alternate;
                        p ? (f.updateQueue = p.updateQueue,
                        f.memoizedState = p.memoizedState,
                        f.lanes = p.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var w = Lu(o);
                    if (w !== null) {
                        w.flags &= -257,
                        Tu(w, o, a, i, t),
                        w.mode & 1 && Ru(i, u, t),
                        t = w,
                        s = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var E = new Set;
                            E.add(s),
                            t.updateQueue = E
                        } else
                            S.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ru(i, u, t),
                            vs();
                            break e
                        }
                        s = Error(P(426))
                    }
                } else if (ue && a.mode & 1) {
                    var R = Lu(o);
                    if (R !== null) {
                        !(R.flags & 65536) && (R.flags |= 256),
                        Tu(R, o, a, i, t),
                        ba(sr(s, a));
                        break e
                    }
                }
                i = s = sr(s, a),
                Ee !== 4 && (Ee = 2),
                Vr === null ? Vr = [i] : Vr.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = sf(i, s, t);
                        Eu(i, m);
                        break e;
                    case 1:
                        a = s;
                        var c = i.type
                          , y = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (nn === null || !nn.has(y)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var N = uf(i, a, t);
                            Eu(i, N);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            _f(n)
        } catch (L) {
            t = L,
            we === n && n !== null && (we = n = n.return);
            continue
        }
        break
    } while (!0)
}
function jf() {
    var e = xi.current;
    return xi.current = gi,
    e === null ? gi : e
}
function vs() {
    (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Ce === null || !(Rn & 268435455) && !(Vi & 268435455) || Kt(Ce, Re)
}
function ki(e, t) {
    var n = G;
    G |= 2;
    var r = jf();
    (Ce !== e || Re !== t) && (Pt = null,
    Nn(e, t));
    do
        try {
            Om();
            break
        } catch (l) {
            Cf(e, l)
        }
    while (!0);
    if (Ja(),
    G = n,
    xi.current = r,
    we !== null)
        throw Error(P(261));
    return Ce = null,
    Re = 0,
    Ee
}
function Om() {
    for (; we !== null; )
        Pf(we)
}
function Fm() {
    for (; we !== null && !ah(); )
        Pf(we)
}
function Pf(e) {
    var t = Lf(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? _f(e) : we = t,
    ds.current = null
}
function _f(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Rm(n, t),
            n !== null) {
                n.flags &= 32767,
                we = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ee = 6,
                we = null;
                return
            }
        } else if (n = _m(n, t, Ge),
        n !== null) {
            we = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            we = t;
            return
        }
        we = t = e
    } while (t !== null);
    Ee === 0 && (Ee = 5)
}
function yn(e, t, n) {
    var r = q
      , l = ot.transition;
    try {
        ot.transition = null,
        q = 1,
        Im(e, t, n, r)
    } finally {
        ot.transition = l,
        q = r
    }
    return null
}
function Im(e, t, n, r) {
    do
        nr();
    while (Yt !== null);
    if (G & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (yh(e, i),
    e === Ce && (we = Ce = null,
    Re = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ul || (Ul = !0,
    Tf(ri, function() {
        return nr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = ot.transition,
        ot.transition = null;
        var o = q;
        q = 1;
        var a = G;
        G |= 4,
        ds.current = null,
        Tm(e, n),
        kf(n, e),
        rm(ta),
        ii = !!ea,
        ta = ea = null,
        e.current = n,
        Dm(n),
        sh(),
        G = a,
        q = o,
        ot.transition = i
    } else
        e.current = n;
    if (Ul && (Ul = !1,
    Yt = e,
    Si = l),
    i = e.pendingLanes,
    i === 0 && (nn = null),
    dh(n.stateNode),
    Xe(e, ye()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (wi)
        throw wi = !1,
        e = Sa,
        Sa = null,
        e;
    return Si & 1 && e.tag !== 0 && nr(),
    i = e.pendingLanes,
    i & 1 ? e === ka ? Hr++ : (Hr = 0,
    ka = e) : Hr = 0,
    dn(),
    null
}
function nr() {
    if (Yt !== null) {
        var e = ad(Si)
          , t = ot.transition
          , n = q;
        try {
            if (ot.transition = null,
            q = 16 > e ? 16 : e,
            Yt === null)
                var r = !1;
            else {
                if (e = Yt,
                Yt = null,
                Si = 0,
                G & 6)
                    throw Error(P(331));
                var l = G;
                for (G |= 4,
                z = e.current; z !== null; ) {
                    var i = z
                      , o = i.child;
                    if (z.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (z = u; z !== null; ) {
                                    var f = z;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Br(8, f, i)
                                    }
                                    var d = f.child;
                                    if (d !== null)
                                        d.return = f,
                                        z = d;
                                    else
                                        for (; z !== null; ) {
                                            f = z;
                                            var p = f.sibling
                                              , w = f.return;
                                            if (xf(f),
                                            f === u) {
                                                z = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = w,
                                                z = p;
                                                break
                                            }
                                            z = w
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var E = S.child;
                                if (E !== null) {
                                    S.child = null;
                                    do {
                                        var R = E.sibling;
                                        E.sibling = null,
                                        E = R
                                    } while (E !== null)
                                }
                            }
                            z = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        z = o;
                    else
                        e: for (; z !== null; ) {
                            if (i = z,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Br(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                z = m;
                                break e
                            }
                            z = i.return
                        }
                }
                var c = e.current;
                for (z = c; z !== null; ) {
                    o = z;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null)
                        y.return = o,
                        z = y;
                    else
                        e: for (o = c; z !== null; ) {
                            if (a = z,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bi(9, a)
                                    }
                                } catch (L) {
                                    me(a, a.return, L)
                                }
                            if (a === o) {
                                z = null;
                                break e
                            }
                            var N = a.sibling;
                            if (N !== null) {
                                N.return = a.return,
                                z = N;
                                break e
                            }
                            z = a.return
                        }
                }
                if (G = l,
                dn(),
                Et && typeof Et.onPostCommitFiberRoot == "function")
                    try {
                        Et.onPostCommitFiberRoot(Mi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            q = n,
            ot.transition = t
        }
    }
    return !1
}
function Wu(e, t, n) {
    t = sr(n, t),
    t = sf(e, t, 1),
    e = tn(e, t, 1),
    t = Ae(),
    e !== null && (cl(e, 1, t),
    Xe(e, t))
}
function me(e, t, n) {
    if (e.tag === 3)
        Wu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Wu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                    e = sr(n, e),
                    e = uf(t, e, 1),
                    t = tn(t, e, 1),
                    e = Ae(),
                    t !== null && (cl(t, 1, e),
                    Xe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Um(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ae(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ce === e && (Re & n) === n && (Ee === 4 || Ee === 3 && (Re & 130023424) === Re && 500 > ye() - ps ? Nn(e, 0) : fs |= n),
    Xe(e, t)
}
function Rf(e, t) {
    t === 0 && (e.mode & 1 ? (t = _l,
    _l <<= 1,
    !(_l & 130023424) && (_l = 4194304)) : t = 1);
    var n = Ae();
    e = zt(e, t),
    e !== null && (cl(e, t, n),
    Xe(e, n))
}
function Am(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Rf(e, n)
}
function $m(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    Rf(e, n)
}
var Lf;
Lf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            We = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return We = !1,
                Pm(e, t, n);
            We = !!(e.flags & 131072)
        }
    else
        We = !1,
        ue && t.flags & 1048576 && Md(t, fi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Gl(e, t),
        e = t.pendingProps;
        var l = lr(t, ze.current);
        tr(t, n),
        l = os(null, t, r, e, l, n);
        var i = as();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ke(r) ? (i = !0,
        ci(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        ts(t),
        l.updater = $i,
        t.stateNode = l,
        l._reactInternals = t,
        ca(t, r, e, n),
        t = pa(null, t, r, !0, i, n)) : (t.tag = 0,
        ue && i && Ya(t),
        Ue(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gl(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Vm(r),
            e = ft(r, e),
            l) {
            case 0:
                t = fa(null, t, r, e, n);
                break e;
            case 1:
                t = zu(null, t, r, e, n);
                break e;
            case 11:
                t = Du(null, t, r, e, n);
                break e;
            case 14:
                t = Mu(null, t, r, ft(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        fa(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        zu(e, t, r, l, n);
    case 3:
        e: {
            if (pf(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            Ad(e, t),
            mi(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = sr(Error(P(423)), t),
                    t = Ou(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = sr(Error(P(424)), t),
                    t = Ou(e, t, r, n, l);
                    break e
                } else
                    for (Ze = en(t.stateNode.containerInfo.firstChild),
                    Je = t,
                    ue = !0,
                    mt = null,
                    n = Id(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ir(),
                r === l) {
                    t = Ot(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return $d(t),
        e === null && aa(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        na(r, l) ? o = null : i !== null && na(r, i) && (t.flags |= 32),
        ff(e, t),
        Ue(e, t, o, n),
        t.child;
    case 6:
        return e === null && aa(t),
        null;
    case 13:
        return hf(e, t, n);
    case 4:
        return ns(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = or(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        Du(e, t, r, l, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            ie(pi, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (gt(i.value, o)) {
                    if (i.children === l.children && !Qe.current) {
                        t = Ot(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = Tt(-1, n & -n),
                                        s.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? s.next = s : (s.next = f.next,
                                            f.next = s),
                                            u.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    sa(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(P(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            sa(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Ue(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        tr(t, n),
        l = at(l),
        r = r(l),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = ft(r, t.pendingProps),
        l = ft(r.type, l),
        Mu(e, t, r, l, n);
    case 15:
        return cf(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        Gl(e, t),
        t.tag = 1,
        Ke(r) ? (e = !0,
        ci(t)) : e = !1,
        tr(t, n),
        af(t, r, l),
        ca(t, r, l, n),
        pa(null, t, r, !0, e, n);
    case 19:
        return mf(e, t, n);
    case 22:
        return df(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function Tf(e, t) {
    return rd(e, t)
}
function Bm(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function it(e, t, n, r) {
    return new Bm(e,t,n,r)
}
function ys(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Vm(e) {
    if (typeof e == "function")
        return ys(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Fa)
            return 11;
        if (e === Ia)
            return 14
    }
    return 2
}
function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Jl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        ys(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case $n:
            return Cn(n.children, l, i, t);
        case Oa:
            o = 8,
            l |= 8;
            break;
        case zo:
            return e = it(12, n, t, l | 2),
            e.elementType = zo,
            e.lanes = i,
            e;
        case Oo:
            return e = it(13, n, t, l),
            e.elementType = Oo,
            e.lanes = i,
            e;
        case Fo:
            return e = it(19, n, t, l),
            e.elementType = Fo,
            e.lanes = i,
            e;
        case $c:
            return Hi(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Uc:
                    o = 10;
                    break e;
                case Ac:
                    o = 9;
                    break e;
                case Fa:
                    o = 11;
                    break e;
                case Ia:
                    o = 14;
                    break e;
                case Ht:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = it(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Cn(e, t, n, r) {
    return e = it(7, e, r, t),
    e.lanes = n,
    e
}
function Hi(e, t, n, r) {
    return e = it(22, e, r, t),
    e.elementType = $c,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function jo(e, t, n) {
    return e = it(6, e, null, t),
    e.lanes = n,
    e
}
function Po(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Hm(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = oo(0),
    this.expirationTimes = oo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = oo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function gs(e, t, n, r, l, i, o, a, s) {
    return e = new Hm(e,t,n,a,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = it(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ts(i),
    e
}
function Wm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: An,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Df(e) {
    if (!e)
        return sn;
    e = e._reactInternals;
    e: {
        if (Dn(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n))
            return Td(e, n, t)
    }
    return t
}
function Mf(e, t, n, r, l, i, o, a, s) {
    return e = gs(n, r, !0, e, l, i, o, a, s),
    e.context = Df(null),
    n = e.current,
    r = Ae(),
    l = rn(n),
    i = Tt(r, l),
    i.callback = t ?? null,
    tn(n, i, l),
    e.current.lanes = l,
    cl(e, l, r),
    Xe(e, r),
    e
}
function Wi(e, t, n, r) {
    var l = t.current
      , i = Ae()
      , o = rn(l);
    return n = Df(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Tt(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = tn(l, t, o),
    e !== null && (yt(e, l, o, i),
    Kl(e, l, o)),
    o
}
function Ei(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Qu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function xs(e, t) {
    Qu(e, t),
    (e = e.alternate) && Qu(e, t)
}
function Qm() {
    return null
}
var zf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ws(e) {
    this._internalRoot = e
}
Qi.prototype.render = ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    Wi(e, t, null, null)
}
;
Qi.prototype.unmount = ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ln(function() {
            Wi(null, e, null, null)
        }),
        t[Mt] = null
    }
}
;
function Qi(e) {
    this._internalRoot = e
}
Qi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = cd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++)
            ;
        Qt.splice(n, 0, e),
        n === 0 && fd(e)
    }
}
;
function Ss(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ku() {}
function Km(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ei(o);
                i.call(u)
            }
        }
        var o = Mf(t, r, e, 0, null, !1, !1, "", Ku);
        return e._reactRootContainer = o,
        e[Mt] = o.current,
        Jr(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ei(s);
            a.call(u)
        }
    }
    var s = gs(e, 0, !1, null, null, !1, !1, "", Ku);
    return e._reactRootContainer = s,
    e[Mt] = s.current,
    Jr(e.nodeType === 8 ? e.parentNode : e),
    Ln(function() {
        Wi(t, s, n, r)
    }),
    s
}
function Xi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var s = Ei(o);
                a.call(s)
            }
        }
        Wi(t, o, e, l)
    } else
        o = Km(n, t, e, l, r);
    return Ei(o)
}
sd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Dr(t.pendingLanes);
            n !== 0 && ($a(t, n | 1),
            Xe(t, ye()),
            !(G & 6) && (ur = ye() + 500,
            dn()))
        }
        break;
    case 13:
        Ln(function() {
            var r = zt(e, 1);
            if (r !== null) {
                var l = Ae();
                yt(r, e, 1, l)
            }
        }),
        xs(e, 1)
    }
}
;
Ba = function(e) {
    if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
            var n = Ae();
            yt(t, e, 134217728, n)
        }
        xs(e, 134217728)
    }
}
;
ud = function(e) {
    if (e.tag === 13) {
        var t = rn(e)
          , n = zt(e, t);
        if (n !== null) {
            var r = Ae();
            yt(n, e, t, r)
        }
        xs(e, t)
    }
}
;
cd = function() {
    return q
}
;
dd = function(e, t) {
    var n = q;
    try {
        return q = e,
        t()
    } finally {
        q = n
    }
}
;
Ko = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ao(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Ii(r);
                    if (!l)
                        throw Error(P(90));
                    Vc(r),
                    Ao(r, l)
                }
            }
        }
        break;
    case "textarea":
        Wc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Zn(e, !!n.multiple, t, !1)
    }
}
;
Zc = hs;
Jc = Ln;
var Xm = {
    usingClientEntryPoint: !1,
    Events: [fl, Wn, Ii, Gc, bc, hs]
}
  , jr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ym = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = td(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || Qm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber)
        try {
            Mi = Al.inject(Ym),
            Et = Al
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xm;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ss(t))
        throw Error(P(200));
    return Wm(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!Ss(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , l = zf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = gs(e, 1, !1, null, null, n, !1, r, l),
    e[Mt] = t.current,
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new ws(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = td(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return Ln(e)
}
;
et.hydrate = function(e, t, n) {
    if (!Ki(t))
        throw Error(P(200));
    return Xi(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!Ss(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = zf;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Mf(t, null, e, 1, n ?? null, l, !1, i, o),
    e[Mt] = t.current,
    Jr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Qi(t)
}
;
et.render = function(e, t, n) {
    if (!Ki(t))
        throw Error(P(200));
    return Xi(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!Ki(e))
        throw Error(P(40));
    return e._reactRootContainer ? (Ln(function() {
        Xi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Mt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = hs;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ki(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return Xi(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function Of() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)
        } catch (e) {
            console.error(e)
        }
}
Of(),
zc.exports = et;
var ks = zc.exports;
const Gm = kc(ks)
  , bm = Sc({
    __proto__: null,
    default: Gm
}, [ks]);
var Ff, Xu = ks;
Ff = Xu.createRoot,
Xu.hydrateRoot;
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function se() {
    return se = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    se.apply(this, arguments)
}
var xe;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xe || (xe = {}));
const Yu = "popstate";
function Zm(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let {pathname: i, search: o, hash: a} = r.location;
        return al("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function n(r, l) {
        return typeof l == "string" ? l : hl(l)
    }
    return qm(t, n, null, e)
}
function X(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function cr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Jm() {
    return Math.random().toString(36).substr(2, 8)
}
function Gu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function al(e, t, n, r) {
    return n === void 0 && (n = null),
    se({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? fn(t) : t, {
        state: n,
        key: t && t.key || r || Jm()
    })
}
function hl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function fn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function qm(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l=document.defaultView, v5Compat: i=!1} = r
      , o = l.history
      , a = xe.Pop
      , s = null
      , u = f();
    u == null && (u = 0,
    o.replaceState(se({}, o.state, {
        idx: u
    }), ""));
    function f() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = xe.Pop;
        let R = f()
          , m = R == null ? null : R - u;
        u = R,
        s && s({
            action: a,
            location: E.location,
            delta: m
        })
    }
    function p(R, m) {
        a = xe.Push;
        let c = al(E.location, R, m);
        u = f() + 1;
        let y = Gu(c, u)
          , N = E.createHref(c);
        try {
            o.pushState(y, "", N)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError")
                throw L;
            l.location.assign(N)
        }
        i && s && s({
            action: a,
            location: E.location,
            delta: 1
        })
    }
    function w(R, m) {
        a = xe.Replace;
        let c = al(E.location, R, m);
        u = f();
        let y = Gu(c, u)
          , N = E.createHref(c);
        o.replaceState(y, "", N),
        i && s && s({
            action: a,
            location: E.location,
            delta: 0
        })
    }
    function S(R) {
        let m = l.location.origin !== "null" ? l.location.origin : l.location.href
          , c = typeof R == "string" ? R : hl(R);
        return c = c.replace(/ $/, "%20"),
        X(m, "No window.location.(origin|href) available to create URL for href: " + c),
        new URL(c,m)
    }
    let E = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(R) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Yu, d),
            s = R,
            () => {
                l.removeEventListener(Yu, d),
                s = null
            }
        },
        createHref(R) {
            return t(l, R)
        },
        createURL: S,
        encodeLocation(R) {
            let m = S(R);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: p,
        replace: w,
        go(R) {
            return o.go(R)
        }
    };
    return E
}
var J;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(J || (J = {}));
const e0 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function t0(e) {
    return e.index === !0
}
function Ni(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map( (l, i) => {
        let o = [...n, String(i)]
          , a = typeof l.id == "string" ? l.id : o.join("-");
        if (X(l.index !== !0 || !l.children, "Cannot specify children on an index route"),
        X(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        t0(l)) {
            let s = se({}, l, t(l), {
                id: a
            });
            return r[a] = s,
            s
        } else {
            let s = se({}, l, t(l), {
                id: a,
                children: void 0
            });
            return r[a] = s,
            l.children && (s.children = Ni(l.children, t, o, r)),
            s
        }
    }
    )
}
function gn(e, t, n) {
    return n === void 0 && (n = "/"),
    ql(e, t, n, !1)
}
function ql(e, t, n, r) {
    let l = typeof t == "string" ? fn(t) : t
      , i = ml(l.pathname || "/", n);
    if (i == null)
        return null;
    let o = If(e);
    r0(o);
    let a = null;
    for (let s = 0; a == null && s < o.length; ++s) {
        let u = h0(i);
        a = f0(o[s], u, r)
    }
    return a
}
function n0(e, t) {
    let {route: n, pathname: r, params: l} = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}
function If(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let l = (i, o, a) => {
        let s = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        s.relativePath.startsWith("/") && (X(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = on([r, s.relativePath])
          , f = n.concat(s);
        i.children && i.children.length > 0 && (X(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        If(i.children, t, f, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: c0(u, i.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            l(i, o);
        else
            for (let s of Uf(i.path))
                l(i, o, s)
    }
    ),
    t
}
function Uf(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [i, ""] : [i];
    let o = Uf(r.join("/"))
      , a = [];
    return a.push(...o.map(s => s === "" ? i : [i, s].join("/"))),
    l && a.push(...o),
    a.map(s => e.startsWith("/") && s === "" ? "/" : s)
}
function r0(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : d0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const l0 = /^:[\w-]+$/
  , i0 = 3
  , o0 = 2
  , a0 = 1
  , s0 = 10
  , u0 = -2
  , bu = e => e === "*";
function c0(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(bu) && (r += u0),
    t && (r += o0),
    n.filter(l => !bu(l)).reduce( (l, i) => l + (l0.test(i) ? i0 : i === "" ? a0 : s0), r)
}
function d0(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function f0(e, t, n) {
    n === void 0 && (n = !1);
    let {routesMeta: r} = e
      , l = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let s = r[a]
          , u = a === r.length - 1
          , f = i === "/" ? t : t.slice(i.length) || "/"
          , d = Zu({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: u
        }, f)
          , p = s.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Zu({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1
        }, f)),
        !d)
            return null;
        Object.assign(l, d.params),
        o.push({
            params: l,
            pathname: on([i, d.pathname]),
            pathnameBase: y0(on([i, d.pathnameBase])),
            route: p
        }),
        d.pathnameBase !== "/" && (i = on([i, d.pathnameBase]))
    }
    return o
}
function Zu(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = p0(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let i = l[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = l.slice(1);
    return {
        params: r.reduce( (u, f, d) => {
            let {paramName: p, isOptional: w} = f;
            if (p === "*") {
                let E = a[d] || "";
                o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[d];
            return w && !S ? u[p] = void 0 : u[p] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function p0(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, s) => (r.push({
        paramName: a,
        isOptional: s != null
    }),
    s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function h0(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return cr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ml(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function m0(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? fn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : v0(n, t) : t,
        search: g0(r),
        hash: x0(l)
    }
}
function v0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function _o(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Af(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function $f(e, t) {
    let n = Af(e);
    return t ? n.map( (r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Bf(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = fn(e) : (l = se({}, e),
    X(!l.pathname || !l.pathname.includes("?"), _o("?", "pathname", "search", l)),
    X(!l.pathname || !l.pathname.includes("#"), _o("#", "pathname", "hash", l)),
    X(!l.search || !l.search.includes("#"), _o("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "", o = i ? "/" : l.pathname, a;
    if (o == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let p = o.split("/");
            for (; p[0] === ".."; )
                p.shift(),
                d -= 1;
            l.pathname = p.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let s = m0(l, a)
      , u = o && o !== "/" && o.endsWith("/")
      , f = (i || o === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"),
    s
}
const on = e => e.join("/").replace(/\/\/+/g, "/")
  , y0 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , g0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , x0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Ci {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = l,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function sl(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Vf = ["post", "put", "patch", "delete"]
  , w0 = new Set(Vf)
  , S0 = ["get", ...Vf]
  , k0 = new Set(S0)
  , E0 = new Set([301, 302, 303, 307, 308])
  , N0 = new Set([307, 308])
  , Ro = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , C0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Pr = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , Es = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , j0 = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
})
  , Hf = "remix-router-transitions";
function P0(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    X(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties)
        l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let h = e.detectErrorBoundary;
        l = x => ({
            hasErrorBoundary: h(x)
        })
    } else
        l = j0;
    let i = {}, o = Ni(e.routes, l, void 0, i), a, s = e.basename || "/", u = e.dataStrategy || T0, f = e.patchRoutesOnNavigation, d = se({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
    }, e.future), p = null, w = new Set, S = null, E = null, R = null, m = e.hydrationData != null, c = gn(o, e.history.location, s), y = !1, N = null;
    if (c == null && !f) {
        let h = Ve(404, {
            pathname: e.history.location.pathname
        })
          , {matches: x, route: k} = sc(o);
        c = x,
        N = {
            [k.id]: h
        }
    }
    c && !e.hydrationData && xl(c, o, e.history.location.pathname).active && (c = null);
    let L;
    if (c)
        if (c.some(h => h.route.lazy))
            L = !1;
        else if (!c.some(h => h.route.loader))
            L = !0;
        else if (d.v7_partialHydration) {
            let h = e.hydrationData ? e.hydrationData.loaderData : null
              , x = e.hydrationData ? e.hydrationData.errors : null;
            if (x) {
                let k = c.findIndex(C => x[C.route.id] !== void 0);
                L = c.slice(0, k + 1).every(C => !ja(C.route, h, x))
            } else
                L = c.every(k => !ja(k.route, h, x))
        } else
            L = e.hydrationData != null;
    else if (L = !1,
    c = [],
    d.v7_partialHydration) {
        let h = xl(null, o, e.history.location.pathname);
        h.active && h.matches && (y = !0,
        c = h.matches)
    }
    let O, g = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: c,
        initialized: L,
        navigation: Ro,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || N,
        fetchers: new Map,
        blockers: new Map
    }, j = xe.Pop, B = !1, D, ee = !1, re = new Map, Se = null, je = !1, ut = !1, It = [], Ut = new Set, T = new Map, V = 0, H = -1, te = new Map, ne = new Set, ct = new Map, Ye = new Map, Oe = new Set, Fe = new Map, nt = new Map, vl;
    function op() {
        if (p = e.history.listen(h => {
            let {action: x, location: k, delta: C} = h;
            if (vl) {
                vl(),
                vl = void 0;
                return
            }
            cr(nt.size === 0 || C != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let M = Os({
                currentLocation: g.location,
                nextLocation: k,
                historyAction: x
            });
            if (M && C != null) {
                let A = new Promise(W => {
                    vl = W
                }
                );
                e.history.go(C * -1),
                gl(M, {
                    state: "blocked",
                    location: k,
                    proceed() {
                        gl(M, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: k
                        }),
                        A.then( () => e.history.go(C))
                    },
                    reset() {
                        let W = new Map(g.blockers);
                        W.set(M, Pr),
                        Ie({
                            blockers: W
                        })
                    }
                });
                return
            }
            return pn(x, k)
        }
        ),
        n) {
            Q0(t, re);
            let h = () => K0(t, re);
            t.addEventListener("pagehide", h),
            Se = () => t.removeEventListener("pagehide", h)
        }
        return g.initialized || pn(xe.Pop, g.location, {
            initialHydration: !0
        }),
        O
    }
    function ap() {
        p && p(),
        Se && Se(),
        w.clear(),
        D && D.abort(),
        g.fetchers.forEach( (h, x) => yl(x)),
        g.blockers.forEach( (h, x) => zs(x))
    }
    function sp(h) {
        return w.add(h),
        () => w.delete(h)
    }
    function Ie(h, x) {
        x === void 0 && (x = {}),
        g = se({}, g, h);
        let k = []
          , C = [];
        d.v7_fetcherPersist && g.fetchers.forEach( (M, A) => {
            M.state === "idle" && (Oe.has(A) ? C.push(A) : k.push(A))
        }
        ),
        Oe.forEach(M => {
            !g.fetchers.has(M) && !T.has(M) && C.push(M)
        }
        ),
        [...w].forEach(M => M(g, {
            deletedFetchers: C,
            viewTransitionOpts: x.viewTransitionOpts,
            flushSync: x.flushSync === !0
        })),
        d.v7_fetcherPersist ? (k.forEach(M => g.fetchers.delete(M)),
        C.forEach(M => yl(M))) : C.forEach(M => Oe.delete(M))
    }
    function Mn(h, x, k) {
        var C, M;
        let {flushSync: A} = k === void 0 ? {} : k, W = g.actionData != null && g.navigation.formMethod != null && ht(g.navigation.formMethod) && g.navigation.state === "loading" && ((C = h.state) == null ? void 0 : C._isRedirect) !== !0, I;
        x.actionData ? Object.keys(x.actionData).length > 0 ? I = x.actionData : I = null : W ? I = g.actionData : I = null;
        let U = x.loaderData ? oc(g.loaderData, x.loaderData, x.matches || [], x.errors) : g.loaderData
          , F = g.blockers;
        F.size > 0 && (F = new Map(F),
        F.forEach( (Y, Pe) => F.set(Pe, Pr)));
        let $ = B === !0 || g.navigation.formMethod != null && ht(g.navigation.formMethod) && ((M = h.state) == null ? void 0 : M._isRedirect) !== !0;
        a && (o = a,
        a = void 0),
        je || j === xe.Pop || (j === xe.Push ? e.history.push(h, h.state) : j === xe.Replace && e.history.replace(h, h.state));
        let Q;
        if (j === xe.Pop) {
            let Y = re.get(g.location.pathname);
            Y && Y.has(h.pathname) ? Q = {
                currentLocation: g.location,
                nextLocation: h
            } : re.has(h.pathname) && (Q = {
                currentLocation: h,
                nextLocation: g.location
            })
        } else if (ee) {
            let Y = re.get(g.location.pathname);
            Y ? Y.add(h.pathname) : (Y = new Set([h.pathname]),
            re.set(g.location.pathname, Y)),
            Q = {
                currentLocation: g.location,
                nextLocation: h
            }
        }
        Ie(se({}, x, {
            actionData: I,
            loaderData: U,
            historyAction: j,
            location: h,
            initialized: !0,
            navigation: Ro,
            revalidation: "idle",
            restoreScrollPosition: Is(h, x.matches || g.matches),
            preventScrollReset: $,
            blockers: F
        }), {
            viewTransitionOpts: Q,
            flushSync: A === !0
        }),
        j = xe.Pop,
        B = !1,
        ee = !1,
        je = !1,
        ut = !1,
        It = []
    }
    async function Ps(h, x) {
        if (typeof h == "number") {
            e.history.go(h);
            return
        }
        let k = Ca(g.location, g.matches, s, d.v7_prependBasename, h, d.v7_relativeSplatPath, x == null ? void 0 : x.fromRouteId, x == null ? void 0 : x.relative)
          , {path: C, submission: M, error: A} = Ju(d.v7_normalizeFormMethod, !1, k, x)
          , W = g.location
          , I = al(g.location, C, x && x.state);
        I = se({}, I, e.history.encodeLocation(I));
        let U = x && x.replace != null ? x.replace : void 0
          , F = xe.Push;
        U === !0 ? F = xe.Replace : U === !1 || M != null && ht(M.formMethod) && M.formAction === g.location.pathname + g.location.search && (F = xe.Replace);
        let $ = x && "preventScrollReset"in x ? x.preventScrollReset === !0 : void 0
          , Q = (x && x.flushSync) === !0
          , Y = Os({
            currentLocation: W,
            nextLocation: I,
            historyAction: F
        });
        if (Y) {
            gl(Y, {
                state: "blocked",
                location: I,
                proceed() {
                    gl(Y, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: I
                    }),
                    Ps(h, x)
                },
                reset() {
                    let Pe = new Map(g.blockers);
                    Pe.set(Y, Pr),
                    Ie({
                        blockers: Pe
                    })
                }
            });
            return
        }
        return await pn(F, I, {
            submission: M,
            pendingError: A,
            preventScrollReset: $,
            replace: x && x.replace,
            enableViewTransition: x && x.viewTransition,
            flushSync: Q
        })
    }
    function up() {
        if (Zi(),
        Ie({
            revalidation: "loading"
        }),
        g.navigation.state !== "submitting") {
            if (g.navigation.state === "idle") {
                pn(g.historyAction, g.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            pn(j || g.historyAction, g.navigation.location, {
                overrideNavigation: g.navigation,
                enableViewTransition: ee === !0
            })
        }
    }
    async function pn(h, x, k) {
        D && D.abort(),
        D = null,
        j = h,
        je = (k && k.startUninterruptedRevalidation) === !0,
        xp(g.location, g.matches),
        B = (k && k.preventScrollReset) === !0,
        ee = (k && k.enableViewTransition) === !0;
        let C = a || o
          , M = k && k.overrideNavigation
          , A = k != null && k.initialHydration && g.matches && g.matches.length > 0 && !y ? g.matches : gn(C, x, s)
          , W = (k && k.flushSync) === !0
          , I = xl(A, C, x.pathname);
        if (I.active && I.matches && (A = I.matches),
        !A) {
            let {error: le, notFoundMatches: Z, route: pe} = Ji(x.pathname);
            Mn(x, {
                matches: Z,
                loaderData: {},
                errors: {
                    [pe.id]: le
                }
            }, {
                flushSync: W
            });
            return
        }
        if (g.initialized && !ut && I0(g.location, x) && !(k && k.submission && ht(k.submission.formMethod))) {
            Mn(x, {
                matches: A
            }, {
                flushSync: W
            });
            return
        }
        D = new AbortController;
        let U = Un(e.history, x, D.signal, k && k.submission), F;
        if (k && k.pendingError)
            F = [xn(A).route.id, {
                type: J.error,
                error: k.pendingError
            }];
        else if (k && k.submission && ht(k.submission.formMethod)) {
            let le = await cp(U, x, k.submission, A, I.active, {
                replace: k.replace,
                flushSync: W
            });
            if (le.shortCircuited)
                return;
            if (le.pendingActionResult) {
                let[Z,pe] = le.pendingActionResult;
                if (be(pe) && sl(pe.error) && pe.error.status === 404) {
                    D = null,
                    Mn(x, {
                        matches: le.matches,
                        loaderData: {},
                        errors: {
                            [Z]: pe.error
                        }
                    });
                    return
                }
            }
            A = le.matches || A,
            F = le.pendingActionResult,
            M = Lo(x, k.submission),
            W = !1,
            I.active = !1,
            U = Un(e.history, U.url, U.signal)
        }
        let {shortCircuited: $, matches: Q, loaderData: Y, errors: Pe} = await dp(U, x, A, I.active, M, k && k.submission, k && k.fetcherSubmission, k && k.replace, k && k.initialHydration === !0, W, F);
        $ || (D = null,
        Mn(x, se({
            matches: Q || A
        }, ac(F), {
            loaderData: Y,
            errors: Pe
        })))
    }
    async function cp(h, x, k, C, M, A) {
        A === void 0 && (A = {}),
        Zi();
        let W = H0(x, k);
        if (Ie({
            navigation: W
        }, {
            flushSync: A.flushSync === !0
        }),
        M) {
            let F = await wl(C, x.pathname, h.signal);
            if (F.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (F.type === "error") {
                let $ = xn(F.partialMatches).route.id;
                return {
                    matches: F.partialMatches,
                    pendingActionResult: [$, {
                        type: J.error,
                        error: F.error
                    }]
                }
            } else if (F.matches)
                C = F.matches;
            else {
                let {notFoundMatches: $, error: Q, route: Y} = Ji(x.pathname);
                return {
                    matches: $,
                    pendingActionResult: [Y.id, {
                        type: J.error,
                        error: Q
                    }]
                }
            }
        }
        let I, U = zr(C, x);
        if (!U.route.action && !U.route.lazy)
            I = {
                type: J.error,
                error: Ve(405, {
                    method: h.method,
                    pathname: x.pathname,
                    routeId: U.route.id
                })
            };
        else if (I = (await mr("action", g, h, [U], C, null))[U.route.id],
        h.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (En(I)) {
            let F;
            return A && A.replace != null ? F = A.replace : F = rc(I.response.headers.get("Location"), new URL(h.url), s) === g.location.pathname + g.location.search,
            await hn(h, I, !0, {
                submission: k,
                replace: F
            }),
            {
                shortCircuited: !0
            }
        }
        if (Gt(I))
            throw Ve(400, {
                type: "defer-action"
            });
        if (be(I)) {
            let F = xn(C, U.route.id);
            return (A && A.replace) !== !0 && (j = xe.Push),
            {
                matches: C,
                pendingActionResult: [F.route.id, I]
            }
        }
        return {
            matches: C,
            pendingActionResult: [U.route.id, I]
        }
    }
    async function dp(h, x, k, C, M, A, W, I, U, F, $) {
        let Q = M || Lo(x, A)
          , Y = A || W || cc(Q)
          , Pe = !je && (!d.v7_partialHydration || !U);
        if (C) {
            if (Pe) {
                let he = _s($);
                Ie(se({
                    navigation: Q
                }, he !== void 0 ? {
                    actionData: he
                } : {}), {
                    flushSync: F
                })
            }
            let b = await wl(k, x.pathname, h.signal);
            if (b.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (b.type === "error") {
                let he = xn(b.partialMatches).route.id;
                return {
                    matches: b.partialMatches,
                    loaderData: {},
                    errors: {
                        [he]: b.error
                    }
                }
            } else if (b.matches)
                k = b.matches;
            else {
                let {error: he, notFoundMatches: On, route: gr} = Ji(x.pathname);
                return {
                    matches: On,
                    loaderData: {},
                    errors: {
                        [gr.id]: he
                    }
                }
            }
        }
        let le = a || o
          , [Z,pe] = ec(e.history, g, k, Y, x, d.v7_partialHydration && U === !0, d.v7_skipActionErrorRevalidation, ut, It, Ut, Oe, ct, ne, le, s, $);
        if (qi(b => !(k && k.some(he => he.route.id === b)) || Z && Z.some(he => he.route.id === b)),
        H = ++V,
        Z.length === 0 && pe.length === 0) {
            let b = Ds();
            return Mn(x, se({
                matches: k,
                loaderData: {},
                errors: $ && be($[1]) ? {
                    [$[0]]: $[1].error
                } : null
            }, ac($), b ? {
                fetchers: new Map(g.fetchers)
            } : {}), {
                flushSync: F
            }),
            {
                shortCircuited: !0
            }
        }
        if (Pe) {
            let b = {};
            if (!C) {
                b.navigation = Q;
                let he = _s($);
                he !== void 0 && (b.actionData = he)
            }
            pe.length > 0 && (b.fetchers = fp(pe)),
            Ie(b, {
                flushSync: F
            })
        }
        pe.forEach(b => {
            $t(b.key),
            b.controller && T.set(b.key, b.controller)
        }
        );
        let zn = () => pe.forEach(b => $t(b.key));
        D && D.signal.addEventListener("abort", zn);
        let {loaderResults: vr, fetcherResults: jt} = await Rs(g, k, Z, pe, h);
        if (h.signal.aborted)
            return {
                shortCircuited: !0
            };
        D && D.signal.removeEventListener("abort", zn),
        pe.forEach(b => T.delete(b.key));
        let xt = $l(vr);
        if (xt)
            return await hn(h, xt.result, !0, {
                replace: I
            }),
            {
                shortCircuited: !0
            };
        if (xt = $l(jt),
        xt)
            return ne.add(xt.key),
            await hn(h, xt.result, !0, {
                replace: I
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: eo, errors: yr} = ic(g, k, vr, $, pe, jt, Fe);
        Fe.forEach( (b, he) => {
            b.subscribe(On => {
                (On || b.done) && Fe.delete(he)
            }
            )
        }
        ),
        d.v7_partialHydration && U && g.errors && (yr = se({}, g.errors, yr));
        let mn = Ds()
          , Sl = Ms(H)
          , kl = mn || Sl || pe.length > 0;
        return se({
            matches: k,
            loaderData: eo,
            errors: yr
        }, kl ? {
            fetchers: new Map(g.fetchers)
        } : {})
    }
    function _s(h) {
        if (h && !be(h[1]))
            return {
                [h[0]]: h[1].data
            };
        if (g.actionData)
            return Object.keys(g.actionData).length === 0 ? null : g.actionData
    }
    function fp(h) {
        return h.forEach(x => {
            let k = g.fetchers.get(x.key)
              , C = _r(void 0, k ? k.data : void 0);
            g.fetchers.set(x.key, C)
        }
        ),
        new Map(g.fetchers)
    }
    function pp(h, x, k, C) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        $t(h);
        let M = (C && C.flushSync) === !0
          , A = a || o
          , W = Ca(g.location, g.matches, s, d.v7_prependBasename, k, d.v7_relativeSplatPath, x, C == null ? void 0 : C.relative)
          , I = gn(A, W, s)
          , U = xl(I, A, W);
        if (U.active && U.matches && (I = U.matches),
        !I) {
            Ct(h, x, Ve(404, {
                pathname: W
            }), {
                flushSync: M
            });
            return
        }
        let {path: F, submission: $, error: Q} = Ju(d.v7_normalizeFormMethod, !0, W, C);
        if (Q) {
            Ct(h, x, Q, {
                flushSync: M
            });
            return
        }
        let Y = zr(I, F)
          , Pe = (C && C.preventScrollReset) === !0;
        if ($ && ht($.formMethod)) {
            hp(h, x, F, Y, I, U.active, M, Pe, $);
            return
        }
        ct.set(h, {
            routeId: x,
            path: F
        }),
        mp(h, x, F, Y, I, U.active, M, Pe, $)
    }
    async function hp(h, x, k, C, M, A, W, I, U) {
        Zi(),
        ct.delete(h);
        function F(ge) {
            if (!ge.route.action && !ge.route.lazy) {
                let Fn = Ve(405, {
                    method: U.formMethod,
                    pathname: k,
                    routeId: x
                });
                return Ct(h, x, Fn, {
                    flushSync: W
                }),
                !0
            }
            return !1
        }
        if (!A && F(C))
            return;
        let $ = g.fetchers.get(h);
        At(h, W0(U, $), {
            flushSync: W
        });
        let Q = new AbortController
          , Y = Un(e.history, k, Q.signal, U);
        if (A) {
            let ge = await wl(M, new URL(Y.url).pathname, Y.signal);
            if (ge.type === "aborted")
                return;
            if (ge.type === "error") {
                Ct(h, x, ge.error, {
                    flushSync: W
                });
                return
            } else if (ge.matches) {
                if (M = ge.matches,
                C = zr(M, k),
                F(C))
                    return
            } else {
                Ct(h, x, Ve(404, {
                    pathname: k
                }), {
                    flushSync: W
                });
                return
            }
        }
        T.set(h, Q);
        let Pe = V
          , Z = (await mr("action", g, Y, [C], M, h))[C.route.id];
        if (Y.signal.aborted) {
            T.get(h) === Q && T.delete(h);
            return
        }
        if (d.v7_fetcherPersist && Oe.has(h)) {
            if (En(Z) || be(Z)) {
                At(h, Vt(void 0));
                return
            }
        } else {
            if (En(Z))
                if (T.delete(h),
                H > Pe) {
                    At(h, Vt(void 0));
                    return
                } else
                    return ne.add(h),
                    At(h, _r(U)),
                    hn(Y, Z, !1, {
                        fetcherSubmission: U,
                        preventScrollReset: I
                    });
            if (be(Z)) {
                Ct(h, x, Z.error);
                return
            }
        }
        if (Gt(Z))
            throw Ve(400, {
                type: "defer-action"
            });
        let pe = g.navigation.location || g.location
          , zn = Un(e.history, pe, Q.signal)
          , vr = a || o
          , jt = g.navigation.state !== "idle" ? gn(vr, g.navigation.location, s) : g.matches;
        X(jt, "Didn't find any matches after fetcher action");
        let xt = ++V;
        te.set(h, xt);
        let eo = _r(U, Z.data);
        g.fetchers.set(h, eo);
        let[yr,mn] = ec(e.history, g, jt, U, pe, !1, d.v7_skipActionErrorRevalidation, ut, It, Ut, Oe, ct, ne, vr, s, [C.route.id, Z]);
        mn.filter(ge => ge.key !== h).forEach(ge => {
            let Fn = ge.key
              , Us = g.fetchers.get(Fn)
              , kp = _r(void 0, Us ? Us.data : void 0);
            g.fetchers.set(Fn, kp),
            $t(Fn),
            ge.controller && T.set(Fn, ge.controller)
        }
        ),
        Ie({
            fetchers: new Map(g.fetchers)
        });
        let Sl = () => mn.forEach(ge => $t(ge.key));
        Q.signal.addEventListener("abort", Sl);
        let {loaderResults: kl, fetcherResults: b} = await Rs(g, jt, yr, mn, zn);
        if (Q.signal.aborted)
            return;
        Q.signal.removeEventListener("abort", Sl),
        te.delete(h),
        T.delete(h),
        mn.forEach(ge => T.delete(ge.key));
        let he = $l(kl);
        if (he)
            return hn(zn, he.result, !1, {
                preventScrollReset: I
            });
        if (he = $l(b),
        he)
            return ne.add(he.key),
            hn(zn, he.result, !1, {
                preventScrollReset: I
            });
        let {loaderData: On, errors: gr} = ic(g, jt, kl, void 0, mn, b, Fe);
        if (g.fetchers.has(h)) {
            let ge = Vt(Z.data);
            g.fetchers.set(h, ge)
        }
        Ms(xt),
        g.navigation.state === "loading" && xt > H ? (X(j, "Expected pending action"),
        D && D.abort(),
        Mn(g.navigation.location, {
            matches: jt,
            loaderData: On,
            errors: gr,
            fetchers: new Map(g.fetchers)
        })) : (Ie({
            errors: gr,
            loaderData: oc(g.loaderData, On, jt, gr),
            fetchers: new Map(g.fetchers)
        }),
        ut = !1)
    }
    async function mp(h, x, k, C, M, A, W, I, U) {
        let F = g.fetchers.get(h);
        At(h, _r(U, F ? F.data : void 0), {
            flushSync: W
        });
        let $ = new AbortController
          , Q = Un(e.history, k, $.signal);
        if (A) {
            let Z = await wl(M, new URL(Q.url).pathname, Q.signal);
            if (Z.type === "aborted")
                return;
            if (Z.type === "error") {
                Ct(h, x, Z.error, {
                    flushSync: W
                });
                return
            } else if (Z.matches)
                M = Z.matches,
                C = zr(M, k);
            else {
                Ct(h, x, Ve(404, {
                    pathname: k
                }), {
                    flushSync: W
                });
                return
            }
        }
        T.set(h, $);
        let Y = V
          , le = (await mr("loader", g, Q, [C], M, h))[C.route.id];
        if (Gt(le) && (le = await Ns(le, Q.signal, !0) || le),
        T.get(h) === $ && T.delete(h),
        !Q.signal.aborted) {
            if (Oe.has(h)) {
                At(h, Vt(void 0));
                return
            }
            if (En(le))
                if (H > Y) {
                    At(h, Vt(void 0));
                    return
                } else {
                    ne.add(h),
                    await hn(Q, le, !1, {
                        preventScrollReset: I
                    });
                    return
                }
            if (be(le)) {
                Ct(h, x, le.error);
                return
            }
            X(!Gt(le), "Unhandled fetcher deferred data"),
            At(h, Vt(le.data))
        }
    }
    async function hn(h, x, k, C) {
        let {submission: M, fetcherSubmission: A, preventScrollReset: W, replace: I} = C === void 0 ? {} : C;
        x.response.headers.has("X-Remix-Revalidate") && (ut = !0);
        let U = x.response.headers.get("Location");
        X(U, "Expected a Location header on the redirect Response"),
        U = rc(U, new URL(h.url), s);
        let F = al(g.location, U, {
            _isRedirect: !0
        });
        if (n) {
            let Z = !1;
            if (x.response.headers.has("X-Remix-Reload-Document"))
                Z = !0;
            else if (Es.test(U)) {
                const pe = e.history.createURL(U);
                Z = pe.origin !== t.location.origin || ml(pe.pathname, s) == null
            }
            if (Z) {
                I ? t.location.replace(U) : t.location.assign(U);
                return
            }
        }
        D = null;
        let $ = I === !0 || x.response.headers.has("X-Remix-Replace") ? xe.Replace : xe.Push
          , {formMethod: Q, formAction: Y, formEncType: Pe} = g.navigation;
        !M && !A && Q && Y && Pe && (M = cc(g.navigation));
        let le = M || A;
        if (N0.has(x.response.status) && le && ht(le.formMethod))
            await pn($, F, {
                submission: se({}, le, {
                    formAction: U
                }),
                preventScrollReset: W || B,
                enableViewTransition: k ? ee : void 0
            });
        else {
            let Z = Lo(F, M);
            await pn($, F, {
                overrideNavigation: Z,
                fetcherSubmission: A,
                preventScrollReset: W || B,
                enableViewTransition: k ? ee : void 0
            })
        }
    }
    async function mr(h, x, k, C, M, A) {
        let W, I = {};
        try {
            W = await D0(u, h, x, k, C, M, A, i, l)
        } catch (U) {
            return C.forEach(F => {
                I[F.route.id] = {
                    type: J.error,
                    error: U
                }
            }
            ),
            I
        }
        for (let[U,F] of Object.entries(W))
            if (U0(F)) {
                let $ = F.result;
                I[U] = {
                    type: J.redirect,
                    response: O0($, k, U, M, s, d.v7_relativeSplatPath)
                }
            } else
                I[U] = await z0(F);
        return I
    }
    async function Rs(h, x, k, C, M) {
        let A = h.matches
          , W = mr("loader", h, M, k, x, null)
          , I = Promise.all(C.map(async $ => {
            if ($.matches && $.match && $.controller) {
                let Y = (await mr("loader", h, Un(e.history, $.path, $.controller.signal), [$.match], $.matches, $.key))[$.match.route.id];
                return {
                    [$.key]: Y
                }
            } else
                return Promise.resolve({
                    [$.key]: {
                        type: J.error,
                        error: Ve(404, {
                            pathname: $.path
                        })
                    }
                })
        }
        ))
          , U = await W
          , F = (await I).reduce( ($, Q) => Object.assign($, Q), {});
        return await Promise.all([B0(x, U, M.signal, A, h.loaderData), V0(x, F, C)]),
        {
            loaderResults: U,
            fetcherResults: F
        }
    }
    function Zi() {
        ut = !0,
        It.push(...qi()),
        ct.forEach( (h, x) => {
            T.has(x) && Ut.add(x),
            $t(x)
        }
        )
    }
    function At(h, x, k) {
        k === void 0 && (k = {}),
        g.fetchers.set(h, x),
        Ie({
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (k && k.flushSync) === !0
        })
    }
    function Ct(h, x, k, C) {
        C === void 0 && (C = {});
        let M = xn(g.matches, x);
        yl(h),
        Ie({
            errors: {
                [M.route.id]: k
            },
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (C && C.flushSync) === !0
        })
    }
    function Ls(h) {
        return Ye.set(h, (Ye.get(h) || 0) + 1),
        Oe.has(h) && Oe.delete(h),
        g.fetchers.get(h) || C0
    }
    function yl(h) {
        let x = g.fetchers.get(h);
        T.has(h) && !(x && x.state === "loading" && te.has(h)) && $t(h),
        ct.delete(h),
        te.delete(h),
        ne.delete(h),
        d.v7_fetcherPersist && Oe.delete(h),
        Ut.delete(h),
        g.fetchers.delete(h)
    }
    function vp(h) {
        let x = (Ye.get(h) || 0) - 1;
        x <= 0 ? (Ye.delete(h),
        Oe.add(h),
        d.v7_fetcherPersist || yl(h)) : Ye.set(h, x),
        Ie({
            fetchers: new Map(g.fetchers)
        })
    }
    function $t(h) {
        let x = T.get(h);
        x && (x.abort(),
        T.delete(h))
    }
    function Ts(h) {
        for (let x of h) {
            let k = Ls(x)
              , C = Vt(k.data);
            g.fetchers.set(x, C)
        }
    }
    function Ds() {
        let h = []
          , x = !1;
        for (let k of ne) {
            let C = g.fetchers.get(k);
            X(C, "Expected fetcher: " + k),
            C.state === "loading" && (ne.delete(k),
            h.push(k),
            x = !0)
        }
        return Ts(h),
        x
    }
    function Ms(h) {
        let x = [];
        for (let[k,C] of te)
            if (C < h) {
                let M = g.fetchers.get(k);
                X(M, "Expected fetcher: " + k),
                M.state === "loading" && ($t(k),
                te.delete(k),
                x.push(k))
            }
        return Ts(x),
        x.length > 0
    }
    function yp(h, x) {
        let k = g.blockers.get(h) || Pr;
        return nt.get(h) !== x && nt.set(h, x),
        k
    }
    function zs(h) {
        g.blockers.delete(h),
        nt.delete(h)
    }
    function gl(h, x) {
        let k = g.blockers.get(h) || Pr;
        X(k.state === "unblocked" && x.state === "blocked" || k.state === "blocked" && x.state === "blocked" || k.state === "blocked" && x.state === "proceeding" || k.state === "blocked" && x.state === "unblocked" || k.state === "proceeding" && x.state === "unblocked", "Invalid blocker state transition: " + k.state + " -> " + x.state);
        let C = new Map(g.blockers);
        C.set(h, x),
        Ie({
            blockers: C
        })
    }
    function Os(h) {
        let {currentLocation: x, nextLocation: k, historyAction: C} = h;
        if (nt.size === 0)
            return;
        nt.size > 1 && cr(!1, "A router only supports one blocker at a time");
        let M = Array.from(nt.entries())
          , [A,W] = M[M.length - 1]
          , I = g.blockers.get(A);
        if (!(I && I.state === "proceeding") && W({
            currentLocation: x,
            nextLocation: k,
            historyAction: C
        }))
            return A
    }
    function Ji(h) {
        let x = Ve(404, {
            pathname: h
        })
          , k = a || o
          , {matches: C, route: M} = sc(k);
        return qi(),
        {
            notFoundMatches: C,
            route: M,
            error: x
        }
    }
    function qi(h) {
        let x = [];
        return Fe.forEach( (k, C) => {
            (!h || h(C)) && (k.cancel(),
            x.push(C),
            Fe.delete(C))
        }
        ),
        x
    }
    function gp(h, x, k) {
        if (S = h,
        R = x,
        E = k || null,
        !m && g.navigation === Ro) {
            m = !0;
            let C = Is(g.location, g.matches);
            C != null && Ie({
                restoreScrollPosition: C
            })
        }
        return () => {
            S = null,
            R = null,
            E = null
        }
    }
    function Fs(h, x) {
        return E && E(h, x.map(C => n0(C, g.loaderData))) || h.key
    }
    function xp(h, x) {
        if (S && R) {
            let k = Fs(h, x);
            S[k] = R()
        }
    }
    function Is(h, x) {
        if (S) {
            let k = Fs(h, x)
              , C = S[k];
            if (typeof C == "number")
                return C
        }
        return null
    }
    function xl(h, x, k) {
        if (f)
            if (h) {
                if (Object.keys(h[0].params).length > 0)
                    return {
                        active: !0,
                        matches: ql(x, k, s, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: ql(x, k, s, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function wl(h, x, k) {
        if (!f)
            return {
                type: "success",
                matches: h
            };
        let C = h;
        for (; ; ) {
            let M = a == null
              , A = a || o
              , W = i;
            try {
                await f({
                    signal: k,
                    path: x,
                    matches: C,
                    patch: (F, $) => {
                        k.aborted || nc(F, $, A, W, l)
                    }
                })
            } catch (F) {
                return {
                    type: "error",
                    error: F,
                    partialMatches: C
                }
            } finally {
                M && !k.aborted && (o = [...o])
            }
            if (k.aborted)
                return {
                    type: "aborted"
                };
            let I = gn(A, x, s);
            if (I)
                return {
                    type: "success",
                    matches: I
                };
            let U = ql(A, x, s, !0);
            if (!U || C.length === U.length && C.every( (F, $) => F.route.id === U[$].route.id))
                return {
                    type: "success",
                    matches: null
                };
            C = U
        }
    }
    function wp(h) {
        i = {},
        a = Ni(h, l, void 0, i)
    }
    function Sp(h, x) {
        let k = a == null;
        nc(h, x, a || o, i, l),
        k && (o = [...o],
        Ie({}))
    }
    return O = {
        get basename() {
            return s
        },
        get future() {
            return d
        },
        get state() {
            return g
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: op,
        subscribe: sp,
        enableScrollRestoration: gp,
        navigate: Ps,
        fetch: pp,
        revalidate: up,
        createHref: h => e.history.createHref(h),
        encodeLocation: h => e.history.encodeLocation(h),
        getFetcher: Ls,
        deleteFetcher: vp,
        dispose: ap,
        getBlocker: yp,
        deleteBlocker: zs,
        patchRoutes: Sp,
        _internalFetchControllers: T,
        _internalActiveDeferreds: Fe,
        _internalSetRoutes: wp
    },
    O
}
function _0(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function Ca(e, t, n, r, l, i, o, a) {
    let s, u;
    if (o) {
        s = [];
        for (let d of t)
            if (s.push(d),
            d.route.id === o) {
                u = d;
                break
            }
    } else
        s = t,
        u = t[t.length - 1];
    let f = Bf(l || ".", $f(s, i), ml(e.pathname, n) || e.pathname, a === "path");
    if (l == null && (f.search = e.search,
    f.hash = e.hash),
    (l == null || l === "" || l === ".") && u) {
        let d = Cs(f.search);
        if (u.route.index && !d)
            f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
        else if (!u.route.index && d) {
            let p = new URLSearchParams(f.search)
              , w = p.getAll("index");
            p.delete("index"),
            w.filter(E => E).forEach(E => p.append("index", E));
            let S = p.toString();
            f.search = S ? "?" + S : ""
        }
    }
    return r && n !== "/" && (f.pathname = f.pathname === "/" ? n : on([n, f.pathname])),
    hl(f)
}
function Ju(e, t, n, r) {
    if (!r || !_0(r))
        return {
            path: n
        };
    if (r.formMethod && !$0(r.formMethod))
        return {
            path: n,
            error: Ve(405, {
                method: r.formMethod
            })
        };
    let l = () => ({
        path: n,
        error: Ve(400, {
            type: "invalid-body"
        })
    })
      , i = r.formMethod || "get"
      , o = e ? i.toUpperCase() : i.toLowerCase()
      , a = Kf(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!ht(o))
                return l();
            let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (w, S) => {
                let[E,R] = S;
                return "" + w + E + "=" + R + `
`
            }
            , "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!ht(o))
                return l();
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    X(typeof FormData == "function", "FormData is not available in this environment");
    let s, u;
    if (r.formData)
        s = Pa(r.formData),
        u = r.formData;
    else if (r.body instanceof FormData)
        s = Pa(r.body),
        u = r.body;
    else if (r.body instanceof URLSearchParams)
        s = r.body,
        u = lc(s);
    else if (r.body == null)
        s = new URLSearchParams,
        u = new FormData;
    else
        try {
            s = new URLSearchParams(r.body),
            u = lc(s)
        } catch {
            return l()
        }
    let f = {
        formMethod: o,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    };
    if (ht(f.formMethod))
        return {
            path: n,
            submission: f
        };
    let d = fn(n);
    return t && d.search && Cs(d.search) && s.append("index", ""),
    d.search = "?" + s,
    {
        path: hl(d),
        submission: f
    }
}
function qu(e, t, n) {
    n === void 0 && (n = !1);
    let r = e.findIndex(l => l.route.id === t);
    return r >= 0 ? e.slice(0, n ? r + 1 : r) : e
}
function ec(e, t, n, r, l, i, o, a, s, u, f, d, p, w, S, E) {
    let R = E ? be(E[1]) ? E[1].error : E[1].data : void 0
      , m = e.createURL(t.location)
      , c = e.createURL(l)
      , y = n;
    i && t.errors ? y = qu(n, Object.keys(t.errors)[0], !0) : E && be(E[1]) && (y = qu(n, E[0]));
    let N = E ? E[1].statusCode : void 0
      , L = o && N && N >= 400
      , O = y.filter( (j, B) => {
        let {route: D} = j;
        if (D.lazy)
            return !0;
        if (D.loader == null)
            return !1;
        if (i)
            return ja(D, t.loaderData, t.errors);
        if (R0(t.loaderData, t.matches[B], j) || s.some(Se => Se === j.route.id))
            return !0;
        let ee = t.matches[B]
          , re = j;
        return tc(j, se({
            currentUrl: m,
            currentParams: ee.params,
            nextUrl: c,
            nextParams: re.params
        }, r, {
            actionResult: R,
            actionStatus: N,
            defaultShouldRevalidate: L ? !1 : a || m.pathname + m.search === c.pathname + c.search || m.search !== c.search || Wf(ee, re)
        }))
    }
    )
      , g = [];
    return d.forEach( (j, B) => {
        if (i || !n.some(je => je.route.id === j.routeId) || f.has(B))
            return;
        let D = gn(w, j.path, S);
        if (!D) {
            g.push({
                key: B,
                routeId: j.routeId,
                path: j.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let ee = t.fetchers.get(B)
          , re = zr(D, j.path)
          , Se = !1;
        p.has(B) ? Se = !1 : u.has(B) ? (u.delete(B),
        Se = !0) : ee && ee.state !== "idle" && ee.data === void 0 ? Se = a : Se = tc(re, se({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: c,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: R,
            actionStatus: N,
            defaultShouldRevalidate: L ? !1 : a
        })),
        Se && g.push({
            key: B,
            routeId: j.routeId,
            path: j.path,
            matches: D,
            match: re,
            controller: new AbortController
        })
    }
    ),
    [O, g]
}
function ja(e, t, n) {
    if (e.lazy)
        return !0;
    if (!e.loader)
        return !1;
    let r = t != null && t[e.id] !== void 0
      , l = n != null && n[e.id] !== void 0;
    return !r && l ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !l
}
function R0(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , l = e[n.route.id] === void 0;
    return r || l
}
function Wf(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function tc(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
function nc(e, t, n, r, l) {
    var i;
    let o;
    if (e) {
        let u = r[e];
        X(u, "No route found to patch children into: routeId = " + e),
        u.children || (u.children = []),
        o = u.children
    } else
        o = n;
    let a = t.filter(u => !o.some(f => Qf(u, f)))
      , s = Ni(a, l, [e || "_", "patch", String(((i = o) == null ? void 0 : i.length) || "0")], r);
    o.push(...s)
}
function Qf(e, t) {
    return "id"in e && "id"in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every( (n, r) => {
        var l;
        return (l = t.children) == null ? void 0 : l.some(i => Qf(n, i))
    }
    ) : !1
}
async function L0(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let l = n[e.id];
    X(l, "No route found in manifest");
    let i = {};
    for (let o in r) {
        let s = l[o] !== void 0 && o !== "hasErrorBoundary";
        cr(!s, 'Route "' + l.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')),
        !s && !e0.has(o) && (i[o] = r[o])
    }
    Object.assign(l, i),
    Object.assign(l, se({}, t(l), {
        lazy: void 0
    }))
}
async function T0(e) {
    let {matches: t} = e
      , n = t.filter(l => l.shouldLoad);
    return (await Promise.all(n.map(l => l.resolve()))).reduce( (l, i, o) => Object.assign(l, {
        [n[o].route.id]: i
    }), {})
}
async function D0(e, t, n, r, l, i, o, a, s, u) {
    let f = i.map(w => w.route.lazy ? L0(w.route, s, a) : void 0)
      , d = i.map( (w, S) => {
        let E = f[S]
          , R = l.some(c => c.route.id === w.route.id);
        return se({}, w, {
            shouldLoad: R,
            resolve: async c => (c && r.method === "GET" && (w.route.lazy || w.route.loader) && (R = !0),
            R ? M0(t, r, w, E, c, u) : Promise.resolve({
                type: J.data,
                result: void 0
            }))
        })
    }
    )
      , p = await e({
        matches: d,
        request: r,
        params: i[0].params,
        fetcherKey: o,
        context: u
    });
    try {
        await Promise.all(f)
    } catch {}
    return p
}
async function M0(e, t, n, r, l, i) {
    let o, a, s = u => {
        let f, d = new Promise( (S, E) => f = E);
        a = () => f(),
        t.signal.addEventListener("abort", a);
        let p = S => typeof u != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : u({
            request: t,
            params: n.params,
            context: i
        }, ...S !== void 0 ? [S] : [])
          , w = (async () => {
            try {
                return {
                    type: "data",
                    result: await (l ? l(E => p(E)) : p())
                }
            } catch (S) {
                return {
                    type: "error",
                    result: S
                }
            }
        }
        )();
        return Promise.race([w, d])
    }
    ;
    try {
        let u = n.route[e];
        if (r)
            if (u) {
                let f, [d] = await Promise.all([s(u).catch(p => {
                    f = p
                }
                ), r]);
                if (f !== void 0)
                    throw f;
                o = d
            } else if (await r,
            u = n.route[e],
            u)
                o = await s(u);
            else if (e === "action") {
                let f = new URL(t.url)
                  , d = f.pathname + f.search;
                throw Ve(405, {
                    method: t.method,
                    pathname: d,
                    routeId: n.route.id
                })
            } else
                return {
                    type: J.data,
                    result: void 0
                };
        else if (u)
            o = await s(u);
        else {
            let f = new URL(t.url)
              , d = f.pathname + f.search;
            throw Ve(404, {
                pathname: d
            })
        }
        X(o.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (u) {
        return {
            type: J.error,
            result: u
        }
    } finally {
        a && t.signal.removeEventListener("abort", a)
    }
    return o
}
async function z0(e) {
    let {result: t, type: n} = e;
    if (Xf(t)) {
        let d;
        try {
            let p = t.headers.get("Content-Type");
            p && /\bapplication\/json\b/.test(p) ? t.body == null ? d = null : d = await t.json() : d = await t.text()
        } catch (p) {
            return {
                type: J.error,
                error: p
            }
        }
        return n === J.error ? {
            type: J.error,
            error: new Ci(t.status,t.statusText,d),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: J.data,
            data: d,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === J.error) {
        if (uc(t)) {
            var r, l;
            if (t.data instanceof Error) {
                var i, o;
                return {
                    type: J.error,
                    error: t.data,
                    statusCode: (i = t.init) == null ? void 0 : i.status,
                    headers: (o = t.init) != null && o.headers ? new Headers(t.init.headers) : void 0
                }
            }
            return {
                type: J.error,
                error: new Ci(((r = t.init) == null ? void 0 : r.status) || 500,void 0,t.data),
                statusCode: sl(t) ? t.status : void 0,
                headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0
            }
        }
        return {
            type: J.error,
            error: t,
            statusCode: sl(t) ? t.status : void 0
        }
    }
    if (A0(t)) {
        var a, s;
        return {
            type: J.deferred,
            deferredData: t,
            statusCode: (a = t.init) == null ? void 0 : a.status,
            headers: ((s = t.init) == null ? void 0 : s.headers) && new Headers(t.init.headers)
        }
    }
    if (uc(t)) {
        var u, f;
        return {
            type: J.data,
            data: t.data,
            statusCode: (u = t.init) == null ? void 0 : u.status,
            headers: (f = t.init) != null && f.headers ? new Headers(t.init.headers) : void 0
        }
    }
    return {
        type: J.data,
        data: t
    }
}
function O0(e, t, n, r, l, i) {
    let o = e.headers.get("Location");
    if (X(o, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !Es.test(o)) {
        let a = r.slice(0, r.findIndex(s => s.route.id === n) + 1);
        o = Ca(new URL(t.url), a, l, !0, o, i),
        e.headers.set("Location", o)
    }
    return e
}
function rc(e, t, n) {
    if (Es.test(e)) {
        let r = e
          , l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r)
          , i = ml(l.pathname, n) != null;
        if (l.origin === t.origin && i)
            return l.pathname + l.search + l.hash
    }
    return e
}
function Un(e, t, n, r) {
    let l = e.createURL(Kf(t)).toString()
      , i = {
        signal: n
    };
    if (r && ht(r.formMethod)) {
        let {formMethod: o, formEncType: a} = r;
        i.method = o.toUpperCase(),
        a === "application/json" ? (i.headers = new Headers({
            "Content-Type": a
        }),
        i.body = JSON.stringify(r.json)) : a === "text/plain" ? i.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? i.body = Pa(r.formData) : i.body = r.formData
    }
    return new Request(l,i)
}
function Pa(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t
}
function lc(e) {
    let t = new FormData;
    for (let[n,r] of e.entries())
        t.append(n, r);
    return t
}
function F0(e, t, n, r, l) {
    let i = {}, o = null, a, s = !1, u = {}, f = n && be(n[1]) ? n[1].error : void 0;
    return e.forEach(d => {
        if (!(d.route.id in t))
            return;
        let p = d.route.id
          , w = t[p];
        if (X(!En(w), "Cannot handle redirect results in processLoaderData"),
        be(w)) {
            let S = w.error;
            f !== void 0 && (S = f,
            f = void 0),
            o = o || {};
            {
                let E = xn(e, p);
                o[E.route.id] == null && (o[E.route.id] = S)
            }
            i[p] = void 0,
            s || (s = !0,
            a = sl(w.error) ? w.error.status : 500),
            w.headers && (u[p] = w.headers)
        } else
            Gt(w) ? (r.set(p, w.deferredData),
            i[p] = w.deferredData.data,
            w.statusCode != null && w.statusCode !== 200 && !s && (a = w.statusCode),
            w.headers && (u[p] = w.headers)) : (i[p] = w.data,
            w.statusCode && w.statusCode !== 200 && !s && (a = w.statusCode),
            w.headers && (u[p] = w.headers))
    }
    ),
    f !== void 0 && n && (o = {
        [n[0]]: f
    },
    i[n[0]] = void 0),
    {
        loaderData: i,
        errors: o,
        statusCode: a || 200,
        loaderHeaders: u
    }
}
function ic(e, t, n, r, l, i, o) {
    let {loaderData: a, errors: s} = F0(t, n, r, o);
    return l.forEach(u => {
        let {key: f, match: d, controller: p} = u
          , w = i[f];
        if (X(w, "Did not find corresponding fetcher result"),
        !(p && p.signal.aborted))
            if (be(w)) {
                let S = xn(e.matches, d == null ? void 0 : d.route.id);
                s && s[S.route.id] || (s = se({}, s, {
                    [S.route.id]: w.error
                })),
                e.fetchers.delete(f)
            } else if (En(w))
                X(!1, "Unhandled fetcher revalidation redirect");
            else if (Gt(w))
                X(!1, "Unhandled fetcher deferred data");
            else {
                let S = Vt(w.data);
                e.fetchers.set(f, S)
            }
    }
    ),
    {
        loaderData: a,
        errors: s
    }
}
function oc(e, t, n, r) {
    let l = se({}, t);
    for (let i of n) {
        let o = i.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (l[o] = t[o]) : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
        r && r.hasOwnProperty(o))
            break
    }
    return l
}
function ac(e) {
    return e ? be(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}
function xn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function sc(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function Ve(e, t) {
    let {pathname: n, routeId: r, method: l, type: i, message: o} = t === void 0 ? {} : t
      , a = "Unknown Server Error"
      , s = "Unknown @remix-run/router error";
    return e === 400 ? (a = "Bad Request",
    l && n && r ? s = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" ? s = "defer() is not supported in actions" : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (a = "Forbidden",
    s = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (a = "Not Found",
    s = 'No route matches URL "' + n + '"') : e === 405 && (a = "Method Not Allowed",
    l && n && r ? s = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (s = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Ci(e || 500,a,new Error(s),!0)
}
function $l(e) {
    let t = Object.entries(e);
    for (let n = t.length - 1; n >= 0; n--) {
        let[r,l] = t[n];
        if (En(l))
            return {
                key: r,
                result: l
            }
    }
}
function Kf(e) {
    let t = typeof e == "string" ? fn(e) : e;
    return hl(se({}, t, {
        hash: ""
    }))
}
function I0(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function U0(e) {
    return Xf(e.result) && E0.has(e.result.status)
}
function Gt(e) {
    return e.type === J.deferred
}
function be(e) {
    return e.type === J.error
}
function En(e) {
    return (e && e.type) === J.redirect
}
function uc(e) {
    return typeof e == "object" && e != null && "type"in e && "data"in e && "init"in e && e.type === "DataWithResponseInit"
}
function A0(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function Xf(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function $0(e) {
    return k0.has(e.toLowerCase())
}
function ht(e) {
    return w0.has(e.toLowerCase())
}
async function B0(e, t, n, r, l) {
    let i = Object.entries(t);
    for (let o = 0; o < i.length; o++) {
        let[a,s] = i[o]
          , u = e.find(p => (p == null ? void 0 : p.route.id) === a);
        if (!u)
            continue;
        let f = r.find(p => p.route.id === u.route.id)
          , d = f != null && !Wf(f, u) && (l && l[u.route.id]) !== void 0;
        Gt(s) && d && await Ns(s, n, !1).then(p => {
            p && (t[a] = p)
        }
        )
    }
}
async function V0(e, t, n) {
    for (let r = 0; r < n.length; r++) {
        let {key: l, routeId: i, controller: o} = n[r]
          , a = t[l];
        e.find(u => (u == null ? void 0 : u.route.id) === i) && Gt(a) && (X(o, "Expected an AbortController for revalidating fetcher deferred result"),
        await Ns(a, o.signal, !0).then(u => {
            u && (t[l] = u)
        }
        ))
    }
}
async function Ns(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: J.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (l) {
                return {
                    type: J.error,
                    error: l
                }
            }
        return {
            type: J.data,
            data: e.deferredData.data
        }
    }
}
function Cs(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function zr(e, t) {
    let n = typeof t == "string" ? fn(t).search : t.search;
    if (e[e.length - 1].route.index && Cs(n || ""))
        return e[e.length - 1];
    let r = Af(e);
    return r[r.length - 1]
}
function cc(e) {
    let {formMethod: t, formAction: n, formEncType: r, text: l, formData: i, json: o} = e;
    if (!(!t || !n || !r)) {
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: l
            };
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: i,
                json: void 0,
                text: void 0
            };
        if (o !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: o,
                text: void 0
            }
    }
}
function Lo(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function H0(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function _r(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function W0(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function Vt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function Q0(e, t) {
    try {
        let n = e.sessionStorage.getItem(Hf);
        if (n) {
            let r = JSON.parse(n);
            for (let[l,i] of Object.entries(r || {}))
                i && Array.isArray(i) && t.set(l, new Set(i || []))
        }
    } catch {}
}
function K0(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let[r,l] of t)
            n[r] = [...l];
        try {
            e.sessionStorage.setItem(Hf, JSON.stringify(n))
        } catch (r) {
            cr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ji() {
    return ji = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ji.apply(this, arguments)
}
const Yi = _.createContext(null)
  , Yf = _.createContext(null)
  , Gi = _.createContext(null)
  , js = _.createContext(null)
  , hr = _.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Gf = _.createContext(null);
function bi() {
    return _.useContext(js) != null
}
function bf() {
    return bi() || X(!1),
    _.useContext(js).location
}
function Zf(e) {
    _.useContext(Gi).static || _.useLayoutEffect(e)
}
function X0() {
    let {isDataRoute: e} = _.useContext(hr);
    return e ? iv() : Y0()
}
function Y0() {
    bi() || X(!1);
    let e = _.useContext(Yi)
      , {basename: t, future: n, navigator: r} = _.useContext(Gi)
      , {matches: l} = _.useContext(hr)
      , {pathname: i} = bf()
      , o = JSON.stringify($f(l, n.v7_relativeSplatPath))
      , a = _.useRef(!1);
    return Zf( () => {
        a.current = !0
    }
    ),
    _.useCallback(function(u, f) {
        if (f === void 0 && (f = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = Bf(u, JSON.parse(o), i, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : on([t, d.pathname])),
        (f.replace ? r.replace : r.push)(d, f.state, f)
    }, [t, r, o, i, e])
}
function G0(e, t, n, r) {
    bi() || X(!1);
    let {navigator: l, static: i} = _.useContext(Gi)
      , {matches: o} = _.useContext(hr)
      , a = o[o.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let u = a ? a.pathnameBase : "/";
    a && a.route;
    let f = bf(), d;
    d = f;
    let p = d.pathname || "/"
      , w = p;
    if (u !== "/") {
        let R = u.replace(/^\//, "").split("/");
        w = "/" + p.replace(/^\//, "").split("/").slice(R.length).join("/")
    }
    let S = !i && n && n.matches && n.matches.length > 0 ? n.matches : gn(e, {
        pathname: w
    });
    return ev(S && S.map(R => Object.assign({}, R, {
        params: Object.assign({}, s, R.params),
        pathname: on([u, l.encodeLocation ? l.encodeLocation(R.pathname).pathname : R.pathname]),
        pathnameBase: R.pathnameBase === "/" ? u : on([u, l.encodeLocation ? l.encodeLocation(R.pathnameBase).pathname : R.pathnameBase])
    })), o, n, r)
}
function b0() {
    let e = lv()
      , t = sl(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return _.createElement(_.Fragment, null, _.createElement("h2", null, "Unexpected Application Error!"), _.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? _.createElement("pre", {
        style: l
    }, n) : null, null)
}
const Z0 = _.createElement(b0, null);
class J0 extends _.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? _.createElement(hr.Provider, {
            value: this.props.routeContext
        }, _.createElement(Gf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function q0(e) {
    let {routeContext: t, match: n, children: r} = e
      , l = _.useContext(Yi);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(hr.Provider, {
        value: t
    }, r)
}
function ev(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let f = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        f >= 0 || X(!1),
        o = o.slice(0, Math.min(o.length, f + 1))
    }
    let s = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < o.length; f++) {
            let d = o[f];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
            d.route.id) {
                let {loaderData: p, errors: w} = n
                  , S = d.route.loader && p[d.route.id] === void 0 && (!w || w[d.route.id] === void 0);
                if (d.route.lazy || S) {
                    s = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (f, d, p) => {
        let w, S = !1, E = null, R = null;
        n && (w = a && d.route.id ? a[d.route.id] : void 0,
        E = d.route.errorElement || Z0,
        s && (u < 0 && p === 0 ? (ov("route-fallback"),
        S = !0,
        R = null) : u === p && (S = !0,
        R = d.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, p + 1))
          , c = () => {
            let y;
            return w ? y = E : S ? y = R : d.route.Component ? y = _.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = f,
            _.createElement(q0, {
                match: d,
                routeContext: {
                    outlet: f,
                    matches: m,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? _.createElement(J0, {
            location: n.location,
            revalidation: n.revalidation,
            component: E,
            error: w,
            children: c(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : c()
    }
    , null)
}
var Jf = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Jf || {})
  , Pi = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Pi || {});
function tv(e) {
    let t = _.useContext(Yi);
    return t || X(!1),
    t
}
function nv(e) {
    let t = _.useContext(Yf);
    return t || X(!1),
    t
}
function rv(e) {
    let t = _.useContext(hr);
    return t || X(!1),
    t
}
function qf(e) {
    let t = rv()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || X(!1),
    n.route.id
}
function lv() {
    var e;
    let t = _.useContext(Gf)
      , n = nv(Pi.UseRouteError)
      , r = qf(Pi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function iv() {
    let {router: e} = tv(Jf.UseNavigateStable)
      , t = qf(Pi.UseNavigateStable)
      , n = _.useRef(!1);
    return Zf( () => {
        n.current = !0
    }
    ),
    _.useCallback(function(l, i) {
        i === void 0 && (i = {}),
        n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, ji({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const dc = {};
function ov(e, t, n) {
    dc[e] || (dc[e] = !0)
}
function av(e, t) {
    e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath),
    t && (t.v7_fetcherPersist,
    t.v7_normalizeFormMethod,
    t.v7_partialHydration,
    t.v7_skipActionErrorRevalidation)
}
function sv(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: l=xe.Pop, navigator: i, static: o=!1, future: a} = e;
    bi() && X(!1);
    let s = t.replace(/^\/*/, "/")
      , u = _.useMemo( () => ({
        basename: s,
        navigator: i,
        static: o,
        future: ji({
            v7_relativeSplatPath: !1
        }, a)
    }), [s, a, i, o]);
    typeof r == "string" && (r = fn(r));
    let {pathname: f="/", search: d="", hash: p="", state: w=null, key: S="default"} = r
      , E = _.useMemo( () => {
        let R = ml(f, s);
        return R == null ? null : {
            location: {
                pathname: R,
                search: d,
                hash: p,
                state: w,
                key: S
            },
            navigationType: l
        }
    }
    , [s, f, d, p, w, S, l]);
    return E == null ? null : _.createElement(Gi.Provider, {
        value: u
    }, _.createElement(js.Provider, {
        children: n,
        value: E
    }))
}
new Promise( () => {}
);
function uv(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0
    }),
    e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _i() {
    return _i = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    _i.apply(this, arguments)
}
const cv = "6";
try {
    window.__reactRouterVersion = cv
} catch {}
function dv(e, t) {
    return P0({
        basename: void 0,
        future: _i({}, void 0, {
            v7_prependBasename: !0
        }),
        history: Zm({
            window: void 0
        }),
        hydrationData: fv(),
        routes: e,
        mapRouteProperties: uv,
        dataStrategy: void 0,
        patchRoutesOnNavigation: void 0,
        window: void 0
    }).initialize()
}
function fv() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = _i({}, t, {
        errors: pv(t.errors)
    })),
    t
}
function pv(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,l] of t)
        if (l && l.__type === "RouteErrorResponse")
            n[r] = new Ci(l.status,l.statusText,l.data,l.internal === !0);
        else if (l && l.__type === "Error") {
            if (l.__subType) {
                let i = window[l.__subType];
                if (typeof i == "function")
                    try {
                        let o = new i(l.message);
                        o.stack = "",
                        n[r] = o
                    } catch {}
            }
            if (n[r] == null) {
                let i = new Error(l.message);
                i.stack = "",
                n[r] = i
            }
        } else
            n[r] = l;
    return n
}
const hv = _.createContext({
    isTransitioning: !1
})
  , mv = _.createContext(new Map)
  , vv = "startTransition"
  , fc = Up[vv]
  , yv = "flushSync"
  , pc = bm[yv];
function gv(e) {
    fc ? fc(e) : e()
}
function Rr(e) {
    pc ? pc(e) : e()
}
class xv {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved",
                t(r))
            }
            ,
            this.reject = r => {
                this.status === "pending" && (this.status = "rejected",
                n(r))
            }
        }
        )
    }
}
function wv(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [l,i] = _.useState(n.state)
      , [o,a] = _.useState()
      , [s,u] = _.useState({
        isTransitioning: !1
    })
      , [f,d] = _.useState()
      , [p,w] = _.useState()
      , [S,E] = _.useState()
      , R = _.useRef(new Map)
      , {v7_startTransition: m} = r || {}
      , c = _.useCallback(j => {
        m ? gv(j) : j()
    }
    , [m])
      , y = _.useCallback( (j, B) => {
        let {deletedFetchers: D, flushSync: ee, viewTransitionOpts: re} = B;
        j.fetchers.forEach( (je, ut) => {
            je.data !== void 0 && R.current.set(ut, je.data)
        }
        ),
        D.forEach(je => R.current.delete(je));
        let Se = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!re || Se) {
            ee ? Rr( () => i(j)) : c( () => i(j));
            return
        }
        if (ee) {
            Rr( () => {
                p && (f && f.resolve(),
                p.skipTransition()),
                u({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: re.currentLocation,
                    nextLocation: re.nextLocation
                })
            }
            );
            let je = n.window.document.startViewTransition( () => {
                Rr( () => i(j))
            }
            );
            je.finished.finally( () => {
                Rr( () => {
                    d(void 0),
                    w(void 0),
                    a(void 0),
                    u({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            Rr( () => w(je));
            return
        }
        p ? (f && f.resolve(),
        p.skipTransition(),
        E({
            state: j,
            currentLocation: re.currentLocation,
            nextLocation: re.nextLocation
        })) : (a(j),
        u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: re.currentLocation,
            nextLocation: re.nextLocation
        }))
    }
    , [n.window, p, f, R, c]);
    _.useLayoutEffect( () => n.subscribe(y), [n, y]),
    _.useEffect( () => {
        s.isTransitioning && !s.flushSync && d(new xv)
    }
    , [s]),
    _.useEffect( () => {
        if (f && o && n.window) {
            let j = o
              , B = f.promise
              , D = n.window.document.startViewTransition(async () => {
                c( () => i(j)),
                await B
            }
            );
            D.finished.finally( () => {
                d(void 0),
                w(void 0),
                a(void 0),
                u({
                    isTransitioning: !1
                })
            }
            ),
            w(D)
        }
    }
    , [c, o, f, n.window]),
    _.useEffect( () => {
        f && o && l.location.key === o.location.key && f.resolve()
    }
    , [f, p, l.location, o]),
    _.useEffect( () => {
        !s.isTransitioning && S && (a(S.state),
        u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: S.currentLocation,
            nextLocation: S.nextLocation
        }),
        E(void 0))
    }
    , [s.isTransitioning, S]),
    _.useEffect( () => {}
    , []);
    let N = _.useMemo( () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: j => n.navigate(j),
        push: (j, B, D) => n.navigate(j, {
            state: B,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset
        }),
        replace: (j, B, D) => n.navigate(j, {
            replace: !0,
            state: B,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset
        })
    }), [n])
      , L = n.basename || "/"
      , O = _.useMemo( () => ({
        router: n,
        navigator: N,
        static: !1,
        basename: L
    }), [n, N, L])
      , g = _.useMemo( () => ({
        v7_relativeSplatPath: n.future.v7_relativeSplatPath
    }), [n.future.v7_relativeSplatPath]);
    return _.useEffect( () => av(r, n.future), [r, n.future]),
    _.createElement(_.Fragment, null, _.createElement(Yi.Provider, {
        value: O
    }, _.createElement(Yf.Provider, {
        value: l
    }, _.createElement(mv.Provider, {
        value: R.current
    }, _.createElement(hv.Provider, {
        value: s
    }, _.createElement(sv, {
        basename: L,
        location: l.location,
        navigationType: l.historyAction,
        navigator: N,
        future: g
    }, l.initialized || n.future.v7_partialHydration ? _.createElement(Sv, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}
const Sv = _.memo(kv);
function kv(e) {
    let {routes: t, future: n, state: r} = e;
    return G0(t, void 0, r, n)
}
var hc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(hc || (hc = {}));
var mc;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(mc || (mc = {}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ev = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , ve = (e, t) => {
    const n = _.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: s, ...u}, f) => _.createElement("svg", {
        ref: f,
        ...Ev,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Nv(e)}`, a].join(" "),
        ...u
    }, [...t.map( ([d,p]) => _.createElement(d, p)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = ve("AlertTriangle", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
    key: "c3ski4"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = ve("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = ve("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = ve("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _v = ve("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = ve("Crown", [["path", {
    d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
    key: "zkxr6b"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = ve("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = ve("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rv = ve("HelpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = ve("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = ve("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = ve("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dv = ve("Monitor", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    key: "48i651"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "21",
    y2: "21",
    key: "1svkeh"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "17",
    y2: "21",
    key: "vw1qmm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = ve("PanelsTopLeft", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M3 9h18",
    key: "1pudct"
}], ["path", {
    d: "M9 21V9",
    key: "1oto5p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = ve("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = ve("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = ve("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = ve("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = ve("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = ve("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = ve("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = ve("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , Uv = ({activeSection: e, scrollToSection: t}) => {
    const [n,r] = _.useState(!1)
      , [l,i] = _.useState(!1);
    _.useEffect( () => {
        const a = () => {
            i(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", a),
        () => window.removeEventListener("scroll", a)
    }
    , []);
    const o = [{
        id: "home",
        label: "Home",
        icon: v.jsx(Lv, {
            size: 16
        })
    }, {
        id: "features",
        label: "Features",
        icon: v.jsx(Ri, {
            size: 16
        })
    }, {
        id: "faq",
        label: "FAQ",
        icon: v.jsx(Rv, {
            size: 16
        })
    }];
    return v.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${l ? "bg-black/90 backdrop-blur-xl border-b border-red-900/20 py-2" : "bg-transparent py-4"}`,
        children: [v.jsx("div", {
            className: "container mx-auto px-4",
            children: v.jsxs("div", {
                className: "flex items-center justify-between",
                children: [v.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [v.jsxs("div", {
                        className: "relative",
                        children: [v.jsx("div", {
                            className: "absolute -inset-2 bg-red-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }), v.jsx("img", {
                            src: "https://files.catbox.moe/hktosf.webp",
                            alt: "ReveliX Logo",
                            className: "h-9 w-9 relative"
                        })]
                    }), v.jsx("span", {
                        className: "text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "ReveliX"
                    })]
                }), v.jsx("div", {
                    className: "hidden md:flex items-center space-x-1",
                    children: o.map( ({id: a, label: s, icon: u}) => v.jsxs("button", {
                        onClick: () => t(a),
                        className: `relative group px-4 py-2 rounded-lg transition-all duration-500 ${e === a ? "text-red-500 bg-red-500/10" : "text-gray-400 hover:text-red-500 hover:bg-red-500/5"}`,
                        children: [v.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [v.jsx("span", {
                                className: "transform transition-transform duration-300 group-hover:rotate-12",
                                children: u
                            }), v.jsx("span", {
                                children: s
                            })]
                        }), v.jsx("span", {
                            className: `absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-500 ${e === a ? "bg-red-500 w-6" : "bg-transparent w-1 group-hover:bg-red-500/50 group-hover:w-4"}`
                        })]
                    }, a))
                }), v.jsx("button", {
                    className: "md:hidden relative p-2 rounded-lg bg-red-500/10 text-red-500",
                    onClick: () => r(!n),
                    children: n ? v.jsx(Fv, {
                        size: 24
                    }) : v.jsx(Tv, {
                        size: 24
                    })
                })]
            })
        }), v.jsx("div", {
            className: `md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-red-900/20 transition-all duration-700 ease-in-out ${n ? "max-h-64 py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}`,
            children: v.jsx("div", {
                className: "container mx-auto px-4 flex flex-col space-y-2",
                children: o.map( ({id: a, label: s, icon: u}) => v.jsxs("button", {
                    onClick: () => {
                        t(a),
                        r(!1)
                    }
                    ,
                    className: `flex items-center space-x-2 p-3 rounded-lg transition-all duration-500 ${e === a ? "bg-red-500/10 text-red-500" : "text-gray-400 hover:bg-red-500/5 hover:text-red-500"}`,
                    children: [v.jsx("span", {
                        className: "transform transition-transform duration-300 group-hover:rotate-12",
                        children: u
                    }), v.jsx("span", {
                        children: s
                    })]
                }, a))
            })
        })]
    })
}
;
var rp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , xc = bt.createContext && bt.createContext(rp)
  , Av = ["attr", "size", "title"];
function $v(e, t) {
    if (e == null)
        return {};
    var n = Bv(e, t), r, l;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++)
            r = i[l],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function Bv(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function Li() {
    return Li = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Li.apply(this, arguments)
}
function wc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Ti(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wc(Object(n), !0).forEach(function(r) {
            Vv(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Vv(e, t, n) {
    return t = Hv(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Hv(e) {
    var t = Wv(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Wv(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function lp(e) {
    return e && e.map( (t, n) => bt.createElement(t.tag, Ti({
        key: n
    }, t.attr), lp(t.child)))
}
function Qv(e) {
    return t => bt.createElement(Kv, Li({
        attr: Ti({}, e.attr)
    }, t), lp(e.child))
}
function Kv(e) {
    var t = n => {
        var {attr: r, size: l, title: i} = e, o = $v(e, Av), a = l || n.size || "1em", s;
        return n.className && (s = n.className),
        e.className && (s = (s ? s + " " : "") + e.className),
        bt.createElement("svg", Li({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: s,
            style: Ti(Ti({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && bt.createElement("title", null, i), e.children)
    }
    ;
    return xc !== void 0 ? bt.createElement(xc.Consumer, null, n => t(n)) : t(rp)
}
function Xv(e) {
    return Qv({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            },
            child: []
        }]
    })(e)
}
const ip = () => {
    const e = new Date().getFullYear();
    return v.jsxs("footer", {
        className: "py-12 relative overflow-hidden",
        children: [v.jsx("div", {
            className: "absolute inset-0 bg-black/90 backdrop-blur-xl border-t border-red-900/20"
        }), v.jsx("div", {
            className: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[80px] opacity-30 animate-blob"
        }), v.jsx("div", {
            className: "absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[80px] opacity-30 animate-blob animation-delay-2000"
        }), v.jsxs("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [v.jsxs("div", {
                className: "grid md:grid-cols-3 gap-12 mb-12",
                children: [v.jsxs("div", {
                    children: [v.jsxs("div", {
                        className: "flex items-center space-x-3 mb-6",
                        children: [v.jsxs("div", {
                            className: "relative",
                            children: [v.jsx("div", {
                                className: "absolute -inset-2 bg-red-600/30 rounded-full blur-lg"
                            }), v.jsx("img", {
                                src: "https://files.catbox.moe/hktosf.webp",
                                alt: "ReveliX Logo",
                                className: "h-10 w-10 relative"
                            })]
                        }), v.jsx("span", {
                            className: "text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "ReveliX"
                        })]
                    }), v.jsx("p", {
                        className: "text-gray-400 text-lg leading-relaxed",
                        children: "A Free Keyless Roblox Executor for running scripts."
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h3", {
                        className: "text-xl font-semibold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "Quick Links"
                    }), v.jsx("ul", {
                        className: "space-y-4",
                        children: ["Home", "Features", "Download", "FAQ"].map(t => v.jsx("li", {
                            children: v.jsxs("a", {
                                href: `#${t.toLowerCase()}`,
                                className: "group flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300",
                                children: [v.jsx("span", {
                                    className: "relative w-2 h-2 mr-3",
                                    children: v.jsx("span", {
                                        className: "absolute inset-0 rounded-full bg-red-500 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                                    })
                                }), t]
                            })
                        }, t))
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h3", {
                        className: "text-xl font-semibold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "Social Link"
                    }), v.jsxs("a", {
                        href: "https://discord.gg/GjEhaYynVb",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center space-x-3 text-gray-400 hover:text-red-500 transition-all duration-300 group",
                        children: [v.jsxs("span", {
                            className: "relative",
                            children: [v.jsx("span", {
                                className: "absolute -inset-2 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }), v.jsx(Xv, {
                                className: "h-6 w-6 relative"
                            })]
                        }), v.jsx("span", {
                            className: "text-lg",
                            children: "Join our Discord"
                        })]
                    })]
                })]
            }), v.jsx("div", {
                className: "pt-8 border-t border-red-900/20",
                children: v.jsxs("div", {
                    className: "text-sm text-gray-500 text-center",
                    children: ["© ", e, " ReveliX. All rights reserved."]
                })
            })]
        })]
    })
}
;
function Yv() {
    const e = X0()
      , [t,n] = _.useState(!1)
      , [r,l] = _.useState("home")
      , [i,o] = _.useState(null)
      , [a,s] = _.useState(!1);
    _.useEffect( () => {
        s(!0);
        const w = () => {
            const S = ["home", "features", "download", "faq"];
            for (const E of S) {
                const R = document.getElementById(E);
                if (R) {
                    const m = R.getBoundingClientRect();
                    if (m.top <= 100 && m.bottom >= 100) {
                        l(E);
                        break
                    }
                }
            }
        }
        ;
        return window.addEventListener("scroll", w),
        () => window.removeEventListener("scroll", w)
    }
    , []);
    const u = w => {
        const S = document.getElementById(w);
        if (S) {
            const R = S.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: R - 80,
                behavior: "smooth"
            }),
            l(w),
            n(!1)
        }
    }
      , f = () => {
        e("/download")
    }
      , d = w => {
        o(i === w ? null : w)
    }
      , p = [{
        question: "What is ReveliX?",
        answer: "ReveliX is a executor."
    }, {
        question: "Is ReveliX free to use?",
        answer: "Yes, ReveliX is 100% free to use for all users."
    }, {
        question: "Does ReveliX require a key?",
        answer: "No, ReveliX is completely keyless for ease of use."
    }, {
        question: "Is ReveliX safe to use?",
        answer: "Yes, our software is developed with user security in mind."
    }];
    return v.jsxs("div", {
        className: `min-h-screen bg-black text-white ${a ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`,
        children: [v.jsx("div", {
            className: "fixed -top-96 -right-96 w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[100px] opacity-40 animate-blob"
        }), v.jsx("div", {
            className: "fixed -bottom-96 -left-96 w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[100px] opacity-40 animate-blob animation-delay-2000"
        }), v.jsx("div", {
            className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/15 rounded-full blur-[80px] opacity-30 animate-blob animation-delay-4000"
        }), v.jsx("div", {
            className: "fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[60px] opacity-35 animate-blob animation-delay-3000"
        }), v.jsx("div", {
            className: "fixed bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[60px] opacity-35 animate-blob animation-delay-5000"
        }), v.jsx(Uv, {
            activeSection: r,
            scrollToSection: u
        }), v.jsx("section", {
            id: "home",
            className: "min-h-screen pt-24 flex items-center relative",
            children: v.jsx("div", {
                className: "container mx-auto px-4 py-16",
                children: v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-center",
                    children: [v.jsxs("div", {
                        className: "space-y-6 transform translate-y-0 opacity-100 transition-all duration-1000 delay-300",
                        children: [v.jsx("div", {
                            className: "inline-block",
                            children: v.jsxs("div", {
                                className: "relative",
                                children: [v.jsx("div", {
                                    className: "absolute -inset-2 bg-red-600/30 rounded-full blur-md animate-pulse-slow"
                                }), v.jsx("img", {
                                    src: "https://files.catbox.moe/hktosf.webp",
                                    alt: "ReveliX Logo",
                                    className: "h-20 w-20 relative"
                                })]
                            })
                        }), v.jsx("h1", {
                            className: "text-4xl md:text-6xl font-bold leading-tight",
                            children: v.jsx("span", {
                                className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                                children: "ReveliX"
                            })
                        }), v.jsx("p", {
                            className: "text-gray-400 text-lg max-w-lg",
                            children: "A Free Keyless Roblox Executor for running scripts."
                        }), v.jsxs("div", {
                            className: "flex flex-wrap gap-4",
                            children: [v.jsxs("button", {
                                onClick: f,
                                className: "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-900/30",
                                children: [v.jsx(ep, {
                                    size: 20
                                }), v.jsx("span", {
                                    children: "Download"
                                })]
                            }), v.jsxs("button", {
                                onClick: () => u("features"),
                                className: "bg-transparent hover:bg-red-900/20 text-red-500 border border-red-700 px-6 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] flex items-center space-x-2",
                                children: [v.jsx(Ri, {
                                    size: 20
                                }), v.jsx("span", {
                                    children: "Features"
                                })]
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "relative transform translate-y-0 opacity-100 transition-all duration-1000 delay-500",
                        children: [v.jsxs("div", {
                            className: "relative perspective-1000",
                            children: [v.jsxs("div", {
                                className: "relative overflow-hidden rounded-lg border border-red-900/50 shadow-2xl shadow-red-900/20 transform rotate-y-3 rotate-x-5 transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 animate-float",
                                children: [v.jsx("img", {
                                    src: "https://files.catbox.moe/eywpq5.png",
                                    alt: "ReveliX Interface",
                                    className: "w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                }), v.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                                }), v.jsxs("div", {
                                    className: "absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700",
                                    children: [v.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 animate-pulse-slow"
                                    }), v.jsx("div", {
                                        className: "absolute -inset-2 bg-red-600/10 blur-xl rounded-lg"
                                    })]
                                })]
                            }), v.jsx("div", {
                                className: "absolute -bottom-4 left-0 right-0 h-8 bg-red-900/20 blur-md rounded-full mx-8 transform skew-x-12"
                            })]
                        }), v.jsx("div", {
                            className: "absolute -bottom-4 -right-4 h-32 w-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-2xl opacity-30"
                        }), v.jsx("div", {
                            className: "absolute -top-4 -left-4 h-32 w-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-2xl opacity-30"
                        })]
                    })]
                })
            })
        }), v.jsx("section", {
            id: "features",
            className: "py-20 relative",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [v.jsxs("div", {
                    className: "text-center mb-16",
                    children: [v.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: v.jsx("span", {
                            className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Features"
                        })
                    }), v.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "ReveliX comes packed with features designed to improve your experience."
                    })]
                }), v.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [{
                        title: "Super Fast Execution",
                        description: "Run your scripts instantly without any lag or hiccups.",
                        icon: v.jsx(tp, {
                            className: "h-10 w-10 text-white"
                        })
                    }, {
                        title: "Performance",
                        description: "Our executor runs smoothly.",
                        icon: v.jsx(Ri, {
                            className: "h-10 w-10 text-white"
                        })
                    }, {
                        title: "Easy to Use",
                        description: "A clean, UI that gets you up and running in no time.",
                        icon: v.jsx(np, {
                            className: "h-10 w-10 text-white"
                        })
                    }].map( (w, S) => v.jsxs("div", {
                        className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-xl p-8",
                        children: [v.jsx("div", {
                            className: "mb-6 bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-lg inline-block",
                            children: w.icon
                        }), v.jsx("h3", {
                            className: "text-2xl font-semibold mb-3",
                            children: w.title
                        }), v.jsx("p", {
                            className: "text-gray-400 text-lg",
                            children: w.description
                        })]
                    }, S))
                })]
            })
        }), v.jsx("section", {
            id: "faq",
            className: "py-20 relative",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [v.jsxs("div", {
                    className: "text-center mb-16",
                    children: [v.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: v.jsx("span", {
                            className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Frequently Asked Questions"
                        })
                    }), v.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Find answers to common questions about ReveliX."
                    })]
                }), v.jsx("div", {
                    className: "max-w-3xl mx-auto space-y-4",
                    children: p.map( (w, S) => v.jsxs("div", {
                        className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-xl overflow-hidden transition-all duration-300",
                        children: [v.jsxs("button", {
                            onClick: () => d(S),
                            className: "w-full flex justify-between items-center p-6 text-left bg-gradient-to-r hover:from-red-900/10 hover:to-transparent transition-all duration-300",
                            children: [v.jsx("span", {
                                className: "font-medium text-lg text-gray-200",
                                children: w.question
                            }), v.jsx("div", {
                                className: `bg-red-900/20 rounded-full p-2 transition-all duration-300 ${i === S ? "bg-red-500/20 text-red-500" : "text-gray-400"}`,
                                children: i === S ? v.jsx(Pv, {
                                    size: 18
                                }) : v.jsx(jv, {
                                    size: 18
                                })
                            })]
                        }), v.jsx("div", {
                            className: `bg-black/40 text-gray-300 transition-all duration-500 ease-in-out overflow-hidden ${i === S ? "max-h-[200px] p-6 border-t border-red-900/20" : "max-h-0"}`,
                            children: v.jsx("p", {
                                className: "text-lg leading-relaxed",
                                children: w.answer
                            })
                        })]
                    }, S))
                })]
            })
        }), v.jsx(ip, {})]
    })
}
const Gv = () => {
    _.useState(!1);
    const e = i => {
        const o = {
            android: "https://www.mediafire.com/file/gbzbi2a66jnpsqh/Revelix+1.6.0.apk/file",
            pc: "https://limewire.com/d/LfqDE#uLTB1NUtMc"
        };
        window.location.href = o[i]
    }
      , t = {
        android: [{
            icon: v.jsx(yc, {
                className: "h-5 w-5"
            }),
            text: "99% UNC"
        }, {
            icon: v.jsx(np, {
                className: "h-5 w-5"
            }),
            text: "Smooth Executor"
        }, {
            icon: v.jsx(Ri, {
                className: "h-5 w-5"
            }),
            text: "Luarmor Supported"
        }, {
            icon: v.jsx(Iv, {
                className: "h-5 w-5"
            }),
            text: "No FPS Drop"
        }],
        pc: [{
            icon: v.jsx(Ov, {
                className: "h-5 w-5"
            }),
            text: "Keyless"
        }, {
            icon: v.jsx(yc, {
                className: "h-5 w-5"
            }),
            text: "99% UNC & sUNC"
        }, {
            icon: v.jsx(tp, {
                className: "h-5 w-5"
            }),
            text: "Level 8"
        }, {
            icon: v.jsx(Mv, {
                className: "h-5 w-5"
            }),
            text: "Simple UI"
        }, {
            icon: v.jsx(Do, {
                className: "h-5 w-5"
            }),
            text: "Luarmor Supported"
        }]
    }
      , n = {
        android: [{
            version: "1.6.0",
            date: "2025-04-26",
            changes: [{
                type: "added",
                text: "Updated to latest version of Roblox"
            }, {
                type: "added",
                text: "Added anti-spoof feature in the APK"
            }, {
                type: "fixed",
                text: "Fixed `http.request` (ONCE AGAIN)"
            }, {
                type: "added",
                text: "Improved execution speed by ALOT!"
            }, {
                type: "added",
                text: "Improved stability a bit"
            }, {
                type: "added",
                text: "Extended script support"
            }, {
                type: "fixed",
                text: "Few minor bug fixes"
            }]
        }, {
            version: "1.0.0",
            date: "2024-03-10",
            changes: [{
                type: "added",
                text: "Test"
            }, {
                type: "removed",
                text: "Test"
            }, {
                type: "issue",
                text: "test"
            }]
        }],
        pc: [{
            version: "3.0.0",
            date: "2025-04-26",
            changes: [{
                type: "added",
                text: "Updated To The Latest Version"
            }, {
                type: "added",
                text: "New UI"
            }]
        }, {
            version: "1.0.0",
            date: "2024-03-15",
            changes: [{
                type: "added",
                text: "Test"
            }, {
                type: "removed",
                text: "Test"
            }, {
                type: "issue",
                text: "Test"
            }]
        }]
    }
      , r = i => {
        switch (i) {
        case "added":
            return v.jsx(To, {
                className: "h-4 w-4"
            });
        case "removed":
            return v.jsx(gc, {
                className: "h-4 w-4"
            });
        case "issue":
            return v.jsx(vc, {
                className: "h-4 w-4"
            });
        case "fixed":
            return v.jsx(Do, {
                className: "h-4 w-4"
            });
        default:
            return v.jsx(To, {
                className: "h-4 w-4"
            })
        }
    }
      , l = i => {
        const o = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300";
        switch (i) {
        case "added":
            return `${o} bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20`;
        case "removed":
            return `${o} bg-red-500/10 text-red-500 hover:bg-red-500/20`;
        case "issue":
            return `${o} bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20`;
        case "fixed":
            return `${o} bg-blue-500/10 text-blue-500 hover:bg-blue-500/20`;
        default:
            return `${o} bg-gray-500/10 text-gray-300`
        }
    }
    ;
    return v.jsxs("div", {
        className: "min-h-screen bg-black text-white overflow-x-hidden",
        children: [v.jsxs("div", {
            className: "fixed inset-0 pointer-events-none",
            children: [v.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/10"
            }), v.jsxs("div", {
                className: "absolute top-0 left-0 w-full h-full overflow-hidden",
                children: [v.jsx("div", {
                    className: "absolute -top-1/2 -right-1/2 w-[100vw] h-[100vw] md:w-[1000px] md:h-[1000px] bg-red-900/20 rounded-full blur-[100px] animate-blob"
                }), v.jsx("div", {
                    className: "absolute -bottom-1/2 -left-1/2 w-[100vw] h-[100vw] md:w-[1000px] md:h-[1000px] bg-red-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000"
                })]
            })]
        }), v.jsx("header", {
            className: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-red-900/20",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 h-16 flex items-center justify-between",
                children: [v.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [v.jsx("div", {
                        className: "relative",
                        children: v.jsx("img", {
                            src: "https://files.catbox.moe/hktosf.webp",
                            alt: "ReveliX Logo",
                            className: "h-8 w-8"
                        })
                    }), v.jsx("span", {
                        className: "text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "ReveliXV2"
                    })]
                }), v.jsxs("a", {
                    href: "/",
                    className: "flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors duration-300",
                    children: [v.jsx(Cv, {
                        size: 18
                    }), v.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Back to Home"
                    })]
                })]
            })
        }), v.jsx("main", {
            className: "relative pt-24 pb-16 px-4",
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [v.jsxs("div", {
                    className: "text-center mb-12",
                    children: [v.jsx("h1", {
                        className: "text-4xl md:text-6xl font-bold mb-4",
                        children: v.jsx("span", {
                            className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Download ReveliXV2"
                        })
                    }), v.jsx("p", {
                        className: "text-gray-400 text-base md:text-lg max-w-2xl mx-auto",
                        children: "Choose your platform and unleash the power of ReveliXV2"
                    })]
                }), v.jsx("div", {
                    className: "grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto",
                    children: ["android", "pc"].map(i => v.jsxs("div", {
                        className: "space-y-6",
                        children: [v.jsxs("div", {
                            className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-xl p-6 transition-all duration-300 hover:border-red-500/30",
                            children: [v.jsx("div", {
                                className: "flex items-center justify-between mb-6",
                                children: v.jsxs("div", {
                                    className: "flex items-center space-x-3",
                                    children: [v.jsx("div", {
                                        className: "p-2 bg-red-500/10 rounded-lg",
                                        children: i === "android" ? v.jsx(zv, {
                                            className: "h-6 w-6 text-red-500"
                                        }) : v.jsx(Dv, {
                                            className: "h-6 w-6 text-red-500"
                                        })
                                    }), v.jsxs("div", {
                                        children: [v.jsx("h2", {
                                            className: "text-xl font-bold",
                                            children: i === "android" ? "Android" : "Windows PC"
                                        }), v.jsxs("span", {
                                            className: "text-sm text-gray-400",
                                            children: ["v", i === "android" ? "1.6.0" : "3.0.0"]
                                        })]
                                    })]
                                })
                            }), v.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",
                                children: t[i].map( (o, a) => v.jsxs("div", {
                                    className: "flex items-center space-x-3 p-3 bg-red-500/5 rounded-lg hover:bg-red-500/10 transition-colors duration-300",
                                    children: [v.jsx("div", {
                                        className: "text-red-500",
                                        children: o.icon
                                    }), v.jsx("span", {
                                        className: "text-gray-300 text-sm",
                                        children: o.text
                                    })]
                                }, a))
                            }), v.jsxs("button", {
                                onClick: () => e(i),
                                className: "w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300",
                                children: [v.jsx(ep, {
                                    className: "h-5 w-5"
                                }), v.jsxs("span", {
                                    children: ["Download for ", i === "android" ? "Android" : "Windows"]
                                })]
                            })]
                        }), v.jsxs("div", {
                            className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-xl p-6",
                            children: [v.jsxs("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
                                children: [v.jsxs("div", {
                                    className: "flex items-center space-x-3",
                                    children: [v.jsx(_v, {
                                        className: "h-5 w-5 text-red-500"
                                    }), v.jsx("h3", {
                                        className: "text-lg font-bold",
                                        children: "Changelog"
                                    })]
                                }), v.jsx("div", {
                                    className: "flex flex-wrap gap-2 text-xs",
                                    children: [{
                                        type: "added",
                                        label: "Added",
                                        icon: To
                                    }, {
                                        type: "removed",
                                        label: "Removed",
                                        icon: gc
                                    }, {
                                        type: "issue",
                                        label: "Issue",
                                        icon: vc
                                    }, {
                                        type: "fixed",
                                        label: "Fixed",
                                        icon: Do
                                    }].map( ({type: o, label: a, icon: s}) => v.jsxs("div", {
                                        className: l(o),
                                        children: [v.jsx(s, {
                                            className: "h-3 w-3"
                                        }), v.jsx("span", {
                                            children: a
                                        })]
                                    }, o))
                                })]
                            }), v.jsx("div", {
                                className: "space-y-4",
                                children: n[i].map( (o, a) => v.jsxs("div", {
                                    className: "bg-black/40 rounded-lg p-4",
                                    children: [v.jsxs("div", {
                                        className: "flex items-center space-x-3 mb-3",
                                        children: [v.jsxs("span", {
                                            className: "text-red-500 font-semibold",
                                            children: ["v", o.version]
                                        }), v.jsx("span", {
                                            className: "text-gray-500",
                                            children: "•"
                                        }), v.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: o.date
                                        })]
                                    }), v.jsx("ul", {
                                        className: "space-y-2",
                                        children: o.changes.map( (s, u) => v.jsxs("li", {
                                            className: l(s.type),
                                            children: [r(s.type), v.jsx("span", {
                                                className: "text-sm",
                                                children: s.text
                                            })]
                                        }, u))
                                    })]
                                }, a))
                            })]
                        })]
                    }, i))
                })]
            })
        }), v.jsx(ip, {})]
    })
}
  , bv = dv([{
    path: "/",
    element: v.jsx(Yv, {})
}, {
    path: "/download",
    element: v.jsx(Gv, {})
}]);
Ff(document.getElementById("root")).render(v.jsx(_.StrictMode, {
    children: v.jsx(wv, {
        router: bv
    })
}));
.assign, no;
function Lr(e) {
    if (no === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            no = t && t[1] || ""
        }
    return `
` + no + e
}
var ro = !1;
function lo(e, t) {
    if (!e || ro)
        return "";
    ro = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || l[o] !== i[a]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        ro = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Lr(e) : ""
}
function bp(e) {
    switch (e.tag) {
    case 5:
        return Lr(e.type);
    case 16:
        return Lr("Lazy");
    case 13:
        return Lr("Suspense");
    case 19:
        return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = lo(e.type, !1),
        e;
    case 11:
        return e = lo(e.type.render, !1),
        e;
    case 1:
        return e = lo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Oo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case $n:
        return "Fragment";
    case An:
        return "Portal";
    case Do:
        return "Profiler";
    case Ma:
        return "StrictMode";
    case zo:
        return "Suspense";
    case Mo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Uc:
            return (e.displayName || "Context") + ".Consumer";
        case Ic:
            return (e._context.displayName || "Context") + ".Provider";
        case Oa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Fa:
            return t = e.displayName || null,
            t !== null ? t : Oo(e.type) || "Memo";
        case Vt:
            t = e._payload,
            e = e._init;
            try {
                return Oo(e(t))
            } catch {}
        }
    return null
}
function Gp(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Oo(t);
    case 8:
        return t === Ma ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function an(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function $c(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Zp(e) {
    var t = $c(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function jl(e) {
    e._valueTracker || (e._valueTracker = Zp(e))
}
function Bc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = $c(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ti(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Fo(e, t) {
    var n = t.checked;
    return fe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ws(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = an(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Hc(e, t) {
    t = t.checked,
    t != null && za(e, "checked", t, !1)
}
function Io(e, t) {
    Hc(e, t);
    var n = an(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Uo(e, t.type, an(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Qs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Uo(e, t, n) {
    (t !== "number" || ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Tr = Array.isArray;
function Zn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + an(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function Ao(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return fe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ks(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (Tr(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: an(n)
    }
}
function Vc(e, t) {
    var n = an(t.value)
      , r = an(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Xs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Wc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $o(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Wc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var _l, Qc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (_l = _l || document.createElement("div"),
        _l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = _l.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Qr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Jp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function(e) {
    Jp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Or[t] = Or[e]
    })
});
function Kc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Or.hasOwnProperty(e) && Or[e] ? ("" + t).trim() : t + "px"
}
function Xc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Kc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var qp = fe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Bo(e, t) {
    if (t) {
        if (qp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function Ho(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Vo = null;
function Ia(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Wo = null
  , Jn = null
  , qn = null;
function Ys(e) {
    if (e = pl(e)) {
        if (typeof Wo != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = Ii(t),
        Wo(e.stateNode, e.type, t))
    }
}
function Yc(e) {
    Jn ? qn ? qn.push(e) : qn = [e] : Jn = e
}
function bc() {
    if (Jn) {
        var e = Jn
          , t = qn;
        if (qn = Jn = null,
        Ys(e),
        t)
            for (e = 0; e < t.length; e++)
                Ys(t[e])
    }
}
function Gc(e, t) {
    return e(t)
}
function Zc() {}
var io = !1;
function Jc(e, t, n) {
    if (io)
        return e(t, n);
    io = !0;
    try {
        return Gc(e, t, n)
    } finally {
        io = !1,
        (Jn !== null || qn !== null) && (Zc(),
        bc())
    }
}
function Kr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ii(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var Qo = !1;
if (Dt)
    try {
        var wr = {};
        Object.defineProperty(wr, "passive", {
            get: function() {
                Qo = !0
            }
        }),
        window.addEventListener("test", wr, wr),
        window.removeEventListener("test", wr, wr)
    } catch {
        Qo = !1
    }
function eh(e, t, n, r, l, i, o, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var Fr = !1
  , ni = null
  , ri = !1
  , Ko = null
  , th = {
    onError: function(e) {
        Fr = !0,
        ni = e
    }
};
function nh(e, t, n, r, l, i, o, a, s) {
    Fr = !1,
    ni = null,
    eh.apply(th, arguments)
}
function rh(e, t, n, r, l, i, o, a, s) {
    if (nh.apply(this, arguments),
    Fr) {
        if (Fr) {
            var u = ni;
            Fr = !1,
            ni = null
        } else
            throw Error(_(198));
        ri || (ri = !0,
        Ko = u)
    }
}
function Dn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function qc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function bs(e) {
    if (Dn(e) !== e)
        throw Error(_(188))
}
function lh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dn(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return bs(l),
                    e;
                if (i === r)
                    return bs(l),
                    t;
                i = i.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, a = l.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function ed(e) {
    return e = lh(e),
    e !== null ? td(e) : null
}
function td(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = td(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var nd = qe.unstable_scheduleCallback
  , Gs = qe.unstable_cancelCallback
  , ih = qe.unstable_shouldYield
  , oh = qe.unstable_requestPaint
  , ve = qe.unstable_now
  , ah = qe.unstable_getCurrentPriorityLevel
  , Ua = qe.unstable_ImmediatePriority
  , rd = qe.unstable_UserBlockingPriority
  , li = qe.unstable_NormalPriority
  , sh = qe.unstable_LowPriority
  , ld = qe.unstable_IdlePriority
  , zi = null
  , Et = null;
function uh(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
        try {
            Et.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var vt = Math.clz32 ? Math.clz32 : fh
  , ch = Math.log
  , dh = Math.LN2;
function fh(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (ch(e) / dh | 0) | 0
}
var Pl = 64
  , Rl = 4194304;
function Dr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = Dr(a) : (i &= o,
        i !== 0 && (r = Dr(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = Dr(o) : i !== 0 && (r = Dr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - vt(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function ph(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function hh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - vt(i)
          , a = 1 << o
          , s = l[o];
        s === -1 ? (!(a & n) || a & r) && (l[o] = ph(a, t)) : s <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Xo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function id() {
    var e = Pl;
    return Pl <<= 1,
    !(Pl & 4194240) && (Pl = 64),
    e
}
function oo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function dl(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - vt(t),
    e[t] = n
}
function mh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - vt(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function Aa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - vt(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var q = 0;
function od(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ad, $a, sd, ud, cd, Yo = !1, Ll = [], Zt = null, Jt = null, qt = null, Xr = new Map, Yr = new Map, Qt = [], vh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zs(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Zt = null;
        break;
    case "dragenter":
    case "dragleave":
        Jt = null;
        break;
    case "mouseover":
    case "mouseout":
        qt = null;
        break;
    case "pointerover":
    case "pointerout":
        Xr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Yr.delete(t.pointerId)
    }
}
function Sr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = pl(t),
    t !== null && $a(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function yh(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return Zt = Sr(Zt, e, t, n, r, l),
        !0;
    case "dragenter":
        return Jt = Sr(Jt, e, t, n, r, l),
        !0;
    case "mouseover":
        return qt = Sr(qt, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return Xr.set(i, Sr(Xr.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        Yr.set(i, Sr(Yr.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function dd(e) {
    var t = wn(e.target);
    if (t !== null) {
        var n = Dn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = qc(n),
                t !== null) {
                    e.blockedOn = t,
                    cd(e.priority, function() {
                        sd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Wl(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Vo = r,
            n.target.dispatchEvent(r),
            Vo = null
        } else
            return t = pl(n),
            t !== null && $a(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Js(e, t, n) {
    Wl(e) && n.delete(t)
}
function gh() {
    Yo = !1,
    Zt !== null && Wl(Zt) && (Zt = null),
    Jt !== null && Wl(Jt) && (Jt = null),
    qt !== null && Wl(qt) && (qt = null),
    Xr.forEach(Js),
    Yr.forEach(Js)
}
function kr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Yo || (Yo = !0,
    qe.unstable_scheduleCallback(qe.unstable_NormalPriority, gh)))
}
function br(e) {
    function t(l) {
        return kr(l, e)
    }
    if (0 < Ll.length) {
        kr(Ll[0], e);
        for (var n = 1; n < Ll.length; n++) {
            var r = Ll[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Zt !== null && kr(Zt, e),
    Jt !== null && kr(Jt, e),
    qt !== null && kr(qt, e),
    Xr.forEach(t),
    Yr.forEach(t),
    n = 0; n < Qt.length; n++)
        r = Qt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0],
    n.blockedOn === null); )
        dd(n),
        n.blockedOn === null && Qt.shift()
}
var er = Ft.ReactCurrentBatchConfig
  , oi = !0;
function xh(e, t, n, r) {
    var l = q
      , i = er.transition;
    er.transition = null;
    try {
        q = 1,
        Ba(e, t, n, r)
    } finally {
        q = l,
        er.transition = i
    }
}
function wh(e, t, n, r) {
    var l = q
      , i = er.transition;
    er.transition = null;
    try {
        q = 4,
        Ba(e, t, n, r)
    } finally {
        q = l,
        er.transition = i
    }
}
function Ba(e, t, n, r) {
    if (oi) {
        var l = bo(e, t, n, r);
        if (l === null)
            yo(e, t, r, ai, n),
            Zs(e, r);
        else if (yh(l, e, t, n, r))
            r.stopPropagation();
        else if (Zs(e, r),
        t & 4 && -1 < vh.indexOf(e)) {
            for (; l !== null; ) {
                var i = pl(l);
                if (i !== null && ad(i),
                i = bo(e, t, n, r),
                i === null && yo(e, t, r, ai, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            yo(e, t, r, null, n)
    }
}
var ai = null;
function bo(e, t, n, r) {
    if (ai = null,
    e = Ia(r),
    e = wn(e),
    e !== null)
        if (t = Dn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = qc(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ai = e,
    null
}
function fd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (ah()) {
        case Ua:
            return 1;
        case rd:
            return 4;
        case li:
        case sh:
            return 16;
        case ld:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Xt = null
  , Ha = null
  , Ql = null;
function pd() {
    if (Ql)
        return Ql;
    var e, t = Ha, n = t.length, r, l = "value"in Xt ? Xt.value : Xt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Ql = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Kl(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Tl() {
    return !0
}
function qs() {
    return !1
}
function tt(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Tl : qs,
        this.isPropagationStopped = qs,
        this
    }
    return fe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Tl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Tl)
        },
        persist: function() {},
        isPersistent: Tl
    }),
    t
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Va = tt(fr), fl = fe({}, fr, {
    view: 0,
    detail: 0
}), Sh = tt(fl), ao, so, Er, Mi = fe({}, fl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Wa,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? (ao = e.screenX - Er.screenX,
        so = e.screenY - Er.screenY) : so = ao = 0,
        Er = e),
        ao)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : so
    }
}), eu = tt(Mi), kh = fe({}, Mi, {
    dataTransfer: 0
}), Eh = tt(kh), Nh = fe({}, fl, {
    relatedTarget: 0
}), uo = tt(Nh), Ch = fe({}, fr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), jh = tt(Ch), _h = fe({}, fr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Ph = tt(_h), Rh = fe({}, fr, {
    data: 0
}), tu = tt(Rh), Lh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Th = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Dh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function zh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Dh[e]) ? !!t[e] : !1
}
function Wa() {
    return zh
}
var Mh = fe({}, fl, {
    key: function(e) {
        if (e.key) {
            var t = Lh[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Kl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Th[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wa,
    charCode: function(e) {
        return e.type === "keypress" ? Kl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Oh = tt(Mh)
  , Fh = fe({}, Mi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , nu = tt(Fh)
  , Ih = fe({}, fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wa
})
  , Uh = tt(Ih)
  , Ah = fe({}, fr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , $h = tt(Ah)
  , Bh = fe({}, Mi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Hh = tt(Bh)
  , Vh = [9, 13, 27, 32]
  , Qa = Dt && "CompositionEvent"in window
  , Ir = null;
Dt && "documentMode"in document && (Ir = document.documentMode);
var Wh = Dt && "TextEvent"in window && !Ir
  , hd = Dt && (!Qa || Ir && 8 < Ir && 11 >= Ir)
  , ru = " "
  , lu = !1;
function md(e, t) {
    switch (e) {
    case "keyup":
        return Vh.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function vd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Bn = !1;
function Qh(e, t) {
    switch (e) {
    case "compositionend":
        return vd(t);
    case "keypress":
        return t.which !== 32 ? null : (lu = !0,
        ru);
    case "textInput":
        return e = t.data,
        e === ru && lu ? null : e;
    default:
        return null
    }
}
function Kh(e, t) {
    if (Bn)
        return e === "compositionend" || !Qa && md(e, t) ? (e = pd(),
        Ql = Ha = Xt = null,
        Bn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return hd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Xh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xh[e.type] : t === "textarea"
}
function yd(e, t, n, r) {
    Yc(r),
    t = si(t, "onChange"),
    0 < t.length && (n = new Va("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ur = null
  , Gr = null;
function Yh(e) {
    Pd(e, 0)
}
function Oi(e) {
    var t = Wn(e);
    if (Bc(t))
        return e
}
function bh(e, t) {
    if (e === "change")
        return t
}
var gd = !1;
if (Dt) {
    var co;
    if (Dt) {
        var fo = "oninput"in document;
        if (!fo) {
            var ou = document.createElement("div");
            ou.setAttribute("oninput", "return;"),
            fo = typeof ou.oninput == "function"
        }
        co = fo
    } else
        co = !1;
    gd = co && (!document.documentMode || 9 < document.documentMode)
}
function au() {
    Ur && (Ur.detachEvent("onpropertychange", xd),
    Gr = Ur = null)
}
function xd(e) {
    if (e.propertyName === "value" && Oi(Gr)) {
        var t = [];
        yd(t, Gr, e, Ia(e)),
        Jc(Yh, t)
    }
}
function Gh(e, t, n) {
    e === "focusin" ? (au(),
    Ur = t,
    Gr = n,
    Ur.attachEvent("onpropertychange", xd)) : e === "focusout" && au()
}
function Zh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Oi(Gr)
}
function Jh(e, t) {
    if (e === "click")
        return Oi(t)
}
function qh(e, t) {
    if (e === "input" || e === "change")
        return Oi(t)
}
function e0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var gt = typeof Object.is == "function" ? Object.is : e0;
function Zr(e, t) {
    if (gt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!To.call(t, l) || !gt(e[l], t[l]))
            return !1
    }
    return !0
}
function su(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function uu(e, t) {
    var n = su(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = su(n)
    }
}
function wd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Sd() {
    for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ti(e.document)
    }
    return t
}
function Ka(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function t0(e) {
    var t = Sd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && wd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ka(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = uu(n, i);
                var o = uu(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var n0 = Dt && "documentMode"in document && 11 >= document.documentMode
  , Hn = null
  , Go = null
  , Ar = null
  , Zo = !1;
function cu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zo || Hn == null || Hn !== ti(r) || (r = Hn,
    "selectionStart"in r && Ka(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ar && Zr(Ar, r) || (Ar = r,
    r = si(Go, "onSelect"),
    0 < r.length && (t = new Va("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Hn)))
}
function Dl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Vn = {
    animationend: Dl("Animation", "AnimationEnd"),
    animationiteration: Dl("Animation", "AnimationIteration"),
    animationstart: Dl("Animation", "AnimationStart"),
    transitionend: Dl("Transition", "TransitionEnd")
}
  , po = {}
  , kd = {};
Dt && (kd = document.createElement("div").style,
"AnimationEvent"in window || (delete Vn.animationend.animation,
delete Vn.animationiteration.animation,
delete Vn.animationstart.animation),
"TransitionEvent"in window || delete Vn.transitionend.transition);
function Fi(e) {
    if (po[e])
        return po[e];
    if (!Vn[e])
        return e;
    var t = Vn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in kd)
            return po[e] = t[n];
    return e
}
var Ed = Fi("animationend")
  , Nd = Fi("animationiteration")
  , Cd = Fi("animationstart")
  , jd = Fi("transitionend")
  , _d = new Map
  , du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function un(e, t) {
    _d.set(e, t),
    Tn(t, [e])
}
for (var ho = 0; ho < du.length; ho++) {
    var mo = du[ho]
      , r0 = mo.toLowerCase()
      , l0 = mo[0].toUpperCase() + mo.slice(1);
    un(r0, "on" + l0)
}
un(Ed, "onAnimationEnd");
un(Nd, "onAnimationIteration");
un(Cd, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(jd, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , i0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function fu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    rh(r, t, void 0, e),
    e.currentTarget = null
}
function Pd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    fu(l, a, u),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    fu(l, a, u),
                    i = s
                }
        }
    }
    if (ri)
        throw e = Ko,
        ri = !1,
        Ko = null,
        e
}
function oe(e, t) {
    var n = t[na];
    n === void 0 && (n = t[na] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Rd(t, e, 2, !1),
    n.add(r))
}
function vo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Rd(n, e, r, t)
}
var zl = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
    if (!e[zl]) {
        e[zl] = !0,
        Fc.forEach(function(n) {
            n !== "selectionchange" && (i0.has(n) || vo(n, !1, e),
            vo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zl] || (t[zl] = !0,
        vo("selectionchange", !1, t))
    }
}
function Rd(e, t, n, r) {
    switch (fd(t)) {
    case 1:
        var l = xh;
        break;
    case 4:
        l = wh;
        break;
    default:
        l = Ba
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !Qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function yo(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = wn(a),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Jc(function() {
        var u = i
          , f = Ia(n)
          , d = [];
        e: {
            var h = _d.get(e);
            if (h !== void 0) {
                var w = Va
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Kl(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Oh;
                    break;
                case "focusin":
                    S = "focus",
                    w = uo;
                    break;
                case "focusout":
                    S = "blur",
                    w = uo;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = uo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = eu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = Eh;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = Uh;
                    break;
                case Ed:
                case Nd:
                case Cd:
                    w = jh;
                    break;
                case jd:
                    w = $h;
                    break;
                case "scroll":
                    w = Sh;
                    break;
                case "wheel":
                    w = Hh;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Ph;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = nu
                }
                var E = (t & 4) !== 0
                  , R = !E && e === "scroll"
                  , v = E ? h !== null ? h + "Capture" : null : h;
                E = [];
                for (var c = u, y; c !== null; ) {
                    y = c;
                    var N = y.stateNode;
                    if (y.tag === 5 && N !== null && (y = N,
                    v !== null && (N = Kr(c, v),
                    N != null && E.push(qr(c, N, y)))),
                    R)
                        break;
                    c = c.return
                }
                0 < E.length && (h = new w(h,S,null,n,f),
                d.push({
                    event: h,
                    listeners: E
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                h && n !== Vo && (S = n.relatedTarget || n.fromElement) && (wn(S) || S[zt]))
                    break e;
                if ((w || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window,
                w ? (S = n.relatedTarget || n.toElement,
                w = u,
                S = S ? wn(S) : null,
                S !== null && (R = Dn(S),
                S !== R || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null,
                S = u),
                w !== S)) {
                    if (E = eu,
                    N = "onMouseLeave",
                    v = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (E = nu,
                    N = "onPointerLeave",
                    v = "onPointerEnter",
                    c = "pointer"),
                    R = w == null ? h : Wn(w),
                    y = S == null ? h : Wn(S),
                    h = new E(N,c + "leave",w,n,f),
                    h.target = R,
                    h.relatedTarget = y,
                    N = null,
                    wn(f) === u && (E = new E(v,c + "enter",S,n,f),
                    E.target = y,
                    E.relatedTarget = R,
                    N = E),
                    R = N,
                    w && S)
                        t: {
                            for (E = w,
                            v = S,
                            c = 0,
                            y = E; y; y = In(y))
                                c++;
                            for (y = 0,
                            N = v; N; N = In(N))
                                y++;
                            for (; 0 < c - y; )
                                E = In(E),
                                c--;
                            for (; 0 < y - c; )
                                v = In(v),
                                y--;
                            for (; c--; ) {
                                if (E === v || v !== null && E === v.alternate)
                                    break t;
                                E = In(E),
                                v = In(v)
                            }
                            E = null
                        }
                    else
                        E = null;
                    w !== null && pu(d, h, w, E, !1),
                    S !== null && R !== null && pu(d, R, S, E, !0)
                }
            }
            e: {
                if (h = u ? Wn(u) : window,
                w = h.nodeName && h.nodeName.toLowerCase(),
                w === "select" || w === "input" && h.type === "file")
                    var L = bh;
                else if (iu(h))
                    if (gd)
                        L = qh;
                    else {
                        L = Zh;
                        var O = Gh
                    }
                else
                    (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (L = Jh);
                if (L && (L = L(e, u))) {
                    yd(d, L, n, f);
                    break e
                }
                O && O(e, h, u),
                e === "focusout" && (O = h._wrapperState) && O.controlled && h.type === "number" && Uo(h, "number", h.value)
            }
            switch (O = u ? Wn(u) : window,
            e) {
            case "focusin":
                (iu(O) || O.contentEditable === "true") && (Hn = O,
                Go = u,
                Ar = null);
                break;
            case "focusout":
                Ar = Go = Hn = null;
                break;
            case "mousedown":
                Zo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Zo = !1,
                cu(d, n, f);
                break;
            case "selectionchange":
                if (n0)
                    break;
            case "keydown":
            case "keyup":
                cu(d, n, f)
            }
            var g;
            if (Qa)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                Bn ? md(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (hd && n.locale !== "ko" && (Bn || j !== "onCompositionStart" ? j === "onCompositionEnd" && Bn && (g = pd()) : (Xt = f,
            Ha = "value"in Xt ? Xt.value : Xt.textContent,
            Bn = !0)),
            O = si(u, j),
            0 < O.length && (j = new tu(j,e,null,n,f),
            d.push({
                event: j,
                listeners: O
            }),
            g ? j.data = g : (g = vd(n),
            g !== null && (j.data = g)))),
            (g = Wh ? Qh(e, n) : Kh(e, n)) && (u = si(u, "onBeforeInput"),
            0 < u.length && (f = new tu("onBeforeInput","beforeinput",null,n,f),
            d.push({
                event: f,
                listeners: u
            }),
            f.data = g))
        }
        Pd(d, t)
    })
}
function qr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function si(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = Kr(e, n),
        i != null && r.unshift(qr(e, i, l)),
        i = Kr(e, t),
        i != null && r.push(qr(e, i, l))),
        e = e.return
    }
    return r
}
function In(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function pu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        l ? (s = Kr(n, i),
        s != null && o.unshift(qr(n, s, a))) : l || (s = Kr(n, i),
        s != null && o.push(qr(n, s, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var o0 = /\r\n?/g
  , a0 = /\u0000|\uFFFD/g;
function hu(e) {
    return (typeof e == "string" ? e : "" + e).replace(o0, `
`).replace(a0, "")
}
function Ml(e, t, n) {
    if (t = hu(t),
    hu(e) !== t && n)
        throw Error(_(425))
}
function ui() {}
var Jo = null
  , qo = null;
function ea(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ta = typeof setTimeout == "function" ? setTimeout : void 0
  , s0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , mu = typeof Promise == "function" ? Promise : void 0
  , u0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof mu < "u" ? function(e) {
    return mu.resolve(null).then(e).catch(c0)
}
: ta;
function c0(e) {
    setTimeout(function() {
        throw e
    })
}
function go(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    br(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    br(t)
}
function en(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function vu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var pr = Math.random().toString(36).slice(2)
  , kt = "__reactFiber$" + pr
  , el = "__reactProps$" + pr
  , zt = "__reactContainer$" + pr
  , na = "__reactEvents$" + pr
  , d0 = "__reactListeners$" + pr
  , f0 = "__reactHandles$" + pr;
function wn(e) {
    var t = e[kt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[zt] || n[kt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = vu(e); e !== null; ) {
                    if (n = e[kt])
                        return n;
                    e = vu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function pl(e) {
    return e = e[kt] || e[zt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Wn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function Ii(e) {
    return e[el] || null
}
var ra = []
  , Qn = -1;
function cn(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > Qn || (e.current = ra[Qn],
    ra[Qn] = null,
    Qn--)
}
function ie(e, t) {
    Qn++,
    ra[Qn] = e.current,
    e.current = t
}
var sn = {}
  , Me = cn(sn)
  , Qe = cn(!1)
  , jn = sn;
function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function Ke(e) {
    return e = e.childContextTypes,
    e != null
}
function ci() {
    ae(Qe),
    ae(Me)
}
function yu(e, t, n) {
    if (Me.current !== sn)
        throw Error(_(168));
    ie(Me, t),
    ie(Qe, n)
}
function Ld(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(_(108, Gp(e) || "Unknown", l));
    return fe({}, n, r)
}
function di(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn,
    jn = Me.current,
    ie(Me, e),
    ie(Qe, Qe.current),
    !0
}
function gu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = Ld(e, t, jn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(Qe),
    ae(Me),
    ie(Me, e)) : ae(Qe),
    ie(Qe, n)
}
var Pt = null
  , Ui = !1
  , xo = !1;
function Td(e) {
    Pt === null ? Pt = [e] : Pt.push(e)
}
function p0(e) {
    Ui = !0,
    Td(e)
}
function dn() {
    if (!xo && Pt !== null) {
        xo = !0;
        var e = 0
          , t = q;
        try {
            var n = Pt;
            for (q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Pt = null,
            Ui = !1
        } catch (l) {
            throw Pt !== null && (Pt = Pt.slice(e + 1)),
            nd(Ua, dn),
            l
        } finally {
            q = t,
            xo = !1
        }
    }
    return null
}
var Kn = []
  , Xn = 0
  , fi = null
  , pi = 0
  , rt = []
  , lt = 0
  , _n = null
  , Rt = 1
  , Lt = "";
function vn(e, t) {
    Kn[Xn++] = pi,
    Kn[Xn++] = fi,
    fi = e,
    pi = t
}
function Dd(e, t, n) {
    rt[lt++] = Rt,
    rt[lt++] = Lt,
    rt[lt++] = _n,
    _n = e;
    var r = Rt;
    e = Lt;
    var l = 32 - vt(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - vt(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        Rt = 1 << 32 - vt(t) + l | n << l | r,
        Lt = i + e
    } else
        Rt = 1 << i | n << l | r,
        Lt = e
}
function Xa(e) {
    e.return !== null && (vn(e, 1),
    Dd(e, 1, 0))
}
function Ya(e) {
    for (; e === fi; )
        fi = Kn[--Xn],
        Kn[Xn] = null,
        pi = Kn[--Xn],
        Kn[Xn] = null;
    for (; e === _n; )
        _n = rt[--lt],
        rt[lt] = null,
        Lt = rt[--lt],
        rt[lt] = null,
        Rt = rt[--lt],
        rt[lt] = null
}
var Je = null
  , Ze = null
  , ue = !1
  , mt = null;
function zd(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function xu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Ze = en(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Ze = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = _n !== null ? {
            id: Rt,
            overflow: Lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = it(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Je = e,
        Ze = null,
        !0) : !1;
    default:
        return !1
    }
}
function la(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ia(e) {
    if (ue) {
        var t = Ze;
        if (t) {
            var n = t;
            if (!xu(e, t)) {
                if (la(e))
                    throw Error(_(418));
                t = en(n.nextSibling);
                var r = Je;
                t && xu(e, t) ? zd(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                Je = e)
            }
        } else {
            if (la(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            Je = e
        }
    }
}
function wu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Je = e
}
function Ol(e) {
    if (e !== Je)
        return !1;
    if (!ue)
        return wu(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ea(e.type, e.memoizedProps)),
    t && (t = Ze)) {
        if (la(e))
            throw Md(),
            Error(_(418));
        for (; t; )
            zd(e, t),
            t = en(t.nextSibling)
    }
    if (wu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ze = en(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ze = null
        }
    } else
        Ze = Je ? en(e.stateNode.nextSibling) : null;
    return !0
}
function Md() {
    for (var e = Ze; e; )
        e = en(e.nextSibling)
}
function ir() {
    Ze = Je = null,
    ue = !1
}
function ba(e) {
    mt === null ? mt = [e] : mt.push(e)
}
var h0 = Ft.ReactCurrentBatchConfig;
function Nr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function Fl(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Su(e) {
    var t = e._init;
    return t(e._payload)
}
function Od(e) {
    function t(v, c) {
        if (e) {
            var y = v.deletions;
            y === null ? (v.deletions = [c],
            v.flags |= 16) : y.push(c)
        }
    }
    function n(v, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(v, c),
            c = c.sibling;
        return null
    }
    function r(v, c) {
        for (v = new Map; c !== null; )
            c.key !== null ? v.set(c.key, c) : v.set(c.index, c),
            c = c.sibling;
        return v
    }
    function l(v, c) {
        return v = ln(v, c),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, c, y) {
        return v.index = y,
        e ? (y = v.alternate,
        y !== null ? (y = y.index,
        y < c ? (v.flags |= 2,
        c) : y) : (v.flags |= 2,
        c)) : (v.flags |= 1048576,
        c)
    }
    function o(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function a(v, c, y, N) {
        return c === null || c.tag !== 6 ? (c = jo(y, v.mode, N),
        c.return = v,
        c) : (c = l(c, y),
        c.return = v,
        c)
    }
    function s(v, c, y, N) {
        var L = y.type;
        return L === $n ? f(v, c, y.props.children, N, y.key) : c !== null && (c.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Vt && Su(L) === c.type) ? (N = l(c, y.props),
        N.ref = Nr(v, c, y),
        N.return = v,
        N) : (N = ql(y.type, y.key, y.props, null, v.mode, N),
        N.ref = Nr(v, c, y),
        N.return = v,
        N)
    }
    function u(v, c, y, N) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== y.containerInfo || c.stateNode.implementation !== y.implementation ? (c = _o(y, v.mode, N),
        c.return = v,
        c) : (c = l(c, y.children || []),
        c.return = v,
        c)
    }
    function f(v, c, y, N, L) {
        return c === null || c.tag !== 7 ? (c = Cn(y, v.mode, N, L),
        c.return = v,
        c) : (c = l(c, y),
        c.return = v,
        c)
    }
    function d(v, c, y) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = jo("" + c, v.mode, y),
            c.return = v,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Cl:
                return y = ql(c.type, c.key, c.props, null, v.mode, y),
                y.ref = Nr(v, null, c),
                y.return = v,
                y;
            case An:
                return c = _o(c, v.mode, y),
                c.return = v,
                c;
            case Vt:
                var N = c._init;
                return d(v, N(c._payload), y)
            }
            if (Tr(c) || xr(c))
                return c = Cn(c, v.mode, y, null),
                c.return = v,
                c;
            Fl(v, c)
        }
        return null
    }
    function h(v, c, y, N) {
        var L = c !== null ? c.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return L !== null ? null : a(v, c, "" + y, N);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Cl:
                return y.key === L ? s(v, c, y, N) : null;
            case An:
                return y.key === L ? u(v, c, y, N) : null;
            case Vt:
                return L = y._init,
                h(v, c, L(y._payload), N)
            }
            if (Tr(y) || xr(y))
                return L !== null ? null : f(v, c, y, N, null);
            Fl(v, y)
        }
        return null
    }
    function w(v, c, y, N, L) {
        if (typeof N == "string" && N !== "" || typeof N == "number")
            return v = v.get(y) || null,
            a(c, v, "" + N, L);
        if (typeof N == "object" && N !== null) {
            switch (N.$$typeof) {
            case Cl:
                return v = v.get(N.key === null ? y : N.key) || null,
                s(c, v, N, L);
            case An:
                return v = v.get(N.key === null ? y : N.key) || null,
                u(c, v, N, L);
            case Vt:
                var O = N._init;
                return w(v, c, y, O(N._payload), L)
            }
            if (Tr(N) || xr(N))
                return v = v.get(y) || null,
                f(c, v, N, L, null);
            Fl(c, N)
        }
        return null
    }
    function S(v, c, y, N) {
        for (var L = null, O = null, g = c, j = c = 0, B = null; g !== null && j < y.length; j++) {
            g.index > j ? (B = g,
            g = null) : B = g.sibling;
            var D = h(v, g, y[j], N);
            if (D === null) {
                g === null && (g = B);
                break
            }
            e && g && D.alternate === null && t(v, g),
            c = i(D, c, j),
            O === null ? L = D : O.sibling = D,
            O = D,
            g = B
        }
        if (j === y.length)
            return n(v, g),
            ue && vn(v, j),
            L;
        if (g === null) {
            for (; j < y.length; j++)
                g = d(v, y[j], N),
                g !== null && (c = i(g, c, j),
                O === null ? L = g : O.sibling = g,
                O = g);
            return ue && vn(v, j),
            L
        }
        for (g = r(v, g); j < y.length; j++)
            B = w(g, v, j, y[j], N),
            B !== null && (e && B.alternate !== null && g.delete(B.key === null ? j : B.key),
            c = i(B, c, j),
            O === null ? L = B : O.sibling = B,
            O = B);
        return e && g.forEach(function(ee) {
            return t(v, ee)
        }),
        ue && vn(v, j),
        L
    }
    function E(v, c, y, N) {
        var L = xr(y);
        if (typeof L != "function")
            throw Error(_(150));
        if (y = L.call(y),
        y == null)
            throw Error(_(151));
        for (var O = L = null, g = c, j = c = 0, B = null, D = y.next(); g !== null && !D.done; j++,
        D = y.next()) {
            g.index > j ? (B = g,
            g = null) : B = g.sibling;
            var ee = h(v, g, D.value, N);
            if (ee === null) {
                g === null && (g = B);
                break
            }
            e && g && ee.alternate === null && t(v, g),
            c = i(ee, c, j),
            O === null ? L = ee : O.sibling = ee,
            O = ee,
            g = B
        }
        if (D.done)
            return n(v, g),
            ue && vn(v, j),
            L;
        if (g === null) {
            for (; !D.done; j++,
            D = y.next())
                D = d(v, D.value, N),
                D !== null && (c = i(D, c, j),
                O === null ? L = D : O.sibling = D,
                O = D);
            return ue && vn(v, j),
            L
        }
        for (g = r(v, g); !D.done; j++,
        D = y.next())
            D = w(g, v, j, D.value, N),
            D !== null && (e && D.alternate !== null && g.delete(D.key === null ? j : D.key),
            c = i(D, c, j),
            O === null ? L = D : O.sibling = D,
            O = D);
        return e && g.forEach(function(re) {
            return t(v, re)
        }),
        ue && vn(v, j),
        L
    }
    function R(v, c, y, N) {
        if (typeof y == "object" && y !== null && y.type === $n && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Cl:
                e: {
                    for (var L = y.key, O = c; O !== null; ) {
                        if (O.key === L) {
                            if (L = y.type,
                            L === $n) {
                                if (O.tag === 7) {
                                    n(v, O.sibling),
                                    c = l(O, y.props.children),
                                    c.return = v,
                                    v = c;
                                    break e
                                }
                            } else if (O.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Vt && Su(L) === O.type) {
                                n(v, O.sibling),
                                c = l(O, y.props),
                                c.ref = Nr(v, O, y),
                                c.return = v,
                                v = c;
                                break e
                            }
                            n(v, O);
                            break
                        } else
                            t(v, O);
                        O = O.sibling
                    }
                    y.type === $n ? (c = Cn(y.props.children, v.mode, N, y.key),
                    c.return = v,
                    v = c) : (N = ql(y.type, y.key, y.props, null, v.mode, N),
                    N.ref = Nr(v, c, y),
                    N.return = v,
                    v = N)
                }
                return o(v);
            case An:
                e: {
                    for (O = y.key; c !== null; ) {
                        if (c.key === O)
                            if (c.tag === 4 && c.stateNode.containerInfo === y.containerInfo && c.stateNode.implementation === y.implementation) {
                                n(v, c.sibling),
                                c = l(c, y.children || []),
                                c.return = v,
                                v = c;
                                break e
                            } else {
                                n(v, c);
                                break
                            }
                        else
                            t(v, c);
                        c = c.sibling
                    }
                    c = _o(y, v.mode, N),
                    c.return = v,
                    v = c
                }
                return o(v);
            case Vt:
                return O = y._init,
                R(v, c, O(y._payload), N)
            }
            if (Tr(y))
                return S(v, c, y, N);
            if (xr(y))
                return E(v, c, y, N);
            Fl(v, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        c !== null && c.tag === 6 ? (n(v, c.sibling),
        c = l(c, y),
        c.return = v,
        v = c) : (n(v, c),
        c = jo(y, v.mode, N),
        c.return = v,
        v = c),
        o(v)) : n(v, c)
    }
    return R
}
var or = Od(!0)
  , Fd = Od(!1)
  , hi = cn(null)
  , mi = null
  , Yn = null
  , Ga = null;
function Za() {
    Ga = Yn = mi = null
}
function Ja(e) {
    var t = hi.current;
    ae(hi),
    e._currentValue = t
}
function oa(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function tr(e, t) {
    mi = e,
    Ga = Yn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (We = !0),
    e.firstContext = null)
}
function at(e) {
    var t = e._currentValue;
    if (Ga !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Yn === null) {
            if (mi === null)
                throw Error(_(308));
            Yn = e,
            mi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Yn = Yn.next = e;
    return t
}
var Sn = null;
function qa(e) {
    Sn === null ? Sn = [e] : Sn.push(e)
}
function Id(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    qa(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Mt(e, r)
}
function Mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Wt = !1;
function es(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ud(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Tt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    b & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Mt(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    qa(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Mt(e, n)
}
function Xl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Aa(e, n)
    }
}
function ku(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function vi(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        o === null ? i = u : o.next = u,
        o = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== o && (a === null ? f.firstBaseUpdate = u : a.next = u,
        f.lastBaseUpdate = s))
    }
    if (i !== null) {
        var d = l.baseState;
        o = 0,
        f = u = s = null,
        a = i;
        do {
            var h = a.lane
              , w = a.eventTime;
            if ((r & h) === h) {
                f !== null && (f = f.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , E = a;
                    switch (h = t,
                    w = n,
                    E.tag) {
                    case 1:
                        if (S = E.payload,
                        typeof S == "function") {
                            d = S.call(w, d, h);
                            break e
                        }
                        d = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = E.payload,
                        h = typeof S == "function" ? S.call(w, d, h) : S,
                        h == null)
                            break e;
                        d = fe({}, d, h);
                        break e;
                    case 2:
                        Wt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = l.effects,
                h === null ? l.effects = [a] : h.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (u = f = w,
                s = d) : f = f.next = w,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = l.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                l.lastBaseUpdate = h,
                l.shared.pending = null
            }
        } while (!0);
        if (f === null && (s = d),
        l.baseState = s,
        l.firstBaseUpdate = u,
        l.lastBaseUpdate = f,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Rn |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function Eu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(_(191, l));
                l.call(r)
            }
        }
}
var hl = {}
  , Nt = cn(hl)
  , tl = cn(hl)
  , nl = cn(hl);
function kn(e) {
    if (e === hl)
        throw Error(_(174));
    return e
}
function ts(e, t) {
    switch (ie(nl, t),
    ie(tl, e),
    ie(Nt, hl),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $o(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $o(t, e)
    }
    ae(Nt),
    ie(Nt, t)
}
function ar() {
    ae(Nt),
    ae(tl),
    ae(nl)
}
function Ad(e) {
    kn(nl.current);
    var t = kn(Nt.current)
      , n = $o(t, e.type);
    t !== n && (ie(tl, e),
    ie(Nt, n))
}
function ns(e) {
    tl.current === e && (ae(Nt),
    ae(tl))
}
var ce = cn(0);
function yi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var wo = [];
function rs() {
    for (var e = 0; e < wo.length; e++)
        wo[e]._workInProgressVersionPrimary = null;
    wo.length = 0
}
var Yl = Ft.ReactCurrentDispatcher
  , So = Ft.ReactCurrentBatchConfig
  , Pn = 0
  , de = null
  , Se = null
  , Ee = null
  , gi = !1
  , $r = !1
  , rl = 0
  , m0 = 0;
function Te() {
    throw Error(_(321))
}
function ls(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function is(e, t, n, r, l, i) {
    if (Pn = i,
    de = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Yl.current = e === null || e.memoizedState === null ? x0 : w0,
    e = n(r, l),
    $r) {
        i = 0;
        do {
            if ($r = !1,
            rl = 0,
            25 <= i)
                throw Error(_(301));
            i += 1,
            Ee = Se = null,
            t.updateQueue = null,
            Yl.current = S0,
            e = n(r, l)
        } while ($r)
    }
    if (Yl.current = xi,
    t = Se !== null && Se.next !== null,
    Pn = 0,
    Ee = Se = de = null,
    gi = !1,
    t)
        throw Error(_(300));
    return e
}
function os() {
    var e = rl !== 0;
    return rl = 0,
    e
}
function St() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ee === null ? de.memoizedState = Ee = e : Ee = Ee.next = e,
    Ee
}
function st() {
    if (Se === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Se.next;
    var t = Ee === null ? de.memoizedState : Ee.next;
    if (t !== null)
        Ee = t,
        Se = e;
    else {
        if (e === null)
            throw Error(_(310));
        Se = e,
        e = {
            memoizedState: Se.memoizedState,
            baseState: Se.baseState,
            baseQueue: Se.baseQueue,
            queue: Se.queue,
            next: null
        },
        Ee === null ? de.memoizedState = Ee = e : Ee = Ee.next = e
    }
    return Ee
}
function ll(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ko(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = Se
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var a = o = null
          , s = null
          , u = i;
        do {
            var f = u.lane;
            if ((Pn & f) === f)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = d,
                o = r) : s = s.next = d,
                de.lanes |= f,
                Rn |= f
            }
            u = u.next
        } while (u !== null && u !== i);
        s === null ? o = r : s.next = a,
        gt(r, t.memoizedState) || (We = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            de.lanes |= i,
            Rn |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Eo(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        gt(i, t.memoizedState) || (We = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function $d() {}
function Bd(e, t) {
    var n = de
      , r = st()
      , l = t()
      , i = !gt(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    We = !0),
    r = r.queue,
    as(Wd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Ee !== null && Ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        il(9, Vd.bind(null, n, r, l, t), void 0, null),
        Ne === null)
            throw Error(_(349));
        Pn & 30 || Hd(n, t, l)
    }
    return l
}
function Hd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Vd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Qd(t) && Kd(e)
}
function Wd(e, t, n) {
    return n(function() {
        Qd(t) && Kd(e)
    })
}
function Qd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gt(e, n)
    } catch {
        return !0
    }
}
function Kd(e) {
    var t = Mt(e, 1);
    t !== null && yt(t, e, 1, -1)
}
function Nu(e) {
    var t = St();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = g0.bind(null, de, e),
    [t.memoizedState, e]
}
function il(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Xd() {
    return st().memoizedState
}
function bl(e, t, n, r) {
    var l = St();
    de.flags |= e,
    l.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ai(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Se !== null) {
        var o = Se.memoizedState;
        if (i = o.destroy,
        r !== null && ls(r, o.deps)) {
            l.memoizedState = il(t, n, i, r);
            return
        }
    }
    de.flags |= e,
    l.memoizedState = il(1 | t, n, i, r)
}
function Cu(e, t) {
    return bl(8390656, 8, e, t)
}
function as(e, t) {
    return Ai(2048, 8, e, t)
}
function Yd(e, t) {
    return Ai(4, 2, e, t)
}
function bd(e, t) {
    return Ai(4, 4, e, t)
}
function Gd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Zd(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ai(4, 4, Gd.bind(null, t, e), n)
}
function ss() {}
function Jd(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function qd(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ef(e, t, n) {
    return Pn & 21 ? (gt(n, t) || (n = id(),
    de.lanes |= n,
    Rn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    We = !0),
    e.memoizedState = n)
}
function v0(e, t) {
    var n = q;
    q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = So.transition;
    So.transition = {};
    try {
        e(!1),
        t()
    } finally {
        q = n,
        So.transition = r
    }
}
function tf() {
    return st().memoizedState
}
function y0(e, t, n) {
    var r = rn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    nf(e))
        rf(t, n);
    else if (n = Id(e, t, n, r),
    n !== null) {
        var l = Ae();
        yt(n, e, r, l),
        lf(n, t, r)
    }
}
function g0(e, t, n) {
    var r = rn(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (nf(e))
        rf(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = a,
                gt(a, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    qa(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Id(e, t, l, r),
        n !== null && (l = Ae(),
        yt(n, e, r, l),
        lf(n, t, r))
    }
}
function nf(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de
}
function rf(e, t) {
    $r = gi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function lf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Aa(e, n)
    }
}
var xi = {
    readContext: at,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
  , x0 = {
    readContext: at,
    useCallback: function(e, t) {
        return St().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: at,
    useEffect: Cu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        bl(4194308, 4, Gd.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return bl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return bl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = St();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = St();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = y0.bind(null, de, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = St();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Nu,
    useDebugValue: ss,
    useDeferredValue: function(e) {
        return St().memoizedState = e
    },
    useTransition: function() {
        var e = Nu(!1)
          , t = e[0];
        return e = v0.bind(null, e[1]),
        St().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = de
          , l = St();
        if (ue) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            Ne === null)
                throw Error(_(349));
            Pn & 30 || Hd(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        Cu(Wd.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        il(9, Vd.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = St()
          , t = Ne.identifierPrefix;
        if (ue) {
            var n = Lt
              , r = Rt;
            n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = rl++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = m0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , w0 = {
    readContext: at,
    useCallback: Jd,
    useContext: at,
    useEffect: as,
    useImperativeHandle: Zd,
    useInsertionEffect: Yd,
    useLayoutEffect: bd,
    useMemo: qd,
    useReducer: ko,
    useRef: Xd,
    useState: function() {
        return ko(ll)
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
        var t = st();
        return ef(t, Se.memoizedState, e)
    },
    useTransition: function() {
        var e = ko(ll)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: $d,
    useSyncExternalStore: Bd,
    useId: tf,
    unstable_isNewReconciler: !1
}
  , S0 = {
    readContext: at,
    useCallback: Jd,
    useContext: at,
    useEffect: as,
    useImperativeHandle: Zd,
    useInsertionEffect: Yd,
    useLayoutEffect: bd,
    useMemo: qd,
    useReducer: Eo,
    useRef: Xd,
    useState: function() {
        return Eo(ll)
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
        var t = st();
        return Se === null ? t.memoizedState = e : ef(t, Se.memoizedState, e)
    },
    useTransition: function() {
        var e = Eo(ll)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: $d,
    useSyncExternalStore: Bd,
    useId: tf,
    unstable_isNewReconciler: !1
};
function ft(e, t) {
    if (e && e.defaultProps) {
        t = fe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function aa(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : fe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $i = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , l = rn(e)
          , i = Tt(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = tn(e, i, l),
        t !== null && (yt(t, e, l, r),
        Xl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ae()
          , l = rn(e)
          , i = Tt(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = tn(e, i, l),
        t !== null && (yt(t, e, l, r),
        Xl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ae()
          , r = rn(e)
          , l = Tt(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = tn(e, l, r),
        t !== null && (yt(t, e, r, n),
        Xl(t, e, r))
    }
};
function ju(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(l, i) : !0
}
function of(e, t, n) {
    var r = !1
      , l = sn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = at(i) : (l = Ke(t) ? jn : Me.current,
    r = t.contextTypes,
    i = (r = r != null) ? lr(e, l) : sn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = $i,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function _u(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null)
}
function sa(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    es(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = at(i) : (i = Ke(t) ? jn : Me.current,
    l.context = lr(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (aa(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && $i.enqueueReplaceState(l, l.state, null),
    vi(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function sr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += bp(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function No(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ua(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var k0 = typeof WeakMap == "function" ? WeakMap : Map;
function af(e, t, n) {
    n = Tt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Si || (Si = !0,
        xa = r),
        ua(e, t)
    }
    ,
    n
}
function sf(e, t, n) {
    n = Tt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            ua(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ua(e, t),
        typeof r != "function" && (nn === null ? nn = new Set([this]) : nn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Pu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new k0;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = F0.bind(null, e, t, n),
    t.then(e, e))
}
function Ru(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Lu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1),
    t.tag = 2,
    tn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var E0 = Ft.ReactCurrentOwner
  , We = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? Fd(t, null, n, r) : or(t, e.child, n, r)
}
function Tu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return tr(t, l),
    r = is(e, t, n, r, i, l),
    n = os(),
    e !== null && !We ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ot(e, t, l)) : (ue && n && Xa(t),
    t.flags |= 1,
    Ue(e, t, r, l),
    t.child)
}
function Du(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !vs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        uf(e, t, i, r, l)) : (e = ql(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Zr,
        n(o, r) && e.ref === t.ref)
            return Ot(e, t, l)
    }
    return t.flags |= 1,
    e = ln(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function uf(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Zr(i, r) && e.ref === t.ref)
            if (We = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (We = !0);
            else
                return t.lanes = e.lanes,
                Ot(e, t, l)
    }
    return ca(e, t, n, r, l)
}
function cf(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(Gn, be),
            be |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(Gn, be),
                be |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ie(Gn, be),
            be |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(Gn, be),
        be |= r;
    return Ue(e, t, l, n),
    t.child
}
function df(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ca(e, t, n, r, l) {
    var i = Ke(n) ? jn : Me.current;
    return i = lr(t, i),
    tr(t, l),
    n = is(e, t, n, r, i, l),
    r = os(),
    e !== null && !We ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ot(e, t, l)) : (ue && r && Xa(t),
    t.flags |= 1,
    Ue(e, t, n, l),
    t.child)
}
function zu(e, t, n, r, l) {
    if (Ke(n)) {
        var i = !0;
        di(t)
    } else
        i = !1;
    if (tr(t, l),
    t.stateNode === null)
        Gl(e, t),
        of(t, n, r),
        sa(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var s = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = at(u) : (u = Ke(n) ? jn : Me.current,
        u = lr(t, u));
        var f = n.getDerivedStateFromProps
          , d = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== u) && _u(t, o, r, u),
        Wt = !1;
        var h = t.memoizedState;
        o.state = h,
        vi(t, r, o, l),
        s = t.memoizedState,
        a !== r || h !== s || Qe.current || Wt ? (typeof f == "function" && (aa(t, n, f, r),
        s = t.memoizedState),
        (a = Wt || ju(t, n, a, r, h, s, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Ud(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : ft(t.type, a),
        o.props = u,
        d = t.pendingProps,
        h = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = at(s) : (s = Ke(n) ? jn : Me.current,
        s = lr(t, s));
        var w = n.getDerivedStateFromProps;
        (f = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || h !== s) && _u(t, o, r, s),
        Wt = !1,
        h = t.memoizedState,
        o.state = h,
        vi(t, r, o, l);
        var S = t.memoizedState;
        a !== d || h !== S || Qe.current || Wt ? (typeof w == "function" && (aa(t, n, w, r),
        S = t.memoizedState),
        (u = Wt || ju(t, n, u, r, h, S, s) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        o.props = r,
        o.state = S,
        o.context = s,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return da(e, t, n, r, i, l)
}
function da(e, t, n, r, l, i) {
    df(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && gu(t, n, !1),
        Ot(e, t, i);
    r = t.stateNode,
    E0.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = or(t, e.child, null, i),
    t.child = or(t, null, a, i)) : Ue(e, t, a, i),
    t.memoizedState = r.state,
    l && gu(t, n, !0),
    t.child
}
function ff(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1),
    ts(e, t.containerInfo)
}
function Mu(e, t, n, r, l) {
    return ir(),
    ba(l),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var fa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function pa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function pf(e, t, n) {
    var r = t.pendingProps, l = ce.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    ie(ce, l & 1),
    e === null)
        return ia(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Vi(o, r, 0, null),
        e = Cn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = pa(n),
        t.memoizedState = fa,
        e) : us(t, o));
    if (l = e.memoizedState,
    l !== null && (a = l.dehydrated,
    a !== null))
        return N0(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        a = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = ln(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        a !== null ? i = ln(a, i) : (i = Cn(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? pa(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = fa,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = ln(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function us(e, t) {
    return t = Vi({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Il(e, t, n, r) {
    return r !== null && ba(r),
    or(t, e.child, null, n),
    e = us(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function N0(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = No(Error(_(422))),
        Il(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = Vi({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Cn(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && or(t, e.child, null, o),
        t.child.memoizedState = pa(o),
        t.memoizedState = fa,
        i);
    if (!(t.mode & 1))
        return Il(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(_(419)),
        r = No(i, r, void 0),
        Il(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    We || a) {
        if (r = Ne,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            Mt(e, l),
            yt(r, e, l, -1))
        }
        return ms(),
        r = No(Error(_(421))),
        Il(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = I0.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    Ze = en(l.nextSibling),
    Je = t,
    ue = !0,
    mt = null,
    e !== null && (rt[lt++] = Rt,
    rt[lt++] = Lt,
    rt[lt++] = _n,
    Rt = e.id,
    Lt = e.overflow,
    _n = t),
    t = us(t, r.children),
    t.flags |= 4096,
    t)
}
function Ou(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    oa(e.return, t, n)
}
function Co(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function hf(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (Ue(e, t, r.children, n),
    r = ce.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ou(e, n, t);
                else if (e.tag === 19)
                    Ou(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(ce, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && yi(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Co(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && yi(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Co(t, !0, n, null, i);
            break;
        case "together":
            Co(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Gl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Rn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ln(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ln(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function C0(e, t, n) {
    switch (t.tag) {
    case 3:
        ff(t),
        ir();
        break;
    case 5:
        Ad(t);
        break;
    case 1:
        Ke(t.type) && di(t);
        break;
    case 4:
        ts(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        ie(hi, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(ce, ce.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? pf(e, t, n) : (ie(ce, ce.current & 1),
            e = Ot(e, t, n),
            e !== null ? e.sibling : null);
        ie(ce, ce.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return hf(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        ie(ce, ce.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        cf(e, t, n)
    }
    return Ot(e, t, n)
}
var mf, ha, vf, yf;
mf = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ha = function() {}
;
vf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        kn(Nt.current);
        var i = null;
        switch (n) {
        case "input":
            l = Fo(e, l),
            r = Fo(e, r),
            i = [];
            break;
        case "select":
            l = fe({}, l, {
                value: void 0
            }),
            r = fe({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = Ao(e, l),
            r = Ao(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ui)
        }
        Bo(n, r);
        var o;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var a = l[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = l != null ? l[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wr.hasOwnProperty(u) ? (s != null && u === "onScroll" && oe("scroll", e),
                    i || a === s || (i = [])) : (i = i || []).push(u, s))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
yf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Cr(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function j0(e, t, n) {
    var r = t.pendingProps;
    switch (Ya(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return De(t),
        null;
    case 1:
        return Ke(t.type) && ci(),
        De(t),
        null;
    case 3:
        return r = t.stateNode,
        ar(),
        ae(Qe),
        ae(Me),
        rs(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        mt !== null && (ka(mt),
        mt = null))),
        ha(e, t),
        De(t),
        null;
    case 5:
        ns(t);
        var l = kn(nl.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            vf(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return De(t),
                null
            }
            if (e = kn(Nt.current),
            Ol(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[kt] = t,
                r[el] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < zr.length; l++)
                        oe(zr[l], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Ws(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Ks(r, i),
                    oe("invalid", r)
                }
                Bo(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ml(r.textContent, a, e),
                        l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ml(r.textContent, a, e),
                        l = ["children", "" + a]) : Wr.hasOwnProperty(o) && a != null && o === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    jl(r),
                    Qs(r, i, !0);
                    break;
                case "textarea":
                    jl(r),
                    Xs(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ui)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Wc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[kt] = t,
                e[el] = r,
                mf(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Ho(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < zr.length; l++)
                            oe(zr[l], e);
                        l = r;
                        break;
                    case "source":
                        oe("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        l = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Ws(e, r),
                        l = Fo(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = fe({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Ks(e, r),
                        l = Ao(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Bo(n, l),
                    a = l;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var s = a[i];
                            i === "style" ? Xc(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Qc(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qr(e, s) : typeof s == "number" && Qr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wr.hasOwnProperty(i) ? s != null && i === "onScroll" && oe("scroll", e) : s != null && za(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        jl(e),
                        Qs(e, r, !1);
                        break;
                    case "textarea":
                        jl(e),
                        Xs(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + an(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Zn(e, !!r.multiple, i, !1) : r.defaultValue != null && Zn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = ui)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return De(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            yf(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = kn(nl.current),
            kn(Nt.current),
            Ol(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[kt] = t,
                (i = r.nodeValue !== n) && (e = Je,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ml(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ml(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[kt] = t,
                t.stateNode = r
        }
        return De(t),
        null;
    case 13:
        if (ae(ce),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128))
                Md(),
                ir(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ol(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(_(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(_(317));
                    i[kt] = t
                } else
                    ir(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                De(t),
                i = !1
            } else
                mt !== null && (ka(mt),
                mt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : ms())),
        t.updateQueue !== null && (t.flags |= 4),
        De(t),
        null);
    case 4:
        return ar(),
        ha(e, t),
        e === null && Jr(t.stateNode.containerInfo),
        De(t),
        null;
    case 10:
        return Ja(t.type._context),
        De(t),
        null;
    case 17:
        return Ke(t.type) && ci(),
        De(t),
        null;
    case 19:
        if (ae(ce),
        i = t.memoizedState,
        i === null)
            return De(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Cr(i, !1);
            else {
                if (ke !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = yi(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Cr(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(ce, ce.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && ve() > ur && (t.flags |= 128,
                r = !0,
                Cr(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = yi(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Cr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !ue)
                        return De(t),
                        null
                } else
                    2 * ve() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Cr(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = ve(),
        t.sibling = null,
        n = ce.current,
        ie(ce, r ? n & 1 | 2 : n & 1),
        t) : (De(t),
        null);
    case 22:
    case 23:
        return hs(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? be & 1073741824 && (De(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function _0(e, t) {
    switch (Ya(t),
    t.tag) {
    case 1:
        return Ke(t.type) && ci(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ar(),
        ae(Qe),
        ae(Me),
        rs(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ns(t),
        null;
    case 13:
        if (ae(ce),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            ir()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(ce),
        null;
    case 4:
        return ar(),
        null;
    case 10:
        return Ja(t.type._context),
        null;
    case 22:
    case 23:
        return hs(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ul = !1
  , ze = !1
  , P0 = typeof WeakSet == "function" ? WeakSet : Set
  , M = null;
function bn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                me(e, t, r)
            }
        else
            n.current = null
}
function ma(e, t, n) {
    try {
        n()
    } catch (r) {
        me(e, t, r)
    }
}
var Fu = !1;
function R0(e, t) {
    if (Jo = oi,
    e = Sd(),
    Ka(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , f = 0
                      , d = e
                      , h = null;
                    t: for (; ; ) {
                        for (var w; d !== n || l !== 0 && d.nodeType !== 3 || (a = o + l),
                        d !== i || r !== 0 && d.nodeType !== 3 || (s = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (w = d.firstChild) !== null; )
                            h = d,
                            d = w;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (h === n && ++u === l && (a = o),
                            h === i && ++f === r && (s = o),
                            (w = d.nextSibling) !== null)
                                break;
                            d = h,
                            h = d.parentNode
                        }
                        d = w
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (qo = {
        focusedElem: e,
        selectionRange: n
    },
    oi = !1,
    M = t; M !== null; )
        if (t = M,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            M = e;
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var E = S.memoizedProps
                                  , R = S.memoizedState
                                  , v = t.stateNode
                                  , c = v.getSnapshotBeforeUpdate(t.elementType === t.type ? E : ft(t.type, E), R);
                                v.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (N) {
                    me(t, t.return, N)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    M = e;
                    break
                }
                M = t.return
            }
    return S = Fu,
    Fu = !1,
    S
}
function Br(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && ma(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function Bi(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function va(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function gf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    gf(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[kt],
    delete t[el],
    delete t[na],
    delete t[d0],
    delete t[f0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function xf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Iu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || xf(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ya(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ui));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ya(e, t, n),
        e = e.sibling; e !== null; )
            ya(e, t, n),
            e = e.sibling
}
function ga(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ga(e, t, n),
        e = e.sibling; e !== null; )
            ga(e, t, n),
            e = e.sibling
}
var _e = null
  , pt = !1;
function Bt(e, t, n) {
    for (n = n.child; n !== null; )
        wf(e, t, n),
        n = n.sibling
}
function wf(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
        try {
            Et.onCommitFiberUnmount(zi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ze || bn(n, t);
    case 6:
        var r = _e
          , l = pt;
        _e = null,
        Bt(e, t, n),
        _e = r,
        pt = l,
        _e !== null && (pt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
    case 18:
        _e !== null && (pt ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? go(e.parentNode, n) : e.nodeType === 1 && go(e, n),
        br(e)) : go(_e, n.stateNode));
        break;
    case 4:
        r = _e,
        l = pt,
        _e = n.stateNode.containerInfo,
        pt = !0,
        Bt(e, t, n),
        _e = r,
        pt = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ze && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && ma(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Bt(e, t, n);
        break;
    case 1:
        if (!ze && (bn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                me(n, t, a)
            }
        Bt(e, t, n);
        break;
    case 21:
        Bt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null,
        Bt(e, t, n),
        ze = r) : Bt(e, t, n);
        break;
    default:
        Bt(e, t, n)
    }
}
function Uu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new P0),
        t.forEach(function(r) {
            var l = U0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        _e = a.stateNode,
                        pt = !1;
                        break e;
                    case 3:
                        _e = a.stateNode.containerInfo,
                        pt = !0;
                        break e;
                    case 4:
                        _e = a.stateNode.containerInfo,
                        pt = !0;
                        break e
                    }
                    a = a.return
                }
                if (_e === null)
                    throw Error(_(160));
                wf(i, o, l),
                _e = null,
                pt = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (u) {
                me(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Sf(t, e),
            t = t.sibling
}
function Sf(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (dt(t, e),
        wt(e),
        r & 4) {
            try {
                Br(3, e, e.return),
                Bi(3, e)
            } catch (E) {
                me(e, e.return, E)
            }
            try {
                Br(5, e, e.return)
            } catch (E) {
                me(e, e.return, E)
            }
        }
        break;
    case 1:
        dt(t, e),
        wt(e),
        r & 512 && n !== null && bn(n, n.return);
        break;
    case 5:
        if (dt(t, e),
        wt(e),
        r & 512 && n !== null && bn(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Qr(l, "")
            } catch (E) {
                me(e, e.return, E)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Hc(l, i),
                    Ho(a, o);
                    var u = Ho(a, i);
                    for (o = 0; o < s.length; o += 2) {
                        var f = s[o]
                          , d = s[o + 1];
                        f === "style" ? Xc(l, d) : f === "dangerouslySetInnerHTML" ? Qc(l, d) : f === "children" ? Qr(l, d) : za(l, f, d, u)
                    }
                    switch (a) {
                    case "input":
                        Io(l, i);
                        break;
                    case "textarea":
                        Vc(l, i);
                        break;
                    case "select":
                        var h = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var w = i.value;
                        w != null ? Zn(l, !!i.multiple, w, !1) : h !== !!i.multiple && (i.defaultValue != null ? Zn(l, !!i.multiple, i.defaultValue, !0) : Zn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[el] = i
                } catch (E) {
                    me(e, e.return, E)
                }
        }
        break;
    case 6:
        if (dt(t, e),
        wt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (E) {
                me(e, e.return, E)
            }
        }
        break;
    case 3:
        if (dt(t, e),
        wt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                br(t.containerInfo)
            } catch (E) {
                me(e, e.return, E)
            }
        break;
    case 4:
        dt(t, e),
        wt(e);
        break;
    case 13:
        dt(t, e),
        wt(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (fs = ve())),
        r & 4 && Uu(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ze = (u = ze) || f,
        dt(t, e),
        ze = u) : dt(t, e),
        wt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (M = e,
                f = e.child; f !== null; ) {
                    for (d = M = f; M !== null; ) {
                        switch (h = M,
                        w = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Br(4, h, h.return);
                            break;
                        case 1:
                            bn(h, h.return);
                            var S = h.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (E) {
                                    me(r, n, E)
                                }
                            }
                            break;
                        case 5:
                            bn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                $u(d);
                                continue
                            }
                        }
                        w !== null ? (w.return = h,
                        M = w) : $u(d)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (f === null) {
                        f = d;
                        try {
                            l = d.stateNode,
                            u ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            s = d.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = Kc("display", o))
                        } catch (E) {
                            me(e, e.return, E)
                        }
                    }
                } else if (d.tag === 6) {
                    if (f === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (E) {
                            me(e, e.return, E)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    f === d && (f = null),
                    d = d.return
                }
                f === d && (f = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        dt(t, e),
        wt(e),
        r & 4 && Uu(e);
        break;
    case 21:
        break;
    default:
        dt(t, e),
        wt(e)
    }
}
function wt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (xf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Qr(l, ""),
                r.flags &= -33);
                var i = Iu(e);
                ga(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Iu(e);
                ya(e, a, o);
                break;
            default:
                throw Error(_(161))
            }
        } catch (s) {
            me(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function L0(e, t, n) {
    M = e,
    kf(e)
}
function kf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var l = M
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Ul;
            if (!o) {
                var a = l.alternate
                  , s = a !== null && a.memoizedState !== null || ze;
                a = Ul;
                var u = ze;
                if (Ul = o,
                (ze = s) && !u)
                    for (M = l; M !== null; )
                        o = M,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Bu(l) : s !== null ? (s.return = o,
                        M = s) : Bu(l);
                for (; i !== null; )
                    M = i,
                    kf(i),
                    i = i.sibling;
                M = l,
                Ul = a,
                ze = u
            }
            Au(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            M = i) : Au(e)
    }
}
function Au(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || Bi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Eu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Eu(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && br(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                    }
                ze || t.flags & 512 && va(t)
            } catch (h) {
                me(t, t.return, h)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function $u(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function Bu(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Bi(4, t)
                } catch (s) {
                    me(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        me(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    va(t)
                } catch (s) {
                    me(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    va(t)
                } catch (s) {
                    me(t, o, s)
                }
            }
        } catch (s) {
            me(t, t.return, s)
        }
        if (t === e) {
            M = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            M = a;
            break
        }
        M = t.return
    }
}
var T0 = Math.ceil
  , wi = Ft.ReactCurrentDispatcher
  , cs = Ft.ReactCurrentOwner
  , ot = Ft.ReactCurrentBatchConfig
  , b = 0
  , Ne = null
  , xe = null
  , Pe = 0
  , be = 0
  , Gn = cn(0)
  , ke = 0
  , ol = null
  , Rn = 0
  , Hi = 0
  , ds = 0
  , Hr = null
  , Ve = null
  , fs = 0
  , ur = 1 / 0
  , _t = null
  , Si = !1
  , xa = null
  , nn = null
  , Al = !1
  , Yt = null
  , ki = 0
  , Vr = 0
  , wa = null
  , Zl = -1
  , Jl = 0;
function Ae() {
    return b & 6 ? ve() : Zl !== -1 ? Zl : Zl = ve()
}
function rn(e) {
    return e.mode & 1 ? b & 2 && Pe !== 0 ? Pe & -Pe : h0.transition !== null ? (Jl === 0 && (Jl = id()),
    Jl) : (e = q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : fd(e.type)),
    e) : 1
}
function yt(e, t, n, r) {
    if (50 < Vr)
        throw Vr = 0,
        wa = null,
        Error(_(185));
    dl(e, n, r),
    (!(b & 2) || e !== Ne) && (e === Ne && (!(b & 2) && (Hi |= n),
    ke === 4 && Kt(e, Pe)),
    Xe(e, r),
    n === 1 && b === 0 && !(t.mode & 1) && (ur = ve() + 500,
    Ui && dn()))
}
function Xe(e, t) {
    var n = e.callbackNode;
    hh(e, t);
    var r = ii(e, e === Ne ? Pe : 0);
    if (r === 0)
        n !== null && Gs(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Gs(n),
        t === 1)
            e.tag === 0 ? p0(Hu.bind(null, e)) : Td(Hu.bind(null, e)),
            u0(function() {
                !(b & 6) && dn()
            }),
            n = null;
        else {
            switch (od(r)) {
            case 1:
                n = Ua;
                break;
            case 4:
                n = rd;
                break;
            case 16:
                n = li;
                break;
            case 536870912:
                n = ld;
                break;
            default:
                n = li
            }
            n = Lf(n, Ef.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ef(e, t) {
    if (Zl = -1,
    Jl = 0,
    b & 6)
        throw Error(_(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n)
        return null;
    var r = ii(e, e === Ne ? Pe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ei(e, r);
    else {
        t = r;
        var l = b;
        b |= 2;
        var i = Cf();
        (Ne !== e || Pe !== t) && (_t = null,
        ur = ve() + 500,
        Nn(e, t));
        do
            try {
                M0();
                break
            } catch (a) {
                Nf(e, a)
            }
        while (!0);
        Za(),
        wi.current = i,
        b = l,
        xe !== null ? t = 0 : (Ne = null,
        Pe = 0,
        t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (l = Xo(e),
        l !== 0 && (r = l,
        t = Sa(e, l))),
        t === 1)
            throw n = ol,
            Nn(e, 0),
            Kt(e, r),
            Xe(e, ve()),
            n;
        if (t === 6)
            Kt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !D0(l) && (t = Ei(e, r),
            t === 2 && (i = Xo(e),
            i !== 0 && (r = i,
            t = Sa(e, i))),
            t === 1))
                throw n = ol,
                Nn(e, 0),
                Kt(e, r),
                Xe(e, ve()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                yn(e, Ve, _t);
                break;
            case 3:
                if (Kt(e, r),
                (r & 130023424) === r && (t = fs + 500 - ve(),
                10 < t)) {
                    if (ii(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        Ae(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = ta(yn.bind(null, e, Ve, _t), t);
                    break
                }
                yn(e, Ve, _t);
                break;
            case 4:
                if (Kt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - vt(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = ve() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * T0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ta(yn.bind(null, e, Ve, _t), r);
                    break
                }
                yn(e, Ve, _t);
                break;
            case 5:
                yn(e, Ve, _t);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return Xe(e, ve()),
    e.callbackNode === n ? Ef.bind(null, e) : null
}
function Sa(e, t) {
    var n = Hr;
    return e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    e = Ei(e, t),
    e !== 2 && (t = Ve,
    Ve = n,
    t !== null && ka(t)),
    e
}
function ka(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e)
}
function D0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!gt(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Kt(e, t) {
    for (t &= ~ds,
    t &= ~Hi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - vt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Hu(e) {
    if (b & 6)
        throw Error(_(327));
    nr();
    var t = ii(e, 0);
    if (!(t & 1))
        return Xe(e, ve()),
        null;
    var n = Ei(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Xo(e);
        r !== 0 && (t = r,
        n = Sa(e, r))
    }
    if (n === 1)
        throw n = ol,
        Nn(e, 0),
        Kt(e, t),
        Xe(e, ve()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    yn(e, Ve, _t),
    Xe(e, ve()),
    null
}
function ps(e, t) {
    var n = b;
    b |= 1;
    try {
        return e(t)
    } finally {
        b = n,
        b === 0 && (ur = ve() + 500,
        Ui && dn())
    }
}
function Ln(e) {
    Yt !== null && Yt.tag === 0 && !(b & 6) && nr();
    var t = b;
    b |= 1;
    var n = ot.transition
      , r = q;
    try {
        if (ot.transition = null,
        q = 1,
        e)
            return e()
    } finally {
        q = r,
        ot.transition = n,
        b = t,
        !(b & 6) && dn()
    }
}
function hs() {
    be = Gn.current,
    ae(Gn)
}
function Nn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    s0(n)),
    xe !== null)
        for (n = xe.return; n !== null; ) {
            var r = n;
            switch (Ya(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ci();
                break;
            case 3:
                ar(),
                ae(Qe),
                ae(Me),
                rs();
                break;
            case 5:
                ns(r);
                break;
            case 4:
                ar();
                break;
            case 13:
                ae(ce);
                break;
            case 19:
                ae(ce);
                break;
            case 10:
                Ja(r.type._context);
                break;
            case 22:
            case 23:
                hs()
            }
            n = n.return
        }
    if (Ne = e,
    xe = e = ln(e.current, null),
    Pe = be = t,
    ke = 0,
    ol = null,
    ds = Hi = Rn = 0,
    Ve = Hr = null,
    Sn !== null) {
        for (t = 0; t < Sn.length; t++)
            if (n = Sn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        Sn = null
    }
    return e
}
function Nf(e, t) {
    do {
        var n = xe;
        try {
            if (Za(),
            Yl.current = xi,
            gi) {
                for (var r = de.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                gi = !1
            }
            if (Pn = 0,
            Ee = Se = de = null,
            $r = !1,
            rl = 0,
            cs.current = null,
            n === null || n.return === null) {
                ke = 1,
                ol = t,
                xe = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , a = n
                  , s = t;
                if (t = Pe,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , f = a
                      , d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = f.alternate;
                        h ? (f.updateQueue = h.updateQueue,
                        f.memoizedState = h.memoizedState,
                        f.lanes = h.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var w = Ru(o);
                    if (w !== null) {
                        w.flags &= -257,
                        Lu(w, o, a, i, t),
                        w.mode & 1 && Pu(i, u, t),
                        t = w,
                        s = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var E = new Set;
                            E.add(s),
                            t.updateQueue = E
                        } else
                            S.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Pu(i, u, t),
                            ms();
                            break e
                        }
                        s = Error(_(426))
                    }
                } else if (ue && a.mode & 1) {
                    var R = Ru(o);
                    if (R !== null) {
                        !(R.flags & 65536) && (R.flags |= 256),
                        Lu(R, o, a, i, t),
                        ba(sr(s, a));
                        break e
                    }
                }
                i = s = sr(s, a),
                ke !== 4 && (ke = 2),
                Hr === null ? Hr = [i] : Hr.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var v = af(i, s, t);
                        ku(i, v);
                        break e;
                    case 1:
                        a = s;
                        var c = i.type
                          , y = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (nn === null || !nn.has(y)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var N = sf(i, a, t);
                            ku(i, N);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            _f(n)
        } catch (L) {
            t = L,
            xe === n && n !== null && (xe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Cf() {
    var e = wi.current;
    return wi.current = xi,
    e === null ? xi : e
}
function ms() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ne === null || !(Rn & 268435455) && !(Hi & 268435455) || Kt(Ne, Pe)
}
function Ei(e, t) {
    var n = b;
    b |= 2;
    var r = Cf();
    (Ne !== e || Pe !== t) && (_t = null,
    Nn(e, t));
    do
        try {
            z0();
            break
        } catch (l) {
            Nf(e, l)
        }
    while (!0);
    if (Za(),
    b = n,
    wi.current = r,
    xe !== null)
        throw Error(_(261));
    return Ne = null,
    Pe = 0,
    ke
}
function z0() {
    for (; xe !== null; )
        jf(xe)
}
function M0() {
    for (; xe !== null && !ih(); )
        jf(xe)
}
function jf(e) {
    var t = Rf(e.alternate, e, be);
    e.memoizedProps = e.pendingProps,
    t === null ? _f(e) : xe = t,
    cs.current = null
}
function _f(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = _0(n, t),
            n !== null) {
                n.flags &= 32767,
                xe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ke = 6,
                xe = null;
                return
            }
        } else if (n = j0(n, t, be),
        n !== null) {
            xe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            xe = t;
            return
        }
        xe = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}
function yn(e, t, n) {
    var r = q
      , l = ot.transition;
    try {
        ot.transition = null,
        q = 1,
        O0(e, t, n, r)
    } finally {
        ot.transition = l,
        q = r
    }
    return null
}
function O0(e, t, n, r) {
    do
        nr();
    while (Yt !== null);
    if (b & 6)
        throw Error(_(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (mh(e, i),
    e === Ne && (xe = Ne = null,
    Pe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Al || (Al = !0,
    Lf(li, function() {
        return nr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = ot.transition,
        ot.transition = null;
        var o = q;
        q = 1;
        var a = b;
        b |= 4,
        cs.current = null,
        R0(e, n),
        Sf(n, e),
        t0(qo),
        oi = !!Jo,
        qo = Jo = null,
        e.current = n,
        L0(n),
        oh(),
        b = a,
        q = o,
        ot.transition = i
    } else
        e.current = n;
    if (Al && (Al = !1,
    Yt = e,
    ki = l),
    i = e.pendingLanes,
    i === 0 && (nn = null),
    uh(n.stateNode),
    Xe(e, ve()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (Si)
        throw Si = !1,
        e = xa,
        xa = null,
        e;
    return ki & 1 && e.tag !== 0 && nr(),
    i = e.pendingLanes,
    i & 1 ? e === wa ? Vr++ : (Vr = 0,
    wa = e) : Vr = 0,
    dn(),
    null
}
function nr() {
    if (Yt !== null) {
        var e = od(ki)
          , t = ot.transition
          , n = q;
        try {
            if (ot.transition = null,
            q = 16 > e ? 16 : e,
            Yt === null)
                var r = !1;
            else {
                if (e = Yt,
                Yt = null,
                ki = 0,
                b & 6)
                    throw Error(_(331));
                var l = b;
                for (b |= 4,
                M = e.current; M !== null; ) {
                    var i = M
                      , o = i.child;
                    if (M.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (M = u; M !== null; ) {
                                    var f = M;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Br(8, f, i)
                                    }
                                    var d = f.child;
                                    if (d !== null)
                                        d.return = f,
                                        M = d;
                                    else
                                        for (; M !== null; ) {
                                            f = M;
                                            var h = f.sibling
                                              , w = f.return;
                                            if (gf(f),
                                            f === u) {
                                                M = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = w,
                                                M = h;
                                                break
                                            }
                                            M = w
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var E = S.child;
                                if (E !== null) {
                                    S.child = null;
                                    do {
                                        var R = E.sibling;
                                        E.sibling = null,
                                        E = R
                                    } while (E !== null)
                                }
                            }
                            M = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        M = o;
                    else
                        e: for (; M !== null; ) {
                            if (i = M,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Br(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                M = v;
                                break e
                            }
                            M = i.return
                        }
                }
                var c = e.current;
                for (M = c; M !== null; ) {
                    o = M;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null)
                        y.return = o,
                        M = y;
                    else
                        e: for (o = c; M !== null; ) {
                            if (a = M,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bi(9, a)
                                    }
                                } catch (L) {
                                    me(a, a.return, L)
                                }
                            if (a === o) {
                                M = null;
                                break e
                            }
                            var N = a.sibling;
                            if (N !== null) {
                                N.return = a.return,
                                M = N;
                                break e
                            }
                            M = a.return
                        }
                }
                if (b = l,
                dn(),
                Et && typeof Et.onPostCommitFiberRoot == "function")
                    try {
                        Et.onPostCommitFiberRoot(zi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            q = n,
            ot.transition = t
        }
    }
    return !1
}
function Vu(e, t, n) {
    t = sr(n, t),
    t = af(e, t, 1),
    e = tn(e, t, 1),
    t = Ae(),
    e !== null && (dl(e, 1, t),
    Xe(e, t))
}
function me(e, t, n) {
    if (e.tag === 3)
        Vu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                    e = sr(n, e),
                    e = sf(t, e, 1),
                    t = tn(t, e, 1),
                    e = Ae(),
                    t !== null && (dl(t, 1, e),
                    Xe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function F0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ae(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ne === e && (Pe & n) === n && (ke === 4 || ke === 3 && (Pe & 130023424) === Pe && 500 > ve() - fs ? Nn(e, 0) : ds |= n),
    Xe(e, t)
}
function Pf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Rl,
    Rl <<= 1,
    !(Rl & 130023424) && (Rl = 4194304)) : t = 1);
    var n = Ae();
    e = Mt(e, t),
    e !== null && (dl(e, t, n),
    Xe(e, n))
}
function I0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Pf(e, n)
}
function U0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    Pf(e, n)
}
var Rf;
Rf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            We = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return We = !1,
                C0(e, t, n);
            We = !!(e.flags & 131072)
        }
    else
        We = !1,
        ue && t.flags & 1048576 && Dd(t, pi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Gl(e, t),
        e = t.pendingProps;
        var l = lr(t, Me.current);
        tr(t, n),
        l = is(null, t, r, e, l, n);
        var i = os();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ke(r) ? (i = !0,
        di(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        es(t),
        l.updater = $i,
        t.stateNode = l,
        l._reactInternals = t,
        sa(t, r, e, n),
        t = da(null, t, r, !0, i, n)) : (t.tag = 0,
        ue && i && Xa(t),
        Ue(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gl(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = $0(r),
            e = ft(r, e),
            l) {
            case 0:
                t = ca(null, t, r, e, n);
                break e;
            case 1:
                t = zu(null, t, r, e, n);
                break e;
            case 11:
                t = Tu(null, t, r, e, n);
                break e;
            case 14:
                t = Du(null, t, r, ft(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        ca(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        zu(e, t, r, l, n);
    case 3:
        e: {
            if (ff(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            Ud(e, t),
            vi(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = sr(Error(_(423)), t),
                    t = Mu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = sr(Error(_(424)), t),
                    t = Mu(e, t, r, n, l);
                    break e
                } else
                    for (Ze = en(t.stateNode.containerInfo.firstChild),
                    Je = t,
                    ue = !0,
                    mt = null,
                    n = Fd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ir(),
                r === l) {
                    t = Ot(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ad(t),
        e === null && ia(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        ea(r, l) ? o = null : i !== null && ea(r, i) && (t.flags |= 32),
        df(e, t),
        Ue(e, t, o, n),
        t.child;
    case 6:
        return e === null && ia(t),
        null;
    case 13:
        return pf(e, t, n);
    case 4:
        return ts(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = or(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        Tu(e, t, r, l, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            ie(hi, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (gt(i.value, o)) {
                    if (i.children === l.children && !Qe.current) {
                        t = Ot(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = Tt(-1, n & -n),
                                        s.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? s.next = s : (s.next = f.next,
                                            f.next = s),
                                            u.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    oa(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(_(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            oa(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            Ue(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        tr(t, n),
        l = at(l),
        r = r(l),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = ft(r, t.pendingProps),
        l = ft(r.type, l),
        Du(e, t, r, l, n);
    case 15:
        return uf(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : ft(r, l),
        Gl(e, t),
        t.tag = 1,
        Ke(r) ? (e = !0,
        di(t)) : e = !1,
        tr(t, n),
        of(t, r, l),
        sa(t, r, l, n),
        da(null, t, r, !0, e, n);
    case 19:
        return hf(e, t, n);
    case 22:
        return cf(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function Lf(e, t) {
    return nd(e, t)
}
function A0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function it(e, t, n, r) {
    return new A0(e,t,n,r)
}
function vs(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function $0(e) {
    if (typeof e == "function")
        return vs(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Oa)
            return 11;
        if (e === Fa)
            return 14
    }
    return 2
}
function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ql(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        vs(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case $n:
            return Cn(n.children, l, i, t);
        case Ma:
            o = 8,
            l |= 8;
            break;
        case Do:
            return e = it(12, n, t, l | 2),
            e.elementType = Do,
            e.lanes = i,
            e;
        case zo:
            return e = it(13, n, t, l),
            e.elementType = zo,
            e.lanes = i,
            e;
        case Mo:
            return e = it(19, n, t, l),
            e.elementType = Mo,
            e.lanes = i,
            e;
        case Ac:
            return Vi(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ic:
                    o = 10;
                    break e;
                case Uc:
                    o = 9;
                    break e;
                case Oa:
                    o = 11;
                    break e;
                case Fa:
                    o = 14;
                    break e;
                case Vt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = it(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Cn(e, t, n, r) {
    return e = it(7, e, r, t),
    e.lanes = n,
    e
}
function Vi(e, t, n, r) {
    return e = it(22, e, r, t),
    e.elementType = Ac,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function jo(e, t, n) {
    return e = it(6, e, null, t),
    e.lanes = n,
    e
}
function _o(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function B0(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = oo(0),
    this.expirationTimes = oo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = oo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function ys(e, t, n, r, l, i, o, a, s) {
    return e = new B0(e,t,n,a,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = it(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    es(i),
    e
}
function H0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: An,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Tf(e) {
    if (!e)
        return sn;
    e = e._reactInternals;
    e: {
        if (Dn(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ke(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n))
            return Ld(e, n, t)
    }
    return t
}
function Df(e, t, n, r, l, i, o, a, s) {
    return e = ys(n, r, !0, e, l, i, o, a, s),
    e.context = Tf(null),
    n = e.current,
    r = Ae(),
    l = rn(n),
    i = Tt(r, l),
    i.callback = t ?? null,
    tn(n, i, l),
    e.current.lanes = l,
    dl(e, l, r),
    Xe(e, r),
    e
}
function Wi(e, t, n, r) {
    var l = t.current
      , i = Ae()
      , o = rn(l);
    return n = Tf(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Tt(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = tn(l, t, o),
    e !== null && (yt(e, l, o, i),
    Xl(e, l, o)),
    o
}
function Ni(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Wu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function gs(e, t) {
    Wu(e, t),
    (e = e.alternate) && Wu(e, t)
}
function V0() {
    return null
}
var zf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function xs(e) {
    this._internalRoot = e
}
Qi.prototype.render = xs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    Wi(e, t, null, null)
}
;
Qi.prototype.unmount = xs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ln(function() {
            Wi(null, e, null, null)
        }),
        t[zt] = null
    }
}
;
function Qi(e) {
    this._internalRoot = e
}
Qi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ud();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++)
            ;
        Qt.splice(n, 0, e),
        n === 0 && dd(e)
    }
}
;
function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Qu() {}
function W0(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ni(o);
                i.call(u)
            }
        }
        var o = Df(t, r, e, 0, null, !1, !1, "", Qu);
        return e._reactRootContainer = o,
        e[zt] = o.current,
        Jr(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ni(s);
            a.call(u)
        }
    }
    var s = ys(e, 0, !1, null, null, !1, !1, "", Qu);
    return e._reactRootContainer = s,
    e[zt] = s.current,
    Jr(e.nodeType === 8 ? e.parentNode : e),
    Ln(function() {
        Wi(t, s, n, r)
    }),
    s
}
function Xi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var s = Ni(o);
                a.call(s)
            }
        }
        Wi(t, o, e, l)
    } else
        o = W0(n, t, e, l, r);
    return Ni(o)
}
ad = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Dr(t.pendingLanes);
            n !== 0 && (Aa(t, n | 1),
            Xe(t, ve()),
            !(b & 6) && (ur = ve() + 500,
            dn()))
        }
        break;
    case 13:
        Ln(function() {
            var r = Mt(e, 1);
            if (r !== null) {
                var l = Ae();
                yt(r, e, 1, l)
            }
        }),
        gs(e, 1)
    }
}
;
$a = function(e) {
    if (e.tag === 13) {
        var t = Mt(e, 134217728);
        if (t !== null) {
            var n = Ae();
            yt(t, e, 134217728, n)
        }
        gs(e, 134217728)
    }
}
;
sd = function(e) {
    if (e.tag === 13) {
        var t = rn(e)
          , n = Mt(e, t);
        if (n !== null) {
            var r = Ae();
            yt(n, e, t, r)
        }
        gs(e, t)
    }
}
;
ud = function() {
    return q
}
;
cd = function(e, t) {
    var n = q;
    try {
        return q = e,
        t()
    } finally {
        q = n
    }
}
;
Wo = function(e, t, n) {
    switch (t) {
    case "input":
        if (Io(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Ii(r);
                    if (!l)
                        throw Error(_(90));
                    Bc(r),
                    Io(r, l)
                }
            }
        }
        break;
    case "textarea":
        Vc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Zn(e, !!n.multiple, t, !1)
    }
}
;
Gc = ps;
Zc = Ln;
var Q0 = {
    usingClientEntryPoint: !1,
    Events: [pl, Wn, Ii, Yc, bc, ps]
}
  , jr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , K0 = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ed(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || V0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber)
        try {
            zi = $l.inject(K0),
            Et = $l
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q0;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(t))
        throw Error(_(200));
    return H0(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!ws(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , l = zf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = ys(e, 1, !1, null, null, n, !1, r, l),
    e[zt] = t.current,
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new xs(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = ed(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return Ln(e)
}
;
et.hydrate = function(e, t, n) {
    if (!Ki(t))
        throw Error(_(200));
    return Xi(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!ws(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = zf;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Df(t, null, e, 1, n ?? null, l, !1, i, o),
    e[zt] = t.current,
    Jr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Qi(t)
}
;
et.render = function(e, t, n) {
    if (!Ki(t))
        throw Error(_(200));
    return Xi(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!Ki(e))
        throw Error(_(40));
    return e._reactRootContainer ? (Ln(function() {
        Xi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[zt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = ps;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ki(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return Xi(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function Mf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)
        } catch (e) {
            console.error(e)
        }
}
Mf(),
zc.exports = et;
var Ss = zc.exports;
const X0 = Sc(Ss)
  , Y0 = wc({
    __proto__: null,
    default: X0
}, [Ss]);
var Of, Ku = Ss;
Of = Ku.createRoot,
Ku.hydrateRoot;
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function se() {
    return se = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    se.apply(this, arguments)
}
var ge;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(ge || (ge = {}));
const Xu = "popstate";
function b0(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let {pathname: i, search: o, hash: a} = r.location;
        return al("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function n(r, l) {
        return typeof l == "string" ? l : ml(l)
    }
    return Z0(t, n, null, e)
}
function X(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function cr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function G0() {
    return Math.random().toString(36).substr(2, 8)
}
function Yu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function al(e, t, n, r) {
    return n === void 0 && (n = null),
    se({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? fn(t) : t, {
        state: n,
        key: t && t.key || r || G0()
    })
}
function ml(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function fn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Z0(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l=document.defaultView, v5Compat: i=!1} = r
      , o = l.history
      , a = ge.Pop
      , s = null
      , u = f();
    u == null && (u = 0,
    o.replaceState(se({}, o.state, {
        idx: u
    }), ""));
    function f() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = ge.Pop;
        let R = f()
          , v = R == null ? null : R - u;
        u = R,
        s && s({
            action: a,
            location: E.location,
            delta: v
        })
    }
    function h(R, v) {
        a = ge.Push;
        let c = al(E.location, R, v);
        u = f() + 1;
        let y = Yu(c, u)
          , N = E.createHref(c);
        try {
            o.pushState(y, "", N)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError")
                throw L;
            l.location.assign(N)
        }
        i && s && s({
            action: a,
            location: E.location,
            delta: 1
        })
    }
    function w(R, v) {
        a = ge.Replace;
        let c = al(E.location, R, v);
        u = f();
        let y = Yu(c, u)
          , N = E.createHref(c);
        o.replaceState(y, "", N),
        i && s && s({
            action: a,
            location: E.location,
            delta: 0
        })
    }
    function S(R) {
        let v = l.location.origin !== "null" ? l.location.origin : l.location.href
          , c = typeof R == "string" ? R : ml(R);
        return c = c.replace(/ $/, "%20"),
        X(v, "No window.location.(origin|href) available to create URL for href: " + c),
        new URL(c,v)
    }
    let E = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(R) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Xu, d),
            s = R,
            () => {
                l.removeEventListener(Xu, d),
                s = null
            }
        },
        createHref(R) {
            return t(l, R)
        },
        createURL: S,
        encodeLocation(R) {
            let v = S(R);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: h,
        replace: w,
        go(R) {
            return o.go(R)
        }
    };
    return E
}
var J;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(J || (J = {}));
const J0 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function q0(e) {
    return e.index === !0
}
function Ci(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map( (l, i) => {
        let o = [...n, String(i)]
          , a = typeof l.id == "string" ? l.id : o.join("-");
        if (X(l.index !== !0 || !l.children, "Cannot specify children on an index route"),
        X(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        q0(l)) {
            let s = se({}, l, t(l), {
                id: a
            });
            return r[a] = s,
            s
        } else {
            let s = se({}, l, t(l), {
                id: a,
                children: void 0
            });
            return r[a] = s,
            l.children && (s.children = Ci(l.children, t, o, r)),
            s
        }
    }
    )
}
function gn(e, t, n) {
    return n === void 0 && (n = "/"),
    ei(e, t, n, !1)
}
function ei(e, t, n, r) {
    let l = typeof t == "string" ? fn(t) : t
      , i = vl(l.pathname || "/", n);
    if (i == null)
        return null;
    let o = Ff(e);
    tm(o);
    let a = null;
    for (let s = 0; a == null && s < o.length; ++s) {
        let u = fm(i);
        a = cm(o[s], u, r)
    }
    return a
}
function em(e, t) {
    let {route: n, pathname: r, params: l} = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}
function Ff(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let l = (i, o, a) => {
        let s = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        s.relativePath.startsWith("/") && (X(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = on([r, s.relativePath])
          , f = n.concat(s);
        i.children && i.children.length > 0 && (X(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Ff(i.children, t, f, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: sm(u, i.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            l(i, o);
        else
            for (let s of If(i.path))
                l(i, o, s)
    }
    ),
    t
}
function If(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [i, ""] : [i];
    let o = If(r.join("/"))
      , a = [];
    return a.push(...o.map(s => s === "" ? i : [i, s].join("/"))),
    l && a.push(...o),
    a.map(s => e.startsWith("/") && s === "" ? "/" : s)
}
function tm(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : um(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const nm = /^:[\w-]+$/
  , rm = 3
  , lm = 2
  , im = 1
  , om = 10
  , am = -2
  , bu = e => e === "*";
function sm(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(bu) && (r += am),
    t && (r += lm),
    n.filter(l => !bu(l)).reduce( (l, i) => l + (nm.test(i) ? rm : i === "" ? im : om), r)
}
function um(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function cm(e, t, n) {
    n === void 0 && (n = !1);
    let {routesMeta: r} = e
      , l = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let s = r[a]
          , u = a === r.length - 1
          , f = i === "/" ? t : t.slice(i.length) || "/"
          , d = Gu({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: u
        }, f)
          , h = s.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Gu({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1
        }, f)),
        !d)
            return null;
        Object.assign(l, d.params),
        o.push({
            params: l,
            pathname: on([i, d.pathname]),
            pathnameBase: mm(on([i, d.pathnameBase])),
            route: h
        }),
        d.pathnameBase !== "/" && (i = on([i, d.pathnameBase]))
    }
    return o
}
function Gu(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = dm(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let i = l[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = l.slice(1);
    return {
        params: r.reduce( (u, f, d) => {
            let {paramName: h, isOptional: w} = f;
            if (h === "*") {
                let E = a[d] || "";
                o = i.slice(0, i.length - E.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[d];
            return w && !S ? u[h] = void 0 : u[h] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function dm(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, s) => (r.push({
        paramName: a,
        isOptional: s != null
    }),
    s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function fm(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return cr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function vl(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function pm(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? fn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : hm(n, t) : t,
        search: vm(r),
        hash: ym(l)
    }
}
function hm(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Po(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Uf(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Af(e, t) {
    let n = Uf(e);
    return t ? n.map( (r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function $f(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = fn(e) : (l = se({}, e),
    X(!l.pathname || !l.pathname.includes("?"), Po("?", "pathname", "search", l)),
    X(!l.pathname || !l.pathname.includes("#"), Po("#", "pathname", "hash", l)),
    X(!l.search || !l.search.includes("#"), Po("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "", o = i ? "/" : l.pathname, a;
    if (o == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                d -= 1;
            l.pathname = h.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let s = pm(l, a)
      , u = o && o !== "/" && o.endsWith("/")
      , f = (i || o === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"),
    s
}
const on = e => e.join("/").replace(/\/\/+/g, "/")
  , mm = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , vm = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , ym = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class ji {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = l,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function sl(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Bf = ["post", "put", "patch", "delete"]
  , gm = new Set(Bf)
  , xm = ["get", ...Bf]
  , wm = new Set(xm)
  , Sm = new Set([301, 302, 303, 307, 308])
  , km = new Set([307, 308])
  , Ro = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Em = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , _r = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , ks = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Nm = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
})
  , Hf = "remix-router-transitions";
function Cm(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    X(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties)
        l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let m = e.detectErrorBoundary;
        l = x => ({
            hasErrorBoundary: m(x)
        })
    } else
        l = Nm;
    let i = {}, o = Ci(e.routes, l, void 0, i), a, s = e.basename || "/", u = e.dataStrategy || Rm, f = e.patchRoutesOnNavigation, d = se({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
    }, e.future), h = null, w = new Set, S = null, E = null, R = null, v = e.hydrationData != null, c = gn(o, e.history.location, s), y = !1, N = null;
    if (c == null && !f) {
        let m = He(404, {
            pathname: e.history.location.pathname
        })
          , {matches: x, route: k} = ac(o);
        c = x,
        N = {
            [k.id]: m
        }
    }
    c && !e.hydrationData && wl(c, o, e.history.location.pathname).active && (c = null);
    let L;
    if (c)
        if (c.some(m => m.route.lazy))
            L = !1;
        else if (!c.some(m => m.route.loader))
            L = !0;
        else if (d.v7_partialHydration) {
            let m = e.hydrationData ? e.hydrationData.loaderData : null
              , x = e.hydrationData ? e.hydrationData.errors : null;
            if (x) {
                let k = c.findIndex(C => x[C.route.id] !== void 0);
                L = c.slice(0, k + 1).every(C => !Na(C.route, m, x))
            } else
                L = c.every(k => !Na(k.route, m, x))
        } else
            L = e.hydrationData != null;
    else if (L = !1,
    c = [],
    d.v7_partialHydration) {
        let m = wl(null, o, e.history.location.pathname);
        m.active && m.matches && (y = !0,
        c = m.matches)
    }
    let O, g = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: c,
        initialized: L,
        navigation: Ro,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || N,
        fetchers: new Map,
        blockers: new Map
    }, j = ge.Pop, B = !1, D, ee = !1, re = new Map, we = null, Ce = !1, ut = !1, It = [], Ut = new Set, T = new Map, H = 0, V = -1, te = new Map, ne = new Set, ct = new Map, Ye = new Map, Oe = new Set, Fe = new Map, nt = new Map, yl;
    function lp() {
        if (h = e.history.listen(m => {
            let {action: x, location: k, delta: C} = m;
            if (yl) {
                yl(),
                yl = void 0;
                return
            }
            cr(nt.size === 0 || C != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let z = Ms({
                currentLocation: g.location,
                nextLocation: k,
                historyAction: x
            });
            if (z && C != null) {
                let A = new Promise(W => {
                    yl = W
                }
                );
                e.history.go(C * -1),
                xl(z, {
                    state: "blocked",
                    location: k,
                    proceed() {
                        xl(z, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: k
                        }),
                        A.then( () => e.history.go(C))
                    },
                    reset() {
                        let W = new Map(g.blockers);
                        W.set(z, _r),
                        Ie({
                            blockers: W
                        })
                    }
                });
                return
            }
            return pn(x, k)
        }
        ),
        n) {
            Vm(t, re);
            let m = () => Wm(t, re);
            t.addEventListener("pagehide", m),
            we = () => t.removeEventListener("pagehide", m)
        }
        return g.initialized || pn(ge.Pop, g.location, {
            initialHydration: !0
        }),
        O
    }
    function ip() {
        h && h(),
        we && we(),
        w.clear(),
        D && D.abort(),
        g.fetchers.forEach( (m, x) => gl(x)),
        g.blockers.forEach( (m, x) => zs(x))
    }
    function op(m) {
        return w.add(m),
        () => w.delete(m)
    }
    function Ie(m, x) {
        x === void 0 && (x = {}),
        g = se({}, g, m);
        let k = []
          , C = [];
        d.v7_fetcherPersist && g.fetchers.forEach( (z, A) => {
            z.state === "idle" && (Oe.has(A) ? C.push(A) : k.push(A))
        }
        ),
        Oe.forEach(z => {
            !g.fetchers.has(z) && !T.has(z) && C.push(z)
        }
        ),
        [...w].forEach(z => z(g, {
            deletedFetchers: C,
            viewTransitionOpts: x.viewTransitionOpts,
            flushSync: x.flushSync === !0
        })),
        d.v7_fetcherPersist ? (k.forEach(z => g.fetchers.delete(z)),
        C.forEach(z => gl(z))) : C.forEach(z => Oe.delete(z))
    }
    function zn(m, x, k) {
        var C, z;
        let {flushSync: A} = k === void 0 ? {} : k, W = g.actionData != null && g.navigation.formMethod != null && ht(g.navigation.formMethod) && g.navigation.state === "loading" && ((C = m.state) == null ? void 0 : C._isRedirect) !== !0, I;
        x.actionData ? Object.keys(x.actionData).length > 0 ? I = x.actionData : I = null : W ? I = g.actionData : I = null;
        let U = x.loaderData ? ic(g.loaderData, x.loaderData, x.matches || [], x.errors) : g.loaderData
          , F = g.blockers;
        F.size > 0 && (F = new Map(F),
        F.forEach( (Y, je) => F.set(je, _r)));
        let $ = B === !0 || g.navigation.formMethod != null && ht(g.navigation.formMethod) && ((z = m.state) == null ? void 0 : z._isRedirect) !== !0;
        a && (o = a,
        a = void 0),
        Ce || j === ge.Pop || (j === ge.Push ? e.history.push(m, m.state) : j === ge.Replace && e.history.replace(m, m.state));
        let Q;
        if (j === ge.Pop) {
            let Y = re.get(g.location.pathname);
            Y && Y.has(m.pathname) ? Q = {
                currentLocation: g.location,
                nextLocation: m
            } : re.has(m.pathname) && (Q = {
                currentLocation: m,
                nextLocation: g.location
            })
        } else if (ee) {
            let Y = re.get(g.location.pathname);
            Y ? Y.add(m.pathname) : (Y = new Set([m.pathname]),
            re.set(g.location.pathname, Y)),
            Q = {
                currentLocation: g.location,
                nextLocation: m
            }
        }
        Ie(se({}, x, {
            actionData: I,
            loaderData: U,
            historyAction: j,
            location: m,
            initialized: !0,
            navigation: Ro,
            revalidation: "idle",
            restoreScrollPosition: Fs(m, x.matches || g.matches),
            preventScrollReset: $,
            blockers: F
        }), {
            viewTransitionOpts: Q,
            flushSync: A === !0
        }),
        j = ge.Pop,
        B = !1,
        ee = !1,
        Ce = !1,
        ut = !1,
        It = []
    }
    async function js(m, x) {
        if (typeof m == "number") {
            e.history.go(m);
            return
        }
        let k = Ea(g.location, g.matches, s, d.v7_prependBasename, m, d.v7_relativeSplatPath, x == null ? void 0 : x.fromRouteId, x == null ? void 0 : x.relative)
          , {path: C, submission: z, error: A} = Zu(d.v7_normalizeFormMethod, !1, k, x)
          , W = g.location
          , I = al(g.location, C, x && x.state);
        I = se({}, I, e.history.encodeLocation(I));
        let U = x && x.replace != null ? x.replace : void 0
          , F = ge.Push;
        U === !0 ? F = ge.Replace : U === !1 || z != null && ht(z.formMethod) && z.formAction === g.location.pathname + g.location.search && (F = ge.Replace);
        let $ = x && "preventScrollReset"in x ? x.preventScrollReset === !0 : void 0
          , Q = (x && x.flushSync) === !0
          , Y = Ms({
            currentLocation: W,
            nextLocation: I,
            historyAction: F
        });
        if (Y) {
            xl(Y, {
                state: "blocked",
                location: I,
                proceed() {
                    xl(Y, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: I
                    }),
                    js(m, x)
                },
                reset() {
                    let je = new Map(g.blockers);
                    je.set(Y, _r),
                    Ie({
                        blockers: je
                    })
                }
            });
            return
        }
        return await pn(F, I, {
            submission: z,
            pendingError: A,
            preventScrollReset: $,
            replace: x && x.replace,
            enableViewTransition: x && x.viewTransition,
            flushSync: Q
        })
    }
    function ap() {
        if (Zi(),
        Ie({
            revalidation: "loading"
        }),
        g.navigation.state !== "submitting") {
            if (g.navigation.state === "idle") {
                pn(g.historyAction, g.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            pn(j || g.historyAction, g.navigation.location, {
                overrideNavigation: g.navigation,
                enableViewTransition: ee === !0
            })
        }
    }
    async function pn(m, x, k) {
        D && D.abort(),
        D = null,
        j = m,
        Ce = (k && k.startUninterruptedRevalidation) === !0,
        yp(g.location, g.matches),
        B = (k && k.preventScrollReset) === !0,
        ee = (k && k.enableViewTransition) === !0;
        let C = a || o
          , z = k && k.overrideNavigation
          , A = k != null && k.initialHydration && g.matches && g.matches.length > 0 && !y ? g.matches : gn(C, x, s)
          , W = (k && k.flushSync) === !0
          , I = wl(A, C, x.pathname);
        if (I.active && I.matches && (A = I.matches),
        !A) {
            let {error: le, notFoundMatches: Z, route: pe} = Ji(x.pathname);
            zn(x, {
                matches: Z,
                loaderData: {},
                errors: {
                    [pe.id]: le
                }
            }, {
                flushSync: W
            });
            return
        }
        if (g.initialized && !ut && Om(g.location, x) && !(k && k.submission && ht(k.submission.formMethod))) {
            zn(x, {
                matches: A
            }, {
                flushSync: W
            });
            return
        }
        D = new AbortController;
        let U = Un(e.history, x, D.signal, k && k.submission), F;
        if (k && k.pendingError)
            F = [xn(A).route.id, {
                type: J.error,
                error: k.pendingError
            }];
        else if (k && k.submission && ht(k.submission.formMethod)) {
            let le = await sp(U, x, k.submission, A, I.active, {
                replace: k.replace,
                flushSync: W
            });
            if (le.shortCircuited)
                return;
            if (le.pendingActionResult) {
                let[Z,pe] = le.pendingActionResult;
                if (Ge(pe) && sl(pe.error) && pe.error.status === 404) {
                    D = null,
                    zn(x, {
                        matches: le.matches,
                        loaderData: {},
                        errors: {
                            [Z]: pe.error
                        }
                    });
                    return
                }
            }
            A = le.matches || A,
            F = le.pendingActionResult,
            z = Lo(x, k.submission),
            W = !1,
            I.active = !1,
            U = Un(e.history, U.url, U.signal)
        }
        let {shortCircuited: $, matches: Q, loaderData: Y, errors: je} = await up(U, x, A, I.active, z, k && k.submission, k && k.fetcherSubmission, k && k.replace, k && k.initialHydration === !0, W, F);
        $ || (D = null,
        zn(x, se({
            matches: Q || A
        }, oc(F), {
            loaderData: Y,
            errors: je
        })))
    }
    async function sp(m, x, k, C, z, A) {
        A === void 0 && (A = {}),
        Zi();
        let W = Bm(x, k);
        if (Ie({
            navigation: W
        }, {
            flushSync: A.flushSync === !0
        }),
        z) {
            let F = await Sl(C, x.pathname, m.signal);
            if (F.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (F.type === "error") {
                let $ = xn(F.partialMatches).route.id;
                return {
                    matches: F.partialMatches,
                    pendingActionResult: [$, {
                        type: J.error,
                        error: F.error
                    }]
                }
            } else if (F.matches)
                C = F.matches;
            else {
                let {notFoundMatches: $, error: Q, route: Y} = Ji(x.pathname);
                return {
                    matches: $,
                    pendingActionResult: [Y.id, {
                        type: J.error,
                        error: Q
                    }]
                }
            }
        }
        let I, U = Mr(C, x);
        if (!U.route.action && !U.route.lazy)
            I = {
                type: J.error,
                error: He(405, {
                    method: m.method,
                    pathname: x.pathname,
                    routeId: U.route.id
                })
            };
        else if (I = (await mr("action", g, m, [U], C, null))[U.route.id],
        m.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (En(I)) {
            let F;
            return A && A.replace != null ? F = A.replace : F = nc(I.response.headers.get("Location"), new URL(m.url), s) === g.location.pathname + g.location.search,
            await hn(m, I, !0, {
                submission: k,
                replace: F
            }),
            {
                shortCircuited: !0
            }
        }
        if (bt(I))
            throw He(400, {
                type: "defer-action"
            });
        if (Ge(I)) {
            let F = xn(C, U.route.id);
            return (A && A.replace) !== !0 && (j = ge.Push),
            {
                matches: C,
                pendingActionResult: [F.route.id, I]
            }
        }
        return {
            matches: C,
            pendingActionResult: [U.route.id, I]
        }
    }
    async function up(m, x, k, C, z, A, W, I, U, F, $) {
        let Q = z || Lo(x, A)
          , Y = A || W || uc(Q)
          , je = !Ce && (!d.v7_partialHydration || !U);
        if (C) {
            if (je) {
                let he = _s($);
                Ie(se({
                    navigation: Q
                }, he !== void 0 ? {
                    actionData: he
                } : {}), {
                    flushSync: F
                })
            }
            let G = await Sl(k, x.pathname, m.signal);
            if (G.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (G.type === "error") {
                let he = xn(G.partialMatches).route.id;
                return {
                    matches: G.partialMatches,
                    loaderData: {},
                    errors: {
                        [he]: G.error
                    }
                }
            } else if (G.matches)
                k = G.matches;
            else {
                let {error: he, notFoundMatches: On, route: gr} = Ji(x.pathname);
                return {
                    matches: On,
                    loaderData: {},
                    errors: {
                        [gr.id]: he
                    }
                }
            }
        }
        let le = a || o
          , [Z,pe] = qu(e.history, g, k, Y, x, d.v7_partialHydration && U === !0, d.v7_skipActionErrorRevalidation, ut, It, Ut, Oe, ct, ne, le, s, $);
        if (qi(G => !(k && k.some(he => he.route.id === G)) || Z && Z.some(he => he.route.id === G)),
        V = ++H,
        Z.length === 0 && pe.length === 0) {
            let G = Ts();
            return zn(x, se({
                matches: k,
                loaderData: {},
                errors: $ && Ge($[1]) ? {
                    [$[0]]: $[1].error
                } : null
            }, oc($), G ? {
                fetchers: new Map(g.fetchers)
            } : {}), {
                flushSync: F
            }),
            {
                shortCircuited: !0
            }
        }
        if (je) {
            let G = {};
            if (!C) {
                G.navigation = Q;
                let he = _s($);
                he !== void 0 && (G.actionData = he)
            }
            pe.length > 0 && (G.fetchers = cp(pe)),
            Ie(G, {
                flushSync: F
            })
        }
        pe.forEach(G => {
            $t(G.key),
            G.controller && T.set(G.key, G.controller)
        }
        );
        let Mn = () => pe.forEach(G => $t(G.key));
        D && D.signal.addEventListener("abort", Mn);
        let {loaderResults: vr, fetcherResults: jt} = await Ps(g, k, Z, pe, m);
        if (m.signal.aborted)
            return {
                shortCircuited: !0
            };
        D && D.signal.removeEventListener("abort", Mn),
        pe.forEach(G => T.delete(G.key));
        let xt = Bl(vr);
        if (xt)
            return await hn(m, xt.result, !0, {
                replace: I
            }),
            {
                shortCircuited: !0
            };
        if (xt = Bl(jt),
        xt)
            return ne.add(xt.key),
            await hn(m, xt.result, !0, {
                replace: I
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: eo, errors: yr} = lc(g, k, vr, $, pe, jt, Fe);
        Fe.forEach( (G, he) => {
            G.subscribe(On => {
                (On || G.done) && Fe.delete(he)
            }
            )
        }
        ),
        d.v7_partialHydration && U && g.errors && (yr = se({}, g.errors, yr));
        let mn = Ts()
          , kl = Ds(V)
          , El = mn || kl || pe.length > 0;
        return se({
            matches: k,
            loaderData: eo,
            errors: yr
        }, El ? {
            fetchers: new Map(g.fetchers)
        } : {})
    }
    function _s(m) {
        if (m && !Ge(m[1]))
            return {
                [m[0]]: m[1].data
            };
        if (g.actionData)
            return Object.keys(g.actionData).length === 0 ? null : g.actionData
    }
    function cp(m) {
        return m.forEach(x => {
            let k = g.fetchers.get(x.key)
              , C = Pr(void 0, k ? k.data : void 0);
            g.fetchers.set(x.key, C)
        }
        ),
        new Map(g.fetchers)
    }
    function dp(m, x, k, C) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        $t(m);
        let z = (C && C.flushSync) === !0
          , A = a || o
          , W = Ea(g.location, g.matches, s, d.v7_prependBasename, k, d.v7_relativeSplatPath, x, C == null ? void 0 : C.relative)
          , I = gn(A, W, s)
          , U = wl(I, A, W);
        if (U.active && U.matches && (I = U.matches),
        !I) {
            Ct(m, x, He(404, {
                pathname: W
            }), {
                flushSync: z
            });
            return
        }
        let {path: F, submission: $, error: Q} = Zu(d.v7_normalizeFormMethod, !0, W, C);
        if (Q) {
            Ct(m, x, Q, {
                flushSync: z
            });
            return
        }
        let Y = Mr(I, F)
          , je = (C && C.preventScrollReset) === !0;
        if ($ && ht($.formMethod)) {
            fp(m, x, F, Y, I, U.active, z, je, $);
            return
        }
        ct.set(m, {
            routeId: x,
            path: F
        }),
        pp(m, x, F, Y, I, U.active, z, je, $)
    }
    async function fp(m, x, k, C, z, A, W, I, U) {
        Zi(),
        ct.delete(m);
        function F(ye) {
            if (!ye.route.action && !ye.route.lazy) {
                let Fn = He(405, {
                    method: U.formMethod,
                    pathname: k,
                    routeId: x
                });
                return Ct(m, x, Fn, {
                    flushSync: W
                }),
                !0
            }
            return !1
        }
        if (!A && F(C))
            return;
        let $ = g.fetchers.get(m);
        At(m, Hm(U, $), {
            flushSync: W
        });
        let Q = new AbortController
          , Y = Un(e.history, k, Q.signal, U);
        if (A) {
            let ye = await Sl(z, new URL(Y.url).pathname, Y.signal);
            if (ye.type === "aborted")
                return;
            if (ye.type === "error") {
                Ct(m, x, ye.error, {
                    flushSync: W
                });
                return
            } else if (ye.matches) {
                if (z = ye.matches,
                C = Mr(z, k),
                F(C))
                    return
            } else {
                Ct(m, x, He(404, {
                    pathname: k
                }), {
                    flushSync: W
                });
                return
            }
        }
        T.set(m, Q);
        let je = H
          , Z = (await mr("action", g, Y, [C], z, m))[C.route.id];
        if (Y.signal.aborted) {
            T.get(m) === Q && T.delete(m);
            return
        }
        if (d.v7_fetcherPersist && Oe.has(m)) {
            if (En(Z) || Ge(Z)) {
                At(m, Ht(void 0));
                return
            }
        } else {
            if (En(Z))
                if (T.delete(m),
                V > je) {
                    At(m, Ht(void 0));
                    return
                } else
                    return ne.add(m),
                    At(m, Pr(U)),
                    hn(Y, Z, !1, {
                        fetcherSubmission: U,
                        preventScrollReset: I
                    });
            if (Ge(Z)) {
                Ct(m, x, Z.error);
                return
            }
        }
        if (bt(Z))
            throw He(400, {
                type: "defer-action"
            });
        let pe = g.navigation.location || g.location
          , Mn = Un(e.history, pe, Q.signal)
          , vr = a || o
          , jt = g.navigation.state !== "idle" ? gn(vr, g.navigation.location, s) : g.matches;
        X(jt, "Didn't find any matches after fetcher action");
        let xt = ++H;
        te.set(m, xt);
        let eo = Pr(U, Z.data);
        g.fetchers.set(m, eo);
        let[yr,mn] = qu(e.history, g, jt, U, pe, !1, d.v7_skipActionErrorRevalidation, ut, It, Ut, Oe, ct, ne, vr, s, [C.route.id, Z]);
        mn.filter(ye => ye.key !== m).forEach(ye => {
            let Fn = ye.key
              , Is = g.fetchers.get(Fn)
              , wp = Pr(void 0, Is ? Is.data : void 0);
            g.fetchers.set(Fn, wp),
            $t(Fn),
            ye.controller && T.set(Fn, ye.controller)
        }
        ),
        Ie({
            fetchers: new Map(g.fetchers)
        });
        let kl = () => mn.forEach(ye => $t(ye.key));
        Q.signal.addEventListener("abort", kl);
        let {loaderResults: El, fetcherResults: G} = await Ps(g, jt, yr, mn, Mn);
        if (Q.signal.aborted)
            return;
        Q.signal.removeEventListener("abort", kl),
        te.delete(m),
        T.delete(m),
        mn.forEach(ye => T.delete(ye.key));
        let he = Bl(El);
        if (he)
            return hn(Mn, he.result, !1, {
                preventScrollReset: I
            });
        if (he = Bl(G),
        he)
            return ne.add(he.key),
            hn(Mn, he.result, !1, {
                preventScrollReset: I
            });
        let {loaderData: On, errors: gr} = lc(g, jt, El, void 0, mn, G, Fe);
        if (g.fetchers.has(m)) {
            let ye = Ht(Z.data);
            g.fetchers.set(m, ye)
        }
        Ds(xt),
        g.navigation.state === "loading" && xt > V ? (X(j, "Expected pending action"),
        D && D.abort(),
        zn(g.navigation.location, {
            matches: jt,
            loaderData: On,
            errors: gr,
            fetchers: new Map(g.fetchers)
        })) : (Ie({
            errors: gr,
            loaderData: ic(g.loaderData, On, jt, gr),
            fetchers: new Map(g.fetchers)
        }),
        ut = !1)
    }
    async function pp(m, x, k, C, z, A, W, I, U) {
        let F = g.fetchers.get(m);
        At(m, Pr(U, F ? F.data : void 0), {
            flushSync: W
        });
        let $ = new AbortController
          , Q = Un(e.history, k, $.signal);
        if (A) {
            let Z = await Sl(z, new URL(Q.url).pathname, Q.signal);
            if (Z.type === "aborted")
                return;
            if (Z.type === "error") {
                Ct(m, x, Z.error, {
                    flushSync: W
                });
                return
            } else if (Z.matches)
                z = Z.matches,
                C = Mr(z, k);
            else {
                Ct(m, x, He(404, {
                    pathname: k
                }), {
                    flushSync: W
                });
                return
            }
        }
        T.set(m, $);
        let Y = H
          , le = (await mr("loader", g, Q, [C], z, m))[C.route.id];
        if (bt(le) && (le = await Es(le, Q.signal, !0) || le),
        T.get(m) === $ && T.delete(m),
        !Q.signal.aborted) {
            if (Oe.has(m)) {
                At(m, Ht(void 0));
                return
            }
            if (En(le))
                if (V > Y) {
                    At(m, Ht(void 0));
                    return
                } else {
                    ne.add(m),
                    await hn(Q, le, !1, {
                        preventScrollReset: I
                    });
                    return
                }
            if (Ge(le)) {
                Ct(m, x, le.error);
                return
            }
            X(!bt(le), "Unhandled fetcher deferred data"),
            At(m, Ht(le.data))
        }
    }
    async function hn(m, x, k, C) {
        let {submission: z, fetcherSubmission: A, preventScrollReset: W, replace: I} = C === void 0 ? {} : C;
        x.response.headers.has("X-Remix-Revalidate") && (ut = !0);
        let U = x.response.headers.get("Location");
        X(U, "Expected a Location header on the redirect Response"),
        U = nc(U, new URL(m.url), s);
        let F = al(g.location, U, {
            _isRedirect: !0
        });
        if (n) {
            let Z = !1;
            if (x.response.headers.has("X-Remix-Reload-Document"))
                Z = !0;
            else if (ks.test(U)) {
                const pe = e.history.createURL(U);
                Z = pe.origin !== t.location.origin || vl(pe.pathname, s) == null
            }
            if (Z) {
                I ? t.location.replace(U) : t.location.assign(U);
                return
            }
        }
        D = null;
        let $ = I === !0 || x.response.headers.has("X-Remix-Replace") ? ge.Replace : ge.Push
          , {formMethod: Q, formAction: Y, formEncType: je} = g.navigation;
        !z && !A && Q && Y && je && (z = uc(g.navigation));
        let le = z || A;
        if (km.has(x.response.status) && le && ht(le.formMethod))
            await pn($, F, {
                submission: se({}, le, {
                    formAction: U
                }),
                preventScrollReset: W || B,
                enableViewTransition: k ? ee : void 0
            });
        else {
            let Z = Lo(F, z);
            await pn($, F, {
                overrideNavigation: Z,
                fetcherSubmission: A,
                preventScrollReset: W || B,
                enableViewTransition: k ? ee : void 0
            })
        }
    }
    async function mr(m, x, k, C, z, A) {
        let W, I = {};
        try {
            W = await Lm(u, m, x, k, C, z, A, i, l)
        } catch (U) {
            return C.forEach(F => {
                I[F.route.id] = {
                    type: J.error,
                    error: U
                }
            }
            ),
            I
        }
        for (let[U,F] of Object.entries(W))
            if (Fm(F)) {
                let $ = F.result;
                I[U] = {
                    type: J.redirect,
                    response: zm($, k, U, z, s, d.v7_relativeSplatPath)
                }
            } else
                I[U] = await Dm(F);
        return I
    }
    async function Ps(m, x, k, C, z) {
        let A = m.matches
          , W = mr("loader", m, z, k, x, null)
          , I = Promise.all(C.map(async $ => {
            if ($.matches && $.match && $.controller) {
                let Y = (await mr("loader", m, Un(e.history, $.path, $.controller.signal), [$.match], $.matches, $.key))[$.match.route.id];
                return {
                    [$.key]: Y
                }
            } else
                return Promise.resolve({
                    [$.key]: {
                        type: J.error,
                        error: He(404, {
                            pathname: $.path
                        })
                    }
                })
        }
        ))
          , U = await W
          , F = (await I).reduce( ($, Q) => Object.assign($, Q), {});
        return await Promise.all([Am(x, U, z.signal, A, m.loaderData), $m(x, F, C)]),
        {
            loaderResults: U,
            fetcherResults: F
        }
    }
    function Zi() {
        ut = !0,
        It.push(...qi()),
        ct.forEach( (m, x) => {
            T.has(x) && Ut.add(x),
            $t(x)
        }
        )
    }
    function At(m, x, k) {
        k === void 0 && (k = {}),
        g.fetchers.set(m, x),
        Ie({
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (k && k.flushSync) === !0
        })
    }
    function Ct(m, x, k, C) {
        C === void 0 && (C = {});
        let z = xn(g.matches, x);
        gl(m),
        Ie({
            errors: {
                [z.route.id]: k
            },
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (C && C.flushSync) === !0
        })
    }
    function Rs(m) {
        return Ye.set(m, (Ye.get(m) || 0) + 1),
        Oe.has(m) && Oe.delete(m),
        g.fetchers.get(m) || Em
    }
    function gl(m) {
        let x = g.fetchers.get(m);
        T.has(m) && !(x && x.state === "loading" && te.has(m)) && $t(m),
        ct.delete(m),
        te.delete(m),
        ne.delete(m),
        d.v7_fetcherPersist && Oe.delete(m),
        Ut.delete(m),
        g.fetchers.delete(m)
    }
    function hp(m) {
        let x = (Ye.get(m) || 0) - 1;
        x <= 0 ? (Ye.delete(m),
        Oe.add(m),
        d.v7_fetcherPersist || gl(m)) : Ye.set(m, x),
        Ie({
            fetchers: new Map(g.fetchers)
        })
    }
    function $t(m) {
        let x = T.get(m);
        x && (x.abort(),
        T.delete(m))
    }
    function Ls(m) {
        for (let x of m) {
            let k = Rs(x)
              , C = Ht(k.data);
            g.fetchers.set(x, C)
        }
    }
    function Ts() {
        let m = []
          , x = !1;
        for (let k of ne) {
            let C = g.fetchers.get(k);
            X(C, "Expected fetcher: " + k),
            C.state === "loading" && (ne.delete(k),
            m.push(k),
            x = !0)
        }
        return Ls(m),
        x
    }
    function Ds(m) {
        let x = [];
        for (let[k,C] of te)
            if (C < m) {
                let z = g.fetchers.get(k);
                X(z, "Expected fetcher: " + k),
                z.state === "loading" && ($t(k),
                te.delete(k),
                x.push(k))
            }
        return Ls(x),
        x.length > 0
    }
    function mp(m, x) {
        let k = g.blockers.get(m) || _r;
        return nt.get(m) !== x && nt.set(m, x),
        k
    }
    function zs(m) {
        g.blockers.delete(m),
        nt.delete(m)
    }
    function xl(m, x) {
        let k = g.blockers.get(m) || _r;
        X(k.state === "unblocked" && x.state === "blocked" || k.state === "blocked" && x.state === "blocked" || k.state === "blocked" && x.state === "proceeding" || k.state === "blocked" && x.state === "unblocked" || k.state === "proceeding" && x.state === "unblocked", "Invalid blocker state transition: " + k.state + " -> " + x.state);
        let C = new Map(g.blockers);
        C.set(m, x),
        Ie({
            blockers: C
        })
    }
    function Ms(m) {
        let {currentLocation: x, nextLocation: k, historyAction: C} = m;
        if (nt.size === 0)
            return;
        nt.size > 1 && cr(!1, "A router only supports one blocker at a time");
        let z = Array.from(nt.entries())
          , [A,W] = z[z.length - 1]
          , I = g.blockers.get(A);
        if (!(I && I.state === "proceeding") && W({
            currentLocation: x,
            nextLocation: k,
            historyAction: C
        }))
            return A
    }
    function Ji(m) {
        let x = He(404, {
            pathname: m
        })
          , k = a || o
          , {matches: C, route: z} = ac(k);
        return qi(),
        {
            notFoundMatches: C,
            route: z,
            error: x
        }
    }
    function qi(m) {
        let x = [];
        return Fe.forEach( (k, C) => {
            (!m || m(C)) && (k.cancel(),
            x.push(C),
            Fe.delete(C))
        }
        ),
        x
    }
    function vp(m, x, k) {
        if (S = m,
        R = x,
        E = k || null,
        !v && g.navigation === Ro) {
            v = !0;
            let C = Fs(g.location, g.matches);
            C != null && Ie({
                restoreScrollPosition: C
            })
        }
        return () => {
            S = null,
            R = null,
            E = null
        }
    }
    function Os(m, x) {
        return E && E(m, x.map(C => em(C, g.loaderData))) || m.key
    }
    function yp(m, x) {
        if (S && R) {
            let k = Os(m, x);
            S[k] = R()
        }
    }
    function Fs(m, x) {
        if (S) {
            let k = Os(m, x)
              , C = S[k];
            if (typeof C == "number")
                return C
        }
        return null
    }
    function wl(m, x, k) {
        if (f)
            if (m) {
                if (Object.keys(m[0].params).length > 0)
                    return {
                        active: !0,
                        matches: ei(x, k, s, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: ei(x, k, s, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function Sl(m, x, k) {
        if (!f)
            return {
                type: "success",
                matches: m
            };
        let C = m;
        for (; ; ) {
            let z = a == null
              , A = a || o
              , W = i;
            try {
                await f({
                    signal: k,
                    path: x,
                    matches: C,
                    patch: (F, $) => {
                        k.aborted || tc(F, $, A, W, l)
                    }
                })
            } catch (F) {
                return {
                    type: "error",
                    error: F,
                    partialMatches: C
                }
            } finally {
                z && !k.aborted && (o = [...o])
            }
            if (k.aborted)
                return {
                    type: "aborted"
                };
            let I = gn(A, x, s);
            if (I)
                return {
                    type: "success",
                    matches: I
                };
            let U = ei(A, x, s, !0);
            if (!U || C.length === U.length && C.every( (F, $) => F.route.id === U[$].route.id))
                return {
                    type: "success",
                    matches: null
                };
            C = U
        }
    }
    function gp(m) {
        i = {},
        a = Ci(m, l, void 0, i)
    }
    function xp(m, x) {
        let k = a == null;
        tc(m, x, a || o, i, l),
        k && (o = [...o],
        Ie({}))
    }
    return O = {
        get basename() {
            return s
        },
        get future() {
            return d
        },
        get state() {
            return g
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: lp,
        subscribe: op,
        enableScrollRestoration: vp,
        navigate: js,
        fetch: dp,
        revalidate: ap,
        createHref: m => e.history.createHref(m),
        encodeLocation: m => e.history.encodeLocation(m),
        getFetcher: Rs,
        deleteFetcher: hp,
        dispose: ip,
        getBlocker: mp,
        deleteBlocker: zs,
        patchRoutes: xp,
        _internalFetchControllers: T,
        _internalActiveDeferreds: Fe,
        _internalSetRoutes: gp
    },
    O
}
function jm(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function Ea(e, t, n, r, l, i, o, a) {
    let s, u;
    if (o) {
        s = [];
        for (let d of t)
            if (s.push(d),
            d.route.id === o) {
                u = d;
                break
            }
    } else
        s = t,
        u = t[t.length - 1];
    let f = $f(l || ".", Af(s, i), vl(e.pathname, n) || e.pathname, a === "path");
    if (l == null && (f.search = e.search,
    f.hash = e.hash),
    (l == null || l === "" || l === ".") && u) {
        let d = Ns(f.search);
        if (u.route.index && !d)
            f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
        else if (!u.route.index && d) {
            let h = new URLSearchParams(f.search)
              , w = h.getAll("index");
            h.delete("index"),
            w.filter(E => E).forEach(E => h.append("index", E));
            let S = h.toString();
            f.search = S ? "?" + S : ""
        }
    }
    return r && n !== "/" && (f.pathname = f.pathname === "/" ? n : on([n, f.pathname])),
    ml(f)
}
function Zu(e, t, n, r) {
    if (!r || !jm(r))
        return {
            path: n
        };
    if (r.formMethod && !Um(r.formMethod))
        return {
            path: n,
            error: He(405, {
                method: r.formMethod
            })
        };
    let l = () => ({
        path: n,
        error: He(400, {
            type: "invalid-body"
        })
    })
      , i = r.formMethod || "get"
      , o = e ? i.toUpperCase() : i.toLowerCase()
      , a = Qf(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!ht(o))
                return l();
            let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (w, S) => {
                let[E,R] = S;
                return "" + w + E + "=" + R + `
`
            }
            , "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: h
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!ht(o))
                return l();
            try {
                let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: h,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    X(typeof FormData == "function", "FormData is not available in this environment");
    let s, u;
    if (r.formData)
        s = Ca(r.formData),
        u = r.formData;
    else if (r.body instanceof FormData)
        s = Ca(r.body),
        u = r.body;
    else if (r.body instanceof URLSearchParams)
        s = r.body,
        u = rc(s);
    else if (r.body == null)
        s = new URLSearchParams,
        u = new FormData;
    else
        try {
            s = new URLSearchParams(r.body),
            u = rc(s)
        } catch {
            return l()
        }
    let f = {
        formMethod: o,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    };
    if (ht(f.formMethod))
        return {
            path: n,
            submission: f
        };
    let d = fn(n);
    return t && d.search && Ns(d.search) && s.append("index", ""),
    d.search = "?" + s,
    {
        path: ml(d),
        submission: f
    }
}
function Ju(e, t, n) {
    n === void 0 && (n = !1);
    let r = e.findIndex(l => l.route.id === t);
    return r >= 0 ? e.slice(0, n ? r + 1 : r) : e
}
function qu(e, t, n, r, l, i, o, a, s, u, f, d, h, w, S, E) {
    let R = E ? Ge(E[1]) ? E[1].error : E[1].data : void 0
      , v = e.createURL(t.location)
      , c = e.createURL(l)
      , y = n;
    i && t.errors ? y = Ju(n, Object.keys(t.errors)[0], !0) : E && Ge(E[1]) && (y = Ju(n, E[0]));
    let N = E ? E[1].statusCode : void 0
      , L = o && N && N >= 400
      , O = y.filter( (j, B) => {
        let {route: D} = j;
        if (D.lazy)
            return !0;
        if (D.loader == null)
            return !1;
        if (i)
            return Na(D, t.loaderData, t.errors);
        if (_m(t.loaderData, t.matches[B], j) || s.some(we => we === j.route.id))
            return !0;
        let ee = t.matches[B]
          , re = j;
        return ec(j, se({
            currentUrl: v,
            currentParams: ee.params,
            nextUrl: c,
            nextParams: re.params
        }, r, {
            actionResult: R,
            actionStatus: N,
            defaultShouldRevalidate: L ? !1 : a || v.pathname + v.search === c.pathname + c.search || v.search !== c.search || Vf(ee, re)
        }))
    }
    )
      , g = [];
    return d.forEach( (j, B) => {
        if (i || !n.some(Ce => Ce.route.id === j.routeId) || f.has(B))
            return;
        let D = gn(w, j.path, S);
        if (!D) {
            g.push({
                key: B,
                routeId: j.routeId,
                path: j.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let ee = t.fetchers.get(B)
          , re = Mr(D, j.path)
          , we = !1;
        h.has(B) ? we = !1 : u.has(B) ? (u.delete(B),
        we = !0) : ee && ee.state !== "idle" && ee.data === void 0 ? we = a : we = ec(re, se({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: c,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: R,
            actionStatus: N,
            defaultShouldRevalidate: L ? !1 : a
        })),
        we && g.push({
            key: B,
            routeId: j.routeId,
            path: j.path,
            matches: D,
            match: re,
            controller: new AbortController
        })
    }
    ),
    [O, g]
}
function Na(e, t, n) {
    if (e.lazy)
        return !0;
    if (!e.loader)
        return !1;
    let r = t != null && t[e.id] !== void 0
      , l = n != null && n[e.id] !== void 0;
    return !r && l ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !l
}
function _m(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , l = e[n.route.id] === void 0;
    return r || l
}
function Vf(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function ec(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
function tc(e, t, n, r, l) {
    var i;
    let o;
    if (e) {
        let u = r[e];
        X(u, "No route found to patch children into: routeId = " + e),
        u.children || (u.children = []),
        o = u.children
    } else
        o = n;
    let a = t.filter(u => !o.some(f => Wf(u, f)))
      , s = Ci(a, l, [e || "_", "patch", String(((i = o) == null ? void 0 : i.length) || "0")], r);
    o.push(...s)
}
function Wf(e, t) {
    return "id"in e && "id"in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every( (n, r) => {
        var l;
        return (l = t.children) == null ? void 0 : l.some(i => Wf(n, i))
    }
    ) : !1
}
async function Pm(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let l = n[e.id];
    X(l, "No route found in manifest");
    let i = {};
    for (let o in r) {
        let s = l[o] !== void 0 && o !== "hasErrorBoundary";
        cr(!s, 'Route "' + l.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')),
        !s && !J0.has(o) && (i[o] = r[o])
    }
    Object.assign(l, i),
    Object.assign(l, se({}, t(l), {
        lazy: void 0
    }))
}
async function Rm(e) {
    let {matches: t} = e
      , n = t.filter(l => l.shouldLoad);
    return (await Promise.all(n.map(l => l.resolve()))).reduce( (l, i, o) => Object.assign(l, {
        [n[o].route.id]: i
    }), {})
}
async function Lm(e, t, n, r, l, i, o, a, s, u) {
    let f = i.map(w => w.route.lazy ? Pm(w.route, s, a) : void 0)
      , d = i.map( (w, S) => {
        let E = f[S]
          , R = l.some(c => c.route.id === w.route.id);
        return se({}, w, {
            shouldLoad: R,
            resolve: async c => (c && r.method === "GET" && (w.route.lazy || w.route.loader) && (R = !0),
            R ? Tm(t, r, w, E, c, u) : Promise.resolve({
                type: J.data,
                result: void 0
            }))
        })
    }
    )
      , h = await e({
        matches: d,
        request: r,
        params: i[0].params,
        fetcherKey: o,
        context: u
    });
    try {
        await Promise.all(f)
    } catch {}
    return h
}
async function Tm(e, t, n, r, l, i) {
    let o, a, s = u => {
        let f, d = new Promise( (S, E) => f = E);
        a = () => f(),
        t.signal.addEventListener("abort", a);
        let h = S => typeof u != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : u({
            request: t,
            params: n.params,
            context: i
        }, ...S !== void 0 ? [S] : [])
          , w = (async () => {
            try {
                return {
                    type: "data",
                    result: await (l ? l(E => h(E)) : h())
                }
            } catch (S) {
                return {
                    type: "error",
                    result: S
                }
            }
        }
        )();
        return Promise.race([w, d])
    }
    ;
    try {
        let u = n.route[e];
        if (r)
            if (u) {
                let f, [d] = await Promise.all([s(u).catch(h => {
                    f = h
                }
                ), r]);
                if (f !== void 0)
                    throw f;
                o = d
            } else if (await r,
            u = n.route[e],
            u)
                o = await s(u);
            else if (e === "action") {
                let f = new URL(t.url)
                  , d = f.pathname + f.search;
                throw He(405, {
                    method: t.method,
                    pathname: d,
                    routeId: n.route.id
                })
            } else
                return {
                    type: J.data,
                    result: void 0
                };
        else if (u)
            o = await s(u);
        else {
            let f = new URL(t.url)
              , d = f.pathname + f.search;
            throw He(404, {
                pathname: d
            })
        }
        X(o.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (u) {
        return {
            type: J.error,
            result: u
        }
    } finally {
        a && t.signal.removeEventListener("abort", a)
    }
    return o
}
async function Dm(e) {
    let {result: t, type: n} = e;
    if (Kf(t)) {
        let d;
        try {
            let h = t.headers.get("Content-Type");
            h && /\bapplication\/json\b/.test(h) ? t.body == null ? d = null : d = await t.json() : d = await t.text()
        } catch (h) {
            return {
                type: J.error,
                error: h
            }
        }
        return n === J.error ? {
            type: J.error,
            error: new ji(t.status,t.statusText,d),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: J.data,
            data: d,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === J.error) {
        if (sc(t)) {
            var r, l;
            if (t.data instanceof Error) {
                var i, o;
                return {
                    type: J.error,
                    error: t.data,
                    statusCode: (i = t.init) == null ? void 0 : i.status,
                    headers: (o = t.init) != null && o.headers ? new Headers(t.init.headers) : void 0
                }
            }
            return {
                type: J.error,
                error: new ji(((r = t.init) == null ? void 0 : r.status) || 500,void 0,t.data),
                statusCode: sl(t) ? t.status : void 0,
                headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0
            }
        }
        return {
            type: J.error,
            error: t,
            statusCode: sl(t) ? t.status : void 0
        }
    }
    if (Im(t)) {
        var a, s;
        return {
            type: J.deferred,
            deferredData: t,
            statusCode: (a = t.init) == null ? void 0 : a.status,
            headers: ((s = t.init) == null ? void 0 : s.headers) && new Headers(t.init.headers)
        }
    }
    if (sc(t)) {
        var u, f;
        return {
            type: J.data,
            data: t.data,
            statusCode: (u = t.init) == null ? void 0 : u.status,
            headers: (f = t.init) != null && f.headers ? new Headers(t.init.headers) : void 0
        }
    }
    return {
        type: J.data,
        data: t
    }
}
function zm(e, t, n, r, l, i) {
    let o = e.headers.get("Location");
    if (X(o, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !ks.test(o)) {
        let a = r.slice(0, r.findIndex(s => s.route.id === n) + 1);
        o = Ea(new URL(t.url), a, l, !0, o, i),
        e.headers.set("Location", o)
    }
    return e
}
function nc(e, t, n) {
    if (ks.test(e)) {
        let r = e
          , l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r)
          , i = vl(l.pathname, n) != null;
        if (l.origin === t.origin && i)
            return l.pathname + l.search + l.hash
    }
    return e
}
function Un(e, t, n, r) {
    let l = e.createURL(Qf(t)).toString()
      , i = {
        signal: n
    };
    if (r && ht(r.formMethod)) {
        let {formMethod: o, formEncType: a} = r;
        i.method = o.toUpperCase(),
        a === "application/json" ? (i.headers = new Headers({
            "Content-Type": a
        }),
        i.body = JSON.stringify(r.json)) : a === "text/plain" ? i.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? i.body = Ca(r.formData) : i.body = r.formData
    }
    return new Request(l,i)
}
function Ca(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t
}
function rc(e) {
    let t = new FormData;
    for (let[n,r] of e.entries())
        t.append(n, r);
    return t
}
function Mm(e, t, n, r, l) {
    let i = {}, o = null, a, s = !1, u = {}, f = n && Ge(n[1]) ? n[1].error : void 0;
    return e.forEach(d => {
        if (!(d.route.id in t))
            return;
        let h = d.route.id
          , w = t[h];
        if (X(!En(w), "Cannot handle redirect results in processLoaderData"),
        Ge(w)) {
            let S = w.error;
            f !== void 0 && (S = f,
            f = void 0),
            o = o || {};
            {
                let E = xn(e, h);
                o[E.route.id] == null && (o[E.route.id] = S)
            }
            i[h] = void 0,
            s || (s = !0,
            a = sl(w.error) ? w.error.status : 500),
            w.headers && (u[h] = w.headers)
        } else
            bt(w) ? (r.set(h, w.deferredData),
            i[h] = w.deferredData.data,
            w.statusCode != null && w.statusCode !== 200 && !s && (a = w.statusCode),
            w.headers && (u[h] = w.headers)) : (i[h] = w.data,
            w.statusCode && w.statusCode !== 200 && !s && (a = w.statusCode),
            w.headers && (u[h] = w.headers))
    }
    ),
    f !== void 0 && n && (o = {
        [n[0]]: f
    },
    i[n[0]] = void 0),
    {
        loaderData: i,
        errors: o,
        statusCode: a || 200,
        loaderHeaders: u
    }
}
function lc(e, t, n, r, l, i, o) {
    let {loaderData: a, errors: s} = Mm(t, n, r, o);
    return l.forEach(u => {
        let {key: f, match: d, controller: h} = u
          , w = i[f];
        if (X(w, "Did not find corresponding fetcher result"),
        !(h && h.signal.aborted))
            if (Ge(w)) {
                let S = xn(e.matches, d == null ? void 0 : d.route.id);
                s && s[S.route.id] || (s = se({}, s, {
                    [S.route.id]: w.error
                })),
                e.fetchers.delete(f)
            } else if (En(w))
                X(!1, "Unhandled fetcher revalidation redirect");
            else if (bt(w))
                X(!1, "Unhandled fetcher deferred data");
            else {
                let S = Ht(w.data);
                e.fetchers.set(f, S)
            }
    }
    ),
    {
        loaderData: a,
        errors: s
    }
}
function ic(e, t, n, r) {
    let l = se({}, t);
    for (let i of n) {
        let o = i.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (l[o] = t[o]) : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
        r && r.hasOwnProperty(o))
            break
    }
    return l
}
function oc(e) {
    return e ? Ge(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}
function xn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function ac(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function He(e, t) {
    let {pathname: n, routeId: r, method: l, type: i, message: o} = t === void 0 ? {} : t
      , a = "Unknown Server Error"
      , s = "Unknown @remix-run/router error";
    return e === 400 ? (a = "Bad Request",
    l && n && r ? s = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" ? s = "defer() is not supported in actions" : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (a = "Forbidden",
    s = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (a = "Not Found",
    s = 'No route matches URL "' + n + '"') : e === 405 && (a = "Method Not Allowed",
    l && n && r ? s = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (s = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ji(e || 500,a,new Error(s),!0)
}
function Bl(e) {
    let t = Object.entries(e);
    for (let n = t.length - 1; n >= 0; n--) {
        let[r,l] = t[n];
        if (En(l))
            return {
                key: r,
                result: l
            }
    }
}
function Qf(e) {
    let t = typeof e == "string" ? fn(e) : e;
    return ml(se({}, t, {
        hash: ""
    }))
}
function Om(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Fm(e) {
    return Kf(e.result) && Sm.has(e.result.status)
}
function bt(e) {
    return e.type === J.deferred
}
function Ge(e) {
    return e.type === J.error
}
function En(e) {
    return (e && e.type) === J.redirect
}
function sc(e) {
    return typeof e == "object" && e != null && "type"in e && "data"in e && "init"in e && e.type === "DataWithResponseInit"
}
function Im(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function Kf(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function Um(e) {
    return wm.has(e.toLowerCase())
}
function ht(e) {
    return gm.has(e.toLowerCase())
}
async function Am(e, t, n, r, l) {
    let i = Object.entries(t);
    for (let o = 0; o < i.length; o++) {
        let[a,s] = i[o]
          , u = e.find(h => (h == null ? void 0 : h.route.id) === a);
        if (!u)
            continue;
        let f = r.find(h => h.route.id === u.route.id)
          , d = f != null && !Vf(f, u) && (l && l[u.route.id]) !== void 0;
        bt(s) && d && await Es(s, n, !1).then(h => {
            h && (t[a] = h)
        }
        )
    }
}
async function $m(e, t, n) {
    for (let r = 0; r < n.length; r++) {
        let {key: l, routeId: i, controller: o} = n[r]
          , a = t[l];
        e.find(u => (u == null ? void 0 : u.route.id) === i) && bt(a) && (X(o, "Expected an AbortController for revalidating fetcher deferred result"),
        await Es(a, o.signal, !0).then(u => {
            u && (t[l] = u)
        }
        ))
    }
}
async function Es(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: J.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (l) {
                return {
                    type: J.error,
                    error: l
                }
            }
        return {
            type: J.data,
            data: e.deferredData.data
        }
    }
}
function Ns(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function Mr(e, t) {
    let n = typeof t == "string" ? fn(t).search : t.search;
    if (e[e.length - 1].route.index && Ns(n || ""))
        return e[e.length - 1];
    let r = Uf(e);
    return r[r.length - 1]
}
function uc(e) {
    let {formMethod: t, formAction: n, formEncType: r, text: l, formData: i, json: o} = e;
    if (!(!t || !n || !r)) {
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: l
            };
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: i,
                json: void 0,
                text: void 0
            };
        if (o !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: o,
                text: void 0
            }
    }
}
function Lo(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function Bm(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function Pr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function Hm(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function Ht(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function Vm(e, t) {
    try {
        let n = e.sessionStorage.getItem(Hf);
        if (n) {
            let r = JSON.parse(n);
            for (let[l,i] of Object.entries(r || {}))
                i && Array.isArray(i) && t.set(l, new Set(i || []))
        }
    } catch {}
}
function Wm(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let[r,l] of t)
            n[r] = [...l];
        try {
            e.sessionStorage.setItem(Hf, JSON.stringify(n))
        } catch (r) {
            cr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _i() {
    return _i = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    _i.apply(this, arguments)
}
const Yi = P.createContext(null)
  , Xf = P.createContext(null)
  , bi = P.createContext(null)
  , Cs = P.createContext(null)
  , hr = P.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yf = P.createContext(null);
function Gi() {
    return P.useContext(Cs) != null
}
function bf() {
    return Gi() || X(!1),
    P.useContext(Cs).location
}
function Gf(e) {
    P.useContext(bi).static || P.useLayoutEffect(e)
}
function Qm() {
    let {isDataRoute: e} = P.useContext(hr);
    return e ? rv() : Km()
}
function Km() {
    Gi() || X(!1);
    let e = P.useContext(Yi)
      , {basename: t, future: n, navigator: r} = P.useContext(bi)
      , {matches: l} = P.useContext(hr)
      , {pathname: i} = bf()
      , o = JSON.stringify(Af(l, n.v7_relativeSplatPath))
      , a = P.useRef(!1);
    return Gf( () => {
        a.current = !0
    }
    ),
    P.useCallback(function(u, f) {
        if (f === void 0 && (f = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = $f(u, JSON.parse(o), i, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : on([t, d.pathname])),
        (f.replace ? r.replace : r.push)(d, f.state, f)
    }, [t, r, o, i, e])
}
function Xm(e, t, n, r) {
    Gi() || X(!1);
    let {navigator: l, static: i} = P.useContext(bi)
      , {matches: o} = P.useContext(hr)
      , a = o[o.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let u = a ? a.pathnameBase : "/";
    a && a.route;
    let f = bf(), d;
    d = f;
    let h = d.pathname || "/"
      , w = h;
    if (u !== "/") {
        let R = u.replace(/^\//, "").split("/");
        w = "/" + h.replace(/^\//, "").split("/").slice(R.length).join("/")
    }
    let S = !i && n && n.matches && n.matches.length > 0 ? n.matches : gn(e, {
        pathname: w
    });
    return Jm(S && S.map(R => Object.assign({}, R, {
        params: Object.assign({}, s, R.params),
        pathname: on([u, l.encodeLocation ? l.encodeLocation(R.pathname).pathname : R.pathname]),
        pathnameBase: R.pathnameBase === "/" ? u : on([u, l.encodeLocation ? l.encodeLocation(R.pathnameBase).pathname : R.pathnameBase])
    })), o, n, r)
}
function Ym() {
    let e = nv()
      , t = sl(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? P.createElement("pre", {
        style: l
    }, n) : null, null)
}
const bm = P.createElement(Ym, null);
class Gm extends P.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? P.createElement(hr.Provider, {
            value: this.props.routeContext
        }, P.createElement(Yf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Zm(e) {
    let {routeContext: t, match: n, children: r} = e
      , l = P.useContext(Yi);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(hr.Provider, {
        value: t
    }, r)
}
function Jm(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let f = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        f >= 0 || X(!1),
        o = o.slice(0, Math.min(o.length, f + 1))
    }
    let s = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < o.length; f++) {
            let d = o[f];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
            d.route.id) {
                let {loaderData: h, errors: w} = n
                  , S = d.route.loader && h[d.route.id] === void 0 && (!w || w[d.route.id] === void 0);
                if (d.route.lazy || S) {
                    s = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (f, d, h) => {
        let w, S = !1, E = null, R = null;
        n && (w = a && d.route.id ? a[d.route.id] : void 0,
        E = d.route.errorElement || bm,
        s && (u < 0 && h === 0 ? (lv("route-fallback"),
        S = !0,
        R = null) : u === h && (S = !0,
        R = d.route.hydrateFallbackElement || null)));
        let v = t.concat(o.slice(0, h + 1))
          , c = () => {
            let y;
            return w ? y = E : S ? y = R : d.route.Component ? y = P.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = f,
            P.createElement(Zm, {
                match: d,
                routeContext: {
                    outlet: f,
                    matches: v,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? P.createElement(Gm, {
            location: n.location,
            revalidation: n.revalidation,
            component: E,
            error: w,
            children: c(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : c()
    }
    , null)
}
var Zf = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Zf || {})
  , Pi = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Pi || {});
function qm(e) {
    let t = P.useContext(Yi);
    return t || X(!1),
    t
}
function ev(e) {
    let t = P.useContext(Xf);
    return t || X(!1),
    t
}
function tv(e) {
    let t = P.useContext(hr);
    return t || X(!1),
    t
}
function Jf(e) {
    let t = tv()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || X(!1),
    n.route.id
}
function nv() {
    var e;
    let t = P.useContext(Yf)
      , n = ev(Pi.UseRouteError)
      , r = Jf(Pi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function rv() {
    let {router: e} = qm(Zf.UseNavigateStable)
      , t = Jf(Pi.UseNavigateStable)
      , n = P.useRef(!1);
    return Gf( () => {
        n.current = !0
    }
    ),
    P.useCallback(function(l, i) {
        i === void 0 && (i = {}),
        n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, _i({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const cc = {};
function lv(e, t, n) {
    cc[e] || (cc[e] = !0)
}
function iv(e, t) {
    e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && (!t || t.v7_relativeSplatPath),
    t && (t.v7_fetcherPersist,
    t.v7_normalizeFormMethod,
    t.v7_partialHydration,
    t.v7_skipActionErrorRevalidation)
}
function ov(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: l=ge.Pop, navigator: i, static: o=!1, future: a} = e;
    Gi() && X(!1);
    let s = t.replace(/^\/*/, "/")
      , u = P.useMemo( () => ({
        basename: s,
        navigator: i,
        static: o,
        future: _i({
            v7_relativeSplatPath: !1
        }, a)
    }), [s, a, i, o]);
    typeof r == "string" && (r = fn(r));
    let {pathname: f="/", search: d="", hash: h="", state: w=null, key: S="default"} = r
      , E = P.useMemo( () => {
        let R = vl(f, s);
        return R == null ? null : {
            location: {
                pathname: R,
                search: d,
                hash: h,
                state: w,
                key: S
            },
            navigationType: l
        }
    }
    , [s, f, d, h, w, S, l]);
    return E == null ? null : P.createElement(bi.Provider, {
        value: u
    }, P.createElement(Cs.Provider, {
        children: n,
        value: E
    }))
}
new Promise( () => {}
);
function av(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0
    }),
    e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ri() {
    return Ri = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ri.apply(this, arguments)
}
const sv = "6";
try {
    window.__reactRouterVersion = sv
} catch {}
function uv(e, t) {
    return Cm({
        basename: void 0,
        future: Ri({}, void 0, {
            v7_prependBasename: !0
        }),
        history: b0({
            window: void 0
        }),
        hydrationData: cv(),
        routes: e,
        mapRouteProperties: av,
        dataStrategy: void 0,
        patchRoutesOnNavigation: void 0,
        window: void 0
    }).initialize()
}
function cv() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = Ri({}, t, {
        errors: dv(t.errors)
    })),
    t
}
function dv(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,l] of t)
        if (l && l.__type === "RouteErrorResponse")
            n[r] = new ji(l.status,l.statusText,l.data,l.internal === !0);
        else if (l && l.__type === "Error") {
            if (l.__subType) {
                let i = window[l.__subType];
                if (typeof i == "function")
                    try {
                        let o = new i(l.message);
                        o.stack = "",
                        n[r] = o
                    } catch {}
            }
            if (n[r] == null) {
                let i = new Error(l.message);
                i.stack = "",
                n[r] = i
            }
        } else
            n[r] = l;
    return n
}
const fv = P.createContext({
    isTransitioning: !1
})
  , pv = P.createContext(new Map)
  , hv = "startTransition"
  , dc = Fp[hv]
  , mv = "flushSync"
  , fc = Y0[mv];
function vv(e) {
    dc ? dc(e) : e()
}
function Rr(e) {
    fc ? fc(e) : e()
}
class yv {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved",
                t(r))
            }
            ,
            this.reject = r => {
                this.status === "pending" && (this.status = "rejected",
                n(r))
            }
        }
        )
    }
}
function gv(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [l,i] = P.useState(n.state)
      , [o,a] = P.useState()
      , [s,u] = P.useState({
        isTransitioning: !1
    })
      , [f,d] = P.useState()
      , [h,w] = P.useState()
      , [S,E] = P.useState()
      , R = P.useRef(new Map)
      , {v7_startTransition: v} = r || {}
      , c = P.useCallback(j => {
        v ? vv(j) : j()
    }
    , [v])
      , y = P.useCallback( (j, B) => {
        let {deletedFetchers: D, flushSync: ee, viewTransitionOpts: re} = B;
        j.fetchers.forEach( (Ce, ut) => {
            Ce.data !== void 0 && R.current.set(ut, Ce.data)
        }
        ),
        D.forEach(Ce => R.current.delete(Ce));
        let we = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!re || we) {
            ee ? Rr( () => i(j)) : c( () => i(j));
            return
        }
        if (ee) {
            Rr( () => {
                h && (f && f.resolve(),
                h.skipTransition()),
                u({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: re.currentLocation,
                    nextLocation: re.nextLocation
                })
            }
            );
            let Ce = n.window.document.startViewTransition( () => {
                Rr( () => i(j))
            }
            );
            Ce.finished.finally( () => {
                Rr( () => {
                    d(void 0),
                    w(void 0),
                    a(void 0),
                    u({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            Rr( () => w(Ce));
            return
        }
        h ? (f && f.resolve(),
        h.skipTransition(),
        E({
            state: j,
            currentLocation: re.currentLocation,
            nextLocation: re.nextLocation
        })) : (a(j),
        u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: re.currentLocation,
            nextLocation: re.nextLocation
        }))
    }
    , [n.window, h, f, R, c]);
    P.useLayoutEffect( () => n.subscribe(y), [n, y]),
    P.useEffect( () => {
        s.isTransitioning && !s.flushSync && d(new yv)
    }
    , [s]),
    P.useEffect( () => {
        if (f && o && n.window) {
            let j = o
              , B = f.promise
              , D = n.window.document.startViewTransition(async () => {
                c( () => i(j)),
                await B
            }
            );
            D.finished.finally( () => {
                d(void 0),
                w(void 0),
                a(void 0),
                u({
                    isTransitioning: !1
                })
            }
            ),
            w(D)
        }
    }
    , [c, o, f, n.window]),
    P.useEffect( () => {
        f && o && l.location.key === o.location.key && f.resolve()
    }
    , [f, h, l.location, o]),
    P.useEffect( () => {
        !s.isTransitioning && S && (a(S.state),
        u({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: S.currentLocation,
            nextLocation: S.nextLocation
        }),
        E(void 0))
    }
    , [s.isTransitioning, S]),
    P.useEffect( () => {}
    , []);
    let N = P.useMemo( () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: j => n.navigate(j),
        push: (j, B, D) => n.navigate(j, {
            state: B,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset
        }),
        replace: (j, B, D) => n.navigate(j, {
            replace: !0,
            state: B,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset
        })
    }), [n])
      , L = n.basename || "/"
      , O = P.useMemo( () => ({
        router: n,
        navigator: N,
        static: !1,
        basename: L
    }), [n, N, L])
      , g = P.useMemo( () => ({
        v7_relativeSplatPath: n.future.v7_relativeSplatPath
    }), [n.future.v7_relativeSplatPath]);
    return P.useEffect( () => iv(r, n.future), [r, n.future]),
    P.createElement(P.Fragment, null, P.createElement(Yi.Provider, {
        value: O
    }, P.createElement(Xf.Provider, {
        value: l
    }, P.createElement(pv.Provider, {
        value: R.current
    }, P.createElement(fv.Provider, {
        value: s
    }, P.createElement(ov, {
        basename: L,
        location: l.location,
        navigationType: l.historyAction,
        navigator: N,
        future: g
    }, l.initialized || n.future.v7_partialHydration ? P.createElement(xv, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}
const xv = P.memo(wv);
function wv(e) {
    let {routes: t, future: n, state: r} = e;
    return Xm(t, void 0, r, n)
}
var pc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(pc || (pc = {}));
var hc;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(hc || (hc = {}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sv = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , Le = (e, t) => {
    const n = P.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: s, ...u}, f) => P.createElement("svg", {
        ref: f,
        ...Sv,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${kv(e)}`, a].join(" "),
        ...u
    }, [...t.map( ([d,h]) => P.createElement(d, h)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ev = Le("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = Le("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = Le("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = Le("Crown", [["path", {
    d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
    key: "zkxr6b"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = Le("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qf = Le("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = Le("HelpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _v = Le("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = Le("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = Le("Monitor", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    key: "48i651"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "21",
    y2: "21",
    key: "1svkeh"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "17",
    y2: "21",
    key: "vw1qmm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rv = Le("PanelsTopLeft", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M3 9h18",
    key: "1pudct"
}], ["path", {
    d: "M9 21V9",
    key: "1oto5p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = Le("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = Le("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = Le("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = Le("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = Le("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dv = Le("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , zv = ({activeSection: e, scrollToSection: t}) => {
    const [n,r] = P.useState(!1)
      , [l,i] = P.useState(!1);
    P.useEffect( () => {
        const a = () => {
            i(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", a),
        () => window.removeEventListener("scroll", a)
    }
    , []);
    const o = [{
        id: "home",
        label: "Home",
        icon: p.jsx(_v, {
            size: 16
        })
    }, {
        id: "features",
        label: "Features",
        icon: p.jsx(ul, {
            size: 16
        })
    }, {
        id: "faq",
        label: "FAQ",
        icon: p.jsx(jv, {
            size: 16
        })
    }];
    return p.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${l ? "bg-black/90 backdrop-blur-xl border-b border-red-900/20 py-2" : "bg-transparent py-4"}`,
        children: [p.jsx("div", {
            className: "container mx-auto px-4",
            children: p.jsxs("div", {
                className: "flex items-center justify-between",
                children: [p.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [p.jsxs("div", {
                        className: "relative",
                        children: [p.jsx("div", {
                            className: "absolute -inset-2 bg-red-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }), p.jsx("img", {
                            src: "https://getarctic.vercel.app/assets/logo.png",
                            alt: "Artic Logo",
                            className: "h-9 w-9 relative"
                        })]
                    }), p.jsx("span", {
                        className: "text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "Artic."
                    })]
                }), p.jsx("div", {
                    className: "hidden md:flex items-center space-x-1",
                    children: o.map( ({id: a, label: s, icon: u}) => p.jsxs("button", {
                        onClick: () => t(a),
                        className: `relative group px-4 py-2 rounded-lg transition-all duration-500 ${e === a ? "text-red-500 bg-red-500/10" : "text-gray-400 hover:text-red-500 hover:bg-red-500/5"}`,
                        children: [p.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [p.jsx("span", {
                                className: "transform transition-transform duration-300 group-hover:rotate-12",
                                children: u
                            }), p.jsx("span", {
                                children: s
                            })]
                        }), p.jsx("span", {
                            className: `absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-500 ${e === a ? "bg-red-500 w-6" : "bg-transparent w-1 group-hover:bg-red-500/50 group-hover:w-4"}`
                        })]
                    }, a))
                }), p.jsx("button", {
                    className: "md:hidden relative p-2 rounded-lg bg-red-500/10 text-red-500",
                    onClick: () => r(!n),
                    children: n ? p.jsx(Tv, {
                        size: 24
                    }) : p.jsx(Pv, {
                        size: 24
                    })
                })]
            })
        }), p.jsx("div", {
            className: `md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-red-900/20 transition-all duration-700 ease-in-out ${n ? "max-h-64 py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}`,
            children: p.jsx("div", {
                className: "container mx-auto px-4 flex flex-col space-y-2",
                children: o.map( ({id: a, label: s, icon: u}) => p.jsxs("button", {
                    onClick: () => {
                        t(a),
                        r(!1)
                    }
                    ,
                    className: `flex items-center space-x-2 p-3 rounded-lg transition-all duration-500 ${e === a ? "bg-red-500/10 text-red-500" : "text-gray-400 hover:bg-red-500/5 hover:text-red-500"}`,
                    children: [p.jsx("span", {
                        className: "transform transition-transform duration-300 group-hover:rotate-12",
                        children: u
                    }), p.jsx("span", {
                        children: s
                    })]
                }, a))
            })
        })]
    })
}
;
var tp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , gc = Gt.createContext && Gt.createContext(tp)
  , Mv = ["attr", "size", "title"];
function Ov(e, t) {
    if (e == null)
        return {};
    var n = Fv(e, t), r, l;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++)
            r = i[l],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function Fv(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function Li() {
    return Li = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Li.apply(this, arguments)
}
function xc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Ti(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? xc(Object(n), !0).forEach(function(r) {
            Iv(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Iv(e, t, n) {
    return t = Uv(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Uv(e) {
    var t = Av(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Av(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function np(e) {
    return e && e.map( (t, n) => Gt.createElement(t.tag, Ti({
        key: n
    }, t.attr), np(t.child)))
}
function $v(e) {
    return t => Gt.createElement(Bv, Li({
        attr: Ti({}, e.attr)
    }, t), np(e.child))
}
function Bv(e) {
    var t = n => {
        var {attr: r, size: l, title: i} = e, o = Ov(e, Mv), a = l || n.size || "1em", s;
        return n.className && (s = n.className),
        e.className && (s = (s ? s + " " : "") + e.className),
        Gt.createElement("svg", Li({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: s,
            style: Ti(Ti({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && Gt.createElement("title", null, i), e.children)
    }
    ;
    return gc !== void 0 ? Gt.createElement(gc.Consumer, null, n => t(n)) : t(tp)
}
function Hv(e) {
    return $v({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            },
            child: []
        }]
    })(e)
}
const rp = () => {
    const e = new Date().getFullYear();
    return p.jsxs("footer", {
        className: "py-12 relative overflow-hidden",
        children: [p.jsx("div", {
            className: "absolute inset-0 bg-black/90 backdrop-blur-xl border-t border-red-900/20"
        }), p.jsx("div", {
            className: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[80px] opacity-30 animate-blob"
        }), p.jsx("div", {
            className: "absolute top-0 left-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[80px] opacity-30 animate-blob animation-delay-2000"
        }), p.jsxs("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [p.jsxs("div", {
                className: "grid md:grid-cols-3 gap-12 mb-12",
                children: [p.jsxs("div", {
                    children: [p.jsxs("div", {
                        className: "flex items-center space-x-3 mb-6",
                        children: [p.jsxs("div", {
                            className: "relative",
                            children: [p.jsx("div", {
                                className: "absolute -inset-2 bg-red-600/30 rounded-full blur-lg"
                            }), p.jsx("img", {
                                src: "https://getarctic.vercel.app/assets/logo.png",
                                alt: "Artic Logo",
                                className: "h-10 w-10 relative"
                            })]
                        }), p.jsx("span", {
                            className: "text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Artic."
                        })]
                    }), p.jsx("p", {
                        className: "text-gray-400 text-lg leading-relaxed",
                        children: "A Free Keyless Roblox Executor for running scripts."
                    })]
                }), p.jsxs("div", {
                    children: [p.jsx("h3", {
                        className: "text-xl font-semibold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "Quick Links"
                    }), p.jsx("ul", {
                        className: "space-y-4",
                        children: ["Home", "Features", "Download", "FAQ"].map(t => p.jsx("li", {
                            children: p.jsxs("a", {
                                href: `#${t.toLowerCase()}`,
                                className: "group flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300",
                                children: [p.jsx("span", {
                                    className: "relative w-2 h-2 mr-3",
                                    children: p.jsx("span", {
                                        className: "absolute inset-0 rounded-full bg-red-500 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                                    })
                                }), t]
                            })
                        }, t))
                    })]
                }), p.jsxs("div", {
                    children: [p.jsx("h3", {
                        className: "text-xl font-semibold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                        children: "Social Link"
                    }), p.jsxs("a", {
                        href: "https://discord.gg/GjEhaYynVb",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center space-x-3 text-gray-400 hover:text-red-500 transition-all duration-300 group",
                        children: [p.jsxs("span", {
                            className: "relative",
                            children: [p.jsx("span", {
                                className: "absolute -inset-2 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }), p.jsx(Hv, {
                                className: "h-6 w-6 relative"
                            })]
                        }), p.jsx("span", {
                            className: "text-lg",
                            children: "Join our Discord"
                        })]
                    })]
                })]
            }), p.jsx("div", {
                className: "pt-8 border-t border-red-900/20",
                children: p.jsxs("div", {
                    className: "text-sm text-gray-500 text-center",
                    children: ["� ", e, " Artic. All rights reserved."]
                })
            })]
        })]
    })
}
;
function Vv() {
    const e = Qm()
      , [t,n] = P.useState(!1)
      , [r,l] = P.useState("home")
      , [i,o] = P.useState(null)
      , [a,s] = P.useState(!1);
    P.useEffect( () => {
        s(!0);
        const w = () => {
            const S = ["home", "features", "download", "faq"];
            for (const E of S) {
                const R = document.getElementById(E);
                if (R) {
                    const v = R.getBoundingClientRect();
                    if (v.top <= 100 && v.bottom >= 100) {
                        l(E);
                        break
                    }
                }
            }
        }
        ;
        return window.addEventListener("scroll", w),
        () => window.removeEventListener("scroll", w)
    }
    , []);
    const u = w => {
        const S = document.getElementById(w);
        if (S) {
            const R = S.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: R - 80,
                behavior: "smooth"
            }),
            l(w),
            n(!1)
        }
    }
      , f = () => {
        e("/download")
    }
      , d = w => {
        o(i === w ? null : w)
    }
      , h = [{
        question: "What is Artic?",
        answer: "Artic is a executor."
    }, {
        question: "Is Artic free to use?",
        answer: "Yes, Artic is 100% free to use for all users."
    }, {
        question: "Does Artic require a key?",
        answer: "No, Artic is completely keyless for ease of use."
    }, {
        question: "Is Artic safe to use?",
        answer: "Yes, our software is developed with user security in mind."
    }];
    return p.jsxs("div", {
        className: `min-h-screen bg-black text-white ${a ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`,
        children: [p.jsx("div", {
            className: "fixed -top-96 -right-96 w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[100px] opacity-40 animate-blob"
        }), p.jsx("div", {
            className: "fixed -bottom-96 -left-96 w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[100px] opacity-40 animate-blob animation-delay-2000"
        }), p.jsx("div", {
            className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/15 rounded-full blur-[80px] opacity-30 animate-blob animation-delay-4000"
        }), p.jsx("div", {
            className: "fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[60px] opacity-35 animate-blob animation-delay-3000"
        }), p.jsx("div", {
            className: "fixed bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[60px] opacity-35 animate-blob animation-delay-5000"
        }), p.jsx(zv, {
            activeSection: r,
            scrollToSection: u
        }), p.jsx("section", {
            id: "home",
            className: "min-h-screen pt-24 flex items-center relative",
            children: p.jsx("div", {
                className: "container mx-auto px-4 py-16",
                children: p.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-center",
                    children: [p.jsxs("div", {
                        className: "space-y-6 transform translate-y-0 opacity-100 transition-all duration-1000 delay-300",
                        children: [p.jsx("div", {
                            className: "inline-block",
                            children: p.jsxs("div", {
                                className: "relative",
                                children: [p.jsx("div", {
                                    className: "absolute -inset-2 bg-red-600/30 rounded-full blur-md animate-pulse-slow"
                                }), p.jsx("img", {
                                    src: "https://getarctic.vercel.app/assets/logo.png",
                                    alt: "Artic Logo",
                                    className: "h-20 w-20 relative"
                                })]
                            })
                        }), p.jsx("h1", {
                            className: "text-4xl md:text-6xl font-bold leading-tight",
                            children: p.jsx("span", {
                                className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                                children: "Artic"
                            })
                        }), p.jsx("p", {
                            className: "text-gray-400 text-lg max-w-lg",
                            children: "A Free Keyless Roblox Executor for running scripts."
                        }), p.jsxs("div", {
                            className: "flex flex-wrap gap-4",
                            children: [p.jsxs("button", {
                                onClick: f,
                                className: "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-900/30",
                                children: [p.jsx(ja, {
                                    size: 20
                                }), p.jsx("span", {
                                    children: "Download"
                                })]
                            }), p.jsxs("button", {
                                onClick: () => u("features"),
                                className: "bg-transparent hover:bg-red-900/20 text-red-500 border border-red-700 px-6 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] flex items-center space-x-2",
                                children: [p.jsx(ul, {
                                    size: 20
                                }), p.jsx("span", {
                                    children: "Features"
                                })]
                            })]
                        })]
                    }), p.jsxs("div", {
                        className: "relative transform translate-y-0 opacity-100 transition-all duration-1000 delay-500",
                        children: [p.jsxs("div", {
                            className: "relative perspective-1000",
                            children: [p.jsxs("div", {
                                className: "relative overflow-hidden rounded-lg border border-red-900/50 shadow-2xl shadow-red-900/20 transform rotate-y-3 rotate-x-5 transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 animate-float",
                                children: [p.jsx("img", {
                                    src: "https://getarctic.vercel.app/assets/preview.png",
                                    alt: "Artic Interface",
                                    className: "w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                }), p.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                                }), p.jsxs("div", {
                                    className: "absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700",
                                    children: [p.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 animate-pulse-slow"
                                    }), p.jsx("div", {
                                        className: "absolute -inset-2 bg-red-600/10 blur-xl rounded-lg"
                                    })]
                                })]
                            }), p.jsx("div", {
                                className: "absolute -bottom-4 left-0 right-0 h-8 bg-red-900/20 blur-md rounded-full mx-8 transform skew-x-12"
                            })]
                        }), p.jsx("div", {
                            className: "absolute -bottom-4 -right-4 h-32 w-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-2xl opacity-30"
                        }), p.jsx("div", {
                            className: "absolute -top-4 -left-4 h-32 w-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-2xl opacity-30"
                        })]
                    })]
                })
            })
        }), p.jsx("section", {
            id: "features",
            className: "py-20 relative",
            children: p.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: p.jsx("span", {
                            className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Features"
                        })
                    }), p.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Artic comes packed with features designed to improve your experience."
                    })]
                }), p.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [{
                        title: "Super Fast Execution",
                        description: "Run your scripts instantly without any lag or hiccups.",
                        icon: p.jsx(qf, {
                            className: "h-10 w-10 text-white"
                        })
                    }, {
                        title: "Performance",
                        description: "Our executor runs smoothly.",
                        icon: p.jsx(ul, {
                            className: "h-10 w-10 text-white"
                        })
                    }, {
                        title: "Easy to Use",
                        description: "A clean, UI that gets you up and running in no time.",
                        icon: p.jsx(ep, {
                            className: "h-10 w-10 text-white"
                        })
                    }].map( (w, S) => p.jsxs("div", {
                        className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-xl p-8",
                        children: [p.jsx("div", {
                            className: "mb-6 bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-lg inline-block",
                            children: w.icon
                        }), p.jsx("h3", {
                            className: "text-2xl font-semibold mb-3",
                            children: w.title
                        }), p.jsx("p", {
                            className: "text-gray-400 text-lg",
                            children: w.description
                        })]
                    }, S))
                })]
            })
        }), p.jsx("section", {
            id: "faq",
            className: "py-20 relative",
            children: p.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: p.jsx("span", {
                            className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Frequently Asked Questions"
                        })
                    }), p.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Find answers to common questions about Artic."
                    })]
                }), p.jsx("div", {
                    className: "max-w-3xl mx-auto space-y-4",
                    children: h.map( (w, S) => p.jsxs("div", {
                        className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-xl overflow-hidden transition-all duration-300",
                        children: [p.jsxs("button", {
                            onClick: () => d(S),
                            className: "w-full flex justify-between items-center p-6 text-left bg-gradient-to-r hover:from-red-900/10 hover:to-transparent transition-all duration-300",
                            children: [p.jsx("span", {
                                className: "font-medium text-lg text-gray-200",
                                children: w.question
                            }), p.jsx("div", {
                                className: `bg-red-900/20 rounded-full p-2 transition-all duration-300 ${i === S ? "bg-red-500/20 text-red-500" : "text-gray-400"}`,
                                children: i === S ? p.jsx(Cv, {
                                    size: 18
                                }) : p.jsx(Nv, {
                                    size: 18
                                })
                            })]
                        }), p.jsx("div", {
                            className: `bg-black/40 text-gray-300 transition-all duration-500 ease-in-out overflow-hidden ${i === S ? "max-h-[200px] p-6 border-t border-red-900/20" : "max-h-0"}`,
                            children: p.jsx("p", {
                                className: "text-lg leading-relaxed",
                                children: w.answer
                            })
                        })]
                    }, S))
                })]
            })
        }), p.jsx(rp, {})]
    })
}
const Wv = () => {
    const [e,t] = P.useState("android")
      , n = i => {
        const o = {
            android: "https://www.mediafire.com/file/uezzebwvkigyrzh/Feast_V663.apk/file",
            pc: "https://gofile.io/d/JoJQws"
        };
        window.location.href = o[i]
    }
      , r = [{
        icon: p.jsx(mc, {
            className: "h-4 w-4"
        }),
        text: "99% UNC"
    }, {
        icon: p.jsx(ep, {
            className: "h-4 w-4"
        }),
        text: "Smooth Executor"
    }, {
        icon: p.jsx(ul, {
            className: "h-4 w-4"
        }),
        text: "Luarmor Supported"
    }, {
        icon: p.jsx(Dv, {
            className: "h-4 w-4"
        }),
        text: "No FPS Drop"
    }]
      , l = [{
        icon: p.jsx(Lv, {
            className: "h-4 w-4"
        }),
        text: "Keyless"
    }, {
        icon: p.jsx(mc, {
            className: "h-4 w-4"
        }),
        text: "99% UNC & sUNC"
    }, {
        icon: p.jsx(qf, {
            className: "h-4 w-4"
        }),
        text: "Level 8"
    }, {
        icon: p.jsx(Rv, {
            className: "h-4 w-4"
        }),
        text: "Simple UI"
    }, {
        icon: p.jsx(ul, {
            className: "h-4 w-4"
        }),
        text: "Luarmor Supported"
    }];
    return p.jsxs("div", {
        className: "min-h-screen bg-black text-white perspective-1000",
        children: [p.jsx("div", {
            className: "fixed -top-96 -right-96 w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[100px] opacity-40 animate-blob"
        }), p.jsx("div", {
            className: "fixed -bottom-96 -left-96 w-[1000px] h-[1000px] bg-red-900/20 rounded-full blur-[100px] opacity-40 animate-blob animation-delay-2000"
        }), p.jsx("div", {
            className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/15 rounded-full blur-[80px] opacity-30 animate-blob animation-delay-4000"
        }), p.jsx("div", {
            className: "fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[60px] opacity-35 animate-blob animation-delay-3000"
        }), p.jsx("div", {
            className: "fixed bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[60px] opacity-35 animate-blob animation-delay-5000"
        }), p.jsx("div", {
            className: "fixed top-0 left-0 w-[400px] h-[400px] bg-red-900/25 rounded-full blur-[50px] opacity-40 animate-blob animation-delay-6000"
        }), p.jsx("header", {
            className: "bg-black/80 backdrop-blur-xl shadow-lg shadow-red-900/10 py-4 border-b border-red-900/20",
            children: p.jsx("div", {
                className: "container mx-auto px-4",
                children: p.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [p.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [p.jsx("img", {
                            src: "https://getarctic.vercel.app/assets/logo.png",
                            alt: "Artic Logo",
                            className: "h-8 w-8"
                        }), p.jsx("span", {
                            className: "text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Artic"
                        })]
                    }), p.jsxs("a", {
                        href: "/",
                        className: "flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-all duration-300 transform hover:translate-x-[-8px]",
                        children: [p.jsx(Ev, {
                            size: 18
                        }), p.jsx("span", {
                            children: "Back to Home"
                        })]
                    })]
                })
            })
        }), p.jsx("main", {
            className: "py-20",
            children: p.jsxs("div", {
                className: "container mx-auto px-4",
                children: [p.jsxs("div", {
                    className: "text-center mb-16",
                    children: [p.jsx("h1", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: p.jsx("span", {
                            className: "bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent",
                            children: "Download Artic"
                        })
                    }), p.jsx("p", {
                        className: "text-gray-400 max-w-2xl mx-auto text-lg",
                        children: "Choose your platform and start using our executor."
                    })]
                }), p.jsx("div", {
                    className: "flex justify-center mb-12",
                    children: p.jsxs("div", {
                        className: "bg-black/60 backdrop-blur-xl border border-red-900/20 rounded-full p-1 shadow-lg shadow-red-900/10",
                        children: [p.jsx("button", {
                            onClick: () => t("android"),
                            className: `px-6 py-2 rounded-full transition-all duration-500 ${e === "android" ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/20" : "text-gray-400 hover:text-red-500"}`,
                            children: p.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [p.jsx(yc, {
                                    size: 18,
                                    className: "transform transition-transform duration-300 group-hover:rotate-12"
                                }), p.jsx("span", {
                                    children: "Android"
                                })]
                            })
                        }), p.jsx("button", {
                            onClick: () => t("pc"),
                            className: `px-6 py-2 rounded-full transition-all duration-500 ${e === "pc" ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/20" : "text-gray-400 hover:text-red-500"}`,
                            children: p.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [p.jsx(vc, {
                                    size: 18,
                                    className: "transform transition-transform duration-300 group-hover:rotate-12"
                                }), p.jsx("span", {
                                    children: "Windows PC"
                                })]
                            })
                        })]
                    })
                }), p.jsxs("div", {
                    className: "max-w-4xl mx-auto perspective-1000",
                    children: [p.jsx("div", {
                        className: `transition-all duration-700 ${e === "android" ? "opacity-100 translate-x-0 rotate-y-0" : "opacity-0 translate-x-full rotate-y-90 absolute"}`,
                        children: e === "android" && p.jsxs("div", {
                            className: "bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-red-900/20 rounded-xl overflow-hidden transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-red-900/10",
                            children: [p.jsxs("div", {
                                className: "relative h-64 bg-black overflow-hidden",
                                children: [p.jsx("div", {
                                    className: "absolute top-4 left-4",
                                    children: p.jsx("span", {
                                        className: "bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-red-500/20",
                                        children: "Latest Release"
                                    })
                                }), p.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-6",
                                    children: p.jsxs("h3", {
                                        className: "text-2xl font-semibold flex items-center space-x-2",
                                        children: [p.jsx(yc, {
                                            size: 24,
                                            className: "text-red-500"
                                        }), p.jsx("span", {
                                            children: "Android Version"
                                        })]
                                    })
                                })]
                            }), p.jsxs("div", {
                                className: "p-8",
                                children: [p.jsx("div", {
                                    className: "flex items-center mb-6",
                                    children: p.jsx("div", {
                                        className: "bg-red-500/20 px-3 py-1 rounded-full",
                                        children: p.jsx("span", {
                                            className: "text-red-500 text-sm font-medium",
                                            children: "v1.0.0"
                                        })
                                    })
                                }), p.jsxs("div", {
                                    className: "mb-8",
                                    children: [p.jsx("h4", {
                                        className: "text-xl font-medium mb-4",
                                        children: "Features"
                                    }), p.jsx("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: r.map( (i, o) => p.jsxs("div", {
                                            className: "flex items-center space-x-2 text-gray-300",
                                            children: [p.jsx("div", {
                                                className: "text-red-500",
                                                children: i.icon
                                            }), p.jsx("span", {
                                                children: i.text
                                            })]
                                        }, o))
                                    })]
                                }), p.jsxs("button", {
                                    onClick: () => n("android"),
                                    className: "w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-900/30 text-lg",
                                    children: [p.jsx(ja, {
                                        size: 20
                                    }), p.jsx("span", {
                                        children: "Download"
                                    })]
                                })]
                            })]
                        })
                    }), p.jsx("div", {
                        className: `transition-all duration-700 ${e === "pc" ? "opacity-100 translate-x-0 rotate-y-0" : "opacity-0 -translate-x-full rotate-y-90 absolute"}`,
                        children: e === "pc" && p.jsxs("div", {
                            className: "bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-red-900/20 rounded-xl overflow-hidden transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-red-900/10",
                            children: [p.jsxs("div", {
                                className: "relative h-64 bg-black overflow-hidden",
                                children: [p.jsx("img", {
                                    src: "https://files.catbox.moe/eywpq5.png",
                                    alt: "Windows UI",
                                    className: "w-full h-auto object-contain"
                                }), p.jsx("div", {
                                    className: "absolute top-4 left-4",
                                    children: p.jsx("span", {
                                        className: "bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-red-500/20",
                                        children: "Latest Release"
                                    })
                                }), p.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-6",
                                    children: p.jsxs("h3", {
                                        className: `text-2xl font-semibold flex items-center space-x-2 ${e === "pc" ? "text-red-500 bg-black/70 p-2 rounded w-1/3" : "text-transparent"}`,
                                        children: [p.jsx(vc, {
                                            size: 24,
                                            className: `${e === "pc" ? "text-red-500" : "text-transparent"}`
                                        }), p.jsx("span", {
                                            children: "Windows PC Version"
                                        })]
                                    })
                                })]
                            }), p.jsxs("div", {
                                className: "p-8",
                                children: [p.jsx("div", {
                                    className: "flex items-center mb-6",
                                    children: p.jsx("div", {
                                        className: "bg-red-500/20 px-3 py-1 rounded-full",
                                        children: p.jsx("span", {
                                            className: "text-red-500 text-sm font-medium",
                                            children: "v1.0.0"
                                        })
                                    })
                                }), p.jsxs("div", {
                                    className: "mb-8",
                                    children: [p.jsx("h4", {
                                        className: "text-xl font-medium mb-4",
                                        children: "Features"
                                    }), p.jsx("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: l.map( (i, o) => p.jsxs("div", {
                                            className: "flex items-center space-x-2 text-gray-300",
                                            children: [p.jsx("div", {
                                                className: "text-red-500",
                                                children: i.icon
                                            }), p.jsx("span", {
                                                children: i.text
                                            })]
                                        }, o))
                                    })]
                                }), p.jsxs("button", {
                                    onClick: () => n("pc"),
                                    className: "w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-900/30 text-lg",
                                    children: [p.jsx(ja, {
                                        size: 20
                                    }), p.jsx("span", {
                                        children: "Download"
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })
        }), p.jsx(rp, {})]
    })
}
  , Qv = uv([{
    path: "/",
    element: p.jsx(Vv, {})
}, {
    path: "/download",
    element: p.jsx(Wv, {})
}]);
Of(document.getElementById("root")).render(p.jsx(P.StrictMode, {
    children: p.jsx(gv, {
        router: Qv
    })
}));
