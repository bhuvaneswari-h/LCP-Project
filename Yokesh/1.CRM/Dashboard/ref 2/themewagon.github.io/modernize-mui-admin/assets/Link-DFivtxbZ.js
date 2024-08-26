import {
    a as B,
    g as j,
    a8 as y,
    n as M,
    s as _,
    c as x,
    _ as a,
    r as h,
    u as N,
    b as P,
    h as U,
    j as z,
    d as W,
    e as E
} from "./index-DKcgAqZ1.js";
import {
    T as H,
    c as I
} from "./Button-BL-oB6So.js";

function O(o) {
    return j("MuiLink", o)
}
const q = B("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]),
    w = q,
    C = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main"
    },
    G = o => C[o] || o,
    J = ({
        theme: o,
        ownerState: e
    }) => {
        const n = G(e.color),
            s = y(o, `palette.${n}`, !1) || e.color,
            r = y(o, `palette.${n}Channel`);
        return "vars" in o && r ? `rgba(${r} / 0.4)` : M(s, .4)
    },
    K = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"],
    Q = o => {
        const {
            classes: e,
            component: n,
            focusVisible: s,
            underline: r
        } = o, t = {
            root: ["root", `underline${x(r)}`, n === "button" && "button", s && "focusVisible"]
        };
        return E(t, O, e)
    },
    S = _(H, {
        name: "MuiLink",
        slot: "Root",
        overridesResolver: (o, e) => {
            const {
                ownerState: n
            } = o;
            return [e.root, e[`underline${x(n.underline)}`], n.component === "button" && e.button]
        }
    })(({
        theme: o,
        ownerState: e
    }) => a({}, e.underline === "none" && {
        textDecoration: "none"
    }, e.underline === "hover" && {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline"
        }
    }, e.underline === "always" && a({
        textDecoration: "underline"
    }, e.color !== "inherit" && {
        textDecorationColor: J({
            theme: o,
            ownerState: e
        })
    }, {
        "&:hover": {
            textDecorationColor: "inherit"
        }
    }), e.component === "button" && {
        position: "relative",
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
        "&::-moz-focus-inner": {
            borderStyle: "none"
        },
        [`&.${w.focusVisible}`]: {
            outline: "auto"
        }
    })),
    X = h.forwardRef(function(e, n) {
        const s = N({
                props: e,
                name: "MuiLink"
            }),
            {
                className: r,
                color: t = "primary",
                component: c = "a",
                onBlur: u,
                onFocus: d,
                TypographyClasses: g,
                underline: k = "always",
                variant: p = "inherit",
                sx: l
            } = s,
            L = P(s, K),
            {
                isFocusVisibleRef: f,
                onBlur: V,
                onFocus: F,
                ref: R
            } = I(),
            [v, m] = h.useState(!1),
            D = U(n, R),
            T = i => {
                V(i), f.current === !1 && m(!1), u && u(i)
            },
            $ = i => {
                F(i), f.current === !0 && m(!0), d && d(i)
            },
            b = a({}, s, {
                color: t,
                component: c,
                focusVisible: v,
                underline: k,
                variant: p
            }),
            A = Q(b);
        return z.jsx(S, a({
            color: t,
            className: W(A.root, r),
            classes: g,
            component: c,
            onBlur: T,
            onFocus: $,
            ref: D,
            ownerState: b,
            variant: p,
            sx: [...Object.keys(C).includes(t) ? [] : [{
                color: t
            }], ...Array.isArray(l) ? l : [l]]
        }, L))
    }),
    ee = X;
export {
    ee as L
};