import {
    g as L,
    a as W,
    s as g,
    r as u,
    u as x,
    b as m,
    _ as e,
    j as p,
    d as b,
    e as C,
    n as I
} from "./index-DKcgAqZ1.js";
import {
    P as M,
    D as N
} from "./TextField-CGEuCW0K.js";

function j(i) {
    return L("MuiCard", i)
}
W("MuiCard", ["root"]);
const U = ["className", "raised"],
    _ = i => {
        const {
            classes: t
        } = i;
        return C({
            root: ["root"]
        }, j, t)
    },
    B = g(M, {
        name: "MuiCard",
        slot: "Root",
        overridesResolver: (i, t) => t.root
    })(() => ({
        overflow: "hidden"
    })),
    P = u.forwardRef(function(t, r) {
        const a = x({
                props: t,
                name: "MuiCard"
            }),
            {
                className: s,
                raised: l = !1
            } = a,
            o = m(a, U),
            n = e({}, a, {
                raised: l
            }),
            c = _(n);
        return p.jsx(B, e({
            className: b(c.root, s),
            elevation: l ? 8 : void 0,
            ref: r,
            ownerState: n
        }, o))
    }),
    q = P,
    T = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"],
    V = i => {
        const {
            absolute: t,
            children: r,
            classes: a,
            flexItem: s,
            light: l,
            orientation: o,
            textAlign: n,
            variant: c
        } = i;
        return C({
            root: ["root", t && "absolute", c, l && "light", o === "vertical" && "vertical", s && "flexItem", r && "withChildren", r && o === "vertical" && "withChildrenVertical", n === "right" && o !== "vertical" && "textAlignRight", n === "left" && o !== "vertical" && "textAlignLeft"],
            wrapper: ["wrapper", o === "vertical" && "wrapperVertical"]
        }, N, a)
    },
    k = g("div", {
        name: "MuiDivider",
        slot: "Root",
        overridesResolver: (i, t) => {
            const {
                ownerState: r
            } = i;
            return [t.root, r.absolute && t.absolute, t[r.variant], r.light && t.light, r.orientation === "vertical" && t.vertical, r.flexItem && t.flexItem, r.children && t.withChildren, r.children && r.orientation === "vertical" && t.withChildrenVertical, r.textAlign === "right" && r.orientation !== "vertical" && t.textAlignRight, r.textAlign === "left" && r.orientation !== "vertical" && t.textAlignLeft]
        }
    })(({
        theme: i,
        ownerState: t
    }) => e({
        margin: 0,
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: (i.vars || i).palette.divider,
        borderBottomWidth: "thin"
    }, t.absolute && {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
    }, t.light && {
        borderColor: i.vars ? `rgba(${i.vars.palette.dividerChannel} / 0.08)` : I(i.palette.divider, .08)
    }, t.variant === "inset" && {
        marginLeft: 72
    }, t.variant === "middle" && t.orientation === "horizontal" && {
        marginLeft: i.spacing(2),
        marginRight: i.spacing(2)
    }, t.variant === "middle" && t.orientation === "vertical" && {
        marginTop: i.spacing(1),
        marginBottom: i.spacing(1)
    }, t.orientation === "vertical" && {
        height: "100%",
        borderBottomWidth: 0,
        borderRightWidth: "thin"
    }, t.flexItem && {
        alignSelf: "stretch",
        height: "auto"
    }), ({
        ownerState: i
    }) => e({}, i.children && {
        display: "flex",
        whiteSpace: "nowrap",
        textAlign: "center",
        border: 0,
        "&::before, &::after": {
            content: '""',
            alignSelf: "center"
        }
    }), ({
        theme: i,
        ownerState: t
    }) => e({}, t.children && t.orientation !== "vertical" && {
        "&::before, &::after": {
            width: "100%",
            borderTop: `thin solid ${(i.vars||i).palette.divider}`
        }
    }), ({
        theme: i,
        ownerState: t
    }) => e({}, t.children && t.orientation === "vertical" && {
        flexDirection: "column",
        "&::before, &::after": {
            height: "100%",
            borderLeft: `thin solid ${(i.vars||i).palette.divider}`
        }
    }), ({
        ownerState: i
    }) => e({}, i.textAlign === "right" && i.orientation !== "vertical" && {
        "&::before": {
            width: "90%"
        },
        "&::after": {
            width: "10%"
        }
    }, i.textAlign === "left" && i.orientation !== "vertical" && {
        "&::before": {
            width: "10%"
        },
        "&::after": {
            width: "90%"
        }
    })),
    z = g("span", {
        name: "MuiDivider",
        slot: "Wrapper",
        overridesResolver: (i, t) => {
            const {
                ownerState: r
            } = i;
            return [t.wrapper, r.orientation === "vertical" && t.wrapperVertical]
        }
    })(({
        theme: i,
        ownerState: t
    }) => e({
        display: "inline-block",
        paddingLeft: `calc(${i.spacing(1)} * 1.2)`,
        paddingRight: `calc(${i.spacing(1)} * 1.2)`
    }, t.orientation === "vertical" && {
        paddingTop: `calc(${i.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${i.spacing(1)} * 1.2)`
    })),
    R = u.forwardRef(function(t, r) {
        const a = x({
                props: t,
                name: "MuiDivider"
            }),
            {
                absolute: s = !1,
                children: l,
                className: o,
                component: n = l ? "div" : "hr",
                flexItem: c = !1,
                light: v = !1,
                orientation: w = "horizontal",
                role: h = n !== "hr" ? "separator" : void 0,
                textAlign: A = "center",
                variant: D = "fullWidth"
            } = a,
            $ = m(a, T),
            d = e({}, a, {
                absolute: s,
                component: n,
                flexItem: c,
                light: v,
                orientation: w,
                role: h,
                textAlign: A,
                variant: D
            }),
            f = V(d);
        return p.jsx(k, e({
            as: n,
            className: b(f.root, o),
            role: h,
            ref: r,
            ownerState: d
        }, $, {
            children: l ? p.jsx(z, {
                className: f.wrapper,
                ownerState: d,
                children: l
            }) : null
        }))
    });
R.muiSkipListHighlight = !0;
const y = R;
export {
    q as C, y as D
};