import {
    g as oe,
    a as ne,
    s as F,
    c as P,
    _ as d,
    r as u,
    u as ie,
    b as S,
    j as t,
    d as E,
    e as ae,
    f as je,
    h as Ce,
    T as Oe,
    i as Se,
    k as ue,
    l as ye,
    m as qe,
    n as N,
    o as Fe,
    B as v,
    C as ke,
    I as T,
    S as b,
    p as Ze,
    q as We,
    O as Ne
} from "./index-DKcgAqZ1.js";
import {
    P as Ie,
    d as Ge,
    o as we,
    M as _e,
    L as he,
    G as ee,
    S as j,
    a as Ue,
    b as Me,
    T as Ye,
    c as Le
} from "./TextField-CGEuCW0K.js";
import {
    B as se,
    T as C,
    a as le
} from "./Button-BL-oB6So.js";
import {
    L as q
} from "./Link-DFivtxbZ.js";
import {
    I as U,
    M as Je
} from "./InputAdornment-Bx2fNA96.js";
import {
    M as ce,
    l as s,
    p as Y,
    a as J,
    b as X,
    c as Be,
    B as Xe,
    C as Re,
    S as re,
    A as Pe,
    L as ze,
    T as Ke,
    d as Qe,
    P as et,
    G as tt,
    e as rt,
    f as ot
} from "./PersonalSettingsIcon-Cn7y6wN_.js";
import {
    I as nt
} from "./Image-BVk3USx6.js";

function it(e) {
    return oe("MuiAppBar", e)
}
ne("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const at = ["className", "color", "enableColorOnDark", "position"],
    st = e => {
        const {
            color: r,
            position: o,
            classes: n
        } = e, i = {
            root: ["root", `color${P(r)}`, `position${P(o)}`]
        };
        return ae(i, it, n)
    },
    G = (e, r) => e ? `${e==null?void 0:e.replace(")","")}, ${r})` : r,
    lt = F(Ie, {
        name: "MuiAppBar",
        slot: "Root",
        overridesResolver: (e, r) => {
            const {
                ownerState: o
            } = e;
            return [r.root, r[`position${P(o.position)}`], r[`color${P(o.color)}`]]
        }
    })(({
        theme: e,
        ownerState: r
    }) => {
        const o = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
        return d({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            boxSizing: "border-box",
            flexShrink: 0
        }, r.position === "fixed" && {
            position: "fixed",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": {
                position: "absolute"
            }
        }, r.position === "absolute" && {
            position: "absolute",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0
        }, r.position === "sticky" && {
            position: "sticky",
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0
        }, r.position === "static" && {
            position: "static"
        }, r.position === "relative" && {
            position: "relative"
        }, !e.vars && d({}, r.color === "default" && {
            backgroundColor: o,
            color: e.palette.getContrastText(o)
        }, r.color && r.color !== "default" && r.color !== "inherit" && r.color !== "transparent" && {
            backgroundColor: e.palette[r.color].main,
            color: e.palette[r.color].contrastText
        }, r.color === "inherit" && {
            color: "inherit"
        }, e.palette.mode === "dark" && !r.enableColorOnDark && {
            backgroundColor: null,
            color: null
        }, r.color === "transparent" && d({
            backgroundColor: "transparent",
            color: "inherit"
        }, e.palette.mode === "dark" && {
            backgroundImage: "none"
        })), e.vars && d({}, r.color === "default" && {
            "--AppBar-background": r.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : G(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
            "--AppBar-color": r.enableColorOnDark ? e.vars.palette.text.primary : G(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
        }, r.color && !r.color.match(/^(default|inherit|transparent)$/) && {
            "--AppBar-background": r.enableColorOnDark ? e.vars.palette[r.color].main : G(e.vars.palette.AppBar.darkBg, e.vars.palette[r.color].main),
            "--AppBar-color": r.enableColorOnDark ? e.vars.palette[r.color].contrastText : G(e.vars.palette.AppBar.darkColor, e.vars.palette[r.color].contrastText)
        }, {
            backgroundColor: "var(--AppBar-background)",
            color: r.color === "inherit" ? "inherit" : "var(--AppBar-color)"
        }, r.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit"
        }))
    }),
    ct = u.forwardRef(function(r, o) {
        const n = ie({
                props: r,
                name: "MuiAppBar"
            }),
            {
                className: i,
                color: a = "primary",
                enableColorOnDark: p = !1,
                position: h = "fixed"
            } = n,
            x = S(n, at),
            c = d({}, n, {
                color: a,
                position: h,
                enableColorOnDark: p
            }),
            f = st(c);
        return t.jsx(lt, d({
            square: !0,
            component: "header",
            ownerState: c,
            elevation: 4,
            className: E(f.root, i, h === "fixed" && "mui-fixed"),
            ref: o
        }, x))
    }),
    dt = ct,
    pt = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function ut(e, r, o) {
    const n = r.getBoundingClientRect(),
        i = o && o.getBoundingClientRect(),
        a = we(r);
    let p;
    if (r.fakeTransform) p = r.fakeTransform;
    else {
        const c = a.getComputedStyle(r);
        p = c.getPropertyValue("-webkit-transform") || c.getPropertyValue("transform")
    }
    let h = 0,
        x = 0;
    if (p && p !== "none" && typeof p == "string") {
        const c = p.split("(")[1].split(")")[0].split(",");
        h = parseInt(c[4], 10), x = parseInt(c[5], 10)
    }
    return e === "left" ? i ? `translateX(${i.right+h-n.left}px)` : `translateX(${a.innerWidth+h-n.left}px)` : e === "right" ? i ? `translateX(-${n.right-i.left-h}px)` : `translateX(-${n.left+n.width-h}px)` : e === "up" ? i ? `translateY(${i.bottom+x-n.top}px)` : `translateY(${a.innerHeight+x-n.top}px)` : i ? `translateY(-${n.top-i.top+n.height-x}px)` : `translateY(-${n.top+n.height-x}px)`
}

function ht(e) {
    return typeof e == "function" ? e() : e
}

function _(e, r, o) {
    const n = ht(o),
        i = ut(e, r, n);
    i && (r.style.webkitTransform = i, r.style.transform = i)
}
const xt = u.forwardRef(function(r, o) {
        const n = je(),
            i = {
                enter: n.transitions.easing.easeOut,
                exit: n.transitions.easing.sharp
            },
            a = {
                enter: n.transitions.duration.enteringScreen,
                exit: n.transitions.duration.leavingScreen
            },
            {
                addEndListener: p,
                appear: h = !0,
                children: x,
                container: c,
                direction: f = "down",
                easing: z = i,
                in: y,
                onEnter: $,
                onEntered: w,
                onEntering: M,
                onExit: B,
                onExited: R,
                onExiting: V,
                style: k,
                timeout: I = a,
                TransitionComponent: K = Oe
            } = r,
            H = S(r, pt),
            m = u.useRef(null),
            Q = Ce(x.ref, m, o),
            A = l => g => {
                l && (g === void 0 ? l(m.current) : l(m.current, g))
            },
            D = A((l, g) => {
                _(f, l, c), Se(l), $ && $(l, g)
            }),
            L = A((l, g) => {
                const pe = ue({
                    timeout: I,
                    style: k,
                    easing: z
                }, {
                    mode: "enter"
                });
                l.style.webkitTransition = n.transitions.create("-webkit-transform", d({}, pe)), l.style.transition = n.transitions.create("transform", d({}, pe)), l.style.webkitTransform = "none", l.style.transform = "none", M && M(l, g)
            }),
            Z = A(w),
            W = A(V),
            $e = A(l => {
                const g = ue({
                    timeout: I,
                    style: k,
                    easing: z
                }, {
                    mode: "exit"
                });
                l.style.webkitTransition = n.transitions.create("-webkit-transform", g), l.style.transition = n.transitions.create("transform", g), _(f, l, c), B && B(l)
            }),
            Ve = A(l => {
                l.style.webkitTransition = "", l.style.transition = "", R && R(l)
            }),
            He = l => {
                p && p(m.current, l)
            },
            de = u.useCallback(() => {
                m.current && _(f, m.current, c)
            }, [f, c]);
        return u.useEffect(() => {
            if (y || f === "down" || f === "right") return;
            const l = Ge(() => {
                    m.current && _(f, m.current, c)
                }),
                g = we(m.current);
            return g.addEventListener("resize", l), () => {
                l.clear(), g.removeEventListener("resize", l)
            }
        }, [f, y, c]), u.useEffect(() => {
            y || de()
        }, [y, de]), t.jsx(K, d({
            nodeRef: m,
            onEnter: D,
            onEntered: Z,
            onEntering: L,
            onExit: $e,
            onExited: Ve,
            onExiting: W,
            addEndListener: He,
            appear: h,
            in: y,
            timeout: I
        }, H, {
            children: (l, g) => u.cloneElement(x, d({
                ref: Q,
                style: d({
                    visibility: l === "exited" && !y ? "hidden" : void 0
                }, k, x.props.style)
            }, g))
        }))
    }),
    ft = xt;

function gt(e) {
    return oe("MuiDrawer", e)
}
ne("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const vt = ["BackdropProps"],
    mt = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"],
    Ae = (e, r) => {
        const {
            ownerState: o
        } = e;
        return [r.root, (o.variant === "permanent" || o.variant === "persistent") && r.docked, r.modal]
    },
    bt = e => {
        const {
            classes: r,
            anchor: o,
            variant: n
        } = e, i = {
            root: ["root"],
            docked: [(n === "permanent" || n === "persistent") && "docked"],
            modal: ["modal"],
            paper: ["paper", `paperAnchor${P(o)}`, n !== "temporary" && `paperAnchorDocked${P(o)}`]
        };
        return ae(i, gt, r)
    },
    jt = F(_e, {
        name: "MuiDrawer",
        slot: "Root",
        overridesResolver: Ae
    })(({
        theme: e
    }) => ({
        zIndex: (e.vars || e).zIndex.drawer
    })),
    xe = F("div", {
        shouldForwardProp: ye,
        name: "MuiDrawer",
        slot: "Docked",
        skipVariantsResolver: !1,
        overridesResolver: Ae
    })({
        flex: "0 0 auto"
    }),
    Ct = F(Ie, {
        name: "MuiDrawer",
        slot: "Paper",
        overridesResolver: (e, r) => {
            const {
                ownerState: o
            } = e;
            return [r.paper, r[`paperAnchor${P(o.anchor)}`], o.variant !== "temporary" && r[`paperAnchorDocked${P(o.anchor)}`]]
        }
    })(({
        theme: e,
        ownerState: r
    }) => d({
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0
    }, r.anchor === "left" && {
        left: 0
    }, r.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%"
    }, r.anchor === "right" && {
        right: 0
    }, r.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%"
    }, r.anchor === "left" && r.variant !== "temporary" && {
        borderRight: `1px solid ${(e.vars||e).palette.divider}`
    }, r.anchor === "top" && r.variant !== "temporary" && {
        borderBottom: `1px solid ${(e.vars||e).palette.divider}`
    }, r.anchor === "right" && r.variant !== "temporary" && {
        borderLeft: `1px solid ${(e.vars||e).palette.divider}`
    }, r.anchor === "bottom" && r.variant !== "temporary" && {
        borderTop: `1px solid ${(e.vars||e).palette.divider}`
    })),
    De = {
        left: "right",
        right: "left",
        top: "down",
        bottom: "up"
    };

