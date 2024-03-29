(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $author$project$MusicCreator$Tick = F2(
	function (a, b) {
		return {$: 'Tick', a: a, b: b};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$InitTime = function (a) {
	return {$: 'InitTime', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $MacCASOutreach$graphicsvg$GraphicSVG$Graphics = function (a) {
	return {$: 'Graphics', a: a};
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$core$Basics$not = _Basics_not;
var $MacCASOutreach$graphicsvg$GraphicSVG$convertCoords = F2(
	function (_v0, gModel) {
		var x = _v0.a;
		var y = _v0.b;
		var sw = gModel.sw;
		var sh = gModel.sh;
		var cw = gModel.cw;
		var ch = gModel.ch;
		var aspectout = (!(!sh)) ? (sw / sh) : (4 / 3);
		var aspectin = (!(!ch)) ? (cw / ch) : (4 / 3);
		var scaledInX = _Utils_cmp(aspectout, aspectin) < 0;
		var scaledInY = _Utils_cmp(aspectout, aspectin) > 0;
		var cscale = scaledInX ? (sw / cw) : (scaledInY ? (sh / ch) : 1);
		return _Utils_Tuple2((x - (sw / 2)) / cscale, (y + (sh / 2)) / cscale);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$NoOp = {$: 'NoOp'};
var $MacCASOutreach$graphicsvg$GraphicSVG$WindowResize = function (a) {
	return {$: 'WindowResize', a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $elm$core$Basics$round = _Basics_round;
var $MacCASOutreach$graphicsvg$GraphicSVG$getViewportSize = A2(
	$elm$core$Task$attempt,
	function (rvp) {
		if (rvp.$ === 'Ok') {
			var vp = rvp.a;
			return $MacCASOutreach$graphicsvg$GraphicSVG$WindowResize(
				$elm$core$Maybe$Just(
					_Utils_Tuple2(
						$elm$core$Basics$round(vp.viewport.width),
						$elm$core$Basics$round(vp.viewport.height))));
		} else {
			return $MacCASOutreach$graphicsvg$GraphicSVG$NoOp;
		}
	},
	$elm$browser$Browser$Dom$getViewportOf('render'));
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $MacCASOutreach$graphicsvg$GraphicSVG$hiddenAppUpdate = F4(
	function (userView, userUpdate, msg, _v0) {
		var userModel = _v0.a;
		var gModel = _v0.b;
		var mapUserCmd = function (cmd) {
			return A2($elm$core$Platform$Cmd$map, $MacCASOutreach$graphicsvg$GraphicSVG$Graphics, cmd);
		};
		var _v1 = userView(userModel).body;
		var cw = _v1.a;
		var ch = _v1.b;
		switch (msg.$) {
			case 'Graphics':
				var message = msg.a;
				var _v3 = A2(userUpdate, message, userModel);
				var newModel = _v3.a;
				var userCmds = _v3.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						newModel,
						_Utils_update(
							gModel,
							{ch: ch, cw: cw})),
					mapUserCmd(userCmds));
			case 'WindowResize':
				var mWH = msg.a;
				if (mWH.$ === 'Just') {
					var _v5 = mWH.a;
					var w = _v5.a;
					var h = _v5.b;
					return _Utils_Tuple2(
						_Utils_Tuple2(
							userModel,
							_Utils_update(
								gModel,
								{sh: h, sw: w})),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(
						_Utils_Tuple2(userModel, gModel),
						$MacCASOutreach$graphicsvg$GraphicSVG$getViewportSize);
				}
			case 'ReturnPosition':
				var message = msg.a;
				var _v6 = msg.b;
				var x = _v6.a;
				var y = _v6.b;
				var _v7 = A2(
					userUpdate,
					message(
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$convertCoords,
							_Utils_Tuple2(x, y),
							gModel)),
					userModel);
				var newModel = _v7.a;
				var userCmds = _v7.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(newModel, gModel),
					mapUserCmd(userCmds));
			default:
				return _Utils_Tuple2(
					_Utils_Tuple2(userModel, gModel),
					$elm$core$Platform$Cmd$none);
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ReturnPosition = F2(
	function (a, b) {
		return {$: 'ReturnPosition', a: a, b: b};
	});
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$clipPath = $elm$svg$Svg$trustedNode('clipPath');
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $MacCASOutreach$graphicsvg$GraphicSVG$cPath = F2(
	function (w, h) {
		return A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$clipPath,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('cPath')
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$rect,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(w)),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(h)),
									$elm$svg$Svg$Attributes$x(
									$elm$core$String$fromFloat((-w) / 2)),
									$elm$svg$Svg$Attributes$y(
									$elm$core$String$fromFloat((-h) / 2))
								]),
							_List_Nil)
						]))
				]));
	});
var $elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var $MacCASOutreach$graphicsvg$GraphicSVG$Everything = {$: 'Everything'};
var $MacCASOutreach$graphicsvg$GraphicSVG$Group = function (a) {
	return {$: 'Group', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Notathing = {$: 'Notathing'};
var $elm$svg$Svg$a = $elm$svg$Svg$trustedNode('a');
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$RGBA = F4(
	function (a, b, c, d) {
		return {$: 'RGBA', a: a, b: b, c: c, d: d};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$black = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 0, 0, 0, 1);
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$contenteditable = $elm$html$Html$Attributes$boolProperty('contentEditable');
var $MacCASOutreach$graphicsvg$GraphicSVG$pairToString = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return $elm$core$String$fromFloat(x) + (',' + $elm$core$String$fromFloat(y));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$bezierStringHelper = function (_v0) {
	var _v1 = _v0.a;
	var a = _v1.a;
	var b = _v1.b;
	var _v2 = _v0.b;
	var c = _v2.a;
	var d = _v2.b;
	return ' Q ' + ($MacCASOutreach$graphicsvg$GraphicSVG$pairToString(
		_Utils_Tuple2(a, b)) + (' ' + $MacCASOutreach$graphicsvg$GraphicSVG$pairToString(
		_Utils_Tuple2(c, d))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$createBezierString = F2(
	function (first, list) {
		return 'M ' + ($MacCASOutreach$graphicsvg$GraphicSVG$pairToString(first) + $elm$core$String$concat(
			A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$bezierStringHelper, list)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Inked = F3(
	function (a, b, c) {
		return {$: 'Inked', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$filled = F2(
	function (color, stencil) {
		return A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
			$elm$core$Maybe$Just(color),
			$elm$core$Maybe$Nothing,
			stencil);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Move = F2(
	function (a, b) {
		return {$: 'Move', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$move = F2(
	function (disp, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Move, disp, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Rect = F2(
	function (a, b) {
		return {$: 'Rect', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$rect = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rect, w, h);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$createGraphX = F5(
	function (h, s, th, c, x) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(x * s, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				c,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, th, h)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$createGraphY = F5(
	function (w, s, th, c, y) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, y * s),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				c,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, w, th)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$group = function (shapes) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Group(shapes);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$createGraph = F4(
	function (_v0, s, th, c) {
		var w = _v0.a;
		var h = _v0.b;
		var syi = $elm$core$Basics$ceiling(h / (s * 2));
		var ylisti = A2($elm$core$List$range, -syi, syi);
		var sxi = $elm$core$Basics$ceiling(w / (s * 2));
		var xlisti = A2($elm$core$List$range, -sxi, sxi);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_Utils_ap(
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$createGraphX, h, s, th, c),
						$elm$core$Basics$toFloat),
					xlisti),
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$createGraphY, w, s, th, c),
						$elm$core$Basics$toFloat),
					ylisti)));
	});
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$ellipse = $elm$svg$Svg$trustedNode('ellipse');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$foreignObject = $elm$svg$Svg$trustedNode('foreignObject');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $MacCASOutreach$graphicsvg$GraphicSVG$ident = _Utils_Tuple2(
	_Utils_Tuple3(1, 0, 0),
	_Utils_Tuple3(0, 1, 0));
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$svg$Svg$mask = $elm$svg$Svg$trustedNode('mask');
var $elm$svg$Svg$Attributes$mask = _VirtualDom_attribute('mask');
var $MacCASOutreach$graphicsvg$GraphicSVG$matrixMult = F2(
	function (_v0, _v3) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var e = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var f = _v2.c;
		var _v4 = _v3.a;
		var a1 = _v4.a;
		var c1 = _v4.b;
		var e1 = _v4.c;
		var _v5 = _v3.b;
		var b1 = _v5.a;
		var d1 = _v5.b;
		var f1 = _v5.c;
		return _Utils_Tuple2(
			_Utils_Tuple3((a * a1) + (c * b1), (a * c1) + (c * d1), (e + (a * e1)) + (c * f1)),
			_Utils_Tuple3((b * a1) + (d * b1), (b * c1) + (d * d1), (f + (b * e1)) + (d * f1)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha = function (_v0) {
	var a = _v0.d;
	return $elm$core$String$fromFloat(a);
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper = function (dec) {
	switch (dec) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return 'A';
		case 11:
			return 'B';
		case 12:
			return 'C';
		case 13:
			return 'D';
		case 14:
			return 'E';
		case 15:
			return 'F';
		default:
			return '';
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$toHex = function (dec) {
	var second = A2($elm$core$Basics$modBy, 16, dec);
	var first = (dec / 16) | 0;
	return _Utils_ap(
		$MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper(first),
		$MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper(second));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$mkRGB = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	return '#' + ($MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		$elm$core$Basics$round(r)) + ($MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		$elm$core$Basics$round(g)) + $MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		$elm$core$Basics$round(b))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$moveT = F2(
	function (_v0, _v1) {
		var u = _v0.a;
		var v = _v0.b;
		var _v2 = _v1.a;
		var a = _v2.a;
		var c = _v2.b;
		var tx = _v2.c;
		var _v3 = _v1.b;
		var b = _v3.a;
		var d = _v3.b;
		var ty = _v3.c;
		return _Utils_Tuple2(
			_Utils_Tuple3(a, c, (tx + (a * u)) + (c * v)),
			_Utils_Tuple3(b, d, (ty + (b * u)) + (d * v)));
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, -y);
		}),
	A2($elm$json$Json$Decode$field, 'offsetX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'offsetY', $elm$json$Json$Decode$float));
var $MacCASOutreach$graphicsvg$GraphicSVG$onEnterAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseover',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onLeaveAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onMouseDownAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onMouseUpAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onMoveAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousemove',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTapAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchEnd = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'touchend',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchPos = F2(
	function (a, b) {
		return {$: 'TouchPos', a: a, b: b};
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['touches', '0']),
			A3(
				$elm$json$Json$Decode$map2,
				$MacCASOutreach$graphicsvg$GraphicSVG$TouchPos,
				A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
				A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float))),
			A3(
			$elm$json$Json$Decode$map2,
			$MacCASOutreach$graphicsvg$GraphicSVG$TouchPos,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$touchToPair = function (tp) {
	var x = tp.a;
	var y = tp.b;
	return _Utils_Tuple2(x, -y);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchMove = function (msg) {
	return A2(
		$elm$html$Html$Events$preventDefaultOn,
		'touchmove',
		A2(
			$elm$json$Json$Decode$map,
			function (a) {
				return _Utils_Tuple2(
					A2($elm$core$Basics$composeL, msg, $MacCASOutreach$graphicsvg$GraphicSVG$touchToPair)(a),
					true);
			},
			$MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchStart = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'touchstart',
		$elm$json$Json$Decode$succeed(msg));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'touchstart',
		A2(
			$elm$json$Json$Decode$map,
			A2($elm$core$Basics$composeL, msg, $MacCASOutreach$graphicsvg$GraphicSVG$touchToPair),
			$MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder));
};
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polygon = $elm$svg$Svg$trustedNode('polygon');
var $elm$svg$Svg$polyline = $elm$svg$Svg$trustedNode('polyline');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask = F2(
	function (a, b) {
		return {$: 'AlphaMask', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Clip = F2(
	function (a, b) {
		return {$: 'Clip', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EnterAt = F2(
	function (a, b) {
		return {$: 'EnterAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EnterShape = F2(
	function (a, b) {
		return {$: 'EnterShape', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Exit = F2(
	function (a, b) {
		return {$: 'Exit', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ExitAt = F2(
	function (a, b) {
		return {$: 'ExitAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject = F3(
	function (a, b, c) {
		return {$: 'ForeignObject', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper = F3(
	function (a, b, c) {
		return {$: 'GraphPaper', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline = function (a) {
	return {$: 'GroupOutline', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Link = F2(
	function (a, b) {
		return {$: 'Link', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseDown = F2(
	function (a, b) {
		return {$: 'MouseDown', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt = F2(
	function (a, b) {
		return {$: 'MouseDownAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseUp = F2(
	function (a, b) {
		return {$: 'MouseUp', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt = F2(
	function (a, b) {
		return {$: 'MouseUpAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt = F2(
	function (a, b) {
		return {$: 'MoveOverAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Rotate = F2(
	function (a, b) {
		return {$: 'Rotate', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Scale = F3(
	function (a, b, c) {
		return {$: 'Scale', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Skew = F3(
	function (a, b, c) {
		return {$: 'Skew', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Tap = F2(
	function (a, b) {
		return {$: 'Tap', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TapAt = F2(
	function (a, b) {
		return {$: 'TapAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd = F2(
	function (a, b) {
		return {$: 'TouchEnd', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt = F2(
	function (a, b) {
		return {$: 'TouchEndAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt = F2(
	function (a, b) {
		return {$: 'TouchMoveAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchStart = F2(
	function (a, b) {
		return {$: 'TouchStart', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt = F2(
	function (a, b) {
		return {$: 'TouchStartAt', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Transformed = F2(
	function (a, b) {
		return {$: 'Transformed', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$repaint = F2(
	function (color, shape) {
		switch (shape.$) {
			case 'Inked':
				if (shape.b.$ === 'Nothing') {
					var _v1 = shape.b;
					var st = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
						$elm$core$Maybe$Just(color),
						$elm$core$Maybe$Nothing,
						st);
				} else {
					var _v2 = shape.b.a;
					var lt = _v2.a;
					var st = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
						$elm$core$Maybe$Just(color),
						$elm$core$Maybe$Just(
							_Utils_Tuple2(lt, color)),
						st);
				}
			case 'Move':
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Move,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Rotate':
				var r = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
					r,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Scale':
				var sx = shape.a;
				var sy = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
					sx,
					sy,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Skew':
				var skx = shape.a;
				var sky = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
					skx,
					sky,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Transformed':
				var tm = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
					tm,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Group':
				var shapes = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
					A2(
						$elm$core$List$map,
						$MacCASOutreach$graphicsvg$GraphicSVG$repaint(color),
						shapes));
			case 'GroupOutline':
				var cmbndshp = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, cmbndshp));
			case 'Link':
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Link,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'AlphaMask':
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Clip':
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Tap':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TapAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'EnterShape':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'EnterAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'Exit':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'ExitAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseDown':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseDownAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseUp':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MouseUpAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'MoveOverAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchStart':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchEnd':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchStartAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchEndAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'TouchMoveAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 'ForeignObject':
				var w = shape.a;
				var h = shape.b;
				var htm = shape.c;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
			case 'Everything':
				return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
			case 'Notathing':
				return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
			default:
				var s = shape.a;
				var th = shape.b;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, color);
		}
	});
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$sin = _Basics_sin;
var $MacCASOutreach$graphicsvg$GraphicSVG$rotateT = F2(
	function (rad, _v0) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var tx = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var ty = _v2.c;
		var sinX = $elm$core$Basics$sin(rad);
		var cosX = $elm$core$Basics$cos(rad);
		return _Utils_Tuple2(
			_Utils_Tuple3((a * cosX) + (c * sinX), (c * cosX) - (a * sinX), tx),
			_Utils_Tuple3((b * cosX) + (d * sinX), (d * cosX) - (b * sinX), ty));
	});
var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var $MacCASOutreach$graphicsvg$GraphicSVG$scaleT = F3(
	function (sx, sy, _v0) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var tx = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var ty = _v2.c;
		return _Utils_Tuple2(
			_Utils_Tuple3(a * sx, c * sy, tx),
			_Utils_Tuple3(b * sx, d * sy, ty));
	});
var $elm$core$Basics$tan = _Basics_tan;
var $MacCASOutreach$graphicsvg$GraphicSVG$skewT = F3(
	function (skx, sky, _v0) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var tx = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var ty = _v2.c;
		var tanY = $elm$core$Basics$tan(-sky);
		var tanX = $elm$core$Basics$tan(-skx);
		return _Utils_Tuple2(
			_Utils_Tuple3(a + (c * tanY), c + (a * tanX), tx),
			_Utils_Tuple3(b + (d * tanY), d + (b * tanX), ty));
	});
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $elm$svg$Svg$Attributes$target = _VirtualDom_attribute('target');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $MacCASOutreach$graphicsvg$GraphicSVG$white = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 255, 255, 1);
var $elm$svg$Svg$Attributes$xlinkHref = function (value) {
	return A3(
		_VirtualDom_attributeNS,
		'http://www.w3.org/1999/xlink',
		'xlink:href',
		_VirtualDom_noJavaScriptUri(value));
};
var $elm$svg$Svg$Attributes$xmlSpace = A2(_VirtualDom_attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var $MacCASOutreach$graphicsvg$GraphicSVG$createSVG = F7(
	function (id, w, h, trans, msgWrapper, positionWrapper, shape) {
		createSVG:
		while (true) {
			switch (shape.$) {
				case 'Inked':
					var fillClr = shape.a;
					var lt = shape.b;
					var stencil = shape.c;
					var strokeAttrs = function () {
						if (lt.$ === 'Nothing') {
							return _List_Nil;
						} else {
							switch (lt.a.a.$) {
								case 'Solid':
									var _v11 = lt.a;
									var th = _v11.a.a;
									var strokeClr = _v11.b;
									var nonStroke = function () {
										var _v12 = strokeClr;
										var opcty = _v12.d;
										return (th <= 0) || (opcty <= 0);
									}();
									return nonStroke ? _List_Nil : _List_fromArray(
										[
											$elm$svg$Svg$Attributes$strokeWidth(
											$elm$core$String$fromFloat(th)),
											$elm$svg$Svg$Attributes$stroke(
											$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(strokeClr)),
											$elm$svg$Svg$Attributes$strokeOpacity(
											$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(strokeClr))
										]);
								case 'Broken':
									var _v13 = lt.a;
									var _v14 = _v13.a;
									var dashes = _v14.a;
									var th = _v14.b;
									var strokeClr = _v13.b;
									var nonStroke = function () {
										var _v15 = strokeClr;
										var opcty = _v15.d;
										return (th <= 0) || ((opcty <= 0) || A2(
											$elm$core$List$all,
											function (_v16) {
												var on = _v16.a;
												return !on;
											},
											dashes));
									}();
									return nonStroke ? _List_Nil : _Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$strokeWidth(
												$elm$core$String$fromFloat(th)),
												$elm$svg$Svg$Attributes$stroke(
												$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(strokeClr)),
												$elm$svg$Svg$Attributes$strokeOpacity(
												$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(strokeClr))
											]),
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$strokeDasharray(
												$elm$core$String$concat(
													A2(
														$elm$core$List$intersperse,
														',',
														A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$pairToString, dashes))))
											]));
								default:
									var _v17 = lt.a;
									var _v18 = _v17.a;
									return _List_Nil;
							}
						}
					}();
					var nonexistBody = function () {
						if (fillClr.$ === 'Nothing') {
							return true;
						} else {
							return false;
						}
					}();
					var clrAttrs = function () {
						if (fillClr.$ === 'Nothing') {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill('none')
								]);
						} else {
							var bodyClr = fillClr.a;
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill(
									$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(bodyClr)),
									$elm$svg$Svg$Attributes$fillOpacity(
									$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(bodyClr))
								]);
						}
					}();
					var _v1 = trans;
					var _v2 = _v1.a;
					var a = _v2.a;
					var c = _v2.b;
					var tx = _v2.c;
					var _v3 = _v1.b;
					var b = _v3.a;
					var d = _v3.b;
					var ty = _v3.c;
					var transAttrs = _List_fromArray(
						[
							$elm$svg$Svg$Attributes$transform(
							'matrix(' + ($elm$core$String$concat(
								A2(
									$elm$core$List$intersperse,
									',',
									A2(
										$elm$core$List$map,
										$elm$core$String$fromFloat,
										_List_fromArray(
											[a, -b, c, -d, tx, -ty])))) + ')'))
						]);
					var attrs = _Utils_ap(
						transAttrs,
						_Utils_ap(clrAttrs, strokeAttrs));
					if (nonexistBody && $elm$core$List$isEmpty(strokeAttrs)) {
						return A2($elm$svg$Svg$g, _List_Nil, _List_Nil);
					} else {
						switch (stencil.$) {
							case 'Circle':
								var r = stencil.a;
								return A2(
									$elm$svg$Svg$circle,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$cx('0'),
												$elm$svg$Svg$Attributes$cy('0'),
												$elm$svg$Svg$Attributes$r(
												$elm$core$String$fromFloat(r))
											]),
										attrs),
									_List_Nil);
							case 'Rect':
								var rw = stencil.a;
								var rh = stencil.b;
								return A2(
									$elm$svg$Svg$rect,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$x(
												$elm$core$String$fromFloat((-rw) / 2)),
												$elm$svg$Svg$Attributes$y(
												$elm$core$String$fromFloat((-rh) / 2)),
												$elm$svg$Svg$Attributes$width(
												$elm$core$String$fromFloat(rw)),
												$elm$svg$Svg$Attributes$height(
												$elm$core$String$fromFloat(rh))
											]),
										attrs),
									_List_Nil);
							case 'RoundRect':
								var rw = stencil.a;
								var rh = stencil.b;
								var r = stencil.c;
								return A2(
									$elm$svg$Svg$rect,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$x(
												$elm$core$String$fromFloat((-rw) / 2)),
												$elm$svg$Svg$Attributes$y(
												$elm$core$String$fromFloat((-rh) / 2)),
												$elm$svg$Svg$Attributes$rx(
												$elm$core$String$fromFloat(r)),
												$elm$svg$Svg$Attributes$ry(
												$elm$core$String$fromFloat(r)),
												$elm$svg$Svg$Attributes$width(
												$elm$core$String$fromFloat(rw)),
												$elm$svg$Svg$Attributes$height(
												$elm$core$String$fromFloat(rh))
											]),
										attrs),
									_List_Nil);
							case 'Oval':
								var ow = stencil.a;
								var oh = stencil.b;
								return A2(
									$elm$svg$Svg$ellipse,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$cx('0'),
												$elm$svg$Svg$Attributes$cy('0'),
												$elm$svg$Svg$Attributes$rx(
												$elm$core$String$fromFloat(0.5 * ow)),
												$elm$svg$Svg$Attributes$ry(
												$elm$core$String$fromFloat(0.5 * oh))
											]),
										attrs),
									_List_Nil);
							case 'Polygon':
								var vertices = stencil.a;
								return A2(
									$elm$svg$Svg$polygon,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$points(
												$elm$core$String$concat(
													A2(
														$elm$core$List$intersperse,
														' ',
														A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$pairToString, vertices))))
											]),
										attrs),
									_List_Nil);
							case 'Path':
								var vertices = stencil.a;
								return A2(
									$elm$svg$Svg$polyline,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$points(
												$elm$core$String$concat(
													A2(
														$elm$core$List$intersperse,
														' ',
														A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$pairToString, vertices))))
											]),
										attrs),
									_List_Nil);
							case 'BezierPath':
								var start = stencil.a;
								var pts = stencil.b;
								return A2(
									$elm$svg$Svg$path,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$d(
												A2($MacCASOutreach$graphicsvg$GraphicSVG$createBezierString, start, pts))
											]),
										attrs),
									_List_Nil);
							default:
								var _v5 = stencil.a;
								var si = _v5.a;
								var bo = _v5.b;
								var i = _v5.c;
								var u = _v5.d;
								var s = _v5.e;
								var sel = _v5.f;
								var f = _v5.g;
								var align = _v5.h;
								var str = stencil.b;
								var txtDec = (u && s) ? 'text-decoration: underline line-through;' : (u ? 'text-decoration: underline;' : (s ? 'text-decoration: line-through;' : ''));
								var select = (!sel) ? '-webkit-touch-callout: none;\n-webkit-user-select: none;\n-khtml-user-select: none;\n-moz-user-select: none;\n-ms-user-select: none;\nuser-select: none;cursor: default;' : '';
								var it = i ? 'font-style: italic;' : '';
								var font = function () {
									switch (f.$) {
										case 'Sansserif':
											return 'sans-serif;';
										case 'Serif':
											return 'serif;';
										case 'FixedWidth':
											return 'monospace;';
										default:
											var fStr = f.a;
											return fStr + ';';
									}
								}();
								var bol = bo ? 'font-weight: bold;' : '';
								var sty = bol + (it + (txtDec + ('font-family: ' + (font + select))));
								var anchor = function () {
									switch (align.$) {
										case 'AlignCentred':
											return 'middle';
										case 'AlignLeft':
											return 'start';
										default:
											return 'end';
									}
								}();
								return A2(
									$elm$svg$Svg$text_,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$x('0'),
												$elm$svg$Svg$Attributes$y('0'),
												$elm$svg$Svg$Attributes$style(sty),
												$elm$svg$Svg$Attributes$fontSize(
												$elm$core$String$fromFloat(si)),
												$elm$svg$Svg$Attributes$textAnchor(anchor),
												$elm$html$Html$Attributes$contenteditable(true)
											]),
										_Utils_ap(
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$transform(
													'matrix(' + ($elm$core$String$concat(
														A2(
															$elm$core$List$intersperse,
															',',
															A2(
																$elm$core$List$map,
																$elm$core$String$fromFloat,
																_List_fromArray(
																	[a, -b, -c, d, tx, -ty])))) + ')'))
												]),
											_Utils_ap(
												_List_fromArray(
													[
														$elm$svg$Svg$Attributes$xmlSpace('preserve')
													]),
												_Utils_ap(clrAttrs, strokeAttrs)))),
									_List_fromArray(
										[
											$elm$svg$Svg$text(str)
										]));
						}
					}
				case 'ForeignObject':
					var fw = shape.a;
					var fh = shape.b;
					var htm = shape.c;
					var _v19 = trans;
					var _v20 = _v19.a;
					var a = _v20.a;
					var c = _v20.b;
					var tx = _v20.c;
					var _v21 = _v19.b;
					var b = _v21.a;
					var d = _v21.b;
					var ty = _v21.c;
					return A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$width(
								$elm$core$String$fromFloat(fw)),
								$elm$svg$Svg$Attributes$height(
								$elm$core$String$fromFloat(fh)),
								$elm$svg$Svg$Attributes$transform(
								'matrix(' + ($elm$core$String$concat(
									A2(
										$elm$core$List$intersperse,
										',',
										A2(
											$elm$core$List$map,
											$elm$core$String$fromFloat,
											_List_fromArray(
												[a, -b, -c, d, tx, -ty])))) + ')'))
							]),
						_List_fromArray(
							[
								A2($elm$html$Html$map, msgWrapper, htm)
							]));
				case 'Move':
					var v = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2($MacCASOutreach$graphicsvg$GraphicSVG$moveT, v, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Everything':
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = $MacCASOutreach$graphicsvg$GraphicSVG$ident,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, w, h));
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Notathing':
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = $MacCASOutreach$graphicsvg$GraphicSVG$ident,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, w, h));
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Rotate':
					var deg = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2($MacCASOutreach$graphicsvg$GraphicSVG$rotateT, deg, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Scale':
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A3($MacCASOutreach$graphicsvg$GraphicSVG$scaleT, sx, sy, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Skew':
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A3($MacCASOutreach$graphicsvg$GraphicSVG$skewT, sx, sy, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Transformed':
					var tm = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2($MacCASOutreach$graphicsvg$GraphicSVG$matrixMult, trans, tm),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 'Link':
					var href = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$a,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$xlinkHref(href),
								$elm$svg$Svg$Attributes$target('_blank')
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'AlphaMask':
					var region = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$defs,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$svg$Svg$mask,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$id('m' + id)
											]),
										_List_fromArray(
											[
												A7(
												$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
												id + 'm',
												w,
												h,
												trans,
												msgWrapper,
												positionWrapper,
												$MacCASOutreach$graphicsvg$GraphicSVG$Group(
													_List_fromArray(
														[
															$MacCASOutreach$graphicsvg$GraphicSVG$Everything,
															A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, $MacCASOutreach$graphicsvg$GraphicSVG$black, region)
														])))
											]))
									])),
								A2(
								$elm$svg$Svg$g,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$mask('url(#m' + (id + ')'))
									]),
								_List_fromArray(
									[
										A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id + 'mm', w, h, trans, msgWrapper, positionWrapper, sh)
									]))
							]));
				case 'Clip':
					var region = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$defs,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$svg$Svg$mask,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$id('c' + id)
											]),
										_List_fromArray(
											[
												A7(
												$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
												id + 'c',
												w,
												h,
												trans,
												msgWrapper,
												positionWrapper,
												$MacCASOutreach$graphicsvg$GraphicSVG$Group(
													_List_fromArray(
														[
															$MacCASOutreach$graphicsvg$GraphicSVG$Notathing,
															A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, $MacCASOutreach$graphicsvg$GraphicSVG$white, region)
														])))
											]))
									])),
								A2(
								$elm$svg$Svg$g,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$mask('url(#c' + (id + ')'))
									]),
								_List_fromArray(
									[
										A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id + 'cc', w, h, trans, msgWrapper, positionWrapper, sh)
									]))
							]));
				case 'Tap':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TapAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTapAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'EnterShape':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseEnter(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'EnterAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onEnterAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'Exit':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseLeave(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'ExitAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onLeaveAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseDown':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseDown(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseDownAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onMouseDownAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseUp':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseUp(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MouseUpAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onMouseUpAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'MoveOverAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onMoveAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchStart':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchStart(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchEnd':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchEnd(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchStartAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchEndAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'TouchMoveAt':
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchMove(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 'Group':
					var shapes = shape.a;
					return A2(
						$elm$svg$Svg$g,
						_List_Nil,
						A2(
							$elm$core$List$indexedMap,
							function (n) {
								return A6(
									$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
									id + ('g' + $elm$core$String$fromInt(n)),
									w,
									h,
									trans,
									msgWrapper,
									positionWrapper);
							},
							shapes));
				case 'GroupOutline':
					var cmbndshp = shape.a;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = trans,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = cmbndshp;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				default:
					var s = shape.a;
					var th = shape.b;
					var c = shape.c;
					return ((th <= 0) || (_Utils_cmp(s, 2 * th) < 0)) ? A2($elm$svg$Svg$g, _List_Nil, _List_Nil) : A7(
						$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
						id,
						w,
						h,
						trans,
						msgWrapper,
						positionWrapper,
						A4(
							$MacCASOutreach$graphicsvg$GraphicSVG$createGraph,
							_Utils_Tuple2(w, h),
							s,
							th,
							c));
			}
		}
	});
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $MacCASOutreach$graphicsvg$GraphicSVG$createCollage = F3(
	function (w, h, shapes) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width('100%'),
					$elm$svg$Svg$Attributes$height('100%'),
					$elm$svg$Svg$Attributes$style('position:absolute;top:0px;left:0px;'),
					$elm$svg$Svg$Attributes$viewBox(
					$elm$core$String$fromFloat((-w) / 2) + (' ' + ($elm$core$String$fromFloat((-h) / 2) + (' ' + ($elm$core$String$fromFloat(w) + (' ' + $elm$core$String$fromFloat(h))))))),
					$elm$svg$Svg$Attributes$id('render')
				]),
			A2(
				$elm$core$List$cons,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$cPath, w, h),
				_List_fromArray(
					[
						A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$clipPath('url(#cPath)')
							]),
						A2(
							$elm$core$List$indexedMap,
							function (n) {
								return A6(
									$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
									$elm$core$String$fromInt(n),
									w,
									h,
									$MacCASOutreach$graphicsvg$GraphicSVG$ident,
									$MacCASOutreach$graphicsvg$GraphicSVG$Graphics,
									$MacCASOutreach$graphicsvg$GraphicSVG$ReturnPosition);
							},
							shapes))
					])));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$hiddenAppView = F2(
	function (userView, _v0) {
		var userModel = _v0.a;
		var userViewEval = userView(userModel);
		var title = userViewEval.title;
		var _v1 = userViewEval.body;
		var w = _v1.a;
		var h = _v1.b;
		var shapes = _v1.c;
		return {
			body: _List_fromArray(
				[
					A3($MacCASOutreach$graphicsvg$GraphicSVG$createCollage, w, h, shapes)
				]),
			title: title
		};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$initHiddenModel = {ch: 0, cw: 0, sh: 0, sw: 0};
var $MacCASOutreach$graphicsvg$GraphicSVG$initialCmd = function (userCmd) {
	return $elm$core$Platform$Cmd$batch(
		_List_fromArray(
			[$MacCASOutreach$graphicsvg$GraphicSVG$getViewportSize, userCmd]));
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$subs = F2(
	function (userSubs, _v0) {
		var userModel = _v0.a;
		return $elm$core$Platform$Sub$batch(
			_Utils_ap(
				_List_fromArray(
					[
						$elm$browser$Browser$Events$onResize(
						F2(
							function (_v1, _v2) {
								return $MacCASOutreach$graphicsvg$GraphicSVG$WindowResize($elm$core$Maybe$Nothing);
							}))
					]),
				_List_fromArray(
					[
						A2(
						$elm$core$Platform$Sub$map,
						$MacCASOutreach$graphicsvg$GraphicSVG$Graphics,
						userSubs(userModel))
					])));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ellieApp = function (input) {
	return $elm$browser$Browser$document(
		{
			init: function (flags) {
				var userInitCmd = input.init(flags).b;
				var userInit = input.init(flags).a;
				var userView = input.view(userInit).body;
				var _v0 = userView;
				var initW = _v0.a;
				var initH = _v0.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						userInit,
						_Utils_update(
							$MacCASOutreach$graphicsvg$GraphicSVG$initHiddenModel,
							{ch: initH, cw: initW})),
					$MacCASOutreach$graphicsvg$GraphicSVG$initialCmd(
						A2($elm$core$Platform$Cmd$map, $MacCASOutreach$graphicsvg$GraphicSVG$Graphics, userInitCmd)));
			},
			subscriptions: $MacCASOutreach$graphicsvg$GraphicSVG$subs(input.subscriptions),
			update: A2($MacCASOutreach$graphicsvg$GraphicSVG$hiddenAppUpdate, input.view, input.update),
			view: $MacCASOutreach$graphicsvg$GraphicSVG$hiddenAppView(input.view)
		});
};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$DownArrow = {$: 'DownArrow'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Key = function (a) {
	return {$: 'Key', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$LeftArrow = {$: 'LeftArrow'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$RightArrow = {$: 'RightArrow'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UpArrow = {$: 'UpArrow'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$WentDown = {$: 'WentDown'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$WentUp = {$: 'WentUp'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$arrowChecker = F5(
	function (checker, up, down, left, right) {
		return _Utils_Tuple2(
			function () {
				var _v0 = _Utils_Tuple2(
					checker(left),
					checker(right));
				_v0$8:
				while (true) {
					switch (_v0.a.$) {
						case 'Down':
							switch (_v0.b.$) {
								case 'Up':
									var _v1 = _v0.a;
									var _v2 = _v0.b;
									return -1;
								case 'JustUp':
									var _v3 = _v0.a;
									var _v4 = _v0.b;
									return -1;
								default:
									break _v0$8;
							}
						case 'JustDown':
							switch (_v0.b.$) {
								case 'Up':
									var _v5 = _v0.a;
									var _v6 = _v0.b;
									return -1;
								case 'JustUp':
									var _v7 = _v0.a;
									var _v8 = _v0.b;
									return -1;
								default:
									break _v0$8;
							}
						case 'Up':
							switch (_v0.b.$) {
								case 'Down':
									var _v9 = _v0.a;
									var _v10 = _v0.b;
									return 1;
								case 'JustDown':
									var _v13 = _v0.a;
									var _v14 = _v0.b;
									return 1;
								default:
									break _v0$8;
							}
						default:
							switch (_v0.b.$) {
								case 'Down':
									var _v11 = _v0.a;
									var _v12 = _v0.b;
									return 1;
								case 'JustDown':
									var _v15 = _v0.a;
									var _v16 = _v0.b;
									return 1;
								default:
									break _v0$8;
							}
					}
				}
				return 0;
			}(),
			function () {
				var _v17 = _Utils_Tuple2(
					checker(down),
					checker(up));
				_v17$8:
				while (true) {
					switch (_v17.a.$) {
						case 'Down':
							switch (_v17.b.$) {
								case 'Up':
									var _v18 = _v17.a;
									var _v19 = _v17.b;
									return -1;
								case 'JustUp':
									var _v20 = _v17.a;
									var _v21 = _v17.b;
									return -1;
								default:
									break _v17$8;
							}
						case 'JustDown':
							switch (_v17.b.$) {
								case 'Up':
									var _v22 = _v17.a;
									var _v23 = _v17.b;
									return -1;
								case 'JustUp':
									var _v24 = _v17.a;
									var _v25 = _v17.b;
									return -1;
								default:
									break _v17$8;
							}
						case 'Up':
							switch (_v17.b.$) {
								case 'Down':
									var _v26 = _v17.a;
									var _v27 = _v17.b;
									return 1;
								case 'JustDown':
									var _v30 = _v17.a;
									var _v31 = _v17.b;
									return 1;
								default:
									break _v17$8;
							}
						default:
							switch (_v17.b.$) {
								case 'Down':
									var _v28 = _v17.a;
									var _v29 = _v17.b;
									return 1;
								case 'JustDown':
									var _v32 = _v17.a;
									var _v33 = _v17.b;
									return 1;
								default:
									break _v17$8;
							}
					}
				}
				return 0;
			}());
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Down = {$: 'Down'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown = {$: 'JustDown'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp = {$: 'JustUp'};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$insertKeyDict = F3(
	function (dict, key, action) {
		var currState = A2($elm$core$Dict$get, key, dict);
		if (currState.$ === 'Just') {
			if (!currState.a.b) {
				switch (currState.a.a.$) {
					case 'JustDown':
						var _v1 = currState.a;
						var _v2 = _v1.a;
						return A3(
							$elm$core$Dict$insert,
							key,
							function () {
								if (action.$ === 'WentDown') {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown, false);
								} else {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown, true);
								}
							}(),
							dict);
					case 'Down':
						var _v4 = currState.a;
						var _v5 = _v4.a;
						return A3(
							$elm$core$Dict$insert,
							key,
							function () {
								if (action.$ === 'WentDown') {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Down, false);
								} else {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp, false);
								}
							}(),
							dict);
					case 'Up':
						var _v7 = currState.a;
						var _v8 = _v7.a;
						return A3(
							$elm$core$Dict$insert,
							key,
							function () {
								if (action.$ === 'WentDown') {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown, false);
								} else {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp, false);
								}
							}(),
							dict);
					default:
						var _v10 = currState.a;
						var _v11 = _v10.a;
						return A3(
							$elm$core$Dict$insert,
							key,
							function () {
								if (action.$ === 'WentDown') {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp, true);
								} else {
									return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp, false);
								}
							}(),
							dict);
				}
			} else {
				var _v13 = currState.a;
				var state = _v13.a;
				return A3(
					$elm$core$Dict$insert,
					key,
					function () {
						if (action.$ === 'WentDown') {
							return _Utils_Tuple2(state, true);
						} else {
							return _Utils_Tuple2(state, true);
						}
					}(),
					dict);
			}
		} else {
			return A3(
				$elm$core$Dict$insert,
				key,
				function () {
					if (action.$ === 'WentDown') {
						return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown, false);
					} else {
						return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp, false);
					}
				}(),
				dict);
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Up = {$: 'Up'};
var $elm$core$Char$toUpper = _Char_toUpper;
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$keyCheckerFunction = F2(
	function (dict, key) {
		var kc = function () {
			switch (key.$) {
				case 'Key':
					var str = key.a;
					return $elm$core$Char$toCode(
						$elm$core$Char$toUpper(
							function () {
								var _v10 = $elm$core$String$uncons(str);
								if (_v10.$ === 'Just') {
									var _v11 = _v10.a;
									var a = _v11.a;
									return a;
								} else {
									return _Utils_chr('z');
								}
							}()));
				case 'Backspace':
					return 8;
				case 'Tab':
					return 9;
				case 'Enter':
					return 13;
				case 'Shift':
					return 16;
				case 'Ctrl':
					return 17;
				case 'Alt':
					return 18;
				case 'Caps':
					return 20;
				case 'Space':
					return 32;
				case 'LeftArrow':
					return 37;
				case 'UpArrow':
					return 38;
				case 'RightArrow':
					return 39;
				case 'DownArrow':
					return 40;
				default:
					return 46;
			}
		}();
		var state = A2($elm$core$Dict$get, kc, dict);
		if (state.$ === 'Just') {
			switch (state.a.a.$) {
				case 'JustDown':
					var _v1 = state.a;
					var _v2 = _v1.a;
					return $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown;
				case 'Down':
					var _v3 = state.a;
					var _v4 = _v3.a;
					return $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Down;
				case 'JustUp':
					var _v5 = state.a;
					var _v6 = _v5.a;
					return $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp;
				default:
					var _v7 = state.a;
					var _v8 = _v7.a;
					return $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Up;
			}
		} else {
			return $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Up;
		}
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$filterHelper = F2(
	function (key, action) {
		if (action.a.$ === 'Up') {
			var _v1 = action.a;
			return false;
		} else {
			return true;
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$maintainHelper = F2(
	function (key, action) {
		if (!action.b) {
			switch (action.a.$) {
				case 'JustUp':
					var _v1 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Up, false);
				case 'Up':
					var _v3 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Up, false);
				case 'JustDown':
					var _v5 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Down, false);
				default:
					var _v7 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Down, false);
			}
		} else {
			switch (action.a.$) {
				case 'JustUp':
					var _v2 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustDown, false);
				case 'Up':
					var _v4 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Up, false);
				case 'JustDown':
					var _v6 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$JustUp, false);
				default:
					var _v8 = action.a;
					return _Utils_Tuple2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Down, false);
			}
		}
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$maintainKeyDict = function (dict) {
	return A2(
		$elm$core$Dict$filter,
		$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$filterHelper,
		A2($elm$core$Dict$map, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$maintainHelper, dict));
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$subtractTimeSeconds = F2(
	function (t1, t0) {
		return ($elm$time$Time$posixToMillis(t1) - $elm$time$Time$posixToMillis(t0)) / 1000;
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$hiddenTickUpdate = F3(
	function (userUpdate, msg, _v0) {
		var userModel = _v0.a;
		var hiddenModel = _v0.b;
		var updateTick = hiddenModel.tick;
		switch (msg.$) {
			case 'UserMsg':
				var userMsg = msg.a;
				var _v2 = A2(userUpdate, userMsg, userModel);
				var newUserModel = _v2.a;
				var newUserCmds = _v2.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(newUserModel, hiddenModel),
					A2($elm$core$Platform$Cmd$map, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UserMsg, newUserCmds));
			case 'InitTime':
				var t = msg.a;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						userModel,
						_Utils_update(
							hiddenModel,
							{initT: t})),
					$elm$core$Platform$Cmd$none);
			case 'TickTime':
				var t = msg.a;
				var timeInSeconds = A2($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$subtractTimeSeconds, t, hiddenModel.initT);
				var keyChecker = $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$keyCheckerFunction(hiddenModel.keys);
				var wasd = A5(
					$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$arrowChecker,
					keyChecker,
					$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Key('w'),
					$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Key('s'),
					$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Key('a'),
					$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Key('d'));
				var arrowKeys = A5($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$arrowChecker, keyChecker, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UpArrow, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$DownArrow, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$LeftArrow, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$RightArrow);
				var _v3 = A2(
					userUpdate,
					A2(
						hiddenModel.tick,
						timeInSeconds,
						_Utils_Tuple3(keyChecker, arrowKeys, wasd)),
					userModel);
				var newUserModel = _v3.a;
				var newUserCmds = _v3.b;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						newUserModel,
						_Utils_update(
							hiddenModel,
							{
								keys: $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$maintainKeyDict(hiddenModel.keys)
							})),
					A2($elm$core$Platform$Cmd$map, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UserMsg, newUserCmds));
			case 'KeyDown':
				var keyCode = msg.a;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						userModel,
						_Utils_update(
							hiddenModel,
							{
								keys: A3($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$insertKeyDict, hiddenModel.keys, keyCode, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$WentDown)
							})),
					$elm$core$Platform$Cmd$none);
			default:
				var keyCode = msg.a;
				return _Utils_Tuple2(
					_Utils_Tuple2(
						userModel,
						_Utils_update(
							hiddenModel,
							{
								keys: A3($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$insertKeyDict, hiddenModel.keys, keyCode, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$WentUp)
							})),
					$elm$core$Platform$Cmd$none);
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$initHiddenModel = function (tick) {
	return {
		initT: $elm$time$Time$millisToPosix(0),
		keys: $elm$core$Dict$empty,
		tick: tick
	};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Collage = F3(
	function (a, b, c) {
		return {$: 'Collage', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$map = F2(
	function (f, sh) {
		switch (sh.$) {
			case 'Inked':
				var fillClr = sh.a;
				var lt = sh.b;
				var stencil = sh.c;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$Inked, fillClr, lt, stencil);
			case 'ForeignObject':
				var w = sh.a;
				var h = sh.b;
				var htm = sh.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject,
					w,
					h,
					A2($elm$html$Html$map, f, htm));
			case 'Move':
				var v = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Move,
					v,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Rotate':
				var deg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
					deg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Scale':
				var sx = sh.a;
				var sy = sh.b;
				var shape = sh.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
					sx,
					sy,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Skew':
				var skx = sh.a;
				var sky = sh.b;
				var shape = sh.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
					skx,
					sky,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Transformed':
				var tm = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
					tm,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Link':
				var href = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Link,
					href,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'AlphaMask':
				var sh1 = sh.a;
				var sh2 = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, sh1),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, sh2));
			case 'Clip':
				var sh1 = sh.a;
				var sh2 = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, sh1),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, sh2));
			case 'Everything':
				return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
			case 'Notathing':
				return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
			case 'Tap':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'TapAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'EnterShape':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'EnterAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Exit':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'ExitAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'MouseDown':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'MouseDownAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'MouseUp':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'MouseUpAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'MoveOverAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'TouchStart':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'TouchEnd':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
					f(msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'TouchStartAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'TouchEndAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'TouchMoveAt':
				var msg = sh.a;
				var shape = sh.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
					A2($elm$core$Basics$composeL, f, msg),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, shape));
			case 'Group':
				var shapes = sh.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
					A2(
						$elm$core$List$map,
						$MacCASOutreach$graphicsvg$GraphicSVG$map(f),
						shapes));
			case 'GroupOutline':
				var cmbndshp = sh.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$map, f, cmbndshp));
			default:
				var s = sh.a;
				var th = sh.b;
				var c = sh.c;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, c);
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$mapCollage = F2(
	function (f, _v0) {
		var w = _v0.a;
		var h = _v0.b;
		var shapes = _v0.c;
		return A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$Collage,
			w,
			h,
			A2(
				$elm$core$List$map,
				$MacCASOutreach$graphicsvg$GraphicSVG$map(f),
				shapes));
	});
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$KeyDown = function (a) {
	return {$: 'KeyDown', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$KeyUp = function (a) {
	return {$: 'KeyUp', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$TickTime = function (a) {
	return {$: 'TickTime', a: a};
};
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keyup');
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$subs = _List_fromArray(
	[
		$elm$browser$Browser$Events$onKeyUp(
		A2(
			$elm$json$Json$Decode$map,
			$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$KeyUp,
			A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int))),
		$elm$browser$Browser$Events$onKeyDown(
		A2(
			$elm$json$Json$Decode$map,
			$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$KeyDown,
			A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int))),
		$elm$browser$Browser$Events$onAnimationFrame($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$TickTime)
	]);
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$ellieAppWithTick = F2(
	function (tickMsg, userApp) {
		var userView = userApp.view;
		var userUpdate = userApp.update;
		var userSubs = userApp.subscriptions;
		var userInit = userApp.init;
		return $MacCASOutreach$graphicsvg$GraphicSVG$ellieApp(
			{
				init: function (flags) {
					var userInitModel = userInit(flags).a;
					var userInitCmds = userInit(flags).b;
					return _Utils_Tuple2(
						_Utils_Tuple2(
							userInitModel,
							$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$initHiddenModel(tickMsg)),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A2($elm$core$Task$perform, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$InitTime, $elm$time$Time$now),
									A2($elm$core$Platform$Cmd$map, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UserMsg, userInitCmds)
								])));
				},
				subscriptions: function (_v0) {
					var userModel = _v0.a;
					return $elm$core$Platform$Sub$batch(
						A2(
							$elm$core$List$cons,
							A2(
								$elm$core$Platform$Sub$map,
								$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UserMsg,
								userSubs(userModel)),
							$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$subs));
				},
				update: $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$hiddenTickUpdate(userUpdate),
				view: function (_v1) {
					var userModel = _v1.a;
					var userViewE = userView(userModel);
					return {
						body: A2($MacCASOutreach$graphicsvg$GraphicSVG$mapCollage, $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$UserMsg, userViewE.body),
						title: userViewE.title
					};
				}
			});
	});
var $author$project$MusicCreator$Close = {$: 'Close'};
var $author$project$MusicCreator$GotNewWidth = F2(
	function (a, b) {
		return {$: 'GotNewWidth', a: a, b: b};
	});
var $author$project$MusicDef$Piano = {$: 'Piano'};
var $author$project$MusicCreator$Reg = {$: 'Reg'};
var $author$project$MusicCreatorDef$Released = {$: 'Released'};
var $author$project$MusicCreator$Small = {$: 'Small'};
var $author$project$MusicDef$TrebleClef = {$: 'TrebleClef'};
var $author$project$MusicCreatorDef$Ts44 = {$: 'Ts44'};
var $author$project$MusicCreatorDef$Waiting = {$: 'Waiting'};
var $author$project$DragBarAssit$lowestTemp = 40;
var $author$project$DragBarAssit$barW = 40;
var $author$project$DragBarAssit$highestTemp = 218;
var $author$project$DragBarAssit$scaleTemp = 0.5;
var $author$project$DragBarAssit$ratio = (($author$project$DragBarAssit$barW - 5) * $author$project$DragBarAssit$scaleTemp) / ($author$project$DragBarAssit$highestTemp - $author$project$DragBarAssit$lowestTemp);
var $author$project$DragBarAssit$findPos = function (num) {
	return (num - $author$project$DragBarAssit$lowestTemp) * $author$project$DragBarAssit$ratio;
};
var $author$project$DragBarAssit$initTempo = 100;
var $author$project$MusicCreatorDef$defDragBarCircle = {
	dragState: $author$project$MusicCreatorDef$Released,
	posX: $author$project$DragBarAssit$findPos($author$project$DragBarAssit$initTempo),
	tempo: $elm$core$Basics$round($author$project$DragBarAssit$initTempo),
	zoomCircle: 1
};
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $author$project$MusicCreatorFunctions$noteToString = function (notes) {
	switch (notes.$) {
		case 'Empty':
			return 'empty';
		case 'WholeN':
			return 'whole';
		case 'HalfN':
			return 'half';
		case 'QuarterN':
			return 'quarter';
		case 'EighthN':
			return 'eighth';
		case 'SixteenthN':
			return 'sixteenth';
		case 'WholeR':
			return 'whole';
		case 'HalfR':
			return 'half';
		case 'QuarterR':
			return 'quarter';
		case 'EighthR':
			return 'eighth';
		case 'SixteenthR':
			return 'sixteenth';
		case 'HalfND':
			return 'half';
		case 'QuarterND':
			return 'quarter';
		case 'EighthND':
			return 'eighth';
		case 'HalfRD':
			return 'half';
		case 'QuarterRD':
			return 'quarter';
		default:
			return 'eighth';
	}
};
var $elm$core$Debug$toString = _Debug_toString;
var $author$project$MusicCreator$generateName = function (record) {
	var tostring = function (x) {
		return _Utils_ap(
			$elm$core$Debug$toString(x.a),
			$elm$core$Debug$toString(x.b));
	};
	return _Utils_ap(
		$author$project$MusicCreatorFunctions$noteToString(record.note),
		tostring(record.pos));
};
var $author$project$MusicCreatorDef$SelectNote = F5(
	function (pos, posInit, dragState, note, _function) {
		return {dragState: dragState, _function: _function, note: note, pos: pos, posInit: posInit};
	});
var $author$project$MusicCreatorDef$NoAccidental = {$: 'NoAccidental'};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$MusicCreator$noteToSpacing = function (notes) {
	switch (notes.$) {
		case 'Empty':
			return 20;
		case 'WholeN':
			return 20;
		case 'HalfN':
			return 20;
		case 'QuarterN':
			return 20;
		case 'EighthN':
			return 18;
		case 'SixteenthN':
			return 15;
		case 'WholeR':
			return 20;
		case 'HalfR':
			return 20;
		case 'QuarterR':
			return 20;
		case 'EighthR':
			return 20;
		case 'SixteenthR':
			return 20;
		case 'HalfND':
			return 22;
		case 'QuarterND':
			return 21;
		case 'EighthND':
			return 20;
		case 'HalfRD':
			return 20;
		case 'QuarterRD':
			return 20;
		default:
			return 20;
	}
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$MusicCreator$wordWidth = 4.5;
var $author$project$MusicCreator$makeScoreNoteX = F2(
	function (pos, list) {
		var tail = function () {
			var _v6 = $elm$core$List$tail(list);
			if (_v6.$ === 'Just') {
				var xs = _v6.a;
				return xs;
			} else {
				return _List_Nil;
			}
		}();
		var makeX = F2(
			function (p, x) {
				if (!x.b) {
					return _List_Nil;
				} else {
					if (!x.b.b) {
						var a = x.a;
						return _List_Nil;
					} else {
						var _v1 = x.a;
						var name1 = _v1.a;
						var a1 = _v1.b;
						var _v2 = x.b;
						var _v3 = _v2.a;
						var name2 = _v3.a;
						var a2 = _v3.b;
						var xs = _v2.b;
						var lyricLength = function (l) {
							return $author$project$MusicCreator$wordWidth * $elm$core$List$length(l);
						};
						var lyricShift = A2(
							$elm$core$Basics$min,
							lyricLength(a1._function.lyric),
							lyricLength(a2._function.lyric));
						var ifAccidental = !_Utils_eq(a2._function.accidental.f, $author$project$MusicCreatorDef$NoAccidental);
						var noteToSpacingA2 = ifAccidental ? ($author$project$MusicCreator$noteToSpacing(a2.note) + 10) : $author$project$MusicCreator$noteToSpacing(a2.note);
						var shift = A2(
							$elm$core$Basics$max,
							lyricShift,
							A2(
								$elm$core$Basics$max,
								$author$project$MusicCreator$noteToSpacing(a1.note),
								noteToSpacingA2));
						return A2(
							$elm$core$List$cons,
							p + shift,
							A2(
								makeX,
								p + shift,
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name2, a2),
									xs)));
					}
				}
			});
		var head = function () {
			var _v4 = $elm$core$List$head(list);
			if (_v4.$ === 'Just') {
				var _v5 = _v4.a;
				var name = _v5.a;
				var a = _v5.b;
				var ifAccidental = !_Utils_eq(a._function.accidental.f, $author$project$MusicCreatorDef$NoAccidental);
				var shift = ifAccidental ? A2(
					$elm$core$Basics$max,
					$author$project$MusicCreator$noteToSpacing(a.note),
					25) : A2(
					$elm$core$Basics$max,
					$author$project$MusicCreator$noteToSpacing(a.note),
					20);
				return pos + shift;
			} else {
				return 0;
			}
		}();
		return A2(
			$elm$core$List$cons,
			head,
			A2(makeX, head, list));
	});
var $author$project$MusicCreatorDef$noteFirstPos = -90;
var $author$project$MusicCreator$updateScoreNoteXDict = F2(
	function (dist, list) {
		var xList = A2($author$project$MusicCreator$makeScoreNoteX, $author$project$MusicCreatorDef$noteFirstPos, list);
		var updatePos = F2(
			function (snd, newX) {
				return _Utils_Tuple2(newX, snd.b);
			});
		return A3(
			$elm$core$List$map2,
			F2(
				function (x, _v0) {
					var name = _v0.a;
					var record = _v0.b;
					return _Utils_Tuple2(
						name,
						A5(
							$author$project$MusicCreatorDef$SelectNote,
							A2(updatePos, record.pos, x),
							A2(updatePos, record.posInit, x),
							record.dragState,
							record.note,
							record._function));
				}),
			xList,
			list);
	});
var $author$project$MusicCreatorDef$ifRest = function (notes) {
	switch (notes.$) {
		case 'Empty':
			return false;
		case 'WholeN':
			return false;
		case 'HalfN':
			return false;
		case 'QuarterN':
			return false;
		case 'EighthN':
			return false;
		case 'SixteenthN':
			return false;
		case 'WholeR':
			return true;
		case 'HalfR':
			return true;
		case 'QuarterR':
			return true;
		case 'EighthR':
			return true;
		case 'SixteenthR':
			return true;
		case 'HalfND':
			return false;
		case 'QuarterND':
			return false;
		case 'EighthND':
			return false;
		case 'HalfRD':
			return true;
		case 'QuarterRD':
			return true;
		default:
			return true;
	}
};
var $author$project$MusicCreatorDef$moveYscore = -70;
var $author$project$MusicCreator$updateScoreNoteYDict = F2(
	function (list, _v0) {
		var highR = _v0.a;
		var lowR = _v0.b;
		var adjectY = function (p) {
			return (_Utils_cmp(p, highR + $author$project$MusicCreatorDef$moveYscore) > 0) ? (highR + $author$project$MusicCreatorDef$moveYscore) : ((_Utils_cmp(p, lowR + $author$project$MusicCreatorDef$moveYscore) < 0) ? (lowR + $author$project$MusicCreatorDef$moveYscore) : p);
		};
		var upadateY = F2(
			function (p, note) {
				return $author$project$MusicCreatorDef$ifRest(note) ? _Utils_Tuple2(p.a, 0 + $author$project$MusicCreatorDef$moveYscore) : _Utils_Tuple2(
					p.a,
					adjectY(
						$elm$core$Basics$round(p.b / 3.5) * 3.5));
			});
		return A2(
			$elm$core$List$map,
			function (_v1) {
				var name = _v1.a;
				var record = _v1.b;
				return _Utils_Tuple2(
					name,
					A5(
						$author$project$MusicCreatorDef$SelectNote,
						A2(upadateY, record.pos, record.note),
						A2(upadateY, record.posInit, record.note),
						record.dragState,
						record.note,
						record._function));
			},
			list);
	});
var $author$project$MusicCreator$scoreNote = F2(
	function (dist, range) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var a = _v0.a;
				var b = _v0.b;
				return _Utils_Tuple2(
					$author$project$MusicCreator$generateName(b),
					b);
			},
			A2(
				$author$project$MusicCreator$updateScoreNoteYDict,
				A2($author$project$MusicCreator$updateScoreNoteXDict, dist, _List_Nil),
				range));
	});
var $author$project$MusicCreatorDef$Flat = {$: 'Flat'};
var $author$project$MusicCreatorDef$Natural = {$: 'Natural'};
var $author$project$MusicCreatorDef$SelectAccidental = F4(
	function (pos, posInit, dragState, f) {
		return {dragState: dragState, f: f, pos: pos, posInit: posInit};
	});
var $author$project$MusicCreatorDef$Sharp = {$: 'Sharp'};
var $author$project$MusicCreator$selectAccidentals = _List_fromArray(
	[
		_Utils_Tuple2(
		'selectAccidentals1',
		A4(
			$author$project$MusicCreatorDef$SelectAccidental,
			_Utils_Tuple2(250, 133),
			_Utils_Tuple2(250, 133),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Sharp)),
		_Utils_Tuple2(
		'selectAccidentals2',
		A4(
			$author$project$MusicCreatorDef$SelectAccidental,
			_Utils_Tuple2(280, 133),
			_Utils_Tuple2(280, 133),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Flat)),
		_Utils_Tuple2(
		'selectAccidentals3',
		A4(
			$author$project$MusicCreatorDef$SelectAccidental,
			_Utils_Tuple2(310, 133),
			_Utils_Tuple2(310, 133),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Natural))
	]);
var $author$project$MusicCreatorDef$Accent = {$: 'Accent'};
var $author$project$MusicCreatorDef$Fermata = {$: 'Fermata'};
var $author$project$MusicCreatorDef$SelectArticulation = F4(
	function (pos, posInit, dragState, f) {
		return {dragState: dragState, f: f, pos: pos, posInit: posInit};
	});
var $author$project$MusicCreatorDef$Slur = {$: 'Slur'};
var $author$project$MusicCreatorDef$Staccatissimo = {$: 'Staccatissimo'};
var $author$project$MusicCreatorDef$Staccato = {$: 'Staccato'};
var $author$project$MusicCreatorDef$Tenuto = {$: 'Tenuto'};
var $author$project$MusicCreator$selectArticulation = _List_fromArray(
	[
		_Utils_Tuple2(
		'selectArticulation1',
		A4(
			$author$project$MusicCreatorDef$SelectArticulation,
			_Utils_Tuple2(230, 87),
			_Utils_Tuple2(230, 87),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Staccato)),
		_Utils_Tuple2(
		'selectArticulation2',
		A4(
			$author$project$MusicCreatorDef$SelectArticulation,
			_Utils_Tuple2(250, 87),
			_Utils_Tuple2(250, 87),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Staccatissimo)),
		_Utils_Tuple2(
		'selectArticulation3',
		A4(
			$author$project$MusicCreatorDef$SelectArticulation,
			_Utils_Tuple2(270, 87),
			_Utils_Tuple2(270, 87),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Fermata)),
		_Utils_Tuple2(
		'selectArticulation4',
		A4(
			$author$project$MusicCreatorDef$SelectArticulation,
			_Utils_Tuple2(290, 87),
			_Utils_Tuple2(290, 87),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Tenuto)),
		_Utils_Tuple2(
		'selectArticulation5',
		A4(
			$author$project$MusicCreatorDef$SelectArticulation,
			_Utils_Tuple2(310, 87),
			_Utils_Tuple2(310, 87),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Accent)),
		_Utils_Tuple2(
		'selectArticulation6',
		A4(
			$author$project$MusicCreatorDef$SelectArticulation,
			_Utils_Tuple2(330, 87),
			_Utils_Tuple2(330, 87),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$Slur))
	]);
var $author$project$MusicCreatorDef$F = {$: 'F'};
var $author$project$MusicCreatorDef$FF = {$: 'FF'};
var $author$project$MusicCreatorDef$MF = {$: 'MF'};
var $author$project$MusicCreatorDef$MP = {$: 'MP'};
var $author$project$MusicCreatorDef$P = {$: 'P'};
var $author$project$MusicCreatorDef$PP = {$: 'PP'};
var $author$project$MusicCreatorDef$SelectDynamic = F4(
	function (pos, posInit, dragState, f) {
		return {dragState: dragState, f: f, pos: pos, posInit: posInit};
	});
var $author$project$MusicCreator$selectDynamicList = _List_fromArray(
	[
		_Utils_Tuple2(
		'selectDynamic1',
		A4(
			$author$project$MusicCreatorDef$SelectDynamic,
			_Utils_Tuple2(90, 23),
			_Utils_Tuple2(90, 23),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$PP)),
		_Utils_Tuple2(
		'selectDynamic2',
		A4(
			$author$project$MusicCreatorDef$SelectDynamic,
			_Utils_Tuple2(110, 23),
			_Utils_Tuple2(110, 23),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$P)),
		_Utils_Tuple2(
		'selectDynamic3',
		A4(
			$author$project$MusicCreatorDef$SelectDynamic,
			_Utils_Tuple2(130, 23),
			_Utils_Tuple2(130, 23),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$MP)),
		_Utils_Tuple2(
		'selectDynamic4',
		A4(
			$author$project$MusicCreatorDef$SelectDynamic,
			_Utils_Tuple2(150, 23),
			_Utils_Tuple2(150, 23),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$MF)),
		_Utils_Tuple2(
		'selectDynamic5',
		A4(
			$author$project$MusicCreatorDef$SelectDynamic,
			_Utils_Tuple2(170, 23),
			_Utils_Tuple2(170, 23),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$F)),
		_Utils_Tuple2(
		'selectDynamic6',
		A4(
			$author$project$MusicCreatorDef$SelectDynamic,
			_Utils_Tuple2(190, 23),
			_Utils_Tuple2(190, 23),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$FF))
	]);
var $author$project$MusicCreatorDef$EighthN = {$: 'EighthN'};
var $author$project$MusicCreatorDef$EighthND = {$: 'EighthND'};
var $author$project$MusicCreatorDef$EighthR = {$: 'EighthR'};
var $author$project$MusicCreatorDef$EighthRD = {$: 'EighthRD'};
var $author$project$MusicCreatorDef$HalfN = {$: 'HalfN'};
var $author$project$MusicCreatorDef$HalfND = {$: 'HalfND'};
var $author$project$MusicCreatorDef$HalfR = {$: 'HalfR'};
var $author$project$MusicCreatorDef$HalfRD = {$: 'HalfRD'};
var $author$project$MusicCreatorDef$QuarterN = {$: 'QuarterN'};
var $author$project$MusicCreatorDef$QuarterND = {$: 'QuarterND'};
var $author$project$MusicCreatorDef$QuarterR = {$: 'QuarterR'};
var $author$project$MusicCreatorDef$QuarterRD = {$: 'QuarterRD'};
var $author$project$MusicCreatorDef$SixteenthN = {$: 'SixteenthN'};
var $author$project$MusicCreatorDef$SixteenthR = {$: 'SixteenthR'};
var $author$project$MusicCreatorDef$WholeN = {$: 'WholeN'};
var $author$project$MusicCreatorDef$WholeR = {$: 'WholeR'};
var $author$project$MusicCreatorDef$NoTie = {$: 'NoTie'};
var $author$project$MusicCreatorDef$defaultLyricRec = _List_fromArray(
	[
		{name: 'head', selected: false, word: ''}
	]);
var $author$project$MusicCreatorDef$defselectAccidentalRec = A4(
	$author$project$MusicCreatorDef$SelectAccidental,
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	$author$project$MusicCreatorDef$Released,
	$author$project$MusicCreatorDef$NoAccidental);
var $author$project$MusicCreatorDef$NoArticulation = {$: 'NoArticulation'};
var $author$project$MusicCreatorDef$defselectArticulation = A4(
	$author$project$MusicCreatorDef$SelectArticulation,
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	$author$project$MusicCreatorDef$Released,
	$author$project$MusicCreatorDef$NoArticulation);
var $author$project$MusicCreatorDef$NoDynamic = {$: 'NoDynamic'};
var $author$project$MusicCreatorDef$defselectDynamicRec = A4(
	$author$project$MusicCreatorDef$SelectDynamic,
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	$author$project$MusicCreatorDef$Released,
	$author$project$MusicCreatorDef$NoDynamic);
var $author$project$MusicCreatorDef$defaultFunction = {accidental: $author$project$MusicCreatorDef$defselectAccidentalRec, articulation: $author$project$MusicCreatorDef$defselectArticulation, dynamic: $author$project$MusicCreatorDef$defselectDynamicRec, lyric: $author$project$MusicCreatorDef$defaultLyricRec, tie: $author$project$MusicCreatorDef$NoTie};
var $author$project$MusicCreator$selectNoteList = _List_fromArray(
	[
		_Utils_Tuple2(
		'selectNote1',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(85, 130),
			_Utils_Tuple2(85, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$WholeN,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote2',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(100, 130),
			_Utils_Tuple2(100, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$HalfN,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote3',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(115, 130),
			_Utils_Tuple2(115, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$HalfND,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote4',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(130, 130),
			_Utils_Tuple2(130, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$QuarterN,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote5',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(145, 130),
			_Utils_Tuple2(145, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$QuarterND,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote6',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(160, 130),
			_Utils_Tuple2(160, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$EighthN,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote7',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(175, 130),
			_Utils_Tuple2(175, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$EighthND,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote8',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(190, 130),
			_Utils_Tuple2(190, 130),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$SixteenthN,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote9',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(85, 75),
			_Utils_Tuple2(85, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$WholeR,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote10',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(100, 75),
			_Utils_Tuple2(100, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$HalfR,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote11',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(115, 75),
			_Utils_Tuple2(115, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$HalfRD,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote12',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(130, 75),
			_Utils_Tuple2(130, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$QuarterR,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote13',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(145, 75),
			_Utils_Tuple2(145, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$QuarterRD,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote14',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(160, 75),
			_Utils_Tuple2(160, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$EighthR,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote15',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(175, 75),
			_Utils_Tuple2(175, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$EighthRD,
			$author$project$MusicCreatorDef$defaultFunction)),
		_Utils_Tuple2(
		'selectNote16',
		A5(
			$author$project$MusicCreatorDef$SelectNote,
			_Utils_Tuple2(190, 75),
			_Utils_Tuple2(190, 75),
			$author$project$MusicCreatorDef$Released,
			$author$project$MusicCreatorDef$SixteenthR,
			$author$project$MusicCreatorDef$defaultFunction))
	]);
var $author$project$MusicCreator$init = _Utils_Tuple2(
	{
		clearBNoZoom: 1,
		clearBYesZoom: 1,
		clearBZoom: 1,
		clearNotes: false,
		clef: $author$project$MusicDef$TrebleClef,
		dragState: $author$project$MusicCreatorDef$Released,
		expand: $author$project$MusicCreator$Reg,
		focus: 0,
		height: 0,
		ifswitch: false,
		instrument: $author$project$MusicDef$Piano,
		instrumentDown: 1,
		instrumentUp: 1,
		invalidSlurList: _List_Nil,
		playButtonZ: 1,
		pos: _Utils_Tuple2(0, 0),
		range: _Utils_Tuple2(36, -36),
		scoreNoteList: A2(
			$author$project$MusicCreator$scoreNote,
			20,
			_Utils_Tuple2(36, -36)),
		scroll: $author$project$MusicCreatorDef$Waiting,
		selectAccidentalsDict: $elm$core$Dict$fromList($author$project$MusicCreator$selectAccidentals),
		selectArticulationDict: $elm$core$Dict$fromList($author$project$MusicCreator$selectArticulation),
		selectDynamicDict: $elm$core$Dict$fromList($author$project$MusicCreator$selectDynamicList),
		selectNoteDict: $elm$core$Dict$fromList($author$project$MusicCreator$selectNoteList),
		sizeofNote: 20,
		tempCircle: $author$project$MusicCreatorDef$defDragBarCircle,
		tempoMinus: 1,
		tempoPlus: 1,
		time: 0,
		timeSignature: $author$project$MusicCreatorDef$Ts44,
		tmDn: 1,
		tmUp: 1,
		trashPos: _Utils_Tuple2(-94, -133),
		trashSize: 20,
		trashState: $author$project$MusicCreator$Close,
		width: 0,
		widthView: $author$project$MusicCreator$Small
	},
	A2(
		$elm$core$Task$perform,
		function (_v0) {
			var viewport = _v0.viewport;
			return A2($author$project$MusicCreator$GotNewWidth, viewport.width, viewport.height);
		},
		$elm$browser$Browser$Dom$getViewport));
var $author$project$MusicCreator$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$elm$browser$Browser$Events$onResize(
				F2(
					function (w, h) {
						return A2($author$project$MusicCreator$GotNewWidth, w, h);
					}))
			]));
};
var $author$project$MusicCreatorDef$Accidental = {$: 'Accidental'};
var $author$project$MusicCreatorDef$Articulation = {$: 'Articulation'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Backspace = {$: 'Backspace'};
var $author$project$MusicCreator$ClearBNoZoom = {$: 'ClearBNoZoom'};
var $author$project$MusicCreator$ClearBYesZoom = {$: 'ClearBYesZoom'};
var $author$project$MusicCreator$ClearBZoom = {$: 'ClearBZoom'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Delete = {$: 'Delete'};
var $author$project$MusicCreatorDef$Dragging = {$: 'Dragging'};
var $author$project$MusicCreatorDef$Dynamic = {$: 'Dynamic'};
var $MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Enter = {$: 'Enter'};
var $author$project$MusicCreator$InstrumentZoomDown = {$: 'InstrumentZoomDown'};
var $author$project$MusicCreator$InstrumentZoomUp = {$: 'InstrumentZoomUp'};
var $author$project$MusicCreator$PlayButtonZ = {$: 'PlayButtonZ'};
var $author$project$MusicCreatorDef$Scrolling = F2(
	function (a, b) {
		return {$: 'Scrolling', a: a, b: b};
	});
var $author$project$MusicCreator$TempoMinusZ = {$: 'TempoMinusZ'};
var $author$project$MusicCreator$TempoPlusZ = {$: 'TempoPlusZ'};
var $author$project$MusicCreator$TmDn = {$: 'TmDn'};
var $author$project$MusicCreator$TmUp = {$: 'TmUp'};
var $author$project$MusicCreatorDef$adjectmoveSpeed = 2.7;
var $author$project$MusicCreatorDef$Functions = F5(
	function (dynamic, lyric, articulation, accidental, tie) {
		return {accidental: accidental, articulation: articulation, dynamic: dynamic, lyric: lyric, tie: tie};
	});
var $author$project$MusicCreator$Open = {$: 'Open'};
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$MusicCreator$disFxyTab = F3(
	function (x, y, list) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var a = _v0.a;
				var b = _v0.b;
				return $elm$core$Basics$sqrt(
					A2($elm$core$Basics$pow, x - a, 2) + A2($elm$core$Basics$pow, y - b, 2));
			},
			A2(
				$elm$core$List$map,
				function (x1) {
					return _Utils_Tuple2(x1, 0 + $author$project$MusicCreatorDef$moveYscore);
				},
				A2($author$project$MusicCreator$makeScoreNoteX, $author$project$MusicCreatorDef$noteFirstPos, list)));
	});
var $author$project$MusicCreatorDef$Empty = {$: 'Empty'};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$MusicCreator$insertCondition30 = F4(
	function (list, x, y, _v0) {
		var highR = _v0.a;
		var lowR = _v0.b;
		var head = function () {
			var _v2 = $elm$core$List$head(list);
			if (_v2.$ === 'Just') {
				var _v3 = _v2.a;
				var name = _v3.a;
				var a = _v3.b;
				return a.note;
			} else {
				return $author$project$MusicCreatorDef$Empty;
			}
		}();
		var end = function () {
			var filter = A2(
				$elm$core$List$drop,
				$elm$core$List$length(list) - 1,
				A2($author$project$MusicCreator$makeScoreNoteX, $author$project$MusicCreatorDef$noteFirstPos, list));
			var _v1 = $elm$core$List$head(filter);
			if (_v1.$ === 'Just') {
				var a = _v1.a;
				return a;
			} else {
				return 0;
			}
		}();
		return (_Utils_cmp(
			x,
			($author$project$MusicCreatorDef$noteFirstPos + $author$project$MusicCreator$noteToSpacing(head)) - 10) > -1) && ((_Utils_cmp(x, end + 30) < 1) && ((_Utils_cmp(y, (lowR - 3) + $author$project$MusicCreatorDef$moveYscore) > -1) && (_Utils_cmp(y, (highR + 3) + $author$project$MusicCreatorDef$moveYscore) < 1)));
	});
var $author$project$MusicCreatorDef$Group = function (a) {
	return {$: 'Group', a: a};
};
var $author$project$MusicCreatorDef$Single = function (a) {
	return {$: 'Single', a: a};
};
var $author$project$MusicCreatorDef$TieE = {$: 'TieE'};
var $author$project$MusicCreatorDef$TieS = {$: 'TieS'};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $author$project$MusicCreatorFunctions$noteToFraction = function (notes) {
	switch (notes.$) {
		case 'Empty':
			return 0;
		case 'WholeN':
			return 1;
		case 'HalfN':
			return 0.5;
		case 'QuarterN':
			return 0.25;
		case 'EighthN':
			return 0.125;
		case 'SixteenthN':
			return 0.0625;
		case 'WholeR':
			return 1;
		case 'HalfR':
			return 0.5;
		case 'QuarterR':
			return 0.25;
		case 'EighthR':
			return 0.125;
		case 'SixteenthR':
			return 0.0625;
		case 'HalfND':
			return 0.75;
		case 'QuarterND':
			return 0.375;
		case 'EighthND':
			return 0.1875;
		case 'HalfRD':
			return 0.75;
		case 'QuarterRD':
			return 0.375;
		default:
			return 0.1875;
	}
};
var $author$project$MusicCreatorFunctions$tsToBase = function (ts) {
	switch (ts.$) {
		case 'Ts44':
			return 4;
		case 'Ts34':
			return 3;
		default:
			return 2;
	}
};
var $author$project$MusicCreatorFunctions$tsToFraction = function (ts) {
	switch (ts.$) {
		case 'Ts44':
			return 4 * (1 / 4);
		case 'Ts34':
			return 3 * (1 / 4);
		default:
			return 2 * (1 / 4);
	}
};
var $author$project$MusicCreatorFunctions$onebeat = function (ts) {
	return $author$project$MusicCreatorFunctions$tsToFraction(ts) / $author$project$MusicCreatorFunctions$tsToBase(ts);
};
var $elm$core$Basics$truncate = _Basics_truncate;
var $author$project$MusicCreatorFunctions$groupByBeaming = F2(
	function (list, ts) {
		var ifFitOneBeat = F3(
			function (count, listx, tmp) {
				ifFitOneBeat:
				while (true) {
					if (!listx.b) {
						return _Utils_Tuple2(tmp, _List_Nil);
					} else {
						var _v1 = listx.a;
						var name = _v1.a;
						var x = _v1.b;
						var xs = listx.b;
						if (_Utils_eq(
							count,
							$author$project$MusicCreatorFunctions$onebeat(ts))) {
							return _Utils_Tuple2(
								tmp,
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, x),
									xs));
						} else {
							if (_Utils_cmp(
								count,
								$author$project$MusicCreatorFunctions$onebeat(ts)) < 0) {
								var $temp$count = count + $author$project$MusicCreatorFunctions$noteToFraction(x.note),
									$temp$listx = xs,
									$temp$tmp = _Utils_ap(
									tmp,
									_List_fromArray(
										[
											_Utils_Tuple2(name, x)
										]));
								count = $temp$count;
								listx = $temp$listx;
								tmp = $temp$tmp;
								continue ifFitOneBeat;
							} else {
								return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						}
					}
				}
			});
		var checkEachBeaming = F2(
			function (listx, carry) {
				var xBeatModOneBeat = function (x) {
					return (($author$project$MusicCreatorFunctions$noteToFraction(x) + carry) / $author$project$MusicCreatorFunctions$onebeat(ts)) | 0;
				};
				if (!listx.b) {
					return _List_fromArray(
						[_List_Nil]);
				} else {
					var _v3 = listx.a;
					var name = _v3.a;
					var x = _v3.b;
					var xs = listx.b;
					if (!(($author$project$MusicCreatorFunctions$noteToFraction(x.note) + carry) - ($author$project$MusicCreatorFunctions$onebeat(ts) * xBeatModOneBeat(x.note)))) {
						return A2(
							$elm$core$List$cons,
							_List_fromArray(
								[
									_Utils_Tuple2(name, x)
								]),
							A2(checkEachBeaming, xs, 0));
					} else {
						if (!xBeatModOneBeat(x.note)) {
							var beamingGroup = A3(
								ifFitOneBeat,
								0,
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, x),
									xs),
								_List_Nil);
							return A2(
								$elm$core$List$cons,
								beamingGroup.a,
								A2(checkEachBeaming, beamingGroup.b, 0));
						} else {
							var beamingGroup = A3(
								ifFitOneBeat,
								$author$project$MusicCreatorFunctions$noteToFraction(x.note) - ($author$project$MusicCreatorFunctions$onebeat(ts) * xBeatModOneBeat(x.note)),
								xs,
								_List_Nil);
							return A2(
								$elm$core$List$cons,
								_Utils_ap(
									_List_fromArray(
										[
											_Utils_Tuple2(name, x)
										]),
									beamingGroup.a),
								A2(checkEachBeaming, beamingGroup.b, 0));
						}
					}
				}
			});
		return A2(checkEachBeaming, list, 0);
	});
var $author$project$MusicCreatorFunctions$ifOneBeatUnfull = F2(
	function (list, ts) {
		var notecount = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, b) {
					var name = _v0.a;
					var a = _v0.b;
					return $author$project$MusicCreatorFunctions$noteToFraction(a.note) + b;
				}),
			0,
			list);
		return (_Utils_cmp(
			notecount,
			$author$project$MusicCreatorFunctions$onebeat(ts)) < 1) ? true : false;
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$MusicCreatorFunctions$groupNoteList = F2(
	function (list, ts) {
		var toGroupNoteTypeList = function (x) {
			return A2(
				$elm$core$List$map,
				function (a) {
					return $author$project$MusicCreatorDef$Single(a);
				},
				x);
		};
		var ifGroupSingles = F2(
			function (s1, s2) {
				return ((_Utils_eq(s1.note, $author$project$MusicCreatorDef$EighthND) || (_Utils_eq(s1.note, $author$project$MusicCreatorDef$EighthN) || _Utils_eq(s1.note, $author$project$MusicCreatorDef$SixteenthN))) && (_Utils_eq(s2.note, $author$project$MusicCreatorDef$EighthND) || (_Utils_eq(s2.note, $author$project$MusicCreatorDef$EighthN) || _Utils_eq(s2.note, $author$project$MusicCreatorDef$SixteenthN)))) ? true : false;
			});
		var groupping = function (x) {
			groupping:
			while (true) {
				if (!x.b) {
					return _List_Nil;
				} else {
					if (!x.b.b) {
						var x1 = x.a;
						return A2($elm$core$List$cons, x1, _List_Nil);
					} else {
						var x1 = x.a;
						var _v1 = x.b;
						var x2 = _v1.a;
						var xs = _v1.b;
						if (x1.$ === 'Single') {
							var _v3 = x1.a;
							var name1 = _v3.a;
							var s1 = _v3.b;
							if (x2.$ === 'Single') {
								var _v5 = x2.a;
								var name2 = _v5.a;
								var s2 = _v5.b;
								if (_Utils_cmp(
									$author$project$MusicCreatorFunctions$noteToFraction(s1.note),
									$author$project$MusicCreatorFunctions$onebeat(ts)) > -1) {
									return A2(
										$elm$core$List$cons,
										x1,
										groupping(
											A2($elm$core$List$cons, x2, xs)));
								} else {
									if (A2(ifGroupSingles, s1, s2)) {
										var $temp$x = A2(
											$elm$core$List$cons,
											$author$project$MusicCreatorDef$Group(
												_List_fromArray(
													[
														_Utils_Tuple2(name1, s1),
														_Utils_Tuple2(name2, s2)
													])),
											xs);
										x = $temp$x;
										continue groupping;
									} else {
										return A2(
											$elm$core$List$cons,
											x1,
											A2(
												$elm$core$List$cons,
												x2,
												groupping(xs)));
									}
								}
							} else {
								var g2 = x2.a;
								return A2(
									$elm$core$List$cons,
									x1,
									A2(
										$elm$core$List$cons,
										x2,
										groupping(xs)));
							}
						} else {
							var g1 = x1.a;
							if (x2.$ === 'Single') {
								var _v7 = x2.a;
								var name2 = _v7.a;
								var s2 = _v7.b;
								if ($author$project$MusicCreatorDef$ifRest(s2.note)) {
									return A2(
										$elm$core$List$cons,
										x1,
										A2(
											$elm$core$List$cons,
											x2,
											groupping(xs)));
								} else {
									if (A2(
										$author$project$MusicCreatorFunctions$ifOneBeatUnfull,
										_Utils_ap(
											g1,
											_List_fromArray(
												[
													_Utils_Tuple2(name2, s2)
												])),
										ts)) {
										var $temp$x = A2(
											$elm$core$List$cons,
											$author$project$MusicCreatorDef$Group(
												_Utils_ap(
													g1,
													_List_fromArray(
														[
															_Utils_Tuple2(name2, s2)
														]))),
											xs);
										x = $temp$x;
										continue groupping;
									} else {
										return A2(
											$elm$core$List$cons,
											x1,
											groupping(
												A2($elm$core$List$cons, x2, xs)));
									}
								}
							} else {
								var g2 = x2.a;
								return A2(
									$elm$core$List$cons,
									x1,
									A2(
										$elm$core$List$cons,
										x2,
										groupping(xs)));
							}
						}
					}
				}
			}
		};
		var countFract = A3(
			$elm$core$List$foldl,
			F2(
				function (_v9, def) {
					var name = _v9.a;
					var a = _v9.b;
					return $author$project$MusicCreatorFunctions$noteToFraction(a.note) + def;
				}),
			0,
			list);
		var allEighthNoteCase = A2(
			$elm$core$List$cons,
			$author$project$MusicCreatorDef$Group(
				A2($elm$core$List$take, 4, list)),
			A2(
				$elm$core$List$cons,
				$author$project$MusicCreatorDef$Group(
					A2($elm$core$List$drop, 4, list)),
				_List_Nil));
		var allEighthNote = A2(
			$elm$core$List$all,
			function (_v8) {
				var name = _v8.a;
				var a = _v8.b;
				return _Utils_eq(a.note, $author$project$MusicCreatorDef$EighthN);
			},
			list);
		return (_Utils_eq(ts, $author$project$MusicCreatorDef$Ts44) && ((countFract === 1) && allEighthNote)) ? allEighthNoteCase : $elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (x) {
					return groupping(
						toGroupNoteTypeList(x));
				},
				A2($author$project$MusicCreatorFunctions$groupByBeaming, list, ts)));
	});
var $author$project$MusicCreatorFunctions$verifyTie = F2(
	function (list, ts) {
		var verifyAccidential = F2(
			function (a, b) {
				return _Utils_eq(a.accidental.f, b.accidental.f) ? true : (((!_Utils_eq(a.accidental.f, $author$project$MusicCreatorDef$NoAccidental)) && _Utils_eq(b.accidental.f, $author$project$MusicCreatorDef$NoAccidental)) ? true : ((_Utils_eq(a.accidental.f, $author$project$MusicCreatorDef$NoAccidental) && _Utils_eq(b.accidental.f, $author$project$MusicCreatorDef$Natural)) ? true : false));
			});
		var toTieE = function (x) {
			return A5(
				$author$project$MusicCreatorDef$SelectNote,
				x.pos,
				x.posInit,
				x.dragState,
				x.note,
				A5($author$project$MusicCreatorDef$Functions, x._function.dynamic, x._function.lyric, $author$project$MusicCreatorDef$defselectArticulation, x._function.accidental, $author$project$MusicCreatorDef$TieE));
		};
		var toSlur = function (x) {
			return A5(
				$author$project$MusicCreatorDef$SelectNote,
				x.pos,
				x.posInit,
				x.dragState,
				x.note,
				A5(
					$author$project$MusicCreatorDef$Functions,
					x._function.dynamic,
					x._function.lyric,
					A4(
						$author$project$MusicCreatorDef$SelectArticulation,
						_Utils_Tuple2(0, 0),
						_Utils_Tuple2(0, 0),
						$author$project$MusicCreatorDef$Released,
						$author$project$MusicCreatorDef$Slur),
					x._function.accidental,
					$author$project$MusicCreatorDef$NoTie));
		};
		var restoreKeepArticulation = function (x) {
			return A5(
				$author$project$MusicCreatorDef$SelectNote,
				x.pos,
				x.posInit,
				x.dragState,
				x.note,
				A5($author$project$MusicCreatorDef$Functions, x._function.dynamic, x._function.lyric, x._function.articulation, x._function.accidental, $author$project$MusicCreatorDef$NoTie));
		};
		var restore = function (x) {
			return A5(
				$author$project$MusicCreatorDef$SelectNote,
				x.pos,
				x.posInit,
				x.dragState,
				x.note,
				A5($author$project$MusicCreatorDef$Functions, x._function.dynamic, x._function.lyric, $author$project$MusicCreatorDef$defselectArticulation, x._function.accidental, $author$project$MusicCreatorDef$NoTie));
		};
		var getYPos = function (x) {
			return x.pos.b;
		};
		var ifTieGroup = F2(
			function (g, nextList) {
				var xLast = A2(
					$elm$core$List$drop,
					$elm$core$List$length(g) - 1,
					g);
				var noTie = A2(
					$elm$core$List$map,
					function (_v17) {
						var name = _v17.a;
						var a = _v17.b;
						return _Utils_eq(a._function.tie, $author$project$MusicCreatorDef$TieS) ? _Utils_Tuple2(
							name,
							restore(a)) : _Utils_Tuple2(name, a);
					},
					A2(
						$elm$core$List$take,
						$elm$core$List$length(g) - 1,
						g));
				var maybeTie = function (next) {
					maybeTie:
					while (true) {
						if (!xLast.b) {
							return {rest: _List_Nil, verified: _List_Nil};
						} else {
							var _v12 = xLast.a;
							var name = _v12.a;
							var x = _v12.b;
							if (_Utils_eq(x._function.tie, $author$project$MusicCreatorDef$TieS)) {
								if (!next.b) {
									return {
										rest: _List_Nil,
										verified: _List_fromArray(
											[
												_Utils_Tuple2(
												name,
												restore(x))
											])
									};
								} else {
									if (next.a.$ === 'Single') {
										var _v14 = next.a.a;
										var name1 = _v14.a;
										var s = _v14.b;
										var xs = next.b;
										return (!_Utils_eq(s._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation)) ? {
											rest: xs,
											verified: _List_fromArray(
												[
													_Utils_Tuple2(
													name,
													restore(x)),
													_Utils_Tuple2(
													name1,
													restoreKeepArticulation(s))
												])
										} : ((_Utils_eq(
											getYPos(s),
											getYPos(x)) && A2(verifyAccidential, x._function, s._function)) ? {
											rest: xs,
											verified: _List_fromArray(
												[
													_Utils_Tuple2(name, x),
													_Utils_Tuple2(
													name1,
													toTieE(s))
												])
										} : {
											rest: xs,
											verified: _List_fromArray(
												[
													_Utils_Tuple2(
													name,
													toSlur(x)),
													_Utils_Tuple2(
													name1,
													restore(s))
												])
										});
									} else {
										if (!next.a.a.b) {
											var xs = next.b;
											var $temp$next = xs;
											next = $temp$next;
											continue maybeTie;
										} else {
											var _v15 = next.a.a;
											var _v16 = _v15.a;
											var name1 = _v16.a;
											var g1 = _v16.b;
											var gs = _v15.b;
											var xs = next.b;
											return (!_Utils_eq(g1._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation)) ? {
												rest: A2(
													$elm$core$List$cons,
													$author$project$MusicCreatorDef$Group(gs),
													xs),
												verified: _List_fromArray(
													[
														_Utils_Tuple2(
														name,
														restore(x)),
														_Utils_Tuple2(
														name1,
														restoreKeepArticulation(g1))
													])
											} : ((_Utils_eq(
												getYPos(g1),
												getYPos(x)) && A2(verifyAccidential, x._function, g1._function)) ? {
												rest: A2(
													$elm$core$List$cons,
													$author$project$MusicCreatorDef$Group(gs),
													xs),
												verified: _List_fromArray(
													[
														_Utils_Tuple2(name, x),
														_Utils_Tuple2(
														name1,
														toTieE(g1))
													])
											} : {
												rest: A2(
													$elm$core$List$cons,
													$author$project$MusicCreatorDef$Group(gs),
													xs),
												verified: _List_fromArray(
													[
														_Utils_Tuple2(
														name,
														toSlur(x)),
														_Utils_Tuple2(
														name1,
														restore(g1))
													])
											});
										}
									}
								}
							} else {
								return {
									rest: next,
									verified: _List_fromArray(
										[
											_Utils_Tuple2(name, x)
										])
								};
							}
						}
					}
				};
				return {
					rest: maybeTie(nextList).rest,
					verified: _Utils_ap(
						noTie,
						maybeTie(nextList).verified)
				};
			});
		var ifTie = function (x) {
			ifTie:
			while (true) {
				if (!x.b) {
					return _List_Nil;
				} else {
					if (x.a.$ === 'Single') {
						if (!x.b.b) {
							var _v1 = x.a.a;
							var name = _v1.a;
							var s = _v1.b;
							return (!_Utils_eq(s._function.tie, $author$project$MusicCreatorDef$NoTie)) ? A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									name,
									restore(s)),
								_List_Nil) : A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name, s),
								_List_Nil);
						} else {
							if (x.b.a.$ === 'Single') {
								var _v2 = x.a.a;
								var name = _v2.a;
								var s = _v2.b;
								var _v3 = x.b;
								var _v4 = _v3.a.a;
								var name2 = _v4.a;
								var s2 = _v4.b;
								var xs = _v3.b;
								return _Utils_eq(s._function.tie, $author$project$MusicCreatorDef$TieS) ? ((_Utils_eq(
									getYPos(s),
									getYPos(s2)) && A2(verifyAccidential, s._function, s2._function)) ? A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, s),
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(
											name2,
											toTieE(s2)),
										ifTie(xs))) : A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										name,
										toSlur(s)),
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(
											name2,
											restore(s2)),
										ifTie(xs)))) : A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, s),
									ifTie(
										A2(
											$elm$core$List$cons,
											$author$project$MusicCreatorDef$Single(
												_Utils_Tuple2(name2, s2)),
											xs)));
							} else {
								if (!x.b.a.a.b) {
									var _v5 = x.a.a;
									var name = _v5.a;
									var s = _v5.b;
									var _v6 = x.b;
									var xs = _v6.b;
									var $temp$x = A2(
										$elm$core$List$cons,
										$author$project$MusicCreatorDef$Single(
											_Utils_Tuple2(name, s)),
										xs);
									x = $temp$x;
									continue ifTie;
								} else {
									var _v7 = x.a.a;
									var name = _v7.a;
									var s = _v7.b;
									var _v8 = x.b;
									var _v9 = _v8.a.a;
									var _v10 = _v9.a;
									var name1 = _v10.a;
									var g1 = _v10.b;
									var gs = _v9.b;
									var xs = _v8.b;
									return _Utils_eq(s._function.tie, $author$project$MusicCreatorDef$TieS) ? ((_Utils_eq(
										getYPos(s),
										getYPos(g1)) && A2(verifyAccidential, s._function, g1._function)) ? A2(
										$elm$core$List$cons,
										_Utils_Tuple2(name, s),
										ifTie(
											A2(
												$elm$core$List$cons,
												$author$project$MusicCreatorDef$Group(
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(
															name1,
															toTieE(g1)),
														gs)),
												xs))) : A2(
										$elm$core$List$cons,
										_Utils_Tuple2(
											name,
											toSlur(s)),
										ifTie(
											A2(
												$elm$core$List$cons,
												$author$project$MusicCreatorDef$Group(
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(
															name1,
															restore(g1)),
														gs)),
												xs)))) : A2(
										$elm$core$List$cons,
										_Utils_Tuple2(name, s),
										ifTie(
											A2(
												$elm$core$List$cons,
												$author$project$MusicCreatorDef$Group(
													A2(
														$elm$core$List$cons,
														_Utils_Tuple2(name1, g1),
														gs)),
												xs)));
								}
							}
						}
					} else {
						var g = x.a.a;
						var xs = x.b;
						return _Utils_ap(
							A2(ifTieGroup, g, xs).verified,
							ifTie(
								A2(ifTieGroup, g, xs).rest));
					}
				}
			}
		};
		return ifTie(
			A2($author$project$MusicCreatorFunctions$groupNoteList, list, ts));
	});
var $author$project$MusicCreator$changeAccidentalsDragToRealease = F2(
	function (nameOfNote, model) {
		var newScoreList = A2(
			$elm$core$List$map,
			function (_v4) {
				var name = _v4.a;
				var a = _v4.b;
				var _function = a._function;
				var new_function = _Utils_update(
					_function,
					{accidental: $author$project$MusicCreatorDef$defselectAccidentalRec});
				return (_Utils_eq(name, nameOfNote) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_function})) : _Utils_Tuple2(name, a);
			},
			model.scoreNoteList);
		var getAccidental = A3(
			$elm$core$List$foldl,
			F2(
				function (_v3, def) {
					var name = _v3.a;
					var a = _v3.b;
					return _Utils_eq(name, nameOfNote) ? a._function.accidental : def;
				}),
			$author$project$MusicCreatorDef$defselectAccidentalRec,
			model.scoreNoteList);
		var x = getAccidental.pos.a;
		var y = getAccidental.pos.b;
		var f = getAccidental.f;
		var distance = A3($author$project$MusicCreator$disFxyTab, x, y, model.scoreNoteList);
		var targetValue = function () {
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, model.scoreNoteList, x, y, model.range) ? z : 9999;
				},
				distance);
			return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
		}();
		var ifInsert = A2(
			$elm$core$List$any,
			function (a) {
				return a;
			},
			A3(
				$elm$core$List$map2,
				F2(
					function (_v2, l2) {
						var name = _v2.a;
						var a = _v2.b;
						return (_Utils_eq(l2, targetValue) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? true : false;
					}),
				newScoreList,
				distance));
		var newList = function () {
			var updateAccidental = A4(
				$author$project$MusicCreatorDef$SelectAccidental,
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, 0),
				$author$project$MusicCreatorDef$Released,
				f);
			var updateF = function (a) {
				return A5($author$project$MusicCreatorDef$Functions, a._function.dynamic, a._function.lyric, a._function.articulation, updateAccidental, a._function.tie);
			};
			var restoreAccidental = function (a) {
				return A4(
					$author$project$MusicCreatorDef$SelectAccidental,
					_Utils_Tuple2(0, 0),
					_Utils_Tuple2(0, 0),
					$author$project$MusicCreatorDef$Released,
					a._function.accidental.f);
			};
			var restoreF = function (a) {
				return A5(
					$author$project$MusicCreatorDef$Functions,
					a._function.dynamic,
					a._function.lyric,
					a._function.articulation,
					restoreAccidental(a),
					a._function.tie);
			};
			return _Utils_eq(model.trashState, $author$project$MusicCreator$Open) ? newScoreList : (ifInsert ? A3(
				$elm$core$List$map2,
				F2(
					function (_v0, l2) {
						var name = _v0.a;
						var a = _v0.b;
						return (_Utils_eq(l2, targetValue) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateF(a)
								})) : _Utils_Tuple2(name, a);
					}),
				newScoreList,
				distance) : A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var a = _v1.b;
					return _Utils_Tuple2(
						name,
						_Utils_update(
							a,
							{
								_function: restoreF(a)
							}));
				},
				model.scoreNoteList));
		}();
		return A2($author$project$MusicCreatorFunctions$verifyTie, newList, model.timeSignature);
	});
var $author$project$MusicCreator$changeAccidentalsRealeaseToDrag = F2(
	function (_v0, pos) {
		var name = _v0.a;
		var a = _v0.b;
		var updateF = function () {
			var f = a._function;
			return A5(
				$author$project$MusicCreatorDef$Functions,
				f.dynamic,
				f.lyric,
				f.articulation,
				A4($author$project$MusicCreatorDef$SelectAccidental, pos, pos, $author$project$MusicCreatorDef$Dragging, f.accidental.f),
				f.tie);
		}();
		return _Utils_Tuple2(
			name,
			_Utils_update(
				a,
				{_function: updateF}));
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$MusicCreator$changeArticulationDragToRealease = F2(
	function (nameOfNote, model) {
		var getArticulation = A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, def) {
					var name = _v4.a;
					var a = _v4.b;
					return _Utils_eq(name, nameOfNote) ? a._function.articulation : def;
				}),
			$author$project$MusicCreatorDef$defselectArticulation,
			model.scoreNoteList);
		var x = getArticulation.pos.a;
		var y = getArticulation.pos.b;
		var f = getArticulation.f;
		var ifUpdate = F2(
			function (a, name) {
				return _Utils_eq(f, $author$project$MusicCreatorDef$Fermata) ? true : (_Utils_eq(f, $author$project$MusicCreatorDef$Slur) ? (!A2($elm$core$List$member, name, model.invalidSlurList)) : ((!$author$project$MusicCreatorDef$ifRest(a.note)) && (!_Utils_eq(a._function.tie, $author$project$MusicCreatorDef$TieE))));
			});
		var newScoreList = A2(
			$elm$core$List$map,
			function (_v3) {
				var name = _v3.a;
				var a = _v3.b;
				var _function = a._function;
				var new_function = _Utils_update(
					_function,
					{articulation: $author$project$MusicCreatorDef$defselectArticulation});
				return (_Utils_eq(name, nameOfNote) && A2(ifUpdate, a, name)) ? _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_function})) : _Utils_Tuple2(name, a);
			},
			model.scoreNoteList);
		var distance = A3($author$project$MusicCreator$disFxyTab, x, y, model.scoreNoteList);
		var targetValue = function () {
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, model.scoreNoteList, x, y, model.range) ? z : 9999;
				},
				distance);
			return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
		}();
		var ifInsert = A2(
			$elm$core$List$any,
			function (a) {
				return a;
			},
			A3(
				$elm$core$List$map2,
				F2(
					function (_v2, l2) {
						var name = _v2.a;
						var a = _v2.b;
						return (_Utils_eq(l2, targetValue) && A2(ifUpdate, a, name)) ? true : false;
					}),
				newScoreList,
				distance));
		var newList = function () {
			var updateArticulation = A4(
				$author$project$MusicCreatorDef$SelectArticulation,
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, 0),
				$author$project$MusicCreatorDef$Released,
				f);
			var updateF = function (a) {
				return A5($author$project$MusicCreatorDef$Functions, a._function.dynamic, a._function.lyric, updateArticulation, a._function.accidental, a._function.tie);
			};
			var restoreArticulation = function (a) {
				return A4(
					$author$project$MusicCreatorDef$SelectArticulation,
					_Utils_Tuple2(0, 0),
					_Utils_Tuple2(0, 0),
					$author$project$MusicCreatorDef$Released,
					a._function.articulation.f);
			};
			var restoreF = function (a) {
				return A5(
					$author$project$MusicCreatorDef$Functions,
					a._function.dynamic,
					a._function.lyric,
					restoreArticulation(a),
					a._function.accidental,
					a._function.tie);
			};
			return _Utils_eq(model.trashState, $author$project$MusicCreator$Open) ? newScoreList : (ifInsert ? A3(
				$elm$core$List$map2,
				F2(
					function (_v0, l2) {
						var name = _v0.a;
						var a = _v0.b;
						return (_Utils_eq(l2, targetValue) && A2(ifUpdate, a, name)) ? _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateF(a)
								})) : _Utils_Tuple2(name, a);
					}),
				newScoreList,
				distance) : A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var a = _v1.b;
					return _Utils_Tuple2(
						name,
						_Utils_update(
							a,
							{
								_function: restoreF(a)
							}));
				},
				model.scoreNoteList));
		}();
		return A2($author$project$MusicCreatorFunctions$verifyTie, newList, model.timeSignature);
	});
var $author$project$MusicCreator$changeArticulationRealeaseToDrag = F2(
	function (_v0, pos) {
		var name = _v0.a;
		var a = _v0.b;
		var updateF = function () {
			var f = a._function;
			return A5(
				$author$project$MusicCreatorDef$Functions,
				f.dynamic,
				f.lyric,
				A4($author$project$MusicCreatorDef$SelectArticulation, pos, pos, $author$project$MusicCreatorDef$Dragging, f.articulation.f),
				f.accidental,
				f.tie);
		}();
		return _Utils_Tuple2(
			name,
			_Utils_update(
				a,
				{_function: updateF}));
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$MusicCreator$extractF = F3(
	function (nameOfNote, dict, def) {
		return A2(
			$elm$core$Maybe$withDefault,
			def,
			A2($elm$core$Dict$get, nameOfNote, dict)).f;
	});
var $author$project$MusicCreator$extractPos = F3(
	function (nameOfNote, dict, def) {
		return A2(
			$elm$core$Maybe$withDefault,
			def,
			A2($elm$core$Dict$get, nameOfNote, dict)).pos;
	});
var $author$project$MusicCreator$changeDragSelectUpdateAccidentals = F2(
	function (nameOfNote, model) {
		var pos = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectAccidentalsDict, $author$project$MusicCreatorDef$defselectAccidentalRec);
		var x = pos.a;
		var y = pos.b;
		var f = A3($author$project$MusicCreator$extractF, nameOfNote, model.selectAccidentalsDict, $author$project$MusicCreatorDef$defselectAccidentalRec);
		var distance = A3($author$project$MusicCreator$disFxyTab, x, y, model.scoreNoteList);
		var targetValue = function () {
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, model.scoreNoteList, x, y, model.range) ? z : 9999;
				},
				distance);
			return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
		}();
		var newList = function () {
			var updateAccidentals = A4(
				$author$project$MusicCreatorDef$SelectAccidental,
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, 0),
				$author$project$MusicCreatorDef$Released,
				f);
			var updateF = function (a) {
				return A5($author$project$MusicCreatorDef$Functions, a._function.dynamic, a._function.lyric, a._function.articulation, updateAccidentals, a._function.tie);
			};
			return A3(
				$elm$core$List$map2,
				F2(
					function (_v0, l2) {
						var name = _v0.a;
						var a = _v0.b;
						return (_Utils_eq(l2, targetValue) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateF(a)
								})) : _Utils_Tuple2(name, a);
					}),
				model.scoreNoteList,
				distance);
		}();
		return A2($author$project$MusicCreatorFunctions$verifyTie, newList, model.timeSignature);
	});
var $author$project$MusicCreator$changeDragSelectUpdateArticulation = F2(
	function (nameOfNote, model) {
		var pos = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectArticulationDict, $author$project$MusicCreatorDef$defselectArticulation);
		var x = pos.a;
		var y = pos.b;
		var f = A3($author$project$MusicCreator$extractF, nameOfNote, model.selectArticulationDict, $author$project$MusicCreatorDef$defselectArticulation);
		var ifUpdate = F2(
			function (a, name) {
				return _Utils_eq(f, $author$project$MusicCreatorDef$Fermata) ? true : (_Utils_eq(f, $author$project$MusicCreatorDef$Slur) ? (!A2($elm$core$List$member, name, model.invalidSlurList)) : ((!$author$project$MusicCreatorDef$ifRest(a.note)) && (!_Utils_eq(a._function.tie, $author$project$MusicCreatorDef$TieE))));
			});
		var distance = A3($author$project$MusicCreator$disFxyTab, x, y, model.scoreNoteList);
		var targetValue = function () {
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, model.scoreNoteList, x, y, model.range) ? z : 9999;
				},
				distance);
			return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
		}();
		var newList = function () {
			var updateArticulation = A4(
				$author$project$MusicCreatorDef$SelectArticulation,
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, 0),
				$author$project$MusicCreatorDef$Released,
				f);
			var updateF = function (a) {
				return A5($author$project$MusicCreatorDef$Functions, a._function.dynamic, a._function.lyric, updateArticulation, a._function.accidental, a._function.tie);
			};
			return A3(
				$elm$core$List$map2,
				F2(
					function (_v0, l2) {
						var name = _v0.a;
						var a = _v0.b;
						return (_Utils_eq(l2, targetValue) && A2(ifUpdate, a, name)) ? _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateF(a)
								})) : _Utils_Tuple2(name, a);
					}),
				model.scoreNoteList,
				distance);
		}();
		return A2($author$project$MusicCreatorFunctions$verifyTie, newList, model.timeSignature);
	});
var $author$project$MusicCreator$changeDragSelectUpdateDynamic = F2(
	function (nameOfNote, model) {
		var pos = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectDynamicDict, $author$project$MusicCreatorDef$defselectDynamicRec);
		var x = pos.a;
		var y = pos.b;
		var f = A3($author$project$MusicCreator$extractF, nameOfNote, model.selectDynamicDict, $author$project$MusicCreatorDef$defselectDynamicRec);
		var distance = A3($author$project$MusicCreator$disFxyTab, x, y, model.scoreNoteList);
		var targetValue = function () {
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, model.scoreNoteList, x, y, model.range) ? z : 9999;
				},
				distance);
			return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
		}();
		var newList = function () {
			var updateDynamic = A4(
				$author$project$MusicCreatorDef$SelectDynamic,
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, 0),
				$author$project$MusicCreatorDef$Released,
				f);
			var updateF = function (a) {
				return A5($author$project$MusicCreatorDef$Functions, updateDynamic, a._function.lyric, a._function.articulation, a._function.accidental, a._function.tie);
			};
			return A3(
				$elm$core$List$map2,
				F2(
					function (_v0, l2) {
						var name = _v0.a;
						var a = _v0.b;
						return (_Utils_eq(l2, targetValue) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateF(a)
								})) : _Utils_Tuple2(name, a);
					}),
				model.scoreNoteList,
				distance);
		}();
		return newList;
	});
var $author$project$MusicCreatorFunctions$noteMenuList = _List_fromArray(
	[$author$project$MusicCreatorDef$WholeN, $author$project$MusicCreatorDef$HalfN, $author$project$MusicCreatorDef$QuarterN, $author$project$MusicCreatorDef$EighthN, $author$project$MusicCreatorDef$SixteenthN, $author$project$MusicCreatorDef$HalfND, $author$project$MusicCreatorDef$QuarterND, $author$project$MusicCreatorDef$EighthND]);
var $author$project$MusicCreatorFunctions$restMenuList = _List_fromArray(
	[$author$project$MusicCreatorDef$WholeR, $author$project$MusicCreatorDef$HalfR, $author$project$MusicCreatorDef$QuarterR, $author$project$MusicCreatorDef$EighthR, $author$project$MusicCreatorDef$SixteenthR, $author$project$MusicCreatorDef$HalfRD, $author$project$MusicCreatorDef$QuarterRD, $author$project$MusicCreatorDef$EighthRD]);
var $author$project$MusicCreatorFunctions$fractionToNote = F2(
	function (frac, note) {
		var list = $author$project$MusicCreatorDef$ifRest(note) ? $author$project$MusicCreatorFunctions$restMenuList : $author$project$MusicCreatorFunctions$noteMenuList;
		var findNote = function (f) {
			return A2(
				$elm$core$List$map,
				function (a) {
					return _Utils_Tuple2(
						a,
						f - $author$project$MusicCreatorFunctions$noteToFraction(a));
				},
				list);
		};
		var getNote = function (f) {
			return A3(
				$elm$core$List$foldl,
				F2(
					function (_v0, _v1) {
						var n1 = _v0.a;
						var a1 = _v0.b;
						var n2 = _v1.a;
						var a2 = _v1.b;
						return ((a1 < 0) || (_Utils_cmp(a1, a2) > 0)) ? _Utils_Tuple2(n2, a2) : _Utils_Tuple2(n1, a1);
					}),
				_Utils_Tuple2($author$project$MusicCreatorDef$Empty, 99999),
				findNote(f));
		};
		var split = function (f) {
			return (!(!f)) ? A2(
				$elm$core$List$cons,
				getNote(f).a,
				split(
					f - $author$project$MusicCreatorFunctions$noteToFraction(
						getNote(f).a))) : _List_Nil;
		};
		return split(frac);
	});
var $author$project$MusicCreatorFunctions$autoSplit = F2(
	function (list, ts) {
		var checkEachBeaming = F2(
			function (listx, carry) {
				var xBeatModOneBeat = function (x) {
					return (($author$project$MusicCreatorFunctions$noteToFraction(x) + carry) / $author$project$MusicCreatorFunctions$onebeat(ts)) | 0;
				};
				if (!listx.b) {
					return _List_Nil;
				} else {
					var _v3 = listx.a;
					var name = _v3.a;
					var a = _v3.b;
					var xs = listx.b;
					return (!(($author$project$MusicCreatorFunctions$noteToFraction(a.note) + carry) - ($author$project$MusicCreatorFunctions$onebeat(ts) * xBeatModOneBeat(a.note)))) ? A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name, a),
						A2(checkEachBeaming, xs, 0)) : ((!xBeatModOneBeat(a.note)) ? A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name, a),
						A2(
							ifFitOneBeat,
							$author$project$MusicCreatorFunctions$noteToFraction(a.note),
							xs)) : A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name, a),
						A2(
							ifFitOneBeat,
							$author$project$MusicCreatorFunctions$noteToFraction(a.note) - ($author$project$MusicCreatorFunctions$onebeat(ts) * xBeatModOneBeat(a.note)),
							xs)));
				}
			});
		var ifFitOneBeat = F2(
			function (count, listx) {
				if (!listx.b) {
					return _List_Nil;
				} else {
					var _v1 = listx.a;
					var name = _v1.a;
					var a = _v1.b;
					var xs = listx.b;
					var nextCount = count + $author$project$MusicCreatorFunctions$noteToFraction(a.note);
					if (_Utils_eq(
						nextCount,
						$author$project$MusicCreatorFunctions$onebeat(ts))) {
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2(name, a),
							A2(checkEachBeaming, xs, 0));
					} else {
						if (_Utils_cmp(
							nextCount,
							$author$project$MusicCreatorFunctions$onebeat(ts)) < 0) {
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name, a),
								A2(ifFitOneBeat, nextCount, xs));
						} else {
							var updateTie = function (f) {
								return A5($author$project$MusicCreatorDef$Functions, f.dynamic, f.lyric, f.articulation, f.accidental, $author$project$MusicCreatorDef$TieS);
							};
							var fillCount = $author$project$MusicCreatorFunctions$onebeat(ts) - count;
							var split1 = A2($author$project$MusicCreatorFunctions$fractionToNote, fillCount, a.note);
							var split2 = A2(
								$author$project$MusicCreatorFunctions$fractionToNote,
								$author$project$MusicCreatorFunctions$noteToFraction(a.note) - fillCount,
								a.note);
							var adoptNewList = F2(
								function (listy, endBeat) {
									return (endBeat && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? A2(
										$elm$core$List$map,
										function (a2) {
											return _Utils_Tuple2(
												'name',
												A5(
													$author$project$MusicCreatorDef$SelectNote,
													a.pos,
													a.posInit,
													$author$project$MusicCreatorDef$Released,
													a2,
													updateTie(a._function)));
										},
										listy) : A2(
										$elm$core$List$map,
										function (a2) {
											return _Utils_Tuple2(
												'name',
												A5($author$project$MusicCreatorDef$SelectNote, a.pos, a.posInit, $author$project$MusicCreatorDef$Released, a2, a._function));
										},
										listy);
								});
							return _Utils_ap(
								A2(adoptNewList, split1, true),
								A2(
									checkEachBeaming,
									_Utils_ap(
										A2(adoptNewList, split2, false),
										xs),
									0));
						}
					}
				}
			});
		return A2(checkEachBeaming, list, 0);
	});
var $author$project$MusicCreatorFunctions$checkBeaming = F2(
	function (list, ts) {
		var checkEachBeaming = F3(
			function (currentbeat, listx, carry) {
				var xBeatModOneBeat = function (x) {
					return (($author$project$MusicCreatorFunctions$noteToFraction(x) + carry) / $author$project$MusicCreatorFunctions$onebeat(ts)) | 0;
				};
				if (!listx.b) {
					return _Utils_Tuple2(0, true);
				} else {
					var x = listx.a;
					var xs = listx.b;
					return (!(($author$project$MusicCreatorFunctions$noteToFraction(x) + carry) - ($author$project$MusicCreatorFunctions$onebeat(ts) * xBeatModOneBeat(x)))) ? A3(
						checkEachBeaming,
						currentbeat + xBeatModOneBeat(x),
						xs,
						0) : ((!xBeatModOneBeat(x)) ? A3(
						ifFitOneBeat,
						currentbeat,
						0,
						A2($elm$core$List$cons, x, xs)) : A3(
						ifFitOneBeat,
						currentbeat,
						$author$project$MusicCreatorFunctions$noteToFraction(x) - ($author$project$MusicCreatorFunctions$onebeat(ts) * xBeatModOneBeat(x)),
						xs));
				}
			});
		var ifFitOneBeat = F3(
			function (currentbeat, count, listx) {
				if (!listx.b) {
					return (_Utils_cmp(
						count,
						$author$project$MusicCreatorFunctions$onebeat(ts)) < 1) ? _Utils_Tuple2(0, true) : _Utils_Tuple2(currentbeat + 1, false);
				} else {
					var x = listx.a;
					var xs = listx.b;
					return _Utils_eq(
						count,
						$author$project$MusicCreatorFunctions$onebeat(ts)) ? A3(
						checkEachBeaming,
						currentbeat + 1,
						A2($elm$core$List$cons, x, xs),
						0) : ((_Utils_cmp(
						count,
						$author$project$MusicCreatorFunctions$onebeat(ts)) < 0) ? A3(
						ifFitOneBeat,
						currentbeat,
						count + $author$project$MusicCreatorFunctions$noteToFraction(x),
						xs) : _Utils_Tuple2(currentbeat + 1, false));
				}
			});
		return A3(checkEachBeaming, 0, list, 0);
	});
var $author$project$MusicCreator$clearEmpty = function (list) {
	return $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var a = _v0.b;
				return _Utils_eq(a.note, $author$project$MusicCreatorDef$Empty) ? _List_Nil : _List_fromArray(
					[
						_Utils_Tuple2(name, a)
					]);
			},
			list));
};
var $author$project$MusicCreatorDef$defselectNoteRec = A5(
	$author$project$MusicCreatorDef$SelectNote,
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	_Utils_Tuple2(0, 0 + $author$project$MusicCreatorDef$moveYscore),
	$author$project$MusicCreatorDef$Released,
	$author$project$MusicCreatorDef$Empty,
	$author$project$MusicCreatorDef$defaultFunction);
var $author$project$MusicCreator$insertCondition25 = F4(
	function (list, x, y, _v0) {
		var highR = _v0.a;
		var lowR = _v0.b;
		var head = function () {
			var _v2 = $elm$core$List$head(list);
			if (_v2.$ === 'Just') {
				var _v3 = _v2.a;
				var name = _v3.a;
				var a = _v3.b;
				return a.note;
			} else {
				return $author$project$MusicCreatorDef$Empty;
			}
		}();
		var end = function () {
			var filter = A2(
				$elm$core$List$drop,
				$elm$core$List$length(list) - 1,
				A2($author$project$MusicCreator$makeScoreNoteX, $author$project$MusicCreatorDef$noteFirstPos, list));
			var _v1 = $elm$core$List$head(filter);
			if (_v1.$ === 'Just') {
				var a = _v1.a;
				return a;
			} else {
				return 0;
			}
		}();
		return (_Utils_cmp(
			x,
			($author$project$MusicCreatorDef$noteFirstPos + $author$project$MusicCreator$noteToSpacing(head)) - 10) > -1) && ((_Utils_cmp(x, end + 20) < 1) && ((_Utils_cmp(y, (lowR - 3) + $author$project$MusicCreatorDef$moveYscore) > -1) && (_Utils_cmp(y, (highR + 3) + $author$project$MusicCreatorDef$moveYscore) < 1)));
	});
var $author$project$MusicCreator$onlyNote = function (list) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return a.note;
		},
		list);
};
var $author$project$MusicCreator$updateScoreName = function (list) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var record = _v0.b;
			return _Utils_eq(record.note, $author$project$MusicCreatorDef$Empty) ? _Utils_Tuple2(name, record) : _Utils_Tuple2(
				$author$project$MusicCreator$generateName(record),
				record);
		},
		list);
};
var $author$project$MusicCreatorFunctions$verifySlur = function (list) {
	var restoreSlur = function (x) {
		return A5(
			$author$project$MusicCreatorDef$SelectNote,
			x.pos,
			x.posInit,
			x.dragState,
			x.note,
			A5($author$project$MusicCreatorDef$Functions, x._function.dynamic, x._function.lyric, $author$project$MusicCreatorDef$defselectArticulation, x._function.accidental, x._function.tie));
	};
	var getYPos = function (x) {
		return x.pos.b;
	};
	if (!list.b) {
		return _List_Nil;
	} else {
		if (!list.b.b) {
			var x = list.a;
			return _List_fromArray(
				[x]);
		} else {
			var _v1 = list.a;
			var name1 = _v1.a;
			var x1 = _v1.b;
			var _v2 = list.b;
			var _v3 = _v2.a;
			var name2 = _v3.a;
			var x2 = _v3.b;
			var xs = _v2.b;
			return _Utils_eq(x1._function.articulation.f, $author$project$MusicCreatorDef$Slur) ? (((!$author$project$MusicCreatorDef$ifRest(x2.note)) && (!_Utils_eq(
				getYPos(x1),
				getYPos(x2)))) ? A2(
				$elm$core$List$cons,
				_Utils_Tuple2(name1, x1),
				$author$project$MusicCreatorFunctions$verifySlur(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name2, x2),
						xs))) : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					name1,
					restoreSlur(x1)),
				$author$project$MusicCreatorFunctions$verifySlur(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name2, x2),
						xs)))) : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(name1, x1),
				$author$project$MusicCreatorFunctions$verifySlur(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name2, x2),
						xs)));
		}
	}
};
var $author$project$MusicCreator$changeDrageScoreNoteUpdateScoreNote = F2(
	function (nameOfNote, model) {
		var validateEachBeaming = function (list) {
			return A2(
				$author$project$MusicCreatorFunctions$checkBeaming,
				$author$project$MusicCreator$onlyNote(list),
				model.timeSignature).b;
		};
		var getDragedNote = A3(
			$elm$core$List$foldl,
			F2(
				function (_v7, _default) {
					var name = _v7.a;
					var record = _v7.b;
					return _Utils_eq(name, nameOfNote) ? record : _default;
				}),
			$author$project$MusicCreatorDef$defselectNoteRec,
			model.scoreNoteList);
		var initX = getDragedNote.posInit.a;
		var initY = getDragedNote.posInit.b;
		var x = getDragedNote.pos.a;
		var y = getDragedNote.pos.b;
		var dumpDrage = function () {
			var emotyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return $elm$core$List$concat(
				function (l) {
					return A2(
						$elm$core$List$append,
						l,
						_List_fromArray(
							[
								_List_fromArray(
								[
									_Utils_Tuple2('addOne', emotyLastnote)
								])
							]));
				}(
					A2(
						$elm$core$List$map,
						function (_v6) {
							var name = _v6.a;
							var record = _v6.b;
							return _Utils_eq(name, nameOfNote) ? _List_fromArray(
								[
									_Utils_Tuple2('addOne', emotyLastnote)
								]) : (_Utils_eq(record.note, $author$project$MusicCreatorDef$Empty) ? _List_Nil : _List_fromArray(
								[
									_Utils_Tuple2(name, record)
								]));
						},
						model.scoreNoteList)));
		}();
		var disInitPostList = function () {
			var distanceOld = A3($author$project$MusicCreator$disFxyTab, initX, initY, model.scoreNoteList);
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition25, dumpDrage, initX, initY, model.range) ? z : 99999;
				},
				distanceOld);
			var minValue = A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
			return A2(
				$elm$core$List$map,
				function (z) {
					return _Utils_eq(z, minValue) ? getDragedNote.note : $author$project$MusicCreatorDef$Empty;
				},
				distanceOld);
		}();
		var listUpdateInitXY = function () {
			var oldNote = function (ds) {
				return A5(
					$author$project$MusicCreatorDef$SelectNote,
					_Utils_Tuple2(initX, initY),
					_Utils_Tuple2(initX, initY),
					$author$project$MusicCreatorDef$Released,
					ds,
					getDragedNote._function);
			};
			return $elm$core$List$concat(
				A3(
					$elm$core$List$map2,
					F2(
						function (ds, _v3) {
							var fstns = _v3.a;
							var sndns = _v3.b;
							if (!_Utils_eq(sndns.note, $author$project$MusicCreatorDef$Empty)) {
								if (ds.$ === 'Empty') {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(
											nameOfNote,
											oldNote(ds)),
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							} else {
								if (ds.$ === 'Empty') {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(
											nameOfNote,
											oldNote(ds))
										]);
								}
							}
						}),
					disInitPostList,
					dumpDrage));
		}();
		var disDragPosList = function () {
			var distanceNew = A3($author$project$MusicCreator$disFxyTab, x, y, dumpDrage);
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition25, dumpDrage, x, y, model.range) ? z : 199999;
				},
				distanceNew);
			var minValue = A3($elm$core$List$foldl, $elm$core$Basics$min, 9999, filter1);
			return A2(
				$elm$core$List$map,
				function (z) {
					return _Utils_eq(z, minValue) ? getDragedNote.note : $author$project$MusicCreatorDef$Empty;
				},
				distanceNew);
		}();
		var doesInstart = A2(
			$elm$core$List$all,
			function (a) {
				return _Utils_eq(a, $author$project$MusicCreatorDef$Empty);
			},
			disDragPosList);
		var newList = function () {
			var newNote = function (ds) {
				return A5(
					$author$project$MusicCreatorDef$SelectNote,
					_Utils_Tuple2(0, y),
					_Utils_Tuple2(0, y),
					$author$project$MusicCreatorDef$Released,
					ds,
					getDragedNote._function);
			};
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return (doesInstart && _Utils_eq(model.trashState, $author$project$MusicCreator$Close)) ? listUpdateInitXY : $elm$core$List$concat(
				A3(
					$elm$core$List$map2,
					F2(
						function (ds, _v0) {
							var fstns = _v0.a;
							var sndns = _v0.b;
							if (!_Utils_eq(sndns.note, $author$project$MusicCreatorDef$Empty)) {
								if (ds.$ === 'Empty') {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'tmpName',
											newNote(ds)),
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							} else {
								if (ds.$ === 'Empty') {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'tmpName',
											newNote(ds))
										]);
								}
							}
						}),
					disDragPosList,
					dumpDrage));
		}();
		var updateNewList = function () {
			if (validateEachBeaming(newList)) {
				return $author$project$MusicCreator$updateScoreName(
					A2(
						$author$project$MusicCreator$updateScoreNoteYDict,
						A2(
							$author$project$MusicCreator$updateScoreNoteXDict,
							model.sizeofNote,
							$author$project$MusicCreator$clearEmpty(newList)),
						model.range));
			} else {
				var splitList = A2($author$project$MusicCreatorFunctions$autoSplit, newList, model.timeSignature);
				return validateEachBeaming(splitList) ? $author$project$MusicCreator$updateScoreName(
					A2(
						$author$project$MusicCreator$updateScoreNoteYDict,
						A2(
							$author$project$MusicCreator$updateScoreNoteXDict,
							model.sizeofNote,
							$author$project$MusicCreator$clearEmpty(splitList)),
						model.range)) : $author$project$MusicCreator$updateScoreName(
					A2(
						$author$project$MusicCreator$updateScoreNoteYDict,
						A2(
							$author$project$MusicCreator$updateScoreNoteXDict,
							model.sizeofNote,
							$author$project$MusicCreator$clearEmpty(listUpdateInitXY)),
						model.range));
			}
		}();
		return A2(
			$author$project$MusicCreatorFunctions$verifyTie,
			$author$project$MusicCreatorFunctions$verifySlur(updateNewList),
			model.timeSignature);
	});
var $author$project$MusicCreator$extractNote = F3(
	function (nameOfNote, dict, def) {
		return A2(
			$elm$core$Maybe$withDefault,
			def,
			A2($elm$core$Dict$get, nameOfNote, dict)).note;
	});
var $author$project$MusicCreatorFunctions$ifMeasureUnfull = F2(
	function (list, ts) {
		var tscount = $author$project$MusicCreatorFunctions$tsToFraction(ts);
		var notecount = A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, b) {
					var name = _v0.a;
					var a = _v0.b;
					return $author$project$MusicCreatorFunctions$noteToFraction(a.note) + b;
				}),
			0,
			list);
		return (_Utils_cmp(notecount, tscount) < 1) ? true : false;
	});
var $author$project$MusicCreator$changeDrageSeletedNoteUpdateScoreNote = F2(
	function (nameOfNote, model) {
		var y = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec).b;
		var x = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec).a;
		var scoreNoteListAddOne = function () {
			var filter = $elm$core$List$concat(
				A2(
					$elm$core$List$map,
					function (_v3) {
						var name = _v3.a;
						var b = _v3.b;
						return _Utils_eq(b.note, $author$project$MusicCreatorDef$Empty) ? _List_Nil : _List_fromArray(
							[
								_Utils_Tuple2(name, b)
							]);
					},
					model.scoreNoteList));
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return A2(
				$elm$core$List$append,
				filter,
				_List_fromArray(
					[
						_Utils_Tuple2('addOne', emptyLastnote)
					]));
		}();
		var disList = function () {
			var distance = A3($author$project$MusicCreator$disFxyTab, x, y, scoreNoteListAddOne);
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, scoreNoteListAddOne, x, y, model.range) ? z : 9999;
				},
				distance);
			var minValue = A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
			return A2(
				$elm$core$List$map,
				function (z) {
					return _Utils_eq(z, minValue) ? A3($author$project$MusicCreator$extractNote, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec) : $author$project$MusicCreatorDef$Empty;
				},
				distance);
		}();
		var newList = function () {
			var newNote = function (ds) {
				return A5(
					$author$project$MusicCreatorDef$SelectNote,
					_Utils_Tuple2(0, y),
					_Utils_Tuple2(0, y),
					$author$project$MusicCreatorDef$Released,
					ds,
					$author$project$MusicCreatorDef$defaultFunction);
			};
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return $elm$core$List$concat(
				A3(
					$elm$core$List$map2,
					F2(
						function (ds, _v0) {
							var fstns = _v0.a;
							var sndns = _v0.b;
							if (!_Utils_eq(sndns.note, $author$project$MusicCreatorDef$Empty)) {
								if (ds.$ === 'Empty') {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'tmpName',
											newNote(ds)),
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							} else {
								if (ds.$ === 'Empty') {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'tmpName',
											newNote(ds))
										]);
								}
							}
						}),
					disList,
					scoreNoteListAddOne));
		}();
		var updateNewList = function () {
			var validateWholeMeasure = function (list) {
				return A2($author$project$MusicCreatorFunctions$ifMeasureUnfull, list, model.timeSignature);
			};
			var validateEachBeaming = function (list) {
				return A2(
					$author$project$MusicCreatorFunctions$checkBeaming,
					$author$project$MusicCreator$onlyNote(list),
					model.timeSignature).b;
			};
			if (validateWholeMeasure(newList) && validateEachBeaming(newList)) {
				return $author$project$MusicCreator$updateScoreName(
					A2(
						$author$project$MusicCreator$updateScoreNoteYDict,
						A2(
							$author$project$MusicCreator$updateScoreNoteXDict,
							model.sizeofNote,
							$author$project$MusicCreator$clearEmpty(newList)),
						model.range));
			} else {
				var splitList = A2($author$project$MusicCreatorFunctions$autoSplit, newList, model.timeSignature);
				return (validateWholeMeasure(splitList) && validateEachBeaming(splitList)) ? $author$project$MusicCreator$updateScoreName(
					A2(
						$author$project$MusicCreator$updateScoreNoteYDict,
						A2(
							$author$project$MusicCreator$updateScoreNoteXDict,
							model.sizeofNote,
							$author$project$MusicCreator$clearEmpty(splitList)),
						model.range)) : $author$project$MusicCreator$updateScoreName(
					A2(
						$author$project$MusicCreator$updateScoreNoteYDict,
						A2(
							$author$project$MusicCreator$updateScoreNoteXDict,
							model.sizeofNote,
							$author$project$MusicCreator$clearEmpty(model.scoreNoteList)),
						model.range));
			}
		}();
		return A2(
			$author$project$MusicCreatorFunctions$verifyTie,
			$author$project$MusicCreatorFunctions$verifySlur(updateNewList),
			model.timeSignature);
	});
var $author$project$MusicCreator$changeDynamicDragToRealease = F2(
	function (nameOfNote, model) {
		var newScoreList = A2(
			$elm$core$List$map,
			function (_v4) {
				var name = _v4.a;
				var a = _v4.b;
				var _function = a._function;
				var new_function = _Utils_update(
					_function,
					{dynamic: $author$project$MusicCreatorDef$defselectDynamicRec});
				return (_Utils_eq(name, nameOfNote) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_function})) : _Utils_Tuple2(name, a);
			},
			model.scoreNoteList);
		var getDynamic = A3(
			$elm$core$List$foldl,
			F2(
				function (_v3, def) {
					var name = _v3.a;
					var a = _v3.b;
					return _Utils_eq(name, nameOfNote) ? a._function.dynamic : def;
				}),
			$author$project$MusicCreatorDef$defselectDynamicRec,
			model.scoreNoteList);
		var x = getDynamic.pos.a;
		var y = getDynamic.pos.b;
		var f = getDynamic.f;
		var distance = A3($author$project$MusicCreator$disFxyTab, x, y, model.scoreNoteList);
		var targetValue = function () {
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, model.scoreNoteList, x, y, model.range) ? z : 9999;
				},
				distance);
			return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
		}();
		var ifInsert = A2(
			$elm$core$List$any,
			function (a) {
				return a;
			},
			A3(
				$elm$core$List$map2,
				F2(
					function (_v2, l2) {
						var name = _v2.a;
						var a = _v2.b;
						return (_Utils_eq(l2, targetValue) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? true : false;
					}),
				newScoreList,
				distance));
		var newList = function () {
			var updateDynamic = A4(
				$author$project$MusicCreatorDef$SelectDynamic,
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, 0),
				$author$project$MusicCreatorDef$Released,
				f);
			var updateF = function (a) {
				return A5($author$project$MusicCreatorDef$Functions, updateDynamic, a._function.lyric, a._function.articulation, a._function.accidental, a._function.tie);
			};
			var restoreDynamic = function (a) {
				return A4(
					$author$project$MusicCreatorDef$SelectDynamic,
					_Utils_Tuple2(0, 0),
					_Utils_Tuple2(0, 0),
					$author$project$MusicCreatorDef$Released,
					a._function.dynamic.f);
			};
			var restoreF = function (a) {
				return A5(
					$author$project$MusicCreatorDef$Functions,
					restoreDynamic(a),
					a._function.lyric,
					a._function.articulation,
					a._function.accidental,
					a._function.tie);
			};
			return _Utils_eq(model.trashState, $author$project$MusicCreator$Open) ? newScoreList : (ifInsert ? A3(
				$elm$core$List$map2,
				F2(
					function (_v0, l2) {
						var name = _v0.a;
						var a = _v0.b;
						return (_Utils_eq(l2, targetValue) && (!$author$project$MusicCreatorDef$ifRest(a.note))) ? _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateF(a)
								})) : _Utils_Tuple2(name, a);
					}),
				newScoreList,
				distance) : A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var a = _v1.b;
					return _Utils_Tuple2(
						name,
						_Utils_update(
							a,
							{
								_function: restoreF(a)
							}));
				},
				model.scoreNoteList));
		}();
		return newList;
	});
var $author$project$MusicCreator$changeDynamicRealeaseToDrag = F2(
	function (_v0, pos) {
		var name = _v0.a;
		var a = _v0.b;
		var updateF = function () {
			var f = a._function;
			return A5(
				$author$project$MusicCreatorDef$Functions,
				A4($author$project$MusicCreatorDef$SelectDynamic, pos, pos, $author$project$MusicCreatorDef$Dragging, f.dynamic.f),
				f.lyric,
				f.articulation,
				f.accidental,
				f.tie);
		}();
		return _Utils_Tuple2(
			name,
			_Utils_update(
				a,
				{_function: updateF}));
	});
var $author$project$InputKeyAssist$clearSelect = function (list) {
	return A2(
		$elm$core$List$map,
		function (a) {
			return {name: a.name, selected: false, word: a.word};
		},
		list);
};
var $author$project$MusicCreator$clearSelect = function (list) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			var _function = a._function;
			var new_function = _Utils_update(
				_function,
				{
					lyric: $author$project$InputKeyAssist$clearSelect(a._function.lyric)
				});
			return _Utils_Tuple2(
				name,
				_Utils_update(
					a,
					{_function: new_function}));
		},
		list);
};
var $author$project$MusicCreatorFunctions$createaccidentalList = function (list) {
	var accidental = function (a) {
		return a._function.accidental;
	};
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return _Utils_eq(
				accidental(a).dragState,
				$author$project$MusicCreatorDef$Dragging) ? _Utils_Tuple2(
				name,
				A4(
					$author$project$MusicCreatorDef$SelectAccidental,
					accidental(a).pos,
					accidental(a).pos,
					$author$project$MusicCreatorDef$Dragging,
					accidental(a).f)) : _Utils_Tuple2(
				name,
				A4(
					$author$project$MusicCreatorDef$SelectAccidental,
					a.pos,
					a.pos,
					$author$project$MusicCreatorDef$Released,
					accidental(a).f));
		},
		list);
};
var $author$project$MusicCreatorFunctions$createarticulationList = function (list) {
	var articulation = function (a) {
		return a._function.articulation;
	};
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return _Utils_eq(
				articulation(a).dragState,
				$author$project$MusicCreatorDef$Dragging) ? _Utils_Tuple2(
				name,
				A4(
					$author$project$MusicCreatorDef$SelectArticulation,
					articulation(a).pos,
					articulation(a).pos,
					$author$project$MusicCreatorDef$Dragging,
					articulation(a).f)) : _Utils_Tuple2(
				name,
				A4(
					$author$project$MusicCreatorDef$SelectArticulation,
					a.pos,
					a.pos,
					$author$project$MusicCreatorDef$Released,
					articulation(a).f));
		},
		list);
};
var $author$project$MusicCreatorFunctions$createdynamicList = function (list) {
	var position = function (p) {
		return _Utils_Tuple2(p.a, -20);
	};
	var dynamic = function (a) {
		return a._function.dynamic;
	};
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return _Utils_eq(
				dynamic(a).dragState,
				$author$project$MusicCreatorDef$Dragging) ? _Utils_Tuple2(
				name,
				A4(
					$author$project$MusicCreatorDef$SelectDynamic,
					dynamic(a).pos,
					dynamic(a).pos,
					$author$project$MusicCreatorDef$Dragging,
					dynamic(a).f)) : _Utils_Tuple2(
				name,
				A4(
					$author$project$MusicCreatorDef$SelectDynamic,
					position(a.pos),
					position(a.pos),
					$author$project$MusicCreatorDef$Released,
					dynamic(a).f));
		},
		list);
};
var $author$project$MusicDef$Measure = function (a) {
	return {$: 'Measure', a: a};
};
var $author$project$MusicDef$Music = F3(
	function (a, b, c) {
		return {$: 'Music', a: a, b: b, c: c};
	});
var $author$project$MusicDef$BlankScreen = {$: 'BlankScreen'};
var $author$project$MusicDef$Note = F6(
	function (a, b, c, d, e, f) {
		return {$: 'Note', a: a, b: b, c: c, d: d, e: e, f: f};
	});
var $author$project$MusicCreatorToMusic$toMusicArticulation = F2(
	function (articulation, tie) {
		var _v0 = articulation.f;
		switch (_v0.$) {
			case 'Staccato':
				return 0.4;
			case 'Staccatissimo':
				return 0.20;
			case 'Fermata':
				return 4;
			case 'Tenuto':
				return 0.95;
			case 'Accent':
				return -1;
			case 'Slur':
				return 1;
			default:
				switch (tie.$) {
					case 'TieS':
						return 1;
					case 'TieE':
						return 1;
					default:
						return 0.85;
				}
		}
	});
var $author$project$MusicDef$BassClef = {$: 'BassClef'};
var $author$project$MusicDef$Do = {$: 'Do'};
var $author$project$MusicDef$Fa = {$: 'Fa'};
var $author$project$MusicDef$La = {$: 'La'};
var $author$project$MusicDef$Mi = {$: 'Mi'};
var $author$project$MusicDef$OctaveDown = function (a) {
	return {$: 'OctaveDown', a: a};
};
var $author$project$MusicDef$OctaveUp = function (a) {
	return {$: 'OctaveUp', a: a};
};
var $author$project$MusicDef$Re = {$: 'Re'};
var $author$project$MusicDef$Rest = {$: 'Rest'};
var $author$project$MusicDef$Sol = {$: 'Sol'};
var $author$project$MusicDef$Ti = {$: 'Ti'};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$MusicFunctions$lowerOctave = function (pitch) {
	switch (pitch.$) {
		case 'Rest':
			return $author$project$MusicDef$Rest;
		case 'OctaveUp':
			var p = pitch.a;
			return p;
		case 'OctaveDown':
			var p = pitch.a;
			return $author$project$MusicDef$OctaveDown(
				$author$project$MusicFunctions$lowerOctave(p));
		default:
			var p = pitch;
			return $author$project$MusicDef$OctaveDown(p);
	}
};
var $author$project$MusicDef$Flat = function (a) {
	return {$: 'Flat', a: a};
};
var $author$project$MusicFunctions$do = $author$project$MusicDef$Do;
var $author$project$MusicFunctions$fa = $author$project$MusicDef$Fa;
var $author$project$MusicFunctions$la = $author$project$MusicDef$La;
var $author$project$MusicFunctions$le = $author$project$MusicDef$Flat($author$project$MusicDef$La);
var $author$project$MusicFunctions$me = $author$project$MusicDef$Flat($author$project$MusicDef$Mi);
var $author$project$MusicFunctions$mi = $author$project$MusicDef$Mi;
var $author$project$MusicFunctions$ra = $author$project$MusicDef$Flat($author$project$MusicDef$Re);
var $author$project$MusicFunctions$re = $author$project$MusicDef$Re;
var $author$project$MusicFunctions$se = $author$project$MusicDef$Flat($author$project$MusicDef$Sol);
var $author$project$MusicFunctions$sol = $author$project$MusicDef$Sol;
var $author$project$MusicFunctions$te = $author$project$MusicDef$Flat($author$project$MusicDef$Ti);
var $author$project$MusicFunctions$ti = $author$project$MusicDef$Ti;
var $author$project$MusicFunctions$lowerPitch = function (pitch) {
	lowerPitch:
	while (true) {
		switch (pitch.$) {
			case 'Do':
				return $author$project$MusicDef$OctaveDown($author$project$MusicFunctions$ti);
			case 'Re':
				return $author$project$MusicFunctions$ra;
			case 'Mi':
				return $author$project$MusicFunctions$me;
			case 'Fa':
				return $author$project$MusicFunctions$mi;
			case 'Sol':
				return $author$project$MusicFunctions$se;
			case 'La':
				return $author$project$MusicFunctions$le;
			case 'Ti':
				return $author$project$MusicFunctions$te;
			case 'Rest':
				return $author$project$MusicDef$Rest;
			case 'OctaveUp':
				if (pitch.a.$ === 'Do') {
					var _v1 = pitch.a;
					return $author$project$MusicFunctions$ti;
				} else {
					var p = pitch.a;
					return $author$project$MusicDef$OctaveUp(
						$author$project$MusicFunctions$lowerPitch(p));
				}
			case 'OctaveDown':
				var p = pitch.a;
				return $author$project$MusicDef$OctaveDown(
					$author$project$MusicFunctions$lowerPitch(p));
			case 'Sharp':
				var p = pitch.a;
				return p;
			case 'Natural':
				var p = pitch.a;
				var $temp$pitch = p;
				pitch = $temp$pitch;
				continue lowerPitch;
			default:
				switch (pitch.a.$) {
					case 'Re':
						var _v2 = pitch.a;
						return $author$project$MusicFunctions$do;
					case 'Mi':
						var _v3 = pitch.a;
						return $author$project$MusicFunctions$re;
					case 'Sol':
						var _v4 = pitch.a;
						return $author$project$MusicFunctions$fa;
					case 'La':
						var _v5 = pitch.a;
						return $author$project$MusicFunctions$sol;
					case 'Ti':
						var _v6 = pitch.a;
						return $author$project$MusicFunctions$la;
					default:
						var p = pitch.a;
						return $author$project$MusicDef$Flat(
							$author$project$MusicFunctions$lowerPitch(p));
				}
		}
	}
};
var $author$project$MusicDef$Sharp = function (a) {
	return {$: 'Sharp', a: a};
};
var $author$project$MusicFunctions$di = $author$project$MusicDef$Sharp($author$project$MusicDef$Do);
var $author$project$MusicFunctions$fi = $author$project$MusicDef$Sharp($author$project$MusicDef$Fa);
var $author$project$MusicFunctions$li = $author$project$MusicDef$Sharp($author$project$MusicDef$La);
var $author$project$MusicFunctions$ri = $author$project$MusicDef$Sharp($author$project$MusicDef$Re);
var $author$project$MusicFunctions$si = $author$project$MusicDef$Sharp($author$project$MusicDef$Sol);
var $author$project$MusicFunctions$raisePitch = function (pitch) {
	raisePitch:
	while (true) {
		switch (pitch.$) {
			case 'Do':
				return $author$project$MusicFunctions$di;
			case 'Re':
				return $author$project$MusicFunctions$ri;
			case 'Mi':
				return $author$project$MusicFunctions$fa;
			case 'Fa':
				return $author$project$MusicFunctions$fi;
			case 'Sol':
				return $author$project$MusicFunctions$si;
			case 'La':
				return $author$project$MusicFunctions$li;
			case 'Ti':
				return $author$project$MusicDef$OctaveUp($author$project$MusicFunctions$do);
			case 'Rest':
				return $author$project$MusicDef$Rest;
			case 'OctaveUp':
				var p = pitch.a;
				return $author$project$MusicDef$OctaveUp(
					$author$project$MusicFunctions$raisePitch(p));
			case 'OctaveDown':
				if (pitch.a.$ === 'Ti') {
					var _v6 = pitch.a;
					return $author$project$MusicFunctions$do;
				} else {
					var p = pitch.a;
					return $author$project$MusicDef$OctaveDown(
						$author$project$MusicFunctions$raisePitch(p));
				}
			case 'Sharp':
				switch (pitch.a.$) {
					case 'Do':
						var _v1 = pitch.a;
						return $author$project$MusicFunctions$re;
					case 'Re':
						var _v2 = pitch.a;
						return $author$project$MusicFunctions$mi;
					case 'Fa':
						var _v3 = pitch.a;
						return $author$project$MusicFunctions$sol;
					case 'Sol':
						var _v4 = pitch.a;
						return $author$project$MusicFunctions$la;
					case 'La':
						var _v5 = pitch.a;
						return $author$project$MusicFunctions$ti;
					default:
						var p = pitch.a;
						return $author$project$MusicDef$Sharp(
							$author$project$MusicFunctions$raisePitch(p));
				}
			case 'Natural':
				var p = pitch.a;
				var $temp$pitch = p;
				pitch = $temp$pitch;
				continue raisePitch;
			default:
				var p = pitch.a;
				return p;
		}
	}
};
var $author$project$MusicFunctions$raisePitchIgnoreAccidential = function (pitch) {
	switch (pitch.$) {
		case 'Do':
			return $author$project$MusicDef$Re;
		case 'Re':
			return $author$project$MusicDef$Mi;
		case 'Mi':
			return $author$project$MusicDef$Fa;
		case 'Fa':
			return $author$project$MusicDef$Sol;
		case 'Sol':
			return $author$project$MusicDef$La;
		case 'La':
			return $author$project$MusicDef$Ti;
		case 'Ti':
			return $author$project$MusicDef$OctaveUp($author$project$MusicDef$Do);
		case 'Rest':
			return $author$project$MusicDef$Rest;
		case 'OctaveUp':
			var p = pitch.a;
			return $author$project$MusicDef$OctaveUp(
				$author$project$MusicFunctions$raisePitchIgnoreAccidential(p));
		case 'OctaveDown':
			if (pitch.a.$ === 'Ti') {
				var _v1 = pitch.a;
				return $author$project$MusicDef$Do;
			} else {
				var p = pitch.a;
				return $author$project$MusicDef$OctaveDown(
					$author$project$MusicFunctions$raisePitchIgnoreAccidential(p));
			}
		default:
			var p = pitch;
			return p;
	}
};
var $author$project$MusicCreatorFunctions$toMusicPitch = F3(
	function (_v0, note, clef) {
		var _v1 = _v0.a;
		var x = _v1.a;
		var y = _v1.b;
		var accidental = _v0.b;
		var p = function (cycle) {
			return $elm$core$Basics$round((((y + 21) - (24.5 * cycle)) - $author$project$MusicCreatorDef$moveYscore) / 3.5);
		};
		var pick = function (cycle) {
			if (p(cycle) >= 0) {
				var _v2 = p(cycle);
				switch (_v2) {
					case 0:
						return $author$project$MusicDef$Do;
					case 1:
						return $author$project$MusicDef$Re;
					case 2:
						return $author$project$MusicDef$Mi;
					case 3:
						return $author$project$MusicDef$Fa;
					case 4:
						return $author$project$MusicDef$Sol;
					case 5:
						return $author$project$MusicDef$La;
					case 6:
						return $author$project$MusicDef$Ti;
					default:
						return $author$project$MusicDef$OctaveUp(
							pick(cycle + 1));
				}
			} else {
				var _v3 = $elm$core$Basics$abs(
					p(cycle));
				switch (_v3) {
					case 1:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$Ti);
					case 2:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$La);
					case 3:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$Sol);
					case 4:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$Fa);
					case 5:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$Mi);
					case 6:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$Re);
					case 7:
						return $author$project$MusicDef$OctaveDown($author$project$MusicDef$Do);
					default:
						return $author$project$MusicDef$Rest;
				}
			}
		};
		var newPitch = $author$project$MusicCreatorDef$ifRest(note) ? $author$project$MusicDef$Rest : (_Utils_eq(clef, $author$project$MusicDef$BassClef) ? $author$project$MusicFunctions$raisePitchIgnoreAccidential(
			$author$project$MusicFunctions$raisePitchIgnoreAccidential(
				$author$project$MusicFunctions$lowerOctave(
					$author$project$MusicFunctions$lowerOctave(
						pick(0))))) : pick(0));
		if ($author$project$MusicCreatorDef$ifRest(note)) {
			return $author$project$MusicDef$Rest;
		} else {
			switch (accidental.$) {
				case 'Sharp':
					return $author$project$MusicFunctions$raisePitch(newPitch);
				case 'Flat':
					return $author$project$MusicFunctions$lowerPitch(newPitch);
				case 'Natural':
					return newPitch;
				default:
					return newPitch;
			}
		}
	});
var $author$project$MusicCreatorToMusic$toMusicVolume = F2(
	function (dynamic, note) {
		var _v0 = dynamic.f;
		switch (_v0.$) {
			case 'PP':
				return 0.04;
			case 'P':
				return 0.1;
			case 'MP':
				return 0.4;
			case 'MF':
				return 0.6;
			case 'F':
				return 0.8;
			case 'FF':
				return 0.99;
			default:
				return $author$project$MusicCreatorDef$ifRest(note) ? (-1) : 0.55;
		}
	});
var $author$project$MusicCreatorToMusic$creatorToMusicNote = F3(
	function (clef, note, noteWAcc) {
		return A6(
			$author$project$MusicDef$Note,
			$author$project$MusicCreatorFunctions$noteToFraction(note.note),
			A3($author$project$MusicCreatorFunctions$toMusicPitch, noteWAcc, note.note, clef),
			A2($author$project$MusicCreatorToMusic$toMusicVolume, note._function.dynamic, note.note),
			'',
			$author$project$MusicDef$BlankScreen,
			A2($author$project$MusicCreatorToMusic$toMusicArticulation, note._function.articulation, note._function.tie));
	});
var $author$project$MusicDef$FourFour = {$: 'FourFour'};
var $author$project$MusicDef$ThreeFour = {$: 'ThreeFour'};
var $author$project$MusicDef$TwoFour = {$: 'TwoFour'};
var $author$project$MusicCreatorToMusic$creatorToMusicTimeSigniture = function (ts) {
	switch (ts.$) {
		case 'Ts44':
			return $author$project$MusicDef$FourFour;
		case 'Ts34':
			return $author$project$MusicDef$ThreeFour;
		default:
			return $author$project$MusicDef$TwoFour;
	}
};
var $author$project$MusicCreatorFunctions$getNotePosLWithAccidential = function (list) {
	var getY = function (noteInfo) {
		return noteInfo.pos.b;
	};
	var updateAccidentalDict = F2(
		function (noteInfo, accidentialDic) {
			return _Utils_eq(noteInfo._function.accidental.f, $author$project$MusicCreatorDef$NoAccidental) ? accidentialDic : A3(
				$elm$core$Dict$insert,
				getY(noteInfo),
				noteInfo._function.accidental.f,
				accidentialDic);
		});
	var getAccidential = F2(
		function (noteInfo, accidentialDic) {
			return _Utils_eq(noteInfo._function.accidental.f, $author$project$MusicCreatorDef$NoAccidental) ? A2(
				$elm$core$Maybe$withDefault,
				$author$project$MusicCreatorDef$Natural,
				A2(
					$elm$core$Dict$get,
					getY(noteInfo),
					accidentialDic)) : noteInfo._function.accidental.f;
		});
	var newNote = F2(
		function (inputL, accidentialDic) {
			if (!inputL.b) {
				return _List_Nil;
			} else {
				var x = inputL.a;
				var xs = inputL.b;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						x.pos,
						A2(getAccidential, x, accidentialDic)),
					A2(
						newNote,
						xs,
						A2(updateAccidentalDict, x, accidentialDic)));
			}
		});
	return A2(newNote, list, $elm$core$Dict$empty);
};
var $author$project$MusicCreatorToMusic$creatorToMusic = F4(
	function (instrument, clef, ts, noteList) {
		return A3(
			$author$project$MusicDef$Music,
			instrument,
			$author$project$MusicCreatorToMusic$creatorToMusicTimeSigniture(ts),
			_List_fromArray(
				[
					_List_fromArray(
					[
						$author$project$MusicDef$Measure(
						A3(
							$elm$core$List$map2,
							F2(
								function (m1, m2) {
									return A3($author$project$MusicCreatorToMusic$creatorToMusicNote, clef, m1, m2);
								}),
							noteList,
							$author$project$MusicCreatorFunctions$getNotePosLWithAccidential(noteList)))
					])
				]));
	});
var $author$project$DragBarAssit$originalPosX = 95;
var $author$project$DragBarAssit$currentTemp = function (num) {
	return $author$project$DragBarAssit$lowestTemp + $elm$core$Basics$round((num - $author$project$DragBarAssit$originalPosX) / $author$project$DragBarAssit$ratio);
};
var $author$project$MusicCreator$extractDragState = F3(
	function (nameOfNote, dict, def) {
		return A2(
			$elm$core$Maybe$withDefault,
			def,
			A2($elm$core$Dict$get, nameOfNote, dict)).dragState;
	});
var $author$project$MusicCreatorFunctions$getNoteL = function (list) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return a;
		},
		list);
};
var $author$project$MusicCreator$getInvalidSlurList = function (noteList) {
	var verifyAccidential = F2(
		function (a, b) {
			return _Utils_eq(a.acc, b.acc) ? true : (((!_Utils_eq(a.acc, $author$project$MusicCreatorDef$NoAccidental)) && _Utils_eq(b.acc, $author$project$MusicCreatorDef$NoAccidental)) ? true : ((_Utils_eq(a.acc, $author$project$MusicCreatorDef$NoAccidental) && _Utils_eq(b.acc, $author$project$MusicCreatorDef$Natural)) ? true : false));
		});
	var newList = A3(
		$elm$core$List$map2,
		F2(
			function (_v5, _v6) {
				var name = _v5.a;
				var list1 = _v5.b;
				var pos = _v6.a;
				var list2 = _v6.b;
				return _Utils_Tuple2(
					name,
					{acc: list2, note: list1.note, pos: list1.pos});
			}),
		$author$project$MusicCreator$clearEmpty(noteList),
		$author$project$MusicCreatorFunctions$getNotePosLWithAccidential(
			$author$project$MusicCreatorFunctions$getNoteL(noteList)));
	var checkFistSlur = function (list) {
		checkFistSlur:
		while (true) {
			var getYPos = function (x) {
				return x.pos.b;
			};
			if (!list.b) {
				return _List_Nil;
			} else {
				if (!list.b.b) {
					var _v1 = list.a;
					var name = _v1.a;
					var x = _v1.b;
					return _List_fromArray(
						[name]);
				} else {
					var _v2 = list.a;
					var name1 = _v2.a;
					var x1 = _v2.b;
					var _v3 = list.b;
					var _v4 = _v3.a;
					var name2 = _v4.a;
					var x2 = _v4.b;
					var xs = _v3.b;
					if ($author$project$MusicCreatorDef$ifRest(x1.note)) {
						return A2(
							$elm$core$List$cons,
							name1,
							checkFistSlur(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name2, x2),
									xs)));
					} else {
						if (_Utils_eq(
							getYPos(x1),
							getYPos(x2)) && A2(verifyAccidential, x1, x2)) {
							return A2(
								$elm$core$List$cons,
								name1,
								checkFistSlur(
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(name2, x2),
										xs)));
						} else {
							var $temp$list = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name2, x2),
								xs);
							list = $temp$list;
							continue checkFistSlur;
						}
					}
				}
			}
		}
	};
	return checkFistSlur(newList);
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $author$project$InputKeyAssist$posKey = _List_fromArray(
	[
		$elm$core$String$fromChar(
		$elm$core$Char$fromCode(188)),
		$elm$core$String$fromChar(
		$elm$core$Char$fromCode(189)),
		$elm$core$String$fromChar(
		$elm$core$Char$fromCode(190)),
		$elm$core$String$fromChar(
		$elm$core$Char$fromCode(191)),
		$elm$core$String$fromChar(
		$elm$core$Char$fromCode(49)),
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	]);
var $author$project$InputKeyAssist$getKey = function (keys) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (a, d) {
				var _v0 = keys(
					$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Key(a));
				if (_v0.$ === 'JustDown') {
					return _Utils_eq(
						a,
						$elm$core$String$fromChar(
							$elm$core$Char$fromCode(189))) ? '\u2013' : (_Utils_eq(
						a,
						$elm$core$String$fromChar(
							$elm$core$Char$fromCode(188))) ? '\u002C' : (_Utils_eq(
						a,
						$elm$core$String$fromChar(
							$elm$core$Char$fromCode(190))) ? '\u002E' : (_Utils_eq(
						a,
						$elm$core$String$fromChar(
							$elm$core$Char$fromCode(191))) ? '\u003F' : (_Utils_eq(
						a,
						$elm$core$String$fromChar(
							$elm$core$Char$fromCode(49))) ? '\u0021' : a))));
				} else {
					return d;
				}
			}),
		'',
		$author$project$InputKeyAssist$posKey);
};
var $author$project$MusicCreator$ifSelectedNoteClosetoTrash = F2(
	function (model, _v0) {
		var newx = _v0.a;
		var newy = _v0.b;
		var y = newy;
		var x = newx;
		var ty = model.trashPos.b;
		var tx = model.trashPos.a;
		var disTtoN = $elm$core$Basics$sqrt(
			A2($elm$core$Basics$pow, x - tx, 2) + A2($elm$core$Basics$pow, y - ty, 2));
		return (_Utils_cmp(disTtoN, model.trashSize) < 1) ? $author$project$MusicCreator$Open : $author$project$MusicCreator$Close;
	});
var $author$project$InputKeyAssist$insertWord = F3(
	function (list, word, limit) {
		if (_Utils_eq(
			$elm$core$List$length(list),
			limit + 1)) {
			return list;
		} else {
			if (list.b) {
				var x = list.a;
				var xs = list.b;
				return x.selected ? A2(
					$elm$core$List$cons,
					{name: x.name, selected: false, word: x.word},
					A2(
						$elm$core$List$cons,
						{name: 'Needabttername', selected: true, word: word},
						xs)) : A2(
					$elm$core$List$cons,
					x,
					A3($author$project$InputKeyAssist$insertWord, xs, word, limit));
			} else {
				return _List_Nil;
			}
		}
	});
var $author$project$InputKeyAssist$updateName = function (list) {
	return A3(
		$elm$core$List$map2,
		F2(
			function (a, b) {
				return (a.name === 'head') ? a : {
					name: $elm$core$Debug$toString(b),
					selected: a.selected,
					word: a.word
				};
			}),
		list,
		A2(
			$elm$core$List$range,
			0,
			$elm$core$List$length(list)));
};
var $author$project$MusicCreator$insertWord = F2(
	function (list, key) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var a = _v0.b;
				var _function = a._function;
				var new_function = _Utils_update(
					_function,
					{
						lyric: $author$project$InputKeyAssist$updateName(
							A3($author$project$InputKeyAssist$insertWord, a._function.lyric, key, 5))
					});
				return _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_function}));
			},
			list);
	});
var $author$project$MusicCreator$instrumentClef = function (instrument) {
	switch (instrument.$) {
		case 'Bass':
			return $author$project$MusicDef$BassClef;
		case 'Cello':
			return $author$project$MusicDef$BassClef;
		case 'Tuba':
			return $author$project$MusicDef$BassClef;
		case 'Timpani':
			return $author$project$MusicDef$BassClef;
		default:
			return $author$project$MusicDef$TrebleClef;
	}
};
var $author$project$MusicCreator$instrumentRange = function (instrument) {
	switch (instrument.$) {
		case 'Piano':
			return _Utils_Tuple2(36, -36);
		case 'Recorder':
			return _Utils_Tuple2(36, -22);
		case 'Flute':
			return _Utils_Tuple2(36, -22);
		case 'Violin':
			return _Utils_Tuple2(36, (-36) + 3.5);
		case 'Trumpet':
			return _Utils_Tuple2(36 - 3.5, (-36) + 3.5);
		case 'Sitar':
			return _Utils_Tuple2(15, -36);
		case 'ElectricGuitar':
			return _Utils_Tuple2(36, -36);
		case 'Marimba':
			return _Utils_Tuple2(36, -36);
		case 'Bass':
			return _Utils_Tuple2(36, -32.5);
		case 'Cello':
			return _Utils_Tuple2(36, -32.5);
		case 'Tuba':
			return _Utils_Tuple2(36, -32.5);
		default:
			return _Utils_Tuple2(22, -32.5);
	}
};
var $author$project$MusicCreatorFunctions$mergeTwoNote = F2(
	function (_v0, _v1) {
		var name1 = _v0.a;
		var note1 = _v0.b;
		var name2 = _v1.a;
		var note2 = _v1.b;
		var restore = function (f) {
			return A5($author$project$MusicCreatorDef$Functions, f.dynamic, f.lyric, f.articulation, f.accidental, $author$project$MusicCreatorDef$NoTie);
		};
		var frac = $author$project$MusicCreatorFunctions$noteToFraction(note1.note) + $author$project$MusicCreatorFunctions$noteToFraction(note2.note);
		var newNote = A2(
			$elm$core$Maybe$withDefault,
			note1.note,
			$elm$core$List$head(
				A2($author$project$MusicCreatorFunctions$fractionToNote, frac, note1.note)));
		return _Utils_Tuple2(
			'newNote',
			A5(
				$author$project$MusicCreatorDef$SelectNote,
				note1.pos,
				note1.pos,
				$author$project$MusicCreatorDef$Released,
				newNote,
				restore(note1._function)));
	});
var $author$project$MusicCreatorFunctions$mergeTie = function (list) {
	if (!list.b) {
		return _List_Nil;
	} else {
		if (!list.b.b) {
			var x = list.a;
			return _List_fromArray(
				[x]);
		} else {
			var _v1 = list.a;
			var name1 = _v1.a;
			var x1 = _v1.b;
			var _v2 = list.b;
			var _v3 = _v2.a;
			var name2 = _v3.a;
			var x2 = _v3.b;
			var xs = _v2.b;
			return _Utils_eq(x1._function.tie, $author$project$MusicCreatorDef$TieS) ? ((!_Utils_eq(x1._function.dynamic.f, x2._function.dynamic.f)) ? A2(
				$elm$core$List$cons,
				_Utils_Tuple2(name1, x1),
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(name2, x2),
					$author$project$MusicCreatorFunctions$mergeTie(xs))) : A2(
				$elm$core$List$cons,
				A2(
					$author$project$MusicCreatorFunctions$mergeTwoNote,
					_Utils_Tuple2(name1, x1),
					_Utils_Tuple2(name2, x2)),
				$author$project$MusicCreatorFunctions$mergeTie(xs))) : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(name1, x1),
				$author$project$MusicCreatorFunctions$mergeTie(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name2, x2),
						xs)));
		}
	}
};
var $author$project$MusicDef$Bass = {$: 'Bass'};
var $author$project$MusicDef$Cello = {$: 'Cello'};
var $author$project$MusicDef$ElectricGuitar = {$: 'ElectricGuitar'};
var $author$project$MusicDef$Flute = {$: 'Flute'};
var $author$project$MusicDef$Marimba = {$: 'Marimba'};
var $author$project$MusicDef$Recorder = {$: 'Recorder'};
var $author$project$MusicDef$Sitar = {$: 'Sitar'};
var $author$project$MusicDef$Timpani = {$: 'Timpani'};
var $author$project$MusicDef$Trumpet = {$: 'Trumpet'};
var $author$project$MusicDef$Tuba = {$: 'Tuba'};
var $author$project$MusicDef$Violin = {$: 'Violin'};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$MusicCreator$instrumentIndexList = A2(
	$elm$core$List$indexedMap,
	$elm$core$Tuple$pair,
	_List_fromArray(
		[$author$project$MusicDef$Piano, $author$project$MusicDef$Flute, $author$project$MusicDef$Violin, $author$project$MusicDef$Trumpet, $author$project$MusicDef$Sitar, $author$project$MusicDef$ElectricGuitar, $author$project$MusicDef$Recorder, $author$project$MusicDef$Marimba, $author$project$MusicDef$Bass, $author$project$MusicDef$Cello, $author$project$MusicDef$Tuba, $author$project$MusicDef$Timpani]));
var $author$project$MusicCreator$newInstrument = F2(
	function (instrument, idx) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, def) {
					var id = _v0.a;
					var a = _v0.b;
					return _Utils_eq(
						id,
						A2($elm$core$Basics$modBy, 12, idx)) ? a : def;
				}),
			$author$project$MusicDef$Piano,
			$author$project$MusicCreator$instrumentIndexList);
	});
var $author$project$MusicCreatorDef$Ts24 = {$: 'Ts24'};
var $author$project$MusicCreatorDef$Ts34 = {$: 'Ts34'};
var $author$project$MusicCreator$timeSignatureIndexList = A2(
	$elm$core$List$indexedMap,
	$elm$core$Tuple$pair,
	_List_fromArray(
		[$author$project$MusicCreatorDef$Ts44, $author$project$MusicCreatorDef$Ts24, $author$project$MusicCreatorDef$Ts34]));
var $author$project$MusicCreator$newTimeSigniture = F2(
	function (choose, mode) {
		var currentId = A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, def) {
					var id = _v1.a;
					var a = _v1.b;
					return _Utils_eq(a, choose) ? id : def;
				}),
			0,
			$author$project$MusicCreator$timeSignatureIndexList);
		var newId = (mode === 1) ? A2(
			$elm$core$Basics$modBy,
			$elm$core$List$length($author$project$MusicCreator$timeSignatureIndexList),
			currentId + 1) : (((currentId - 1) < 0) ? ($elm$core$List$length($author$project$MusicCreator$timeSignatureIndexList) - 1) : (currentId - 1));
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, def) {
					var id = _v0.a;
					var a = _v0.b;
					return _Utils_eq(id, newId) ? a : def;
				}),
			$author$project$MusicCreatorDef$Ts44,
			$author$project$MusicCreator$timeSignatureIndexList);
	});
var $author$project$DragBarAssit$nextTemp = function (num) {
	return $author$project$DragBarAssit$lowestTemp + ((num - $author$project$DragBarAssit$originalPosX) / $author$project$DragBarAssit$ratio);
};
var $author$project$PlayBack$adjustPitch = function (instrument) {
	switch (instrument.$) {
		case 'ElectricGuitar':
			return -12;
		case 'Flute':
			return 12;
		case 'Bass':
			return -12;
		case 'Tuba':
			return -24;
		default:
			return 0;
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$PlayBack$encode = F2(
	function (instrument, event) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'time',
					$elm$json$Json$Encode$float(event.time)),
					_Utils_Tuple2(
					'pitch',
					$elm$json$Json$Encode$int(
						event.pitch + $author$project$PlayBack$adjustPitch(instrument))),
					_Utils_Tuple2(
					'duration',
					$elm$json$Json$Encode$float(event.duration)),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(event.volume)),
					_Utils_Tuple2(
					'lyric',
					$elm$json$Json$Encode$string(event.lyric)),
					_Utils_Tuple2(
					'adjDuration',
					$elm$json$Json$Encode$float(event.adjDuration))
				]));
	});
var $author$project$PlayBack$getMusicIntstrument = function (_v0) {
	var instrument = _v0.a;
	return instrument;
};
var $author$project$PlayBack$instrumentToMIDINumber = function (instrument) {
	switch (instrument.$) {
		case 'Piano':
			return 11;
		case 'Recorder':
			return 781;
		case 'Flute':
			return 774;
		case 'Bass':
			return 369;
		case 'Violin':
			return 449;
		case 'Trumpet':
			return 617;
		case 'Sitar':
			return 1124;
		case 'ElectricGuitar':
			return 278;
		case 'Marimba':
			return 126;
		case 'Cello':
			return 468;
		case 'Tuba':
			return 632;
		default:
			return 508;
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $author$project$PlayBack$merge = F3(
	function (compare, list1, list2) {
		var _v0 = _Utils_Tuple2(list1, list2);
		if (!_v0.a.b) {
			var ys = _v0.b;
			return ys;
		} else {
			if (!_v0.b.b) {
				var xs = _v0.a;
				return xs;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return (_Utils_cmp(
					compare(x),
					compare(y)) < 0) ? A2(
					$elm$core$List$cons,
					x,
					A3(
						$author$project$PlayBack$merge,
						compare,
						xs,
						A2($elm$core$List$cons, y, ys))) : A2(
					$elm$core$List$cons,
					y,
					A3(
						$author$project$PlayBack$merge,
						compare,
						ys,
						A2($elm$core$List$cons, x, xs)));
			}
		}
	});
var $author$project$MusicDef$MusicEvent = F6(
	function (time, pitch, duration, volume, lyric, adjDuration) {
		return {adjDuration: adjDuration, duration: duration, lyric: lyric, pitch: pitch, time: time, volume: volume};
	});
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $author$project$PlayBack$getNoteRecord = function (_v0) {
	var duration = _v0.a;
	var pitch = _v0.b;
	var volume = _v0.c;
	var lyric = _v0.d;
	var video = _v0.e;
	var articulation = _v0.f;
	return {articulation: articulation, duration: duration, lyric: lyric, pitch: pitch, video: video, volume: volume};
};
var $author$project$PlayBack$pitchToMIDINumber = function (pitch) {
	pitchToMIDINumber:
	while (true) {
		switch (pitch.$) {
			case 'Do':
				return 60;
			case 'Re':
				return 62;
			case 'Mi':
				return 64;
			case 'Fa':
				return 65;
			case 'Sol':
				return 67;
			case 'La':
				return 69;
			case 'Ti':
				return 71;
			case 'Rest':
				return 60;
			case 'OctaveUp':
				var lowerPitch = pitch.a;
				return $author$project$PlayBack$pitchToMIDINumber(lowerPitch) + 12;
			case 'OctaveDown':
				var higherPitch = pitch.a;
				return $author$project$PlayBack$pitchToMIDINumber(higherPitch) - 12;
			case 'Sharp':
				var p = pitch.a;
				return $author$project$PlayBack$pitchToMIDINumber(p) + 1;
			case 'Natural':
				var p = pitch.a;
				var $temp$pitch = p;
				pitch = $temp$pitch;
				continue pitchToMIDINumber;
			default:
				var p = pitch.a;
				return $author$project$PlayBack$pitchToMIDINumber(p) - 1;
		}
	}
};
var $author$project$MusicDef$standardVolume = 0.55;
var $author$project$PlayBack$seqNotesToMEvents = F4(
	function (currentTime, tempo, notes, previousVolume) {
		var metro = 60 / (tempo.bpm * 0.25);
		if (!notes.b) {
			return _List_Nil;
		} else {
			var x = notes.a;
			var xs = notes.b;
			var noteRecord = $author$project$PlayBack$getNoteRecord(x);
			var newArticulation = A3($elm$core$Basics$clamp, -2, 1.0, noteRecord.articulation);
			var ifHold = (noteRecord.articulation > 1) ? noteRecord.articulation : 1;
			var clampedVolume = (!_Utils_eq(noteRecord.volume, $author$project$MusicDef$standardVolume)) ? A3($elm$core$Basics$clamp, -1.0, 1, noteRecord.volume) : A3($elm$core$Basics$clamp, -1.0, 1, previousVolume);
			var nextVolume = _Utils_eq(clampedVolume, -1) ? previousVolume : clampedVolume;
			return A2(
				$elm$core$List$cons,
				A6(
					$author$project$MusicDef$MusicEvent,
					currentTime,
					$author$project$PlayBack$pitchToMIDINumber(noteRecord.pitch),
					(noteRecord.duration * ifHold) * metro,
					clampedVolume,
					noteRecord.lyric,
					newArticulation),
				A4($author$project$PlayBack$seqNotesToMEvents, currentTime + ((noteRecord.duration * ifHold) * metro), tempo, xs, nextVolume));
		}
	});
var $author$project$PlayBack$musicToMEvents = F3(
	function (currentTime, tempo, _v0) {
		var instrument = _v0.a;
		var timeSig = _v0.b;
		var listOfListOfMeasures = _v0.c;
		var measureListToMEvents = function (mList) {
			var notes = A3(
				$elm$core$List$foldr,
				F2(
					function (x, y) {
						return _Utils_ap(x, y);
					}),
				_List_Nil,
				A2(
					$elm$core$List$map,
					function (_v1) {
						var ntsList = _v1.a;
						return ntsList;
					},
					mList));
			return A4($author$project$PlayBack$seqNotesToMEvents, currentTime, tempo, notes, $author$project$MusicDef$standardVolume);
		};
		var mEventsList = A3(
			$elm$core$List$foldl,
			$author$project$PlayBack$merge(
				function ($) {
					return $.time;
				}),
			_List_Nil,
			A2($elm$core$List$map, measureListToMEvents, listOfListOfMeasures));
		return mEventsList;
	});
var $author$project$PlayBack$perform = F2(
	function (tempo, music) {
		var instrument = $author$project$PlayBack$getMusicIntstrument(music);
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'instrument',
					$elm$json$Json$Encode$int(
						$author$project$PlayBack$instrumentToMIDINumber(instrument))),
					_Utils_Tuple2(
					'events',
					A2(
						$elm$json$Json$Encode$list,
						$author$project$PlayBack$encode(instrument),
						A3($author$project$PlayBack$musicToMEvents, 0, tempo, music)))
				]));
	});
var $author$project$PlayBack$play = _Platform_outgoingPort('play', $elm$core$Basics$identity);
var $author$project$MusicCreator$releasedtoDragSlur = F2(
	function (_v0, list) {
		var x = _v0.a;
		var y = _v0.b;
		var compareXpos = A2(
			$elm$core$List$map,
			function (_v7) {
				var name = _v7.a;
				var note = _v7.b;
				return (_Utils_cmp(note.pos.a, x) > 0) ? _Utils_Tuple2(name, 9999) : _Utils_Tuple2(name, x - note.pos.a);
			},
			list);
		var getName = A3(
			$elm$core$List$foldl,
			F2(
				function (_v5, _v6) {
					var name = _v5.a;
					var pos = _v5.b;
					var defName = _v6.a;
					var defPos = _v6.b;
					return (_Utils_cmp(pos, defPos) < 0) ? _Utils_Tuple2(name, pos) : _Utils_Tuple2(defName, defPos);
				}),
			_Utils_Tuple2('nothing', 9999),
			compareXpos);
		var newList = function (sublist) {
			var updateNote = function (note) {
				var _function = note._function;
				var newFunction = _Utils_update(
					_function,
					{
						articulation: A4(
							$author$project$MusicCreatorDef$SelectArticulation,
							_Utils_Tuple2(x, y),
							_Utils_Tuple2(x, y),
							$author$project$MusicCreatorDef$Dragging,
							$author$project$MusicCreatorDef$Slur)
					});
				return _Utils_update(
					note,
					{_function: newFunction});
			};
			var targetName = getName.a;
			if (!sublist.b) {
				return _List_Nil;
			} else {
				if (!sublist.b.b) {
					var k = sublist.a;
					return _List_fromArray(
						[k]);
				} else {
					var _v2 = sublist.a;
					var name1 = _v2.a;
					var k1 = _v2.b;
					var _v3 = sublist.b;
					var _v4 = _v3.a;
					var name2 = _v4.a;
					var k2 = _v4.b;
					var ks = _v3.b;
					return _Utils_eq(targetName, name1) ? A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							name1,
							updateNote(k1)),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(name2, k2),
							ks)) : ((_Utils_eq(targetName, name2) && (!_Utils_eq(k2._function.articulation.f, $author$project$MusicCreatorDef$Slur))) ? A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							name1,
							updateNote(k1)),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(name2, k2),
							ks)) : A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name1, k1),
						newList(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name2, k2),
								ks))));
				}
			}
		};
		return newList(list);
	});
var $author$project$InputKeyAssist$switchSelectWord = F3(
	function (list, arrow, ifSwitch) {
		var switchR = function (list1) {
			if (!list1.b) {
				return _List_Nil;
			} else {
				if (!list1.b.b) {
					var x = list1.a;
					return A2($elm$core$List$cons, x, _List_Nil);
				} else {
					var x = list1.a;
					var _v1 = list1.b;
					var x1 = _v1.a;
					var xs = _v1.b;
					return x.selected ? A2(
						$elm$core$List$cons,
						{name: x.name, selected: false, word: x.word},
						A2(
							$elm$core$List$cons,
							{name: x1.name, selected: true, word: x1.word},
							xs)) : A2(
						$elm$core$List$cons,
						x,
						switchR(
							A2($elm$core$List$cons, x1, xs)));
				}
			}
		};
		var switchL = function (list1) {
			if (!list1.b) {
				return _List_Nil;
			} else {
				if (!list1.b.b) {
					var x = list1.a;
					return A2($elm$core$List$cons, x, _List_Nil);
				} else {
					var x = list1.a;
					var _v3 = list1.b;
					var x1 = _v3.a;
					var xs = _v3.b;
					return x1.selected ? A2(
						$elm$core$List$cons,
						{name: x.name, selected: true, word: x.word},
						A2(
							$elm$core$List$cons,
							{name: x1.name, selected: false, word: x1.word},
							xs)) : A2(
						$elm$core$List$cons,
						x,
						switchL(
							A2($elm$core$List$cons, x1, xs)));
				}
			}
		};
		var _switch = ifSwitch ? (_Utils_eq(
			arrow,
			_Utils_Tuple2(1, 0)) ? switchR(list) : (_Utils_eq(
			arrow,
			_Utils_Tuple2(-1, 0)) ? switchL(list) : list)) : list;
		return _switch;
	});
var $author$project$MusicCreator$switchWord = F3(
	function (list, arrow, ifswitch) {
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var a = _v0.b;
				var _function = a._function;
				var new_function = _Utils_update(
					_function,
					{
						lyric: $author$project$InputKeyAssist$updateName(
							A3($author$project$InputKeyAssist$switchSelectWord, a._function.lyric, arrow, ifswitch))
					});
				return _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_function}));
			},
			list);
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$MusicCreator$Large = {$: 'Large'};
var $author$project$MusicCreator$updateCV = function (x) {
	if (x.$ === 'Reg') {
		return $author$project$MusicCreator$Large;
	} else {
		return $author$project$MusicCreator$Reg;
	}
};
var $author$project$MusicCreator$updateLyricSelected = F3(
	function (list, lyricName, noteName) {
		var updateLyric = function (lyricList) {
			return A2(
				$elm$core$List$map,
				function (a) {
					return _Utils_eq(a.name, lyricName) ? {name: a.name, selected: true, word: a.word} : {name: a.name, selected: false, word: a.word};
				},
				lyricList);
		};
		var clearLyric = function (lyricList) {
			return A2(
				$elm$core$List$map,
				function (a) {
					return {name: a.name, selected: false, word: a.word};
				},
				lyricList);
		};
		return A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var a = _v0.b;
				var _function = a._function;
				var new_clearLyric = _Utils_update(
					_function,
					{
						lyric: clearLyric(a._function.lyric)
					});
				var new_lyric = _Utils_update(
					_function,
					{
						lyric: updateLyric(a._function.lyric)
					});
				return _Utils_eq(name, noteName) ? _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_lyric})) : _Utils_Tuple2(
					name,
					_Utils_update(
						a,
						{_function: new_clearLyric}));
			},
			list);
	});
var $author$project$MusicCreator$Big = {$: 'Big'};
var $author$project$MusicCreator$updateRectView = function (x) {
	if (x.$ === 'Small') {
		return $author$project$MusicCreator$Big;
	} else {
		return $author$project$MusicCreator$Small;
	}
};
var $author$project$MusicCreator$whileDragScoreUpdateAccidental = F3(
	function (nameOfNote, model, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var updateAccidental = function (a) {
			return A5(
				$author$project$MusicCreatorDef$Functions,
				a._function.dynamic,
				a._function.lyric,
				a._function.articulation,
				A4(
					$author$project$MusicCreatorDef$SelectAccidental,
					_Utils_Tuple2(x, y),
					_Utils_Tuple2(0, 0),
					$author$project$MusicCreatorDef$Dragging,
					a._function.accidental.f),
				a._function.tie);
		};
		var newList = A2(
			$elm$core$List$map,
			function (_v1) {
				var name = _v1.a;
				var a = _v1.b;
				if (_Utils_eq(name, nameOfNote)) {
					var _v2 = a._function.accidental.dragState;
					if (_v2.$ === 'Dragging') {
						return _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateAccidental(a)
								}));
					} else {
						return _Utils_Tuple2(name, a);
					}
				} else {
					return _Utils_Tuple2(name, a);
				}
			},
			model.scoreNoteList);
		return newList;
	});
var $author$project$MusicCreator$whileDragScoreUpdateArticulation = F3(
	function (nameOfNote, model, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var updateArticulation = function (a) {
			return A5(
				$author$project$MusicCreatorDef$Functions,
				a._function.dynamic,
				a._function.lyric,
				A4(
					$author$project$MusicCreatorDef$SelectArticulation,
					_Utils_Tuple2(x, y),
					_Utils_Tuple2(0, 0),
					$author$project$MusicCreatorDef$Dragging,
					a._function.articulation.f),
				a._function.accidental,
				a._function.tie);
		};
		var newList = A2(
			$elm$core$List$map,
			function (_v1) {
				var name = _v1.a;
				var a = _v1.b;
				if (_Utils_eq(name, nameOfNote)) {
					var _v2 = a._function.articulation.dragState;
					if (_v2.$ === 'Dragging') {
						return _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateArticulation(a)
								}));
					} else {
						return _Utils_Tuple2(name, a);
					}
				} else {
					return _Utils_Tuple2(name, a);
				}
			},
			model.scoreNoteList);
		return newList;
	});
var $author$project$MusicCreator$whileDragScoreUpdateDynamic = F3(
	function (nameOfNote, model, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var updateDynamic = function (a) {
			return A5(
				$author$project$MusicCreatorDef$Functions,
				A4(
					$author$project$MusicCreatorDef$SelectDynamic,
					_Utils_Tuple2(x, y),
					_Utils_Tuple2(0, 0),
					$author$project$MusicCreatorDef$Dragging,
					a._function.dynamic.f),
				a._function.lyric,
				a._function.articulation,
				a._function.accidental,
				a._function.tie);
		};
		var newList = A2(
			$elm$core$List$map,
			function (_v1) {
				var name = _v1.a;
				var a = _v1.b;
				if (_Utils_eq(name, nameOfNote)) {
					var _v2 = a._function.dynamic.dragState;
					if (_v2.$ === 'Dragging') {
						return _Utils_Tuple2(
							name,
							_Utils_update(
								a,
								{
									_function: updateDynamic(a)
								}));
					} else {
						return _Utils_Tuple2(name, a);
					}
				} else {
					return _Utils_Tuple2(name, a);
				}
			},
			model.scoreNoteList);
		return newList;
	});
var $author$project$MusicCreator$whileDrageScoreNoteUpdateScoreNote = F3(
	function (nameOfNote, model, _v0) {
		var newx = _v0.a;
		var newy = _v0.b;
		var y = newy;
		var x = newx;
		var restartScoreNote = function () {
			var filterEmpty = function (_v5) {
				var name = _v5.a;
				var b = _v5.b;
				return (_Utils_eq(b.note, $author$project$MusicCreatorDef$Empty) || _Utils_eq(name, nameOfNote)) ? _List_Nil : _List_fromArray(
					[
						_Utils_Tuple2(name, b)
					]);
			};
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			var filterList = function (list) {
				return $elm$core$List$concat(
					function (l) {
						return A2(
							$elm$core$List$append,
							l,
							_List_fromArray(
								[
									_List_fromArray(
									[
										_Utils_Tuple2('addOne', emptyLastnote)
									])
								]));
					}(
						A2(
							$elm$core$List$map,
							function (a) {
								return filterEmpty(a);
							},
							list)));
			};
			return filterList(model.scoreNoteList);
		}();
		var emptynote = $author$project$MusicCreatorDef$defselectNoteRec;
		var getDragedNote = A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, _default) {
					var name = _v4.a;
					var record = _v4.b;
					return _Utils_eq(name, nameOfNote) ? _Utils_Tuple2(name, record) : _default;
				}),
			_Utils_Tuple2('noOne', emptynote),
			model.scoreNoteList);
		var disList = function () {
			var distance = A3($author$project$MusicCreator$disFxyTab, x, y, restartScoreNote);
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, restartScoreNote, x, y, model.range) ? z : 99999;
				},
				distance);
			var minValue = A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
			return A2(
				$elm$core$List$map,
				function (z) {
					return _Utils_eq(z, minValue) ? 'makeSpace' : 'nothing';
				},
				distance);
		}();
		var newList = function () {
			var newNote = function (ds) {
				return A5(
					$author$project$MusicCreatorDef$SelectNote,
					_Utils_Tuple2(0, y),
					_Utils_Tuple2(0, y),
					$author$project$MusicCreatorDef$Released,
					ds,
					$author$project$MusicCreatorDef$defaultFunction);
			};
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return $elm$core$List$concat(
				A3(
					$elm$core$List$map2,
					F2(
						function (ds, _v1) {
							var fstns = _v1.a;
							var sndns = _v1.b;
							if (!_Utils_eq(sndns.note, $author$project$MusicCreatorDef$Empty)) {
								if (ds === 'makeSpace') {
									return _List_fromArray(
										[
											_Utils_Tuple2('makeSpace', emptyLastnote),
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							} else {
								if (ds === 'makeSpace') {
									return _List_fromArray(
										[
											_Utils_Tuple2('makeSpace', sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							}
						}),
					disList,
					restartScoreNote));
		}();
		var updateNewList = function () {
			var record = getDragedNote.b;
			var name = getDragedNote.a;
			return function (l) {
				return A2(
					$elm$core$List$append,
					l,
					_List_fromArray(
						[
							_Utils_Tuple2(
							name,
							A5(
								$author$project$MusicCreatorDef$SelectNote,
								_Utils_Tuple2(x, y),
								record.posInit,
								record.dragState,
								record.note,
								record._function))
						]));
			}(
				A2(
					$author$project$MusicCreator$updateScoreNoteYDict,
					A2($author$project$MusicCreator$updateScoreNoteXDict, model.sizeofNote, newList),
					model.range));
		}();
		return updateNewList;
	});
var $author$project$MusicCreator$whileDrageSeletedNoteUpdateScoreNote = F2(
	function (nameOfNote, model) {
		var y = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec).b;
		var x = A3($author$project$MusicCreator$extractPos, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec).a;
		var restartScoreNote = function () {
			var filterEmpty = function (_v3) {
				var name = _v3.a;
				var b = _v3.b;
				return _Utils_eq(b.note, $author$project$MusicCreatorDef$Empty) ? _List_Nil : _List_fromArray(
					[
						_Utils_Tuple2(name, b)
					]);
			};
			var filterList = function (list) {
				return $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						function (a) {
							return filterEmpty(a);
						},
						list));
			};
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return function (l) {
				return A2(
					$elm$core$List$append,
					l,
					_List_fromArray(
						[
							_Utils_Tuple2('addOne', emptyLastnote)
						]));
			}(
				filterList(model.scoreNoteList));
		}();
		var disList = function () {
			var distance = A3($author$project$MusicCreator$disFxyTab, x, y, restartScoreNote);
			var filter1 = A2(
				$elm$core$List$map,
				function (z) {
					return A4($author$project$MusicCreator$insertCondition30, restartScoreNote, x, y, model.range) ? z : 99999;
				},
				distance);
			var minValue = A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
			return A2(
				$elm$core$List$map,
				function (z) {
					return _Utils_eq(z, minValue) ? 'makeSpace' : 'nothing';
				},
				distance);
		}();
		var newList = function () {
			var newNote = function (ds) {
				return A5(
					$author$project$MusicCreatorDef$SelectNote,
					_Utils_Tuple2(0, y),
					_Utils_Tuple2(0, y),
					$author$project$MusicCreatorDef$Released,
					ds,
					$author$project$MusicCreatorDef$defaultFunction);
			};
			var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
			return $elm$core$List$concat(
				A3(
					$elm$core$List$map2,
					F2(
						function (ds, _v0) {
							var fstns = _v0.a;
							var sndns = _v0.b;
							if (!_Utils_eq(sndns.note, $author$project$MusicCreatorDef$Empty)) {
								if (ds === 'makeSpace') {
									return _List_fromArray(
										[
											_Utils_Tuple2('makeSpace', emptyLastnote),
											_Utils_Tuple2(fstns, sndns)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							} else {
								if (ds === 'makeSpace') {
									return _List_fromArray(
										[
											_Utils_Tuple2('makeSpace', emptyLastnote)
										]);
								} else {
									return _List_fromArray(
										[
											_Utils_Tuple2(fstns, sndns)
										]);
								}
							}
						}),
					disList,
					restartScoreNote));
		}();
		var updateNewList = A2(
			$author$project$MusicCreator$updateScoreNoteYDict,
			A2($author$project$MusicCreator$updateScoreNoteXDict, model.sizeofNote, newList),
			model.range);
		return updateNewList;
	});
var $author$project$InputKeyAssist$wordListDelete = function (list) {
	wordListDelete:
	while (true) {
		var nameWord = A3(
			$elm$core$List$foldl,
			F2(
				function (a, def) {
					return a.selected ? a.name : def;
				}),
			'Noone',
			list);
		if (nameWord === 'head') {
			return list;
		} else {
			if (list.b) {
				if (!list.b.b) {
					var a = list.a;
					return a.selected ? _List_Nil : A2($elm$core$List$cons, a, _List_Nil);
				} else {
					var a = list.a;
					var _v1 = list.b;
					var b = _v1.a;
					var ls = _v1.b;
					if (a.selected) {
						var $temp$list = A2($elm$core$List$cons, b, ls);
						list = $temp$list;
						continue wordListDelete;
					} else {
						if (b.selected) {
							return A2(
								$elm$core$List$cons,
								{name: a.name, selected: true, word: a.word},
								$author$project$InputKeyAssist$wordListDelete(ls));
						} else {
							return A2(
								$elm$core$List$cons,
								a,
								$author$project$InputKeyAssist$wordListDelete(
									A2($elm$core$List$cons, b, ls)));
						}
					}
				}
			} else {
				return _List_Nil;
			}
		}
	}
};
var $author$project$MusicCreator$wordDelete = function (list) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			var _function = a._function;
			var new_function = _Utils_update(
				_function,
				{
					lyric: $author$project$InputKeyAssist$updateName(
						$author$project$InputKeyAssist$wordListDelete(a._function.lyric))
				});
			return _Utils_Tuple2(
				name,
				_Utils_update(
					a,
					{_function: new_function}));
		},
		list);
};
var $author$project$MusicCreator$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Tick':
				var t = msg.a;
				var _v1 = msg.b;
				var keys = _v1.a;
				var arrow = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ifswitch: (_Utils_eq(
								arrow,
								_Utils_Tuple2(1, 0)) || _Utils_eq(
								arrow,
								_Utils_Tuple2(-1, 0))) ? false : true,
							scoreNoteList: function () {
								var _v2 = keys($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Backspace);
								if (_v2.$ === 'JustDown') {
									return A2(
										$author$project$MusicCreator$updateScoreNoteXDict,
										model.sizeofNote,
										$author$project$MusicCreator$wordDelete(model.scoreNoteList));
								} else {
									var _v3 = keys($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Delete);
									if (_v3.$ === 'JustDown') {
										return A2(
											$author$project$MusicCreator$updateScoreNoteXDict,
											model.sizeofNote,
											$author$project$MusicCreator$wordDelete(model.scoreNoteList));
									} else {
										var _v4 = keys($MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$Enter);
										if (_v4.$ === 'JustDown') {
											return $author$project$MusicCreator$clearSelect(model.scoreNoteList);
										} else {
											return ($author$project$InputKeyAssist$getKey(keys) === '') ? (_Utils_eq(
												arrow,
												_Utils_Tuple2(0, 0)) ? model.scoreNoteList : A3($author$project$MusicCreator$switchWord, model.scoreNoteList, arrow, model.ifswitch)) : A2(
												$author$project$MusicCreator$updateScoreNoteXDict,
												model.sizeofNote,
												A2(
													$author$project$MusicCreator$insertWord,
													model.scoreNoteList,
													$author$project$InputKeyAssist$getKey(keys)));
										}
									}
								}
							}(),
							time: t
						}),
					$elm$core$Platform$Cmd$none);
			case 'GotNewWidth':
				var width = msg.a;
				var height = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{height: height, width: width}),
					$elm$core$Platform$Cmd$none);
			case 'TapList':
				var lyricName = msg.a;
				var noteName = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							scoreNoteList: A3($author$project$MusicCreator$updateLyricSelected, model.scoreNoteList, lyricName, noteName)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ClearSelectLyric':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							scoreNoteList: $author$project$MusicCreator$clearSelect(model.scoreNoteList)
						}),
					$elm$core$Platform$Cmd$none);
			case 'SlurTap':
				var t = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							invalidSlurList: _Utils_eq(t, $author$project$MusicCreatorDef$Articulation) ? $author$project$MusicCreator$getInvalidSlurList(model.scoreNoteList) : _List_Nil
						}),
					$elm$core$Platform$Cmd$none);
			case 'SelectSlurAt':
				var _v5 = msg.a;
				var x = _v5.a;
				var y = _v5.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							scoreNoteList: A2(
								$author$project$MusicCreator$releasedtoDragSlur,
								_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed),
								model.scoreNoteList)
						}),
					$elm$core$Platform$Cmd$none);
			case 'DragF':
				var nameOfNote = msg.a;
				var t = msg.b;
				var _v6 = msg.c;
				var x = _v6.a;
				var y = _v6.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							scoreNoteList: _Utils_eq(t, $author$project$MusicCreatorDef$Dynamic) ? A3(
								$author$project$MusicCreator$whileDragScoreUpdateDynamic,
								nameOfNote,
								model,
								_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed)) : (_Utils_eq(t, $author$project$MusicCreatorDef$Accidental) ? A3(
								$author$project$MusicCreator$whileDragScoreUpdateAccidental,
								nameOfNote,
								model,
								_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed)) : (_Utils_eq(t, $author$project$MusicCreatorDef$Articulation) ? A3(
								$author$project$MusicCreator$whileDragScoreUpdateArticulation,
								nameOfNote,
								model,
								_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed)) : model.scoreNoteList)),
							selectAccidentalsDict: function () {
								var _v7 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectAccidentalsDict, $author$project$MusicCreatorDef$defselectAccidentalRec);
								if (_v7.$ === 'Dragging') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4(
														$author$project$MusicCreatorDef$SelectAccidental,
														_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed),
														p.posInit,
														p.dragState,
														p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectAccidentalsDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectAccidental, p.posInit, p.posInit, p.dragState, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectAccidentalsDict);
								}
							}(),
							selectArticulationDict: function () {
								var _v10 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectArticulationDict, $author$project$MusicCreatorDef$defselectArticulation);
								if (_v10.$ === 'Dragging') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4(
														$author$project$MusicCreatorDef$SelectArticulation,
														_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed),
														p.posInit,
														p.dragState,
														p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectArticulationDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectArticulation, p.posInit, p.posInit, p.dragState, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectArticulationDict);
								}
							}(),
							selectDynamicDict: function () {
								var _v13 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectDynamicDict, $author$project$MusicCreatorDef$defselectDynamicRec);
								if (_v13.$ === 'Dragging') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4(
														$author$project$MusicCreatorDef$SelectDynamic,
														_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed),
														p.posInit,
														p.dragState,
														p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectDynamicDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectDynamic, p.posInit, p.posInit, p.dragState, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectDynamicDict);
								}
							}(),
							trashState: function () {
								var _v16 = A3(
									$author$project$MusicCreator$extractDragState,
									nameOfNote,
									$elm$core$Dict$fromList(
										$author$project$MusicCreatorFunctions$createdynamicList(model.scoreNoteList)),
									$author$project$MusicCreatorDef$defselectDynamicRec);
								if (_v16.$ === 'Dragging') {
									return A2(
										$author$project$MusicCreator$ifSelectedNoteClosetoTrash,
										model,
										_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed));
								} else {
									var _v17 = A3(
										$author$project$MusicCreator$extractDragState,
										nameOfNote,
										$elm$core$Dict$fromList(
											$author$project$MusicCreatorFunctions$createaccidentalList(model.scoreNoteList)),
										$author$project$MusicCreatorDef$defselectAccidentalRec);
									if (_v17.$ === 'Dragging') {
										return A2(
											$author$project$MusicCreator$ifSelectedNoteClosetoTrash,
											model,
											_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed));
									} else {
										var _v18 = A3(
											$author$project$MusicCreator$extractDragState,
											nameOfNote,
											$elm$core$Dict$fromList(
												$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList)),
											$author$project$MusicCreatorDef$defselectArticulation);
										if (_v18.$ === 'Dragging') {
											return A2(
												$author$project$MusicCreator$ifSelectedNoteClosetoTrash,
												model,
												_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed));
										} else {
											return $author$project$MusicCreator$Close;
										}
									}
								}
							}()
						}),
					$elm$core$Platform$Cmd$none);
			case 'Drag':
				var nameOfNote = msg.a;
				var _v19 = msg.b;
				var x = _v19.a;
				var y = _v19.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							pos: function () {
								var _v20 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec);
								if (_v20.$ === 'Dragging') {
									return _Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed);
								} else {
									return model.pos;
								}
							}(),
							scoreNoteList: function () {
								var _v21 = A3(
									$author$project$MusicCreator$extractDragState,
									nameOfNote,
									$elm$core$Dict$fromList(model.scoreNoteList),
									$author$project$MusicCreatorDef$defselectNoteRec);
								if (_v21.$ === 'Dragging') {
									return A3(
										$author$project$MusicCreator$whileDrageScoreNoteUpdateScoreNote,
										nameOfNote,
										model,
										_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed));
								} else {
									var _v22 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec);
									if (_v22.$ === 'Dragging') {
										return A2($author$project$MusicCreator$whileDrageSeletedNoteUpdateScoreNote, nameOfNote, model);
									} else {
										return model.scoreNoteList;
									}
								}
							}(),
							selectNoteDict: function () {
								var _v23 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec);
								if (_v23.$ === 'Dragging') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A5(
														$author$project$MusicCreatorDef$SelectNote,
														_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed),
														p.posInit,
														p.dragState,
														p.note,
														p._function));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectNoteDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A5($author$project$MusicCreatorDef$SelectNote, p.posInit, p.posInit, p.dragState, p.note, p._function));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectNoteDict);
								}
							}(),
							trashState: function () {
								var _v26 = A3(
									$author$project$MusicCreator$extractDragState,
									nameOfNote,
									$elm$core$Dict$fromList(model.scoreNoteList),
									$author$project$MusicCreatorDef$defselectNoteRec);
								if (_v26.$ === 'Dragging') {
									return A2(
										$author$project$MusicCreator$ifSelectedNoteClosetoTrash,
										model,
										_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed));
								} else {
									return $author$project$MusicCreator$Close;
								}
							}()
						}),
					$elm$core$Platform$Cmd$none);
			case 'ChangeDragStateF':
				var nameOfNote = msg.a;
				var t = msg.b;
				var _v27 = msg.c;
				var x = _v27.a;
				var y = _v27.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							scoreNoteList: function () {
								if (_Utils_eq(t, $author$project$MusicCreatorDef$Dynamic)) {
									var _v28 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectDynamicDict, $author$project$MusicCreatorDef$defselectDynamicRec);
									if (_v28.$ === 'Dragging') {
										return A2($author$project$MusicCreator$changeDragSelectUpdateDynamic, nameOfNote, model);
									} else {
										var _v29 = A3(
											$author$project$MusicCreator$extractDragState,
											nameOfNote,
											$elm$core$Dict$fromList(
												$author$project$MusicCreatorFunctions$createdynamicList(model.scoreNoteList)),
											$author$project$MusicCreatorDef$defselectDynamicRec);
										if (_v29.$ === 'Dragging') {
											return A2($author$project$MusicCreator$changeDynamicDragToRealease, nameOfNote, model);
										} else {
											return A2(
												$elm$core$List$map,
												function (_v30) {
													var name = _v30.a;
													var a = _v30.b;
													return _Utils_eq(name, nameOfNote) ? A2(
														$author$project$MusicCreator$changeDynamicRealeaseToDrag,
														_Utils_Tuple2(name, a),
														_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed)) : _Utils_Tuple2(name, a);
												},
												model.scoreNoteList);
										}
									}
								} else {
									if (_Utils_eq(t, $author$project$MusicCreatorDef$Accidental)) {
										var _v31 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectAccidentalsDict, $author$project$MusicCreatorDef$defselectAccidentalRec);
										if (_v31.$ === 'Dragging') {
											return A2(
												$author$project$MusicCreator$updateScoreNoteXDict,
												model.sizeofNote,
												A2($author$project$MusicCreator$changeDragSelectUpdateAccidentals, nameOfNote, model));
										} else {
											var _v32 = A3(
												$author$project$MusicCreator$extractDragState,
												nameOfNote,
												$elm$core$Dict$fromList(
													$author$project$MusicCreatorFunctions$createaccidentalList(model.scoreNoteList)),
												$author$project$MusicCreatorDef$defselectAccidentalRec);
											if (_v32.$ === 'Dragging') {
												return A2(
													$author$project$MusicCreator$updateScoreNoteXDict,
													model.sizeofNote,
													A2($author$project$MusicCreator$changeAccidentalsDragToRealease, nameOfNote, model));
											} else {
												return A2(
													$elm$core$List$map,
													function (_v33) {
														var name = _v33.a;
														var a = _v33.b;
														return _Utils_eq(name, nameOfNote) ? A2(
															$author$project$MusicCreator$changeAccidentalsRealeaseToDrag,
															_Utils_Tuple2(name, a),
															_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed)) : _Utils_Tuple2(name, a);
													},
													model.scoreNoteList);
											}
										}
									} else {
										if (_Utils_eq(t, $author$project$MusicCreatorDef$Articulation)) {
											var _v34 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectArticulationDict, $author$project$MusicCreatorDef$defselectArticulation);
											if (_v34.$ === 'Dragging') {
												return A2($author$project$MusicCreator$changeDragSelectUpdateArticulation, nameOfNote, model);
											} else {
												var _v35 = A3(
													$author$project$MusicCreator$extractDragState,
													nameOfNote,
													$elm$core$Dict$fromList(
														$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList)),
													$author$project$MusicCreatorDef$defselectArticulation);
												if (_v35.$ === 'Dragging') {
													return A2($author$project$MusicCreator$changeArticulationDragToRealease, nameOfNote, model);
												} else {
													return A2(
														$elm$core$List$map,
														function (_v36) {
															var name = _v36.a;
															var a = _v36.b;
															return _Utils_eq(name, nameOfNote) ? A2(
																$author$project$MusicCreator$changeArticulationRealeaseToDrag,
																_Utils_Tuple2(name, a),
																_Utils_Tuple2(x * $author$project$MusicCreatorDef$adjectmoveSpeed, y * $author$project$MusicCreatorDef$adjectmoveSpeed)) : _Utils_Tuple2(name, a);
														},
														model.scoreNoteList);
												}
											}
										} else {
											return model.scoreNoteList;
										}
									}
								}
							}(),
							selectAccidentalsDict: function () {
								var _v37 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectAccidentalsDict, $author$project$MusicCreatorDef$defselectAccidentalRec);
								if (_v37.$ === 'Dragging') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectAccidental, p.posInit, p.posInit, $author$project$MusicCreatorDef$Released, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectAccidentalsDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectAccidental, p.pos, p.posInit, $author$project$MusicCreatorDef$Dragging, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectAccidentalsDict);
								}
							}(),
							selectArticulationDict: function () {
								var _v40 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectArticulationDict, $author$project$MusicCreatorDef$defselectArticulation);
								if (_v40.$ === 'Dragging') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectArticulation, p.posInit, p.posInit, $author$project$MusicCreatorDef$Released, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectArticulationDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectArticulation, p.pos, p.posInit, $author$project$MusicCreatorDef$Dragging, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectArticulationDict);
								}
							}(),
							selectDynamicDict: function () {
								var _v43 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectDynamicDict, $author$project$MusicCreatorDef$defselectDynamicRec);
								if (_v43.$ === 'Released') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectDynamic, p.pos, p.posInit, $author$project$MusicCreatorDef$Dragging, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectDynamicDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A4($author$project$MusicCreatorDef$SelectDynamic, p.posInit, p.posInit, $author$project$MusicCreatorDef$Released, p.f));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectDynamicDict);
								}
							}(),
							trashState: function () {
								var _v46 = A3(
									$author$project$MusicCreator$extractDragState,
									nameOfNote,
									$elm$core$Dict$fromList(
										$author$project$MusicCreatorFunctions$createdynamicList(model.scoreNoteList)),
									$author$project$MusicCreatorDef$defselectDynamicRec);
								if (_v46.$ === 'Dragging') {
									return $author$project$MusicCreator$Close;
								} else {
									var _v47 = A3(
										$author$project$MusicCreator$extractDragState,
										nameOfNote,
										$elm$core$Dict$fromList(
											$author$project$MusicCreatorFunctions$createaccidentalList(model.scoreNoteList)),
										$author$project$MusicCreatorDef$defselectAccidentalRec);
									if (_v47.$ === 'Dragging') {
										return $author$project$MusicCreator$Close;
									} else {
										return $author$project$MusicCreator$Close;
									}
								}
							}()
						}),
					$elm$core$Platform$Cmd$none);
			case 'ChangeDragState':
				var nameOfNote = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							dragState: function () {
								var _v48 = model.dragState;
								if (_v48.$ === 'Released') {
									return $author$project$MusicCreatorDef$Dragging;
								} else {
									return $author$project$MusicCreatorDef$Released;
								}
							}(),
							scoreNoteList: function () {
								var _v49 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec);
								if (_v49.$ === 'Released') {
									var _v50 = A3(
										$author$project$MusicCreator$extractDragState,
										nameOfNote,
										$elm$core$Dict$fromList(model.scoreNoteList),
										$author$project$MusicCreatorDef$defselectNoteRec);
									if (_v50.$ === 'Released') {
										return A2(
											$elm$core$List$map,
											function (_v51) {
												var name = _v51.a;
												var record = _v51.b;
												return _Utils_eq(name, nameOfNote) ? _Utils_Tuple2(
													name,
													A5($author$project$MusicCreatorDef$SelectNote, record.pos, record.posInit, $author$project$MusicCreatorDef$Dragging, record.note, record._function)) : _Utils_Tuple2(name, record);
											},
											model.scoreNoteList);
									} else {
										return A2($author$project$MusicCreator$changeDrageScoreNoteUpdateScoreNote, nameOfNote, model);
									}
								} else {
									return A2($author$project$MusicCreator$changeDrageSeletedNoteUpdateScoreNote, nameOfNote, model);
								}
							}(),
							selectNoteDict: function () {
								var _v52 = A3($author$project$MusicCreator$extractDragState, nameOfNote, model.selectNoteDict, $author$project$MusicCreatorDef$defselectNoteRec);
								if (_v52.$ === 'Released') {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A5($author$project$MusicCreatorDef$SelectNote, p.pos, p.posInit, $author$project$MusicCreatorDef$Dragging, p.note, p._function));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectNoteDict);
								} else {
									return A3(
										$elm$core$Dict$update,
										nameOfNote,
										function (z) {
											if (z.$ === 'Just') {
												var p = z.a;
												return $elm$core$Maybe$Just(
													A5($author$project$MusicCreatorDef$SelectNote, p.posInit, p.posInit, $author$project$MusicCreatorDef$Released, p.note, p._function));
											} else {
												return $elm$core$Maybe$Nothing;
											}
										},
										model.selectNoteDict);
								}
							}(),
							trashState: function () {
								var _v55 = A3(
									$author$project$MusicCreator$extractDragState,
									nameOfNote,
									$elm$core$Dict$fromList(model.scoreNoteList),
									$author$project$MusicCreatorDef$defselectNoteRec);
								if (_v55.$ === 'Released') {
									return $author$project$MusicCreator$Close;
								} else {
									return $author$project$MusicCreator$Close;
								}
							}()
						}),
					$elm$core$Platform$Cmd$none);
			case 'PlaySound':
				var test = _List_fromArray(
					[
						A5(
						$author$project$MusicCreatorDef$SelectNote,
						_Utils_Tuple2($author$project$MusicCreatorDef$noteFirstPos, 0),
						_Utils_Tuple2($author$project$MusicCreatorDef$noteFirstPos, 0),
						$author$project$MusicCreatorDef$Released,
						$author$project$MusicCreatorDef$WholeN,
						$author$project$MusicCreatorDef$defaultFunction)
					]);
				var tempo = {bpm: model.tempCircle.tempo, duration: 0.25};
				var music = A2(
					$elm$core$List$map,
					function (_v56) {
						var name = _v56.a;
						var a = _v56.b;
						return a;
					},
					$author$project$MusicCreatorFunctions$mergeTie(model.scoreNoteList));
				var myMusic = A4($author$project$MusicCreatorToMusic$creatorToMusic, model.instrument, model.clef, model.timeSignature, music);
				return _Utils_Tuple2(
					model,
					$elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								$author$project$PlayBack$play(
								A2($author$project$PlayBack$perform, tempo, myMusic))
							])));
			case 'ChangeTapDragBar':
				var tempCircle = model.tempCircle;
				var new_tempCircle = _Utils_update(
					tempCircle,
					{
						dragState: function () {
							var _v57 = model.tempCircle.dragState;
							if (_v57.$ === 'Released') {
								return $author$project$MusicCreatorDef$Dragging;
							} else {
								return $author$project$MusicCreatorDef$Released;
							}
						}(),
						tempo: function () {
							var _v58 = model.tempCircle.dragState;
							if (_v58.$ === 'Released') {
								return model.tempCircle.tempo;
							} else {
								return $author$project$DragBarAssit$currentTemp(model.tempCircle.posX + $author$project$DragBarAssit$originalPosX);
							}
						}(),
						zoomCircle: function () {
							var _v59 = model.tempCircle.dragState;
							if (_v59.$ === 'Released') {
								return model.tempCircle.zoomCircle;
							} else {
								return 1.0;
							}
						}()
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tempCircle: new_tempCircle}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomDragBar':
				var tempCircle = model.tempCircle;
				var new_tempCircle = _Utils_update(
					tempCircle,
					{zoomCircle: 1.5});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tempCircle: new_tempCircle}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomOutDragBar':
				var tempCircle = model.tempCircle;
				var new_tempCircle = _Utils_update(
					tempCircle,
					{
						zoomCircle: function () {
							var _v60 = model.tempCircle.dragState;
							if (_v60.$ === 'Released') {
								return 1.0;
							} else {
								return model.tempCircle.zoomCircle;
							}
						}()
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tempCircle: new_tempCircle}),
					$elm$core$Platform$Cmd$none);
			case 'TempoPlus':
				var tempCircle = model.tempCircle;
				var highT = $author$project$DragBarAssit$highestTemp;
				var new_tempCircle = _Utils_update(
					tempCircle,
					{
						posX: (_Utils_cmp(model.tempCircle.tempo + 1, highT) < 0) ? $author$project$DragBarAssit$findPos(model.tempCircle.tempo + 1) : model.tempCircle.posX,
						tempo: (_Utils_cmp(model.tempCircle.tempo + 1, highT) < 0) ? (model.tempCircle.tempo + 1) : model.tempCircle.tempo
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tempCircle: new_tempCircle}),
					$elm$core$Platform$Cmd$none);
			case 'TempoMinus':
				var tempCircle = model.tempCircle;
				var lowT = $author$project$DragBarAssit$lowestTemp;
				var new_tempCircle = _Utils_update(
					tempCircle,
					{
						posX: (_Utils_cmp(model.tempCircle.tempo - 1, lowT) > 0) ? $author$project$DragBarAssit$findPos(model.tempCircle.tempo - 1) : model.tempCircle.posX,
						tempo: (_Utils_cmp(model.tempCircle.tempo - 1, lowT) > 0) ? (model.tempCircle.tempo - 1) : model.tempCircle.tempo
					});
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tempCircle: new_tempCircle}),
					$elm$core$Platform$Cmd$none);
			case 'DragBar':
				var _v61 = msg.a;
				var x = _v61.a;
				var y = _v61.b;
				var tempCircle = model.tempCircle;
				var new_tempCircle = function () {
					var temp = $author$project$DragBarAssit$nextTemp(x);
					var lowT = $author$project$DragBarAssit$lowestTemp;
					var highT = $author$project$DragBarAssit$highestTemp;
					return _Utils_update(
						tempCircle,
						{
							posX: ((_Utils_cmp(temp, lowT) < 0) || (_Utils_cmp(temp, highT) > 0)) ? ((_Utils_cmp(temp, lowT) < 0) ? $author$project$DragBarAssit$findPos(lowT) : ((_Utils_cmp(temp, highT) > 0) ? $author$project$DragBarAssit$findPos(highT) : model.tempCircle.posX)) : (x - $author$project$DragBarAssit$originalPosX)
						});
				}();
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{tempCircle: new_tempCircle}),
					$elm$core$Platform$Cmd$none);
			case 'TimesignitureUp':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							timeSignature: A2($author$project$MusicCreator$newTimeSigniture, model.timeSignature, 1)
						}),
					$elm$core$Platform$Cmd$none);
			case 'TimesignitureDn':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							timeSignature: A2($author$project$MusicCreator$newTimeSigniture, model.timeSignature, -1)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomUpObj':
				var obj = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							clearBNoZoom: _Utils_eq(obj, $author$project$MusicCreator$ClearBNoZoom) ? 1.4 : 1,
							clearBYesZoom: _Utils_eq(obj, $author$project$MusicCreator$ClearBYesZoom) ? 1.4 : 1,
							clearBZoom: _Utils_eq(obj, $author$project$MusicCreator$ClearBZoom) ? 1.5 : 1,
							instrumentDown: _Utils_eq(obj, $author$project$MusicCreator$InstrumentZoomDown) ? 1.4 : 1,
							instrumentUp: _Utils_eq(obj, $author$project$MusicCreator$InstrumentZoomUp) ? 1.4 : 1,
							playButtonZ: _Utils_eq(obj, $author$project$MusicCreator$PlayButtonZ) ? 1.1 : 1,
							tempoMinus: _Utils_eq(obj, $author$project$MusicCreator$TempoMinusZ) ? 1.3 : 1,
							tempoPlus: _Utils_eq(obj, $author$project$MusicCreator$TempoPlusZ) ? 1.3 : 1,
							tmDn: _Utils_eq(obj, $author$project$MusicCreator$TmDn) ? 1.4 : 1,
							tmUp: _Utils_eq(obj, $author$project$MusicCreator$TmUp) ? 1.4 : 1
						}),
					$elm$core$Platform$Cmd$none);
			case 'ZoomDnObj':
				var obj = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{clearBNoZoom: 1, clearBYesZoom: 1, clearBZoom: 1, instrumentDown: 1, instrumentUp: 1, playButtonZ: 1, tempoMinus: 1, tempoPlus: 1, tmDn: 1, tmUp: 1}),
					$elm$core$Platform$Cmd$none);
			case 'TapClearButton':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{clearNotes: true}),
					$elm$core$Platform$Cmd$none);
			case 'ClearButtonYes':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{clearNotes: false, scoreNoteList: _List_Nil}),
					$elm$core$Platform$Cmd$none);
			case 'ClearButtonNo':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{clearNotes: false}),
					$elm$core$Platform$Cmd$none);
			case 'SeeCode':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							expand: $author$project$MusicCreator$updateCV(model.expand),
							widthView: $author$project$MusicCreator$updateRectView(model.widthView)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StartScroll':
				var _v62 = msg.a;
				var x = _v62.a;
				return _Utils_Tuple2(
					function () {
						var _v63 = model.scroll;
						if (_v63.$ === 'Waiting') {
							return _Utils_update(
								model,
								{
									scroll: A2($author$project$MusicCreatorDef$Scrolling, x, model.focus)
								});
						} else {
							return model;
						}
					}(),
					$elm$core$Platform$Cmd$none);
			case 'Scroll':
				var _v64 = msg.a;
				var newX = _v64.a;
				return _Utils_Tuple2(
					function () {
						var _v65 = model.scroll;
						if (_v65.$ === 'Scrolling') {
							var startX = _v65.a;
							var originalFocus = _v65.b;
							return _Utils_update(
								model,
								{
									clef: $author$project$MusicCreator$instrumentClef(
										A2(
											$author$project$MusicCreator$newInstrument,
											model.instrument,
											A2($elm$core$Basics$modBy, 12, model.focus))),
									focus: $elm$core$Basics$round((newX - startX) / 5) + originalFocus,
									instrument: A2(
										$author$project$MusicCreator$newInstrument,
										model.instrument,
										A2($elm$core$Basics$modBy, 12, model.focus)),
									range: $author$project$MusicCreator$instrumentRange(
										A2(
											$author$project$MusicCreator$newInstrument,
											model.instrument,
											A2($elm$core$Basics$modBy, 12, model.focus)))
								});
						} else {
							return model;
						}
					}(),
					$elm$core$Platform$Cmd$none);
			case 'ArrowScroll':
				var arrowState = msg.a;
				return _Utils_Tuple2(
					function () {
						if (arrowState.$ === 'Uparrow') {
							return _Utils_update(
								model,
								{focus: model.focus + 1});
						} else {
							return _Utils_update(
								model,
								{focus: model.focus - 1});
						}
					}(),
					$elm$core$Platform$Cmd$none);
			case 'EndScroll':
				return _Utils_Tuple2(
					function () {
						var _v67 = model.scroll;
						if (_v67.$ === 'Scrolling') {
							return _Utils_update(
								model,
								{scroll: $author$project$MusicCreatorDef$Waiting});
						} else {
							return model;
						}
					}(),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							clef: $author$project$MusicCreator$instrumentClef(
								A2(
									$author$project$MusicCreator$newInstrument,
									model.instrument,
									A2($elm$core$Basics$modBy, 12, model.focus))),
							instrument: A2(
								$author$project$MusicCreator$newInstrument,
								model.instrument,
								A2($elm$core$Basics$modBy, 12, model.focus)),
							range: $author$project$MusicCreator$instrumentRange(
								A2(
									$author$project$MusicCreator$newInstrument,
									model.instrument,
									A2($elm$core$Basics$modBy, 12, model.focus)))
						}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$collage = F3(
	function (w, h, shapes) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Collage, w, h, shapes);
	});
var $author$project$MusicCreator$ChangeDragState = function (a) {
	return {$: 'ChangeDragState', a: a};
};
var $author$project$MusicCreator$ChangeDragStateF = F3(
	function (a, b, c) {
		return {$: 'ChangeDragStateF', a: a, b: b, c: c};
	});
var $author$project$MusicCreator$ChangeTapDragBar = {$: 'ChangeTapDragBar'};
var $author$project$MusicCreator$ClearSelectLyric = {$: 'ClearSelectLyric'};
var $author$project$MusicCreator$Drag = F2(
	function (a, b) {
		return {$: 'Drag', a: a, b: b};
	});
var $author$project$MusicCreator$DragBar = function (a) {
	return {$: 'DragBar', a: a};
};
var $author$project$MusicCreator$DragF = F3(
	function (a, b, c) {
		return {$: 'DragF', a: a, b: b, c: c};
	});
var $author$project$MusicCreator$PlaySound = {$: 'PlaySound'};
var $author$project$MusicCreator$SeeCode = {$: 'SeeCode'};
var $author$project$MusicCreator$TempoMinus = {$: 'TempoMinus'};
var $author$project$MusicCreator$TempoPlus = {$: 'TempoPlus'};
var $author$project$MusicCreator$TimesignitureDn = {$: 'TimesignitureDn'};
var $author$project$MusicCreator$TimesignitureUp = {$: 'TimesignitureUp'};
var $author$project$MusicCreator$ZoomDnObj = function (a) {
	return {$: 'ZoomDnObj', a: a};
};
var $author$project$MusicCreator$ZoomDragBar = {$: 'ZoomDragBar'};
var $author$project$MusicCreator$ZoomOutDragBar = {$: 'ZoomOutDragBar'};
var $author$project$MusicCreator$ZoomUpObj = function (a) {
	return {$: 'ZoomUpObj', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$NoLine = {$: 'NoLine'};
var $MacCASOutreach$graphicsvg$GraphicSVG$blank = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 0, 0, 0, 0);
var $MacCASOutreach$graphicsvg$GraphicSVG$subtract = F2(
	function (shape1, shape2) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask, shape1, shape2);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$addOutline = F3(
	function (style, outlineClr, shape) {
		addOutline:
		while (true) {
			var lineStyle = function () {
				if (style.$ === 'NoLine') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(style, outlineClr));
				}
			}();
			switch (shape.$) {
				case 'Inked':
					var clr = shape.a;
					var st = shape.c;
					return A3($MacCASOutreach$graphicsvg$GraphicSVG$Inked, clr, lineStyle, st);
				case 'Move':
					var s = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Move,
						s,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Rotate':
					var r = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
						r,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Scale':
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
						sx,
						sy,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Skew':
					var skx = shape.a;
					var sky = shape.b;
					var sh = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
						skx,
						sky,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Transformed':
					var tm = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
						tm,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Group':
					var list = shape.a;
					var innerlist = A2(
						$elm$core$List$filterMap,
						function (shp) {
							if (shp.$ === 'GroupOutline') {
								return $elm$core$Maybe$Nothing;
							} else {
								return $elm$core$Maybe$Just(
									A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, shp));
							}
						},
						list);
					if (!innerlist.b) {
						return $MacCASOutreach$graphicsvg$GraphicSVG$Group(_List_Nil);
					} else {
						if (!innerlist.b.b) {
							var hd = innerlist.a;
							var $temp$style = style,
								$temp$outlineClr = outlineClr,
								$temp$shape = hd;
							style = $temp$style;
							outlineClr = $temp$outlineClr;
							shape = $temp$shape;
							continue addOutline;
						} else {
							if (_Utils_eq(lineStyle, $elm$core$Maybe$Nothing)) {
								return $MacCASOutreach$graphicsvg$GraphicSVG$Group(innerlist);
							} else {
								var outlnshp = $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(innerlist),
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(
											A2(
												$elm$core$List$map,
												A2($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr),
												innerlist))));
								return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
									_Utils_ap(
										innerlist,
										_List_fromArray(
											[outlnshp])));
							}
						}
					}
				case 'GroupOutline':
					var cmbndshp = shape.a;
					return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(cmbndshp);
				case 'AlphaMask':
					var reg = shape.a;
					var sh = shape.b;
					var ptrn = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, reg);
					var inside = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, sh);
					if (_Utils_eq(lineStyle, $elm$core$Maybe$Nothing)) {
						return A2($MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask, ptrn, inside);
					} else {
						var ptrnlnd = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, reg);
						var ptrnoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, ptrnlnd);
						var newshp = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh);
						var shpoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, newshp);
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
							ptrn,
							$MacCASOutreach$graphicsvg$GraphicSVG$Group(
								_List_fromArray(
									[
										inside,
										$MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(
											_List_fromArray(
												[shpoutln, ptrnoutln])))
									])));
					}
				case 'Clip':
					var reg = shape.a;
					var sh = shape.b;
					var ptrn = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, reg);
					var inside = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, sh);
					if (_Utils_eq(lineStyle, $elm$core$Maybe$Nothing)) {
						return A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, ptrn, inside);
					} else {
						var ptrnlnd = A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
							style,
							outlineClr,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, $MacCASOutreach$graphicsvg$GraphicSVG$blank, reg));
						var ptrnoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, ptrnlnd);
						var newshp = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh);
						var shpoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, newshp);
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
							ptrn,
							$MacCASOutreach$graphicsvg$GraphicSVG$Group(
								_List_fromArray(
									[
										inside,
										$MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(
											_List_fromArray(
												[shpoutln, ptrnoutln])))
									])));
					}
				case 'Link':
					var s = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Link,
						s,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Tap':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TapAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'EnterShape':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'EnterAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'Exit':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'ExitAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseDown':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseDownAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseUp':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MouseUpAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'MoveOverAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchStart':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchEnd':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchStartAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchEndAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'TouchMoveAt':
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 'ForeignObject':
					var w = shape.a;
					var h = shape.b;
					var htm = shape.c;
					return A3($MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
				case 'Everything':
					return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
				case 'Notathing':
					return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
				default:
					var s = shape.a;
					var th = shape.b;
					var clr = shape.c;
					return A3($MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, clr);
			}
		}
	});
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$AlignCentred = {$: 'AlignCentred'};
var $MacCASOutreach$graphicsvg$GraphicSVG$Face = F8(
	function (a, b, c, d, e, f, g, h) {
		return {$: 'Face', a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$centered = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, f, $MacCASOutreach$graphicsvg$GraphicSVG$AlignCentred),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$rotate = F2(
	function (theta, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rotate, theta, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scaleX = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, s, 1, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$size = F2(
	function (sze, stencil) {
		if (stencil.$ === 'Text') {
			var _v1 = stencil.a;
			var si = _v1.a;
			var bo = _v1.b;
			var i = _v1.c;
			var u = _v1.d;
			var s = _v1.e;
			var sel = _v1.f;
			var f = _v1.g;
			var c = _v1.h;
			var str = stencil.b;
			return A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Text,
				A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, sze, bo, i, u, s, sel, f, c),
				str);
		} else {
			var a = stencil;
			return a;
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$AlignLeft = {$: 'AlignLeft'};
var $MacCASOutreach$graphicsvg$GraphicSVG$Serif = {$: 'Serif'};
var $MacCASOutreach$graphicsvg$GraphicSVG$text = function (str) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$Text,
		A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, 12, false, false, false, false, false, $MacCASOutreach$graphicsvg$GraphicSVG$Serif, $MacCASOutreach$graphicsvg$GraphicSVG$AlignLeft),
		str);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Polygon = function (a) {
	return {$: 'Polygon', a: a};
};
var $elm$core$Basics$turns = function (angleInTurns) {
	return (2 * $elm$core$Basics$pi) * angleInTurns;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$ptOnCircle = F3(
	function (r, n, cn) {
		var angle = $elm$core$Basics$turns(cn / n);
		return _Utils_Tuple2(
			r * $elm$core$Basics$cos(angle),
			r * $elm$core$Basics$sin(angle));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ngon = F2(
	function (n, r) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$Polygon(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeL,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$ptOnCircle, r, n),
					$elm$core$Basics$toFloat),
				A2($elm$core$List$range, 0, n)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$triangle = function (r) {
	return A2($MacCASOutreach$graphicsvg$GraphicSVG$ngon, 3, r);
};
var $author$project$DrawMusic$firstNoteGuide = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 15)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
				1.5,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(30),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					7.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$centered(
						$MacCASOutreach$graphicsvg$GraphicSVG$text('Drop first note')))))
		]));
var $author$project$MusicCreatorFunctions$ifDraggedNote = function (list) {
	return A2(
		$elm$core$List$any,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return _Utils_eq(a.dragState, $author$project$MusicCreatorDef$Dragging);
		},
		list);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$outlined = F3(
	function (style, outlineClr, stencil) {
		var lineStyle = function () {
			if (style.$ === 'NoLine') {
				return $elm$core$Maybe$Nothing;
			} else {
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(style, outlineClr));
			}
		}();
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Inked, $elm$core$Maybe$Nothing, lineStyle, stencil);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$red = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 204, 0, 0, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$ssa = function (n) {
	return A3($elm$core$Basics$clamp, 0, 1, n);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$ssc = function (n) {
	return A3($elm$core$Basics$clamp, 0, 255, n);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$rgba = F4(
	function (r, g, b, a) {
		return A4(
			$MacCASOutreach$graphicsvg$GraphicSVG$RGBA,
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(r),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(g),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(b),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssa(a));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Solid = function (a) {
	return {$: 'Solid', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$solid = function (th) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Solid(th);
};
var $author$project$MusicCreator$assistBox = function (model) {
	var lowR = model.range.b;
	var ifSelectNoteDrage = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict));
	var ifSelectDynaDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$elm$core$Dict$toList(model.selectDynamicDict));
	var ifSelectArticulationDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$elm$core$Dict$toList(model.selectArticulationDict));
	var ifSelectAccidentalDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$elm$core$Dict$toList(model.selectAccidentalsDict));
	var ifScoreNoteDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(model.scoreNoteList);
	var ifScoreDynaDrage = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$author$project$MusicCreatorFunctions$createdynamicList(model.scoreNoteList));
	var ifScoreArticulationDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList));
	var notdragArt = function (articulation) {
		var ifDrag = function (list) {
			return A3(
				$elm$core$List$foldl,
				F2(
					function (_v7, def) {
						var name = _v7.a;
						var a = _v7.b;
						return (_Utils_eq(a.dragState, $author$project$MusicCreatorDef$Dragging) && (!_Utils_eq(a.f, articulation))) ? true : def;
					}),
				false,
				list);
		};
		return ifSelectArticulationDrag ? ifDrag(
			$elm$core$Dict$toList(model.selectArticulationDict)) : (ifScoreArticulationDrag ? ifDrag(
			$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList)) : false);
	};
	var ifScoreAccidentalDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$author$project$MusicCreatorFunctions$createaccidentalList(model.scoreNoteList));
	var highR = model.range.a;
	var getpost = function (list) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v6, def) {
					var name = _v6.a;
					var a = _v6.b;
					return _Utils_eq(a.dragState, $author$project$MusicCreatorDef$Dragging) ? a.pos : def;
				}),
			_Utils_Tuple2(0, 0),
			list);
	};
	var pos = ifScoreNoteDrag ? getpost(model.scoreNoteList) : (ifSelectNoteDrage ? getpost(
		$elm$core$Dict$toList(model.selectNoteDict)) : (ifSelectDynaDrag ? getpost(
		$elm$core$Dict$toList(model.selectDynamicDict)) : (ifScoreDynaDrage ? getpost(
		$author$project$MusicCreatorFunctions$createdynamicList(model.scoreNoteList)) : (ifSelectAccidentalDrag ? getpost(
		$elm$core$Dict$toList(model.selectAccidentalsDict)) : (ifScoreAccidentalDrag ? getpost(
		$author$project$MusicCreatorFunctions$createaccidentalList(model.scoreNoteList)) : (ifSelectArticulationDrag ? getpost(
		$elm$core$Dict$toList(model.selectArticulationDict)) : (ifScoreArticulationDrag ? getpost(
		$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList)) : _Utils_Tuple2(99999, 99999))))))));
	var x = pos.a;
	var y = pos.b;
	var drawGuide = function (list) {
		var p = function () {
			if (!list.b) {
				return _Utils_Tuple2(999, 999);
			} else {
				var _v5 = list.a;
				var name = _v5.a;
				var n = _v5.b;
				var xs = list.b;
				return n.pos;
			}
		}();
		return (ifSelectNoteDrage && A4($author$project$MusicCreator$insertCondition25, list, p.a, p.b, model.range)) ? (A2(
			$elm$core$List$all,
			function (_v3) {
				var name = _v3.a;
				var n = _v3.b;
				return _Utils_eq(n.note, $author$project$MusicCreatorDef$Empty);
			},
			list) ? A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, highR),
			A2($MacCASOutreach$graphicsvg$GraphicSVG$move, p, $author$project$DrawMusic$firstNoteGuide)) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
	};
	var dragArt = function (articulation) {
		var ifDrag = function (list) {
			return A3(
				$elm$core$List$foldl,
				F2(
					function (_v2, def) {
						var name = _v2.a;
						var a = _v2.b;
						return (_Utils_eq(a.dragState, $author$project$MusicCreatorDef$Dragging) && _Utils_eq(a.f, articulation)) ? true : def;
					}),
				false,
				list);
		};
		return ifSelectArticulationDrag ? ifDrag(
			$elm$core$Dict$toList(model.selectArticulationDict)) : (ifScoreArticulationDrag ? ifDrag(
			$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList)) : false);
	};
	var distance = function () {
		var listLength = $elm$core$List$length(model.scoreNoteList) - 1;
		return A2(
			$elm$core$List$map,
			function (_v1) {
				var a = _v1.a;
				var b = _v1.b;
				return {
					dis: $elm$core$Basics$sqrt(
						A2($elm$core$Basics$pow, x - a, 2) + A2($elm$core$Basics$pow, y - b, 2)),
					pos: _Utils_Tuple2(a, b)
				};
			},
			A2(
				$elm$core$List$map,
				function (x1) {
					return _Utils_Tuple2(x1, 0 + $author$project$MusicCreatorDef$moveYscore);
				},
				A2($author$project$MusicCreator$makeScoreNoteX, $author$project$MusicCreatorDef$noteFirstPos, model.scoreNoteList)));
	}();
	var targetValueHelper = function (condition) {
		var list = ifScoreNoteDrag ? A2(
			$elm$core$List$take,
			$elm$core$List$length(model.scoreNoteList) - 1,
			model.scoreNoteList) : model.scoreNoteList;
		var filter1 = A2(
			$elm$core$List$map,
			function (z) {
				return A4(condition, list, x, y, model.range) ? z.dis : 9999;
			},
			distance);
		return A3($elm$core$List$foldl, $elm$core$Basics$min, 99999, filter1);
	};
	var targetValue = targetValueHelper($author$project$MusicCreator$insertCondition30);
	var drawBox = function () {
		var ifInvalidSlur = function (name) {
			return A2($elm$core$List$member, name, model.invalidSlurList);
		};
		return (ifSelectDynaDrag || (ifScoreDynaDrage || (dragArt($author$project$MusicCreatorDef$Slur) || (ifSelectAccidentalDrag || (ifScoreAccidentalDrag || notdragArt($author$project$MusicCreatorDef$Fermata)))))) ? A3(
			$elm$core$List$map2,
			F2(
				function (b, _v0) {
					var name = _v0.a;
					var a = _v0.b;
					return _Utils_eq(b.dis, targetValue) ? (($author$project$MusicCreatorDef$ifRest(a.note) || ((notdragArt($author$project$MusicCreatorDef$Fermata) && _Utils_eq(a._function.tie, $author$project$MusicCreatorDef$TieE)) || (dragArt($author$project$MusicCreatorDef$Slur) && ifInvalidSlur(name)))) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								b.pos,
								A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
									$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
									$MacCASOutreach$graphicsvg$GraphicSVG$red,
									A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.sizeofNote, (highR - lowR) + 5))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								b.pos,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(10),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$red,
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1, (highR - lowR) + 5)))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								b.pos,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(-10),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$red,
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1, (highR - lowR) + 5))))
							])) : A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						b.pos,
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							A4(
								$MacCASOutreach$graphicsvg$GraphicSVG$rgba,
								50,
								62,
								168,
								$elm$core$Basics$sin((5 * model.time) - 0.5)),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.sizeofNote, (highR - lowR) + 5)))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
				}),
			distance,
			model.scoreNoteList) : A2(
			$elm$core$List$map,
			function (b) {
				return _Utils_eq(b.dis, targetValue) ? A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					b.pos,
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
						A4(
							$MacCASOutreach$graphicsvg$GraphicSVG$rgba,
							50,
							62,
							168,
							$elm$core$Basics$sin((5 * model.time) - 0.5)),
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.sizeofNote, (highR - lowR) + 5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
			},
			distance);
	}();
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$group(drawBox),
				drawGuide(model.scoreNoteList)
			]));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$bold = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, true, i, u, s, sel, f, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$customFont = F2(
	function (fStr, stencil) {
		if (stencil.$ === 'Text') {
			var _v1 = stencil.a;
			var si = _v1.a;
			var bo = _v1.b;
			var i = _v1.c;
			var u = _v1.d;
			var s = _v1.e;
			var sel = _v1.f;
			var f = _v1.g;
			var c = _v1.h;
			var str = stencil.b;
			return A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Text,
				A8(
					$MacCASOutreach$graphicsvg$GraphicSVG$Face,
					si,
					bo,
					i,
					u,
					s,
					sel,
					$MacCASOutreach$graphicsvg$GraphicSVG$Custom(fStr),
					c),
				str);
		} else {
			var a = stencil;
			return a;
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$findChroma = F2(
	function (lit, sat) {
		return (1 - $elm$core$Basics$abs((2 * lit) - 1)) * sat;
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$findM = F2(
	function (lit, chroma) {
		return lit - (0.5 * chroma);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$mapTriple = F2(
	function (f, _v0) {
		var a1 = _v0.a;
		var a2 = _v0.b;
		var a3 = _v0.c;
		return _Utils_Tuple3(
			f(a1),
			f(a2),
			f(a3));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$modFloat = F2(
	function (x, m) {
		return x - (m * $elm$core$Basics$floor(x / m));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$findHue_ = function (hue) {
	return hue / $elm$core$Basics$degrees(60);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$findX = F2(
	function (chroma, hue) {
		return chroma * (1 - $elm$core$Basics$abs(
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$modFloat,
				$MacCASOutreach$graphicsvg$GraphicSVG$findHue_(hue),
				2) - 1));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$toRGB_ = F3(
	function (hue, sat, lit) {
		var hue_ = $MacCASOutreach$graphicsvg$GraphicSVG$findHue_(hue);
		var chroma = A2($MacCASOutreach$graphicsvg$GraphicSVG$findChroma, lit, sat);
		var x = A2($MacCASOutreach$graphicsvg$GraphicSVG$findX, chroma, hue);
		return ((hue_ >= 0) && (hue_ < 1)) ? _Utils_Tuple3(chroma, x, 0) : (((hue_ >= 1) && (hue_ < 2)) ? _Utils_Tuple3(x, chroma, 0) : (((hue_ >= 2) && (hue_ < 3)) ? _Utils_Tuple3(0, chroma, x) : (((hue_ >= 3) && (hue_ < 4)) ? _Utils_Tuple3(0, x, chroma) : (((hue_ >= 4) && (hue_ < 5)) ? _Utils_Tuple3(x, 0, chroma) : (((hue_ >= 5) && (hue_ < 6)) ? _Utils_Tuple3(chroma, 0, x) : _Utils_Tuple3(0, 0, 0))))));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$convert = F3(
	function (hue, sat, lit) {
		var hue_ = A2($MacCASOutreach$graphicsvg$GraphicSVG$modFloat, hue, 2 * $elm$core$Basics$pi);
		var rgb_ = A3($MacCASOutreach$graphicsvg$GraphicSVG$toRGB_, hue_, sat, lit);
		var chroma = A2($MacCASOutreach$graphicsvg$GraphicSVG$findChroma, lit, sat);
		var m = A2($MacCASOutreach$graphicsvg$GraphicSVG$findM, lit, chroma);
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$mapTriple,
			function (x) {
				return x * 255;
			},
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$mapTriple,
				function (x) {
					return x + m;
				},
				rgb_));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$hsla = F4(
	function (h, s, l, a) {
		var _v0 = A3($MacCASOutreach$graphicsvg$GraphicSVG$convert, h, s, l);
		var r = _v0.a;
		var g = _v0.b;
		var b = _v0.c;
		return A4(
			$MacCASOutreach$graphicsvg$GraphicSVG$RGBA,
			r,
			g,
			b,
			$MacCASOutreach$graphicsvg$GraphicSVG$ssa(a));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$rgb = F3(
	function (r, g, b) {
		return A4(
			$MacCASOutreach$graphicsvg$GraphicSVG$RGBA,
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(r),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(g),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(b),
			1);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$RoundRect = F3(
	function (a, b, c) {
		return {$: 'RoundRect', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$roundedRect = F3(
	function (w, h, r) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$RoundRect, w, h, r);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scale = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, s, s, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scaleY = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, 1, s, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$selectable = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, true, f, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Pull = F2(
	function (a, b) {
		return {$: 'Pull', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Circle = function (a) {
	return {$: 'Circle', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$circle = function (r) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Circle(r);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$BezierPath = F2(
	function (a, b) {
		return {$: 'BezierPath', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$curveListHelper = function (_v0) {
	var _v1 = _v0.a;
	var a = _v1.a;
	var b = _v1.b;
	var _v2 = _v0.b;
	var c = _v2.a;
	var d = _v2.b;
	return _Utils_Tuple2(
		_Utils_Tuple2(a, b),
		_Utils_Tuple2(c, d));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$curve = F2(
	function (_v0, list) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$BezierPath,
			_Utils_Tuple2(a, b),
			A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$curveListHelper, list));
	});
var $author$project$DrawMusic$myHair = function (glowAmount) {
	return A3(
		$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
		$MacCASOutreach$graphicsvg$GraphicSVG$solid(1 + glowAmount),
		$MacCASOutreach$graphicsvg$GraphicSVG$white,
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$curve,
			_Utils_Tuple2(8.7176, 35.933),
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(44.644, 48.777),
					_Utils_Tuple2(36.571, 57.621)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(35.720, 57.940),
					_Utils_Tuple2(34.870, 58.259)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(23.581, 59.415),
					_Utils_Tuple2(8.2923, 36.571)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(8.3986, 36.146),
					_Utils_Tuple2(8.5049, 35.720)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(1.2558, 5.0066),
					_Utils_Tuple2(-9.993, 8.2923)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-10.31, 8.7176),
					_Utils_Tuple2(-10.63, 9.1428)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-10.27, 21.750),
					_Utils_Tuple2(8.0797, 36.358)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(8.9335, 52.225),
					_Utils_Tuple2(-0.212, 52.093)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-6.996, 52.222),
					_Utils_Tuple2(-9.780, 46.352)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-12.05, 42.737),
					_Utils_Tuple2(-12.33, 39.122)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-12.65, 22.707),
					_Utils_Tuple2(-12.97, 8.2923)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-12.82, 4.3588),
					_Utils_Tuple2(-14.67, 0.4252)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-13.71, 13.714),
					_Utils_Tuple2(-12.75, 27.003)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
					_Utils_Tuple2(-12.45, 17.581),
					_Utils_Tuple2(-16.15, 16.159))
				])));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Oval = F2(
	function (a, b) {
		return {$: 'Oval', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$oval = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Oval, w, h);
	});
var $author$project$DrawMusic$sigma = function (glowAmount) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(-124, 48),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.17,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(2 + glowAmount),
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(36.146, 39.122),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(36.465, 38.378),
									_Utils_Tuple2(36.784, 37.634)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(36.571, 36.784),
									_Utils_Tuple2(36.358, 35.933)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(36.465, 34.976),
									_Utils_Tuple2(36.571, 34.019)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(36.677, 33.063),
									_Utils_Tuple2(36.784, 32.106)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(36.890, 31.362),
									_Utils_Tuple2(36.996, 30.617)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(42.843, 19.667),
									_Utils_Tuple2(48.691, 8.7176)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(43.588, 11.056),
									_Utils_Tuple2(38.485, 13.395)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(36.358, 8.3986),
									_Utils_Tuple2(34.232, 3.4019)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(28.704, 7.5481),
									_Utils_Tuple2(23.176, 11.694)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.857, 10.312),
									_Utils_Tuple2(22.538, 8.9302)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.644, 8.5049),
									_Utils_Tuple2(22.750, 8.0797)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(23.069, 7.1229),
									_Utils_Tuple2(23.388, 6.1661)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(23.388, 5.3156),
									_Utils_Tuple2(23.388, 4.4651)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(24.239, -1.169),
									_Utils_Tuple2(25.089, -6.803)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(20.837, -11.37),
									_Utils_Tuple2(16.584, -15.94)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(21.368, -13.71),
									_Utils_Tuple2(26.152, -11.48)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(26.684, -11.80),
									_Utils_Tuple2(27.215, -12.11)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.109, -12.65),
									_Utils_Tuple2(27.003, -13.18)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.322, -20.30),
									_Utils_Tuple2(27.641, -27.42)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.960, -27.85),
									_Utils_Tuple2(28.279, -28.27)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(32.531, -24.55),
									_Utils_Tuple2(36.784, -20.83)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(38.910, -25.40),
									_Utils_Tuple2(41.036, -29.98)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(45.714, -24.98),
									_Utils_Tuple2(50.392, -19.98)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(51.029, -29.76),
									_Utils_Tuple2(51.667, -39.54)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(51.136, -39.54),
									_Utils_Tuple2(50.604, -39.54)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(49.647, -39.12),
									_Utils_Tuple2(48.691, -38.69)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(47.202, -38.16),
									_Utils_Tuple2(45.714, -37.63)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(44.332, -36.78),
									_Utils_Tuple2(42.950, -35.93)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(41.461, -35.29),
									_Utils_Tuple2(39.973, -34.65)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(37.847, -34.12),
									_Utils_Tuple2(35.720, -33.59)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(33.700, -33.06),
									_Utils_Tuple2(31.681, -32.53)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.448, -32.31),
									_Utils_Tuple2(27.215, -32.10)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(25.196, -32),
									_Utils_Tuple2(23.176, -31.89)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(20.093, -31.68),
									_Utils_Tuple2(17.009, -31.46)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(15.308, -31.78),
									_Utils_Tuple2(13.607, -32.10)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(11.481, -32.31),
									_Utils_Tuple2(9.3554, -32.53)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.9734, -33.16),
									_Utils_Tuple2(6.5913, -33.80)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(5.2093, -34.33),
									_Utils_Tuple2(3.8272, -34.87)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.1262, -35.93),
									_Utils_Tuple2(0.4252, -36.99)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-0.212, -37.52),
									_Utils_Tuple2(-0.850, -38.05)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-1.382, -38.37),
									_Utils_Tuple2(-1.913, -38.69)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-1.913, -38.80),
									_Utils_Tuple2(-1.913, -38.91)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-5.315, -32),
									_Utils_Tuple2(-8.717, -25.08)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-7.229, -24.02),
									_Utils_Tuple2(-5.740, -22.96)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-4.146, -22.11),
									_Utils_Tuple2(-2.551, -21.26)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-0.956, -20.30),
									_Utils_Tuple2(0.6378, -19.34)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.4451, -17.75),
									_Utils_Tuple2(4.2524, -16.15)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(5.3156, -14.88),
									_Utils_Tuple2(6.3787, -13.60)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.7607, -12.33),
									_Utils_Tuple2(9.1428, -11.05)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.631, -9.461),
									_Utils_Tuple2(12.119, -7.867)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(14.671, -4.784),
									_Utils_Tuple2(17.222, -1.700)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(12.757, 4.1461),
									_Utils_Tuple2(8.2923, 9.9933)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(8.0797, 10.312),
									_Utils_Tuple2(7.8671, 10.631)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.0199, 13.926),
									_Utils_Tuple2(-3.827, 17.222)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-4.252, 25.621),
									_Utils_Tuple2(-4.677, 34.019)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-4.677, 34.232),
									_Utils_Tuple2(-4.677, 34.445)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-2.764, 34.445),
									_Utils_Tuple2(-0.850, 34.445)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(0.1063, 34.126),
									_Utils_Tuple2(1.0631, 33.807)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.6578, 33.807),
									_Utils_Tuple2(4.2524, 33.807)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(5.4219, 33.382),
									_Utils_Tuple2(6.5913, 32.956)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.9734, 32.637),
									_Utils_Tuple2(9.3554, 32.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(15.840, 31.149),
									_Utils_Tuple2(22.325, 29.980)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(23.069, 29.980),
									_Utils_Tuple2(23.813, 29.980)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(24.877, 30.511),
									_Utils_Tuple2(25.940, 31.043)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.747, 32.425),
									_Utils_Tuple2(29.554, 33.807)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(32.850, 36.358),
									_Utils_Tuple2(36.146, 39.122))
								]))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(12, 23.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(260),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$white,
								$MacCASOutreach$graphicsvg$GraphicSVG$text('0')))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(15, 27),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(245),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$white,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									8,
									$MacCASOutreach$graphicsvg$GraphicSVG$text('1'))))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(17.5, 19.75),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.65))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						1.1,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -5),
							$author$project$DrawMusic$myHair(glowAmount))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						1.1,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -7),
							$author$project$DrawMusic$myHair(glowAmount))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						1.1,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(2, -7),
							$author$project$DrawMusic$myHair(glowAmount))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(9, 34),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1 + glowAmount),
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 8))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(9, 34),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1 + glowAmount),
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 8, 6)))
					]))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$square = function (r) {
	return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rect, r, r);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$lightBlue = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 114, 159, 207, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent = F2(
	function (alpha, shape) {
		switch (shape.$) {
			case 'ForeignObject':
				var w = shape.a;
				var h = shape.b;
				var htm = shape.c;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
			case 'Move':
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Move,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Rotate':
				var r = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
					r,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Scale':
				var sx = shape.a;
				var sy = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
					sx,
					sy,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Skew':
				var skx = shape.a;
				var sky = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
					skx,
					sky,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Transformed':
				var tm = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
					tm,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Group':
				var list = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
					A2(
						$elm$core$List$map,
						$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent(alpha),
						list));
			case 'GroupOutline':
				var cmbndshp = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, cmbndshp));
			case 'Link':
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Link,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'AlphaMask':
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Clip':
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Everything':
				return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
			case 'Notathing':
				return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
			case 'Tap':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'TapAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'EnterShape':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'EnterAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'Exit':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'ExitAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'MouseDown':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'MouseDownAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'MouseUp':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'MouseUpAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'MoveOverAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'TouchStart':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'TouchEnd':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'TouchStartAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'TouchEndAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'TouchMoveAt':
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 'GraphPaper':
				var s = shape.a;
				var th = shape.b;
				var _v9 = shape.c;
				var r = _v9.a;
				var g = _v9.b;
				var b = _v9.c;
				var a = _v9.d;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper,
					s,
					th,
					A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, a * alpha));
			default:
				if (shape.a.$ === 'Just') {
					if (shape.b.$ === 'Just') {
						var _v4 = shape.a.a;
						var r = _v4.a;
						var g = _v4.b;
						var b = _v4.c;
						var a = _v4.d;
						var _v5 = shape.b.a;
						var lineType = _v5.a;
						var _v6 = _v5.b;
						var sr = _v6.a;
						var sg = _v6.b;
						var sb = _v6.c;
						var sa = _v6.d;
						var st = shape.c;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
							$elm$core$Maybe$Just(
								A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, a * alpha)),
							$elm$core$Maybe$Just(
								_Utils_Tuple2(
									lineType,
									A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, sr, sg, sb, sa * alpha))),
							st);
					} else {
						var _v7 = shape.a.a;
						var r = _v7.a;
						var g = _v7.b;
						var b = _v7.c;
						var a = _v7.d;
						var _v8 = shape.b;
						var st = shape.c;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
							$elm$core$Maybe$Just(
								A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, a * alpha)),
							$elm$core$Maybe$Nothing,
							st);
					}
				} else {
					if (shape.b.$ === 'Just') {
						var _v1 = shape.a;
						var _v2 = shape.b.a;
						var lineType = _v2.a;
						var _v3 = _v2.b;
						var sr = _v3.a;
						var sg = _v3.b;
						var sb = _v3.c;
						var sa = _v3.d;
						var st = shape.c;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
							$elm$core$Maybe$Nothing,
							$elm$core$Maybe$Just(
								_Utils_Tuple2(
									lineType,
									A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, sr, sg, sb, sa * alpha))),
							st);
					} else {
						var _v10 = shape.a;
						var _v11 = shape.b;
						var st = shape.c;
						return shape;
					}
				}
		}
	});
var $author$project$DrawMusic$musicText = function (t) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(t),
				$MacCASOutreach$graphicsvg$GraphicSVG$white,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-47.83, 17.130),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-54.30, -2.082),
							_Utils_Tuple2(-58.34, -23.57)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-59.77, -34.52),
							_Utils_Tuple2(-53.59, -21.20)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-46.58, -1.065),
							_Utils_Tuple2(-37.65, 8.3109)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-29.00, 17.207),
							_Utils_Tuple2(-33.24, 2.5441)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-34.77, -3.901),
							_Utils_Tuple2(-36.29, -10.34)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-36.24, -18.77),
							_Utils_Tuple2(-30.86, -11.36)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-27.47, -6.445),
							_Utils_Tuple2(-24.08, -1.526)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-19.65, 1.7893),
							_Utils_Tuple2(-18.65, -6.614)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-18.14, -10.17),
							_Utils_Tuple2(-17.63, -13.73)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-14.42, -20.21),
							_Utils_Tuple2(-8.819, -10.68)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-6.275, -6.614),
							_Utils_Tuple2(-3.731, -2.544)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-7.700, -10.28),
							_Utils_Tuple2(-4.749, -11.70)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(1.9272, -7.555),
							_Utils_Tuple2(7.1236, -0.848)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(5.5452, -5.437),
							_Utils_Tuple2(5.7667, -10.34)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(6.0886, -16.84),
							_Utils_Tuple2(12.890, -10.34)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(15.604, -6.784),
							_Utils_Tuple2(18.318, -3.222)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(18.231, 3.3592),
							_Utils_Tuple2(24.424, 3.9010))
						]))),
				A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(t),
				$MacCASOutreach$graphicsvg$GraphicSVG$white,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(18.657, -3.222),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(22.838, -13.22),
							_Utils_Tuple2(17.978, -23.23)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(12.823, -28.73),
							_Utils_Tuple2(13.908, -20.52)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(15.927, -13.85),
							_Utils_Tuple2(23.067, -11.70)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(27.477, -8.310),
							_Utils_Tuple2(31.886, -4.918)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(33.074, -3.053),
							_Utils_Tuple2(34.261, -1.187)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(32.094, -5.375),
							_Utils_Tuple2(31.886, -11.36)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(32.137, -19.17),
							_Utils_Tuple2(40.028, -11.02)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(45.625, -4.749),
							_Utils_Tuple2(51.222, 1.5265)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(57.229, 5.1031),
							_Utils_Tuple2(53.597, -4.240))
						]))),
				A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(t),
				$MacCASOutreach$graphicsvg$GraphicSVG$white,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(45.455, -4.918),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(41.260, -25.52),
							_Utils_Tuple2(67.505, -2.204))
						]))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(37, 4),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(t),
					$MacCASOutreach$graphicsvg$GraphicSVG$white,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1)))
			]));
};
var $author$project$DrawMusic$music_2 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			$author$project$DrawMusic$musicText(1.5),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
			0.4,
			$author$project$DrawMusic$musicText(2.5)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
			0.2,
			$author$project$DrawMusic$musicText(5.5)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
			0.1,
			$author$project$DrawMusic$musicText(7.5))
		]));
var $author$project$DrawMusic$title = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$move,
	_Utils_Tuple2(0, 37),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.6,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$lightBlue,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
						'impact',
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$size,
							40,
							$MacCASOutreach$graphicsvg$GraphicSVG$centered(
								$MacCASOutreach$graphicsvg$GraphicSVG$text('CREATOR'))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 25),
					$author$project$DrawMusic$music_2)
				]))));
var $author$project$DrawMusic$background = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 71, 171),
			$MacCASOutreach$graphicsvg$GraphicSVG$square(1000)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-83, 9.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
				1.2,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.7, $author$project$DrawMusic$title))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(40, -31.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$white,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 178, 64, 5))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-11.5, 32.25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 75, 62, 5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-26, 58),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 43, 6, 2))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-47, 57),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									4,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
										'Trebuchet MS',
										$MacCASOutreach$graphicsvg$GraphicSVG$text('1. Pick an instrument.')))))))
				])),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(52, 53),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 50, 20, 5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(48, 58),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 40, 6, 2))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(30, 57),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									4,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
										'Trebuchet MS',
										$MacCASOutreach$graphicsvg$GraphicSVG$text('2. Drag notes and...')))))))
				])),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(52, 32.25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 50, 20, 5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(46, 37.25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 35, 6, 2))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(30, 36.25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									4,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
										'Trebuchet MS',
										$MacCASOutreach$graphicsvg$GraphicSVG$text('rests to the staff.')))))))
				])),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(52, 11.25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 50, 20, 5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(52, 16.5),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 47, 6, 2))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(30, 15),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									4,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
										'Trebuchet MS',
										$MacCASOutreach$graphicsvg$GraphicSVG$text('3. Add note dynamics...')))))))
				])),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 21),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(103.5, 23.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 51, 37, 5))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(93.5, 37.25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 27, 6, 2))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(97.5, 19.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 35, 6, 2))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(81, 36),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
								$MacCASOutreach$graphicsvg$GraphicSVG$bold(
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
											'Trebuchet MS',
											$MacCASOutreach$graphicsvg$GraphicSVG$text('accidentals...'))))))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(81, 18),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
								$MacCASOutreach$graphicsvg$GraphicSVG$bold(
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
											'Trebuchet MS',
											$MacCASOutreach$graphicsvg$GraphicSVG$text('and articulations.')))))))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -42),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(103.5, 55),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 51, 24, 5))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(97.5, 62.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 35, 6, 2))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(81, 61.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
								$MacCASOutreach$graphicsvg$GraphicSVG$bold(
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$size,
										4,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
											'Trebuchet MS',
											$MacCASOutreach$graphicsvg$GraphicSVG$text('4. Set the tempo.')))))))
					]))),
			$author$project$DrawMusic$sigma(0)
		]));
var $author$project$DrawMusic$bar = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 46))
		]));
var $author$project$DrawMusic$citeInstrument = function (instrument) {
	var instrumentString = function () {
		switch (instrument.$) {
			case 'Piano':
				return 'Piano';
			case 'Recorder':
				return 'Recorder';
			case 'Flute':
				return 'Flute';
			case 'Bass':
				return 'Bass';
			case 'Violin':
				return 'Violin';
			case 'Trumpet':
				return 'Trumpet';
			case 'Sitar':
				return 'Sitar';
			case 'ElectricGuitar':
				return 'Electric Guitar';
			case 'Marimba':
				return 'Marimba';
			case 'Cello':
				return 'Cello';
			case 'Tuba':
				return 'Tuba';
			default:
				return 'Timpani';
		}
	}();
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					3,
					$MacCASOutreach$graphicsvg$GraphicSVG$centered(
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
							'Trebuchet MS',
							$MacCASOutreach$graphicsvg$GraphicSVG$text(instrumentString)))))
			]));
};
var $author$project$MusicCreator$ClearButtonNo = {$: 'ClearButtonNo'};
var $author$project$MusicCreator$ClearButtonYes = {$: 'ClearButtonYes'};
var $author$project$MusicCreator$TapClearButton = {$: 'TapClearButton'};
var $author$project$MusicCreatorDef$UnFlip = {$: 'UnFlip'};
var $MacCASOutreach$graphicsvg$GraphicSVG$darkBlue = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 32, 74, 135, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$ghost = function (stencil) {
	return A3(
		$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
		$elm$core$Maybe$Just($MacCASOutreach$graphicsvg$GraphicSVG$blank),
		$elm$core$Maybe$Nothing,
		stencil);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$EnterShape, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Exit, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyTap = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Tap, msg, shape);
	});
var $author$project$MusicCreatorDef$Flip = {$: 'Flip'};
var $author$project$DrawMusic$quarterN = F2(
	function (dot, flip) {
		var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.9,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(9.0, 26),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 46)))
				]));
		var dotPost = _Utils_eq(flip, $author$project$MusicCreatorDef$Flip) ? _Utils_Tuple2(-9, 1) : _Utils_Tuple2(9, 1);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, note),
					dot ? A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					dotPost,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
				]));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Sansserif = {$: 'Sansserif'};
var $MacCASOutreach$graphicsvg$GraphicSVG$sansserif = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, $MacCASOutreach$graphicsvg$GraphicSVG$Sansserif, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $author$project$MusicCreator$clearNotesButton = function (model) {
	var yesButton = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-18, 9),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					model.clearBYesZoom,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 102, 255, 102),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 9, 4, 2)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-18, 8),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$bold(
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$size,
							3,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
								'Trebuchet MS',
								$MacCASOutreach$graphicsvg$GraphicSVG$centered(
									$MacCASOutreach$graphicsvg$GraphicSVG$text('YES')))))))
			]));
	var noButton = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-5, 9),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					model.clearBNoZoom,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 0, 0),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 9, 4, 2)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-5, 8),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$bold(
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$size,
							3,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
								'Trebuchet MS',
								$MacCASOutreach$graphicsvg$GraphicSVG$centered(
									$MacCASOutreach$graphicsvg$GraphicSVG$text('NO')))))))
			]));
	var warningPop = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
				0.4,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$lightBlue,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(10, 5),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 130, 20, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-50, 8),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
						'Trebuchet MS',
						$MacCASOutreach$graphicsvg$GraphicSVG$bold(
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$size,
								4,
								$MacCASOutreach$graphicsvg$GraphicSVG$text('Are you sure you would like to clear all the notes on the score?')))))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
				$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$ClearBYesZoom),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
					$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$ClearBYesZoom),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$MusicCreator$ClearButtonYes,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(25, -12),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 1.5, yesButton))))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
				$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$ClearBNoZoom),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
					$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$ClearBNoZoom),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$MusicCreator$ClearButtonNo,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(25, -12),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 1.5, noButton)))))
			]));
	var clearButton = A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(0, 4),
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.7 * model.clearBZoom,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-1, -2),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							0.4,
							A2($author$project$DrawMusic$quarterN, false, $author$project$MusicCreatorDef$UnFlip)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.7 * model.clearBZoom,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, 2),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(20),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$red,
								A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 0.5, 10))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.7 * model.clearBZoom,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, 2),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(-20),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$red,
								A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 0.5, 10))))),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-0.5, -6.5),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								model.clearBZoom,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									$MacCASOutreach$graphicsvg$GraphicSVG$sansserif(
										$MacCASOutreach$graphicsvg$GraphicSVG$centered(
											$MacCASOutreach$graphicsvg$GraphicSVG$bold(
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$size,
													2,
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
														'Trebuchet MS',
														$MacCASOutreach$graphicsvg$GraphicSVG$text('CLR')))))))))
						])),
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 5, 15))
				])));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-42, -53),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
					$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$ClearBZoom),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
						$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$ClearBZoom),
						A2($MacCASOutreach$graphicsvg$GraphicSVG$notifyTap, $author$project$MusicCreator$TapClearButton, clearButton)))),
				model.clearNotes ? warningPop : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
			]));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$clip = F2(
	function (shape1, shape2) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, shape1, shape2);
	});
var $author$project$MusicCreatorFunctions$articulationToString = function (articulation) {
	switch (articulation.$) {
		case 'Staccato':
			return 'staccato';
		case 'Staccatissimo':
			return 'staccatissimo';
		case 'Fermata':
			return 'fermata 4';
		case 'Tenuto':
			return 'tenuto';
		case 'Accent':
			return 'accent';
		case 'Slur':
			return 'slur';
		default:
			return '';
	}
};
var $author$project$MusicCreatorFunctions$dynamicToString = function (dynamic) {
	switch (dynamic.$) {
		case 'PP':
			return 'pianissimo';
		case 'P':
			return 'piano';
		case 'MP':
			return 'mezzoPiano';
		case 'MF':
			return 'mezzoForte';
		case 'F':
			return 'forte';
		case 'FF':
			return 'fortissimo';
		default:
			return '';
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$FixedWidth = {$: 'FixedWidth'};
var $MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, $MacCASOutreach$graphicsvg$GraphicSVG$FixedWidth, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $author$project$MusicCreatorFunctions$ifdottedNote = function (b) {
	switch (b.$) {
		case 'HalfND':
			return true;
		case 'QuarterND':
			return true;
		case 'EighthND':
			return true;
		case 'HalfRD':
			return true;
		case 'QuarterRD':
			return true;
		case 'EighthRD':
			return true;
		default:
			return false;
	}
};
var $author$project$InputKeyAssist$lyricToString = function (list) {
	var stringList = A2(
		$elm$core$List$map,
		function (a) {
			return a.word;
		},
		list);
	return $elm$core$String$concat(stringList);
};
var $author$project$MusicCreatorFunctions$pitchToString = function (pitch) {
	switch (pitch.$) {
		case 'Do':
			return 'do';
		case 'Re':
			return 're';
		case 'Mi':
			return 'mi';
		case 'Fa':
			return 'fa';
		case 'Sol':
			return 'sol';
		case 'La':
			return 'la';
		case 'Ti':
			return 'ti';
		case 'Rest':
			return 'rest';
		case 'OctaveUp':
			var p = pitch.a;
			return $author$project$MusicCreatorFunctions$pitchToString(p) + ' |> raiseOctave';
		case 'OctaveDown':
			var p = pitch.a;
			return $author$project$MusicCreatorFunctions$pitchToString(p) + ' |> lowerOctave ';
		case 'Sharp':
			switch (pitch.a.$) {
				case 'Do':
					var _v1 = pitch.a;
					return 'di';
				case 'Re':
					var _v2 = pitch.a;
					return 'ri';
				case 'Fa':
					var _v5 = pitch.a;
					return 'fi';
				case 'Sol':
					var _v6 = pitch.a;
					return 'si';
				case 'La':
					var _v8 = pitch.a;
					return 'li';
				default:
					var p = pitch.a;
					return $author$project$MusicCreatorFunctions$pitchToString(p) + ' |> sharp';
			}
		case 'Natural':
			var p = pitch.a;
			return $author$project$MusicCreatorFunctions$pitchToString(p) + ' |> natural';
		default:
			switch (pitch.a.$) {
				case 'Re':
					var _v3 = pitch.a;
					return 'ra';
				case 'Mi':
					var _v4 = pitch.a;
					return 'me';
				case 'Sol':
					var _v7 = pitch.a;
					return 'se';
				case 'La':
					var _v9 = pitch.a;
					return 'le';
				case 'Ti':
					var _v10 = pitch.a;
					return 'te';
				default:
					var p = pitch.a;
					return $author$project$MusicCreatorFunctions$pitchToString(p) + ' |> flat';
			}
	}
};
var $author$project$MusicCreatorFunctions$swiftArt = function (list) {
	if (!list.b) {
		return _List_Nil;
	} else {
		if (!list.b.b) {
			var x = list.a;
			return _List_fromArray(
				[x]);
		} else {
			var _v1 = list.a;
			var name1 = _v1.a;
			var x1 = _v1.b;
			var _v2 = list.b;
			var _v3 = _v2.a;
			var name2 = _v3.a;
			var x2 = _v3.b;
			var xs = _v2.b;
			var functionX2 = x2._function;
			var new_function_x2 = _Utils_update(
				functionX2,
				{articulation: x1._function.articulation});
			var functionX1 = x1._function;
			var new_function_x1 = _Utils_update(
				functionX1,
				{articulation: $author$project$MusicCreatorDef$defselectArticulation});
			return (_Utils_eq(x1._function.tie, $author$project$MusicCreatorDef$TieS) && (!_Utils_eq(x1._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation))) ? A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					name1,
					_Utils_update(
						x1,
						{_function: new_function_x1})),
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						name2,
						_Utils_update(
							x2,
							{_function: new_function_x2})),
					$author$project$MusicCreatorFunctions$swiftArt(xs))) : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(name1, x1),
				$author$project$MusicCreatorFunctions$swiftArt(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(name2, x2),
						xs)));
		}
	}
};
var $author$project$MusicCreatorFunctions$tieToString = function (tie) {
	switch (tie.$) {
		case 'TieS':
			return 'tie';
		case 'TieE':
			return '';
		default:
			return '';
	}
};
var $author$project$MusicCreator$codeHelper = F2(
	function (clef, listOfNote) {
		var ifdotted = function (b) {
			return $author$project$MusicCreatorFunctions$ifdottedNote(b.note) ? ' |> dot 1' : '';
		};
		var addTie = function (tie) {
			return _Utils_eq(tie, $author$project$MusicCreatorDef$TieS) ? (' ' + ('|> ' + $author$project$MusicCreatorFunctions$tieToString(tie))) : '';
		};
		var addLyric = function (lyric) {
			return (lyric !== '') ? (' ' + ('|> sing ' + ('\"' + (lyric + '\"')))) : '';
		};
		var addDynamic = function (dynamic) {
			return (!_Utils_eq(dynamic, $author$project$MusicCreatorDef$NoDynamic)) ? (' ' + ('|> ' + $author$project$MusicCreatorFunctions$dynamicToString(dynamic))) : '';
		};
		var addArticulation = function (articulation) {
			return (!_Utils_eq(articulation, $author$project$MusicCreatorDef$NoArticulation)) ? (' ' + ('|> ' + $author$project$MusicCreatorFunctions$articulationToString(articulation))) : '';
		};
		var toElmMusicCodeRaw = function () {
			var toCode = F2(
				function (b, noteWAcc) {
					return $author$project$MusicCreatorFunctions$pitchToString(
						A3($author$project$MusicCreatorFunctions$toMusicPitch, noteWAcc, b.note, clef));
				});
			return A2(
				$elm$core$List$indexedMap,
				$elm$core$Tuple$pair,
				A3(
					$elm$core$List$map2,
					F2(
						function (_v1, noteWAcc) {
							var name = _v1.a;
							var b = _v1.b;
							return $author$project$MusicCreatorFunctions$noteToString(b.note) + (' ' + (A2(toCode, b, noteWAcc) + (ifdotted(b) + (addDynamic(b._function.dynamic.f) + (addArticulation(b._function.articulation.f) + (addTie(b._function.tie) + addLyric(
								$author$project$InputKeyAssist$lyricToString(b._function.lyric))))))));
						}),
					$author$project$MusicCreatorFunctions$swiftArt(listOfNote),
					$author$project$MusicCreatorFunctions$getNotePosLWithAccidential(
						$author$project$MusicCreatorFunctions$getNoteL(listOfNote))));
		}();
		var toElmMusicCode = function (list) {
			return A2(
				$elm$core$List$append,
				list,
				_List_fromArray(
					[']]']));
		}(
			function (list) {
				return A2(
					$elm$core$List$append,
					list,
					_List_fromArray(
						['        ]']));
			}(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var index = _v0.a;
						var codeX = _v0.b;
						return (!index) ? ('    ' + codeX) : ('  , ' + codeX);
					},
					toElmMusicCodeRaw)));
		return A3(
			$elm$core$List$map2,
			F2(
				function (a, b) {
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-15, 20 - (3.6 * b)),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									3,
									$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
										$MacCASOutreach$graphicsvg$GraphicSVG$text(a))))));
				}),
			toElmMusicCode,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(toElmMusicCode)));
	});
var $author$project$MusicCreatorFunctions$instrumentToString = function (instrument) {
	switch (instrument.$) {
		case 'Piano':
			return 'Piano';
		case 'Recorder':
			return 'Recorder';
		case 'Flute':
			return 'Flute';
		case 'Bass':
			return 'Bass';
		case 'Violin':
			return 'Violin';
		case 'Trumpet':
			return 'Trumpet';
		case 'Sitar':
			return 'Sitar';
		case 'ElectricGuitar':
			return 'ElectricGuitar';
		case 'Marimba':
			return 'Marimba';
		case 'Cello':
			return 'Cello';
		case 'Tuba':
			return 'Tuba';
		default:
			return 'Timpani';
	}
};
var $author$project$MusicCreatorFunctions$tsToString = function (ts) {
	switch (ts.$) {
		case 'Ts44':
			return 'FourFour';
		case 'Ts34':
			return 'ThreeFour';
		default:
			return 'TwoFour';
	}
};
var $author$project$MusicCreator$code = F5(
	function (clef, listOfNote, instrument, ts, tempo) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-15, 46),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$size,
							3,
							$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
								$MacCASOutreach$graphicsvg$GraphicSVG$text('tempoInBPM = '))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(8, 46),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$size,
								3,
								$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
									$MacCASOutreach$graphicsvg$GraphicSVG$text(
										$elm$core$Debug$toString(tempo))))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-15, 42),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$size,
							3,
							$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
								$MacCASOutreach$graphicsvg$GraphicSVG$text('myMusic = '))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-15, 38),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$size,
								3,
								$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
									$MacCASOutreach$graphicsvg$GraphicSVG$text(
										'Music ' + ($author$project$MusicCreatorFunctions$instrumentToString(instrument) + (' ' + $author$project$MusicCreatorFunctions$tsToString(ts))))))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-15, 33),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$size,
								3,
								$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
									$MacCASOutreach$graphicsvg$GraphicSVG$text('[[')))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-15, 28),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$size,
								3,
								$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
									$MacCASOutreach$graphicsvg$GraphicSVG$text('Measure [')))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 4),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
						A2(
							$author$project$MusicCreator$codeHelper,
							clef,
							$author$project$MusicCreator$clearEmpty(listOfNote))))
				]));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$gray = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 211, 215, 207, 1);
var $author$project$DragBarAssit$moveY = 5;
var $author$project$DragBarAssit$dragBarCircle = F2(
	function (pos, zoomCircle) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$gray,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2((0 + $author$project$DragBarAssit$originalPosX) + pos, $author$project$DragBarAssit$moveY),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							$author$project$DragBarAssit$scaleTemp,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								zoomCircle,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))))))
				]));
	});
var $author$project$DragBarAssit$dragbar = F2(
	function (pos, tempo) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2($author$project$DragBarAssit$originalPosX, $author$project$DragBarAssit$moveY),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				$author$project$DragBarAssit$scaleTemp,
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(18, 0),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$gray,
								A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, $author$project$DragBarAssit$barW, 1))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, 10),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
									$MacCASOutreach$graphicsvg$GraphicSVG$text(
										$elm$core$Debug$toString(
											$author$project$DragBarAssit$currentTemp(pos + $author$project$DragBarAssit$originalPosX)))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(20, 10),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									6,
									$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
										$MacCASOutreach$graphicsvg$GraphicSVG$text(' ' + 'BPM')))))
						]))));
	});
var $author$project$DrawMusic$flat = function () {
	var svgFlat = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(43.341, -51.44),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(43.341, -52.79),
							_Utils_Tuple2(43.341, -54.14)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(43.611, -54.14),
							_Utils_Tuple2(43.881, -54.14)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(56.843, -42.55),
							_Utils_Tuple2(69.805, -34.97)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(88.406, -22.00),
							_Utils_Tuple2(80.607, -9.046)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(73.670, 0.3189),
							_Utils_Tuple2(58.734, -3.915)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(54.278, -5.481),
							_Utils_Tuple2(49.822, -9.046)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(48.337, -9.856),
							_Utils_Tuple2(46.852, -10.66)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(47.122, -15.39),
							_Utils_Tuple2(47.392, -20.11)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(57.178, -2.412),
							_Utils_Tuple2(66.565, -13.90)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(70.555, -19.99),
							_Utils_Tuple2(64.945, -27.67)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(56.898, -38.25),
							_Utils_Tuple2(46.852, -44.42)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(45.637, -46.04),
							_Utils_Tuple2(43.341, -51.44))
						]))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(49.822, -45.77),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(49.822, 4.4556),
							_Utils_Tuple2(49.822, 54.683)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(46.447, 54.683),
							_Utils_Tuple2(43.071, 54.683)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(43.206, 0),
							_Utils_Tuple2(43.341, -54.68)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(46.447, -50.49),
							_Utils_Tuple2(49.822, -45.77))
						])))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-11, 4),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.19, svgFlat))
			]));
}();
var $author$project$DrawMusic$natural = function () {
	var svgNatural = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-4.995, 42.531),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-3.375, 42.531),
							_Utils_Tuple2(-1.755, 42.531)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-1.620, 19.172),
							_Utils_Tuple2(-1.485, -4.185)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(4.8607, -2.025),
							_Utils_Tuple2(11.206, 0.1350)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(11.341, -5.265),
							_Utils_Tuple2(11.476, -10.66)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(3.3755, -12.55),
							_Utils_Tuple2(-4.725, -14.44)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-4.725, 13.772),
							_Utils_Tuple2(-4.995, 42.531))
						]))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-2.295, 20.388),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(5.4008, 22.413),
							_Utils_Tuple2(13.097, 24.438)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(13.097, -3.645),
							_Utils_Tuple2(13.097, -31.72)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(11.476, -31.72),
							_Utils_Tuple2(9.8565, -31.72)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(9.9915, -9.181),
							_Utils_Tuple2(10.126, 13.367)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(3.9156, 11.881),
							_Utils_Tuple2(-2.295, 10.396)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-2.295, 14.852),
							_Utils_Tuple2(-2.295, 20.388))
						])))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-1, -1),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.3, svgNatural))
			]));
}();
var $author$project$DrawMusic$sharp = function () {
	var svgSharp = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-55.22, 23.898),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-55.22, 16.607),
							_Utils_Tuple2(-55.22, 9.3164)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-35.51, 15.527),
							_Utils_Tuple2(-15.79, 21.738)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-15.93, 29.029),
							_Utils_Tuple2(-16.06, 36.320)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-35.37, 29.974),
							_Utils_Tuple2(-55.22, 23.898))
						]))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -41),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-55.22, 23.898),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-55.22, 16.607),
								_Utils_Tuple2(-55.22, 9.3164)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-35.51, 15.527),
								_Utils_Tuple2(-15.79, 21.738)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-15.93, 29.029),
								_Utils_Tuple2(-16.06, 36.320)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-35.37, 29.974),
								_Utils_Tuple2(-55.22, 23.898))
							])))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-45, 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 3.5, 104))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-27, 4),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 3.5, 104)))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(6.5, 0),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.18, svgSharp))
			]));
}();
var $author$project$MusicCreatorFunctions$drawAccidental = function (accidental) {
	switch (accidental.$) {
		case 'NoAccidental':
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		case 'Sharp':
			return $author$project$DrawMusic$sharp;
		case 'Flat':
			return $author$project$DrawMusic$flat;
		default:
			return $author$project$DrawMusic$natural;
	}
};
var $author$project$MusicCreator$SlurTap = function (a) {
	return {$: 'SlurTap', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$MouseDown, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt, msg, shape);
	});
var $author$project$MusicCreator$drawAndPop = F4(
	function (list, scaleSize, f, t) {
		var ifscale = function (b) {
			return _Utils_eq(b.dragState, $author$project$MusicCreatorDef$Released) ? scaleSize : 1;
		};
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var b = _v0.b;
					return $MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
								$author$project$MusicCreator$SlurTap(t),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
									A2($author$project$MusicCreator$ChangeDragStateF, name, t),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										b.pos,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$scale,
											ifscale(b),
											f(b.f)))))
							]));
				},
				list));
	});
var $author$project$DrawMusic$accent = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -1),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(15),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 8, 1)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 1),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-15),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 8, 1))))
		]));
var $author$project$DrawMusic$fermata = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -1),
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(5))),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 0.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))
		]));
var $author$project$DrawMusic$slurIcon = function () {
	var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(25),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(9.9, 33),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 60)))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(6, 4),
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 19, 19))),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.2, note),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(10, 0),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.2, note)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -2),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(0, -1),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(5, -6),
								_Utils_Tuple2(10, -1))
							]))))
			]));
}();
var $author$project$DrawMusic$staccatissimo = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 2),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(2)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, -2.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(-90),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
								0.81,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
									1.5,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$black,
										$MacCASOutreach$graphicsvg$GraphicSVG$triangle(3))))))
					])))
		]));
var $author$project$DrawMusic$staccato = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))
		]));
var $author$project$DrawMusic$tenuto = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 1))
		]));
var $author$project$MusicCreatorFunctions$drawArticulation = function (articulation) {
	switch (articulation.$) {
		case 'Staccato':
			return $author$project$DrawMusic$staccato;
		case 'Staccatissimo':
			return $author$project$DrawMusic$staccatissimo;
		case 'Fermata':
			return $author$project$DrawMusic$fermata;
		case 'Tenuto':
			return $author$project$DrawMusic$tenuto;
		case 'Accent':
			return $author$project$DrawMusic$accent;
		case 'Slur':
			return $author$project$DrawMusic$slurIcon;
		default:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
	}
};
var $author$project$DrawMusic$bass = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$move,
	_Utils_Tuple2(0, -3),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.4,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-47.15, -61.17),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-57.60, -65.40),
								_Utils_Tuple2(-48.05, -57.55)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-39.34, -50.77),
								_Utils_Tuple2(-30.64, -43.98)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-17.20, -33.34),
								_Utils_Tuple2(-8.254, -19.33)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(2.7277, 0.3976),
								_Utils_Tuple2(1.4699, 21.371)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-0.576, 33.943),
								_Utils_Tuple2(-10.74, 39.915)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-20.86, 44.503),
								_Utils_Tuple2(-32.90, 38.332)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-41.86, 32.658),
								_Utils_Tuple2(-40.81, 27.024)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-41.19, 25.187),
								_Utils_Tuple2(-36.97, 24.989)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-31.20, 25.870),
								_Utils_Tuple2(-25.44, 23.632)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-15.44, 16.251),
								_Utils_Tuple2(-22.72, 7.3498)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-32.11, 1.5783),
								_Utils_Tuple2(-41.49, 5.7667)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-52.08, 12.175),
								_Utils_Tuple2(-49.18, 21.823)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-48.59, 30.504),
								_Utils_Tuple2(-39.91, 38.106)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-28.87, 47.016),
								_Utils_Tuple2(-14.58, 46.247)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-0.748, 46.518),
								_Utils_Tuple2(10.289, 36.749)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(20.858, 25.074),
								_Utils_Tuple2(20.466, 9.1590)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(19.711, -4.862),
								_Utils_Tuple2(9.8374, -18.88)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-2.467, -34.49),
								_Utils_Tuple2(-20.69, -46.02)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-33.01, -53.14),
								_Utils_Tuple2(-47.15, -61.17))
							]))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(35, 27),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(8))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(35, -2),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(8)))
				]))));
var $author$project$DrawMusic$treble = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-0.728, 3.7325),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-3.144, 9.1121),
						_Utils_Tuple2(-3.641, 15.931)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-4.560, 26.939),
						_Utils_Tuple2(0, 34.867)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(3.9463, 40.287),
						_Utils_Tuple2(6.3726, 36.506)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.3893, 33.411),
						_Utils_Tuple2(9.2859, 30.315)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(11.545, 19.765),
						_Utils_Tuple2(9.2859, 12.654)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(7.2181, 4.9374),
						_Utils_Tuple2(0.9103, -0.819)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-6.496, -5.883),
						_Utils_Tuple2(-10.74, -13.74)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-16.40, -22.52),
						_Utils_Tuple2(-11.10, -29.58)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-4.969, -39.51),
						_Utils_Tuple2(7.6472, -36.32)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(16.670, -31.04),
						_Utils_Tuple2(11.652, -20.84)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.0968, -15.15),
						_Utils_Tuple2(1.8207, -17.38)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-7.145, -23.93),
						_Utils_Tuple2(0.7283, -31.04)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.6103, -31.93),
						_Utils_Tuple2(1.0924, -31.95)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-2.411, -31.72),
						_Utils_Tuple2(-4.916, -27.58)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-9.301, -20.81),
						_Utils_Tuple2(-2.366, -12.83)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(4.4608, -7.690),
						_Utils_Tuple2(11.288, -11.74)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(20.221, -19.21),
						_Utils_Tuple2(17.115, -29.40)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(13.768, -36.71),
						_Utils_Tuple2(5.4623, -38.50)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-4.830, -40.63),
						_Utils_Tuple2(-12.56, -31.04)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-19.93, -22.06),
						_Utils_Tuple2(-16.02, -12.29)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-13.54, -3.205),
						_Utils_Tuple2(-4.551, 4.2788)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.3993, 9.6494),
						_Utils_Tuple2(6.1906, 16.660)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.506, 28.810),
						_Utils_Tuple2(5.4623, 29.041)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.5869, 29.399),
						_Utils_Tuple2(-0.728, 21.758)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-2.980, 13.581),
						_Utils_Tuple2(0.7283, 6.6458)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(0.2731, 5.4623),
						_Utils_Tuple2(-0.728, 3.7325))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-1.092, 1.7297),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(0.6372, -6.463),
						_Utils_Tuple2(2.3669, -14.65)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(4.7339, -25.94),
						_Utils_Tuple2(7.1009, -37.23)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(7.8293, -40.60),
						_Utils_Tuple2(8.5576, -43.97)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.591, -53.93),
						_Utils_Tuple2(7.4651, -56.53)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.1697, -62.53),
						_Utils_Tuple2(-4.005, -57.44)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(3.8192, -55.72),
						_Utils_Tuple2(0.3641, -48.15)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-3.459, -43.81),
						_Utils_Tuple2(-7.283, -47.43)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-11.19, -51.70),
						_Utils_Tuple2(-8.739, -55.98)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-6.887, -59.99),
						_Utils_Tuple2(-1.274, -61.45)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.4788, -62.42),
						_Utils_Tuple2(9.8321, -55.80)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(11.436, -51.24),
						_Utils_Tuple2(10.560, -45.61)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(9.6500, -41.42),
						_Utils_Tuple2(8.7396, -37.23)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.6458, -26.94),
						_Utils_Tuple2(4.5519, -16.66)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.6401, -6.554),
						_Utils_Tuple2(0.7283, 3.5504)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(0, 2.9132),
						_Utils_Tuple2(-1.092, 1.7297))
					])))
		]));
var $author$project$MusicCreatorFunctions$drawClef = function (clef) {
	if (clef.$ === 'TrebleClef') {
		return $author$project$DrawMusic$treble;
	} else {
		return $author$project$DrawMusic$bass;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$italic = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, true, u, s, sel, f, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$serif = function (stencil) {
	if (stencil.$ === 'Text') {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, $MacCASOutreach$graphicsvg$GraphicSVG$Serif, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $author$project$DrawMusic$drawDynamic = function (dynamic) {
	var dynamicString = function () {
		switch (dynamic.$) {
			case 'PP':
				return 'pp';
			case 'P':
				return 'p';
			case 'MP':
				return 'mp';
			case 'MF':
				return 'mf';
			case 'F':
				return 'f';
			case 'FF':
				return 'ff';
			default:
				return '';
		}
	}();
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 15, 15)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -2.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$serif(
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$size,
							12,
							$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
								$MacCASOutreach$graphicsvg$GraphicSVG$centered(
									$MacCASOutreach$graphicsvg$GraphicSVG$italic(
										$MacCASOutreach$graphicsvg$GraphicSVG$bold(
											$MacCASOutreach$graphicsvg$GraphicSVG$text(dynamicString)))))))))
			]));
};
var $author$project$MusicCreator$drawExtraLine = F2(
	function (pos, state) {
		var newPos = (_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) ? _Utils_Tuple2(pos.a, pos.b - 7) : _Utils_Tuple2(pos.a, pos.b + 7);
		var line = F2(
			function (pos1, num) {
				return (_Utils_cmp(pos1.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) ? A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(pos1.a, (14 + $author$project$MusicCreatorDef$moveYscore) + (7 * num)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 0.5))) : A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(pos1.a, ((-14) + $author$project$MusicCreatorDef$moveYscore) - (7 * num)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 0.5)));
			});
		return ((_Utils_cmp(pos.b, (-36) + $author$project$MusicCreatorDef$moveYscore) > -1) && ((_Utils_cmp(pos.b, 50 + $author$project$MusicCreatorDef$moveYscore) < 1) && _Utils_eq(state, $author$project$MusicCreatorDef$Dragging))) ? (((_Utils_cmp(pos.b, 14 + $author$project$MusicCreatorDef$moveYscore) > 0) || (_Utils_cmp(pos.b, (-14) + $author$project$MusicCreatorDef$moveYscore) < 0)) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					line,
					pos,
					$elm$core$Basics$floor(
						($elm$core$Basics$abs(pos.b - $author$project$MusicCreatorDef$moveYscore) - 14) / 7)),
					A2($author$project$MusicCreator$drawExtraLine, newPos, state)
				])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$mirrorX = function (shape) {
	return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, -1, 1, shape);
};
var $author$project$DrawMusic$eighthN = F2(
	function (flip, dot) {
		var flag = $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(23.088, 48.202),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.493, 48.202),
								_Utils_Tuple2(23.898, 48.202)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(26.854, 38.301),
								_Utils_Tuple2(33.890, 32)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(39.335, 26.123),
								_Utils_Tuple2(39.021, 18.767)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(38.575, 12.972),
								_Utils_Tuple2(36.050, 8.7763)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(35.240, 8.5063),
								_Utils_Tuple2(34.430, 8.2362)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(34.565, 8.9113),
								_Utils_Tuple2(34.700, 9.5864)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(36.770, 15.057),
								_Utils_Tuple2(36.320, 22.008)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(34.534, 31.649),
								_Utils_Tuple2(24.708, 32.810)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.898, 32.945),
								_Utils_Tuple2(23.088, 33.080)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.223, 40.236),
								_Utils_Tuple2(23.088, 48.202))
							])))
				]));
		var note = function () {
			var flagNor = A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-14.0, 0),
				flag);
			var flagFlip = $MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-18, 0),
					flagNor));
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							0.9,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15)))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(9.0, 26),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 46))),
						_Utils_eq(flip, $author$project$MusicCreatorDef$Flip) ? flagFlip : flagNor
					]));
		}();
		var dotPost = _Utils_eq(flip, $author$project$MusicCreatorDef$Flip) ? _Utils_Tuple2(-9, 1) : _Utils_Tuple2(9, 1);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, note),
					dot ? A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					dotPost,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
				]));
	});
var $author$project$DrawMusic$eighthR = function (dot) {
	var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(7.6962, 33.350),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(9.4514, 34.745),
							_Utils_Tuple2(11.206, 32.540)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(1.4852, -0.675),
							_Utils_Tuple2(-8.236, -33.89)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-14.57, -37.50),
							_Utils_Tuple2(-17.14, -34.16)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-7.966, -8.371),
							_Utils_Tuple2(1.2151, 17.417)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-19.61, 9.0579),
							_Utils_Tuple2(-27.40, 20.658)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-33.47, 31.949),
							_Utils_Tuple2(-20.65, 37.400)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-14.68, 39.810),
							_Utils_Tuple2(-9.586, 33.620)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-6.726, 28.894),
							_Utils_Tuple2(-6.345, 24.168)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-3.745, 20.268),
							_Utils_Tuple2(0.1350, 24.168)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(3.6455, 28.354),
							_Utils_Tuple2(7.6962, 33.350))
						])))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.18, note),
				dot ? A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(5, 1),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
			]));
};
var $author$project$DrawMusic$halfN = F2(
	function (dot, flip) {
		var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(30),
						$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 19, 7))),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(9.9, 29),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 52)))
				]));
		var dotPost = _Utils_eq(flip, $author$project$MusicCreatorDef$Flip) ? _Utils_Tuple2(-9, 1) : _Utils_Tuple2(9, 1);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.45, note),
					dot ? A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					dotPost,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
				]));
	});
var $author$project$DrawMusic$halfR = function (dot) {
	var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 14, 5)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -2),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 19, 2)))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, note),
				dot ? A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(9, -0.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
			]));
};
var $author$project$DrawMusic$quarterR = function (dot) {
	var note = A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		3,
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-35, -15),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(34.160, 30.919),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(32.895, 32.009),
									_Utils_Tuple2(33.350, 30.379)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(35.490, 26.919),
									_Utils_Tuple2(35.510, 24.978)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(33.620, 22.388),
									_Utils_Tuple2(31.729, 20.118)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(34.160, 16.877),
									_Utils_Tuple2(36.590, 13.637)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(26.455, 13.091),
									_Utils_Tuple2(36.320, 4.1856)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(30.821, 12.051),
									_Utils_Tuple2(40.641, 10.396)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(38.751, 12.962),
									_Utils_Tuple2(36.860, 15.527)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(35.465, 20.288),
									_Utils_Tuple2(39.831, 23.088)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(37.400, 26.599),
									_Utils_Tuple2(34.160, 30.919))
								])))
					]))));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.25, note),
				dot ? A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(9, 1),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
			]));
};
var $author$project$DrawMusic$sixteenthN = function (flip) {
	var flag2 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.55,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-0.184, 55.121),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(1.4797, 55.028),
								_Utils_Tuple2(3.1445, 54.936)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(2.1884, 43.685),
								_Utils_Tuple2(16.832, 34.034)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(28.291, 23.611),
								_Utils_Tuple2(30.150, 9.9884)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(30.225, 4.4994),
								_Utils_Tuple2(28.300, -2.589)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(34.040, -14.42),
								_Utils_Tuple2(29.780, -26.26)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(27.745, -30.70),
								_Utils_Tuple2(25.710, -35.14)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(24.786, -34.77),
								_Utils_Tuple2(23.861, -34.40)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(32.923, -14.71),
								_Utils_Tuple2(24.786, -4.624)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(18.365, 2.2520),
								_Utils_Tuple2(3.1445, 10.728)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(1.9421, 10.450),
								_Utils_Tuple2(0.7398, 10.173)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(0.8323, 23.491),
								_Utils_Tuple2(0.9248, 36.809)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(1.7572, 35.606),
								_Utils_Tuple2(2.5895, 34.404)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(3.6508, 22.211),
								_Utils_Tuple2(18.312, 9.6184)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.781, 5.0867),
								_Utils_Tuple2(26.450, 0.5549)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(28.764, 12.947),
								_Utils_Tuple2(16.277, 25.341)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(10.526, 30.765),
								_Utils_Tuple2(2.7745, 34.589)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(1.5722, 35.976),
								_Utils_Tuple2(0.3699, 37.364)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(0.5549, 45.502),
								_Utils_Tuple2(-0.184, 55.121))
							]))))
			]));
	var note = function () {
		var flagNor = A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(8.0, 20),
			flag2);
		var flagFlip = $MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-18, 0),
				flagNor));
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.9,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(9.0, 26),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 46))),
					_Utils_eq(flip, $author$project$MusicCreatorDef$Flip) ? flagFlip : flagNor
				]));
	}();
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, note)
			]));
};
var $author$project$DrawMusic$sixteenthR = function () {
	var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-14.56, -50.34),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-12.38, -50.43),
							_Utils_Tuple2(-10.19, -50.52)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(2.0028, -7.465),
							_Utils_Tuple2(14.201, 35.596)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(13.109, 35.687),
							_Utils_Tuple2(12.017, 35.778)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(1.4029, 22.219),
							_Utils_Tuple2(-2.731, 25.581)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-0.196, 33.321),
							_Utils_Tuple2(-5.462, 37.780)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-10.42, 41.367),
							_Utils_Tuple2(-16.38, 37.234)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-21.48, 32.268),
							_Utils_Tuple2(-18.38, 25.581)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-15.58, 20.826),
							_Utils_Tuple2(-8.375, 19.391)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-0.621, 19.356),
							_Utils_Tuple2(6.3726, 23.761)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(2.9132, 11.379),
							_Utils_Tuple2(-0.546, -1.001)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-9.179, -8.617),
							_Utils_Tuple2(-11.65, -5.553)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-9.034, 0.4241),
							_Utils_Tuple2(-13.65, 6.2816)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-19.39, 11.039),
							_Utils_Tuple2(-25.12, 5.9174)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-31.35, -1.139),
							_Utils_Tuple2(-25.85, -7.556)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-20.10, -13.34),
							_Utils_Tuple2(-10.19, -10.65)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-6.181, -8.981),
							_Utils_Tuple2(-2.366, -7.192)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-8.284, -28.40),
							_Utils_Tuple2(-14.56, -50.34))
						]))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-10.2, 30),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(9.6))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-19, -1),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(9.6)))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.18, note)
			]));
}();
var $author$project$DrawMusic$wholeN = function () {
	var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(30),
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 35))),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 50, 40)))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.18, note)
			]));
}();
var $author$project$DrawMusic$wholeR = function () {
	var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 14, 5)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 2),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 19, 2)))
			]));
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20)),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, note)
			]));
}();
var $author$project$MusicCreatorFunctions$whichNote = F2(
	function (notes, flip) {
		switch (notes.$) {
			case 'Empty':
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
			case 'WholeN':
				return $author$project$DrawMusic$wholeN;
			case 'HalfN':
				return A2($author$project$DrawMusic$halfN, false, flip);
			case 'QuarterN':
				return A2($author$project$DrawMusic$quarterN, false, flip);
			case 'EighthN':
				return A2($author$project$DrawMusic$eighthN, flip, false);
			case 'SixteenthN':
				return $author$project$DrawMusic$sixteenthN(flip);
			case 'WholeR':
				return $author$project$DrawMusic$wholeR;
			case 'HalfR':
				return $author$project$DrawMusic$halfR(false);
			case 'QuarterR':
				return $author$project$DrawMusic$quarterR(false);
			case 'EighthR':
				return $author$project$DrawMusic$eighthR(false);
			case 'SixteenthR':
				return $author$project$DrawMusic$sixteenthR;
			case 'HalfND':
				return A2($author$project$DrawMusic$halfN, true, flip);
			case 'QuarterND':
				return A2($author$project$DrawMusic$quarterN, true, flip);
			case 'EighthND':
				return A2($author$project$DrawMusic$eighthN, flip, true);
			case 'HalfRD':
				return $author$project$DrawMusic$halfR(true);
			case 'QuarterRD':
				return $author$project$DrawMusic$quarterR(true);
			default:
				return $author$project$DrawMusic$eighthR(true);
		}
	});
var $author$project$MusicCreator$drawNotesWithExtraLinePop = F2(
	function (listOfNote, scaleSize) {
		var ifscale = function (b) {
			return _Utils_eq(b.dragState, $author$project$MusicCreatorDef$Released) ? scaleSize : 1;
		};
		var ifRotate = F3(
			function (pos, state, note) {
				return ((_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) && (_Utils_eq(state, $author$project$MusicCreatorDef$Dragging) && (!$author$project$MusicCreatorDef$ifRest(note)))) ? $MacCASOutreach$graphicsvg$GraphicSVG$rotate(
					$elm$core$Basics$degrees(180)) : $MacCASOutreach$graphicsvg$GraphicSVG$rotate(
					$elm$core$Basics$degrees(0));
			});
		var ifFlip = F2(
			function (pos, state) {
				return ((_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) && _Utils_eq(state, $author$project$MusicCreatorDef$Dragging)) ? $author$project$MusicCreatorDef$Flip : $author$project$MusicCreatorDef$UnFlip;
			});
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var b = _v0.b;
					return $MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2($author$project$MusicCreator$drawExtraLine, b.pos, b.dragState),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
								$author$project$MusicCreator$ChangeDragState(name),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									b.pos,
									A4(
										ifRotate,
										b.pos,
										b.dragState,
										b.note,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$scale,
											ifscale(b),
											A2(
												$author$project$MusicCreatorFunctions$whichNote,
												b.note,
												A2(ifFlip, b.pos, b.dragState))))))
							]));
				},
				listOfNote));
	});
var $author$project$MusicCreator$TapList = F2(
	function (a, b) {
		return {$: 'TapList', a: a, b: b};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$MusicCreator$displayClickableBar = F2(
	function (list, time) {
		var pos = A3(
			$elm$core$List$map2,
			F2(
				function (a, num) {
					return _Utils_Tuple2(a.selected, (-3) + ($author$project$MusicCreator$wordWidth * num));
				}),
			list,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(list)));
		var filter = A2(
			$elm$core$List$filter,
			function (_v2) {
				var a = _v2.a;
				var b = _v2.b;
				return a;
			},
			pos);
		if (filter.b && (!filter.b.b)) {
			var _v1 = filter.a;
			var a = _v1.a;
			var b = _v1.b;
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(b + 6, 3),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A4(
								$MacCASOutreach$graphicsvg$GraphicSVG$rgba,
								0,
								0,
								0,
								$elm$core$Basics$sin((5 * time) - 0.5)),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 0.5, 11)))
					]));
		} else {
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		}
	});
var $author$project$InputKeyAssist$moveLyric = F2(
	function (list, wordSize) {
		return wordSize * ((($elm$core$List$length(list) / 2) | 0) - 0.5);
	});
var $author$project$MusicCreator$displayLyricList = F3(
	function (list, noteName, time) {
		var moveLyric = ($elm$core$List$length(list) === 1) ? _Utils_Tuple2(0, 0) : _Utils_Tuple2(
			-A2($author$project$InputKeyAssist$moveLyric, list, $author$project$MusicCreator$wordWidth),
			0);
		var ifClick = A2(
			$elm$core$List$any,
			function (a) {
				return a.selected;
			},
			list);
		var displayTapBox = $elm$core$List$concat(
			A3(
				$elm$core$List$map2,
				F2(
					function (a, num) {
						return _List_fromArray(
							[
								(a.word === '') ? $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil) : A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
								A2($author$project$MusicCreator$TapList, a.name, noteName),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(0.5 + ($author$project$MusicCreator$wordWidth * num), 0),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$black,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$size,
											8.5,
											$MacCASOutreach$graphicsvg$GraphicSVG$centered(
												$MacCASOutreach$graphicsvg$GraphicSVG$text(a.word)))))),
								(a.word === '') ? A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
								A2($author$project$MusicCreator$TapList, a.name, noteName),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(3, 2),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
										0.5,
										$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
											A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 7.5))))) : A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
								A2($author$project$MusicCreator$TapList, a.name, noteName),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(1 + ($author$project$MusicCreator$wordWidth * num), 2),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
										0.5,
										$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
											A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 6, 7.5)))))
							]);
					}),
				list,
				A2(
					$elm$core$List$range,
					0,
					$elm$core$List$length(list))));
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			moveLyric,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
						$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
						$MacCASOutreach$graphicsvg$GraphicSVG$group(
							$elm$core$List$reverse(displayTapBox))),
						ifClick ? A2($author$project$MusicCreator$displayClickableBar, list, time) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
					])));
	});
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm_community$list_extra$List$Extra$gatherWith = F2(
	function (testFn, list) {
		var helper = F2(
			function (scattered, gathered) {
				if (!scattered.b) {
					return $elm$core$List$reverse(gathered);
				} else {
					var toGather = scattered.a;
					var population = scattered.b;
					var _v1 = A2(
						$elm$core$List$partition,
						testFn(toGather),
						population);
					var gathering = _v1.a;
					var remaining = _v1.b;
					return A2(
						helper,
						remaining,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(toGather, gathering),
							gathered));
				}
			});
		return A2(helper, list, _List_Nil);
	});
var $elm_community$list_extra$List$Extra$gatherEquals = function (list) {
	return A2($elm_community$list_extra$List$Extra$gatherWith, $elm$core$Basics$eq, list);
};
var $author$project$MusicCreator$ifGroupNotePointUp = function (list) {
	var countPitch = A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, def) {
				var x = _v0.a;
				var y = _v0.b;
				return _Utils_eq(y, 0 + $author$project$MusicCreatorDef$moveYscore) ? (def + 0) : ((_Utils_cmp(y, 0 + $author$project$MusicCreatorDef$moveYscore) > 0) ? (def + 1) : (def - 1));
			}),
		0,
		list);
	return countPitch < 0;
};
var $elm_community$list_extra$List$Extra$foldl1 = F2(
	function (func, list) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var x = list.a;
			var xs = list.b;
			return $elm$core$Maybe$Just(
				A3($elm$core$List$foldl, func, x, xs));
		}
	});
var $elm_community$list_extra$List$Extra$maximumWith = F2(
	function (comparator, list) {
		return A2(
			$elm_community$list_extra$List$Extra$foldl1,
			F2(
				function (x, y) {
					var _v0 = A2(comparator, x, y);
					if (_v0.$ === 'GT') {
						return x;
					} else {
						return y;
					}
				}),
			list);
	});
var $elm_community$list_extra$List$Extra$minimumWith = F2(
	function (comparator, list) {
		return A2(
			$elm_community$list_extra$List$Extra$foldl1,
			F2(
				function (x, y) {
					var _v0 = A2(comparator, x, y);
					if (_v0.$ === 'LT') {
						return x;
					} else {
						return y;
					}
				}),
			list);
	});
var $author$project$MusicCreator$groupFindTopLinePos = function (posList) {
	var lowpos = function () {
		var _v9 = A2(
			$elm_community$list_extra$List$Extra$minimumWith,
			F2(
				function (_v10, _v11) {
					var x = _v10.a;
					var y = _v10.b;
					var x1 = _v11.a;
					var y1 = _v11.b;
					return A2($elm$core$Basics$compare, y, y1);
				}),
			posList);
		if (_v9.$ === 'Just') {
			var a = _v9.a;
			return a.b;
		} else {
			return 0 + $author$project$MusicCreatorDef$moveYscore;
		}
	}();
	var ifPointUp = $author$project$MusicCreator$ifGroupNotePointUp(posList);
	var if2samelist = $elm_community$list_extra$List$Extra$gatherEquals(
		A2(
			$elm$core$List$map,
			function (_v8) {
				var x = _v8.a;
				var y = _v8.b;
				return y;
			},
			posList));
	var ifbeemhorizontal = A2(
		$elm$core$List$any,
		function (_v7) {
			var x = _v7.a;
			var y = _v7.b;
			return $elm$core$List$length(y) > 0;
		},
		if2samelist);
	var highpos = function () {
		var _v4 = A2(
			$elm_community$list_extra$List$Extra$maximumWith,
			F2(
				function (_v5, _v6) {
					var x = _v5.a;
					var y = _v5.b;
					var x1 = _v6.a;
					var y1 = _v6.b;
					return A2($elm$core$Basics$compare, y, y1);
				}),
			posList);
		if (_v4.$ === 'Just') {
			var a = _v4.a;
			return a.b;
		} else {
			return 0 + $author$project$MusicCreatorDef$moveYscore;
		}
	}();
	var pos2 = function () {
		var _v2 = A2(
			$elm$core$List$drop,
			$elm$core$List$length(posList) - 1,
			posList);
		if (_v2.b && (!_v2.b.b)) {
			var a = _v2.a;
			return _Utils_Tuple2(
				a.a,
				function () {
					if (ifbeemhorizontal) {
						return ifPointUp ? highpos : lowpos;
					} else {
						return ifPointUp ? ((_Utils_cmp(highpos, a.b) > 0) ? (highpos - 2) : (highpos + 2)) : ((_Utils_cmp(lowpos, a.b) < 0) ? (lowpos + 2) : (lowpos - 2));
					}
				}());
		} else {
			return _Utils_Tuple2(0, 0);
		}
	}();
	var pos1 = function () {
		var _v0 = A2($elm$core$List$take, 1, posList);
		if (_v0.b && (!_v0.b.b)) {
			var a = _v0.a;
			return _Utils_Tuple2(
				a.a,
				function () {
					if (ifbeemhorizontal) {
						return ifPointUp ? highpos : lowpos;
					} else {
						return ifPointUp ? ((_Utils_cmp(highpos, pos2.b) > 0) ? (highpos + 2) : (highpos - 2)) : ((_Utils_cmp(lowpos, pos2.b) < 0) ? (lowpos - 2) : (lowpos + 2));
					}
				}());
		} else {
			return _Utils_Tuple2(0, 0);
		}
	}();
	return _Utils_Tuple2(pos1, pos2);
};
var $author$project$MusicCreator$drawLyric = F3(
	function (list, listNonGroup, time) {
		var singleY = function (s) {
			var ifPointUp = (_Utils_cmp(s.pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) ? false : true;
			var ifDynamic = _Utils_eq(s._function.dynamic.f, $author$project$MusicCreatorDef$NoDynamic) ? 0 : (((_Utils_cmp(s.pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) < 0) && (_Utils_cmp(s.pos.b, (-7) + $author$project$MusicCreatorDef$moveYscore) > -1)) ? (-21) : (-14));
			var ifArticulation = _Utils_eq(s._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation) ? 0 : (_Utils_eq(s._function.articulation.f, $author$project$MusicCreatorDef$Fermata) ? 0 : (-14));
			return ifPointUp ? (((s.pos.b - 14) + ifArticulation) + ifDynamic) : (((_Utils_cmp(s.pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) && (_Utils_cmp(s.pos.b, 14 + $author$project$MusicCreatorDef$moveYscore) < 1)) ? (((-30) + $author$project$MusicCreatorDef$moveYscore) + ifDynamic) : (((-23) + $author$project$MusicCreatorDef$moveYscore) + ifDynamic));
		};
		var groupY = function (g) {
			var posList = A2(
				$elm$core$List$map,
				function (_v4) {
					var name = _v4.a;
					var a = _v4.b;
					return _Utils_Tuple2(a.pos.a, a.pos.b);
				},
				$author$project$MusicCreator$clearEmpty(g));
			var pos2 = $author$project$MusicCreator$groupFindTopLinePos(posList).b;
			var pos1 = $author$project$MusicCreator$groupFindTopLinePos(posList).a;
			var posY = A2($elm$core$Basics$min, pos1.b, pos2.b);
			var ifPointUp = $author$project$MusicCreator$ifGroupNotePointUp(posList);
			var ifDynamic = function (a) {
				var condition = !_Utils_eq(a._function.dynamic.f, $author$project$MusicCreatorDef$NoDynamic);
				return condition ? (ifPointUp ? (-28) : 0) : (-12);
			};
			var ifArticulation = function (a) {
				var condition = (!_Utils_eq(a._function.articulation.f, $author$project$MusicCreatorDef$Fermata)) && (!_Utils_eq(a._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation));
				return condition ? (ifPointUp ? (-14) : 0) : 0;
			};
			return A3(
				$elm$core$List$foldl,
				$elm$core$Basics$min,
				999999,
				A2(
					$elm$core$List$map,
					function (_v3) {
						var name = _v3.a;
						var a = _v3.b;
						return ifPointUp ? ((a.pos.b + ifArticulation(a)) + ifDynamic(a)) : (((posY - 40) + ifArticulation(a)) + ifDynamic(a));
					},
					g));
		};
		var lowestYHelper = F2(
			function (x, currentY) {
				lowestYHelper:
				while (true) {
					if (!x.b) {
						return currentY;
					} else {
						if (x.a.$ === 'Single') {
							var _v1 = x.a.a;
							var name = _v1.a;
							var s = _v1.b;
							var xs = x.b;
							var $temp$x = xs,
								$temp$currentY = A2(
								$elm$core$Basics$min,
								currentY,
								singleY(s));
							x = $temp$x;
							currentY = $temp$currentY;
							continue lowestYHelper;
						} else {
							var g = x.a.a;
							var xs = x.b;
							var $temp$x = xs,
								$temp$currentY = A2(
								$elm$core$Basics$min,
								currentY,
								groupY(g));
							x = $temp$x;
							currentY = $temp$currentY;
							continue lowestYHelper;
						}
					}
				}
			});
		var lowestY = function () {
			var y = A2(lowestYHelper, list, 999999);
			return (_Utils_cmp(y, (-28) + $author$project$MusicCreatorDef$moveYscore) > -1) ? ((-28) + $author$project$MusicCreatorDef$moveYscore) : y;
		}();
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v2) {
					var name = _v2.a;
					var a = _v2.b;
					return ($author$project$MusicCreatorDef$ifRest(a.note) || _Utils_eq(a.note, $author$project$MusicCreatorDef$Empty)) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil) : A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(a.pos.a - 3, lowestY),
						A3($author$project$MusicCreator$displayLyricList, a._function.lyric, name, time));
				},
				listNonGroup));
	});
var $author$project$MusicCreator$drawNotesWithExtraLine = F2(
	function (listOfNote, time) {
		var moveAccidental = function (b) {
			return _Utils_eq(b._function.accidental.dragState, $author$project$MusicCreatorDef$Released) ? _Utils_Tuple2(b.pos.a - 11, b.pos.b) : b._function.accidental.pos;
		};
		var ifRotateB = F2(
			function (pos, note) {
				return (_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) && (!$author$project$MusicCreatorDef$ifRest(note));
			});
		var ifRotate = F2(
			function (pos, note) {
				return ((_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) && (!$author$project$MusicCreatorDef$ifRest(note))) ? $MacCASOutreach$graphicsvg$GraphicSVG$rotate(
					$elm$core$Basics$degrees(180)) : $MacCASOutreach$graphicsvg$GraphicSVG$rotate(
					$elm$core$Basics$degrees(0));
			});
		var ifFlip = function (pos) {
			return (_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) ? $author$project$MusicCreatorDef$Flip : $author$project$MusicCreatorDef$UnFlip;
		};
		var moveArticulation = function (b) {
			var articulation = b._function.articulation;
			return _Utils_eq(articulation.dragState, $author$project$MusicCreatorDef$Released) ? ((_Utils_eq(
				ifFlip(b.pos),
				$author$project$MusicCreatorDef$Flip) || _Utils_eq(articulation.f, $author$project$MusicCreatorDef$Fermata)) ? _Utils_Tuple2(b.pos.a, b.pos.b + 14) : _Utils_Tuple2(b.pos.a, b.pos.b - 14)) : articulation.pos;
		};
		var moveDynamic = function (b) {
			var x = A2(ifRotateB, b.pos, b.note) ? (b.pos.a - 3) : b.pos.a;
			var dynamic = b._function.dynamic;
			var articulationY = _Utils_eq(b._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation) || ((_Utils_cmp(
				moveArticulation(b).b,
				(-15) + $author$project$MusicCreatorDef$moveYscore) > -1) || (((!_Utils_eq(b._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation)) && _Utils_eq(b._function.articulation.dragState, $author$project$MusicCreatorDef$Dragging)) || _Utils_eq(b._function.articulation.f, $author$project$MusicCreatorDef$Fermata)));
			return _Utils_eq(dynamic.dragState, $author$project$MusicCreatorDef$Released) ? (articulationY ? ((!_Utils_eq(b.note, $author$project$MusicCreatorDef$WholeN)) ? (_Utils_eq(b.pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) ? _Utils_Tuple2(x, (-33) + $author$project$MusicCreatorDef$moveYscore) : ((_Utils_cmp(b.pos.b - 12, (-23) + $author$project$MusicCreatorDef$moveYscore) > -1) ? _Utils_Tuple2(x, (-23) + $author$project$MusicCreatorDef$moveYscore) : _Utils_Tuple2(x, b.pos.b - 12))) : ((_Utils_cmp(b.pos.b - 12, (-23) + $author$project$MusicCreatorDef$moveYscore) > -1) ? _Utils_Tuple2(b.pos.a, (-23) + $author$project$MusicCreatorDef$moveYscore) : _Utils_Tuple2(b.pos.a, b.pos.b - 12))) : _Utils_Tuple2(
				x,
				moveArticulation(b).b - 12)) : dynamic.pos;
		};
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var b = _v0.b;
					return $MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2($author$project$MusicCreator$drawExtraLine, b.pos, $author$project$MusicCreatorDef$Dragging),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
								$author$project$MusicCreator$ChangeDragState(name),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									b.pos,
									A3(
										ifRotate,
										b.pos,
										b.note,
										A2(
											$author$project$MusicCreatorFunctions$whichNote,
											b.note,
											ifFlip(b.pos))))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Dynamic),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									moveDynamic(b),
									$author$project$DrawMusic$drawDynamic(b._function.dynamic.f))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Accidental),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									moveAccidental(b),
									$author$project$MusicCreatorFunctions$drawAccidental(b._function.accidental.f))),
								(!_Utils_eq(b._function.articulation.f, $author$project$MusicCreatorDef$Slur)) ? A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Articulation),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									moveArticulation(b),
									$author$project$MusicCreatorFunctions$drawArticulation(b._function.articulation.f))) : ((_Utils_eq(b._function.articulation.f, $author$project$MusicCreatorDef$Slur) && _Utils_eq(b._function.articulation.dragState, $author$project$MusicCreatorDef$Dragging)) ? A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								moveArticulation(b),
								$author$project$MusicCreatorFunctions$drawArticulation(b._function.articulation.f)) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil))
							]));
				},
				listOfNote));
	});
var $author$project$MusicCreator$SelectSlurAt = function (a) {
	return {$: 'SelectSlurAt', a: a};
};
var $author$project$MusicCreator$pointDirctUpdateGroup = function (note) {
	if (note.$ === 'Single') {
		var _v1 = note.a;
		var name = _v1.a;
		var s = _v1.b;
		return (_Utils_cmp(s.pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) ? (-1) : 1;
	} else {
		var g = note.a;
		var posList = A2(
			$elm$core$List$map,
			function (_v2) {
				var name = _v2.a;
				var a = _v2.b;
				return _Utils_Tuple2(a.pos.a, a.pos.b);
			},
			$author$project$MusicCreator$clearEmpty(g));
		return $author$project$MusicCreator$ifGroupNotePointUp(posList) ? 1 : (-1);
	}
};
var $author$project$DrawMusic$slur = F3(
	function (_v0, _v1, pointDir) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		var x = x1 + ((x2 - x1) / 2);
		var ifPointUp = (pointDir > 0) ? true : false;
		var maybey = ifPointUp ? (A2($elm$core$Basics$min, y1, y2) - ((y1 - y2) / 2)) : (A2($elm$core$Basics$max, y1, y2) + ((y1 - y2) / 2));
		var moveSlur = ifPointUp ? _Utils_Tuple2(0, -5) : _Utils_Tuple2(0, 5);
		var slurY = ifPointUp ? (($elm$core$Basics$abs(y1 - y2) > 28) ? (-10) : (-10)) : (($elm$core$Basics$abs(y1 - y2) > 28) ? 10 : 10);
		var y = (!maybey) ? (y1 + slurY) : (maybey + slurY);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					moveSlur,
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(5),
						$MacCASOutreach$graphicsvg$GraphicSVG$blank,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(x1, y1),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(x, y),
									_Utils_Tuple2(x2, y2))
								])))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					moveSlur,
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(x1, y1),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(x, y),
									_Utils_Tuple2(x2, y2))
								]))))
				]));
	});
var $author$project$MusicCreator$drawSlurAfterSelect = function (list) {
	var drawSlur = F3(
		function (firstPos, x, pointDir) {
			if (!x.b) {
				return _List_Nil;
			} else {
				if (x.a.$ === 'Single') {
					var _v5 = x.a.a;
					var name = _v5.a;
					var s = _v5.b;
					var xs = x.b;
					var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
						$author$project$MusicCreatorDef$Single(
							_Utils_Tuple2(name, s)));
					return (_Utils_eq(s._function.articulation.f, $author$project$MusicCreatorDef$Slur) && _Utils_eq(s._function.articulation.dragState, $author$project$MusicCreatorDef$Released)) ? A3(drawSlur, firstPos, xs, pointDir + pointD) : A2(
						$elm$core$List$cons,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
							$author$project$MusicCreator$SlurTap($author$project$MusicCreatorDef$Articulation),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								$author$project$MusicCreator$SelectSlurAt,
								A3($author$project$DrawMusic$slur, firstPos, s.pos, pointDir + pointD))),
						getFirstPos(xs));
				} else {
					if (!x.a.a.b) {
						var xs = x.b;
						return A3(drawSlur, firstPos, xs, pointDir);
					} else {
						var _v6 = x.a.a;
						var _v7 = _v6.a;
						var name = _v7.a;
						var g = _v7.b;
						var gs = _v6.b;
						var xs = x.b;
						var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
							$author$project$MusicCreatorDef$Group(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, g),
									gs)));
						return (_Utils_eq(g._function.articulation.f, $author$project$MusicCreatorDef$Slur) && _Utils_eq(g._function.articulation.dragState, $author$project$MusicCreatorDef$Released)) ? A3(
							drawSlur,
							firstPos,
							A2(
								$elm$core$List$cons,
								$author$project$MusicCreatorDef$Group(gs),
								xs),
							pointDir + pointD) : A2(
							$elm$core$List$cons,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
								$author$project$MusicCreator$SlurTap($author$project$MusicCreatorDef$Articulation),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
									$author$project$MusicCreator$SelectSlurAt,
									A3($author$project$DrawMusic$slur, firstPos, g.pos, pointDir + pointD))),
							getFirstPos(
								A2(
									$elm$core$List$cons,
									$author$project$MusicCreatorDef$Group(gs),
									xs)));
					}
				}
			}
		});
	var getFirstPos = function (x) {
		if (!x.b) {
			return _List_Nil;
		} else {
			if (x.a.$ === 'Single') {
				var _v1 = x.a.a;
				var name = _v1.a;
				var s = _v1.b;
				var xs = x.b;
				var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
					$author$project$MusicCreatorDef$Single(
						_Utils_Tuple2(name, s)));
				return (_Utils_eq(s._function.articulation.f, $author$project$MusicCreatorDef$Slur) && _Utils_eq(s._function.articulation.dragState, $author$project$MusicCreatorDef$Released)) ? A3(drawSlur, s.pos, xs, pointD) : getFirstPos(xs);
			} else {
				if (!x.a.a.b) {
					var xs = x.b;
					return getFirstPos(xs);
				} else {
					var _v2 = x.a.a;
					var _v3 = _v2.a;
					var name = _v3.a;
					var g = _v3.b;
					var gs = _v2.b;
					var xs = x.b;
					var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
						$author$project$MusicCreatorDef$Group(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(name, g),
								gs)));
					return (_Utils_eq(g._function.articulation.f, $author$project$MusicCreatorDef$Slur) && _Utils_eq(g._function.articulation.dragState, $author$project$MusicCreatorDef$Released)) ? A3(
						drawSlur,
						g.pos,
						A2(
							$elm$core$List$cons,
							$author$project$MusicCreatorDef$Group(gs),
							xs),
						pointD) : getFirstPos(
						A2(
							$elm$core$List$cons,
							$author$project$MusicCreatorDef$Group(gs),
							xs));
				}
			}
		}
	};
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		getFirstPos(list));
};
var $author$project$MusicCreator$drawTie = function (list) {
	var drawTieF = F3(
		function (pos, x, pointDir) {
			drawTieF:
			while (true) {
				if (!x.b) {
					return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
				} else {
					if (x.a.$ === 'Single') {
						var _v1 = x.a.a;
						var name = _v1.a;
						var s = _v1.b;
						var xs = x.b;
						var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
							$author$project$MusicCreatorDef$Single(
								_Utils_Tuple2(name, s)));
						return A3($author$project$DrawMusic$slur, pos, s.pos, pointDir + pointD);
					} else {
						if (!x.a.a.b) {
							var xs = x.b;
							var $temp$pos = pos,
								$temp$x = xs,
								$temp$pointDir = pointDir;
							pos = $temp$pos;
							x = $temp$x;
							pointDir = $temp$pointDir;
							continue drawTieF;
						} else {
							var _v2 = x.a.a;
							var _v3 = _v2.a;
							var name = _v3.a;
							var g = _v3.b;
							var gs = _v2.b;
							var xs = x.b;
							var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
								$author$project$MusicCreatorDef$Group(
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(name, g),
										gs)));
							return A3($author$project$DrawMusic$slur, pos, g.pos, pointDir + pointD);
						}
					}
				}
			}
		});
	var getFirstPosTie = function (x) {
		getFirstPosTie:
		while (true) {
			if (!x.b) {
				return _List_Nil;
			} else {
				if (x.a.$ === 'Single') {
					var _v5 = x.a.a;
					var name = _v5.a;
					var s = _v5.b;
					var xs = x.b;
					var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
						$author$project$MusicCreatorDef$Single(
							_Utils_Tuple2(name, s)));
					if (_Utils_eq(s._function.tie, $author$project$MusicCreatorDef$TieS)) {
						return A2(
							$elm$core$List$cons,
							A3(drawTieF, s.pos, xs, pointD),
							getFirstPosTie(xs));
					} else {
						var $temp$x = xs;
						x = $temp$x;
						continue getFirstPosTie;
					}
				} else {
					var g = x.a.a;
					var xs = x.b;
					var pointD = $author$project$MusicCreator$pointDirctUpdateGroup(
						$author$project$MusicCreatorDef$Group(g));
					var gLast = A2(
						$elm$core$Maybe$withDefault,
						_Utils_Tuple2('nothing', $author$project$MusicCreatorDef$defselectNoteRec),
						$elm$core$List$head(
							A2(
								$elm$core$List$drop,
								$elm$core$List$length(g) - 1,
								g))).b;
					if (_Utils_eq(gLast._function.tie, $author$project$MusicCreatorDef$TieS)) {
						return A2(
							$elm$core$List$cons,
							A3(drawTieF, gLast.pos, xs, pointD),
							getFirstPosTie(xs));
					} else {
						var $temp$x = xs;
						x = $temp$x;
						continue getFirstPosTie;
					}
				}
			}
		}
	};
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		getFirstPosTie(list));
};
var $ianmackenzie$elm_units$Angle$cos = function (_v0) {
	var angle = _v0.a;
	return $elm$core$Basics$cos(angle);
};
var $ianmackenzie$elm_geometry$Geometry$Types$Direction2d = function (a) {
	return {$: 'Direction2d', a: a};
};
var $ianmackenzie$elm_geometry$Vector2d$direction = function (_v0) {
	var v = _v0.a;
	var largestComponent = A2(
		$elm$core$Basics$max,
		$elm$core$Basics$abs(v.x),
		$elm$core$Basics$abs(v.y));
	if (!largestComponent) {
		return $elm$core$Maybe$Nothing;
	} else {
		var scaledY = v.y / largestComponent;
		var scaledX = v.x / largestComponent;
		var scaledLength = $elm$core$Basics$sqrt((scaledX * scaledX) + (scaledY * scaledY));
		return $elm$core$Maybe$Just(
			$ianmackenzie$elm_geometry$Geometry$Types$Direction2d(
				{x: scaledX / scaledLength, y: scaledY / scaledLength}));
	}
};
var $ianmackenzie$elm_geometry$LineSegment2d$endpoints = function (_v0) {
	var endpoints_ = _v0.a;
	return endpoints_;
};
var $ianmackenzie$elm_geometry$Geometry$Types$Vector2d = function (a) {
	return {$: 'Vector2d', a: a};
};
var $ianmackenzie$elm_geometry$Vector2d$from = F2(
	function (_v0, _v1) {
		var p1 = _v0.a;
		var p2 = _v1.a;
		return $ianmackenzie$elm_geometry$Geometry$Types$Vector2d(
			{x: p2.x - p1.x, y: p2.y - p1.y});
	});
var $ianmackenzie$elm_geometry$LineSegment2d$vector = function (lineSegment) {
	var _v0 = $ianmackenzie$elm_geometry$LineSegment2d$endpoints(lineSegment);
	var p1 = _v0.a;
	var p2 = _v0.b;
	return A2($ianmackenzie$elm_geometry$Vector2d$from, p1, p2);
};
var $ianmackenzie$elm_geometry$LineSegment2d$direction = function (givenSegment) {
	return $ianmackenzie$elm_geometry$Vector2d$direction(
		$ianmackenzie$elm_geometry$LineSegment2d$vector(givenSegment));
};
var $ianmackenzie$elm_units$Quantity$Quantity = function (a) {
	return {$: 'Quantity', a: a};
};
var $elm$core$Basics$atan2 = _Basics_atan2;
var $ianmackenzie$elm_geometry$Direction2d$toAngle = function (_v0) {
	var d = _v0.a;
	return $ianmackenzie$elm_units$Quantity$Quantity(
		A2($elm$core$Basics$atan2, d.y, d.x));
};
var $author$project$Line2dAssist$findOppSide = F2(
	function (line1, num) {
		var _v0 = $ianmackenzie$elm_geometry$LineSegment2d$direction(line1);
		if (_v0.$ === 'Just') {
			var a = _v0.a;
			return $elm$core$Basics$abs(
				num / $ianmackenzie$elm_units$Angle$cos(
					$ianmackenzie$elm_geometry$Direction2d$toAngle(a)));
		} else {
			return 0;
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Path = function (a) {
	return {$: 'Path', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$line = F2(
	function (p1, p2) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$Path(
			_List_fromArray(
				[p1, p2]));
	});
var $author$project$DrawMusic$groupedNote = F3(
	function (dot, p1, p2) {
		var shiftP1 = (_Utils_cmp(p2.b, p1.b) > 0) ? _Utils_Tuple2(p1.a + 4, p1.b) : _Utils_Tuple2(p1.a - 4, p1.b);
		var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.9,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15))))
				]));
		var flag = $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(23.088, 48.202),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.493, 48.202),
								_Utils_Tuple2(23.898, 48.202)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(26.854, 38.301),
								_Utils_Tuple2(33.890, 32)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(39.335, 26.123),
								_Utils_Tuple2(39.021, 18.767)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(38.575, 12.972),
								_Utils_Tuple2(36.050, 8.7763)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(35.240, 8.5063),
								_Utils_Tuple2(34.430, 8.2362)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(34.565, 8.9113),
								_Utils_Tuple2(34.700, 9.5864)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(36.770, 15.057),
								_Utils_Tuple2(36.320, 22.008)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(34.534, 31.649),
								_Utils_Tuple2(24.708, 32.810)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.898, 32.945),
								_Utils_Tuple2(23.088, 33.080)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(23.223, 40.236),
								_Utils_Tuple2(23.088, 48.202))
							])))
				]));
		var dotPost = (_Utils_cmp(p2.b, p1.b) > 0) ? _Utils_Tuple2(-9, 1) : _Utils_Tuple2(9, 1);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					p1,
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 12, 20))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					p1,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, note)),
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(1.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$line, shiftP1, p2)),
					dot ? ((_Utils_cmp(p2.b, p1.b) > 0) ? A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(9, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						p1,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5)))) : A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					dotPost,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						p1,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
				]));
	});
var $ianmackenzie$elm_geometry$Vector2d$cross = F2(
	function (_v0, _v1) {
		var v2 = _v0.a;
		var v1 = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity((v1.x * v2.y) - (v1.y * v2.x));
	});
var $ianmackenzie$elm_geometry$Vector2d$dot = F2(
	function (_v0, _v1) {
		var v2 = _v0.a;
		var v1 = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity((v1.x * v2.x) + (v1.y * v2.y));
	});
var $ianmackenzie$elm_geometry$Geometry$Types$Point2d = function (a) {
	return {$: 'Point2d', a: a};
};
var $ianmackenzie$elm_geometry$Point2d$interpolateFrom = F3(
	function (_v0, _v1, t) {
		var p1 = _v0.a;
		var p2 = _v1.a;
		return (t <= 0.5) ? $ianmackenzie$elm_geometry$Geometry$Types$Point2d(
			{x: p1.x + (t * (p2.x - p1.x)), y: p1.y + (t * (p2.y - p1.y))}) : $ianmackenzie$elm_geometry$Geometry$Types$Point2d(
			{x: p2.x + ((1 - t) * (p1.x - p2.x)), y: p2.y + ((1 - t) * (p1.y - p2.y))});
	});
var $ianmackenzie$elm_geometry$LineSegment2d$interpolate = F2(
	function (lineSegment, t) {
		var _v0 = $ianmackenzie$elm_geometry$LineSegment2d$endpoints(lineSegment);
		var start = _v0.a;
		var end = _v0.b;
		return A3($ianmackenzie$elm_geometry$Point2d$interpolateFrom, start, end, t);
	});
var $ianmackenzie$elm_units$Quantity$lessThan = F2(
	function (_v0, _v1) {
		var y = _v0.a;
		var x = _v1.a;
		return _Utils_cmp(x, y) < 0;
	});
var $ianmackenzie$elm_units$Quantity$minus = F2(
	function (_v0, _v1) {
		var y = _v0.a;
		var x = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity(x - y);
	});
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0.a;
		var x = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity(x + y);
	});
var $ianmackenzie$elm_units$Quantity$ratio = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var y = _v1.a;
		return x / y;
	});
var $ianmackenzie$elm_units$Quantity$zero = $ianmackenzie$elm_units$Quantity$Quantity(0);
var $ianmackenzie$elm_geometry$LineSegment2d$intersectionPoint = F2(
	function (lineSegment1, lineSegment2) {
		var s = $ianmackenzie$elm_geometry$LineSegment2d$vector(lineSegment2);
		var r = $ianmackenzie$elm_geometry$LineSegment2d$vector(lineSegment1);
		var _v0 = $ianmackenzie$elm_geometry$LineSegment2d$endpoints(lineSegment2);
		var q = _v0.a;
		var q_ = _v0.b;
		var _v1 = $ianmackenzie$elm_geometry$LineSegment2d$endpoints(lineSegment1);
		var p = _v1.a;
		var p_ = _v1.b;
		var pq = A2($ianmackenzie$elm_geometry$Vector2d$from, p, q);
		var pqXr = A2($ianmackenzie$elm_geometry$Vector2d$cross, r, pq);
		var pqXs = A2($ianmackenzie$elm_geometry$Vector2d$cross, s, pq);
		var pq_ = A2($ianmackenzie$elm_geometry$Vector2d$from, p, q_);
		var rXpq_ = A2($ianmackenzie$elm_geometry$Vector2d$cross, pq_, r);
		var uDenominator = A2($ianmackenzie$elm_units$Quantity$plus, rXpq_, pqXr);
		var qp_ = A2($ianmackenzie$elm_geometry$Vector2d$from, q, p_);
		var sXqp_ = A2($ianmackenzie$elm_geometry$Vector2d$cross, qp_, s);
		var tDenominator = A2($ianmackenzie$elm_units$Quantity$minus, sXqp_, pqXs);
		if (_Utils_eq(tDenominator, $ianmackenzie$elm_units$Quantity$zero) || _Utils_eq(uDenominator, $ianmackenzie$elm_units$Quantity$zero)) {
			return A2(
				$ianmackenzie$elm_units$Quantity$lessThan,
				$ianmackenzie$elm_units$Quantity$zero,
				A2($ianmackenzie$elm_geometry$Vector2d$dot, s, r)) ? (_Utils_eq(p_, q_) ? $elm$core$Maybe$Just(p_) : (_Utils_eq(p, q) ? $elm$core$Maybe$Just(p) : $elm$core$Maybe$Nothing)) : (_Utils_eq(p_, q) ? $elm$core$Maybe$Just(p_) : (_Utils_eq(p, q_) ? $elm$core$Maybe$Just(p) : $elm$core$Maybe$Nothing));
		} else {
			var u = A2($ianmackenzie$elm_units$Quantity$ratio, pqXr, uDenominator);
			var t = A2($ianmackenzie$elm_units$Quantity$ratio, pqXs, tDenominator);
			if (((0 <= t) && (t <= 1)) && ((0 <= u) && (u <= 1))) {
				var intersection = (_Utils_cmp(
					A2($elm$core$Basics$min, t, 1 - t),
					A2($elm$core$Basics$min, u, 1 - u)) < 1) ? A2($ianmackenzie$elm_geometry$LineSegment2d$interpolate, lineSegment1, t) : A2($ianmackenzie$elm_geometry$LineSegment2d$interpolate, lineSegment2, u);
				return $elm$core$Maybe$Just(intersection);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$Line2dAssist$intersection = F2(
	function (line1, lin2) {
		return A2($ianmackenzie$elm_geometry$LineSegment2d$intersectionPoint, line1, lin2);
	});
var $ianmackenzie$elm_geometry$Geometry$Types$LineSegment2d = function (a) {
	return {$: 'LineSegment2d', a: a};
};
var $ianmackenzie$elm_geometry$LineSegment2d$fromEndpoints = $ianmackenzie$elm_geometry$Geometry$Types$LineSegment2d;
var $ianmackenzie$elm_geometry$LineSegment2d$from = F2(
	function (startPoint_, endPoint_) {
		return $ianmackenzie$elm_geometry$LineSegment2d$fromEndpoints(
			_Utils_Tuple2(startPoint_, endPoint_));
	});
var $ianmackenzie$elm_units$Length$meters = function (numMeters) {
	return $ianmackenzie$elm_units$Quantity$Quantity(numMeters);
};
var $ianmackenzie$elm_units$Length$centimeters = function (numCentimeters) {
	return $ianmackenzie$elm_units$Length$meters(0.01 * numCentimeters);
};
var $ianmackenzie$elm_geometry$Point2d$xy = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var y = _v1.a;
		return $ianmackenzie$elm_geometry$Geometry$Types$Point2d(
			{x: x, y: y});
	});
var $ianmackenzie$elm_geometry$Point2d$centimeters = F2(
	function (x, y) {
		return A2(
			$ianmackenzie$elm_geometry$Point2d$xy,
			$ianmackenzie$elm_units$Length$centimeters(x),
			$ianmackenzie$elm_units$Length$centimeters(y));
	});
var $author$project$Line2dAssist$point = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return A2($ianmackenzie$elm_geometry$Point2d$centimeters, x, y);
};
var $author$project$Line2dAssist$line = F2(
	function (p1, p2) {
		return A2(
			$ianmackenzie$elm_geometry$LineSegment2d$from,
			$author$project$Line2dAssist$point(p1),
			$author$project$Line2dAssist$point(p2));
	});
var $ianmackenzie$elm_geometry$LineSegment2d$midpoint = function (lineSegment) {
	return A2($ianmackenzie$elm_geometry$LineSegment2d$interpolate, lineSegment, 0.5);
};
var $ianmackenzie$elm_units$Length$inMeters = function (_v0) {
	var numMeters = _v0.a;
	return numMeters;
};
var $ianmackenzie$elm_units$Length$inCentimeters = function (length) {
	return 100 * $ianmackenzie$elm_units$Length$inMeters(length);
};
var $ianmackenzie$elm_geometry$Point2d$xCoordinate = function (_v0) {
	var p = _v0.a;
	return $ianmackenzie$elm_units$Quantity$Quantity(p.x);
};
var $ianmackenzie$elm_geometry$Point2d$yCoordinate = function (_v0) {
	var p = _v0.a;
	return $ianmackenzie$elm_units$Quantity$Quantity(p.y);
};
var $ianmackenzie$elm_geometry$Point2d$toTuple = F2(
	function (fromQuantity, point) {
		return _Utils_Tuple2(
			fromQuantity(
				$ianmackenzie$elm_geometry$Point2d$xCoordinate(point)),
			fromQuantity(
				$ianmackenzie$elm_geometry$Point2d$yCoordinate(point)));
	});
var $author$project$Line2dAssist$xy = function (p) {
	return A2($ianmackenzie$elm_geometry$Point2d$toTuple, $ianmackenzie$elm_units$Length$inCentimeters, p);
};
var $author$project$Line2dAssist$midPoint = F2(
	function (p1, p2) {
		return $author$project$Line2dAssist$xy(
			$ianmackenzie$elm_geometry$LineSegment2d$midpoint(
				A2($author$project$Line2dAssist$line, p1, p2)));
	});
var $author$project$MusicCreator$noteAndName = function (list) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var a = _v0.b;
			return _Utils_Tuple2(name, a.note);
		},
		list);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$polygon = function (ptList) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Polygon(ptList);
};
var $ianmackenzie$elm_geometry$LineSegment2d$mapEndpoints = F2(
	function (_function, lineSegment) {
		var _v0 = $ianmackenzie$elm_geometry$LineSegment2d$endpoints(lineSegment);
		var p1 = _v0.a;
		var p2 = _v0.b;
		return $ianmackenzie$elm_geometry$LineSegment2d$fromEndpoints(
			_Utils_Tuple2(
				_function(p1),
				_function(p2)));
	});
var $ianmackenzie$elm_geometry$Point2d$scaleAbout = F3(
	function (_v0, k, _v1) {
		var p0 = _v0.a;
		var p = _v1.a;
		return $ianmackenzie$elm_geometry$Geometry$Types$Point2d(
			{x: p0.x + (k * (p.x - p0.x)), y: p0.y + (k * (p.y - p0.y))});
	});
var $ianmackenzie$elm_geometry$LineSegment2d$scaleAbout = F2(
	function (point, scale) {
		return $ianmackenzie$elm_geometry$LineSegment2d$mapEndpoints(
			A2($ianmackenzie$elm_geometry$Point2d$scaleAbout, point, scale));
	});
var $author$project$Line2dAssist$scale = F2(
	function (line1, x) {
		return A3(
			$ianmackenzie$elm_geometry$LineSegment2d$scaleAbout,
			$ianmackenzie$elm_geometry$LineSegment2d$midpoint(line1),
			x,
			line1);
	});
var $ianmackenzie$elm_geometry$Direction2d$negativeY = $ianmackenzie$elm_geometry$Geometry$Types$Direction2d(
	{x: 0, y: -1});
var $ianmackenzie$elm_geometry$Point2d$translateBy = F2(
	function (_v0, _v1) {
		var v = _v0.a;
		var p = _v1.a;
		return $ianmackenzie$elm_geometry$Geometry$Types$Point2d(
			{x: p.x + v.x, y: p.y + v.y});
	});
var $ianmackenzie$elm_geometry$LineSegment2d$translateBy = function (displacementVector) {
	return $ianmackenzie$elm_geometry$LineSegment2d$mapEndpoints(
		$ianmackenzie$elm_geometry$Point2d$translateBy(displacementVector));
};
var $ianmackenzie$elm_geometry$Vector2d$withLength = F2(
	function (_v0, _v1) {
		var a = _v0.a;
		var d = _v1.a;
		return $ianmackenzie$elm_geometry$Geometry$Types$Vector2d(
			{x: a * d.x, y: a * d.y});
	});
var $ianmackenzie$elm_geometry$LineSegment2d$translateIn = F3(
	function (translationDirection, distance, lineSegment) {
		return A2(
			$ianmackenzie$elm_geometry$LineSegment2d$translateBy,
			A2($ianmackenzie$elm_geometry$Vector2d$withLength, distance, translationDirection),
			lineSegment);
	});
var $author$project$Line2dAssist$translateInNy = F2(
	function (line1, x) {
		return A3(
			$ianmackenzie$elm_geometry$LineSegment2d$translateIn,
			$ianmackenzie$elm_geometry$Direction2d$negativeY,
			$ianmackenzie$elm_units$Length$centimeters(x),
			line1);
	});
var $ianmackenzie$elm_geometry$Direction2d$positiveY = $ianmackenzie$elm_geometry$Geometry$Types$Direction2d(
	{x: 0, y: 1});
var $author$project$Line2dAssist$translateInPy = F2(
	function (line1, x) {
		return A3(
			$ianmackenzie$elm_geometry$LineSegment2d$translateIn,
			$ianmackenzie$elm_geometry$Direction2d$positiveY,
			$ianmackenzie$elm_units$Length$centimeters(x),
			line1);
	});
var $author$project$MusicCreator$drawgroup = F2(
	function (list, time) {
		var secondBarLineHelper2 = F2(
			function (b, tmp) {
				secondBarLineHelper2:
				while (true) {
					if (!b.b) {
						return _Utils_Tuple2(tmp, _List_Nil);
					} else {
						var _v1 = b.a;
						var name1 = _v1.a;
						var x1 = _v1.b;
						var xs = b.b;
						if (_Utils_eq(x1.note, $author$project$MusicCreatorDef$SixteenthN)) {
							var $temp$b = xs,
								$temp$tmp = _Utils_Tuple2(x1.pos, true);
							b = $temp$b;
							tmp = $temp$tmp;
							continue secondBarLineHelper2;
						} else {
							if (tmp.b) {
								return _Utils_Tuple2(tmp, xs);
							} else {
								return _Utils_Tuple2(
									_Utils_Tuple2(x1.pos, false),
									xs);
							}
						}
					}
				}
			});
		var secondBarLineHelper1 = function (b) {
			secondBarLineHelper1:
			while (true) {
				var secondLastNote = function () {
					var filter = A2(
						$elm$core$List$drop,
						$elm$core$List$length(list) - 2,
						list);
					var _v5 = $elm$core$List$head(filter);
					if (_v5.$ === 'Just') {
						var _v6 = _v5.a;
						var name = _v6.a;
						var a = _v6.b;
						return a.pos;
					} else {
						return _Utils_Tuple2(0, 0);
					}
				}();
				if (!b.b) {
					return _List_Nil;
				} else {
					if (!b.b.b) {
						var _v3 = b.a;
						var name1 = _v3.a;
						var x1 = _v3.b;
						return _Utils_eq(x1.note, $author$project$MusicCreatorDef$SixteenthN) ? _List_fromArray(
							[
								_Utils_Tuple2(
								x1.pos,
								_Utils_Tuple2(secondLastNote, false))
							]) : _List_Nil;
					} else {
						var _v4 = b.a;
						var name1 = _v4.a;
						var x1 = _v4.b;
						var xs = b.b;
						if (_Utils_eq(x1.note, $author$project$MusicCreatorDef$SixteenthN)) {
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									x1.pos,
									A2(
										secondBarLineHelper2,
										xs,
										_Utils_Tuple2(x1.pos, false)).a),
								secondBarLineHelper1(
									A2(
										secondBarLineHelper2,
										xs,
										_Utils_Tuple2(x1.pos, false)).b));
						} else {
							var $temp$b = xs;
							b = $temp$b;
							continue secondBarLineHelper1;
						}
					}
				}
			}
		};
		var posList = A2(
			$elm$core$List$map,
			function (_v10) {
				var name = _v10.a;
				var a = _v10.b;
				return _Utils_Tuple2(a.pos.a, a.pos.b);
			},
			$author$project$MusicCreator$clearEmpty(list));
		var pos2 = $author$project$MusicCreator$groupFindTopLinePos(posList).b;
		var pos1 = $author$project$MusicCreator$groupFindTopLinePos(posList).a;
		var ifPointUp = $author$project$MusicCreator$ifGroupNotePointUp(posList);
		var pos1ConsiderP = F2(
			function (p, hight) {
				return ifPointUp ? _Utils_Tuple2(p.a + 3.2, p.b + hight) : _Utils_Tuple2(p.a - 4.8, p.b - hight);
			});
		var pos2ConsiderP = F2(
			function (p, hight) {
				return ifPointUp ? _Utils_Tuple2(p.a + 4.8, p.b + hight) : _Utils_Tuple2(p.a - 3.3, p.b - hight);
			});
		var topBarLine = A2(
			$author$project$Line2dAssist$scale,
			A2(
				$author$project$Line2dAssist$line,
				A2(pos1ConsiderP, pos1, 24),
				A2(pos2ConsiderP, pos2, 24)),
			20);
		var secondLine = ifPointUp ? A2($author$project$Line2dAssist$translateInNy, topBarLine, 6) : A2($author$project$Line2dAssist$translateInPy, topBarLine, 6);
		var drawSecondLine = function () {
			var maybeLine = function (p) {
				var p2 = A2(pos2ConsiderP, pos2, 24);
				var p1 = A2(pos1ConsiderP, p, 0);
				return A2(
					$author$project$Line2dAssist$scale,
					A2(
						$author$project$Line2dAssist$line,
						p1,
						_Utils_Tuple2(p1.a, p2.b * 100)),
					100);
			};
			var defaultPos = $author$project$Line2dAssist$point(
				_Utils_Tuple2(0, 0));
			var maybepoint = function (p) {
				return $author$project$Line2dAssist$xy(
					A2(
						$elm$core$Maybe$withDefault,
						defaultPos,
						A2(
							$author$project$Line2dAssist$intersection,
							secondLine,
							maybeLine(p))));
			};
			return A2(
				$elm$core$List$map,
				function (_v8) {
					var p1 = _v8.a;
					var _v9 = _v8.b;
					var p2 = _v9.a;
					var state = _v9.b;
					return state ? A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(
									maybepoint(p1).a,
									maybepoint(p1).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
									_Utils_Tuple2(
									maybepoint(p2).a,
									maybepoint(p2).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
									_Utils_Tuple2(
									maybepoint(p2).a,
									maybepoint(p2).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
									_Utils_Tuple2(
									maybepoint(p1).a,
									maybepoint(p1).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 2))
								]))) : A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(
									maybepoint(p1).a,
									maybepoint(p1).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
									_Utils_Tuple2(
									maybepoint(
										A2($author$project$Line2dAssist$midPoint, p1, p2)).a,
									maybepoint(
										A2($author$project$Line2dAssist$midPoint, p1, p2)).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
									_Utils_Tuple2(
									maybepoint(
										A2($author$project$Line2dAssist$midPoint, p1, p2)).a,
									maybepoint(
										A2($author$project$Line2dAssist$midPoint, p1, p2)).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
									_Utils_Tuple2(
									maybepoint(p1).a,
									maybepoint(p1).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 2))
								])));
				},
				secondBarLineHelper1(list));
		}();
		var drawNote = function () {
			var noteList = $author$project$MusicCreator$noteAndName(
				$author$project$MusicCreator$clearEmpty(list));
			var moveAccidental = function (a) {
				return _Utils_eq(a._function.accidental.dragState, $author$project$MusicCreatorDef$Released) ? _Utils_Tuple2(a.pos.a - 11, a.pos.b) : a._function.accidental.pos;
			};
			var maybeStaff = function (b) {
				var lineP = function () {
					var p2 = A2(pos2ConsiderP, pos2, 24);
					return ifPointUp ? A2(
						$author$project$Line2dAssist$line,
						_Utils_Tuple2(b.a + 4, p2.b * (-20)),
						_Utils_Tuple2(b.a + 4, p2.b * 20)) : A2(
						$author$project$Line2dAssist$line,
						_Utils_Tuple2(b.a - 4, p2.b * (-20)),
						_Utils_Tuple2(b.a - 4, p2.b * 20));
				}();
				return A2($author$project$Line2dAssist$scale, lineP, 20);
			};
			var ifdotted = function (a) {
				return _Utils_eq(a.note, $author$project$MusicCreatorDef$EighthND);
			};
			var defaultPos = $author$project$Line2dAssist$point(
				_Utils_Tuple2(0, 0));
			var staffPos = function (b) {
				return $author$project$Line2dAssist$xy(
					A2(
						$elm$core$Maybe$withDefault,
						defaultPos,
						A2(
							$author$project$Line2dAssist$intersection,
							topBarLine,
							maybeStaff(b))));
			};
			var moveArticulation = F2(
				function (a, b) {
					var articulation = a._function.articulation;
					return _Utils_eq(articulation.dragState, $author$project$MusicCreatorDef$Released) ? (_Utils_eq(articulation.f, $author$project$MusicCreatorDef$Fermata) ? (ifPointUp ? _Utils_Tuple2(
						a.pos.a,
						staffPos(b).b + 7) : _Utils_Tuple2(a.pos.a, a.pos.b + 14)) : (ifPointUp ? _Utils_Tuple2(a.pos.a, a.pos.b - 14) : _Utils_Tuple2(a.pos.a, a.pos.b + 14))) : articulation.pos;
				});
			var moveDynamic = F2(
				function (a, b) {
					var adjustYaccidential = ((!_Utils_eq(a._function.articulation.f, $author$project$MusicCreatorDef$NoArticulation)) && (!_Utils_eq(a._function.articulation.f, $author$project$MusicCreatorDef$Fermata))) ? 14 : 0;
					return _Utils_eq(a._function.dynamic.dragState, $author$project$MusicCreatorDef$Dragging) ? a._function.dynamic.pos : (ifPointUp ? ((_Utils_cmp(a.pos.b, (-14) + $author$project$MusicCreatorDef$moveYscore) > -1) ? _Utils_Tuple2(a.pos.a, ((-23) + $author$project$MusicCreatorDef$moveYscore) - adjustYaccidential) : _Utils_Tuple2(a.pos.a, (a.pos.b - 12) - adjustYaccidential)) : _Utils_Tuple2(
						a.pos.a - 3,
						staffPos(b).b - 12));
				});
			return A3(
				$elm$core$List$map2,
				F2(
					function (_v7, b) {
						var name = _v7.a;
						var a = _v7.b;
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
									$author$project$MusicCreator$ChangeDragState(name),
									A3(
										$author$project$DrawMusic$groupedNote,
										ifdotted(a),
										b,
										staffPos(b))),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
									A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Dynamic),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										A2(moveDynamic, a, b),
										$author$project$DrawMusic$drawDynamic(a._function.dynamic.f))),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
									A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Accidental),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										moveAccidental(a),
										$author$project$MusicCreatorFunctions$drawAccidental(a._function.accidental.f))),
									((!_Utils_eq(a._function.articulation.f, $author$project$MusicCreatorDef$Slur)) || (_Utils_eq(a._function.articulation.f, $author$project$MusicCreatorDef$Slur) && _Utils_eq(a._function.articulation.dragState, $author$project$MusicCreatorDef$Dragging))) ? A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
									A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Articulation),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										A2(moveArticulation, a, b),
										$author$project$MusicCreatorFunctions$drawArticulation(a._function.articulation.f))) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil)
								]));
					}),
				$author$project$MusicCreator$clearEmpty(list),
				posList);
		}();
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
						_List_fromArray(
							[
								_Utils_Tuple2(
								A2(pos1ConsiderP, pos1, 24).a,
								A2(pos1ConsiderP, pos1, 24).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
								_Utils_Tuple2(
								A2(pos2ConsiderP, pos2, 24).a,
								A2(pos2ConsiderP, pos2, 24).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
								_Utils_Tuple2(
								A2(pos2ConsiderP, pos2, 24).a,
								A2(pos2ConsiderP, pos2, 24).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 2)),
								_Utils_Tuple2(
								A2(pos1ConsiderP, pos1, 24).a,
								A2(pos1ConsiderP, pos1, 24).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 2))
							]))),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(drawSecondLine),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(drawNote)
				]));
	});
var $author$project$MusicCreator$drawNotesWithExtraLineWithGroup = F3(
	function (model, listOfNote, ts) {
		var nonSelect = function (list) {
			return A2(
				$elm$core$List$filter,
				function (_v2) {
					var name = _v2.a;
					var n = _v2.b;
					return _Utils_eq(n.dragState, $author$project$MusicCreatorDef$Released);
				},
				list);
		};
		var ifSelectNoteDrage = $author$project$MusicCreatorFunctions$ifDraggedNote(
			$elm$core$Dict$toList(model.selectNoteDict));
		var ifScoreNoteDrag = $author$project$MusicCreatorFunctions$ifDraggedNote(model.scoreNoteList);
		var ifRotate = F2(
			function (pos, note) {
				return ((_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) && (!$author$project$MusicCreatorDef$ifRest(note))) ? $MacCASOutreach$graphicsvg$GraphicSVG$rotate(
					$elm$core$Basics$degrees(180)) : $MacCASOutreach$graphicsvg$GraphicSVG$rotate(
					$elm$core$Basics$degrees(0));
			});
		var ifFlip = function (pos) {
			return (_Utils_cmp(pos.b, 0 + $author$project$MusicCreatorDef$moveYscore) > -1) ? $author$project$MusicCreatorDef$Flip : $author$project$MusicCreatorDef$UnFlip;
		};
		var groupList = A2(
			$author$project$MusicCreatorFunctions$groupNoteList,
			nonSelect(listOfNote),
			ts);
		return (ifScoreNoteDrag || ifSelectNoteDrage) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2($author$project$MusicCreator$drawNotesWithExtraLine, model.scoreNoteList, model.time),
					ifSelectNoteDrage ? A3($author$project$MusicCreator$drawLyric, groupList, listOfNote, model.time) : A3(
					$author$project$MusicCreator$drawLyric,
					groupList,
					nonSelect(listOfNote),
					model.time)
				])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					$author$project$MusicCreator$drawTie(groupList),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
					A2(
						$elm$core$List$map,
						function (a) {
							if (a.$ === 'Single') {
								var s = a.a;
								return A2(
									$author$project$MusicCreator$drawNotesWithExtraLine,
									_List_fromArray(
										[s]),
									model.time);
							} else {
								var g = a.a;
								return $MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											$MacCASOutreach$graphicsvg$GraphicSVG$group(
											A2(
												$elm$core$List$map,
												function (_v1) {
													var name = _v1.a;
													var gs = _v1.b;
													return A2($author$project$MusicCreator$drawExtraLine, gs.pos, $author$project$MusicCreatorDef$Dragging);
												},
												g)),
											A2($author$project$MusicCreator$drawgroup, g, model.time)
										]));
							}
						},
						groupList)),
					A3($author$project$MusicCreator$drawLyric, groupList, listOfNote, model.time),
					$author$project$MusicCreator$drawSlurAfterSelect(groupList)
				]));
	});
var $author$project$DrawMusic$ts24 = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	1.5,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('2'))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -10),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('4'))))
			])));
var $author$project$DrawMusic$ts34 = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	1.5,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('3'))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -9.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('4'))))
			])));
var $author$project$DrawMusic$ts44 = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	1.5,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('4'))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -9.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('4'))))
			])));
var $author$project$MusicCreatorFunctions$drawTS = function (ts) {
	switch (ts.$) {
		case 'Ts44':
			return $author$project$DrawMusic$ts44;
		case 'Ts34':
			return $author$project$DrawMusic$ts34;
		default:
			return $author$project$DrawMusic$ts24;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$darkGray = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 186, 189, 182, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$lightGray = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 238, 238, 236, 1);
var $author$project$DrawMusic$trashCanClosed = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 24, 26, 3))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 17),
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(2),
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10, 6, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 14.5),
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$gray,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 30, 5, 2.25)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(12, 9),
							_Utils_Tuple2(-12, 9),
							_Utils_Tuple2(-15, 13),
							_Utils_Tuple2(15, 13)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-7.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-2.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(2.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(7.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1)))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$rectangle = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rect, w, h);
	});
var $author$project$DrawMusic$trashCanOpen = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(2, 14),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.2,
					A2($author$project$DrawMusic$eighthN, $author$project$MusicCreatorDef$UnFlip, false)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 24, 26, 3))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(18, 4),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-155),
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.2, $author$project$DrawMusic$treble)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(12, 9),
							_Utils_Tuple2(-12, 9),
							_Utils_Tuple2(-15, 13),
							_Utils_Tuple2(15, 13)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-7.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-2.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(2.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(7.5, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$lightGray,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 16, 1))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(16.8, -12),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(10),
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.2,
						A2($author$project$DrawMusic$quarterN, false, $author$project$MusicCreatorDef$UnFlip))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(6, -12),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-20),
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.2,
						$author$project$DrawMusic$sixteenthN($author$project$MusicCreatorDef$UnFlip))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(17, 15),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-60),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.3, $author$project$DrawMusic$wholeR))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(17, -2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(60),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.3, $author$project$DrawMusic$wholeR))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(23, 5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(30),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.1,
					$author$project$DrawMusic$quarterR(false)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(25, -8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.1,
				$author$project$DrawMusic$eighthR(false))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-2, 2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(20),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$clip,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, 17),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 32, 9))),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 17),
								A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
									$MacCASOutreach$graphicsvg$GraphicSVG$solid(2),
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10, 6, 1))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 14.5),
								A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
									$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$gray,
										A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 30, 5, 2.25)))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 12.5),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 29.5, 2)))
							])))))
		]));
var $author$project$MusicCreator$drawTrashCan = function (model) {
	var _v0 = model.trashState;
	if (_v0.$ === 'Open') {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					model.trashPos,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.6, $author$project$DrawMusic$trashCanOpen))
				]));
	} else {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					model.trashPos,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.6, $author$project$DrawMusic$trashCanClosed))
				]));
	}
};
var $author$project$MusicCreator$getShape = function (idx) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, def) {
				var index = _v0.a;
				var instrument = _v0.b;
				return _Utils_eq(
					index,
					A2($elm$core$Basics$modBy, 12, idx)) ? instrument : def;
			}),
		$author$project$MusicDef$Piano,
		$author$project$MusicCreator$instrumentIndexList);
};
var $author$project$MusicCreator$ArrowScroll = function (a) {
	return {$: 'ArrowScroll', a: a};
};
var $author$project$MusicCreatorDef$Downarrow = {$: 'Downarrow'};
var $author$project$MusicCreator$EndScroll = {$: 'EndScroll'};
var $author$project$MusicCreator$Scroll = function (a) {
	return {$: 'Scroll', a: a};
};
var $author$project$MusicCreator$StartScroll = function (a) {
	return {$: 'StartScroll', a: a};
};
var $author$project$MusicCreatorDef$Uparrow = {$: 'Uparrow'};
var $author$project$MusicCreator$UpdateInstrument = {$: 'UpdateInstrument'};
var $MacCASOutreach$graphicsvg$GraphicSVG$blue = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 52, 101, 164, 1);
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Broken = F2(
	function (a, b) {
		return {$: 'Broken', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$dotted = function (th) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$Broken,
		_List_fromArray(
			[
				_Utils_Tuple2(th, th)
			]),
		th);
};
var $author$project$DrawMusic$electricGuitar = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 185, 27, 16),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-32.50, -11.47),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-38.67, -9.949),
						_Utils_Tuple2(-36.84, 1.2749)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-35.31, 7.1673),
						_Utils_Tuple2(-41.17, 3.0597)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-46.01, -1.037),
						_Utils_Tuple2(-45.25, -9.434)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-44.82, -19.17),
						_Utils_Tuple2(-52.39, -20.90)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-57.49, -22.57),
						_Utils_Tuple2(-62.59, -24.73)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-68.71, -28.46),
						_Utils_Tuple2(-67.44, -38.50)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-63.36, -52.23),
						_Utils_Tuple2(-54.69, -55.07)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-42.12, -61.05),
						_Utils_Tuple2(-34.54, -55.84)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-24.29, -49.87),
						_Utils_Tuple2(-26.64, -41.30)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.61, -34.03),
						_Utils_Tuple2(-20.78, -29.06)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-16.03, -27.42),
						_Utils_Tuple2(-13.89, -21.67)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-12.50, -18.65),
						_Utils_Tuple2(-17.72, -20.14)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-22.10, -21.25),
						_Utils_Tuple2(-25.88, -18.35)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.06, -14.78),
						_Utils_Tuple2(-32.50, -11.47))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-41.94, -43.85),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-40.03, -47.18),
						_Utils_Tuple2(-36.33, -49.21)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-31.18, -51.36),
						_Utils_Tuple2(-31.74, -44.62)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-31.61, -40.41),
						_Utils_Tuple2(-31.49, -36.20)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-31.93, -33.05),
						_Utils_Tuple2(-28.17, -28.81)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-23.14, -24.56),
						_Utils_Tuple2(-27.92, -24.22)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.81, -23.84),
						_Utils_Tuple2(-29.70, -23.45)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-32.63, -19.63),
						_Utils_Tuple2(-35.56, -15.80)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-38.18, -14.11),
						_Utils_Tuple2(-39.90, -18.61)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-41.88, -25.22),
						_Utils_Tuple2(-48.57, -27.53)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-59.13, -33.29),
						_Utils_Tuple2(-52.39, -38.24)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-46.91, -41.68),
						_Utils_Tuple2(-41.94, -43.85))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 71, 45, 34),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(1.4023, 36.462),
						_Utils_Tuple2(7.7, 32.5),
						_Utils_Tuple2(-31.1, -26.6),
						_Utils_Tuple2(-39.13, -21.7),
						_Utils_Tuple2(1.4023, 36.462)
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-35.7, -25.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10.5, 3, 0.5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-40.2, -32.2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10.5, 3, 0.5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-44.3, -37.7),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10.5, 3, 0.5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-33.5, -22),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$red,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10.5, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-30.7, -18),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10.5, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-27.8, -13.2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 10, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-24, -8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 9.8, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-20.8, -3),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 9.6, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-18, 1.4),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 9.4, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-14.1, 7),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 9.2, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-10.5, 12),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 8.8, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-7.5, 16.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 8.4, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-4.2, 21.8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 8, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-1, 26),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 8, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(2.2, 31),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 7.6, 0.7, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(5, 34.8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-31.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 160, 154),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 7.6, 0.9, 0.25)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(1.5, 42),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 85, 94, 120),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(4, 44.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 85, 94, 120),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(6.5, 47),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 85, 94, 120),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(9.5, 49.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 85, 94, 120),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(12, 52),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 85, 94, 120),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(15, 54),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(45),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 85, 94, 120),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 231, 200, 135),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(1.6573, 37.227),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(4.8446, 35.314),
						_Utils_Tuple2(8.0318, 33.402)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.964, 34.039),
						_Utils_Tuple2(13.896, 34.677)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(14.661, 38.756),
						_Utils_Tuple2(15.426, 42.836)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(16.206, 44.913),
						_Utils_Tuple2(18.486, 48.191)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(20.841, 48.808),
						_Utils_Tuple2(18.996, 52.525)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(17.478, 53.748),
						_Utils_Tuple2(14.661, 52.270)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.1593, 46.661),
						_Utils_Tuple2(1.6573, 41.051)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.6573, 39.266),
						_Utils_Tuple2(1.6573, 37.227))
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 120, 120, 120),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-49.33, -38.24),
						_Utils_Tuple2(3.9521, 39.266),
						_Utils_Tuple2(-49.33, -38.24)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 120, 120, 120),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-48.57, -38.75),
						_Utils_Tuple2(6.7569, 41.306),
						_Utils_Tuple2(-48.57, -38.75)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 120, 120, 120),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-46.78, -39.77),
						_Utils_Tuple2(9.5617, 43.601),
						_Utils_Tuple2(-46.78, -39.77)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 120, 120, 120),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-45.76, -40.28),
						_Utils_Tuple2(12.621, 45.896),
						_Utils_Tuple2(-45.76, -40.28)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 120, 120, 120),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-44.74, -41.05),
						_Utils_Tuple2(14.916, 48.446),
						_Utils_Tuple2(-44.74, -41.05)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 120, 120, 120),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-43.47, -41.81),
						_Utils_Tuple2(17.211, 48.956),
						_Utils_Tuple2(-43.47, -41.81)
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-47.7, -43),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-32.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 28, 19, 14),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 12, 7, 0.5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(3.4, 39.25),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 192, 192, 192),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.9))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(5.9, 41.75),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 192, 192, 192),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.9))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(9, 44),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 192, 192, 192),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.9))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(11.9, 46.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 192, 192, 192),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.9))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(14.3, 48.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 192, 192, 192),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.9))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(17.3, 50),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 192, 192, 192),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.9))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-35.2, -47.5),
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$dotted(0.5),
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.25))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-34.5, -42),
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$dotted(0.5),
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5)))
		]));
var $author$project$DrawMusic$recorder = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 245, 222, 180),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(82.285, 31.960),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(75.549, 33.682),
							_Utils_Tuple2(64.312, 26.803)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(62.593, 27.406),
							_Utils_Tuple2(60.874, 25.709)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(56.436, 21.098),
							_Utils_Tuple2(32.898, 13.987)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(32.382, 14.387),
							_Utils_Tuple2(30.866, 13.987)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(26.963, 14.146),
							_Utils_Tuple2(24.459, 10.705)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(20.874, 10.011),
							_Utils_Tuple2(21.489, 8.5177)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-7.189, -3.047),
							_Utils_Tuple2(-35.86, -14.61)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-36.01, -14.31),
							_Utils_Tuple2(-38.05, -14.61)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-39.20, -15.00),
							_Utils_Tuple2(-39.15, -15.70)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-44.29, -17.69),
							_Utils_Tuple2(-49.93, -18.98)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-50.30, -20.16),
							_Utils_Tuple2(-49.77, -21.33)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-51.55, -20.43),
							_Utils_Tuple2(-53.52, -22.42)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-55.08, -25.38),
							_Utils_Tuple2(-65.25, -23.05)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-66.27, -32.27),
							_Utils_Tuple2(-60.09, -36.49)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-54.52, -29.15),
							_Utils_Tuple2(-50.55, -28.52)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-48.15, -29.79),
							_Utils_Tuple2(-47.74, -26.95)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-46.68, -28.66),
							_Utils_Tuple2(-46.02, -28.67)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-40.94, -27.03),
							_Utils_Tuple2(-35.86, -23.99)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-33.50, -24.70),
							_Utils_Tuple2(-32.74, -22.42)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-3.829, -11.40),
							_Utils_Tuple2(25.084, -0.390)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(26.881, -3.184),
							_Utils_Tuple2(28.678, -0.078)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(33.145, -2.390),
							_Utils_Tuple2(35.711, 1.7973)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(37.036, 1.4724),
							_Utils_Tuple2(36.962, 3.0476)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(61.025, 13.376),
							_Utils_Tuple2(66.188, 13.206)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(69.322, 12.594),
							_Utils_Tuple2(69.157, 15.081)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(80.418, 14.217),
							_Utils_Tuple2(85.880, 23.052)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(84.161, 27.428),
							_Utils_Tuple2(82.285, 31.960))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 208, 172, 126),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-50.09, -19.45),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-48.68, -25.09),
							_Utils_Tuple2(-46.18, -28.52)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-44.76, -29.24),
							_Utils_Tuple2(-43.83, -27.27)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-45.85, -23.87),
							_Utils_Tuple2(-47.27, -18.67)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-48.22, -18.18),
							_Utils_Tuple2(-50.09, -19.45))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 208, 172, 126),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-38.83, -15.39),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-38.04, -19.91),
							_Utils_Tuple2(-35.55, -23.83)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-33.20, -24.20),
							_Utils_Tuple2(-33.05, -22.58)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-35.16, -18.67),
							_Utils_Tuple2(-35.86, -14.76)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-36.22, -13.85),
							_Utils_Tuple2(-38.83, -15.39))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 208, 172, 126),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(21.958, 9.6117),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(22.840, 3.5916),
							_Utils_Tuple2(26.021, -1.328)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(28.500, -1.968),
							_Utils_Tuple2(28.678, 0.3907)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(25.997, 4.9419),
							_Utils_Tuple2(24.615, 10.393)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(23.458, 10.580),
							_Utils_Tuple2(21.958, 9.6117))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 208, 172, 126),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(30.866, 13.050),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(33.054, 7.5799),
							_Utils_Tuple2(35.242, 2.1098)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(37.302, 0.4131),
							_Utils_Tuple2(36.962, 3.5164)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(34.930, 8.6739),
							_Utils_Tuple2(32.898, 13.831)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(31.404, 14.718),
							_Utils_Tuple2(30.866, 13.050))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 208, 172, 126),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(66.188, 13.206),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(68.944, 12.394),
							_Utils_Tuple2(69.001, 15.081)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(66.735, 20.864),
							_Utils_Tuple2(64.468, 26.647)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(62.905, 27.684),
							_Utils_Tuple2(61.343, 26.021)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(63.765, 19.692),
							_Utils_Tuple2(66.188, 13.206))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-42.25, -19.25),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-65),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 2.5))))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-41.7, -22),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-31.25, -19.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-31.85, -16.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.25)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-23.5, -14.8),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(2)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-13.5, -10.75),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.25)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-4.25, -7.2),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(2)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(7, -2.75),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(2)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(17.5, 1.25),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(2)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.75),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 154, 130, 94),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(61.812, 21.063),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(62.622, 19.281),
							_Utils_Tuple2(63.432, 17.498)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(58.494, 12.964),
							_Utils_Tuple2(55.655, 15.230)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(55.169, 16.283),
							_Utils_Tuple2(54.683, 17.336)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(55.079, 19.600),
							_Utils_Tuple2(61.812, 21.063))
						]))))
		]));
var $author$project$DrawMusic$sitar = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 158, 22, 18),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-38.65, -55.89),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-59.14, -46.86),
						_Utils_Tuple2(-62.72, -27.42)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-61.79, -7.977),
						_Utils_Tuple2(-44.67, -11.22)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-40.50, -33.33),
						_Utils_Tuple2(-38.65, -55.89))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(57.1, 35.2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-60),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 8, 0.75)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(61.8, 37.7),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-60),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 8, 0.75)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(66, 40.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-60),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 5, 0.75)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 92, 1, 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(-17.59, -15.85),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-15.04, -19.67),
							_Utils_Tuple2(-12.49, -23.49)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-15.43, -27.86),
							_Utils_Tuple2(-15.27, -31.13)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-15.88, -38.19),
							_Utils_Tuple2(-17.59, -45.25)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-21.86, -66.08),
							_Utils_Tuple2(-40.73, -54.50)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-51.31, -46.54),
							_Utils_Tuple2(-55.78, -32.98)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-61.74, -8.417),
							_Utils_Tuple2(-39.81, -12.15)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-33.21, -12.92),
							_Utils_Tuple2(-26.61, -15.39)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-22.02, -16.89),
							_Utils_Tuple2(-17.59, -15.85))
						])))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A3(
				$elm$core$List$map2,
				F2(
					function (x, y) {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(x, y),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(1.7, -2.5),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(-58),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 5, 0.5)))));
					}),
				_List_fromArray(
					[-13.3, -7.4, -1.5, 4.4, 10.3, 16.2, 22.1, 28, 33.9, 39.8, 45.7]),
				_List_fromArray(
					[-6.1, -2.3, 1.5, 5.3, 9.1, 12.9, 16.7, 20.5, 24.3, 28.1, 31.9]))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A3(
				$elm$core$List$map2,
				F2(
					function (x, y) {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(x, y),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
								$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5)));
					}),
				_List_fromArray(
					[-13.3, -7.4, -1.5, 4.4, 10.3, 16.2, 22.1, 28, 33.9, 39.8, 45.7]),
				_List_fromArray(
					[-6.1, -2.3, 1.5, 5.3, 9.1, 12.9, 16.7, 20.5, 24.3, 28.1, 31.9]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(20, 2.6),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(33),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 92, 1, 0),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 126, 11)))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A3(
				$elm$core$List$map2,
				F2(
					function (x, y) {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(x, y),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(6.8, -8.8),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(-58),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 8, 0.5)))));
					}),
				_List_fromArray(
					[-13.3, -7.4, -1.5, 4.4, 10.3, 16.2, 22.1, 28, 33.9, 39.8, 45.7]),
				_List_fromArray(
					[-6.1, -2.3, 1.5, 5.3, 9.1, 12.9, 16.7, 20.5, 24.3, 28.1, 31.9]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(21, 3),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(33),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 80, 8.5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(66, 32.2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(33),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 15, 8.5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(63.6, 44.3),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(59.2, 41.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(54.8, 38.7),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 49, 1, 1),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 168, 2, 2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-34.02, -41.77),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-35.24, -46.04),
						_Utils_Tuple2(-32.17, -47.10)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.65, -46.91),
						_Utils_Tuple2(-28.93, -42.93)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.69, -37.55),
						_Utils_Tuple2(-34.95, -39.46)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-37.26, -40.33),
						_Utils_Tuple2(-38.88, -43.39)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-39.60, -53.77),
						_Utils_Tuple2(-30.32, -54.74)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-21.15, -54.25),
						_Utils_Tuple2(-21.29, -43.86)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-20.64, -35.56),
						_Utils_Tuple2(-17.59, -31.36)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-22.56, -34.01),
						_Utils_Tuple2(-23.84, -40.15)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-22.83, -46.39),
						_Utils_Tuple2(-25.92, -48.72)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-27.74, -49.37),
						_Utils_Tuple2(-29.85, -49.41)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.81, -50.22),
						_Utils_Tuple2(-27.77, -51.03)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.87, -55.22),
						_Utils_Tuple2(-35.18, -49.41)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-36.76, -45.25),
						_Utils_Tuple2(-34.02, -41.77))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 168, 2, 2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-43.28, -28.12),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-48.45, -28.00),
						_Utils_Tuple2(-46.52, -24.18)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-43.33, -21.33),
						_Utils_Tuple2(-39.34, -25.57)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-36.99, -29.20),
						_Utils_Tuple2(-45.13, -31.82)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-51.05, -31.16),
						_Utils_Tuple2(-52.77, -26.50)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-55.00, -17.89),
						_Utils_Tuple2(-49.53, -15.39)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-44.09, -13.57),
						_Utils_Tuple2(-38.65, -15.85)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-31.22, -18.69),
						_Utils_Tuple2(-26.38, -17.24)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.99, -22.11),
						_Utils_Tuple2(-37.49, -19.09)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-47.37, -15.74),
						_Utils_Tuple2(-48.14, -20.48)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-48.60, -19.09),
						_Utils_Tuple2(-49.07, -17.70)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-52.96, -19.27),
						_Utils_Tuple2(-49.76, -26.03)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-46.40, -30.70),
						_Utils_Tuple2(-43.28, -28.12))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-35.25, -33.25),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(33),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 3.5, 8.2)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-32, -31.25),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(33),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 2, 6.2)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(62.726, 28.817),
						_Utils_Tuple2(-45.83, -41.54),
						_Utils_Tuple2(62.726, 28.817)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(62.032, 29.511),
						_Utils_Tuple2(-46.52, -40.62),
						_Utils_Tuple2(62.032, 29.511)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(60.875, 29.743),
						_Utils_Tuple2(-46.98, -39.92),
						_Utils_Tuple2(60.875, 29.743)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(61.106, 30.900),
						_Utils_Tuple2(-47.68, -39.23),
						_Utils_Tuple2(61.106, 30.900)
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(63, 30.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(68.5, 33.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(2))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-46, -40),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(33),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 228, 181, 110),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 3.5, 7))))
		]));
var $author$project$DrawMusic$shadeForTrumpet = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(57.498, 8.6693),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(55.459, -2.470),
						_Utils_Tuple2(27.920, 4.5896)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-15.93, 4.5896),
						_Utils_Tuple2(-59.79, 4.5896)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-61.45, -16.57),
						_Utils_Tuple2(-63.10, -37.73)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(11.856, -43.21),
						_Utils_Tuple2(86.820, -48.70)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(72.669, -20.39),
						_Utils_Tuple2(57.498, 8.6693))
					])))
		]));
var $author$project$DrawMusic$trumpet = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 250, 203, 61),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-59.79, 2.0398),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-57.89, 3.3597),
						_Utils_Tuple2(-45.00, 4.0796)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.854, 4.8872),
						_Utils_Tuple2(29.195, 2.2948)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(45.496, 2.8231),
						_Utils_Tuple2(57.498, -17.84)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(57.498, 6.3745),
						_Utils_Tuple2(57.498, 30.597)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(44.016, 8.9659),
						_Utils_Tuple2(26.135, 9.4342)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-10.32, 9.1792),
						_Utils_Tuple2(-46.78, 8.9243)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-55.19, 7.8442),
						_Utils_Tuple2(-59.79, 10.964)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-59.66, 6.5019),
						_Utils_Tuple2(-59.79, 2.0398))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
			0.5,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$clip,
				$author$project$DrawMusic$shadeForTrumpet,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 182, 26),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-59.79, 2.0398),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-57.89, 3.3597),
								_Utils_Tuple2(-45.00, 4.0796)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-1.854, 4.8872),
								_Utils_Tuple2(29.195, 2.2948)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(45.496, 2.8231),
								_Utils_Tuple2(57.498, -17.84)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(57.498, 6.3745),
								_Utils_Tuple2(57.498, 30.597)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(44.016, 8.9659),
								_Utils_Tuple2(26.135, 9.4342)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-10.32, 9.1792),
								_Utils_Tuple2(-46.78, 8.9243)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-55.19, 7.8442),
								_Utils_Tuple2(-59.79, 10.964)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-59.66, 6.5019),
								_Utils_Tuple2(-59.79, 2.0398))
							]))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-26.2, 5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 163, 43),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 4, 22))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-17, 5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 163, 43),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 4, 22))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-7.4, 5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 163, 43),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 4, 22))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-7.4, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 187, 45),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 6.8, 22, 1.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-17, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 187, 45),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 6.8, 22, 1.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-26.2, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 248, 187, 45),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 6.8, 22, 1.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-26.2, 15.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 245, 188, 48),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 7, 2, 0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-17, 15.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 245, 188, 48),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 7, 2, 0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-7.4, 15.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 245, 188, 48),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 7, 2, 0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-12, -3),
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(3),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 252, 189, 53),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 60, 26, 12))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-11, -1.25),
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
				$MacCASOutreach$graphicsvg$GraphicSVG$solid(3),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 214, 97),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 60, 26, 12)))
		]));
var $author$project$DrawMusic$bowForViolin = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 130, 64, 30),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-47.80, -38.75),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-50.62, -39.13),
						_Utils_Tuple2(-49.84, -36.20)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-5.099, 12.749),
						_Utils_Tuple2(39.649, 61.705)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(41.179, 59.867),
						_Utils_Tuple2(42.709, 60.430)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(41.689, 59.282),
						_Utils_Tuple2(40.669, 58.135)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(39.649, 58.772),
						_Utils_Tuple2(38.629, 59.410)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.5498, 18.486),
						_Utils_Tuple2(-33.52, -22.43)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-33.40, -22.94),
						_Utils_Tuple2(-33.27, -23.45)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-37.37, -30.45),
						_Utils_Tuple2(-30.98, -25.24)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.08, -25.69),
						_Utils_Tuple2(-30.98, -27.53)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-34.67, -31.87),
						_Utils_Tuple2(-38.37, -36.20)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-40.66, -34.29),
						_Utils_Tuple2(-42.96, -32.38)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-45.25, -35.31),
						_Utils_Tuple2(-47.55, -38.24))
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-30.72, -25.49),
						_Utils_Tuple2(40.669, 58.135),
						_Utils_Tuple2(-30.72, -25.49)
					])))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$darkBrown = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 143, 89, 2, 1);
var $author$project$DrawMusic$violin = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(53.5, 43),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-40),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 38, 28, 20),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 3, 0.8)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(55, 42),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(47),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 88, 82, 52),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 1.4, 3.6)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(56.5, 44.8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-40),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 38, 28, 20),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 3, 0.8)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(57.5, 44.1),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-35),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 38, 28, 20),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 1.6, 3.8)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(58, 44),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-35),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 88, 82, 52),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 1.4, 3.8)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(48, 47),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-40),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 38, 28, 20),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 2.4, 1)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(47.5, 47.2),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(-35),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 88, 82, 52),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 1.6, 3.8)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(51.5, 48.8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(80),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 88, 82, 52),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 3.8)))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 84, 22, 19),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 84, 22, 19),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(43.515, 16.549),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(50.922, 8.6928),
							_Utils_Tuple2(45.830, 1.7359)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(39.923, -5.256),
							_Utils_Tuple2(39.117, -8.448)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(36.077, -7.211),
							_Utils_Tuple2(32.636, -9.374)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(29.153, -13.45),
							_Utils_Tuple2(28.470, -18.63)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(28.471, -20.32),
							_Utils_Tuple2(32.173, -25.11)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(29.219, -28.73),
							_Utils_Tuple2(29.164, -33.44)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(26.214, -49.50),
							_Utils_Tuple2(8.5641, -51.96)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-8.103, -52.86),
							_Utils_Tuple2(-15.97, -40.15)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(13.656, -11.57),
							_Utils_Tuple2(43.515, 16.549))
						])))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 240, 154, 56),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 211, 89, 48),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(36.802, 22.104),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(48.886, 15.537),
							_Utils_Tuple2(40.969, 5.6708)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(35.673, 1.0045),
							_Utils_Tuple2(35.877, -2.661)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(33.005, -1.521),
							_Utils_Tuple2(28.933, -4.282)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(25.271, -7.861),
							_Utils_Tuple2(23.609, -13.54)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(22.008, -22.68),
							_Utils_Tuple2(28.007, -20.02)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(24.639, -22.19),
							_Utils_Tuple2(24.072, -29.97)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(20.508, -49.19),
							_Utils_Tuple2(-5.555, -45.01)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-8.216, -44.20),
							_Utils_Tuple2(-10.87, -43.39)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-30.31, -31.51),
							_Utils_Tuple2(-9.952, -15.62)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-7.677, -14.70),
							_Utils_Tuple2(-8.101, -10.99)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-6.673, -13.97),
							_Utils_Tuple2(-2.546, -12.15)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(4.9618, -8.033),
							_Utils_Tuple2(7.8698, -0.115)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(8.3624, 3.4174),
							_Utils_Tuple2(5.5551, 4.0506)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(8.7254, 5.5310),
							_Utils_Tuple2(8.7956, 8.9113)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(13.061, 22.286),
							_Utils_Tuple2(29.627, 23.262)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(33.215, 22.799),
							_Utils_Tuple2(36.802, 22.104))
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 211, 89, 48),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(36.802, 22.336),
						_Utils_Tuple2(40.043, 27.428),
						_Utils_Tuple2(37.960, 22.104),
						_Utils_Tuple2(36.802, 22.336)
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-8, -44),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-7.522, -45.25),
						_Utils_Tuple2(-6.2, -44.5)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(0.4629, -34.37),
						_Utils_Tuple2(7.4068, -23.26)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.1405, -23.15),
						_Utils_Tuple2(-0.925, -20.25)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-4.745, -32.40),
						_Utils_Tuple2(-8, -44))
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 84, 22, 19),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(21.757, -0.347),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(35.645, 21.410),
							_Utils_Tuple2(49.533, 43.168)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(47.913, 43.631),
							_Utils_Tuple2(46.292, 44.094)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(30.553, 23.493),
							_Utils_Tuple2(14.813, 2.8933)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(18.285, 1.7415),
							_Utils_Tuple2(21.757, -0.347))
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(46.292, 44.094),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(49.293, 47.205),
						_Utils_Tuple2(53.699, 48.954)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(57.544, 48.846),
						_Utils_Tuple2(55.088, 51.037)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(55.279, 56.908),
						_Utils_Tuple2(61.569, 54.278)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(64.019, 51.735),
						_Utils_Tuple2(61.569, 48.491)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(55.898, 45.482),
						_Utils_Tuple2(50.227, 42.473)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(48.723, 43.631),
						_Utils_Tuple2(46.292, 44.094))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.5,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(59, -40),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-59.02, 15.392),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-55.27, 17.649),
								_Utils_Tuple2(-59.02, 17.707)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-60.18, 18.196),
								_Utils_Tuple2(-60.64, 16.086)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-60.92, 13.663),
								_Utils_Tuple2(-58.09, 13.540)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-52.21, 14.196),
								_Utils_Tuple2(-49.53, 20.253)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-41.09, 36.328),
								_Utils_Tuple2(-38.65, 34.603)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-37.72, 34.603),
								_Utils_Tuple2(-36.80, 34.603)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-38.80, 32.633),
								_Utils_Tuple2(-37.49, 31.363)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-34.70, 31.399),
								_Utils_Tuple2(-35.41, 34.835)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-40.78, 38.813),
								_Utils_Tuple2(-47.45, 27.891)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-52.86, 15.976),
								_Utils_Tuple2(-56.47, 15.160)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-57.86, 13.658),
								_Utils_Tuple2(-59.02, 15.392))
							]))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 250, 201, 142),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(2.0831, -10.99),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(5.2079, -12.26),
						_Utils_Tuple2(8.3327, -13.54)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(9.0271, -15.04),
						_Utils_Tuple2(9.7215, -16.54)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.4810, -15.16),
						_Utils_Tuple2(3.2405, -13.77)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.6618, -12.49),
						_Utils_Tuple2(2.0831, -10.99))
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(5, -25),
						_Utils_Tuple2(7.6383, -13.54),
						_Utils_Tuple2(49.533, 43.399),
						_Utils_Tuple2(58.097, 48.491),
						_Utils_Tuple2(49.533, 43.399),
						_Utils_Tuple2(7.6383, -13.54),
						_Utils_Tuple2(5, -25)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(3.2, -24.3),
						_Utils_Tuple2(6.2495, -12.84),
						_Utils_Tuple2(48.607, 43.631),
						_Utils_Tuple2(58.792, 48.954),
						_Utils_Tuple2(48.607, 43.631),
						_Utils_Tuple2(6.2495, -12.84),
						_Utils_Tuple2(3.2, -24.3)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(1.5, -23.8),
						_Utils_Tuple2(4.3978, -11.92),
						_Utils_Tuple2(47.450, 43.862),
						_Utils_Tuple2(58.560, 48.954),
						_Utils_Tuple2(47.450, 43.862),
						_Utils_Tuple2(4.3978, -11.92),
						_Utils_Tuple2(1.5, -23.8)
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
			$MacCASOutreach$graphicsvg$GraphicSVG$white,
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(-0.2, -23),
						_Utils_Tuple2(2.7775, -11.45),
						_Utils_Tuple2(46.755, 44.325),
						_Utils_Tuple2(57.634, 48.954),
						_Utils_Tuple2(46.755, 44.325),
						_Utils_Tuple2(2.7775, -11.45),
						_Utils_Tuple2(-0.2, -23)
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(5, -25),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$gray,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(3.2, -24.3),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$gray,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(1.5, -23.8),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$gray,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-0.2, -23),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$gray,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.5))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(62.264, 53.121),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(65.242, 47.904),
						_Utils_Tuple2(55.320, 44.788)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(53.249, 44.315),
						_Utils_Tuple2(52.079, 42.242)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(48.825, 40.652),
						_Utils_Tuple2(49.070, 43.862)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(49.498, 47.030),
						_Utils_Tuple2(54.625, 47.797)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(57.530, 47.373),
						_Utils_Tuple2(57.634, 49.649)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(58.907, 51.848),
						_Utils_Tuple2(62.264, 53.121))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(5, -20),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.5,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(27.155, -2.804),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(26.570, -0.452),
								_Utils_Tuple2(28.685, 0)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(30.245, -0.397),
								_Utils_Tuple2(29.705, -2.294)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(29.287, -5.169),
								_Utils_Tuple2(25.370, -4.844)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(21.480, -4.372),
								_Utils_Tuple2(21.290, 0)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(21.638, 4.2296),
								_Utils_Tuple2(23.585, 8.1593)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(30.860, 19.598),
								_Utils_Tuple2(31.235, 22.438)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(32.535, 25.510),
								_Utils_Tuple2(31.235, 27.282)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(29.705, 28.082),
								_Utils_Tuple2(28.175, 27.282)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(30.005, 24.757),
								_Utils_Tuple2(26.135, 24.733)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(24.612, 25.917),
								_Utils_Tuple2(26.390, 28.302)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(29.795, 30.057),
								_Utils_Tuple2(32, 28.812)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(35.242, 27.400),
								_Utils_Tuple2(33.784, 19.888)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(29.067, 11.219),
								_Utils_Tuple2(24.350, 2.5498)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(22.778, -1.027),
								_Utils_Tuple2(24.605, -2.804)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(25.902, -3.634),
								_Utils_Tuple2(27.155, -2.804))
							]))))),
			$author$project$DrawMusic$bowForViolin
		]));
var $author$project$DrawMusic$drawInstrument = function (instrument) {
	var instrumentModel = function () {
		switch (instrument.$) {
			case 'Piano':
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Piano'));
			case 'Recorder':
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
							0.5,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(60)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-6, 0),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.7, $author$project$DrawMusic$recorder))
						]));
			case 'Flute':
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Flute'));
			case 'Bass':
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Bass'));
			case 'Violin':
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
							0.5,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(60)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-11, 0),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.8, $author$project$DrawMusic$violin))
						]));
			case 'Trumpet':
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
							0.5,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(60)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(2.5, 0),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.8, $author$project$DrawMusic$trumpet))
						]));
			case 'Sitar':
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
							0.5,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(60)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-2, 0),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.7, $author$project$DrawMusic$sitar))
						]));
			case 'ElectricGuitar':
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
							0.5,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(60)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(18, 0),
							A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.85, $author$project$DrawMusic$electricGuitar))
						]));
			case 'Marimba':
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Marimba'));
			case 'Cello':
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Cello'));
			case 'Tuba':
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Tuba'));
			default:
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('Timpani'));
		}
	}();
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.1, instrumentModel)
			]));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$MouseUp, msg, shape);
	});
var $author$project$MusicCreator$instrumentSelector = function (model) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-15, 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.5,
					$author$project$DrawMusic$drawInstrument(
						$author$project$MusicCreator$getShape(model.focus - 2)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(15, 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.5,
					$author$project$DrawMusic$drawInstrument(
						$author$project$MusicCreator$getShape(model.focus + 2)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-10, 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.8,
					$author$project$DrawMusic$drawInstrument(
						$author$project$MusicCreator$getShape(model.focus - 1)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(10, 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.8,
					$author$project$DrawMusic$drawInstrument(
						$author$project$MusicCreator$getShape(model.focus + 1)))),
				$author$project$DrawMusic$drawInstrument(
				$author$project$MusicCreator$getShape(model.focus)),
				function () {
				var _v0 = model.scroll;
				if (_v0.$ === 'Waiting') {
					return A2(
						$elm$core$Basics$composeR,
						$MacCASOutreach$graphicsvg$GraphicSVG$filled(
							A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 0, 0, 255, 0)),
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt($author$project$MusicCreator$StartScroll));
				} else {
					return A2(
						$elm$core$Basics$composeR,
						$MacCASOutreach$graphicsvg$GraphicSVG$filled(
							A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 0, 106, 255, 0.1)),
						A2(
							$elm$core$Basics$composeR,
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt($author$project$MusicCreator$Scroll),
							A2(
								$elm$core$Basics$composeR,
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave($author$project$MusicCreator$EndScroll),
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp($author$project$MusicCreator$EndScroll))));
				}
			}()(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 40, 13)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
				$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$InstrumentZoomUp),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
					$author$project$MusicCreator$UpdateInstrument,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$MusicCreator$ArrowScroll($author$project$MusicCreatorDef$Uparrow),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
							$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$InstrumentZoomUp),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(25, 0),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$scale,
									model.instrumentUp,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										(model.instrumentUp === 1.4) ? $MacCASOutreach$graphicsvg$GraphicSVG$blue : $MacCASOutreach$graphicsvg$GraphicSVG$black,
										$MacCASOutreach$graphicsvg$GraphicSVG$triangle(3)))))))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
				$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$InstrumentZoomDown),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
					$author$project$MusicCreator$UpdateInstrument,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$MusicCreator$ArrowScroll($author$project$MusicCreatorDef$Downarrow),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
							$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$InstrumentZoomDown),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(-25, 0),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(180),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$scale,
										model.instrumentDown,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											(model.instrumentDown === 1.4) ? $MacCASOutreach$graphicsvg$GraphicSVG$blue : $MacCASOutreach$graphicsvg$GraphicSVG$black,
											$MacCASOutreach$graphicsvg$GraphicSVG$triangle(3)))))))))
			]));
};
var $author$project$DragBarAssit$minus = function (scaleSize) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2($author$project$DragBarAssit$originalPosX, $author$project$DragBarAssit$moveY),
		A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.1),
			$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-5.5, (-1.5) * scaleSize),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							$author$project$DragBarAssit$scaleTemp,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								scaleSize,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$size,
										12,
										$MacCASOutreach$graphicsvg$GraphicSVG$bold(
											$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
													'Trebuchet MS',
													$MacCASOutreach$graphicsvg$GraphicSVG$text('-')))))))))
					]))));
};
var $author$project$DragBarAssit$plus = function (scaleSize) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2($author$project$DragBarAssit$originalPosX, $author$project$DragBarAssit$moveY),
		A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.1),
			$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(20, (-1) * scaleSize),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							scaleSize,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								$author$project$DragBarAssit$scaleTemp,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$size,
										10,
										$MacCASOutreach$graphicsvg$GraphicSVG$bold(
											$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
													'Trebuchet MS',
													$MacCASOutreach$graphicsvg$GraphicSVG$text('+')))))))))
					]))));
};
var $author$project$MusicCreatorDef$scaleNote = 0.37;
var $MacCASOutreach$graphicsvg$GraphicSVG$grey = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 211, 215, 207, 1);
var $author$project$DrawMusic$score = function (_v0) {
	var highR = _v0.a;
	var lowR = _v0.b;
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 14),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 7),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -7),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -14),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, highR - 1),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, lowR + 1),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 470, 0.5)))
			]));
};
var $author$project$DrawMusic$viewButton = function (x) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.4,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(5)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -3.5),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
							'Trebuchet MS',
							$MacCASOutreach$graphicsvg$GraphicSVG$centered(
								$MacCASOutreach$graphicsvg$GraphicSVG$text(x)))))
				])));
};
var $author$project$MusicCreator$viewRectW = function (x) {
	if (x.$ === 'Small') {
		return 79;
	} else {
		return 180;
	}
};
var $author$project$MusicCreatorFunctions$getDraggedNote = function (list) {
	var emptyLastnote = $author$project$MusicCreatorDef$defselectNoteRec;
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, b) {
				var name = _v0.a;
				var a = _v0.b;
				return _Utils_eq(a.dragState, $author$project$MusicCreatorDef$Dragging) ? _Utils_Tuple2(name, a) : b;
			}),
		_Utils_Tuple2('dontcare', emptyLastnote),
		list);
};
var $author$project$MusicCreator$attempScoreListWithScoreNote = function (model) {
	var scoreNoteListWithoutDraggedNote = $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			function (_v1) {
				var name = _v1.a;
				var a = _v1.b;
				return _Utils_eq(a.dragState, $author$project$MusicCreatorDef$Dragging) ? _List_Nil : _List_fromArray(
					[a.note]);
			},
			model.scoreNoteList));
	var note = $author$project$MusicCreatorFunctions$getDraggedNote(model.scoreNoteList);
	var attemptList = F2(
		function (cycle, list) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var a = list.a;
				var xs = list.b;
				return (_Utils_eq(a, $author$project$MusicCreatorDef$Empty) && (!cycle)) ? A2(
					$elm$core$List$cons,
					note.b.note,
					A2(attemptList, cycle + 1, xs)) : A2(
					$elm$core$List$cons,
					a,
					A2(attemptList, cycle, xs));
			}
		});
	return A2(attemptList, 0, scoreNoteListWithoutDraggedNote);
};
var $author$project$MusicCreator$attempScoreListWithSelecNote = function (model) {
	var note = $author$project$MusicCreatorFunctions$getDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict));
	var attemptList = F2(
		function (cycle, list) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var _v1 = list.a;
				var name = _v1.a;
				var a = _v1.b;
				var xs = list.b;
				return (_Utils_eq(a.note, $author$project$MusicCreatorDef$Empty) && (!cycle)) ? A2(
					$elm$core$List$cons,
					note.b.note,
					A2(attemptList, cycle + 1, xs)) : A2(
					$elm$core$List$cons,
					a.note,
					A2(attemptList, cycle, xs));
			}
		});
	return A2(attemptList, 0, model.scoreNoteList);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$lightGrey = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 238, 238, 236, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$lightYellow = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 233, 79, 1);
var $author$project$MusicCreatorFunctions$noteToStringWArt = function (notes) {
	switch (notes.$) {
		case 'Empty':
			return 'empty';
		case 'WholeN':
			return 'a whole note';
		case 'HalfN':
			return 'a half note';
		case 'QuarterN':
			return 'a quarter note';
		case 'EighthN':
			return 'an eighth note';
		case 'SixteenthN':
			return 'a sixteenth note';
		case 'WholeR':
			return 'a whole rest';
		case 'HalfR':
			return 'a half rest';
		case 'QuarterR':
			return 'a quarter rest';
		case 'EighthR':
			return 'an eighth rest';
		case 'SixteenthR':
			return 'a sixteenth rest';
		case 'HalfND':
			return 'a dotted half note';
		case 'QuarterND':
			return 'a dotted quarter note';
		case 'EighthND':
			return 'a dotted eighth note';
		case 'HalfRD':
			return 'a dotted half rest';
		case 'QuarterRD':
			return 'a dotted quarter rest';
		default:
			return 'a dotted eighth rest';
	}
};
var $author$project$MusicCreator$warning = function (model) {
	var draggedNote = $author$project$MusicCreatorFunctions$getDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict));
	var valid = A2(
		$author$project$MusicCreatorFunctions$ifMeasureUnfull,
		function (l) {
			return A2(
				$elm$core$List$append,
				l,
				_List_fromArray(
					[draggedNote]));
		}(model.scoreNoteList),
		model.timeSignature);
	return valid ? ' ' : 'Too many beats in a measure';
};
var $author$project$MusicCreator$warningEachBeat = function (model) {
	var draggedNote2 = $author$project$MusicCreatorFunctions$getDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict));
	var draggedNote = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict)) ? $author$project$MusicCreatorFunctions$getDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict)) : $author$project$MusicCreatorFunctions$getDraggedNote(model.scoreNoteList);
	var attemptList = $author$project$MusicCreatorFunctions$ifDraggedNote(
		$elm$core$Dict$toList(model.selectNoteDict)) ? $author$project$MusicCreator$attempScoreListWithSelecNote(model) : $author$project$MusicCreator$attempScoreListWithScoreNote(model);
	var countListbeats = A3(
		$elm$core$List$foldl,
		F2(
			function (a, def) {
				return ($author$project$MusicCreatorFunctions$noteToFraction(a) * 4) + def;
			}),
		0,
		attemptList);
	var valid = A2($author$project$MusicCreatorFunctions$checkBeaming, attemptList, model.timeSignature);
	var invalidBeat = valid.b ? 0 : valid.a;
	return valid.b ? A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(70, -40),
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-3, 4),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
						0.7,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							function () {
								var _v0 = $author$project$MusicCreator$warning(model);
								if (_v0 === ' ') {
									return $MacCASOutreach$graphicsvg$GraphicSVG$lightGrey;
								} else {
									return $MacCASOutreach$graphicsvg$GraphicSVG$red;
								}
							}(),
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$roundedRect,
								5 * $elm$core$String$length(
									'You have filled ' + ($elm$core$Debug$toString(countListbeats) + ('/' + ($elm$core$Debug$toString(
										$author$project$MusicCreatorFunctions$tsToBase(model.timeSignature)) + (' beats.' + (' ' + $author$project$MusicCreator$warning(model))))))),
								15,
								3)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						10,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
							'Trebuchet MS',
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								$MacCASOutreach$graphicsvg$GraphicSVG$centered(
									$MacCASOutreach$graphicsvg$GraphicSVG$text(
										'You have filled ' + ($elm$core$Debug$toString(countListbeats) + ('/' + ($elm$core$Debug$toString(
											$author$project$MusicCreatorFunctions$tsToBase(model.timeSignature)) + (' beats.' + (' ' + $author$project$MusicCreator$warning(model))))))))))))
				]))) : A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(70, -40),
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-3, 4),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
						0.7,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$lightYellow,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$roundedRect,
								5 * $elm$core$String$length(
									'Split ' + ($author$project$MusicCreatorFunctions$noteToStringWArt(draggedNote.b.note) + '.')),
								15,
								3)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						10,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
							'Trebuchet MS',
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								$MacCASOutreach$graphicsvg$GraphicSVG$centered(
									$MacCASOutreach$graphicsvg$GraphicSVG$text(
										'Split ' + ($author$project$MusicCreatorFunctions$noteToStringWArt(draggedNote.b.note) + '.')))))))
				])));
};
var $author$project$MusicCreator$myShapes = function (model) {
	return _List_fromArray(
		[
			$author$project$DrawMusic$background,
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
			$author$project$MusicCreator$ClearSelectLyric,
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_eq(model.widthView, $author$project$MusicCreator$Small) ? _Utils_Tuple2(0, 0) : _Utils_Tuple2(50.5, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-89.5, -13.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$white,
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$roundedRect,
						$author$project$MusicCreator$viewRectW(model.widthView),
						100,
						5)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
			$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$PlayButtonZ),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
				$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$PlayButtonZ),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
					$author$project$MusicCreator$PlaySound,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-40, -6),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							model.playButtonZ,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.8,
								$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A3(
											$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
											$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
											(model.playButtonZ === 1) ? $MacCASOutreach$graphicsvg$GraphicSVG$black : $MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$white,
												$MacCASOutreach$graphicsvg$GraphicSVG$circle(5))),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											(model.playButtonZ === 1) ? $MacCASOutreach$graphicsvg$GraphicSVG$black : $MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
											$MacCASOutreach$graphicsvg$GraphicSVG$triangle(3))
										])))))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -26),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(126, 0),
				A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.225, $author$project$DrawMusic$bar))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-41, -23.5),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
				1.2,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
					1.2,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.17,
						$author$project$MusicCreatorFunctions$drawClef(model.clef))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, $author$project$MusicCreatorDef$moveYscore),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-96, 0),
					$author$project$MusicCreatorFunctions$drawTS(model.timeSignature)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			$author$project$MusicCreator$drawTrashCan(model)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(108.5, $author$project$MusicCreatorDef$moveYscore),
				$author$project$DrawMusic$score(model.range))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			$author$project$MusicCreator$assistBox(model)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-12, 40),
			$author$project$MusicCreator$instrumentSelector(model)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-12, 30),
			$author$project$DrawMusic$citeInstrument(
				$author$project$MusicCreator$getShape(model.focus))),
			A2($author$project$DragBarAssit$dragbar, model.tempCircle.posX, model.tempCircle.tempo),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
			$author$project$MusicCreator$ZoomOutDragBar,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
				$author$project$MusicCreator$ZoomDragBar,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
					$author$project$MusicCreator$ChangeTapDragBar,
					A2($author$project$DragBarAssit$dragBarCircle, model.tempCircle.posX, model.tempCircle.zoomCircle)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
			$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$TempoPlusZ),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
				$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$TempoPlusZ),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
					$author$project$MusicCreator$TempoPlus,
					$author$project$DragBarAssit$plus(model.tempoPlus)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
			$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$TempoMinusZ),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
				$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$TempoMinusZ),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
					$author$project$MusicCreator$TempoMinus,
					$author$project$DragBarAssit$minus(model.tempoMinus)))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(29.5, -15.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$MusicCreator$TimesignitureUp,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
							$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$TmUp),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
								$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$TmUp),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(-63, 0),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
										$elm$core$Basics$degrees(-30),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$scale,
											model.tmUp,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												(model.tmUp === 1) ? $MacCASOutreach$graphicsvg$GraphicSVG$black : $MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
												$MacCASOutreach$graphicsvg$GraphicSVG$triangle(1.5)))))))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$MusicCreator$TimesignitureDn,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
							$author$project$MusicCreator$ZoomDnObj($author$project$MusicCreator$TmDn),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
								$author$project$MusicCreator$ZoomUpObj($author$project$MusicCreator$TmDn),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(-63, -2.5),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
										$elm$core$Basics$degrees(30),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$scale,
											model.tmDn,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												(model.tmDn === 1) ? $MacCASOutreach$graphicsvg$GraphicSVG$black : $MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
												$MacCASOutreach$graphicsvg$GraphicSVG$triangle(1.5))))))))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A2(
				$author$project$MusicCreator$drawNotesWithExtraLinePop,
				$elm$core$Dict$toList(model.selectNoteDict),
				0.55)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A3($author$project$MusicCreator$drawNotesWithExtraLineWithGroup, model, model.scoreNoteList, model.timeSignature)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A4(
				$author$project$MusicCreator$drawAndPop,
				$elm$core$Dict$toList(model.selectDynamicDict),
				0.8,
				$author$project$DrawMusic$drawDynamic,
				$author$project$MusicCreatorDef$Dynamic)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A4(
				$author$project$MusicCreator$drawAndPop,
				$elm$core$Dict$toList(model.selectAccidentalsDict),
				0.6,
				$author$project$MusicCreatorFunctions$drawAccidental,
				$author$project$MusicCreatorDef$Accidental)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A4(
				$author$project$MusicCreator$drawAndPop,
				$elm$core$Dict$toList(model.selectArticulationDict),
				0.8,
				$author$project$MusicCreatorFunctions$drawArticulation,
				$author$project$MusicCreatorDef$Articulation)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			$author$project$MusicCreatorDef$scaleNote,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(40, 20),
				$author$project$MusicCreator$warningEachBeat(model))),
			_Utils_eq(model.expand, $author$project$MusicCreator$Large) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
					0.3,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$lightBlue,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_eq(model.widthView, $author$project$MusicCreator$Small) ? _Utils_Tuple2(0, 0) : _Utils_Tuple2(50.5, 0),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-89.5, -13.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$roundedRect,
								$author$project$MusicCreator$viewRectW(model.widthView),
								100,
								5))))
				])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-110, 32),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, 0),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A4($MacCASOutreach$graphicsvg$GraphicSVG$hsla, 4, 1, 0.5, 0.3),
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 34.5, 6, 2))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-16.5, -1.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$size,
									4,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
										'Trebuchet MS',
										$MacCASOutreach$graphicsvg$GraphicSVG$text('5. Your measure!'))))))
					]))),
			_Utils_eq(model.expand, $author$project$MusicCreator$Reg) ? A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$clip,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-89.5, -13.25),
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 72, 100, 5))),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-110, -22),
				A5($author$project$MusicCreator$code, model.clef, model.scoreNoteList, model.instrument, model.timeSignature, model.tempCircle.tempo))) : A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-110, -22),
			A5($author$project$MusicCreator$code, model.clef, model.scoreNoteList, model.instrument, model.timeSignature, model.tempCircle.tempo)),
			_Utils_eq(model.expand, $author$project$MusicCreator$Reg) ? A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
			$author$project$MusicCreator$SeeCode,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-89, 32),
				$author$project$DrawMusic$viewButton('+'))) : A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
			$author$project$MusicCreator$SeeCode,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-89, 32),
				$author$project$DrawMusic$viewButton('-'))),
			_Utils_eq(model.expand, $author$project$MusicCreator$Reg) ? $author$project$MusicCreator$clearNotesButton(model) : $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var b = _v0.b;
					var _v1 = b.dragState;
					if (_v1.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							$author$project$MusicCreator$ChangeDragState(name),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
								$author$project$MusicCreator$ChangeDragState(name),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									$author$project$MusicCreator$Drag(name),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$elm$core$Dict$toList(model.selectNoteDict))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v2) {
					var name = _v2.a;
					var b = _v2.b;
					var _v3 = b.dragState;
					if (_v3.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							$author$project$MusicCreator$ChangeDragState(name),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDown,
								$author$project$MusicCreator$ChangeDragState(name),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									$author$project$MusicCreator$Drag(name),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				model.scoreNoteList)),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v4) {
					var name = _v4.a;
					var b = _v4.b;
					var _v5 = b.dragState;
					if (_v5.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							A3(
								$author$project$MusicCreator$ChangeDragStateF,
								name,
								$author$project$MusicCreatorDef$Dynamic,
								_Utils_Tuple2(0, 0)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Dynamic),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									A2($author$project$MusicCreator$DragF, name, $author$project$MusicCreatorDef$Dynamic),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$elm$core$Dict$toList(model.selectDynamicDict))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v6) {
					var name = _v6.a;
					var b = _v6.b;
					var _v7 = b.dragState;
					if (_v7.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							A3(
								$author$project$MusicCreator$ChangeDragStateF,
								name,
								$author$project$MusicCreatorDef$Dynamic,
								_Utils_Tuple2(0, 0)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Dynamic),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									A2($author$project$MusicCreator$DragF, name, $author$project$MusicCreatorDef$Dynamic),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$author$project$MusicCreatorFunctions$createdynamicList(model.scoreNoteList))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v8) {
					var name = _v8.a;
					var b = _v8.b;
					var _v9 = b.dragState;
					if (_v9.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							A3(
								$author$project$MusicCreator$ChangeDragStateF,
								name,
								$author$project$MusicCreatorDef$Accidental,
								_Utils_Tuple2(0, 0)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Accidental),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									A2($author$project$MusicCreator$DragF, name, $author$project$MusicCreatorDef$Accidental),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$elm$core$Dict$toList(model.selectAccidentalsDict))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v10) {
					var name = _v10.a;
					var b = _v10.b;
					var _v11 = b.dragState;
					if (_v11.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							A3(
								$author$project$MusicCreator$ChangeDragStateF,
								name,
								$author$project$MusicCreatorDef$Accidental,
								_Utils_Tuple2(0, 0)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Accidental),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									A2($author$project$MusicCreator$DragF, name, $author$project$MusicCreatorDef$Accidental),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$author$project$MusicCreatorFunctions$createaccidentalList(model.scoreNoteList))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v12) {
					var name = _v12.a;
					var b = _v12.b;
					var _v13 = b.dragState;
					if (_v13.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							A3(
								$author$project$MusicCreator$ChangeDragStateF,
								name,
								$author$project$MusicCreatorDef$Articulation,
								_Utils_Tuple2(0, 0)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Articulation),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									A2($author$project$MusicCreator$DragF, name, $author$project$MusicCreatorDef$Articulation),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$elm$core$Dict$toList(model.selectArticulationDict))),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				function (_v14) {
					var name = _v14.a;
					var b = _v14.b;
					var _v15 = b.dragState;
					if (_v15.$ === 'Released') {
						return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
					} else {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
							A3(
								$author$project$MusicCreator$ChangeDragStateF,
								name,
								$author$project$MusicCreatorDef$Articulation,
								_Utils_Tuple2(0, 0)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseDownAt,
								A2($author$project$MusicCreator$ChangeDragStateF, name, $author$project$MusicCreatorDef$Articulation),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
									A2($author$project$MusicCreator$DragF, name, $author$project$MusicCreatorDef$Articulation),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height)))));
					}
				},
				$author$project$MusicCreatorFunctions$createarticulationList(model.scoreNoteList))),
			function () {
			var _v16 = model.tempCircle.dragState;
			if (_v16.$ === 'Released') {
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
			} else {
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseUp,
					$author$project$MusicCreator$ChangeTapDragBar,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyMouseMoveAt,
						$author$project$MusicCreator$DragBar,
						$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, model.width, model.height))));
			}
		}()
		]);
};
var $author$project$MusicCreator$view = function (model) {
	return {
		body: A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$collage,
			260,
			128,
			$author$project$MusicCreator$myShapes(model)),
		title: 'Music Creator'
	};
};
var $author$project$MusicCreator$main = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$ellieAppWithTick,
	$author$project$MusicCreator$Tick,
	{
		init: $elm$core$Basics$always($author$project$MusicCreator$init),
		subscriptions: $author$project$MusicCreator$subscriptions,
		update: $author$project$MusicCreator$update,
		view: $author$project$MusicCreator$view
	});
_Platform_export({'MusicCreator':{'init':$author$project$MusicCreator$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));