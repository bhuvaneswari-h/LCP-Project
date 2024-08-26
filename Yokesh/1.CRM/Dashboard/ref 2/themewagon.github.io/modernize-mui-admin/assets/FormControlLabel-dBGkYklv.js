import {
    g as U,
    a as E,
    s as j,
    _ as l,
    l as W,
    r as F,
    b as T,
    j as r,
    d as N,
    c as g,
    e as H,
    n as ee,
    u as G
} from "./index-DKcgAqZ1.js";
import {
    k as oe,
    u as J,
    e as O,
    f as te,
    S as se
} from "./TextField-CGEuCW0K.js";
import {
    B as ae,
    T as D
} from "./Button-BL-oB6So.js";

function ne(e) {
    return U("PrivateSwitchBase", e)
}
E("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const re = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"],
    le = e => {
        const {
            classes: o,
            checked: t,
            disabled: n,
            edge: a
        } = e, s = {
            root: ["root", t && "checked", n && "disabled", a && `edge${g(a)}`],
            input: ["input"]
        };
        return H(s, ne, o)
    },
    ce = j(ae)(({
        ownerState: e
    }) => l({
        padding: 9,
        borderRadius: "50%"
    }, e.edge === "start" && {
        marginLeft: e.size === "small" ? -3 : -12
    }, e.edge === "end" && {
        marginRight: e.size === "small" ? -3 : -12
    })),
    ie = j("input", {
        shouldForwardProp: W
    })({
        cursor: "inherit",
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1
    }),
    de = F.forwardRef(function(o, t) {
        const {
            autoFocus: n,
            checked: a,
            checkedIcon: s,
            className: i,
            defaultChecked: v,
            disabled: m,
            disableFocusRipple: c = !1,
            edge: P = !1,
            icon: I,
            id: k,
            inputProps: y,
            inputRef: R,
            name: $,
            onBlur: d,
            onChange: h,
            onFocus: p,
            readOnly: M,
            required: w = !1,
            tabIndex: z,
            type: b,
            value: B
        } = o, f = T(o, re), [x, K] = oe({
            controlled: a,
            default: !!v,
            name: "SwitchBase",
            state: "checked"
        }), C = J(), Q = u => {
            p && p(u), C && C.onFocus && C.onFocus(u)
        }, X = u => {
            d && d(u), C && C.onBlur && C.onBlur(u)
        }, Y = u => {
            if (u.nativeEvent.defaultPrevented) return;
            const A = u.target.checked;
            K(A), h && h(u, A)
        };
        let L = m;
        C && typeof L > "u" && (L = C.disabled);
        const Z = b === "checkbox" || b === "radio",
            _ = l({}, o, {
                checked: x,
                disabled: L,
                disableFocusRipple: c,
                edge: P
            }),
            V = le(_);
        return r.jsxs(ce, l({
            component: "span",
            className: N(V.root, i),
            centerRipple: !0,
            focusRipple: !c,
            disabled: L,
            tabIndex: null,
            role: void 0,
            onFocus: Q,
            onBlur: X,
            ownerState: _,
            ref: t
        }, f, {
            children: [r.jsx(ie, l({
                autoFocus: n,
                checked: a,
                defaultChecked: v,
                className: V.input,
                disabled: L,
                id: Z ? k : void 0,
                name: $,
                onChange: Y,
                readOnly: M,
                ref: R,
                required: w,
                ownerState: _,
                tabIndex: z,
                type: b
            }, b === "checkbox" && B === void 0 ? {} : {
                value: B
            }, y)), x ? s : I]
        }))
    }),
    pe = de,
    ue = O(r.jsx("path", {
        d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    }), "CheckBoxOutlineBlank"),
    me = O(r.jsx("path", {
        d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    }), "CheckBox"),
    he = O(r.jsx("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
    }), "IndeterminateCheckBox");

