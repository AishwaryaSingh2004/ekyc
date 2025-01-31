var Q5 = Object.defineProperty;
var K5 = (t, e, n) => e in t ? Q5(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var E = (t, e, n) => (K5(t, typeof e != "symbol" ? e + "" : e, n),
n)
  , tf = (t, e, n) => {
    if (!e.has(t))
        throw TypeError("Cannot " + n)
}
;
var c = (t, e, n) => (tf(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , b = (t, e, n) => {
    if (e.has(t))
        throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, n)
}
  , m = (t, e, n, r) => (tf(t, e, "write to private field"),
r ? r.call(t, n) : e.set(t, n),
n)
  , Do = (t, e, n, r) => ({
    set _(s) {
        m(t, e, s, n)
    },
    get _() {
        return c(t, e, r)
    }
})
  , T = (t, e, n) => (tf(t, e, "access private method"),
n);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
function W5(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Z1 = {
    exports: {}
}
  , Sc = {}
  , X1 = {
    exports: {}
}
  , W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma = Symbol.for("react.element")
  , J5 = Symbol.for("react.portal")
  , Y5 = Symbol.for("react.fragment")
  , Z5 = Symbol.for("react.strict_mode")
  , X5 = Symbol.for("react.profiler")
  , $5 = Symbol.for("react.provider")
  , q5 = Symbol.for("react.context")
  , ew = Symbol.for("react.forward_ref")
  , tw = Symbol.for("react.suspense")
  , nw = Symbol.for("react.memo")
  , rw = Symbol.for("react.lazy")
  , Cd = Symbol.iterator;
function sw(t) {
    return t === null || typeof t != "object" ? null : (t = Cd && t[Cd] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var $1 = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , q1 = Object.assign
  , eg = {};
function Ro(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = eg,
    this.updater = n || $1
}
Ro.prototype.isReactComponent = {};
Ro.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Ro.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function tg() {}
tg.prototype = Ro.prototype;
function ph(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = eg,
    this.updater = n || $1
}
var gh = ph.prototype = new tg;
gh.constructor = ph;
q1(gh, Ro.prototype);
gh.isPureReactComponent = !0;
var Nd = Array.isArray
  , ng = Object.prototype.hasOwnProperty
  , mh = {
    current: null
}
  , rg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function sg(t, e, n) {
    var r, s = {}, i = null, o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (i = "" + e.key),
        e)
            ng.call(e, r) && !rg.hasOwnProperty(r) && (s[r] = e[r]);
    var l = arguments.length - 2;
    if (l === 1)
        s.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        s.children = a
    }
    if (t && t.defaultProps)
        for (r in l = t.defaultProps,
        l)
            s[r] === void 0 && (s[r] = l[r]);
    return {
        $$typeof: ma,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: mh.current
    }
}
function iw(t, e) {
    return {
        $$typeof: ma,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function yh(t) {
    return typeof t == "object" && t !== null && t.$$typeof === ma
}
function ow(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var Pd = /\/+/g;
function nf(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? ow("" + t.key) : e.toString(36)
}
function au(t, e, n, r, s) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case ma:
            case J5:
                o = !0
            }
        }
    if (o)
        return o = t,
        s = s(o),
        t = r === "" ? "." + nf(o, 0) : r,
        Nd(s) ? (n = "",
        t != null && (n = t.replace(Pd, "$&/") + "/"),
        au(s, e, n, "", function(u) {
            return u
        })) : s != null && (yh(s) && (s = iw(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Pd, "$&/") + "/") + t)),
        e.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Nd(t))
        for (var l = 0; l < t.length; l++) {
            i = t[l];
            var a = r + nf(i, l);
            o += au(i, e, n, a, s)
        }
    else if (a = sw(t),
    typeof a == "function")
        for (t = a.call(t),
        l = 0; !(i = t.next()).done; )
            i = i.value,
            a = r + nf(i, l++),
            o += au(i, e, n, a, s);
    else if (i === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Oa(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , s = 0;
    return au(t, r, "", "", function(i) {
        return e.call(n, i, s++)
    }),
    r
}
function lw(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var Ze = {
    current: null
}
  , uu = {
    transition: null
}
  , aw = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: uu,
    ReactCurrentOwner: mh
};
W.Children = {
    map: Oa,
    forEach: function(t, e, n) {
        Oa(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Oa(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Oa(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!yh(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
W.Component = Ro;
W.Fragment = Y5;
W.Profiler = X5;
W.PureComponent = ph;
W.StrictMode = Z5;
W.Suspense = tw;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aw;
W.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = q1({}, t.props)
      , s = t.key
      , i = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (i = e.ref,
        o = mh.current),
        e.key !== void 0 && (s = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (a in e)
            ng.call(e, a) && !rg.hasOwnProperty(a) && (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ma,
        type: t.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
W.createContext = function(t) {
    return t = {
        $$typeof: q5,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: $5,
        _context: t
    },
    t.Consumer = t
}
;
W.createElement = sg;
W.createFactory = function(t) {
    var e = sg.bind(null, t);
    return e.type = t,
    e
}
;
W.createRef = function() {
    return {
        current: null
    }
}
;
W.forwardRef = function(t) {
    return {
        $$typeof: ew,
        render: t
    }
}
;
W.isValidElement = yh;
W.lazy = function(t) {
    return {
        $$typeof: rw,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: lw
    }
}
;
W.memo = function(t, e) {
    return {
        $$typeof: nw,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
W.startTransition = function(t) {
    var e = uu.transition;
    uu.transition = {};
    try {
        t()
    } finally {
        uu.transition = e
    }
}
;
W.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
W.useCallback = function(t, e) {
    return Ze.current.useCallback(t, e)
}
;
W.useContext = function(t) {
    return Ze.current.useContext(t)
}
;
W.useDebugValue = function() {}
;
W.useDeferredValue = function(t) {
    return Ze.current.useDeferredValue(t)
}
;
W.useEffect = function(t, e) {
    return Ze.current.useEffect(t, e)
}
;
W.useId = function() {
    return Ze.current.useId()
}
;
W.useImperativeHandle = function(t, e, n) {
    return Ze.current.useImperativeHandle(t, e, n)
}
;
W.useInsertionEffect = function(t, e) {
    return Ze.current.useInsertionEffect(t, e)
}
;
W.useLayoutEffect = function(t, e) {
    return Ze.current.useLayoutEffect(t, e)
}
;
W.useMemo = function(t, e) {
    return Ze.current.useMemo(t, e)
}
;
W.useReducer = function(t, e, n) {
    return Ze.current.useReducer(t, e, n)
}
;
W.useRef = function(t) {
    return Ze.current.useRef(t)
}
;
W.useState = function(t) {
    return Ze.current.useState(t)
}
;
W.useSyncExternalStore = function(t, e, n) {
    return Ze.current.useSyncExternalStore(t, e, n)
}
;
W.useTransition = function() {
    return Ze.current.useTransition()
}
;
W.version = "18.2.0";
X1.exports = W;
var wn = X1.exports;
const En = W5(wn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uw = wn
  , cw = Symbol.for("react.element")
  , fw = Symbol.for("react.fragment")
  , hw = Object.prototype.hasOwnProperty
  , dw = uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , pw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ig(t, e, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (r in e)
        hw.call(e, r) && !pw.hasOwnProperty(r) && (s[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            s[r] === void 0 && (s[r] = e[r]);
    return {
        $$typeof: cw,
        type: t,
        key: i,
        ref: o,
        props: s,
        _owner: dw.current
    }
}
Sc.Fragment = fw;
Sc.jsx = ig;
Sc.jsxs = ig;
Z1.exports = Sc;
var I = Z1.exports
  , Vf = {}
  , og = {
    exports: {}
}
  , bt = {}
  , lg = {
    exports: {}
}
  , ag = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(D, G) {
        var Q = D.length;
        D.push(G);
        e: for (; 0 < Q; ) {
            var ye = Q - 1 >>> 1
              , Se = D[ye];
            if (0 < s(Se, G))
                D[ye] = G,
                D[Q] = Se,
                Q = ye;
            else
                break e
        }
    }
    function n(D) {
        return D.length === 0 ? null : D[0]
    }
    function r(D) {
        if (D.length === 0)
            return null;
        var G = D[0]
          , Q = D.pop();
        if (Q !== G) {
            D[0] = Q;
            e: for (var ye = 0, Se = D.length, Ta = Se >>> 1; ye < Ta; ) {
                var ts = 2 * (ye + 1) - 1
                  , ef = D[ts]
                  , ns = ts + 1
                  , Ia = D[ns];
                if (0 > s(ef, Q))
                    ns < Se && 0 > s(Ia, ef) ? (D[ye] = Ia,
                    D[ns] = Q,
                    ye = ns) : (D[ye] = ef,
                    D[ts] = Q,
                    ye = ts);
                else if (ns < Se && 0 > s(Ia, Q))
                    D[ye] = Ia,
                    D[ns] = Q,
                    ye = ns;
                else
                    break e
            }
        }
        return G
    }
    function s(D, G) {
        var Q = D.sortIndex - G.sortIndex;
        return Q !== 0 ? Q : D.id - G.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        t.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , l = o.now();
        t.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , f = 1
      , h = null
      , d = 3
      , g = !1
      , A = !1
      , x = !1
      , N = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(D) {
        for (var G = n(u); G !== null; ) {
            if (G.callback === null)
                r(u);
            else if (G.startTime <= D)
                r(u),
                G.sortIndex = G.expirationTime,
                e(a, G);
            else
                break;
            G = n(u)
        }
    }
    function S(D) {
        if (x = !1,
        w(D),
        !A)
            if (n(a) !== null)
                A = !0,
                $c(P);
            else {
                var G = n(u);
                G !== null && qc(S, G.startTime - D)
            }
    }
    function P(D, G) {
        A = !1,
        x && (x = !1,
        y(O),
        O = -1),
        g = !0;
        var Q = d;
        try {
            for (w(G),
            h = n(a); h !== null && (!(h.expirationTime > G) || D && !Ge()); ) {
                var ye = h.callback;
                if (typeof ye == "function") {
                    h.callback = null,
                    d = h.priorityLevel;
                    var Se = ye(h.expirationTime <= G);
                    G = t.unstable_now(),
                    typeof Se == "function" ? h.callback = Se : h === n(a) && r(a),
                    w(G)
                } else
                    r(a);
                h = n(a)
            }
            if (h !== null)
                var Ta = !0;
            else {
                var ts = n(u);
                ts !== null && qc(S, ts.startTime - G),
                Ta = !1
            }
            return Ta
        } finally {
            h = null,
            d = Q,
            g = !1
        }
    }
    var B = !1
      , F = null
      , O = -1
      , V = 5
      , j = -1;
    function Ge() {
        return !(t.unstable_now() - j < V)
    }
    function an() {
        if (F !== null) {
            var D = t.unstable_now();
            j = D;
            var G = !0;
            try {
                G = F(!0, D)
            } finally {
                G ? Cn() : (B = !1,
                F = null)
            }
        } else
            B = !1
    }
    var Cn;
    if (typeof p == "function")
        Cn = function() {
            p(an)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Na = new MessageChannel
          , Pa = Na.port2;
        Na.port1.onmessage = an,
        Cn = function() {
            Pa.postMessage(null)
        }
    } else
        Cn = function() {
            N(an, 0)
        }
        ;
    function $c(D) {
        F = D,
        B || (B = !0,
        Cn())
    }
    function qc(D, G) {
        O = N(function() {
            D(t.unstable_now())
        }, G)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(D) {
        D.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        A || g || (A = !0,
        $c(P))
    }
    ,
    t.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < D ? Math.floor(1e3 / D) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    t.unstable_next = function(D) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var G = 3;
            break;
        default:
            G = d
        }
        var Q = d;
        d = G;
        try {
            return D()
        } finally {
            d = Q
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(D, G) {
        switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            D = 3
        }
        var Q = d;
        d = D;
        try {
            return G()
        } finally {
            d = Q
        }
    }
    ,
    t.unstable_scheduleCallback = function(D, G, Q) {
        var ye = t.unstable_now();
        switch (typeof Q == "object" && Q !== null ? (Q = Q.delay,
        Q = typeof Q == "number" && 0 < Q ? ye + Q : ye) : Q = ye,
        D) {
        case 1:
            var Se = -1;
            break;
        case 2:
            Se = 250;
            break;
        case 5:
            Se = 1073741823;
            break;
        case 4:
            Se = 1e4;
            break;
        default:
            Se = 5e3
        }
        return Se = Q + Se,
        D = {
            id: f++,
            callback: G,
            priorityLevel: D,
            startTime: Q,
            expirationTime: Se,
            sortIndex: -1
        },
        Q > ye ? (D.sortIndex = Q,
        e(u, D),
        n(a) === null && D === n(u) && (x ? (y(O),
        O = -1) : x = !0,
        qc(S, Q - ye))) : (D.sortIndex = Se,
        e(a, D),
        A || g || (A = !0,
        $c(P))),
        D
    }
    ,
    t.unstable_shouldYield = Ge,
    t.unstable_wrapCallback = function(D) {
        var G = d;
        return function() {
            var Q = d;
            d = G;
            try {
                return D.apply(this, arguments)
            } finally {
                d = Q
            }
        }
    }
}
)(ag);
lg.exports = ag;
var gw = lg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug = wn
  , xt = gw;
function C(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var cg = new Set
  , xl = {};
function Zs(t, e) {
    Eo(t, e),
    Eo(t + "Capture", e)
}
function Eo(t, e) {
    for (xl[t] = e,
    t = 0; t < e.length; t++)
        cg.add(e[t])
}
var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Qf = Object.prototype.hasOwnProperty
  , mw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Td = {}
  , Id = {};
function yw(t) {
    return Qf.call(Id, t) ? !0 : Qf.call(Td, t) ? !1 : mw.test(t) ? Id[t] = !0 : (Td[t] = !0,
    !1)
}
function ww(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function Aw(t, e, n, r) {
    if (e === null || typeof e > "u" || ww(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Xe(t, e, n, r, s, i, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Re[t] = new Xe(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    Re[e] = new Xe(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Re[t] = new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Re[t] = new Xe(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Re[t] = new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Re[t] = new Xe(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    Re[t] = new Xe(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    Re[t] = new Xe(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    Re[t] = new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var wh = /[\-:]([a-z])/g;
function Ah(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(wh, Ah);
    Re[e] = new Xe(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(wh, Ah);
    Re[e] = new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(wh, Ah);
    Re[e] = new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    Re[t] = new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)
});
Re.xlinkHref = new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    Re[t] = new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function vh(t, e, n, r) {
    var s = Re.hasOwnProperty(e) ? Re[e] : null;
    (s !== null ? s.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Aw(e, n, s, r) && (n = null),
    r || s === null ? yw(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : s.mustUseProperty ? t[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (e = s.attributeName,
    r = s.attributeNamespace,
    n === null ? t.removeAttribute(e) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var sr = ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ba = Symbol.for("react.element")
  , ai = Symbol.for("react.portal")
  , ui = Symbol.for("react.fragment")
  , xh = Symbol.for("react.strict_mode")
  , Kf = Symbol.for("react.profiler")
  , fg = Symbol.for("react.provider")
  , hg = Symbol.for("react.context")
  , Eh = Symbol.for("react.forward_ref")
  , Wf = Symbol.for("react.suspense")
  , Jf = Symbol.for("react.suspense_list")
  , bh = Symbol.for("react.memo")
  , fr = Symbol.for("react.lazy")
  , dg = Symbol.for("react.offscreen")
  , Od = Symbol.iterator;
function Mo(t) {
    return t === null || typeof t != "object" ? null : (t = Od && t[Od] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var he = Object.assign, rf;
function Yo(t) {
    if (rf === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            rf = e && e[1] || ""
        }
    return `
` + rf + t
}
var sf = !1;
function of(t, e) {
    if (!t || sf)
        return "";
    sf = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, l = i.length - 1; 1 <= o && 0 <= l && s[o] !== i[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (s[o] !== i[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || s[o] !== i[l]) {
                                var a = `
` + s[o].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        sf = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Yo(t) : ""
}
function vw(t) {
    switch (t.tag) {
    case 5:
        return Yo(t.type);
    case 16:
        return Yo("Lazy");
    case 13:
        return Yo("Suspense");
    case 19:
        return Yo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = of(t.type, !1),
        t;
    case 11:
        return t = of(t.type.render, !1),
        t;
    case 1:
        return t = of(t.type, !0),
        t;
    default:
        return ""
    }
}
function Yf(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case ui:
        return "Fragment";
    case ai:
        return "Portal";
    case Kf:
        return "Profiler";
    case xh:
        return "StrictMode";
    case Wf:
        return "Suspense";
    case Jf:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case hg:
            return (t.displayName || "Context") + ".Consumer";
        case fg:
            return (t._context.displayName || "Context") + ".Provider";
        case Eh:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case bh:
            return e = t.displayName || null,
            e !== null ? e : Yf(t.type) || "Memo";
        case fr:
            e = t._payload,
            t = t._init;
            try {
                return Yf(t(e))
            } catch {}
        }
    return null
}
function xw(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Yf(e);
    case 8:
        return e === xh ? "StrictMode" : "Mode";
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
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function Kr(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function pg(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function Ew(t) {
    var e = pg(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , i = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
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
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function Ra(t) {
    t._valueTracker || (t._valueTracker = Ew(t))
}
function gg(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = pg(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Tu(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function Zf(t, e) {
    var n = e.checked;
    return he({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function Bd(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = Kr(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function mg(t, e) {
    e = e.checked,
    e != null && vh(t, "checked", e, !1)
}
function Xf(t, e) {
    mg(t, e);
    var n = Kr(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? $f(t, e.type, n) : e.hasOwnProperty("defaultValue") && $f(t, e.type, Kr(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function Rd(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function $f(t, e, n) {
    (e !== "number" || Tu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Zo = Array.isArray;
function Ci(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var s = 0; s < n.length; s++)
            e["$" + n[s]] = !0;
        for (n = 0; n < t.length; n++)
            s = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== s && (t[n].selected = s),
            s && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + Kr(n),
        e = null,
        s = 0; s < t.length; s++) {
            if (t[s].value === n) {
                t[s].selected = !0,
                r && (t[s].defaultSelected = !0);
                return
            }
            e !== null || t[s].disabled || (e = t[s])
        }
        e !== null && (e.selected = !0)
    }
}
function qf(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(C(91));
    return he({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function Ld(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(C(92));
            if (Zo(n)) {
                if (1 < n.length)
                    throw Error(C(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: Kr(n)
    }
}
function yg(t, e) {
    var n = Kr(e.value)
      , r = Kr(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function Ud(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function wg(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function e0(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? wg(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var La, Ag = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, s)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (La = La || document.createElement("div"),
        La.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = La.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function El(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var il = {
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
  , bw = ["Webkit", "ms", "Moz", "O"];
Object.keys(il).forEach(function(t) {
    bw.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        il[e] = il[t]
    })
});
function vg(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || il.hasOwnProperty(t) && il[t] ? ("" + e).trim() : e + "px"
}
function xg(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = vg(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, s) : t[n] = s
        }
}
var Sw = he({
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
function t0(t, e) {
    if (e) {
        if (Sw[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(C(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(C(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(C(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(C(62))
    }
}
function n0(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
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
var r0 = null;
function Sh(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var s0 = null
  , Ni = null
  , Pi = null;
function Fd(t) {
    if (t = Aa(t)) {
        if (typeof s0 != "function")
            throw Error(C(280));
        var e = t.stateNode;
        e && (e = Tc(e),
        s0(t.stateNode, t.type, e))
    }
}
function Eg(t) {
    Ni ? Pi ? Pi.push(t) : Pi = [t] : Ni = t
}
function bg() {
    if (Ni) {
        var t = Ni
          , e = Pi;
        if (Pi = Ni = null,
        Fd(t),
        e)
            for (t = 0; t < e.length; t++)
                Fd(e[t])
    }
}
function Sg(t, e) {
    return t(e)
}
function kg() {}
var lf = !1;
function Cg(t, e, n) {
    if (lf)
        return t(e, n);
    lf = !0;
    try {
        return Sg(t, e, n)
    } finally {
        lf = !1,
        (Ni !== null || Pi !== null) && (kg(),
        bg())
    }
}
function bl(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = Tc(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
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
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(C(231, e, typeof n));
    return n
}
var i0 = !1;
if (qn)
    try {
        var zo = {};
        Object.defineProperty(zo, "passive", {
            get: function() {
                i0 = !0
            }
        }),
        window.addEventListener("test", zo, zo),
        window.removeEventListener("test", zo, zo)
    } catch {
        i0 = !1
    }
function kw(t, e, n, r, s, i, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var ol = !1
  , Iu = null
  , Ou = !1
  , o0 = null
  , Cw = {
    onError: function(t) {
        ol = !0,
        Iu = t
    }
};
function Nw(t, e, n, r, s, i, o, l, a) {
    ol = !1,
    Iu = null,
    kw.apply(Cw, arguments)
}
function Pw(t, e, n, r, s, i, o, l, a) {
    if (Nw.apply(this, arguments),
    ol) {
        if (ol) {
            var u = Iu;
            ol = !1,
            Iu = null
        } else
            throw Error(C(198));
        Ou || (Ou = !0,
        o0 = u)
    }
}
function Xs(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Ng(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Dd(t) {
    if (Xs(t) !== t)
        throw Error(C(188))
}
function Tw(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Xs(t),
        e === null)
            throw Error(C(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n)
                    return Dd(s),
                    t;
                if (i === r)
                    return Dd(s),
                    e;
                i = i.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return)
            n = s,
            r = i;
        else {
            for (var o = !1, l = s.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(C(189))
            }
        }
        if (n.alternate !== r)
            throw Error(C(190))
    }
    if (n.tag !== 3)
        throw Error(C(188));
    return n.stateNode.current === n ? t : e
}
function Pg(t) {
    return t = Tw(t),
    t !== null ? Tg(t) : null
}
function Tg(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Tg(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Ig = xt.unstable_scheduleCallback
  , Md = xt.unstable_cancelCallback
  , Iw = xt.unstable_shouldYield
  , Ow = xt.unstable_requestPaint
  , we = xt.unstable_now
  , Bw = xt.unstable_getCurrentPriorityLevel
  , kh = xt.unstable_ImmediatePriority
  , Og = xt.unstable_UserBlockingPriority
  , Bu = xt.unstable_NormalPriority
  , Rw = xt.unstable_LowPriority
  , Bg = xt.unstable_IdlePriority
  , kc = null
  , bn = null;
function Lw(t) {
    if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
            bn.onCommitFiberRoot(kc, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var tn = Math.clz32 ? Math.clz32 : Dw
  , Uw = Math.log
  , Fw = Math.LN2;
function Dw(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (Uw(t) / Fw | 0) | 0
}
var Ua = 64
  , Fa = 4194304;
function Xo(t) {
    switch (t & -t) {
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
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function Ru(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = t.suspendedLanes
      , i = t.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~s;
        l !== 0 ? r = Xo(l) : (i &= o,
        i !== 0 && (r = Xo(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = Xo(o) : i !== 0 && (r = Xo(i));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & s) && (s = r & -r,
    i = e & -e,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - tn(e),
            s = 1 << n,
            r |= t[n],
            e &= ~s;
    return r
}
function Mw(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
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
        return e + 5e3;
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
function zw(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, s = t.expirationTimes, i = t.pendingLanes; 0 < i; ) {
        var o = 31 - tn(i)
          , l = 1 << o
          , a = s[o];
        a === -1 ? (!(l & n) || l & r) && (s[o] = Mw(l, e)) : a <= e && (t.expiredLanes |= l),
        i &= ~l
    }
}
function l0(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Rg() {
    var t = Ua;
    return Ua <<= 1,
    !(Ua & 4194240) && (Ua = 64),
    t
}
function af(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function ya(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - tn(e),
    t[e] = n
}
function _w(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var s = 31 - tn(n)
          , i = 1 << s;
        e[s] = 0,
        r[s] = -1,
        t[s] = -1,
        n &= ~i
    }
}
function Ch(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - tn(n)
          , s = 1 << r;
        s & e | t[r] & e && (t[r] |= e),
        n &= ~s
    }
}
var te = 0;
function Lg(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ug, Nh, Fg, Dg, Mg, a0 = !1, Da = [], Ur = null, Fr = null, Dr = null, Sl = new Map, kl = new Map, gr = [], Hw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zd(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Ur = null;
        break;
    case "dragenter":
    case "dragleave":
        Fr = null;
        break;
    case "mouseover":
    case "mouseout":
        Dr = null;
        break;
    case "pointerover":
    case "pointerout":
        Sl.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        kl.delete(e.pointerId)
    }
}
function _o(t, e, n, r, s, i) {
    return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    e !== null && (e = Aa(e),
    e !== null && Nh(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    s !== null && e.indexOf(s) === -1 && e.push(s),
    t)
}
function jw(t, e, n, r, s) {
    switch (e) {
    case "focusin":
        return Ur = _o(Ur, t, e, n, r, s),
        !0;
    case "dragenter":
        return Fr = _o(Fr, t, e, n, r, s),
        !0;
    case "mouseover":
        return Dr = _o(Dr, t, e, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Sl.set(i, _o(Sl.get(i) || null, t, e, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        kl.set(i, _o(kl.get(i) || null, t, e, n, r, s)),
        !0
    }
    return !1
}
function zg(t) {
    var e = as(t.target);
    if (e !== null) {
        var n = Xs(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = Ng(n),
                e !== null) {
                    t.blockedOn = e,
                    Mg(t.priority, function() {
                        Fg(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function cu(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = u0(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            r0 = r,
            n.target.dispatchEvent(r),
            r0 = null
        } else
            return e = Aa(n),
            e !== null && Nh(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function _d(t, e, n) {
    cu(t) && n.delete(e)
}
function Gw() {
    a0 = !1,
    Ur !== null && cu(Ur) && (Ur = null),
    Fr !== null && cu(Fr) && (Fr = null),
    Dr !== null && cu(Dr) && (Dr = null),
    Sl.forEach(_d),
    kl.forEach(_d)
}
function Ho(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    a0 || (a0 = !0,
    xt.unstable_scheduleCallback(xt.unstable_NormalPriority, Gw)))
}
function Cl(t) {
    function e(s) {
        return Ho(s, t)
    }
    if (0 < Da.length) {
        Ho(Da[0], t);
        for (var n = 1; n < Da.length; n++) {
            var r = Da[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Ur !== null && Ho(Ur, t),
    Fr !== null && Ho(Fr, t),
    Dr !== null && Ho(Dr, t),
    Sl.forEach(e),
    kl.forEach(e),
    n = 0; n < gr.length; n++)
        r = gr[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < gr.length && (n = gr[0],
    n.blockedOn === null); )
        zg(n),
        n.blockedOn === null && gr.shift()
}
var Ti = sr.ReactCurrentBatchConfig
  , Lu = !0;
function Vw(t, e, n, r) {
    var s = te
      , i = Ti.transition;
    Ti.transition = null;
    try {
        te = 1,
        Ph(t, e, n, r)
    } finally {
        te = s,
        Ti.transition = i
    }
}
function Qw(t, e, n, r) {
    var s = te
      , i = Ti.transition;
    Ti.transition = null;
    try {
        te = 4,
        Ph(t, e, n, r)
    } finally {
        te = s,
        Ti.transition = i
    }
}
function Ph(t, e, n, r) {
    if (Lu) {
        var s = u0(t, e, n, r);
        if (s === null)
            wf(t, e, r, Uu, n),
            zd(t, r);
        else if (jw(s, t, e, n, r))
            r.stopPropagation();
        else if (zd(t, r),
        e & 4 && -1 < Hw.indexOf(t)) {
            for (; s !== null; ) {
                var i = Aa(s);
                if (i !== null && Ug(i),
                i = u0(t, e, n, r),
                i === null && wf(t, e, r, Uu, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            wf(t, e, r, null, n)
    }
}
var Uu = null;
function u0(t, e, n, r) {
    if (Uu = null,
    t = Sh(r),
    t = as(t),
    t !== null)
        if (e = Xs(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = Ng(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return Uu = t,
    null
}
function _g(t) {
    switch (t) {
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
        switch (Bw()) {
        case kh:
            return 1;
        case Og:
            return 4;
        case Bu:
        case Rw:
            return 16;
        case Bg:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Or = null
  , Th = null
  , fu = null;
function Hg() {
    if (fu)
        return fu;
    var t, e = Th, n = e.length, r, s = "value"in Or ? Or.value : Or.textContent, i = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++)
        ;
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === s[i - r]; r++)
        ;
    return fu = s.slice(t, 1 < r ? 1 - r : void 0)
}
function hu(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function Ma() {
    return !0
}
function Hd() {
    return !1
}
function St(t) {
    function e(n, r, s, i, o) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var l in t)
            t.hasOwnProperty(l) && (n = t[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ma : Hd,
        this.isPropagationStopped = Hd,
        this
    }
    return he(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ma)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ma)
        },
        persist: function() {},
        isPersistent: Ma
    }),
    e
}
var Lo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ih = St(Lo), wa = he({}, Lo, {
    view: 0,
    detail: 0
}), Kw = St(wa), uf, cf, jo, Cc = he({}, wa, {
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
    getModifierState: Oh,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== jo && (jo && t.type === "mousemove" ? (uf = t.screenX - jo.screenX,
        cf = t.screenY - jo.screenY) : cf = uf = 0,
        jo = t),
        uf)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : cf
    }
}), jd = St(Cc), Ww = he({}, Cc, {
    dataTransfer: 0
}), Jw = St(Ww), Yw = he({}, wa, {
    relatedTarget: 0
}), ff = St(Yw), Zw = he({}, Lo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Xw = St(Zw), $w = he({}, Lo, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), qw = St($w), e6 = he({}, Lo, {
    data: 0
}), Gd = St(e6), t6 = {
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
}, n6 = {
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
}, r6 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function s6(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = r6[t]) ? !!e[t] : !1
}
function Oh() {
    return s6
}
var i6 = he({}, wa, {
    key: function(t) {
        if (t.key) {
            var e = t6[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = hu(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? n6[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oh,
    charCode: function(t) {
        return t.type === "keypress" ? hu(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? hu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , o6 = St(i6)
  , l6 = he({}, Cc, {
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
  , Vd = St(l6)
  , a6 = he({}, wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Oh
})
  , u6 = St(a6)
  , c6 = he({}, Lo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , f6 = St(c6)
  , h6 = he({}, Cc, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , d6 = St(h6)
  , p6 = [9, 13, 27, 32]
  , Bh = qn && "CompositionEvent"in window
  , ll = null;
qn && "documentMode"in document && (ll = document.documentMode);
var g6 = qn && "TextEvent"in window && !ll
  , jg = qn && (!Bh || ll && 8 < ll && 11 >= ll)
  , Qd = String.fromCharCode(32)
  , Kd = !1;
function Gg(t, e) {
    switch (t) {
    case "keyup":
        return p6.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Vg(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var ci = !1;
function m6(t, e) {
    switch (t) {
    case "compositionend":
        return Vg(e);
    case "keypress":
        return e.which !== 32 ? null : (Kd = !0,
        Qd);
    case "textInput":
        return t = e.data,
        t === Qd && Kd ? null : t;
    default:
        return null
    }
}
function y6(t, e) {
    if (ci)
        return t === "compositionend" || !Bh && Gg(t, e) ? (t = Hg(),
        fu = Th = Or = null,
        ci = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return jg && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var w6 = {
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
function Wd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!w6[t.type] : e === "textarea"
}
function Qg(t, e, n, r) {
    Eg(r),
    e = Fu(e, "onChange"),
    0 < e.length && (n = new Ih("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var al = null
  , Nl = null;
function A6(t) {
    nm(t, 0)
}
function Nc(t) {
    var e = di(t);
    if (gg(e))
        return t
}
function v6(t, e) {
    if (t === "change")
        return e
}
var Kg = !1;
if (qn) {
    var hf;
    if (qn) {
        var df = "oninput"in document;
        if (!df) {
            var Jd = document.createElement("div");
            Jd.setAttribute("oninput", "return;"),
            df = typeof Jd.oninput == "function"
        }
        hf = df
    } else
        hf = !1;
    Kg = hf && (!document.documentMode || 9 < document.documentMode)
}
function Yd() {
    al && (al.detachEvent("onpropertychange", Wg),
    Nl = al = null)
}
function Wg(t) {
    if (t.propertyName === "value" && Nc(Nl)) {
        var e = [];
        Qg(e, Nl, t, Sh(t)),
        Cg(A6, e)
    }
}
function x6(t, e, n) {
    t === "focusin" ? (Yd(),
    al = e,
    Nl = n,
    al.attachEvent("onpropertychange", Wg)) : t === "focusout" && Yd()
}
function E6(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Nc(Nl)
}
function b6(t, e) {
    if (t === "click")
        return Nc(e)
}
function S6(t, e) {
    if (t === "input" || t === "change")
        return Nc(e)
}
function k6(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var rn = typeof Object.is == "function" ? Object.is : k6;
function Pl(t, e) {
    if (rn(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!Qf.call(e, s) || !rn(t[s], e[s]))
            return !1
    }
    return !0
}
function Zd(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Xd(t, e) {
    var n = Zd(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
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
        n = Zd(n)
    }
}
function Jg(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Jg(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Yg() {
    for (var t = window, e = Tu(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Tu(t.document)
    }
    return e
}
function Rh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function C6(t) {
    var e = Yg()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Jg(n.ownerDocument.documentElement, n)) {
        if (r !== null && Rh(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var s = n.textContent.length
                  , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                !t.extend && i > r && (s = r,
                r = i,
                i = s),
                s = Xd(n, i);
                var o = Xd(n, r);
                s && o && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(s.node, s.offset),
                t.removeAllRanges(),
                i > r ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var N6 = qn && "documentMode"in document && 11 >= document.documentMode
  , fi = null
  , c0 = null
  , ul = null
  , f0 = !1;
function $d(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    f0 || fi == null || fi !== Tu(r) || (r = fi,
    "selectionStart"in r && Rh(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    ul && Pl(ul, r) || (ul = r,
    r = Fu(c0, "onSelect"),
    0 < r.length && (e = new Ih("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = fi)))
}
function za(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var hi = {
    animationend: za("Animation", "AnimationEnd"),
    animationiteration: za("Animation", "AnimationIteration"),
    animationstart: za("Animation", "AnimationStart"),
    transitionend: za("Transition", "TransitionEnd")
}
  , pf = {}
  , Zg = {};
qn && (Zg = document.createElement("div").style,
"AnimationEvent"in window || (delete hi.animationend.animation,
delete hi.animationiteration.animation,
delete hi.animationstart.animation),
"TransitionEvent"in window || delete hi.transitionend.transition);
function Pc(t) {
    if (pf[t])
        return pf[t];
    if (!hi[t])
        return t;
    var e = hi[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Zg)
            return pf[t] = e[n];
    return t
}
var Xg = Pc("animationend")
  , $g = Pc("animationiteration")
  , qg = Pc("animationstart")
  , em = Pc("transitionend")
  , tm = new Map
  , qd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zr(t, e) {
    tm.set(t, e),
    Zs(e, [t])
}
for (var gf = 0; gf < qd.length; gf++) {
    var mf = qd[gf]
      , P6 = mf.toLowerCase()
      , T6 = mf[0].toUpperCase() + mf.slice(1);
    Zr(P6, "on" + T6)
}
Zr(Xg, "onAnimationEnd");
Zr($g, "onAnimationIteration");
Zr(qg, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(em, "onTransitionEnd");
Eo("onMouseEnter", ["mouseout", "mouseover"]);
Eo("onMouseLeave", ["mouseout", "mouseover"]);
Eo("onPointerEnter", ["pointerout", "pointerover"]);
Eo("onPointerLeave", ["pointerout", "pointerover"]);
Zs("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zs("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zs("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zs("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zs("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , I6 = new Set("cancel close invalid load scroll toggle".split(" ").concat($o));
function ep(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    Pw(r, e, void 0, t),
    t.currentTarget = null
}
function nm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && s.isPropagationStopped())
                        break e;
                    ep(s, l, u),
                    i = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && s.isPropagationStopped())
                        break e;
                    ep(s, l, u),
                    i = a
                }
        }
    }
    if (Ou)
        throw t = o0,
        Ou = !1,
        o0 = null,
        t
}
function se(t, e) {
    var n = e[m0];
    n === void 0 && (n = e[m0] = new Set);
    var r = t + "__bubble";
    n.has(r) || (rm(e, t, 2, !1),
    n.add(r))
}
function yf(t, e, n) {
    var r = 0;
    e && (r |= 4),
    rm(n, t, r, e)
}
var _a = "_reactListening" + Math.random().toString(36).slice(2);
function Tl(t) {
    if (!t[_a]) {
        t[_a] = !0,
        cg.forEach(function(n) {
            n !== "selectionchange" && (I6.has(n) || yf(n, !1, t),
            yf(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[_a] || (e[_a] = !0,
        yf("selectionchange", !1, e))
    }
}
function rm(t, e, n, r) {
    switch (_g(e)) {
    case 1:
        var s = Vw;
        break;
    case 4:
        s = Qw;
        break;
    default:
        s = Ph
    }
    n = s.bind(null, e, n, t),
    s = void 0,
    !i0 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
    r ? s !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
        passive: s
    }) : t.addEventListener(e, n, !1)
}
function wf(t, e, n, r, s) {
    var i = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === s || l.nodeType === 8 && l.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === s || a.nodeType === 8 && a.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = as(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = i = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Cg(function() {
        var u = i
          , f = Sh(n)
          , h = [];
        e: {
            var d = tm.get(t);
            if (d !== void 0) {
                var g = Ih
                  , A = t;
                switch (t) {
                case "keypress":
                    if (hu(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = o6;
                    break;
                case "focusin":
                    A = "focus",
                    g = ff;
                    break;
                case "focusout":
                    A = "blur",
                    g = ff;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = ff;
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
                    g = jd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = Jw;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = u6;
                    break;
                case Xg:
                case $g:
                case qg:
                    g = Xw;
                    break;
                case em:
                    g = f6;
                    break;
                case "scroll":
                    g = Kw;
                    break;
                case "wheel":
                    g = d6;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = qw;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Vd
                }
                var x = (e & 4) !== 0
                  , N = !x && t === "scroll"
                  , y = x ? d !== null ? d + "Capture" : null : d;
                x = [];
                for (var p = u, w; p !== null; ) {
                    w = p;
                    var S = w.stateNode;
                    if (w.tag === 5 && S !== null && (w = S,
                    y !== null && (S = bl(p, y),
                    S != null && x.push(Il(p, S, w)))),
                    N)
                        break;
                    p = p.return
                }
                0 < x.length && (d = new g(d,A,null,n,f),
                h.push({
                    event: d,
                    listeners: x
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover",
                g = t === "mouseout" || t === "pointerout",
                d && n !== r0 && (A = n.relatedTarget || n.fromElement) && (as(A) || A[er]))
                    break e;
                if ((g || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window,
                g ? (A = n.relatedTarget || n.toElement,
                g = u,
                A = A ? as(A) : null,
                A !== null && (N = Xs(A),
                A !== N || A.tag !== 5 && A.tag !== 6) && (A = null)) : (g = null,
                A = u),
                g !== A)) {
                    if (x = jd,
                    S = "onMouseLeave",
                    y = "onMouseEnter",
                    p = "mouse",
                    (t === "pointerout" || t === "pointerover") && (x = Vd,
                    S = "onPointerLeave",
                    y = "onPointerEnter",
                    p = "pointer"),
                    N = g == null ? d : di(g),
                    w = A == null ? d : di(A),
                    d = new x(S,p + "leave",g,n,f),
                    d.target = N,
                    d.relatedTarget = w,
                    S = null,
                    as(f) === u && (x = new x(y,p + "enter",A,n,f),
                    x.target = w,
                    x.relatedTarget = N,
                    S = x),
                    N = S,
                    g && A)
                        t: {
                            for (x = g,
                            y = A,
                            p = 0,
                            w = x; w; w = ei(w))
                                p++;
                            for (w = 0,
                            S = y; S; S = ei(S))
                                w++;
                            for (; 0 < p - w; )
                                x = ei(x),
                                p--;
                            for (; 0 < w - p; )
                                y = ei(y),
                                w--;
                            for (; p--; ) {
                                if (x === y || y !== null && x === y.alternate)
                                    break t;
                                x = ei(x),
                                y = ei(y)
                            }
                            x = null
                        }
                    else
                        x = null;
                    g !== null && tp(h, d, g, x, !1),
                    A !== null && N !== null && tp(h, N, A, x, !0)
                }
            }
            e: {
                if (d = u ? di(u) : window,
                g = d.nodeName && d.nodeName.toLowerCase(),
                g === "select" || g === "input" && d.type === "file")
                    var P = v6;
                else if (Wd(d))
                    if (Kg)
                        P = S6;
                    else {
                        P = E6;
                        var B = x6
                    }
                else
                    (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (P = b6);
                if (P && (P = P(t, u))) {
                    Qg(h, P, n, f);
                    break e
                }
                B && B(t, d, u),
                t === "focusout" && (B = d._wrapperState) && B.controlled && d.type === "number" && $f(d, "number", d.value)
            }
            switch (B = u ? di(u) : window,
            t) {
            case "focusin":
                (Wd(B) || B.contentEditable === "true") && (fi = B,
                c0 = u,
                ul = null);
                break;
            case "focusout":
                ul = c0 = fi = null;
                break;
            case "mousedown":
                f0 = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                f0 = !1,
                $d(h, n, f);
                break;
            case "selectionchange":
                if (N6)
                    break;
            case "keydown":
            case "keyup":
                $d(h, n, f)
            }
            var F;
            if (Bh)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var O = "onCompositionStart";
                        break e;
                    case "compositionend":
                        O = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        O = "onCompositionUpdate";
                        break e
                    }
                    O = void 0
                }
            else
                ci ? Gg(t, n) && (O = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
            O && (jg && n.locale !== "ko" && (ci || O !== "onCompositionStart" ? O === "onCompositionEnd" && ci && (F = Hg()) : (Or = f,
            Th = "value"in Or ? Or.value : Or.textContent,
            ci = !0)),
            B = Fu(u, O),
            0 < B.length && (O = new Gd(O,t,null,n,f),
            h.push({
                event: O,
                listeners: B
            }),
            F ? O.data = F : (F = Vg(n),
            F !== null && (O.data = F)))),
            (F = g6 ? m6(t, n) : y6(t, n)) && (u = Fu(u, "onBeforeInput"),
            0 < u.length && (f = new Gd("onBeforeInput","beforeinput",null,n,f),
            h.push({
                event: f,
                listeners: u
            }),
            f.data = F))
        }
        nm(h, e)
    })
}
function Il(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Fu(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var s = t
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = bl(t, n),
        i != null && r.unshift(Il(t, i, s)),
        i = bl(t, e),
        i != null && r.push(Il(t, i, s))),
        t = t.return
    }
    return r
}
function ei(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function tp(t, e, n, r, s) {
    for (var i = e._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        s ? (a = bl(n, i),
        a != null && o.unshift(Il(n, a, l))) : s || (a = bl(n, i),
        a != null && o.push(Il(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var O6 = /\r\n?/g
  , B6 = /\u0000|\uFFFD/g;
function np(t) {
    return (typeof t == "string" ? t : "" + t).replace(O6, `
`).replace(B6, "")
}
function Ha(t, e, n) {
    if (e = np(e),
    np(t) !== e && n)
        throw Error(C(425))
}
function Du() {}
var h0 = null
  , d0 = null;
function p0(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var g0 = typeof setTimeout == "function" ? setTimeout : void 0
  , R6 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , rp = typeof Promise == "function" ? Promise : void 0
  , L6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rp < "u" ? function(t) {
    return rp.resolve(null).then(t).catch(U6)
}
: g0;
function U6(t) {
    setTimeout(function() {
        throw t
    })
}
function Af(t, e) {
    var n = e
      , r = 0;
    do {
        var s = n.nextSibling;
        if (t.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(s),
                    Cl(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Cl(e)
}
function Mr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function sp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Uo = Math.random().toString(36).slice(2)
  , An = "__reactFiber$" + Uo
  , Ol = "__reactProps$" + Uo
  , er = "__reactContainer$" + Uo
  , m0 = "__reactEvents$" + Uo
  , F6 = "__reactListeners$" + Uo
  , D6 = "__reactHandles$" + Uo;
function as(t) {
    var e = t[An];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[er] || n[An]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = sp(t); t !== null; ) {
                    if (n = t[An])
                        return n;
                    t = sp(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Aa(t) {
    return t = t[An] || t[er],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function di(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(C(33))
}
function Tc(t) {
    return t[Ol] || null
}
var y0 = []
  , pi = -1;
function Xr(t) {
    return {
        current: t
    }
}
function ie(t) {
    0 > pi || (t.current = y0[pi],
    y0[pi] = null,
    pi--)
}
function re(t, e) {
    pi++,
    y0[pi] = t.current,
    t.current = e
}
var Wr = {}
  , je = Xr(Wr)
  , lt = Xr(!1)
  , zs = Wr;
function bo(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return Wr;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = e[i];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function at(t) {
    return t = t.childContextTypes,
    t != null
}
function Mu() {
    ie(lt),
    ie(je)
}
function ip(t, e, n) {
    if (je.current !== Wr)
        throw Error(C(168));
    re(je, e),
    re(lt, n)
}
function sm(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in e))
            throw Error(C(108, xw(t) || "Unknown", s));
    return he({}, n, r)
}
function zu(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Wr,
    zs = je.current,
    re(je, t),
    re(lt, lt.current),
    !0
}
function op(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(C(169));
    n ? (t = sm(t, e, zs),
    r.__reactInternalMemoizedMergedChildContext = t,
    ie(lt),
    ie(je),
    re(je, t)) : ie(lt),
    re(lt, n)
}
var On = null
  , Ic = !1
  , vf = !1;
function im(t) {
    On === null ? On = [t] : On.push(t)
}
function M6(t) {
    Ic = !0,
    im(t)
}
function $r() {
    if (!vf && On !== null) {
        vf = !0;
        var t = 0
          , e = te;
        try {
            var n = On;
            for (te = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            On = null,
            Ic = !1
        } catch (s) {
            throw On !== null && (On = On.slice(t + 1)),
            Ig(kh, $r),
            s
        } finally {
            te = e,
            vf = !1
        }
    }
    return null
}
var gi = []
  , mi = 0
  , _u = null
  , Hu = 0
  , Lt = []
  , Ut = 0
  , _s = null
  , Kn = 1
  , Wn = "";
function ss(t, e) {
    gi[mi++] = Hu,
    gi[mi++] = _u,
    _u = t,
    Hu = e
}
function om(t, e, n) {
    Lt[Ut++] = Kn,
    Lt[Ut++] = Wn,
    Lt[Ut++] = _s,
    _s = t;
    var r = Kn;
    t = Wn;
    var s = 32 - tn(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - tn(e) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        Kn = 1 << 32 - tn(e) + s | n << s | r,
        Wn = i + t
    } else
        Kn = 1 << i | n << s | r,
        Wn = t
}
function Lh(t) {
    t.return !== null && (ss(t, 1),
    om(t, 1, 0))
}
function Uh(t) {
    for (; t === _u; )
        _u = gi[--mi],
        gi[mi] = null,
        Hu = gi[--mi],
        gi[mi] = null;
    for (; t === _s; )
        _s = Lt[--Ut],
        Lt[Ut] = null,
        Wn = Lt[--Ut],
        Lt[Ut] = null,
        Kn = Lt[--Ut],
        Lt[Ut] = null
}
var vt = null
  , yt = null
  , le = !1
  , $t = null;
function lm(t, e) {
    var n = Ft(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function lp(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        vt = t,
        yt = Mr(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        vt = t,
        yt = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = _s !== null ? {
            id: Kn,
            overflow: Wn
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ft(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        vt = t,
        yt = null,
        !0) : !1;
    default:
        return !1
    }
}
function w0(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function A0(t) {
    if (le) {
        var e = yt;
        if (e) {
            var n = e;
            if (!lp(t, e)) {
                if (w0(t))
                    throw Error(C(418));
                e = Mr(n.nextSibling);
                var r = vt;
                e && lp(t, e) ? lm(r, n) : (t.flags = t.flags & -4097 | 2,
                le = !1,
                vt = t)
            }
        } else {
            if (w0(t))
                throw Error(C(418));
            t.flags = t.flags & -4097 | 2,
            le = !1,
            vt = t
        }
    }
}
function ap(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    vt = t
}
function ja(t) {
    if (t !== vt)
        return !1;
    if (!le)
        return ap(t),
        le = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !p0(t.type, t.memoizedProps)),
    e && (e = yt)) {
        if (w0(t))
            throw am(),
            Error(C(418));
        for (; e; )
            lm(t, e),
            e = Mr(e.nextSibling)
    }
    if (ap(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(C(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            yt = Mr(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            yt = null
        }
    } else
        yt = vt ? Mr(t.stateNode.nextSibling) : null;
    return !0
}
function am() {
    for (var t = yt; t; )
        t = Mr(t.nextSibling)
}
function So() {
    yt = vt = null,
    le = !1
}
function Fh(t) {
    $t === null ? $t = [t] : $t.push(t)
}
var z6 = sr.ReactCurrentBatchConfig;
function Vt(t, e) {
    if (t && t.defaultProps) {
        e = he({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
var ju = Xr(null)
  , Gu = null
  , yi = null
  , Dh = null;
function Mh() {
    Dh = yi = Gu = null
}
function zh(t) {
    var e = ju.current;
    ie(ju),
    t._currentValue = e
}
function v0(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function Ii(t, e) {
    Gu = t,
    Dh = yi = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (ot = !0),
    t.firstContext = null)
}
function zt(t) {
    var e = t._currentValue;
    if (Dh !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        yi === null) {
            if (Gu === null)
                throw Error(C(308));
            yi = t,
            Gu.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            yi = yi.next = t;
    return e
}
var us = null;
function _h(t) {
    us === null ? us = [t] : us.push(t)
}
function um(t, e, n, r) {
    var s = e.interleaved;
    return s === null ? (n.next = n,
    _h(e)) : (n.next = s.next,
    s.next = n),
    e.interleaved = n,
    tr(t, r)
}
function tr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var hr = !1;
function Hh(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
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
function cm(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function Zn(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function zr(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var s = r.pending;
        return s === null ? e.next = e : (e.next = s.next,
        s.next = e),
        r.pending = e,
        tr(t, n)
    }
    return s = r.interleaved,
    s === null ? (e.next = e,
    _h(r)) : (e.next = s.next,
    s.next = e),
    r.interleaved = e,
    tr(t, n)
}
function du(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Ch(t, n)
    }
}
function up(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
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
                i === null ? s = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? s = i = e : i = i.next = e
        } else
            s = i = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function Vu(t, e, n, r) {
    var s = t.updateQueue;
    hr = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , l = s.shared.pending;
    if (l !== null) {
        s.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? i = u : o.next = u,
        o = a;
        var f = t.alternate;
        f !== null && (f = f.updateQueue,
        l = f.lastBaseUpdate,
        l !== o && (l === null ? f.firstBaseUpdate = u : l.next = u,
        f.lastBaseUpdate = a))
    }
    if (i !== null) {
        var h = s.baseState;
        o = 0,
        f = u = a = null,
        l = i;
        do {
            var d = l.lane
              , g = l.eventTime;
            if ((r & d) === d) {
                f !== null && (f = f.next = {
                    eventTime: g,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var A = t
                      , x = l;
                    switch (d = e,
                    g = n,
                    x.tag) {
                    case 1:
                        if (A = x.payload,
                        typeof A == "function") {
                            h = A.call(g, h, d);
                            break e
                        }
                        h = A;
                        break e;
                    case 3:
                        A.flags = A.flags & -65537 | 128;
                    case 0:
                        if (A = x.payload,
                        d = typeof A == "function" ? A.call(g, h, d) : A,
                        d == null)
                            break e;
                        h = he({}, h, d);
                        break e;
                    case 2:
                        hr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64,
                d = s.effects,
                d === null ? s.effects = [l] : d.push(l))
            } else
                g = {
                    eventTime: g,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                f === null ? (u = f = g,
                a = h) : f = f.next = g,
                o |= d;
            if (l = l.next,
            l === null) {
                if (l = s.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                s.lastBaseUpdate = d,
                s.shared.pending = null
            }
        } while (1);
        if (f === null && (a = h),
        s.baseState = a,
        s.firstBaseUpdate = u,
        s.lastBaseUpdate = f,
        e = s.shared.interleaved,
        e !== null) {
            s = e;
            do
                o |= s.lane,
                s = s.next;
            while (s !== e)
        } else
            i === null && (s.shared.lanes = 0);
        js |= o,
        t.lanes = o,
        t.memoizedState = h
    }
}
function cp(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(C(191, s));
                s.call(r)
            }
        }
}
var fm = new ug.Component().refs;
function x0(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : he({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Oc = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? Xs(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = Ye()
          , s = Hr(t)
          , i = Zn(r, s);
        i.payload = e,
        n != null && (i.callback = n),
        e = zr(t, i, s),
        e !== null && (nn(e, t, s, r),
        du(e, t, s))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = Ye()
          , s = Hr(t)
          , i = Zn(r, s);
        i.tag = 1,
        i.payload = e,
        n != null && (i.callback = n),
        e = zr(t, i, s),
        e !== null && (nn(e, t, s, r),
        du(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = Ye()
          , r = Hr(t)
          , s = Zn(n, r);
        s.tag = 2,
        e != null && (s.callback = e),
        e = zr(t, s, r),
        e !== null && (nn(e, t, r, n),
        du(e, t, r))
    }
};
function fp(t, e, n, r, s, i, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !Pl(n, r) || !Pl(s, i) : !0
}
function hm(t, e, n) {
    var r = !1
      , s = Wr
      , i = e.contextType;
    return typeof i == "object" && i !== null ? i = zt(i) : (s = at(e) ? zs : je.current,
    r = e.contextTypes,
    i = (r = r != null) ? bo(t, s) : Wr),
    e = new e(n,i),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = Oc,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = s,
    t.__reactInternalMemoizedMaskedChildContext = i),
    e
}
function hp(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Oc.enqueueReplaceState(e, e.state, null)
}
function E0(t, e, n, r) {
    var s = t.stateNode;
    s.props = n,
    s.state = t.memoizedState,
    s.refs = fm,
    Hh(t);
    var i = e.contextType;
    typeof i == "object" && i !== null ? s.context = zt(i) : (i = at(e) ? zs : je.current,
    s.context = bo(t, i)),
    s.state = t.memoizedState,
    i = e.getDerivedStateFromProps,
    typeof i == "function" && (x0(t, e, i, n),
    s.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    e !== s.state && Oc.enqueueReplaceState(s, s.state, null),
    Vu(t, n, s, r),
    s.state = t.memoizedState),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}
function Go(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(C(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(C(147, t));
            var s = r
              , i = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(o) {
                var l = s.refs;
                l === fm && (l = s.refs = {}),
                o === null ? delete l[i] : l[i] = o
            }
            ,
            e._stringRef = i,
            e)
        }
        if (typeof t != "string")
            throw Error(C(284));
        if (!n._owner)
            throw Error(C(290, t))
    }
    return t
}
function Ga(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(C(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function dp(t) {
    var e = t._init;
    return e(t._payload)
}
function dm(t) {
    function e(y, p) {
        if (t) {
            var w = y.deletions;
            w === null ? (y.deletions = [p],
            y.flags |= 16) : w.push(p)
        }
    }
    function n(y, p) {
        if (!t)
            return null;
        for (; p !== null; )
            e(y, p),
            p = p.sibling;
        return null
    }
    function r(y, p) {
        for (y = new Map; p !== null; )
            p.key !== null ? y.set(p.key, p) : y.set(p.index, p),
            p = p.sibling;
        return y
    }
    function s(y, p) {
        return y = jr(y, p),
        y.index = 0,
        y.sibling = null,
        y
    }
    function i(y, p, w) {
        return y.index = w,
        t ? (w = y.alternate,
        w !== null ? (w = w.index,
        w < p ? (y.flags |= 2,
        p) : w) : (y.flags |= 2,
        p)) : (y.flags |= 1048576,
        p)
    }
    function o(y) {
        return t && y.alternate === null && (y.flags |= 2),
        y
    }
    function l(y, p, w, S) {
        return p === null || p.tag !== 6 ? (p = Nf(w, y.mode, S),
        p.return = y,
        p) : (p = s(p, w),
        p.return = y,
        p)
    }
    function a(y, p, w, S) {
        var P = w.type;
        return P === ui ? f(y, p, w.props.children, S, w.key) : p !== null && (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === fr && dp(P) === p.type) ? (S = s(p, w.props),
        S.ref = Go(y, p, w),
        S.return = y,
        S) : (S = Au(w.type, w.key, w.props, null, y.mode, S),
        S.ref = Go(y, p, w),
        S.return = y,
        S)
    }
    function u(y, p, w, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== w.containerInfo || p.stateNode.implementation !== w.implementation ? (p = Pf(w, y.mode, S),
        p.return = y,
        p) : (p = s(p, w.children || []),
        p.return = y,
        p)
    }
    function f(y, p, w, S, P) {
        return p === null || p.tag !== 7 ? (p = Fs(w, y.mode, S, P),
        p.return = y,
        p) : (p = s(p, w),
        p.return = y,
        p)
    }
    function h(y, p, w) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Nf("" + p, y.mode, w),
            p.return = y,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ba:
                return w = Au(p.type, p.key, p.props, null, y.mode, w),
                w.ref = Go(y, null, p),
                w.return = y,
                w;
            case ai:
                return p = Pf(p, y.mode, w),
                p.return = y,
                p;
            case fr:
                var S = p._init;
                return h(y, S(p._payload), w)
            }
            if (Zo(p) || Mo(p))
                return p = Fs(p, y.mode, w, null),
                p.return = y,
                p;
            Ga(y, p)
        }
        return null
    }
    function d(y, p, w, S) {
        var P = p !== null ? p.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return P !== null ? null : l(y, p, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Ba:
                return w.key === P ? a(y, p, w, S) : null;
            case ai:
                return w.key === P ? u(y, p, w, S) : null;
            case fr:
                return P = w._init,
                d(y, p, P(w._payload), S)
            }
            if (Zo(w) || Mo(w))
                return P !== null ? null : f(y, p, w, S, null);
            Ga(y, w)
        }
        return null
    }
    function g(y, p, w, S, P) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return y = y.get(w) || null,
            l(p, y, "" + S, P);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ba:
                return y = y.get(S.key === null ? w : S.key) || null,
                a(p, y, S, P);
            case ai:
                return y = y.get(S.key === null ? w : S.key) || null,
                u(p, y, S, P);
            case fr:
                var B = S._init;
                return g(y, p, w, B(S._payload), P)
            }
            if (Zo(S) || Mo(S))
                return y = y.get(w) || null,
                f(p, y, S, P, null);
            Ga(p, S)
        }
        return null
    }
    function A(y, p, w, S) {
        for (var P = null, B = null, F = p, O = p = 0, V = null; F !== null && O < w.length; O++) {
            F.index > O ? (V = F,
            F = null) : V = F.sibling;
            var j = d(y, F, w[O], S);
            if (j === null) {
                F === null && (F = V);
                break
            }
            t && F && j.alternate === null && e(y, F),
            p = i(j, p, O),
            B === null ? P = j : B.sibling = j,
            B = j,
            F = V
        }
        if (O === w.length)
            return n(y, F),
            le && ss(y, O),
            P;
        if (F === null) {
            for (; O < w.length; O++)
                F = h(y, w[O], S),
                F !== null && (p = i(F, p, O),
                B === null ? P = F : B.sibling = F,
                B = F);
            return le && ss(y, O),
            P
        }
        for (F = r(y, F); O < w.length; O++)
            V = g(F, y, O, w[O], S),
            V !== null && (t && V.alternate !== null && F.delete(V.key === null ? O : V.key),
            p = i(V, p, O),
            B === null ? P = V : B.sibling = V,
            B = V);
        return t && F.forEach(function(Ge) {
            return e(y, Ge)
        }),
        le && ss(y, O),
        P
    }
    function x(y, p, w, S) {
        var P = Mo(w);
        if (typeof P != "function")
            throw Error(C(150));
        if (w = P.call(w),
        w == null)
            throw Error(C(151));
        for (var B = P = null, F = p, O = p = 0, V = null, j = w.next(); F !== null && !j.done; O++,
        j = w.next()) {
            F.index > O ? (V = F,
            F = null) : V = F.sibling;
            var Ge = d(y, F, j.value, S);
            if (Ge === null) {
                F === null && (F = V);
                break
            }
            t && F && Ge.alternate === null && e(y, F),
            p = i(Ge, p, O),
            B === null ? P = Ge : B.sibling = Ge,
            B = Ge,
            F = V
        }
        if (j.done)
            return n(y, F),
            le && ss(y, O),
            P;
        if (F === null) {
            for (; !j.done; O++,
            j = w.next())
                j = h(y, j.value, S),
                j !== null && (p = i(j, p, O),
                B === null ? P = j : B.sibling = j,
                B = j);
            return le && ss(y, O),
            P
        }
        for (F = r(y, F); !j.done; O++,
        j = w.next())
            j = g(F, y, O, j.value, S),
            j !== null && (t && j.alternate !== null && F.delete(j.key === null ? O : j.key),
            p = i(j, p, O),
            B === null ? P = j : B.sibling = j,
            B = j);
        return t && F.forEach(function(an) {
            return e(y, an)
        }),
        le && ss(y, O),
        P
    }
    function N(y, p, w, S) {
        if (typeof w == "object" && w !== null && w.type === ui && w.key === null && (w = w.props.children),
        typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Ba:
                e: {
                    for (var P = w.key, B = p; B !== null; ) {
                        if (B.key === P) {
                            if (P = w.type,
                            P === ui) {
                                if (B.tag === 7) {
                                    n(y, B.sibling),
                                    p = s(B, w.props.children),
                                    p.return = y,
                                    y = p;
                                    break e
                                }
                            } else if (B.elementType === P || typeof P == "object" && P !== null && P.$$typeof === fr && dp(P) === B.type) {
                                n(y, B.sibling),
                                p = s(B, w.props),
                                p.ref = Go(y, B, w),
                                p.return = y,
                                y = p;
                                break e
                            }
                            n(y, B);
                            break
                        } else
                            e(y, B);
                        B = B.sibling
                    }
                    w.type === ui ? (p = Fs(w.props.children, y.mode, S, w.key),
                    p.return = y,
                    y = p) : (S = Au(w.type, w.key, w.props, null, y.mode, S),
                    S.ref = Go(y, p, w),
                    S.return = y,
                    y = S)
                }
                return o(y);
            case ai:
                e: {
                    for (B = w.key; p !== null; ) {
                        if (p.key === B)
                            if (p.tag === 4 && p.stateNode.containerInfo === w.containerInfo && p.stateNode.implementation === w.implementation) {
                                n(y, p.sibling),
                                p = s(p, w.children || []),
                                p.return = y,
                                y = p;
                                break e
                            } else {
                                n(y, p);
                                break
                            }
                        else
                            e(y, p);
                        p = p.sibling
                    }
                    p = Pf(w, y.mode, S),
                    p.return = y,
                    y = p
                }
                return o(y);
            case fr:
                return B = w._init,
                N(y, p, B(w._payload), S)
            }
            if (Zo(w))
                return A(y, p, w, S);
            if (Mo(w))
                return x(y, p, w, S);
            Ga(y, w)
        }
        return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
        p !== null && p.tag === 6 ? (n(y, p.sibling),
        p = s(p, w),
        p.return = y,
        y = p) : (n(y, p),
        p = Nf(w, y.mode, S),
        p.return = y,
        y = p),
        o(y)) : n(y, p)
    }
    return N
}
var ko = dm(!0)
  , pm = dm(!1)
  , va = {}
  , Sn = Xr(va)
  , Bl = Xr(va)
  , Rl = Xr(va);
function cs(t) {
    if (t === va)
        throw Error(C(174));
    return t
}
function jh(t, e) {
    switch (re(Rl, e),
    re(Bl, t),
    re(Sn, va),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : e0(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = e0(e, t)
    }
    ie(Sn),
    re(Sn, e)
}
function Co() {
    ie(Sn),
    ie(Bl),
    ie(Rl)
}
function gm(t) {
    cs(Rl.current);
    var e = cs(Sn.current)
      , n = e0(e, t.type);
    e !== n && (re(Bl, t),
    re(Sn, n))
}
function Gh(t) {
    Bl.current === t && (ie(Sn),
    ie(Bl))
}
var ae = Xr(0);
function Qu(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var xf = [];
function Vh() {
    for (var t = 0; t < xf.length; t++)
        xf[t]._workInProgressVersionPrimary = null;
    xf.length = 0
}
var pu = sr.ReactCurrentDispatcher
  , Ef = sr.ReactCurrentBatchConfig
  , Hs = 0
  , fe = null
  , Ee = null
  , Ce = null
  , Ku = !1
  , cl = !1
  , Ll = 0
  , _6 = 0;
function Le() {
    throw Error(C(321))
}
function Qh(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!rn(t[n], e[n]))
            return !1;
    return !0
}
function Kh(t, e, n, r, s, i) {
    if (Hs = i,
    fe = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    pu.current = t === null || t.memoizedState === null ? V6 : Q6,
    t = n(r, s),
    cl) {
        i = 0;
        do {
            if (cl = !1,
            Ll = 0,
            25 <= i)
                throw Error(C(301));
            i += 1,
            Ce = Ee = null,
            e.updateQueue = null,
            pu.current = K6,
            t = n(r, s)
        } while (cl)
    }
    if (pu.current = Wu,
    e = Ee !== null && Ee.next !== null,
    Hs = 0,
    Ce = Ee = fe = null,
    Ku = !1,
    e)
        throw Error(C(300));
    return t
}
function Wh() {
    var t = Ll !== 0;
    return Ll = 0,
    t
}
function fn() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? fe.memoizedState = Ce = t : Ce = Ce.next = t,
    Ce
}
function _t() {
    if (Ee === null) {
        var t = fe.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = Ee.next;
    var e = Ce === null ? fe.memoizedState : Ce.next;
    if (e !== null)
        Ce = e,
        Ee = t;
    else {
        if (t === null)
            throw Error(C(310));
        Ee = t,
        t = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
        },
        Ce === null ? fe.memoizedState = Ce = t : Ce = Ce.next = t
    }
    return Ce
}
function Ul(t, e) {
    return typeof e == "function" ? e(t) : e
}
function bf(t) {
    var e = _t()
      , n = e.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = t;
    var r = Ee
      , s = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        r.baseQueue = s = i,
        n.pending = null
    }
    if (s !== null) {
        i = s.next,
        r = r.baseState;
        var l = o = null
          , a = null
          , u = i;
        do {
            var f = u.lane;
            if ((Hs & f) === f)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var h = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = h,
                o = r) : a = a.next = h,
                fe.lanes |= f,
                js |= f
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? o = r : a.next = l,
        rn(r, e.memoizedState) || (ot = !0),
        e.memoizedState = r,
        e.baseState = o,
        e.baseQueue = a,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        s = t;
        do
            i = s.lane,
            fe.lanes |= i,
            js |= i,
            s = s.next;
        while (s !== t)
    } else
        s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Sf(t) {
    var e = _t()
      , n = e.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , s = n.pending
      , i = e.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = t(i, o.action),
            o = o.next;
        while (o !== s);
        rn(i, e.memoizedState) || (ot = !0),
        e.memoizedState = i,
        e.baseQueue === null && (e.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function mm() {}
function ym(t, e) {
    var n = fe
      , r = _t()
      , s = e()
      , i = !rn(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    ot = !0),
    r = r.queue,
    Jh(vm.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || Ce !== null && Ce.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Fl(9, Am.bind(null, n, r, s, e), void 0, null),
        Ne === null)
            throw Error(C(349));
        Hs & 30 || wm(n, e, s)
    }
    return s
}
function wm(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = fe.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function Am(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    xm(e) && Em(t)
}
function vm(t, e, n) {
    return n(function() {
        xm(e) && Em(t)
    })
}
function xm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !rn(t, n)
    } catch {
        return !0
    }
}
function Em(t) {
    var e = tr(t, 1);
    e !== null && nn(e, t, 1, -1)
}
function pp(t) {
    var e = fn();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ul,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = G6.bind(null, fe, t),
    [e.memoizedState, t]
}
function Fl(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = fe.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function bm() {
    return _t().memoizedState
}
function gu(t, e, n, r) {
    var s = fn();
    fe.flags |= t,
    s.memoizedState = Fl(1 | e, n, void 0, r === void 0 ? null : r)
}
function Bc(t, e, n, r) {
    var s = _t();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ee !== null) {
        var o = Ee.memoizedState;
        if (i = o.destroy,
        r !== null && Qh(r, o.deps)) {
            s.memoizedState = Fl(e, n, i, r);
            return
        }
    }
    fe.flags |= t,
    s.memoizedState = Fl(1 | e, n, i, r)
}
function gp(t, e) {
    return gu(8390656, 8, t, e)
}
function Jh(t, e) {
    return Bc(2048, 8, t, e)
}
function Sm(t, e) {
    return Bc(4, 2, t, e)
}
function km(t, e) {
    return Bc(4, 4, t, e)
}
function Cm(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function Nm(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    Bc(4, 4, Cm.bind(null, e, t), n)
}
function Yh() {}
function Pm(t, e) {
    var n = _t();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Qh(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Tm(t, e) {
    var n = _t();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Qh(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Im(t, e, n) {
    return Hs & 21 ? (rn(n, e) || (n = Rg(),
    fe.lanes |= n,
    js |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    ot = !0),
    t.memoizedState = n)
}
function H6(t, e) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = Ef.transition;
    Ef.transition = {};
    try {
        t(!1),
        e()
    } finally {
        te = n,
        Ef.transition = r
    }
}
function Om() {
    return _t().memoizedState
}
function j6(t, e, n) {
    var r = Hr(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Bm(t))
        Rm(e, n);
    else if (n = um(t, e, n, r),
    n !== null) {
        var s = Ye();
        nn(n, t, r, s),
        Lm(n, e, r)
    }
}
function G6(t, e, n) {
    var r = Hr(t)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Bm(t))
        Rm(e, s);
    else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer,
        i !== null))
            try {
                var o = e.lastRenderedState
                  , l = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = l,
                rn(l, o)) {
                    var a = e.interleaved;
                    a === null ? (s.next = s,
                    _h(e)) : (s.next = a.next,
                    a.next = s),
                    e.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = um(t, e, s, r),
        n !== null && (s = Ye(),
        nn(n, t, r, s),
        Lm(n, e, r))
    }
}
function Bm(t) {
    var e = t.alternate;
    return t === fe || e !== null && e === fe
}
function Rm(t, e) {
    cl = Ku = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Lm(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        Ch(t, n)
    }
}
var Wu = {
    readContext: zt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1
}
  , V6 = {
    readContext: zt,
    useCallback: function(t, e) {
        return fn().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: zt,
    useEffect: gp,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        gu(4194308, 4, Cm.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return gu(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return gu(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = fn();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = fn();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = j6.bind(null, fe, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = fn();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: pp,
    useDebugValue: Yh,
    useDeferredValue: function(t) {
        return fn().memoizedState = t
    },
    useTransition: function() {
        var t = pp(!1)
          , e = t[0];
        return t = H6.bind(null, t[1]),
        fn().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = fe
          , s = fn();
        if (le) {
            if (n === void 0)
                throw Error(C(407));
            n = n()
        } else {
            if (n = e(),
            Ne === null)
                throw Error(C(349));
            Hs & 30 || wm(r, e, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: e
        };
        return s.queue = i,
        gp(vm.bind(null, r, i, t), [t]),
        r.flags |= 2048,
        Fl(9, Am.bind(null, r, i, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = fn()
          , e = Ne.identifierPrefix;
        if (le) {
            var n = Wn
              , r = Kn;
            n = (r & ~(1 << 32 - tn(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = Ll++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = _6++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , Q6 = {
    readContext: zt,
    useCallback: Pm,
    useContext: zt,
    useEffect: Jh,
    useImperativeHandle: Nm,
    useInsertionEffect: Sm,
    useLayoutEffect: km,
    useMemo: Tm,
    useReducer: bf,
    useRef: bm,
    useState: function() {
        return bf(Ul)
    },
    useDebugValue: Yh,
    useDeferredValue: function(t) {
        var e = _t();
        return Im(e, Ee.memoizedState, t)
    },
    useTransition: function() {
        var t = bf(Ul)[0]
          , e = _t().memoizedState;
        return [t, e]
    },
    useMutableSource: mm,
    useSyncExternalStore: ym,
    useId: Om,
    unstable_isNewReconciler: !1
}
  , K6 = {
    readContext: zt,
    useCallback: Pm,
    useContext: zt,
    useEffect: Jh,
    useImperativeHandle: Nm,
    useInsertionEffect: Sm,
    useLayoutEffect: km,
    useMemo: Tm,
    useReducer: Sf,
    useRef: bm,
    useState: function() {
        return Sf(Ul)
    },
    useDebugValue: Yh,
    useDeferredValue: function(t) {
        var e = _t();
        return Ee === null ? e.memoizedState = t : Im(e, Ee.memoizedState, t)
    },
    useTransition: function() {
        var t = Sf(Ul)[0]
          , e = _t().memoizedState;
        return [t, e]
    },
    useMutableSource: mm,
    useSyncExternalStore: ym,
    useId: Om,
    unstable_isNewReconciler: !1
};
function No(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += vw(r),
            r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: t,
        source: e,
        stack: s,
        digest: null
    }
}
function kf(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function b0(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var W6 = typeof WeakMap == "function" ? WeakMap : Map;
function Um(t, e, n) {
    n = Zn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        Yu || (Yu = !0,
        R0 = r),
        b0(t, e)
    }
    ,
    n
}
function Fm(t, e, n) {
    n = Zn(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = e.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            b0(t, e)
        }
    }
    var i = t.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        b0(t, e),
        typeof r != "function" && (_r === null ? _r = new Set([this]) : _r.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function mp(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new W6;
        var s = new Set;
        r.set(e, s)
    } else
        s = r.get(e),
        s === void 0 && (s = new Set,
        r.set(e, s));
    s.has(n) || (s.add(n),
    t = l2.bind(null, t, e, n),
    e.then(t, t))
}
function yp(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function wp(t, e, n, r, s) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = s,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Zn(-1, 1),
    e.tag = 2,
    zr(n, e, 1))),
    n.lanes |= 1),
    t)
}
var J6 = sr.ReactCurrentOwner
  , ot = !1;
function Qe(t, e, n, r) {
    e.child = t === null ? pm(e, null, n, r) : ko(e, t.child, n, r)
}
function Ap(t, e, n, r, s) {
    n = n.render;
    var i = e.ref;
    return Ii(e, s),
    r = Kh(t, e, n, r, i, s),
    n = Wh(),
    t !== null && !ot ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    nr(t, e, s)) : (le && n && Lh(e),
    e.flags |= 1,
    Qe(t, e, r, s),
    e.child)
}
function vp(t, e, n, r, s) {
    if (t === null) {
        var i = n.type;
        return typeof i == "function" && !rd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = i,
        Dm(t, e, i, r, s)) : (t = Au(n.type, null, r, e, e.mode, s),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (i = t.child,
    !(t.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Pl,
        n(o, r) && t.ref === e.ref)
            return nr(t, e, s)
    }
    return e.flags |= 1,
    t = jr(i, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Dm(t, e, n, r, s) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (Pl(i, r) && t.ref === e.ref)
            if (ot = !1,
            e.pendingProps = r = i,
            (t.lanes & s) !== 0)
                t.flags & 131072 && (ot = !0);
            else
                return e.lanes = t.lanes,
                nr(t, e, s)
    }
    return S0(t, e, n, r, s)
}
function Mm(t, e, n) {
    var r = e.pendingProps
      , s = r.children
      , i = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(Ai, gt),
            gt |= n;
        else {
            if (!(n & 1073741824))
                return t = i !== null ? i.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                re(Ai, gt),
                gt |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            re(Ai, gt),
            gt |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        e.memoizedState = null) : r = n,
        re(Ai, gt),
        gt |= r;
    return Qe(t, e, s, n),
    e.child
}
function zm(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function S0(t, e, n, r, s) {
    var i = at(n) ? zs : je.current;
    return i = bo(e, i),
    Ii(e, s),
    n = Kh(t, e, n, r, i, s),
    r = Wh(),
    t !== null && !ot ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~s,
    nr(t, e, s)) : (le && r && Lh(e),
    e.flags |= 1,
    Qe(t, e, n, s),
    e.child)
}
function xp(t, e, n, r, s) {
    if (at(n)) {
        var i = !0;
        zu(e)
    } else
        i = !1;
    if (Ii(e, s),
    e.stateNode === null)
        mu(t, e),
        hm(e, n, r),
        E0(e, n, r, s),
        r = !0;
    else if (t === null) {
        var o = e.stateNode
          , l = e.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = zt(u) : (u = at(n) ? zs : je.current,
        u = bo(e, u));
        var f = n.getDerivedStateFromProps
          , h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && hp(e, o, r, u),
        hr = !1;
        var d = e.memoizedState;
        o.state = d,
        Vu(e, r, o, s),
        a = e.memoizedState,
        l !== r || d !== a || lt.current || hr ? (typeof f == "function" && (x0(e, n, f, r),
        a = e.memoizedState),
        (l = hr || fp(e, n, l, r, d, a, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = u,
        r = l) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        o = e.stateNode,
        cm(t, e),
        l = e.memoizedProps,
        u = e.type === e.elementType ? l : Vt(e.type, l),
        o.props = u,
        h = e.pendingProps,
        d = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = zt(a) : (a = at(n) ? zs : je.current,
        a = bo(e, a));
        var g = n.getDerivedStateFromProps;
        (f = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || d !== a) && hp(e, o, r, a),
        hr = !1,
        d = e.memoizedState,
        o.state = d,
        Vu(e, r, o, s);
        var A = e.memoizedState;
        l !== h || d !== A || lt.current || hr ? (typeof g == "function" && (x0(e, n, g, r),
        A = e.memoizedState),
        (u = hr || fp(e, n, u, r, d, A, a) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, A, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, A, a)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = A),
        o.props = r,
        o.state = A,
        o.context = a,
        r = u) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return k0(t, e, n, r, i, s)
}
function k0(t, e, n, r, s, i) {
    zm(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o)
        return s && op(e, n, !1),
        nr(t, e, i);
    r = e.stateNode,
    J6.current = e;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = ko(e, t.child, null, i),
    e.child = ko(e, null, l, i)) : Qe(t, e, l, i),
    e.memoizedState = r.state,
    s && op(e, n, !0),
    e.child
}
function _m(t) {
    var e = t.stateNode;
    e.pendingContext ? ip(t, e.pendingContext, e.pendingContext !== e.context) : e.context && ip(t, e.context, !1),
    jh(t, e.containerInfo)
}
function Ep(t, e, n, r, s) {
    return So(),
    Fh(s),
    e.flags |= 256,
    Qe(t, e, n, r),
    e.child
}
var C0 = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function N0(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Hm(t, e, n) {
    var r = e.pendingProps, s = ae.current, i = !1, o = (e.flags & 128) !== 0, l;
    if ((l = o) || (l = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    l ? (i = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1),
    re(ae, s & 1),
    t === null)
        return A0(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = r.children,
        t = r.fallback,
        i ? (r = e.mode,
        i = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = Uc(o, r, 0, null),
        t = Fs(t, r, n, null),
        i.return = e,
        t.return = e,
        i.sibling = t,
        e.child = i,
        e.child.memoizedState = N0(n),
        e.memoizedState = C0,
        t) : Zh(e, o));
    if (s = t.memoizedState,
    s !== null && (l = s.dehydrated,
    l !== null))
        return Y6(t, e, o, r, l, s, n);
    if (i) {
        i = r.fallback,
        o = e.mode,
        s = t.child,
        l = s.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && e.child !== s ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = a,
        e.deletions = null) : (r = jr(s, a),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        l !== null ? i = jr(l, i) : (i = Fs(i, o, n, null),
        i.flags |= 2),
        i.return = e,
        r.return = e,
        r.sibling = i,
        e.child = r,
        r = i,
        i = e.child,
        o = t.child.memoizedState,
        o = o === null ? N0(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = t.childLanes & ~n,
        e.memoizedState = C0,
        r
    }
    return i = t.child,
    t = i.sibling,
    r = jr(i, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function Zh(t, e) {
    return e = Uc({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function Va(t, e, n, r) {
    return r !== null && Fh(r),
    ko(e, t.child, null, n),
    t = Zh(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Y6(t, e, n, r, s, i, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = kf(Error(C(422))),
        Va(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (i = r.fallback,
        s = e.mode,
        r = Uc({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = Fs(i, s, o, null),
        i.flags |= 2,
        r.return = e,
        i.return = e,
        r.sibling = i,
        e.child = r,
        e.mode & 1 && ko(e, t.child, null, o),
        e.child.memoizedState = N0(o),
        e.memoizedState = C0,
        i);
    if (!(e.mode & 1))
        return Va(t, e, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(C(419)),
        r = kf(i, r, void 0),
        Va(t, e, o, r)
    }
    if (l = (o & t.childLanes) !== 0,
    ot || l) {
        if (r = Ne,
        r !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
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
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            tr(t, s),
            nn(r, t, s, -1))
        }
        return nd(),
        r = kf(Error(C(421))),
        Va(t, e, o, r)
    }
    return s.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = a2.bind(null, t),
    s._reactRetry = e,
    null) : (t = i.treeContext,
    yt = Mr(s.nextSibling),
    vt = e,
    le = !0,
    $t = null,
    t !== null && (Lt[Ut++] = Kn,
    Lt[Ut++] = Wn,
    Lt[Ut++] = _s,
    Kn = t.id,
    Wn = t.overflow,
    _s = e),
    e = Zh(e, r.children),
    e.flags |= 4096,
    e)
}
function bp(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    v0(t.return, e, n)
}
function Cf(t, e, n, r, s) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = e,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = s)
}
function jm(t, e, n) {
    var r = e.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (Qe(t, e, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && bp(t, n, e);
                else if (t.tag === 19)
                    bp(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if (re(ae, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && Qu(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            Cf(e, !1, s, n, i);
            break;
        case "backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && Qu(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            Cf(e, !0, n, null, i);
            break;
        case "together":
            Cf(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function mu(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function nr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    js |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(C(153));
    if (e.child !== null) {
        for (t = e.child,
        n = jr(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = jr(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function Z6(t, e, n) {
    switch (e.tag) {
    case 3:
        _m(e),
        So();
        break;
    case 5:
        gm(e);
        break;
    case 1:
        at(e.type) && zu(e);
        break;
    case 4:
        jh(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , s = e.memoizedProps.value;
        re(ju, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (re(ae, ae.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Hm(t, e, n) : (re(ae, ae.current & 1),
            t = nr(t, e, n),
            t !== null ? t.sibling : null);
        re(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return jm(t, e, n);
            e.flags |= 128
        }
        if (s = e.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        re(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Mm(t, e, n)
    }
    return nr(t, e, n)
}
var Gm, P0, Vm, Qm;
Gm = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
P0 = function() {}
;
Vm = function(t, e, n, r) {
    var s = t.memoizedProps;
    if (s !== r) {
        t = e.stateNode,
        cs(Sn.current);
        var i = null;
        switch (n) {
        case "input":
            s = Zf(t, s),
            r = Zf(t, r),
            i = [];
            break;
        case "select":
            s = he({}, s, {
                value: void 0
            }),
            r = he({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = qf(t, s),
            r = qf(t, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Du)
        }
        t0(n, r);
        var o;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var l = s[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = s != null ? s[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xl.hasOwnProperty(u) ? (a != null && u === "onScroll" && se("scroll", t),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
Qm = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function Vo(t, e) {
    if (!le)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function Ue(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var s = t.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = t,
            s = s.sibling;
    else
        for (s = t.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = t,
            s = s.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function X6(t, e, n) {
    var r = e.pendingProps;
    switch (Uh(e),
    e.tag) {
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
        return Ue(e),
        null;
    case 1:
        return at(e.type) && Mu(),
        Ue(e),
        null;
    case 3:
        return r = e.stateNode,
        Co(),
        ie(lt),
        ie(je),
        Vh(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (ja(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        $t !== null && (F0($t),
        $t = null))),
        P0(t, e),
        Ue(e),
        null;
    case 5:
        Gh(e);
        var s = cs(Rl.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            Vm(t, e, n, r, s),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(C(166));
                return Ue(e),
                null
            }
            if (t = cs(Sn.current),
            ja(e)) {
                r = e.stateNode,
                n = e.type;
                var i = e.memoizedProps;
                switch (r[An] = e,
                r[Ol] = i,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    se("cancel", r),
                    se("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    se("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < $o.length; s++)
                        se($o[s], r);
                    break;
                case "source":
                    se("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    se("error", r),
                    se("load", r);
                    break;
                case "details":
                    se("toggle", r);
                    break;
                case "input":
                    Bd(r, i),
                    se("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    se("invalid", r);
                    break;
                case "textarea":
                    Ld(r, i),
                    se("invalid", r)
                }
                t0(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var l = i[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ha(r.textContent, l, t),
                        s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ha(r.textContent, l, t),
                        s = ["children", "" + l]) : xl.hasOwnProperty(o) && l != null && o === "onScroll" && se("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ra(r),
                    Rd(r, i, !0);
                    break;
                case "textarea":
                    Ra(r),
                    Ud(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Du)
                }
                r = s,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = wg(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                    is: r.is
                }) : (t = o.createElement(n),
                n === "select" && (o = t,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n),
                t[An] = e,
                t[Ol] = r,
                Gm(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = n0(n, r),
                    n) {
                    case "dialog":
                        se("cancel", t),
                        se("close", t),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        se("load", t),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < $o.length; s++)
                            se($o[s], t);
                        s = r;
                        break;
                    case "source":
                        se("error", t),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        se("error", t),
                        se("load", t),
                        s = r;
                        break;
                    case "details":
                        se("toggle", t),
                        s = r;
                        break;
                    case "input":
                        Bd(t, r),
                        s = Zf(t, r),
                        se("invalid", t);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = he({}, r, {
                            value: void 0
                        }),
                        se("invalid", t);
                        break;
                    case "textarea":
                        Ld(t, r),
                        s = qf(t, r),
                        se("invalid", t);
                        break;
                    default:
                        s = r
                    }
                    t0(n, s),
                    l = s;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? xg(t, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Ag(t, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && El(t, a) : typeof a == "number" && El(t, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (xl.hasOwnProperty(i) ? a != null && i === "onScroll" && se("scroll", t) : a != null && vh(t, i, a, o))
                        }
                    switch (n) {
                    case "input":
                        Ra(t),
                        Rd(t, r, !1);
                        break;
                    case "textarea":
                        Ra(t),
                        Ud(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + Kr(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Ci(t, !!r.multiple, i, !1) : r.defaultValue != null && Ci(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (t.onclick = Du)
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
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return Ue(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Qm(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(C(166));
            if (n = cs(Rl.current),
            cs(Sn.current),
            ja(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[An] = e,
                (i = r.nodeValue !== n) && (t = vt,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        Ha(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && Ha(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                i && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[An] = e,
                e.stateNode = r
        }
        return Ue(e),
        null;
    case 13:
        if (ie(ae),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (le && yt !== null && e.mode & 1 && !(e.flags & 128))
                am(),
                So(),
                e.flags |= 98560,
                i = !1;
            else if (i = ja(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!i)
                        throw Error(C(318));
                    if (i = e.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(C(317));
                    i[An] = e
                } else
                    So(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                Ue(e),
                i = !1
            } else
                $t !== null && (F0($t),
                $t = null),
                i = !0;
            if (!i)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || ae.current & 1 ? be === 0 && (be = 3) : nd())),
        e.updateQueue !== null && (e.flags |= 4),
        Ue(e),
        null);
    case 4:
        return Co(),
        P0(t, e),
        t === null && Tl(e.stateNode.containerInfo),
        Ue(e),
        null;
    case 10:
        return zh(e.type._context),
        Ue(e),
        null;
    case 17:
        return at(e.type) && Mu(),
        Ue(e),
        null;
    case 19:
        if (ie(ae),
        i = e.memoizedState,
        i === null)
            return Ue(e),
            null;
        if (r = (e.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Vo(i, !1);
            else {
                if (be !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = Qu(t),
                        o !== null) {
                            for (e.flags |= 128,
                            Vo(i, !1),
                            r = o.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                i = n,
                                t = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = t,
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
                                t = o.dependencies,
                                i.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return re(ae, ae.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                i.tail !== null && we() > Po && (e.flags |= 128,
                r = !0,
                Vo(i, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = Qu(o),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    Vo(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !le)
                        return Ue(e),
                        null
                } else
                    2 * we() - i.renderingStartTime > Po && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    Vo(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (o.sibling = e.child,
            e.child = o) : (n = i.last,
            n !== null ? n.sibling = o : e.child = o,
            i.last = o)
        }
        return i.tail !== null ? (e = i.tail,
        i.rendering = e,
        i.tail = e.sibling,
        i.renderingStartTime = we(),
        e.sibling = null,
        n = ae.current,
        re(ae, r ? n & 1 | 2 : n & 1),
        e) : (Ue(e),
        null);
    case 22:
    case 23:
        return td(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? gt & 1073741824 && (Ue(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : Ue(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(C(156, e.tag))
}
function $6(t, e) {
    switch (Uh(e),
    e.tag) {
    case 1:
        return at(e.type) && Mu(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Co(),
        ie(lt),
        ie(je),
        Vh(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return Gh(e),
        null;
    case 13:
        if (ie(ae),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(C(340));
            So()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Co(),
        null;
    case 10:
        return zh(e.type._context),
        null;
    case 22:
    case 23:
        return td(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Qa = !1
  , ze = !1
  , q6 = typeof WeakSet == "function" ? WeakSet : Set
  , U = null;
function wi(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ge(t, e, r)
            }
        else
            n.current = null
}
function T0(t, e, n) {
    try {
        n()
    } catch (r) {
        ge(t, e, r)
    }
}
var Sp = !1;
function e2(t, e) {
    if (h0 = Lu,
    t = Yg(),
    Rh(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
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
                      , l = -1
                      , a = -1
                      , u = 0
                      , f = 0
                      , h = t
                      , d = null;
                    t: for (; ; ) {
                        for (var g; h !== n || s !== 0 && h.nodeType !== 3 || (l = o + s),
                        h !== i || r !== 0 && h.nodeType !== 3 || (a = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (g = h.firstChild) !== null; )
                            d = h,
                            h = g;
                        for (; ; ) {
                            if (h === t)
                                break t;
                            if (d === n && ++u === s && (l = o),
                            d === i && ++f === r && (a = o),
                            (g = h.nextSibling) !== null)
                                break;
                            h = d,
                            d = h.parentNode
                        }
                        h = g
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
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
    for (d0 = {
        focusedElem: t,
        selectionRange: n
    },
    Lu = !1,
    U = e; U !== null; )
        if (e = U,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            U = t;
        else
            for (; U !== null; ) {
                e = U;
                try {
                    var A = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (A !== null) {
                                var x = A.memoizedProps
                                  , N = A.memoizedState
                                  , y = e.stateNode
                                  , p = y.getSnapshotBeforeUpdate(e.elementType === e.type ? x : Vt(e.type, x), N);
                                y.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var w = e.stateNode.containerInfo;
                            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                        }
                } catch (S) {
                    ge(e, e.return, S)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    U = t;
                    break
                }
                U = e.return
            }
    return A = Sp,
    Sp = !1,
    A
}
function fl(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & t) === t) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && T0(e, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function Rc(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function I0(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function Km(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Km(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[An],
    delete e[Ol],
    delete e[m0],
    delete e[F6],
    delete e[D6])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Wm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function kp(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Wm(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function O0(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = Du));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (O0(t, e, n),
        t = t.sibling; t !== null; )
            O0(t, e, n),
            t = t.sibling
}
function B0(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (B0(t, e, n),
        t = t.sibling; t !== null; )
            B0(t, e, n),
            t = t.sibling
}
var Te = null
  , Xt = !1;
function or(t, e, n) {
    for (n = n.child; n !== null; )
        Jm(t, e, n),
        n = n.sibling
}
function Jm(t, e, n) {
    if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
            bn.onCommitFiberUnmount(kc, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ze || wi(n, e);
    case 6:
        var r = Te
          , s = Xt;
        Te = null,
        or(t, e, n),
        Te = r,
        Xt = s,
        Te !== null && (Xt ? (t = Te,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Te.removeChild(n.stateNode));
        break;
    case 18:
        Te !== null && (Xt ? (t = Te,
        n = n.stateNode,
        t.nodeType === 8 ? Af(t.parentNode, n) : t.nodeType === 1 && Af(t, n),
        Cl(t)) : Af(Te, n.stateNode));
        break;
    case 4:
        r = Te,
        s = Xt,
        Te = n.stateNode.containerInfo,
        Xt = !0,
        or(t, e, n),
        Te = r,
        Xt = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ze && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && T0(n, e, o),
                s = s.next
            } while (s !== r)
        }
        or(t, e, n);
        break;
    case 1:
        if (!ze && (wi(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                ge(n, e, l)
            }
        or(t, e, n);
        break;
    case 21:
        or(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null,
        or(t, e, n),
        ze = r) : or(t, e, n);
        break;
    default:
        or(t, e, n)
    }
}
function Cp(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new q6),
        e.forEach(function(r) {
            var s = u2.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function Ht(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = t
                  , o = e
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Te = l.stateNode,
                        Xt = !1;
                        break e;
                    case 3:
                        Te = l.stateNode.containerInfo,
                        Xt = !0;
                        break e;
                    case 4:
                        Te = l.stateNode.containerInfo,
                        Xt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Te === null)
                    throw Error(C(160));
                Jm(i, o, s),
                Te = null,
                Xt = !1;
                var a = s.alternate;
                a !== null && (a.return = null),
                s.return = null
            } catch (u) {
                ge(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Ym(e, t),
            e = e.sibling
}
function Ym(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ht(e, t),
        un(t),
        r & 4) {
            try {
                fl(3, t, t.return),
                Rc(3, t)
            } catch (x) {
                ge(t, t.return, x)
            }
            try {
                fl(5, t, t.return)
            } catch (x) {
                ge(t, t.return, x)
            }
        }
        break;
    case 1:
        Ht(e, t),
        un(t),
        r & 512 && n !== null && wi(n, n.return);
        break;
    case 5:
        if (Ht(e, t),
        un(t),
        r & 512 && n !== null && wi(n, n.return),
        t.flags & 32) {
            var s = t.stateNode;
            try {
                El(s, "")
            } catch (x) {
                ge(t, t.return, x)
            }
        }
        if (r & 4 && (s = t.stateNode,
        s != null)) {
            var i = t.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , l = t.type
              , a = t.updateQueue;
            if (t.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && mg(s, i),
                    n0(l, o);
                    var u = n0(l, i);
                    for (o = 0; o < a.length; o += 2) {
                        var f = a[o]
                          , h = a[o + 1];
                        f === "style" ? xg(s, h) : f === "dangerouslySetInnerHTML" ? Ag(s, h) : f === "children" ? El(s, h) : vh(s, f, h, u)
                    }
                    switch (l) {
                    case "input":
                        Xf(s, i);
                        break;
                    case "textarea":
                        yg(s, i);
                        break;
                    case "select":
                        var d = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var g = i.value;
                        g != null ? Ci(s, !!i.multiple, g, !1) : d !== !!i.multiple && (i.defaultValue != null ? Ci(s, !!i.multiple, i.defaultValue, !0) : Ci(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Ol] = i
                } catch (x) {
                    ge(t, t.return, x)
                }
        }
        break;
    case 6:
        if (Ht(e, t),
        un(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(C(162));
            s = t.stateNode,
            i = t.memoizedProps;
            try {
                s.nodeValue = i
            } catch (x) {
                ge(t, t.return, x)
            }
        }
        break;
    case 3:
        if (Ht(e, t),
        un(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Cl(e.containerInfo)
            } catch (x) {
                ge(t, t.return, x)
            }
        break;
    case 4:
        Ht(e, t),
        un(t);
        break;
    case 13:
        Ht(e, t),
        un(t),
        s = t.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (qh = we())),
        r & 4 && Cp(t);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (ze = (u = ze) || f,
        Ht(e, t),
        ze = u) : Ht(e, t),
        un(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !f && t.mode & 1)
                for (U = t,
                f = t.child; f !== null; ) {
                    for (h = U = f; U !== null; ) {
                        switch (d = U,
                        g = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            fl(4, d, d.return);
                            break;
                        case 1:
                            wi(d, d.return);
                            var A = d.stateNode;
                            if (typeof A.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    e = r,
                                    A.props = e.memoizedProps,
                                    A.state = e.memoizedState,
                                    A.componentWillUnmount()
                                } catch (x) {
                                    ge(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            wi(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Pp(h);
                                continue
                            }
                        }
                        g !== null ? (g.return = d,
                        U = g) : Pp(h)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            h = t; ; ) {
                if (h.tag === 5) {
                    if (f === null) {
                        f = h;
                        try {
                            s = h.stateNode,
                            u ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = h.stateNode,
                            a = h.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = vg("display", o))
                        } catch (x) {
                            ge(t, t.return, x)
                        }
                    }
                } else if (h.tag === 6) {
                    if (f === null)
                        try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (x) {
                            ge(t, t.return, x)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === t) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === t)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === t)
                        break e;
                    f === h && (f = null),
                    h = h.return
                }
                f === h && (f = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Ht(e, t),
        un(t),
        r & 4 && Cp(t);
        break;
    case 21:
        break;
    default:
        Ht(e, t),
        un(t)
    }
}
function un(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Wm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (El(s, ""),
                r.flags &= -33);
                var i = kp(t);
                B0(t, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = kp(t);
                O0(t, l, o);
                break;
            default:
                throw Error(C(161))
            }
        } catch (a) {
            ge(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function t2(t, e, n) {
    U = t,
    Zm(t)
}
function Zm(t, e, n) {
    for (var r = (t.mode & 1) !== 0; U !== null; ) {
        var s = U
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || Qa;
            if (!o) {
                var l = s.alternate
                  , a = l !== null && l.memoizedState !== null || ze;
                l = Qa;
                var u = ze;
                if (Qa = o,
                (ze = a) && !u)
                    for (U = s; U !== null; )
                        o = U,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Tp(s) : a !== null ? (a.return = o,
                        U = a) : Tp(s);
                for (; i !== null; )
                    U = i,
                    Zm(i),
                    i = i.sibling;
                U = s,
                Qa = l,
                ze = u
            }
            Np(t)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            U = i) : Np(t)
    }
}
function Np(t) {
    for (; U !== null; ) {
        var e = U;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || Rc(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !ze)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? n.memoizedProps : Vt(e.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = e.updateQueue;
                        i !== null && cp(e, i, r);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            cp(e, o, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var h = f.dehydrated;
                                    h !== null && Cl(h)
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
                        throw Error(C(163))
                    }
                ze || e.flags & 512 && I0(e)
            } catch (d) {
                ge(e, e.return, d)
            }
        }
        if (e === t) {
            U = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            U = n;
            break
        }
        U = e.return
    }
}
function Pp(t) {
    for (; U !== null; ) {
        var e = U;
        if (e === t) {
            U = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            U = n;
            break
        }
        U = e.return
    }
}
function Tp(t) {
    for (; U !== null; ) {
        var e = U;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    Rc(4, e)
                } catch (a) {
                    ge(e, n, a)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = e.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        ge(e, s, a)
                    }
                }
                var i = e.return;
                try {
                    I0(e)
                } catch (a) {
                    ge(e, i, a)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    I0(e)
                } catch (a) {
                    ge(e, o, a)
                }
            }
        } catch (a) {
            ge(e, e.return, a)
        }
        if (e === t) {
            U = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return,
            U = l;
            break
        }
        U = e.return
    }
}
var n2 = Math.ceil
  , Ju = sr.ReactCurrentDispatcher
  , Xh = sr.ReactCurrentOwner
  , Dt = sr.ReactCurrentBatchConfig
  , Z = 0
  , Ne = null
  , ve = null
  , Oe = 0
  , gt = 0
  , Ai = Xr(0)
  , be = 0
  , Dl = null
  , js = 0
  , Lc = 0
  , $h = 0
  , hl = null
  , nt = null
  , qh = 0
  , Po = 1 / 0
  , Pn = null
  , Yu = !1
  , R0 = null
  , _r = null
  , Ka = !1
  , Br = null
  , Zu = 0
  , dl = 0
  , L0 = null
  , yu = -1
  , wu = 0;
function Ye() {
    return Z & 6 ? we() : yu !== -1 ? yu : yu = we()
}
function Hr(t) {
    return t.mode & 1 ? Z & 2 && Oe !== 0 ? Oe & -Oe : z6.transition !== null ? (wu === 0 && (wu = Rg()),
    wu) : (t = te,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : _g(t.type)),
    t) : 1
}
function nn(t, e, n, r) {
    if (50 < dl)
        throw dl = 0,
        L0 = null,
        Error(C(185));
    ya(t, n, r),
    (!(Z & 2) || t !== Ne) && (t === Ne && (!(Z & 2) && (Lc |= n),
    be === 4 && mr(t, Oe)),
    ut(t, r),
    n === 1 && Z === 0 && !(e.mode & 1) && (Po = we() + 500,
    Ic && $r()))
}
function ut(t, e) {
    var n = t.callbackNode;
    zw(t, e);
    var r = Ru(t, t === Ne ? Oe : 0);
    if (r === 0)
        n !== null && Md(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Md(n),
        e === 1)
            t.tag === 0 ? M6(Ip.bind(null, t)) : im(Ip.bind(null, t)),
            L6(function() {
                !(Z & 6) && $r()
            }),
            n = null;
        else {
            switch (Lg(r)) {
            case 1:
                n = kh;
                break;
            case 4:
                n = Og;
                break;
            case 16:
                n = Bu;
                break;
            case 536870912:
                n = Bg;
                break;
            default:
                n = Bu
            }
            n = sy(n, Xm.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Xm(t, e) {
    if (yu = -1,
    wu = 0,
    Z & 6)
        throw Error(C(327));
    var n = t.callbackNode;
    if (Oi() && t.callbackNode !== n)
        return null;
    var r = Ru(t, t === Ne ? Oe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = Xu(t, r);
    else {
        e = r;
        var s = Z;
        Z |= 2;
        var i = qm();
        (Ne !== t || Oe !== e) && (Pn = null,
        Po = we() + 500,
        Us(t, e));
        do
            try {
                i2();
                break
            } catch (l) {
                $m(t, l)
            }
        while (1);
        Mh(),
        Ju.current = i,
        Z = s,
        ve !== null ? e = 0 : (Ne = null,
        Oe = 0,
        e = be)
    }
    if (e !== 0) {
        if (e === 2 && (s = l0(t),
        s !== 0 && (r = s,
        e = U0(t, s))),
        e === 1)
            throw n = Dl,
            Us(t, 0),
            mr(t, r),
            ut(t, we()),
            n;
        if (e === 6)
            mr(t, r);
        else {
            if (s = t.current.alternate,
            !(r & 30) && !r2(s) && (e = Xu(t, r),
            e === 2 && (i = l0(t),
            i !== 0 && (r = i,
            e = U0(t, i))),
            e === 1))
                throw n = Dl,
                Us(t, 0),
                mr(t, r),
                ut(t, we()),
                n;
            switch (t.finishedWork = s,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(C(345));
            case 2:
                is(t, nt, Pn);
                break;
            case 3:
                if (mr(t, r),
                (r & 130023424) === r && (e = qh + 500 - we(),
                10 < e)) {
                    if (Ru(t, 0) !== 0)
                        break;
                    if (s = t.suspendedLanes,
                    (s & r) !== r) {
                        Ye(),
                        t.pingedLanes |= t.suspendedLanes & s;
                        break
                    }
                    t.timeoutHandle = g0(is.bind(null, t, nt, Pn), e);
                    break
                }
                is(t, nt, Pn);
                break;
            case 4:
                if (mr(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - tn(r);
                    i = 1 << o,
                    o = e[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = we() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * n2(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = g0(is.bind(null, t, nt, Pn), r);
                    break
                }
                is(t, nt, Pn);
                break;
            case 5:
                is(t, nt, Pn);
                break;
            default:
                throw Error(C(329))
            }
        }
    }
    return ut(t, we()),
    t.callbackNode === n ? Xm.bind(null, t) : null
}
function U0(t, e) {
    var n = hl;
    return t.current.memoizedState.isDehydrated && (Us(t, e).flags |= 256),
    t = Xu(t, e),
    t !== 2 && (e = nt,
    nt = n,
    e !== null && F0(e)),
    t
}
function F0(t) {
    nt === null ? nt = t : nt.push.apply(nt, t)
}
function r2(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!rn(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function mr(t, e) {
    for (e &= ~$h,
    e &= ~Lc,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - tn(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function Ip(t) {
    if (Z & 6)
        throw Error(C(327));
    Oi();
    var e = Ru(t, 0);
    if (!(e & 1))
        return ut(t, we()),
        null;
    var n = Xu(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = l0(t);
        r !== 0 && (e = r,
        n = U0(t, r))
    }
    if (n === 1)
        throw n = Dl,
        Us(t, 0),
        mr(t, e),
        ut(t, we()),
        n;
    if (n === 6)
        throw Error(C(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    is(t, nt, Pn),
    ut(t, we()),
    null
}
function ed(t, e) {
    var n = Z;
    Z |= 1;
    try {
        return t(e)
    } finally {
        Z = n,
        Z === 0 && (Po = we() + 500,
        Ic && $r())
    }
}
function Gs(t) {
    Br !== null && Br.tag === 0 && !(Z & 6) && Oi();
    var e = Z;
    Z |= 1;
    var n = Dt.transition
      , r = te;
    try {
        if (Dt.transition = null,
        te = 1,
        t)
            return t()
    } finally {
        te = r,
        Dt.transition = n,
        Z = e,
        !(Z & 6) && $r()
    }
}
function td() {
    gt = Ai.current,
    ie(Ai)
}
function Us(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    R6(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (Uh(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Mu();
                break;
            case 3:
                Co(),
                ie(lt),
                ie(je),
                Vh();
                break;
            case 5:
                Gh(r);
                break;
            case 4:
                Co();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                zh(r.type._context);
                break;
            case 22:
            case 23:
                td()
            }
            n = n.return
        }
    if (Ne = t,
    ve = t = jr(t.current, null),
    Oe = gt = e,
    be = 0,
    Dl = null,
    $h = Lc = js = 0,
    nt = hl = null,
    us !== null) {
        for (e = 0; e < us.length; e++)
            if (n = us[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    r.next = o
                }
                n.pending = r
            }
        us = null
    }
    return t
}
function $m(t, e) {
    do {
        var n = ve;
        try {
            if (Mh(),
            pu.current = Wu,
            Ku) {
                for (var r = fe.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                Ku = !1
            }
            if (Hs = 0,
            Ce = Ee = fe = null,
            cl = !1,
            Ll = 0,
            Xh.current = null,
            n === null || n.return === null) {
                be = 1,
                Dl = e,
                ve = null;
                break
            }
            e: {
                var i = t
                  , o = n.return
                  , l = n
                  , a = e;
                if (e = Oe,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , f = l
                      , h = f.tag;
                    if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var d = f.alternate;
                        d ? (f.updateQueue = d.updateQueue,
                        f.memoizedState = d.memoizedState,
                        f.lanes = d.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var g = yp(o);
                    if (g !== null) {
                        g.flags &= -257,
                        wp(g, o, l, i, e),
                        g.mode & 1 && mp(i, u, e),
                        e = g,
                        a = u;
                        var A = e.updateQueue;
                        if (A === null) {
                            var x = new Set;
                            x.add(a),
                            e.updateQueue = x
                        } else
                            A.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            mp(i, u, e),
                            nd();
                            break e
                        }
                        a = Error(C(426))
                    }
                } else if (le && l.mode & 1) {
                    var N = yp(o);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256),
                        wp(N, o, l, i, e),
                        Fh(No(a, l));
                        break e
                    }
                }
                i = a = No(a, l),
                be !== 4 && (be = 2),
                hl === null ? hl = [i] : hl.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        e &= -e,
                        i.lanes |= e;
                        var y = Um(i, a, e);
                        up(i, y);
                        break e;
                    case 1:
                        l = a;
                        var p = i.type
                          , w = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (_r === null || !_r.has(w)))) {
                            i.flags |= 65536,
                            e &= -e,
                            i.lanes |= e;
                            var S = Fm(i, l, e);
                            up(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            ty(n)
        } catch (P) {
            e = P,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (1)
}
function qm() {
    var t = Ju.current;
    return Ju.current = Wu,
    t === null ? Wu : t
}
function nd() {
    (be === 0 || be === 3 || be === 2) && (be = 4),
    Ne === null || !(js & 268435455) && !(Lc & 268435455) || mr(Ne, Oe)
}
function Xu(t, e) {
    var n = Z;
    Z |= 2;
    var r = qm();
    (Ne !== t || Oe !== e) && (Pn = null,
    Us(t, e));
    do
        try {
            s2();
            break
        } catch (s) {
            $m(t, s)
        }
    while (1);
    if (Mh(),
    Z = n,
    Ju.current = r,
    ve !== null)
        throw Error(C(261));
    return Ne = null,
    Oe = 0,
    be
}
function s2() {
    for (; ve !== null; )
        ey(ve)
}
function i2() {
    for (; ve !== null && !Iw(); )
        ey(ve)
}
function ey(t) {
    var e = ry(t.alternate, t, gt);
    t.memoizedProps = t.pendingProps,
    e === null ? ty(t) : ve = e,
    Xh.current = null
}
function ty(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = $6(n, e),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                be = 6,
                ve = null;
                return
            }
        } else if (n = X6(n, e, gt),
        n !== null) {
            ve = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            ve = e;
            return
        }
        ve = e = t
    } while (e !== null);
    be === 0 && (be = 5)
}
function is(t, e, n) {
    var r = te
      , s = Dt.transition;
    try {
        Dt.transition = null,
        te = 1,
        o2(t, e, n, r)
    } finally {
        Dt.transition = s,
        te = r
    }
    return null
}
function o2(t, e, n, r) {
    do
        Oi();
    while (Br !== null);
    if (Z & 6)
        throw Error(C(327));
    n = t.finishedWork;
    var s = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(C(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (_w(t, i),
    t === Ne && (ve = Ne = null,
    Oe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ka || (Ka = !0,
    sy(Bu, function() {
        return Oi(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Dt.transition,
        Dt.transition = null;
        var o = te;
        te = 1;
        var l = Z;
        Z |= 4,
        Xh.current = null,
        e2(t, n),
        Ym(n, t),
        C6(d0),
        Lu = !!h0,
        d0 = h0 = null,
        t.current = n,
        t2(n),
        Ow(),
        Z = l,
        te = o,
        Dt.transition = i
    } else
        t.current = n;
    if (Ka && (Ka = !1,
    Br = t,
    Zu = s),
    i = t.pendingLanes,
    i === 0 && (_r = null),
    Lw(n.stateNode),
    ut(t, we()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            s = e[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (Yu)
        throw Yu = !1,
        t = R0,
        R0 = null,
        t;
    return Zu & 1 && t.tag !== 0 && Oi(),
    i = t.pendingLanes,
    i & 1 ? t === L0 ? dl++ : (dl = 0,
    L0 = t) : dl = 0,
    $r(),
    null
}
function Oi() {
    if (Br !== null) {
        var t = Lg(Zu)
          , e = Dt.transition
          , n = te;
        try {
            if (Dt.transition = null,
            te = 16 > t ? 16 : t,
            Br === null)
                var r = !1;
            else {
                if (t = Br,
                Br = null,
                Zu = 0,
                Z & 6)
                    throw Error(C(331));
                var s = Z;
                for (Z |= 4,
                U = t.current; U !== null; ) {
                    var i = U
                      , o = i.child;
                    if (U.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (U = u; U !== null; ) {
                                    var f = U;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        fl(8, f, i)
                                    }
                                    var h = f.child;
                                    if (h !== null)
                                        h.return = f,
                                        U = h;
                                    else
                                        for (; U !== null; ) {
                                            f = U;
                                            var d = f.sibling
                                              , g = f.return;
                                            if (Km(f),
                                            f === u) {
                                                U = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = g,
                                                U = d;
                                                break
                                            }
                                            U = g
                                        }
                                }
                            }
                            var A = i.alternate;
                            if (A !== null) {
                                var x = A.child;
                                if (x !== null) {
                                    A.child = null;
                                    do {
                                        var N = x.sibling;
                                        x.sibling = null,
                                        x = N
                                    } while (x !== null)
                                }
                            }
                            U = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        U = o;
                    else
                        e: for (; U !== null; ) {
                            if (i = U,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    fl(9, i, i.return)
                                }
                            var y = i.sibling;
                            if (y !== null) {
                                y.return = i.return,
                                U = y;
                                break e
                            }
                            U = i.return
                        }
                }
                var p = t.current;
                for (U = p; U !== null; ) {
                    o = U;
                    var w = o.child;
                    if (o.subtreeFlags & 2064 && w !== null)
                        w.return = o,
                        U = w;
                    else
                        e: for (o = p; U !== null; ) {
                            if (l = U,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rc(9, l)
                                    }
                                } catch (P) {
                                    ge(l, l.return, P)
                                }
                            if (l === o) {
                                U = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                U = S;
                                break e
                            }
                            U = l.return
                        }
                }
                if (Z = s,
                $r(),
                bn && typeof bn.onPostCommitFiberRoot == "function")
                    try {
                        bn.onPostCommitFiberRoot(kc, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            Dt.transition = e
        }
    }
    return !1
}
function Op(t, e, n) {
    e = No(n, e),
    e = Um(t, e, 1),
    t = zr(t, e, 1),
    e = Ye(),
    t !== null && (ya(t, 1, e),
    ut(t, e))
}
function ge(t, e, n) {
    if (t.tag === 3)
        Op(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Op(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_r === null || !_r.has(r))) {
                    t = No(n, t),
                    t = Fm(e, t, 1),
                    e = zr(e, t, 1),
                    t = Ye(),
                    e !== null && (ya(e, 1, t),
                    ut(e, t));
                    break
                }
            }
            e = e.return
        }
}
function l2(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = Ye(),
    t.pingedLanes |= t.suspendedLanes & n,
    Ne === t && (Oe & n) === n && (be === 4 || be === 3 && (Oe & 130023424) === Oe && 500 > we() - qh ? Us(t, 0) : $h |= n),
    ut(t, e)
}
function ny(t, e) {
    e === 0 && (t.mode & 1 ? (e = Fa,
    Fa <<= 1,
    !(Fa & 130023424) && (Fa = 4194304)) : e = 1);
    var n = Ye();
    t = tr(t, e),
    t !== null && (ya(t, e, n),
    ut(t, n))
}
function a2(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    ny(t, n)
}
function u2(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(C(314))
    }
    r !== null && r.delete(e),
    ny(t, n)
}
var ry;
ry = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || lt.current)
            ot = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return ot = !1,
                Z6(t, e, n);
            ot = !!(t.flags & 131072)
        }
    else
        ot = !1,
        le && e.flags & 1048576 && om(e, Hu, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        mu(t, e),
        t = e.pendingProps;
        var s = bo(e, je.current);
        Ii(e, n),
        s = Kh(null, e, r, t, s, n);
        var i = Wh();
        return e.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        at(r) ? (i = !0,
        zu(e)) : i = !1,
        e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        Hh(e),
        s.updater = Oc,
        e.stateNode = s,
        s._reactInternals = e,
        E0(e, r, t, n),
        e = k0(null, e, r, !0, i, n)) : (e.tag = 0,
        le && i && Lh(e),
        Qe(null, e, s, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (mu(t, e),
            t = e.pendingProps,
            s = r._init,
            r = s(r._payload),
            e.type = r,
            s = e.tag = f2(r),
            t = Vt(r, t),
            s) {
            case 0:
                e = S0(null, e, r, t, n);
                break e;
            case 1:
                e = xp(null, e, r, t, n);
                break e;
            case 11:
                e = Ap(null, e, r, t, n);
                break e;
            case 14:
                e = vp(null, e, r, Vt(r.type, t), n);
                break e
            }
            throw Error(C(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Vt(r, s),
        S0(t, e, r, s, n);
    case 1:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Vt(r, s),
        xp(t, e, r, s, n);
    case 3:
        e: {
            if (_m(e),
            t === null)
                throw Error(C(387));
            r = e.pendingProps,
            i = e.memoizedState,
            s = i.element,
            cm(t, e),
            Vu(e, r, null, n);
            var o = e.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = i,
                e.memoizedState = i,
                e.flags & 256) {
                    s = No(Error(C(423)), e),
                    e = Ep(t, e, r, n, s);
                    break e
                } else if (r !== s) {
                    s = No(Error(C(424)), e),
                    e = Ep(t, e, r, n, s);
                    break e
                } else
                    for (yt = Mr(e.stateNode.containerInfo.firstChild),
                    vt = e,
                    le = !0,
                    $t = null,
                    n = pm(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (So(),
                r === s) {
                    e = nr(t, e, n);
                    break e
                }
                Qe(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return gm(e),
        t === null && A0(e),
        r = e.type,
        s = e.pendingProps,
        i = t !== null ? t.memoizedProps : null,
        o = s.children,
        p0(r, s) ? o = null : i !== null && p0(r, i) && (e.flags |= 32),
        zm(t, e),
        Qe(t, e, o, n),
        e.child;
    case 6:
        return t === null && A0(e),
        null;
    case 13:
        return Hm(t, e, n);
    case 4:
        return jh(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = ko(e, null, r, n) : Qe(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Vt(r, s),
        Ap(t, e, r, s, n);
    case 7:
        return Qe(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return Qe(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return Qe(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            s = e.pendingProps,
            i = e.memoizedProps,
            o = s.value,
            re(ju, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (rn(i.value, o)) {
                    if (i.children === s.children && !lt.current) {
                        e = nr(t, e, n);
                        break e
                    }
                } else
                    for (i = e.child,
                    i !== null && (i.return = e); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            o = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Zn(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? a.next = a : (a.next = f.next,
                                            f.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    v0(i.return, n, e),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === e.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(C(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            v0(o, n, e),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === e) {
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
            Qe(t, e, s.children, n),
            e = e.child
        }
        return e;
    case 9:
        return s = e.type,
        r = e.pendingProps.children,
        Ii(e, n),
        s = zt(s),
        r = r(s),
        e.flags |= 1,
        Qe(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        s = Vt(r, e.pendingProps),
        s = Vt(r.type, s),
        vp(t, e, r, s, n);
    case 15:
        return Dm(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        s = e.pendingProps,
        s = e.elementType === r ? s : Vt(r, s),
        mu(t, e),
        e.tag = 1,
        at(r) ? (t = !0,
        zu(e)) : t = !1,
        Ii(e, n),
        hm(e, r, s),
        E0(e, r, s, n),
        k0(null, e, r, !0, t, n);
    case 19:
        return jm(t, e, n);
    case 22:
        return Mm(t, e, n)
    }
    throw Error(C(156, e.tag))
}
;
function sy(t, e) {
    return Ig(t, e)
}
function c2(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ft(t, e, n, r) {
    return new c2(t,e,n,r)
}
function rd(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function f2(t) {
    if (typeof t == "function")
        return rd(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === Eh)
            return 11;
        if (t === bh)
            return 14
    }
    return 2
}
function jr(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ft(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function Au(t, e, n, r, s, i) {
    var o = 2;
    if (r = t,
    typeof t == "function")
        rd(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case ui:
            return Fs(n.children, s, i, e);
        case xh:
            o = 8,
            s |= 8;
            break;
        case Kf:
            return t = Ft(12, n, e, s | 2),
            t.elementType = Kf,
            t.lanes = i,
            t;
        case Wf:
            return t = Ft(13, n, e, s),
            t.elementType = Wf,
            t.lanes = i,
            t;
        case Jf:
            return t = Ft(19, n, e, s),
            t.elementType = Jf,
            t.lanes = i,
            t;
        case dg:
            return Uc(n, s, i, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case fg:
                    o = 10;
                    break e;
                case hg:
                    o = 9;
                    break e;
                case Eh:
                    o = 11;
                    break e;
                case bh:
                    o = 14;
                    break e;
                case fr:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(C(130, t == null ? t : typeof t, ""))
        }
    return e = Ft(o, n, e, s),
    e.elementType = t,
    e.type = r,
    e.lanes = i,
    e
}
function Fs(t, e, n, r) {
    return t = Ft(7, t, r, e),
    t.lanes = n,
    t
}
function Uc(t, e, n, r) {
    return t = Ft(22, t, r, e),
    t.elementType = dg,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function Nf(t, e, n) {
    return t = Ft(6, t, null, e),
    t.lanes = n,
    t
}
function Pf(t, e, n) {
    return e = Ft(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function h2(t, e, n, r, s) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = af(0),
    this.expirationTimes = af(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = af(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function sd(t, e, n, r, s, i, o, l, a) {
    return t = new h2(t,e,n,l,a),
    e === 1 ? (e = 1,
    i === !0 && (e |= 8)) : e = 0,
    i = Ft(3, null, null, e),
    t.current = i,
    i.stateNode = t,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Hh(i),
    t
}
function d2(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ai,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function iy(t) {
    if (!t)
        return Wr;
    t = t._reactInternals;
    e: {
        if (Xs(t) !== t || t.tag !== 1)
            throw Error(C(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (at(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(C(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (at(n))
            return sm(t, n, e)
    }
    return e
}
function oy(t, e, n, r, s, i, o, l, a) {
    return t = sd(n, r, !0, t, s, i, o, l, a),
    t.context = iy(null),
    n = t.current,
    r = Ye(),
    s = Hr(n),
    i = Zn(r, s),
    i.callback = e ?? null,
    zr(n, i, s),
    t.current.lanes = s,
    ya(t, s, r),
    ut(t, r),
    t
}
function Fc(t, e, n, r) {
    var s = e.current
      , i = Ye()
      , o = Hr(s);
    return n = iy(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = Zn(i, o),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = zr(s, e, o),
    t !== null && (nn(t, s, o, i),
    du(t, s, o)),
    o
}
function $u(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function Bp(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function id(t, e) {
    Bp(t, e),
    (t = t.alternate) && Bp(t, e)
}
function p2() {
    return null
}
var ly = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function od(t) {
    this._internalRoot = t
}
Dc.prototype.render = od.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(C(409));
    Fc(t, e, null, null)
}
;
Dc.prototype.unmount = od.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Gs(function() {
            Fc(null, t, null, null)
        }),
        e[er] = null
    }
}
;
function Dc(t) {
    this._internalRoot = t
}
Dc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Dg();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < gr.length && e !== 0 && e < gr[n].priority; n++)
            ;
        gr.splice(n, 0, t),
        n === 0 && zg(t)
    }
}
;
function ld(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Mc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function Rp() {}
function g2(t, e, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = $u(o);
                i.call(u)
            }
        }
        var o = oy(e, r, t, 0, null, !1, !1, "", Rp);
        return t._reactRootContainer = o,
        t[er] = o.current,
        Tl(t.nodeType === 8 ? t.parentNode : t),
        Gs(),
        o
    }
    for (; s = t.lastChild; )
        t.removeChild(s);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = $u(a);
            l.call(u)
        }
    }
    var a = sd(t, 0, !1, null, null, !1, !1, "", Rp);
    return t._reactRootContainer = a,
    t[er] = a.current,
    Tl(t.nodeType === 8 ? t.parentNode : t),
    Gs(function() {
        Fc(e, a, n, r)
    }),
    a
}
function zc(t, e, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var l = s;
            s = function() {
                var a = $u(o);
                l.call(a)
            }
        }
        Fc(e, o, t, s)
    } else
        o = g2(n, e, t, s, r);
    return $u(o)
}
Ug = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = Xo(e.pendingLanes);
            n !== 0 && (Ch(e, n | 1),
            ut(e, we()),
            !(Z & 6) && (Po = we() + 500,
            $r()))
        }
        break;
    case 13:
        Gs(function() {
            var r = tr(t, 1);
            if (r !== null) {
                var s = Ye();
                nn(r, t, 1, s)
            }
        }),
        id(t, 1)
    }
}
;
Nh = function(t) {
    if (t.tag === 13) {
        var e = tr(t, 134217728);
        if (e !== null) {
            var n = Ye();
            nn(e, t, 134217728, n)
        }
        id(t, 134217728)
    }
}
;
Fg = function(t) {
    if (t.tag === 13) {
        var e = Hr(t)
          , n = tr(t, e);
        if (n !== null) {
            var r = Ye();
            nn(n, t, e, r)
        }
        id(t, e)
    }
}
;
Dg = function() {
    return te
}
;
Mg = function(t, e) {
    var n = te;
    try {
        return te = t,
        e()
    } finally {
        te = n
    }
}
;
s0 = function(t, e, n) {
    switch (e) {
    case "input":
        if (Xf(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var s = Tc(r);
                    if (!s)
                        throw Error(C(90));
                    gg(r),
                    Xf(r, s)
                }
            }
        }
        break;
    case "textarea":
        yg(t, n);
        break;
    case "select":
        e = n.value,
        e != null && Ci(t, !!n.multiple, e, !1)
    }
}
;
Sg = ed;
kg = Gs;
var m2 = {
    usingClientEntryPoint: !1,
    Events: [Aa, di, Tc, Eg, bg, ed]
}
  , Qo = {
    findFiberByHostInstance: as,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , y2 = {
    bundleType: Qo.bundleType,
    version: Qo.version,
    rendererPackageName: Qo.rendererPackageName,
    rendererConfig: Qo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Pg(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: Qo.findFiberByHostInstance || p2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wa.isDisabled && Wa.supportsFiber)
        try {
            kc = Wa.inject(y2),
            bn = Wa
        } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m2;
bt.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ld(e))
        throw Error(C(200));
    return d2(t, e, null, n)
}
;
bt.createRoot = function(t, e) {
    if (!ld(t))
        throw Error(C(299));
    var n = !1
      , r = ""
      , s = ly;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    e = sd(t, 1, !1, null, null, n, !1, r, s),
    t[er] = e.current,
    Tl(t.nodeType === 8 ? t.parentNode : t),
    new od(e)
}
;
bt.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(C(188)) : (t = Object.keys(t).join(","),
        Error(C(268, t)));
    return t = Pg(e),
    t = t === null ? null : t.stateNode,
    t
}
;
bt.flushSync = function(t) {
    return Gs(t)
}
;
bt.hydrate = function(t, e, n) {
    if (!Mc(e))
        throw Error(C(200));
    return zc(null, t, e, !0, n)
}
;
bt.hydrateRoot = function(t, e, n) {
    if (!ld(t))
        throw Error(C(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = ly;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    e = oy(e, null, t, 1, n ?? null, s, !1, i, o),
    t[er] = e.current,
    Tl(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            s = n._getVersion,
            s = s(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, s] : e.mutableSourceEagerHydrationData.push(n, s);
    return new Dc(e)
}
;
bt.render = function(t, e, n) {
    if (!Mc(e))
        throw Error(C(200));
    return zc(null, t, e, !1, n)
}
;
bt.unmountComponentAtNode = function(t) {
    if (!Mc(t))
        throw Error(C(40));
    return t._reactRootContainer ? (Gs(function() {
        zc(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[er] = null
        })
    }),
    !0) : !1
}
;
bt.unstable_batchedUpdates = ed;
bt.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!Mc(n))
        throw Error(C(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(C(38));
    return zc(t, e, n, !1, r)
}
;
bt.version = "18.2.0-next-9e3b772b8-20220608";
function ay() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ay)
        } catch (t) {
            console.error(t)
        }
}
ay(),
og.exports = bt;
var w2 = og.exports
  , Lp = w2;
Vf.createRoot = Lp.createRoot,
Vf.hydrateRoot = Lp.hydrateRoot;
var uy = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Up = En.createContext && En.createContext(uy)
  , Gr = globalThis && globalThis.__assign || function() {
    return Gr = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) {
            e = arguments[n];
            for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s])
        }
        return t
    }
    ,
    Gr.apply(this, arguments)
}
  , A2 = globalThis && globalThis.__rest || function(t, e) {
    var n = {};
    for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n
}
;
function cy(t) {
    return t && t.map(function(e, n) {
        return En.createElement(e.tag, Gr({
            key: n
        }, e.attr), cy(e.child))
    })
}
function $s(t) {
    return function(e) {
        return En.createElement(v2, Gr({
            attr: Gr({}, t.attr)
        }, e), cy(t.child))
    }
}
function v2(t) {
    var e = function(n) {
        var r = t.attr, s = t.size, i = t.title, o = A2(t, ["attr", "size", "title"]), l = s || n.size || "1em", a;
        return n.className && (a = n.className),
        t.className && (a = (a ? a + " " : "") + t.className),
        En.createElement("svg", Gr({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: a,
            style: Gr(Gr({
                color: t.color || n.color
            }, n.style), t.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && En.createElement("title", null, i), t.children)
    };
    return Up !== void 0 ? En.createElement(Up.Consumer, null, function(n) {
        return e(n)
    }) : e(uy)
}
function x2(t) {
    return $s({
        tag: "svg",
        attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                clipRule: "evenodd"
            }
        }]
    })(t)
}
function E2(t) {
    return $s({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"
            }
        }]
    })(t)
}
function Fp(t) {
    return $s({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            }
        }]
    })(t)
}
const fy = "/assets/logo-a023a026.png"
  , Dp = ({title: t, classprops: e}) => I.jsx("li", {
    className: `mx-4 ${e}`,
    children: t
})
  , b2 = () => {
    const [t,e] = En.useState(!1);
    return I.jsxs("nav", {
        className: "w-full flex md:justify-center justify-between items-center p-4",
        children: [I.jsx("div", {
            className: "md:flex-[0.5] flex-initial justify-center items-center",
            children: I.jsx("img", {
                src: fy,
                alt: "logo",
                className: "w-40 cursor-pointer"
            })
        }), I.jsx("ul", {
            className: "text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",
            children: ["Market", "Exchange", "CryptoCurrency", "Wallets"].map( (n, r) => I.jsx(Dp, {
                title: n
            }, n + r))
        }), I.jsxs("div", {
            className: "flex relative",
            children: [!t && I.jsx(x2, {
                fontSize: 28,
                className: "text-white md:hidden cursor-pointer",
                onClick: () => e(!0)
            }), t && I.jsx(Fp, {
                fontSize: 28,
                className: "text-white md:hidden cursor-pointer",
                onClick: () => e(!1)
            }), t && I.jsxs("ul", {
                className: `z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in`,
                children: [I.jsx("li", {
                    className: "text-xl w-full my-2",
                    children: I.jsx(Fp, {
                        onClick: () => e(!1)
                    })
                }), ["Market", "Exchange", "Tutorials", "Wallets"].map( (n, r) => I.jsx(Dp, {
                    title: n,
                    classprops: "my-2 text-lg"
                }, n + r))]
            })]
        })]
    })
}
  , S2 = () => I.jsxs("div", {
    className: "w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",
    children: [I.jsxs("div", {
        className: "w-full flex sm:flex-row flex-col justify-between items-center my-4",
        children: [I.jsx("div", {
            className: "flex flex-[0.5] justify-center items-center",
            children: I.jsx("img", {
                src: fy,
                alt: "logo",
                className: "w-32"
            })
        }), I.jsxs("div", {
            className: "flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",
            children: [I.jsx("p", {
                className: "text-white text-base text-center mx-2",
                children: "Market"
            }), I.jsx("p", {
                className: "text-white text-base text-center mx-2",
                children: "Exchange"
            }), I.jsx("p", {
                className: "text-white text-base text-center mx-2",
                children: "Tutorials"
            }), I.jsx("p", {
                className: "text-white text-base text-center mx-2",
                children: "Wallets"
            })]
        })]
    }), I.jsx("div", {
        className: "flex justify-center items-center flex-col mt-5",
        children: I.jsx("p", {
            className: "text-white text-sm text-center",
            children: "Come join us and hear for the unexpected miracle"
        })
    }), I.jsx("div", {
        className: "sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "
    }), I.jsxs("div", {
        className: "sm:w-[90%] w-full flex justify-between items-center mt-3",
        children: [I.jsx("p", {
            className: "text-white text-left text-xs",
            children: "@kryptverse2023"
        }), I.jsx("p", {
            className: "text-white text-right text-xs",
            children: "All rights reserved"
        })]
    })]
});
function k2(t) {
    return $s({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "title",
            attr: {},
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
            }
        }]
    })(t)
}
function C2(t) {
    return $s({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
            }
        }]
    })(t)
}
const N2 = "6.3.0";
function P2(t, e, n) {
    const r = e.split("|").map(i => i.trim());
    for (let i = 0; i < r.length; i++)
        switch (e) {
        case "any":
            return;
        case "bigint":
        case "boolean":
        case "number":
        case "string":
            if (typeof t === e)
                return
        }
    const s = new Error(`invalid value for type ${e}`);
    throw s.code = "INVALID_ARGUMENT",
    s.argument = `value.${n}`,
    s.value = t,
    s
}
async function et(t) {
    const e = Object.keys(t);
    return (await Promise.all(e.map(r => Promise.resolve(t[r])))).reduce( (r, s, i) => (r[e[i]] = s,
    r), {})
}
function _(t, e, n) {
    for (let r in e) {
        let s = e[r];
        const i = n ? n[r] : null;
        i && P2(s, i, r),
        Object.defineProperty(t, r, {
            enumerable: !0,
            value: s,
            writable: !1
        })
    }
}
function vi(t) {
    if (t == null)
        return "null";
    if (Array.isArray(t))
        return "[ " + t.map(vi).join(", ") + " ]";
    if (t instanceof Uint8Array) {
        const e = "0123456789abcdef";
        let n = "0x";
        for (let r = 0; r < t.length; r++)
            n += e[t[r] >> 4],
            n += e[t[r] & 15];
        return n
    }
    if (typeof t == "object" && typeof t.toJSON == "function")
        return vi(t.toJSON());
    switch (typeof t) {
    case "boolean":
    case "symbol":
        return t.toString();
    case "bigint":
        return BigInt(t).toString();
    case "number":
        return t.toString();
    case "string":
        return JSON.stringify(t);
    case "object":
        {
            const e = Object.keys(t);
            return e.sort(),
            "{ " + e.map(n => `${vi(n)}: ${vi(t[n])}`).join(", ") + " }"
        }
    }
    return "[ COULD NOT SERIALIZE ]"
}
function kn(t, e) {
    return t && t.code === e
}
function ad(t) {
    return kn(t, "CALL_EXCEPTION")
}
function tt(t, e, n) {
    {
        const s = [];
        if (n) {
            if ("message"in n || "code"in n || "name"in n)
                throw new Error(`value will overwrite populated values: ${vi(n)}`);
            for (const i in n) {
                const o = n[i];
                s.push(i + "=" + vi(o))
            }
        }
        s.push(`code=${e}`),
        s.push(`version=${N2}`),
        s.length && (t += " (" + s.join(", ") + ")")
    }
    let r;
    switch (e) {
    case "INVALID_ARGUMENT":
        r = new TypeError(t);
        break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
        r = new RangeError(t);
        break;
    default:
        r = new Error(t)
    }
    return _(r, {
        code: e
    }),
    n && Object.assign(r, n),
    r
}
function k(t, e, n, r) {
    if (!t)
        throw tt(e, n, r)
}
function v(t, e, n, r) {
    k(t, e, "INVALID_ARGUMENT", {
        argument: n,
        value: r
    })
}
function hy(t, e, n) {
    n == null && (n = ""),
    n && (n = ": " + n),
    k(t >= e, "missing arguemnt" + n, "MISSING_ARGUMENT", {
        count: t,
        expectedCount: e
    }),
    k(t <= e, "too many arguemnts" + n, "UNEXPECTED_ARGUMENT", {
        count: t,
        expectedCount: e
    })
}
const T2 = ["NFD", "NFC", "NFKD", "NFKC"].reduce( (t, e) => {
    try {
        if ("test".normalize(e) !== "test")
            throw new Error("bad");
        if (e === "NFD") {
            const n = String.fromCharCode(233).normalize("NFD")
              , r = String.fromCharCode(101, 769);
            if (n !== r)
                throw new Error("broken")
        }
        t.push(e)
    } catch {}
    return t
}
, []);
function I2(t) {
    k(T2.indexOf(t) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
        operation: "String.prototype.normalize",
        info: {
            form: t
        }
    })
}
function xa(t, e, n) {
    if (n == null && (n = ""),
    t !== e) {
        let r = n
          , s = "new";
        n && (r += ".",
        s += " " + n),
        k(!1, `private constructor; use ${r}from* methods`, "UNSUPPORTED_OPERATION", {
            operation: s
        })
    }
}
function dy(t, e, n) {
    if (t instanceof Uint8Array)
        return n ? new Uint8Array(t) : t;
    if (typeof t == "string" && t.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
        const r = new Uint8Array((t.length - 2) / 2);
        let s = 2;
        for (let i = 0; i < r.length; i++)
            r[i] = parseInt(t.substring(s, s + 2), 16),
            s += 2;
        return r
    }
    v(!1, "invalid BytesLike value", e || "value", t)
}
function J(t, e) {
    return dy(t, e, !1)
}
function it(t, e) {
    return dy(t, e, !0)
}
function me(t, e) {
    return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && t.length !== 2 + 2 * e || e === !0 && t.length % 2 !== 0)
}
function O2(t) {
    return me(t, !0) || t instanceof Uint8Array
}
const Mp = "0123456789abcdef";
function M(t) {
    const e = J(t);
    let n = "0x";
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        n += Mp[(s & 240) >> 4] + Mp[s & 15]
    }
    return n
}
function xe(t) {
    return "0x" + t.map(e => M(e).substring(2)).join("")
}
function Bi(t) {
    return me(t, !0) ? (t.length - 2) / 2 : J(t).length
}
function de(t, e, n) {
    const r = J(t);
    return n != null && n > r.length && k(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: r,
        length: r.length,
        offset: n
    }),
    M(r.slice(e ?? 0, n ?? r.length))
}
function B2(t, e, n) {
    const r = J(t);
    k(e >= r.length, "padding exceeds data length", "BUFFER_OVERRUN", {
        buffer: new Uint8Array(r),
        length: e,
        offset: e + 1
    });
    const s = new Uint8Array(e);
    return s.fill(0),
    n ? s.set(r, e - r.length) : s.set(r, 0),
    M(s)
}
function Vs(t, e) {
    return B2(t, e, !0)
}
const _c = BigInt(0)
  , qt = BigInt(1)
  , xi = 9007199254740991;
function qu(t, e) {
    const n = Hc(t, "value")
      , r = BigInt(K(e, "width"));
    if (k(n >> r === _c, "overflow", "NUMERIC_FAULT", {
        operation: "fromTwos",
        fault: "overflow",
        value: t
    }),
    n >> r - qt) {
        const s = (qt << r) - qt;
        return -((~n & s) + qt)
    }
    return n
}
function py(t, e) {
    let n = z(t, "value");
    const r = BigInt(K(e, "width"))
      , s = qt << r - qt;
    if (n < _c) {
        n = -n,
        k(n <= s, "too low", "NUMERIC_FAULT", {
            operation: "toTwos",
            fault: "overflow",
            value: t
        });
        const i = (qt << r) - qt;
        return (~n & i) + qt
    } else
        k(n < s, "too high", "NUMERIC_FAULT", {
            operation: "toTwos",
            fault: "overflow",
            value: t
        });
    return n
}
function fs(t, e) {
    const n = Hc(t, "value")
      , r = BigInt(K(e, "bits"));
    return n & (qt << r) - qt
}
function z(t, e) {
    switch (typeof t) {
    case "bigint":
        return t;
    case "number":
        return v(Number.isInteger(t), "underflow", e || "value", t),
        v(t >= -xi && t <= xi, "overflow", e || "value", t),
        BigInt(t);
    case "string":
        try {
            if (t === "")
                throw new Error("empty string");
            return t[0] === "-" && t[1] !== "-" ? -BigInt(t.substring(1)) : BigInt(t)
        } catch (n) {
            v(!1, `invalid BigNumberish string: ${n.message}`, e || "value", t)
        }
    }
    v(!1, "invalid BigNumberish value", e || "value", t)
}
function Hc(t, e) {
    const n = z(t, e);
    return k(n >= _c, "unsigned value cannot be negative", "NUMERIC_FAULT", {
        fault: "overflow",
        operation: "getUint",
        value: t
    }),
    n
}
const zp = "0123456789abcdef";
function jc(t) {
    if (t instanceof Uint8Array) {
        let e = "0x0";
        for (const n of t)
            e += zp[n >> 4],
            e += zp[n & 15];
        return BigInt(e)
    }
    return z(t)
}
function K(t, e) {
    switch (typeof t) {
    case "bigint":
        return v(t >= -xi && t <= xi, "overflow", e || "value", t),
        Number(t);
    case "number":
        return v(Number.isInteger(t), "underflow", e || "value", t),
        v(t >= -xi && t <= xi, "overflow", e || "value", t),
        t;
    case "string":
        try {
            if (t === "")
                throw new Error("empty string");
            return K(BigInt(t), e)
        } catch (n) {
            v(!1, `invalid numeric string: ${n.message}`, e || "value", t)
        }
    }
    v(!1, "invalid numeric value", e || "value", t)
}
function R2(t) {
    return K(jc(t))
}
function Jr(t, e) {
    let r = Hc(t, "value").toString(16);
    if (e == null)
        r.length % 2 && (r = "0" + r);
    else {
        const s = K(e, "width");
        for (k(s * 2 >= r.length, `value exceeds width (${s} bits)`, "NUMERIC_FAULT", {
            operation: "toBeHex",
            fault: "overflow",
            value: t
        }); r.length < s * 2; )
            r = "0" + r
    }
    return "0x" + r
}
function wt(t) {
    const e = Hc(t, "value");
    if (e === _c)
        return new Uint8Array([]);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const r = new Uint8Array(n.length / 2);
    for (let s = 0; s < r.length; s++) {
        const i = s * 2;
        r[s] = parseInt(n.substring(i, i + 2), 16)
    }
    return r
}
function Ei(t) {
    let e = M(O2(t) ? t : wt(t)).substring(2);
    for (; e.startsWith("0"); )
        e = e.substring(1);
    return e === "" && (e = "0"),
    "0x" + e
}
const L2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const _p = BigInt(58);
function U2(t) {
    let e = jc(J(t))
      , n = "";
    for (; e; )
        n = L2[Number(e % _p)] + n,
        e /= _p;
    return n
}
function F2(t) {
    t = atob(t);
    const e = new Uint8Array(t.length);
    for (let n = 0; n < t.length; n++)
        e[n] = t.charCodeAt(n);
    return J(e)
}
function D2(t) {
    const e = J(t);
    let n = "";
    for (let r = 0; r < e.length; r++)
        n += String.fromCharCode(e[r]);
    return btoa(n)
}
var Mi;
class gy {
    constructor(e, n, r) {
        E(this, "filter");
        E(this, "emitter");
        b(this, Mi, void 0);
        m(this, Mi, n),
        _(this, {
            emitter: e,
            filter: r
        })
    }
    async removeListener() {
        c(this, Mi) != null && await this.emitter.off(this.filter, c(this, Mi))
    }
}
Mi = new WeakMap;
function M2(t, e, n, r, s) {
    v(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", n)
}
function my(t, e, n, r, s) {
    if (t === "BAD_PREFIX" || t === "UNEXPECTED_CONTINUE") {
        let i = 0;
        for (let o = e + 1; o < n.length && n[o] >> 6 === 2; o++)
            i++;
        return i
    }
    return t === "OVERRUN" ? n.length - e - 1 : 0
}
function z2(t, e, n, r, s) {
    return t === "OVERLONG" ? (v(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s),
    r.push(s),
    0) : (r.push(65533),
    my(t, e, n))
}
const _2 = Object.freeze({
    error: M2,
    ignore: my,
    replace: z2
});
function H2(t, e) {
    e == null && (e = _2.error);
    const n = J(t, "bytes")
      , r = [];
    let s = 0;
    for (; s < n.length; ) {
        const i = n[s++];
        if (!(i >> 7)) {
            r.push(i);
            continue
        }
        let o = null
          , l = null;
        if ((i & 224) === 192)
            o = 1,
            l = 127;
        else if ((i & 240) === 224)
            o = 2,
            l = 2047;
        else if ((i & 248) === 240)
            o = 3,
            l = 65535;
        else {
            (i & 192) === 128 ? s += e("UNEXPECTED_CONTINUE", s - 1, n, r) : s += e("BAD_PREFIX", s - 1, n, r);
            continue
        }
        if (s - 1 + o >= n.length) {
            s += e("OVERRUN", s - 1, n, r);
            continue
        }
        let a = i & (1 << 8 - o - 1) - 1;
        for (let u = 0; u < o; u++) {
            let f = n[s];
            if ((f & 192) != 128) {
                s += e("MISSING_CONTINUE", s, n, r),
                a = null;
                break
            }
            a = a << 6 | f & 63,
            s++
        }
        if (a !== null) {
            if (a > 1114111) {
                s += e("OUT_OF_RANGE", s - 1 - o, n, r, a);
                continue
            }
            if (a >= 55296 && a <= 57343) {
                s += e("UTF16_SURROGATE", s - 1 - o, n, r, a);
                continue
            }
            if (a <= l) {
                s += e("OVERLONG", s - 1 - o, n, r, a);
                continue
            }
            r.push(a)
        }
    }
    return r
}
function Xn(t, e) {
    e != null && (I2(e),
    t = t.normalize(e));
    let n = [];
    for (let r = 0; r < t.length; r++) {
        const s = t.charCodeAt(r);
        if (s < 128)
            n.push(s);
        else if (s < 2048)
            n.push(s >> 6 | 192),
            n.push(s & 63 | 128);
        else if ((s & 64512) == 55296) {
            r++;
            const i = t.charCodeAt(r);
            v(r < t.length && (i & 64512) === 56320, "invalid surrogate pair", "str", t);
            const o = 65536 + ((s & 1023) << 10) + (i & 1023);
            n.push(o >> 18 | 240),
            n.push(o >> 12 & 63 | 128),
            n.push(o >> 6 & 63 | 128),
            n.push(o & 63 | 128)
        } else
            n.push(s >> 12 | 224),
            n.push(s >> 6 & 63 | 128),
            n.push(s & 63 | 128)
    }
    return new Uint8Array(n)
}
function j2(t) {
    return t.map(e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536,
    String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("")
}
function ud(t, e) {
    return j2(H2(t, e))
}
async function G2(t, e) {
    const n = t.url.split(":")[0].toLowerCase();
    k(n === "http" || n === "https", `unsupported protocol ${n}`, "UNSUPPORTED_OPERATION", {
        info: {
            protocol: n
        },
        operation: "request"
    }),
    k(n === "https" || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
        operation: "request"
    });
    let r;
    if (e) {
        const u = new AbortController;
        r = u.signal,
        e.addListener( () => {
            u.abort()
        }
        )
    }
    const s = {
        method: t.method,
        headers: new Headers(Array.from(t)),
        body: t.body || void 0,
        signal: r
    }
      , i = await fetch(t.url, s)
      , o = {};
    i.headers.forEach( (u, f) => {
        o[f.toLowerCase()] = u
    }
    );
    const l = await i.arrayBuffer()
      , a = l == null ? null : new Uint8Array(l);
    return {
        statusCode: i.status,
        statusMessage: i.statusText,
        headers: o,
        body: a
    }
}
const V2 = 12
  , Q2 = 250;
let Hp = G2;
const K2 = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$","i")
  , W2 = new RegExp("^ipfs://(ipfs/)?(.*)$","i");
let Tf = !1;
async function yy(t, e) {
    try {
        const n = t.match(K2);
        if (!n)
            throw new Error("invalid data");
        return new Vr(200,"OK",{
            "content-type": n[1] || "text/plain"
        },n[2] ? F2(n[3]) : Y2(n[3]))
    } catch {
        return new Vr(599,"BAD REQUEST (invalid data: URI)",{},null,new Qs(t))
    }
}
function wy(t) {
    async function e(n, r) {
        try {
            const s = n.match(W2);
            if (!s)
                throw new Error("invalid link");
            return new Qs(`${t}${s[2]}`)
        } catch {
            return new Vr(599,"BAD REQUEST (invalid IPFS URI)",{},null,new Qs(n))
        }
    }
    return e
}
const Ja = {
    data: yy,
    ipfs: wy("https://gateway.ipfs.io/ipfs/")
}
  , Ay = new WeakMap;
var ds, wr;
class J2 {
    constructor(e) {
        b(this, ds, void 0);
        b(this, wr, void 0);
        m(this, ds, []),
        m(this, wr, !1),
        Ay.set(e, () => {
            if (!c(this, wr)) {
                m(this, wr, !0);
                for (const n of c(this, ds))
                    setTimeout( () => {
                        n()
                    }
                    , 0);
                m(this, ds, [])
            }
        }
        )
    }
    addListener(e) {
        k(!c(this, wr), "singal already cancelled", "UNSUPPORTED_OPERATION", {
            operation: "fetchCancelSignal.addCancelListener"
        }),
        c(this, ds).push(e)
    }
    get cancelled() {
        return c(this, wr)
    }
    checkSignal() {
        k(!this.cancelled, "cancelled", "CANCELLED", {})
    }
}
ds = new WeakMap,
wr = new WeakMap;
function Ya(t) {
    if (t == null)
        throw new Error("missing signal; should not happen");
    return t.checkSignal(),
    t
}
var zi, _i, Qt, Rn, Hi, ji, ke, ht, Ln, ps, gs, ms, hn, Un, ys, qo;
const pc = class {
    constructor(e) {
        b(this, ys);
        b(this, zi, void 0);
        b(this, _i, void 0);
        b(this, Qt, void 0);
        b(this, Rn, void 0);
        b(this, Hi, void 0);
        b(this, ji, void 0);
        b(this, ke, void 0);
        b(this, ht, void 0);
        b(this, Ln, void 0);
        b(this, ps, void 0);
        b(this, gs, void 0);
        b(this, ms, void 0);
        b(this, hn, void 0);
        b(this, Un, void 0);
        m(this, ji, String(e)),
        m(this, zi, !1),
        m(this, _i, !0),
        m(this, Qt, {}),
        m(this, Rn, ""),
        m(this, Hi, 3e5),
        m(this, Un, {
            slotInterval: Q2,
            maxAttempts: V2
        })
    }
    get url() {
        return c(this, ji)
    }
    set url(e) {
        m(this, ji, String(e))
    }
    get body() {
        return c(this, ke) == null ? null : new Uint8Array(c(this, ke))
    }
    set body(e) {
        if (e == null)
            m(this, ke, void 0),
            m(this, ht, void 0);
        else if (typeof e == "string")
            m(this, ke, Xn(e)),
            m(this, ht, "text/plain");
        else if (e instanceof Uint8Array)
            m(this, ke, e),
            m(this, ht, "application/octet-stream");
        else if (typeof e == "object")
            m(this, ke, Xn(JSON.stringify(e))),
            m(this, ht, "application/json");
        else
            throw new Error("invalid body")
    }
    hasBody() {
        return c(this, ke) != null
    }
    get method() {
        return c(this, Rn) ? c(this, Rn) : this.hasBody() ? "POST" : "GET"
    }
    set method(e) {
        e == null && (e = ""),
        m(this, Rn, String(e).toUpperCase())
    }
    get headers() {
        const e = Object.assign({}, c(this, Qt));
        return c(this, Ln) && (e.authorization = `Basic ${D2(Xn(c(this, Ln)))}`),
        this.allowGzip && (e["accept-encoding"] = "gzip"),
        e["content-type"] == null && c(this, ht) && (e["content-type"] = c(this, ht)),
        this.body && (e["content-length"] = String(this.body.length)),
        e
    }
    getHeader(e) {
        return this.headers[e.toLowerCase()]
    }
    setHeader(e, n) {
        c(this, Qt)[String(e).toLowerCase()] = String(n)
    }
    clearHeaders() {
        m(this, Qt, {})
    }
    [Symbol.iterator]() {
        const e = this.headers
          , n = Object.keys(e);
        let r = 0;
        return {
            next: () => {
                if (r < n.length) {
                    const s = n[r++];
                    return {
                        value: [s, e[s]],
                        done: !1
                    }
                }
                return {
                    value: void 0,
                    done: !0
                }
            }
        }
    }
    get credentials() {
        return c(this, Ln) || null
    }
    setCredentials(e, n) {
        v(!e.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"),
        m(this, Ln, `${e}:${n}`)
    }
    get allowGzip() {
        return c(this, _i)
    }
    set allowGzip(e) {
        m(this, _i, !!e)
    }
    get allowInsecureAuthentication() {
        return !!c(this, zi)
    }
    set allowInsecureAuthentication(e) {
        m(this, zi, !!e)
    }
    get timeout() {
        return c(this, Hi)
    }
    set timeout(e) {
        v(e >= 0, "timeout must be non-zero", "timeout", e),
        m(this, Hi, e)
    }
    get preflightFunc() {
        return c(this, ps) || null
    }
    set preflightFunc(e) {
        m(this, ps, e)
    }
    get processFunc() {
        return c(this, gs) || null
    }
    set processFunc(e) {
        m(this, gs, e)
    }
    get retryFunc() {
        return c(this, ms) || null
    }
    set retryFunc(e) {
        m(this, ms, e)
    }
    toString() {
        return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${c(this, ke) ? M(c(this, ke)) : "null"}>`
    }
    setThrottleParams(e) {
        e.slotInterval != null && (c(this, Un).slotInterval = e.slotInterval),
        e.maxAttempts != null && (c(this, Un).maxAttempts = e.maxAttempts)
    }
    send() {
        return k(c(this, hn) == null, "request already sent", "UNSUPPORTED_OPERATION", {
            operation: "fetchRequest.send"
        }),
        m(this, hn, new J2(this)),
        T(this, ys, qo).call(this, 0, jp() + this.timeout, 0, this, new Vr(0,"",{},null,this))
    }
    cancel() {
        k(c(this, hn) != null, "request has not been sent", "UNSUPPORTED_OPERATION", {
            operation: "fetchRequest.cancel"
        });
        const e = Ay.get(this);
        if (!e)
            throw new Error("missing signal; should not happen");
        e()
    }
    redirect(e) {
        const n = this.url.split(":")[0].toLowerCase()
          , r = e.split(":")[0].toLowerCase();
        k(this.method === "GET" && (n !== "https" || r !== "http") && e.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
            operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(e)})`
        });
        const s = new pc(e);
        return s.method = "GET",
        s.allowGzip = this.allowGzip,
        s.timeout = this.timeout,
        m(s, Qt, Object.assign({}, c(this, Qt))),
        c(this, ke) && m(s, ke, new Uint8Array(c(this, ke))),
        m(s, ht, c(this, ht)),
        s
    }
    clone() {
        const e = new pc(this.url);
        return m(e, Rn, c(this, Rn)),
        c(this, ke) && m(e, ke, c(this, ke)),
        m(e, ht, c(this, ht)),
        m(e, Qt, Object.assign({}, c(this, Qt))),
        m(e, Ln, c(this, Ln)),
        this.allowGzip && (e.allowGzip = !0),
        e.timeout = this.timeout,
        this.allowInsecureAuthentication && (e.allowInsecureAuthentication = !0),
        m(e, ps, c(this, ps)),
        m(e, gs, c(this, gs)),
        m(e, ms, c(this, ms)),
        e
    }
    static lockConfig() {
        Tf = !0
    }
    static getGateway(e) {
        return Ja[e.toLowerCase()] || null
    }
    static registerGateway(e, n) {
        if (e = e.toLowerCase(),
        e === "http" || e === "https")
            throw new Error(`cannot intercept ${e}; use registerGetUrl`);
        if (Tf)
            throw new Error("gateways locked");
        Ja[e] = n
    }
    static registerGetUrl(e) {
        if (Tf)
            throw new Error("gateways locked");
        Hp = e
    }
    static createDataGateway() {
        return yy
    }
    static createIpfsGatewayFunc(e) {
        return wy(e)
    }
}
;
let Qs = pc;
zi = new WeakMap,
_i = new WeakMap,
Qt = new WeakMap,
Rn = new WeakMap,
Hi = new WeakMap,
ji = new WeakMap,
ke = new WeakMap,
ht = new WeakMap,
Ln = new WeakMap,
ps = new WeakMap,
gs = new WeakMap,
ms = new WeakMap,
hn = new WeakMap,
Un = new WeakMap,
ys = new WeakSet,
qo = async function(e, n, r, s, i) {
    var f, h, d;
    if (e >= c(this, Un).maxAttempts)
        return i.makeServerError("exceeded maximum retry limit");
    k(jp() <= n, "timeout", "TIMEOUT", {
        operation: "request.send",
        reason: "timeout",
        request: s
    }),
    r > 0 && await Z2(r);
    let o = this.clone();
    const l = (o.url.split(":")[0] || "").toLowerCase();
    if (l in Ja) {
        const g = await Ja[l](o.url, Ya(c(s, hn)));
        if (g instanceof Vr) {
            let A = g;
            if (this.processFunc) {
                Ya(c(s, hn));
                try {
                    A = await this.processFunc(o, A)
                } catch (x) {
                    (x.throttle == null || typeof x.stall != "number") && A.makeServerError("error in post-processing function", x).assertOk()
                }
            }
            return A
        }
        o = g
    }
    this.preflightFunc && (o = await this.preflightFunc(o));
    const a = await Hp(o, Ya(c(s, hn)));
    let u = new Vr(a.statusCode,a.statusMessage,a.headers,a.body,s);
    if (u.statusCode === 301 || u.statusCode === 302) {
        try {
            const g = u.headers.location || "";
            return T(f = o.redirect(g), ys, qo).call(f, e + 1, n, 0, s, u)
        } catch {}
        return u
    } else if (u.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, u, e))) {
        const g = u.headers["retry-after"];
        let A = c(this, Un).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
        return typeof g == "string" && g.match(/^[1-9][0-9]*$/) && (A = parseInt(g)),
        T(h = o.clone(), ys, qo).call(h, e + 1, n, A, s, u)
    }
    if (this.processFunc) {
        Ya(c(s, hn));
        try {
            u = await this.processFunc(o, u)
        } catch (g) {
            (g.throttle == null || typeof g.stall != "number") && u.makeServerError("error in post-processing function", g).assertOk();
            let A = c(this, Un).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
            return g.stall >= 0 && (A = g.stall),
            T(d = o.clone(), ys, qo).call(d, e + 1, n, A, s, u)
        }
    }
    return u
}
;
var $l, ql, ea, Kt, Gi, ws;
const bd = class {
    constructor(e, n, r, s, i) {
        b(this, $l, void 0);
        b(this, ql, void 0);
        b(this, ea, void 0);
        b(this, Kt, void 0);
        b(this, Gi, void 0);
        b(this, ws, void 0);
        m(this, $l, e),
        m(this, ql, n),
        m(this, ea, Object.keys(r).reduce( (o, l) => (o[l.toLowerCase()] = String(r[l]),
        o), {})),
        m(this, Kt, s == null ? null : new Uint8Array(s)),
        m(this, Gi, i || null),
        m(this, ws, {
            message: ""
        })
    }
    toString() {
        return `<FetchResponse status=${this.statusCode} body=${c(this, Kt) ? M(c(this, Kt)) : "null"}>`
    }
    get statusCode() {
        return c(this, $l)
    }
    get statusMessage() {
        return c(this, ql)
    }
    get headers() {
        return Object.assign({}, c(this, ea))
    }
    get body() {
        return c(this, Kt) == null ? null : new Uint8Array(c(this, Kt))
    }
    get bodyText() {
        try {
            return c(this, Kt) == null ? "" : ud(c(this, Kt))
        } catch {
            k(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
                operation: "bodyText",
                info: {
                    response: this
                }
            })
        }
    }
    get bodyJson() {
        try {
            return JSON.parse(this.bodyText)
        } catch {
            k(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
                operation: "bodyJson",
                info: {
                    response: this
                }
            })
        }
    }
    [Symbol.iterator]() {
        const e = this.headers
          , n = Object.keys(e);
        let r = 0;
        return {
            next: () => {
                if (r < n.length) {
                    const s = n[r++];
                    return {
                        value: [s, e[s]],
                        done: !1
                    }
                }
                return {
                    value: void 0,
                    done: !0
                }
            }
        }
    }
    makeServerError(e, n) {
        let r;
        e ? r = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})` : (e = `${this.statusCode} ${this.statusMessage}`,
        r = `CLIENT ESCALATED SERVER ERROR (${e})`);
        const s = new bd(599,r,this.headers,this.body,c(this, Gi) || void 0);
        return m(s, ws, {
            message: e,
            error: n
        }),
        s
    }
    throwThrottleError(e, n) {
        n == null ? n = -1 : v(Number.isInteger(n) && n >= 0, "invalid stall timeout", "stall", n);
        const r = new Error(e || "throttling requests");
        throw _(r, {
            stall: n,
            throttle: !0
        }),
        r
    }
    getHeader(e) {
        return this.headers[e.toLowerCase()]
    }
    hasBody() {
        return c(this, Kt) != null
    }
    get request() {
        return c(this, Gi)
    }
    ok() {
        return c(this, ws).message === "" && this.statusCode >= 200 && this.statusCode < 300
    }
    assertOk() {
        if (this.ok())
            return;
        let {message: e, error: n} = c(this, ws);
        e === "" && (e = `server response ${this.statusCode} ${this.statusMessage}`),
        k(!1, e, "SERVER_ERROR", {
            request: this.request || "unknown request",
            response: this,
            error: n
        })
    }
}
;
let Vr = bd;
$l = new WeakMap,
ql = new WeakMap,
ea = new WeakMap,
Kt = new WeakMap,
Gi = new WeakMap,
ws = new WeakMap;
function jp() {
    return new Date().getTime()
}
function Y2(t) {
    return Xn(t.replace(/%([0-9a-f][0-9a-f])/gi, (e, n) => String.fromCharCode(parseInt(n, 16))))
}
function Z2(t) {
    return new Promise(e => setTimeout(e, t))
}
const X2 = BigInt(-1)
  , jt = BigInt(0)
  , bi = BigInt(1)
  , $2 = BigInt(5)
  , ti = {};
let Ri = "0000";
for (; Ri.length < 80; )
    Ri += Ri;
function rs(t) {
    let e = Ri;
    for (; e.length < t; )
        e += e;
    return BigInt("1" + e.substring(0, t))
}
function Ko(t, e, n) {
    const r = BigInt(e.width);
    if (e.signed) {
        const s = bi << r - bi;
        k(n == null || t >= -s && t < s, "overflow", "NUMERIC_FAULT", {
            operation: n,
            fault: "overflow",
            value: t
        }),
        t > jt ? t = qu(fs(t, r), r) : t = -qu(fs(-t, r), r)
    } else {
        const s = bi << r;
        k(n == null || t >= 0 && t < s, "overflow", "NUMERIC_FAULT", {
            operation: n,
            fault: "overflow",
            value: t
        }),
        t = (t % s + s) % s & s - bi
    }
    return t
}
function If(t) {
    typeof t == "number" && (t = `fixed128x${t}`);
    let e = !0
      , n = 128
      , r = 18;
    if (typeof t == "string") {
        if (t !== "fixed")
            if (t === "ufixed")
                e = !1;
            else {
                const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                v(i, "invalid fixed format", "format", t),
                e = i[1] !== "u",
                n = parseInt(i[2]),
                r = parseInt(i[3])
            }
    } else if (t) {
        const i = t
          , o = (l, a, u) => i[l] == null ? u : (v(typeof i[l] === a, "invalid fixed format (" + l + " not " + a + ")", "format." + l, i[l]),
        i[l]);
        e = o("signed", "boolean", e),
        n = o("width", "number", n),
        r = o("decimals", "number", r)
    }
    v(n % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", n),
    v(r <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", r);
    const s = (e ? "" : "u") + "fixed" + String(n) + "x" + String(r);
    return {
        signed: e,
        width: n,
        decimals: r,
        name: s
    }
}
function q2(t, e) {
    let n = "";
    t < jt && (n = "-",
    t *= X2);
    let r = t.toString();
    if (e === 0)
        return n + r;
    for (; r.length <= e; )
        r = Ri + r;
    const s = r.length - e;
    for (r = r.substring(0, s) + "." + r.substring(s); r[0] === "0" && r[1] !== "."; )
        r = r.substring(1);
    for (; r[r.length - 1] === "0" && r[r.length - 2] !== "."; )
        r = r.substring(0, r.length - 1);
    return n + r
}
var Wt, ne, Ve, Fn, os, Jt, Nn, ta, M0, na, z0, ra, _0, sa, H0;
const dr = class {
    constructor(e, n, r) {
        b(this, Fn);
        b(this, Jt);
        b(this, ta);
        b(this, na);
        b(this, ra);
        b(this, sa);
        E(this, "format");
        b(this, Wt, void 0);
        b(this, ne, void 0);
        b(this, Ve, void 0);
        E(this, "_value");
        xa(e, ti, "FixedNumber"),
        m(this, ne, n),
        m(this, Wt, r);
        const s = q2(n, r.decimals);
        _(this, {
            format: r.name,
            _value: s
        }),
        m(this, Ve, rs(r.decimals))
    }
    get signed() {
        return c(this, Wt).signed
    }
    get width() {
        return c(this, Wt).width
    }
    get decimals() {
        return c(this, Wt).decimals
    }
    get value() {
        return c(this, ne)
    }
    addUnsafe(e) {
        return T(this, ta, M0).call(this, e)
    }
    add(e) {
        return T(this, ta, M0).call(this, e, "add")
    }
    subUnsafe(e) {
        return T(this, na, z0).call(this, e)
    }
    sub(e) {
        return T(this, na, z0).call(this, e, "sub")
    }
    mulUnsafe(e) {
        return T(this, ra, _0).call(this, e)
    }
    mul(e) {
        return T(this, ra, _0).call(this, e, "mul")
    }
    mulSignal(e) {
        T(this, Fn, os).call(this, e);
        const n = c(this, ne) * c(e, ne);
        return k(n % c(this, Ve) === jt, "precision lost during signalling mul", "NUMERIC_FAULT", {
            operation: "mulSignal",
            fault: "underflow",
            value: this
        }),
        T(this, Jt, Nn).call(this, n / c(this, Ve), "mulSignal")
    }
    divUnsafe(e) {
        return T(this, sa, H0).call(this, e)
    }
    div(e) {
        return T(this, sa, H0).call(this, e, "div")
    }
    divSignal(e) {
        k(c(e, ne) !== jt, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this
        }),
        T(this, Fn, os).call(this, e);
        const n = c(this, ne) * c(this, Ve);
        return k(n % c(e, ne) === jt, "precision lost during signalling div", "NUMERIC_FAULT", {
            operation: "divSignal",
            fault: "underflow",
            value: this
        }),
        T(this, Jt, Nn).call(this, n / c(e, ne), "divSignal")
    }
    cmp(e) {
        let n = this.value
          , r = e.value;
        const s = this.decimals - e.decimals;
        return s > 0 ? r *= rs(s) : s < 0 && (n *= rs(-s)),
        n < r || n > r ? -1 : 0
    }
    eq(e) {
        return this.cmp(e) === 0
    }
    lt(e) {
        return this.cmp(e) < 0
    }
    lte(e) {
        return this.cmp(e) <= 0
    }
    gt(e) {
        return this.cmp(e) > 0
    }
    gte(e) {
        return this.cmp(e) >= 0
    }
    floor() {
        let e = c(this, ne);
        return c(this, ne) < jt && (e -= c(this, Ve) - bi),
        e = c(this, ne) / c(this, Ve) * c(this, Ve),
        T(this, Jt, Nn).call(this, e, "floor")
    }
    ceiling() {
        let e = c(this, ne);
        return c(this, ne) > jt && (e += c(this, Ve) - bi),
        e = c(this, ne) / c(this, Ve) * c(this, Ve),
        T(this, Jt, Nn).call(this, e, "ceiling")
    }
    round(e) {
        if (e == null && (e = 0),
        e >= this.decimals)
            return this;
        const n = this.decimals - e
          , r = $2 * rs(n - 1);
        let s = this.value + r;
        const i = rs(n);
        return s = s / i * i,
        Ko(s, c(this, Wt), "round"),
        new dr(ti,s,c(this, Wt))
    }
    isZero() {
        return c(this, ne) === jt
    }
    isNegative() {
        return c(this, ne) < jt
    }
    toString() {
        return this._value
    }
    toUnsafeFloat() {
        return parseFloat(this.toString())
    }
    toFormat(e) {
        return dr.fromString(this.toString(), e)
    }
    static fromValue(e, n, r) {
        n == null && (n = 0);
        const s = If(r);
        let i = z(e, "value");
        const o = n - s.decimals;
        if (o > 0) {
            const l = rs(o);
            k(i % l === jt, "value loses precision for format", "NUMERIC_FAULT", {
                operation: "fromValue",
                fault: "underflow",
                value: e
            }),
            i /= l
        } else
            o < 0 && (i *= rs(-o));
        return Ko(i, s, "fromValue"),
        new dr(ti,i,s)
    }
    static fromString(e, n) {
        const r = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
        v(r && r[2].length + r[3].length > 0, "invalid FixedNumber string value", "value", e);
        const s = If(n);
        let i = r[2] || "0"
          , o = r[3] || "";
        for (; o.length < s.decimals; )
            o += Ri;
        k(o.substring(s.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
            operation: "fromString",
            fault: "underflow",
            value: e
        }),
        o = o.substring(0, s.decimals);
        const l = BigInt(r[1] + i + o);
        return Ko(l, s, "fromString"),
        new dr(ti,l,s)
    }
    static fromBytes(e, n) {
        let r = jc(J(e, "value"));
        const s = If(n);
        return s.signed && (r = qu(r, s.width)),
        Ko(r, s, "fromBytes"),
        new dr(ti,r,s)
    }
}
;
let D0 = dr;
Wt = new WeakMap,
ne = new WeakMap,
Ve = new WeakMap,
Fn = new WeakSet,
os = function(e) {
    v(this.format === e.format, "incompatible format; use fixedNumber.toFormat", "other", e)
}
,
Jt = new WeakSet,
Nn = function(e, n) {
    return e = Ko(e, c(this, Wt), n),
    new dr(ti,e,c(this, Wt))
}
,
ta = new WeakSet,
M0 = function(e, n) {
    return T(this, Fn, os).call(this, e),
    T(this, Jt, Nn).call(this, c(this, ne) + c(e, ne), n)
}
,
na = new WeakSet,
z0 = function(e, n) {
    return T(this, Fn, os).call(this, e),
    T(this, Jt, Nn).call(this, c(this, ne) - c(e, ne), n)
}
,
ra = new WeakSet,
_0 = function(e, n) {
    return T(this, Fn, os).call(this, e),
    T(this, Jt, Nn).call(this, c(this, ne) * c(e, ne) / c(this, Ve), n)
}
,
sa = new WeakSet,
H0 = function(e, n) {
    return k(c(e, ne) !== jt, "division by zero", "NUMERIC_FAULT", {
        operation: "div",
        fault: "divide-by-zero",
        value: this
    }),
    T(this, Fn, os).call(this, e),
    T(this, Jt, Nn).call(this, c(this, ne) * c(this, Ve) / c(e, ne), n)
}
;
function eA(t) {
    let e = t.toString(16);
    for (; e.length < 2; )
        e = "0" + e;
    return "0x" + e
}
function Gp(t, e, n) {
    let r = 0;
    for (let s = 0; s < n; s++)
        r = r * 256 + t[e + s];
    return r
}
function Vp(t, e, n, r) {
    const s = [];
    for (; n < e + 1 + r; ) {
        const i = vy(t, n);
        s.push(i.result),
        n += i.consumed,
        k(n <= e + 1 + r, "child data too short", "BUFFER_OVERRUN", {
            buffer: t,
            length: r,
            offset: e
        })
    }
    return {
        consumed: 1 + r,
        result: s
    }
}
function vy(t, e) {
    k(t.length !== 0, "data too short", "BUFFER_OVERRUN", {
        buffer: t,
        length: 0,
        offset: 1
    });
    const n = r => {
        k(r <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
            buffer: t,
            length: t.length,
            offset: r
        })
    }
    ;
    if (t[e] >= 248) {
        const r = t[e] - 247;
        n(e + 1 + r);
        const s = Gp(t, e + 1, r);
        return n(e + 1 + r + s),
        Vp(t, e, e + 1 + r, r + s)
    } else if (t[e] >= 192) {
        const r = t[e] - 192;
        return n(e + 1 + r),
        Vp(t, e, e + 1, r)
    } else if (t[e] >= 184) {
        const r = t[e] - 183;
        n(e + 1 + r);
        const s = Gp(t, e + 1, r);
        n(e + 1 + r + s);
        const i = M(t.slice(e + 1 + r, e + 1 + r + s));
        return {
            consumed: 1 + r + s,
            result: i
        }
    } else if (t[e] >= 128) {
        const r = t[e] - 128;
        n(e + 1 + r);
        const s = M(t.slice(e + 1, e + 1 + r));
        return {
            consumed: 1 + r,
            result: s
        }
    }
    return {
        consumed: 1,
        result: eA(t[e])
    }
}
function cd(t) {
    const e = J(t, "data")
      , n = vy(e, 0);
    return v(n.consumed === e.length, "unexpected junk after rlp payload", "data", t),
    n.result
}
function Qp(t) {
    const e = [];
    for (; t; )
        e.unshift(t & 255),
        t >>= 8;
    return e
}
function xy(t) {
    if (Array.isArray(t)) {
        let r = [];
        if (t.forEach(function(i) {
            r = r.concat(xy(i))
        }),
        r.length <= 55)
            return r.unshift(192 + r.length),
            r;
        const s = Qp(r.length);
        return s.unshift(247 + s.length),
        s.concat(r)
    }
    const e = Array.prototype.slice.call(J(t, "object"));
    if (e.length === 1 && e[0] <= 127)
        return e;
    if (e.length <= 55)
        return e.unshift(128 + e.length),
        e;
    const n = Qp(e.length);
    return n.unshift(183 + n.length),
    n.concat(e)
}
const Kp = "0123456789abcdef";
function Ml(t) {
    let e = "0x";
    for (const n of xy(t))
        e += Kp[n >> 4],
        e += Kp[n & 15];
    return e
}
const tA = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
function nA(t, e) {
    v(typeof t == "string", "value must be a string", "value", t);
    let n = 18;
    if (typeof e == "string") {
        const r = tA.indexOf(e);
        v(r >= 0, "invalid unit", "unit", e),
        n = 3 * r
    } else
        e != null && (n = K(e, "unit"));
    return D0.fromString(t, {
        decimals: n
    }).value
}
function rA(t) {
    return nA(t, 18)
}
const We = 32
  , j0 = new Uint8Array(We)
  , sA = ["then"]
  , Za = {};
function Xa(t, e) {
    const n = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
    throw n.error = e,
    n
}
var Ar;
const Al = class extends Array {
    constructor(...n) {
        const r = n[0];
        let s = n[1]
          , i = (n[2] || []).slice()
          , o = !0;
        r !== Za && (s = n,
        i = [],
        o = !1);
        super(s.length);
        b(this, Ar, void 0);
        s.forEach( (a, u) => {
            this[u] = a
        }
        );
        const l = i.reduce( (a, u) => (typeof u == "string" && a.set(u, (a.get(u) || 0) + 1),
        a), new Map);
        if (m(this, Ar, Object.freeze(s.map( (a, u) => {
            const f = i[u];
            return f != null && l.get(f) === 1 ? f : null
        }
        ))),
        !!o)
            return Object.freeze(this),
            new Proxy(this,{
                get: (a, u, f) => {
                    if (typeof u == "string") {
                        if (u.match(/^[0-9]+$/)) {
                            const d = K(u, "%index");
                            if (d < 0 || d >= this.length)
                                throw new RangeError("out of result range");
                            const g = a[d];
                            return g instanceof Error && Xa(`index ${d}`, g),
                            g
                        }
                        if (sA.indexOf(u) >= 0)
                            return Reflect.get(a, u, f);
                        const h = a[u];
                        if (h instanceof Function)
                            return function(...d) {
                                return h.apply(this === f ? a : this, d)
                            }
                            ;
                        if (!(u in a))
                            return a.getValue.apply(this === f ? a : this, [u])
                    }
                    return Reflect.get(a, u, f)
                }
            })
    }
    toArray() {
        const n = [];
        return this.forEach( (r, s) => {
            r instanceof Error && Xa(`index ${s}`, r),
            n.push(r)
        }
        ),
        n
    }
    toObject() {
        return c(this, Ar).reduce( (n, r, s) => (k(r != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
            operation: "toObject()"
        }),
        r in n || (n[r] = this.getValue(r)),
        n), {})
    }
    slice(n, r) {
        n == null && (n = 0),
        n < 0 && (n += this.length,
        n < 0 && (n = 0)),
        r == null && (r = this.length),
        r < 0 && (r += this.length,
        r < 0 && (r = 0)),
        r > this.length && (r = this.length);
        const s = []
          , i = [];
        for (let o = n; o < r; o++)
            s.push(this[o]),
            i.push(c(this, Ar)[o]);
        return new Al(Za,s,i)
    }
    filter(n, r) {
        const s = []
          , i = [];
        for (let o = 0; o < this.length; o++) {
            const l = this[o];
            l instanceof Error && Xa(`index ${o}`, l),
            n.call(r, l, o, this) && (s.push(l),
            i.push(c(this, Ar)[o]))
        }
        return new Al(Za,s,i)
    }
    getValue(n) {
        const r = c(this, Ar).indexOf(n);
        if (r === -1)
            return;
        const s = this[r];
        return s instanceof Error && Xa(`property ${JSON.stringify(n)}`, s.error),
        s
    }
    static fromItems(n, r) {
        return new Al(Za,n,r)
    }
}
;
let ec = Al;
Ar = new WeakMap;
function Wp(t) {
    let e = wt(t);
    return k(e.length <= We, "value out-of-bounds", "BUFFER_OVERRUN", {
        buffer: e,
        length: We,
        offset: e.length
    }),
    e.length !== We && (e = it(xe([j0.slice(e.length % We), e]))),
    e
}
class ir {
    constructor(e, n, r, s) {
        E(this, "name");
        E(this, "type");
        E(this, "localName");
        E(this, "dynamic");
        _(this, {
            name: e,
            type: n,
            localName: r,
            dynamic: s
        }, {
            name: "string",
            type: "string",
            localName: "string",
            dynamic: "boolean"
        })
    }
    _throwError(e, n) {
        v(!1, e, this.localName, n)
    }
}
var Dn, As, Vi, vu;
class G0 {
    constructor() {
        b(this, Vi);
        b(this, Dn, void 0);
        b(this, As, void 0);
        m(this, Dn, []),
        m(this, As, 0)
    }
    get data() {
        return xe(c(this, Dn))
    }
    get length() {
        return c(this, As)
    }
    appendWriter(e) {
        return T(this, Vi, vu).call(this, it(e.data))
    }
    writeBytes(e) {
        let n = it(e);
        const r = n.length % We;
        return r && (n = it(xe([n, j0.slice(r)]))),
        T(this, Vi, vu).call(this, n)
    }
    writeValue(e) {
        return T(this, Vi, vu).call(this, Wp(e))
    }
    writeUpdatableValue() {
        const e = c(this, Dn).length;
        return c(this, Dn).push(j0),
        m(this, As, c(this, As) + We),
        n => {
            c(this, Dn)[e] = Wp(n)
        }
    }
}
Dn = new WeakMap,
As = new WeakMap,
Vi = new WeakSet,
vu = function(e) {
    return c(this, Dn).push(e),
    m(this, As, c(this, As) + e.length),
    e.length
}
;
var dt, It, gc, Ey;
const Sd = class {
    constructor(e, n) {
        b(this, gc);
        E(this, "allowLoose");
        b(this, dt, void 0);
        b(this, It, void 0);
        _(this, {
            allowLoose: !!n
        }),
        m(this, dt, it(e)),
        m(this, It, 0)
    }
    get data() {
        return M(c(this, dt))
    }
    get dataLength() {
        return c(this, dt).length
    }
    get consumed() {
        return c(this, It)
    }
    get bytes() {
        return new Uint8Array(c(this, dt))
    }
    subReader(e) {
        return new Sd(c(this, dt).slice(c(this, It) + e),this.allowLoose)
    }
    readBytes(e, n) {
        let r = T(this, gc, Ey).call(this, 0, e, !!n);
        return m(this, It, c(this, It) + r.length),
        r.slice(0, e)
    }
    readValue() {
        return jc(this.readBytes(We))
    }
    readIndex() {
        return R2(this.readBytes(We))
    }
}
;
let V0 = Sd;
dt = new WeakMap,
It = new WeakMap,
gc = new WeakSet,
Ey = function(e, n, r) {
    let s = Math.ceil(n / We) * We;
    return c(this, It) + s > c(this, dt).length && (this.allowLoose && r && c(this, It) + n <= c(this, dt).length ? s = n : k(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
        buffer: it(c(this, dt)),
        length: c(this, dt).length,
        offset: c(this, It) + s
    })),
    c(this, dt).slice(c(this, It), c(this, It) + s)
}
;
function Q0(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error(`Wrong positive integer: ${t}`)
}
function iA(t) {
    if (typeof t != "boolean")
        throw new Error(`Expected boolean, not ${t}`)
}
function by(t, ...e) {
    if (!(t instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length))
        throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}
function oA(t) {
    if (typeof t != "function" || typeof t.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Q0(t.outputLen),
    Q0(t.blockLen)
}
function lA(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function aA(t, e) {
    by(t);
    const n = e.outputLen;
    if (t.length < n)
        throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
const mt = {
    number: Q0,
    bool: iA,
    bytes: by,
    hash: oA,
    exists: lA,
    output: aA
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const uA = t => new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
  , Of = t => new DataView(t.buffer,t.byteOffset,t.byteLength)
  , cn = (t, e) => t << 32 - e | t >>> e
  , cA = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!cA)
    throw new Error("Non little-endian hardware is not supported");
Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function fA(t) {
    if (typeof t != "string")
        throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);
    return new TextEncoder().encode(t)
}
function Ea(t) {
    if (typeof t == "string" && (t = fA(t)),
    !(t instanceof Uint8Array))
        throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
    return t
}
class tc {
    clone() {
        return this._cloneInto()
    }
}
function ba(t) {
    const e = r => t().update(Ea(r)).digest()
      , n = t();
    return e.outputLen = n.outputLen,
    e.blockLen = n.blockLen,
    e.create = () => t(),
    e
}
function hA(t) {
    const e = (r, s) => t(s).update(Ea(r)).digest()
      , n = t({});
    return e.outputLen = n.outputLen,
    e.blockLen = n.blockLen,
    e.create = r => t(r),
    e
}
class Sy extends tc {
    constructor(e, n) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        mt.hash(e);
        const r = Ea(n);
        if (this.iHash = e.create(),
        !(this.iHash instanceof tc))
            throw new TypeError("Expected instance of class which extends utils.Hash");
        const s = this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const i = new Uint8Array(s);
        i.set(r.length > this.iHash.blockLen ? e.create().update(r).digest() : r);
        for (let o = 0; o < i.length; o++)
            i[o] ^= 54;
        this.iHash.update(i),
        this.oHash = e.create();
        for (let o = 0; o < i.length; o++)
            i[o] ^= 106;
        this.oHash.update(i),
        i.fill(0)
    }
    update(e) {
        return mt.exists(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        mt.exists(this),
        mt.bytes(e, this.outputLen),
        this.finished = !0,
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e),
        e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash: n, iHash: r, finished: s, destroyed: i, blockLen: o, outputLen: l} = this;
        return e = e,
        e.finished = s,
        e.destroyed = i,
        e.blockLen = o,
        e.outputLen = l,
        e.oHash = n._cloneInto(e.oHash),
        e.iHash = r._cloneInto(e.iHash),
        e
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
const ky = (t, e, n) => new Sy(t,e).update(n).digest();
ky.create = (t, e) => new Sy(t,e);
function dA(t, e, n, r) {
    if (typeof t.setBigUint64 == "function")
        return t.setBigUint64(e, n, r);
    const s = BigInt(32)
      , i = BigInt(4294967295)
      , o = Number(n >> s & i)
      , l = Number(n & i)
      , a = r ? 4 : 0
      , u = r ? 0 : 4;
    t.setUint32(e + a, o, r),
    t.setUint32(e + u, l, r)
}
class Cy extends tc {
    constructor(e, n, r, s) {
        super(),
        this.blockLen = e,
        this.outputLen = n,
        this.padOffset = r,
        this.isLE = s,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(e),
        this.view = Of(this.buffer)
    }
    update(e) {
        mt.exists(this);
        const {view: n, buffer: r, blockLen: s} = this;
        e = Ea(e);
        const i = e.length;
        for (let o = 0; o < i; ) {
            const l = Math.min(s - this.pos, i - o);
            if (l === s) {
                const a = Of(e);
                for (; s <= i - o; o += s)
                    this.process(a, o);
                continue
            }
            r.set(e.subarray(o, o + l), this.pos),
            this.pos += l,
            o += l,
            this.pos === s && (this.process(n, 0),
            this.pos = 0)
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        mt.exists(this),
        mt.output(e, this),
        this.finished = !0;
        const {buffer: n, view: r, blockLen: s, isLE: i} = this;
        let {pos: o} = this;
        n[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > s - o && (this.process(r, 0),
        o = 0);
        for (let a = o; a < s; a++)
            n[a] = 0;
        dA(r, s - 8, BigInt(this.length * 8), i),
        this.process(r, 0);
        const l = Of(e);
        this.get().forEach( (a, u) => l.setUint32(4 * u, a, i))
    }
    digest() {
        const {buffer: e, outputLen: n} = this;
        this.digestInto(e);
        const r = e.slice(0, n);
        return this.destroy(),
        r
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        const {blockLen: n, buffer: r, length: s, finished: i, destroyed: o, pos: l} = this;
        return e.length = s,
        e.pos = l,
        e.finished = i,
        e.destroyed = o,
        s % n && e.buffer.set(r),
        e
    }
}
const pA = (t, e, n) => t & e ^ ~t & n
  , gA = (t, e, n) => t & e ^ t & n ^ e & n
  , mA = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , lr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , ar = new Uint32Array(64);
class yA extends Cy {
    constructor() {
        super(64, 32, 8, !1),
        this.A = lr[0] | 0,
        this.B = lr[1] | 0,
        this.C = lr[2] | 0,
        this.D = lr[3] | 0,
        this.E = lr[4] | 0,
        this.F = lr[5] | 0,
        this.G = lr[6] | 0,
        this.H = lr[7] | 0
    }
    get() {
        const {A: e, B: n, C: r, D: s, E: i, F: o, G: l, H: a} = this;
        return [e, n, r, s, i, o, l, a]
    }
    set(e, n, r, s, i, o, l, a) {
        this.A = e | 0,
        this.B = n | 0,
        this.C = r | 0,
        this.D = s | 0,
        this.E = i | 0,
        this.F = o | 0,
        this.G = l | 0,
        this.H = a | 0
    }
    process(e, n) {
        for (let h = 0; h < 16; h++,
        n += 4)
            ar[h] = e.getUint32(n, !1);
        for (let h = 16; h < 64; h++) {
            const d = ar[h - 15]
              , g = ar[h - 2]
              , A = cn(d, 7) ^ cn(d, 18) ^ d >>> 3
              , x = cn(g, 17) ^ cn(g, 19) ^ g >>> 10;
            ar[h] = x + ar[h - 7] + A + ar[h - 16] | 0
        }
        let {A: r, B: s, C: i, D: o, E: l, F: a, G: u, H: f} = this;
        for (let h = 0; h < 64; h++) {
            const d = cn(l, 6) ^ cn(l, 11) ^ cn(l, 25)
              , g = f + d + pA(l, a, u) + mA[h] + ar[h] | 0
              , x = (cn(r, 2) ^ cn(r, 13) ^ cn(r, 22)) + gA(r, s, i) | 0;
            f = u,
            u = a,
            a = l,
            l = o + g | 0,
            o = i,
            i = s,
            s = r,
            r = g + x | 0
        }
        r = r + this.A | 0,
        s = s + this.B | 0,
        i = i + this.C | 0,
        o = o + this.D | 0,
        l = l + this.E | 0,
        a = a + this.F | 0,
        u = u + this.G | 0,
        f = f + this.H | 0,
        this.set(r, s, i, o, l, a, u, f)
    }
    roundClean() {
        ar.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
const wA = ba( () => new yA)
  , $a = BigInt(2 ** 32 - 1)
  , K0 = BigInt(32);
function Ny(t, e=!1) {
    return e ? {
        h: Number(t & $a),
        l: Number(t >> K0 & $a)
    } : {
        h: Number(t >> K0 & $a) | 0,
        l: Number(t & $a) | 0
    }
}
function AA(t, e=!1) {
    let n = new Uint32Array(t.length)
      , r = new Uint32Array(t.length);
    for (let s = 0; s < t.length; s++) {
        const {h: i, l: o} = Ny(t[s], e);
        [n[s],r[s]] = [i, o]
    }
    return [n, r]
}
const vA = (t, e) => BigInt(t >>> 0) << K0 | BigInt(e >>> 0)
  , xA = (t, e, n) => t >>> n
  , EA = (t, e, n) => t << 32 - n | e >>> n
  , bA = (t, e, n) => t >>> n | e << 32 - n
  , SA = (t, e, n) => t << 32 - n | e >>> n
  , kA = (t, e, n) => t << 64 - n | e >>> n - 32
  , CA = (t, e, n) => t >>> n - 32 | e << 64 - n
  , NA = (t, e) => e
  , PA = (t, e) => t
  , TA = (t, e, n) => t << n | e >>> 32 - n
  , IA = (t, e, n) => e << n | t >>> 32 - n
  , OA = (t, e, n) => e << n - 32 | t >>> 64 - n
  , BA = (t, e, n) => t << n - 32 | e >>> 64 - n;
function RA(t, e, n, r) {
    const s = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (s / 2 ** 32 | 0) | 0,
        l: s | 0
    }
}
const LA = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0)
  , UA = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0
  , FA = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0)
  , DA = (t, e, n, r, s) => e + n + r + s + (t / 2 ** 32 | 0) | 0
  , MA = (t, e, n, r, s) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (s >>> 0)
  , zA = (t, e, n, r, s, i) => e + n + r + s + i + (t / 2 ** 32 | 0) | 0
  , H = {
    fromBig: Ny,
    split: AA,
    toBig: vA,
    shrSH: xA,
    shrSL: EA,
    rotrSH: bA,
    rotrSL: SA,
    rotrBH: kA,
    rotrBL: CA,
    rotr32H: NA,
    rotr32L: PA,
    rotlSH: TA,
    rotlSL: IA,
    rotlBH: OA,
    rotlBL: BA,
    add: RA,
    add3L: LA,
    add3H: UA,
    add4L: FA,
    add4H: DA,
    add5H: zA,
    add5L: MA
}
  , [_A,HA] = H.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t)))
  , ur = new Uint32Array(80)
  , cr = new Uint32Array(80);
class fd extends Cy {
    constructor() {
        super(128, 64, 16, !1),
        this.Ah = 1779033703,
        this.Al = -205731576,
        this.Bh = -1150833019,
        this.Bl = -2067093701,
        this.Ch = 1013904242,
        this.Cl = -23791573,
        this.Dh = -1521486534,
        this.Dl = 1595750129,
        this.Eh = 1359893119,
        this.El = -1377402159,
        this.Fh = -1694144372,
        this.Fl = 725511199,
        this.Gh = 528734635,
        this.Gl = -79577749,
        this.Hh = 1541459225,
        this.Hl = 327033209
    }
    get() {
        const {Ah: e, Al: n, Bh: r, Bl: s, Ch: i, Cl: o, Dh: l, Dl: a, Eh: u, El: f, Fh: h, Fl: d, Gh: g, Gl: A, Hh: x, Hl: N} = this;
        return [e, n, r, s, i, o, l, a, u, f, h, d, g, A, x, N]
    }
    set(e, n, r, s, i, o, l, a, u, f, h, d, g, A, x, N) {
        this.Ah = e | 0,
        this.Al = n | 0,
        this.Bh = r | 0,
        this.Bl = s | 0,
        this.Ch = i | 0,
        this.Cl = o | 0,
        this.Dh = l | 0,
        this.Dl = a | 0,
        this.Eh = u | 0,
        this.El = f | 0,
        this.Fh = h | 0,
        this.Fl = d | 0,
        this.Gh = g | 0,
        this.Gl = A | 0,
        this.Hh = x | 0,
        this.Hl = N | 0
    }
    process(e, n) {
        for (let w = 0; w < 16; w++,
        n += 4)
            ur[w] = e.getUint32(n),
            cr[w] = e.getUint32(n += 4);
        for (let w = 16; w < 80; w++) {
            const S = ur[w - 15] | 0
              , P = cr[w - 15] | 0
              , B = H.rotrSH(S, P, 1) ^ H.rotrSH(S, P, 8) ^ H.shrSH(S, P, 7)
              , F = H.rotrSL(S, P, 1) ^ H.rotrSL(S, P, 8) ^ H.shrSL(S, P, 7)
              , O = ur[w - 2] | 0
              , V = cr[w - 2] | 0
              , j = H.rotrSH(O, V, 19) ^ H.rotrBH(O, V, 61) ^ H.shrSH(O, V, 6)
              , Ge = H.rotrSL(O, V, 19) ^ H.rotrBL(O, V, 61) ^ H.shrSL(O, V, 6)
              , an = H.add4L(F, Ge, cr[w - 7], cr[w - 16])
              , Cn = H.add4H(an, B, j, ur[w - 7], ur[w - 16]);
            ur[w] = Cn | 0,
            cr[w] = an | 0
        }
        let {Ah: r, Al: s, Bh: i, Bl: o, Ch: l, Cl: a, Dh: u, Dl: f, Eh: h, El: d, Fh: g, Fl: A, Gh: x, Gl: N, Hh: y, Hl: p} = this;
        for (let w = 0; w < 80; w++) {
            const S = H.rotrSH(h, d, 14) ^ H.rotrSH(h, d, 18) ^ H.rotrBH(h, d, 41)
              , P = H.rotrSL(h, d, 14) ^ H.rotrSL(h, d, 18) ^ H.rotrBL(h, d, 41)
              , B = h & g ^ ~h & x
              , F = d & A ^ ~d & N
              , O = H.add5L(p, P, F, HA[w], cr[w])
              , V = H.add5H(O, y, S, B, _A[w], ur[w])
              , j = O | 0
              , Ge = H.rotrSH(r, s, 28) ^ H.rotrBH(r, s, 34) ^ H.rotrBH(r, s, 39)
              , an = H.rotrSL(r, s, 28) ^ H.rotrBL(r, s, 34) ^ H.rotrBL(r, s, 39)
              , Cn = r & i ^ r & l ^ i & l
              , Na = s & o ^ s & a ^ o & a;
            y = x | 0,
            p = N | 0,
            x = g | 0,
            N = A | 0,
            g = h | 0,
            A = d | 0,
            {h, l: d} = H.add(u | 0, f | 0, V | 0, j | 0),
            u = l | 0,
            f = a | 0,
            l = i | 0,
            a = o | 0,
            i = r | 0,
            o = s | 0;
            const Pa = H.add3L(j, an, Na);
            r = H.add3H(Pa, V, Ge, Cn),
            s = Pa | 0
        }
        ({h: r, l: s} = H.add(this.Ah | 0, this.Al | 0, r | 0, s | 0)),
        {h: i, l: o} = H.add(this.Bh | 0, this.Bl | 0, i | 0, o | 0),
        {h: l, l: a} = H.add(this.Ch | 0, this.Cl | 0, l | 0, a | 0),
        {h: u, l: f} = H.add(this.Dh | 0, this.Dl | 0, u | 0, f | 0),
        {h, l: d} = H.add(this.Eh | 0, this.El | 0, h | 0, d | 0),
        {h: g, l: A} = H.add(this.Fh | 0, this.Fl | 0, g | 0, A | 0),
        {h: x, l: N} = H.add(this.Gh | 0, this.Gl | 0, x | 0, N | 0),
        {h: y, l: p} = H.add(this.Hh | 0, this.Hl | 0, y | 0, p | 0),
        this.set(r, s, i, o, l, a, u, f, h, d, g, A, x, N, y, p)
    }
    roundClean() {
        ur.fill(0),
        cr.fill(0)
    }
    destroy() {
        this.buffer.fill(0),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class jA extends fd {
    constructor() {
        super(),
        this.Ah = 573645204,
        this.Al = -64227540,
        this.Bh = -1621794909,
        this.Bl = -934517566,
        this.Ch = 596883563,
        this.Cl = 1867755857,
        this.Dh = -1774684391,
        this.Dl = 1497426621,
        this.Eh = -1775747358,
        this.El = -1467023389,
        this.Fh = -1101128155,
        this.Fl = 1401305490,
        this.Gh = 721525244,
        this.Gl = 746961066,
        this.Hh = 246885852,
        this.Hl = -2117784414,
        this.outputLen = 32
    }
}
class GA extends fd {
    constructor() {
        super(),
        this.Ah = -876896931,
        this.Al = -1056596264,
        this.Bh = 1654270250,
        this.Bl = 914150663,
        this.Ch = -1856437926,
        this.Cl = 812702999,
        this.Dh = 355462360,
        this.Dl = -150054599,
        this.Eh = 1731405415,
        this.El = -4191439,
        this.Fh = -1900787065,
        this.Fl = 1750603025,
        this.Gh = -619958771,
        this.Gl = 1694076839,
        this.Hh = 1203062813,
        this.Hl = -1090891868,
        this.outputLen = 48
    }
}
const VA = ba( () => new fd);
ba( () => new jA);
ba( () => new GA);
function QA() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
const Jp = QA();
Jp.crypto || Jp.msCrypto;
function KA(t, e) {
    const n = {
        sha256: wA,
        sha512: VA
    }[t];
    return v(n != null, "invalid hmac algorithm", "algorithm", t),
    ky.create(n, e)
}
let Py = !1;
const Ty = function(t, e, n) {
    return KA(t, e).update(n).digest()
};
let Iy = Ty;
function Sa(t, e, n) {
    const r = J(e, "key")
      , s = J(n, "data");
    return M(Iy(t, r, s))
}
Sa._ = Ty;
Sa.lock = function() {
    Py = !0
}
;
Sa.register = function(t) {
    if (Py)
        throw new Error("computeHmac is locked");
    Iy = t
}
;
Object.freeze(Sa);
const [Oy,By,Ry] = [[], [], []]
  , WA = BigInt(0)
  , Wo = BigInt(1)
  , JA = BigInt(2)
  , YA = BigInt(7)
  , ZA = BigInt(256)
  , XA = BigInt(113);
for (let t = 0, e = Wo, n = 1, r = 0; t < 24; t++) {
    [n,r] = [r, (2 * n + 3 * r) % 5],
    Oy.push(2 * (5 * r + n)),
    By.push((t + 1) * (t + 2) / 2 % 64);
    let s = WA;
    for (let i = 0; i < 7; i++)
        e = (e << Wo ^ (e >> YA) * XA) % ZA,
        e & JA && (s ^= Wo << (Wo << BigInt(i)) - Wo);
    Ry.push(s)
}
const [$A,qA] = H.split(Ry, !0)
  , Yp = (t, e, n) => n > 32 ? H.rotlBH(t, e, n) : H.rotlSH(t, e, n)
  , Zp = (t, e, n) => n > 32 ? H.rotlBL(t, e, n) : H.rotlSL(t, e, n);
function e8(t, e=24) {
    const n = new Uint32Array(10);
    for (let r = 24 - e; r < 24; r++) {
        for (let o = 0; o < 10; o++)
            n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const l = (o + 8) % 10
              , a = (o + 2) % 10
              , u = n[a]
              , f = n[a + 1]
              , h = Yp(u, f, 1) ^ n[l]
              , d = Zp(u, f, 1) ^ n[l + 1];
            for (let g = 0; g < 50; g += 10)
                t[o + g] ^= h,
                t[o + g + 1] ^= d
        }
        let s = t[2]
          , i = t[3];
        for (let o = 0; o < 24; o++) {
            const l = By[o]
              , a = Yp(s, i, l)
              , u = Zp(s, i, l)
              , f = Oy[o];
            s = t[f],
            i = t[f + 1],
            t[f] = a,
            t[f + 1] = u
        }
        for (let o = 0; o < 50; o += 10) {
            for (let l = 0; l < 10; l++)
                n[l] = t[o + l];
            for (let l = 0; l < 10; l++)
                t[o + l] ^= ~n[(l + 2) % 10] & n[(l + 4) % 10]
        }
        t[0] ^= $A[r],
        t[1] ^= qA[r]
    }
    n.fill(0)
}
class Gc extends tc {
    constructor(e, n, r, s=!1, i=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = n,
        this.outputLen = r,
        this.enableXOF = s,
        this.rounds = i,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        mt.number(r),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = uA(this.state)
    }
    keccak() {
        e8(this.state32, this.rounds),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        mt.exists(this);
        const {blockLen: n, state: r} = this;
        e = Ea(e);
        const s = e.length;
        for (let i = 0; i < s; ) {
            const o = Math.min(n - this.pos, s - i);
            for (let l = 0; l < o; l++)
                r[this.pos++] ^= e[i++];
            this.pos === n && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: n, pos: r, blockLen: s} = this;
        e[r] ^= n,
        n & 128 && r === s - 1 && this.keccak(),
        e[s - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        mt.exists(this, !1),
        mt.bytes(e),
        this.finish();
        const n = this.state
          , {blockLen: r} = this;
        for (let s = 0, i = e.length; s < i; ) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, i - s);
            e.set(n.subarray(this.posOut, this.posOut + o), s),
            this.posOut += o,
            s += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return mt.number(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (mt.output(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        this.state.fill(0)
    }
    _cloneInto(e) {
        const {blockLen: n, suffix: r, outputLen: s, rounds: i, enableXOF: o} = this;
        return e || (e = new Gc(n,r,s,o,i)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = i,
        e.suffix = r,
        e.outputLen = s,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
const qr = (t, e, n) => ba( () => new Gc(e,t,n));
qr(6, 144, 224 / 8);
qr(6, 136, 256 / 8);
qr(6, 104, 384 / 8);
qr(6, 72, 512 / 8);
qr(1, 144, 224 / 8);
const t8 = qr(1, 136, 256 / 8);
qr(1, 104, 384 / 8);
qr(1, 72, 512 / 8);
const Ly = (t, e, n) => hA( (r={}) => new Gc(e,t,r.dkLen === void 0 ? n : r.dkLen,!0));
Ly(31, 168, 128 / 8);
Ly(31, 136, 256 / 8);
let Uy = !1;
const Fy = function(t) {
    return t8(t)
};
let Dy = Fy;
function ce(t) {
    const e = J(t, "data");
    return M(Dy(e))
}
ce._ = Fy;
ce.lock = function() {
    Uy = !0
}
;
ce.register = function(t) {
    if (Uy)
        throw new TypeError("keccak256 is locked");
    Dy = t
}
;
Object.freeze(ce);
const n8 = {}
  , r8 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: n8
}, Symbol.toStringTag, {
    value: "Module"
}));
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Y = BigInt(0)
  , oe = BigInt(1)
  , Rr = BigInt(2)
  , pl = BigInt(3)
  , Xp = BigInt(8)
  , Ae = Object.freeze({
    a: Y,
    b: BigInt(7),
    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: oe,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
})
  , $p = (t, e) => (t + e / Rr) / e
  , qa = {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar(t) {
        const {n: e} = Ae
          , n = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
          , r = -oe * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
          , s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
          , i = n
          , o = BigInt("0x100000000000000000000000000000000")
          , l = $p(i * t, e)
          , a = $p(-r * t, e);
        let u = L(t - l * n - a * s, e)
          , f = L(-l * r - a * i, e);
        const h = u > o
          , d = f > o;
        if (h && (u = e - u),
        d && (f = e - f),
        u > o || f > o)
            throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
        return {
            k1neg: h,
            k1: u,
            k2neg: d,
            k2: f
        }
    }
}
  , en = 32
  , To = 32
  , s8 = 32
  , nc = en + 1
  , rc = 2 * en + 1;
function qp(t) {
    const {a: e, b: n} = Ae
      , r = L(t * t)
      , s = L(r * t);
    return L(s + e * t + n)
}
const eu = Ae.a === Y;
class My extends Error {
    constructor(e) {
        super(e)
    }
}
function e1(t) {
    if (!(t instanceof $))
        throw new TypeError("JacobianPoint expected")
}
class $ {
    constructor(e, n, r) {
        this.x = e,
        this.y = n,
        this.z = r
    }
    static fromAffine(e) {
        if (!(e instanceof q))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
        return e.equals(q.ZERO) ? $.ZERO : new $(e.x,e.y,oe)
    }
    static toAffineBatch(e) {
        const n = u8(e.map(r => r.z));
        return e.map( (r, s) => r.toAffine(n[s]))
    }
    static normalizeZ(e) {
        return $.toAffineBatch(e).map($.fromAffine)
    }
    equals(e) {
        e1(e);
        const {x: n, y: r, z: s} = this
          , {x: i, y: o, z: l} = e
          , a = L(s * s)
          , u = L(l * l)
          , f = L(n * u)
          , h = L(i * a)
          , d = L(L(r * l) * u)
          , g = L(L(o * s) * a);
        return f === h && d === g
    }
    negate() {
        return new $(this.x,L(-this.y),this.z)
    }
    double() {
        const {x: e, y: n, z: r} = this
          , s = L(e * e)
          , i = L(n * n)
          , o = L(i * i)
          , l = e + i
          , a = L(Rr * (L(l * l) - s - o))
          , u = L(pl * s)
          , f = L(u * u)
          , h = L(f - Rr * a)
          , d = L(u * (a - h) - Xp * o)
          , g = L(Rr * n * r);
        return new $(h,d,g)
    }
    add(e) {
        e1(e);
        const {x: n, y: r, z: s} = this
          , {x: i, y: o, z: l} = e;
        if (i === Y || o === Y)
            return this;
        if (n === Y || r === Y)
            return e;
        const a = L(s * s)
          , u = L(l * l)
          , f = L(n * u)
          , h = L(i * a)
          , d = L(L(r * l) * u)
          , g = L(L(o * s) * a)
          , A = L(h - f)
          , x = L(g - d);
        if (A === Y)
            return x === Y ? this.double() : $.ZERO;
        const N = L(A * A)
          , y = L(A * N)
          , p = L(f * N)
          , w = L(x * x - y - Rr * p)
          , S = L(x * (p - w) - d * y)
          , P = L(s * l * A);
        return new $(w,S,P)
    }
    subtract(e) {
        return this.add(e.negate())
    }
    multiplyUnsafe(e) {
        const n = $.ZERO;
        if (typeof e == "bigint" && e === Y)
            return n;
        let r = r1(e);
        if (r === oe)
            return this;
        if (!eu) {
            let h = n
              , d = this;
            for (; r > Y; )
                r & oe && (h = h.add(d)),
                d = d.double(),
                r >>= oe;
            return h
        }
        let {k1neg: s, k1: i, k2neg: o, k2: l} = qa.splitScalar(r)
          , a = n
          , u = n
          , f = this;
        for (; i > Y || l > Y; )
            i & oe && (a = a.add(f)),
            l & oe && (u = u.add(f)),
            f = f.double(),
            i >>= oe,
            l >>= oe;
        return s && (a = a.negate()),
        o && (u = u.negate()),
        u = new $(L(u.x * qa.beta),u.y,u.z),
        a.add(u)
    }
    precomputeWindow(e) {
        const n = eu ? 128 / e + 1 : 256 / e + 1
          , r = [];
        let s = this
          , i = s;
        for (let o = 0; o < n; o++) {
            i = s,
            r.push(i);
            for (let l = 1; l < 2 ** (e - 1); l++)
                i = i.add(s),
                r.push(i);
            s = i.double()
        }
        return r
    }
    wNAF(e, n) {
        !n && this.equals($.BASE) && (n = q.BASE);
        const r = n && n._WINDOW_SIZE || 1;
        if (256 % r)
            throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        let s = n && W0.get(n);
        s || (s = this.precomputeWindow(r),
        n && r !== 1 && (s = $.normalizeZ(s),
        W0.set(n, s)));
        let i = $.ZERO
          , o = $.BASE;
        const l = 1 + (eu ? 128 / r : 256 / r)
          , a = 2 ** (r - 1)
          , u = BigInt(2 ** r - 1)
          , f = 2 ** r
          , h = BigInt(r);
        for (let d = 0; d < l; d++) {
            const g = d * a;
            let A = Number(e & u);
            e >>= h,
            A > a && (A -= f,
            e += oe);
            const x = g
              , N = g + Math.abs(A) - 1
              , y = d % 2 !== 0
              , p = A < 0;
            A === 0 ? o = o.add(tu(y, s[x])) : i = i.add(tu(p, s[N]))
        }
        return {
            p: i,
            f: o
        }
    }
    multiply(e, n) {
        let r = r1(e), s, i;
        if (eu) {
            const {k1neg: o, k1: l, k2neg: a, k2: u} = qa.splitScalar(r);
            let {p: f, f: h} = this.wNAF(l, n)
              , {p: d, f: g} = this.wNAF(u, n);
            f = tu(o, f),
            d = tu(a, d),
            d = new $(L(d.x * qa.beta),d.y,d.z),
            s = f.add(d),
            i = h.add(g)
        } else {
            const {p: o, f: l} = this.wNAF(r, n);
            s = o,
            i = l
        }
        return $.normalizeZ([s, i])[0]
    }
    toAffine(e) {
        const {x: n, y: r, z: s} = this
          , i = this.equals($.ZERO);
        e == null && (e = i ? Xp : ka(s));
        const o = e
          , l = L(o * o)
          , a = L(l * o)
          , u = L(n * l)
          , f = L(r * a)
          , h = L(s * o);
        if (i)
            return q.ZERO;
        if (h !== oe)
            throw new Error("invZ was invalid");
        return new q(u,f)
    }
}
$.BASE = new $(Ae.Gx,Ae.Gy,oe);
$.ZERO = new $(Y,oe,Y);
function tu(t, e) {
    const n = e.negate();
    return t ? n : e
}
const W0 = new WeakMap;
class q {
    constructor(e, n) {
        this.x = e,
        this.y = n
    }
    _setWindowSize(e) {
        this._WINDOW_SIZE = e,
        W0.delete(this)
    }
    hasEvenY() {
        return this.y % Rr === Y
    }
    static fromCompressedHex(e) {
        const n = e.length === 32
          , r = Qr(n ? e : e.subarray(1));
        if (!Bf(r))
            throw new Error("Point is not on curve");
        const s = qp(r);
        let i = a8(s);
        const o = (i & oe) === oe;
        n ? o && (i = L(-i)) : (e[0] & 1) === 1 !== o && (i = L(-i));
        const l = new q(r,i);
        return l.assertValidity(),
        l
    }
    static fromUncompressedHex(e) {
        const n = Qr(e.subarray(1, en + 1))
          , r = Qr(e.subarray(en + 1, en * 2 + 1))
          , s = new q(n,r);
        return s.assertValidity(),
        s
    }
    static fromHex(e) {
        const n = zl(e)
          , r = n.length
          , s = n[0];
        if (r === en)
            return this.fromCompressedHex(n);
        if (r === nc && (s === 2 || s === 3))
            return this.fromCompressedHex(n);
        if (r === rc && s === 4)
            return this.fromUncompressedHex(n);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-${nc} compressed bytes or ${rc} uncompressed bytes, not ${r}`)
    }
    static fromPrivateKey(e) {
        return q.BASE.multiply(Hl(e))
    }
    static fromSignature(e, n, r) {
        const {r: s, s: i} = p8(n);
        if (![0, 1, 2, 3].includes(r))
            throw new Error("Cannot recover: invalid recovery bit");
        const o = zy(zl(e))
          , {n: l} = Ae
          , a = r === 2 || r === 3 ? s + l : s
          , u = ka(a, l)
          , f = L(-o * u, l)
          , h = L(i * u, l)
          , d = r & 1 ? "03" : "02"
          , g = q.fromHex(d + Ui(a))
          , A = q.BASE.multiplyAndAddUnsafe(g, f, h);
        if (!A)
            throw new Error("Cannot recover signature: point at infinify");
        return A.assertValidity(),
        A
    }
    toRawBytes(e=!1) {
        return Ds(this.toHex(e))
    }
    toHex(e=!1) {
        const n = Ui(this.x);
        return e ? `${this.hasEvenY() ? "02" : "03"}${n}` : `04${n}${Ui(this.y)}`
    }
    toHexX() {
        return this.toHex(!0).slice(2)
    }
    toRawX() {
        return this.toRawBytes(!0).slice(1)
    }
    assertValidity() {
        const e = "Point is not on elliptic curve"
          , {x: n, y: r} = this;
        if (!Bf(n) || !Bf(r))
            throw new Error(e);
        const s = L(r * r)
          , i = qp(n);
        if (L(s - i) !== Y)
            throw new Error(e)
    }
    equals(e) {
        return this.x === e.x && this.y === e.y
    }
    negate() {
        return new q(this.x,L(-this.y))
    }
    double() {
        return $.fromAffine(this).double().toAffine()
    }
    add(e) {
        return $.fromAffine(this).add($.fromAffine(e)).toAffine()
    }
    subtract(e) {
        return this.add(e.negate())
    }
    multiply(e) {
        return $.fromAffine(this).multiply(e, this).toAffine()
    }
    multiplyAndAddUnsafe(e, n, r) {
        const s = $.fromAffine(this)
          , i = n === Y || n === oe || this !== q.BASE ? s.multiplyUnsafe(n) : s.multiply(n)
          , o = $.fromAffine(e).multiplyUnsafe(r)
          , l = i.add(o);
        return l.equals($.ZERO) ? void 0 : l.toAffine()
    }
}
q.BASE = new q(Ae.Gx,Ae.Gy);
q.ZERO = new q(Y,Y);
function t1(t) {
    return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t
}
function n1(t) {
    if (t.length < 2 || t[0] !== 2)
        throw new Error(`Invalid signature integer tag: ${Io(t)}`);
    const e = t[1]
      , n = t.subarray(2, e + 2);
    if (!e || n.length !== e)
        throw new Error("Invalid signature integer: wrong length");
    if (n[0] === 0 && n[1] <= 127)
        throw new Error("Invalid signature integer: trailing length");
    return {
        data: Qr(n),
        left: t.subarray(e + 2)
    }
}
function i8(t) {
    if (t.length < 2 || t[0] != 48)
        throw new Error(`Invalid signature tag: ${Io(t)}`);
    if (t[1] !== t.length - 2)
        throw new Error("Invalid signature: incorrect length");
    const {data: e, left: n} = n1(t.subarray(2))
      , {data: r, left: s} = n1(n);
    if (s.length)
        throw new Error(`Invalid signature: left bytes after parsing: ${Io(s)}`);
    return {
        r: e,
        s: r
    }
}
let Li = class xu {
    constructor(e, n) {
        this.r = e,
        this.s = n,
        this.assertValidity()
    }
    static fromCompact(e) {
        const n = e instanceof Uint8Array
          , r = "Signature.fromCompact";
        if (typeof e != "string" && !n)
            throw new TypeError(`${r}: Expected string or Uint8Array`);
        const s = n ? Io(e) : e;
        if (s.length !== 128)
            throw new Error(`${r}: Expected 64-byte hex`);
        return new xu(sc(s.slice(0, 64)),sc(s.slice(64, 128)))
    }
    static fromDER(e) {
        const n = e instanceof Uint8Array;
        if (typeof e != "string" && !n)
            throw new TypeError("Signature.fromDER: Expected string or Uint8Array");
        const {r, s} = i8(n ? e : Ds(e));
        return new xu(r,s)
    }
    static fromHex(e) {
        return this.fromDER(e)
    }
    assertValidity() {
        const {r: e, s: n} = this;
        if (!_l(e))
            throw new Error("Invalid Signature: r must be 0 < r < n");
        if (!_l(n))
            throw new Error("Invalid Signature: s must be 0 < s < n")
    }
    hasHighS() {
        const e = Ae.n >> oe;
        return this.s > e
    }
    normalizeS() {
        return this.hasHighS() ? new xu(this.r,L(-this.s, Ae.n)) : this
    }
    toDERRawBytes() {
        return Ds(this.toDERHex())
    }
    toDERHex() {
        const e = t1(Jo(this.s))
          , n = t1(Jo(this.r))
          , r = e.length / 2
          , s = n.length / 2
          , i = Jo(r)
          , o = Jo(s);
        return `30${Jo(s + r + 4)}02${o}${n}02${i}${e}`
    }
    toRawBytes() {
        return this.toDERRawBytes()
    }
    toHex() {
        return this.toDERHex()
    }
    toCompactRawBytes() {
        return Ds(this.toCompactHex())
    }
    toCompactHex() {
        return Ui(this.r) + Ui(this.s)
    }
}
;
function yr(...t) {
    if (!t.every(r => r instanceof Uint8Array))
        throw new Error("Uint8Array list expected");
    if (t.length === 1)
        return t[0];
    const e = t.reduce( (r, s) => r + s.length, 0)
      , n = new Uint8Array(e);
    for (let r = 0, s = 0; r < t.length; r++) {
        const i = t[r];
        n.set(i, s),
        s += i.length
    }
    return n
}
const o8 = Array.from({
    length: 256
}, (t, e) => e.toString(16).padStart(2, "0"));
function Io(t) {
    if (!(t instanceof Uint8Array))
        throw new Error("Expected Uint8Array");
    let e = "";
    for (let n = 0; n < t.length; n++)
        e += o8[t[n]];
    return e
}
const l8 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function Ui(t) {
    if (typeof t != "bigint")
        throw new Error("Expected bigint");
    if (!(Y <= t && t < l8))
        throw new Error("Expected number 0 <= n < 2^256");
    return t.toString(16).padStart(64, "0")
}
function J0(t) {
    const e = Ds(Ui(t));
    if (e.length !== 32)
        throw new Error("Error: expected 32 bytes");
    return e
}
function Jo(t) {
    const e = t.toString(16);
    return e.length & 1 ? `0${e}` : e
}
function sc(t) {
    if (typeof t != "string")
        throw new TypeError("hexToNumber: expected string, got " + typeof t);
    return BigInt(`0x${t}`)
}
function Ds(t) {
    if (typeof t != "string")
        throw new TypeError("hexToBytes: expected string, got " + typeof t);
    if (t.length % 2)
        throw new Error("hexToBytes: received invalid unpadded hex" + t.length);
    const e = new Uint8Array(t.length / 2);
    for (let n = 0; n < e.length; n++) {
        const r = n * 2
          , s = t.slice(r, r + 2)
          , i = Number.parseInt(s, 16);
        if (Number.isNaN(i) || i < 0)
            throw new Error("Invalid byte sequence");
        e[n] = i
    }
    return e
}
function Qr(t) {
    return sc(Io(t))
}
function zl(t) {
    return t instanceof Uint8Array ? Uint8Array.from(t) : Ds(t)
}
function r1(t) {
    if (typeof t == "number" && Number.isSafeInteger(t) && t > 0)
        return BigInt(t);
    if (typeof t == "bigint" && _l(t))
        return t;
    throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")
}
function L(t, e=Ae.P) {
    const n = t % e;
    return n >= Y ? n : e + n
}
function kt(t, e) {
    const {P: n} = Ae;
    let r = t;
    for (; e-- > Y; )
        r *= r,
        r %= n;
    return r
}
function a8(t) {
    const {P: e} = Ae
      , n = BigInt(6)
      , r = BigInt(11)
      , s = BigInt(22)
      , i = BigInt(23)
      , o = BigInt(44)
      , l = BigInt(88)
      , a = t * t * t % e
      , u = a * a * t % e
      , f = kt(u, pl) * u % e
      , h = kt(f, pl) * u % e
      , d = kt(h, Rr) * a % e
      , g = kt(d, r) * d % e
      , A = kt(g, s) * g % e
      , x = kt(A, o) * A % e
      , N = kt(x, l) * x % e
      , y = kt(N, o) * A % e
      , p = kt(y, pl) * u % e
      , w = kt(p, i) * g % e
      , S = kt(w, n) * a % e
      , P = kt(S, Rr);
    if (P * P % e !== t)
        throw new Error("Cannot find square root");
    return P
}
function ka(t, e=Ae.P) {
    if (t === Y || e <= Y)
        throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let n = L(t, e)
      , r = e
      , s = Y
      , i = oe;
    for (; n !== Y; ) {
        const l = r / n
          , a = r % n
          , u = s - i * l;
        r = n,
        n = a,
        s = i,
        i = u
    }
    if (r !== oe)
        throw new Error("invert: does not exist");
    return L(s, e)
}
function u8(t, e=Ae.P) {
    const n = new Array(t.length)
      , r = t.reduce( (i, o, l) => o === Y ? i : (n[l] = i,
    L(i * o, e)), oe)
      , s = ka(r, e);
    return t.reduceRight( (i, o, l) => o === Y ? i : (n[l] = L(i * n[l], e),
    L(i * o, e)), s),
    n
}
function c8(t) {
    const e = t.length * 8 - To * 8
      , n = Qr(t);
    return e > 0 ? n >> BigInt(e) : n
}
function zy(t, e=!1) {
    const n = c8(t);
    if (e)
        return n;
    const {n: r} = Ae;
    return n >= r ? n - r : n
}
let Fi, gl;
class f8 {
    constructor(e, n) {
        if (this.hashLen = e,
        this.qByteLen = n,
        typeof e != "number" || e < 2)
            throw new Error("hashLen must be a number");
        if (typeof n != "number" || n < 2)
            throw new Error("qByteLen must be a number");
        this.v = new Uint8Array(e).fill(1),
        this.k = new Uint8Array(e).fill(0),
        this.counter = 0
    }
    hmac(...e) {
        return Lr.hmacSha256(this.k, ...e)
    }
    hmacSync(...e) {
        return gl(this.k, ...e)
    }
    checkSync() {
        if (typeof gl != "function")
            throw new My("hmacSha256Sync needs to be set")
    }
    incr() {
        if (this.counter >= 1e3)
            throw new Error("Tried 1,000 k values for sign(), all were invalid");
        this.counter += 1
    }
    async reseed(e=new Uint8Array) {
        this.k = await this.hmac(this.v, Uint8Array.from([0]), e),
        this.v = await this.hmac(this.v),
        e.length !== 0 && (this.k = await this.hmac(this.v, Uint8Array.from([1]), e),
        this.v = await this.hmac(this.v))
    }
    reseedSync(e=new Uint8Array) {
        this.checkSync(),
        this.k = this.hmacSync(this.v, Uint8Array.from([0]), e),
        this.v = this.hmacSync(this.v),
        e.length !== 0 && (this.k = this.hmacSync(this.v, Uint8Array.from([1]), e),
        this.v = this.hmacSync(this.v))
    }
    async generate() {
        this.incr();
        let e = 0;
        const n = [];
        for (; e < this.qByteLen; ) {
            this.v = await this.hmac(this.v);
            const r = this.v.slice();
            n.push(r),
            e += this.v.length
        }
        return yr(...n)
    }
    generateSync() {
        this.checkSync(),
        this.incr();
        let e = 0;
        const n = [];
        for (; e < this.qByteLen; ) {
            this.v = this.hmacSync(this.v);
            const r = this.v.slice();
            n.push(r),
            e += this.v.length
        }
        return yr(...n)
    }
}
function _l(t) {
    return Y < t && t < Ae.n
}
function Bf(t) {
    return Y < t && t < Ae.P
}
function h8(t, e, n, r=!0) {
    const {n: s} = Ae
      , i = zy(t, !0);
    if (!_l(i))
        return;
    const o = ka(i, s)
      , l = q.BASE.multiply(i)
      , a = L(l.x, s);
    if (a === Y)
        return;
    const u = L(o * L(e + n * a, s), s);
    if (u === Y)
        return;
    let f = new Li(a,u)
      , h = (l.x === f.r ? 0 : 2) | Number(l.y & oe);
    return r && f.hasHighS() && (f = f.normalizeS(),
    h ^= 1),
    {
        sig: f,
        recovery: h
    }
}
function Hl(t) {
    let e;
    if (typeof t == "bigint")
        e = t;
    else if (typeof t == "number" && Number.isSafeInteger(t) && t > 0)
        e = BigInt(t);
    else if (typeof t == "string") {
        if (t.length !== 2 * To)
            throw new Error("Expected 32 bytes of private key");
        e = sc(t)
    } else if (t instanceof Uint8Array) {
        if (t.length !== To)
            throw new Error("Expected 32 bytes of private key");
        e = Qr(t)
    } else
        throw new TypeError("Expected valid private key");
    if (!_l(e))
        throw new Error("Expected private key: 0 < key < n");
    return e
}
function d8(t) {
    return t instanceof q ? (t.assertValidity(),
    t) : q.fromHex(t)
}
function p8(t) {
    if (t instanceof Li)
        return t.assertValidity(),
        t;
    try {
        return Li.fromDER(t)
    } catch {
        return Li.fromCompact(t)
    }
}
function g8(t, e=!1) {
    return q.fromPrivateKey(t).toRawBytes(e)
}
function m8(t, e, n, r=!1) {
    return q.fromSignature(t, e, n).toRawBytes(r)
}
function s1(t) {
    const e = t instanceof Uint8Array
      , n = typeof t == "string"
      , r = (e || n) && t.length;
    return e ? r === nc || r === rc : n ? r === nc * 2 || r === rc * 2 : t instanceof q
}
function y8(t, e, n=!1) {
    if (s1(t))
        throw new TypeError("getSharedSecret: first arg must be private key");
    if (!s1(e))
        throw new TypeError("getSharedSecret: second arg must be public key");
    const r = d8(e);
    return r.assertValidity(),
    r.multiply(Hl(t)).toRawBytes(n)
}
function _y(t) {
    const e = t.length > en ? t.slice(0, en) : t;
    return Qr(e)
}
function w8(t) {
    const e = _y(t)
      , n = L(e, Ae.n);
    return Hy(n < Y ? e : n)
}
function Hy(t) {
    return J0(t)
}
function A8(t, e, n) {
    if (t == null)
        throw new Error(`sign: expected valid message hash, not "${t}"`);
    const r = zl(t)
      , s = Hl(e)
      , i = [Hy(s), w8(r)];
    if (n != null) {
        n === !0 && (n = Lr.randomBytes(en));
        const a = zl(n);
        if (a.length !== en)
            throw new Error(`sign: Expected ${en} bytes of extra data`);
        i.push(a)
    }
    const o = yr(...i)
      , l = _y(r);
    return {
        seed: o,
        m: l,
        d: s
    }
}
function v8(t, e) {
    const {sig: n, recovery: r} = t
      , {der: s, recovered: i} = Object.assign({
        canonical: !0,
        der: !0
    }, e)
      , o = s ? n.toDERRawBytes() : n.toCompactRawBytes();
    return i ? [o, r] : o
}
function x8(t, e, n={}) {
    const {seed: r, m: s, d: i} = A8(t, e, n.extraEntropy)
      , o = new f8(s8,To);
    o.reseedSync(r);
    let l;
    for (; !(l = h8(o.generateSync(), s, i, n.canonical)); )
        o.reseedSync();
    return v8(l, n)
}
q.BASE._setWindowSize(8);
const ft = {
    node: r8,
    web: typeof self == "object" && "crypto"in self ? self.crypto : void 0
}
  , nu = {}
  , Lr = {
    bytesToHex: Io,
    hexToBytes: Ds,
    concatBytes: yr,
    mod: L,
    invert: ka,
    isValidPrivateKey(t) {
        try {
            return Hl(t),
            !0
        } catch {
            return !1
        }
    },
    _bigintTo32Bytes: J0,
    _normalizePrivateKey: Hl,
    hashToPrivateKey: t => {
        t = zl(t);
        const e = To + 8;
        if (t.length < e || t.length > 1024)
            throw new Error("Expected valid bytes of private key as per FIPS 186");
        const n = L(Qr(t), Ae.n - oe) + oe;
        return J0(n)
    }
    ,
    randomBytes: (t=32) => {
        if (ft.web)
            return ft.web.getRandomValues(new Uint8Array(t));
        if (ft.node) {
            const {randomBytes: e} = ft.node;
            return Uint8Array.from(e(t))
        } else
            throw new Error("The environment doesn't have randomBytes function")
    }
    ,
    randomPrivateKey: () => Lr.hashToPrivateKey(Lr.randomBytes(To + 8)),
    precompute(t=8, e=q.BASE) {
        const n = e === q.BASE ? e : new q(e.x,e.y);
        return n._setWindowSize(t),
        n.multiply(pl),
        n
    },
    sha256: async (...t) => {
        if (ft.web) {
            const e = await ft.web.subtle.digest("SHA-256", yr(...t));
            return new Uint8Array(e)
        } else if (ft.node) {
            const {createHash: e} = ft.node
              , n = e("sha256");
            return t.forEach(r => n.update(r)),
            Uint8Array.from(n.digest())
        } else
            throw new Error("The environment doesn't have sha256 function")
    }
    ,
    hmacSha256: async (t, ...e) => {
        if (ft.web) {
            const n = await ft.web.subtle.importKey("raw", t, {
                name: "HMAC",
                hash: {
                    name: "SHA-256"
                }
            }, !1, ["sign"])
              , r = yr(...e)
              , s = await ft.web.subtle.sign("HMAC", n, r);
            return new Uint8Array(s)
        } else if (ft.node) {
            const {createHmac: n} = ft.node
              , r = n("sha256", t);
            return e.forEach(s => r.update(s)),
            Uint8Array.from(r.digest())
        } else
            throw new Error("The environment doesn't have hmac-sha256 function")
    }
    ,
    sha256Sync: void 0,
    hmacSha256Sync: void 0,
    taggedHash: async (t, ...e) => {
        let n = nu[t];
        if (n === void 0) {
            const r = await Lr.sha256(Uint8Array.from(t, s => s.charCodeAt(0)));
            n = yr(r, r),
            nu[t] = n
        }
        return Lr.sha256(n, ...e)
    }
    ,
    taggedHashSync: (t, ...e) => {
        if (typeof Fi != "function")
            throw new My("sha256Sync is undefined, you need to set it");
        let n = nu[t];
        if (n === void 0) {
            const r = Fi(Uint8Array.from(t, s => s.charCodeAt(0)));
            n = yr(r, r),
            nu[t] = n
        }
        return Fi(n, ...e)
    }
    ,
    _JacobianPoint: $
};
Object.defineProperties(Lr, {
    sha256Sync: {
        configurable: !1,
        get() {
            return Fi
        },
        set(t) {
            Fi || (Fi = t)
        }
    },
    hmacSha256Sync: {
        configurable: !1,
        get() {
            return gl
        },
        set(t) {
            gl || (gl = t)
        }
    }
});
const i1 = "0x0000000000000000000000000000000000000000"
  , Y0 = "0x0000000000000000000000000000000000000000000000000000000000000000"
  , o1 = BigInt(0)
  , l1 = BigInt(1)
  , a1 = BigInt(2)
  , u1 = BigInt(27)
  , c1 = BigInt(28)
  , ru = BigInt(35)
  , ni = {};
function f1(t) {
    return Vs(wt(t), 32)
}
var Qi, Ki, Wi, vs;
const Gt = class {
    constructor(e, n, r, s) {
        b(this, Qi, void 0);
        b(this, Ki, void 0);
        b(this, Wi, void 0);
        b(this, vs, void 0);
        xa(e, ni, "Signature"),
        m(this, Qi, n),
        m(this, Ki, r),
        m(this, Wi, s),
        m(this, vs, null)
    }
    get r() {
        return c(this, Qi)
    }
    set r(e) {
        v(Bi(e) === 32, "invalid r", "value", e),
        m(this, Qi, M(e))
    }
    get s() {
        return c(this, Ki)
    }
    set s(e) {
        v(Bi(e) === 32, "invalid s", "value", e);
        const n = M(e);
        v(parseInt(n.substring(0, 3)) < 8, "non-canonical s", "value", n),
        m(this, Ki, n)
    }
    get v() {
        return c(this, Wi)
    }
    set v(e) {
        const n = K(e, "value");
        v(n === 27 || n === 28, "invalid v", "v", e),
        m(this, Wi, n)
    }
    get networkV() {
        return c(this, vs)
    }
    get legacyChainId() {
        const e = this.networkV;
        return e == null ? null : Gt.getChainId(e)
    }
    get yParity() {
        return this.v === 27 ? 0 : 1
    }
    get yParityAndS() {
        const e = J(this.s);
        return this.yParity && (e[0] |= 128),
        M(e)
    }
    get compactSerialized() {
        return xe([this.r, this.yParityAndS])
    }
    get serialized() {
        return xe([this.r, this.s, this.yParity ? "0x1c" : "0x1b"])
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`
    }
    clone() {
        const e = new Gt(ni,this.r,this.s,this.v);
        return this.networkV && m(e, vs, this.networkV),
        e
    }
    toJSON() {
        const e = this.networkV;
        return {
            _type: "signature",
            networkV: e != null ? e.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v
        }
    }
    static getChainId(e) {
        const n = z(e, "v");
        return n == u1 || n == c1 ? o1 : (v(n >= ru, "invalid EIP-155 v", "v", e),
        (n - ru) / a1)
    }
    static getChainIdV(e, n) {
        return z(e) * a1 + BigInt(35 + n - 27)
    }
    static getNormalizedV(e) {
        const n = z(e);
        return n === o1 || n === u1 ? 27 : n === l1 || n === c1 ? 28 : (v(n >= ru, "invalid v", "v", e),
        n & l1 ? 27 : 28)
    }
    static from(e) {
        function n(u, f) {
            v(u, f, "signature", e)
        }
        if (e == null)
            return new Gt(ni,Y0,Y0,27);
        if (typeof e == "string") {
            const u = J(e, "signature");
            if (u.length === 64) {
                const f = M(u.slice(0, 32))
                  , h = u.slice(32, 64)
                  , d = h[0] & 128 ? 28 : 27;
                return h[0] &= 127,
                new Gt(ni,f,M(h),d)
            }
            if (u.length === 65) {
                const f = M(u.slice(0, 32))
                  , h = u.slice(32, 64);
                n((h[0] & 128) === 0, "non-canonical s");
                const d = Gt.getNormalizedV(u[64]);
                return new Gt(ni,f,M(h),d)
            }
            n(!1, "invalid raw signature length")
        }
        if (e instanceof Gt)
            return e.clone();
        const r = e.r;
        n(r != null, "missing r");
        const s = f1(r)
          , i = function(u, f) {
            if (u != null)
                return f1(u);
            if (f != null) {
                n(me(f, 32), "invalid yParityAndS");
                const h = J(f);
                return h[0] &= 127,
                M(h)
            }
            n(!1, "missing s")
        }(e.s, e.yParityAndS);
        n((J(i)[0] & 128) == 0, "non-canonical s");
        const {networkV: o, v: l} = function(u, f, h) {
            if (u != null) {
                const d = z(u);
                return {
                    networkV: d >= ru ? d : void 0,
                    v: Gt.getNormalizedV(d)
                }
            }
            if (f != null)
                return n(me(f, 32), "invalid yParityAndS"),
                {
                    v: J(f)[0] & 128 ? 28 : 27
                };
            if (h != null) {
                switch (h) {
                case 0:
                    return {
                        v: 27
                    };
                case 1:
                    return {
                        v: 28
                    }
                }
                n(!1, "invalid yParity")
            }
            n(!1, "missing v")
        }(e.v, e.yParityAndS, e.yParity)
          , a = new Gt(ni,s,i,l);
        return o && m(a, vs, o),
        n(!("yParity"in e && e.yParity !== a.yParity), "yParity mismatch"),
        n(!("yParityAndS"in e && e.yParityAndS !== a.yParityAndS), "yParityAndS mismatch"),
        a
    }
}
;
let sn = Gt;
Qi = new WeakMap,
Ki = new WeakMap,
Wi = new WeakMap,
vs = new WeakMap;
Lr.hmacSha256Sync = function(t, ...e) {
    return J(Sa("sha256", t, xe(e)))
}
;
var Mn;
const ls = class {
    constructor(e) {
        b(this, Mn, void 0);
        v(Bi(e) === 32, "invalid private key", "privateKey", "[REDACTED]"),
        m(this, Mn, M(e))
    }
    get privateKey() {
        return c(this, Mn)
    }
    get publicKey() {
        return ls.computePublicKey(c(this, Mn))
    }
    get compressedPublicKey() {
        return ls.computePublicKey(c(this, Mn), !0)
    }
    sign(e) {
        v(Bi(e) === 32, "invalid digest length", "digest", e);
        const [n,r] = x8(it(e), it(c(this, Mn)), {
            recovered: !0,
            canonical: !0
        })
          , s = Li.fromHex(n);
        return sn.from({
            r: Jr("0x" + s.r.toString(16), 32),
            s: Jr("0x" + s.s.toString(16), 32),
            v: r ? 28 : 27
        })
    }
    computeSharedSecret(e) {
        const n = ls.computePublicKey(e);
        return console.log(n),
        M(y8(it(c(this, Mn)), J(n)))
    }
    static computePublicKey(e, n) {
        let r = J(e, "key");
        if (r.length === 32) {
            const i = g8(r, !!n);
            return M(i)
        }
        if (r.length === 64) {
            const i = new Uint8Array(65);
            i[0] = 4,
            i.set(r, 1),
            r = i
        }
        const s = q.fromHex(r);
        return M(s.toRawBytes(n))
    }
    static recoverPublicKey(e, n) {
        v(Bi(e) === 32, "invalid digest length", "digest", e);
        const r = sn.from(n)
          , s = Li.fromCompact(it(xe([r.r, r.s]))).toDERRawBytes()
          , i = m8(it(e), s, r.yParity);
        return v(i != null, "invalid signautre for digest", "signature", n),
        M(i)
    }
    static addPoints(e, n, r) {
        const s = q.fromHex(ls.computePublicKey(e).substring(2))
          , i = q.fromHex(ls.computePublicKey(n).substring(2));
        return "0x" + s.add(i).toHex(!!r)
    }
}
;
let jl = ls;
Mn = new WeakMap;
const E8 = BigInt(0)
  , b8 = BigInt(36);
function h1(t) {
    t = t.toLowerCase();
    const e = t.substring(2).split("")
      , n = new Uint8Array(40);
    for (let s = 0; s < 40; s++)
        n[s] = e[s].charCodeAt(0);
    const r = J(ce(n));
    for (let s = 0; s < 40; s += 2)
        r[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()),
        (r[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
    return "0x" + e.join("")
}
const hd = {};
for (let t = 0; t < 10; t++)
    hd[String(t)] = String(t);
for (let t = 0; t < 26; t++)
    hd[String.fromCharCode(65 + t)] = String(10 + t);
const d1 = 15;
function S8(t) {
    t = t.toUpperCase(),
    t = t.substring(4) + t.substring(0, 2) + "00";
    let e = t.split("").map(r => hd[r]).join("");
    for (; e.length >= d1; ) {
        let r = e.substring(0, d1);
        e = parseInt(r, 10) % 97 + e.substring(r.length)
    }
    let n = String(98 - parseInt(e, 10) % 97);
    for (; n.length < 2; )
        n = "0" + n;
    return n
}
const k8 = function() {
    const t = {};
    for (let e = 0; e < 36; e++) {
        const n = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
        t[n] = BigInt(e)
    }
    return t
}();
function C8(t) {
    t = t.toLowerCase();
    let e = E8;
    for (let n = 0; n < t.length; n++)
        e = e * b8 + k8[t[n]];
    return e
}
function ee(t) {
    if (v(typeof t == "string", "invalid address", "address", t),
    t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        t.startsWith("0x") || (t = "0x" + t);
        const e = h1(t);
        return v(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t),
        e
    }
    if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        v(t.substring(2, 4) === S8(t), "bad icap checksum", "address", t);
        let e = C8(t.substring(4)).toString(16);
        for (; e.length < 40; )
            e = "0" + e;
        return h1("0x" + e)
    }
    v(!1, "invalid address", "address", t)
}
function N8(t) {
    const e = ee(t.from);
    let r = z(t.nonce, "tx.nonce").toString(16);
    return r === "0" ? r = "0x" : r.length % 2 ? r = "0x0" + r : r = "0x" + r,
    ee(de(ce(Ml([e, r])), 12))
}
function P8(t) {
    return t && typeof t.getAddress == "function"
}
async function Rf(t, e) {
    const n = await e;
    return (n == null || n === "0x0000000000000000000000000000000000000000") && (k(typeof t != "string", "unconfigured name", "UNCONFIGURED_NAME", {
        value: t
    }),
    v(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)),
    ee(n)
}
function At(t, e) {
    if (typeof t == "string")
        return t.match(/^0x[0-9a-f]{40}$/i) ? ee(t) : (k(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
        }),
        Rf(t, e.resolveName(t)));
    if (P8(t))
        return Rf(t, t.getAddress());
    if (t && typeof t.then == "function")
        return Rf(t, t);
    v(!1, "unsupported addressable value", "target", t)
}
const Tn = {};
function R(t, e) {
    let n = !1;
    return e < 0 && (n = !0,
    e *= -1),
    new He(Tn,`${n ? "" : "u"}int${e}`,t,{
        signed: n,
        width: e
    })
}
function X(t, e) {
    return new He(Tn,`bytes${e || ""}`,t,{
        size: e
    })
}
const p1 = Symbol.for("_ethers_typed");
var xs;
const In = class {
    constructor(e, n, r, s) {
        E(this, "type");
        E(this, "value");
        b(this, xs, void 0);
        E(this, "_typedSymbol");
        s == null && (s = null),
        xa(Tn, e, "Typed"),
        _(this, {
            _typedSymbol: p1,
            type: n,
            value: r
        }),
        m(this, xs, s),
        this.format()
    }
    format() {
        if (this.type === "array")
            throw new Error("");
        if (this.type === "dynamicArray")
            throw new Error("");
        return this.type === "tuple" ? `tuple(${this.value.map(e => e.format()).join(",")})` : this.type
    }
    defaultValue() {
        return 0
    }
    minValue() {
        return 0
    }
    maxValue() {
        return 0
    }
    isBigInt() {
        return !!this.type.match(/^u?int[0-9]+$/)
    }
    isData() {
        return this.type.startsWith("bytes")
    }
    isString() {
        return this.type === "string"
    }
    get tupleName() {
        if (this.type !== "tuple")
            throw TypeError("not a tuple");
        return c(this, xs)
    }
    get arrayLength() {
        if (this.type !== "array")
            throw TypeError("not an array");
        return c(this, xs) === !0 ? -1 : c(this, xs) === !1 ? this.value.length : null
    }
    static from(e, n) {
        return new In(Tn,e,n)
    }
    static uint8(e) {
        return R(e, 8)
    }
    static uint16(e) {
        return R(e, 16)
    }
    static uint24(e) {
        return R(e, 24)
    }
    static uint32(e) {
        return R(e, 32)
    }
    static uint40(e) {
        return R(e, 40)
    }
    static uint48(e) {
        return R(e, 48)
    }
    static uint56(e) {
        return R(e, 56)
    }
    static uint64(e) {
        return R(e, 64)
    }
    static uint72(e) {
        return R(e, 72)
    }
    static uint80(e) {
        return R(e, 80)
    }
    static uint88(e) {
        return R(e, 88)
    }
    static uint96(e) {
        return R(e, 96)
    }
    static uint104(e) {
        return R(e, 104)
    }
    static uint112(e) {
        return R(e, 112)
    }
    static uint120(e) {
        return R(e, 120)
    }
    static uint128(e) {
        return R(e, 128)
    }
    static uint136(e) {
        return R(e, 136)
    }
    static uint144(e) {
        return R(e, 144)
    }
    static uint152(e) {
        return R(e, 152)
    }
    static uint160(e) {
        return R(e, 160)
    }
    static uint168(e) {
        return R(e, 168)
    }
    static uint176(e) {
        return R(e, 176)
    }
    static uint184(e) {
        return R(e, 184)
    }
    static uint192(e) {
        return R(e, 192)
    }
    static uint200(e) {
        return R(e, 200)
    }
    static uint208(e) {
        return R(e, 208)
    }
    static uint216(e) {
        return R(e, 216)
    }
    static uint224(e) {
        return R(e, 224)
    }
    static uint232(e) {
        return R(e, 232)
    }
    static uint240(e) {
        return R(e, 240)
    }
    static uint248(e) {
        return R(e, 248)
    }
    static uint256(e) {
        return R(e, 256)
    }
    static uint(e) {
        return R(e, 256)
    }
    static int8(e) {
        return R(e, -8)
    }
    static int16(e) {
        return R(e, -16)
    }
    static int24(e) {
        return R(e, -24)
    }
    static int32(e) {
        return R(e, -32)
    }
    static int40(e) {
        return R(e, -40)
    }
    static int48(e) {
        return R(e, -48)
    }
    static int56(e) {
        return R(e, -56)
    }
    static int64(e) {
        return R(e, -64)
    }
    static int72(e) {
        return R(e, -72)
    }
    static int80(e) {
        return R(e, -80)
    }
    static int88(e) {
        return R(e, -88)
    }
    static int96(e) {
        return R(e, -96)
    }
    static int104(e) {
        return R(e, -104)
    }
    static int112(e) {
        return R(e, -112)
    }
    static int120(e) {
        return R(e, -120)
    }
    static int128(e) {
        return R(e, -128)
    }
    static int136(e) {
        return R(e, -136)
    }
    static int144(e) {
        return R(e, -144)
    }
    static int152(e) {
        return R(e, -152)
    }
    static int160(e) {
        return R(e, -160)
    }
    static int168(e) {
        return R(e, -168)
    }
    static int176(e) {
        return R(e, -176)
    }
    static int184(e) {
        return R(e, -184)
    }
    static int192(e) {
        return R(e, -192)
    }
    static int200(e) {
        return R(e, -200)
    }
    static int208(e) {
        return R(e, -208)
    }
    static int216(e) {
        return R(e, -216)
    }
    static int224(e) {
        return R(e, -224)
    }
    static int232(e) {
        return R(e, -232)
    }
    static int240(e) {
        return R(e, -240)
    }
    static int248(e) {
        return R(e, -248)
    }
    static int256(e) {
        return R(e, -256)
    }
    static int(e) {
        return R(e, -256)
    }
    static bytes1(e) {
        return X(e, 1)
    }
    static bytes2(e) {
        return X(e, 2)
    }
    static bytes3(e) {
        return X(e, 3)
    }
    static bytes4(e) {
        return X(e, 4)
    }
    static bytes5(e) {
        return X(e, 5)
    }
    static bytes6(e) {
        return X(e, 6)
    }
    static bytes7(e) {
        return X(e, 7)
    }
    static bytes8(e) {
        return X(e, 8)
    }
    static bytes9(e) {
        return X(e, 9)
    }
    static bytes10(e) {
        return X(e, 10)
    }
    static bytes11(e) {
        return X(e, 11)
    }
    static bytes12(e) {
        return X(e, 12)
    }
    static bytes13(e) {
        return X(e, 13)
    }
    static bytes14(e) {
        return X(e, 14)
    }
    static bytes15(e) {
        return X(e, 15)
    }
    static bytes16(e) {
        return X(e, 16)
    }
    static bytes17(e) {
        return X(e, 17)
    }
    static bytes18(e) {
        return X(e, 18)
    }
    static bytes19(e) {
        return X(e, 19)
    }
    static bytes20(e) {
        return X(e, 20)
    }
    static bytes21(e) {
        return X(e, 21)
    }
    static bytes22(e) {
        return X(e, 22)
    }
    static bytes23(e) {
        return X(e, 23)
    }
    static bytes24(e) {
        return X(e, 24)
    }
    static bytes25(e) {
        return X(e, 25)
    }
    static bytes26(e) {
        return X(e, 26)
    }
    static bytes27(e) {
        return X(e, 27)
    }
    static bytes28(e) {
        return X(e, 28)
    }
    static bytes29(e) {
        return X(e, 29)
    }
    static bytes30(e) {
        return X(e, 30)
    }
    static bytes31(e) {
        return X(e, 31)
    }
    static bytes32(e) {
        return X(e, 32)
    }
    static address(e) {
        return new In(Tn,"address",e)
    }
    static bool(e) {
        return new In(Tn,"bool",!!e)
    }
    static bytes(e) {
        return new In(Tn,"bytes",e)
    }
    static string(e) {
        return new In(Tn,"string",e)
    }
    static array(e, n) {
        throw new Error("not implemented yet")
    }
    static tuple(e, n) {
        throw new Error("not implemented yet")
    }
    static overrides(e) {
        return new In(Tn,"overrides",Object.assign({}, e))
    }
    static isTyped(e) {
        return e && e._typedSymbol === p1
    }
    static dereference(e, n) {
        if (In.isTyped(e)) {
            if (e.type !== n)
                throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);
            return e.value
        }
        return e
    }
}
;
let He = In;
xs = new WeakMap;
class T8 extends ir {
    constructor(e) {
        super("address", "address", e, !1)
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000"
    }
    encode(e, n) {
        let r = He.dereference(n, "string");
        try {
            r = ee(r)
        } catch (s) {
            return this._throwError(s.message, n)
        }
        return e.writeValue(r)
    }
    decode(e) {
        return ee(Jr(e.readValue(), 20))
    }
}
class I8 extends ir {
    constructor(n) {
        super(n.name, n.type, "_", n.dynamic);
        E(this, "coder");
        this.coder = n
    }
    defaultValue() {
        return this.coder.defaultValue()
    }
    encode(n, r) {
        return this.coder.encode(n, r)
    }
    decode(n) {
        return this.coder.decode(n)
    }
}
function jy(t, e, n) {
    let r = [];
    if (Array.isArray(n))
        r = n;
    else if (n && typeof n == "object") {
        let a = {};
        r = e.map(u => {
            const f = u.localName;
            return k(f, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
                argument: "values",
                info: {
                    coder: u
                },
                value: n
            }),
            k(!a[f], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
                argument: "values",
                info: {
                    coder: u
                },
                value: n
            }),
            a[f] = !0,
            n[f]
        }
        )
    } else
        v(!1, "invalid tuple value", "tuple", n);
    v(e.length === r.length, "types/value length mismatch", "tuple", n);
    let s = new G0
      , i = new G0
      , o = [];
    e.forEach( (a, u) => {
        let f = r[u];
        if (a.dynamic) {
            let h = i.length;
            a.encode(i, f);
            let d = s.writeUpdatableValue();
            o.push(g => {
                d(g + h)
            }
            )
        } else
            a.encode(s, f)
    }
    ),
    o.forEach(a => {
        a(s.length)
    }
    );
    let l = t.appendWriter(s);
    return l += t.appendWriter(i),
    l
}
function Gy(t, e) {
    let n = []
      , r = []
      , s = t.subReader(0);
    return e.forEach(i => {
        let o = null;
        if (i.dynamic) {
            let l = t.readIndex()
              , a = s.subReader(l);
            try {
                o = i.decode(a)
            } catch (u) {
                if (kn(u, "BUFFER_OVERRUN"))
                    throw u;
                o = u,
                o.baseType = i.name,
                o.name = i.localName,
                o.type = i.type
            }
        } else
            try {
                o = i.decode(t)
            } catch (l) {
                if (kn(l, "BUFFER_OVERRUN"))
                    throw l;
                o = l,
                o.baseType = i.name,
                o.name = i.localName,
                o.type = i.type
            }
        if (o == null)
            throw new Error("investigate");
        n.push(o),
        r.push(i.localName || null)
    }
    ),
    ec.fromItems(n, r)
}
class O8 extends ir {
    constructor(n, r, s) {
        const i = n.type + "[" + (r >= 0 ? r : "") + "]"
          , o = r === -1 || n.dynamic;
        super("array", i, s, o);
        E(this, "coder");
        E(this, "length");
        _(this, {
            coder: n,
            length: r
        })
    }
    defaultValue() {
        const n = this.coder.defaultValue()
          , r = [];
        for (let s = 0; s < this.length; s++)
            r.push(n);
        return r
    }
    encode(n, r) {
        const s = He.dereference(r, "array");
        Array.isArray(s) || this._throwError("expected array value", s);
        let i = this.length;
        i === -1 && (i = s.length,
        n.writeValue(s.length)),
        hy(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
        let o = [];
        for (let l = 0; l < s.length; l++)
            o.push(this.coder);
        return jy(n, o, s)
    }
    decode(n) {
        let r = this.length;
        r === -1 && (r = n.readIndex(),
        k(r * We <= n.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
            buffer: n.bytes,
            offset: r * We,
            length: n.dataLength
        }));
        let s = [];
        for (let i = 0; i < r; i++)
            s.push(new I8(this.coder));
        return Gy(n, s)
    }
}
class B8 extends ir {
    constructor(e) {
        super("bool", "bool", e, !1)
    }
    defaultValue() {
        return !1
    }
    encode(e, n) {
        const r = He.dereference(n, "bool");
        return e.writeValue(r ? 1 : 0)
    }
    decode(e) {
        return !!e.readValue()
    }
}
class Vy extends ir {
    constructor(e, n) {
        super(e, e, n, !0)
    }
    defaultValue() {
        return "0x"
    }
    encode(e, n) {
        n = it(n);
        let r = e.writeValue(n.length);
        return r += e.writeBytes(n),
        r
    }
    decode(e) {
        return e.readBytes(e.readIndex(), !0)
    }
}
class R8 extends Vy {
    constructor(e) {
        super("bytes", e)
    }
    decode(e) {
        return M(super.decode(e))
    }
}
class L8 extends ir {
    constructor(n, r) {
        let s = "bytes" + String(n);
        super(s, s, r, !1);
        E(this, "size");
        _(this, {
            size: n
        }, {
            size: "number"
        })
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2)
    }
    encode(n, r) {
        let s = it(He.dereference(r, this.type));
        return s.length !== this.size && this._throwError("incorrect data length", r),
        n.writeBytes(s)
    }
    decode(n) {
        return M(n.readBytes(this.size))
    }
}
const U8 = new Uint8Array([]);
class F8 extends ir {
    constructor(e) {
        super("null", "", e, !1)
    }
    defaultValue() {
        return null
    }
    encode(e, n) {
        return n != null && this._throwError("not null", n),
        e.writeBytes(U8)
    }
    decode(e) {
        return e.readBytes(0),
        null
    }
}
const D8 = BigInt(0)
  , M8 = BigInt(1)
  , z8 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class _8 extends ir {
    constructor(n, r, s) {
        const i = (r ? "int" : "uint") + n * 8;
        super(i, i, s, !1);
        E(this, "size");
        E(this, "signed");
        _(this, {
            size: n,
            signed: r
        }, {
            size: "number",
            signed: "boolean"
        })
    }
    defaultValue() {
        return 0
    }
    encode(n, r) {
        let s = z(He.dereference(r, this.type))
          , i = fs(z8, We * 8);
        if (this.signed) {
            let o = fs(i, this.size * 8 - 1);
            (s > o || s < -(o + M8)) && this._throwError("value out-of-bounds", r),
            s = py(s, 8 * We)
        } else
            (s < D8 || s > fs(i, this.size * 8)) && this._throwError("value out-of-bounds", r);
        return n.writeValue(s)
    }
    decode(n) {
        let r = fs(n.readValue(), this.size * 8);
        return this.signed && (r = qu(r, this.size * 8)),
        r
    }
}
class H8 extends Vy {
    constructor(e) {
        super("string", e)
    }
    defaultValue() {
        return ""
    }
    encode(e, n) {
        return super.encode(e, Xn(He.dereference(n, "string")))
    }
    decode(e) {
        return ud(super.decode(e))
    }
}
class su extends ir {
    constructor(n, r) {
        let s = !1;
        const i = [];
        n.forEach(l => {
            l.dynamic && (s = !0),
            i.push(l.type)
        }
        );
        const o = "tuple(" + i.join(",") + ")";
        super("tuple", o, r, s);
        E(this, "coders");
        _(this, {
            coders: Object.freeze(n.slice())
        })
    }
    defaultValue() {
        const n = [];
        this.coders.forEach(s => {
            n.push(s.defaultValue())
        }
        );
        const r = this.coders.reduce( (s, i) => {
            const o = i.localName;
            return o && (s[o] || (s[o] = 0),
            s[o]++),
            s
        }
        , {});
        return this.coders.forEach( (s, i) => {
            let o = s.localName;
            !o || r[o] !== 1 || (o === "length" && (o = "_length"),
            n[o] == null && (n[o] = n[i]))
        }
        ),
        Object.freeze(n)
    }
    encode(n, r) {
        const s = He.dereference(r, "tuple");
        return jy(n, this.coders, s)
    }
    decode(n) {
        return Gy(n, this.coders)
    }
}
function Ks(t) {
    return ce(Xn(t))
}
function j8(t) {
    let e = 0;
    function n() {
        return t[e++] << 8 | t[e++]
    }
    let r = n()
      , s = 1
      , i = [0, 1];
    for (let P = 1; P < r; P++)
        i.push(s += n());
    let o = n()
      , l = e;
    e += o;
    let a = 0
      , u = 0;
    function f() {
        return a == 0 && (u = u << 8 | t[e++],
        a = 8),
        u >> --a & 1
    }
    const h = 31
      , d = 2 ** h
      , g = d >>> 1
      , A = g >> 1
      , x = d - 1;
    let N = 0;
    for (let P = 0; P < h; P++)
        N = N << 1 | f();
    let y = []
      , p = 0
      , w = d;
    for (; ; ) {
        let P = Math.floor(((N - p + 1) * s - 1) / w)
          , B = 0
          , F = r;
        for (; F - B > 1; ) {
            let j = B + F >>> 1;
            P < i[j] ? F = j : B = j
        }
        if (B == 0)
            break;
        y.push(B);
        let O = p + Math.floor(w * i[B] / s)
          , V = p + Math.floor(w * i[B + 1] / s) - 1;
        for (; !((O ^ V) & g); )
            N = N << 1 & x | f(),
            O = O << 1 & x,
            V = V << 1 & x | 1;
        for (; O & ~V & A; )
            N = N & g | N << 1 & x >>> 1 | f(),
            O = O << 1 ^ g,
            V = (V ^ g) << 1 | g | 1;
        p = O,
        w = 1 + V - O
    }
    let S = r - 4;
    return y.map(P => {
        switch (P - S) {
        case 3:
            return S + 65792 + (t[l++] << 16 | t[l++] << 8 | t[l++]);
        case 2:
            return S + 256 + (t[l++] << 8 | t[l++]);
        case 1:
            return S + t[l++];
        default:
            return P - 1
        }
    }
    )
}
function G8(t) {
    let e = 0;
    return () => t[e++]
}
function Qy(t) {
    return G8(j8(V8(t)))
}
function V8(t) {
    let e = [];
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach( (s, i) => e[s.charCodeAt(0)] = i);
    let n = t.length
      , r = new Uint8Array(6 * n >> 3);
    for (let s = 0, i = 0, o = 0, l = 0; s < n; s++)
        l = l << 6 | e[t.charCodeAt(s)],
        o += 6,
        o >= 8 && (r[i++] = l >> (o -= 8));
    return r
}
function Q8(t) {
    return t & 1 ? ~t >> 1 : t >> 1
}
function K8(t, e) {
    let n = Array(t);
    for (let r = 0, s = 0; r < t; r++)
        n[r] = s += Q8(e());
    return n
}
function Yr(t, e=0) {
    let n = [];
    for (; ; ) {
        let r = t()
          , s = t();
        if (!s)
            break;
        e += r;
        for (let i = 0; i < s; i++)
            n.push(e + i);
        e += s + 1
    }
    return n
}
function Ky(t) {
    return Gl( () => {
        let e = Yr(t);
        if (e.length)
            return e
    }
    )
}
function Wy(t) {
    let e = [];
    for (; ; ) {
        let n = t();
        if (n == 0)
            break;
        e.push(W8(n, t))
    }
    for (; ; ) {
        let n = t() - 1;
        if (n < 0)
            break;
        e.push(J8(n, t))
    }
    return e.flat()
}
function Gl(t) {
    let e = [];
    for (; ; ) {
        let n = t(e.length);
        if (!n)
            break;
        e.push(n)
    }
    return e
}
function Jy(t, e, n) {
    let r = Array(t).fill().map( () => []);
    for (let s = 0; s < e; s++)
        K8(t, n).forEach( (i, o) => r[o].push(i));
    return r
}
function W8(t, e) {
    let n = 1 + e()
      , r = e()
      , s = Gl(e);
    return Jy(s.length, 1 + t, e).flatMap( (o, l) => {
        let[a,...u] = o;
        return Array(s[l]).fill().map( (f, h) => {
            let d = h * r;
            return [a + h * n, u.map(g => g + d)]
        }
        )
    }
    )
}
function J8(t, e) {
    let n = 1 + e();
    return Jy(n, 1 + t, e).map(s => [s[0], s.slice(1)])
}
var Et = Qy("AEgSbwjEDVYByQKaAQsBOQDpATQAngDUAHsAoABoANQAagCNAEQAhABMAHIAOwA9ACsANgAmAGIAHgAvACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGAAeABMAFwAXAA0ADgAWAA8AFAAVBFsF1QEXE0o3xAXUALIArkABaACmAgPGAK6AMDAwMAE/qAYK7P4HQAblMgVYBVkAPSw5Afa3EgfJwgAPA8meNALGCjACjqIChtk/j2+KAsXMAoPzASDgCgDyrgFCAi6OCkCQAOQA4woWABjVuskNDD6eBBx4AP4COhi+D+wKBirqBgSCaA0cBy4ArABqku+mnIAAXAaUJAbqABwAPAyUFvyp/Mo8INAIvCoDshQ8APcubKQAon4ZABgEJtgXAR4AuhnOBPsKIE04CZgJiR8cVlpM5INDABQADQAWAA9sVQAiAA8ASO8W2T30OVnKluYvChEeX05ZPe0AFAANABYAD2wgXUCYAMPsABwAOgzGFryp/AHauQVcBeMC0KACxLEKTR2kZhR0Gm5M9gC8DmgC4gAMLjSKF8qSAoF8ARMcAL4OaALiAAwuAUlQJpJMCwMt/AUpCthqGK4B2EQAciwSeAIyFiIDKCi6OGwAOuIB9iYAyA7MtgEcZIIAsgYABgCK1EoFHNZsGACoKNIBogAAAAAAKy4DnABoAQoaPu43dQQZGACrAcgCIgDgLBJ0OvRQsTOiKDVJBfsoBVoFWbC5BWo7XkITO1hCmHuUZmCh+QwUA8YIJvJ4JASkTAJUVAJ2HKwoAZCkpjZcA0YYBIRiCgDSBqxAMCQHKgI6XgBsAWIgcgCEHhoAlgFKuAAoahgBsMYDOC4iRFQBcFoGZgJmAPJKGAMqAgYASkIArABeAHQALLYGCPTwGo6AAAAKIgAqALQcSAHSAdwIDDKXeYHpAAsAEgA1AD4AOTR3etTBEGAQXQJNCkxtOxUMAq0PpwvmERYM0irM09kANKoH7ANUB+wDVANUB+wH7ANUB+wDVANUA1QDVBwL8BvUwRBgD0kEbgWPBYwE1wiEJkoRggcpCNNUDnQfHEgDRgD9IyZJHTuUMwwlQ0wNTQQH/TZDbKh9OQNIMaxU9pCjA8wyUDltAh5yEqEAKw90HTW2Tn96SHGhCkxPr7WASWNOaAK/Oqk/+QoiCZRvvHdPBj4QGCeiEPQMMAGyATgN6kvVBO4GOATGH3oZFg/KlZkIoi3aDOom4C6egFcj8iqABepL8TzaC0pRZQ9WC2IJ4DpggUsDHgEKIogK2g02CGoQ8ArGaA3iEUIHNgPSSZcAogb+Cw4dMhWyJg1iqQsGOXQG+BrzC4wmrBMmevkF0BoeBkoBJhr8AMwu5IWtWi5cGU9cBgALIiPEFKVQHQ0iQLR4RRoYBxIlpgKOQ21KhFEzHpAh8zw6DWMuEFF5B/I8AhlMC348m0aoRQsRzz6KPUUiRkwpBDJ8LCwniAnMD4IMtnxvAVYJHgmuDG4TLhEUN8IINgcWKpchJxIIHkaSYJcE9JwD8BPOAwgFPAk+BxADshwqEysVJgUKgSHUAvA20i6wAoxWfQEUBcgPIh/cEE1H3Q7mCJgCYgOAJegAKhUeABQimAhAYABcj9VTAi7ICMRqaSNxA2QU5F4RcAeODlQHpBwwFbwc3nDFXgiGBSigrAlYAXIJlgFcBOAIBjVYjJ0gPmdQi1UYmCBeQTxd+QIuDGIVnES6h3UCiA9oEhgBMgFwBzYM/gJ0EeoRaBCSCOiGATWyM/U6IgRMIYAgDgokA0xsywskJvYM9WYBoBJfAwk0OnfrZ6hgsyEX+gcWMsJBXSHuC49PygyZGr4YP1QrGeEHvAPwGvAn50FUBfwDoAAQOkoz6wS6C2YIiAk8AEYOoBQH1BhnCm6MzQEuiAG0lgNUjoACbIwGNAcIAGQIhAV24gAaAqQIoAACAMwDVAA2AqoHmgAWAII+AToDJCwBHuICjAOQCC7IAZIsAfAmBBjADBIA9DRuRwLDrgKAZ2afBdpVAosCRjIBSiIEAktETgOsbt4A2ABIBhDcRAESqEfIF+BAAdxsKADEAPgAAjIHAj4BygHwagC0AVwLLgmfsLIBSuYmAIAAEmgB1AKGANoAMgB87gFQAEoFVvYF0AJMRgEOLhUoVF4BuAMcATABCgB2BsiKosYEHARqB9ACEBgV3gLvKweyAyLcE8pCwgK921IAMhMKNQqkCqNgWF0wAy5vPU0ACx+lPsQ/SwVOO1A7VTtQO1U7UDtVO1A7VTtQO1UDlLzfvN8KaV9CYegMow3RRMU6RhPYYE5gLxPFLbQUvhXLJVMZOhq5JwIl4VUGDwEt0GYtCCk0che5ADwpZYM+Y4MeLQpIHORTjlT1LRgArkufM6wNqRsSRD0FRHXqYicWCwofAmR+AmI/WEqsWDcdAqH0AmiVAmYGAp+BOBgIAmY4AmYjBGsEfAN/EAN+jzkDOXQUOX86ICACbBoCMjM4BwJtxAJtq+yHMGRCKAFkANsA3gBHAgeVDIoA+wi/AAqyAncsAnafPAJ5SEACeLcaWdhFq0bwAnw8AnrFAn0GAnztR/1IemAhACgSSVVKWBIUSskC0P4C0MlLJAOITAOH40TCkS8C8p5dAAMDq0vLTCoiAMxNSU2sAos8AorVvhgEGkBkArQCjjQCjlk9lH4CjtYCjll1UbFTMgdS0VSCApP4ApMJAOYAGVUbVaxVzQMsGCmSgzLeeGNFODYCl5wC769YHqUAViIClowClnmZAKZZqVoGfkoAOAKWsgKWS1xBXM4CmcgCmWFcx10EFgKcmDm/OpoCnBMCn5gCnrWHABoMLicMAp3uAp6PALI6YTFh7AKe0AKgawGmAp6cHAKeS6JjxWQkIigCJ6wCJnsCoPgCoEnUAqYsAqXLAqf8AHoCp+9oeWiuAABGahlqzgKs4AKsqwKtZAKs/wJXGgJV2QKx3tQDH0tslAKyugoCsuUUbN1tYG1FXAMlygK2WTg8bo0DKUICuFsCuUQSArkndHAzcN4CvRYDLa8DMg4CvoVx/wMzbgK+F3Mfc0wCw8gCwwFzf3RIMkJ03QM8pAM8lwM9vALFeQLGRALGDYYCyGZOAshBAslMAskrAmSaAt3PeHZeeKt5IkvNAxigZv8CYfEZ8JUhewhej164DgLPaALPaSxIUM/wEJwAw6oCz3ABJucDTg9+SAIC3CQC24cC0kwDUlkDU1wA/gNViYCGPMgT6l1CcoLLg4oC2sQC2duEDYRGpzkDhqIALANkC4ZuVvYAUgLfYgLetXB0AuIs7REB8y0kAfSYAfLPhALr8ALpbXYC6vYC6uEA9kQBtgLuhgLrmZanlwAC7jwDhd2YdnDdcZ4C8wAAZgOOE5mQAvcQA5FrA5KEAveVAvnWAvhjmhmaqLg0mxsDnYAC/vcBGAA2nxmfsAMFigOmZwOm1gDOwgMGZ6GFogIGAwxGAQwBHAdqBl62ZAIAuARovA6IHrAKABRyNgAgAzASSgOGfAFgJB4AjOwAHgDmoAScjgi0BhygwgCoBRK86h4+PxZ5BWk4P0EsQiJCtV9yEl+9AJbGBTMAkE0am7o7J2AzErrQDjAYxxiKyfcFWAVZBVgFWQVkBVkFWAVZBVgFWQVYBVkFWAVZRxYI2IZoAwMDCmVe6iwEygOyBjC8vAC8BKi8AOhBKhazBUc+aj5xQkBCt192OF/pAFgSM6wAjP/MbMv9puhGez4nJAUsFyg3Nn5u32vB8hnDLGoBbNdvMRgFYAVrycLJuQjQSlwBAQEKfV5+jL8AND+CAAQW0gbmriQGAIzEDAMCDgDlZh4+JSBLQrJCvUI5JF8oYDcoOSQJwj4KRT9EPnk+gj5xPnICikK9SkM8X8xPUGtOCy1sVTBrDG8gX+E0OxwJaJwKYyQsPR4nQqxCvSzMAsv9X8oPIC8KCQoAACN+nt9rOy5LGMmsya0JZsLMzQphQWAP5hCkEgCTjh5GQiYbqm06zjkKND9EPnFCQBwICx5NSG1cLS5a4rwTCn7uHixCQBxeCUsKDzRVREM4BTtEnC0KghwuQkAb9glUIyQZMTIBBo9i8F8KcmTKYAxgLiRvAERgGjoDHB9gtAcDbBFmT2BOEgIAZOhgFmCWYH5gtGBMYJJpFhgGtg/cVqq8WwtDF6wBvCzOwgMgFgEdBB8BegJtMDGWU4EBiwq5SBsA5SR0jwvLDqdN6wGcAoidUAVBYAD4AD4LATUXWHsMpg0lILuwSABQDTUAFhO4NVUC0wxLZhEcANlPBnYECx9bADIAtwKbKAsWcKwzOaAaAVwBhwn9A9ruEAarBksGugAey1aqWwq7YhOKCy1ADrwBvAEjA0hbKSkpIR8gIi0TJwciDY4AVQJvWJFKlgJvIA9ySAHUdRDPUiEaqrFN6wcSBU1gAPgAPgsBewAHJW0LiAymOTEuyLBXDgwAYL0MAGRKaFAiIhzAADIAtwKbKC08D88CkRh8ULxYyXRzjtilnA72mhU+G+0S2hIHDxwByAk7EJQGESwNNwwAPAC0zwEDAKUA4gCbizAAFQBcG8cvbXcrDsIRAzwlRNTiHR8MG34CfATCC6vxbQA4Oi4Opzkuz6IdB7wKABA7Ls8SGgB9rNsdD7wbSBzOoncfAT4qYB0C7KAJBE3z5R9mDL0M+wg9Cj8ABcELPgJMDbwIvQ09CT0KvS7PoisOvAaYAhwPjBriBBwLvBY8AKELPBC8BRihe90AO2wMPQACpwm9BRzR9QYFB2/LBnwAB7wSXBISvQECAOsCAAB1FVwHFswV/HAXvBg8AC68AuyovAAevAJWISuAAAG8AALkFT0VvCvso7zJqDwEAp8nTAACXADn3hm8CaVcD7/FAPUafAiiBQv/cQDfvKe8GNwavKOMeXMG/KmchAASvAcbDAADlABtvAcAC7ynPAIaPLsIopzLDvwHwak8AOF8L7dtvwNJAAPsABW8AAb8AAm8AGmMABq8AA68Axi8jmoV/AABXAAObAAuTB8ABrwAF7wIIgANSwC6vCcAA7wADpwq7ACyWwAcHAAbvAAB7AqiAAXHCxYV3AAHnABCvAEDAGm8AAt8AB28AAi8CaIABcsAbqAZ1gCSCCIABcsAATwAB9wAHZwIIgAGmwAJfAAbLABtHADmvIEACFwACDwAFLwAaPwJIgAGywDjjAAJPAuiDsX7YAAHPABunUBJAEgACrwFAAM8AAmuAzgABxwAGXwAAgym/AAKHAAKPAAJ/KfsBrwACRwAAwwAEDwBABQ8ABFsAA+MAA3sAA28ABkMBxYcABU8AG6cFrQBvAC7ABM8BABpLAsA4UwAAjwABFMAF3wFHAAG0QAYvB8BfClTADpGALAJBw4McwApK3EBpQYIXwJtJA0ACghwTG1gK4oggRVjLjcDogq1AALZABcC/ARvAXdzSFMVIgNQAhY/AS0GBHRHvnxTe0EAKgAyAvwAVAvcAHyRLQEsAHfmDhIzRwJLAFgGAAJRAQiLzQB5PAQhpgBbANcWAJZpOCCMAM5ssgDQ1RcJw3Z0HBlXHgrSAYmRrCNUVE5JEz3DivoAgB04QSos4RKYUABzASosMSlDGhADMVYE+MbvAExm3QBrAnICQBF7Osh4LzXWBhETIAUVCK6v/xPNACYAAQIbAIYAiQCONgDjALQA1QCdPQC7AKsApgChAOcAnwDTAJwA4AEBAPwAwAB6AFsAywDNAPwA1wDrAIkAogEqAOMA2ADVBAIIKzTT09PTtb/bzM/NQjEWAUsBVS5GAVMBYgFhAVQBRUpCRGcMAUwUBgkEMzcMBwAgDSQmKCs3OTk8PDw9Pg0/HVBQUFBSUlFSKFNUVlVVHFxgYF9hYCNlZ29ucXFxcXFxc3Nzc3Nzc3Nzc3N1dXZ1dFsAPesAQgCTAHEAKwBf8QCHAFAAUAAwAm/oAIT+8fEAXQCM6wCYAEgAWwBd+PipAH4AfgBiAE8AqgAdAK8AfAI5AjwA9QDgAPcA9wDhAPgA4gDiAOEA3wAoAnQBSgE5ATcBTQE3ATcBNwEyATEBMQExARUBURAAKgkBAEwYCxcEFhcPAIcAjwCfAEoAYxkCKgBvAGgAkAMOAyArAxpCP0gqAIoCSADAAlACnQC5Ao8CjwKPAo8CjwKPAoQCjwKPAo8CjwKPAo8CjgKOApECmQKQAo8CjwKNAo0CjQKNAosCjgJuAc0CkAKYAo8CjwKOF3oMAPcGA5gCWgIzGAFNETYC2xILLBQBRzgUTpIBdKU9AWJaAP4DOkgA/wCSKh4ZkGsAKmEAagAvAIoDlcyM8K+FWwa7LA/DEgKe1nUrCwQkWwGzAN5/gYB/gX+Cg4N/hIeFf4aJh4GIg4mDin+Lf4x/jYuOf49/kIORf5J/k3+Uf5WElomXg5h/AIMloQCEBDwEOQQ7BD4EPARCBD8EOgRABEIEQQQ9BD8EQgCkA4gAylIA0AINAPdbAPcBGgD3APUA9QD2APXVhSRmvwD3APUA9QD2APUdAIpbAPcAigEaAPcAigLtAPcAitWFJGa/HQD4WwEaAPcA9wD1APUA9gD1APgA9QD1APYA9dWFJGa/HQCKWwEaAPcAigD3AIoC7QD3AIrVhSRmvx0CRAE3AksBOgJMwgOfAu0Dn9WFJGa/HQCKWwEaA58AigOfAIoC7QOfAIrVhSRmvx0EMQCKBDIAigeOMm4hLQCKAT9vBCQA/gDHWwMAVVv/FDMDAIoDPtkASgMAigMAl2dBtv/TrfLzakaPh3aztmIuZQrR3ER2n5Yo+qNR2jK/aP/V04UK1njIJXLgkab9PjOxyJDVbIN3R/FZLoZVl2kYFQIZ7V6LpRqGDt9OdDohnJKp5yX/HLj0voPpLrneDaN11t5W3sSM4ALscgSw8fyWLVkKa/cNcQmjYOgTLZUgOLi2F05g4TR0RfgZ4PBdntxdV3qvdxQt8DeaMMgjJMgwUxYN3tUNpUNx21AvwADDAIa0+raTWaoBXmShAl5AThpMi282o+WzOKMlxjHj7a+DI6AM6VI9w+xyh3Eyg/1XvPmbqjeg2MGXugHt8wW03DQMRTd5iqqOhjLvyOCcKtViGwAHVLyl86KqvxVX7MxSW8HLq6KCrLpB8SspAOHO9IuOwCh9poLoMEha9CHCxlRAXJNDobducWjqhFHqCkzjTM2V9CHslwq4iU19IxqhIFZMve15lDTiMVZIPdADXGxTqzSTv0dDWyk1ht430yvaYCy9qY0MQ3cC5c1uw4mHcTGkMHTAGC99TkNXFAiLQgw9ZWhwKJjGCe+J5FIaMpYhhyUnEgfrF3zEtzn40DdgCIJUJfZ0mo3eXsDwneJ8AYCr7Vx2eHFnt2H6ZEyAHs9JoQ4Lzh5zBoGOGwAz37NOPuqSNmZf51hBEovtpm2T1wI79OBWDyvCFYkONqAKGVYgIL0F+uxTcMLSPtFbiNDbBPFgip8MGDmLLHbSyGXdCMO6f7teiW9EEmorZ+75KzanZwvUySgjoUQBTfHlOIerJs6Y9wLlgDw18AB1ne0tZRNgGjcrqHbtubSUooEpy4hWpDzTSrmvqw0H9AoXQLolMt9eOM+l9RitBB1OBnrdC1XL4yLFyXqZSgZhv7FnnDEXLUeffb4nVDqYTLY6X7gHVaK4ZZlepja2Oe6OhLDI/Ve5SQTCmJdH3HJeb14cw99XsBQAlDy5s5kil2sGezZA3tFok2IsNja7QuFgM30Hff3NGSsSVFYZLOcTBOvlPx8vLhjJrSI7xrNMA/BOzpBIJrdR1+v+zw4RZ7ry6aq4/tFfvPQxQCPDsXlcRvIZYl+E5g3kJ+zLMZon0yElBvEOQTh6SaAdIO6BwdqJqfvgU+e8Y65FQhdiHkZMVt9/39N2jGd26J6cNjq8cQIyp6RonRPgVn2fl89uRDcQ27GacaN0MPrcNyRlbUWelKfDfyrNVVGBG5sjd3jXzTx06ywyzuWn5jbvEfPPCTbpClkgEu9oPLKICxU5HuDe3jA1XnvU85IYYhaEtOU1YVWYhEFsa4/TQj3rHdsU2da2eVbF8YjSI0m619/8bLMZu3xildwqM7zf1cjn4Whx0PSYXcY5bR7wEQfGC7CTOXwZdmsdTO8q3uGm7Rh/RfCWwpzBHCAaVfjxgibL5vUeL0pH6bzDmI9yCXKC/okkmbc28OJvI87L/bjFzpq0DHepw4kT1Od+fL7cyuFaRgfaUWB2++TCFvz11J0leEtrGkpccfX9z2LY39sph4PBHCjNOOkd0ybUm+ZzS8GkFbqMpq8uiX2yHpa0jllTLfGTDBMYR6FT5FWLLDPMkYxt1Q0eyMvxJWztDjy0m6VvZPvamrFXjHmPpU6WxrZqH6WW//I37RwvqPQhPz8I3RPuXAk1C94ZprQWm9iGM/KgiGDO6SV9sjp+Jmk4TBajMNJ5zzWZ1k1jrteQQBp9C2dOvmbIeeEME8y573Q8TgGe+ZCzutM45gYLBzYm2LNvgq2kebAbMpHRDSyh6dQ27GbsAAdCqQVVXWC1C+zpwBM2Lr4eqtobmmu1vJEDlIQR1iN8CUWpztq50z7FFQBn3SKViX6wSqzVQCoYvAjByjeSa+h1PRnYWvBinTDB9cHt4eqDsPS4jcD3FwXJKT0RQsl8EvslI2SFaz2OtmYLFV8FwgvWroZ3fKmh7btewX9tfL2upXsrsqpLJzpzNGyNlnuZyetg7DIOxQTMBR7dqlrTlZ6FWi1g4j1NSjA2j1Yd7fzTH6k9LxCyUCneAKYCU581bnvKih6KJTeTeCX4Zhme/QIz7w2o+AdSgtLAkdrLS9nfweYEqrMLsrGGSWXtgWamAWp6+x6GM/Z8jNw3BqPNQ39hrzYLECn3tPvh/LqKbRSCiDGauDKBBj/kGbpnM1Bb/my8hv4NWStclkwjfl57y4oNDgw1JAG9VOti3QVVoSziMEsSdfEjaCPIDb7SgpLXykQsM+nbqbt97I0mIlzWv0uqFobLMAq8Rd9pszUBKxFhBPwOjf//gVOz2r7URJ2OnpviCXv9iz3a4X/YLBYbXoYwxBv/Kq0a5s4utQHzoTerJ7PmFW/no/ZAsid/hRIV82tD+Qabh5F1ssIM8Ri3chu0PuPD3sSJRMjDoxLAbwUbroiPAz/V52e8s3DIixxlO7OrvhMj3qfzA0kKxzwicr5wJmZwJxTXgrwYsqhRvpgC2Nfdyd+TYYxJSZgk+gk2g9KyHSlwQVAyPtWWgvVGyVBqsU2LpDlLNosSAtolC1uBKt5pQZLhAxTjeGCWIC/HVpagc5rRwkgpCHKEsjA8d+scp8aiMewwQBhp5dYTV5t/Nvl+HbDMu8F3S0psPyZb1bSnqlHPFUnMQeQqSqwDBT23fJO9gO3aVaa1icrXU0PKwlMM5K+iL3ATcVq2fFWKk0irCTF4LDVDG4gUpkyplq6efcZS+WDR1woApjD18x+2JQR9oOXzuA7uy4b+/91WsJd/tSd1QcAH8PVPXApieA37B7YXPhDPH1azP3PKR+HfHmOoDYLeuKsIi/ssSsdYs62qJo14Hw1P2N/6zpr8F3FTWmJ4ysAVcl84Iv/tl///Z8FaAWbBQbyMNDZjrZ2JwdRjtd1jOeNumSodFtr4/Zf45iRJf/8HSW+KIB/+GlKu8Rv1BPLr/4duoL+kFPRqrstEr41gfJupoJRf4hcYDWX93FOcfEBiIivxtjtV8g7mvOReiamYWKE7vfPbv3v2L9Kwq3cIDFGLyhyfOGuf/9vA5muH6Pjg7B4SUj2ydDXra9fSBI+DrsNHA6l51wfHssJb+11TfNk7B8OleUe3Y+ZmHboMFHdv7FFP2cfISFyeAQR0sk/Xv62HBTdW4HmnGSLFk/cqyWVVFJkdIIa+4hos3JRHcqLoRKM5h2Qtk1RZtzISMtlXTfTqIc77YsCCgQD0r61jtxskCctwJOtjE/pL8wC4LBD4AZFjh2wzzFCrT/PNqW0/DeBbkfMfzVm9yy06WiF+1mTdNNEAytVtohBKg3brWd2VQa+aF+cQ0mW5CvbwOlWCT07liX226PjiVLwFCRs/Ax2/u+ZNPjrNFIWIPf5GjHyUKp60OeXe9F01f7IaPf/SDTvyDAf7LSWWejtiZcsqtWZjrdn6A2MqBwnSeKhrZOlUMmgMionmiCIvXqKZfmhGZ1MwD3uMF4n9KJcfWLA3cL5pq48tm5NDYNh3SS/TKUtmFSlQR89MR4+kxcqJgpGbhm9gXneDELkyqAN5nitmIzTscKeJRXqd64RiaOALR2d295NWwbjHRNG2AU5oR9OS2oJg/5CY6BFPc1JvD2Mxdhp2/MZdI8dLePxiP4KRIp8VXmqfg+jqd/RNG7GNuq1U2SiI4735Bdc0MVFx6mH5UOWEa5HuhYykd6t4M1gYLVS8m1B+9bUqi5DziQq7qT8d94cxB6AB4WqMCOF/zPPtRSZUUaMSsvHOWxGASufywTX8ogy6HgUf9p+Z30wUEosl8qgmwm6o2AV6nO9HKQjRHpN6SUegI5pvR61RLnUJ1lqCtmfcsRQutEizVpAaPXN7xMp5UQ5OSZK6tniCK9CpyMd7LjR6+MxfoMEDPpWdf2p2m5N3KO4QMxf+V7vGdYjemQczQ+m2MGIkFNYDMf0Yop2eSx81sP36WHUczqEhKysp2iJSYAvfgJjinKwToPvRKb+HBi+7cJ96S5ngfLOXaHAFRLkulo4TnXTFO51gX0TCCo4ZUHdbpdgkMEwUZAPjh6M+hA8DzycbtxAgH3uD6i0nN1aTiIuQ4BYCE9dEHHwAmINU+4YEWx4EC3OZwFGfYZMPLScVlb+BAAJeARUh+gdWA3/gRqCrf1jecgqeFf1MdzrrP4SVlGm5mMihSP+zYYksAB7O+SBPwNQqSNMiLnkviY/klwgcRmvqtCqeWeA0gjuir4CMZqmw/ntP6M+l0pdN8/P9xI53aP7x/zavJbbKOz8VzO/nXxIr1tjparMnqd6iWdByHKw4lF4p/u57Yv07WeZPDnRl7wgmDVZZ44fQsjdYO/gmXQ+940PRGst8UMQApFC4OOV22e4N+lVOPyFLAOj4t8R3PFw/FjbSWy0ELuAFReNkee8ORcBOT2NPDcs7OfpUmzvn/F9Czk9o9naMyVYy/j8I5qVFmQDFcptBp65J/+sJA3w/j6y/eqUkKxTsf0CZjtNdRSBEmJ2tmfgmJbqpcsSagk+Ul9qdyV+NnqFBIJZFCB1XwPvWGDBOjVUmpWGHsWA5uDuMgLUNKZ4vlq5qfzY1LnRhCc/mh5/EX+hzuGdDy5aYYx4BAdwTTeZHcZpl3X0YyuxZFWNE6wFNppYs3LcFJePOyfKZ8KYb7dmRyvDOcORLPH0sytC6mH1US3JVj6paYM1GEr+CUmyHRnabHPqLlh6Kl0/BWd3ebziDfvpRQpPoR7N+LkUeYWtQ6Rn5v5+NtNeBPs2+DKDlzEVR5aYbTVPrZekJsZ9UC9qtVcP99thVIt1GREnN8zXP8mBfzS+wKYym8fcW6KqrE702Zco+hFQAEIR7qimo7dd7wO8B7R+QZPTuCWm1UAwblDTyURSbd85P4Pz+wBpQyGPeEpsEvxxIZkKsyfSOUcfE3UqzMFwZKYijb7sOkzpou+tC4bPXey5GI1GUAg9c3vLwIwAhcdPHRsYvpAfzkZHWY20vWxxJO0lvKfj6sG2g/pJ1vd/X2EBZkyEjLN4nUZOpOO7MewyHCrxQK8d5aF7rCeQlFX+XksK6l6z971BPuJqwdjj68ULOj9ZTDdOLopMdOLL0PFSS792SXE/EC9EDnIXZGYhr52aQb+9b2zEdBSnpkxAdBUkwJDqGCpZk/HkRidjdp0zKv/Cm52EenmfeKX6HkLUJgMbTTxxIZkIeL/6xuAaAAHbA7mONVduTHNX/UJj1nJEaI7f3HlUyiqKn7VfBE+bdb4HWln1HPJx001Ulq1tOxFf8WZEARvq5Da1+pE7fPVxLntGACz3nkoLsKcPdUqdCwwiyWkmXTd5+bv3j7HaReRt3ESn783Ew3SWsvkEjKtbocNksbrLmV+GVZn1+Uneo35MT1/4r8fngQX5/ptORfgmWfF6KSB/ssJmUSijXxQqUpzkANEkSkYgYj560OOjJr6uqckFuO15TRNgABEwNDjus1V3q2huLPYERMCLXUNmJJpbMrUQsSO7Qnxta55TvPWL6gWmMOvFknqETzqzFVO8SVkovEdYatypLGmDy9VWfgAc0KyIChiOhbd7UlbAeVLPZyEDp4POXKBwN/KP5pT6Cyqs6yaI00vXMn1ubk9OWT9Q/O2t/C25qlnO/zO0xcBzpMBCAB8vsdsh3U8fnPX1XlPEWfaYJxKVaTUgfCESWl4CCkIyjE6iQ5JFcwU6S4/IH0/Agacp8d5Gzq2+GzPnJ7+sqk40mfFQpKrDbAKwLlr3ONEati2k/ycLMSUu7V/7BBkDlNyXoN9tvqXCbbMc4SSQXgC/DBUY9QjtrCtQ+susEomCq8xcNJNNMWCH31GtlTw2BdCXkJBjT+/QNWlBWwQ5SWCh1LdQ99QVii/DyTxjSR6rmdap3l3L3aiplQpPYlrzNm9er88fXd2+ao+YdUNjtqmxiVxmyYPzJxl67OokDcTezEGqldkGgPbRdXA+fGcuZVkembZByo7J1dMnkGNjwwCny+FNcVcWvWYL9mg8oF7jACVWI3bA64EXpdM8bSIEVIAs5JJH+LHXgnCsgcMGPZyAAVBncvbLiexzg9YozcytjPXVlAbQAC7Tc4S0C8QN4LlAGjj4pQAVWrwkaDoUYGxxvkCWKRRHkdzJB5zpREleBDL1oDKEvAqmkDibVC4kTqF89YO6laUjgtJPebBfzr16tg4t10GmN1sJ5vezk2sUOq8blCn5mPZyT3ltaDcddKupQjqusNM9wtFVD0ABzv17fZDn7GPT1nkCtdcgYejcK1qOcTGtPxnCX1rErEjVWCnEJv5HaOAUjgpiKQjUKkQi64D5g2COgwas8FcgIl0Pw95H9dWxE3QG0VbMNffh6BPlAojLDf4es2/5Xfq7hw5NGcON2g8Qsy2UQm94KddKyy3kdJxWgpNaEc15xcylbLC3vnT26u8qS90qc2MU8LdOJc5VPF5KnSpXIhnj1eJJ/jszjZ01oR6JDFJRoeTPO/wh4IPFbdG9KljuSzeuI92p8JF/bpgDE8wG86/W2EBKgPrmzdLijxssQn8mM44ky/KLGOJcrSwXIpZa/Z3v7W6HCRk7ewds99LTsUW1LbeJytw8Q/BFZVZyfO9BUHOCe2suuEkO8DU4fLX0IQSQ2TdOkKXDtPf3sNV9tYhYFueuPRhfQlEEy+aYM/MCz7diDNmFSswYYlZZPmKr2Q5AxLsSVEqqBtn6hVl1BCFOFExnqnIsmyY/NA8jXnDaNzr7Zv3hu+I1Mf/PJjk0gALN2G8ABzdf9FNvWHvZHhv6xIoDCXf964MxG92vGZtx/LYU5PeZqgly8tT5tGeQGeJzMMsJc5p+a5Rn2PtEhiRzo/5Owjy1n0Lzx3ev8GHQmeWb8vagG6O5Qk5nrZuQTiKODI4UqL0LLAusS2Ve7j1Ivdxquu1BR9Rc4QkOiUPwQXJv6du2E8i5pDhVoQpUhyMWGUT2O2YODIhjAfI71gxep5r5zAY7GBUZpy51hAw0pcCCrhOmU8Wp6ujQTdZQsCjtq6SHX8QAMNiPCIIkoxhHEZPgsBcOlP4aErJZPhF7qvx6gHrn8hEwPwYbx8YmT/n7lbcmTip1v8kgsrIjFTAlvLY4Nuil0KDmgz3svYs0ZJ3O3Is/vSx4xpxF1e2VAtZE8dJxGYEIhCSuPvCjP54l/NSNDnwlKvAW8mG+AQkgp7a87Igh26uKMFGD0PoPHTSvoWxiHuk+su8XkQiHIjeYKl/RdcOHpxhQH3zHCNE3aARm83Bl6zGxU/vMltlVPQhubcqhW4RYkl6uXk5JdP/QpzaKFpw2M8zvysv2qj7xaQECuu2akM0Cssj/uB9+wDR7uA6XOnLNaoczalHoMj33eiiu+DRaFsUmlmUZuh9bjDY4INMNSSAivSh03uJvny4Gj+D+neudoa7iJi7c4VFlZ/J5gUR82308zSNAt/ZroBXDWw0fV3eVPAn3aX0mtJabF6RsUZmL+Ehn+wn51/4QipMjD+6y64t7bjL6bjENan2prQ4h7++hBJ9NXvX8CUocJqMC937IasLzm5K0qwXeFMAimMHkEIQIQI2LrQ9sLBfXuyp66zWvlsh74GPv7Xpabj993pRNNDuFud5oIcn/92isbADXdpRPbjmbCNOrwRbxGZx2XmYNGMiV5kjF4IKyxCBvKier9U4uVoheCdmk83rp5G0PihAm2fAtczI4b9BWqX+nrZTrJX5kSwQddi93NQrXG+Cl3eBGNkM77VBsMpEolhXex1MVvMkZN9fG59GGbciH11FEXaY1MxrArovaSjE/lUUqBg2cZBNmiWbvzCHCPJ4RVGFK2dTbObM1m+gJyEX53fa7u3+TZpm74mNEzWbkVL4vjNwfL9uzRCu1cgbrNx5Yv5dDruNrIOgwIk+UZWwJfdbu/WHul6PMmRflVCIzd7B37Pgm/Up/NuCiQW7RXyafevN3AL6ycciCc4ZPlTRzEu+aURGlUBOJbUEsheX7PPyrrhdUt5JAG12EEEZpY/N3Vhbl5uLAfT0CbC2XmpnryFkxZmBTs5prvEeuf0bn73i3O82WTiQtJWEPLsBXnQmdnKhB06NbbhLtlTZYJMxDMJpFeajSNRDB2v61BMUHqXggUwRJ19m6p5zl51v11q34T74lTXdJURuV6+bg2D6qpfGnLy7KGLuLZngobM4pIouz4+n0/UzFKxDgLM4h+fUwKZozQ9UGrHjcif51Ruonz7oIVZ56xWtZS8z7u5zay6J2LD4gCYh2RXoBRLDKsUlZ80R8kmoxlJiL8aZCy2wCAonnucFxCLT1HKoMhbPKt34D97EXPPh0joO93iJVF1Uruew61Qoy3ZUVNX9uIJDt9AQWKLLo+mSzmTibyLHq0D6hhzpvgUgI6ekyVEL3FD+Fi5R3A8MRHPXspN1VyKkfRlC+OGiNgPC4NREZpFETgVmdXrQ2TxChuS3aY+Ndc7CiYv5+CmzfiqeZrWIQJW/C4RvjbGUoJFf1K6ZdR2xL/bG4kVq1+I4jQWX+26YUijpp+lpN7o5c6ZodXJCF56UkFGsqz44sIg8jrdWvbjRCxi2Bk0iyM3a7ecAV93zB6h1Ei38c0s6+8nrbkopArccGP8vntQe1bFeEh2nJIFOHX/k3/UHb5PtKGpnzbkmnRETMX+9X/QduLZWw/feklW/kH/JnzToJe9Kgu9Hct1UGbH5BPCLo4OOtQnZonW0xnyCcdtKyPQ/sbLiSTYJdSx4sJqWLMnfn6fIqPB3WAgk00J+fCOkomPHqtS67pf0mFmKoItYZUlJu6BihSZ8qve8+/X+LX1MhQXF95AshfUleCtmdn6l6QFXzLg2sgLn1oyVFuZecv7fzsIHzoRlAGp0gwYDOn1S4qabWvB5xUaE+Svw4KmjWtxdnuQbI32dw87D4N95u8qQRJTSQg0wLxOLkxSrPMLEn1UIhNKjAa9VLs3WLaXGrtCIt8bKY2AQP/ZdyRU6zT/E8qP2ltyBE2CCZPgWgEYDoJJO4n92y61ylNaSFXKohJhLjkfvYWm592539sIpmBNLlDo1bExFBfmHJJ0lFEiC/fj8v42OoMC9Mo3whIoWvyHfq6Uacqq55mzFf/EGC+NP/gHjhd6urc6R0hES27VXux7UY8CGKPohplWIZtTrFSaPWslCWy78E22Pw8fvReSUZx/txqLtHrFqg1DY/Eus6Iq1heZdrdcqE0/c971Bz1HW/XNXHsXpUIbI4kHdOfCc6T5zHZzvzQJB0ggMFL6IGPAilU9bj/ASdPk6fNvNtZqPuwEDhMBtBnhCexo6D6VAGIOPvJPPV523Y8R8a9vCqZbswSZKzOT1291BsUbmUWehtbb1fdRX9hiJKXvwr1QX6GjnZMgyMvnwOo2Dr24amr7FqEAbVeJAjRNOceM2EQ1Mna9fInqPJ5mh5X8CzT1aDOv08An0blz0fF5Gq4mS2cwq5glwIOlY5nznE8X4j/UdZ3FJsVIXte1JH0A7iibuPfazStM5O/Vo3KXIpXBeGORV0M9XDXFvsYZUHGvFCUubWzTw248EHE0cpQM2zNg6rjavreq3NHCAWsoZ7wvVy7l5gvtKRmIj1MnvfWEm0yFnGcuOq192350a5WefpfKCcX3Sn+AgHU+qnpstNtddbdVebagJU390lq9ko4aI9rqdaWXYG8tv5O/ZQHSqDRYHC6zfH10l5z++opso7aOSaIczlQ13iAzXvLdEu0V7kwNUZ1c8Y8aq7SeIEe5p902FlNkW8DnwHyueHchbK8vVFJfmr9mz7P8nUSccl1ULaoWMRSI1ls32kvlK0h46h3J25Yd9AzfcJbp9qYF/SEt3H5j69mMdcsNxZcAzT/A89ov3tglTX54y/EwjMfuoDoxPwLJDm5I7q6F9Kp469yNy1zSxz0N4HbRRBj9xFFuogvBspv7DXUNIsGxTINEQfmctb42XImWAODgARNo7dfcTqFKq6aTfivmvunLmzP9f8yLsJvXD3JbcPcDGNriMAcjzeDTNr65t8YB5tsnFDFLa0Uwmd2OvUdkLMX9TsAUYUfooSv47sw5J88j7CpahRjjO3/UhOXjTS39W5YZAel2KTbQd1h7INOw9P23GW7GDAe4agIUFHP48MZr7ubq0efFmmtwYMyk7D0r1oeG/CGOODgb9Ur+JMHxkwzPbtCX2ZnENQuI0RN5SyTIZuoY4XS9Rd/tPe3vNAZGSHM/YYwqs9xkkENx0O+eC2YVW1cwOJ3ckE890nbQeHLKlW15L0P0W2VliyYrfNr0nrIYddoRyGaCtj4OYd2MT7ebApqZOAQIaSHJM4mphhfjNjtnjg6YRyx9qM2FT3xOiYIMqXPFWdzhSgFF8ItocqVV09CmIoO8k6U/oJB7++wSX/YksxfPXHyjSgAGZOj1aKEq9fSvXBqtp2wu8/FxEf5AxapAD06pPGuLVUYLdgEzHR8wqRGYEwiUO9MyYbgswstuLYhwYFpSVKOdzAihZ9LuHtD598EGhINU9xc9xhL+QgTLAstmPIvvm2xyRw/WTUPXkP3ZHu6GyPmj5xFH9/QGpkglKXRVUBgVmLOJx8uZO2AstxQYocZH2JhORlxawj66BAXUEs7K/gPxINIRAFyK3WLuyq9oBTF9wEbnmCot82WjIg7CPNwYK3KrZMrKAz5yFszg4wCVLJVnIL8+OYA0xRDH8cHQjQUiQ2i1mr/be32k/3Xej9sdf3iuGvZHyLFSJvPSqz/wltnxumTJYKZsrWXtx/Rmu39jjV9lFaJttfFn57/No2h/unsJmMHbrnZ8csxkp5HQ4xR1s0HH+t3Iz82a3iQWTUDGq/+l2W3TUYLE8zNdL8Y+5oXaIH/Y2UUcX67cXeN4WvENZjz4+8q7vjhowOI3rSjFhGZ6KzwmU7+5nFV+kGWAZ5z2UWvzq0TK0pk1hPwAN4jbw//1CApRvIaIjhSGhioY6TUmsToek9cF9XjJdHvLPcyyCV3lbR5Jiz/ts46ay2F820VjTXvllElwrGzKcNSyvQlWDXdwrUINXmHorAM3fE19ngLZmgeUaCJLsSITf2VcfAOuWwX7mTPdP8Zb/04KqRniufCpwnDUk7sP0RX6cud/sanFMagnzKInSRVey0YzlVSOtA/AjrofmSH6RYbJQ8b4NDeTkIGc6247+Mnbez/qhJ9GAv9fGNFercPnnrf285Qgs+UqThLRgflcAKFuqWhLzZaR4QqvSwa3xe0LPkqj9xJWub195r7NrrR0e78FR+0mRBNMPsraqZctAUVAJfYKehTDV1MGGQSeDsOK9J3sbUuKRIS/WilX/64CBms9jCZocBlsBSZaIAjWm/SUZ8daWL2a/cJFyUOFqE3Epc2RWbtjNyPwOGpWtzu32kUooUqsJud7IV4E8rstUBXM7tGEtBx99x60g1duhyvxeKJSl8s5E34HTMmADT0836aEdg5Dv9rVyCz8i2REOmiz6wtIVFN0HsjAoN37SrY0bV1Ms8CRUILhvZvvRaDzoVCaSI0u8EPuTe4b7OPowgRGODl22UBBmHSTUY8e4DyL+Bc7bngo+2T8HtNvzyATSL5iJZgFPKpmUyZv54vVL90+/RQGATUmNKnrIvcJMYON9fl83naW5sf6hRkbbTC9RUEE6XADwjgA46wWfUQ+QWZl0J4PVTWAln/YfAz/SV3q3J9+yCYDleruoN5uoc/wT2f4YONGTb6zTGq3V+3JqzmCOjwebKln+fExVLN7sqtqfMnsKVXWbb2Ai5m3D/fCTgX7oKYzTZvj+m28XnDqPbXuP4MyWdmPezcesdrh7rCzA7BWdObiuyDEKjjzBbQ0qnuwjliz+b+j7aPMKlkXyIznV3tGzAfYwIbzGGt098oh4eq3ruDjdgHtjxfFCjHrjjRbHajoz/YOY4raojPFQ910GIlBV7hq47UDgpyajBxQUmD8NctiLV1rTSLAEsQDLTeRKcmPBMVMFF0SPBBhZ5oXoxtD3lMhuAQXmA+57OcciczVW9e9zwSIAHS+FJmvfXMJGF1dMBsIUMaPjvgaVqUc3p32qVCMQYFEiRLzlVSOGMCmv/HJIxAHe3mL/XnoZ1IkWLeRZfgyByjnDbbeRK5KL7bYHSVJZ9UFq+yCiNKeRUaYjgbC3hVUvfJAhy/QNl/JqLKVvGMk9ZcfyGidNeo/VTxK9vUpodzfQI9Z2eAre4nmrkzgxKSnT5IJ1D69oHuUS5hp7pK9IAWuNrAOtOH0mAuwCrY8mXAtVXUeaNK3OXr6PRvmWg4VQqFSy+a1GZfFYgdsJELG8N0kvqmzvwZ02Plf5fH9QTy6br0oY/IDsEA+GBf9pEVWCIuBCjsup3LDSDqI+5+0IKSUFr7A96A2f0FbcU9fqljdqvsd8sG55KcKloHIFZem2Wb6pCLXybnVSB0sjCXzdS8IKvE");
const g1 = new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]])
  , m1 = 4;
function Y8(t) {
    return t.toString(16).toUpperCase().padStart(2, "0")
}
function Yy(t) {
    return `{${Y8(t)}}`
}
function Z8(t) {
    let e = [];
    for (let n = 0, r = t.length; n < r; ) {
        let s = t.codePointAt(n);
        n += s < 65536 ? 1 : 2,
        e.push(s)
    }
    return e
}
function Vl(t) {
    let n = t.length;
    if (n < 4096)
        return String.fromCodePoint(...t);
    let r = [];
    for (let s = 0; s < n; )
        r.push(String.fromCodePoint(...t.slice(s, s += 4096)));
    return r.join("")
}
var dd = Qy("AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g");
function el(t) {
    return t >> 24 & 255
}
function Zy(t) {
    return t & 16777215
}
const X8 = new Map(Ky(dd).flatMap( (t, e) => t.map(n => [n, e + 1 << 24])))
  , $8 = new Set(Yr(dd))
  , Xy = new Map
  , Z0 = new Map;
for (let[t,e] of Wy(dd)) {
    if (!$8.has(t) && e.length == 2) {
        let[n,r] = e
          , s = Z0.get(n);
        s || (s = new Map,
        Z0.set(n, s)),
        s.set(r, t)
    }
    Xy.set(t, e.reverse())
}
const Ql = 44032
  , ic = 4352
  , oc = 4449
  , lc = 4519
  , $y = 19
  , qy = 21
  , Oo = 28
  , ac = qy * Oo
  , q8 = $y * ac
  , ev = Ql + q8
  , tv = ic + $y
  , nv = oc + qy
  , rv = lc + Oo;
function e5(t) {
    return t >= Ql && t < ev
}
function sv(t, e) {
    if (t >= ic && t < tv && e >= oc && e < nv)
        return Ql + (t - ic) * ac + (e - oc) * Oo;
    if (e5(t) && e > lc && e < rv && (t - Ql) % Oo == 0)
        return t + (e - lc);
    {
        let n = Z0.get(t);
        return n && (n = n.get(e),
        n) ? n : -1
    }
}
function t5(t) {
    let e = []
      , n = []
      , r = !1;
    function s(i) {
        let o = X8.get(i);
        o && (r = !0,
        i |= o),
        e.push(i)
    }
    for (let i of t)
        for (; ; ) {
            if (i < 128)
                e.push(i);
            else if (e5(i)) {
                let o = i - Ql
                  , l = o / ac | 0
                  , a = o % ac / Oo | 0
                  , u = o % Oo;
                s(ic + l),
                s(oc + a),
                u > 0 && s(lc + u)
            } else {
                let o = Xy.get(i);
                o ? n.push(...o) : s(i)
            }
            if (!n.length)
                break;
            i = n.pop()
        }
    if (r && e.length > 1) {
        let i = el(e[0]);
        for (let o = 1; o < e.length; o++) {
            let l = el(e[o]);
            if (l == 0 || i <= l) {
                i = l;
                continue
            }
            let a = o - 1;
            for (; ; ) {
                let u = e[a + 1];
                if (e[a + 1] = e[a],
                e[a] = u,
                !a || (i = el(e[--a]),
                i <= l))
                    break
            }
            i = el(e[o])
        }
    }
    return e
}
function iv(t) {
    let e = []
      , n = []
      , r = -1
      , s = 0;
    for (let i of t) {
        let o = el(i)
          , l = Zy(i);
        if (r == -1)
            o == 0 ? r = l : e.push(l);
        else if (s > 0 && s >= o)
            o == 0 ? (e.push(r, ...n),
            n.length = 0,
            r = l) : n.push(l),
            s = o;
        else {
            let a = sv(r, l);
            a >= 0 ? r = a : s == 0 && o == 0 ? (e.push(r),
            r = l) : (n.push(l),
            s = o)
        }
    }
    return r >= 0 && e.push(r, ...n),
    e
}
function n5(t) {
    return t5(t).map(Zy)
}
function ov(t) {
    return iv(t5(t))
}
const X0 = 65039
  , r5 = "."
  , s5 = 1
  , y1 = 45;
function Fo() {
    return new Set(Yr(Et))
}
const lv = new Map(Wy(Et))
  , av = Fo()
  , uc = Fo()
  , w1 = new Set(Yr(Et).map(function(t) {
    return this[t]
}, [...uc]))
  , uv = Fo();
Fo();
const cv = Ky(Et);
function A1() {
    return new Set([Yr(Et).map(t => cv[t]), Yr(Et)].flat(2))
}
const fv = Et()
  , Kl = Gl(t => {
    let e = Gl(Et).map(n => n + 96);
    if (e.length) {
        let n = t >= fv;
        e[0] -= 32,
        e = Vl(e),
        n && (e = `Restricted[${e}]`);
        let r = A1()
          , s = A1()
          , i = [...r, ...s].sort( (l, a) => l - a)
          , o = !Et();
        return {
            N: e,
            P: r,
            M: o,
            R: n,
            V: new Set(i)
        }
    }
}
)
  , v1 = Fo()
  , Wl = new Map;
[...v1, ...Fo()].sort( (t, e) => t - e).map( (t, e, n) => {
    let r = Et()
      , s = n[e] = r ? n[e - r] : {
        V: [],
        M: new Map
    };
    s.V.push(t),
    v1.has(t) || Wl.set(t, s)
}
);
for (let {V: t, M: e} of new Set(Wl.values())) {
    let n = [];
    for (let s of t) {
        let i = Kl.filter(l => l.V.has(s))
          , o = n.find( ({G: l}) => i.some(a => l.has(a)));
        o || (o = {
            G: new Set,
            V: []
        },
        n.push(o)),
        o.V.push(s),
        i.forEach(l => o.G.add(l))
    }
    let r = n.flatMap( ({G: s}) => [...s]);
    for (let {G: s, V: i} of n) {
        let o = new Set(r.filter(l => !s.has(l)));
        for (let l of i)
            e.set(l, o)
    }
}
let Jl = new Set
  , i5 = new Set;
for (let t of Kl)
    for (let e of t.V)
        (Jl.has(e) ? i5 : Jl).add(e);
for (let t of Jl)
    !Wl.has(t) && !i5.has(t) && Wl.set(t, s5);
const hv = new Set([...Jl, ...n5(Jl)])
  , dv = Yr(Et)
  , pv = o5([]);
function o5(t) {
    let e = Gl( () => {
        let l = Yr(Et).map(a => dv[a]);
        if (l.length)
            return o5(l)
    }
    ).sort( (l, a) => a.Q.size - l.Q.size)
      , n = Et()
      , r = n % 3;
    n = n / 3 | 0;
    let s = n & 1;
    n >>= 1;
    let i = n & 1
      , o = n & 2;
    return {
        B: e,
        V: r,
        F: s,
        S: i,
        C: o,
        Q: new Set(t)
    }
}
class gv extends Array {
    get is_emoji() {
        return !0
    }
}
function Vc(t, e=Yy) {
    let n = [];
    wv(t[0]) && n.push("◌");
    let r = 0
      , s = t.length;
    for (let i = 0; i < s; i++) {
        let o = t[i];
        l5(o) && (n.push(Vl(t.slice(r, i))),
        n.push(e(o)),
        r = i + 1)
    }
    return n.push(Vl(t.slice(r, s))),
    n.join("")
}
function pd(t) {
    return (l5(t) ? "" : `${gd(Vc([t]))} `) + Yy(t)
}
function gd(t) {
    return `"${t}"‎`
}
function mv(t) {
    if (t.length >= 4 && t[2] == y1 && t[3] == y1)
        throw new Error("invalid label extension")
}
function x1(t) {
    for (let n = t.lastIndexOf(95); n > 0; )
        if (t[--n] !== 95)
            throw new Error("underscore allowed only at start")
}
function yv(t) {
    let e = t[0]
      , n = g1.get(e);
    if (n)
        throw ml(`leading ${n}`);
    let r = t.length
      , s = -1;
    for (let i = 1; i < r; i++) {
        e = t[i];
        let o = g1.get(e);
        if (o) {
            if (s == i)
                throw ml(`${n} + ${o}`);
            s = i + 1,
            n = o
        }
    }
    if (s == r)
        throw ml(`trailing ${n}`)
}
function wv(t) {
    return uc.has(t)
}
function l5(t) {
    return uv.has(t)
}
function Av(t) {
    return bv(vv(t))
}
function vv(t, e) {
    let n = 0;
    return t.split(r5).map(r => {
        let s = Z8(r)
          , i = {
            input: s,
            offset: n
        };
        n += s.length + 1;
        let o;
        try {
            let l = i.tokens = kv(s, ov), a = l.length, u;
            if (a) {
                let f = l[0]
                  , h = a > 1 || f.is_emoji;
                if (!h && f.every(d => d < 128))
                    o = f,
                    x1(o),
                    mv(o),
                    u = "ASCII";
                else if (h && (i.emoji = !0,
                f = l.flatMap(d => d.is_emoji ? [] : d)),
                o = l.flatMap(d => !e && d.is_emoji ? Cv(d) : d),
                x1(o),
                !f.length)
                    u = "Emoji";
                else {
                    if (uc.has(o[0]))
                        throw ml("leading combining mark");
                    for (let A = 1; A < a; A++) {
                        let x = l[A];
                        if (!x.is_emoji && uc.has(x[0]))
                            throw ml(`emoji + combining mark: "${Vl(l[A - 1])} + ${Vc([x[0]])}"`)
                    }
                    yv(o);
                    let d = [...new Set(f)]
                      , [g] = Ev(d);
                    Sv(g, f),
                    xv(g, d),
                    u = g.N
                }
            } else
                throw new Error("empty label");
            i.type = u
        } catch (l) {
            i.error = l
        }
        return i.output = o,
        i
    }
    )
}
function xv(t, e) {
    let n, r = [];
    for (let s of e) {
        let i = Wl.get(s);
        if (i === s5)
            return;
        if (i) {
            let o = i.M.get(s);
            if (n = n ? n.filter(l => o.has(l)) : [...o],
            !n.length)
                return
        } else
            r.push(s)
    }
    if (n) {
        for (let s of n)
            if (r.every(i => s.V.has(i)))
                throw new Error(`whole-script confusable: ${t.N}/${s.N}`)
    }
}
function Ev(t) {
    let e = Kl;
    for (let n of t) {
        let r = e.filter(s => s.V.has(n));
        if (!r.length)
            throw e === Kl ? a5(n) : u5(e[0], n);
        if (e = r,
        r.length == 1)
            break
    }
    return e
}
function bv(t) {
    return t.map( ({input: e, error: n, output: r}) => {
        if (n) {
            let s = n.message;
            throw new Error(t.length == 1 ? s : `Invalid label ${gd(Vc(e))}: ${s}`)
        }
        return Vl(r)
    }
    ).join(r5)
}
function a5(t) {
    return new Error(`disallowed character: ${pd(t)}`)
}
function u5(t, e) {
    let n = pd(e)
      , r = Kl.find(s => s.P.has(e));
    return r && (n = `${r.N} ${n}`),
    new Error(`illegal mixture: ${t.N} + ${n}`)
}
function ml(t) {
    return new Error(`illegal placement: ${t}`)
}
function Sv(t, e) {
    let {V: n, M: r} = t;
    for (let s of e)
        if (!n.has(s))
            throw u5(t, s);
    if (r) {
        let s = n5(e);
        for (let i = 1, o = s.length; i < o; i++)
            if (w1.has(s[i])) {
                let l = i + 1;
                for (let a; l < o && w1.has(a = s[l]); l++)
                    for (let u = i; u < l; u++)
                        if (s[u] == a)
                            throw new Error(`non-spacing marks: repeated ${pd(a)}`);
                if (l - i > m1)
                    throw new Error(`non-spacing marks: too many ${gd(Vc(s.slice(i - 1, l)))} (${l - i}/${m1})`);
                i = l
            }
    }
}
function kv(t, e) {
    let n = []
      , r = [];
    for (t = t.slice().reverse(); t.length; ) {
        let s = Nv(t);
        if (s)
            r.length && (n.push(e(r)),
            r = []),
            n.push(s);
        else {
            let i = t.pop();
            if (hv.has(i))
                r.push(i);
            else {
                let o = lv.get(i);
                if (o)
                    r.push(...o);
                else if (!av.has(i))
                    throw a5(i)
            }
        }
    }
    return r.length && n.push(e(r)),
    n
}
function Cv(t) {
    return t.filter(e => e != X0)
}
function Nv(t, e) {
    let n = pv, r, s, i = [], o = t.length;
    for (e && (e.length = 0); o; ) {
        let l = t[--o];
        if (n = n.B.find(a => a.Q.has(l)),
        !n)
            break;
        if (n.S)
            s = l;
        else if (n.C && l === s)
            break;
        i.push(l),
        n.F && (i.push(X0),
        o > 0 && t[o - 1] == X0 && o--),
        n.V && (r = Pv(i, n),
        e && e.push(...t.slice(o).reverse()),
        t.length = o)
    }
    return r
}
function Pv(t, e) {
    let n = gv.from(t);
    return e.V == 2 && n.splice(1, 1),
    n
}
const c5 = new Uint8Array(32);
c5.fill(0);
function E1(t) {
    return v(t.length !== 0, "invalid ENS name; empty component", "comp", t),
    t
}
function f5(t) {
    const e = Xn(Tv(t))
      , n = [];
    if (t.length === 0)
        return n;
    let r = 0;
    for (let s = 0; s < e.length; s++)
        e[s] === 46 && (n.push(E1(e.slice(r, s))),
        r = s + 1);
    return v(r < e.length, "invalid ENS name; empty component", "name", t),
    n.push(E1(e.slice(r))),
    n
}
function Tv(t) {
    try {
        return Av(t)
    } catch (e) {
        v(!1, `invalid ENS name (${e.message})`, "name", t)
    }
}
function $0(t) {
    v(typeof t == "string", "invalid ENS name; not a string", "name", t);
    let e = c5;
    const n = f5(t);
    for (; n.length; )
        e = ce(xe([e, ce(n.pop())]));
    return M(e)
}
function Iv(t) {
    return M(xe(f5(t).map(e => {
        if (e.length > 63)
            throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
        const n = new Uint8Array(e.length + 1);
        return n.set(e, 1),
        n[0] = n.length - 1,
        n
    }
    ))) + "00"
}
function Lf(t, e) {
    return {
        address: ee(t),
        storageKeys: e.map( (n, r) => (v(me(n, 32), "invalid slot", `storageKeys[${r}]`, n),
        n.toLowerCase()))
    }
}
function qs(t) {
    if (Array.isArray(t))
        return t.map( (n, r) => Array.isArray(n) ? (v(n.length === 2, "invalid slot set", `value[${r}]`, n),
        Lf(n[0], n[1])) : (v(n != null && typeof n == "object", "invalid address-slot set", "value", t),
        Lf(n.address, n.storageKeys)));
    v(t != null && typeof t == "object", "invalid access list", "value", t);
    const e = Object.keys(t).map(n => {
        const r = t[n].reduce( (s, i) => (s[i] = !0,
        s), {});
        return Lf(n, Object.keys(r).sort())
    }
    );
    return e.sort( (n, r) => n.address.localeCompare(r.address)),
    e
}
function Ov(t) {
    let e;
    return typeof t == "string" ? e = jl.computePublicKey(t, !1) : e = t.publicKey,
    ee(ce("0x" + e.substring(4)).substring(26))
}
function Bv(t, e) {
    return Ov(jl.recoverPublicKey(t, e))
}
const rt = BigInt(0)
  , Rv = BigInt(2)
  , Lv = BigInt(27)
  , Uv = BigInt(28)
  , Fv = BigInt(35)
  , Dv = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function md(t) {
    return t === "0x" ? null : ee(t)
}
function h5(t, e) {
    try {
        return qs(t)
    } catch (n) {
        v(!1, n.message, e, t)
    }
}
function Qc(t, e) {
    return t === "0x" ? 0 : K(t, e)
}
function Ke(t, e) {
    if (t === "0x")
        return rt;
    const n = z(t, e);
    return v(n <= Dv, "value exceeds uint size", e, n),
    n
}
function Ie(t, e) {
    const n = z(t, "value")
      , r = wt(n);
    return v(r.length <= 32, "value too large", `tx.${e}`, n),
    r
}
function d5(t) {
    return qs(t).map(e => [e.address, e.storageKeys])
}
function Mv(t) {
    const e = cd(t);
    v(Array.isArray(e) && (e.length === 9 || e.length === 6), "invalid field count for legacy transaction", "data", t);
    const n = {
        type: 0,
        nonce: Qc(e[0], "nonce"),
        gasPrice: Ke(e[1], "gasPrice"),
        gasLimit: Ke(e[2], "gasLimit"),
        to: md(e[3]),
        value: Ke(e[4], "value"),
        data: M(e[5]),
        chainId: rt
    };
    if (e.length === 6)
        return n;
    const r = Ke(e[6], "v")
      , s = Ke(e[7], "r")
      , i = Ke(e[8], "s");
    if (s === rt && i === rt)
        n.chainId = r;
    else {
        let o = (r - Fv) / Rv;
        o < rt && (o = rt),
        n.chainId = o,
        v(o !== rt || r === Lv || r === Uv, "non-canonical legacy v", "v", e[6]),
        n.signature = sn.from({
            r: Vs(e[7], 32),
            s: Vs(e[8], 32),
            v: r
        }),
        n.hash = ce(t)
    }
    return n
}
function b1(t, e) {
    const n = [Ie(t.nonce || 0, "nonce"), Ie(t.gasPrice || 0, "gasPrice"), Ie(t.gasLimit || 0, "gasLimit"), t.to != null ? ee(t.to) : "0x", Ie(t.value || 0, "value"), t.data || "0x"];
    let r = rt;
    if (t.chainId != rt)
        r = z(t.chainId, "tx.chainId"),
        v(!e || e.networkV == null || e.legacyChainId === r, "tx.chainId/sig.v mismatch", "sig", e);
    else if (t.signature) {
        const i = t.signature.legacyChainId;
        i != null && (r = i)
    }
    if (!e)
        return r !== rt && (n.push(wt(r)),
        n.push("0x"),
        n.push("0x")),
        Ml(n);
    let s = BigInt(27 + e.yParity);
    return r !== rt ? s = sn.getChainIdV(r, e.v) : BigInt(e.v) !== s && v(!1, "tx.chainId/sig.v mismatch", "sig", e),
    n.push(wt(s)),
    n.push(wt(e.r)),
    n.push(wt(e.s)),
    Ml(n)
}
function p5(t, e, n) {
    let r;
    try {
        if (r = Qc(e[0], "yParity"),
        r !== 0 && r !== 1)
            throw new Error("bad yParity")
    } catch {
        v(!1, "invalid yParity", "yParity", e[0])
    }
    const s = Vs(e[1], 32)
      , i = Vs(e[2], 32)
      , o = sn.from({
        r: s,
        s: i,
        yParity: r
    });
    t.signature = o
}
function zv(t) {
    const e = cd(J(t).slice(1));
    v(Array.isArray(e) && (e.length === 9 || e.length === 12), "invalid field count for transaction type: 2", "data", M(t));
    const n = Ke(e[2], "maxPriorityFeePerGas")
      , r = Ke(e[3], "maxFeePerGas")
      , s = {
        type: 2,
        chainId: Ke(e[0], "chainId"),
        nonce: Qc(e[1], "nonce"),
        maxPriorityFeePerGas: n,
        maxFeePerGas: r,
        gasPrice: null,
        gasLimit: Ke(e[4], "gasLimit"),
        to: md(e[5]),
        value: Ke(e[6], "value"),
        data: M(e[7]),
        accessList: h5(e[8], "accessList")
    };
    return e.length === 9 || (s.hash = ce(t),
    p5(s, e.slice(9))),
    s
}
function S1(t, e) {
    const n = [Ie(t.chainId || 0, "chainId"), Ie(t.nonce || 0, "nonce"), Ie(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Ie(t.maxFeePerGas || 0, "maxFeePerGas"), Ie(t.gasLimit || 0, "gasLimit"), t.to != null ? ee(t.to) : "0x", Ie(t.value || 0, "value"), t.data || "0x", d5(t.accessList || [])];
    return e && (n.push(Ie(e.yParity, "yParity")),
    n.push(wt(e.r)),
    n.push(wt(e.s))),
    xe(["0x02", Ml(n)])
}
function _v(t) {
    const e = cd(J(t).slice(1));
    v(Array.isArray(e) && (e.length === 8 || e.length === 11), "invalid field count for transaction type: 1", "data", M(t));
    const n = {
        type: 1,
        chainId: Ke(e[0], "chainId"),
        nonce: Qc(e[1], "nonce"),
        gasPrice: Ke(e[2], "gasPrice"),
        gasLimit: Ke(e[3], "gasLimit"),
        to: md(e[4]),
        value: Ke(e[5], "value"),
        data: M(e[6]),
        accessList: h5(e[7], "accessList")
    };
    return e.length === 8 || (n.hash = ce(t),
    p5(n, e.slice(8))),
    n
}
function k1(t, e) {
    const n = [Ie(t.chainId || 0, "chainId"), Ie(t.nonce || 0, "nonce"), Ie(t.gasPrice || 0, "gasPrice"), Ie(t.gasLimit || 0, "gasLimit"), t.to != null ? ee(t.to) : "0x", Ie(t.value || 0, "value"), t.data || "0x", d5(t.accessList || [])];
    return e && (n.push(Ie(e.yParity, "recoveryParam")),
    n.push(wt(e.r)),
    n.push(wt(e.s))),
    xe(["0x01", Ml(n)])
}
var zn, Ji, Yi, Zi, Xi, $i, qi, eo, to, no, ro, so;
const pr = class {
    constructor() {
        b(this, zn, void 0);
        b(this, Ji, void 0);
        b(this, Yi, void 0);
        b(this, Zi, void 0);
        b(this, Xi, void 0);
        b(this, $i, void 0);
        b(this, qi, void 0);
        b(this, eo, void 0);
        b(this, to, void 0);
        b(this, no, void 0);
        b(this, ro, void 0);
        b(this, so, void 0);
        m(this, zn, null),
        m(this, Ji, null),
        m(this, Zi, 0),
        m(this, Xi, BigInt(0)),
        m(this, $i, null),
        m(this, qi, null),
        m(this, eo, null),
        m(this, Yi, "0x"),
        m(this, to, BigInt(0)),
        m(this, no, BigInt(0)),
        m(this, ro, null),
        m(this, so, null)
    }
    get type() {
        return c(this, zn)
    }
    set type(e) {
        switch (e) {
        case null:
            m(this, zn, null);
            break;
        case 0:
        case "legacy":
            m(this, zn, 0);
            break;
        case 1:
        case "berlin":
        case "eip-2930":
            m(this, zn, 1);
            break;
        case 2:
        case "london":
        case "eip-1559":
            m(this, zn, 2);
            break;
        default:
            v(!1, "unsupported transaction type", "type", e)
        }
    }
    get typeName() {
        switch (this.type) {
        case 0:
            return "legacy";
        case 1:
            return "eip-2930";
        case 2:
            return "eip-1559"
        }
        return null
    }
    get to() {
        return c(this, Ji)
    }
    set to(e) {
        m(this, Ji, e == null ? null : ee(e))
    }
    get nonce() {
        return c(this, Zi)
    }
    set nonce(e) {
        m(this, Zi, K(e, "value"))
    }
    get gasLimit() {
        return c(this, Xi)
    }
    set gasLimit(e) {
        m(this, Xi, z(e))
    }
    get gasPrice() {
        const e = c(this, $i);
        return e == null && (this.type === 0 || this.type === 1) ? rt : e
    }
    set gasPrice(e) {
        m(this, $i, e == null ? null : z(e, "gasPrice"))
    }
    get maxPriorityFeePerGas() {
        const e = c(this, qi);
        return e ?? (this.type === 2 ? rt : null)
    }
    set maxPriorityFeePerGas(e) {
        m(this, qi, e == null ? null : z(e, "maxPriorityFeePerGas"))
    }
    get maxFeePerGas() {
        const e = c(this, eo);
        return e ?? (this.type === 2 ? rt : null)
    }
    set maxFeePerGas(e) {
        m(this, eo, e == null ? null : z(e, "maxFeePerGas"))
    }
    get data() {
        return c(this, Yi)
    }
    set data(e) {
        m(this, Yi, M(e))
    }
    get value() {
        return c(this, to)
    }
    set value(e) {
        m(this, to, z(e, "value"))
    }
    get chainId() {
        return c(this, no)
    }
    set chainId(e) {
        m(this, no, z(e))
    }
    get signature() {
        return c(this, ro) || null
    }
    set signature(e) {
        m(this, ro, e == null ? null : sn.from(e))
    }
    get accessList() {
        const e = c(this, so) || null;
        return e ?? (this.type === 1 || this.type === 2 ? [] : null)
    }
    set accessList(e) {
        m(this, so, e == null ? null : qs(e))
    }
    get hash() {
        return this.signature == null ? null : ce(this.serialized)
    }
    get unsignedHash() {
        return ce(this.unsignedSerialized)
    }
    get from() {
        return this.signature == null ? null : Bv(this.unsignedHash, this.signature)
    }
    get fromPublicKey() {
        return this.signature == null ? null : jl.recoverPublicKey(this.unsignedHash, this.signature)
    }
    isSigned() {
        return this.signature != null
    }
    get serialized() {
        switch (k(this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
            operation: ".serialized"
        }),
        this.inferType()) {
        case 0:
            return b1(this, this.signature);
        case 1:
            return k1(this, this.signature);
        case 2:
            return S1(this, this.signature)
        }
        k(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
            operation: ".serialized"
        })
    }
    get unsignedSerialized() {
        switch (this.inferType()) {
        case 0:
            return b1(this);
        case 1:
            return k1(this);
        case 2:
            return S1(this)
        }
        k(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
            operation: ".unsignedSerialized"
        })
    }
    inferType() {
        return this.inferTypes().pop()
    }
    inferTypes() {
        const e = this.gasPrice != null
          , n = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null
          , r = this.accessList != null;
        this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && k(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
            value: this
        }),
        k(!n || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
            value: this
        }),
        k(this.type !== 0 || !r, "legacy transaction cannot have accessList", "BAD_DATA", {
            value: this
        });
        const s = [];
        return this.type != null ? s.push(this.type) : n ? s.push(2) : e ? (s.push(1),
        r || s.push(0)) : r ? (s.push(1),
        s.push(2)) : (s.push(0),
        s.push(1),
        s.push(2)),
        s.sort(),
        s
    }
    isLegacy() {
        return this.type === 0
    }
    isBerlin() {
        return this.type === 1
    }
    isLondon() {
        return this.type === 2
    }
    clone() {
        return pr.from(this)
    }
    toJSON() {
        const e = n => n == null ? null : n.toString();
        return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: e(this.gasLimit),
            gasPrice: e(this.gasPrice),
            maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
            maxFeePerGas: e(this.maxFeePerGas),
            value: e(this.value),
            chainId: e(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList
        }
    }
    static from(e) {
        if (e == null)
            return new pr;
        if (typeof e == "string") {
            const r = J(e);
            if (r[0] >= 127)
                return pr.from(Mv(r));
            switch (r[0]) {
            case 1:
                return pr.from(_v(r));
            case 2:
                return pr.from(zv(r))
            }
            k(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                operation: "from"
            })
        }
        const n = new pr;
        return e.type != null && (n.type = e.type),
        e.to != null && (n.to = e.to),
        e.nonce != null && (n.nonce = e.nonce),
        e.gasLimit != null && (n.gasLimit = e.gasLimit),
        e.gasPrice != null && (n.gasPrice = e.gasPrice),
        e.maxPriorityFeePerGas != null && (n.maxPriorityFeePerGas = e.maxPriorityFeePerGas),
        e.maxFeePerGas != null && (n.maxFeePerGas = e.maxFeePerGas),
        e.data != null && (n.data = e.data),
        e.value != null && (n.value = e.value),
        e.chainId != null && (n.chainId = e.chainId),
        e.signature != null && (n.signature = sn.from(e.signature)),
        e.accessList != null && (n.accessList = e.accessList),
        e.hash != null && (v(n.isSigned(), "unsigned transaction cannot define hash", "tx", e),
        v(n.hash === e.hash, "hash mismatch", "tx", e)),
        e.from != null && (v(n.isSigned(), "unsigned transaction cannot define from", "tx", e),
        v(n.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)),
        n
    }
}
;
let cc = pr;
zn = new WeakMap,
Ji = new WeakMap,
Yi = new WeakMap,
Zi = new WeakMap,
Xi = new WeakMap,
$i = new WeakMap,
qi = new WeakMap,
eo = new WeakMap,
to = new WeakMap,
no = new WeakMap,
ro = new WeakMap,
so = new WeakMap;
const g5 = new Uint8Array(32);
g5.fill(0);
const Hv = BigInt(-1)
  , m5 = BigInt(0)
  , y5 = BigInt(1)
  , jv = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Gv(t) {
    const e = J(t)
      , n = e.length % 32;
    return n ? xe([e, g5.slice(n)]) : M(e)
}
const Vv = Jr(y5, 32)
  , Qv = Jr(m5, 32)
  , C1 = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
}
  , Uf = ["name", "version", "chainId", "verifyingContract", "salt"];
function N1(t) {
    return function(e) {
        return v(typeof e == "string", `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e),
        e
    }
}
const Kv = {
    name: N1("name"),
    version: N1("version"),
    chainId: function(t) {
        const e = z(t, "domain.chainId");
        return v(e >= 0, "invalid chain ID", "domain.chainId", t),
        Number.isSafeInteger(e) ? Number(e) : Ei(e)
    },
    verifyingContract: function(t) {
        try {
            return ee(t).toLowerCase()
        } catch {}
        v(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t)
    },
    salt: function(t) {
        const e = J(t, "domain.salt");
        return v(e.length === 32, 'invalid domain value "salt"', "domain.salt", t),
        M(e)
    }
};
function Ff(t) {
    {
        const e = t.match(/^(u?)int(\d*)$/);
        if (e) {
            const n = e[1] === ""
              , r = parseInt(e[2] || "256");
            v(r % 8 === 0 && r !== 0 && r <= 256 && (e[2] == null || e[2] === String(r)), "invalid numeric width", "type", t);
            const s = fs(jv, n ? r - 1 : r)
              , i = n ? (s + y5) * Hv : m5;
            return function(o) {
                const l = z(o, "value");
                return v(l >= i && l <= s, `value out-of-bounds for ${t}`, "value", l),
                Jr(n ? py(l, 256) : l, 32)
            }
        }
    }
    {
        const e = t.match(/^bytes(\d+)$/);
        if (e) {
            const n = parseInt(e[1]);
            return v(n !== 0 && n <= 32 && e[1] === String(n), "invalid bytes width", "type", t),
            function(r) {
                const s = J(r);
                return v(s.length === n, `invalid length for ${t}`, "value", r),
                Gv(r)
            }
        }
    }
    switch (t) {
    case "address":
        return function(e) {
            return Vs(ee(e), 32)
        }
        ;
    case "bool":
        return function(e) {
            return e ? Vv : Qv
        }
        ;
    case "bytes":
        return function(e) {
            return ce(e)
        }
        ;
    case "string":
        return function(e) {
            return Ks(e)
        }
    }
    return null
}
function P1(t, e) {
    return `${t}(${e.map( ({name: n, type: r}) => r + " " + n).join(",")})`
}
var ia, _n, io, mc, w5;
const Pt = class {
    constructor(e) {
        b(this, mc);
        E(this, "primaryType");
        b(this, ia, void 0);
        b(this, _n, void 0);
        b(this, io, void 0);
        m(this, ia, JSON.stringify(e)),
        m(this, _n, new Map),
        m(this, io, new Map);
        const n = new Map
          , r = new Map
          , s = new Map;
        Object.keys(e).forEach(l => {
            n.set(l, new Set),
            r.set(l, []),
            s.set(l, new Set)
        }
        );
        for (const l in e) {
            const a = new Set;
            for (const u of e[l]) {
                v(!a.has(u.name), `duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(l)}`, "types", e),
                a.add(u.name);
                const f = u.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
                v(f !== l, `circular type reference to ${JSON.stringify(f)}`, "types", e),
                !Ff(f) && (v(r.has(f), `unknown type ${JSON.stringify(f)}`, "types", e),
                r.get(f).push(l),
                n.get(l).add(f))
            }
        }
        const i = Array.from(r.keys()).filter(l => r.get(l).length === 0);
        v(i.length !== 0, "missing primary type", "types", e),
        v(i.length === 1, `ambiguous primary types or unused types: ${i.map(l => JSON.stringify(l)).join(", ")}`, "types", e),
        _(this, {
            primaryType: i[0]
        });
        function o(l, a) {
            v(!a.has(l), `circular type reference to ${JSON.stringify(l)}`, "types", e),
            a.add(l);
            for (const u of n.get(l))
                if (r.has(u)) {
                    o(u, a);
                    for (const f of a)
                        s.get(f).add(u)
                }
            a.delete(l)
        }
        o(this.primaryType, new Set);
        for (const [l,a] of s) {
            const u = Array.from(a);
            u.sort(),
            c(this, _n).set(l, P1(l, e[l]) + u.map(f => P1(f, e[f])).join(""))
        }
    }
    get types() {
        return JSON.parse(c(this, ia))
    }
    getEncoder(e) {
        let n = c(this, io).get(e);
        return n || (n = T(this, mc, w5).call(this, e),
        c(this, io).set(e, n)),
        n
    }
    encodeType(e) {
        const n = c(this, _n).get(e);
        return v(n, `unknown type: ${JSON.stringify(e)}`, "name", e),
        n
    }
    encodeData(e, n) {
        return this.getEncoder(e)(n)
    }
    hashStruct(e, n) {
        return ce(this.encodeData(e, n))
    }
    encode(e) {
        return this.encodeData(this.primaryType, e)
    }
    hash(e) {
        return this.hashStruct(this.primaryType, e)
    }
    _visit(e, n, r) {
        if (Ff(e))
            return r(e, n);
        const s = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (s)
            return v(!s[3] || parseInt(s[3]) === n.length, `array length mismatch; expected length ${parseInt(s[3])}`, "value", n),
            n.map(o => this._visit(s[1], o, r));
        const i = this.types[e];
        if (i)
            return i.reduce( (o, {name: l, type: a}) => (o[l] = this._visit(a, n[l], r),
            o), {});
        v(!1, `unknown type: ${e}`, "type", e)
    }
    visit(e, n) {
        return this._visit(this.primaryType, e, n)
    }
    static from(e) {
        return new Pt(e)
    }
    static getPrimaryType(e) {
        return Pt.from(e).primaryType
    }
    static hashStruct(e, n, r) {
        return Pt.from(n).hashStruct(e, r)
    }
    static hashDomain(e) {
        const n = [];
        for (const r in e) {
            if (e[r] == null)
                continue;
            const s = C1[r];
            v(s, `invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e),
            n.push({
                name: r,
                type: s
            })
        }
        return n.sort( (r, s) => Uf.indexOf(r.name) - Uf.indexOf(s.name)),
        Pt.hashStruct("EIP712Domain", {
            EIP712Domain: n
        }, e)
    }
    static encode(e, n, r) {
        return xe(["0x1901", Pt.hashDomain(e), Pt.from(n).hash(r)])
    }
    static hash(e, n, r) {
        return ce(Pt.encode(e, n, r))
    }
    static async resolveNames(e, n, r, s) {
        e = Object.assign({}, e);
        for (const l in e)
            e[l] == null && delete e[l];
        const i = {};
        e.verifyingContract && !me(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
        const o = Pt.from(n);
        o.visit(r, (l, a) => (l === "address" && !me(a, 20) && (i[a] = "0x"),
        a));
        for (const l in i)
            i[l] = await s(l);
        return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]),
        r = o.visit(r, (l, a) => l === "address" && i[a] ? i[a] : a),
        {
            domain: e,
            value: r
        }
    }
    static getPayload(e, n, r) {
        Pt.hashDomain(e);
        const s = {}
          , i = [];
        Uf.forEach(a => {
            const u = e[a];
            u != null && (s[a] = Kv[a](u),
            i.push({
                name: a,
                type: C1[a]
            }))
        }
        );
        const o = Pt.from(n)
          , l = Object.assign({}, n);
        return v(l.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", n),
        l.EIP712Domain = i,
        o.encode(r),
        {
            types: l,
            domain: s,
            primaryType: o.primaryType,
            message: o.visit(r, (a, u) => {
                if (a.match(/^bytes(\d*)/))
                    return M(J(u));
                if (a.match(/^u?int/))
                    return z(u).toString();
                switch (a) {
                case "address":
                    return u.toLowerCase();
                case "bool":
                    return !!u;
                case "string":
                    return v(typeof u == "string", "invalid string", "value", u),
                    u
                }
                v(!1, "unsupported type", "type", a)
            }
            )
        }
    }
}
;
let fc = Pt;
ia = new WeakMap,
_n = new WeakMap,
io = new WeakMap,
mc = new WeakSet,
w5 = function(e) {
    {
        const s = Ff(e);
        if (s)
            return s
    }
    const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (n) {
        const s = n[1]
          , i = this.getEncoder(s);
        return o => {
            v(!n[3] || parseInt(n[3]) === o.length, `array length mismatch; expected length ${parseInt(n[3])}`, "value", o);
            let l = o.map(i);
            return c(this, _n).has(s) && (l = l.map(ce)),
            ce(xe(l))
        }
    }
    const r = this.types[e];
    if (r) {
        const s = Ks(c(this, _n).get(e));
        return i => {
            const o = r.map( ({name: l, type: a}) => {
                const u = this.getEncoder(a)(i[l]);
                return c(this, _n).has(a) ? ce(u) : u
            }
            );
            return o.unshift(s),
            xe(o)
        }
    }
    v(!1, `unknown type: ${e}`, "type", e)
}
;
function Je(t) {
    const e = new Set;
    return t.forEach(n => e.add(n)),
    Object.freeze(e)
}
const A5 = "constant external internal payable private public pure view"
  , Wv = Je(A5.split(" "))
  , v5 = "constructor error event fallback function receive struct"
  , x5 = Je(v5.split(" "))
  , E5 = "calldata memory storage payable indexed"
  , Jv = Je(E5.split(" "))
  , Yv = "tuple returns"
  , Zv = [v5, E5, Yv, A5].join(" ")
  , Xv = Je(Zv.split(" "))
  , $v = {
    "(": "OPEN_PAREN",
    ")": "CLOSE_PAREN",
    "[": "OPEN_BRACKET",
    "]": "CLOSE_BRACKET",
    ",": "COMMA",
    "@": "AT"
}
  , qv = new RegExp("^(\\s*)")
  , ex = new RegExp("^([0-9]+)")
  , tx = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)")
  , b5 = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$")
  , S5 = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var Pe, Yt, oa, q0;
const yc = class {
    constructor(e) {
        b(this, oa);
        b(this, Pe, void 0);
        b(this, Yt, void 0);
        m(this, Pe, 0),
        m(this, Yt, e.slice())
    }
    get offset() {
        return c(this, Pe)
    }
    get length() {
        return c(this, Yt).length - c(this, Pe)
    }
    clone() {
        return new yc(c(this, Yt))
    }
    reset() {
        m(this, Pe, 0)
    }
    popKeyword(e) {
        const n = this.peek();
        if (n.type !== "KEYWORD" || !e.has(n.text))
            throw new Error(`expected keyword ${n.text}`);
        return this.pop().text
    }
    popType(e) {
        if (this.peek().type !== e)
            throw new Error(`expected ${e}; got ${JSON.stringify(this.peek())}`);
        return this.pop().text
    }
    popParen() {
        const e = this.peek();
        if (e.type !== "OPEN_PAREN")
            throw new Error("bad start");
        const n = T(this, oa, q0).call(this, c(this, Pe) + 1, e.match + 1);
        return m(this, Pe, e.match + 1),
        n
    }
    popParams() {
        const e = this.peek();
        if (e.type !== "OPEN_PAREN")
            throw new Error("bad start");
        const n = [];
        for (; c(this, Pe) < e.match - 1; ) {
            const r = this.peek().linkNext;
            n.push(T(this, oa, q0).call(this, c(this, Pe) + 1, r)),
            m(this, Pe, r)
        }
        return m(this, Pe, e.match + 1),
        n
    }
    peek() {
        if (c(this, Pe) >= c(this, Yt).length)
            throw new Error("out-of-bounds");
        return c(this, Yt)[c(this, Pe)]
    }
    peekKeyword(e) {
        const n = this.peekType("KEYWORD");
        return n != null && e.has(n) ? n : null
    }
    peekType(e) {
        if (this.length === 0)
            return null;
        const n = this.peek();
        return n.type === e ? n.text : null
    }
    pop() {
        const e = this.peek();
        return Do(this, Pe)._++,
        e
    }
    toString() {
        const e = [];
        for (let n = c(this, Pe); n < c(this, Yt).length; n++) {
            const r = c(this, Yt)[n];
            e.push(`${r.type}:${r.text}`)
        }
        return `<TokenString ${e.join(" ")}>`
    }
}
;
let on = yc;
Pe = new WeakMap,
Yt = new WeakMap,
oa = new WeakSet,
q0 = function(e=0, n=0) {
    return new yc(c(this, Yt).slice(e, n).map(r => Object.freeze(Object.assign({}, r, {
        match: r.match - e,
        linkBack: r.linkBack - e,
        linkNext: r.linkNext - e
    }))))
}
;
function es(t) {
    const e = []
      , n = o => {
        const l = i < t.length ? JSON.stringify(t[i]) : "$EOI";
        throw new Error(`invalid token ${l} at ${i}: ${o}`)
    }
    ;
    let r = []
      , s = []
      , i = 0;
    for (; i < t.length; ) {
        let o = t.substring(i)
          , l = o.match(qv);
        l && (i += l[1].length,
        o = t.substring(i));
        const a = {
            depth: r.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: "",
            text: "",
            offset: i,
            value: -1
        };
        e.push(a);
        let u = $v[o[0]] || "";
        if (u) {
            if (a.type = u,
            a.text = o[0],
            i++,
            u === "OPEN_PAREN")
                r.push(e.length - 1),
                s.push(e.length - 1);
            else if (u == "CLOSE_PAREN")
                r.length === 0 && n("no matching open bracket"),
                a.match = r.pop(),
                e[a.match].match = e.length - 1,
                a.depth--,
                a.linkBack = s.pop(),
                e[a.linkBack].linkNext = e.length - 1;
            else if (u === "COMMA")
                a.linkBack = s.pop(),
                e[a.linkBack].linkNext = e.length - 1,
                s.push(e.length - 1);
            else if (u === "OPEN_BRACKET")
                a.type = "BRACKET";
            else if (u === "CLOSE_BRACKET") {
                let f = e.pop().text;
                if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
                    const h = e.pop().text;
                    f = h + f,
                    e[e.length - 1].value = K(h)
                }
                if (e.length === 0 || e[e.length - 1].type !== "BRACKET")
                    throw new Error("missing opening bracket");
                e[e.length - 1].text += f
            }
            continue
        }
        if (l = o.match(tx),
        l) {
            if (a.text = l[1],
            i += a.text.length,
            Xv.has(a.text)) {
                a.type = "KEYWORD";
                continue
            }
            if (a.text.match(S5)) {
                a.type = "TYPE";
                continue
            }
            a.type = "ID";
            continue
        }
        if (l = o.match(ex),
        l) {
            a.text = l[1],
            a.type = "NUMBER",
            i += a.text.length;
            continue
        }
        throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`)
    }
    return new on(e.map(o => Object.freeze(o)))
}
function T1(t, e) {
    let n = [];
    for (const r in e.keys())
        t.has(r) && n.push(r);
    if (n.length > 1)
        throw new Error(`conflicting types: ${n.join(", ")}`)
}
function Kc(t, e) {
    if (e.peekKeyword(x5)) {
        const n = e.pop().text;
        if (n !== t)
            throw new Error(`expected ${t}, got ${n}`)
    }
    return e.popType("ID")
}
function rr(t, e) {
    const n = new Set;
    for (; ; ) {
        const r = t.peekType("KEYWORD");
        if (r == null || e && !e.has(r))
            break;
        if (t.pop(),
        n.has(r))
            throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
        n.add(r)
    }
    return Object.freeze(n)
}
function k5(t) {
    let e = rr(t, Wv);
    return T1(e, Je("constant payable nonpayable".split(" "))),
    T1(e, Je("pure view payable nonpayable".split(" "))),
    e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable"
}
function $n(t, e) {
    return t.popParams().map(n => Be.from(n, e))
}
function C5(t) {
    if (t.peekType("AT")) {
        if (t.pop(),
        t.peekType("NUMBER"))
            return z(t.pop().text);
        throw new Error("invalid gas")
    }
    return null
}
function Ws(t) {
    if (t.length)
        throw new Error(`unexpected tokens: ${t.toString()}`)
}
const nx = new RegExp(/^(.*)\[([0-9]*)\]$/);
function I1(t) {
    const e = t.match(S5);
    if (v(e, "invalid type", "type", t),
    t === "uint")
        return "uint256";
    if (t === "int")
        return "int256";
    if (e[2]) {
        const n = parseInt(e[2]);
        v(n !== 0 && n <= 32, "invalid bytes length", "type", t)
    } else if (e[3]) {
        const n = parseInt(e[3]);
        v(n !== 0 && n <= 256 && n % 8 === 0, "invalid numeric width", "type", t)
    }
    return t
}
const ue = {}
  , ct = Symbol.for("_ethers_internal")
  , O1 = "_ParamTypeInternal"
  , B1 = "_ErrorInternal"
  , R1 = "_EventInternal"
  , L1 = "_ConstructorInternal"
  , U1 = "_FallbackInternal"
  , F1 = "_FunctionInternal"
  , D1 = "_StructInternal";
var oo, Eu;
const Tt = class {
    constructor(e, n, r, s, i, o, l, a) {
        b(this, oo);
        E(this, "name");
        E(this, "type");
        E(this, "baseType");
        E(this, "indexed");
        E(this, "components");
        E(this, "arrayLength");
        E(this, "arrayChildren");
        if (xa(e, ue, "ParamType"),
        Object.defineProperty(this, ct, {
            value: O1
        }),
        o && (o = Object.freeze(o.slice())),
        s === "array") {
            if (l == null || a == null)
                throw new Error("")
        } else if (l != null || a != null)
            throw new Error("");
        if (s === "tuple") {
            if (o == null)
                throw new Error("")
        } else if (o != null)
            throw new Error("");
        _(this, {
            name: n,
            type: r,
            baseType: s,
            indexed: i,
            components: o,
            arrayLength: l,
            arrayChildren: a
        })
    }
    format(e) {
        if (e == null && (e = "sighash"),
        e === "json") {
            let r = {
                type: this.baseType === "tuple" ? "tuple" : this.type,
                name: this.name || void 0
            };
            return typeof this.indexed == "boolean" && (r.indexed = this.indexed),
            this.isTuple() && (r.components = this.components.map(s => JSON.parse(s.format(e)))),
            JSON.stringify(r)
        }
        let n = "";
        return this.isArray() ? (n += this.arrayChildren.format(e),
        n += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? (e !== "sighash" && (n += this.type),
        n += "(" + this.components.map(r => r.format(e)).join(e === "full" ? ", " : ",") + ")") : n += this.type,
        e !== "sighash" && (this.indexed === !0 && (n += " indexed"),
        e === "full" && this.name && (n += " " + this.name)),
        n
    }
    isArray() {
        return this.baseType === "array"
    }
    isTuple() {
        return this.baseType === "tuple"
    }
    isIndexable() {
        return this.indexed != null
    }
    walk(e, n) {
        if (this.isArray()) {
            if (!Array.isArray(e))
                throw new Error("invalid array value");
            if (this.arrayLength !== -1 && e.length !== this.arrayLength)
                throw new Error("array is wrong length");
            const r = this;
            return e.map(s => r.arrayChildren.walk(s, n))
        }
        if (this.isTuple()) {
            if (!Array.isArray(e))
                throw new Error("invalid tuple value");
            if (e.length !== this.components.length)
                throw new Error("array is wrong length");
            const r = this;
            return e.map( (s, i) => r.components[i].walk(s, n))
        }
        return n(this.type, e)
    }
    async walkAsync(e, n) {
        const r = []
          , s = [e];
        return T(this, oo, Eu).call(this, r, e, n, i => {
            s[0] = i
        }
        ),
        r.length && await Promise.all(r),
        s[0]
    }
    static from(e, n) {
        if (Tt.isParamType(e))
            return e;
        if (typeof e == "string")
            return Tt.from(es(e), n);
        if (e instanceof on) {
            let l = ""
              , a = ""
              , u = null;
            rr(e, Je(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (a = "tuple",
            u = e.popParams().map(x => Tt.from(x)),
            l = `tuple(${u.map(x => x.format()).join(",")})`) : (l = I1(e.popType("TYPE")),
            a = l);
            let f = null
              , h = null;
            for (; e.length && e.peekType("BRACKET"); ) {
                const x = e.pop();
                f = new Tt(ue,"",l,a,null,u,h,f),
                h = x.value,
                l += x.text,
                a = "array",
                u = null
            }
            let d = null;
            if (rr(e, Jv).has("indexed")) {
                if (!n)
                    throw new Error("");
                d = !0
            }
            const A = e.peekType("ID") ? e.pop().text : "";
            if (e.length)
                throw new Error("leftover tokens");
            return new Tt(ue,A,l,a,d,u,h,f)
        }
        const r = e.name;
        v(!r || typeof r == "string" && r.match(b5), "invalid name", "obj.name", r);
        let s = e.indexed;
        s != null && (v(n, "parameter cannot be indexed", "obj.indexed", e.indexed),
        s = !!s);
        let i = e.type
          , o = i.match(nx);
        if (o) {
            const l = parseInt(o[2] || "-1")
              , a = Tt.from({
                type: o[1],
                components: e.components
            });
            return new Tt(ue,r || "",i,"array",s,null,l,a)
        }
        if (i === "tuple" || i.startsWith("tuple(") || i.startsWith("(")) {
            const l = e.components != null ? e.components.map(u => Tt.from(u)) : null;
            return new Tt(ue,r || "",i,"tuple",s,l,null,null)
        }
        return i = I1(e.type),
        new Tt(ue,r || "",i,i,s,null,null,null)
    }
    static isParamType(e) {
        return e && e[ct] === O1
    }
}
;
let Be = Tt;
oo = new WeakSet,
Eu = function(e, n, r, s) {
    if (this.isArray()) {
        if (!Array.isArray(n))
            throw new Error("invalid array value");
        if (this.arrayLength !== -1 && n.length !== this.arrayLength)
            throw new Error("array is wrong length");
        const o = this.arrayChildren
          , l = n.slice();
        l.forEach( (a, u) => {
            var f;
            T(f = o, oo, Eu).call(f, e, a, r, h => {
                l[u] = h
            }
            )
        }
        ),
        s(l);
        return
    }
    if (this.isTuple()) {
        const o = this.components;
        let l;
        if (Array.isArray(n))
            l = n.slice();
        else {
            if (n == null || typeof n != "object")
                throw new Error("invalid tuple value");
            l = o.map(a => {
                if (!a.name)
                    throw new Error("cannot use object value with unnamed components");
                if (!(a.name in n))
                    throw new Error(`missing value for component ${a.name}`);
                return n[a.name]
            }
            )
        }
        if (l.length !== this.components.length)
            throw new Error("array is wrong length");
        l.forEach( (a, u) => {
            var f;
            T(f = o[u], oo, Eu).call(f, e, a, r, h => {
                l[u] = h
            }
            )
        }
        ),
        s(l);
        return
    }
    const i = r(this.type, n);
    i.then ? e.push(async function() {
        s(await i)
    }()) : s(i)
}
;
class Js {
    constructor(e, n, r) {
        E(this, "type");
        E(this, "inputs");
        xa(e, ue, "Fragment"),
        r = Object.freeze(r.slice()),
        _(this, {
            type: n,
            inputs: r
        })
    }
    static from(e) {
        if (typeof e == "string") {
            try {
                Js.from(JSON.parse(e))
            } catch {}
            return Js.from(es(e))
        }
        if (e instanceof on)
            switch (e.peekKeyword(x5)) {
            case "constructor":
                return Jn.from(e);
            case "error":
                return st.from(e);
            case "event":
                return vn.from(e);
            case "fallback":
            case "receive":
                return Bn.from(e);
            case "function":
                return xn.from(e);
            case "struct":
                return Ms.from(e)
            }
        else if (typeof e == "object") {
            switch (e.type) {
            case "constructor":
                return Jn.from(e);
            case "error":
                return st.from(e);
            case "event":
                return vn.from(e);
            case "fallback":
            case "receive":
                return Bn.from(e);
            case "function":
                return xn.from(e);
            case "struct":
                return Ms.from(e)
            }
            k(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
                operation: "Fragment.from"
            })
        }
        v(!1, "unsupported frgament object", "obj", e)
    }
    static isConstructor(e) {
        return Jn.isFragment(e)
    }
    static isError(e) {
        return st.isFragment(e)
    }
    static isEvent(e) {
        return vn.isFragment(e)
    }
    static isFunction(e) {
        return xn.isFragment(e)
    }
    static isStruct(e) {
        return Ms.isFragment(e)
    }
}
class Wc extends Js {
    constructor(n, r, s, i) {
        super(n, r, i);
        E(this, "name");
        v(typeof s == "string" && s.match(b5), "invalid identifier", "name", s),
        i = Object.freeze(i.slice()),
        _(this, {
            name: s
        })
    }
}
function Yl(t, e) {
    return "(" + e.map(n => n.format(t)).join(t === "full" ? ", " : ",") + ")"
}
class st extends Wc {
    constructor(e, n, r) {
        super(e, "error", n, r),
        Object.defineProperty(this, ct, {
            value: B1
        })
    }
    get selector() {
        return Ks(this.format("sighash")).substring(0, 10)
    }
    format(e) {
        if (e == null && (e = "sighash"),
        e === "json")
            return JSON.stringify({
                type: "error",
                name: this.name,
                inputs: this.inputs.map(r => JSON.parse(r.format(e)))
            });
        const n = [];
        return e !== "sighash" && n.push("error"),
        n.push(this.name + Yl(e, this.inputs)),
        n.join(" ")
    }
    static from(e) {
        if (st.isFragment(e))
            return e;
        if (typeof e == "string")
            return st.from(es(e));
        if (e instanceof on) {
            const n = Kc("error", e)
              , r = $n(e);
            return Ws(e),
            new st(ue,n,r)
        }
        return new st(ue,e.name,e.inputs ? e.inputs.map(Be.from) : [])
    }
    static isFragment(e) {
        return e && e[ct] === B1
    }
}
class vn extends Wc {
    constructor(n, r, s, i) {
        super(n, "event", r, s);
        E(this, "anonymous");
        Object.defineProperty(this, ct, {
            value: R1
        }),
        _(this, {
            anonymous: i
        })
    }
    get topicHash() {
        return Ks(this.format("sighash"))
    }
    format(n) {
        if (n == null && (n = "sighash"),
        n === "json")
            return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map(s => JSON.parse(s.format(n)))
            });
        const r = [];
        return n !== "sighash" && r.push("event"),
        r.push(this.name + Yl(n, this.inputs)),
        n !== "sighash" && this.anonymous && r.push("anonymous"),
        r.join(" ")
    }
    static getTopicHash(n, r) {
        return r = (r || []).map(i => Be.from(i)),
        new vn(ue,n,r,!1).topicHash
    }
    static from(n) {
        if (vn.isFragment(n))
            return n;
        if (typeof n == "string")
            return vn.from(es(n));
        if (n instanceof on) {
            const r = Kc("event", n)
              , s = $n(n, !0)
              , i = !!rr(n, Je(["anonymous"])).has("anonymous");
            return Ws(n),
            new vn(ue,r,s,i)
        }
        return new vn(ue,n.name,n.inputs ? n.inputs.map(r => Be.from(r, !0)) : [],!!n.anonymous)
    }
    static isFragment(n) {
        return n && n[ct] === R1
    }
}
class Jn extends Js {
    constructor(n, r, s, i, o) {
        super(n, r, s);
        E(this, "payable");
        E(this, "gas");
        Object.defineProperty(this, ct, {
            value: L1
        }),
        _(this, {
            payable: i,
            gas: o
        })
    }
    format(n) {
        if (k(n != null && n !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
            operation: "format(sighash)"
        }),
        n === "json")
            return JSON.stringify({
                type: "constructor",
                stateMutability: this.payable ? "payable" : "undefined",
                payable: this.payable,
                gas: this.gas != null ? this.gas : void 0,
                inputs: this.inputs.map(s => JSON.parse(s.format(n)))
            });
        const r = [`constructor${Yl(n, this.inputs)}`];
        return r.push(this.payable ? "payable" : "nonpayable"),
        this.gas != null && r.push(`@${this.gas.toString()}`),
        r.join(" ")
    }
    static from(n) {
        if (Jn.isFragment(n))
            return n;
        if (typeof n == "string")
            return Jn.from(es(n));
        if (n instanceof on) {
            rr(n, Je(["constructor"]));
            const r = $n(n)
              , s = !!rr(n, Je(["payable"])).has("payable")
              , i = C5(n);
            return Ws(n),
            new Jn(ue,"constructor",r,s,i)
        }
        return new Jn(ue,"constructor",n.inputs ? n.inputs.map(Be.from) : [],!!n.payable,n.gas != null ? n.gas : null)
    }
    static isFragment(n) {
        return n && n[ct] === L1
    }
}
class Bn extends Js {
    constructor(n, r, s) {
        super(n, "fallback", r);
        E(this, "payable");
        Object.defineProperty(this, ct, {
            value: U1
        }),
        _(this, {
            payable: s
        })
    }
    format(n) {
        const r = this.inputs.length === 0 ? "receive" : "fallback";
        if (n === "json") {
            const s = this.payable ? "payable" : "nonpayable";
            return JSON.stringify({
                type: r,
                stateMutability: s
            })
        }
        return `${r}()${this.payable ? " payable" : ""}`
    }
    static from(n) {
        if (Bn.isFragment(n))
            return n;
        if (typeof n == "string")
            return Bn.from(es(n));
        if (n instanceof on) {
            const r = n.toString()
              , s = n.peekKeyword(Je(["fallback", "receive"]));
            if (v(s, "type must be fallback or receive", "obj", r),
            n.popKeyword(Je(["fallback", "receive"])) === "receive") {
                const a = $n(n);
                return v(a.length === 0, "receive cannot have arguments", "obj.inputs", a),
                rr(n, Je(["payable"])),
                Ws(n),
                new Bn(ue,[],!0)
            }
            let o = $n(n);
            o.length ? v(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map(a => a.format("minimal")).join(", ")) : o = [Be.from("bytes")];
            const l = k5(n);
            if (v(l === "nonpayable" || l === "payable", "fallback cannot be constants", "obj.stateMutability", l),
            rr(n, Je(["returns"])).has("returns")) {
                const a = $n(n);
                v(a.length === 1 && a[0].type === "bytes", "invalid fallback outputs", "obj.outputs", a.map(u => u.format("minimal")).join(", "))
            }
            return Ws(n),
            new Bn(ue,o,l === "payable")
        }
        if (n.type === "receive")
            return new Bn(ue,[],!0);
        if (n.type === "fallback") {
            const r = [Be.from("bytes")]
              , s = n.stateMutability === "payable";
            return new Bn(ue,r,s)
        }
        v(!1, "invalid fallback description", "obj", n)
    }
    static isFragment(n) {
        return n && n[ct] === U1
    }
}
class xn extends Wc {
    constructor(n, r, s, i, o, l) {
        super(n, "function", r, i);
        E(this, "constant");
        E(this, "outputs");
        E(this, "stateMutability");
        E(this, "payable");
        E(this, "gas");
        Object.defineProperty(this, ct, {
            value: F1
        }),
        o = Object.freeze(o.slice()),
        _(this, {
            constant: s === "view" || s === "pure",
            gas: l,
            outputs: o,
            payable: s === "payable",
            stateMutability: s
        })
    }
    get selector() {
        return Ks(this.format("sighash")).substring(0, 10)
    }
    format(n) {
        if (n == null && (n = "sighash"),
        n === "json")
            return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
                payable: this.payable,
                gas: this.gas != null ? this.gas : void 0,
                inputs: this.inputs.map(s => JSON.parse(s.format(n))),
                outputs: this.outputs.map(s => JSON.parse(s.format(n)))
            });
        const r = [];
        return n !== "sighash" && r.push("function"),
        r.push(this.name + Yl(n, this.inputs)),
        n !== "sighash" && (this.stateMutability !== "nonpayable" && r.push(this.stateMutability),
        this.outputs && this.outputs.length && (r.push("returns"),
        r.push(Yl(n, this.outputs))),
        this.gas != null && r.push(`@${this.gas.toString()}`)),
        r.join(" ")
    }
    static getSelector(n, r) {
        return r = (r || []).map(i => Be.from(i)),
        new xn(ue,n,"view",r,[],null).selector
    }
    static from(n) {
        if (xn.isFragment(n))
            return n;
        if (typeof n == "string")
            return xn.from(es(n));
        if (n instanceof on) {
            const s = Kc("function", n)
              , i = $n(n)
              , o = k5(n);
            let l = [];
            rr(n, Je(["returns"])).has("returns") && (l = $n(n));
            const a = C5(n);
            return Ws(n),
            new xn(ue,s,o,i,l,a)
        }
        let r = n.stateMutability;
        return r == null && (r = "payable",
        typeof n.constant == "boolean" ? (r = "view",
        n.constant || (r = "payable",
        typeof n.payable == "boolean" && !n.payable && (r = "nonpayable"))) : typeof n.payable == "boolean" && !n.payable && (r = "nonpayable")),
        new xn(ue,n.name,r,n.inputs ? n.inputs.map(Be.from) : [],n.outputs ? n.outputs.map(Be.from) : [],n.gas != null ? n.gas : null)
    }
    static isFragment(n) {
        return n && n[ct] === F1
    }
}
class Ms extends Wc {
    constructor(e, n, r) {
        super(e, "struct", n, r),
        Object.defineProperty(this, ct, {
            value: D1
        })
    }
    format() {
        throw new Error("@TODO")
    }
    static from(e) {
        if (typeof e == "string")
            return Ms.from(es(e));
        if (e instanceof on) {
            const n = Kc("struct", e)
              , r = $n(e);
            return Ws(e),
            new Ms(ue,n,r)
        }
        return new Ms(ue,e.name,e.inputs ? e.inputs.map(Be.from) : [])
    }
    static isFragment(e) {
        return e && e[ct] === D1
    }
}
const ln = new Map;
ln.set(0, "GENERIC_PANIC");
ln.set(1, "ASSERT_FALSE");
ln.set(17, "OVERFLOW");
ln.set(18, "DIVIDE_BY_ZERO");
ln.set(33, "ENUM_RANGE_ERROR");
ln.set(34, "BAD_STORAGE_DATA");
ln.set(49, "STACK_UNDERFLOW");
ln.set(50, "ARRAY_RANGE_ERROR");
ln.set(65, "OUT_OF_MEMORY");
ln.set(81, "UNINITIALIZED_FUNCTION_CALL");
const rx = new RegExp(/^bytes([0-9]*)$/)
  , sx = new RegExp(/^(u?int)([0-9]*)$/);
let Df = null;
function ix(t, e, n, r) {
    let s = "missing revert data"
      , i = null;
    const o = null;
    let l = null;
    if (n) {
        s = "execution reverted";
        const u = J(n);
        if (n = M(n),
        u.length === 0)
            s += " (no data present; likely require(false) occurred",
            i = "require(false)";
        else if (u.length % 32 !== 4)
            s += " (could not decode reason; invalid data length)";
        else if (M(u.slice(0, 4)) === "0x08c379a0")
            try {
                i = r.decode(["string"], u.slice(4))[0],
                l = {
                    signature: "Error(string)",
                    name: "Error",
                    args: [i]
                },
                s += `: ${JSON.stringify(i)}`
            } catch {
                s += " (could not decode reason; invalid string data)"
            }
        else if (M(u.slice(0, 4)) === "0x4e487b71")
            try {
                const f = Number(r.decode(["uint256"], u.slice(4))[0]);
                l = {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    args: [f]
                },
                i = `Panic due to ${ln.get(f) || "UNKNOWN"}(${f})`,
                s += `: ${i}`
            } catch {
                s += " (could not decode panic code)"
            }
        else
            s += " (unknown custom error)"
    }
    const a = {
        to: e.to ? ee(e.to) : null,
        data: e.data || "0x"
    };
    return e.from && (a.from = ee(e.from)),
    tt(s, "CALL_EXCEPTION", {
        action: t,
        data: n,
        reason: i,
        transaction: a,
        invocation: o,
        revert: l
    })
}
var vr, oi;
const wc = class {
    constructor() {
        b(this, vr)
    }
    getDefaultValue(e) {
        const n = e.map(s => T(this, vr, oi).call(this, Be.from(s)));
        return new su(n,"_").defaultValue()
    }
    encode(e, n) {
        hy(n.length, e.length, "types/values length mismatch");
        const r = e.map(o => T(this, vr, oi).call(this, Be.from(o)))
          , s = new su(r,"_")
          , i = new G0;
        return s.encode(i, n),
        i.data
    }
    decode(e, n, r) {
        const s = e.map(o => T(this, vr, oi).call(this, Be.from(o)));
        return new su(s,"_").decode(new V0(n,r))
    }
    static defaultAbiCoder() {
        return Df == null && (Df = new wc),
        Df
    }
    static getBuiltinCallException(e, n, r) {
        return ix(e, n, r, wc.defaultAbiCoder())
    }
}
;
let Zl = wc;
vr = new WeakSet,
oi = function(e) {
    if (e.isArray())
        return new O8(T(this, vr, oi).call(this, e.arrayChildren),e.arrayLength,e.name);
    if (e.isTuple())
        return new su(e.components.map(r => T(this, vr, oi).call(this, r)),e.name);
    switch (e.baseType) {
    case "address":
        return new T8(e.name);
    case "bool":
        return new B8(e.name);
    case "string":
        return new H8(e.name);
    case "bytes":
        return new R8(e.name);
    case "":
        return new F8(e.name)
    }
    let n = e.type.match(sx);
    if (n) {
        let r = parseInt(n[2] || "256");
        return v(r !== 0 && r <= 256 && r % 8 === 0, "invalid " + n[1] + " bit length", "param", e),
        new _8(r / 8,n[1] === "int",e.name)
    }
    if (n = e.type.match(rx),
    n) {
        let r = parseInt(n[1]);
        return v(r !== 0 && r <= 32, "invalid bytes length", "param", e),
        new L8(r,e.name)
    }
    v(!1, "invalid type", "type", e.type)
}
;
class ox {
    constructor(e, n, r) {
        E(this, "fragment");
        E(this, "name");
        E(this, "signature");
        E(this, "topic");
        E(this, "args");
        const s = e.name
          , i = e.format();
        _(this, {
            fragment: e,
            name: s,
            signature: i,
            topic: n,
            args: r
        })
    }
}
class lx {
    constructor(e, n, r, s) {
        E(this, "fragment");
        E(this, "name");
        E(this, "args");
        E(this, "signature");
        E(this, "selector");
        E(this, "value");
        const i = e.name
          , o = e.format();
        _(this, {
            fragment: e,
            name: i,
            args: r,
            signature: o,
            selector: n,
            value: s
        })
    }
}
class ax {
    constructor(e, n, r) {
        E(this, "fragment");
        E(this, "name");
        E(this, "args");
        E(this, "signature");
        E(this, "selector");
        const s = e.name
          , i = e.format();
        _(this, {
            fragment: e,
            name: s,
            args: r,
            signature: i,
            selector: n
        })
    }
}
class M1 {
    constructor(e) {
        E(this, "hash");
        E(this, "_isIndexed");
        _(this, {
            hash: e,
            _isIndexed: !0
        })
    }
    static isIndexed(e) {
        return !!(e && e._isIndexed)
    }
}
const z1 = {
    0: "generic panic",
    1: "assert(false)",
    17: "arithmetic overflow",
    18: "division or modulo by zero",
    33: "enum overflow",
    34: "invalid encoded storage byte array accessed",
    49: "out-of-bounds array access; popping on an empty array",
    50: "out-of-bounds access of an array or bytesN",
    65: "out of memory",
    81: "uninitialized function"
}
  , _1 = {
    "0x08c379a0": {
        signature: "Error(string)",
        name: "Error",
        inputs: ["string"],
        reason: t => `reverted with reason string ${JSON.stringify(t)}`
    },
    "0x4e487b71": {
        signature: "Panic(uint256)",
        name: "Panic",
        inputs: ["uint256"],
        reason: t => {
            let e = "unknown panic code";
            return t >= 0 && t <= 255 && z1[t.toString()] && (e = z1[t.toString()]),
            `reverted with panic code 0x${t.toString(16)} (${e})`
        }
    }
};
var dn, pn, gn, Fe, lo, bu, ao, Su;
const Si = class {
    constructor(e) {
        b(this, lo);
        b(this, ao);
        E(this, "fragments");
        E(this, "deploy");
        E(this, "fallback");
        E(this, "receive");
        b(this, dn, void 0);
        b(this, pn, void 0);
        b(this, gn, void 0);
        b(this, Fe, void 0);
        let n = [];
        typeof e == "string" ? n = JSON.parse(e) : n = e,
        m(this, gn, new Map),
        m(this, dn, new Map),
        m(this, pn, new Map);
        const r = [];
        for (const o of n)
            try {
                r.push(Js.from(o))
            } catch (l) {
                console.log("EE", l)
            }
        _(this, {
            fragments: Object.freeze(r)
        });
        let s = null
          , i = !1;
        m(this, Fe, this.getAbiCoder()),
        this.fragments.forEach( (o, l) => {
            let a;
            switch (o.type) {
            case "constructor":
                if (this.deploy) {
                    console.log("duplicate definition - constructor");
                    return
                }
                _(this, {
                    deploy: o
                });
                return;
            case "fallback":
                o.inputs.length === 0 ? i = !0 : (v(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${l}]`, o),
                s = o,
                i = s.payable);
                return;
            case "function":
                a = c(this, gn);
                break;
            case "event":
                a = c(this, pn);
                break;
            case "error":
                a = c(this, dn);
                break;
            default:
                return
            }
            const u = o.format();
            a.has(u) || a.set(u, o)
        }
        ),
        this.deploy || _(this, {
            deploy: Jn.from("constructor()")
        }),
        _(this, {
            fallback: s,
            receive: i
        })
    }
    format(e) {
        const n = e ? "minimal" : "full";
        return this.fragments.map(s => s.format(n))
    }
    formatJson() {
        const e = this.fragments.map(n => n.format("json"));
        return JSON.stringify(e.map(n => JSON.parse(n)))
    }
    getAbiCoder() {
        return Zl.defaultAbiCoder()
    }
    getFunctionName(e) {
        const n = T(this, lo, bu).call(this, e, null, !1);
        return v(n, "no matching function", "key", e),
        n.name
    }
    hasFunction(e) {
        return !!T(this, lo, bu).call(this, e, null, !1)
    }
    getFunction(e, n) {
        return T(this, lo, bu).call(this, e, n || null, !0)
    }
    forEachFunction(e) {
        const n = Array.from(c(this, gn).keys());
        n.sort( (r, s) => r.localeCompare(s));
        for (let r = 0; r < n.length; r++) {
            const s = n[r];
            e(c(this, gn).get(s), r)
        }
    }
    getEventName(e) {
        const n = T(this, ao, Su).call(this, e, null, !1);
        return v(n, "no matching event", "key", e),
        n.name
    }
    hasEvent(e) {
        return !!T(this, ao, Su).call(this, e, null, !1)
    }
    getEvent(e, n) {
        return T(this, ao, Su).call(this, e, n || null, !0)
    }
    forEachEvent(e) {
        const n = Array.from(c(this, pn).keys());
        n.sort( (r, s) => r.localeCompare(s));
        for (let r = 0; r < n.length; r++) {
            const s = n[r];
            e(c(this, pn).get(s), r)
        }
    }
    getError(e, n) {
        if (me(e)) {
            const s = e.toLowerCase();
            if (_1[s])
                return st.from(_1[s].signature);
            for (const i of c(this, dn).values())
                if (s === i.selector)
                    return i;
            return null
        }
        if (e.indexOf("(") === -1) {
            const s = [];
            for (const [i,o] of c(this, dn))
                i.split("(")[0] === e && s.push(o);
            if (s.length === 0)
                return e === "Error" ? st.from("error Error(string)") : e === "Panic" ? st.from("error Panic(uint256)") : null;
            if (s.length > 1) {
                const i = s.map(o => JSON.stringify(o.format())).join(", ");
                v(!1, `ambiguous error description (i.e. ${i})`, "name", e)
            }
            return s[0]
        }
        if (e = st.from(e).format(),
        e === "Error(string)")
            return st.from("error Error(string)");
        if (e === "Panic(uint256)")
            return st.from("error Panic(uint256)");
        const r = c(this, dn).get(e);
        return r || null
    }
    forEachError(e) {
        const n = Array.from(c(this, dn).keys());
        n.sort( (r, s) => r.localeCompare(s));
        for (let r = 0; r < n.length; r++) {
            const s = n[r];
            e(c(this, dn).get(s), r)
        }
    }
    _decodeParams(e, n) {
        return c(this, Fe).decode(e, n)
    }
    _encodeParams(e, n) {
        return c(this, Fe).encode(e, n)
    }
    encodeDeploy(e) {
        return this._encodeParams(this.deploy.inputs, e || [])
    }
    decodeErrorResult(e, n) {
        if (typeof e == "string") {
            const r = this.getError(e);
            v(r, "unknown error", "fragment", e),
            e = r
        }
        return v(de(n, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", n),
        this._decodeParams(e.inputs, de(n, 4))
    }
    encodeErrorResult(e, n) {
        if (typeof e == "string") {
            const r = this.getError(e);
            v(r, "unknown error", "fragment", e),
            e = r
        }
        return xe([e.selector, this._encodeParams(e.inputs, n || [])])
    }
    decodeFunctionData(e, n) {
        if (typeof e == "string") {
            const r = this.getFunction(e);
            v(r, "unknown function", "fragment", e),
            e = r
        }
        return v(de(n, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", n),
        this._decodeParams(e.inputs, de(n, 4))
    }
    encodeFunctionData(e, n) {
        if (typeof e == "string") {
            const r = this.getFunction(e);
            v(r, "unknown function", "fragment", e),
            e = r
        }
        return xe([e.selector, this._encodeParams(e.inputs, n || [])])
    }
    decodeFunctionResult(e, n) {
        if (typeof e == "string") {
            const i = this.getFunction(e);
            v(i, "unknown function", "fragment", e),
            e = i
        }
        let r = "invalid length for result data";
        const s = it(n);
        if (s.length % 32 === 0)
            try {
                return c(this, Fe).decode(e.outputs, s)
            } catch {
                r = "could not decode result data"
            }
        k(!1, r, "BAD_DATA", {
            value: M(s),
            info: {
                method: e.name,
                signature: e.format()
            }
        })
    }
    makeError(e, n) {
        const r = J(e, "data")
          , s = Zl.getBuiltinCallException("call", n, r)
          , i = "execution reverted (unknown custom error)";
        if (s.message.startsWith(i)) {
            const l = M(r.slice(0, 4))
              , a = this.getError(l);
            if (a)
                try {
                    const u = c(this, Fe).decode(a.inputs, r.slice(4));
                    s.revert = {
                        name: a.name,
                        signature: a.format(),
                        args: u
                    },
                    s.reason = s.revert.signature,
                    s.message = `execution reverted: ${s.reason}`
                } catch {
                    s.message = "execution reverted (coult not decode custom error)"
                }
        }
        const o = this.parseTransaction(n);
        return o && (s.invocation = {
            method: o.name,
            signature: o.signature,
            args: o.args
        }),
        s
    }
    encodeFunctionResult(e, n) {
        if (typeof e == "string") {
            const r = this.getFunction(e);
            v(r, "unknown function", "fragment", e),
            e = r
        }
        return M(c(this, Fe).encode(e.outputs, n || []))
    }
    encodeFilterTopics(e, n) {
        if (typeof e == "string") {
            const i = this.getEvent(e);
            v(i, "unknown event", "eventFragment", e),
            e = i
        }
        k(n.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", {
            count: n.length,
            expectedCount: e.inputs.length
        });
        const r = [];
        e.anonymous || r.push(e.topicHash);
        const s = (i, o) => i.type === "string" ? Ks(o) : i.type === "bytes" ? ce(M(o)) : (i.type === "bool" && typeof o == "boolean" && (o = o ? "0x01" : "0x00"),
        i.type.match(/^u?int/) && (o = Jr(o)),
        i.type === "address" && c(this, Fe).encode(["address"], [o]),
        Vs(M(o), 32));
        for (n.forEach( (i, o) => {
            const l = e.inputs[o];
            if (!l.indexed) {
                v(i == null, "cannot filter non-indexed parameters; must be null", "contract." + l.name, i);
                return
            }
            i == null ? r.push(null) : l.baseType === "array" || l.baseType === "tuple" ? v(!1, "filtering with tuples or arrays not supported", "contract." + l.name, i) : Array.isArray(i) ? r.push(i.map(a => s(l, a))) : r.push(s(l, i))
        }
        ); r.length && r[r.length - 1] === null; )
            r.pop();
        return r
    }
    encodeEventLog(e, n) {
        if (typeof e == "string") {
            const o = this.getEvent(e);
            v(o, "unknown event", "eventFragment", e),
            e = o
        }
        const r = []
          , s = []
          , i = [];
        return e.anonymous || r.push(e.topicHash),
        v(n.length === e.inputs.length, "event arguments/values mismatch", "values", n),
        e.inputs.forEach( (o, l) => {
            const a = n[l];
            if (o.indexed)
                if (o.type === "string")
                    r.push(Ks(a));
                else if (o.type === "bytes")
                    r.push(ce(a));
                else {
                    if (o.baseType === "tuple" || o.baseType === "array")
                        throw new Error("not implemented");
                    r.push(c(this, Fe).encode([o.type], [a]))
                }
            else
                s.push(o),
                i.push(a)
        }
        ),
        {
            data: c(this, Fe).encode(s, i),
            topics: r
        }
    }
    decodeEventLog(e, n, r) {
        if (typeof e == "string") {
            const g = this.getEvent(e);
            v(g, "unknown event", "eventFragment", e),
            e = g
        }
        if (r != null && !e.anonymous) {
            const g = e.topicHash;
            v(me(r[0], 32) && r[0].toLowerCase() === g, "fragment/topic mismatch", "topics[0]", r[0]),
            r = r.slice(1)
        }
        const s = []
          , i = []
          , o = [];
        e.inputs.forEach( (g, A) => {
            g.indexed ? g.type === "string" || g.type === "bytes" || g.baseType === "tuple" || g.baseType === "array" ? (s.push(Be.from({
                type: "bytes32",
                name: g.name
            })),
            o.push(!0)) : (s.push(g),
            o.push(!1)) : (i.push(g),
            o.push(!1))
        }
        );
        const l = r != null ? c(this, Fe).decode(s, xe(r)) : null
          , a = c(this, Fe).decode(i, n, !0)
          , u = []
          , f = [];
        let h = 0
          , d = 0;
        return e.inputs.forEach( (g, A) => {
            let x = null;
            if (g.indexed)
                if (l == null)
                    x = new M1(null);
                else if (o[A])
                    x = new M1(l[d++]);
                else
                    try {
                        x = l[d++]
                    } catch (N) {
                        x = N
                    }
            else
                try {
                    x = a[h++]
                } catch (N) {
                    x = N
                }
            u.push(x),
            f.push(g.name || null)
        }
        ),
        ec.fromItems(u, f)
    }
    parseTransaction(e) {
        const n = J(e.data, "tx.data")
          , r = z(e.value != null ? e.value : 0, "tx.value")
          , s = this.getFunction(M(n.slice(0, 4)));
        if (!s)
            return null;
        const i = c(this, Fe).decode(s.inputs, n.slice(4));
        return new lx(s,s.selector,i,r)
    }
    parseCallResult(e) {
        throw new Error("@TODO")
    }
    parseLog(e) {
        const n = this.getEvent(e.topics[0]);
        return !n || n.anonymous ? null : new ox(n,n.topicHash,this.decodeEventLog(n, e.data, e.topics))
    }
    parseError(e) {
        const n = M(e)
          , r = this.getError(de(n, 0, 4));
        if (!r)
            return null;
        const s = c(this, Fe).decode(r.inputs, de(n, 4));
        return new ax(r,r.selector,s)
    }
    static from(e) {
        return e instanceof Si ? e : typeof e == "string" ? new Si(JSON.parse(e)) : typeof e.format == "function" ? new Si(e.format("json")) : new Si(e)
    }
}
;
let eh = Si;
dn = new WeakMap,
pn = new WeakMap,
gn = new WeakMap,
Fe = new WeakMap,
lo = new WeakSet,
bu = function(e, n, r) {
    if (me(e)) {
        const i = e.toLowerCase();
        for (const o of c(this, gn).values())
            if (i === o.selector)
                return o;
        return null
    }
    if (e.indexOf("(") === -1) {
        const i = [];
        for (const [o,l] of c(this, gn))
            o.split("(")[0] === e && i.push(l);
        if (n) {
            const o = n.length > 0 ? n[n.length - 1] : null;
            let l = n.length
              , a = !0;
            He.isTyped(o) && o.type === "overrides" && (a = !1,
            l--);
            for (let u = i.length - 1; u >= 0; u--) {
                const f = i[u].inputs.length;
                f !== l && (!a || f !== l - 1) && i.splice(u, 1)
            }
            for (let u = i.length - 1; u >= 0; u--) {
                const f = i[u].inputs;
                for (let h = 0; h < n.length; h++)
                    if (He.isTyped(n[h])) {
                        if (h >= f.length) {
                            if (n[h].type === "overrides")
                                continue;
                            i.splice(u, 1);
                            break
                        }
                        if (n[h].type !== f[h].baseType) {
                            i.splice(u, 1);
                            break
                        }
                    }
            }
        }
        if (i.length === 1 && n && n.length !== i[0].inputs.length) {
            const o = n[n.length - 1];
            (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1)
        }
        if (i.length === 0)
            return null;
        if (i.length > 1 && r) {
            const o = i.map(l => JSON.stringify(l.format())).join(", ");
            v(!1, `ambiguous function description (i.e. matches ${o})`, "key", e)
        }
        return i[0]
    }
    const s = c(this, gn).get(xn.from(e).format());
    return s || null
}
,
ao = new WeakSet,
Su = function(e, n, r) {
    if (me(e)) {
        const i = e.toLowerCase();
        for (const o of c(this, pn).values())
            if (i === o.topicHash)
                return o;
        return null
    }
    if (e.indexOf("(") === -1) {
        const i = [];
        for (const [o,l] of c(this, pn))
            o.split("(")[0] === e && i.push(l);
        if (n) {
            for (let o = i.length - 1; o >= 0; o--)
                i[o].inputs.length < n.length && i.splice(o, 1);
            for (let o = i.length - 1; o >= 0; o--) {
                const l = i[o].inputs;
                for (let a = 0; a < n.length; a++)
                    if (He.isTyped(n[a]) && n[a].type !== l[a].baseType) {
                        i.splice(o, 1);
                        break
                    }
            }
        }
        if (i.length === 0)
            return null;
        if (i.length > 1 && r) {
            const o = i.map(l => JSON.stringify(l.format())).join(", ");
            v(!1, `ambiguous event description (i.e. matches ${o})`, "key", e)
        }
        return i[0]
    }
    const s = c(this, pn).get(vn.from(e).format());
    return s || null
}
;
const ux = BigInt(0);
function yl(t) {
    return t ?? null
}
function _e(t) {
    return t == null ? null : t.toString()
}
class cx {
    constructor(e, n, r) {
        E(this, "gasPrice");
        E(this, "maxFeePerGas");
        E(this, "maxPriorityFeePerGas");
        _(this, {
            gasPrice: yl(e),
            maxFeePerGas: yl(n),
            maxPriorityFeePerGas: yl(r)
        })
    }
    toJSON() {
        const {gasPrice: e, maxFeePerGas: n, maxPriorityFeePerGas: r} = this;
        return {
            _type: "FeeData",
            gasPrice: _e(e),
            maxFeePerGas: _e(n),
            maxPriorityFeePerGas: _e(r)
        }
    }
}
function hc(t) {
    const e = {};
    t.to && (e.to = t.to),
    t.from && (e.from = t.from),
    t.data && (e.data = M(t.data));
    const n = "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const s of n)
        !(s in t) || t[s] == null || (e[s] = z(t[s], `request.${s}`));
    const r = "type,nonce".split(/,/);
    for (const s of r)
        !(s in t) || t[s] == null || (e[s] = K(t[s], `request.${s}`));
    return t.accessList && (e.accessList = qs(t.accessList)),
    "blockTag"in t && (e.blockTag = t.blockTag),
    "enableCcipRead"in t && (e.enableCcipReadEnabled = !!t.enableCcipRead),
    "customData"in t && (e.customData = t.customData),
    e
}
var Hn;
class fx {
    constructor(e, n) {
        E(this, "provider");
        E(this, "number");
        E(this, "hash");
        E(this, "timestamp");
        E(this, "parentHash");
        E(this, "nonce");
        E(this, "difficulty");
        E(this, "gasLimit");
        E(this, "gasUsed");
        E(this, "miner");
        E(this, "extraData");
        E(this, "baseFeePerGas");
        b(this, Hn, void 0);
        m(this, Hn, e.transactions.map(r => typeof r != "string" ? new Xl(r,n) : r)),
        _(this, {
            provider: n,
            hash: yl(e.hash),
            number: e.number,
            timestamp: e.timestamp,
            parentHash: e.parentHash,
            nonce: e.nonce,
            difficulty: e.difficulty,
            gasLimit: e.gasLimit,
            gasUsed: e.gasUsed,
            miner: e.miner,
            extraData: e.extraData,
            baseFeePerGas: yl(e.baseFeePerGas)
        })
    }
    get transactions() {
        return c(this, Hn).map(e => typeof e == "string" ? e : e.hash)
    }
    get prefetchedTransactions() {
        const e = c(this, Hn).slice();
        return e.length === 0 ? [] : (k(typeof e[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
            operation: "transactionResponses()"
        }),
        e)
    }
    toJSON() {
        const {baseFeePerGas: e, difficulty: n, extraData: r, gasLimit: s, gasUsed: i, hash: o, miner: l, nonce: a, number: u, parentHash: f, timestamp: h, transactions: d} = this;
        return {
            _type: "Block",
            baseFeePerGas: _e(e),
            difficulty: _e(n),
            extraData: r,
            gasLimit: _e(s),
            gasUsed: _e(i),
            hash: o,
            miner: l,
            nonce: a,
            number: u,
            parentHash: f,
            timestamp: h,
            transactions: d
        }
    }
    [Symbol.iterator]() {
        let e = 0;
        const n = this.transactions;
        return {
            next: () => e < this.length ? {
                value: n[e++],
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    get length() {
        return c(this, Hn).length
    }
    get date() {
        return this.timestamp == null ? null : new Date(this.timestamp * 1e3)
    }
    async getTransaction(e) {
        let n;
        if (typeof e == "number")
            n = c(this, Hn)[e];
        else {
            const r = e.toLowerCase();
            for (const s of c(this, Hn))
                if (typeof s == "string") {
                    if (s !== r)
                        continue;
                    n = s;
                    break
                } else {
                    if (s.hash === r)
                        continue;
                    n = s;
                    break
                }
        }
        if (n == null)
            throw new Error("no such tx");
        return typeof n == "string" ? await this.provider.getTransaction(n) : n
    }
    getPrefetchedTransaction(e) {
        const n = this.prefetchedTransactions;
        if (typeof e == "number")
            return n[e];
        e = e.toLowerCase();
        for (const r of n)
            if (r.hash === e)
                return r;
        v(!1, "no matching transaction", "indexOrHash", e)
    }
    isMined() {
        return !!this.hash
    }
    isLondon() {
        return !!this.baseFeePerGas
    }
    orphanedEvent() {
        if (!this.isMined())
            throw new Error("");
        return hx(this)
    }
}
Hn = new WeakMap;
class Jc {
    constructor(e, n) {
        E(this, "provider");
        E(this, "transactionHash");
        E(this, "blockHash");
        E(this, "blockNumber");
        E(this, "removed");
        E(this, "address");
        E(this, "data");
        E(this, "topics");
        E(this, "index");
        E(this, "transactionIndex");
        this.provider = n;
        const r = Object.freeze(e.topics.slice());
        _(this, {
            transactionHash: e.transactionHash,
            blockHash: e.blockHash,
            blockNumber: e.blockNumber,
            removed: e.removed,
            address: e.address,
            data: e.data,
            topics: r,
            index: e.index,
            transactionIndex: e.transactionIndex
        })
    }
    toJSON() {
        const {address: e, blockHash: n, blockNumber: r, data: s, index: i, removed: o, topics: l, transactionHash: a, transactionIndex: u} = this;
        return {
            _type: "log",
            address: e,
            blockHash: n,
            blockNumber: r,
            data: s,
            index: i,
            removed: o,
            topics: l,
            transactionHash: a,
            transactionIndex: u
        }
    }
    async getBlock() {
        const e = await this.provider.getBlock(this.blockHash);
        return k(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}),
        e
    }
    async getTransaction() {
        const e = await this.provider.getTransaction(this.transactionHash);
        return k(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}),
        e
    }
    async getTransactionReceipt() {
        const e = await this.provider.getTransactionReceipt(this.transactionHash);
        return k(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}),
        e
    }
    removedEvent() {
        return dx(this)
    }
}
var la;
class N5 {
    constructor(e, n) {
        E(this, "provider");
        E(this, "to");
        E(this, "from");
        E(this, "contractAddress");
        E(this, "hash");
        E(this, "index");
        E(this, "blockHash");
        E(this, "blockNumber");
        E(this, "logsBloom");
        E(this, "gasUsed");
        E(this, "cumulativeGasUsed");
        E(this, "gasPrice");
        E(this, "type");
        E(this, "status");
        E(this, "root");
        b(this, la, void 0);
        m(this, la, Object.freeze(e.logs.map(r => new Jc(r,n)))),
        _(this, {
            provider: n,
            to: e.to,
            from: e.from,
            contractAddress: e.contractAddress,
            hash: e.hash,
            index: e.index,
            blockHash: e.blockHash,
            blockNumber: e.blockNumber,
            logsBloom: e.logsBloom,
            gasUsed: e.gasUsed,
            cumulativeGasUsed: e.cumulativeGasUsed,
            gasPrice: e.effectiveGasPrice || e.gasPrice,
            type: e.type,
            status: e.status,
            root: e.root
        })
    }
    get logs() {
        return c(this, la)
    }
    toJSON() {
        const {to: e, from: n, contractAddress: r, hash: s, index: i, blockHash: o, blockNumber: l, logsBloom: a, logs: u, status: f, root: h} = this;
        return {
            _type: "TransactionReceipt",
            blockHash: o,
            blockNumber: l,
            contractAddress: r,
            cumulativeGasUsed: _e(this.cumulativeGasUsed),
            from: n,
            gasPrice: _e(this.gasPrice),
            gasUsed: _e(this.gasUsed),
            hash: s,
            index: i,
            logs: u,
            logsBloom: a,
            root: h,
            status: f,
            to: e
        }
    }
    get length() {
        return this.logs.length
    }
    [Symbol.iterator]() {
        let e = 0;
        return {
            next: () => e < this.length ? {
                value: this.logs[e++],
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    get fee() {
        return this.gasUsed * this.gasPrice
    }
    async getBlock() {
        const e = await this.provider.getBlock(this.blockHash);
        if (e == null)
            throw new Error("TODO");
        return e
    }
    async getTransaction() {
        const e = await this.provider.getTransaction(this.hash);
        if (e == null)
            throw new Error("TODO");
        return e
    }
    async getResult() {
        return await this.provider.getTransactionResult(this.hash)
    }
    async confirmations() {
        return await this.provider.getBlockNumber() - this.blockNumber + 1
    }
    removedEvent() {
        return T5(this)
    }
    reorderedEvent(e) {
        return k(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "reorderedEvent(other)"
        }),
        P5(this, e)
    }
}
la = new WeakMap;
var xr;
const kd = class {
    constructor(e, n) {
        E(this, "provider");
        E(this, "blockNumber");
        E(this, "blockHash");
        E(this, "index");
        E(this, "hash");
        E(this, "type");
        E(this, "to");
        E(this, "from");
        E(this, "nonce");
        E(this, "gasLimit");
        E(this, "gasPrice");
        E(this, "maxPriorityFeePerGas");
        E(this, "maxFeePerGas");
        E(this, "data");
        E(this, "value");
        E(this, "chainId");
        E(this, "signature");
        E(this, "accessList");
        b(this, xr, void 0);
        this.provider = n,
        this.blockNumber = e.blockNumber != null ? e.blockNumber : null,
        this.blockHash = e.blockHash != null ? e.blockHash : null,
        this.hash = e.hash,
        this.index = e.index,
        this.type = e.type,
        this.from = e.from,
        this.to = e.to || null,
        this.gasLimit = e.gasLimit,
        this.nonce = e.nonce,
        this.data = e.data,
        this.value = e.value,
        this.gasPrice = e.gasPrice,
        this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null,
        this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null,
        this.chainId = e.chainId,
        this.signature = e.signature,
        this.accessList = e.accessList != null ? e.accessList : null,
        m(this, xr, -1)
    }
    toJSON() {
        const {blockNumber: e, blockHash: n, index: r, hash: s, type: i, to: o, from: l, nonce: a, data: u, signature: f, accessList: h} = this;
        return {
            _type: "TransactionReceipt",
            accessList: h,
            blockNumber: e,
            blockHash: n,
            chainId: _e(this.chainId),
            data: u,
            from: l,
            gasLimit: _e(this.gasLimit),
            gasPrice: _e(this.gasPrice),
            hash: s,
            maxFeePerGas: _e(this.maxFeePerGas),
            maxPriorityFeePerGas: _e(this.maxPriorityFeePerGas),
            nonce: a,
            signature: f,
            to: o,
            index: r,
            type: i,
            value: _e(this.value)
        }
    }
    async getBlock() {
        let e = this.blockNumber;
        if (e == null) {
            const r = await this.getTransaction();
            r && (e = r.blockNumber)
        }
        if (e == null)
            return null;
        const n = this.provider.getBlock(e);
        if (n == null)
            throw new Error("TODO");
        return n
    }
    async getTransaction() {
        return this.provider.getTransaction(this.hash)
    }
    async wait(e, n) {
        const r = e ?? 1
          , s = n ?? 0;
        let i = c(this, xr)
          , o = -1
          , l = i === -1;
        const a = async () => {
            if (l)
                return null;
            const {blockNumber: h, nonce: d} = await et({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from)
            });
            if (d < this.nonce) {
                i = h;
                return
            }
            if (l)
                return null;
            const g = await this.getTransaction();
            if (!(g && g.blockNumber != null))
                for (o === -1 && (o = i - 3,
                o < c(this, xr) && (o = c(this, xr))); o <= h; ) {
                    if (l)
                        return null;
                    const A = await this.provider.getBlock(o, !0);
                    if (A == null)
                        return;
                    for (const x of A)
                        if (x === this.hash)
                            return;
                    for (let x = 0; x < A.length; x++) {
                        const N = await A.getTransaction(x);
                        if (N.from === this.from && N.nonce === this.nonce) {
                            if (l)
                                return null;
                            const y = await this.provider.getTransactionReceipt(N.hash);
                            if (y == null || h - y.blockNumber + 1 < r)
                                return;
                            let p = "replaced";
                            N.data === this.data && N.to === this.to && N.value === this.value ? p = "repriced" : N.data === "0x" && N.from === N.to && N.value === ux && (p = "cancelled"),
                            k(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                                cancelled: p === "replaced" || p === "cancelled",
                                reason: p,
                                replacement: N.replaceableTransaction(i),
                                hash: N.hash,
                                receipt: y
                            })
                        }
                    }
                    o++
                }
        }
          , u = await this.provider.getTransactionReceipt(this.hash);
        if (u) {
            if (await u.confirmations() >= r)
                return u
        } else if (await a(),
        r === 0)
            return null;
        return await new Promise( (h, d) => {
            const g = []
              , A = () => {
                g.forEach(N => N())
            }
            ;
            if (g.push( () => {
                l = !0
            }
            ),
            s > 0) {
                const N = setTimeout( () => {
                    A(),
                    d(tt("wait for transaction timeout", "TIMEOUT"))
                }
                , s);
                g.push( () => {
                    clearTimeout(N)
                }
                )
            }
            const x = async N => {
                await N.confirmations() >= r && (A(),
                h(N))
            }
            ;
            if (g.push( () => {
                this.provider.off(this.hash, x)
            }
            ),
            this.provider.on(this.hash, x),
            i >= 0) {
                const N = async () => {
                    try {
                        await a()
                    } catch (y) {
                        if (kn(y, "TRANSACTION_REPLACED")) {
                            A(),
                            d(y);
                            return
                        }
                    }
                    l || this.provider.once("block", N)
                }
                ;
                g.push( () => {
                    this.provider.off("block", N)
                }
                ),
                this.provider.once("block", N)
            }
        }
        )
    }
    isMined() {
        return this.blockHash != null
    }
    isLegacy() {
        return this.type === 0
    }
    isBerlin() {
        return this.type === 1
    }
    isLondon() {
        return this.type === 2
    }
    removedEvent() {
        return k(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }),
        T5(this)
    }
    reorderedEvent(e) {
        return k(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }),
        k(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }),
        P5(this, e)
    }
    replaceableTransaction(e) {
        v(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
        const n = new kd(this,this.provider);
        return m(n, xr, e),
        n
    }
}
;
let Xl = kd;
xr = new WeakMap;
function hx(t) {
    return {
        orphan: "drop-block",
        hash: t.hash,
        number: t.number
    }
}
function P5(t, e) {
    return {
        orphan: "reorder-transaction",
        tx: t,
        other: e
    }
}
function T5(t) {
    return {
        orphan: "drop-transaction",
        tx: t
    }
}
function dx(t) {
    return {
        orphan: "drop-log",
        log: {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            address: t.address,
            data: t.data,
            topics: Object.freeze(t.topics.slice()),
            index: t.index
        }
    }
}
class yd extends Jc {
    constructor(n, r, s) {
        super(n, n.provider);
        E(this, "interface");
        E(this, "fragment");
        E(this, "args");
        const i = r.decodeEventLog(s, n.data, n.topics);
        _(this, {
            args: i,
            fragment: s,
            interface: r
        })
    }
    get eventName() {
        return this.fragment.name
    }
    get eventSignature() {
        return this.fragment.format()
    }
}
var uo;
class px extends N5 {
    constructor(n, r, s) {
        super(s, r);
        b(this, uo, void 0);
        m(this, uo, n)
    }
    get logs() {
        return super.logs.map(n => {
            const r = n.topics.length ? c(this, uo).getEvent(n.topics[0]) : null;
            return r ? new yd(n,c(this, uo),r) : n
        }
        )
    }
}
uo = new WeakMap;
var aa;
class wd extends Xl {
    constructor(n, r, s) {
        super(s, r);
        b(this, aa, void 0);
        m(this, aa, n)
    }
    async wait(n) {
        const r = await super.wait();
        return r == null ? null : new px(c(this, aa),this.provider,r)
    }
}
aa = new WeakMap;
class I5 extends gy {
    constructor(n, r, s, i) {
        super(n, r, s);
        E(this, "log");
        _(this, {
            log: i
        })
    }
    async getBlock() {
        return await this.log.getBlock()
    }
    async getTransaction() {
        return await this.log.getTransaction()
    }
    async getTransactionReceipt() {
        return await this.log.getTransactionReceipt()
    }
}
class gx extends I5 {
    constructor(e, n, r, s, i) {
        super(e, n, r, new yd(i,e.interface,s));
        const o = e.interface.decodeEventLog(s, this.log.data, this.log.topics);
        _(this, {
            args: o,
            fragment: s
        })
    }
    get eventName() {
        return this.fragment.name
    }
    get eventSignature() {
        return this.fragment.format()
    }
}
const H1 = BigInt(0);
function O5(t) {
    return t && typeof t.call == "function"
}
function B5(t) {
    return t && typeof t.estimateGas == "function"
}
function Ad(t) {
    return t && typeof t.resolveName == "function"
}
function R5(t) {
    return t && typeof t.sendTransaction == "function"
}
var ua;
class mx {
    constructor(e, n, r) {
        b(this, ua, void 0);
        E(this, "fragment");
        if (_(this, {
            fragment: n
        }),
        n.inputs.length < r.length)
            throw new Error("too many arguments");
        const s = Ys(e.runner, "resolveName")
          , i = Ad(s) ? s : null;
        m(this, ua, async function() {
            const o = await Promise.all(n.inputs.map( (l, a) => r[a] == null ? null : l.walkAsync(r[a], (f, h) => f === "address" ? At(h, i) : h)));
            return e.interface.encodeFilterTopics(n, o)
        }())
    }
    getTopicFilter() {
        return c(this, ua)
    }
}
ua = new WeakMap;
function Ys(t, e) {
    return t == null ? null : typeof t[e] == "function" ? t : t.provider && typeof t.provider[e] == "function" ? t.provider : null
}
function hs(t) {
    return t == null ? null : t.provider || null
}
async function L5(t, e) {
    const n = hc(He.dereference(t, "overrides"));
    return v(n.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to),
    v(n.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data),
    n.from && (n.from = await At(n.from)),
    n
}
async function yx(t, e, n) {
    const r = Ys(t, "resolveName")
      , s = Ad(r) ? r : null;
    return await Promise.all(e.map( (i, o) => i.walkAsync(n[o], (l, a) => (a = He.dereference(a, l),
    l === "address" ? At(a, s) : a))))
}
function wx(t) {
    const e = async function(o) {
        const l = await L5(o, ["data"]);
        l.to = await t.getAddress();
        const a = t.interface
          , u = a.receive || a.fallback && a.fallback.payable;
        return v(u || (l.value || H1) === H1, "cannot send value to non-payable contract", "overrides.value", l.value),
        v(a.fallback || (l.data || "0x") === "0x", "cannot send data to receive-only contract", "overrides.data", l.data),
        l
    }
      , n = async function(o) {
        const l = Ys(t.runner, "call");
        k(O5(l), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
            operation: "call"
        });
        const a = await e(o);
        try {
            return await l.call(a)
        } catch (u) {
            throw ad(u) && u.data ? t.interface.makeError(u.data, a) : u
        }
    }
      , r = async function(o) {
        const l = t.runner;
        k(R5(l), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
            operation: "sendTransaction"
        });
        const a = await l.sendTransaction(await e(o))
          , u = hs(t.runner);
        return new wd(t.interface,u,a)
    }
      , s = async function(o) {
        const l = Ys(t.runner, "estimateGas");
        return k(B5(l), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
            operation: "estimateGas"
        }),
        await l.estimateGas(await e(o))
    }
      , i = async o => await r(o);
    return _(i, {
        _contract: t,
        estimateGas: s,
        populateTransaction: e,
        send: r,
        staticCall: n
    }),
    i
}
function Ax(t, e) {
    const n = function(...u) {
        const f = t.interface.getFunction(e, u);
        return k(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
            operation: "fragment"
        }),
        f
    }
      , r = async function(...u) {
        const f = n(...u);
        let h = {};
        if (f.inputs.length + 1 === u.length && (h = await L5(u.pop())),
        f.inputs.length !== u.length)
            throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
        const d = await yx(t.runner, f.inputs, u);
        return Object.assign({}, h, await et({
            to: t.getAddress(),
            data: t.interface.encodeFunctionData(f, d)
        }))
    }
      , s = async function(...u) {
        const f = await l(...u);
        return f.length === 1 ? f[0] : f
    }
      , i = async function(...u) {
        const f = t.runner;
        k(R5(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
            operation: "sendTransaction"
        });
        const h = await f.sendTransaction(await r(...u))
          , d = hs(t.runner);
        return new wd(t.interface,d,h)
    }
      , o = async function(...u) {
        const f = Ys(t.runner, "estimateGas");
        return k(B5(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
            operation: "estimateGas"
        }),
        await f.estimateGas(await r(...u))
    }
      , l = async function(...u) {
        const f = Ys(t.runner, "call");
        k(O5(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
            operation: "call"
        });
        const h = await r(...u);
        let d = "0x";
        try {
            d = await f.call(h)
        } catch (A) {
            throw ad(A) && A.data ? t.interface.makeError(A.data, h) : A
        }
        const g = n(...u);
        return t.interface.decodeFunctionResult(g, d)
    }
      , a = async (...u) => n(...u).constant ? await s(...u) : await i(...u);
    return _(a, {
        name: t.interface.getFunctionName(e),
        _contract: t,
        _key: e,
        getFragment: n,
        estimateGas: o,
        populateTransaction: r,
        send: i,
        staticCall: s,
        staticCallResult: l
    }),
    Object.defineProperty(a, "fragment", {
        configurable: !1,
        enumerable: !0,
        get: () => {
            const u = t.interface.getFunction(e);
            return k(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
                operation: "fragment"
            }),
            u
        }
    }),
    a
}
function vx(t, e) {
    const n = function(...s) {
        const i = t.interface.getEvent(e, s);
        return k(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
            operation: "fragment"
        }),
        i
    }
      , r = function(...s) {
        return new mx(t,n(...s),s)
    };
    return _(r, {
        name: t.interface.getEventName(e),
        _contract: t,
        _key: e,
        getFragment: n
    }),
    Object.defineProperty(r, "fragment", {
        configurable: !1,
        enumerable: !0,
        get: () => {
            const s = t.interface.getEvent(e);
            return k(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
                operation: "fragment"
            }),
            s
        }
    }),
    r
}
const dc = Symbol.for("_ethersInternal_contract")
  , U5 = new WeakMap;
function xx(t, e) {
    U5.set(t[dc], e)
}
function Nt(t) {
    return U5.get(t[dc])
}
function Ex(t) {
    return t && typeof t == "object" && "getTopicFilter"in t && typeof t.getTopicFilter == "function" && t.fragment
}
async function vd(t, e) {
    let n, r = null;
    if (Array.isArray(e)) {
        const i = function(o) {
            if (me(o, 32))
                return o;
            const l = t.interface.getEvent(o);
            return v(l, "unknown fragment", "name", o),
            l.topicHash
        };
        n = e.map(o => o == null ? null : Array.isArray(o) ? o.map(i) : i(o))
    } else
        e === "*" ? n = [null] : typeof e == "string" ? me(e, 32) ? n = [e] : (r = t.interface.getEvent(e),
        v(r, "unknown fragment", "event", e),
        n = [r.topicHash]) : Ex(e) ? n = await e.getTopicFilter() : "fragment"in e ? (r = e.fragment,
        n = [r.topicHash]) : v(!1, "unknown event name", "event", e);
    n = n.map(i => {
        if (i == null)
            return null;
        if (Array.isArray(i)) {
            const o = Array.from(new Set(i.map(l => l.toLowerCase())).values());
            return o.length === 1 ? o[0] : (o.sort(),
            o)
        }
        return i.toLowerCase()
    }
    );
    const s = n.map(i => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
    return {
        fragment: r,
        tag: s,
        topics: n
    }
}
async function tl(t, e) {
    const {subs: n} = Nt(t);
    return n.get((await vd(t, e)).tag) || null
}
async function j1(t, e, n) {
    const r = hs(t.runner);
    k(r, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
        operation: e
    });
    const {fragment: s, tag: i, topics: o} = await vd(t, n)
      , {addr: l, subs: a} = Nt(t);
    let u = a.get(i);
    if (!u) {
        const h = {
            address: l || t,
            topics: o
        }
          , d = N => {
            let y = s;
            if (y == null)
                try {
                    y = t.interface.getEvent(N.topics[0])
                } catch {}
            if (y) {
                const p = y
                  , w = s ? t.interface.decodeEventLog(s, N.data, N.topics) : [];
                nh(t, n, w, S => new gx(t,S,n,p,N))
            } else
                nh(t, n, [], p => new I5(t,p,n,N))
        }
        ;
        let g = [];
        u = {
            tag: i,
            listeners: [],
            start: () => {
                g.length || g.push(r.on(h, d))
            }
            ,
            stop: async () => {
                if (g.length == 0)
                    return;
                let N = g;
                g = [],
                await Promise.all(N),
                r.off(h, d)
            }
        },
        a.set(i, u)
    }
    return u
}
let th = Promise.resolve();
async function bx(t, e, n, r) {
    await th;
    const s = await tl(t, e);
    if (!s)
        return !1;
    const i = s.listeners.length;
    return s.listeners = s.listeners.filter( ({listener: o, once: l}) => {
        const a = Array.from(n);
        r && a.push(r(l ? null : o));
        try {
            o.call(t, ...a)
        } catch {}
        return !l
    }
    ),
    i > 0
}
async function nh(t, e, n, r) {
    try {
        await th
    } catch {}
    const s = bx(t, e, n, r);
    return th = s,
    await s
}
const iu = ["then"];
var kE;
const Ac = class {
    constructor(e, n, r, s) {
        E(this, "target");
        E(this, "interface");
        E(this, "runner");
        E(this, "filters");
        E(this, kE);
        E(this, "fallback");
        r == null && (r = null);
        const i = eh.from(n);
        _(this, {
            target: e,
            runner: r,
            interface: i
        }),
        Object.defineProperty(this, dc, {
            value: {}
        });
        let o, l = null, a = null;
        if (s) {
            const h = hs(r);
            a = new wd(this.interface,h,s)
        }
        let u = new Map;
        if (typeof e == "string")
            if (me(e))
                l = e,
                o = Promise.resolve(e);
            else {
                const h = Ys(r, "resolveName");
                if (!Ad(h))
                    throw tt("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
                        operation: "resolveName"
                    });
                o = h.resolveName(e).then(d => {
                    if (d == null)
                        throw new Error("TODO");
                    return Nt(this).addr = d,
                    d
                }
                )
            }
        else
            o = e.getAddress().then(h => {
                if (h == null)
                    throw new Error("TODO");
                return Nt(this).addr = h,
                h
            }
            );
        xx(this, {
            addrPromise: o,
            addr: l,
            deployTx: a,
            subs: u
        });
        const f = new Proxy({},{
            get: (h, d, g) => {
                if (iu.indexOf(d) >= 0)
                    return Reflect.get(h, d, g);
                const A = String(d)
                  , x = this.getEvent(A);
                if (x)
                    return x;
                throw new Error(`unknown contract event: ${A}`)
            }
            ,
            has: (h, d) => iu.indexOf(d) >= 0 ? Reflect.has(h, d) : Reflect.has(h, d) || this.interface.hasEvent(String(d))
        });
        return _(this, {
            filters: f
        }),
        _(this, {
            fallback: i.receive || i.fallback ? wx(this) : null
        }),
        new Proxy(this,{
            get: (h, d, g) => {
                if (d in h || iu.indexOf(d) >= 0)
                    return Reflect.get(h, d, g);
                const A = String(d)
                  , x = h.getFunction(A);
                if (x)
                    return x;
                throw new Error(`unknown contract method: ${A}`)
            }
            ,
            has: (h, d) => d in h || iu.indexOf(d) >= 0 ? Reflect.has(h, d) : h.interface.hasFunction(String(d))
        })
    }
    connect(e) {
        return new Ac(this.target,this.interface,e)
    }
    async getAddress() {
        return await Nt(this).addrPromise
    }
    async getDeployedCode() {
        const e = hs(this.runner);
        k(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
            operation: "getDeployedCode"
        });
        const n = await e.getCode(await this.getAddress());
        return n === "0x" ? null : n
    }
    async waitForDeployment() {
        const e = this.deploymentTransaction();
        if (e)
            return await e.wait(),
            this;
        if (await this.getDeployedCode() != null)
            return this;
        const r = hs(this.runner);
        return k(r != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
            operation: "waitForDeployment"
        }),
        new Promise( (s, i) => {
            const o = async () => {
                try {
                    if (await this.getDeployedCode() != null)
                        return s(this);
                    r.once("block", o)
                } catch (l) {
                    i(l)
                }
            }
            ;
            o()
        }
        )
    }
    deploymentTransaction() {
        return Nt(this).deployTx
    }
    getFunction(e) {
        return typeof e != "string" && (e = e.format()),
        Ax(this, e)
    }
    getEvent(e) {
        return typeof e != "string" && (e = e.format()),
        vx(this, e)
    }
    async queryTransaction(e) {
        throw new Error("@TODO")
    }
    async queryFilter(e, n, r) {
        n == null && (n = 0),
        r == null && (r = "latest");
        const {addr: s, addrPromise: i} = Nt(this)
          , o = s || await i
          , {fragment: l, topics: a} = await vd(this, e)
          , u = {
            address: o,
            topics: a,
            fromBlock: n,
            toBlock: r
        }
          , f = hs(this.runner);
        return k(f, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
            operation: "queryFilter"
        }),
        (await f.getLogs(u)).map(h => {
            let d = l;
            if (d == null)
                try {
                    d = this.interface.getEvent(h.topics[0])
                } catch {}
            return d ? new yd(h,this.interface,d) : new Jc(h,f)
        }
        )
    }
    async on(e, n) {
        const r = await j1(this, "on", e);
        return r.listeners.push({
            listener: n,
            once: !1
        }),
        r.start(),
        this
    }
    async once(e, n) {
        const r = await j1(this, "once", e);
        return r.listeners.push({
            listener: n,
            once: !0
        }),
        r.start(),
        this
    }
    async emit(e, ...n) {
        return await nh(this, e, n, null)
    }
    async listenerCount(e) {
        if (e) {
            const s = await tl(this, e);
            return s ? s.listeners.length : 0
        }
        const {subs: n} = Nt(this);
        let r = 0;
        for (const {listeners: s} of n.values())
            r += s.length;
        return r
    }
    async listeners(e) {
        if (e) {
            const s = await tl(this, e);
            return s ? s.listeners.map( ({listener: i}) => i) : []
        }
        const {subs: n} = Nt(this);
        let r = [];
        for (const {listeners: s} of n.values())
            r = r.concat(s.map( ({listener: i}) => i));
        return r
    }
    async off(e, n) {
        const r = await tl(this, e);
        if (!r)
            return this;
        if (n) {
            const s = r.listeners.map( ({listener: i}) => i).indexOf(n);
            s >= 0 && r.listeners.splice(s, 1)
        }
        return (n == null || r.listeners.length === 0) && (r.stop(),
        Nt(this).subs.delete(r.tag)),
        this
    }
    async removeAllListeners(e) {
        if (e) {
            const n = await tl(this, e);
            if (!n)
                return this;
            n.stop(),
            Nt(this).subs.delete(n.tag)
        } else {
            const {subs: n} = Nt(this);
            for (const {tag: r, stop: s} of n.values())
                s(),
                n.delete(r)
        }
        return this
    }
    async addListener(e, n) {
        return await this.on(e, n)
    }
    async removeListener(e, n) {
        return await this.off(e, n)
    }
    static buildClass(e) {
        class n extends Ac {
            constructor(s, i=null) {
                super(s, e, i)
            }
        }
        return n
    }
    static from(e, n, r) {
        return r == null && (r = null),
        new this(e,n,r)
    }
}
;
let rh = Ac;
kE = dc;
function Sx() {
    return rh
}
class Di extends Sx() {
}
function Mf(t) {
    return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : v(!1, "unsupported IPFS format", "link", t),
    `https://gateway.ipfs.io/ipfs/${t}`
}
class kx {
    constructor(e) {
        E(this, "name");
        _(this, {
            name: e
        })
    }
    connect(e) {
        return this
    }
    supportsCoinType(e) {
        return !1
    }
    async encodeAddress(e, n) {
        throw new Error("unsupported coin")
    }
    async decodeAddress(e, n) {
        throw new Error("unsupported coin")
    }
}
const F5 = new RegExp("^(ipfs)://(.*)$","i")
  , G1 = [new RegExp("^(https)://(.*)$","i"), new RegExp("^(data):(.*)$","i"), F5, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];
var Er, Es, bs, nl, vc, D5;
const vl = class {
    constructor(e, n, r) {
        b(this, bs);
        E(this, "provider");
        E(this, "address");
        E(this, "name");
        b(this, Er, void 0);
        b(this, Es, void 0);
        _(this, {
            provider: e,
            address: n,
            name: r
        }),
        m(this, Er, null),
        m(this, Es, new Di(n,["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (address)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"],e))
    }
    async supportsWildcard() {
        return c(this, Er) == null && m(this, Er, (async () => {
            try {
                return await c(this, Es).supportsInterface("0x9061b923")
            } catch (e) {
                if (kn(e, "CALL_EXCEPTION"))
                    return !1;
                throw m(this, Er, null),
                e
            }
        }
        )()),
        await c(this, Er)
    }
    async getAddress(e) {
        if (e == null && (e = 60),
        e === 60)
            try {
                const i = await T(this, bs, nl).call(this, "addr(bytes32)");
                return i == null || i === i1 ? null : i
            } catch (i) {
                if (kn(i, "CALL_EXCEPTION"))
                    return null;
                throw i
            }
        let n = null;
        for (const i of this.provider.plugins)
            if (i instanceof kx && i.supportsCoinType(e)) {
                n = i;
                break
            }
        if (n == null)
            return null;
        const r = await T(this, bs, nl).call(this, "addr(bytes32,uint)", [e]);
        if (r == null || r === "0x")
            return null;
        const s = await n.encodeAddress(e, r);
        if (s != null)
            return s;
        k(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
            operation: `getAddress(${e})`,
            info: {
                coinType: e,
                data: r
            }
        })
    }
    async getText(e) {
        const n = await T(this, bs, nl).call(this, "text(bytes32,string)", [e]);
        return n == null || n === "0x" ? null : n
    }
    async getContentHash() {
        const e = await T(this, bs, nl).call(this, "contenthash(bytes32)");
        if (e == null || e === "0x")
            return null;
        const n = e.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
        if (n) {
            const s = n[1] === "e3010170" ? "ipfs" : "ipns"
              , i = parseInt(n[4], 16);
            if (n[5].length === i * 2)
                return `${s}://${U2("0x" + n[2])}`
        }
        const r = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
        if (r && r[1].length === 64)
            return `bzz://${r[1]}`;
        k(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
            operation: "getContentHash()",
            info: {
                data: e
            }
        })
    }
    async getAvatar() {
        return (await this._getAvatar()).url
    }
    async _getAvatar() {
        const e = [{
            type: "name",
            value: this.name
        }];
        try {
            const n = await this.getText("avatar");
            if (n == null)
                return e.push({
                    type: "!avatar",
                    value: ""
                }),
                {
                    url: null,
                    linkage: e
                };
            e.push({
                type: "avatar",
                value: n
            });
            for (let r = 0; r < G1.length; r++) {
                const s = n.match(G1[r]);
                if (s == null)
                    continue;
                const i = s[1].toLowerCase();
                switch (i) {
                case "https":
                case "data":
                    return e.push({
                        type: "url",
                        value: n
                    }),
                    {
                        linkage: e,
                        url: n
                    };
                case "ipfs":
                    {
                        const o = Mf(n);
                        return e.push({
                            type: "ipfs",
                            value: n
                        }),
                        e.push({
                            type: "url",
                            value: o
                        }),
                        {
                            linkage: e,
                            url: o
                        }
                    }
                case "erc721":
                case "erc1155":
                    {
                        const o = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
                        e.push({
                            type: i,
                            value: n
                        });
                        const l = await this.getAddress();
                        if (l == null)
                            return e.push({
                                type: "!owner",
                                value: ""
                            }),
                            {
                                url: null,
                                linkage: e
                            };
                        const a = (s[2] || "").split("/");
                        if (a.length !== 2)
                            return e.push({
                                type: `!${i}caip`,
                                value: s[2] || ""
                            }),
                            {
                                url: null,
                                linkage: e
                            };
                        const u = a[1]
                          , f = new Di(a[0],["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"],this.provider);
                        if (i === "erc721") {
                            const x = await f.ownerOf(u);
                            if (l !== x)
                                return e.push({
                                    type: "!owner",
                                    value: x
                                }),
                                {
                                    url: null,
                                    linkage: e
                                };
                            e.push({
                                type: "owner",
                                value: x
                            })
                        } else if (i === "erc1155") {
                            const x = await f.balanceOf(l, u);
                            if (!x)
                                return e.push({
                                    type: "!balance",
                                    value: "0"
                                }),
                                {
                                    url: null,
                                    linkage: e
                                };
                            e.push({
                                type: "balance",
                                value: x.toString()
                            })
                        }
                        let h = await f[o](u);
                        if (h == null || h === "0x")
                            return e.push({
                                type: "!metadata-url",
                                value: ""
                            }),
                            {
                                url: null,
                                linkage: e
                            };
                        e.push({
                            type: "metadata-url-base",
                            value: h
                        }),
                        i === "erc1155" && (h = h.replace("{id}", Jr(u, 32).substring(2)),
                        e.push({
                            type: "metadata-url-expanded",
                            value: h
                        })),
                        h.match(/^ipfs:/i) && (h = Mf(h)),
                        e.push({
                            type: "metadata-url",
                            value: h
                        });
                        let d = {};
                        const g = await new Qs(h).send();
                        g.assertOk();
                        try {
                            d = g.bodyJson
                        } catch {
                            try {
                                e.push({
                                    type: "!metadata",
                                    value: g.bodyText
                                })
                            } catch {
                                const y = g.body;
                                return y && e.push({
                                    type: "!metadata",
                                    value: M(y)
                                }),
                                {
                                    url: null,
                                    linkage: e
                                }
                            }
                            return {
                                url: null,
                                linkage: e
                            }
                        }
                        if (!d)
                            return e.push({
                                type: "!metadata",
                                value: ""
                            }),
                            {
                                url: null,
                                linkage: e
                            };
                        e.push({
                            type: "metadata",
                            value: JSON.stringify(d)
                        });
                        let A = d.image;
                        if (typeof A != "string")
                            return e.push({
                                type: "!imageUrl",
                                value: ""
                            }),
                            {
                                url: null,
                                linkage: e
                            };
                        if (!A.match(/^(https:\/\/|data:)/i)) {
                            if (A.match(F5) == null)
                                return e.push({
                                    type: "!imageUrl-ipfs",
                                    value: A
                                }),
                                {
                                    url: null,
                                    linkage: e
                                };
                            e.push({
                                type: "imageUrl-ipfs",
                                value: A
                            }),
                            A = Mf(A)
                        }
                        return e.push({
                            type: "url",
                            value: A
                        }),
                        {
                            linkage: e,
                            url: A
                        }
                    }
                }
            }
        } catch {}
        return {
            linkage: e,
            url: null
        }
    }
    static async getEnsAddress(e) {
        const n = await e.getNetwork()
          , r = n.getPlugin("org.ethers.plugins.network.Ens");
        return k(r, "network does not support ENS", "UNSUPPORTED_OPERATION", {
            operation: "getEnsAddress",
            info: {
                network: n
            }
        }),
        r.address
    }
    static async fromName(e, n) {
        var s;
        let r = n;
        for (; ; ) {
            if (r === "" || r === "." || n !== "eth" && r === "eth")
                return null;
            const i = await T(s = vl, vc, D5).call(s, e, r);
            if (i != null) {
                const o = new vl(e,i,n);
                return r !== n && !await o.supportsWildcard() ? null : o
            }
            r = r.split(".").slice(1).join(".")
        }
    }
}
;
let wl = vl;
Er = new WeakMap,
Es = new WeakMap,
bs = new WeakSet,
nl = async function(e, n) {
    n = (n || []).slice();
    const r = c(this, Es).interface;
    n.unshift($0(this.name));
    let s = null;
    await this.supportsWildcard() && (s = r.getFunction(e),
    k(s, "missing fragment", "UNKNOWN_ERROR", {
        info: {
            funcName: e
        }
    }),
    n = [Iv(this.name), r.encodeFunctionData(s, n)],
    e = "resolve(bytes,bytes)"),
    n.push({
        ccipReadEnable: !0
    });
    try {
        const i = await c(this, Es)[e](...n);
        return s ? r.decodeFunctionResult(s, i)[0] : i
    } catch (i) {
        if (!kn(i, "CALL_EXCEPTION"))
            throw i
    }
    return null
}
,
vc = new WeakSet,
D5 = async function(e, n) {
    const r = await vl.getEnsAddress(e);
    try {
        const i = await new Di(r,["function resolver(bytes32) view returns (address)"],e).resolver($0(n), {
            enableCcipRead: !0
        });
        return i === i1 ? null : i
    } catch (s) {
        throw s
    }
    return null
}
,
b(wl, vc);
const V1 = BigInt(0);
function pe(t, e) {
    return function(n) {
        return n == null ? e : t(n)
    }
}
function xd(t) {
    return e => {
        if (!Array.isArray(e))
            throw new Error("not an array");
        return e.map(n => t(n))
    }
}
function Ca(t, e) {
    return n => {
        const r = {};
        for (const s in t) {
            let i = s;
            if (e && s in e && !(i in n)) {
                for (const o of e[s])
                    if (o in n) {
                        i = o;
                        break
                    }
            }
            try {
                const o = t[s](n[i]);
                o !== void 0 && (r[s] = o)
            } catch (o) {
                const l = o instanceof Error ? o.message : "not-an-error";
                k(!1, `invalid value for value.${s} (${l})`, "BAD_DATA", {
                    value: n
                })
            }
        }
        return r
    }
}
function Cx(t) {
    switch (t) {
    case !0:
    case "true":
        return !0;
    case !1:
    case "false":
        return !1
    }
    v(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t)
}
function Bo(t) {
    return v(me(t, !0), "invalid data", "value", t),
    t
}
function Mt(t) {
    return v(me(t, 32), "invalid hash", "value", t),
    t
}
const Nx = Ca({
    address: ee,
    blockHash: Mt,
    blockNumber: K,
    data: Bo,
    index: K,
    removed: Cx,
    topics: xd(Mt),
    transactionHash: Mt,
    transactionIndex: K
}, {
    index: ["logIndex"]
});
function Px(t) {
    return Nx(t)
}
const Tx = Ca({
    hash: pe(Mt),
    parentHash: Mt,
    number: K,
    timestamp: K,
    nonce: pe(Bo),
    difficulty: z,
    gasLimit: z,
    gasUsed: z,
    miner: pe(ee),
    extraData: Bo,
    baseFeePerGas: pe(z)
});
function Ix(t) {
    const e = Tx(t);
    return e.transactions = t.transactions.map(n => typeof n == "string" ? n : M5(n)),
    e
}
const Ox = Ca({
    transactionIndex: K,
    blockNumber: K,
    transactionHash: Mt,
    address: ee,
    topics: xd(Mt),
    data: Bo,
    index: K,
    blockHash: Mt
}, {
    index: ["logIndex"]
});
function Bx(t) {
    return Ox(t)
}
const Rx = Ca({
    to: pe(ee, null),
    from: pe(ee, null),
    contractAddress: pe(ee, null),
    index: K,
    root: pe(M),
    gasUsed: z,
    logsBloom: pe(Bo),
    blockHash: Mt,
    hash: Mt,
    logs: xd(Bx),
    blockNumber: K,
    cumulativeGasUsed: z,
    effectiveGasPrice: pe(z),
    status: pe(K),
    type: pe(K, 0)
}, {
    effectiveGasPrice: ["gasPrice"],
    hash: ["transactionHash"],
    index: ["transactionIndex"]
});
function Lx(t) {
    return Rx(t)
}
function M5(t) {
    t.to && z(t.to) === V1 && (t.to = "0x0000000000000000000000000000000000000000");
    const e = Ca({
        hash: Mt,
        type: n => n === "0x" || n == null ? 0 : K(n),
        accessList: pe(qs, null),
        blockHash: pe(Mt, null),
        blockNumber: pe(K, null),
        transactionIndex: pe(K, null),
        from: ee,
        gasPrice: pe(z),
        maxPriorityFeePerGas: pe(z),
        maxFeePerGas: pe(z),
        gasLimit: z,
        to: pe(ee, null),
        value: z,
        nonce: K,
        data: Bo,
        creates: pe(ee, null),
        chainId: pe(z, null)
    }, {
        data: ["input"],
        gasLimit: ["gas"]
    })(t);
    if (e.to == null && e.creates == null && (e.creates = N8(e)),
    (t.type === 1 || t.type === 2) && t.accessList == null && (e.accessList = []),
    t.signature ? e.signature = sn.from(t.signature) : e.signature = sn.from(t),
    e.chainId == null) {
        const n = e.signature.legacyChainId;
        n != null && (e.chainId = n)
    }
    return e.blockHash && z(e.blockHash) === V1 && (e.blockHash = null),
    e
}
const Ux = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class Yc {
    constructor(e) {
        E(this, "name");
        _(this, {
            name: e
        })
    }
    clone() {
        return new Yc(this.name)
    }
}
class Zc extends Yc {
    constructor(n, r) {
        n == null && (n = 0);
        super(`org.ethers.network.plugins.GasCost#${n || 0}`);
        E(this, "effectiveBlock");
        E(this, "txBase");
        E(this, "txCreate");
        E(this, "txDataZero");
        E(this, "txDataNonzero");
        E(this, "txAccessListStorageKey");
        E(this, "txAccessListAddress");
        const s = {
            effectiveBlock: n
        };
        function i(o, l) {
            let a = (r || {})[o];
            a == null && (a = l),
            v(typeof a == "number", `invalud value for ${o}`, "costs", r),
            s[o] = a
        }
        i("txBase", 21e3),
        i("txCreate", 32e3),
        i("txDataZero", 4),
        i("txDataNonzero", 16),
        i("txAccessListStorageKey", 1900),
        i("txAccessListAddress", 2400),
        _(this, s)
    }
    clone() {
        return new Zc(this.effectiveBlock,this)
    }
}
class Xc extends Yc {
    constructor(n, r) {
        super("org.ethers.plugins.network.Ens");
        E(this, "address");
        E(this, "targetNetwork");
        _(this, {
            address: n || Ux,
            targetNetwork: r ?? 1
        })
    }
    clone() {
        return new Xc(this.address,this.targetNetwork)
    }
}
const zf = new Map;
var co, fo, br;
const ki = class {
    constructor(e, n) {
        b(this, co, void 0);
        b(this, fo, void 0);
        b(this, br, void 0);
        m(this, co, e),
        m(this, fo, z(n)),
        m(this, br, new Map)
    }
    toJSON() {
        return {
            name: this.name,
            chainId: this.chainId
        }
    }
    get name() {
        return c(this, co)
    }
    set name(e) {
        m(this, co, e)
    }
    get chainId() {
        return c(this, fo)
    }
    set chainId(e) {
        m(this, fo, z(e, "chainId"))
    }
    get plugins() {
        return Array.from(c(this, br).values())
    }
    attachPlugin(e) {
        if (c(this, br).get(e.name))
            throw new Error(`cannot replace existing plugin: ${e.name} `);
        return c(this, br).set(e.name, e.clone()),
        this
    }
    getPlugin(e) {
        return c(this, br).get(e) || null
    }
    getPlugins(e) {
        return this.plugins.filter(n => n.name.split("#")[0] === e)
    }
    clone() {
        const e = new ki(this.name,this.chainId);
        return this.plugins.forEach(n => {
            e.attachPlugin(n.clone())
        }
        ),
        e
    }
    computeIntrinsicGas(e) {
        const n = this.getPlugin("org.ethers.plugins.network.GasCost") || new Zc;
        let r = n.txBase;
        if (e.to == null && (r += n.txCreate),
        e.data)
            for (let s = 2; s < e.data.length; s += 2)
                e.data.substring(s, s + 2) === "00" ? r += n.txDataZero : r += n.txDataNonzero;
        if (e.accessList) {
            const s = qs(e.accessList);
            for (const i in s)
                r += n.txAccessListAddress + n.txAccessListStorageKey * s[i].storageKeys.length
        }
        return r
    }
    static from(e) {
        if (Fx(),
        e == null)
            return ki.from("mainnet");
        if (typeof e == "number" && (e = BigInt(e)),
        typeof e == "string" || typeof e == "bigint") {
            const n = zf.get(e);
            if (n)
                return n();
            if (typeof e == "bigint")
                return new ki("unknown",e);
            v(!1, "unknown network", "network", e)
        }
        if (typeof e.clone == "function")
            return e.clone();
        if (typeof e == "object") {
            v(typeof e.name == "string" && typeof e.chainId == "number", "invalid network object name or chainId", "network", e);
            const n = new ki(e.name,e.chainId);
            return (e.ensAddress || e.ensNetwork != null) && n.attachPlugin(new Xc(e.ensAddress,e.ensNetwork)),
            n
        }
        v(!1, "invalid network", "network", e)
    }
    static register(e, n) {
        typeof e == "number" && (e = BigInt(e));
        const r = zf.get(e);
        r && v(!1, `conflicting network for ${JSON.stringify(r.name)}`, "nameOrChainId", e),
        zf.set(e, n)
    }
}
;
let Yn = ki;
co = new WeakMap,
fo = new WeakMap,
br = new WeakMap;
let Q1 = !1;
function Fx() {
    if (Q1)
        return;
    Q1 = !0;
    function t(e, n, r) {
        const s = function() {
            const i = new Yn(e,n);
            return r.ensNetwork != null && i.attachPlugin(new Xc(null,r.ensNetwork)),
            r.priorityFee,
            i.attachPlugin(new Zc),
            i
        };
        Yn.register(e, s),
        Yn.register(n, s),
        r.altNames && r.altNames.forEach(i => {
            Yn.register(i, s)
        }
        )
    }
    t("mainnet", 1, {
        ensNetwork: 1,
        altNames: ["homestead"]
    }),
    t("ropsten", 3, {
        ensNetwork: 3
    }),
    t("rinkeby", 4, {
        ensNetwork: 4
    }),
    t("goerli", 5, {
        ensNetwork: 5
    }),
    t("kovan", 42, {
        ensNetwork: 42
    }),
    t("sepolia", 11155111, {}),
    t("classic", 61, {}),
    t("classicKotti", 6, {}),
    t("xdai", 100, {
        ensNetwork: 1
    }),
    t("optimism", 10, {
        ensNetwork: 1,
        etherscan: {
            url: "https://api-optimistic.etherscan.io/"
        }
    }),
    t("optimism-goerli", 420, {
        etherscan: {
            url: "https://api-goerli-optimistic.etherscan.io/"
        }
    }),
    t("arbitrum", 42161, {
        ensNetwork: 1,
        etherscan: {
            url: "https://api.arbiscan.io/"
        }
    }),
    t("arbitrum-goerli", 421613, {
        etherscan: {
            url: "https://api-goerli.arbiscan.io/"
        }
    }),
    t("matic", 137, {
        ensNetwork: 1,
        etherscan: {
            url: "https://api.polygonscan.com/"
        }
    }),
    t("matic-mumbai", 80001, {
        altNames: ["maticMumbai", "maticmum"],
        etherscan: {
            url: "https://api-testnet.polygonscan.com/"
        }
    }),
    t("bnb", 56, {
        ensNetwork: 1,
        etherscan: {
            url: "http://api.bscscan.com"
        }
    }),
    t("bnbt", 97, {
        etherscan: {
            url: "http://api-testnet.bscscan.com"
        }
    })
}
function sh(t) {
    return JSON.parse(JSON.stringify(t))
}
var jn, Ot, Sr, mn, ho, ku;
class Dx {
    constructor(e) {
        b(this, ho);
        b(this, jn, void 0);
        b(this, Ot, void 0);
        b(this, Sr, void 0);
        b(this, mn, void 0);
        m(this, jn, e),
        m(this, Ot, null),
        m(this, Sr, 4e3),
        m(this, mn, -2)
    }
    get pollingInterval() {
        return c(this, Sr)
    }
    set pollingInterval(e) {
        m(this, Sr, e)
    }
    start() {
        c(this, Ot) || (m(this, Ot, c(this, jn)._setTimeout(T(this, ho, ku).bind(this), c(this, Sr))),
        T(this, ho, ku).call(this))
    }
    stop() {
        c(this, Ot) && (c(this, jn)._clearTimeout(c(this, Ot)),
        m(this, Ot, null))
    }
    pause(e) {
        this.stop(),
        e && m(this, mn, -2)
    }
    resume() {
        this.start()
    }
}
jn = new WeakMap,
Ot = new WeakMap,
Sr = new WeakMap,
mn = new WeakMap,
ho = new WeakSet,
ku = async function() {
    try {
        const e = await c(this, jn).getBlockNumber();
        if (c(this, mn) === -2) {
            m(this, mn, e);
            return
        }
        if (e !== c(this, mn)) {
            for (let n = c(this, mn) + 1; n <= e; n++) {
                if (c(this, Ot) == null)
                    return;
                await c(this, jn).emit("block", n)
            }
            m(this, mn, e)
        }
    } catch {}
    c(this, Ot) != null && m(this, Ot, c(this, jn)._setTimeout(T(this, ho, ku).bind(this), c(this, Sr)))
}
;
var Ss, ks, kr;
class z5 {
    constructor(e) {
        b(this, Ss, void 0);
        b(this, ks, void 0);
        b(this, kr, void 0);
        m(this, Ss, e),
        m(this, kr, !1),
        m(this, ks, n => {
            this._poll(n, c(this, Ss))
        }
        )
    }
    async _poll(e, n) {
        throw new Error("sub-classes must override this")
    }
    start() {
        c(this, kr) || (m(this, kr, !0),
        c(this, ks).call(this, -2),
        c(this, Ss).on("block", c(this, ks)))
    }
    stop() {
        c(this, kr) && (m(this, kr, !1),
        c(this, Ss).off("block", c(this, ks)))
    }
    pause(e) {
        this.stop()
    }
    resume() {
        this.start()
    }
}
Ss = new WeakMap,
ks = new WeakMap,
kr = new WeakMap;
var xc;
class Mx extends z5 {
    constructor(n, r) {
        super(n);
        b(this, xc, void 0);
        m(this, xc, sh(r))
    }
    async _poll(n, r) {
        throw new Error("@TODO")
    }
}
xc = new WeakMap;
var po;
class zx extends z5 {
    constructor(n, r) {
        super(n);
        b(this, po, void 0);
        m(this, po, r)
    }
    async _poll(n, r) {
        const s = await r.getTransactionReceipt(c(this, po));
        s && r.emit(c(this, po), s)
    }
}
po = new WeakMap;
var Gn, go, mo, Cr, Bt, Ec, _5;
class Ed {
    constructor(e, n) {
        b(this, Ec);
        b(this, Gn, void 0);
        b(this, go, void 0);
        b(this, mo, void 0);
        b(this, Cr, void 0);
        b(this, Bt, void 0);
        m(this, Gn, e),
        m(this, go, sh(n)),
        m(this, mo, T(this, Ec, _5).bind(this)),
        m(this, Cr, !1),
        m(this, Bt, -2)
    }
    start() {
        c(this, Cr) || (m(this, Cr, !0),
        c(this, Bt) === -2 && c(this, Gn).getBlockNumber().then(e => {
            m(this, Bt, e)
        }
        ),
        c(this, Gn).on("block", c(this, mo)))
    }
    stop() {
        c(this, Cr) && (m(this, Cr, !1),
        c(this, Gn).off("block", c(this, mo)))
    }
    pause(e) {
        this.stop(),
        e && m(this, Bt, -2)
    }
    resume() {
        this.start()
    }
}
Gn = new WeakMap,
go = new WeakMap,
mo = new WeakMap,
Cr = new WeakMap,
Bt = new WeakMap,
Ec = new WeakSet,
_5 = async function(e) {
    if (c(this, Bt) === -2)
        return;
    const n = sh(c(this, go));
    n.fromBlock = c(this, Bt) + 1,
    n.toBlock = e;
    const r = await c(this, Gn).getLogs(n);
    if (r.length === 0) {
        c(this, Bt) < e - 60 && m(this, Bt, e - 60);
        return
    }
    m(this, Bt, e);
    for (const s of r)
        c(this, Gn).emit(c(this, go), s)
}
;
const _x = BigInt(2)
  , Hx = 10;
function ou(t) {
    return t && typeof t.then == "function"
}
function Cu(t, e) {
    return t + ":" + JSON.stringify(e, (n, r) => {
        if (r == null)
            return "null";
        if (typeof r == "bigint")
            return `bigint:${r.toString()}`;
        if (typeof r == "string")
            return r.toLowerCase();
        if (typeof r == "object" && !Array.isArray(r)) {
            const s = Object.keys(r);
            return s.sort(),
            s.reduce( (i, o) => (i[o] = r[o],
            i), {})
        }
        return r
    }
    )
}
class H5 {
    constructor(e) {
        E(this, "name");
        _(this, {
            name: e
        })
    }
    start() {}
    stop() {}
    pause(e) {}
    resume() {}
}
function jx(t) {
    return JSON.parse(JSON.stringify(t))
}
function ih(t) {
    return t = Array.from(new Set(t).values()),
    t.sort(),
    t
}
async function _f(t, e) {
    if (t == null)
        throw new Error("invalid event");
    if (Array.isArray(t) && (t = {
        topics: t
    }),
    typeof t == "string")
        switch (t) {
        case "block":
        case "pending":
        case "debug":
        case "network":
            return {
                type: t,
                tag: t
            }
        }
    if (me(t, 32)) {
        const n = t.toLowerCase();
        return {
            type: "transaction",
            tag: Cu("tx", {
                hash: n
            }),
            hash: n
        }
    }
    if (t.orphan) {
        const n = t;
        return {
            type: "orphan",
            tag: Cu("orphan", n),
            filter: jx(n)
        }
    }
    if (t.address || t.topics) {
        const n = t
          , r = {
            topics: (n.topics || []).map(s => s == null ? null : Array.isArray(s) ? ih(s.map(i => i.toLowerCase())) : s.toLowerCase())
        };
        if (n.address) {
            const s = []
              , i = []
              , o = l => {
                me(l) ? s.push(l) : i.push((async () => {
                    s.push(await At(l, e))
                }
                )())
            }
            ;
            Array.isArray(n.address) ? n.address.forEach(o) : o(n.address),
            i.length && await Promise.all(i),
            r.address = ih(s.map(l => l.toLowerCase()))
        }
        return {
            filter: r,
            tag: Cu("event", r),
            type: "event"
        }
    }
    v(!1, "unknown ProviderEvent", "event", t)
}
function Hf() {
    return new Date().getTime()
}
var De, Nr, Me, pt, Cs, Pr, Vn, ca, Rt, yo, $e, Ct, fa, oh, ha, lh, Ns, rl, bc, j5, Ps, sl, wo, Nu;
class Gx {
    constructor(e) {
        b(this, $e);
        b(this, fa);
        b(this, ha);
        b(this, Ns);
        b(this, bc);
        b(this, Ps);
        b(this, wo);
        b(this, De, void 0);
        b(this, Nr, void 0);
        b(this, Me, void 0);
        b(this, pt, void 0);
        b(this, Cs, void 0);
        b(this, Pr, void 0);
        b(this, Vn, void 0);
        b(this, ca, void 0);
        b(this, Rt, void 0);
        b(this, yo, void 0);
        if (e === "any")
            m(this, Cs, !0),
            m(this, pt, null);
        else if (e) {
            const n = Yn.from(e);
            m(this, Cs, !1),
            m(this, pt, Promise.resolve(n)),
            setTimeout( () => {
                this.emit("network", n, null)
            }
            , 0)
        } else
            m(this, Cs, !1),
            m(this, pt, null);
        m(this, Vn, -1),
        m(this, Pr, new Map),
        m(this, De, new Map),
        m(this, Nr, new Map),
        m(this, Me, null),
        m(this, ca, 1),
        m(this, Rt, new Map),
        m(this, yo, !1)
    }
    get provider() {
        return this
    }
    get plugins() {
        return Array.from(c(this, Nr).values())
    }
    attachPlugin(e) {
        if (c(this, Nr).get(e.name))
            throw new Error(`cannot replace existing plugin: ${e.name} `);
        return c(this, Nr).set(e.name, e.connect(this)),
        this
    }
    getPlugin(e) {
        return c(this, Nr).get(e) || null
    }
    get disableCcipRead() {
        return c(this, yo)
    }
    set disableCcipRead(e) {
        m(this, yo, !!e)
    }
    async ccipReadFetch(e, n, r) {
        if (this.disableCcipRead || r.length === 0 || e.to == null)
            return null;
        const s = e.to.toLowerCase()
          , i = n.toLowerCase()
          , o = [];
        for (let l = 0; l < r.length; l++) {
            const a = r[l]
              , u = a.replace("{sender}", s).replace("{data}", i)
              , f = new Qs(u);
            a.indexOf("{data}") === -1 && (f.body = {
                data: i,
                sender: s
            }),
            this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request: f,
                index: l,
                urls: r
            });
            let h = "unknown error";
            const d = await f.send();
            try {
                const g = d.bodyJson;
                if (g.data)
                    return this.emit("debug", {
                        action: "receiveCcipReadFetchResult",
                        request: f,
                        result: g
                    }),
                    g.data;
                g.message && (h = g.message),
                this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: f,
                    result: g
                })
            } catch {}
            k(d.statusCode < 400 || d.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", {
                reason: "404_MISSING_RESOURCE",
                transaction: e,
                info: {
                    url: a,
                    errorMessage: h
                }
            }),
            o.push(h)
        }
        k(!1, `error encountered during CCIP fetch: ${o.map(l => JSON.stringify(l)).join(", ")}`, "OFFCHAIN_FAULT", {
            reason: "500_SERVER_ERROR",
            transaction: e,
            info: {
                urls: r,
                errorMessages: o
            }
        })
    }
    _wrapBlock(e, n) {
        return new fx(Ix(e),this)
    }
    _wrapLog(e, n) {
        return new Jc(Px(e),this)
    }
    _wrapTransactionReceipt(e, n) {
        return new N5(Lx(e),this)
    }
    _wrapTransactionResponse(e, n) {
        return new Xl(M5(e),this)
    }
    _detectNetwork() {
        k(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
            operation: "_detectNetwork"
        })
    }
    async _perform(e) {
        k(!1, `unsupported method: ${e.method}`, "UNSUPPORTED_OPERATION", {
            operation: e.method,
            info: e
        })
    }
    async getBlockNumber() {
        const e = K(await T(this, $e, Ct).call(this, {
            method: "getBlockNumber"
        }), "%response");
        return c(this, Vn) >= 0 && m(this, Vn, e),
        e
    }
    _getAddress(e) {
        return At(e, this)
    }
    _getBlockTag(e) {
        if (e == null)
            return "latest";
        switch (e) {
        case "earliest":
            return "0x0";
        case "latest":
        case "pending":
        case "safe":
        case "finalized":
            return e
        }
        if (me(e))
            return me(e, 32) ? e : Ei(e);
        if (typeof e == "bigint" && (e = K(e, "blockTag")),
        typeof e == "number")
            return e >= 0 ? Ei(e) : c(this, Vn) >= 0 ? Ei(c(this, Vn) + e) : this.getBlockNumber().then(n => Ei(n + e));
        v(!1, "invalid blockTag", "blockTag", e)
    }
    _getFilter(e) {
        const n = (e.topics || []).map(a => a == null ? null : Array.isArray(a) ? ih(a.map(u => u.toLowerCase())) : a.toLowerCase())
          , r = "blockHash"in e ? e.blockHash : void 0
          , s = (a, u, f) => {
            let h;
            switch (a.length) {
            case 0:
                break;
            case 1:
                h = a[0];
                break;
            default:
                a.sort(),
                h = a
            }
            if (r && (u != null || f != null))
                throw new Error("invalid filter");
            const d = {};
            return h && (d.address = h),
            n.length && (d.topics = n),
            u && (d.fromBlock = u),
            f && (d.toBlock = f),
            r && (d.blockHash = r),
            d
        }
        ;
        let i = [];
        if (e.address)
            if (Array.isArray(e.address))
                for (const a of e.address)
                    i.push(this._getAddress(a));
            else
                i.push(this._getAddress(e.address));
        let o;
        "fromBlock"in e && (o = this._getBlockTag(e.fromBlock));
        let l;
        return "toBlock"in e && (l = this._getBlockTag(e.toBlock)),
        i.filter(a => typeof a != "string").length || o != null && typeof o != "string" || l != null && typeof l != "string" ? Promise.all([Promise.all(i), o, l]).then(a => s(a[0], a[1], a[2])) : s(i, o, l)
    }
    _getTransactionRequest(e) {
        const n = hc(e)
          , r = [];
        if (["to", "from"].forEach(s => {
            if (n[s] == null)
                return;
            const i = At(n[s]);
            ou(i) ? r.push(async function() {
                n[s] = await i
            }()) : n[s] = i
        }
        ),
        n.blockTag != null) {
            const s = this._getBlockTag(n.blockTag);
            ou(s) ? r.push(async function() {
                n.blockTag = await s
            }()) : n.blockTag = s
        }
        return r.length ? async function() {
            return await Promise.all(r),
            n
        }() : n
    }
    async getNetwork() {
        if (c(this, pt) == null) {
            const s = this._detectNetwork().then(i => (this.emit("network", i, null),
            i), i => {
                throw c(this, pt) === s && m(this, pt, null),
                i
            }
            );
            return m(this, pt, s),
            (await s).clone()
        }
        const e = c(this, pt)
          , [n,r] = await Promise.all([e, this._detectNetwork()]);
        return n.chainId !== r.chainId && (c(this, Cs) ? (this.emit("network", r, n),
        c(this, pt) === e && m(this, pt, Promise.resolve(r))) : k(!1, `network changed: ${n.chainId} => ${r.chainId} `, "NETWORK_ERROR", {
            event: "changed"
        })),
        n.clone()
    }
    async getFeeData() {
        const {block: e, gasPrice: n} = await et({
            block: this.getBlock("latest"),
            gasPrice: (async () => {
                try {
                    const i = await T(this, $e, Ct).call(this, {
                        method: "getGasPrice"
                    });
                    return z(i, "%response")
                } catch {}
                return null
            }
            )()
        });
        let r = null
          , s = null;
        return e && e.baseFeePerGas && (s = BigInt("1000000000"),
        r = e.baseFeePerGas * _x + s),
        new cx(n,r,s)
    }
    async estimateGas(e) {
        let n = this._getTransactionRequest(e);
        return ou(n) && (n = await n),
        z(await T(this, $e, Ct).call(this, {
            method: "estimateGas",
            transaction: n
        }), "%response")
    }
    async call(e) {
        const {tx: n, blockTag: r} = await et({
            tx: this._getTransactionRequest(e),
            blockTag: this._getBlockTag(e.blockTag)
        });
        return await T(this, ha, lh).call(this, T(this, fa, oh).call(this, n, r, e.enableCcipRead ? 0 : -1))
    }
    async getBalance(e, n) {
        return z(await T(this, Ns, rl).call(this, {
            method: "getBalance"
        }, e, n), "%response")
    }
    async getTransactionCount(e, n) {
        return K(await T(this, Ns, rl).call(this, {
            method: "getTransactionCount"
        }, e, n), "%response")
    }
    async getCode(e, n) {
        return M(await T(this, Ns, rl).call(this, {
            method: "getCode"
        }, e, n))
    }
    async getStorage(e, n, r) {
        const s = z(n, "position");
        return M(await T(this, Ns, rl).call(this, {
            method: "getStorage",
            position: s
        }, e, r))
    }
    async broadcastTransaction(e) {
        const {blockNumber: n, hash: r, network: s} = await et({
            blockNumber: this.getBlockNumber(),
            hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: e
            }),
            network: this.getNetwork()
        })
          , i = cc.from(e);
        if (i.hash !== r)
            throw new Error("@TODO: the returned hash did not match");
        return this._wrapTransactionResponse(i, s).replaceableTransaction(n)
    }
    async getBlock(e, n) {
        const {network: r, params: s} = await et({
            network: this.getNetwork(),
            params: T(this, bc, j5).call(this, e, !!n)
        });
        return s == null ? null : this._wrapBlock(s, r)
    }
    async getTransaction(e) {
        const {network: n, params: r} = await et({
            network: this.getNetwork(),
            params: T(this, $e, Ct).call(this, {
                method: "getTransaction",
                hash: e
            })
        });
        return r == null ? null : this._wrapTransactionResponse(r, n)
    }
    async getTransactionReceipt(e) {
        const {network: n, params: r} = await et({
            network: this.getNetwork(),
            params: T(this, $e, Ct).call(this, {
                method: "getTransactionReceipt",
                hash: e
            })
        });
        if (r == null)
            return null;
        if (r.gasPrice == null && r.effectiveGasPrice == null) {
            const s = await T(this, $e, Ct).call(this, {
                method: "getTransaction",
                hash: e
            });
            if (s == null)
                throw new Error("report this; could not find tx or effectiveGasPrice");
            r.effectiveGasPrice = s.gasPrice
        }
        return this._wrapTransactionReceipt(r, n)
    }
    async getTransactionResult(e) {
        const {result: n} = await et({
            network: this.getNetwork(),
            result: T(this, $e, Ct).call(this, {
                method: "getTransactionResult",
                hash: e
            })
        });
        return n == null ? null : M(n)
    }
    async getLogs(e) {
        let n = this._getFilter(e);
        ou(n) && (n = await n);
        const {network: r, params: s} = await et({
            network: this.getNetwork(),
            params: T(this, $e, Ct).call(this, {
                method: "getLogs",
                filter: n
            })
        });
        return s.map(i => this._wrapLog(i, r))
    }
    _getProvider(e) {
        k(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
            operation: "_getProvider()"
        })
    }
    async getResolver(e) {
        return await wl.fromName(this, e)
    }
    async getAvatar(e) {
        const n = await this.getResolver(e);
        return n ? await n.getAvatar() : null
    }
    async resolveName(e) {
        const n = await this.getResolver(e);
        return n ? await n.getAddress() : null
    }
    async lookupAddress(e) {
        e = ee(e);
        const n = $0(e.substring(2).toLowerCase() + ".addr.reverse");
        try {
            const r = await wl.getEnsAddress(this)
              , i = await new Di(r,["function resolver(bytes32) view returns (address)"],this).resolver(n);
            if (i == null || i === Y0)
                return null;
            const l = await new Di(i,["function name(bytes32) view returns (string)"],this).name(n);
            return await this.resolveName(l) !== e ? null : l
        } catch (r) {
            if (kn(r, "BAD_DATA") && r.value === "0x" || kn(r, "CALL_EXCEPTION"))
                return null;
            throw r
        }
        return null
    }
    async waitForTransaction(e, n, r) {
        const s = n ?? 1;
        return s === 0 ? this.getTransactionReceipt(e) : new Promise(async (i, o) => {
            let l = null;
            const a = async u => {
                try {
                    const f = await this.getTransactionReceipt(e);
                    if (f != null && u - f.blockNumber + 1 >= s) {
                        i(f),
                        l && (clearTimeout(l),
                        l = null);
                        return
                    }
                } catch (f) {
                    console.log("EEE", f)
                }
                this.once("block", a)
            }
            ;
            r != null && (l = setTimeout( () => {
                l != null && (l = null,
                this.off("block", a),
                o(tt("timeout", "TIMEOUT", {
                    reason: "timeout"
                })))
            }
            , r)),
            a(await this.getBlockNumber())
        }
        )
    }
    async waitForBlock(e) {
        k(!1, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock"
        })
    }
    _clearTimeout(e) {
        const n = c(this, Rt).get(e);
        n && (n.timer && clearTimeout(n.timer),
        c(this, Rt).delete(e))
    }
    _setTimeout(e, n) {
        n == null && (n = 0);
        const r = Do(this, ca)._++
          , s = () => {
            c(this, Rt).delete(r),
            e()
        }
        ;
        if (this.paused)
            c(this, Rt).set(r, {
                timer: null,
                func: s,
                time: n
            });
        else {
            const i = setTimeout(s, n);
            c(this, Rt).set(r, {
                timer: i,
                func: s,
                time: Hf()
            })
        }
        return r
    }
    _forEachSubscriber(e) {
        for (const n of c(this, De).values())
            e(n.subscriber)
    }
    _getSubscriber(e) {
        switch (e.type) {
        case "debug":
        case "network":
            return new H5(e.type);
        case "block":
            return new Dx(this);
        case "event":
            return new Ed(this,e.filter);
        case "transaction":
            return new zx(this,e.hash);
        case "orphan":
            return new Mx(this,e.filter)
        }
        throw new Error(`unsupported event: ${e.type}`)
    }
    _recoverSubscriber(e, n) {
        for (const r of c(this, De).values())
            if (r.subscriber === e) {
                r.started && r.subscriber.stop(),
                r.subscriber = n,
                r.started && n.start(),
                c(this, Me) != null && n.pause(c(this, Me));
                break
            }
    }
    async on(e, n) {
        const r = await T(this, wo, Nu).call(this, e);
        return r.listeners.push({
            listener: n,
            once: !1
        }),
        r.started || (r.subscriber.start(),
        r.started = !0,
        c(this, Me) != null && r.subscriber.pause(c(this, Me))),
        this
    }
    async once(e, n) {
        const r = await T(this, wo, Nu).call(this, e);
        return r.listeners.push({
            listener: n,
            once: !0
        }),
        r.started || (r.subscriber.start(),
        r.started = !0,
        c(this, Me) != null && r.subscriber.pause(c(this, Me))),
        this
    }
    async emit(e, ...n) {
        const r = await T(this, Ps, sl).call(this, e, n);
        if (!r || r.listeners.length === 0)
            return !1;
        const s = r.listeners.length;
        return r.listeners = r.listeners.filter( ({listener: i, once: o}) => {
            const l = new gy(this,o ? null : i,e);
            try {
                i.call(this, ...n, l)
            } catch {}
            return !o
        }
        ),
        r.listeners.length === 0 && (r.started && r.subscriber.stop(),
        c(this, De).delete(r.tag)),
        s > 0
    }
    async listenerCount(e) {
        if (e) {
            const r = await T(this, Ps, sl).call(this, e);
            return r ? r.listeners.length : 0
        }
        let n = 0;
        for (const {listeners: r} of c(this, De).values())
            n += r.length;
        return n
    }
    async listeners(e) {
        if (e) {
            const r = await T(this, Ps, sl).call(this, e);
            return r ? r.listeners.map( ({listener: s}) => s) : []
        }
        let n = [];
        for (const {listeners: r} of c(this, De).values())
            n = n.concat(r.map( ({listener: s}) => s));
        return n
    }
    async off(e, n) {
        const r = await T(this, Ps, sl).call(this, e);
        if (!r)
            return this;
        if (n) {
            const s = r.listeners.map( ({listener: i}) => i).indexOf(n);
            s >= 0 && r.listeners.splice(s, 1)
        }
        return (!n || r.listeners.length === 0) && (r.started && r.subscriber.stop(),
        c(this, De).delete(r.tag)),
        this
    }
    async removeAllListeners(e) {
        if (e) {
            const {tag: n, started: r, subscriber: s} = await T(this, wo, Nu).call(this, e);
            r && s.stop(),
            c(this, De).delete(n)
        } else
            for (const [n,{started: r, subscriber: s}] of c(this, De))
                r && s.stop(),
                c(this, De).delete(n);
        return this
    }
    async addListener(e, n) {
        return await this.on(e, n)
    }
    async removeListener(e, n) {
        return this.off(e, n)
    }
    destroy() {
        this.removeAllListeners();
        for (const e of c(this, Rt).keys())
            this._clearTimeout(e)
    }
    get paused() {
        return c(this, Me) != null
    }
    set paused(e) {
        !!e !== this.paused && (this.paused ? this.resume() : this.pause(!1))
    }
    pause(e) {
        if (m(this, Vn, -1),
        c(this, Me) != null) {
            if (c(this, Me) == !!e)
                return;
            k(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                operation: "pause"
            })
        }
        this._forEachSubscriber(n => n.pause(e)),
        m(this, Me, !!e);
        for (const n of c(this, Rt).values())
            n.timer && clearTimeout(n.timer),
            n.time = Hf() - n.time
    }
    resume() {
        if (c(this, Me) != null) {
            this._forEachSubscriber(e => e.resume()),
            m(this, Me, null);
            for (const e of c(this, Rt).values()) {
                let n = e.time;
                n < 0 && (n = 0),
                e.time = Hf(),
                setTimeout(e.func, n)
            }
        }
    }
}
De = new WeakMap,
Nr = new WeakMap,
Me = new WeakMap,
pt = new WeakMap,
Cs = new WeakMap,
Pr = new WeakMap,
Vn = new WeakMap,
ca = new WeakMap,
Rt = new WeakMap,
yo = new WeakMap,
$e = new WeakSet,
Ct = async function(e) {
    const n = Cu(e.method, e);
    let r = c(this, Pr).get(n);
    return r || (r = this._perform(e),
    c(this, Pr).set(n, r),
    setTimeout( () => {
        c(this, Pr).get(n) === r && c(this, Pr).delete(n)
    }
    , 250)),
    await r
}
,
fa = new WeakSet,
oh = async function(e, n, r) {
    k(r < Hx, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
        reason: "TOO_MANY_REDIRECTS",
        transaction: Object.assign({}, e, {
            blockTag: n,
            enableCcipRead: !0
        })
    });
    const s = hc(e);
    try {
        return M(await this._perform({
            method: "call",
            transaction: s,
            blockTag: n
        }))
    } catch (i) {
        if (!this.disableCcipRead && ad(i) && i.data && r >= 0 && n === "latest" && s.to != null && de(i.data, 0, 4) === "0x556f1830") {
            const o = i.data
              , l = await At(s.to, this);
            let a;
            try {
                a = Jx(de(i.data, 4))
            } catch (h) {
                k(!1, h.message, "OFFCHAIN_FAULT", {
                    reason: "BAD_DATA",
                    transaction: s,
                    info: {
                        data: o
                    }
                })
            }
            k(a.sender.toLowerCase() === l.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                action: "call",
                data: o,
                reason: "OffchainLookup",
                transaction: s,
                invocation: null,
                revert: {
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: a.errorArgs
                }
            });
            const u = await this.ccipReadFetch(s, a.calldata, a.urls);
            k(u != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                reason: "FETCH_FAILED",
                transaction: s,
                info: {
                    data: i.data,
                    errorArgs: a.errorArgs
                }
            });
            const f = {
                to: l,
                data: xe([a.selector, Wx([u, a.extraData])])
            };
            this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: f
            });
            try {
                const h = await T(this, fa, oh).call(this, f, n, r + 1);
                return this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, f),
                    result: h
                }),
                h
            } catch (h) {
                throw this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, f),
                    error: h
                }),
                h
            }
        }
        throw i
    }
}
,
ha = new WeakSet,
lh = async function(e) {
    const {value: n} = await et({
        network: this.getNetwork(),
        value: e
    });
    return n
}
,
Ns = new WeakSet,
rl = async function(e, n, r) {
    let s = this._getAddress(n)
      , i = this._getBlockTag(r);
    return (typeof s != "string" || typeof i != "string") && ([s,i] = await Promise.all([s, i])),
    await T(this, ha, lh).call(this, T(this, $e, Ct).call(this, Object.assign(e, {
        address: s,
        blockTag: i
    })))
}
,
bc = new WeakSet,
j5 = async function(e, n) {
    if (me(e, 32))
        return await T(this, $e, Ct).call(this, {
            method: "getBlock",
            blockHash: e,
            includeTransactions: n
        });
    let r = this._getBlockTag(e);
    return typeof r != "string" && (r = await r),
    await T(this, $e, Ct).call(this, {
        method: "getBlock",
        blockTag: r,
        includeTransactions: n
    })
}
,
Ps = new WeakSet,
sl = async function(e, n) {
    let r = await _f(e, this);
    return r.type === "event" && n && n.length > 0 && n[0].removed === !0 && (r = await _f({
        orphan: "drop-log",
        log: n[0]
    }, this)),
    c(this, De).get(r.tag) || null
}
,
wo = new WeakSet,
Nu = async function(e) {
    const n = await _f(e, this)
      , r = n.tag;
    let s = c(this, De).get(r);
    return s || (s = {
        subscriber: this._getSubscriber(n),
        tag: r,
        addressableMap: new WeakMap,
        nameMap: new Map,
        started: !1,
        listeners: []
    },
    c(this, De).set(r, s)),
    s
}
;
function Vx(t, e) {
    try {
        const n = ah(t, e);
        if (n)
            return ud(n)
    } catch {}
    return null
}
function ah(t, e) {
    if (t === "0x")
        return null;
    try {
        const n = K(de(t, e, e + 32))
          , r = K(de(t, n, n + 32));
        return de(t, n + 32, n + 32 + r)
    } catch {}
    return null
}
function K1(t) {
    const e = wt(t);
    if (e.length > 32)
        throw new Error("internal; should not happen");
    const n = new Uint8Array(32);
    return n.set(e, 32 - e.length),
    n
}
function Qx(t) {
    if (t.length % 32 === 0)
        return t;
    const e = new Uint8Array(Math.ceil(t.length / 32) * 32);
    return e.set(t),
    e
}
const Kx = new Uint8Array([]);
function Wx(t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++)
        e.push(Kx),
        n += 32;
    for (let r = 0; r < t.length; r++) {
        const s = J(t[r]);
        e[r] = K1(n),
        e.push(K1(s.length)),
        e.push(Qx(s)),
        n += 32 + Math.ceil(s.length / 32) * 32
    }
    return xe(e)
}
const W1 = "0x0000000000000000000000000000000000000000000000000000000000000000";
function Jx(t) {
    const e = {
        sender: "",
        urls: [],
        calldata: "",
        selector: "",
        extraData: "",
        errorArgs: []
    };
    k(Bi(t) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
        reason: "insufficient OffchainLookup data"
    });
    const n = de(t, 0, 32);
    k(de(n, 0, 12) === de(W1, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup sender"
    }),
    e.sender = de(n, 12);
    try {
        const r = []
          , s = K(de(t, 32, 64))
          , i = K(de(t, s, s + 32))
          , o = de(t, s + 32);
        for (let l = 0; l < i; l++) {
            const a = Vx(o, l * 32);
            if (a == null)
                throw new Error("abort");
            r.push(a)
        }
        e.urls = r
    } catch {
        k(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup urls"
        })
    }
    try {
        const r = ah(t, 64);
        if (r == null)
            throw new Error("abort");
        e.calldata = r
    } catch {
        k(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup calldata"
        })
    }
    k(de(t, 100, 128) === de(W1, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup callbaackSelector"
    }),
    e.selector = de(t, 96, 100);
    try {
        const r = ah(t, 128);
        if (r == null)
            throw new Error("abort");
        e.extraData = r
    } catch {
        k(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup extraData"
        })
    }
    return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map(r => e[r]),
    e
}
function ri(t, e) {
    if (t.provider)
        return t.provider;
    k(!1, "missing provider", "UNSUPPORTED_OPERATION", {
        operation: e
    })
}
async function J1(t, e) {
    let n = hc(e);
    if (n.to != null && (n.to = At(n.to, t)),
    n.from != null) {
        const r = n.from;
        n.from = Promise.all([t.getAddress(), At(r, t)]).then( ([s,i]) => (v(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i),
        s))
    } else
        n.from = t.getAddress();
    return await et(n)
}
class Yx {
    constructor(e) {
        E(this, "provider");
        _(this, {
            provider: e || null
        })
    }
    async getNonce(e) {
        return ri(this, "getTransactionCount").getTransactionCount(await this.getAddress(), e)
    }
    async populateCall(e) {
        return await J1(this, e)
    }
    async populateTransaction(e) {
        const n = ri(this, "populateTransaction")
          , r = await J1(this, e);
        r.nonce == null && (r.nonce = await this.getNonce("pending")),
        r.gasLimit == null && (r.gasLimit = await this.estimateGas(r));
        const s = await this.provider.getNetwork();
        if (r.chainId != null) {
            const o = z(r.chainId);
            v(o === s.chainId, "transaction chainId mismatch", "tx.chainId", e.chainId)
        } else
            r.chainId = s.chainId;
        const i = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
        if (r.gasPrice != null && (r.type === 2 || i) ? v(!1, "eip-1559 transaction do not support gasPrice", "tx", e) : (r.type === 0 || r.type === 1) && i && v(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", e),
        (r.type === 2 || r.type == null) && r.maxFeePerGas != null && r.maxPriorityFeePerGas != null)
            r.type = 2;
        else if (r.type === 0 || r.type === 1) {
            const o = await n.getFeeData();
            k(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                operation: "getGasPrice"
            }),
            r.gasPrice == null && (r.gasPrice = o.gasPrice)
        } else {
            const o = await n.getFeeData();
            if (r.type == null)
                if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
                    if (r.type = 2,
                    r.gasPrice != null) {
                        const l = r.gasPrice;
                        delete r.gasPrice,
                        r.maxFeePerGas = l,
                        r.maxPriorityFeePerGas = l
                    } else
                        r.maxFeePerGas == null && (r.maxFeePerGas = o.maxFeePerGas),
                        r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
                else
                    o.gasPrice != null ? (k(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                        operation: "populateTransaction"
                    }),
                    r.gasPrice == null && (r.gasPrice = o.gasPrice),
                    r.type = 0) : k(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                        operation: "signer.getFeeData"
                    });
            else
                r.type === 2 && (r.maxFeePerGas == null && (r.maxFeePerGas = o.maxFeePerGas),
                r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = o.maxPriorityFeePerGas))
        }
        return await et(r)
    }
    async estimateGas(e) {
        return ri(this, "estimateGas").estimateGas(await this.populateCall(e))
    }
    async call(e) {
        return ri(this, "call").call(await this.populateCall(e))
    }
    async resolveName(e) {
        return await ri(this, "resolveName").resolveName(e)
    }
    async sendTransaction(e) {
        const n = ri(this, "sendTransaction")
          , r = await this.populateTransaction(e);
        delete r.from;
        const s = cc.from(r);
        return await n.broadcastTransaction(await this.signTransaction(s))
    }
}
function Zx(t) {
    return JSON.parse(JSON.stringify(t))
}
var qe, yn, Ts, Tr, Is, Ao, da, uh, pa, ch;
class G5 {
    constructor(e) {
        b(this, da);
        b(this, pa);
        b(this, qe, void 0);
        b(this, yn, void 0);
        b(this, Ts, void 0);
        b(this, Tr, void 0);
        b(this, Is, void 0);
        b(this, Ao, void 0);
        m(this, qe, e),
        m(this, yn, null),
        m(this, Ts, T(this, da, uh).bind(this)),
        m(this, Tr, !1),
        m(this, Is, null),
        m(this, Ao, !1)
    }
    _subscribe(e) {
        throw new Error("subclasses must override this")
    }
    _emitResults(e, n) {
        throw new Error("subclasses must override this")
    }
    _recover(e) {
        throw new Error("subclasses must override this")
    }
    start() {
        c(this, Tr) || (m(this, Tr, !0),
        T(this, da, uh).call(this, -2))
    }
    stop() {
        c(this, Tr) && (m(this, Tr, !1),
        m(this, Ao, !0),
        T(this, pa, ch).call(this),
        c(this, qe).off("block", c(this, Ts)))
    }
    pause(e) {
        e && T(this, pa, ch).call(this),
        c(this, qe).off("block", c(this, Ts))
    }
    resume() {
        this.start()
    }
}
qe = new WeakMap,
yn = new WeakMap,
Ts = new WeakMap,
Tr = new WeakMap,
Is = new WeakMap,
Ao = new WeakMap,
da = new WeakSet,
uh = async function(e) {
    try {
        c(this, yn) == null && m(this, yn, this._subscribe(c(this, qe)));
        let n = null;
        try {
            n = await c(this, yn)
        } catch (i) {
            if (!kn(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
                throw i
        }
        if (n == null) {
            m(this, yn, null),
            c(this, qe)._recoverSubscriber(this, this._recover(c(this, qe)));
            return
        }
        const r = await c(this, qe).getNetwork();
        if (c(this, Is) || m(this, Is, r),
        c(this, Is).chainId !== r.chainId)
            throw new Error("chaid changed");
        if (c(this, Ao))
            return;
        const s = await c(this, qe).send("eth_getFilterChanges", [n]);
        await this._emitResults(c(this, qe), s)
    } catch (n) {
        console.log("@TODO", n)
    }
    c(this, qe).once("block", c(this, Ts))
}
,
pa = new WeakSet,
ch = function() {
    const e = c(this, yn);
    e && (m(this, yn, null),
    e.then(n => {
        c(this, qe).send("eth_uninstallFilter", [n])
    }
    ))
}
;
var Os;
class Xx extends G5 {
    constructor(n, r) {
        super(n);
        b(this, Os, void 0);
        m(this, Os, Zx(r))
    }
    _recover(n) {
        return new Ed(n,c(this, Os))
    }
    async _subscribe(n) {
        return await n.send("eth_newFilter", [c(this, Os)])
    }
    async _emitResults(n, r) {
        for (const s of r)
            n.emit(c(this, Os), n._wrapLog(s, n._network))
    }
}
Os = new WeakMap;
class $x extends G5 {
    async _subscribe(e) {
        return await e.send("eth_newPendingTransactionFilter", [])
    }
    async _emitResults(e, n) {
        for (const r of n)
            e.emit("pending", r)
    }
}
const qx = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Pu(t) {
    if (t == null || qx.indexOf(typeof t) >= 0 || typeof t.getAddress == "function")
        return t;
    if (Array.isArray(t))
        return t.map(Pu);
    if (typeof t == "object")
        return Object.keys(t).reduce( (e, n) => (e[n] = t[n],
        e), {});
    throw new Error(`should not happen: ${t} (${typeof t})`)
}
function eE(t) {
    return new Promise(e => {
        setTimeout(e, t)
    }
    )
}
function si(t) {
    return t && t.toLowerCase()
}
function Y1(t) {
    return t && typeof t.pollingInterval == "number"
}
const tE = {
    polling: !1,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100
};
class jf extends Yx {
    constructor(n, r) {
        super(n);
        E(this, "address");
        r = ee(r),
        _(this, {
            address: r
        })
    }
    connect(n) {
        k(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
            operation: "signer.connect"
        })
    }
    async getAddress() {
        return this.address
    }
    async populateTransaction(n) {
        return await this.populateCall(n)
    }
    async sendUncheckedTransaction(n) {
        const r = Pu(n)
          , s = [];
        if (r.from) {
            const o = r.from;
            s.push((async () => {
                const l = await At(o, this.provider);
                v(l != null && l.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", n),
                r.from = l
            }
            )())
        } else
            r.from = this.address;
        if (r.gasLimit == null && s.push((async () => {
            r.gasLimit = await this.provider.estimateGas({
                ...r,
                from: this.address
            })
        }
        )()),
        r.to != null) {
            const o = r.to;
            s.push((async () => {
                r.to = await At(o, this.provider)
            }
            )())
        }
        s.length && await Promise.all(s);
        const i = this.provider.getRpcTransaction(r);
        return this.provider.send("eth_sendTransaction", [i])
    }
    async sendTransaction(n) {
        const r = await this.provider.getBlockNumber()
          , s = await this.sendUncheckedTransaction(n);
        return await new Promise( (i, o) => {
            const l = [1e3, 100]
              , a = async () => {
                const u = await this.provider.getTransaction(s);
                if (u != null) {
                    i(u.replaceableTransaction(r));
                    return
                }
                this.provider._setTimeout( () => {
                    a()
                }
                , l.pop() || 4e3)
            }
            ;
            a()
        }
        )
    }
    async signTransaction(n) {
        const r = Pu(n);
        if (r.from) {
            const i = await At(r.from, this.provider);
            v(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", n),
            r.from = i
        } else
            r.from = this.address;
        const s = this.provider.getRpcTransaction(r);
        return await this.provider.send("eth_signTransaction", [s])
    }
    async signMessage(n) {
        const r = typeof n == "string" ? Xn(n) : n;
        return await this.provider.send("personal_sign", [M(r), this.address.toLowerCase()])
    }
    async signTypedData(n, r, s) {
        const i = Pu(s)
          , o = await fc.resolveNames(n, r, i, async l => {
            const a = await At(l);
            return v(a != null, "TypedData does not support null address", "value", l),
            a
        }
        );
        return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(fc.getPayload(o.domain, r, o.value))])
    }
    async unlock(n) {
        return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), n, null])
    }
    async _legacySignMessage(n) {
        const r = typeof n == "string" ? Xn(n) : n;
        return await this.provider.send("eth_sign", [this.address.toLowerCase(), M(r)])
    }
}
var Bs, vo, Rs, Ls, Zt, Qn, ga, fh;
class nE extends Gx {
    constructor(n, r) {
        super(n);
        b(this, ga);
        b(this, Bs, void 0);
        b(this, vo, void 0);
        b(this, Rs, void 0);
        b(this, Ls, void 0);
        b(this, Zt, void 0);
        b(this, Qn, void 0);
        m(this, vo, 1),
        m(this, Bs, Object.assign({}, tE, r || {})),
        m(this, Rs, []),
        m(this, Ls, null),
        m(this, Qn, null);
        {
            let i = null;
            const o = new Promise(l => {
                i = l
            }
            );
            m(this, Zt, {
                promise: o,
                resolve: i
            })
        }
        const s = this._getOption("staticNetwork");
        s && (v(s === n, "staticNetwork MUST match network object", "options", r),
        m(this, Qn, s))
    }
    _getOption(n) {
        return c(this, Bs)[n]
    }
    get _network() {
        return k(c(this, Qn), "network is not available yet", "NETWORK_ERROR"),
        c(this, Qn)
    }
    async _perform(n) {
        if (n.method === "call" || n.method === "estimateGas") {
            let s = n.transaction;
            if (s && s.type != null && z(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
                const i = await this.getFeeData();
                i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (n = Object.assign({}, n, {
                    transaction: Object.assign({}, s, {
                        type: void 0
                    })
                }))
            }
        }
        const r = this.getRpcRequest(n);
        return r != null ? await this.send(r.method, r.args) : super._perform(n)
    }
    async _detectNetwork() {
        const n = this._getOption("staticNetwork");
        if (n)
            return n;
        if (this.ready)
            return Yn.from(z(await this.send("eth_chainId", [])));
        const r = {
            id: Do(this, vo)._++,
            method: "eth_chainId",
            params: [],
            jsonrpc: "2.0"
        };
        this.emit("debug", {
            action: "sendRpcPayload",
            payload: r
        });
        let s;
        try {
            s = (await this._send(r))[0]
        } catch (i) {
            throw this.emit("debug", {
                action: "receiveRpcError",
                error: i
            }),
            i
        }
        if (this.emit("debug", {
            action: "receiveRpcResult",
            result: s
        }),
        "result"in s)
            return Yn.from(z(s.result));
        throw this.getRpcError(r, s)
    }
    _start() {
        c(this, Zt) == null || c(this, Zt).resolve == null || (c(this, Zt).resolve(),
        m(this, Zt, null),
        (async () => {
            for (; c(this, Qn) == null; )
                try {
                    m(this, Qn, await this._detectNetwork())
                } catch {
                    console.log("JsonRpcProvider failed to startup; retry in 1s"),
                    await eE(1e3)
                }
            T(this, ga, fh).call(this)
        }
        )())
    }
    async _waitUntilReady() {
        if (c(this, Zt) != null)
            return await c(this, Zt).promise
    }
    _getSubscriber(n) {
        return n.type === "pending" ? new $x(this) : n.type === "event" ? this._getOption("polling") ? new Ed(this,n.filter) : new Xx(this,n.filter) : n.type === "orphan" && n.filter.orphan === "drop-log" ? new H5("orphan") : super._getSubscriber(n)
    }
    get ready() {
        return c(this, Zt) == null
    }
    getRpcTransaction(n) {
        const r = {};
        return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(s => {
            if (n[s] == null)
                return;
            let i = s;
            s === "gasLimit" && (i = "gas"),
            r[i] = Ei(z(n[s], `tx.${s}`))
        }
        ),
        ["from", "to", "data"].forEach(s => {
            n[s] != null && (r[s] = M(n[s]))
        }
        ),
        n.accessList && (r.accessList = qs(n.accessList)),
        r
    }
    getRpcRequest(n) {
        switch (n.method) {
        case "chainId":
            return {
                method: "eth_chainId",
                args: []
            };
        case "getBlockNumber":
            return {
                method: "eth_blockNumber",
                args: []
            };
        case "getGasPrice":
            return {
                method: "eth_gasPrice",
                args: []
            };
        case "getBalance":
            return {
                method: "eth_getBalance",
                args: [si(n.address), n.blockTag]
            };
        case "getTransactionCount":
            return {
                method: "eth_getTransactionCount",
                args: [si(n.address), n.blockTag]
            };
        case "getCode":
            return {
                method: "eth_getCode",
                args: [si(n.address), n.blockTag]
            };
        case "getStorage":
            return {
                method: "eth_getStorageAt",
                args: [si(n.address), "0x" + n.position.toString(16), n.blockTag]
            };
        case "broadcastTransaction":
            return {
                method: "eth_sendRawTransaction",
                args: [n.signedTransaction]
            };
        case "getBlock":
            if ("blockTag"in n)
                return {
                    method: "eth_getBlockByNumber",
                    args: [n.blockTag, !!n.includeTransactions]
                };
            if ("blockHash"in n)
                return {
                    method: "eth_getBlockByHash",
                    args: [n.blockHash, !!n.includeTransactions]
                };
            break;
        case "getTransaction":
            return {
                method: "eth_getTransactionByHash",
                args: [n.hash]
            };
        case "getTransactionReceipt":
            return {
                method: "eth_getTransactionReceipt",
                args: [n.hash]
            };
        case "call":
            return {
                method: "eth_call",
                args: [this.getRpcTransaction(n.transaction), n.blockTag]
            };
        case "estimateGas":
            return {
                method: "eth_estimateGas",
                args: [this.getRpcTransaction(n.transaction)]
            };
        case "getLogs":
            return n.filter && n.filter.address != null && (Array.isArray(n.filter.address) ? n.filter.address = n.filter.address.map(si) : n.filter.address = si(n.filter.address)),
            {
                method: "eth_getLogs",
                args: [n.filter]
            }
        }
        return null
    }
    getRpcError(n, r) {
        const {method: s} = n
          , {error: i} = r;
        if (s === "eth_estimateGas" && i.message) {
            const l = i.message;
            if (!l.match(/revert/i) && l.match(/insufficient funds/i))
                return tt("insufficient funds", "INSUFFICIENT_FUNDS", {
                    transaction: n.params[0],
                    info: {
                        payload: n,
                        error: i
                    }
                })
        }
        if (s === "eth_call" || s === "eth_estimateGas") {
            const l = hh(i)
              , a = Zl.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", n.params[0], l ? l.data : null);
            return a.info = {
                error: i,
                payload: n
            },
            a
        }
        const o = JSON.stringify(sE(i));
        if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
            return tt("user rejected action", "ACTION_REJECTED", {
                action: {
                    eth_sign: "signMessage",
                    personal_sign: "signMessage",
                    eth_signTypedData_v4: "signTypedData",
                    eth_signTransaction: "signTransaction",
                    eth_sendTransaction: "sendTransaction",
                    eth_requestAccounts: "requestAccess",
                    wallet_requestAccounts: "requestAccess"
                }[s] || "unknown",
                reason: "rejected",
                info: {
                    payload: n,
                    error: i
                }
            });
        if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
            const l = n.params[0];
            if (o.match(/insufficient funds|base fee exceeds gas limit/i))
                return tt("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                    transaction: l,
                    info: {
                        error: i
                    }
                });
            if (o.match(/nonce/i) && o.match(/too low/i))
                return tt("nonce has already been used", "NONCE_EXPIRED", {
                    transaction: l,
                    info: {
                        error: i
                    }
                });
            if (o.match(/replacement transaction/i) && o.match(/underpriced/i))
                return tt("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                    transaction: l,
                    info: {
                        error: i
                    }
                });
            if (o.match(/only replay-protected/i))
                return tt("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                    operation: s,
                    info: {
                        transaction: l,
                        info: {
                            error: i
                        }
                    }
                })
        }
        return o.match(/the method .* does not exist/i) ? tt("unsupported operation", "UNSUPPORTED_OPERATION", {
            operation: n.method,
            info: {
                error: i
            }
        }) : tt("could not coalesce error", "UNKNOWN_ERROR", {
            error: i
        })
    }
    send(n, r) {
        const s = Do(this, vo)._++
          , i = new Promise( (o, l) => {
            c(this, Rs).push({
                resolve: o,
                reject: l,
                payload: {
                    method: n,
                    params: r,
                    id: s,
                    jsonrpc: "2.0"
                }
            })
        }
        );
        return T(this, ga, fh).call(this),
        i
    }
    async getSigner(n) {
        n == null && (n = 0);
        const r = this.send("eth_accounts", []);
        if (typeof n == "number") {
            const i = await r;
            if (n >= i.length)
                throw new Error("no such account");
            return new jf(this,i[n])
        }
        const {accounts: s} = await et({
            network: this.getNetwork(),
            accounts: r
        });
        n = ee(n);
        for (const i of s)
            if (ee(i) === n)
                return new jf(this,n);
        throw new Error("invalid account")
    }
    async listAccounts() {
        return (await this.send("eth_accounts", [])).map(r => new jf(this,r))
    }
}
Bs = new WeakMap,
vo = new WeakMap,
Rs = new WeakMap,
Ls = new WeakMap,
Zt = new WeakMap,
Qn = new WeakMap,
ga = new WeakSet,
fh = function() {
    if (c(this, Ls))
        return;
    const n = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
    m(this, Ls, setTimeout( () => {
        m(this, Ls, null);
        const r = c(this, Rs);
        for (m(this, Rs, []); r.length; ) {
            const s = [r.shift()];
            for (; r.length && s.length !== c(this, Bs).batchMaxCount; )
                if (s.push(r.shift()),
                JSON.stringify(s.map(o => o.payload)).length > c(this, Bs).batchMaxSize) {
                    r.unshift(s.pop());
                    break
                }
            (async () => {
                const i = s.length === 1 ? s[0].payload : s.map(o => o.payload);
                this.emit("debug", {
                    action: "sendRpcPayload",
                    payload: i
                });
                try {
                    const o = await this._send(i);
                    this.emit("debug", {
                        action: "receiveRpcResult",
                        result: o
                    });
                    for (const {resolve: l, reject: a, payload: u} of s) {
                        const f = o.filter(h => h.id === u.id)[0];
                        if (f == null)
                            return a(tt("no response from server", "BAD_DATA", {
                                value: o,
                                info: {
                                    payload: u
                                }
                            }));
                        if ("error"in f)
                            return a(this.getRpcError(u, f));
                        l(f.result)
                    }
                } catch (o) {
                    this.emit("debug", {
                        action: "receiveRpcError",
                        error: o
                    });
                    for (const {reject: l} of s)
                        l(o)
                }
            }
            )()
        }
    }
    , n))
}
;
var Ir;
class rE extends nE {
    constructor(n, r) {
        super(n, r);
        b(this, Ir, void 0);
        m(this, Ir, 4e3)
    }
    _getSubscriber(n) {
        const r = super._getSubscriber(n);
        return Y1(r) && (r.pollingInterval = c(this, Ir)),
        r
    }
    get pollingInterval() {
        return c(this, Ir)
    }
    set pollingInterval(n) {
        if (!Number.isInteger(n) || n < 0)
            throw new Error("invalid interval");
        m(this, Ir, n),
        this._forEachSubscriber(r => {
            Y1(r) && (r.pollingInterval = c(this, Ir))
        }
        )
    }
}
Ir = new WeakMap;
function hh(t) {
    if (t == null)
        return null;
    if (typeof t.message == "string" && t.message.match("reverted") && me(t.data))
        return {
            message: t.message,
            data: t.data
        };
    if (typeof t == "object") {
        for (const e in t) {
            const n = hh(t[e]);
            if (n)
                return n
        }
        return null
    }
    if (typeof t == "string")
        try {
            return hh(JSON.parse(t))
        } catch {}
    return null
}
function dh(t, e) {
    if (t != null) {
        if (typeof t.message == "string" && e.push(t.message),
        typeof t == "object")
            for (const n in t)
                dh(t[n], e);
        if (typeof t == "string")
            try {
                return dh(JSON.parse(t), e)
            } catch {}
    }
}
function sE(t) {
    const e = [];
    return dh(t, e),
    e
}
var xo;
class iE extends rE {
    constructor(n, r) {
        super(r, {
            batchMaxCount: 1
        });
        b(this, xo, void 0);
        m(this, xo, async (s, i) => {
            const o = {
                method: s,
                params: i
            };
            this.emit("debug", {
                action: "sendEip1193Request",
                payload: o
            });
            try {
                const l = await n.request(o);
                return this.emit("debug", {
                    action: "receiveEip1193Result",
                    result: l
                }),
                l
            } catch (l) {
                const a = new Error(l.message);
                throw a.code = l.code,
                a.data = l.data,
                a.payload = o,
                this.emit("debug", {
                    action: "receiveEip1193Error",
                    error: a
                }),
                a
            }
        }
        )
    }
    async send(n, r) {
        return await this._start(),
        await super.send(n, r)
    }
    async _send(n) {
        v(!Array.isArray(n), "EIP-1193 does not support batch request", "payload", n);
        try {
            const r = await c(this, xo).call(this, n.method, n.params || []);
            return [{
                id: n.id,
                result: r
            }]
        } catch (r) {
            return [{
                id: n.id,
                error: {
                    code: r.code,
                    data: r.data,
                    message: r.message
                }
            }]
        }
    }
    getRpcError(n, r) {
        switch (r = JSON.parse(JSON.stringify(r)),
        r.error.code || -1) {
        case 4001:
            r.error.message = `ethers-user-denied: ${r.error.message}`;
            break;
        case 4200:
            r.error.message = `ethers-unsupported: ${r.error.message}`;
            break
        }
        return super.getRpcError(n, r)
    }
    async hasSigner(n) {
        n == null && (n = 0);
        const r = await this.send("eth_accounts", []);
        return typeof n == "number" ? r.length > n : (n = n.toLowerCase(),
        r.filter(s => s.toLowerCase() === n).length !== 0)
    }
    async getSigner(n) {
        if (n == null && (n = 0),
        !await this.hasSigner(n))
            try {
                await c(this, xo).call(this, "eth_requestAccounts", [])
            } catch (r) {
                const s = r.payload;
                throw this.getRpcError(s, {
                    id: s.id,
                    error: r
                })
            }
        return await super.getSigner(n)
    }
}
xo = new WeakMap;
const oE = "hh-sol-artifact-1"
  , lE = "Transactions"
  , aE = "contracts/Transactions.sol"
  , uE = [{
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "receiver",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "string",
        name: "message",
        type: "string"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "string",
        name: "keyword",
        type: "string"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [{
        internalType: "address payable",
        name: "receiver",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        internalType: "string",
        name: "message",
        type: "string"
    }, {
        internalType: "string",
        name: "keyword",
        type: "string"
    }],
    name: "addToBlockchain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "getAllTransactions",
    outputs: [{
        components: [{
            internalType: "address",
            name: "sender",
            type: "address"
        }, {
            internalType: "address",
            name: "receiver",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }, {
            internalType: "string",
            name: "message",
            type: "string"
        }, {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
        }, {
            internalType: "string",
            name: "keyword",
            type: "string"
        }],
        internalType: "struct Transactions.TransferStruct[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "getTransactionCount",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}]
  , cE = "0x608060405234801561001057600080fd5b50610e0c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906106da565b60405180910390f35b61006c6102e1565b604051610079919061070b565b60405180910390f35b61009c600480360381019061009791906108d9565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab906109a7565b80601f01602080910402602001604051908101604052809291908181526020018280546101d7906109a7565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b5050505050815260200160048201548152602001600582018054610247906109a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610273906109a7565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc9190610a07565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816104349190610be7565b506080820151816004015560a08201518160050190816104549190610be7565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049096959493929190610d67565b60405180910390a150505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104f5826104ca565b9050919050565b610505816104ea565b82525050565b6000819050919050565b61051e8161050b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561055e578082015181840152602081019050610543565b60008484015250505050565b6000601f19601f8301169050919050565b600061058682610524565b610590818561052f565b93506105a0818560208601610540565b6105a98161056a565b840191505092915050565b600060c0830160008301516105cc60008601826104fc565b5060208301516105df60208601826104fc565b5060408301516105f26040860182610515565b506060830151848203606086015261060a828261057b565b915050608083015161061f6080860182610515565b5060a083015184820360a0860152610637828261057b565b9150508091505092915050565b600061065083836105b4565b905092915050565b6000602082019050919050565b60006106708261049e565b61067a81856104a9565b93508360208202850161068c856104ba565b8060005b858110156106c857848403895281516106a98582610644565b94506106b483610658565b925060208a01995050600181019050610690565b50829750879550505050505092915050565b600060208201905081810360008301526106f48184610665565b905092915050565b6107058161050b565b82525050565b600060208201905061072060008301846106fc565b92915050565b6000604051905090565b600080fd5b600080fd5b6000610745826104ca565b9050919050565b6107558161073a565b811461076057600080fd5b50565b6000813590506107728161074c565b92915050565b6107818161050b565b811461078c57600080fd5b50565b60008135905061079e81610778565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107e68261056a565b810181811067ffffffffffffffff82111715610805576108046107ae565b5b80604052505050565b6000610818610726565b905061082482826107dd565b919050565b600067ffffffffffffffff821115610844576108436107ae565b5b61084d8261056a565b9050602081019050919050565b82818337600083830152505050565b600061087c61087784610829565b61080e565b905082815260208101848484011115610898576108976107a9565b5b6108a384828561085a565b509392505050565b600082601f8301126108c0576108bf6107a4565b5b81356108d0848260208601610869565b91505092915050565b600080600080608085870312156108f3576108f2610730565b5b600061090187828801610763565b94505060206109128782880161078f565b935050604085013567ffffffffffffffff81111561093357610932610735565b5b61093f878288016108ab565b925050606085013567ffffffffffffffff8111156109605761095f610735565b5b61096c878288016108ab565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109bf57607f821691505b6020821081036109d2576109d1610978565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a128261050b565b9150610a1d8361050b565b9250828201905080821115610a3557610a346109d8565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a9d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a60565b610aa78683610a60565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ae4610adf610ada8461050b565b610abf565b61050b565b9050919050565b6000819050919050565b610afe83610ac9565b610b12610b0a82610aeb565b848454610a6d565b825550505050565b600090565b610b27610b1a565b610b32818484610af5565b505050565b5b81811015610b5657610b4b600082610b1f565b600181019050610b38565b5050565b601f821115610b9b57610b6c81610a3b565b610b7584610a50565b81016020851015610b84578190505b610b98610b9085610a50565b830182610b37565b50505b505050565b600082821c905092915050565b6000610bbe60001984600802610ba0565b1980831691505092915050565b6000610bd78383610bad565b9150826002028217905092915050565b610bf082610524565b67ffffffffffffffff811115610c0957610c086107ae565b5b610c1382546109a7565b610c1e828285610b5a565b600060209050601f831160018114610c515760008415610c3f578287015190505b610c498582610bcb565b865550610cb1565b601f198416610c5f86610a3b565b60005b82811015610c8757848901518255600182019150602085019450602081019050610c62565b86831015610ca45784890151610ca0601f891682610bad565b8355505b6001600288020188555050505b505050505050565b610cc2816104ea565b82525050565b6000610ce3610cde610cd9846104ca565b610abf565b6104ca565b9050919050565b6000610cf582610cc8565b9050919050565b6000610d0782610cea565b9050919050565b610d1781610cfc565b82525050565b600082825260208201905092915050565b6000610d3982610524565b610d438185610d1d565b9350610d53818560208601610540565b610d5c8161056a565b840191505092915050565b600060c082019050610d7c6000830189610cb9565b610d896020830188610d0e565b610d9660408301876106fc565b8181036060830152610da88186610d2e565b9050610db760808301856106fc565b81810360a0830152610dc98184610d2e565b905097965050505050505056fea2646970667358221220d7360a1a4e70df48f642dc9a7d11e7e7d19ad43cd7043d2a2b95d872e519a97764736f6c63430008120033"
  , fE = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906106da565b60405180910390f35b61006c6102e1565b604051610079919061070b565b60405180910390f35b61009c600480360381019061009791906108d9565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab906109a7565b80601f01602080910402602001604051908101604052809291908181526020018280546101d7906109a7565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b5050505050815260200160048201548152602001600582018054610247906109a7565b80601f0160208091040260200160405190810160405280929190818152602001828054610273906109a7565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc9190610a07565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190816104349190610be7565b506080820151816004015560a08201518160050190816104549190610be7565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049096959493929190610d67565b60405180910390a150505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104f5826104ca565b9050919050565b610505816104ea565b82525050565b6000819050919050565b61051e8161050b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561055e578082015181840152602081019050610543565b60008484015250505050565b6000601f19601f8301169050919050565b600061058682610524565b610590818561052f565b93506105a0818560208601610540565b6105a98161056a565b840191505092915050565b600060c0830160008301516105cc60008601826104fc565b5060208301516105df60208601826104fc565b5060408301516105f26040860182610515565b506060830151848203606086015261060a828261057b565b915050608083015161061f6080860182610515565b5060a083015184820360a0860152610637828261057b565b9150508091505092915050565b600061065083836105b4565b905092915050565b6000602082019050919050565b60006106708261049e565b61067a81856104a9565b93508360208202850161068c856104ba565b8060005b858110156106c857848403895281516106a98582610644565b94506106b483610658565b925060208a01995050600181019050610690565b50829750879550505050505092915050565b600060208201905081810360008301526106f48184610665565b905092915050565b6107058161050b565b82525050565b600060208201905061072060008301846106fc565b92915050565b6000604051905090565b600080fd5b600080fd5b6000610745826104ca565b9050919050565b6107558161073a565b811461076057600080fd5b50565b6000813590506107728161074c565b92915050565b6107818161050b565b811461078c57600080fd5b50565b60008135905061079e81610778565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107e68261056a565b810181811067ffffffffffffffff82111715610805576108046107ae565b5b80604052505050565b6000610818610726565b905061082482826107dd565b919050565b600067ffffffffffffffff821115610844576108436107ae565b5b61084d8261056a565b9050602081019050919050565b82818337600083830152505050565b600061087c61087784610829565b61080e565b905082815260208101848484011115610898576108976107a9565b5b6108a384828561085a565b509392505050565b600082601f8301126108c0576108bf6107a4565b5b81356108d0848260208601610869565b91505092915050565b600080600080608085870312156108f3576108f2610730565b5b600061090187828801610763565b94505060206109128782880161078f565b935050604085013567ffffffffffffffff81111561093357610932610735565b5b61093f878288016108ab565b925050606085013567ffffffffffffffff8111156109605761095f610735565b5b61096c878288016108ab565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109bf57607f821691505b6020821081036109d2576109d1610978565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a128261050b565b9150610a1d8361050b565b9250828201905080821115610a3557610a346109d8565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a9d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a60565b610aa78683610a60565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610ae4610adf610ada8461050b565b610abf565b61050b565b9050919050565b6000819050919050565b610afe83610ac9565b610b12610b0a82610aeb565b848454610a6d565b825550505050565b600090565b610b27610b1a565b610b32818484610af5565b505050565b5b81811015610b5657610b4b600082610b1f565b600181019050610b38565b5050565b601f821115610b9b57610b6c81610a3b565b610b7584610a50565b81016020851015610b84578190505b610b98610b9085610a50565b830182610b37565b50505b505050565b600082821c905092915050565b6000610bbe60001984600802610ba0565b1980831691505092915050565b6000610bd78383610bad565b9150826002028217905092915050565b610bf082610524565b67ffffffffffffffff811115610c0957610c086107ae565b5b610c1382546109a7565b610c1e828285610b5a565b600060209050601f831160018114610c515760008415610c3f578287015190505b610c498582610bcb565b865550610cb1565b601f198416610c5f86610a3b565b60005b82811015610c8757848901518255600182019150602085019450602081019050610c62565b86831015610ca45784890151610ca0601f891682610bad565b8355505b6001600288020188555050505b505050505050565b610cc2816104ea565b82525050565b6000610ce3610cde610cd9846104ca565b610abf565b6104ca565b9050919050565b6000610cf582610cc8565b9050919050565b6000610d0782610cea565b9050919050565b610d1781610cfc565b82525050565b600082825260208201905092915050565b6000610d3982610524565b610d438185610d1d565b9350610d53818560208601610540565b610d5c8161056a565b840191505092915050565b600060c082019050610d7c6000830189610cb9565b610d896020830188610d0e565b610d9660408301876106fc565b8181036060830152610da88186610d2e565b9050610db760808301856106fc565b81810360a0830152610dc98184610d2e565b905097965050505050505056fea2646970667358221220d7360a1a4e70df48f642dc9a7d11e7e7d19ad43cd7043d2a2b95d872e519a97764736f6c63430008120033"
  , hE = {}
  , dE = {}
  , pE = {
    _format: oE,
    contractName: lE,
    sourceName: aE,
    abi: uE,
    bytecode: cE,
    deployedBytecode: fE,
    linkReferences: hE,
    deployedLinkReferences: dE
}
  , gE = pE.abi
  , mE = "0x72a7d08FD1ed07A04929754416c5C65c8c2dc1a7"
  , V5 = En.createContext()
  , {ethereum: li} = window
  , yE = () => {
    const e = new iE(li).getSigner();
    return new Di(mE,gE,e)
}
  , wE = ({children: t}) => {
    const [e,n] = wn.useState("")
      , [r,s] = wn.useState({
        addressTo: "",
        amount: "",
        keyword: "",
        message: ""
    })
      , [i,o] = wn.useState(!1)
      , [l,a] = wn.useState(localStorage.getItem("transactionCount"));
    wn.useState([]);
    const u = (g, A) => {
        s(x => ({
            ...x,
            [A]: g.target.value
        }))
    }
      , f = async () => {
        try {
            if (!li)
                return alert("Please install metamask");
            const g = await li.request({
                method: "eth_accounts"
            });
            g.length ? (n(g[0]),
            console.log("Account Found")) : console.log("No accounts found")
        } catch (g) {
            throw console.log(g),
            new Error("No ethereum object.")
        }
    }
      , h = async () => {
        try {
            if (!li)
                return alert("Please install metamask");
            const g = await li.request({
                method: "eth_requestAccounts"
            });
            n(g[0])
        } catch (g) {
            throw console.log(g),
            new Error("No ethereum object.")
        }
    }
      , d = async () => {
        try {
            if (!window.ethereum)
                return alert("Please install metamask");
            const {addressTo: g, amount: A, keyword: x, message: N} = r
              , y = yE()
              , p = rA(A);
            await li.request({
                method: "eth_sendTransaction",
                params: [{
                    from: e,
                    to: g,
                    gas: "0x5208",
                    value: p.toString(16)
                }]
            });
            const w = await y.addToBlockchain(g, p, N, x);
            o(!0),
            console.log(`Loading - ${w.hash}`),
            await w.wait(),
            o(!1),
            console.log(`Success - ${w.hash}`);
            const S = await y.getTransactionCount();
            a(S.toNumber()),
            console.log(S)
        } catch (g) {
            throw console.log(g),
            new Error("No ethereum object.")
        }
    }
    ;
    return wn.useEffect( () => {
        f()
    }
    , []),
    I.jsx(V5.Provider, {
        value: {
            connectWallet: h,
            currentAccount: e,
            formData: r,
            sendTransaction: d,
            handleChange: u
        },
        children: t
    })
}
  , AE = t => `${t.slice(0, 5)}...${t.slice(t.length - 4)}`
  , ii = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
  , lu = ({placeholder: t, name: e, type: n, value: r, handleChange: s}) => I.jsx("input", {
    placeholder: t,
    type: n,
    step: "0.0001",
    value: r,
    onChange: i => s(i, e),
    className: "my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
})
  , vE = () => {
    const {connectWallet: t, currentAccount: e, formData: n, sendTransaction: r, handleChange: s} = wn.useContext(V5)
      , i = o => {
        const {addressTo: l, amount: a, keyword: u, message: f} = n;
        o.preventDefault(),
        !(!l || !a || !u || !f) && r()
    }
    ;
    return I.jsx("div", {
        className: "flex w-full justify-center items-center",
        children: I.jsxs("div", {
            className: "flex md:flex-row flex-col items-start justify-between md:p-20 py-8 px-4",
            children: [I.jsxs("div", {
                className: "flex flex-1 justify-start items-start flex-col md:mr-10",
                children: [I.jsxs("h1", {
                    className: "text-3xl sm:text-5xl text-white py-1",
                    children: ["Send Crypto ", I.jsx("br", {}), " across the world"]
                }), I.jsx("p", {
                    className: "text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",
                    children: "Explore the crypto world. Buy and sell cryptocurrencies easily on KryptVerse."
                }), !e && I.jsxs("button", {
                    type: "button",
                    onClick: t,
                    className: "flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",
                    children: [I.jsx(E2, {
                        className: "text-white mr-2"
                    }), I.jsx("p", {
                        className: "text-white text-base font-semibold",
                        children: "Connect Wallet"
                    })]
                }), I.jsxs("div", {
                    className: "grid sm:grid-cols-3 grid-cols-2 w-full mt-10",
                    children: [I.jsx("div", {
                        className: `rounded-tl-2xl ${ii}`,
                        children: "Reliability"
                    }), I.jsx("div", {
                        className: ii,
                        children: "Security"
                    }), I.jsx("div", {
                        className: `sm:rounded-tr-2xl ${ii}`,
                        children: "Ethereum"
                    }), I.jsx("div", {
                        className: `rounded-bl-2xl ${ii}`,
                        children: "Web 3.0"
                    }), I.jsx("div", {
                        className: ii,
                        children: "Low Fees"
                    }), I.jsx("div", {
                        className: `rounded-br-2xl ${ii}`,
                        children: "Blockchain"
                    })]
                })]
            }), I.jsxs("div", {
                className: "flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",
                children: [I.jsx("div", {
                    className: "p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ",
                    children: I.jsxs("div", {
                        className: "flex justify-between flex-col w-full h-full",
                        children: [I.jsx("div", {
                            className: "flex justify-between items-start",
                            children: I.jsx("div", {
                                className: "w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",
                                children: I.jsx(k2, {
                                    fontSize: 21,
                                    color: "#fff"
                                })
                            })
                        }), I.jsxs("div", {
                            children: [I.jsx("p", {
                                className: "text-white font-light text-sm",
                                children: AE(e)
                            }), I.jsx("p", {
                                className: "text-white font-semibold text-lg mt-1",
                                children: "Ethereum"
                            })]
                        })]
                    })
                }), I.jsxs("div", {
                    className: "p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",
                    children: [I.jsx(lu, {
                        placeholder: "Address To",
                        name: "addressTo",
                        type: "text",
                        handleChange: s
                    }), I.jsx(lu, {
                        placeholder: "Amount (ETH)",
                        name: "amount",
                        type: "number",
                        handleChange: s
                    }), I.jsx(lu, {
                        placeholder: "Keyword (Gif)",
                        name: "keyword",
                        type: "text",
                        handleChange: s
                    }), I.jsx(lu, {
                        placeholder: "Enter Message",
                        name: "message",
                        type: "text",
                        handleChange: s
                    }), I.jsx("div", {
                        className: "h-[1px] w-full bg-gray-400 my-2"
                    }), I.jsx("button", {
                        type: "button",
                        onClick: i,
                        className: "text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",
                        children: "Send now"
                    })]
                })]
            })]
        })
    })
}
;
function xE(t) {
    return $s({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"
            }
        }]
    })(t)
}
function EE(t) {
    return $s({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "g",
            attr: {},
            child: [{
                tag: "path",
                attr: {
                    fill: "none",
                    d: "M0 0H24V24H0z"
                }
            }, {
                tag: "path",
                attr: {
                    d: "M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"
                }
            }]
        }]
    })(t)
}
const Gf = ({color: t, title: e, icon: n, subtitle: r}) => I.jsxs("div", {
    className: "flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl",
    children: [I.jsx("div", {
        className: `w-10 h-10 rounded-full flex justify-center items-center ${t}`,
        children: n
    }), I.jsxs("div", {
        className: "ml-5 flex flex-col flex-1",
        children: [I.jsx("h3", {
            className: "mt-2 text-white text-lg",
            children: e
        }), I.jsx("p", {
            className: "mt-1 text-white text-sm md:w-9/12",
            children: r
        })]
    })]
})
  , bE = () => I.jsx("div", {
    className: "flex w-full justify-center items-center gradient-bg-services",
    children: I.jsxs("div", {
        className: "flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",
        children: [I.jsxs("div", {
            className: "flex-1 flex flex-col justify-start items-start",
            children: [I.jsxs("h1", {
                className: "text-white text-3xl sm:text-5xl py-2 ",
                children: ["Services that we", I.jsx("br", {}), "continue to improve"]
            }), I.jsx("p", {
                className: "text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base",
                children: "The best choice for buying and selling your crypto assets, with the various super friendly services we offer"
            })]
        }), I.jsxs("div", {
            className: "flex-1 flex flex-col justify-start items-center",
            children: [I.jsx(Gf, {
                color: "bg-[#2952E3]",
                title: "Security gurantee",
                icon: I.jsx(C2, {
                    fontSize: 21,
                    className: "text-white"
                }),
                subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
            }), I.jsx(Gf, {
                color: "bg-[#8945F8]",
                title: "Best exchange rates",
                icon: I.jsx(xE, {
                    fontSize: 21,
                    className: "text-white"
                }),
                subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
            }), I.jsx(Gf, {
                color: "bg-[#F84550]",
                title: "Fastest transactions",
                icon: I.jsx(EE, {
                    fontSize: 21,
                    className: "text-white"
                }),
                subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
            })]
        })]
    })
})
  , SE = () => I.jsxs("div", {
    className: "min-h-screen",
    children: [I.jsxs("div", {
        className: "gradient-bg-welcome",
        children: [I.jsx(b2, {}), I.jsx(vE, {})]
    }), I.jsx(bE, {}), I.jsx(S2, {})]
});
Vf.createRoot(document.getElementById("root")).render(I.jsx(wE, {
    children: I.jsx(En.StrictMode, {
        children: I.jsx(SE, {})
    })
}));