function yt(e) {
    return ["left", "right"].indexOf(e) !== -1
}

function kt({
    direction: e
}, r) {
    return e === "rtl" && yt(r) ? De[r] : r
}
const It = u.forwardRef(function(r, o) {
        const n = ie({
                props: r,
                name: "MuiDrawer"
            }),
            i = je(),
            a = qe(),
            p = {
                enter: i.transitions.duration.enteringScreen,
                exit: i.transitions.duration.leavingScreen
            },
            {
                anchor: h = "left",
                BackdropProps: x,
                children: c,
                className: f,
                elevation: z = 16,
                hideBackdrop: y = !1,
                ModalProps: {
                    BackdropProps: $
                } = {},
                onClose: w,
                open: M = !1,
                PaperProps: B = {},
                SlideProps: R,
                TransitionComponent: V = ft,
                transitionDuration: k = p,
                variant: I = "temporary"
            } = n,
            K = S(n.ModalProps, vt),
            H = S(n, mt),
            m = u.useRef(!1);
        u.useEffect(() => {
            m.current = !0
        }, []);
        const Q = kt({
                direction: a ? "rtl" : "ltr"
            }, h),
            D = d({}, n, {
                anchor: h,
                elevation: z,
                open: M,
                variant: I
            }, H),
            L = bt(D),
            Z = t.jsx(Ct, d({
                elevation: I === "temporary" ? z : 0,
                square: !0
            }, B, {
                className: E(L.paper, B.className),
                ownerState: D,
                children: c
            }));
        if (I === "permanent") return t.jsx(xe, d({
            className: E(L.root, L.docked, f),
            ownerState: D,
            ref: o
        }, H, {
            children: Z
        }));
        const W = t.jsx(V, d({ in: M,
            direction: De[Q],
            timeout: k,
            appear: m.current
        }, R, {
            children: Z
        }));
        return I === "persistent" ? t.jsx(xe, d({
            className: E(L.root, L.docked, f),
            ownerState: D,
            ref: o
        }, H, {
            children: W
        })) : t.jsx(jt, d({
            BackdropProps: d({}, x, $, {
                transitionDuration: k
            }),
            className: E(L.root, L.modal, f),
            open: M,
            ownerState: D,
            onClose: w,
            hideBackdrop: y,
            ref: o
        }, H, K, {
            children: W
        }))
    }),
    fe = It;