function be(e) {
    return U("MuiCheckbox", e)
}
const fe = E("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]),
    q = fe,
    Ce = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"],
    ke = e => {
        const {
            classes: o,
            indeterminate: t,
            color: n,
            size: a
        } = e, s = {
            root: ["root", t && "indeterminate", `color${g(n)}`, `size${g(a)}`]
        }, i = H(s, be, o);
        return l({}, o, i)
    },
    xe = j(pe, {
        shouldForwardProp: e => W(e) || e === "classes",
        name: "MuiCheckbox",
        slot: "Root",
        overridesResolver: (e, o) => {
            const {
                ownerState: t
            } = e;
            return [o.root, t.indeterminate && o.indeterminate, o[`size${g(t.size)}`], t.color !== "default" && o[`color${g(t.color)}`]]
        }
    })(({
        theme: e,
        ownerState: o
    }) => l({
        color: (e.vars || e).palette.text.secondary
    }, !o.disableRipple && {
        "&:hover": {
            backgroundColor: e.vars ? `rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ee(o.color === "default" ? e.palette.action.active : e.palette[o.color].main, e.palette.action.hoverOpacity),
            "@media (hover: none)": {
                backgroundColor: "transparent"
            }
        }
    }, o.color !== "default" && {
        [`&.${q.checked}, &.${q.indeterminate}`]: {
            color: (e.vars || e).palette[o.color].main
        },
        [`&.${q.disabled}`]: {
            color: (e.vars || e).palette.action.disabled
        }
    })),
    ge = r.jsx(me, {}),
    ve = r.jsx(ue, {}),
    Pe = r.jsx(he, {}),
    ye = F.forwardRef(function(o, t) {
        var n, a;
        const s = G({
                props: o,
                name: "MuiCheckbox"
            }),
            {
                checkedIcon: i = ge,
                color: v = "primary",
                icon: m = ve,
                indeterminate: c = !1,
                indeterminateIcon: P = Pe,
                inputProps: I,
                size: k = "medium",
                className: y
            } = s,
            R = T(s, Ce),
            $ = c ? P : m,
            d = c ? P : i,
            h = l({}, s, {
                color: v,
                indeterminate: c,
                size: k
            }),
            p = ke(h);
        return r.jsx(xe, l({
            type: "checkbox",
            inputProps: l({
                "data-indeterminate": c
            }, I),
            icon: F.cloneElement($, {
                fontSize: (n = $.props.fontSize) != null ? n : k
            }),
            checkedIcon: F.cloneElement(d, {
                fontSize: (a = d.props.fontSize) != null ? a : k
            }),
            ownerState: h,
            ref: t,
            className: N(p.root, y)
        }, R, {
            classes: p
        }))
    }),
    Ne = ye;

function $e(e) {
    return U("MuiFormControlLabel", e)
}
const Be = E("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]),
    S = Be,
    Fe = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"],
    Ie = e => {
        const {
            classes: o,
            disabled: t,
            labelPlacement: n,
            error: a,
            required: s
        } = e, i = {
            root: ["root", t && "disabled", `labelPlacement${g(n)}`, a && "error", s && "required"],
            label: ["label", t && "disabled"],
            asterisk: ["asterisk", a && "error"]
        };
        return H(i, $e, o)
    },
    Re = j("label", {
        name: "MuiFormControlLabel",
        slot: "Root",
        overridesResolver: (e, o) => {
            const {
                ownerState: t
            } = e;
            return [{
                [`& .${S.label}`]: o.label
            }, o.root, o[`labelPlacement${g(t.labelPlacement)}`]]
        }
    })(({
        theme: e,
        ownerState: o
    }) => l({
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${S.disabled}`]: {
            cursor: "default"
        }
    }, o.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11
    }, o.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16
    }, o.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16
    }, {
        [`& .${S.label}`]: {
            [`&.${S.disabled}`]: {
                color: (e.vars || e).palette.text.disabled
            }
        }
    })),
    ze = j("span", {
        name: "MuiFormControlLabel",
        slot: "Asterisk",
        overridesResolver: (e, o) => o.asterisk
    })(({
        theme: e
    }) => ({
        [`&.${S.error}`]: {
            color: (e.vars || e).palette.error.main
        }
    })),
    Le = F.forwardRef(function(o, t) {
        var n, a;
        const s = G({
                props: o,
                name: "MuiFormControlLabel"
            }),
            {
                className: i,
                componentsProps: v = {},
                control: m,
                disabled: c,
                disableTypography: P,
                label: I,
                labelPlacement: k = "end",
                required: y,
                slotProps: R = {}
            } = s,
            $ = T(s, Fe),
            d = J(),
            h = (n = c ? ? m.props.disabled) != null ? n : d == null ? void 0 : d.disabled,
            p = y ? ? m.props.required,
            M = {
                disabled: h,
                required: p
            };
        ["checked", "name", "onChange", "value", "inputRef"].forEach(x => {
            typeof m.props[x] > "u" && typeof s[x] < "u" && (M[x] = s[x])
        });
        const w = te({
                props: s,
                muiFormControl: d,
                states: ["error"]
            }),
            z = l({}, s, {
                disabled: h,
                labelPlacement: k,
                required: p,
                error: w.error
            }),
            b = Ie(z),
            B = (a = R.typography) != null ? a : v.typography;
        let f = I;
        return f != null && f.type !== D && !P && (f = r.jsx(D, l({
            component: "span"
        }, B, {
            className: N(b.label, B == null ? void 0 : B.className),
            children: f
        }))), r.jsxs(Re, l({
            className: N(b.root, i),
            ownerState: z,
            ref: t
        }, $, {
            children: [F.cloneElement(m, M), p ? r.jsxs(se, {
                display: "block",
                children: [f, r.jsxs(ze, {
                    ownerState: z,
                    "aria-hidden": !0,
                    className: b.asterisk,
                    children: [" ", "*"]
                })]
            }) : f]
        }))
    }),
    we = Le;
export {
    we as F, Ne as M
};