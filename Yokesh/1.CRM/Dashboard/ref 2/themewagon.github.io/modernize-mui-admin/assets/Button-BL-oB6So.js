import {
    r as s,
    o as qt,
    a9 as Jt,
    _ as h,
    b as Y,
    R as q,
    aa as yt,
    d as C,
    j as $,
    a as tt,
    y as pt,
    s as A,
    u as et,
    g as dt,
    h as Rt,
    e as ft,
    c as T,
    a1 as Zt,
    l as Qt,
    n as J,
    ab as te
} from "./index-DKcgAqZ1.js";

function Z(t) {
    const e = s.useRef(t);
    return qt(() => {
        e.current = t
    }), s.useRef((...n) => (0, e.current)(...n)).current
}
const Ct = {};

function ee(t, e) {
    const n = s.useRef(Ct);
    return n.current === Ct && (n.current = t(e)), n
}
const ne = [];

function oe(t) {
    s.useEffect(t, ne)
}
class nt {
    constructor() {
        this.currentId = null, this.clear = () => {
            this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null)
        }, this.disposeEffect = () => this.clear
    }
    static create() {
        return new nt
    }
    start(e, n) {
        this.clear(), this.currentId = setTimeout(() => {
            this.currentId = null, n()
        }, e)
    }
}

function re() {
    const t = ee(nt.create).current;
    return oe(t.disposeEffect), t
}
let ot = !0,
    ct = !1;
const ie = new nt,
    ae = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
    };

function se(t) {
    const {
        type: e,
        tagName: n
    } = t;
    return !!(n === "INPUT" && ae[e] && !t.readOnly || n === "TEXTAREA" && !t.readOnly || t.isContentEditable)
}

function le(t) {
    t.metaKey || t.altKey || t.ctrlKey || (ot = !0)
}

function lt() {
    ot = !1
}

function ce() {
    this.visibilityState === "hidden" && ct && (ot = !0)
}

function ue(t) {
    t.addEventListener("keydown", le, !0), t.addEventListener("mousedown", lt, !0), t.addEventListener("pointerdown", lt, !0), t.addEventListener("touchstart", lt, !0), t.addEventListener("visibilitychange", ce, !0)
}

function pe(t) {
    const {
        target: e
    } = t;
    try {
        return e.matches(":focus-visible")
    } catch {}
    return ot || se(e)
}

function de() {
    const t = s.useCallback(o => {
            o != null && ue(o.ownerDocument)
        }, []),
        e = s.useRef(!1);

    function n() {
        return e.current ? (ct = !0, ie.start(100, () => {
            ct = !1
        }), e.current = !1, !0) : !1
    }

    function a(o) {
        return pe(o) ? (e.current = !0, !0) : !1
    }
    return {
        isFocusVisibleRef: e,
        onFocus: a,
        onBlur: n,
        ref: t
    }
}

