﻿/*! Copyright 2015 Baidu Inc. All Rights Reserved. */; (function () {
    var m = void 0, n = !0, q = null, r = !1; function s(a) { return function () { return a } } var u = { t1: +new Date, t2: 0, t3: 0, t4: 0 }, y = ["search!"], ga = 3, ha = "BAIDU_DUP_replacement", ia = "http://dup.baidustatic.com/painter/", z = document, C = {}, ja = 0, ka = 1, D = 2, E = 3, F = 4, la = 5; function ma(a) { var b = na(a), d = b[0], b = b[1]; this.id = a; this.name = b; this.uri = G(b); this.Fa = !b; this.status = ja; d && b && (this.La = J(K(d + "!")) || { load: function () { } }); this.v = [] }
    var Q = window.BAIDU_DUP_require || function (a, b, d) { L(a, function () { for (var c = [], d = 0; d < a.length; d++) c[d] = J(K(a[d])); P(b) && b.apply(window, c) }, d) };
    function L(a, b, d) { var c = a.length; if (0 === c) b(); else for (var k = c, g = 0; g < c; g++) (function (a) { function h() { if (a.status < D) j(); else { for (var h = a.v, c = [], b = 0; b < h.length; b++) { var i = h[b]; i && K(i).status < E && c.push(i) } 0 === c.length ? j() : L(c, j, d) } } function j() { a && a.status < E && (a.status = E); 0 === --k && b() } var c = a.La; c && (c.normalize && (a.name = c.normalize(a.name, G)), c.name2url && (a.uri = c.name2url(a.name))); a.status < D ? c && P(c.load) ? c.load(a.name, Q, function (h) { R(a.id, [], function () { return h }); j() }) : oa(a, h, d) : h() })(K(a[g])) }
    var S = {}, T = {}, U = {}; function oa(a, b, d) { a.status = ka; U[a.id] ? b() : T[a.id] ? S[a.id].push(b) : (T[a.id] = n, S[a.id] = [b], 0 === a.uri.indexOf("http://cb.baidu.com/ecom?") && (u.t2 = +new Date), d ? (b = a.uri, a = z.createElement("script"), a.charset = "utf-8", a.async = n, a.src = b, b = z.getElementsByTagName("head")[0] || z.body, b.insertBefore(a, b.firstChild)) : z.write('<script charset="utf-8" src="' + a.uri + '"><\/script>')) }
    var R = window.BAIDU_DUP_define || function (a, b, d) { 8 < a.length && 0 === a.indexOf("request!") && (u.t3 = +new Date); var c = K(a); c.status < D && (c.v = b, c.factory = d, c.status = c.Fa ? E : D); if (T[a]) { delete T[a]; U[a] = n; b = S[a]; for (delete S[a]; a = b.shift() ;) a() } }; function J(a) { if (!a) return q; if (a.status >= F) return a.Y; if (a.status < E && a.Y === m) return q; a.status = F; for (var b = [], d = 0; d < a.v.length; d++) b[d] = J(K(a.v[d])); var c = d = a.factory; P(d) && (c = d.apply(window, b)); a.status = la; return a.Y = c }
    function G(a) { return /^https?:\/\//.test(a) ? a : ia + a + ".js" } function K(a) { return C[a] || (C[a] = new ma(a)) } function na(a) { var b, d = a ? a.indexOf("!") : -1; -1 < d && (b = a.slice(0, d), a = a.slice(d + 1, a.length)); return [b, a] } function P(a) { return "[object Function]" === Object.prototype.toString.call(a) }
    R("util/lang", [], function () {
        function a(a) { for (var c = {}, b = "Array Boolean Date Error Function Number RegExp String".split(" "), g = 0, f = b.length; g < f; g++) c["[object " + b[g] + "]"] = b[g].toLowerCase(); return a == q ? "null" : c[Object.prototype.toString.call(a)] || "object" } var b = Object.prototype.hasOwnProperty; return {
            B: b, b: a, getAttribute: function (a, c) { for (var b = a, g = c.split(".") ; g.length;) { if (b === m || b === q) return; b = b[g.shift()] } return b }, ja: function (d) {
                if ("object" !== a(d)) return ""; var c = [], k; for (k in d) b.call(d, k) && c.push(k +
                "=" + encodeURIComponent(d[k])); return c.join("&")
            }, l: function (b) { var c = []; switch (a(b)) { case "object": c = Array.prototype.slice.call(b); break; case "array": c = b; break; case "number": case "string": c.push(b) } return c }, unique: function (a) { for (var c = [], b = {}, g = a.length, f = 0; f < g; f++) { var h = a[f]; b[h] || (c[c.length] = h, b[h] = n) } return c }, removeItem: function (a, c) { for (var b = [].slice.call(a), g = b.length - 1; 0 <= g; g--) b[g] === c && b.splice(g, 1); return b }, ga: function () { }
        }
    });
    R("util/browser", ["util/lang"], function (a) {
        var b = {}, d = navigator.userAgent, c = window.RegExp; /msie (\d+\.\d)/i.test(d) && (b.s = document.documentMode || +c.$1); /opera\/(\d+\.\d)/i.test(d) && (b.opera = +c.$1); /firefox\/(\d+\.\d)/i.test(d) && (b.Ya = +c.$1); /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(d) && !/chrome/i.test(d) && (b.ib = +(c.$1 || c.$2)); if (/chrome\/(\d+\.\d)/i.test(d)) { b.X = +c.$1; var k; try { k = "scoped" in document.createElement("style") } catch (g) { k = r } k && (b.Qa = n) } try {
            /(\d+\.\d)/.test(a.getAttribute(window,
            "external.max_version")) && (b.cb = +c.$1)
        } catch (f) { } a = "Android iPad iPhone Linux Macintosh Windows".split(" "); c = ""; for (k = 0; k < a.length && !(c = a[k], d.match(RegExp(c.toLowerCase(), "i"))) ; k++); b.platform = c; return b
    });
    R("util/dom", ["util/lang"], function (a) {
        function b(a) { try { if (a && "object" === typeof a && a.document && "setInterval" in a) return n } catch (h) { } return r } function d(a, h) { h = 2 === arguments.length ? h : a.parent; return a != h || !b(a) } function c(a, h) { for (var h = 2 === arguments.length ? h : a.parent, j = 0; 10 > j++ && d(a, h) ;) { var c; try { c = !!a.parent.location.toString() } catch (b) { c = r } if (!c) return n; a = a.parent } return 10 <= j } function k(a) { return 9 === a.nodeType ? a : a.ownerDocument || a.document } function g(b, h) {
            1 === arguments.length && "number" === a.b(arguments[0]) &&
            (h = arguments[0], b = m); for (var h = h || 10, j = window, i = 0; i++ < h && d(j) && !c(j) && (!b || !b(j)) ;) j = j.parent; return j
        } return {
            c: function (c, h) { return "string" === a.b(c) && 0 < c.length ? (h || window).document.getElementById(c) : c.nodeName && (1 === c.nodeType || 9 === c.nodeType) ? c : q }, Ga: b, t: d, C: c, va: k, $: function () { var a = g().document.title; 60 < a.length && (a = a.substr(0, 60)); return a }, A: function (a) { a = k(a); return a.parentWindow || a.defaultView || q }, j: function (a) { a = b(a) ? a.document : k(a); return "CSS1Compat" === a.compatMode ? a.documentElement : a.body },
            M: g
        }
    });
    R("util/style", ["util/lang", "util/dom", "util/browser"], function (a, b, d) {
        function c(a, j) { if (!a) return ""; var c = "", c = -1 < j.indexOf("-") ? j.replace(/[-][^-]{1}/g, function (a) { return a.charAt(1).toUpperCase() }) : j.replace(/[A-Z]{1}/g, function (a) { return "-" + a.charAt(0).toLowerCase() }), e = b.A(a); if (e && e.getComputedStyle) { if (e = e.getComputedStyle(a, q)) return e.getPropertyValue(j) || e.getPropertyValue(c) } else if (a.currentStyle) return e = a.currentStyle, e[j] || e[c]; return "" } function k(a) {
            var j = { top: 0, left: 0 }; if (a === b.j(a)) return j;
            var d = b.va(a), e = d.body, d = d.documentElement; a.getBoundingClientRect && (a = a.getBoundingClientRect(), j.left = Math.floor(a.left) + Math.max(d.scrollLeft, e.scrollLeft), j.top = Math.floor(a.top) + Math.max(d.scrollTop, e.scrollTop), j.left -= d.clientLeft, j.top -= d.clientTop, a = c(e, "borderLeftWidth"), e = c(e, "borderTopWidth"), a = parseInt(a, 10), e = parseInt(e, 10), j.left -= isNaN(a) ? 2 : a, j.top -= isNaN(e) ? 2 : e); return j
        } function g(a, j) {
            var b = c(a, "margin" + j).toString().toLowerCase().replace("px", "").replace("auto", "0"); return parseInt(b,
            10) || 0
        } function f(c) { for (var j = b.A(c), i = 100; c && c.tagName;) { var e = 100; if (d.s) { if (5 < d.s) try { e = parseInt(a.getAttribute(c, "filters.alpha.opacity"), 10) || 100 } catch (g) { } i = i > e ? e : i } else { try { e = 100 * (j.getComputedStyle(c, q).opacity || 1) } catch (l) { } i *= e / 100 } c = c.parentNode } return 0 === i ? 0 : i || 100 } return {
            bb: c, ab: k, r: function (a) { var c = b.c(a); if (!c) return r; a = k(c); c = b.A(c); if (!c) return a; for (var d = 0; c !== c.parent && 10 > d++ && !b.C(c) && c.frameElement;) { var e = k(c.frameElement); a.left += e.left; a.top += e.top; c = c.parent } return a },
            Za: g, O: function (a, c) { var d = b.c(a), e = d.offsetWidth; c && (e += g(d, "Left") + g(d, "Right")); return e }, N: function (a, c) { var d = b.c(a), e = d.offsetHeight; c && (e += g(d, "Top") + g(d, "Bottom")); return e }, $a: f, xa: function (a) { for (var c = b.c(a), a = b.A(c), c = f(c), d = 0; 10 > d++ && b.t(a) && !b.C(a) ;) { var e = a.frameElement ? f(a.frameElement) : 100, c = c * (e / 100); a = a.parent } return c }, da: function (a) { try { var c = b.j(a || window).scrollWidth; if (c || 0 === c) return c } catch (d) { } return -1 }, ca: function (a) { try { var c = b.j(a || window).scrollHeight; if (c || 0 === c) return c } catch (d) { } return -1 },
            p: function (a) { try { var c = b.j(a || window).clientWidth; if (c || 0 === c) return c } catch (d) { } return -1 }, o: function (a) { try { var c = b.j(a || window).clientHeight; if (c || 0 === c) return c } catch (d) { } return -1 }, Ba: function (a) { var c = b.j(a); return a.pageYOffset || c.scrollTop }, Aa: function (a) { var c = b.j(a); return a.pageXOffset || c.scrollLeft }
        }
    });
    R("util/url", ["util/dom"], function (a) { return { ba: function (a, d, c) { a = a.match(RegExp("(\\?|&|#)" + d + "=([^&#]*)(&|#)?")); d = ""; a && (d = a[2]); c && (d = decodeURIComponent(d)); return d }, P: function (b) { var b = a.M(b), d = ""; a.t(b) && (d = b.document.referrer); return d = d || b.location.href } } });
    R("util/event", ["util/dom"], function (a) { return { bind: function (b, d, c) { if (b = a.Ga(b) ? b : a.c(b)) if (b.addEventListener) b.addEventListener(d, c, r); else if (b.attachEvent) b.attachEvent("on" + d, c); else { var k = b["on" + d]; b["on" + d] = function () { k && k.apply(this, arguments); c.apply(this, arguments) } } return b } } });
    R("util/cookie", ["util/lang"], function (a) { return { get: function (a, d) { var c = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie); return c ? d ? decodeURIComponent(c[2]) : c[2] : "" }, set: function (b, d, c, k) { var g = c.expires; "number" === a.b(g) && (g = new Date, g.setTime(+g + c.expires)); document.cookie = b + "=" + (k ? encodeURIComponent(d) : d) + (c.path ? "; path=" + c.path : "") + (g ? "; expires=" + g.toGMTString() : "") + (c.domain ? "; domain=" + c.domain : "") } } });
    R("util/data", ["util/lang", "util/dom"], function (a, b) {
        function d(c, b, d) { var d = d ? h : g, f; if ("string" === a.b(c)) { for (c = c.split(".") ; c.length;) f = c.shift(), d[f] = c.length ? d[f] !== m ? d[f] : {} : b, d = d[f]; f = b } return f } function c(c, b) { var d = b ? h : g, f; "string" === a.b(c) && (f = a.getAttribute(d, c)); return f } function k(a, b, e) { if (!a || !b) return r; var h = c(a) || {}; switch (e) { case "+1": e = h[b] || 0; h[b] = ++e; break; default: h[b] = parseInt(e, 10) } d(a, h); return h[b] } var g = {}, f = b.M(), h = f.BAIDU_DUP_info || (f.BAIDU_DUP_info = {}); return {
            m: function (a,
            c) { var b = window; return b[a] ? b[a] : b[a] = c }, q: function (a) { var c = window, b = c[a]; c[a] = m; return b }, f: d, d: c, ia: function (c, b) { var d = b ? h : g; switch (a.b(c)) { case "string": for (var f = c.split(".") ; f.length;) { var l = f.shift(); if (f.length && d[l] !== m) d = d[l]; else return delete d[l], n } } return r }, V: function (a, c, b) { return b ? (this.e = this.e || {}, this.e[b] = this.e[b] || 0, !this.e[b] && document.getElementById(b) && (this.e[b] = 1), this.e[b]) : k(a, c, "+1") }, fb: function (a, c, b) { return k(a, c, b) }, count: k, ua: function (a, b, d) {
                return d ? (this.e =
                this.e || {}, this.e[d] = this.e[d] || 0, document.getElementById(d) || delete this.e[d], this.e[d] || 0) : !a || !b ? r : (c(a) || {})[b] || 0
            }, Pa: function (a, b) { if (!a || !b) return r; var h = c("pageConfig") || {}; h[a] = b; d("pageConfig", h); return n }, ta: function (a) { return !a ? r : (c("pageConfig") || {})[a] }
        }
    });
    R("util/storage", [], function () {
        function a(a, c, b) { if (d) try { d.setItem(a, b ? encodeURIComponent(c) : c) } catch (h) { } } function b(a, c) { if (d) { var b = d.getItem(a); return c && b ? decodeURIComponent(b) : b } return q } var d; try { d = window.localStorage } catch (c) { } return {
            qa: function () { var c = r; try { d.removeItem("BAIDU_DUP_storage_available"), a("BAIDU_DUP_storage_available", "1"), b("BAIDU_DUP_storage_available") && (c = n), d.removeItem("BAIDU_DUP_storage_available") } catch (g) { } return c }, setItem: a, getItem: b, ma: function (c, g, f) {
                if (d) {
                    g =
                    f ? encodeURIComponent(g) : g; f = b(c) || ""; try { a(c, f + ((f && "|") + g)) } catch (h) { }
                }
            }, la: function (c, g, f) { if (d) if (g = f ? encodeURIComponent(g) : g, f = b(c) || "", f = f.replace(RegExp(g + "\\|?", "g"), "").replace(/\|$/, "")) try { a(c, f) } catch (h) { } else d.removeItem(c) }
        }
    });
    R("util/log", ["util/lang", "util/event", "util/storage"], function (a, b, d) {
        function c(a, c) { var b = new Image, d = "BAIDU_DUP_log_" + Math.floor(2147483648 * Math.random()).toString(36); window[d] = b; b.onload = b.onerror = b.onabort = function () { b.onload = b.onerror = b.onabort = q; b = window[d] = q; c && c(k, a, n) }; b.src = a } var k = "BAIDU_DUP_log_storage"; return {
            Ha: c, gb: function () { var a = d.getItem(k); if (a) for (var a = a.split("|"), b = 0, h = a.length; b < h; b++) c(decodeURIComponent(a[b]), d.la) }, H: function (g) {
                var g = "object" === a.b(g) ? g : {}, f = g.url ||
                "http://cbjslog.baidu.com/log", h = g.option || "now", g = a.ja(g.data || {}), f = f + ((0 <= f.indexOf("?") ? "&" : "?") + g + (g ? "&" : "") + "rdm=" + +new Date); switch (h) { case "now": c(f); break; case "block": break; default: d.ma(k, f, n), b.bind(window, "unload", function () { c(f, d.la) }) }
            }
        }
    }); R("util", "util/lang,util/dom,util/style,util/url,util/event,util/cookie,util/data,util/storage,util/log,util/browser".split(","), function (a, b, d, c, k, g, f, h, j, i) { return { lang: a, a: b, style: d, url: c, event: k, cookie: g, data: f, jb: h, log: j, J: i } });
    R("biz", ["util", "slot"], function (a, b) {
        function d(c, b) { var d = /^[0-9a-zA-Z]+$/; return !c || !d.test(c) || !b ? [] : b = "array" === a.lang.b(b) ? b : Array.prototype.slice.call(arguments, 1) } function c(c, b, d) {
            if (!b || !b.length) return r; var d = d || { U: r, fa: r, ha: r }, i = d.fa ? a.data.d(k) : {}, e = d.U ? g : k, i = d.ha ? {} : a.data.d(e) || i, d = {}, o; for (o in i) a.lang.B.call(i, o) && (d[o] = "array" === a.lang.b(i[o]) ? i[o].slice() : i[o]); var i = d[c] || [], l = b.length; for (o = 0; o < l; o++) {
                var p = b[o]; "string" === typeof p && (p = encodeURIComponent(p), 100 >= p.length && (i[i.length] =
                p))
            } if (!i.length) return r; d[c] = a.lang.unique(i); a.data.f(e, d); return n
        } var k = "bizOrientations", g = "bizUrgentOrientations"; return {
            W: function (a, b) { var j = d.apply(this, arguments); return c(a, j) }, na: function (a, b) { var j = d.apply(this, arguments); return c(a, j, { U: n, fa: n }) }, Sa: function (a, b) { var j = d.apply(this, arguments); return c(a, j, { U: n, ha: n }) }, ya: function (c) {
                var c = Math.max(0, Math.min(c || 500, 500)), b = [], d = a.data.d(g) || a.data.d(k) || {}; if ("object" === a.lang.b(d)) for (var i in d) a.lang.B.call(d, i) && (b[b.length] = i +
                "=" + d[i].join(",")); a.data.f(g, m); b.sort(function (a, c) { return a.length - c.length }); d = ""; i = b.length; for (var e = 0; e < i && !(d.length + b[e].length >= c) ; e++) d += (e ? "&" : "") + b[e]; return d
            }, oa: function (a, c) { b.Ta(a); b.pa(c) }
        }
    });
    R("preview", ["biz", "util"], function (a, b) {
        function d() { function a(c) { var d = b.url.ba; return d(k, "baidu_clb_preview_" + c) || d(k, "baidu_dup_preview_" + c) } var k = b.url.P(), g = a("sid"), f = a("mid"), h = a("vc"), j = +a("ts"), i = q; 3E4 >= +new Date - j && (i = { ka: g, Ja: f, Va: h }); d = function () { return i }; return i } return {
            Ca: function (a) { var b = [], g = d(); g && a == g.ka && (b.push("mid=" + g.Ja), b.push("sid=" + g.Va)); return b.join("&") }, d: function () { return d() }, ea: function (a) {
                var d = r; a ? /cpro_template=/gi.test(a) && (b.data.f("#unionPreviewSwitch",
                n), d = n) : d = !!b.data.d("#unionPreviewSwitch"); return d
            }, Da: function () { var a = b.data.d("#unionPreviewData"); return a ? "prev=" + encodeURIComponent(a) + "&pt=union" : "" }, Ua: function (a) { b.data.f("#unionPreviewData", a) }, Xa: function () { b.data.ia("#unionPreviewSwitch"); b.data.ia("#unionPreviewData") }
        }
    });
    R("slot", ["util"], function (a) {
        function b() { for (var a = { response: {}, holder: "", stack: [], errors: [], status: {} }, c = j.length - 1; 0 <= c; c--) a.status[j[c]] = 0; return a } function d(a, c) { var b = r; "fillAsync" === c && (b = n); o[a] && -1 !== o[a].stack.join(" ").toLowerCase().indexOf("async") && (b = n); return b } function c(a, c) { if (!a) return ""; var b = t + a; c && (b += "_" + c); return b } function k(a, c, b) {
            if (!a || !c) return r; b === m && (b = +new Date); if (o[a]) {
                o[a].status[c] = b; if ("finish" === c) {
                    var c = {}, b = r, d; for (d in p) if (d && p.hasOwnProperty(d) && p[d] &&
                    0 === ("" + a).indexOf("" + d) && o[a].response) { var b = o[a].response.data, h = b._h || b.sh || b.height || 0; c[a] = 0 === (b._w || b.sw || b.width || 0) || 0 === h ? r : n; b = n } b && l.apply(window, [c])
                } return n
            } return r
        } function g(a, c) { f(a, "errors", c) } function f(c, b, d) { c && b && d && (c = o[c]) && "array" === a.lang.b(c[b]) && c[b].push(d) } function h(a) { return !a ? o : o[a] || r } var j = "add,create,request,response,render,finish".split(","), i = [], e = {}, o = {}, l, p = {}, t = "BAIDU_DUP_wrapper_"; return {
            add: function () {
                var c = { ids: [], preloadIds: [] }, d = a.lang.l(arguments);
                if (!d.length) return c; for (var d = d.join(",").split(","), l = [], p = [], j = d.length, g = 0; g < j; g++) { var f = d[g]; if (e.hasOwnProperty(f)) { var t = f + "_" + e[f], V = h(t).stack || []; if ("preload" === V[V.length - 1]) { c.preloadIds.push(t); continue } e[f] += 1 } else e[f] = 0; f = f + "_" + e[f]; o[f] = new b; k(f, "add"); p.push(f); l.push(f) } i = i.concat(p); c.ids = l; return c
            }, create: function (b, l, p) {
                if (!b || !l) return r; var h = c(b), e = n; if (a.a.c(h)) return o[b].holder = h, e; if (d(b, l)) {
                    p = p || ""; o[b].holder = p; p = a.a.c(p); try {
                        p && (p.innerHTML = '<div id="' + h + '"></div>',
                        o[b].holder = h)
                    } catch (f) { g(b, "Failed to insert wrapper"), e = r }
                } else if (document.write('<div id="' + h + '"></div>'), !a.a.c(h)) try { var j = document.getElementsByTagName("script"), t = j[j.length - 1]; if (t) { var i = t.parentNode; if (i) { var W = document.createElement("div"); W.id = c(b, "b"); i.insertBefore(W, t) } } } catch (qa) { g(b, "Failed to create backup wrapper") } k(b, "create"); return e
            }, sa: d, wa: function (a) { return d(a) ? "async" : "sync" }, aa: function (b) { return !b ? "" : (b = a.a.c(o[b].holder) || a.a.c(c(b)) || a.a.c(c(b, "b"))) && b.id || "" },
            z: h, T: function (a, c) { if (!a || !c) return r; return o[a] ? (o[a].response = c, k(a, "response"), n) : r }, u: k, k: g, I: function (a, c) { f(a, "stack", c) }, L: function (c) { c = a.lang.l(c); if (!c.length) return r; var b = [], d = {}, l; for (l = 0; l < i.length; l++) d[i[l]] = l + 1; for (l = 0; l < c.length; l++) { var p = d["" + c[l]]; p === m && (p = 0); b.push(p) } return b }, Ta: function (a) { l = a }, pa: function (a) { p[a] = n }, r: function (b) {
                b = a.lang.l(b); if (!b.length) return ["-1x-1"]; for (var d = [], l = 0; l < b.length; l++) {
                    var p = b[l], h; try {
                        var e = a.a.c(c(p)) || a.a.c(c(p, "b")); if (e) {
                            var f =
                            a.style.r(e); f && (h = [f.top, f.left])
                        }
                    } catch (j) { g(p, "Unable to get ps") } h = h ? h : [-1, -1]; d.push(h.join("x"))
                } return d
            }
        }
    }); R("api", ["slot", "util"], function (a, b) { return { getDai: a.L, getSlots: a.z, getFillType: a.wa, getFillWrapperId: a.aa, setStatus: a.u, addErrorItem: a.k, addStackItem: a.I, bind: b.event.bind, getType: b.lang.b, sendLog: b.log.H, putInfo: b.data.f, getInfo: b.data.d, defineOnce: b.data.m, addCount: b.data.V, getCount: b.data.ua, getConfig: b.data.ta, getDocumentTitle: b.a.$ } });
    R("param", ["slot", "preview", "biz", "util"], function (a, b, d, c) {
        function k(a, c) { for (var c = c || 0, b = [], d = 0, h = a.length; d < h; d++) b.push(a[d].split("_")[c]); return b.join(",") } function g(a) {
            a = a || window.document.domain; 0 === a.indexOf("www.") && (a = a.substr(4)); "." === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)); var c = a.match(RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:com|cn|net|org|gov|info|la|cc|co|jp|us|hk|tv|me|biz|in|be|io|tk|cm|li|ru|ws|hn|fm|tw|ma|in|vn|name|mx|gd|im)(?:\\.(?:cn|jp|tw|ru|th))?)$", "i")); return c ?
            c[0] : a
        } var f = window, h = f.document, j = f.screen, i = f.navigator, e = +new Date, o = [{ key: "di", value: function (a) { return k(a.id) } }, { key: "dcb", value: s("BAIDU_DUP_define") }, { key: "dtm", value: s("BAIDU_DUP2_SETJSONADSLOT") }, { key: "dbv", value: function () { var a = c.J; return a.Qa ? "1" : a.X ? "2" : "0" } }, { key: "dci", value: function (c) { for (var b = "-1", d = { fill: "0", fillOnePiece: "1", fillAsync: "2", preload: "3" }, h = 0; h < c.id.length; h++) { var e = a.z(c.id[h]); if (e) { var e = e.stack, f = e.length; if (1 <= f) { b = d[e[f - 1]]; break } } } return b } }, {
            key: "dri", value: function (a) {
                return k(a.id,
                1)
            }
        }, { key: "dis", value: function () { var a = 0; c.a.t(f) && (a += 1); c.a.C(f, f.top) && (a += 2); var b = c.style.p(), d = c.style.o(); if (40 > b || 10 > d) a += 4; return a } }, { key: "dai", value: function (c) { return a.L(c.id).join(",") } }, { key: "dds", value: function () { var a = c.data.d("dds"); return c.lang.ja(a) } }, { key: "drs", value: function () { var a = { uninitialized: 0, loading: 1, loaded: 2, interactive: 3, complete: 4 }; try { return a[h.readyState] } catch (c) { return -1 } } }, { key: "dvi", value: s("1442225175") }, {
            key: "ltu", n: n, value: function () {
                var a = c.url.P(function (a) {
                    var b =
                    c.style.p(a), a = c.style.o(a); return 400 < b && 120 < a ? n : r
                }); 0 < a.indexOf("cpro_prev") && (a = a.slice(0, a.indexOf("?"))); return a
            }
        }, { key: "liu", n: n, value: function () { return c.a.t(f) ? h.URL : "" } }, { key: "ltr", n: n, value: function () { var a = c.a.M(), b = ""; try { b = a.opener ? a.opener.document.location.href : "" } catch (d) { } b = b || a.document.referrer; return 0 <= b.indexOf("http://pos.baidu.com") || 1E3 <= b.length ? "" : b } }, {
            key: "lcr", n: n, value: function (a) {
                if (a && 0 !== a.id.length && -1 < a.id[0].indexOf("u")) return ""; var a = h.referrer, b = a.replace(/^https?:\/\//,
                ""), b = b.split("/")[0], b = b.split(":")[0], b = g(b), d = g(), e = c.cookie.get("BAIDU_DUP_lcr"); if (e && d === b) return e; return d !== b ? (c.cookie.set("BAIDU_DUP_lcr", a, { domain: d }), a) : ""
            }
        }, { key: "ps", value: function (c) { return a.r(c.id).join(",") } }, { key: "psr", value: function () { return [j.width, j.height].join("x") } }, { key: "par", value: function () { return [j.availWidth, j.availHeight].join("x") } }, { key: "pcs", value: function () { return [c.style.p(), c.style.o()].join("x") } }, { key: "pss", value: function () { return [c.style.da(), c.style.ca()].join("x") } },
        { key: "pis", value: function () { return (c.a.t(f) ? [c.style.p(), c.style.o()] : [-1, -1]).join("x") } }, {
            key: "cfv", value: function () {
                var a = 0; if (45 <= c.J.X) return 0; if (i.plugins && i.mimeTypes.length) { var b = i.plugins["Shockwave Flash"]; b && b.description && (a = b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0") } if (0 === a && (f.ActiveXObject || f.hasOwnProperty("ActiveXObject")) && !f.opera) for (b = 30; 2 <= b; b--) try {
                    var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + b); d && (a = d.GetVariable("$version").replace(/WIN/g,
                    "").replace(/,/g, "."))
                } catch (h) { } return parseInt(a, 10)
            }
        }, { key: "ccd", value: function () { return j.colorDepth || 0 } }, { key: "chi", value: function () { return f.history.length || 0 } }, { key: "cja", value: function () { return i.javaEnabled().toString() } }, { key: "cpl", value: function () { return i.plugins.length || 0 } }, { key: "cmi", value: function () { return i.mimeTypes.length || 0 } }, { key: "cce", value: function () { return i.cookieEnabled || 0 } }, {
            key: "col", value: function () {
                return (i.language || i.browserLanguage || i.systemLanguage).replace(/[^a-zA-Z0-9\-]/g,
                "")
            }
        }, { key: "cec", value: function () { return (h.characterSet ? h.characterSet : h.charset) || "" } }, { key: "cdo", value: function () { var a = window.orientation; a === m && (a = -1); return a } }, { key: "tsr", value: function () { var a = 0, c = +new Date; e && (a = c - e); return a } }, { key: "tlm", value: function () { return Date.parse(h.lastModified) / 1E3 } }, { key: "tcn", value: function () { return Math.round(+new Date / 1E3) } }, {
            key: "tpr", value: function (a) {
                var a = a && a.max_age ? a.max_age : 24E4, c = (new Date).getTime(), b, d; try { b = !!window.top.location.toString() } catch (h) {
                    b =
                    r
                } d = b ? window.top : window; (b = d.BAIDU_DUP2_pageFirstRequestTime) ? c - b >= a && (b = d.BAIDU_DUP2_pageFirstRequestTime = c) : b = d.BAIDU_DUP2_pageFirstRequestTime = c; return b || ""
            }
        }, { key: "_preview", value: function (a) { return b.Ca(k(a.id)) } }, { key: "dpt", value: function () { var a = "none"; b.ea() && (a = "union"); return a } }, {
            key: "coa", n: n, value: function (a) {
                var a = a.id, b = { cpro_w: "rsi0", cpro_h: "rsi1" }, a = a[0].split("_")[0], d = {}, h = r, e = c.data.d("#novaOpenApi"); if (e && a && e[a]) {
                    var h = n, e = e[a], f; for (f in e) f && e.hasOwnProperty(f) && "undefined" !==
                    typeof e[f] && (d[f] = encodeURIComponent(e[f]).toString())
                } h && (d.c01 = 1); var h = f = "", j; for (j in d) j && d.hasOwnProperty(j) && "undefined" !== typeof d[j] && (h = d[j], "cpro_h" === j && (c.data.f(a + "_setCoaHeight", n), h = parseInt(h, 10) || 125), "cpro_w" === j && (c.data.f(a + "_setCoaWidth", n), h = parseInt(h, 10) || 125), f += "&" + (b[j] ? b[j] : j) + "=" + h); return f = f.slice(1)
            }
        }, { key: "dpr", value: function () { return window.devicePixelRatio || 1 } }, { key: "ti", n: n, value: function () { return c.a.$() } }, { key: "_unionpreview", value: function () { return b.Da() } },
        { key: "baidu_id", value: s("") }, { key: "_orientation", value: function () { return d.ya() } }]; return { get: function (a, b) { for (var c = [], d = 0, h = o.length; d < h; d++) { var e; try { var f = o[d], j = f.key, g = f.n, i = f.value, i = "function" === typeof i ? i(a) : i, i = g ? encodeURIComponent(i) : i; if (b && b === j) return i; e = j && 0 !== j.indexOf("_") ? j + "=" + i : i } catch (k) { e = encodeURIComponent(k.toString()), e = e.slice(0, 100) } e && c.push(e) } c = c.join("&"); return c.slice(0, 2048) } }
    });
    R("request", ["param", "slot", "util"], function (a, b, d) { R("request!", [], { name2url: function (b) { return "http://cb.baidu.com/ecom?" + a.get({ id: b.split(",") }) } }); R("batch!", [], { name2url: function (b) { return "http://cb.baidu.com/ecom?" + a.get({ id: b.split(",") }) } }); return { send: function (a, k, g) { if (!a || !k || g === m) return r; var f = []; if ("array" !== d.lang.b(a)) b.u(a, "request"), f = ["request!" + a]; else { for (f = 0; f < a.length; f++) b.u(a[f], "request"); f = 1 === a.length ? ["request!" + a[0]] : ["batch!" + a.join(",")] } Q(f, k, g); return n } } });
    R("control", ["slot", "request", "preview", "util"], function (a, b, d, c) {
        function k(b, d, f) {
            var e = d.deps, g = d.data; g && g.hasOwnProperty("_html") && "baidujson_patch" === g._html.tn && (e = ["union/patch"]); var k = a.aa(b); f && !k ? a.k(b, "HolderNotFound") : e && (0 > e[0].indexOf("clb/") && a.u(b, "finish"), Q(e, function (d) {
                if ("object" === c.lang.b(g)) {
                    g.id = b; if (d.hasOwnProperty("validate")) try { var f = d.validate(g); f !== n && c.log.H({ data: { type: f || "ResponseError", errorPainter: e[0], id: b, slotType: g._stype, materialType: g._isMlt, html: !!g._html } }) } catch (j) {
                        a.k(b,
                        "validateException")
                    } if (d.hasOwnProperty("render")) try { a.u(b, "render"), d.render(g, k) } catch (i) { a.k(b, "RenderException") } else a.k(b, "RenderNotFound")
                } else a.k(b, "ResponseFormatError")
            }, f))
        } function g(d, f, g) { if (!d) return r; var g = g || "", e = a.add(d), d = e.ids[0] || e.preloadIds[0]; c.data.f("timestampWathcer" + d, u); if (!d) return r; var o = a.sa(d, f); a.I(d, f); a.create(d, f, g); e.ids.length ? b.send(d, function (b) { a.T(d, b); k(d, b, o) }, o) : e.preloadIds.length && (f = a.z(d).response, k(d, f, o)); return n } function f(b) {
            for (var c = 0,
            d = b + "_" + c; 0 !== a.L([d])[0];) { var e = a.z(d); if ((e = e && e.response) && 0 === e.deps[0].indexOf("clb/")) { var f = e.data, e = f._isMlt; (0 === e && "" !== f._html || e === r && f._fxp) && a.u(d, "finish", 0) } d = b + "_" + ++c } if (b !== m && (b = (c = window.BAIDU_CLB_SLOTS_MAP) && c[b], b !== m && (e = b._isMlt, 0 === e && "" !== b._html || e === r && b._fxp))) b._done = r
        } window.BAIDU_CLB_prepareMoveSlot = f; return {
            fill: function (a) { return g(a, "fill") }, K: function (a, b) { return g(a, "fillAsync", b) }, Ma: function () {
                function f(d) {
                    b.send(d, function (b) {
                        if ("array" === c.lang.b(b)) {
                            if (b &&
                            b.length === d.length) for (var e = 0; e < d.length; e++) a.T(d[e], b[e])
                        } else "object" === c.lang.b(b) && b && 1 === d.length && a.T(d[0], b)
                    }, r)
                } var g = c.lang.l(arguments), g = c.lang.unique(g), i = d.d(); if (i) for (var e = 0, k = g.length; e < k; e++) g[e] === i.ka && (g.splice(e, 1), e--); for (g = a.add(g).ids; g.length;) { i = g.splice(0, 16); for (e = 0; e < i.length; e++) a.I(i[e], "preload"); f(i) }
            }, Na: f
        }
    });
    R("global", ["control", "biz", "util", "preview"], function (a, b, d, c) {
        function k(a) { a = a.split("."); return i[a[0]] + a[1] } function g() {
            var a = j.BAIDU_DUP; if (!("object" === d.lang.b(a) && a.push)) {
                if ("array" === d.lang.b(a) && a.length) for (var b = 0; b < a.length; b++) f(a[b]); j.BAIDU_DUP = m; d.data.m("BAIDU_DUP", { push: f }); d.data.m("BAIDU_DUP_proxy", function (a) {
                    if (a) return function () {
                        try { return f([a].concat(d.lang.l(arguments))) } catch (b) {
                            0 < ga-- && d.log.H({
                                data: {
                                    type: "ExecuteException", errorName: a, args: d.lang.l(arguments).join("|"),
                                    isQuirksMode: "CSS1Compat" !== document.compatMode, documentMode: document.documentMode || "", readyState: document.readyState || "", message: b.message
                                }
                            })
                        }
                    }
                }); for (b in o) b && d.lang.B.call(o, b) && d.data.m(b, j.BAIDU_DUP_proxy(b)); h()
            }
        } function f(a) { if ("array" !== d.lang.b(a)) return r; var b = a.shift(); d.data.V("apiCount", b); return (b = o[b] || l[b] || r) && b.apply(q, a) } function h() {
            function a(b) { for (var c = 0, d = y.length; c < d; c++) if (0 === b.indexOf(y[c])) return n; return r } d.data.m("BAIDU_DUP_require", function (b) {
                for (var c = 0, d = b.length; c <
                d; c++) if (a(b[c])) return; Q.apply(q, arguments)
            }); d.data.m("BAIDU_DUP_define", function (b, c) { for (var d = 0, e = c.length; d < e; d++) if (a(c[d])) return; R.apply(q, arguments) })
        } var j = window, i = { clb: "BAIDU_CLB_", dan: "BAIDU_DAN_", nova: "cpro", dup: "BAIDU_DUP_" }, e = [{ h: ["clb.fillSlot", "clb.singleFillSlot", "clb.fillSlotWithSize"], i: ["fill"], g: a.fill }, { h: ["clb.fillSlotAsync"], i: ["fillAsync"], g: a.K }, { h: ["clb.preloadSlots"], i: ["preload"], g: a.Ma }, { h: ["clb.prepareMoveSlot"], i: ["prepareMove"], g: a.Na }, {
            h: ["clb.addOrientation"],
            i: ["addOrientation"], g: b.W
        }, { h: ["clb.addOrientationOnce"], i: ["addOrientationOnce"], g: b.na }, { h: ["clb.setOrientationOnce"], i: ["setOrientationOnce"], g: b.Sa }, { h: ["clb.setConfig"], i: ["putConfig"], g: d.data.Pa }, { h: ["clb.addSlot", "clb.enableAllSlots", "clb.SETHTMLSLOT"], i: [], g: d.lang.ga }, { h: ["dup.addSlotStatusCallback"], i: [], g: b.oa }], e = function (a) { for (var b = {}, c = {}, d = 0; d < a.length; d++) { for (var e = a[d], f = e.h, g = e.i, e = e.g; f.length;) b[k(f.shift())] = e; for (; g.length;) c[g.shift()] = e } return { Ka: b, Oa: c } }(e), o = e.Ka, l =
        e.Oa; return {
            Ea: function () {
                var e = d.data.q(k("clb.ORIENTATIONS")); if (e) for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && b.W(f, e[f]); d.data.f("#novaOpenApi", d.data.q("cproStyleApi")); var h = d.data.q("cproArray"); if (h) for (var e = 0, j = h.length; e < j; e++) h[e] && h[e].id && a.K(h[e].id, "cpro_" + h[e].id); if (h = d.data.q("cpro_mobile_slot")) {
                    e = 0; for (j = h.length; e < j; e++) {
                        var i = h[e], o = i.id, l = d.data.d("#novaOpenApi") || {}; l[o] || (l[o] = {}); for (f in i) f && "id" !== f && i.hasOwnProperty(f) && (l[o][f] = i[f]); d.data.f("#novaOpenApi",
                        l); h[e] && h[e].id && a.K(h[e].id, "cpro_" + h[e].id)
                    }
                } if (f = d.data.q("cpro_id")) c.ea(f) && (c.Ua(f), f = "u0"), a.fill(f); a.fill(d.data.q(k("clb.SLOT_ID"))); g()
            }
        }
    }); R("logService", ["util/lang", "util/event"], function (a, b) { b.bind(window, "load", function () { Q(["detect"], a.ga, n) }) });
    R("fingerprint", "util/log,util/storage,util/event,util/browser,util/data,param".split(","), function (a, b, d, c, k, g) {
        var f = window, h = r; c.s ? 6 <= c.s && (h = n) : b.qa() && (h = n); 0 <= f.location.href.indexOf("wa.kuwo.cn") || (h && (k.d("isFPLoaded", n) === n ? h = r : k.f("isFPLoaded", n, n)), h && d.bind(f, "load", function () {
            var a = f.document, b = a.body, c = "http://pos.baidu.com/wh/o.htm?ltr=" + g.get({}, "ltr"), d = a.createElement("div"); d.id = "BAIDU_DUP_fp_wrapper"; d.style.position = "absolute"; d.style.left = "-1px"; d.style.bottom = "-1px"; d.style.zIndex =
            0; d.style.width = 0; d.style.height = 0; d.style.overflow = "hidden"; d.style.visibility = "hidden"; d.style.display = "none"; a = a.createElement("iframe"); a.id = "BAIDU_DUP_fp_iframe"; a.src = c; a.style.width = 0; a.style.height = 0; a.style.visibility = "hidden"; a.style.display = "none"; try { d.insertBefore(a, d.firstChild), b && b.insertBefore(d, b.firstChild) } catch (h) { }
        }), 1E3 > 1E5 * Math.random() && a.Ha("http://release.baidu.com/coverage"))
    });
    R("replacement", ["util"], function (a) { function b() { var d = a.url.P(), c = a.url.ba(d, ha, n); b = function () { return c }; return c } return { za: function () { return b() } } }); Q(["replacement"], function (a) { (a = a.za()) ? Q([a]) : (Q(["global"], function (a) { a.Ea() }), Q(["logService"]), Q(["fingerprint"])) });
    window.BAIDU_DUP_define && window.BAIDU_DUP_define("detect", ["api"], function (a) {
        function b(b) { b.url = ""; b.host = window.location.hostname; b.from = "DUP"; a.sendLog({ data: b, eb: "now" }) } try {
            setTimeout(function () {
                var c = a.getSlots(), d; for (d in c) {
                    var g = c[d], f = g.response, h = r; if ("object" !== a.getType(f)) h = n; else { var h = n, j; for (j in f) if (Object.prototype.hasOwnProperty.call(f, j)) { h = r; break } } var i = g.status, g = g.stack; h ? b({ type: "preload" === g[0] ? "preloadFail" : "loadFail", id: d }) : !i.render && !i.finish && b({
                        type: "renderFail",
                        id: d, error: "preload" === g[0] ? "PreloadNotFilled" : "NotFilled", empty: !(!f.data || !f.data._html)
                    })
                }
            }, 0)
        } catch (d) { }
    });
    window.BAIDU_DUP_define && window.BAIDU_DUP_define("viewWatch", ["util", "param"], function (a, b) {
        function d() {
            var b = +new Date, d = 500; x === h && M && (d = b - M); M = b; for (var j in l) if (o.call(l, j)) {
                x === g && (x = f); var i = l[j]; i.G && (i.R += d); i.F && (i.Q += d); i.S = b - i.timestamp; if (x === h) H && (i.w += b - i.D); else if (72E5 <= i.S) c(r); else {
                    var k = i = m, p = m; for (p in l) if (o.call(l, p)) {
                        var w = l[p]; if (H) {
                            var v = a.a.c(w.Wa); if (!v) break; try {
                                var t = e.p(B), A = e.o(B), I = e.r(v); w.top = I.top; w.left = I.left; var X = e.Ba(B), Y = e.Aa(B), Z = e.O(v), $ = e.N(v), aa = I.top -
                                X + 0.35 * $, ba = I.left - Y + 0.35 * Z; w.G = 0 < aa && aa < A && 0 < ba && ba < t; var pa = Z * $, ca = e.r(v), N = ca.top - X, O = ca.left - Y, da = e.O(v), ea = e.N(v), fa = v = 0, v = 0 > N ? Math.max(N + ea, 0) : Math.min(ea, Math.max(A - N, 0)), fa = 0 > O ? Math.max(O + da, 0) : Math.min(da, Math.max(t - O, 0)); i = fa; k = v; w.F = k * i > 0.5 * pa
                            } catch (ra) { w.G = r, w.F = r }
                        } else w.G = r, w.F = r
                    }
                }
            }
        } function c(b) {
            clearInterval(t); var c = document.domain.toLowerCase(); if (!(-1 < c.indexOf("autohome.com.cn") || -1 < c.indexOf("sina.com.cn") || -1 < c.indexOf("pconline.com.cn") || -1 < c.indexOf("pcauto.com.cn") || -1 < c.indexOf("pclady.com.cn") ||
            -1 < c.indexOf("pcgames.com.cn") || -1 < c.indexOf("pcbaby.com.cn") || -1 < c.indexOf("pchouse.com.cn") || -1 < c.indexOf("xcar.com.cn"))) if (x !== f) x = h; else { x = h; d(); var c = r, e; for (e in l) if (e && l.hasOwnProperty(e) && l[e]) { var g = l[e]; "block" === g.Ia && (c = n); g.total = p; a.log.H({ url: k(g) }) } if (b && c) if (b = +new Date, j.s) for (c = b + 200; c > +new Date;); else { e = 1E5; for (c = 0; c < e; c++); c = +new Date; e = Math.min(200 * e / (c - b), 1E7); for (c = 0; c < e; c++); } }
        } function k(a) {
            var c = ["tu=" + a.id, "word=" + b.get(m, "ltu"), "if=" + b.get(m, "dis"), "aw=" + a.width, "ah=" +
            a.height, "pt=" + a.S, "it=" + a.R, "vt=" + a.Q, "csp=" + A, "bcl=" + a.ra, "pof=" + a.Ra, "top=" + a.top, "left=" + a.left, "total=" + a.total]; return a.url + (a.Z ? a.Z + "&" : "") + c.join("&")
        } var g = 1, f = 2, h = 3, j = a.J, i = a.event.bind, e = a.style, o = a.lang.B, l = [], p = 0, t = 0, x = g, H = n, M = 0, A = [1E4 < screen.availWidth ? 0 : screen.availWidth, 1E4 < screen.availHeight ? 0 : screen.availHeight].join(), B = window; a.a.t(window) && !a.a.C(window) && (B = window.top); t = setInterval(d, 500); (function () {
            function a() {
                var b = +new Date, c; for (c in l) if (o.call(l, c)) {
                    var d = l[c]; d.w +=
                    b - d.D; d.D = b
                } H = r
            } function b() { var a = +new Date, c; for (c in l) o.call(l, c) && (l[c].D = a); H = n } j.s ? (i(document, "focusin", b), i(document, "focusout", a)) : (i(window, "focus", b), i(window, "blur", a))
        })(); i(window, "beforeunload", c); return {
            register: function (b) {
                var c = +new Date, d = b.id, f = b.wrapperId, g = b.url || "http://eclick.baidu.com/a.js?", h = b.logType || "storage", b = b.extra || ""; if (f && !l[f]) {
                    var i = a.a.c(f); if (i) {
                        var j = e.r(i); l[f] = {
                            id: d, Wa: f, url: g, Ia: h, Z: b, timestamp: c, R: 0, G: r, Q: 0, F: r, S: 0, w: 0, D: c, top: j.top, left: j.left, hb: A,
                            opacity: e.xa(i), ra: [e.p(), e.o()].join(), Ra: [e.da(), e.ca()].join(), width: e.O(i), height: e.N(i)
                        }; p++
                    }
                }
            }, getWatchCount: function () { return p }
        }
    });
})();