function wt(e) {
    return oe("MuiListItemButton", e)
}
const Mt = ne("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]),
    O = Mt,
    Lt = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"],
    Bt = (e, r) => {
        const {
            ownerState: o
        } = e;
        return [r.root, o.dense && r.dense, o.alignItems === "flex-start" && r.alignItemsFlexStart, o.divider && r.divider, !o.disableGutters && r.gutters]
    },
    Rt = e => {
        const {
            alignItems: r,
            classes: o,
            dense: n,
            disabled: i,
            disableGutters: a,
            divider: p,
            selected: h
        } = e, c = ae({
            root: ["root", n && "dense", !a && "gutters", p && "divider", i && "disabled", r === "flex-start" && "alignItemsFlexStart", h && "selected"]
        }, wt, o);
        return d({}, o, c)
    },
    Pt = F(se, {
        shouldForwardProp: e => ye(e) || e === "classes",
        name: "MuiListItemButton",
        slot: "Root",
        overridesResolver: Bt
    })(({
        theme: e,
        ownerState: r
    }) => d({
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest
        }),
        "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        },
        [`&.${O.selected}`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : N(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${O.focusVisible}`]: {
                backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : N(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
        },
        [`&.${O.selected}:hover`]: {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : N(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : N(e.palette.primary.main, e.palette.action.selectedOpacity)
            }
        },
        [`&.${O.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
        },
        [`&.${O.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity
        }
    }, r.divider && {
        borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
        backgroundClip: "padding-box"
    }, r.alignItems === "flex-start" && {
        alignItems: "flex-start"
    }, !r.disableGutters && {
        paddingLeft: 16,
        paddingRight: 16
    }, r.dense && {
        paddingTop: 4,
        paddingBottom: 4
    })),
    zt = u.forwardRef(function(r, o) {
        const n = ie({
                props: r,
                name: "MuiListItemButton"
            }),
            {
                alignItems: i = "center",
                autoFocus: a = !1,
                component: p = "div",
                children: h,
                dense: x = !1,
                disableGutters: c = !1,
                divider: f = !1,
                focusVisibleClassName: z,
                selected: y = !1,
                className: $
            } = n,
            w = S(n, Lt),
            M = u.useContext(he),
            B = u.useMemo(() => ({
                dense: x || M.dense || !1,
                alignItems: i,
                disableGutters: c
            }), [i, M.dense, x, c]),
            R = u.useRef(null);
        Fe(() => {
            a && R.current && R.current.focus()
        }, [a]);
        const V = d({}, n, {
                alignItems: i,
                dense: B.dense,
                disableGutters: c,
                divider: f,
                selected: y
            }),
            k = Rt(V),
            I = Ce(R, o);
        return t.jsx(he.Provider, {
            value: B,
            children: t.jsx(Pt, d({
                ref: I,
                href: w.href || w.to,
                component: (w.href || w.to) && p === "div" ? "button" : p,
                focusVisibleClassName: E(k.focusVisible, z),
                ownerState: V,
                className: E(k.root, $)
            }, w, {
                classes: k,
                children: h
            }))
        })
    }),
    At = zt,
    te = [{
        href: "#!",
        title: "Themewagon",
        key: "team"
    }, {
        href: "#!",
        title: "About Us",
        key: "about"
    }, {
        href: "#!",
        title: "Blog ",
        key: "blog"
    }, {
        href: "#!",
        title: "License ",
        key: "license"
    }],
    Dt = () => t.jsx(t.Fragment, {
        children: t.jsx(v, {
            component: "section",
            textAlign: "center",
            py: 0,
            children: t.jsx(ke, {
                children: t.jsx(v, {
                    pb: 3,
                    children: t.jsxs(ee, {
                        container: !0,
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [t.jsx(ee, {
                            item: !0,
                            xs: 12,
                            lg: "auto",
                            children: t.jsxs(j, {
                                alignItems: "center",
                                sx: {
                                    flexDirection: {
                                        xs: "column",
                                        lg: "row"
                                    },
                                    gap: 1
                                },
                                children: [t.jsxs(C, {
                                    variant: "h6",
                                    fontWeight: "regular",
                                    mb: 0,
                                    children: ["© ", new Date().getFullYear(), ", Your Company Inc."]
                                }), t.jsxs(C, {
                                    variant: "h6",
                                    mb: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "regular",
                                    children: ["Made with", t.jsx(T, {
                                        icon: "ri:heart-fill",
                                        sx: {
                                            mx: 1,
                                            color: "error.main"
                                        }
                                    }), "by", t.jsx(q, {
                                        href: "https://themewagon.com/",
                                        target: "_blank",
                                        color: "inherit",
                                        sx: {
                                            textDecoration: "none",
                                            transition: "background 1s, color 0.5s",
                                            ml: 1,
                                            fontWeight: "bold",
                                            "&:hover": {
                                                color: "primary.main"
                                            }
                                        },
                                        children: "ThemeWagon"
                                    })]
                                })]
                            })
                        }), t.jsx(ee, {
                            item: !0,
                            xs: 12,
                            lg: "auto",
                            mb: {
                                xs: 1,
                                lg: 0
                            },
                            alignItems: "center",
                            children: t.jsx(j, {
                                flexDirection: "row",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "center",
                                component: "ul",
                                sx: {
                                    listStyle: "none",
                                    mt: {
                                        xs: 3,
                                        lg: 0
                                    },
                                    mb: 0,
                                    p: 0
                                },
                                children: te == null ? void 0 : te.map(e => t.jsx(se, {
                                    component: q,
                                    href: `${e.href}`,
                                    sx: {
                                        px: 2,
                                        lineHeight: 1,
                                        "& :hover": {
                                            color: "primary.main"
                                        }
                                    },
                                    children: t.jsx(C, {
                                        variant: "button",
                                        fontWeight: "regular",
                                        color: "text.secondary",
                                        children: e.title
                                    })
                                }, e.key))
                            })
                        })]
                    })
                })
            })
        })
    }),
    Ee = e => t.jsxs(b, { ...e,
        viewBox: "0 0 42 38",
        children: [t.jsx("path", {
            fill: "#F500F5",
            d: "M28.473 18.908c-.087.07-.136.086-.145.048-.85-.014-1.701-.022-2.552-.022-1.199 0-2.048-.038-2.548-.115-1.945-.297-3.6-1.102-4.963-2.417-2.797-2.696-3.635-6.072-2.514-10.13.129-.236.254-.486.375-.75 1.32-2.844 3.741-4.7 6.811-5.381.37-.082 1.008-.125 1.915-.127 4.314-.015 8.583-.018 12.805-.009.164 0 .21.074.135.22l-9.319 18.683z"
        }), t.jsx("path", {
            fill: "#4141F9",
            d: "M15.751 6.273c-1.12 4.057-.283 7.433 2.514 10.13 1.364 1.314 3.018 2.12 4.963 2.416.5.077 1.349.115 2.548.115.85 0 1.701.008 2.552.022L18.892 38 .108 37.994A.108.108 0 010 37.89c0-.018.003-.037.011-.053l15.74-31.564z"
        }), t.jsx("path", {
            fill: "#01F5F5",
            d: "M18.892 38l9.436-19.044c.01.038.058.022.145-.048 1.192-.01 2.371-.014 3.538-.014 1.213.001 2.481.306 3.804.913 4.332 1.992 6.444 6.933 5.043 11.484-.99 3.212-3.689 5.76-7.033 6.491-.664.146-1.68.218-3.046.218H18.892z"
        })]
    }),
    ge = [{
        value: "en-uk",
        label: "English (Global)",
        icon: "flag:sh-4x3"
    }, {
        value: "en-us",
        label: "English",
        icon: "flag:us-4x3"
    }, {
        value: "bd",
        label: "Bangla",
        icon: "flag:bd-4x3"
    }],
    Et = () => {
        const [e, r] = u.useState(null), o = i => {
            r(i.currentTarget)
        }, n = () => {
            r(null)
        };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(U, {
                onClick: o,
                sx: {
                    height: 40,
                    width: 40,
                    p: 1,
                    ...e ? {
                        bgcolor: "primary.lighter"
                    } : {}
                },
                children: t.jsx(T, {
                    icon: "flag:sh-4x3",
                    sx: {
                        maxWidth: 1,
                        borderRadius: 1,
                        verticalAlign: "middle"
                    }
                })
            }), t.jsx(Ue, {
                open: !!e,
                anchorEl: e,
                onClose: n,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                slotProps: {
                    paper: {
                        sx: {
                            width: 170
                        }
                    }
                },
                children: ge.map(i => t.jsxs(ce, {
                    selected: i.value === ge[0].value,
                    onClick: n,
                    sx: {
                        typography: "body2",
                        py: 1
                    },
                    children: [t.jsx(T, {
                        icon: i.icon,
                        sx: {
                            width: 28,
                            height: 28,
                            mr: 2
                        }
                    }), i.label]
                }, i.value))
            })]
        })
    },
    Tt = e => t.jsx(b, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        ...e,
        children: t.jsx("path", {
            fill: "#7E84A3",
            fillRule: "evenodd",
            d: "M13 3c2.282.464 4 2.581 4 5v4a2 2 0 012 2v5h-5a2 2 0 11-4 0H5v-5a2 2 0 012-2V8c0-2.419 1.718-4.537 4-5h2zm-1 2a3 3 0 00-2.995 2.824L9 8v4a2 2 0 01-2 2v3h10v-3a2 2 0 01-2-2V8a3 3 0 00-3-3z",
            clipRule: "evenodd"
        })
    }),
    Te = "/modernize-mui-admin/assets/team-5-BnPvAdRH.jpg",
    $t = [{
        id: s.uniqueId(),
        title: "My Profile",
        icon: "fa-regular:user"
    }, {
        id: s.uniqueId(),
        title: "My Account",
        icon: "fa6-regular:envelope"
    }, {
        id: s.uniqueId(),
        title: "My Tasks",
        icon: "fa-solid:tasks"
    }],
    Vt = [{
        id: s.uniqueId(),
        avatar: Y,
        title: "Alex Joined the Team!",
        subtitle: "Welcome him aboard"
    }, {
        id: s.uniqueId(),
        avatar: J,
        title: "Meeting Reminder",
        subtitle: "Don’t forget the 3 PM meeting"
    }, {
        id: s.uniqueId(),
        avatar: X,
        title: "Invoice Paid",
        subtitle: "Your invoice has been paid"
    }, {
        id: s.uniqueId(),
        avatar: Be,
        title: "Sara completed tasks",
        subtitle: "Review her work"
    }, {
        id: s.uniqueId(),
        avatar: Te,
        title: "Anna Joined the Team!",
        subtitle: "Say hello to her"
    }, {
        id: s.uniqueId(),
        avatar: Y,
        title: "New Comment on Post",
        subtitle: "John commented on your post"
    }, {
        id: s.uniqueId(),
        avatar: J,
        title: "Project Deadline Approaching",
        subtitle: "Submit your work by end of day lorem afk al jafl jala ;aej d jas sgjslkdfgj sdg jg lkdjsg lkdjs"
    }, {
        id: s.uniqueId(),
        avatar: X,
        title: "Emma completed tasks",
        subtitle: "Give her new assignments"
    }];
s.uniqueId(), Y, s.uniqueId(), J, s.uniqueId(), X, s.uniqueId(), Be, s.uniqueId(), s.uniqueId(), Y, s.uniqueId(), J, s.uniqueId(), X;

function Ht(e) {
    return e === 0 ? "no notifications" : e > 99 ? "more than 99 notifications" : `${e} notifications`
}
const Ot = () => {
        const [e, r] = u.useState(null), o = !!e, n = a => {
            r(a.currentTarget)
        }, i = () => {
            r(null)
        };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(U, {
                "aria-label": Ht(100),
                color: "inherit",
                onClick: n,
                sx: {
                    color: "grey.200"
                },
                children: t.jsx(Xe, {
                    color: "primary",
                    badgeContent: 5,
                    children: t.jsx(Tt, {})
                })
            }), t.jsxs(Me, {
                id: "long-menu",
                MenuListProps: {
                    sx: {
                        flex: 1
                    }
                },
                keepMounted: !0,
                anchorEl: e,
                open: o,
                onClose: i,
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                slotProps: {
                    paper: {
                        style: {
                            width: 326
                        }
                    }
                },
                children: [t.jsxs(j, {
                    direction: "row",
                    py: 2,
                    px: 4,
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [t.jsx(C, {
                        variant: "h6",
                        children: "Notifications"
                    }), t.jsx(Re, {
                        label: "5 new",
                        color: "primary",
                        size: "small"
                    })]
                }), t.jsx(re, {
                    style: {
                        height: "385px"
                    },
                    children: Vt.map(a => t.jsx(ce, {
                        sx: {
                            py: 2,
                            px: 4
                        },
                        onClick: i,
                        children: t.jsxs(j, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 2,
                            children: [t.jsx(Pe, {
                                src: a.avatar,
                                alt: a.avatar,
                                sx: {
                                    width: 36,
                                    height: 36
                                }
                            }), t.jsxs(v, {
                                sx: {
                                    width: 200
                                },
                                children: [t.jsx(C, {
                                    variant: "subtitle2",
                                    color: "textPrimary",
                                    fontWeight: "medium",
                                    noWrap: !0,
                                    children: a.title
                                }), t.jsx(C, {
                                    color: "textSecondary",
                                    variant: "subtitle2",
                                    noWrap: !0,
                                    children: a.subtitle
                                })]
                            })]
                        })
                    }, a.id))
                }), t.jsx(j, {
                    direction: "row",
                    sx: {
                        width: 1,
                        justifyContent: "center"
                    },
                    children: t.jsx(le, {
                        size: "small",
                        variant: "outlined",
                        sx: {
                            mt: 3.5,
                            width: "80%"
                        },
                        children: "See All Notifications"
                    })
                })]
            })]
        })
    },
    St = "/modernize-mui-admin/assets/avatar-DOSnM2JJ.svg",
    qt = () => {
        const [e, r] = u.useState(null), o = !!e, n = a => {
            r(a.currentTarget)
        }, i = () => {
            r(null)
        };
        return t.jsxs(v, {
            sx: {
                px: .75,
                pr: 2
            },
            children: [t.jsx(se, {
                disableRipple: !0,
                onClick: n,
                children: t.jsxs(j, {
                    spacing: 1.5,
                    direction: "row",
                    alignItems: "center",
                    sx: {
                        py: .75,
                        ml: .75
                    },
                    children: [t.jsx(Pe, {
                        alt: "avatar",
                        variant: "rounded",
                        src: St,
                        sx: {
                            height: 36,
                            width: 36
                        }
                    }), t.jsx(C, {
                        variant: "subtitle1",
                        sx: {
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        },
                        children: "X’eriya Ponald"
                    })]
                })
            }), t.jsxs(Me, {
                keepMounted: !0,
                anchorEl: e,
                open: o,
                onClose: i,
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                slotProps: {
                    paper: {
                        style: {
                            paddingTop: "8px",
                            width: "100%",
                            maxWidth: 120
                        }
                    }
                },
                children: [$t.map(a => t.jsxs(ce, {
                    sx: {
                        py: 1,
                        px: 1.5
                    },
                    onClick: i,
                    children: [t.jsx(ze, {
                        sx: {
                            "&.MuiListItemIcon-root": {
                                minWidth: 2,
                                mr: 1
                            }
                        },
                        children: t.jsx(T, {
                            width: 16,
                            height: 16,
                            icon: a.icon
                        })
                    }), t.jsxs(C, {
                        variant: "subtitle2",
                        children: [" ", a.title]
                    })]
                }, a.id)), t.jsx(j, {
                    direction: "row",
                    sx: {
                        width: 1,
                        justifyContent: "center"
                    },
                    children: t.jsx(le, {
                        size: "small",
                        variant: "outlined",
                        sx: {
                            mt: 1.5,
                            width: "80%",
                            py: .5
                        },
                        children: "Logout"
                    })
                })]
            })]
        })
    },
    Ft = ({
        onDrawerToggle: e
    }) => t.jsx(dt, {
        position: "sticky",
        children: t.jsxs(Ke, {
            children: [t.jsxs(j, {
                direction: "row",
                spacing: {
                    xs: 0,
                    sm: 2
                },
                alignItems: "center",
                children: [t.jsx(q, {
                    href: "/",
                    sx: {
                        overflow: "hidden",
                        display: {
                            xs: "flex",
                            lg: "none"
                        },
                        alignItems: "center",
                        gap: 1.5
                    },
                    children: t.jsx(Ee, {
                        sx: {
                            fontSize: 40,
                            p: 1
                        }
                    })
                }), t.jsx(U, {
                    color: "inherit",
                    "aria-label": "menu",
                    onClick: e,
                    sx: {
                        display: {
                            xs: "block",
                            lg: "none"
                        },
                        width: 40,
                        height: 42
                    },
                    children: t.jsx(T, {
                        icon: "oi:menu",
                        color: "primary.main",
                        sx: {
                            fontSize: 18
                        }
                    })
                }), t.jsx(Ye, {
                    placeholder: "Search...",
                    InputProps: {
                        startAdornment: t.jsx(Je, {
                            position: "start",
                            children: t.jsx(T, {
                                icon: "majesticons:search-line"
                            })
                        })
                    },
                    variant: "standard",
                    sx: {
                        display: {
                            xs: "none",
                            lg: "block"
                        }
                    }
                }), t.jsxs(U, {
                    children: [t.jsx(T, {
                        icon: "majesticons:search-line",
                        color: "primary.main",
                        sx: {
                            display: {
                                xs: "block",
                                lg: "none"
                            }
                        }
                    }), " "]
                })]
            }), t.jsx(v, {
                flexGrow: 1
            }), t.jsxs(j, {
                spacing: .5,
                direction: "row",
                alignItems: "center",
                children: [t.jsx(Et, {}), t.jsx(Ot, {}), t.jsx(qt, {})]
            })]
        })
    }),
    Zt = "data:image/svg+xml,%3csvg%20width='218'%20height='164'%20viewBox='0%200%20218%20164'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clipPath='url(%23clip0_0_1948)'%3e%3crect%20width='218'%20height='164'%20rx='6'%20fill='%231E5EFF'%20/%3e%3cmask%20id='mask0_0_1948'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='218'%20height='164'%3e%3crect%20width='218'%20height='164'%20rx='6'%20fill='white'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_0_1948)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M170%2083H226V135H174C171.791%20135%20170%20133.209%20170%20131V83Z'%20fill='%231645BC'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M226.5%2083L214%2097H157L169.5%2083H226.5Z'%20fill='%234F81FF'%20/%3e%3ccircle%20cx='212'%20cy='51'%20r='22'%20fill='%231645BC'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M211.174%2044.6145L211.897%2045.6831L212.62%2044.6145C214.832%2042.4361%20217.891%2042.5015%20220.159%2044.5872L220.306%2044.7262C222.517%2046.9046%20222.564%2050.4076%20220.447%2052.6423L220.306%2052.7863L211.897%2061L203.694%2052.7863C201.435%2050.5605%20201.435%2046.9519%20203.694%2044.7262C205.954%2042.5005%20208.915%2042.3887%20211.174%2044.6145Z'%20fill='%234F81FF'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1948'%3e%3crect%20width='218'%20height='164'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
    ve = () => t.jsx(j, {
        direction: "row",
        alignItems: "center",
        gap: 2,
        sx: {
            my: 0,
            p: 2
        },
        children: t.jsxs(v, {
            sx: {
                height: 164,
                width: 1,
                position: "relative",
                color: "common.white"
            },
            children: [t.jsx(nt, {
                src: Zt,
                alt: "illustration",
                sx: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    zIndex: -1,
                    objectFit: "cover"
                }
            }), t.jsx(v, {
                sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "left"
                },
                children: t.jsxs("div", {
                    children: [t.jsx(C, {
                        variant: "h6",
                        children: "Grow Business"
                    }), t.jsx(C, {
                        variant: "subtitle1",
                        children: "Explore our marketing solutions"
                    }), t.jsx(le, {
                        variant: "contained",
                        color: "secondary",
                        size: "small",
                        sx: {
                            mt: 1.5,
                            alignSelf: "flex-start"
                        },
                        children: "Read More"
                    })]
                })
            })]
        })
    }),
    Wt = e => t.jsx(b, { ...e,
        children: t.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M9.5 2L12 5h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5.5zm1.563 5l-2.5-3H4v15h16V7h-8.937z",
            clipRule: "evenodd"
        })
    }),
    Nt = e => t.jsx(b, { ...e,
        children: t.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12.393 3.08c.233.1.42.283.52.513l2.042 4.684 5.143.471c.547.05.948.528.898 1.068a.977.977 0 01-.334.646l-3.88 3.366 1.136 4.975a.98.98 0 01-.751 1.173 1.004 1.004 0 01-.726-.114L12 17.26l-4.44 2.603a1 1 0 01-1.363-.342.97.97 0 01-.115-.717l1.136-4.975-3.88-3.366a.973.973 0 01-.09-1.384.998.998 0 01.654-.33l5.143-.47 2.042-4.685a.999.999 0 011.306-.513zm1.204 7.044L12 6.462l-1.597 3.662-4.021.367 3.034 2.632-.888 3.888L12 14.976l3.47 2.035-.886-3.888 3.033-2.632-4.02-.367z",
            clipRule: "evenodd"
        })
    }),
    Gt = e => t.jsxs(b, { ...e,
        viewBox: "0 0 24 24",
        style: {
            verticalAlign: "middle",
            fill: "none",
            overflow: "hidden"
        },
        children: [t.jsx("path", {
            d: "M21 8.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V11C3 12.1046 3.89543 13 5 13H10.875M19 14V12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12V14M14 20H20C20.5523 20 21 19.5523 21 19V15C21 14.4477 20.5523 14 20 14H14C13.4477 14 13 14.4477 13 15V19C13 19.5523 13.4477 20 14 20Z",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), t.jsx("circle", {
            cx: 7.5,
            cy: 8.5,
            r: 1.5,
            fill: "currentColor"
        }), t.jsx("circle", {
            cx: 12,
            cy: 8.5,
            r: 1.5,
            fill: "currentColor"
        })]
    });

function _t(e) {
    return t.jsx(b, { ...e,
        children: t.jsx("path", {
            fillRule: "evenodd",
            d: "M13.329 3.516c.058.052.114.107.166.166l6 6.75A2 2 0 0120 11.76V19a2 2 0 01-2 2h-3.998H10 6a2 2 0 01-2-2v-7.24a2 2 0 01.505-1.328l6-6.75a2 2 0 012.824-.166zM11 19h2v-4h-2v4zm4 0v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6v-7.24l6-6.75 6 6.75V19h-3z",
            clipRule: "evenodd",
            fill: "currentColor"
        })
    })
}
const Ut = e => t.jsx(b, { ...e,
        children: t.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M19 3a2 2 0 012 2v12a2 2 0 01-2 2H9l-6 3V5a2 2 0 012-2h14zm0 2H5v13.468L8.446 17H19V5zm-8 7v2H7v-2h4zm6-4v2H7V8h10z",
            clipRule: "evenodd"
        })
    }),
    Yt = e => t.jsx(b, { ...e,
        children: t.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 15V17H4V15H6ZM19 15C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H19ZM6 11V13H4V11H6ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H19ZM6 7V9H4V7H6ZM19 7C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7H19Z",
            fill: "currentColor"
        })
    }),
    Jt = e => t.jsx(b, { ...e,
        children: t.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm4 6a4 4 0 00-8 0h2l.005-.15A2 2 0 1112 12a1 1 0 00-1 1v1a1 1 0 102 0v-.126c1.725-.444 3-2.01 3-3.874zm-3 8v-2h-2v2h2z",
            clipRule: "evenodd"
        })
    }),
    Xt = e => t.jsx(b, { ...e,
        children: t.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M18.786 19c.67 0 1.214.448 1.214 1s-.544 1-1.214 1H4.214C3.544 21 3 20.552 3 20s.544-1 1.214-1h14.572zM18 3a2 2 0 012 2v12H3v-4a2 2 0 012-2h3V9a2 2 0 012-2h3V5a2 2 0 012-2h3zM8 13H5v2h3v-2zm5-4h-3v6h3V9zm5-4h-3v10h3V5z",
            clipRule: "evenodd"
        })
    }),
    Kt = e => t.jsxs(b, { ...e,
        viewBox: "0 0 1024 1024",
        style: {
            verticalAlign: "middle",
            fill: "none",
            overflow: "hidden",
            padding: "1px"
        },
        children: [t.jsx("path", {
            d: "M332.8 814.08c-51.2 0-92.16-40.96-92.16-87.04v-179.2c0-51.2 40.96-92.16 92.16-92.16h40.96v-102.4c0-76.8 61.44-138.24 138.24-138.24 76.8 0 138.24 61.44 138.24 138.24v102.4h35.84c51.2 0 92.16 40.96 92.16 92.16v179.2c0 51.2-40.96 87.04-92.16 87.04H332.8z m0-302.08c-20.48 0-35.84 15.36-35.84 35.84v179.2c0 20.48 15.36 35.84 35.84 35.84h348.16c20.48 0 35.84-15.36 35.84-35.84v-179.2c0-20.48-15.36-35.84-35.84-35.84H332.8z m256-56.32v-102.4c0-46.08-35.84-81.92-81.92-81.92-40.96 0-76.8 35.84-76.8 81.92v102.4h158.72z",
            fill: "currentColor"
        }), t.jsx("path", {
            d: "M512 1024C235.52 1024 10.24 798.72 10.24 522.24S235.52 20.48 512 20.48c117.76 0 225.28 40.96 317.44 112.64L808.96 35.84c0-5.12 0-15.36 5.12-20.48 5.12-10.24 10.24-15.36 15.36-15.36h5.12c10.24 0 25.6 10.24 25.6 20.48l35.84 184.32v5.12c0 15.36-10.24 25.6-20.48 25.6l-184.32 35.84h-5.12c-10.24 0-25.6-10.24-25.6-20.48 0-5.12 0-15.36 5.12-20.48 5.12-5.12 10.24-10.24 15.36-10.24l133.12-25.6c-81.92-76.8-189.44-117.76-302.08-117.76-245.76 0-445.44 199.68-445.44 445.44s199.68 445.44 445.44 445.44c245.76 0 445.44-199.68 445.44-445.44 0-30.72 0-56.32-5.12-81.92 0-10.24 0-15.36 5.12-20.48 0-10.24 5.12-15.36 15.36-15.36h5.12c15.36 0 25.6 10.24 30.72 25.6 5.12 30.72 10.24 61.44 10.24 92.16-5.12 276.48-230.4 501.76-506.88 501.76z",
            fill: "currentColor"
        })]
    }),
    Qt = e => t.jsx(b, { ...e,
        style: {
            verticalAlign: "middle",
            fill: "none",
            overflow: "hidden"
        },
        viewBox: "-1 0 24 24",
        children: t.jsx("path", {
            d: "M20 18L17 18M17 18L14 18M17 18V15M17 18V21M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }),
    er = e => t.jsxs(b, { ...e,
        viewBox: "1 -0.5 25 25",
        style: {
            fill: "none"
        },
        children: [t.jsx("path", {
            d: "M15.014 8.46835C14.7204 8.17619 14.2455 8.17737 13.9533 8.47099C13.6612 8.76462 13.6624 9.23949 13.956 9.53165L15.014 8.46835ZM16.971 12.5317C17.2646 12.8238 17.7395 12.8226 18.0317 12.529C18.3238 12.2354 18.3226 11.7605 18.029 11.4683L16.971 12.5317ZM18.029 12.5317C18.3226 12.2395 18.3238 11.7646 18.0317 11.471C17.7395 11.1774 17.2646 11.1762 16.971 11.4683L18.029 12.5317ZM13.956 14.4683C13.6624 14.7605 13.6612 15.2354 13.9533 15.529C14.2455 15.8226 14.7204 15.8238 15.014 15.5317L13.956 14.4683ZM17.5 12.75C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25V12.75ZM3.5 11.25C3.08579 11.25 2.75 11.5858 2.75 12C2.75 12.4142 3.08579 12.75 3.5 12.75V11.25ZM13.956 9.53165L16.971 12.5317L18.029 11.4683L15.014 8.46835L13.956 9.53165ZM16.971 11.4683L13.956 14.4683L15.014 15.5317L18.029 12.5317L16.971 11.4683ZM17.5 11.25H3.5V12.75H17.5V11.25Z",
            fill: "currentColor"
        }), t.jsx("path", {
            d: "M9.5 15C9.5 17.2091 11.2909 19 13.5 19H17.5C19.7091 19 21.5 17.2091 21.5 15V9C21.5 6.79086 19.7091 5 17.5 5H13.5C11.2909 5 9.5 6.79086 9.5 9",
            stroke: "currentColor",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), t.jsx("path", {
            d: "M15.014 8.46835C14.7204 8.17619 14.2455 8.17737 13.9533 8.47099C13.6612 8.76462 13.6624 9.23949 13.956 9.53165L15.014 8.46835ZM16.971 12.5317C17.2646 12.8238 17.7395 12.8226 18.0317 12.529C18.3238 12.2354 18.3226 11.7605 18.029 11.4683L16.971 12.5317ZM18.029 12.5317C18.3226 12.2395 18.3238 11.7646 18.0317 11.471C17.7395 11.1774 17.2646 11.1762 16.971 11.4683L18.029 12.5317ZM13.956 14.4683C13.6624 14.7605 13.6612 15.2354 13.9533 15.529C14.2455 15.8226 14.7204 15.8238 15.014 15.5317L13.956 14.4683ZM17.5 12.75C17.9142 12.75 18.25 12.4142 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25V12.75ZM3.5 11.25C3.08579 11.25 2.75 11.5858 2.75 12C2.75 12.4142 3.08579 12.75 3.5 12.75V11.25ZM13.956 9.53165L16.971 12.5317L18.029 11.4683L15.014 8.46835L13.956 9.53165ZM16.971 11.4683L13.956 14.4683L15.014 15.5317L18.029 12.5317L16.971 11.4683ZM17.5 11.25H3.5V12.75H17.5V11.25Z",
            fill: "currentColor"
        }), t.jsx("path", {
            d: "M9.5 15C9.5 17.2091 11.2909 19 13.5 19H17.5C19.7091 19 21.5 17.2091 21.5 15V9C21.5 6.79086 19.7091 5 17.5 5H13.5C11.2909 5 9.5 6.79086 9.5 9",
            stroke: "currentColor",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }),
    tr = [{
        id: s.uniqueId(),
        title: "Dashboard",
        icon: _t,
        href: "/",
        available: !0
    }, {
        id: s.uniqueId(),
        title: "Orders",
        icon: Yt,
        href: "#!",
        chip: "16",
        chipColor: "secondary",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Products",
        icon: Jt,
        href: "#!",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Categories",
        icon: Wt,
        href: "#!",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Customers",
        icon: Qe,
        href: "#!",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Reports",
        icon: Xt,
        href: "#!",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Coupons",
        icon: Nt,
        href: "#!",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Inbox",
        icon: Ut,
        href: "#!",
        available: !1
    }, {
        navlabel: !0,
        subheader: "Authentication"
    }, {
        id: s.uniqueId(),
        title: "Sign Up",
        icon: Qt,
        href: "/authentication/sign-up",
        available: !0
    }, {
        id: s.uniqueId(),
        title: "Sign In",
        icon: er,
        href: "/authentication/login",
        available: !0
    }, {
        id: s.uniqueId(),
        title: "Forgot Password",
        icon: Gt,
        href: "/authentication/forgot-password",
        available: !0
    }, {
        id: s.uniqueId(),
        title: "Reset Password",
        icon: Kt,
        href: "/authentication/reset-password",
        available: !0
    }, {
        navlabel: !0,
        subheader: "Settings"
    }, {
        id: s.uniqueId(),
        title: "Personal Settings",
        icon: et,
        href: "/settings/#!",
        available: !1
    }, {
        id: s.uniqueId(),
        title: "Global Settings",
        icon: tt,
        href: "/settings/#!",
        available: !1
    }],
    rr = ({
        subheader: e
    }) => t.jsx(rt, {
        children: e
    }),
    or = ({
        item: e,
        pathTo: r
    }) => {
        const {
            icon: o
        } = e, n = o ? t.jsx(o, {}) : null;
        return t.jsx(Le, {
            component: "li",
            disablePadding: !0,
            children: t.jsxs(At, {
                component: q,
                href: e == null ? void 0 : e.href,
                disabled: e == null ? void 0 : e.disabled,
                selected: r === (e == null ? void 0 : e.href),
                children: [t.jsx(ze, {
                    sx: {
                        py: .4,
                        px: 0,
                        ...!e.available && {
                            color: "action.active",
                            opacity: .9
                        }
                    },
                    children: n
                }), t.jsxs(ot, {
                    sx: { ...!e.available && {
                            color: "action.active",
                            opacity: .9
                        }
                    },
                    children: [t.jsx(t.Fragment, {
                        children: `${e==null?void 0:e.title}`
                    }), t.jsx("br", {}), e != null && e.subtitle ? t.jsx(C, {
                        variant: "caption",
                        children: e.subtitle
                    }) : ""]
                }), e != null && e.chip ? t.jsx(Re, {
                    color: e == null ? void 0 : e.chipColor,
                    variant: e != null && e.variant ? e == null ? void 0 : e.variant : "outlined",
                    size: "small",
                    label: e == null ? void 0 : e.chip,
                    sx: ({
                        palette: i,
                        shape: a,
                        typography: p
                    }) => ({
                        borderRadius: a.borderRadius * 3,
                        ...p.caption,
                        ...r === (e == null ? void 0 : e.href) ? {
                            bgcolor: i.text.disabled,
                            color: i.primary.main
                        } : {
                            bgcolor: i.text.primary,
                            color: i.common.white
                        }
                    })
                }) : null]
            })
        }, (e == null ? void 0 : e.id) && e.title)
    },
    me = () => {
        const e = Ze(),
            {
                pathname: r
            } = e;
        return t.jsx(v, {
            sx: {
                p: 2
            },
            children: t.jsx(Le, {
                sx: {
                    pt: 0
                },
                children: tr.map(o => o.subheader ? t.jsx(rr, {
                    subheader: o.subheader
                }, o.subheader) : t.jsx(or, {
                    pathTo: r,
                    item: o
                }, o.id))
            })
        })
    },
    be = () => t.jsxs(q, {
        href: "/",
        sx: {
            height: 68,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            gap: 1.5
        },
        children: [t.jsx(Ee, {
            fontSize: "large"
        }), t.jsx(C, {
            variant: "h4",
            children: "Modernize"
        })]
    }),
    nr = ({
        onDrawerClose: e,
        onDrawerTransitionEnd: r,
        mobileOpen: o
    }) => {
        const {
            up: n
        } = We();
        return n("lg") ? t.jsx(v, {
            sx: {
                flexShrink: 0
            },
            children: t.jsx(fe, {
                anchor: "left",
                open: !0,
                variant: "permanent",
                sx: {
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box"
                    }
                },
                children: t.jsxs(v, {
                    sx: {
                        height: 1
                    },
                    children: [t.jsx(v, {
                        sx: {
                            bgcolor: "common.white",
                            px: 3,
                            boxShadow: 9
                        },
                        children: t.jsx(be, {})
                    }), t.jsx(re, {
                        style: {
                            height: "calc(100% - 68px)"
                        },
                        children: t.jsxs(v, {
                            sx: {
                                borderRight: 1,
                                borderColor: "text.disabled"
                            },
                            children: [t.jsx(me, {}), t.jsx(ve, {})]
                        })
                    })]
                })
            })
        }) : t.jsxs(fe, {
            anchor: "left",
            onTransitionEnd: r,
            open: o,
            onClose: e,
            variant: "temporary",
            ModalProps: {
                keepMounted: !0
            },
            PaperProps: {
                sx: {
                    backgroundColor: "common.white",
                    border: "0 !important",
                    boxShadow: a => a.shadows[2]
                }
            },
            children: [t.jsx(v, {
                sx: {
                    bgcolor: "common.white",
                    px: 3
                },
                children: t.jsx(be, {})
            }), t.jsx(re, {
                style: {
                    height: "calc(100% - 68px)"
                },
                children: t.jsxs(t.Fragment, {
                    children: [t.jsx(me, {}), t.jsx(ve, {})]
                })
            })]
        })
    },
    ir = 270,
    hr = () => {
        const [e, r] = u.useState(!1), [o, n] = u.useState(!1), i = () => {
            n(!0), r(!1)
        }, a = () => {
            n(!1)
        }, p = () => {
            o || r(!e)
        };
        return t.jsxs(j, {
            sx: {
                height: 1,
                position: "relative",
                flexDirection: "row",
                width: 1
            },
            children: [t.jsx(nr, {
                onDrawerClose: i,
                onDrawerTransitionEnd: a,
                mobileOpen: e
            }), t.jsxs(j, {
                spacing: 2,
                sx: {
                    display: "flex",
                    flexGrow: 1,
                    width: 1,
                    maxWidth: {
                        xs: 1,
                        lg: `calc(100% - ${ir}px)`
                    },
                    justifyContent: "space-between"
                },
                children: [t.jsx(Ft, {
                    onDrawerToggle: p
                }), t.jsx(ke, {
                    children: t.jsx(v, {
                        children: t.jsx(Ne, {})
                    })
                }), t.jsx(Dt, {})]
            })]
        })
    };
export {
    hr as
    default
};