function fe(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function ht(t, e) {
    var n = function(r) {
            return e && s.isValidElement(r) ? e(r) : r
        },
        a = Object.create(null);
    return t && s.Children.map(t, function(o) {
        return o
    }).forEach(function(o) {
        a[o.key] = n(o)
    }), a
}

function he(t, e) {
    t = t || {}, e = e || {};

    function n(f) {
        return f in e ? e[f] : t[f]
    }
    var a = Object.create(null),
        o = [];
    for (var r in t) r in e ? o.length && (a[r] = o, o = []) : o.push(r);
    var i, u = {};
    for (var c in e) {
        if (a[c])
            for (i = 0; i < a[c].length; i++) {
                var p = a[c][i];
                u[a[c][i]] = n(p)
            }
        u[c] = n(c)
    }
    for (i = 0; i < o.length; i++) u[o[i]] = n(o[i]);
    return u
}

function K(t, e, n) {
    return n[e] != null ? n[e] : t.props[e]
}

function ge(t, e) {
    return ht(t.children, function(n) {
        return s.cloneElement(n, {
            onExited: e.bind(null, n),
            in: !0,
            appear: K(n, "appear", t),
            enter: K(n, "enter", t),
            exit: K(n, "exit", t)
        })
    })
}

function be(t, e, n) {
    var a = ht(t.children),
        o = he(e, a);
    return Object.keys(o).forEach(function(r) {
        var i = o[r];
        if (s.isValidElement(i)) {
            var u = r in e,
                c = r in a,
                p = e[r],
                f = s.isValidElement(p) && !p.props.in;
            c && (!u || f) ? o[r] = s.cloneElement(i, {
                onExited: n.bind(null, i),
                in: !0,
                exit: K(i, "exit", t),
                enter: K(i, "enter", t)
            }) : !c && u && !f ? o[r] = s.cloneElement(i, { in: !1
            }) : c && u && s.isValidElement(p) && (o[r] = s.cloneElement(i, {
                onExited: n.bind(null, i),
                in: p.props.in,
                exit: K(i, "exit", t),
                enter: K(i, "enter", t)
            }))
        }
    }), o
}
var me = Object.values || function(t) {
        return Object.keys(t).map(function(e) {
            return t[e]
        })
    },
    ve = {
        component: "div",
        childFactory: function(e) {
            return e
        }
    },
    gt = function(t) {
        Jt(e, t);

        function e(a, o) {
            var r;
            r = t.call(this, a, o) || this;
            var i = r.handleExited.bind(fe(r));
            return r.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: i,
                firstRender: !0
            }, r
        }
        var n = e.prototype;
        return n.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, n.componentWillUnmount = function() {
            this.mounted = !1
        }, e.getDerivedStateFromProps = function(o, r) {
            var i = r.children,
                u = r.handleExited,
                c = r.firstRender;
            return {
                children: c ? ge(o, u) : be(o, i, u),
                firstRender: !1
            }
        }, n.handleExited = function(o, r) {
            var i = ht(this.props.children);
            o.key in i || (o.props.onExited && o.props.onExited(r), this.mounted && this.setState(function(u) {
                var c = h({}, u.children);
                return delete c[o.key], {
                    children: c
                }
            }))
        }, n.render = function() {
            var o = this.props,
                r = o.component,
                i = o.childFactory,
                u = Y(o, ["component", "childFactory"]),
                c = this.state.contextValue,
                p = me(this.state.children).map(i);
            return delete u.appear, delete u.enter, delete u.exit, r === null ? q.createElement(yt.Provider, {
                value: c
            }, p) : q.createElement(yt.Provider, {
                value: c
            }, q.createElement(r, u, p))
        }, e
    }(q.Component);
gt.propTypes = {};
gt.defaultProps = ve;
const xe = gt;

function ye(t) {
    const {
        className: e,
        classes: n,
        pulsate: a = !1,
        rippleX: o,
        rippleY: r,
        rippleSize: i,
        in: u,
        onExited: c,
        timeout: p
    } = t, [f, m] = s.useState(!1), b = C(e, n.ripple, n.rippleVisible, a && n.ripplePulsate), v = {
        width: i,
        height: i,
        top: -(i / 2) + r,
        left: -(i / 2) + o
    }, g = C(n.child, f && n.childLeaving, a && n.childPulsate);
    return !u && !f && m(!0), s.useEffect(() => {
        if (!u && c != null) {
            const x = setTimeout(c, p);
            return () => {
                clearTimeout(x)
            }
        }
    }, [c, u, p]), $.jsx("span", {
        className: b,
        style: v,
        children: $.jsx("span", {
            className: g
        })
    })
}
const B = tt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
    Re = ["center", "classes", "className"];
let rt = t => t,
    Tt, Et, Mt, Bt;
