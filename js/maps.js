function initMap() {
	const element = document.getElementById('map');
	const options = {
		zoom: 5,
		center: {lat: 50.447914, lng: 30.522192}
	};
	const myMap = new google.maps.Map(element, options);
	const marker = new google.maps.Marker({
		position: {lat: 50.447914, lng: 30.522192},
		map: myMap
	});

	const InfoWindow = new google.maps.InfoWindow({
		content: '<h1>Our barbershop locate here!</h1>'
	});
  marker.addListener('click', () => {
    InfoWindow.open(myMap, marker);
  });
}
$('.center').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});
// - Gallery Works
!(function (e, t) {
	typeof module === 'object' && typeof module.exports === 'object' ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) {
			throw new Error('jQuery requires a window with a document');
		} return t(e);
	} : t(e);
})(typeof window !== 'undefined' ? window : this, (p, e) => {
	function s(e) {
		let t = e.length,
			n = Q.type(e); return n !== 'function' && !Q.isWindow(e) && (!(e.nodeType !== 1 || !t) || (n === 'array' || t === 0 || typeof t === 'number' && t > 0 && t - 1 in e));
	} function t(e, n, r) {
		if (Q.isFunction(n)) {
			return Q.grep(e, (e, t) => {
				return Boolean(n.call(e, t, e)) !== r;
			});
		} if (n.nodeType) {
			return Q.grep(e, e => {
				return e === n !== r;
			});
		} if (typeof n === 'string') {
			if (se.test(n)) {
				return Q.filter(n, e, r);
			} n = Q.filter(n, e);
		} return Q.grep(e, e => {
			return B.call(n, e) >= 0 !== r;
		});
	} function n(e, t) {
		for (;(e = e[t]) && e.nodeType !== 1;) {

		} return e;
	} function d(e) {
		const n = pe[e] = {}; return Q.each(e.match(he) || [], (e, t) => {
			n[t] = !0;
		}), n;
	} function r() {
J.removeEventListener('DOMContentLoaded', r, !1), p.removeEventListener('load', r, !1), Q.ready();
	} function i() {
Object.defineProperty(this.cache = {}, 0, {get() {
	return {};
}}), this.expando = Q.expando + Math.random();
	} function u(e, t, n) {
		let r; if (n === undefined && e.nodeType === 1) {
			if (r = 'data-' + t.replace(we, '-$1').toLowerCase(), typeof (n = e.getAttribute(r)) === 'string') {
				try {
					n = n === 'true' || n !== 'false' && (n === 'null' ? null : String(Number(n)) === n ? Number(n) : ve.test(n) ? Q.parseJSON(n) : n);
				} catch (i) {}ye.set(e, t, n);
			} else {
				n = undefined;
			}
		} return n;
	} function o() {
		return !0;
	} function c() {
		return !1;
	} function a() {
		try {
			return J.activeElement;
		} catch (e) {}
	} function l(e, t) {
		return Q.nodeName(e, 'table') && Q.nodeName(t.nodeType !== 11 ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
	} function g(e) {
		return e.type = (e.getAttribute('type') !== null) + '/' + e.type, e;
	} function m(e) {
		const t = He.exec(e.type); return t ? e.type = t[1] : e.removeAttribute('type'), e;
	} function y(e, t) {
		for (let n = 0, r = e.length; n < r; n++) {
me.set(e[n], 'globalEval', !t || me.get(t[n], 'globalEval'));
		}
	} function f(e, t) {
		let n, r, i, o, a, s, u, c; if (t.nodeType === 1) {
			if (me.hasData(e) && (o = me.access(e), a = me.set(t, o), c = o.events)) {
				for (i in delete a.handle, a.events = {}, c) {
					for (n = 0, r = c[i].length; n < r; n++) {
Q.event.add(t, i, c[i][n]);
					}
				}
			}ye.hasData(e) && (s = ye.access(e), u = Q.extend({}, s), ye.set(t, u));
		}
	} function v(e, t) {
		const n = e.getElementsByTagName ? e.getElementsByTagName(t || '*') : e.querySelectorAll ? e.querySelectorAll(t || '*') : []; return t === undefined || t && Q.nodeName(e, t) ? Q.merge([e], n) : n;
	} function h(e, t) {
		const n = t.nodeName.toLowerCase(); n === 'input' && De.test(e.type) ? t.checked = e.checked : n !== 'input' && n !== 'textarea' || (t.defaultValue = e.defaultValue);
	} function w(e, t) {
		let n,
			r = Q(t.createElement(e)).appendTo(t.body),
			i = p.getDefaultComputedStyle && (n = p.getDefaultComputedStyle(r[0])) ? n.display : Q.css(r[0], 'display'); return r.detach(), i;
	} function x(e) {
		let t = J,
			n = qe[e]; return n || ((n = w(e, t)) !== 'none' && n || ((t = (We = (We || Q('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = w(e, t), We.detach()), qe[e] = n), n;
	} function b(e, t, n) {
		let r, i, o, a,
			s = e.style; return (n = n || $e(e)) && (a = n.getPropertyValue(t) || n[t]), n && (a !== '' || Q.contains(e.ownerDocument, e) || (a = Q.style(e, t)), Re.test(a) && Ge.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), a !== undefined ? String(a) : a;
	} function _(e, t) {
		return {get() {
			if (!e()) {
				return (this.get = t).apply(this, arguments);
			} delete this.get;
		}};
	} function k(e, t) {
		if (t in e) {
			return t;
		} for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ze.length; i--;) {
			if ((t = Ze[i] + n) in e) {
				return t;
			}
		} return r;
	} function T(e, t, n) {
		const r = Be.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
	} function D(e, t, n, r, i) {
		for (var o = n === (r ? 'border' : 'content') ? 4 : t === 'width' ? 1 : 0, a = 0; o < 4; o += 2) {
			n === 'margin' && (a += Q.css(e, n + ke[o], !0, i)), r ? (n === 'content' && (a -= Q.css(e, 'padding' + ke[o], !0, i)), n !== 'margin' && (a -= Q.css(e, 'border' + ke[o] + 'Width', !0, i))) : (a += Q.css(e, 'padding' + ke[o], !0, i), n !== 'padding' && (a += Q.css(e, 'border' + ke[o] + 'Width', !0, i)));
		} return a;
	} function C(e, t, n) {
		let r = !0,
			i = t === 'width' ? e.offsetWidth : e.offsetHeight,
			o = $e(e),
			a = Q.css(e, 'boxSizing', !1, o) === 'border-box'; if (i <= 0 || i == null) {
			if (((i = b(e, t, o)) < 0 || i == null) && (i = e.style[t]), Re.test(i)) {
				return i;
			} r = a && (Z.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
		} return i + D(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
	} function S(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
			(r = e[a]).style && (o[a] = me.get(r, 'olddisplay'), n = r.style.display, t ? (o[a] || n !== 'none' || (r.style.display = ''), r.style.display === '' && Te(r) && (o[a] = me.access(r, 'olddisplay', x(r.nodeName)))) : (i = Te(r), n === 'none' && i || me.set(r, 'olddisplay', i ? n : Q.css(r, 'display'))));
		} for (a = 0; a < s; a++) {
			(r = e[a]).style && (t && r.style.display !== 'none' && r.style.display !== '' || (r.style.display = t ? o[a] || '' : 'none'));
		} return e;
	} function M(e, t, n, r, i) {
		return new M.prototype.init(e, t, n, r, i);
	} function N() {
		return setTimeout(() => {
			Je = undefined;
		}), Je = Q.now();
	} function j(e, t) {
		let n,
			r = 0,
			i = {height: e}; for (t = t ? 1 : 0; r < 4; r += 2 - t) {
			i['margin' + (n = ke[r])] = i['padding' + n] = e;
		} return t && (i.opacity = i.width = e), i;
	} function E(e, t, n) {
		for (var r, i = (at[t] || []).concat(at['*']), o = 0, a = i.length; o < a; o++) {
			if (r = i[o].call(n, t, e)) {
				return r;
			}
		}
	} function A(t, e, n) {
		let r, i, o, a, s, u, c,
			l = this,
			f = {},
			d = t.style,
			h = t.nodeType && Te(t),
			p = me.get(t, 'fxshow'); for (r in n.queue || ((s = Q._queueHooks(t, 'fx')).unqueued == null && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
			s.unqueued || u();
		}), s.unqueued++, l.always(() => {
l.always(() => {
	s.unqueued--, Q.queue(t, 'fx').length || s.empty.fire();
});
		})), t.nodeType === 1 && ('height' in e || 'width' in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], ((c = Q.css(t, 'display')) === 'none' ? me.get(t, 'olddisplay') || x(t.nodeName) : c) === 'inline' && Q.css(t, 'float') === 'none' && (d.display = 'inline-block')), n.overflow && (d.overflow = 'hidden', l.always(() => {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
		})), e) {
			if (i = e[r], nt.exec(i)) {
				if (delete e[r], o = o || i === 'toggle', i === (h ? 'hide' : 'show')) {
					if (i !== 'show' || !p || p[r] === undefined) {
						continue;
					} h = !0;
				}f[r] = p && p[r] || Q.style(t, r);
			} else {
				c = undefined;
			}
		} if (Q.isEmptyObject(f)) {
			(c === 'none' ? x(t.nodeName) : c) === 'inline' && (d.display = c);
		} else {
			for (r in p ? 'hidden' in p && (h = p.hidden) : p = me.access(t, 'fxshow', {}), o && (p.hidden = !h), h ? Q(t).show() : l.done(() => {
Q(t).hide();
			}), l.done(() => {
				let e; for (e in me.remove(t, 'fxshow'), f) {
Q.style(t, e, f[e]);
				}
			}), f) {
				a = E(h ? p[r] : 0, r, l), r in p || (p[r] = a.start, h && (a.end = a.start, a.start = r === 'width' || r === 'height' ? 1 : 0));
			}
		}
	} function O(e, t) {
		let n, r, i, o, a; for (n in e) {
			if (i = t[r = Q.camelCase(n)], o = e[n], Q.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Q.cssHooks[r]) && 'expand' in a) {
				for (n in o = a.expand(o), delete e[r], o) {
					n in e || (e[n] = o[n], t[n] = i);
				}
			} else {
				t[r] = i;
			}
		}
	} function Y(o, e, t) {
		var n, a,
			r = 0,
			i = ot.length,
			s = Q.Deferred().always(() => {
				delete u.elem;
			}),
			u = function () {
				if (a) {
					return !1;
				} for (var e = Je || N(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), r = 0, i = c.tweens.length; r < i; r++) {
c.tweens[r].run(n);
				} return s.notifyWith(o, [c, n, t]), n < 1 && i ? t : (s.resolveWith(o, [c]), !1);
			},
			c = s.promise({elem: o, props: Q.extend({}, e), opts: Q.extend(!0, {specialEasing: {}}, t), originalProperties: e, originalOptions: t, startTime: Je || N(), duration: t.duration, tweens: [], createTween(e, t) {
				const n = Q.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(n), n;
			}, stop(e) {
				let t = 0,
					n = e ? c.tweens.length : 0; if (a) {
					return this;
				} for (a = !0; t < n; t++) {
c.tweens[t].run(1);
				} return e ? s.resolveWith(o, [c, e]) : s.rejectWith(o, [c, e]), this;
			}}),
			l = c.props; for (O(l, c.opts.specialEasing); r < i; r++) {
			if (n = ot[r].call(c, o, l, c.opts)) {
				return n;
			}
		} return Q.map(l, E, c), Q.isFunction(c.opts.start) && c.opts.start.call(o, c), Q.fx.timer(Q.extend(u, {elem: o, anim: c, queue: c.opts.queue})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
	} function F(o) {
		return function (e, t) {
			typeof e !== 'string' && (t = e, e = '*'); let n,
				r = 0,
				i = e.toLowerCase().match(he) || []; if (Q.isFunction(t)) {
				for (;n = i[r++];) {
					n[0] === '+' ? (n = n.slice(1) || '*', (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
				}
			}
		};
	} function L(t, i, o, a) {
		function s(e) {
			let r; return u[e] = !0, Q.each(t[e] || [], (e, t) => {
				const n = t(i, o, a); return typeof n !== 'string' || c || u[n] ? c ? !(r = n) : void 0 : (i.dataTypes.unshift(n), s(n), !1);
			}), r;
		} var u = {},
			c = t === Dt; return s(i.dataTypes[0]) || !u['*'] && s('*');
	} function H(e, t) {
		let n, r,
			i = Q.ajaxSettings.flatOptions || {}; for (n in t) {
			t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		} return r && Q.extend(!0, e, r), e;
	} function I(e, t, n) {
		for (var r, i, o, a, s = e.contents, u = e.dataTypes; u[0] === '*';) {
u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader('Content-Type'));
		} if (r) {
			for (i in s) {
				if (s[i] && s[i].test(r)) {
u.unshift(i); break;
				}
			}
		} if (u[0] in n) {
			o = u[0];
		} else {
			for (i in n) {
				if (!u[0] || e.converters[i + ' ' + u[0]]) {
					o = i; break;
				}a || (a = i);
			}o = o || a;
		} if (o) {
			return o !== u[0] && u.unshift(o), n[o];
		}
	} function P(e, t, n, r) {
		let i, o, a, s, u,
			c = {},
			l = e.dataTypes.slice(); if (l[1]) {
			for (a in e.converters) {
				c[a.toLowerCase()] = e.converters[a];
			}
		} for (o = l.shift(); o;) {
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) {
				if (o === '*') {
					o = u;
				} else if (u !== '*' && u !== o) {
					if (!(a = c[u + ' ' + o] || c['* ' + o])) {
						for (i in c) {
							if ((s = i.split(' '))[1] === o && (a = c[u + ' ' + s[0]] || c['* ' + s[0]])) {
								!0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1])); break;
							}
						}
					} if (!0 !== a) {
						if (a && e.throws) {
							t = a(t);
						} else {
							try {
								t = a(t);
							} catch (f) {
								return {state: 'parsererror', error: a ? f : 'No conversion from ' + u + ' to ' + o};
							}
						}
					}
				}
			}
		} return {state: 'success', data: t};
	} function W(n, e, r, i) {
		let t; if (Q.isArray(e)) {
Q.each(e, (e, t) => {
	r || Mt.test(n) ? i(n, t) : W(n + '[' + (typeof t === 'object' ? e : '') + ']', t, r, i);
});
		} else if (r || Q.type(e) !== 'object') {
i(n, e);
		} else {
			for (t in e) {
W(n + '[' + t + ']', e[t], r, i);
			}
		}
	} function q(e) {
		return Q.isWindow(e) ? e : e.nodeType === 9 && e.defaultView;
	} var G = [],
		R = G.slice,
		$ = G.concat,
		z = G.push,
		B = G.indexOf,
		U = {},
		V = U.toString,
		X = U.hasOwnProperty,
		Z = {},
		J = p.document,
		K = '2.1.1',
		Q = function (e, t) {
			return new Q.fn.init(e, t);
		},
		ee = /^[\s\uFEFF\u00A0]+|[\s\uFEFF\u00A0]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function (e, t) {
			return t.toUpperCase();
		}; Q.fn = Q.prototype = {jquery: K, constructor: Q, selector: '', length: 0, toArray() {
		return R.call(this);
	}, get(e) {
		return e != null ? e < 0 ? this[e + this.length] : this[e] : R.call(this);
	}, pushStack(e) {
		const t = Q.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t;
	}, each(e, t) {
		return Q.each(this, e, t);
	}, map(n) {
		return this.pushStack(Q.map(this, (e, t) => {
			return n.call(e, t, e);
		}));
	}, slice() {
		return this.pushStack(R.apply(this, arguments));
	}, first() {
		return this.eq(0);
	}, last() {
		return this.eq(-1);
	}, eq(e) {
		let t = this.length,
			n = Number(e) + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
	}, end() {
		return this.prevObject || this.constructor(null);
	}, push: z, sort: G.sort, splice: G.splice}, Q.extend = Q.fn.extend = function (e) {
		let t, n, r, i, o, a,
			s = e || {},
			u = 1,
			c = arguments.length,
			l = !1; for (typeof s === 'boolean' && (l = s, s = arguments[u] || {}, u++), typeof s === 'object' || Q.isFunction(s) || (s = {}), u === c && (s = this, u--); u < c; u++) {
			if ((t = arguments[u]) != null) {
				for (n in t) {
					r = s[n], s !== (i = t[n]) && (l && i && (Q.isPlainObject(i) || (o = Q.isArray(i))) ? (o ? (o = !1, a = r && Q.isArray(r) ? r : []) : a = r && Q.isPlainObject(r) ? r : {}, s[n] = Q.extend(l, a, i)) : i !== undefined && (s[n] = i));
				}
			}
		} return s;
	}, Q.extend({expando: 'jQuery' + (K + Math.random()).replace(/\D/g, ''), isReady: !0, error(e) {
		throw new Error(e);
	}, noop() {}, isFunction(e) {
		return Q.type(e) === 'function';
	}, isArray: Array.isArray, isWindow(e) {
		return e != null && e === e.window;
	}, isNumeric(e) {
		return !Q.isArray(e) && e - parseFloat(e) >= 0;
	}, isPlainObject(e) {
		return Q.type(e) === 'object' && !e.nodeType && !Q.isWindow(e) && !(e.constructor && !X.call(e.constructor.prototype, 'isPrototypeOf'));
	}, isEmptyObject(e) {
		let t; for (t in e) {
			return !1;
		} return !0;
	}, type(e) {
		return e == null ? String(e) : typeof e === 'object' || typeof e === 'function' ? U[V.call(e)] || 'object' : typeof e;
	}, globalEval(e) {
		let t,
			n = eval; (e = Q.trim(e)) && (e.indexOf('use strict') === 1 ? ((t = J.createElement('script')).text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e));
	}, camelCase(e) {
		return e.replace(te, 'ms-').replace(ne, re);
	}, nodeName(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}, each(e, t, n) {
		let r = 0,
			i = e.length,
			o = s(e); if (n) {
			if (o) {
				for (;r < i && !1 !== t.apply(e[r], n); r++) {

				}
			} else {
				for (r in e) {
					if (!1 === t.apply(e[r], n)) {
						break;
					}
				}
			}
		} else if (o) {
			for (;r < i && !1 !== t.call(e[r], r, e[r]); r++) {

			}
		} else {
			for (r in e) {
				if (!1 === t.call(e[r], r, e[r])) {
					break;
				}
			}
		} return e;
	}, trim(e) {
		return e == null ? '' : (String(e)).replace(ee, '');
	}, makeArray(e, t) {
		const n = t || []; return e != null && (s(new Object(e)) ? Q.merge(n, typeof e === 'string' ? [e] : e) : z.call(n, e)), n;
	}, inArray(e, t, n) {
		return t == null ? -1 : B.call(t, e, n);
	}, merge(e, t) {
		for (var n = Number(t.length), r = 0, i = e.length; r < n; r++) {
			e[i++] = t[r];
		} return e.length = i, e;
	}, grep(e, t, n) {
		for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
			!t(e[i], i) !== a && r.push(e[i]);
		} return r;
	}, map(e, t, n) {
		let r,
			i = 0,
			o = e.length,
			a = []; if (s(e)) {
			for (;i < o; i++) {
				(r = t(e[i], i, n)) != null && a.push(r);
			}
		} else {
			for (i in e) {
				(r = t(e[i], i, n)) != null && a.push(r);
			}
		} return $.apply([], a);
	}, guid: 1, proxy(e, t) {
		let n, r, i; return typeof t === 'string' && (n = e[t], t = e, e = n), Q.isFunction(e) ? (r = R.call(arguments, 2), (i = function () {
			return e.apply(t || this, r.concat(R.call(arguments)));
		}).guid = e.guid = e.guid || Q.guid++, i) : undefined;
	}, now: Date.now, support: Z}), Q.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), (e, t) => {
		U['[object ' + t + ']'] = t.toLowerCase();
	}); const ie = (function (n) {
		function x(e, t, n, r) {
			let i, o, a, s, u, c, l, f, d, h; if ((t ? t.ownerDocument || t : W) !== A && E(t), n = n || [], !e || typeof e !== 'string') {
				return n;
			} if ((s = (t = t || A).nodeType) !== 1 && s !== 9) {
				return [];
			} if (Y && !r) {
				if (i = ve.exec(e)) {
					if (a = i[1]) {
						if (s === 9) {
							if (!(o = t.getElementById(a)) || !o.parentNode) {
								return n;
							} if (o.id === a) {
								return n.push(o), n;
							}
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) {
							return n.push(o), n;
						}
					} else {
						if (i[2]) {
							return Q.apply(n, t.getElementsByTagName(e)), n;
						} if ((a = i[3]) && y.getElementsByClassName && t.getElementsByClassName) {
							return Q.apply(n, t.getElementsByClassName(a)), n;
						}
					}
				} if (y.qsa && (!F || !F.test(e))) {
					if (f = l = P, d = t, h = s === 9 && e, s === 1 && t.nodeName.toLowerCase() !== 'object') {
						for (c = D(e), (l = t.getAttribute('id')) ? f = l.replace(xe, '\\$&') : t.setAttribute('id', f), f = '[id=\'' + f + '\'] ', u = c.length; u--;) {
							c[u] = f + m(c[u]);
						}d = we.test(e) && g(t.parentNode) || t, h = c.join(',');
					} if (h) {
						try {
							return Q.apply(n, d.querySelectorAll(h)), n;
						} catch (p) {} finally {
							l || t.removeAttribute('id');
						}
					}
				}
			} return S(e.replace(ue, '$1'), t, n, r);
		} function e() {
			function n(e, t) {
				return r.push(e + ' ') > _.cacheLength && delete n[r.shift()], n[e + ' '] = t;
			} var r = []; return n;
		} function u(e) {
			return e[P] = !0, e;
		} function r(e) {
			let t = A.createElement('div'); try {
				return Boolean(e(t));
			} catch (n) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null;
			}
		} function t(e, t) {
			for (let n = e.split('|'), r = e.length; r--;) {
				_.attrHandle[n[r]] = t;
			}
		} function c(e, t) {
			let n = t && e,
				r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || V) - (~e.sourceIndex || V); if (r) {
				return r;
			} if (n) {
				for (;n = n.nextSibling;) {
					if (n === t) {
						return -1;
					}
				}
			} return e ? 1 : -1;
		} function i(t) {
			return function (e) {
				return e.nodeName.toLowerCase() === 'input' && e.type === t;
			};
		} function o(n) {
			return function (e) {
				const t = e.nodeName.toLowerCase(); return (t === 'input' || t === 'button') && e.type === n;
			};
		} function a(a) {
			return u(o => {
				return o = Number(o), u((e, t) => {
					for (var n, r = a([], e.length, o), i = r.length; i--;) {
						e[n = r[i]] && (e[n] = !(t[n] = e[n]));
					}
				});
			});
		} function g(e) {
			return e && typeof e.getElementsByTagName !== U && e;
		} function s() {} function m(e) {
			for (var t = 0, n = e.length, r = ''; t < n; t++) {
				r += e[t].value;
			} return r;
		} function f(a, e, t) {
			let s = e.dir,
				u = t && s === 'parentNode',
				c = G++; return e.first ? function (e, t, n) {
				for (;e = e[s];) {
					if (e.nodeType === 1 || u) {
						return a(e, t, n);
					}
				}
			} : function (e, t, n) {
				let r, i,
					o = [q, c]; if (n) {
					for (;e = e[s];) {
						if ((e.nodeType === 1 || u) && a(e, t, n)) {
							return !0;
						}
					}
				} else {
					for (;e = e[s];) {
						if (e.nodeType === 1 || u) {
							if ((r = (i = e[P] || (e[P] = {}))[s]) && r[0] === q && r[1] === c) {
								return o[2] = r[2];
							} if ((i[s] = o)[2] = a(e, t, n)) {
								return !0;
							}
						}
					}
				}
			};
		} function d(i) {
			return i.length > 1 ? function (e, t, n) {
				for (let r = i.length; r--;) {
					if (!i[r](e, t, n)) {
						return !1;
					}
				} return !0;
			} : i[0];
		} function v(e, t, n) {
			for (let r = 0, i = t.length; r < i; r++) {
x(e, t[r], n);
			} return n;
		} function b(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, c = t != null; s < u; s++) {
				(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
			} return a;
		} function w(h, p, g, m, y, e) {
			return m && !m[P] && (m = w(m)), y && !y[P] && (y = w(y, e)), u((e, t, n, r) => {
				let i, o, a,
					s = [],
					u = [],
					c = t.length,
					l = e || v(p || '*', n.nodeType ? [n] : n, []),
					f = !h || !e && p ? l : b(l, s, h, n, r),
					d = g ? y || (e ? h : c || m) ? [] : t : f; if (g && g(f, d, n, r), m) {
					for (i = b(d, u), m(i, [], n, r), o = i.length; o--;) {
						(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
					}
				} if (e) {
					if (y || h) {
						if (y) {
							for (i = [], o = d.length; o--;) {
								(a = d[o]) && i.push(f[o] = a);
							}y(null, d = [], i, r);
						} for (o = d.length; o--;) {
							(a = d[o]) && (i = y ? te.call(e, a) : s[o]) > -1 && (e[i] = !(t[i] = a));
						}
					}
				} else {
					d = b(d === t ? d.splice(c, d.length) : d), y ? y(null, t, d, r) : Q.apply(t, d);
				}
			});
		} function h(e) {
			for (var r, t, n, i = e.length, o = _.relative[e[0].type], a = o || _.relative[' '], s = o ? 1 : 0, u = f(e => {
				return e === r;
			}, a, !0), c = f(e => {
				return te.call(r, e) > -1;
			}, a, !0), l = [function (e, t, n) {
					return !o && (n || t !== M) || ((r = t).nodeType ? u(e, t, n) : c(e, t, n));
				}]; s < i; s++) {
				if (t = _.relative[e[s].type]) {
					l = [f(d(l), t)];
				} else {
					if ((t = _.filter[e[s].type].apply(null, e[s].matches))[P]) {
						for (n = ++s; n < i && !_.relative[e[n].type]; n++) {

						} return w(s > 1 && d(l), s > 1 && m(e.slice(0, s - 1).concat({value: e[s - 2].type === ' ' ? '*' : ''})).replace(ue, '$1'), t, s < n && h(e.slice(s, n)), n < i && h(e = e.slice(n)), n < i && m(e));
					}l.push(t);
				}
			} return d(l);
		} function l(m, y) {
			let v = y.length > 0,
				w = m.length > 0,
				e = function (e, t, n, r, i) {
					let o, a, s,
						u = 0,
						c = '0',
						l = e && [],
						f = [],
						d = M,
						h = e || w && _.find.TAG('*', i),
						p = q += d == null ? 1 : Math.random() || 0.1,
						g = h.length; for (i && (M = t !== A && t); c !== g && (o = h[c]) != null; c++) {
						if (w && o) {
							for (a = 0; s = m[a++];) {
								if (s(o, t, n)) {
r.push(o); break;
								}
							}i && (q = p);
						}v && ((o = !s && o) && u--, e && l.push(o));
					} if (u += c, v && c !== u) {
						for (a = 0; s = y[a++];) {
s(l, f, t, n);
						} if (e) {
							if (u > 0) {
								for (;c--;) {
									l[c] || f[c] || (f[c] = J.call(r));
								}
							}f = b(f);
						}Q.apply(r, f), i && !e && f.length > 0 && u + y.length > 1 && x.uniqueSort(r);
					} return i && (q = p, M = d), l;
				}; return v ? u(e) : e;
		} var p, y, _, k, T, D, C, S, M, N, j, E, A, O, Y, F, L, H, I,
			P = 'sizzle' + -new Date(),
			W = n.document,
			q = 0,
			G = 0,
			R = e(),
			$ = e(),
			z = e(),
			B = function (e, t) {
				return e === t && (j = !0), 0;
			},
			U = typeof undefined,
			V = 1 << 31,
			X = {}.hasOwnProperty,
			Z = [],
			J = Z.pop,
			K = Z.push,
			Q = Z.push,
			ee = Z.slice,
			te = Z.indexOf || function (e) {
				for (let t = 0, n = this.length; t < n; t++) {
					if (this[t] === e) {
						return t;
					}
				} return -1;
			},
			ne = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
			re = '[\\x20\\t\\r\\n\\f]',
			ie = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
			oe = ie.replace('w', 'w#'),
			ae = '\\[' + re + '*(' + ie + ')(?:' + re + '*([*^$|!~]?=)' + re + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + oe + '))|)' + re + '*\\]',
			se = ':(' + ie + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ae + ')*)|.*)\\)|)',
			ue = new RegExp('^' + re + '+|((?:^|[^\\\\])(?:\\\\.)*)' + re + '+$', 'g'),
			ce = new RegExp('^' + re + '*,' + re + '*'),
			le = new RegExp('^' + re + '*([>+~]|' + re + ')' + re + '*'),
			fe = new RegExp('=' + re + '*([^\\]\'"]*?)' + re + '*\\]', 'g'),
			de = new RegExp(se),
			he = new RegExp('^' + oe + '$'),
			pe = {ID: new RegExp('^#(' + ie + ')'), CLASS: new RegExp('^\\.(' + ie + ')'), TAG: new RegExp('^(' + ie.replace('w', 'w*') + ')'), ATTR: new RegExp('^' + ae), PSEUDO: new RegExp('^' + se), CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + re + '*(even|odd|(([+-]|)(\\d*)n|)' + re + '*(?:([+-]|)' + re + '*(\\d+)|))' + re + '*\\)|)', 'i'), bool: new RegExp('^(?:' + ne + ')$', 'i'), needsContext: new RegExp('^' + re + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + re + '*((?:-\\d)?\\d*)' + re + '*\\)|)(?=[^-]|$)', 'i')},
			ge = /^(?:input|select|textarea|button)$/i,
			me = /^h\d$/i,
			ye = /^[^{]+\{\s*\[native \w/,
			ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			we = /[+~]/,
			xe = /'|\\/g,
			be = new RegExp('\\\\([\\da-f]{1,6}' + re + '?|(' + re + ')|.)', 'ig'),
			_e = function (e, t, n) {
				const r = '0x' + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
			}; try {
Q.apply(Z = ee.call(W.childNodes), W.childNodes), Z[W.childNodes.length].nodeType;
		} catch (ke) {
			Q = {apply: Z.length ? function (e, t) {
K.apply(e, ee.call(t));
			} : function (e, t) {
				for (var n = e.length, r = 0; e[n++] = t[r++];) {

				}e.length = n - 1;
			}};
		} for (p in y = x.support = {}, T = x.isXML = function (e) {
			const t = e && (e.ownerDocument || e).documentElement; return Boolean(t) && t.nodeName !== 'HTML';
		}, E = x.setDocument = function (e) {
			let t,
				u = e ? e.ownerDocument || e : W,
				n = u.defaultView; return u !== A && u.nodeType === 9 && u.documentElement ? (O = (A = u).documentElement, Y = !T(u), n && n !== n.top && (n.addEventListener ? n.addEventListener('unload', () => {
E();
			}, !1) : n.attachEvent && n.attachEvent('onunload', () => {
E();
			})), y.attributes = r(e => {
				return e.className = 'i', !e.getAttribute('className');
			}), y.getElementsByTagName = r(e => {
				return e.appendChild(u.createComment('')), !e.getElementsByTagName('*').length;
			}), y.getElementsByClassName = ye.test(u.getElementsByClassName) && r(e => {
				return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', e.getElementsByClassName('i').length === 2;
			}), y.getById = r(e => {
				return O.appendChild(e).id = P, !u.getElementsByName || !u.getElementsByName(P).length;
			}), y.getById ? (_.find.ID = function (e, t) {
				if (typeof t.getElementById !== U && Y) {
					const n = t.getElementById(e); return n && n.parentNode ? [n] : [];
				}
			}, _.filter.ID = function (e) {
				const t = e.replace(be, _e); return function (e) {
					return e.getAttribute('id') === t;
				};
			}) : (delete _.find.ID, _.filter.ID = function (e) {
				const n = e.replace(be, _e); return function (e) {
					const t = typeof e.getAttributeNode !== U && e.getAttributeNode('id'); return t && t.value === n;
				};
			}), _.find.TAG = y.getElementsByTagName ? function (e, t) {
				if (typeof t.getElementsByTagName !== U) {
					return t.getElementsByTagName(e);
				}
			} : function (e, t) {
				let n,
					r = [],
					i = 0,
					o = t.getElementsByTagName(e); if (e === '*') {
					for (;n = o[i++];) {
						n.nodeType === 1 && r.push(n);
					} return r;
				} return o;
			}, _.find.CLASS = y.getElementsByClassName && function (e, t) {
				if (typeof t.getElementsByClassName !== U && Y) {
					return t.getElementsByClassName(e);
				}
			}, L = [], F = [], (y.qsa = ye.test(u.querySelectorAll)) && (r(e => {
				e.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowclip^=\'\']').length && F.push('[*^$]=' + re + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || F.push('\\[' + re + '*(?:value|' + ne + ')'), e.querySelectorAll(':checked').length || F.push(':checked');
			}), r(e => {
				const t = u.createElement('input'); t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && F.push('name' + re + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || F.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), F.push(',.*:');
			})), (y.matchesSelector = ye.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(e => {
				y.disconnectedMatch = H.call(e, 'div'), H.call(e, '[s!=\'\']:x'), L.push('!=', se);
			}), F = F.length && new RegExp(F.join('|')), L = L.length && new RegExp(L.join('|')), t = ye.test(O.compareDocumentPosition), I = t || ye.test(O.contains) ? function (e, t) {
				let n = e.nodeType === 9 ? e.documentElement : e,
					r = t && t.parentNode; return e === r || !(!r || r.nodeType !== 1 || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
			} : function (e, t) {
				if (t) {
					for (;t = t.parentNode;) {
						if (t === e) {
							return !0;
						}
					}
				} return !1;
			}, B = t ? function (e, t) {
				if (e === t) {
					return j = !0, 0;
				} let n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument === W && I(W, e) ? -1 : t === u || t.ownerDocument === W && I(W, t) ? 1 : N ? te.call(N, e) - te.call(N, t) : 0 : 4 & n ? -1 : 1);
			} : function (e, t) {
				if (e === t) {
					return j = !0, 0;
				} let n,
					r = 0,
					i = e.parentNode,
					o = t.parentNode,
					a = [e],
					s = [t]; if (!i || !o) {
					return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : N ? te.call(N, e) - te.call(N, t) : 0;
				} if (i === o) {
					return c(e, t);
				} for (n = e; n = n.parentNode;) {
a.unshift(n);
				} for (n = t; n = n.parentNode;) {
s.unshift(n);
				} for (;a[r] === s[r];) {
					r++;
				} return r ? c(a[r], s[r]) : a[r] === W ? -1 : s[r] === W ? 1 : 0;
			}, u) : A;
		}, x.matches = function (e, t) {
			return x(e, null, null, t);
		}, x.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== A && E(e), t = t.replace(fe, '=\'$1\']'), y.matchesSelector && Y && (!L || !L.test(t)) && (!F || !F.test(t))) {
				try {
					const n = H.call(e, t); if (n || y.disconnectedMatch || e.document && e.document.nodeType !== 11) {
						return n;
					}
				} catch (ke) {}
			} return x(t, A, null, [e]).length > 0;
		}, x.contains = function (e, t) {
			return (e.ownerDocument || e) !== A && E(e), I(e, t);
		}, x.attr = function (e, t) {
			(e.ownerDocument || e) !== A && E(e); let n = _.attrHandle[t.toLowerCase()],
				r = n && X.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !Y) : undefined; return r !== undefined ? r : y.attributes || !Y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
		}, x.error = function (e) {
			throw new Error('Syntax error, unrecognized expression: ' + e);
		}, x.uniqueSort = function (e) {
			let t,
				n = [],
				r = 0,
				i = 0; if (j = !y.detectDuplicates, N = !y.sortStable && e.slice(0), e.sort(B), j) {
				for (;t = e[i++];) {
					t === e[i] && (r = n.push(i));
				} for (;r--;) {
e.splice(n[r], 1);
				}
			} return N = null, e;
		}, k = x.getText = function (e) {
			let t,
				n = '',
				r = 0,
				i = e.nodeType; if (i) {
				if (i === 1 || i === 9 || i === 11) {
					if (typeof e.textContent === 'string') {
						return e.textContent;
					} for (e = e.firstChild; e; e = e.nextSibling) {
						n += k(e);
					}
				} else if (i === 3 || i === 4) {
					return e.nodeValue;
				}
			} else {
				for (;t = e[r++];) {
					n += k(t);
				}
			} return n;
		}, (_ = x.selectors = {cacheLength: 50, createPseudo: u, match: pe, attrHandle: {}, find: {}, relative: {'>': {dir: 'parentNode', first: !0}, ' ': {dir: 'parentNode'}, '+': {dir: 'previousSibling', first: !0}, '~': {dir: 'previousSibling'}}, preFilter: {ATTR(e) {
			return e[1] = e[1].replace(be, _e), e[3] = (e[3] || e[4] || e[5] || '').replace(be, _e), e[2] === '~=' && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
		}, CHILD(e) {
			return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === 'nth' ? (e[3] || x.error(e[0]), e[4] = Number(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === 'even' || e[3] === 'odd')), e[5] = Number(e[7] + e[8] || e[3] === 'odd')) : e[3] && x.error(e[0]), e;
		}, PSEUDO(e) {
			let t,
				n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && de.test(n) && (t = D(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
		}}, filter: {TAG(e) {
			const t = e.replace(be, _e).toLowerCase(); return e === '*' ? function () {
				return !0;
			} : function (e) {
				return e.nodeName && e.nodeName.toLowerCase() === t;
			};
		}, CLASS(e) {
			let t = R[e + ' ']; return t || (t = new RegExp('(^|' + re + ')' + e + '(' + re + '|$)')) && R(e, e => {
				return t.test(typeof e.className === 'string' && e.className || typeof e.getAttribute !== U && e.getAttribute('class') || '');
			});
		}, ATTR(n, r, i) {
			return function (e) {
				let t = x.attr(e, n); return t == null ? r === '!=' : !r || (t = String(t), r === '=' ? t === i : r === '!=' ? t !== i : r === '^=' ? i && t.indexOf(i) === 0 : r === '*=' ? i && t.indexOf(i) > -1 : r === '$=' ? i && t.slice(-i.length) === i : r === '~=' ? (' ' + t + ' ').indexOf(i) > -1 : r === '|=' && (t === i || t.slice(0, i.length + 1) === i + '-'));
			};
		}, CHILD(h, e, t, p, g) {
			let m = h.slice(0, 3) !== 'nth',
				y = h.slice(-4) !== 'last',
				v = e === 'of-type'; return p === 1 && g === 0 ? function (e) {
				return Boolean(e.parentNode);
			} : function (e, t, n) {
				let r, i, o, a, s, u,
					c = m !== y ? 'nextSibling' : 'previousSibling',
					l = e.parentNode,
					f = v && e.nodeName.toLowerCase(),
					d = !n && !v; if (l) {
					if (m) {
						for (;c;) {
							for (o = e; o = o[c];) {
								if (v ? o.nodeName.toLowerCase() === f : o.nodeType === 1) {
									return !1;
								}
							} u = c = h === 'only' && !u && 'nextSibling';
						} return !0;
					} if (u = [y ? l.firstChild : l.lastChild], y && d) {
						for (s = (r = (i = l[P] || (l[P] = {}))[h] || [])[0] === q && r[1], a = r[0] === q && r[2], o = s && l.childNodes[s]; o = ++s && o && o[c] || (a = s = 0) || u.pop();) {
							if (o.nodeType === 1 && ++a && o === e) {
								i[h] = [q, s, a]; break;
							}
						}
					} else if (d && (r = (e[P] || (e[P] = {}))[h]) && r[0] === q) {
						a = r[1];
					} else {
						for (;(o = ++s && o && o[c] || (a = s = 0) || u.pop()) && ((v ? o.nodeName.toLowerCase() !== f : o.nodeType !== 1) || !++a || (d && ((o[P] || (o[P] = {}))[h] = [q, a]), o !== e));) {

						}
					} return (a -= g) === p || a % p == 0 && a / p >= 0;
				}
			};
		}, PSEUDO(e, o) {
			let t,
				a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || x.error('unsupported pseudo: ' + e); return a[P] ? a(o) : a.length > 1 ? (t = [e, e, '', o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? u((e, t) => {
					for (var n, r = a(e, o), i = r.length; i--;) {
						e[n = te.call(e, r[i])] = !(t[n] = r[i]);
					}
				}) : function (e) {
					return a(e, 0, t);
				}) : a;
		}}, pseudos: {not: u(e => {
			let r = [],
				i = [],
				s = C(e.replace(ue, '$1')); return s[P] ? u((e, t, n, r) => {
					for (var i, o = s(e, null, r, []), a = e.length; a--;) {
						(i = o[a]) && (e[a] = !(t[a] = i));
					}
				}) : function (e, t, n) {
					return r[0] = e, s(r, null, n, i), !i.pop();
				};
		}), has: u(t => {
			return function (e) {
				return x(t, e).length > 0;
			};
		}), contains: u(t => {
			return function (e) {
				return (e.textContent || e.innerText || k(e)).indexOf(t) > -1;
			};
		}), lang: u(n => {
			return he.test(n || '') || x.error('unsupported lang: ' + n), n = n.replace(be, _e).toLowerCase(), function (e) {
				let t; do {
					if (t = Y ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) {
						return (t = t.toLowerCase()) === n || t.indexOf(n + '-') === 0;
					}
				} while ((e = e.parentNode) && e.nodeType === 1);return !1;
			};
		}), target(e) {
			const t = n.location && n.location.hash; return t && t.slice(1) === e.id;
		}, root(e) {
			return e === O;
		}, focus(e) {
			return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && Boolean(e.type || e.href || ~e.tabIndex);
		}, enabled(e) {
			return !1 === e.disabled;
		}, disabled(e) {
			return !0 === e.disabled;
		}, checked(e) {
			const t = e.nodeName.toLowerCase(); return t === 'input' && Boolean(e.checked) || t === 'option' && Boolean(e.selected);
		}, selected(e) {
			return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
		}, empty(e) {
			for (e = e.firstChild; e; e = e.nextSibling) {
				if (e.nodeType < 6) {
					return !1;
				}
			} return !0;
		}, parent(e) {
			return !_.pseudos.empty(e);
		}, header(e) {
			return me.test(e.nodeName);
		}, input(e) {
			return ge.test(e.nodeName);
		}, button(e) {
			const t = e.nodeName.toLowerCase(); return t === 'input' && e.type === 'button' || t === 'button';
		}, text(e) {
			let t; return e.nodeName.toLowerCase() === 'input' && e.type === 'text' && ((t = e.getAttribute('type')) == null || t.toLowerCase() === 'text');
		}, first: a(() => {
			return [0];
		}), last: a((e, t) => {
			return [t - 1];
		}), eq: a((e, t, n) => {
			return [n < 0 ? n + t : n];
		}), even: a((e, t) => {
			for (let n = 0; n < t; n += 2) {
e.push(n);
			} return e;
		}), odd: a((e, t) => {
			for (let n = 1; n < t; n += 2) {
e.push(n);
			} return e;
		}), lt: a((e, t, n) => {
			for (let r = n < 0 ? n + t : n; --r >= 0;) {
e.push(r);
			} return e;
		}), gt: a((e, t, n) => {
			for (let r = n < 0 ? n + t : n; ++r < t;) {
e.push(r);
			} return e;
		})}}).pseudos.nth = _.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) {
			_.pseudos[p] = i(p);
		} for (p in {submit: !0, reset: !0}) {
			_.pseudos[p] = o(p);
		} return s.prototype = _.filters = _.pseudos, _.setFilters = new s(), D = x.tokenize = function (e, t) {
			let n, r, i, o, a, s, u,
				c = $[e + ' ']; if (c) {
				return t ? 0 : c.slice(0);
			} for (a = e, s = [], u = _.preFilter; a;) {
				for (o in n && !(r = ce.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = le.exec(a)) && (n = r.shift(), i.push({value: n, type: r[0].replace(ue, ' ')}), a = a.slice(n.length)), _.filter) {
					!(r = pe[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({value: n, type: o, matches: r}), a = a.slice(n.length));
				} if (!n) {
					break;
				}
			} return t ? a.length : a ? x.error(e) : $(e, s).slice(0);
		}, C = x.compile = function (e, t) {
			let n,
				r = [],
				i = [],
				o = z[e + ' ']; if (!o) {
				for (t || (t = D(e)), n = t.length; n--;) {
					(o = h(t[n]))[P] ? r.push(o) : i.push(o);
				}(o = z(e, l(i, r))).selector = e;
			} return o;
		}, S = x.select = function (e, t, n, r) {
			let i, o, a, s, u,
				c = typeof e === 'function' && e,
				l = !r && D(e = c.selector || e); if (n = n || [], l.length === 1) {
				if ((o = l[0] = l[0].slice(0)).length > 2 && (a = o[0]).type === 'ID' && y.getById && t.nodeType === 9 && Y && _.relative[o[1].type]) {
					if (!(t = (_.find.ID(a.matches[0].replace(be, _e), t) || [])[0])) {
						return n;
					} c && (t = t.parentNode), e = e.slice(o.shift().value.length);
				} for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);) {
					if ((u = _.find[s]) && (r = u(a.matches[0].replace(be, _e), we.test(o[0].type) && g(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && m(o))) {
							return Q.apply(n, r), n;
						} break;
					}
				}
			} return (c || C(e, l))(r, t, !Y, n, we.test(e) && g(t.parentNode) || t), n;
		}, y.sortStable = P.split('').sort(B).join('') === P, y.detectDuplicates = Boolean(j), E(), y.sortDetached = r(e => {
			return 1 & e.compareDocumentPosition(A.createElement('div'));
		}), r(e => {
			return e.innerHTML = '<a href=\'#\'></a>', e.firstChild.getAttribute('href') === '#';
		}) || t('type|href|height|width', (e, t, n) => {
			if (!n) {
				return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2);
			}
		}), y.attributes && r(e => {
			return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), e.firstChild.getAttribute('value') === '';
		}) || t('value', (e, t, n) => {
			if (!n && e.nodeName.toLowerCase() === 'input') {
				return e.defaultValue;
			}
		}), r(e => {
			return e.getAttribute('disabled') == null;
		}) || t(ne, (e, t, n) => {
			let r; if (!n) {
				return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
			}
		}), x;
	})(p); Q.find = ie, Q.expr = ie.selectors, Q.expr[':'] = Q.expr.pseudos, Q.unique = ie.uniqueSort, Q.text = ie.getText, Q.isXMLDoc = ie.isXML, Q.contains = ie.contains; var oe = Q.expr.match.needsContext,
		ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		se = /^.[^:#\[\.,]*$/; Q.filter = function (e, t, n) {
		const r = t[0]; return n && (e = ':not(' + e + ')'), t.length === 1 && r.nodeType === 1 ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, e => {
			return e.nodeType === 1;
		}));
	}, Q.fn.extend({find(e) {
		let t,
			n = this.length,
			r = [],
			i = this; if (typeof e !== 'string') {
			return this.pushStack(Q(e).filter(function () {
				for (t = 0; t < n; t++) {
					if (Q.contains(i[t], this)) {
						return !0;
					}
				}
			}));
		} for (t = 0; t < n; t++) {
Q.find(e, i[t], r);
		} return (r = this.pushStack(n > 1 ? Q.unique(r) : r)).selector = this.selector ? this.selector + ' ' + e : e, r;
	}, filter(e) {
		return this.pushStack(t(this, e || [], !1));
	}, not(e) {
		return this.pushStack(t(this, e || [], !0));
	}, is(e) {
		return Boolean(t(this, typeof e === 'string' && oe.test(e) ? Q(e) : e || [], !1).length);
	}}); let ue,
		ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (Q.fn.init = function (e, t) {
		let n, r; if (!e) {
			return this;
		} if (typeof e === 'string') {
			if (!(n = e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3 ? [null, e, null] : ce.exec(e)) || !n[1] && t) {
				return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
			} if (n[1]) {
				if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
ae.test(n[1]) && Q.isPlainObject(t)) {
					for (n in t) {
Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					}
				} return this;
			} return (r = J.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this;
		} return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? typeof ue.ready !== 'undefined' ? ue.ready(e) : e(Q) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this));
	}).prototype = Q.fn, ue = Q(J); let le = /^(?:parents|prev(?:Until|All))/,
		fe = {children: !0, contents: !0, next: !0, prev: !0}; Q.extend({dir(e, t, n) {
			for (var r = [], i = n !== undefined; (e = e[t]) && e.nodeType !== 9;) {
				if (e.nodeType === 1) {
					if (i && Q(e).is(n)) {
						break;
					} r.push(e);
				}
			} return r;
		}, sibling(e, t) {
			for (var n = []; e; e = e.nextSibling) {
				e.nodeType === 1 && e !== t && n.push(e);
			} return n;
		}}), Q.fn.extend({has(e) {
			let t = Q(e, this),
				n = t.length; return this.filter(function () {
					for (let e = 0; e < n; e++) {
						if (Q.contains(this, t[e])) {
							return !0;
						}
					}
				});
		}, closest(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || typeof e !== 'string' ? Q(e, t || this.context) : 0; r < i; r++) {
				for (n = this[r]; n && n !== t; n = n.parentNode) {
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && Q.find.matchesSelector(n, e))) {
o.push(n); break;
					}
				}
			} return this.pushStack(o.length > 1 ? Q.unique(o) : o);
		}, index(e) {
			return e ? typeof e === 'string' ? B.call(Q(e), this[0]) : B.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add(e, t) {
			return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))));
		}, addBack(e) {
			return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
		}}), Q.each({parent(e) {
			const t = e.parentNode; return t && t.nodeType !== 11 ? t : null;
		}, parents(e) {
			return Q.dir(e, 'parentNode');
		}, parentsUntil(e, t, n) {
			return Q.dir(e, 'parentNode', n);
		}, next(e) {
			return n(e, 'nextSibling');
		}, prev(e) {
			return n(e, 'previousSibling');
		}, nextAll(e) {
			return Q.dir(e, 'nextSibling');
		}, prevAll(e) {
			return Q.dir(e, 'previousSibling');
		}, nextUntil(e, t, n) {
			return Q.dir(e, 'nextSibling', n);
		}, prevUntil(e, t, n) {
			return Q.dir(e, 'previousSibling', n);
		}, siblings(e) {
			return Q.sibling((e.parentNode || {}).firstChild, e);
		}, children(e) {
			return Q.sibling(e.firstChild);
		}, contents(e) {
			return e.contentDocument || Q.merge([], e.childNodes);
		}}, (r, i) => {
			Q.fn[r] = function (e, t) {
				let n = Q.map(this, i, e); return r.slice(-5) !== 'Until' && (t = e), t && typeof t === 'string' && (n = Q.filter(t, n)), this.length > 1 && (fe[r] || Q.unique(n), le.test(r) && n.reverse()), this.pushStack(n);
			};
		}); var de,
			he = /\S+/g,
			pe = {}; Q.Callbacks = function (i) {
			i = typeof i === 'string' ? pe[i] || d(i) : Q.extend({}, i); var t, n, o, a, s, r,
				u = [],
				c = !i.once && [],
				l = function (e) {
					for (t = i.memory && e, n = !0, r = a || 0, a = 0, s = u.length, o = !0; u && r < s; r++) {
						if (!1 === u[r].apply(e[0], e[1]) && i.stopOnFalse) {
							t = !1; break;
						}
					}o = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable());
				},
				f = {add() {
					if (u) {
						const e = u.length; !(function r(e) {
Q.each(e, (e, t) => {
	const n = Q.type(t); n === 'function' ? i.unique && f.has(t) || u.push(t) : t && t.length && n !== 'string' && r(t);
});
						})(arguments), o ? s = u.length : t && (a = e, l(t));
					} return this;
				}, remove() {
					return u && Q.each(arguments, (e, t) => {
						for (var n; (n = Q.inArray(t, u, n)) > -1;) {
u.splice(n, 1), o && (n <= s && s--, n <= r && r--);
						}
					}), this;
				}, has(e) {
					return e ? Q.inArray(e, u) > -1 : !(!u || !u.length);
				}, empty() {
					return u = [], s = 0, this;
				}, disable() {
					return u = c = t = undefined, this;
				}, disabled() {
					return !u;
				}, lock() {
					return c = undefined, t || f.disable(), this;
				}, locked() {
					return !c;
				}, fireWith(e, t) {
					return !u || n && !c || (t = [e, (t = t || []).slice ? t.slice() : t], o ? c.push(t) : l(t)), this;
				}, fire() {
					return f.fireWith(this, arguments), this;
				}, fired() {
					return Boolean(n);
				}}; return f;
		}, Q.extend({Deferred(e) {
			var o = [['resolve', 'done', Q.Callbacks('once memory'), 'resolved'], ['reject', 'fail', Q.Callbacks('once memory'), 'rejected'], ['notify', 'progress', Q.Callbacks('memory')]],
				i = 'pending',
				a = {state() {
					return i;
				}, always() {
					return s.done(arguments).fail(arguments), this;
				}, then() {
					let i = arguments; return Q.Deferred(r => {
Q.each(o, (e, t) => {
	const n = Q.isFunction(i[e]) && i[e]; s[t[1]](function () {
		const e = n && n.apply(this, arguments); e && Q.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + 'With'](this === a ? r.promise() : this, n ? [e] : arguments);
	});
}), i = null;
					}).promise();
				}, promise(e) {
					return e != null ? Q.extend(e, a) : a;
				}},
				s = {}; return a.pipe = a.then, Q.each(o, (e, t) => {
					let n = t[2],
						r = t[3]; a[t[1]] = n.add, r && n.add(() => {
							i = r;
						}, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
						return s[t[0] + 'With'](this === s ? a : this, arguments), this;
					}, s[t[0] + 'With'] = n.fireWith;
				}), a.promise(s), e && e.call(s, s), s;
		}, when(e) {
			let i, t, n,
				r = 0,
				o = R.call(arguments),
				a = o.length,
				s = a !== 1 || e && Q.isFunction(e.promise) ? a : 0,
				u = s === 1 ? e : Q.Deferred(),
				c = function (t, n, r) {
					return function (e) {
						n[t] = this, r[t] = arguments.length > 1 ? R.call(arguments) : e, r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
					};
				}; if (a > 1) {
				for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) {
					o[r] && Q.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(u.reject).progress(c(r, t, i)) : --s;
				}
			} return s || u.resolveWith(n, o), u.promise();
		}}), Q.fn.ready = function (e) {
			return Q.ready.promise().done(e), this;
		}, Q.extend({isReady: !1, readyWait: 1, holdReady(e) {
			e ? Q.readyWait++ : Q.ready(!0);
		}, ready(e) {
			(!0 === e ? --Q.readyWait : Q.isReady) || (Q.isReady = !0) !== e && --Q.readyWait > 0 || (de.resolveWith(J, [Q]), Q.fn.triggerHandler && (Q(J).triggerHandler('ready'), Q(J).off('ready')));
		}}), Q.ready.promise = function (e) {
			return de || (de = Q.Deferred(), J.readyState === 'complete' ? setTimeout(Q.ready) : (J.addEventListener('DOMContentLoaded', r, !1), p.addEventListener('load', r, !1))), de.promise(e);
		}, Q.ready.promise(); const ge = Q.access = function (e, t, n, r, i, o, a) {
			let s = 0,
				u = e.length,
				c = n == null; if (Q.type(n) === 'object') {
				for (s in i = !0, n) {
Q.access(e, t, s, n[s], !0, o, a);
				}
			} else if (r !== undefined && (i = !0, Q.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
				return c.call(Q(e), n);
			})), t)) {
				for (;s < u; s++) {
t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				}
			} return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
		}; Q.acceptData = function (e) {
			return e.nodeType === 1 || e.nodeType === 9 || !Number(e.nodeType);
		}, i.uid = 1, i.accepts = Q.acceptData, i.prototype = {key(e) {
			if (!i.accepts(e)) {
				return 0;
			} let t = {},
				n = e[this.expando]; if (!n) {
				n = i.uid++; try {
					t[this.expando] = {value: n}, Object.defineProperties(e, t);
				} catch (r) {
					t[this.expando] = n, Q.extend(e, t);
				}
			} return this.cache[n] || (this.cache[n] = {}), n;
		}, set(e, t, n) {
			let r,
				i = this.key(e),
				o = this.cache[i]; if (typeof t === 'string') {
				o[t] = n;
			} else if (Q.isEmptyObject(o)) {
Q.extend(this.cache[i], t);
			} else {
				for (r in t) {
					o[r] = t[r];
				}
			} return o;
		}, get(e, t) {
			const n = this.cache[this.key(e)]; return t === undefined ? n : n[t];
		}, access(e, t, n) {
			let r; return t === undefined || t && typeof t === 'string' && n === undefined ? (r = this.get(e, t)) !== undefined ? r : this.get(e, Q.camelCase(t)) : (this.set(e, t, n), n !== undefined ? n : t);
		}, remove(e, t) {
			let n, r, i,
				o = this.key(e),
				a = this.cache[o]; if (t === undefined) {
				this.cache[o] = {};
			} else {
Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (i = Q.camelCase(t), r = t in a ? [t, i] : (r = i) in a ? [r] : r.match(he) || []), n = r.length; for (;n--;) {
	delete a[r[n]];
}
			}
		}, hasData(e) {
			return !Q.isEmptyObject(this.cache[e[this.expando]] || {});
		}, discard(e) {
			e[this.expando] && delete this.cache[e[this.expando]];
		}}; var me = new i(),
			ye = new i(),
			ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			we = /([A-Z])/g; Q.extend({hasData(e) {
				return ye.hasData(e) || me.hasData(e);
			}, data(e, t, n) {
				return ye.access(e, t, n);
			}, removeData(e, t) {
ye.remove(e, t);
			}, _data(e, t, n) {
				return me.access(e, t, n);
			}, _removeData(e, t) {
me.remove(e, t);
			}}), Q.fn.extend({data(r, e) {
				let t, n, i,
					o = this[0],
					a = o && o.attributes; if (r === undefined) {
					if (this.length && (i = ye.get(o), o.nodeType === 1 && !me.get(o, 'hasDataAttrs'))) {
						for (t = a.length; t--;) {
							a[t] && (n = a[t].name).indexOf('data-') === 0 && (n = Q.camelCase(n.slice(5)), u(o, n, i[n]));
						}me.set(o, 'hasDataAttrs', !0);
					} return i;
				} return typeof r === 'object' ? this.each(function () {
ye.set(this, r);
				}) : ge(this, function (t) {
					let e,
						n = Q.camelCase(r); if (o && t === undefined) {
						return (e = ye.get(o, r)) !== undefined ? e : (e = ye.get(o, n)) !== undefined ? e : (e = u(o, n, undefined)) !== undefined ? e : void 0;
					} this.each(function () {
						const e = ye.get(this, n); ye.set(this, n, t), r.indexOf('-') !== -1 && e !== undefined && ye.set(this, r, t);
					});
				}, null, e, arguments.length > 1, null, !0);
			}, removeData(e) {
				return this.each(function () {
ye.remove(this, e);
				});
			}}), Q.extend({queue(e, t, n) {
				let r; if (e) {
					return t = (t || 'fx') + 'queue', r = me.get(e, t), n && (!r || Q.isArray(n) ? r = me.access(e, t, Q.makeArray(n)) : r.push(n)), r || [];
				}
			}, dequeue(e, t) {
				t = t || 'fx'; let n = Q.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = Q._queueHooks(e, t),
					a = function () {
Q.dequeue(e, t);
					}; i === 'inprogress' && (i = n.shift(), r--), i && (t === 'fx' && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
			}, _queueHooks(e, t) {
				const n = t + 'queueHooks'; return me.get(e, n) || me.access(e, n, {empty: Q.Callbacks('once memory').add(() => {
me.remove(e, [t + 'queue', n]);
				})});
			}}), Q.fn.extend({queue(t, n) {
				let e = 2; return typeof t !== 'string' && (n = t, t = 'fx', e--), arguments.length < e ? Q.queue(this[0], t) : n === undefined ? this : this.each(function () {
					const e = Q.queue(this, t, n); Q._queueHooks(this, t), t === 'fx' && e[0] !== 'inprogress' && Q.dequeue(this, t);
				});
			}, dequeue(e) {
				return this.each(function () {
Q.dequeue(this, e);
				});
			}, clearQueue(e) {
				return this.queue(e || 'fx', []);
			}, promise(e, t) {
				let n,
					r = 1,
					i = Q.Deferred(),
					o = this,
					a = this.length,
					s = function () {
						--r || i.resolveWith(o, [o]);
					}; for (typeof e !== 'string' && (t = e, e = undefined), e = e || 'fx'; a--;) {
					(n = me.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
				} return s(), i.promise(t);
			}}); var xe, be,
				_e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				ke = ['Top', 'Right', 'Bottom', 'Left'],
				Te = function (e, t) {
					return e = t || e, Q.css(e, 'display') === 'none' || !Q.contains(e.ownerDocument, e);
				},
				De = /^(?:checkbox|radio)$/i; xe = J.createDocumentFragment().appendChild(J.createElement('div')), (be = J.createElement('input')).setAttribute('type', 'radio'), be.setAttribute('checked', 'checked'), be.setAttribute('name', 't'), xe.appendChild(be), Z.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = '<textarea>x</textarea>', Z.noCloneChecked = Boolean(xe.cloneNode(!0).lastChild.defaultValue); const Ce = typeof undefined; Z.focusinBubbles = 'onfocusin' in p; let Se = /^key/,
				Me = /^(?:mouse|pointer|contextmenu)|click/,
				Ne = /^(?:focusinfocus|focusoutblur)$/,
				je = /^([^.]*)(?:\.(.+)|)$/; Q.event = {global: {}, add(t, e, n, r, i) {
				let o, a, s, u, c, l, f, d, h, p, g,
					m = me.get(t); if (m) {
					for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = Q.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
						return typeof Q !== Ce && Q.event.triggered !== e.type ? Q.event.dispatch.apply(t, arguments) : undefined;
					}), c = (e = (e || '').match(he) || ['']).length; c--;) {
						h = g = (s = je.exec(e[c]) || [])[1], p = (s[2] || '').split('.').sort(), h && (f = Q.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = Q.event.special[h] || {}, l = Q.extend({type: h, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && Q.expr.match.needsContext.test(i), namespace: p.join('.')}, o), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(h, a, !1)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), Q.event.global[h] = !0);
					}
				}
			}, remove(e, t, n, r, i) {
				let o, a, s, u, c, l, f, d, h, p, g,
					m = me.hasData(e) && me.get(e); if (m && (u = m.events)) {
					for (c = (t = (t || '').match(he) || ['']).length; c--;) {
						if (h = g = (s = je.exec(t[c]) || [])[1], p = (s[2] || '').split('.').sort(), h) {
							for (f = Q.event.special[h] || {}, d = u[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = d.length; o--;) {
								l = d[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && (r !== '**' || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
							}a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || Q.removeEvent(e, h, m.handle), delete u[h]);
						} else {
							for (h in u) {
Q.event.remove(e, h + t[c], n, r, !0);
							}
						}
					}Q.isEmptyObject(u) && (delete m.handle, me.remove(e, 'events'));
				}
			}, trigger(e, t, n, r) {
				let i, o, a, s, u, c, l,
					f = [n || J],
					d = X.call(e, 'type') ? e.type : e,
					h = X.call(e, 'namespace') ? e.namespace.split('.') : []; if (o = a = n = n || J, n.nodeType !== 3 && n.nodeType !== 8 && !Ne.test(d + Q.event.triggered) && (d.indexOf('.') >= 0 && (d = (h = d.split('.')).shift(), h.sort()), u = d.indexOf(':') < 0 && 'on' + d, (e = e[Q.expando] ? e : new Q.Event(d, typeof e === 'object' && e)).isTrigger = r ? 2 : 3, e.namespace = h.join('.'), e.namespace_re = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, e.result = undefined, e.target || (e.target = n), t = t == null ? [e] : Q.makeArray(t, [e]), l = Q.event.special[d] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
					if (!r && !l.noBubble && !Q.isWindow(n)) {
						for (s = l.delegateType || d, Ne.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
f.push(o), a = o;
						}a === (n.ownerDocument || J) && f.push(a.defaultView || a.parentWindow || p);
					} for (i = 0; (o = f[i++]) && !e.isPropagationStopped();) {
						e.type = i > 1 ? s : l.bindType || d, (c = (me.get(o, 'events') || {})[e.type] && me.get(o, 'handle')) && c.apply(o, t), (c = u && o[u]) && c.apply && Q.acceptData(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
					} return e.type = d, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !Q.acceptData(n) || u && Q.isFunction(n[d]) && !Q.isWindow(n) && ((a = n[u]) && (n[u] = null), n[Q.event.triggered = d](), Q.event.triggered = undefined, a && (n[u] = a)), e.result;
				}
			}, dispatch(e) {
				e = Q.event.fix(e); let t, n, r, i, o,
					a = [],
					s = R.call(arguments),
					u = (me.get(this, 'events') || {})[e.type] || [],
					c = Q.event.special[e.type] || {}; if ((s[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
					for (a = Q.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) {
						for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
							e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, (r = ((Q.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
						}
					} return c.postDispatch && c.postDispatch.call(this, e), e.result;
				}
			}, handlers(e, t) {
				let n, r, i, o,
					a = [],
					s = t.delegateCount,
					u = e.target; if (s && u.nodeType && (!e.button || e.type !== 'click')) {
					for (;u !== this; u = u.parentNode || this) {
						if (!0 !== u.disabled || e.type !== 'click') {
							for (r = [], n = 0; n < s; n++) {
								r[i = (o = t[n]).selector + ' '] === undefined && (r[i] = o.needsContext ? Q(i, this).index(u) >= 0 : Q.find(i, this, null, [u]).length), r[i] && r.push(o);
							}r.length && a.push({elem: u, handlers: r});
						}
					}
				} return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a;
			}, props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '), fixHooks: {}, keyHooks: {props: 'char charCode key keyCode'.split(' '), filter(e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
			}}, mouseHooks: {props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '), filter(e, t) {
				let n, r, i,
					o = t.button; return e.pageX == null && t.clientX != null && (r = (n = e.target.ownerDocument || J).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
			}}, fix(e) {
				if (e[Q.expando]) {
					return e;
				} let t, n, r,
					i = e.type,
					o = e,
					a = this.fixHooks[i]; for (a || (this.fixHooks[i] = a = Me.test(i) ? this.mouseHooks : Se.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Q.Event(o), t = r.length; t--;) {
					e[n = r[t]] = o[n];
				} return e.target || (e.target = J), e.target.nodeType === 3 && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
			}, special: {load: {noBubble: !0}, focus: {trigger() {
				if (this !== a() && this.focus) {
					return this.focus(), !1;
				}
			}, delegateType: 'focusin'}, blur: {trigger() {
				if (this === a() && this.blur) {
					return this.blur(), !1;
				}
			}, delegateType: 'focusout'}, click: {trigger() {
				if (this.type === 'checkbox' && this.click && Q.nodeName(this, 'input')) {
					return this.click(), !1;
				}
			}, _default(e) {
				return Q.nodeName(e.target, 'a');
			}}, beforeunload: {postDispatch(e) {
				e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result);
			}}}, simulate(e, t, n, r) {
				const i = Q.extend(new Q.Event(), n, {type: e, isSimulated: !0, originalEvent: {}}); r ? Q.event.trigger(i, null, t) : Q.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
			}}, Q.removeEvent = function (e, t, n) {
				e.removeEventListener && e.removeEventListener(t, n, !1);
			}, Q.Event = function (e, t) {
				if (!(this instanceof Q.Event)) {
					return new Q.Event(e, t);
				} e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? o : c) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), this[Q.expando] = !0;
			}, Q.Event.prototype = {isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c, preventDefault() {
				const e = this.originalEvent; this.isDefaultPrevented = o, e && e.preventDefault && e.preventDefault();
			}, stopPropagation() {
				const e = this.originalEvent; this.isPropagationStopped = o, e && e.stopPropagation && e.stopPropagation();
			}, stopImmediatePropagation() {
				const e = this.originalEvent; this.isImmediatePropagationStopped = o, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
			}}, Q.each({mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout'}, (e, o) => {
				Q.event.special[e] = {delegateType: o, bindType: o, handle(e) {
					let t,
						n = this,
						r = e.relatedTarget,
						i = e.handleObj; return r && (r === n || Q.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t;
				}};
			}), Z.focusinBubbles || Q.each({focus: 'focusin', blur: 'focusout'}, (n, r) => {
				const i = function (e) {
Q.event.simulate(r, e.target, Q.event.fix(e), !0);
				}; Q.event.special[r] = {setup() {
					let e = this.ownerDocument || this,
						t = me.access(e, r); t || e.addEventListener(n, i, !0), me.access(e, r, (t || 0) + 1);
				}, teardown() {
					let e = this.ownerDocument || this,
						t = me.access(e, r) - 1; t ? me.access(e, r, t) : (e.removeEventListener(n, i, !0), me.remove(e, r));
				}};
			}), Q.fn.extend({on(e, t, n, r, i) {
				let o, a; if (typeof e === 'object') {
					for (a in typeof t !== 'string' && (n = n || t, t = undefined), e) {
this.on(a, t, n, e[a], i);
					} return this;
				} if (n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t === 'string' ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), !1 === r) {
					r = c;
				} else if (!r) {
					return this;
				} return i === 1 && (o = r, (r = function (e) {
					return Q().off(e), o.apply(this, arguments);
				}).guid = o.guid || (o.guid = Q.guid++)), this.each(function () {
Q.event.add(this, e, r, n, t);
				});
			}, one(e, t, n, r) {
				return this.on(e, t, n, r, 1);
			}, off(e, t, n) {
				let r, i; if (e && e.preventDefault && e.handleObj) {
					return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
				} if (typeof e === 'object') {
					for (i in e) {
this.off(i, t, e[i]);
					} return this;
				} return !1 !== t && typeof t !== 'function' || (n = t, t = undefined), !1 === n && (n = c), this.each(function () {
Q.event.remove(this, e, n, t);
				});
			}, trigger(e, t) {
				return this.each(function () {
Q.event.trigger(e, t, this);
				});
			}, triggerHandler(e, t) {
				const n = this[0]; if (n) {
					return Q.event.trigger(e, t, n, !0);
				}
			}}); var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				Ae = /<([\w:]+)/,
				Oe = /<|&#?\w+;/,
				Ye = /<(?:script|style|link)/i,
				Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Le = /^$|\/(?:java|ecma)script/i,
				He = /^true\/(.*)/,
				Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
				Pe = {option: [1, '<select multiple=\'multiple\'>', '</select>'], thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', '']}; Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, Q.extend({clone(e, t, n) {
					let r, i, o, a,
						s = e.cloneNode(!0),
						u = Q.contains(e.ownerDocument, e); if (!(Z.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || Q.isXMLDoc(e))) {
						for (a = v(s), r = 0, i = (o = v(e)).length; r < i; r++) {
h(o[r], a[r]);
						}
					} if (t) {
						if (n) {
							for (o = o || v(e), a = a || v(s), r = 0, i = o.length; r < i; r++) {
f(o[r], a[r]);
							}
						} else {
f(e, s);
						}
					} return (a = v(s, 'script')).length > 0 && y(a, !u && v(e, 'script')), s;
				}, buildFragment(e, t, n, r) {
					for (var i, o, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++) {
						if ((i = e[d]) || i === 0) {
							if (Q.type(i) === 'object') {
Q.merge(f, i.nodeType ? [i] : i);
							} else if (Oe.test(i)) {
								for (o = o || l.appendChild(t.createElement('div')), a = (Ae.exec(i) || ['', ''])[1].toLowerCase(), s = Pe[a] || Pe._default, o.innerHTML = s[1] + i.replace(Ee, '<$1></$2>') + s[2], c = s[0]; c--;) {
									o = o.lastChild;
								}Q.merge(f, o.childNodes), (o = l.firstChild).textContent = '';
							} else {
f.push(t.createTextNode(i));
							}
						}
					} for (l.textContent = '', d = 0; i = f[d++];) {
						if ((!r || Q.inArray(i, r) === -1) && (u = Q.contains(i.ownerDocument, i), o = v(l.appendChild(i), 'script'), u && y(o), n)) {
							for (c = 0; i = o[c++];) {
Le.test(i.type || '') && n.push(i);
							}
						}
					} return l;
				}, cleanData(e) {
					for (var t, n, r, i, o = Q.event.special, a = 0; (n = e[a]) !== undefined; a++) {
						if (Q.acceptData(n) && (i = n[me.expando]) && (t = me.cache[i])) {
							if (t.events) {
								for (r in t.events) {
									o[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
								}
							}me.cache[i] && delete me.cache[i];
						} delete ye.cache[n[ye.expando]];
					}
				}}), Q.fn.extend({text(e) {
					return ge(this, function (e) {
						return e === undefined ? Q.text(this) : this.empty().each(function () {
							this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || (this.textContent = e);
						});
					}, null, e, arguments.length);
				}, append() {
					return this.domManip(arguments, function (e) {
						this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || l(this, e).appendChild(e);
					});
				}, prepend() {
					return this.domManip(arguments, function (e) {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							const t = l(this, e); t.insertBefore(e, t.firstChild);
						}
					});
				}, before() {
					return this.domManip(arguments, function (e) {
						this.parentNode && this.parentNode.insertBefore(e, this);
					});
				}, after() {
					return this.domManip(arguments, function (e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
					});
				}, remove(e, t) {
					for (var n, r = e ? Q.filter(e, this) : this, i = 0; (n = r[i]) != null; i++) {
						t || n.nodeType !== 1 || Q.cleanData(v(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && y(v(n, 'script')), n.parentNode.removeChild(n));
					} return this;
				}, empty() {
					for (var e, t = 0; (e = this[t]) != null; t++) {
						e.nodeType === 1 && (Q.cleanData(v(e, !1)), e.textContent = '');
					} return this;
				}, clone(e, t) {
					return e = e != null && e, t = t == null ? e : t, this.map(function () {
						return Q.clone(this, e, t);
					});
				}, html(e) {
					return ge(this, function (e) {
						let t = this[0] || {},
							n = 0,
							r = this.length; if (e === undefined && t.nodeType === 1) {
							return t.innerHTML;
						} if (typeof e === 'string' && !Ye.test(e) && !Pe[(Ae.exec(e) || ['', ''])[1].toLowerCase()]) {
							e = e.replace(Ee, '<$1></$2>'); try {
								for (;n < r; n++) {
									(t = this[n] || {}).nodeType === 1 && (Q.cleanData(v(t, !1)), t.innerHTML = e);
								} t = 0;
							} catch (i) {}
						}t && this.empty().append(e);
					}, null, e, arguments.length);
				}, replaceWith(e) {
					let t = e; return this.domManip(arguments, function (e) {
						t = this.parentNode, Q.cleanData(v(this)), t && t.replaceChild(e, this);
					}), t && (t.length || t.nodeType) ? this : this.remove();
				}, detach(e) {
					return this.remove(e, !0);
				}, domManip(n, r) {
					n = $.apply([], n); let e, t, i, o, a, s,
						u = 0,
						c = this.length,
						l = this,
						f = c - 1,
						d = n[0],
						h = Q.isFunction(d); if (h || c > 1 && typeof d === 'string' && !Z.checkClone && Fe.test(d)) {
						return this.each(function (e) {
							const t = l.eq(e); h && (n[0] = d.call(this, e, t.html())), t.domManip(n, r);
						});
					} if (c && (t = (e = Q.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, e.childNodes.length === 1 && (e = t), t)) {
						for (o = (i = Q.map(v(e, 'script'), g)).length; u < c; u++) {
							a = e, u !== f && (a = Q.clone(a, !0, !0), o && Q.merge(i, v(a, 'script'))), r.call(this[u], a, u);
						} if (o) {
							for (s = i[i.length - 1].ownerDocument, Q.map(i, m), u = 0; u < o; u++) {
								a = i[u], Le.test(a.type || '') && !me.access(a, 'globalEval') && Q.contains(s, a) && (a.src ? Q._evalUrl && Q._evalUrl(a.src) : Q.globalEval(a.textContent.replace(Ie, '')));
							}
						}
					} return this;
				}}), Q.each({appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith'}, (e, a) => {
					Q.fn[e] = function (e) {
						for (var t, n = [], r = Q(e), i = r.length - 1, o = 0; o <= i; o++) {
							t = o === i ? this : this.clone(!0), Q(r[o])[a](t), z.apply(n, t.get());
						} return this.pushStack(n);
					};
				}); var We,
				qe = {},
				Ge = /^margin/,
				Re = new RegExp('^(' + _e + ')(?!px)[a-z%]+$', 'i'),
				$e = function (e) {
					return e.ownerDocument.defaultView.getComputedStyle(e, null);
				}; !(function () {
					function e() {
						o.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', o.innerHTML = '', r.appendChild(i); const e = p.getComputedStyle(o, null); t = e.top !== '1%', n = e.width === '4px', r.removeChild(i);
					} var t, n,
						r = J.documentElement,
						i = J.createElement('div'),
						o = J.createElement('div'); o.style && (o.style.backgroundClip = 'content-box', o.cloneNode(!0).style.backgroundClip = '', Z.clearCloneStyle = o.style.backgroundClip === 'content-box', i.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', i.appendChild(o), p.getComputedStyle && Q.extend(Z, {pixelPosition() {
						return e(), t;
					}, boxSizingReliable() {
						return n == null && e(), n;
					}, reliableMarginRight() {
						let e,
							t = o.appendChild(J.createElement('div')); return t.style.cssText = o.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', t.style.marginRight = t.style.width = '0', o.style.width = '1px', r.appendChild(i), e = !parseFloat(p.getComputedStyle(t, null).marginRight), r.removeChild(i), e;
					}}));
				})(), Q.swap = function (e, t, n, r) {
				let i, o,
					a = {}; for (o in t) {
					a[o] = e.style[o], e.style[o] = t[o];
				} for (o in i = n.apply(e, r || []), t) {
					e.style[o] = a[o];
				} return i;
			}; var ze = /^(none|table(?!-c[ea]).+)/,
				Be = new RegExp('^(' + _e + ')(.*)$', 'i'),
				Ue = new RegExp('^([+-])=(' + _e + ')', 'i'),
				Ve = {position: 'absolute', visibility: 'hidden', display: 'block'},
				Xe = {letterSpacing: '0', fontWeight: '400'},
				Ze = ['Webkit', 'O', 'Moz', 'ms']; Q.extend({cssHooks: {opacity: {get(e, t) {
					if (t) {
						const n = b(e, 'opacity'); return n === '' ? '1' : n;
					}
				}}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {float: 'cssFloat'}, style(e, t, n, r) {
					if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
						let i, o, a,
							s = Q.camelCase(t),
							u = e.style; if (t = Q.cssProps[s] || (Q.cssProps[s] = k(u, s)), a = Q.cssHooks[t] || Q.cssHooks[s], n === undefined) {
							return a && 'get' in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
						} (o = typeof n) === 'string' && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Q.css(e, t)), o = 'number'), n != null && n == n && (o !== 'number' || Q.cssNumber[s] || (n += 'px'), Z.clearCloneStyle || n !== '' || t.indexOf('background') !== 0 || (u[t] = 'inherit'), a && 'set' in a && (n = a.set(e, n, r)) === undefined || (u[t] = n));
					}
				}, css(e, t, n, r) {
					let i, o, a,
						s = Q.camelCase(t); return t = Q.cssProps[s] || (Q.cssProps[s] = k(e.style, s)), (a = Q.cssHooks[t] || Q.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)), i === undefined && (i = b(e, t, r)), i === 'normal' && t in Xe && (i = Xe[t]), n === '' || n ? (o = parseFloat(i), !0 === n || Q.isNumeric(o) ? o || 0 : i) : i;
				}}), Q.each(['height', 'width'], (e, i) => {
					Q.cssHooks[i] = {get(e, t, n) {
						if (t) {
							return ze.test(Q.css(e, 'display')) && e.offsetWidth === 0 ? Q.swap(e, Ve, () => {
								return C(e, i, n);
							}) : C(e, i, n);
						}
					}, set(e, t, n) {
						const r = n && $e(e); return T(e, t, n ? D(e, i, n, Q.css(e, 'boxSizing', !1, r) === 'border-box', r) : 0);
					}};
				}), Q.cssHooks.marginRight = _(Z.reliableMarginRight, (e, t) => {
					if (t) {
						return Q.swap(e, {display: 'inline-block'}, b, [e, 'marginRight']);
					}
				}), Q.each({margin: '', padding: '', border: 'Width'}, (i, o) => {
					Q.cssHooks[i + o] = {expand(e) {
						for (var t = 0, n = {}, r = typeof e === 'string' ? e.split(' ') : [e]; t < 4; t++) {
							n[i + ke[t] + o] = r[t] || r[t - 2] || r[0];
						} return n;
					}}, Ge.test(i) || (Q.cssHooks[i + o].set = T);
				}), Q.fn.extend({css(e, t) {
					return ge(this, (e, t, n) => {
						let r, i,
							o = {},
							a = 0; if (Q.isArray(t)) {
							for (r = $e(e), i = t.length; a < i; a++) {
								o[t[a]] = Q.css(e, t[a], !1, r);
							} return o;
						} return n !== undefined ? Q.style(e, t, n) : Q.css(e, t);
					}, e, t, arguments.length > 1);
				}, show() {
					return S(this, !0);
				}, hide() {
					return S(this);
				}, toggle(e) {
					return typeof e === 'boolean' ? e ? this.show() : this.hide() : this.each(function () {
Te(this) ? Q(this).show() : Q(this).hide();
					});
				}}), (Q.Tween = M).prototype = {constructor: M, init(e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Q.cssNumber[n] ? '' : 'px');
			}, cur() {
				const e = M.propHooks[this.prop]; return e && e.get ? e.get(this) : M.propHooks._default.get(this);
			}, run(e) {
				let t,
					n = M.propHooks[this.prop]; return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this;
			}}, M.prototype.init.prototype = M.prototype, M.propHooks = {_default: {get(e) {
				let t; return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = Q.css(e.elem, e.prop, '')) && t !== 'auto' ? t : 0 : e.elem[e.prop];
			}, set(e) {
				Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (e.elem.style[Q.cssProps[e.prop]] != null || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
			}}}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {set(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
			}}, Q.easing = {linear(e) {
				return e;
			}, swing(e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			}}, Q.fx = M.prototype.init, Q.fx.step = {}; var Je, Ke, Qe, et, tt,
					nt = /^(?:toggle|show|hide)$/,
					rt = new RegExp('^(?:([+-])=|)(' + _e + ')([a-z%]*)$', 'i'),
					it = /queueHooks$/,
					ot = [A],
					at = {'*': [function (e, t) {
						let n = this.createTween(e, t),
							r = n.cur(),
							i = rt.exec(t),
							o = i && i[3] || (Q.cssNumber[e] ? '' : 'px'),
							a = (Q.cssNumber[e] || o !== 'px' && Number(r)) && rt.exec(Q.css(n.elem, e)),
							s = 1,
							u = 20; if (a && a[3] !== o) {
							for (o = o || a[3], i = i || [], a = Number(r) || 1; a /= s = s || '.5', Q.style(n.elem, e, a + o), s !== (s = n.cur() / r) && s !== 1 && --u;) {

							}
						} return i && (a = n.start = Number(a) || Number(r) || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : Number(i[2])), n;
					}]}; Q.Animation = Q.extend(Y, {tweener(e, t) {
Q.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' '); for (var n, r = 0, i = e.length; r < i; r++) {
	n = e[r], at[n] = at[n] || [], at[n].unshift(t);
}
					}, prefilter(e, t) {
						t ? ot.unshift(e) : ot.push(e);
					}}), Q.speed = function (e, t, n) {
					const r = e && typeof e === 'object' ? Q.extend({}, e) : {complete: n || !n && t || Q.isFunction(e) && e, duration: e, easing: n && t || t && !Q.isFunction(t) && t}; return r.duration = Q.fx.off ? 0 : typeof r.duration === 'number' ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default, r.queue != null && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
Q.isFunction(r.old) && r.old.call(this), r.queue && Q.dequeue(this, r.queue);
					}, r;
				}, Q.fn.extend({fadeTo(e, t, n, r) {
					return this.filter(Te).css('opacity', 0).show().end().animate({opacity: t}, e, n, r);
				}, animate(t, e, n, r) {
					let i = Q.isEmptyObject(t),
						o = Q.speed(e, n, r),
						a = function () {
							const e = Y(this, Q.extend({}, t), o); (i || me.get(this, 'finish')) && e.stop(!0);
						}; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
				}, stop(i, e, o) {
					const a = function (e) {
						const t = e.stop; delete e.stop, t(o);
					}; return typeof i !== 'string' && (o = e, e = i, i = undefined), e && !1 !== i && this.queue(i || 'fx', []), this.each(function () {
						let e = !0,
							t = i != null && i + 'queueHooks',
							n = Q.timers,
							r = me.get(this); if (t) {
							r[t] && r[t].stop && a(r[t]);
						} else {
							for (t in r) {
								r[t] && r[t].stop && it.test(t) && a(r[t]);
							}
						} for (t = n.length; t--;) {
							n[t].elem !== this || i != null && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
						}!e && o || Q.dequeue(this, i);
					});
				}, finish(a) {
					return !1 !== a && (a = a || 'fx'), this.each(function () {
						let e,
							t = me.get(this),
							n = t[a + 'queue'],
							r = t[a + 'queueHooks'],
							i = Q.timers,
							o = n ? n.length : 0; for (t.finish = !0, Q.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
							i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
						} for (e = 0; e < o; e++) {
							n[e] && n[e].finish && n[e].finish.call(this);
						} delete t.finish;
					});
				}}), Q.each(['toggle', 'show', 'hide'], (e, r) => {
					const i = Q.fn[r]; Q.fn[r] = function (e, t, n) {
						return e == null || typeof e === 'boolean' ? i.apply(this, arguments) : this.animate(j(r, !0), e, t, n);
					};
				}), Q.each({slideDown: j('show'), slideUp: j('hide'), slideToggle: j('toggle'), fadeIn: {opacity: 'show'}, fadeOut: {opacity: 'hide'}, fadeToggle: {opacity: 'toggle'}}, (e, r) => {
					Q.fn[e] = function (e, t, n) {
						return this.animate(r, e, t, n);
					};
				}), Q.timers = [], Q.fx.tick = function () {
					let e,
						t = 0,
						n = Q.timers; for (Je = Q.now(); t < n.length; t++) {
(e = n[t])() || n[t] !== e || n.splice(t--, 1);
					}n.length || Q.fx.stop(), Je = undefined;
				}, Q.fx.timer = function (e) {
Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop();
				}, Q.fx.interval = 13, Q.fx.start = function () {
					Ke || (Ke = setInterval(Q.fx.tick, Q.fx.interval));
				}, Q.fx.stop = function () {
clearInterval(Ke), Ke = null;
				}, Q.fx.speeds = {slow: 600, fast: 200, _default: 400}, Q.fn.delay = function (r, e) {
					return r = Q.fx && Q.fx.speeds[r] || r, e = e || 'fx', this.queue(e, (e, t) => {
						const n = setTimeout(e, r); t.stop = function () {
clearTimeout(n);
						};
					});
				}, Qe = J.createElement('input'), et = J.createElement('select'), tt = et.appendChild(J.createElement('option')), Qe.type = 'checkbox', Z.checkOn = Qe.value !== '', Z.optSelected = tt.selected, et.disabled = !0, Z.optDisabled = !tt.disabled, (Qe = J.createElement('input')).value = 't', Qe.type = 'radio', Z.radioValue = Qe.value === 't'; let st, ut,
					ct = Q.expr.attrHandle; Q.fn.extend({attr(e, t) {
						return ge(this, Q.attr, e, t, arguments.length > 1);
					}, removeAttr(e) {
						return this.each(function () {
Q.removeAttr(this, e);
						});
					}}), Q.extend({attr(e, t, n) {
						let r, i,
							o = e.nodeType; if (e && o !== 3 && o !== 8 && o !== 2) {
							return typeof e.getAttribute === Ce ? Q.prop(e, t, n) : (o === 1 && Q.isXMLDoc(e) || (t = t.toLowerCase(), r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? ut : st)), n === undefined ? r && 'get' in r && (i = r.get(e, t)) !== null ? i : (i = Q.find.attr(e, t)) == null ? undefined : i : n !== null ? r && 'set' in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, String(n)), n) : void Q.removeAttr(e, t));
						}
					}, removeAttr(e, t) {
						let n, r,
							i = 0,
							o = t && t.match(he); if (o && e.nodeType === 1) {
							for (;n = o[i++];) {
								r = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
							}
						}
					}, attrHooks: {type: {set(e, t) {
						if (!Z.radioValue && t === 'radio' && Q.nodeName(e, 'input')) {
							const n = e.value; return e.setAttribute('type', t), n && (e.value = n), t;
						}
					}}}}), ut = {set(e, t, n) {
					return !1 === t ? Q.removeAttr(e, n) : e.setAttribute(n, n), n;
				}}, Q.each(Q.expr.match.bool.source.match(/\w+/g), (e, t) => {
					const o = ct[t] || Q.find.attr; ct[t] = function (e, t, n) {
						let r, i; return n || (i = ct[t], ct[t] = r, r = o(e, t, n) != null ? t.toLowerCase() : null, ct[t] = i), r;
					};
				}); const lt = /^(?:input|select|textarea|button)$/i; Q.fn.extend({prop(e, t) {
					return ge(this, Q.prop, e, t, arguments.length > 1);
				}, removeProp(e) {
					return this.each(function () {
						delete this[Q.propFix[e] || e];
					});
				}}), Q.extend({propFix: {for: 'htmlFor', class: 'className'}, prop(e, t, n) {
					let r, i,
						o = e.nodeType; if (e && o !== 3 && o !== 8 && o !== 2) {
						return (o !== 1 || !Q.isXMLDoc(e)) && (t = Q.propFix[t] || t, i = Q.propHooks[t]), n !== undefined ? i && 'set' in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && 'get' in i && (r = i.get(e, t)) !== null ? r : e[t];
					}
				}, propHooks: {tabIndex: {get(e) {
					return e.hasAttribute('tabindex') || lt.test(e.nodeName) || e.href ? e.tabIndex : -1;
				}}}}), Z.optSelected || (Q.propHooks.selected = {get(e) {
						const t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null;
					}}), Q.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
						Q.propFix[this.toLowerCase()] = this;
					}); const ft = /[\t\r\n\f]/g; Q.fn.extend({addClass(t) {
						let e, n, r, i, o, a,
							s = typeof t === 'string' && t,
							u = 0,
							c = this.length; if (Q.isFunction(t)) {
							return this.each(function (e) {
Q(this).addClass(t.call(this, e, this.className));
							});
						} if (s) {
							for (e = (t || '').match(he) || []; u < c; u++) {
								if (r = (n = this[u]).nodeType === 1 && (n.className ? (' ' + n.className + ' ').replace(ft, ' ') : ' ')) {
									for (o = 0; i = e[o++];) {
r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
									}a = Q.trim(r), n.className !== a && (n.className = a);
								}
							}
						} return this;
					}, removeClass(t) {
						let e, n, r, i, o, a,
							s = arguments.length === 0 || typeof t === 'string' && t,
							u = 0,
							c = this.length; if (Q.isFunction(t)) {
							return this.each(function (e) {
Q(this).removeClass(t.call(this, e, this.className));
							});
						} if (s) {
							for (e = (t || '').match(he) || []; u < c; u++) {
								if (r = (n = this[u]).nodeType === 1 && (n.className ? (' ' + n.className + ' ').replace(ft, ' ') : '')) {
									for (o = 0; i = e[o++];) {
										for (;r.indexOf(' ' + i + ' ') >= 0;) {
											r = r.replace(' ' + i + ' ', ' ');
										}
									}a = t ? Q.trim(r) : '', n.className !== a && (n.className = a);
								}
							}
						} return this;
					}, toggleClass(i, t) {
						const o = typeof i; return typeof t === 'boolean' && o === 'string' ? t ? this.addClass(i) : this.removeClass(i) : Q.isFunction(i) ? this.each(function (e) {
Q(this).toggleClass(i.call(this, e, this.className, t), t);
						}) : this.each(function () {
							if (o === 'string') {
								for (var e, t = 0, n = Q(this), r = i.match(he) || []; e = r[t++];) {
n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
								}
							} else {
								o !== Ce && o !== 'boolean' || (this.className && me.set(this, '__className__', this.className), this.className = this.className || !1 === i ? '' : me.get(this, '__className__') || '');
							}
						});
					}, hasClass(e) {
						for (let t = ' ' + e + ' ', n = 0, r = this.length; n < r; n++) {
							if (this[n].nodeType === 1 && (' ' + this[n].className + ' ').replace(ft, ' ').indexOf(t) >= 0) {
								return !0;
							}
						} return !1;
					}}); const dt = /\r/g; Q.fn.extend({val(n) {
						let r, e, i,
							t = this[0]; return arguments.length ? (i = Q.isFunction(n), this.each(function (e) {
							let t; this.nodeType === 1 && ((t = i ? n.call(this, e, Q(this).val()) : n) == null ? t = '' : typeof t === 'number' ? t = String(t) : Q.isArray(t) && (t = Q.map(t, e => {
								return e == null ? '' : String(e);
							})), (r = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()]) && 'set' in r && r.set(this, t, 'value') !== undefined || (this.value = t));
						})) : t ? (r = Q.valHooks[t.type] || Q.valHooks[t.nodeName.toLowerCase()]) && 'get' in r && (e = r.get(t, 'value')) !== undefined ? e : typeof (e = t.value) === 'string' ? e.replace(dt, '') : e == null ? '' : e : void 0;
					}}), Q.extend({valHooks: {option: {get(e) {
						const t = Q.find.attr(e, 'value'); return t != null ? t : Q.trim(Q.text(e));
					}}, select: {get(e) {
						for (var t, n, r = e.options, i = e.selectedIndex, o = e.type === 'select-one' || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) {
							if (((n = r[u]).selected || u === i) && (Z.optDisabled ? !n.disabled : n.getAttribute('disabled') === null) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, 'optgroup'))) {
								if (t = Q(n).val(), o) {
									return t;
								} a.push(t);
							}
						} return a;
					}, set(e, t) {
						for (var n, r, i = e.options, o = Q.makeArray(t), a = i.length; a--;) {
							((r = i[a]).selected = Q.inArray(r.value, o) >= 0) && (n = !0);
						} return n || (e.selectedIndex = -1), o;
					}}}}), Q.each(['radio', 'checkbox'], function () {
						Q.valHooks[this] = {set(e, t) {
							if (Q.isArray(t)) {
								return e.checked = Q.inArray(Q(e).val(), t) >= 0;
							}
						}}, Z.checkOn || (Q.valHooks[this].get = function (e) {
							return e.getAttribute('value') === null ? 'on' : e.value;
						});
					}), Q.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), (e, n) => {
						Q.fn[n] = function (e, t) {
							return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
						};
					}), Q.fn.extend({hover(e, t) {
						return this.mouseenter(e).mouseleave(t || e);
					}, bind(e, t, n) {
						return this.on(e, null, t, n);
					}, unbind(e, t) {
						return this.off(e, null, t);
					}, delegate(e, t, n, r) {
						return this.on(t, e, n, r);
					}, undelegate(e, t, n) {
						return arguments.length === 1 ? this.off(e, '**') : this.off(t, e || '**', n);
					}}); let ht = Q.now(),
						pt = /\?/; Q.parseJSON = function (e) {
						return JSON.parse(String(e));
					}, Q.parseXML = function (e) {
						let t; if (!e || typeof e !== 'string') {
							return null;
						} try {
							t = (new DOMParser()).parseFromString(e, 'text/xml');
						} catch (n) {
							t = undefined;
						} return t && !t.getElementsByTagName('parsererror').length || Q.error('Invalid XML: ' + e), t;
					}; var gt, mt,
						yt = /#.*$/,
						vt = /([?&])_=[^&]*/,
						wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
						xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
						bt = /^(?:GET|HEAD)$/,
						_t = /^\/\//,
						kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
						Tt = {},
						Dt = {},
						Ct = '*/'.concat('*'); try {
						mt = location.href;
					} catch (Gt) {
						(mt = J.createElement('a')).href = '', mt = mt.href;
					}gt = kt.exec(mt.toLowerCase()) || [], Q.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: mt, type: 'GET', isLocal: xt.test(gt[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: {'*': Ct, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript'}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: 'responseXML', text: 'responseText', json: 'responseJSON'}, converters: {'* text': String, 'text html': !0, 'text json': Q.parseJSON, 'text xml': Q.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup(e, t) {
						return t ? H(H(e, Q.ajaxSettings), t) : H(Q.ajaxSettings, e);
					}, ajaxPrefilter: F(Tt), ajaxTransport: F(Dt), ajax(e, t) {
						function n(e, t, n, r) {
							let i, o, a, s, u,
								c = t; b !== 2 && (b = 2, h && clearTimeout(h), l = undefined, d = r || '', _.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 || e === 304, n && (s = I(g, _, n)), s = P(g, s, _, i), i ? (g.ifModified && ((u = _.getResponseHeader('Last-Modified')) && (Q.lastModified[f] = u), (u = _.getResponseHeader('etag')) && (Q.etag[f] = u)), e === 204 || g.type === 'HEAD' ? c = 'nocontent' : e === 304 ? c = 'notmodified' : (c = s.state, o = s.data, i = !(a = s.error))) : (a = c, !e && c || (c = 'error', e < 0 && (e = 0))), _.status = e, _.statusText = String(t || c), i ? v.resolveWith(m, [o, c, _]) : v.rejectWith(m, [_, c, a]), _.statusCode(x), x = undefined, p && y.trigger(i ? 'ajaxSuccess' : 'ajaxError', [_, g, i ? o : a]), w.fireWith(m, [_, c]), p && (y.trigger('ajaxComplete', [_, g]), --Q.active || Q.event.trigger('ajaxStop')));
						} typeof e === 'object' && (t = e, e = undefined), t = t || {}; var l, f, d, r, h, i, p, o,
							g = Q.ajaxSetup({}, t),
							m = g.context || g,
							y = g.context && (m.nodeType || m.jquery) ? Q(m) : Q.event,
							v = Q.Deferred(),
							w = Q.Callbacks('once memory'),
							x = g.statusCode || {},
							a = {},
							s = {},
							b = 0,
							u = 'canceled',
							_ = {readyState: 0, getResponseHeader(e) {
								let t; if (b === 2) {
									if (!r) {
										for (r = {}; t = wt.exec(d);) {
											r[t[1].toLowerCase()] = t[2];
										}
									}t = r[e.toLowerCase()];
								} return t == null ? null : t;
							}, getAllResponseHeaders() {
								return b === 2 ? d : null;
							}, setRequestHeader(e, t) {
								const n = e.toLowerCase(); return b || (e = s[n] = s[n] || e, a[e] = t), this;
							}, overrideMimeType(e) {
								return b || (g.mimeType = e), this;
							}, statusCode(e) {
								let t; if (e) {
									if (b < 2) {
										for (t in e) {
											x[t] = [x[t], e[t]];
										}
									} else {
_.always(e[_.status]);
									}
								} return this;
							}, abort(e) {
								const t = e || u; return l && l.abort(t), n(0, t), this;
							}}; if (v.promise(_).complete = w.add, _.success = _.done, _.error = _.fail, g.url = (String(e || g.url || mt)).replace(yt, '').replace(_t, gt[1] + '//'), g.type = t.method || t.type || g.method || g.type, g.dataTypes = Q.trim(g.dataType || '*').toLowerCase().match(he) || [''], g.crossDomain == null && (i = kt.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === gt[1] && i[2] === gt[2] && (i[3] || (i[1] === 'http:' ? '80' : '443')) === (gt[3] || (gt[1] === 'http:' ? '80' : '443')))), g.data && g.processData && typeof g.data !== 'string' && (g.data = Q.param(g.data, g.traditional)), L(Tt, g, t, _), b === 2) {
							return _;
						} for (o in (p = g.global) && Q.active++ == 0 && Q.event.trigger('ajaxStart'), g.type = g.type.toUpperCase(), g.hasContent = !bt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (pt.test(f) ? '&' : '?') + g.data, delete g.data), !1 === g.cache && (g.url = vt.test(f) ? f.replace(vt, '$1_=' + ht++) : f + (pt.test(f) ? '&' : '?') + '_=' + ht++)), g.ifModified && (Q.lastModified[f] && _.setRequestHeader('If-Modified-Since', Q.lastModified[f]), Q.etag[f] && _.setRequestHeader('If-None-Match', Q.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && _.setRequestHeader('Content-Type', g.contentType), _.setRequestHeader('Accept', g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== '*' ? ', ' + Ct + '; q=0.01' : '') : g.accepts['*']), g.headers) {
_.setRequestHeader(o, g.headers[o]);
						} if (g.beforeSend && (!1 === g.beforeSend.call(m, _, g) || b === 2)) {
							return _.abort();
						} for (o in u = 'abort', {success: 1, error: 1, complete: 1}) {
_[o](g[o]);
						} if (l = L(Dt, g, t, _)) {
							_.readyState = 1, p && y.trigger('ajaxSend', [_, g]), g.async && g.timeout > 0 && (h = setTimeout(() => {
_.abort('timeout');
							}, g.timeout)); try {
								b = 1, l.send(a, n);
							} catch (Gt) {
								if (!(b < 2)) {
									throw Gt;
								} n(-1, Gt);
							}
						} else {
n(-1, 'No Transport');
						} return _;
					}, getJSON(e, t, n) {
						return Q.get(e, t, n, 'json');
					}, getScript(e, t) {
						return Q.get(e, undefined, t, 'script');
					}}), Q.each(['get', 'post'], (e, i) => {
						Q[i] = function (e, t, n, r) {
							return Q.isFunction(t) && (r = r || n, n = t, t = undefined), Q.ajax({url: e, type: i, dataType: r, data: t, success: n});
						};
					}), Q.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], (e, t) => {
						Q.fn[t] = function (e) {
							return this.on(t, e);
						};
					}), Q._evalUrl = function (e) {
						return Q.ajax({url: e, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0});
					}, Q.fn.extend({wrapAll(t) {
						let e; return Q.isFunction(t) ? this.each(function (e) {
Q(this).wrapAll(t.call(this, e));
						}) : (this[0] && (e = Q(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
							for (var e = this; e.firstElementChild;) {
								e = e.firstElementChild;
							} return e;
						}).append(this)), this);
					}, wrapInner(n) {
						return Q.isFunction(n) ? this.each(function (e) {
Q(this).wrapInner(n.call(this, e));
						}) : this.each(function () {
							let e = Q(this),
								t = e.contents(); t.length ? t.wrapAll(n) : e.append(n);
						});
					}, wrap(t) {
						const n = Q.isFunction(t); return this.each(function (e) {
Q(this).wrapAll(n ? t.call(this, e) : t);
						});
					}, unwrap() {
						return this.parent().each(function () {
Q.nodeName(this, 'body') || Q(this).replaceWith(this.childNodes);
						}).end();
					}}), Q.expr.filters.hidden = function (e) {
						return e.offsetWidth <= 0 && e.offsetHeight <= 0;
					}, Q.expr.filters.visible = function (e) {
						return !Q.expr.filters.hidden(e);
					}; var St = /%20/g,
						Mt = /\[\]$/,
						Nt = /\r?\n/g,
						jt = /^(?:submit|button|image|reset|file)$/i,
						Et = /^(?:input|select|textarea|keygen)/i; Q.param = function (e, t) {
						let n,
							r = [],
							i = function (e, t) {
								t = Q.isFunction(t) ? t() : t == null ? '' : t, r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
							}; if (t === undefined && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) {
Q.each(e, function () {
i(this.name, this.value);
});
						} else {
							for (n in e) {
W(n, e[n], t, i);
							}
						} return r.join('&').replace(St, '+');
					}, Q.fn.extend({serialize() {
						return Q.param(this.serializeArray());
					}, serializeArray() {
						return this.map(function () {
							const e = Q.prop(this, 'elements'); return e ? Q.makeArray(e) : this;
						}).filter(function () {
							const e = this.type; return this.name && !Q(this).is(':disabled') && Et.test(this.nodeName) && !jt.test(e) && (this.checked || !De.test(e));
						}).map(function (e, t) {
							const n = Q(this).val(); return n == null ? null : Q.isArray(n) ? Q.map(n, e => {
								return {name: t.name, value: e.replace(Nt, '\r\n')};
							}) : {name: t.name, value: n.replace(Nt, '\r\n')};
						}).get();
					}}), Q.ajaxSettings.xhr = function () {
						try {
							return new XMLHttpRequest();
						} catch (Gt) {}
					}; let At = 0,
						Ot = {},
						Yt = {0: 200, 1223: 204},
						Ft = Q.ajaxSettings.xhr(); p.ActiveXObject && Q(p).on('unload', () => {
							for (const e in Ot) {
Ot[e]();
							}
						}), Z.cors = Boolean(Ft) && 'withCredentials' in Ft, Z.ajax = Ft = Boolean(Ft), Q.ajaxTransport(o => {
							let a; if (Z.cors || Ft && !o.crossDomain) {
								return {send(e, t) {
									let n,
										r = o.xhr(),
										i = ++At; if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) {
										for (n in o.xhrFields) {
											r[n] = o.xhrFields[n];
										}
									} for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), e) {
r.setRequestHeader(n, e[n]);
									}a = function (e) {
										return function () {
											a && (delete Ot[i], a = r.addEventListener('load', r.addEventListener('error', null)), e === 'abort' ? r.abort() : e === 'error' ? t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, typeof r.responseText === 'string' ? {text: r.responseText} : undefined, r.getAllResponseHeaders()));
										};
									}, r.addEventListener('load', a()), r.addEventListener('error', a('error')), a = Ot[i] = a('abort'); try {
r.send(o.hasContent && o.data || null);
									} catch (Gt) {
										if (a) {
											throw Gt;
										}
									}
								}, abort() {
									a && a();
								}};
							}
						}), Q.ajaxSetup({accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'}, contents: {script: /(?:java|ecma)script/}, converters: {'text script'(e) {
							return Q.globalEval(e), e;
						}}}), Q.ajaxPrefilter('script', e => {
							e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = 'GET');
						}), Q.ajaxTransport('script', n => {
							let r, i; if (n.crossDomain) {
								return {send(e, t) {
									r = Q('<script>').prop({async: !0, charset: n.scriptCharset, src: n.url}).on('load error', i = function (e) {
r.remove(), i = null, e && t(e.type === 'error' ? 404 : 200, e.type);
									}), J.head.appendChild(r[0]);
								}, abort() {
									i && i();
								}};
							}
						}); let Lt = [],
						Ht = /(=)\?(?=&|$)|\?\?/; Q.ajaxSetup({jsonp: 'callback', jsonpCallback() {
							const e = Lt.pop() || Q.expando + '_' + ht++; return this[e] = !0, e;
						}}), Q.ajaxPrefilter('json jsonp', (e, t, n) => {
							let r, i, o,
								a = !1 !== e.jsonp && (Ht.test(e.url) ? 'url' : typeof e.data === 'string' && !(e.contentType || '').indexOf('application/x-www-form-urlencoded') && Ht.test(e.data) && 'data'); if (a || e.dataTypes[0] === 'jsonp') {
								return r = e.jsonpCallback = Q.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ht, '$1' + r) : !1 !== e.jsonp && (e.url += (pt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r), e.converters['script json'] = function () {
									return o || Q.error(r + ' was not called'), o[0];
								}, e.dataTypes[0] = 'json', i = p[r], p[r] = function () {
									o = arguments;
								}, n.always(() => {
									p[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Lt.push(r)), o && Q.isFunction(i) && i(o[0]), o = i = undefined;
								}), 'script';
							}
						}), Q.parseHTML = function (e, t, n) {
						if (!e || typeof e !== 'string') {
							return null;
						} typeof t === 'boolean' && (n = t, t = !1), t = t || J; let r = ae.exec(e),
							i = !n && []; return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, i), i && i.length && Q(i).remove(), Q.merge([], r.childNodes));
					}; const It = Q.fn.load; Q.fn.load = function (e, t, n) {
							if (typeof e !== 'string' && It) {
								return It.apply(this, arguments);
							} let r, i, o,
								a = this,
								s = e.indexOf(' '); return s >= 0 && (r = Q.trim(e.slice(s)), e = e.slice(0, s)), Q.isFunction(t) ? (n = t, t = undefined) : t && typeof t === 'object' && (i = 'POST'), a.length > 0 && Q.ajax({url: e, type: i, dataType: 'html', data: t}).done(function (e) {
									o = arguments, a.html(r ? Q('<div>').append(Q.parseHTML(e)).find(r) : e);
								}).complete(n && ((e, t) => {
a.each(n, o || [e.responseText, t, e]);
								})), this;
						}, Q.expr.filters.animated = function (t) {
							return Q.grep(Q.timers, e => {
								return t === e.elem;
							}).length;
						}; const Pt = p.document.documentElement; Q.offset = {setOffset(e, t, n) {
							let r, i, o, a, s, u,
								c = Q.css(e, 'position'),
								l = Q(e),
								f = {}; c === 'static' && (e.style.position = 'relative'), s = l.offset(), o = Q.css(e, 'top'), u = Q.css(e, 'left'), (c === 'absolute' || c === 'fixed') && (o + u).indexOf('auto') > -1 ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Q.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + a), t.left != null && (f.left = t.left - s.left + i), 'using' in t ? t.using.call(e, f) : l.css(f);
						}}, Q.fn.extend({offset(t) {
							if (arguments.length) {
								return t === undefined ? this : this.each(function (e) {
Q.offset.setOffset(this, t, e);
								});
							} let e, n,
								r = this[0],
								i = {top: 0, left: 0},
								o = r && r.ownerDocument; return o ? (e = o.documentElement, Q.contains(e, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = q(o), {top: i.top + n.pageYOffset - e.clientTop, left: i.left + n.pageXOffset - e.clientLeft}) : i) : void 0;
						}, position() {
							if (this[0]) {
								let e, t,
									n = this[0],
									r = {top: 0, left: 0}; return Q.css(n, 'position') === 'fixed' ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], 'html') || (r = e.offset()), r.top += Q.css(e[0], 'borderTopWidth', !0), r.left += Q.css(e[0], 'borderLeftWidth', !0)), {top: t.top - r.top - Q.css(n, 'marginTop', !0), left: t.left - r.left - Q.css(n, 'marginLeft', !0)};
							}
						}, offsetParent() {
							return this.map(function () {
								for (var e = this.offsetParent || Pt; e && !Q.nodeName(e, 'html') && Q.css(e, 'position') === 'static';) {
									e = e.offsetParent;
								} return e || Pt;
							});
						}}), Q.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, (t, i) => {
							const o = i === 'pageYOffset'; Q.fn[t] = function (e) {
								return ge(this, (e, t, n) => {
									const r = q(e); if (n === undefined) {
										return r ? r[i] : e[t];
									} r ? r.scrollTo(o ? p.pageXOffset : n, o ? n : p.pageYOffset) : e[t] = n;
								}, t, e, arguments.length, null);
							};
						}), Q.each(['top', 'left'], (e, n) => {
							Q.cssHooks[n] = _(Z.pixelPosition, (e, t) => {
								if (t) {
									return t = b(e, n), Re.test(t) ? Q(e).position()[n] + 'px' : t;
								}
							});
						}), Q.each({Height: 'height', Width: 'width'}, (o, a) => {
Q.each({padding: 'inner' + o, content: a, '': 'outer' + o}, (r, e) => {
	Q.fn[e] = function (e, t) {
		let n = arguments.length && (r || typeof e !== 'boolean'),
			i = r || (!0 === e || !0 === t ? 'margin' : 'border'); return ge(this, (e, t, n) => {
				let r; return Q.isWindow(e) ? e.document.documentElement['client' + o] : e.nodeType === 9 ? (r = e.documentElement, Math.max(e.body['scroll' + o], r['scroll' + o], e.body['offset' + o], r['offset' + o], r['client' + o])) : n === undefined ? Q.css(e, t, i) : Q.style(e, t, n, i);
			}, a, n ? e : undefined, n, null);
	};
});
						}), Q.fn.size = function () {
							return this.length;
						}, Q.fn.andSelf = Q.fn.addBack, typeof define === 'function' && define.amd && define('jquery', [], () => {
							return Q;
						}); let Wt = p.jQuery,
							qt = p.$; return Q.noConflict = function (e) {
							return p.$ === Q && (p.$ = qt), e && p.jQuery === Q && (p.jQuery = Wt), Q;
						}, typeof e === Ce && (p.jQuery = p.$ = Q), Q;
}), (function (e, t) {
	e.viewloader = t({}, e.jQuery || e.Zepto || e.$);
})(this, (e, o) => {
	'use strict'; const a = function (e) {
		return e.charAt(0).toUpperCase() + e.slice(1);
	}; return e.execute = function (i, e) {
(e ? e.find('[data-view]') : o('[data-view]')).each((e, t) => {
	let n = o(t),
		r = a(n.data('view')); r && i[r] && new i[r](n, t);
});
	}, e;
}), window.Market = {DOMUtils: {}, Helpers: {}, SpecialEvents: {}, State: {}, Validations: {}, GoogleAnalytics: {}}, window.Views = {}, (function () {
	Views.GoogleExperimentTracking = (function () {
		function e(e) {
			this.$el = e, this.experimentId = this.$el.data().experimentId, this.variant = this.$el.data().variant, Market.Helpers.GoogleAnalytics.set('expId', this.experimentId), Market.Helpers.GoogleAnalytics.set('expVar', this.variant), Market.Helpers.GoogleAnalytics.sendEvent('event', 'experiment', 'view', {label: this.experimentId, value: this.variant, nonInteraction: !0});
		} return e;
	})();
}).call(this), (function (e) {
	typeof define === 'function' && define.amd ? define(['jquery'], e) : e(jQuery);
})(d => {
	function h(e) {
		return y.raw ? e : encodeURIComponent(e);
	} function p(e) {
		return y.raw ? e : decodeURIComponent(e);
	} function g(e) {
		return h(y.json ? JSON.stringify(e) : String(e));
	} function r(e) {
		e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')); try {
			e = decodeURIComponent(e.replace(n, ' '));
		} catch (t) {
			return;
		} try {
			return y.json ? JSON.parse(e) : e;
		} catch (t) {}
	} function m(e, t) {
		const n = y.raw ? e : r(e); return d.isFunction(t) ? t(n) : n;
	} var n = /\+/g,
		y = d.cookie = function (e, t, n) {
			if (t !== undefined && !d.isFunction(t)) {
				if (typeof (n = d.extend({}, y.defaults, n)).expires === 'number') {
					let r = n.expires,
						i = n.expires = new Date(); i.setDate(i.getDate() + r);
				} return document.cookie = [h(e), '=', g(t), n.expires ? '; expires=' + n.expires.toUTCString() : '', n.path ? '; path=' + n.path : '', n.domain ? '; domain=' + n.domain : '', n.secure ? '; secure' : ''].join('');
			} for (var o = e ? undefined : {}, a = document.cookie ? document.cookie.split('; ') : [], s = 0, u = a.length; s < u; s++) {
				let c = a[s].split('='),
					l = p(c.shift()),
					f = c.join('='); if (e && e === l) {
					o = m(f, t); break;
				}e || (f = m(f)) === undefined || (o[l] = f);
			} return o;
		}; y.defaults = {}, d.removeCookie = function (e, t) {
		return d.cookie(e) !== undefined && (d.cookie(e, '', d.extend({}, t, {expires: -1})), !0);
	};
}), (function () {
	function e(s) {
		function u(e, t, n, r, i, o) {
			for (;i >= 0 && i < o; i += s) {
				const a = r ? r[i] : i; n = t(n, e[a], a, e);
			} return n;
		} return function (e, t, n, r) {
			t = v(t, r, 4); let i = !k(e) && y.keys(e),
				o = (i || e).length,
				a = s > 0 ? 0 : o - 1; return arguments.length < 3 && (n = e[i ? i[a] : a], a += s), u(e, t, n, i, a, o);
		};
	} function t(o) {
		return function (e, t, n) {
			t = w(t, n); for (let r = e != null && e.length, i = o > 0 ? 0 : r - 1; i >= 0 && i < r; i += o) {
				if (t(e[i], i, e)) {
					return i;
				}
			} return -1;
		};
	} function r(e, t) {
		let n = M.length,
			r = e.constructor,
			i = y.isFunction(r) && r.prototype || a,
			o = 'constructor'; for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;) {
			(o = M[n]) in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o);
		}
	} var n = this,
		i = n._,
		o = Array.prototype,
		a = Object.prototype,
		s = Function.prototype,
		u = o.push,
		c = o.slice,
		f = a.toString,
		l = a.hasOwnProperty,
		d = Array.isArray,
		h = Object.keys,
		p = s.bind,
		g = Object.create,
		m = function () {},
		y = function (e) {
			return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e);
		}; typeof exports !== 'undefined' ? (typeof module !== 'undefined' && module.exports && (exports = module.exports = y), exports._ = y) : n._ = y, y.VERSION = '1.8.2'; var v = function (i, o, e) {
			if (void 0 === o) {
				return i;
			} switch (e == null ? 3 : e) {
				case 1: return function (e) {
					return i.call(o, e);
				}; case 2: return function (e, t) {
					return i.call(o, e, t);
				}; case 3: return function (e, t, n) {
					return i.call(o, e, t, n);
				}; case 4: return function (e, t, n, r) {
					return i.call(o, e, t, n, r);
				};
			} return function () {
				return i.apply(o, arguments);
			};
		},
		w = function (e, t, n) {
			return e == null ? y.identity : y.isFunction(e) ? v(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e);
		}; y.iteratee = function (e, t) {
		return w(e, t, Infinity);
	}; var x = function (u, c) {
			return function (e) {
				const t = arguments.length; if (t < 2 || e == null) {
					return e;
				} for (let n = 1; n < t; n++) {
					for (let r = arguments[n], i = u(r), o = i.length, a = 0; a < o; a++) {
						const s = i[a]; c && void 0 !== e[s] || (e[s] = r[s]);
					}
				} return e;
			};
		},
		b = function (e) {
			if (!y.isObject(e)) {
				return {};
			} if (g) {
				return g(e);
			} m.prototype = e; const t = new m(); return m.prototype = null, t;
		},
		_ = Math.pow(2, 53) - 1,
		k = function (e) {
			const t = e && e.length; return typeof t === 'number' && t >= 0 && t <= _;
		}; y.each = y.forEach = function (e, t, n) {
		let r, i; if (t = v(t, n), k(e)) {
			for (r = 0, i = e.length; r < i; r++) {
t(e[r], r, e);
			}
		} else {
			const o = y.keys(e); for (r = 0, i = o.length; r < i; r++) {
t(e[o[r]], o[r], e);
			}
		} return e;
	}, y.map = y.collect = function (e, t, n) {
		t = w(t, n); for (var r = !k(e) && y.keys(e), i = (r || e).length, o = new Array(i), a = 0; a < i; a++) {
			const s = r ? r[a] : a; o[a] = t(e[s], s, e);
		} return o;
	}, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function (e, t, n) {
		let r; if (void 0 !== (r = k(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && r !== -1) {
			return e[r];
		}
	}, y.filter = y.select = function (e, r, t) {
		const i = []; return r = w(r, t), y.each(e, (e, t, n) => {
r(e, t, n) && i.push(e);
		}), i;
	}, y.reject = function (e, t, n) {
		return y.filter(e, y.negate(w(t)), n);
	}, y.every = y.all = function (e, t, n) {
		t = w(t, n); for (let r = !k(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
			const a = r ? r[o] : o; if (!t(e[a], a, e)) {
				return !1;
			}
		} return !0;
	}, y.some = y.any = function (e, t, n) {
		t = w(t, n); for (let r = !k(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
			const a = r ? r[o] : o; if (t(e[a], a, e)) {
				return !0;
			}
		} return !1;
	}, y.contains = y.includes = y.include = function (e, t, n) {
		return k(e) || (e = y.values(e)), y.indexOf(e, t, typeof n === 'number' && n) >= 0;
	}, y.invoke = function (e, n) {
		let r = c.call(arguments, 2),
			i = y.isFunction(n); return y.map(e, e => {
				const t = i ? n : e[n]; return t == null ? t : t.apply(e, r);
			});
	}, y.pluck = function (e, t) {
		return y.map(e, y.property(t));
	}, y.where = function (e, t) {
		return y.filter(e, y.matcher(t));
	}, y.findWhere = function (e, t) {
		return y.find(e, y.matcher(t));
	}, y.max = function (e, r, t) {
		let n, i,
			o = -Infinity,
			a = -Infinity; if (r == null && e != null) {
			for (let s = 0, u = (e = k(e) ? e : y.values(e)).length; s < u; s++) {
				n = e[s], o < n && (o = n);
			}
		} else {
			r = w(r, t), y.each(e, (e, t, n) => {
				i = r(e, t, n), (a < i || i === -Infinity && o === -Infinity) && (o = e, a = i);
			});
		} return o;
	}, y.min = function (e, r, t) {
		let n, i,
			o = Infinity,
			a = Infinity; if (r == null && e != null) {
			for (let s = 0, u = (e = k(e) ? e : y.values(e)).length; s < u; s++) {
				(n = e[s]) < o && (o = n);
			}
		} else {
			r = w(r, t), y.each(e, (e, t, n) => {
				((i = r(e, t, n)) < a || i === Infinity && o === Infinity) && (o = e, a = i);
			});
		} return o;
	}, y.shuffle = function (e) {
		for (var t, n = k(e) ? e : y.values(e), r = n.length, i = new Array(r), o = 0; o < r; o++) {
			(t = y.random(0, o)) !== o && (i[o] = i[t]), i[t] = n[o];
		} return i;
	}, y.sample = function (e, t, n) {
		return t == null || n ? (k(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t));
	}, y.sortBy = function (e, r, t) {
		return r = w(r, t), y.pluck(y.map(e, (e, t, n) => {
			return {value: e, index: t, criteria: r(e, t, n)};
		}).sort((e, t) => {
			let n = e.criteria,
				r = t.criteria; if (n !== r) {
				if (r < n || void 0 === n) {
					return 1;
				} if (n < r || void 0 === r) {
					return -1;
				}
			} return e.index - t.index;
		}), 'value');
	}; const T = function (a) {
		return function (r, i, e) {
			const o = {}; return i = w(i, e), y.each(r, (e, t) => {
				const n = i(e, t, r); a(o, e, n);
			}), o;
		};
	}; y.groupBy = T((e, t, n) => {
y.has(e, n) ? e[n].push(t) : e[n] = [t];
	}), y.indexBy = T((e, t, n) => {
		e[n] = t;
	}), y.countBy = T((e, t, n) => {
y.has(e, n) ? e[n]++ : e[n] = 1;
	}), y.toArray = function (e) {
		return e ? y.isArray(e) ? c.call(e) : k(e) ? y.map(e, y.identity) : y.values(e) : [];
	}, y.size = function (e) {
		return e == null ? 0 : k(e) ? e.length : y.keys(e).length;
	}, y.partition = function (e, r, t) {
		r = w(r, t); let i = [],
			o = []; return y.each(e, (e, t, n) => {
(r(e, t, n) ? i : o).push(e);
			}), [i, o];
	}, y.first = y.head = y.take = function (e, t, n) {
		if (e != null) {
			return t == null || n ? e[0] : y.initial(e, e.length - t);
		}
	}, y.initial = function (e, t, n) {
		return c.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)));
	}, y.last = function (e, t, n) {
		if (e != null) {
			return t == null || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t));
		}
	}, y.rest = y.tail = y.drop = function (e, t, n) {
		return c.call(e, t == null || n ? 1 : t);
	}, y.compact = function (e) {
		return y.filter(e, y.identity);
	}; var D = function (e, t, n, r) {
		for (var i = [], o = 0, a = r || 0, s = e && e.length; a < s; a++) {
			let u = e[a]; if (k(u) && (y.isArray(u) || y.isArguments(u))) {
				t || (u = D(u, t, n)); let c = 0,
					l = u.length; for (i.length += l; c < l;) {
					i[o++] = u[c++];
				}
			} else {
				n || (i[o++] = u);
			}
		} return i;
	}; y.flatten = function (e, t) {
		return D(e, t, !1);
	}, y.without = function (e) {
		return y.difference(e, c.call(arguments, 1));
	}, y.uniq = y.unique = function (e, t, n, r) {
		if (e == null) {
			return [];
		} y.isBoolean(t) || (r = n, n = t, t = !1), n != null && (n = w(n, r)); for (var i = [], o = [], a = 0, s = e.length; a < s; a++) {
			let u = e[a],
				c = n ? n(u, a, e) : u; t ? (a && o === c || i.push(u), o = c) : n ? y.contains(o, c) || (o.push(c), i.push(u)) : y.contains(i, u) || i.push(u);
		} return i;
	}, y.union = function () {
		return y.uniq(D(arguments, !0, !0));
	}, y.intersection = function (e) {
		if (e == null) {
			return [];
		} for (var t = [], n = arguments.length, r = 0, i = e.length; r < i; r++) {
			const o = e[r]; if (!y.contains(t, o)) {
				for (var a = 1; a < n && y.contains(arguments[a], o); a++) {

				}a === n && t.push(o);
			}
		} return t;
	}, y.difference = function (e) {
		const t = D(arguments, !0, !0, 1); return y.filter(e, e => {
			return !y.contains(t, e);
		});
	}, y.zip = function () {
		return y.unzip(arguments);
	}, y.unzip = function (e) {
		for (var t = e && y.max(e, 'length').length || 0, n = new Array(t), r = 0; r < t; r++) {
			n[r] = y.pluck(e, r);
		} return n;
	}, y.object = function (e, t) {
		for (var n = {}, r = 0, i = e && e.length; r < i; r++) {
			t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
		} return n;
	}, y.indexOf = function (e, t, n) {
		let r = 0,
			i = e && e.length; if (typeof n === 'number') {
			r = n < 0 ? Math.max(0, i + n) : n;
		} else if (n && i) {
			return e[r = y.sortedIndex(e, t)] === t ? r : -1;
		} if (t != t) {
			return y.findIndex(c.call(e, r), y.isNaN);
		} for (;r < i; r++) {
			if (e[r] === t) {
				return r;
			}
		} return -1;
	}, y.lastIndexOf = function (e, t, n) {
		let r = e ? e.length : 0; if (typeof n === 'number' && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1)), t != t) {
			return y.findLastIndex(c.call(e, 0, r), y.isNaN);
		} for (;--r >= 0;) {
			if (e[r] === t) {
				return r;
			}
		} return -1;
	}, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function (e, t, n, r) {
		for (var i = (n = w(n, r, 1))(t), o = 0, a = e.length; o < a;) {
			const s = Math.floor((o + a) / 2); n(e[s]) < i ? o = s + 1 : a = s;
		} return o;
	}, y.range = function (e, t, n) {
		arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1; for (var r = Math.max(Math.ceil((t - e) / n), 0), i = new Array(r), o = 0; o < r; o++, e += n) {
			i[o] = e;
		} return i;
	}; const C = function (e, t, n, r, i) {
		if (!(r instanceof t)) {
			return e.apply(n, i);
		} let o = b(e.prototype),
			a = e.apply(o, i); return y.isObject(a) ? a : o;
	}; y.bind = function (e, t) {
		if (p && e.bind === p) {
			return p.apply(e, c.call(arguments, 1));
		} if (!y.isFunction(e)) {
			throw new TypeError('Bind must be called on a function');
		} var n = c.call(arguments, 2),
			r = function () {
				return C(e, r, t, this, n.concat(c.call(arguments)));
			}; return r;
	}, y.partial = function (i) {
		var o = c.call(arguments, 1),
			a = function () {
				for (var e = 0, t = o.length, n = new Array(t), r = 0; r < t; r++) {
					n[r] = o[r] === y ? arguments[e++] : o[r];
				} for (;e < arguments.length;) {
n.push(arguments[e++]);
				} return C(i, a, this, this, n);
			}; return a;
	}, y.bindAll = function (e) {
		let t, n,
			r = arguments.length; if (r <= 1) {
			throw new Error('bindAll must be passed function names');
		} for (t = 1; t < r; t++) {
			e[n = arguments[t]] = y.bind(e[n], e);
		} return e;
	}, y.memoize = function (r, i) {
		var o = function (e) {
			let t = o.cache,
				n = String(i ? i.apply(this, arguments) : e); return y.has(t, n) || (t[n] = r.apply(this, arguments)), t[n];
		}; return o.cache = {}, o;
	}, y.delay = function (e, t) {
		const n = c.call(arguments, 2); return setTimeout(() => {
			return e.apply(null, n);
		}, t);
	}, y.defer = y.partial(y.delay, y, 1), y.throttle = function (n, r, i) {
		let o, a, s,
			u = null,
			c = 0; i || (i = {}); const l = function () {
			c = !1 === i.leading ? 0 : y.now(), u = null, s = n.apply(o, a), u || (o = a = null);
		}; return function () {
			const e = y.now(); c || !1 !== i.leading || (c = e); const t = r - (e - c); return o = this, a = arguments, t <= 0 || r < t ? (u && (clearTimeout(u), u = null), c = e, s = n.apply(o, a), u || (o = a = null)) : u || !1 === i.trailing || (u = setTimeout(l, t)), s;
		};
	}, y.debounce = function (t, n, r) {
		var i, o, a, s, u,
			c = function () {
				const e = y.now() - s; e < n && e >= 0 ? i = setTimeout(c, n - e) : (i = null, r || (u = t.apply(a, o), i || (a = o = null)));
			}; return function () {
			a = this, o = arguments, s = y.now(); const e = r && !i; return i || (i = setTimeout(c, n)), e && (u = t.apply(a, o), a = o = null), u;
		};
	}, y.wrap = function (e, t) {
		return y.partial(t, e);
	}, y.negate = function (e) {
		return function () {
			return !e.apply(this, arguments);
		};
	}, y.compose = function () {
		let n = arguments,
			r = n.length - 1; return function () {
			for (var e = r, t = n[r].apply(this, arguments); e--;) {
				t = n[e].call(this, t);
			} return t;
		};
	}, y.after = function (e, t) {
		return function () {
			if (--e < 1) {
				return t.apply(this, arguments);
			}
		};
	}, y.before = function (e, t) {
		let n; return function () {
			return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
		};
	}, y.once = y.partial(y.before, 2); var S = !{toString: null}.propertyIsEnumerable('toString'),
		M = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; y.keys = function (e) {
		if (!y.isObject(e)) {
			return [];
		} if (h) {
			return h(e);
		} const t = []; for (const n in e) {
y.has(e, n) && t.push(n);
		} return S && r(e, t), t;
	}, y.allKeys = function (e) {
		if (!y.isObject(e)) {
			return [];
		} const t = []; for (const n in e) {
t.push(n);
		} return S && r(e, t), t;
	}, y.values = function (e) {
		for (var t = y.keys(e), n = t.length, r = new Array(n), i = 0; i < n; i++) {
			r[i] = e[t[i]];
		} return r;
	}, y.mapObject = function (e, t, n) {
		t = w(t, n); for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; s < o; s++) {
			a[r = i[s]] = t(e[r], r, e);
		} return a;
	}, y.pairs = function (e) {
		for (var t = y.keys(e), n = t.length, r = new Array(n), i = 0; i < n; i++) {
			r[i] = [t[i], e[t[i]]];
		} return r;
	}, y.invert = function (e) {
		for (var t = {}, n = y.keys(e), r = 0, i = n.length; r < i; r++) {
			t[e[n[r]]] = n[r];
		} return t;
	}, y.functions = y.methods = function (e) {
		const t = []; for (const n in e) {
y.isFunction(e[n]) && t.push(n);
		} return t.sort();
	}, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function (e, t, n) {
		t = w(t, n); for (var r, i = y.keys(e), o = 0, a = i.length; o < a; o++) {
			if (t(e[r = i[o]], r, e)) {
				return r;
			}
		}
	}, y.pick = function (e, t, n) {
		let r, i,
			o = {},
			a = e; if (a == null) {
			return o;
		} y.isFunction(t) ? (i = y.allKeys(a), r = v(t, n)) : (i = D(arguments, !1, !1, 1), r = function (e, t, n) {
			return t in n;
		}, a = new Object(a)); for (let s = 0, u = i.length; s < u; s++) {
			let c = i[s],
				l = a[c]; r(l, c, a) && (o[c] = l);
		} return o;
	}, y.omit = function (e, t, n) {
		if (y.isFunction(t)) {
			t = y.negate(t);
		} else {
			const r = y.map(D(arguments, !1, !1, 1), String); t = function (e, t) {
				return !y.contains(r, t);
			};
		} return y.pick(e, t, n);
	}, y.defaults = x(y.allKeys, !0), y.clone = function (e) {
		return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e;
	}, y.tap = function (e, t) {
		return t(e), e;
	}, y.isMatch = function (e, t) {
		let n = y.keys(t),
			r = n.length; if (e == null) {
			return !r;
		} for (let i = new Object(e), o = 0; o < r; o++) {
			const a = n[o]; if (t[a] !== i[a] || !(a in i)) {
				return !1;
			}
		} return !0;
	}; var N = function (e, t, n, r) {
		if (e === t) {
			return e !== 0 || 1 / e == 1 / t;
		} if (e == null || t == null) {
			return e === t;
		} e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped); const i = f.call(e); if (i !== f.call(t)) {
			return !1;
		} switch (i) {
			case '[object RegExp]': case '[object String]': return String(e) == String(t); case '[object Number]': return Number(e) != Number(e) ? Number(t) != Number(t) : Number(e) == 0 ? 1 / Number(e) == 1 / t : Number(e) == Number(t); case '[object Date]': case '[object Boolean]': return Number(e) == Number(t);
		} const o = i === '[object Array]'; if (!o) {
			if (typeof e !== 'object' || typeof t !== 'object') {
				return !1;
			} let a = e.constructor,
				s = t.constructor; if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && 'constructor' in e && 'constructor' in t) {
				return !1;
			}
		}r = r || []; for (var u = (n = n || []).length; u--;) {
			if (n[u] === e) {
				return r[u] === t;
			}
		} if (n.push(e), r.push(t), o) {
			if ((u = e.length) !== t.length) {
				return !1;
			}
			for (;u--;) {
				if (!N(e[u], t[u], n, r)) {
					return !1;
				}
			}
		} else {
			let c,
				l = y.keys(e); if (u = l.length, y.keys(t).length !== u) {
				return !1;
			} for (;u--;) {
				if (c = l[u], !y.has(t, c) || !N(e[c], t[c], n, r)) {
					return !1;
				}
			}
		} return n.pop(), r.pop(), !0;
	}; y.isEqual = function (e, t) {
		return N(e, t);
	}, y.isEmpty = function (e) {
		return e == null || (k(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? e.length === 0 : y.keys(e).length === 0);
	}, y.isElement = function (e) {
		return !(!e || e.nodeType !== 1);
	}, y.isArray = d || function (e) {
		return f.call(e) === '[object Array]';
	}, y.isObject = function (e) {
		const t = typeof e; return t === 'function' || t === 'object' && Boolean(e);
	}, y.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], t => {
		y['is' + t] = function (e) {
			return f.call(e) === '[object ' + t + ']';
		};
	}), y.isArguments(arguments) || (y.isArguments = function (e) {
		return y.has(e, 'callee');
	}), typeof /./ !== 'function' && typeof Int8Array !== 'object' && (y.isFunction = function (e) {
		return typeof e === 'function' || !1;
	}), y.isFinite = function (e) {
		return isFinite(e) && !isNaN(parseFloat(e));
	}, y.isNaN = function (e) {
		return y.isNumber(e) && e !== Number(e);
	}, y.isBoolean = function (e) {
		return !0 === e || !1 === e || f.call(e) === '[object Boolean]';
	}, y.isNull = function (e) {
		return e === null;
	}, y.isUndefined = function (e) {
		return void 0 === e;
	}, y.has = function (e, t) {
		return e != null && l.call(e, t);
	}, y.noConflict = function () {
		return n._ = i, this;
	}, y.identity = function (e) {
		return e;
	}, y.constant = function (e) {
		return function () {
			return e;
		};
	}, y.noop = function () {}, y.property = function (t) {
		return function (e) {
			return e == null ? void 0 : e[t];
		};
	}, y.propertyOf = function (t) {
		return t == null ? function () {} : function (e) {
			return t[e];
		};
	}, y.matcher = y.matches = function (t) {
		return t = y.extendOwn({}, t), function (e) {
			return y.isMatch(e, t);
		};
	}, y.times = function (e, t, n) {
		const r = new Array(Math.max(0, e)); t = v(t, n, 1); for (let i = 0; i < e; i++) {
			r[i] = t(i);
		} return r;
	}, y.random = function (e, t) {
		return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
	}, y.now = Date.now || function () {
		return (new Date()).getTime();
	}; let j = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '`': '&#x60;'},
		E = y.invert(j),
		A = function (t) {
			let n = function (e) {
					return t[e];
				},
				e = '(?:' + y.keys(t).join('|') + ')',
				r = new RegExp(e),
				i = new RegExp(e, 'g'); return function (e) {
				return e = e == null ? '' : String(e), r.test(e) ? e.replace(i, n) : e;
			};
		}; y.escape = A(j), y.unescape = A(E), y.result = function (e, t, n) {
		let r = e == null ? void 0 : e[t]; return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r;
	}; let O = 0; y.uniqueId = function (e) {
		const t = String(++O); return e ? e + t : t;
	}, y.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g}; let Y = /(.)^/,
		F = {'\'': '\'', '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029'},
		L = /\\|'|\r|\n|\u2028|\u2029/g,
		H = function (e) {
			return '\\' + F[e];
		}; y.template = function (o, e, t) {
		!e && t && (e = t), e = y.defaults({}, e, y.templateSettings); let n = new RegExp([(e.escape || Y).source, (e.interpolate || Y).source, (e.evaluate || Y).source].join('|') + '|$', 'g'),
			a = 0,
			s = '__p+=\''; o.replace(n, (e, t, n, r, i) => {
				return s += o.slice(a, i).replace(L, H), a = i + e.length, t ? s += '\'+\n((__t=(' + t + '))==null?\'\':_.escape(__t))+\n\'' : n ? s += '\'+\n((__t=(' + n + '))==null?\'\':__t)+\n\'' : r && (s += '\';\n' + r + '\n__p+=\''), e;
			}), s += '\';\n', e.variable || (s = 'with(obj||{}){\n' + s + '}\n'), s = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + s + 'return __p;\n'; try {
				var r = new Function(e.variable || 'obj', '_', s);
			} catch (c) {
				throw c.source = s, c;
			} let i = function (e) {
					return r.call(this, e, y);
				},
				u = e.variable || 'obj'; return i.source = 'function(' + u + '){\n' + s + '}', i;
	}, y.chain = function (e) {
		const t = y(e); return t._chain = !0, t;
	}; const I = function (e, t) {
		return e._chain ? y(t).chain() : t;
	}; y.mixin = function (n) {
y.each(y.functions(n), e => {
	const t = y[e] = n[e]; y.prototype[e] = function () {
		const e = [this._wrapped]; return u.apply(e, arguments), I(this, t.apply(y, e));
	};
});
	}, y.mixin(y), y.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], t => {
		const n = o[t]; y.prototype[t] = function () {
			const e = this._wrapped; return n.apply(e, arguments), t !== 'shift' && t !== 'splice' || e.length !== 0 || delete e[0], I(this, e);
		};
	}), y.each(['concat', 'join', 'slice'], e => {
		const t = o[e]; y.prototype[e] = function () {
			return I(this, t.apply(this._wrapped, arguments));
		};
	}), y.prototype.value = function () {
		return this._wrapped;
	}, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function () {
		return String(this._wrapped);
	}, typeof define === 'function' && define.amd && define('underscore', [], () => {
		return y;
	});
}).call(this), (function (c) {
	function a() {
		return {empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1};
	} function e(t, n) {
		return function (e) {
			return o(t.call(this, e), n);
		};
	} function t(t, n) {
		return function (e) {
			return this.lang().ordinal(t.call(this, e), n);
		};
	} function n() {} function r(e) {
_(e), u(this, e);
	} function s(e) {
		let t = m(e),
			n = t.year || 0,
			r = t.month || 0,
			i = t.week || 0,
			o = t.day || 0,
			a = t.hour || 0,
			s = t.minute || 0,
			u = t.second || 0,
			c = t.millisecond || 0; this._milliseconds = Number(c) + 1e3 * u + 6e4 * s + 36e5 * a, this._days = Number(o) + 7 * i, this._months = Number(r) + 12 * n, this._data = {}, this._bubble();
	} function u(e, t) {
		for (const n in t) {
t.hasOwnProperty(n) && (e[n] = t[n]);
		} return t.hasOwnProperty('toString') && (e.toString = t.toString), t.hasOwnProperty('valueOf') && (e.valueOf = t.valueOf), e;
	} function i(e) {
		let t,
			n = {}; for (t in e) {
e.hasOwnProperty(t) && me.hasOwnProperty(t) && (n[t] = e[t]);
		} return n;
	} function l(e) {
		return e < 0 ? Math.ceil(e) : Math.floor(e);
	} function o(e, t, n) {
		for (var r = String(Math.abs(e)), i = e >= 0; r.length < t;) {
			r = '0' + r;
		} return (i ? n ? '+' : '' : '-') + r;
	} function f(e, t, n, r) {
		let i, o,
			a = t._milliseconds,
			s = t._days,
			u = t._months; a && e._d.setTime(Number(e._d) + a * n), (s || u) && (i = e.minute(), o = e.hour()), s && e.date(e.date() + s * n), u && e.month(e.month() + u * n), a && !r && re.updateOffset(e), (s || u) && (e.minute(i), e.hour(o));
	} function d(e) {
		return Object.prototype.toString.call(e) === '[object Array]';
	} function h(e) {
		return Object.prototype.toString.call(e) === '[object Date]' || e instanceof Date;
	} function p(e, t, n) {
		let r,
			i = Math.min(e.length, t.length),
			o = Math.abs(e.length - t.length),
			a = 0; for (r = 0; r < i; r++) {
			(n && e[r] !== t[r] || !n && v(e[r]) !== v(t[r])) && a++;
		} return a + o;
	} function g(e) {
		if (e) {
			const t = e.toLowerCase().replace(/(.)s$/, '$1'); e = ze[e] || Be[t] || t;
		} return e;
	} function m(e) {
		let t, n,
			r = {}; for (n in e) {
e.hasOwnProperty(n) && (t = g(n)) && (r[t] = e[n]);
		} return r;
	} function y(a) {
		let s, u; if (a.indexOf('week') === 0) {
			s = 7, u = 'day';
		} else {
			if (a.indexOf('month') !== 0) {
				return;
			} s = 12, u = 'month';
		}re[a] = function (n, e) {
			let t, r,
				i = re.fn._lang[a],
				o = []; if (typeof n === 'number' && (e = n, n = c), r = function (e) {
				const t = re().utc().set(u, e); return i.call(re.fn._lang, t, n || '');
			}, e != null) {
				return r(e);
			} for (t = 0; t < s; t++) {
o.push(r(t));
			} return o;
		};
	} function v(e) {
		let t = Number(e),
			n = 0; return t !== 0 && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n;
	} function w(e, t) {
		return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
	} function x(e) {
		return b(e) ? 366 : 365;
	} function b(e) {
		return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
	} function _(e) {
		let t; e._a && e._pf.overflow === -2 && (t = e._a[ce] < 0 || e._a[ce] > 11 ? ce : e._a[le] < 1 || e._a[le] > w(e._a[ue], e._a[ce]) ? le : e._a[fe] < 0 || e._a[fe] > 23 ? fe : e._a[de] < 0 || e._a[de] > 59 ? de : e._a[he] < 0 || e._a[he] > 59 ? he : e._a[pe] < 0 || e._a[pe] > 999 ? pe : -1, e._pf._overflowDayOfYear && (t < ue || le < t) && (t = le), e._pf.overflow = t);
	} function k(e) {
		return e._isValid == null && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && e._pf.charsLeftOver === 0 && e._pf.unusedTokens.length === 0)), e._isValid;
	} function T(e) {
		return e ? e.toLowerCase().replace('_', '-') : e;
	} function D(e, t) {
		return t._isUTC ? re(e).zone(t._offset || 0) : re(e).local();
	} function C(e, t) {
		return t.abbr = e, ge[e] || (ge[e] = new n()), ge[e].set(t), ge[e];
	} function S(e) {
		delete ge[e];
	} function M(e) {
		let t, n, r, i,
			o = 0,
			a = function (e) {
				if (!ge[e] && ye) {
					try {
require('./lang/' + e);
					} catch (t) {}
				} return ge[e];
			}; if (!e) {
			return re.fn._lang;
		} if (!d(e)) {
			if (n = a(e)) {
				return n;
			} e = [e];
		} for (;o < e.length;) {
			for (t = (i = T(e[o]).split('-')).length, r = (r = T(e[o + 1])) ? r.split('-') : null; t > 0;) {
				if (n = a(i.slice(0, t).join('-'))) {
					return n;
				} if (r && r.length >= t && p(i, r, !0) >= t - 1) {
					break;
				} t--;
			}o++;
		} return re.fn._lang;
	} function N(e) {
		return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '');
	} function j(n) {
		let r, i,
			o = n.match(be); for (r = 0, i = o.length; r < i; r++) {
			Ze[o[r]] ? o[r] = Ze[o[r]] : o[r] = N(o[r]);
		} return function (e) {
			let t = ''; for (r = 0; r < i; r++) {
				t += o[r] instanceof Function ? o[r].call(e, n) : o[r];
			} return t;
		};
	} function E(e, t) {
		return e.isValid() ? (t = A(t, e.lang()), Ue[t] || (Ue[t] = j(t)), Ue[t](e)) : e.lang().invalidDate();
	} function A(e, t) {
		function n(e) {
			return t.longDateFormat(e) || e;
		} let r = 5; for (_e.lastIndex = 0; r >= 0 && _e.test(e);) {
			e = e.replace(_e, n), _e.lastIndex = 0, r -= 1;
		} return e;
	} function O(e, t) {
		const n = t._strict; switch (e) {
			case 'DDDD': return Ye; case 'YYYY': case 'GGGG': case 'gggg': return n ? Fe : De; case 'Y': case 'G': case 'g': return He; case 'YYYYYY': case 'YYYYY': case 'GGGGG': case 'ggggg': return n ? Le : Ce; case 'S': if (n) {
				return Ae;
			} case 'SS': if (n) {
				return Oe;
			} case 'SSS': if (n) {
				return Ye;
			} case 'DDD': return Te; case 'MMM': case 'MMMM': case 'dd': case 'ddd': case 'dddd': return Me; case 'a': case 'A': return M(t._l)._meridiemParse; case 'X': return Ee; case 'Z': case 'ZZ': return Ne; case 'T': return je; case 'SSSS': return Se; case 'MM': case 'DD': case 'YY': case 'GG': case 'gg': case 'HH': case 'hh': case 'mm': case 'ss': case 'ww': case 'WW': return n ? Oe : ke; case 'M': case 'D': case 'd': case 'H': case 'h': case 'm': case 's': case 'w': case 'W': case 'e': case 'E': return ke; default: return new RegExp(q(W(e.replace('\\', '')), 'i'));
		}
	} function Y(e) {
		let t = (e = e || '').match(Ne) || [],
			n = (String(t[t.length - 1] || [])).match(Ge) || ['-', 0, 0],
			r = 60 * n[1] + v(n[2]); return n[0] === '+' ? -r : r;
	} function F(e, t, n) {
		let r,
			i = n._a; switch (e) {
			case 'M': case 'MM': t != null && (i[ce] = v(t) - 1); break; case 'MMM': case 'MMMM': (r = M(n._l).monthsParse(t)) != null ? i[ce] = r : n._pf.invalidMonth = t; break; case 'D': case 'DD': t != null && (i[le] = v(t)); break; case 'DDD': case 'DDDD': t != null && (n._dayOfYear = v(t)); break; case 'YY': i[ue] = v(t) + (v(t) > 68 ? 1900 : 2e3); break; case 'YYYY': case 'YYYYY': case 'YYYYYY': i[ue] = v(t); break; case 'a': case 'A': n._isPm = M(n._l).isPM(t); break; case 'H': case 'HH': case 'h': case 'hh': i[fe] = v(t); break; case 'm': case 'mm': i[de] = v(t); break; case 's': case 'ss': i[he] = v(t); break; case 'S': case 'SS': case 'SSS': case 'SSSS': i[pe] = v(1e3 * ('0.' + t)); break; case 'X': n._d = new Date(1e3 * parseFloat(t)); break; case 'Z': case 'ZZ': n._useUTC = !0, n._tzm = Y(t); break; case 'w': case 'ww': case 'W': case 'WW': case 'd': case 'dd': case 'ddd': case 'dddd': case 'e': case 'E': e = e.substr(0, 1); case 'gg': case 'gggg': case 'GG': case 'GGGG': case 'GGGGG': e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t);
		}
	} function L(n) {
		let e, t, r, i, o, a, s, u, c, l,
			f = []; if (!n._d) {
			for (r = I(n), n._w && n._a[le] == null && n._a[ce] == null && (o = function (e) {
				const t = parseInt(e, 10); return e ? e.length < 3 ? t > 68 ? 1900 + t : 2e3 + t : t : n._a[ue] == null ? re().weekYear() : n._a[ue];
			}, (a = n._w).GG != null || a.W != null || a.E != null ? s = J(o(a.GG), a.W || 1, a.E, 4, 1) : (u = M(n._l), c = a.d != null ? U(a.d, u) : a.e != null ? parseInt(a.e, 10) + u._week.dow : 0, l = parseInt(a.w, 10) || 1, a.d != null && c < u._week.dow && l++, s = J(o(a.gg), l, c, u._week.doy, u._week.dow)), n._a[ue] = s.year, n._dayOfYear = s.dayOfYear), n._dayOfYear && (i = n._a[ue] == null ? r[ue] : n._a[ue], n._dayOfYear > x(i) && (n._pf._overflowDayOfYear = !0), t = B(i, 0, n._dayOfYear), n._a[ce] = t.getUTCMonth(), n._a[le] = t.getUTCDate()), e = 0; e < 3 && n._a[e] == null; ++e) {
				n._a[e] = f[e] = r[e];
			} for (;e < 7; e++) {
				n._a[e] = f[e] = n._a[e] == null ? e === 2 ? 1 : 0 : n._a[e];
			}f[fe] += v((n._tzm || 0) / 60), f[de] += v((n._tzm || 0) % 60), n._d = (n._useUTC ? B : z).apply(null, f);
		}
	} function H(e) {
		let t; e._d || (t = m(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], L(e));
	} function I(e) {
		const t = new Date(); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()];
	} function P(e) {
		e._a = [], e._pf.empty = !0; let t, n, r, i, o,
			a = M(e._l),
			s = String(e._i),
			u = s.length,
			c = 0; for (r = A(e._f, a).match(be) || [], t = 0; t < r.length; t++) {
			i = r[t], (n = (s.match(O(i, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && e._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), c += n.length), Ze[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i), F(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
		}e._pf.charsLeftOver = u - c, s.length > 0 && e._pf.unusedInput.push(s), e._isPm && e._a[fe] < 12 && (e._a[fe] += 12), !1 === e._isPm && e._a[fe] === 12 && (e._a[fe] = 0), L(e), _(e);
	} function W(e) {
		return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (e, t, n, r, i) => {
			return t || n || r || i;
		});
	} function q(e) {
		return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	} function G(e) {
		let t, n, r, i, o; if (e._f.length === 0) {
			return e._pf.invalidFormat = !0, void (e._d = new Date(NaN));
		} for (i = 0; i < e._f.length; i++) {
			o = 0, (t = u({}, e))._pf = a(), t._f = e._f[i], P(t), k(t) && (o += t._pf.charsLeftOver, o += 10 * t._pf.unusedTokens.length, t._pf.score = o, (r == null || o < r) && (r = o, n = t));
		}u(e, n || t);
	} function R(e) {
		let t, n,
			r = e._i,
			i = Ie.exec(r); if (i) {
			for (e._pf.iso = !0, t = 0, n = We.length; t < n; t++) {
				if (We[t][1].exec(r)) {
					e._f = We[t][0] + (i[6] || ' '); break;
				}
			} for (t = 0, n = qe.length; t < n; t++) {
				if (qe[t][1].exec(r)) {
					e._f += qe[t][0]; break;
				}
			}r.match(Ne) && (e._f += 'Z'), P(e);
		} else {
			e._d = new Date(r);
		}
	} function $(e) {
		let t = e._i,
			n = ve.exec(t); t === c ? e._d = new Date() : n ? e._d = new Date(Number(n[1])) : typeof t === 'string' ? R(e) : d(t) ? (e._a = t.slice(0), L(e)) : h(t) ? e._d = new Date(Number(t)) : typeof t === 'object' ? H(e) : e._d = new Date(t);
	} function z(e, t, n, r, i, o, a) {
		const s = new Date(e, t, n, r, i, o, a); return e < 1970 && s.setFullYear(e), s;
	} function B(e) {
		const t = new Date(Date.UTC.apply(null, arguments)); return e < 1970 && t.setUTCFullYear(e), t;
	} function U(e, t) {
		if (typeof e === 'string') {
			if (isNaN(e)) {
				if (typeof (e = t.weekdaysParse(e)) !== 'number') {
					return null;
				}
			} else {
				e = parseInt(e, 10);
			}
		} return e;
	} function V(e, t, n, r, i) {
		return i.relativeTime(t || 1, Boolean(n), e, r);
	} function X(e, t, n) {
		let r = se(Math.abs(e) / 1e3),
			i = se(r / 60),
			o = se(i / 60),
			a = se(o / 24),
			s = se(a / 365),
			u = r < 45 && ['s', r] || i === 1 && ['m'] || i < 45 && ['mm', i] || o === 1 && ['h'] || o < 22 && ['hh', o] || a === 1 && ['d'] || a <= 25 && ['dd', a] || a <= 45 && ['M'] || a < 345 && ['MM', se(a / 30)] || s === 1 && ['y'] || ['yy', s]; return u[2] = t, u[3] = e > 0, u[4] = n, V.apply({}, u);
	} function Z(e, t, n) {
		let r,
			i = n - t,
			o = n - e.day(); return i < o && (o -= 7), o < i - 7 && (o += 7), r = re(e).add('d', o), {week: Math.ceil(r.dayOfYear() / 7), year: r.year()};
	} function J(e, t, n, r, i) {
		let o,
			a = B(e, 0, 1).getUTCDay(); return {year: (o = 7 * (t - 1) + ((n = n != null ? n : i) - i) + (i - a + (r < a ? 7 : 0) - (a < i ? 7 : 0)) + 1) > 0 ? e : e - 1, dayOfYear: o > 0 ? o : x(e - 1) + o};
	} function K(e) {
		let t = e._i,
			n = e._f; return t === null ? re.invalid({nullInput: !0}) : (typeof t === 'string' && (e._i = t = M().preparse(t)), re.isMoment(t) ? (e = i(t))._d = new Date(Number(t._d)) : n ? d(n) ? G(e) : P(e) : $(e), new r(e));
	} function Q(e, n) {
		re.fn[e] = re.fn[e + 's'] = function (e) {
			const t = this._isUTC ? 'UTC' : ''; return e != null ? (this._d['set' + t + n](e), re.updateOffset(this), this) : this._d['get' + t + n]();
		};
	} function ee(e) {
		re.duration.fn[e] = function () {
			return this._data[e];
		};
	} function te(e, t) {
		re.duration.fn['as' + e] = function () {
			return Number(this) / t;
		};
	} function ne(e) {
		let t = !1,
			n = re; typeof ender === 'undefined' && (e ? (ae.moment = function () {
			return !t && console && console.warn && (t = !0, console.warn('Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.')), n.apply(null, arguments);
		}, u(ae.moment, n)) : ae.moment = re);
	} for (var re, ie, oe = '2.5.1', ae = this, se = Math.round, ue = 0, ce = 1, le = 2, fe = 3, de = 4, he = 5, pe = 6, ge = {}, me = {_isAMomentObject: null, _i: null, _f: null, _l: null, _strict: null, _isUTC: null, _offset: null, _pf: null, _lang: null}, ye = typeof module !== 'undefined' && module.exports && typeof require !== 'undefined', ve = /^\/?Date\((\-?\d+)/i, we = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, xe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, be = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, _e = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, ke = /\d\d?/, Te = /\d{1,3}/, De = /\d{1,4}/, Ce = /[+\-]?\d{1,6}/, Se = /\d+/, Me = /\d*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ne = /Z|[\+\-]\d\d:?\d\d/gi, je = /T/i, Ee = /[\+\-]?\d+(\.\d{1,3})?/, Ae = /\d/, Oe = /\d\d/, Ye = /\d{3}/, Fe = /\d{4}/, Le = /[+-]?\d{6}/, He = /[+-]?\d+/, Ie = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Pe = 'YYYY-MM-DDTHH:mm:ssZ', We = [['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/], ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/], ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/], ['GGGG-[W]WW', /\d{4}-W\d{2}/], ['YYYY-DDD', /\d{4}-\d{3}/]], qe = [['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/], ['HH:mm', /(T| )\d\d:\d\d/], ['HH', /(T| )\d\d/]], Ge = /([\+\-]|\d\d)/gi, Re = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'), $e = {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}, ze = {ms: 'millisecond', s: 'second', m: 'minute', h: 'hour', d: 'day', D: 'date', w: 'week', W: 'isoWeek', M: 'month', y: 'year', DDD: 'dayOfYear', e: 'weekday', E: 'isoWeekday', gg: 'weekYear', GG: 'isoWeekYear'}, Be = {dayofyear: 'dayOfYear', isoweekday: 'isoWeekday', isoweek: 'isoWeek', weekyear: 'weekYear', isoweekyear: 'isoWeekYear'}, Ue = {}, Ve = 'DDD w W M D d'.split(' '), Xe = 'M D H h m s w W'.split(' '), Ze = {M() {
			return this.month() + 1;
		}, MMM(e) {
			return this.lang().monthsShort(this, e);
		}, MMMM(e) {
			return this.lang().months(this, e);
		}, D() {
			return this.date();
		}, DDD() {
			return this.dayOfYear();
		}, d() {
			return this.day();
		}, dd(e) {
			return this.lang().weekdaysMin(this, e);
		}, ddd(e) {
			return this.lang().weekdaysShort(this, e);
		}, dddd(e) {
			return this.lang().weekdays(this, e);
		}, w() {
			return this.week();
		}, W() {
			return this.isoWeek();
		}, YY() {
			return o(this.year() % 100, 2);
		}, YYYY() {
			return o(this.year(), 4);
		}, YYYYY() {
			return o(this.year(), 5);
		}, YYYYYY() {
			const e = this.year(); return (e >= 0 ? '+' : '-') + o(Math.abs(e), 6);
		}, gg() {
			return o(this.weekYear() % 100, 2);
		}, gggg() {
			return o(this.weekYear(), 4);
		}, ggggg() {
			return o(this.weekYear(), 5);
		}, GG() {
			return o(this.isoWeekYear() % 100, 2);
		}, GGGG() {
			return o(this.isoWeekYear(), 4);
		}, GGGGG() {
			return o(this.isoWeekYear(), 5);
		}, e() {
			return this.weekday();
		}, E() {
			return this.isoWeekday();
		}, a() {
			return this.lang().meridiem(this.hours(), this.minutes(), !0);
		}, A() {
			return this.lang().meridiem(this.hours(), this.minutes(), !1);
		}, H() {
			return this.hours();
		}, h() {
			return this.hours() % 12 || 12;
		}, m() {
			return this.minutes();
		}, s() {
			return this.seconds();
		}, S() {
			return v(this.milliseconds() / 100);
		}, SS() {
			return o(v(this.milliseconds() / 10), 2);
		}, SSS() {
			return o(this.milliseconds(), 3);
		}, SSSS() {
			return o(this.milliseconds(), 3);
		}, Z() {
			let e = -this.zone(),
				t = '+'; return e < 0 && (e = -e, t = '-'), t + o(v(e / 60), 2) + ':' + o(v(e) % 60, 2);
		}, ZZ() {
			let e = -this.zone(),
				t = '+'; return e < 0 && (e = -e, t = '-'), t + o(v(e / 60), 2) + o(v(e) % 60, 2);
		}, z() {
			return this.zoneAbbr();
		}, zz() {
			return this.zoneName();
		}, X() {
			return this.unix();
		}, Q() {
			return this.quarter();
		}}, Je = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin']; Ve.length;) {
		ie = Ve.pop(), Ze[ie + 'o'] = t(Ze[ie], ie);
	} for (;Xe.length;) {
		ie = Xe.pop(), Ze[ie + ie] = e(Ze[ie], 2);
	} for (Ze.DDDD = e(Ze.DDD, 3), u(n.prototype, {set(e) {
		let t, n; for (n in e) {
			typeof (t = e[n]) === 'function' ? this[n] = t : this['_' + n] = t;
		}
	}, _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), months(e) {
		return this._months[e.month()];
	}, _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), monthsShort(e) {
		return this._monthsShort[e.month()];
	}, monthsParse(e) {
		let t, n, r; for (this._monthsParse || (this._monthsParse = []), t = 0; t < 12; t++) {
			if (this._monthsParse[t] || (n = re.utc([2e3, t]), r = '^' + this.months(n, '') + '|^' + this.monthsShort(n, ''), this._monthsParse[t] = new RegExp(r.replace('.', ''), 'i')), this._monthsParse[t].test(e)) {
				return t;
			}
		}
	}, _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), weekdays(e) {
		return this._weekdays[e.day()];
	}, _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), weekdaysShort(e) {
		return this._weekdaysShort[e.day()];
	}, _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), weekdaysMin(e) {
		return this._weekdaysMin[e.day()];
	}, weekdaysParse(e) {
		let t, n, r; for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; t < 7; t++) {
			if (this._weekdaysParse[t] || (n = re([2e3, 1]).day(t), r = '^' + this.weekdays(n, '') + '|^' + this.weekdaysShort(n, '') + '|^' + this.weekdaysMin(n, ''), this._weekdaysParse[t] = new RegExp(r.replace('.', ''), 'i')), this._weekdaysParse[t].test(e)) {
				return t;
			}
		}
	}, _longDateFormat: {LT: 'h:mm A', L: 'MM/DD/YYYY', LL: 'MMMM D YYYY', LLL: 'MMMM D YYYY LT', LLLL: 'dddd, MMMM D YYYY LT'}, longDateFormat(e) {
		let t = this._longDateFormat[e]; return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, e => {
			return e.slice(1);
		}), this._longDateFormat[e] = t), t;
	}, isPM(e) {
		return (String(e)).toLowerCase().charAt(0) === 'p';
	}, _meridiemParse: /[ap]\.?m?\.?/i, meridiem(e, t, n) {
		return e > 11 ? n ? 'pm' : 'PM' : n ? 'am' : 'AM';
	}, _calendar: {sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L'}, calendar(e, t) {
		const n = this._calendar[e]; return typeof n === 'function' ? n.apply(t) : n;
	}, _relativeTime: {future: 'in %s', past: '%s ago', s: 'a few seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years'}, relativeTime(e, t, n, r) {
		const i = this._relativeTime[n]; return typeof i === 'function' ? i(e, t, n, r) : i.replace(/%d/i, e);
	}, pastFuture(e, t) {
		const n = this._relativeTime[e > 0 ? 'future' : 'past']; return typeof n === 'function' ? n(t) : n.replace(/%s/i, t);
	}, ordinal(e) {
		return this._ordinal.replace('%d', e);
	}, _ordinal: '%d', preparse(e) {
		return e;
	}, postformat(e) {
		return e;
	}, week(e) {
		return Z(e, this._week.dow, this._week.doy).week;
	}, _week: {dow: 0, doy: 6}, _invalidDate: 'Invalid date', invalidDate() {
		return this._invalidDate;
	}}), (re = function (e, t, n, r) {
		let i; return typeof n === 'boolean' && (r = n, n = c), (i = {})._isAMomentObject = !0, i._i = e, i._f = t, i._l = n, i._strict = r, i._isUTC = !1, i._pf = a(), K(i);
	}).utc = function (e, t, n, r) {
		let i; return typeof n === 'boolean' && (r = n, n = c), (i = {})._isAMomentObject = !0, i._useUTC = !0, i._isUTC = !0, i._l = n, i._i = e, i._f = t, i._strict = r, i._pf = a(), K(i).utc();
	}, re.unix = function (e) {
		return re(1e3 * e);
	}, re.duration = function (e, t) {
		let n, r, i,
			o = e,
			a = null; return re.isDuration(e) ? o = {ms: e._milliseconds, d: e._days, M: e._months} : typeof e === 'number' ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (a = we.exec(e)) ? (n = a[1] === '-' ? -1 : 1, o = {y: 0, d: v(a[le]) * n, h: v(a[fe]) * n, m: v(a[de]) * n, s: v(a[he]) * n, ms: v(a[pe]) * n}) : (a = xe.exec(e)) && (n = a[1] === '-' ? -1 : 1, o = {y: (i = function (e) {
				const t = e && parseFloat(e.replace(',', '.')); return (isNaN(t) ? 0 : t) * n;
			})(a[2]), M: i(a[3]), d: i(a[4]), h: i(a[5]), m: i(a[6]), s: i(a[7]), w: i(a[8])}), r = new s(o), re.isDuration(e) && e.hasOwnProperty('_lang') && (r._lang = e._lang), r;
	}, re.version = oe, re.defaultFormat = Pe, re.updateOffset = function () {}, re.lang = function (e, t) {
		return e ? (t ? C(T(e), t) : t === null ? (S(e), e = 'en') : ge[e] || M(e), (re.duration.fn._lang = re.fn._lang = M(e))._abbr) : re.fn._lang._abbr;
	}, re.langData = function (e) {
		return e && e._lang && e._lang._abbr && (e = e._lang._abbr), M(e);
	}, re.isMoment = function (e) {
		return e instanceof r || e != null && e.hasOwnProperty('_isAMomentObject');
	}, re.isDuration = function (e) {
		return e instanceof s;
	}, ie = Je.length - 1; ie >= 0; --ie) {
y(Je[ie]);
	} for (re.normalizeUnits = function (e) {
		return g(e);
	}, re.invalid = function (e) {
		const t = re.utc(NaN); return e != null ? u(t._pf, e) : t._pf.userInvalidated = !0, t;
	}, re.parseZone = function (e) {
		return re(e).parseZone();
	}, u(re.fn = r.prototype, {clone() {
		return re(this);
	}, valueOf() {
		return Number(this._d) + 6e4 * (this._offset || 0);
	}, unix() {
		return Math.floor(Number(this) / 1e3);
	}, toString() {
		return this.clone().lang('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	}, toDate() {
		return this._offset ? new Date(Number(this)) : this._d;
	}, toISOString() {
		const e = re(this).utc(); return e.year() > 0 && e.year() <= 9999 ? E(e, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]') : E(e, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	}, toArray() {
		const e = this; return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()];
	}, isValid() {
		return k(this);
	}, isDSTShifted() {
		return Boolean(this._a) && (this.isValid() && p(this._a, (this._isUTC ? re.utc(this._a) : re(this._a)).toArray()) > 0);
	}, parsingFlags() {
		return u({}, this._pf);
	}, invalidAt() {
		return this._pf.overflow;
	}, utc() {
		return this.zone(0);
	}, local() {
		return this.zone(0), this._isUTC = !1, this;
	}, format(e) {
		const t = E(this, e || re.defaultFormat); return this.lang().postformat(t);
	}, add(e, t) {
		return f(this, typeof e === 'string' ? re.duration(Number(t), e) : re.duration(e, t), 1), this;
	}, subtract(e, t) {
		return f(this, typeof e === 'string' ? re.duration(Number(t), e) : re.duration(e, t), -1), this;
	}, diff(e, t, n) {
		let r, i,
			o = D(e, this),
			a = 6e4 * (this.zone() - o.zone()); return (t = g(t)) === 'year' || t === 'month' ? (r = 432e5 * (this.daysInMonth() + o.daysInMonth()), i = 12 * (this.year() - o.year()) + (this.month() - o.month()), i += (this - re(this).startOf('month') - (o - re(o).startOf('month'))) / r, i -= 6e4 * (this.zone() - re(this).startOf('month').zone() - (o.zone() - re(o).startOf('month').zone())) / r, t === 'year' && (i /= 12)) : (r = this - o, i = t === 'second' ? r / 1e3 : t === 'minute' ? r / 6e4 : t === 'hour' ? r / 36e5 : t === 'day' ? (r - a) / 864e5 : t === 'week' ? (r - a) / 6048e5 : r), n ? i : l(i);
	}, from(e, t) {
		return re.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t);
	}, fromNow(e) {
		return this.from(re(), e);
	}, calendar() {
		let e = D(re(), this).startOf('day'),
			t = this.diff(e, 'days', !0),
			n = t < -6 ? 'sameElse' : t < -1 ? 'lastWeek' : t < 0 ? 'lastDay' : t < 1 ? 'sameDay' : t < 2 ? 'nextDay' : t < 7 ? 'nextWeek' : 'sameElse'; return this.format(this.lang().calendar(n, this));
	}, isLeapYear() {
		return b(this.year());
	}, isDST() {
		return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
	}, day(e) {
		const t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return e != null ? (e = U(e, this.lang()), this.add({d: e - t})) : t;
	}, month(e) {
		let t,
			n = this._isUTC ? 'UTC' : ''; return e != null ? (typeof e === 'string' && typeof (e = this.lang().monthsParse(e)) !== 'number' || (t = this.date(), this.date(1), this._d['set' + n + 'Month'](e), this.date(Math.min(t, this.daysInMonth())), re.updateOffset(this)), this) : this._d['get' + n + 'Month']();
	}, startOf(e) {
		switch (e = g(e)) {
			case 'year': this.month(0); case 'month': this.date(1); case 'week': case 'isoWeek': case 'day': this.hours(0); case 'hour': this.minutes(0); case 'minute': this.seconds(0); case 'second': this.milliseconds(0);
		} return e === 'week' ? this.weekday(0) : e === 'isoWeek' && this.isoWeekday(1), this;
	}, endOf(e) {
		return e = g(e), this.startOf(e).add(e === 'isoWeek' ? 'week' : e, 1).subtract('ms', 1);
	}, isAfter(e, t) {
		return t = void 0 !== t ? t : 'millisecond', Number(this.clone().startOf(t)) > Number(re(e).startOf(t));
	}, isBefore(e, t) {
		return t = void 0 !== t ? t : 'millisecond', Number(this.clone().startOf(t)) < Number(re(e).startOf(t));
	}, isSame(e, t) {
		return t = t || 'ms', Number(this.clone().startOf(t)) == Number(D(e, this).startOf(t));
	}, min(e) {
		return (e = re.apply(null, arguments)) < this ? this : e;
	}, max(e) {
		return this < (e = re.apply(null, arguments)) ? this : e;
	}, zone(e) {
		const t = this._offset || 0; return e == null ? this._isUTC ? t : this._d.getTimezoneOffset() : (typeof e === 'string' && (e = Y(e)), Math.abs(e) < 16 && (e *= 60), this._offset = e, this._isUTC = !0, t !== e && f(this, re.duration(t - e, 'm'), 1, !0), this);
	}, zoneAbbr() {
		return this._isUTC ? 'UTC' : '';
	}, zoneName() {
		return this._isUTC ? 'Coordinated Universal Time' : '';
	}, parseZone() {
		return this._tzm ? this.zone(this._tzm) : typeof this._i === 'string' && this.zone(this._i), this;
	}, hasAlignedHourOffset(e) {
		return e = e ? re(e).zone() : 0, (this.zone() - e) % 60 == 0;
	}, daysInMonth() {
		return w(this.year(), this.month());
	}, dayOfYear(e) {
		const t = se((re(this).startOf('day') - re(this).startOf('year')) / 864e5) + 1; return e == null ? t : this.add('d', e - t);
	}, quarter() {
		return Math.ceil((this.month() + 1) / 3);
	}, weekYear(e) {
		const t = Z(this, this.lang()._week.dow, this.lang()._week.doy).year; return e == null ? t : this.add('y', e - t);
	}, isoWeekYear(e) {
		const t = Z(this, 1, 4).year; return e == null ? t : this.add('y', e - t);
	}, week(e) {
		const t = this.lang().week(this); return e == null ? t : this.add('d', 7 * (e - t));
	}, isoWeek(e) {
		const t = Z(this, 1, 4).week; return e == null ? t : this.add('d', 7 * (e - t));
	}, weekday(e) {
		const t = (this.day() + 7 - this.lang()._week.dow) % 7; return e == null ? t : this.add('d', e - t);
	}, isoWeekday(e) {
		return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
	}, get(e) {
		return this[e = g(e)]();
	}, set(e, t) {
		return typeof this[e = g(e)] === 'function' && this[e](t), this;
	}, lang(e) {
		return e === c ? this._lang : (this._lang = M(e), this);
	}}), ie = 0; ie < Re.length; ie++) {
Q(Re[ie].toLowerCase().replace(/s$/, ''), Re[ie]);
	} for (ie in Q('year', 'FullYear'), re.fn.days = re.fn.day, re.fn.months = re.fn.month, re.fn.weeks = re.fn.week, re.fn.isoWeeks = re.fn.isoWeek, re.fn.toJSON = re.fn.toISOString, u(re.duration.fn = s.prototype, {_bubble() {
		let e, t, n, r,
			i = this._milliseconds,
			o = this._days,
			a = this._months,
			s = this._data; s.milliseconds = i % 1e3, e = l(i / 1e3), s.seconds = e % 60, t = l(e / 60), s.minutes = t % 60, n = l(t / 60), s.hours = n % 24, o += l(n / 24), s.days = o % 30, a += l(o / 30), s.months = a % 12, r = l(a / 12), s.years = r;
	}, weeks() {
		return l(this.days() / 7);
	}, valueOf() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12);
	}, humanize(e) {
		let t = Number(this),
			n = X(t, !e, this.lang()); return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n);
	}, add(e, t) {
		const n = re.duration(e, t); return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this;
	}, subtract(e, t) {
		const n = re.duration(e, t); return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this;
	}, get(e) {
		return this[(e = g(e)).toLowerCase() + 's']();
	}, as(e) {
		return this['as' + (e = g(e)).charAt(0).toUpperCase() + e.slice(1) + 's']();
	}, lang: re.fn.lang, toIsoString() {
		let e = Math.abs(this.years()),
			t = Math.abs(this.months()),
			n = Math.abs(this.days()),
			r = Math.abs(this.hours()),
			i = Math.abs(this.minutes()),
			o = Math.abs(this.seconds() + this.milliseconds() / 1e3); return this.asSeconds() ? (this.asSeconds() < 0 ? '-' : '') + 'P' + (e ? e + 'Y' : '') + (t ? t + 'M' : '') + (n ? n + 'D' : '') + (r || i || o ? 'T' : '') + (r ? r + 'H' : '') + (i ? i + 'M' : '') + (o ? o + 'S' : '') : 'P0D';
	}}), $e) {
$e.hasOwnProperty(ie) && (te(ie, $e[ie]), ee(ie.toLowerCase()));
	}te('Weeks', 6048e5), re.duration.fn.asMonths = function () {
		return (Number(this) - 31536e6 * this.years()) / 2592e6 + 12 * this.years();
	}, re.lang('en', {ordinal(e) {
		const t = e % 10; return e + (v(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th');
	}}), ye ? (module.exports = re, ne(!0)) : typeof define === 'function' && define.amd ? define('moment', (e, t, n) => {
		return n.config && n.config() && !0 !== n.config().noGlobal && ne(n.config().noGlobal === c), re;
	}) : ne();
}).call(this), (function () {
	window.ga && ga(e => {
		let t; try {
			(t = e.get('clientId')) && ga('set', 'dimension18', t);
		} catch (n) {
			n;
		}
	}), Market.Helpers.GoogleAnalytics = {logPageView(e) {
		let t, n, r, i, o, a, s, u, c; if (n = (s = e != null ? e : {}).page, i = s.title, window.ga) {
			for (t = _.omit({hitType: 'pageview', page: n != null ? n : n = this.relativePath(), title: i != null ? i : i = null}, e => {
				return _.isNull(e);
			}), c = [], o = 0, a = (u = window._envGaTrackerNames).length; o < a; o++) {
				r = u[o], c.push(ga(r + '.send', t));
			} return c;
		}
	}, sendEvent(e, t, n, r) {
		let i, o, a, s, u, c, l, f, d, h, p, g; if (s = (h = r != null ? r : {}).label, l = h.value, a = h.hitCallback, u = h.nonInteraction, o = h.dimension11, window.ga) {
			for (i = _.omit({hitType: e, eventCategory: t, eventAction: n, eventLabel: s != null ? s : s = null, eventValue: l != null ? l : l = null, hitCallback: a != null ? a : a = null, nonInteraction: u != null ? u : u = null, dimension11: o != null ? o : o = null}, e => {
				return _.isNull(e);
			}), g = [], f = 0, d = (p = window._envGaTrackerNames).length; f < d; f++) {
				c = p[f], g.push(ga(c + '.send', i));
			} return g;
		}
	}, addProducts(i) {
		let o, a, e, t, n, r; if (window.ga) {
			for (r = [], e = 0, t = (n = window._envGaTrackerNames).length; e < t; e++) {
				a = n[e], r.push(() => {
					let e, t, n, r; for (r = [], e = 0, t = (n = i.productsArray).length; e < t; e++) {
						o = n[e], r.push(ga(a + '.ec:addProduct', o));
					} return r;
				})();
			} return r;
		}
	}, addImpressions(r) {
		let i, o, a, e, t, n, s; if (window.ga) {
			for (s = [], e = 0, t = (n = window._envGaTrackerNames).length; e < t; e++) {
				a = n[e], s.push(() => {
					let e, t, n; for (n = [], e = 0, t = r.length; e < t; e++) {
						i = r[e], n.push(() => {
							let e, t, n, r; for (r = [], e = 0, t = (n = i.productsArray).length; e < t; e++) {
								o = n[e], r.push(ga(a + '.ec:addImpression', o));
							} return r;
						})();
					} return n;
				})();
			} return s;
		}
	}, addPromo(e) {
		let t, n, r, i, o; if (window.ga) {
			for (o = [], n = 0, r = (i = window._envGaTrackerNames).length; n < r; n++) {
				t = i[n], o.push(ga(t + '.ec:addPromo', e));
			} return o;
		}
	}, decorateWithLinker(e) {
		let t, n, r, i, o; if (window.ga) {
			for (o = [], n = 0, r = (i = window._envGaTrackerNames).length; n < r; n++) {
				t = i[n], o.push(ga(t + '.linker:decorate', e));
			} return o;
		}
	}, set(e, t) {
		let n, r, i, o, a; if (window.ga) {
			for (a = [], r = 0, i = (o = window._envGaTrackerNames).length; r < i; r++) {
				n = o[r], a.push(ga(n + '.set', e, t));
			} return a;
		}
	}, setAction(e, t) {
		let n, r, i, o, a; if (window.ga) {
			for (a = [], r = 0, i = (o = window._envGaTrackerNames).length; r < i; r++) {
				n = o[r], t != null ? a.push(ga(n + '.ec:setAction', e, t)) : a.push(ga(n + '.ec:setAction', e));
			} return a;
		}
	}, storeGaClientId() {
		if (window.ga) {
			return ga(e => {
$.cookie('__ga_client_id', e.get('clientId'), {path: '/', expires: 60});
			});
		}
	}, relativePath() {
		return document.location.pathname + document.location.search;
	}, isEventStale(e) {
		let t; return e = moment.unix(e), t = moment(new Date()).utc(), moment.duration(e.diff(t)).asMinutes() > 10;
	}};
}).call(this), (function () {
	Views.CtaHeader = (function () {
		function e(e) {
			let t;
e.on('click', '.js-track-on-click', (t = this, function (e) {
	return t.target = $(e.currentTarget), t.experimentId = t.target.data().experimentId, t.gaVariantId = t.target.data().gaVariantId, Market.Helpers.GoogleAnalytics.sendEvent('event', 'experiment', 'click', {label: t.experimentId, value: t.gaVariantId, nonInteraction: !0});
}));
		} return e;
	})();
}).call(this), (function () {
	const t = function (e, t) {
		return function () {
			return e.apply(t, arguments);
		};
	}; Views.FullScreenPreview = (function () {
		function e(e) {
			this.addHackyFix = t(this.addHackyFix, this), this.hasMobileSafariIFrameBug = t(this.hasMobileSafariIFrameBug, this), this.fixResponsivenessForMobileSafari = t(this.fixResponsivenessForMobileSafari, this), (this.$el = e).load(this.fixResponsivenessForMobileSafari);
		} return e.prototype.fixResponsivenessForMobileSafari = function () {
			if (this.hasMobileSafariIFrameBug()) {
				return this.addHackyFix();
			}
		}, e.prototype.hasMobileSafariIFrameBug = function () {
			return this.$el.width() !== $('body').width();
		}, e.prototype.addHackyFix = function () {
			return this.$el.attr('scrolling', 'no').addClass('-ios-fix');
		}, e;
	})();
}).call(this);