const ut = 550,
    Ce = 80,
    Te = pt(Tt || (Tt = rt `
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
    Ee = pt(Et || (Et = rt `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
    Me = pt(Mt || (Mt = rt `
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
    Be = A("span", {
        name: "MuiTouchRipple",
        slot: "Root"
    })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit"
    }),
    $e = A(ye, {
        name: "MuiTouchRipple",
        slot: "Ripple"
    })(Bt || (Bt = rt `
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), B.rippleVisible, Te, ut, ({
        theme: t
    }) => t.transitions.easing.easeInOut, B.ripplePulsate, ({
        theme: t
    }) => t.transitions.duration.shorter, B.child, B.childLeaving, Ee, ut, ({
        theme: t
    }) => t.transitions.easing.easeInOut, B.childPulsate, Me, ({
        theme: t
    }) => t.transitions.easing.easeInOut),
    ze = s.forwardRef(function(e, n) {
        const a = et({
                props: e,
                name: "MuiTouchRipple"
            }),
            {
                center: o = !1,
                classes: r = {},
                className: i
            } = a,
            u = Y(a, Re),
            [c, p] = s.useState([]),
            f = s.useRef(0),
            m = s.useRef(null);
        s.useEffect(() => {
            m.current && (m.current(), m.current = null)
        }, [c]);
        const b = s.useRef(!1),
            v = re(),
            g = s.useRef(null),
            x = s.useRef(null),
            P = s.useCallback(d => {
                const {
                    pulsate: E,
                    rippleX: y,
                    rippleY: R,
                    rippleSize: F,
                    cb: j
                } = d;
                p(M => [...M, $.jsx($e, {
                    classes: {
                        ripple: C(r.ripple, B.ripple),
                        rippleVisible: C(r.rippleVisible, B.rippleVisible),
                        ripplePulsate: C(r.ripplePulsate, B.ripplePulsate),
                        child: C(r.child, B.child),
                        childLeaving: C(r.childLeaving, B.childLeaving),
                        childPulsate: C(r.childPulsate, B.childPulsate)
                    },
                    timeout: ut,
                    pulsate: E,
                    rippleX: y,
                    rippleY: R,
                    rippleSize: F
                }, f.current)]), f.current += 1, m.current = j
            }, [r]),
            z = s.useCallback((d = {}, E = {}, y = () => {}) => {
                const {
                    pulsate: R = !1,
                    center: F = o || E.pulsate,
                    fakeElement: j = !1
                } = E;
                if ((d == null ? void 0 : d.type) === "mousedown" && b.current) {
                    b.current = !1;
                    return
                }(d == null ? void 0 : d.type) === "touchstart" && (b.current = !0);
                const M = j ? null : x.current,
                    S = M ? M.getBoundingClientRect() : {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    };
                let k, W, U;
                if (F || d === void 0 || d.clientX === 0 && d.clientY === 0 || !d.clientX && !d.touches) k = Math.round(S.width / 2), W = Math.round(S.height / 2);
                else {
                    const {
                        clientX: O,
                        clientY: L
                    } = d.touches && d.touches.length > 0 ? d.touches[0] : d;
                    k = Math.round(O - S.left), W = Math.round(L - S.top)
                }
                if (F) U = Math.sqrt((2 * S.width ** 2 + S.height ** 2) / 3), U % 2 === 0 && (U += 1);
                else {
                    const O = Math.max(Math.abs((M ? M.clientWidth : 0) - k), k) * 2 + 2,
                        L = Math.max(Math.abs((M ? M.clientHeight : 0) - W), W) * 2 + 2;
                    U = Math.sqrt(O ** 2 + L ** 2)
                }
                d != null && d.touches ? g.current === null && (g.current = () => {
                    P({
                        pulsate: R,
                        rippleX: k,
                        rippleY: W,
                        rippleSize: U,
                        cb: y
                    })
                }, v.start(Ce, () => {
                    g.current && (g.current(), g.current = null)
                })) : P({
                    pulsate: R,
                    rippleX: k,
                    rippleY: W,
                    rippleSize: U,
                    cb: y
                })
            }, [o, P, v]),
            D = s.useCallback(() => {
                z({}, {
                    pulsate: !0
                })
            }, [z]),
            V = s.useCallback((d, E) => {
                if (v.clear(), (d == null ? void 0 : d.type) === "touchend" && g.current) {
                    g.current(), g.current = null, v.start(0, () => {
                        V(d, E)
                    });
                    return
                }
                g.current = null, p(y => y.length > 0 ? y.slice(1) : y), m.current = E
            }, [v]);
        return s.useImperativeHandle(n, () => ({
            pulsate: D,
            start: z,
            stop: V
        }), [D, z, V]), $.jsx(Be, h({
            className: C(B.root, r.root, i),
            ref: x
        }, u, {
            children: $.jsx(xe, {
                component: null,
                exit: !0,
                children: c
            })
        }))
    }),
    Ie = ze;

function Pe(t) {
    return dt("MuiButtonBase", t)
}
const Ve = tt("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    ke = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
    Le = t => {
        const {
            disabled: e,
            focusVisible: n,
            focusVisibleClassName: a,
            classes: o
        } = t, i = ft({
            root: ["root", e && "disabled", n && "focusVisible"]
        }, Pe, o);
        return n && a && (i.root += ` ${a}`), i
    },
    Ne = A("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (t, e) => e.root
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": {
            borderStyle: "none"
        },
        [`&.${Ve.disabled}`]: {
            pointerEvents: "none",
            cursor: "default"
        },
        "@media print": {
            colorAdjust: "exact"
        }
    }),
    De = s.forwardRef(function(e, n) {
        const a = et({
                props: e,
                name: "MuiButtonBase"
            }),
            {
                action: o,
                centerRipple: r = !1,
                children: i,
                className: u,
                component: c = "button",
                disabled: p = !1,
                disableRipple: f = !1,
                disableTouchRipple: m = !1,
                focusRipple: b = !1,
                LinkComponent: v = "a",
                onBlur: g,
                onClick: x,
                onContextMenu: P,
                onDragLeave: z,
                onFocus: D,
                onFocusVisible: V,
                onKeyDown: d,
                onKeyUp: E,
                onMouseDown: y,
                onMouseLeave: R,
                onMouseUp: F,
                onTouchEnd: j,
                onTouchMove: M,
                onTouchStart: S,
                tabIndex: k = 0,
                TouchRippleProps: W,
                touchRippleRef: U,
                type: O
            } = a,
            L = Y(a, ke),
            G = s.useRef(null),
            I = s.useRef(null),
            It = Rt(I, U),
            {
                isFocusVisibleRef: bt,
                onFocus: Pt,
                onBlur: Vt,
                ref: kt
            } = de(),
            [_, w] = s.useState(!1);
        p && _ && w(!1), s.useImperativeHandle(o, () => ({
            focusVisible: () => {
                w(!0), G.current.focus()
            }
        }), []);
        const [it, Lt] = s.useState(!1);
        s.useEffect(() => {
            Lt(!0)
        }, []);
        const Nt = it && !f && !p;
        s.useEffect(() => {
            _ && b && !f && it && I.current.pulsate()
        }, [f, b, _, it]);

        function N(l, vt, Ht = m) {
            return Z(xt => (vt && vt(xt), !Ht && I.current && I.current[l](xt), !0))
        }
        const Dt = N("start", y),
            Ft = N("stop", P),
            St = N("stop", z),
            Wt = N("stop", F),
            Ut = N("stop", l => {
                _ && l.preventDefault(), R && R(l)
            }),
            jt = N("start", S),
            Ot = N("stop", j),
            _t = N("stop", M),
            Kt = N("stop", l => {
                Vt(l), bt.current === !1 && w(!1), g && g(l)
            }, !1),
            At = Z(l => {
                G.current || (G.current = l.currentTarget), Pt(l), bt.current === !0 && (w(!0), V && V(l)), D && D(l)
            }),
            at = () => {
                const l = G.current;
                return c && c !== "button" && !(l.tagName === "A" && l.href)
            },
            st = s.useRef(!1),
            Gt = Z(l => {
                b && !st.current && _ && I.current && l.key === " " && (st.current = !0, I.current.stop(l, () => {
                    I.current.start(l)
                })), l.target === l.currentTarget && at() && l.key === " " && l.preventDefault(), d && d(l), l.target === l.currentTarget && at() && l.key === "Enter" && !p && (l.preventDefault(), x && x(l))
            }),
            Xt = Z(l => {
                b && l.key === " " && I.current && _ && !l.defaultPrevented && (st.current = !1, I.current.stop(l, () => {
                    I.current.pulsate(l)
                })), E && E(l), x && l.target === l.currentTarget && at() && l.key === " " && !l.defaultPrevented && x(l)
            });
        let H = c;
        H === "button" && (L.href || L.to) && (H = v);
        const X = {};
        H === "button" ? (X.type = O === void 0 ? "button" : O, X.disabled = p) : (!L.href && !L.to && (X.role = "button"), p && (X["aria-disabled"] = p));
        const Yt = Rt(n, kt, G),
            mt = h({}, a, {
                centerRipple: r,
                component: c,
                disabled: p,
                disableRipple: f,
                disableTouchRipple: m,
                focusRipple: b,
                tabIndex: k,
                focusVisible: _
            }),
            wt = Le(mt);
        return $.jsxs(Ne, h({
            as: H,
            className: C(wt.root, u),
            ownerState: mt,
            onBlur: Kt,
            onClick: x,
            onContextMenu: Ft,
            onFocus: At,
            onKeyDown: Gt,
            onKeyUp: Xt,
            onMouseDown: Dt,
            onMouseLeave: Ut,
            onMouseUp: Wt,
            onDragLeave: St,
            onTouchEnd: Ot,
            onTouchMove: _t,
            onTouchStart: jt,
            ref: Yt,
            tabIndex: p ? -1 : k,
            type: O
        }, X, L, {
            children: [i, Nt ? $.jsx(Ie, h({
                ref: It,
                center: r
            }, W)) : null]
        }))
    }),
    Fe = De;

function Se(t) {
    return dt("MuiTypography", t)
}
tt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const We = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
    Ue = t => {
        const {
            align: e,
            gutterBottom: n,
            noWrap: a,
            paragraph: o,
            variant: r,
            classes: i
        } = t, u = {
            root: ["root", r, t.align !== "inherit" && `align${T(e)}`, n && "gutterBottom", a && "noWrap", o && "paragraph"]
        };
        return ft(u, Se, i)
    },
    je = A("span", {
        name: "MuiTypography",
        slot: "Root",
        overridesResolver: (t, e) => {
            const {
                ownerState: n
            } = t;
            return [e.root, n.variant && e[n.variant], n.align !== "inherit" && e[`align${T(n.align)}`], n.noWrap && e.noWrap, n.gutterBottom && e.gutterBottom, n.paragraph && e.paragraph]
        }
    })(({
        theme: t,
        ownerState: e
    }) => h({
        margin: 0
    }, e.variant === "inherit" && {
        font: "inherit"
    }, e.variant !== "inherit" && t.typography[e.variant], e.align !== "inherit" && {
        textAlign: e.align
    }, e.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }, e.gutterBottom && {
        marginBottom: "0.35em"
    }, e.paragraph && {
        marginBottom: 16
    })),
    $t = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p"
    },
    Oe = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main"
    },
    _e = t => Oe[t] || t,
    Ke = s.forwardRef(function(e, n) {
        const a = et({
                props: e,
                name: "MuiTypography"
            }),
            o = _e(a.color),
            r = Zt(h({}, a, {
                color: o
            })),
            {
                align: i = "inherit",
                className: u,
                component: c,
                gutterBottom: p = !1,
                noWrap: f = !1,
                paragraph: m = !1,
                variant: b = "body1",
                variantMapping: v = $t
            } = r,
            g = Y(r, We),
            x = h({}, r, {
                align: i,
                color: o,
                className: u,
                component: c,
                gutterBottom: p,
                noWrap: f,
                paragraph: m,
                variant: b,
                variantMapping: v
            }),
            P = c || (m ? "p" : v[b] || $t[b]) || "span",
            z = Ue(x);
        return $.jsx(je, h({
            as: P,
            ref: n,
            ownerState: x,
            className: C(z.root, u)
        }, g))
    }),
    rn = Ke;

function Ae(t) {
    return dt("MuiButton", t)
}
const Ge = tt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
    Q = Ge,
    Xe = s.createContext({}),
    Ye = Xe,
    we = s.createContext(void 0),
    He = we,
    qe = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
    Je = t => {
        const {
            color: e,
            disableElevation: n,
            fullWidth: a,
            size: o,
            variant: r,
            classes: i
        } = t, u = {
            root: ["root", r, `${r}${T(e)}`, `size${T(o)}`, `${r}Size${T(o)}`, `color${T(e)}`, n && "disableElevation", a && "fullWidth"],
            label: ["label"],
            startIcon: ["icon", "startIcon", `iconSize${T(o)}`],
            endIcon: ["icon", "endIcon", `iconSize${T(o)}`]
        }, c = ft(u, Ae, i);
        return h({}, i, c)
    },
    zt = t => h({}, t.size === "small" && {
        "& > *:nth-of-type(1)": {
            fontSize: 18
        }
    }, t.size === "medium" && {
        "& > *:nth-of-type(1)": {
            fontSize: 20
        }
    }, t.size === "large" && {
        "& > *:nth-of-type(1)": {
            fontSize: 22
        }
    }),
    Ze = A(Fe, {
        shouldForwardProp: t => Qt(t) || t === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (t, e) => {
            const {
                ownerState: n
            } = t;
            return [e.root, e[n.variant], e[`${n.variant}${T(n.color)}`], e[`size${T(n.size)}`], e[`${n.variant}Size${T(n.size)}`], n.color === "inherit" && e.colorInherit, n.disableElevation && e.disableElevation, n.fullWidth && e.fullWidth]
        }
    })(({
        theme: t,
        ownerState: e
    }) => {
        var n, a;
        const o = t.palette.mode === "light" ? t.palette.grey[300] : t.palette.grey[800],
            r = t.palette.mode === "light" ? t.palette.grey.A100 : t.palette.grey[700];
        return h({}, t.typography.button, {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: (t.vars || t).shape.borderRadius,
            transition: t.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
                duration: t.transitions.duration.short
            }),
            "&:hover": h({
                textDecoration: "none",
                backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : J(t.palette.text.primary, t.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, e.variant === "text" && e.color !== "inherit" && {
                backgroundColor: t.vars ? `rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : J(t.palette[e.color].main, t.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, e.variant === "outlined" && e.color !== "inherit" && {
                border: `1px solid ${(t.vars||t).palette[e.color].main}`,
                backgroundColor: t.vars ? `rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : J(t.palette[e.color].main, t.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, e.variant === "contained" && {
                backgroundColor: t.vars ? t.vars.palette.Button.inheritContainedHoverBg : r,
                boxShadow: (t.vars || t).shadows[4],
                "@media (hover: none)": {
                    boxShadow: (t.vars || t).shadows[2],
                    backgroundColor: (t.vars || t).palette.grey[300]
                }
            }, e.variant === "contained" && e.color !== "inherit" && {
                backgroundColor: (t.vars || t).palette[e.color].dark,
                "@media (hover: none)": {
                    backgroundColor: (t.vars || t).palette[e.color].main
                }
            }),
            "&:active": h({}, e.variant === "contained" && {
                boxShadow: (t.vars || t).shadows[8]
            }),
            [`&.${Q.focusVisible}`]: h({}, e.variant === "contained" && {
                boxShadow: (t.vars || t).shadows[6]
            }),
            [`&.${Q.disabled}`]: h({
                color: (t.vars || t).palette.action.disabled
            }, e.variant === "outlined" && {
                border: `1px solid ${(t.vars||t).palette.action.disabledBackground}`
            }, e.variant === "contained" && {
                color: (t.vars || t).palette.action.disabled,
                boxShadow: (t.vars || t).shadows[0],
                backgroundColor: (t.vars || t).palette.action.disabledBackground
            })
        }, e.variant === "text" && {
            padding: "6px 8px"
        }, e.variant === "text" && e.color !== "inherit" && {
            color: (t.vars || t).palette[e.color].main
        }, e.variant === "outlined" && {
            padding: "5px 15px",
            border: "1px solid currentColor"
        }, e.variant === "outlined" && e.color !== "inherit" && {
            color: (t.vars || t).palette[e.color].main,
            border: t.vars ? `1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)` : `1px solid ${J(t.palette[e.color].main,.5)}`
        }, e.variant === "contained" && {
            color: t.vars ? t.vars.palette.text.primary : (n = (a = t.palette).getContrastText) == null ? void 0 : n.call(a, t.palette.grey[300]),
            backgroundColor: t.vars ? t.vars.palette.Button.inheritContainedBg : o,
            boxShadow: (t.vars || t).shadows[2]
        }, e.variant === "contained" && e.color !== "inherit" && {
            color: (t.vars || t).palette[e.color].contrastText,
            backgroundColor: (t.vars || t).palette[e.color].main
        }, e.color === "inherit" && {
            color: "inherit",
            borderColor: "currentColor"
        }, e.size === "small" && e.variant === "text" && {
            padding: "4px 5px",
            fontSize: t.typography.pxToRem(13)
        }, e.size === "large" && e.variant === "text" && {
            padding: "8px 11px",
            fontSize: t.typography.pxToRem(15)
        }, e.size === "small" && e.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: t.typography.pxToRem(13)
        }, e.size === "large" && e.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: t.typography.pxToRem(15)
        }, e.size === "small" && e.variant === "contained" && {
            padding: "4px 10px",
            fontSize: t.typography.pxToRem(13)
        }, e.size === "large" && e.variant === "contained" && {
            padding: "8px 22px",
            fontSize: t.typography.pxToRem(15)
        }, e.fullWidth && {
            width: "100%"
        })
    }, ({
        ownerState: t
    }) => t.disableElevation && {
        boxShadow: "none",
        "&:hover": {
            boxShadow: "none"
        },
        [`&.${Q.focusVisible}`]: {
            boxShadow: "none"
        },
        "&:active": {
            boxShadow: "none"
        },
        [`&.${Q.disabled}`]: {
            boxShadow: "none"
        }
    }),
    Qe = A("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (t, e) => {
            const {
                ownerState: n
            } = t;
            return [e.startIcon, e[`iconSize${T(n.size)}`]]
        }
    })(({
        ownerState: t
    }) => h({
        display: "inherit",
        marginRight: 8,
        marginLeft: -4
    }, t.size === "small" && {
        marginLeft: -2
    }, zt(t))),
    tn = A("span", {
        name: "MuiButton",
        slot: "EndIcon",
        overridesResolver: (t, e) => {
            const {
                ownerState: n
            } = t;
            return [e.endIcon, e[`iconSize${T(n.size)}`]]
        }
    })(({
        ownerState: t
    }) => h({
        display: "inherit",
        marginRight: -4,
        marginLeft: 8
    }, t.size === "small" && {
        marginRight: -2
    }, zt(t))),
    en = s.forwardRef(function(e, n) {
        const a = s.useContext(Ye),
            o = s.useContext(He),
            r = te(a, e),
            i = et({
                props: r,
                name: "MuiButton"
            }),
            {
                children: u,
                color: c = "primary",
                component: p = "button",
                className: f,
                disabled: m = !1,
                disableElevation: b = !1,
                disableFocusRipple: v = !1,
                endIcon: g,
                focusVisibleClassName: x,
                fullWidth: P = !1,
                size: z = "medium",
                startIcon: D,
                type: V,
                variant: d = "text"
            } = i,
            E = Y(i, qe),
            y = h({}, i, {
                color: c,
                component: p,
                disabled: m,
                disableElevation: b,
                disableFocusRipple: v,
                fullWidth: P,
                size: z,
                type: V,
                variant: d
            }),
            R = Je(y),
            F = D && $.jsx(Qe, {
                className: R.startIcon,
                ownerState: y,
                children: D
            }),
            j = g && $.jsx(tn, {
                className: R.endIcon,
                ownerState: y,
                children: g
            }),
            M = o || "";
        return $.jsxs(Ze, h({
            ownerState: y,
            className: C(a.className, R.root, f, M),
            component: p,
            disabled: m,
            focusRipple: !v,
            focusVisibleClassName: C(R.focusVisible, x),
            ref: n,
            type: V
        }, E, {
            classes: R,
            children: [F, u, j]
        }))
    }),
    an = en;
export {
    Fe as B, rn as T, an as a, re as b, de as c, nt as d, ee as e, oe as f, Z as u
};