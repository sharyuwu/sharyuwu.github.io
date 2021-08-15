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
var $author$project$Master$Tick = F2(
	function (a, b) {
		return {$: 'Tick', a: a, b: b};
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
var $MacCASOutreach$graphicsvg$GraphicSVG$Solid = function (a) {
	return {$: 'Solid', a: a};
};
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$fromRgba = function (components) {
	return A4($avh4$elm_color$Color$RgbaSpace, components.red, components.green, components.blue, components.alpha);
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ssa = function (n) {
	return A3($elm$core$Basics$clamp, 0, 1, n);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$ssc = function (n) {
	return A3($elm$core$Basics$clamp, 0, 255, n);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$rgba = F4(
	function (r, g, b, a) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$Solid(
			$avh4$elm_color$Color$fromRgba(
				{
					alpha: $MacCASOutreach$graphicsvg$GraphicSVG$ssa(a),
					blue: $MacCASOutreach$graphicsvg$GraphicSVG$ssc(b),
					green: $MacCASOutreach$graphicsvg$GraphicSVG$ssc(g),
					red: $MacCASOutreach$graphicsvg$GraphicSVG$ssc(r)
				}));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$black = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 0, 0, 0, 1);
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
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$Attributes$gradientTransform = _VirtualDom_attribute('gradientTransform');
var $elm$svg$Svg$Attributes$gradientUnits = _VirtualDom_attribute('gradientUnits');
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$svg$Svg$linearGradient = $elm$svg$Svg$trustedNode('linearGradient');
var $elm$svg$Svg$Attributes$mask = _VirtualDom_attribute('mask');
var $avh4$elm_color$Color$toRgba = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	return {alpha: a, blue: b, green: g, red: r};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$mkRGB = function (colour) {
	var col = $avh4$elm_color$Color$toRgba(colour);
	return 'rgba(' + ($elm$core$String$fromFloat(col.red) + (',' + ($elm$core$String$fromFloat(col.green) + (',' + ($elm$core$String$fromFloat(col.blue) + (',' + ($elm$core$String$fromFloat(col.alpha) + ')')))))));
};
var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var $elm$core$Basics$pi = _Basics_pi;
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$radialGradient = $elm$svg$Svg$trustedNode('radialGradient');
var $elm$svg$Svg$stop = $elm$svg$Svg$trustedNode('stop');
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $MacCASOutreach$graphicsvg$GraphicSVG$createGradientSVG = F3(
	function (id, _v0, grad) {
		var wid = _v0.a;
		var hei = _v0.b;
		var w = function () {
			if (grad.$ === 'RadialGradient') {
				var stops = grad.a;
				var _v6 = $elm$core$List$head(
					$elm$core$List$reverse(stops));
				if (_v6.$ === 'Just') {
					var _v7 = _v6.a;
					var pos = _v7.a;
					return pos;
				} else {
					return 0;
				}
			} else {
				var stops = grad.b;
				var _v8 = $elm$core$List$head(
					$elm$core$List$reverse(stops));
				if (_v8.$ === 'Just') {
					var _v9 = _v8.a;
					var pos = _v9.a;
					return pos;
				} else {
					return 0;
				}
			}
		}();
		var squareSize = (_Utils_cmp(wid, hei) > 0) ? (2 * wid) : (2 * hei);
		var rotation = function () {
			if (grad.$ === 'LinearGradient') {
				var rot = grad.a;
				var stops = grad.b;
				return (rot * 180) / $elm$core$Basics$pi;
			} else {
				return 0;
			}
		}();
		var isRadial = function () {
			if (grad.$ === 'RadialGradient') {
				return true;
			} else {
				return false;
			}
		}();
		var createStop = function (_v2) {
			var pos = _v2.a;
			var trans = _v2.b;
			var colour = _v2.c;
			var start = isRadial ? 0 : (((1 - (w / squareSize)) / 2) * 100);
			var percent = isRadial ? ((pos / w) * 100) : (start + ((pos / squareSize) * 100));
			var percentTxt = $elm$core$String$fromFloat(percent) + '%';
			var opacityTxt = 'stop-opacity:' + ($elm$core$String$fromFloat(trans) + ';');
			var colourTxt = 'stop-color:' + ($MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(colour) + ';');
			return A2(
				$elm$svg$Svg$stop,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$offset(percentTxt),
						$elm$svg$Svg$Attributes$style(
						_Utils_ap(colourTxt, opacityTxt))
					]),
				_List_Nil);
		};
		var defs = A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					function () {
					if (grad.$ === 'LinearGradient') {
						var stops = grad.b;
						return A2(
							$elm$svg$Svg$linearGradient,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$id(id + 'gradient'),
									$elm$svg$Svg$Attributes$gradientTransform(
									'rotate(' + ($elm$core$String$fromFloat(rotation) + 'rad)')),
									$elm$svg$Svg$Attributes$gradientTransform(
									'rotate(' + ($elm$core$String$fromFloat(rotation) + 'rad)'))
								]),
							A2($elm$core$List$map, createStop, stops));
					} else {
						var stops = grad.a;
						return A2(
							$elm$svg$Svg$radialGradient,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$id(id + 'gradient'),
									$elm$svg$Svg$Attributes$cx('0'),
									$elm$svg$Svg$Attributes$cy('0'),
									$elm$svg$Svg$Attributes$r(
									$elm$core$String$fromFloat(w)),
									$elm$svg$Svg$Attributes$gradientUnits('userSpaceOnUse')
								]),
							A2($elm$core$List$map, createStop, stops));
					}
				}()
				]));
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$mask('url(#' + (id + 'mask)'))
				]),
			_List_fromArray(
				[
					defs,
					A2(
					$elm$svg$Svg$rect,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$x(
							$elm$core$String$fromFloat((-squareSize) / 2)),
							$elm$svg$Svg$Attributes$y(
							$elm$core$String$fromFloat((-squareSize) / 2)),
							$elm$svg$Svg$Attributes$width(
							$elm$core$String$fromFloat(squareSize)),
							$elm$svg$Svg$Attributes$height(
							$elm$core$String$fromFloat(squareSize)),
							$elm$svg$Svg$Attributes$fill('url(#' + (id + 'gradient)')),
							$elm$svg$Svg$Attributes$id(id + 'grad'),
							$elm$svg$Svg$Attributes$transform(
							'rotate(' + ($elm$core$String$fromFloat(rotation) + ')'))
						]),
					_List_Nil)
				]));
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
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$ellipse = $elm$svg$Svg$trustedNode('ellipse');
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$foreignObject = $elm$svg$Svg$trustedNode('foreignObject');
var $MacCASOutreach$graphicsvg$GraphicSVG$getAlpha = function (colour) {
	return $avh4$elm_color$Color$toRgba(colour).alpha;
};
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
var $MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha = A2($elm$core$Basics$composeL, $elm$core$String$fromFloat, $MacCASOutreach$graphicsvg$GraphicSVG$getAlpha);
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
var $avh4$elm_color$Color$rgb = F3(
	function (r, g, b) {
		return A4($avh4$elm_color$Color$RgbaSpace, r, g, b, 1.0);
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
var $elm$svg$Svg$Attributes$target = _VirtualDom_attribute('target');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $MacCASOutreach$graphicsvg$GraphicSVG$white = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 255, 255, 255, 1);
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
						_v13$3:
						while (true) {
							if (lt.$ === 'Nothing') {
								return _List_Nil;
							} else {
								if (lt.a.b.$ === 'Solid') {
									switch (lt.a.a.$) {
										case 'Unbroken':
											var _v14 = lt.a;
											var th = _v14.a.a;
											var strokeClr = _v14.b.a;
											var nonStroke = function () {
												var opcty = $MacCASOutreach$graphicsvg$GraphicSVG$getAlpha(strokeClr);
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
											var _v15 = lt.a;
											var _v16 = _v15.a;
											var dashes = _v16.a;
											var th = _v16.b;
											var strokeClr = _v15.b.a;
											var nonStroke = function () {
												var opcty = $MacCASOutreach$graphicsvg$GraphicSVG$getAlpha(strokeClr);
												return (th <= 0) || ((opcty <= 0) || A2(
													$elm$core$List$all,
													function (_v17) {
														var on = _v17.a;
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
											break _v13$3;
									}
								} else {
									break _v13$3;
								}
							}
						}
						var _v18 = lt.a;
						return _List_Nil;
					}();
					var nonexistBody = function () {
						if (fillClr.$ === 'Nothing') {
							return true;
						} else {
							return false;
						}
					}();
					var gradientDefs = function () {
						if ((fillClr.$ === 'Just') && (fillClr.a.$ === 'Gradient')) {
							var gr = fillClr.a.a;
							return $elm$core$Maybe$Just(
								A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$createGradientSVG,
									id,
									_Utils_Tuple2(w, h),
									gr));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}();
					var clrAttrs = function () {
						if (fillClr.$ === 'Nothing') {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill('none')
								]);
						} else {
							if (fillClr.a.$ === 'Solid') {
								var bodyClr = fillClr.a.a;
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$fill(
										$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(bodyClr)),
										$elm$svg$Svg$Attributes$fillOpacity(
										$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(bodyClr))
									]);
							} else {
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$id(id),
										$elm$svg$Svg$Attributes$fill(
										$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(
											A3($avh4$elm_color$Color$rgb, 255, 255, 255)))
									]);
							}
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
					var attrs = function () {
						if ((fillClr.$ === 'Just') && (fillClr.a.$ === 'Gradient')) {
							return _Utils_ap(clrAttrs, strokeAttrs);
						} else {
							return _Utils_ap(
								transAttrs,
								_Utils_ap(clrAttrs, strokeAttrs));
						}
					}();
					var basicShape = function () {
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
								var _v6 = stencil.a;
								var si = _v6.a;
								var bo = _v6.b;
								var i = _v6.c;
								var u = _v6.d;
								var s = _v6.e;
								var sel = _v6.f;
								var f = _v6.g;
								var align = _v6.h;
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
					}();
					if (nonexistBody && $elm$core$List$isEmpty(strokeAttrs)) {
						return A2($elm$svg$Svg$g, _List_Nil, _List_Nil);
					} else {
						if (gradientDefs.$ === 'Just') {
							var gDefs = gradientDefs.a;
							return A2(
								$elm$svg$Svg$g,
								transAttrs,
								_List_fromArray(
									[
										A2(
										$elm$svg$Svg$mask,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$id(id + 'mask')
											]),
										_List_fromArray(
											[basicShape])),
										gDefs
									]));
						} else {
							return basicShape;
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
var $author$project$Master$Login = {$: 'Login'};
var $author$project$Master$init = function (flags) {
	var model = {state: $author$project$Master$Login, time: 0, undo: _List_Nil};
	return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
};
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Master$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Master$Answer = F2(
	function (a, b) {
		return {$: 'Answer', a: a, b: b};
	});
var $author$project$Master$Columns = F2(
	function (a, b) {
		return {$: 'Columns', a: a, b: b};
	});
var $author$project$Master$Question = F3(
	function (a, b, c) {
		return {$: 'Question', a: a, b: b, c: c};
	});
var $author$project$Master$Scores = F2(
	function (a, b) {
		return {$: 'Scores', a: a, b: b};
	});
var $author$project$Master$Victory = function (a) {
	return {$: 'Victory', a: a};
};
var $author$project$ElmMusic$Cello = {$: 'Cello'};
var $author$project$ElmMusic$ElectricGuitar = {$: 'ElectricGuitar'};
var $author$project$Master$ElmMusic = function (a) {
	return {$: 'ElmMusic', a: a};
};
var $author$project$ElmMusic$Flute = {$: 'Flute'};
var $author$project$ElmMusic$FourFour = {$: 'FourFour'};
var $author$project$ElmMusic$Marimba = {$: 'Marimba'};
var $author$project$ElmMusic$Measure = function (a) {
	return {$: 'Measure', a: a};
};
var $author$project$ElmMusic$Music = F3(
	function (a, b, c) {
		return {$: 'Music', a: a, b: b, c: c};
	});
var $author$project$ElmMusic$Piano = {$: 'Piano'};
var $author$project$ElmMusic$Recorder = {$: 'Recorder'};
var $author$project$ElmMusic$Sitar = {$: 'Sitar'};
var $author$project$ElmMusic$Trumpet = {$: 'Trumpet'};
var $author$project$ElmMusic$Tuba = {$: 'Tuba'};
var $author$project$ElmMusic$Violin = {$: 'Violin'};
var $author$project$ElmMusic$Do = {$: 'Do'};
var $author$project$ElmMusic$do = $author$project$ElmMusic$Do;
var $author$project$ElmMusic$Fa = {$: 'Fa'};
var $author$project$ElmMusic$fa = $author$project$ElmMusic$Fa;
var $author$project$ElmMusic$La = {$: 'La'};
var $author$project$ElmMusic$la = $author$project$ElmMusic$La;
var $author$project$ElmMusic$Mi = {$: 'Mi'};
var $author$project$ElmMusic$mi = $author$project$ElmMusic$Mi;
var $author$project$ElmMusic$ArtUnspecified = {$: 'ArtUnspecified'};
var $author$project$ElmMusic$ContinueVideo = {$: 'ContinueVideo'};
var $author$project$ElmMusic$DynUnspecified = {$: 'DynUnspecified'};
var $author$project$ElmMusic$Quarter = {$: 'Quarter'};
var $author$project$ElmMusic$quarter = function (pitch) {
	return {articulation: $author$project$ElmMusic$ArtUnspecified, duration: $author$project$ElmMusic$Quarter, dynamic: $author$project$ElmMusic$DynUnspecified, lyric: '', pitch: pitch, video: $author$project$ElmMusic$ContinueVideo};
};
var $author$project$ElmMusic$Re = {$: 'Re'};
var $author$project$ElmMusic$re = $author$project$ElmMusic$Re;
var $author$project$ElmMusic$Sol = {$: 'Sol'};
var $author$project$ElmMusic$sol = $author$project$ElmMusic$Sol;
var $author$project$ElmMusic$Ti = {$: 'Ti'};
var $author$project$ElmMusic$ti = $author$project$ElmMusic$Ti;
var $author$project$Master$allQs = _List_fromArray(
	[
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Sitar FourFour', '        [[', '          Measure', '                [', '                    quarter fa', '                  , quarter la', '                  , quarter sol', '                  , quarter fa ', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Sitar,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$la),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Piano FourFour', '        [[', '          Measure', '                [', '                    quarter fa', '                  , quarter la', '                  , quarter sol', '                  , quarter fa ', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Piano,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$la),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Cello FourFour', '        [[', '          Measure', '                [', '                    quarter re', '                  , quarter fa', '                  , quarter mi', '                  , quarter do', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Cello,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$re),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$mi),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$do)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Violin FourFour', '        [[', '          Measure', '                [', '                  quarter fa', '                , quarter fa', '                , quarter sol', '                , quarter ti', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Violin,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$ti)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Recorder FourFour', '        [[', '          Measure', '                [ quarter fa', '                , quarter fa', '                , quarter sol', '                , quarter ti', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Recorder,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$ti)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Tuba FourFour', '        [[', '          Measure', '                [ quarter fa', '                , quarter re', '                , quarter do', '                , quarter fa', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Tuba,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$re),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$do),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music ElectricGuitar FourFour', '        [[', '          Measure', '                [ quarter fa', '                , quarter sol', '                , quarter fa', '                , quarter la', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$ElectricGuitar,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$la)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Marimba FourFour', '        [[', '          Measure', '                [ quarter fa', '                , quarter sol', '                , quarter fa', '                , quarter la', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Marimba,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$la)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Flute FourFour', '        [[', '          Measure', '                [ quarter fa', '                , quarter sol', '                , quarter fa', '                , quarter la', '                ]', '        ]]']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Flute,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$la)
									]))
							])
						])));
		}),
		_Utils_Tuple2(
		_List_fromArray(
			['  Music Trumpet FourFour', '        [[', '          Measure', '                [ quarter fa', '                , quarter sol', '                , quarter fa', '                , quarter la', '                ]', '        ]]', '']),
		function (model) {
			return $author$project$Master$ElmMusic(
				A3(
					$author$project$ElmMusic$Music,
					$author$project$ElmMusic$Trumpet,
					$author$project$ElmMusic$FourFour,
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$ElmMusic$Measure(
								_List_fromArray(
									[
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$sol),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$fa),
										$author$project$ElmMusic$quarter($author$project$ElmMusic$la)
									]))
							])
						])));
		})
	]);
var $author$project$Master$incrementScore = function (maybeScore) {
	if (maybeScore.$ === 'Nothing') {
		return $elm$core$Maybe$Just(1);
	} else {
		var score = maybeScore.a;
		return $elm$core$Maybe$Just(score + 1);
	}
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
			return -12;
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
					$elm$json$Json$Encode$float(event.articulation))
				]));
	});
var $author$project$PlayBack$getMusicInstrument = function (_v0) {
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
		case 'Timpani':
			return 508;
		default:
			var n = instrument.a;
			return n;
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
var $author$project$ElmMusic$Detache = {$: 'Detache'};
var $author$project$ElmMusic$DynMezzoForte = {$: 'DynMezzoForte'};
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
var $author$project$ElmMusic$MusicEvent = F6(
	function (time, pitch, duration, volume, lyric, articulation) {
		return {articulation: articulation, duration: duration, lyric: lyric, pitch: pitch, time: time, volume: volume};
	});
var $author$project$PlayBack$mergeTieSlur = function (list) {
	mergeTieSlur:
	while (true) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var x = list.a;
				return _List_fromArray(
					[x]);
			} else {
				var x1 = list.a;
				var _v1 = list.b;
				var x2 = _v1.a;
				var xs = _v1.b;
				if (x1.articulation === 1) {
					if (_Utils_eq(x1.pitch, x2.pitch) && _Utils_eq(x1.volume, x2.volume)) {
						var $temp$list = A2(
							$elm$core$List$cons,
							A6($author$project$ElmMusic$MusicEvent, x1.time, x1.pitch, x1.duration + x2.duration, x1.volume, x1.lyric, x2.articulation),
							xs);
						list = $temp$list;
						continue mergeTieSlur;
					} else {
						return A2(
							$elm$core$List$cons,
							x1,
							A2(
								$elm$core$List$cons,
								x2,
								$author$project$PlayBack$mergeTieSlur(xs)));
					}
				} else {
					return A2(
						$elm$core$List$cons,
						x1,
						A2(
							$elm$core$List$cons,
							x2,
							$author$project$PlayBack$mergeTieSlur(xs)));
				}
			}
		}
	}
};
var $author$project$ElmMusic$countDots = function (duration) {
	if (duration.$ === 'Dotted') {
		var d = duration.a;
		return 1 + $author$project$ElmMusic$countDots(d);
	} else {
		return 0;
	}
};
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$ElmMusic$durationToFloat = function (duration) {
	var dottedD = F2(
		function (dur, dots) {
			if (!dots) {
				return dur;
			} else {
				return (dur / A2($elm$core$Basics$pow, 2, dots)) + A2(dottedD, dur, dots - 1);
			}
		});
	var baseDuration = function (dur) {
		baseDuration:
		while (true) {
			switch (dur.$) {
				case 'Whole':
					return 1;
				case 'Half':
					return 1 / 2;
				case 'Quarter':
					return 1 / 4;
				case 'Eighth':
					return 1 / 8;
				case 'Sixteenth':
					return 1 / 16;
				case 'ThirtySecond':
					return 1 / 32;
				case 'Dotted':
					var d = dur.a;
					var $temp$dur = d;
					dur = $temp$dur;
					continue baseDuration;
				default:
					return 0;
			}
		}
	};
	return A2(
		dottedD,
		baseDuration(duration),
		$author$project$ElmMusic$countDots(duration));
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
var $author$project$PlayBack$toArticulationFloat = function (articulation) {
	switch (articulation.$) {
		case 'Slur':
			return 1;
		case 'Tie':
			return 1;
		case 'Staccato':
			return 0.4;
		case 'Tenuto':
			return 0.95;
		case 'Accent':
			return -1;
		case 'Marcato':
			return 0.5;
		case 'Staccatissimo':
			return 0.20;
		case 'Legato':
			return 0.975;
		case 'Detache':
			return 0.85;
		case 'Fermata':
			var num = articulation.a;
			return num;
		default:
			return 0.85;
	}
};
var $author$project$ElmMusic$Rest = {$: 'Rest'};
var $author$project$PlayBack$toMusicVolume = F2(
	function (dynamic, pitch) {
		if (_Utils_eq(pitch, $author$project$ElmMusic$Rest)) {
			return -1;
		} else {
			switch (dynamic.$) {
				case 'DynForte':
					return 0.8;
				case 'DynPiano':
					return 0.1;
				case 'DynMezzoPiano':
					return 0.4;
				case 'DynMezzoForte':
					return 0.6;
				case 'DynPianissimo':
					return 0.04;
				case 'DynFortissimo':
					return 0.99;
				default:
					return 0.6;
			}
		}
	});
var $author$project$PlayBack$seqNotesToMEvents = F3(
	function (currentTime, tempo, notes) {
		var metro = 60 / (tempo.bpm * 0.25);
		if (!notes.b) {
			return _List_Nil;
		} else {
			var noteRecord = notes.a;
			var xs = notes.b;
			var newArticulation = function () {
				var articulation = $author$project$PlayBack$toArticulationFloat(noteRecord.articulation);
				return A3($elm$core$Basics$clamp, -2, 1.0, articulation);
			}();
			var ifHold = function () {
				var articulation = $author$project$PlayBack$toArticulationFloat(noteRecord.articulation);
				return (articulation > 1) ? articulation : 1;
			}();
			var clampedVolume = function () {
				var volume = A2($author$project$PlayBack$toMusicVolume, noteRecord.dynamic, noteRecord.pitch);
				return A3($elm$core$Basics$clamp, -1.0, 1, volume);
			}();
			return A2(
				$elm$core$List$cons,
				A6(
					$author$project$ElmMusic$MusicEvent,
					currentTime,
					$author$project$PlayBack$pitchToMIDINumber(noteRecord.pitch),
					($author$project$ElmMusic$durationToFloat(noteRecord.duration) * ifHold) * metro,
					clampedVolume,
					noteRecord.lyric,
					newArticulation),
				A3(
					$author$project$PlayBack$seqNotesToMEvents,
					currentTime + (($author$project$ElmMusic$durationToFloat(noteRecord.duration) * ifHold) * metro),
					tempo,
					xs));
		}
	});
var $author$project$ElmMusic$Legato = {$: 'Legato'};
var $author$project$PlayBack$trackArticulation = F2(
	function (defArt, nList) {
		var nextArt = function (x) {
			return (_Utils_eq(x.articulation, $author$project$ElmMusic$Legato) || _Utils_eq(x.articulation, $author$project$ElmMusic$Detache)) ? x.articulation : defArt;
		};
		if (!nList.b) {
			return _List_Nil;
		} else {
			var x = nList.a;
			var xs = nList.b;
			return _Utils_eq(x.articulation, $author$project$ElmMusic$ArtUnspecified) ? A2(
				$elm$core$List$cons,
				_Utils_update(
					x,
					{articulation: defArt}),
				A2($author$project$PlayBack$trackArticulation, defArt, xs)) : A2(
				$elm$core$List$cons,
				x,
				A2(
					$author$project$PlayBack$trackArticulation,
					nextArt(x),
					xs));
		}
	});
var $author$project$PlayBack$trackDynamic = F2(
	function (defDyn, nList) {
		if (!nList.b) {
			return _List_Nil;
		} else {
			var x = nList.a;
			var xs = nList.b;
			return _Utils_eq(x.dynamic, $author$project$ElmMusic$DynUnspecified) ? A2(
				$elm$core$List$cons,
				_Utils_update(
					x,
					{dynamic: defDyn}),
				A2($author$project$PlayBack$trackDynamic, defDyn, xs)) : A2(
				$elm$core$List$cons,
				x,
				A2($author$project$PlayBack$trackDynamic, x.dynamic, xs));
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
			return A3(
				$author$project$PlayBack$seqNotesToMEvents,
				currentTime,
				tempo,
				A2(
					$author$project$PlayBack$trackArticulation,
					$author$project$ElmMusic$Detache,
					A2($author$project$PlayBack$trackDynamic, $author$project$ElmMusic$DynMezzoForte, notes)));
		};
		var mEventsList = A3(
			$elm$core$List$foldl,
			$author$project$PlayBack$merge(
				function ($) {
					return $.time;
				}),
			_List_Nil,
			A2($elm$core$List$map, measureListToMEvents, listOfListOfMeasures));
		return $author$project$PlayBack$mergeTieSlur(mEventsList);
	});
var $author$project$PlayBack$perform = F2(
	function (tempo, music) {
		var instrument = $author$project$PlayBack$getMusicInstrument(music);
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
var $author$project$Master$startScores = A2(
	$author$project$Master$Scores,
	9,
	$elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(1, 0),
				_Utils_Tuple2(2, 0),
				_Utils_Tuple2(3, 0),
				_Utils_Tuple2(4, 0),
				_Utils_Tuple2(5, 0),
				_Utils_Tuple2(6, 0),
				_Utils_Tuple2(7, 0),
				_Utils_Tuple2(8, 0)
			])));
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
var $author$project$Master$updateScore = F3(
	function (pointsThisRound, team, oldScore) {
		var _v0 = A2($elm$core$Dict$get, team, pointsThisRound);
		if (_v0.$ === 'Nothing') {
			return oldScore;
		} else {
			var newScore = _v0.a;
			return oldScore + newScore;
		}
	});
var $author$project$Master$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Tick':
				var t = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{time: t}),
					$elm$core$Platform$Cmd$none);
			case 'StartAgain':
				var _v1 = model.state;
				if (_v1.$ === 'Victory') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{state: $author$project$Master$Login}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'StartGame':
				var _v2 = model.state;
				if (_v2.$ === 'Login') {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: A2($author$project$Master$Columns, $author$project$Master$startScores, $author$project$Master$allQs)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'EndGame':
				var _v3 = model.state;
				if (_v3.$ === 'Columns') {
					var scores = _v3.a;
					var qs = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: $author$project$Master$Victory(scores)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'StartRound':
				var _v4 = model.state;
				if (_v4.$ === 'Columns') {
					if (!_v4.b.b) {
						var scores = _v4.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									state: $author$project$Master$Victory(scores)
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						var scores = _v4.a;
						var qs = _v4.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									state: A3($author$project$Master$Question, scores, qs, $elm$core$Dict$empty)
								}),
							$elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'Winner':
				var teamID = msg.a;
				var _v5 = model.state;
				if (_v5.$ === 'Question') {
					var _v6 = _v5.a;
					var numTeams = _v6.a;
					var dict = _v6.b;
					var qs = _v5.b;
					var pointsSoFar = _v5.c;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: A3(
									$author$project$Master$Question,
									A2($author$project$Master$Scores, numTeams, dict),
									qs,
									A3($elm$core$Dict$update, teamID, $author$project$Master$incrementScore, pointsSoFar)),
								undo: A2(
									$elm$core$List$cons,
									A3(
										$author$project$Master$Question,
										A2($author$project$Master$Scores, numTeams, dict),
										qs,
										pointsSoFar),
									model.undo)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'BackToColumns':
				var _v7 = model.state;
				if (_v7.$ === 'Answer') {
					var scores = _v7.a;
					var qs = _v7.b;
					if (!qs.b) {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									state: $author$project$Master$Victory(scores)
								}),
							$elm$core$Platform$Cmd$none);
					} else {
						var firstQuestion = qs.a;
						var moreQs = qs.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									state: A2($author$project$Master$Columns, scores, moreQs)
								}),
							$elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'Undo':
				var _v9 = model.state;
				if (_v9.$ === 'Question') {
					var _v10 = _v9.a;
					var numTeams = _v10.a;
					var dict = _v10.b;
					var qs = _v9.b;
					var pointsThisRound = _v9.c;
					var _v11 = model.undo;
					if (_v11.b) {
						var st = _v11.a;
						var ul = _v11.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{state: st, undo: ul}),
							$elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					}
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'Record':
				var _v12 = model.state;
				if (_v12.$ === 'Question') {
					var _v13 = _v12.a;
					var numTeams = _v13.a;
					var dict = _v13.b;
					var qs = _v12.b;
					var pointsThisRound = _v12.c;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								state: A2(
									$author$project$Master$Answer,
									A2(
										$author$project$Master$Scores,
										numTeams,
										A2(
											$elm$core$Dict$map,
											$author$project$Master$updateScore(pointsThisRound),
											dict)),
									qs)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 'PlaySound':
				var myMusic = msg.a;
				return _Utils_Tuple2(
					model,
					$author$project$PlayBack$play(
						A2(
							$author$project$PlayBack$perform,
							{bpm: 120},
							myMusic)));
			case 'MakeRequest':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$collage = F3(
	function (w, h, shapes) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Collage, w, h, shapes);
	});
var $author$project$Master$BackToColumns = {$: 'BackToColumns'};
var $author$project$Master$EndGame = {$: 'EndGame'};
var $author$project$Master$Record = {$: 'Record'};
var $author$project$Master$StartAgain = {$: 'StartAgain'};
var $author$project$Master$StartGame = {$: 'StartGame'};
var $author$project$Master$StartRound = {$: 'StartRound'};
var $author$project$Master$Undo = {$: 'Undo'};
var $MacCASOutreach$graphicsvg$GraphicSVG$Pull = F2(
	function (a, b) {
		return {$: 'Pull', a: a, b: b};
	});
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
var $MacCASOutreach$graphicsvg$GraphicSVG$darkGreen = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 78, 154, 6, 1);
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$rotate = F2(
	function (theta, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rotate, theta, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scale = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, s, s, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scaleX = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, s, 1, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scaleY = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, 1, s, shape);
	});
var $author$project$Master$bleafStem = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
	$elm$core$Basics$degrees(20),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(25, -5),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
			0.3,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
				0.3,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.3,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(-85.51, 13.624),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-80.17, 14.148),
									_Utils_Tuple2(-74.82, 14.672)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-67.59, 14.777),
									_Utils_Tuple2(-60.36, 14.882)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-54.91, 15.196),
									_Utils_Tuple2(-49.46, 15.510)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-43.49, 15.615),
									_Utils_Tuple2(-37.51, 15.720)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-29.34, 15.720),
									_Utils_Tuple2(-21.17, 15.720)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-14.77, 15.930),
									_Utils_Tuple2(-8.384, 16.139)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.7248, 16.663),
									_Utils_Tuple2(13.834, 17.187)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.532, 17.816),
									_Utils_Tuple2(31.231, 18.445)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(41.187, 18.864),
									_Utils_Tuple2(51.144, 19.283)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(61.414, 18.864),
									_Utils_Tuple2(71.685, 18.445)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(78.078, 17.711),
									_Utils_Tuple2(84.471, 16.978)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(84.471, 15.196),
									_Utils_Tuple2(84.471, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(81.851, 13.414),
									_Utils_Tuple2(79.231, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(75.668, 13.414),
									_Utils_Tuple2(72.104, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(68.331, 13.834),
									_Utils_Tuple2(64.558, 14.253)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(61.310, 14.253),
									_Utils_Tuple2(58.061, 14.253)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(55.231, 14.358),
									_Utils_Tuple2(52.401, 14.462)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(49.467, 14.672),
									_Utils_Tuple2(46.532, 14.882)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(44.122, 15.196),
									_Utils_Tuple2(41.711, 15.510)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(40.139, 15.615),
									_Utils_Tuple2(38.567, 15.720)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(37.310, 15.720),
									_Utils_Tuple2(36.052, 15.720)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(33.956, 15.406),
									_Utils_Tuple2(31.860, 15.091)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.764, 14.567),
									_Utils_Tuple2(27.668, 14.043)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(25.467, 13.834),
									_Utils_Tuple2(23.266, 13.624)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(21.903, 13.519),
									_Utils_Tuple2(20.541, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(19.074, 13.310),
									_Utils_Tuple2(17.606, 13.205)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(16.139, 13.205),
									_Utils_Tuple2(14.672, 13.205)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(13.624, 13.100),
									_Utils_Tuple2(12.576, 12.995)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(11.004, 12.681),
									_Utils_Tuple2(9.4323, 12.366)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.8602, 12.157),
									_Utils_Tuple2(6.2882, 11.947)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(4.2969, 11.737),
									_Utils_Tuple2(2.3056, 11.528)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-0.209, 11.423),
									_Utils_Tuple2(-2.724, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-5.344, 11.318),
									_Utils_Tuple2(-7.965, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-10.27, 11.423),
									_Utils_Tuple2(-12.57, 11.528)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.40, 11.528),
									_Utils_Tuple2(-18.23, 11.528)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-21.17, 11.633),
									_Utils_Tuple2(-24.10, 11.737)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-25.88, 11.737),
									_Utils_Tuple2(-27.66, 11.737)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-32.80, 11.633),
									_Utils_Tuple2(-37.93, 11.528)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-40.03, 11.423),
									_Utils_Tuple2(-42.13, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-45.90, 11.423),
									_Utils_Tuple2(-49.67, 11.528)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-52.50, 11.528),
									_Utils_Tuple2(-55.33, 11.528)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-58.06, 11.423),
									_Utils_Tuple2(-60.78, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-64.34, 10.794),
									_Utils_Tuple2(-67.91, 10.270)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-72.20, 9.8515),
									_Utils_Tuple2(-76.50, 9.4323)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-78.70, 9.4323),
									_Utils_Tuple2(-80.90, 9.4323)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-82.58, 9.5371),
									_Utils_Tuple2(-84.26, 9.6419)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-84.89, 10.165),
									_Utils_Tuple2(-85.51, 10.689)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-85.72, 11.423),
									_Utils_Tuple2(-85.93, 12.157)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-85.93, 12.366),
									_Utils_Tuple2(-85.93, 12.576)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-85.93, 12.681),
									_Utils_Tuple2(-85.93, 12.786))
								]))))))));
var $MacCASOutreach$graphicsvg$GraphicSVG$NoLine = {$: 'NoLine'};
var $MacCASOutreach$graphicsvg$GraphicSVG$blank = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 0, 0, 0, 0);
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
var $author$project$Master$bleafVein = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$filled,
	$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$curve,
		_Utils_Tuple2(26.410, 22.847),
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(25.048, 21.589),
				_Utils_Tuple2(23.685, 20.331)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.637, 19.703),
				_Utils_Tuple2(21.589, 19.074)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(20.646, 18.445),
				_Utils_Tuple2(19.703, 17.816)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(18.340, 17.082),
				_Utils_Tuple2(16.978, 16.349)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(16.349, 16.034),
				_Utils_Tuple2(15.720, 15.720)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(14.672, 16.139),
				_Utils_Tuple2(13.624, 16.558)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(12.052, 16.978),
				_Utils_Tuple2(10.480, 17.397)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(8.1746, 17.921),
				_Utils_Tuple2(5.8689, 18.445)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(4.5065, 18.445),
				_Utils_Tuple2(3.1441, 18.445)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(1.1528, 18.340),
				_Utils_Tuple2(-0.838, 18.235)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-3.458, 17.502),
				_Utils_Tuple2(-6.078, 16.768)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-4.820, 16.978),
				_Utils_Tuple2(-3.563, 17.187)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-1.572, 17.606),
				_Utils_Tuple2(0.4192, 18.026)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(1.4672, 18.026),
				_Utils_Tuple2(2.5152, 18.026)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(3.5633, 17.816),
				_Utils_Tuple2(4.6113, 17.606)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(5.4497, 17.502),
				_Utils_Tuple2(6.2882, 17.397)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(7.7554, 17.187),
				_Utils_Tuple2(9.2227, 16.978)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(10.375, 16.663),
				_Utils_Tuple2(11.528, 16.349)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(12.786, 15.825),
				_Utils_Tuple2(14.043, 15.301)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(13.729, 15.091),
				_Utils_Tuple2(13.414, 14.882)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(12.681, 14.672),
				_Utils_Tuple2(11.947, 14.462)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(11.213, 14.148),
				_Utils_Tuple2(10.480, 13.834)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(9.6419, 13.519),
				_Utils_Tuple2(8.8034, 13.205)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(7.8602, 12.890),
				_Utils_Tuple2(6.9170, 12.576)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(5.4497, 12.786),
				_Utils_Tuple2(3.9825, 12.995)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(2.7248, 13.205),
				_Utils_Tuple2(1.4672, 13.414)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(0.4192, 13.414),
				_Utils_Tuple2(-0.628, 13.414)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-3.563, 13.414),
				_Utils_Tuple2(-6.497, 13.414)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-8.593, 13.100),
				_Utils_Tuple2(-10.68, 12.786)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-13.62, 11.633),
				_Utils_Tuple2(-16.55, 10.480)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-14.88, 10.899),
				_Utils_Tuple2(-13.20, 11.318)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-11.10, 12.052),
				_Utils_Tuple2(-9.013, 12.786)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-7.441, 12.890),
				_Utils_Tuple2(-5.868, 12.995)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-4.506, 12.995),
				_Utils_Tuple2(-3.144, 12.995)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-1.886, 12.786),
				_Utils_Tuple2(-0.628, 12.576)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(0.2096, 12.576),
				_Utils_Tuple2(1.0480, 12.576)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(1.9912, 12.366),
				_Utils_Tuple2(2.9344, 12.157)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(4.1921, 12.052),
				_Utils_Tuple2(5.4497, 11.947)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(4.0873, 11.633),
				_Utils_Tuple2(2.7248, 11.318)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(1.7816, 10.899),
				_Utils_Tuple2(0.8384, 10.480)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-0.628, 9.6419),
				_Utils_Tuple2(-2.096, 8.8034)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-2.934, 8.3842),
				_Utils_Tuple2(-3.772, 7.9650)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-5.240, 7.9650),
				_Utils_Tuple2(-6.707, 7.9650)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-8.174, 7.9650),
				_Utils_Tuple2(-9.641, 7.9650)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-12.05, 7.4410),
				_Utils_Tuple2(-14.46, 6.9170)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.72, 6.3930),
				_Utils_Tuple2(-16.97, 5.8689)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-18.44, 5.1353),
				_Utils_Tuple2(-19.91, 4.4017)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-20.96, 3.5633),
				_Utils_Tuple2(-22.00, 2.7248)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-23.05, 1.6768),
				_Utils_Tuple2(-24.10, 0.6288)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-22.74, 1.4672),
				_Utils_Tuple2(-21.37, 2.3056)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-19.59, 3.5633),
				_Utils_Tuple2(-17.81, 4.8209)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-16.34, 5.3449),
				_Utils_Tuple2(-14.88, 5.8689)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-13.41, 6.2882),
				_Utils_Tuple2(-11.94, 6.7074)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-10.48, 6.9170),
				_Utils_Tuple2(-9.013, 7.1266)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-7.336, 7.0218),
				_Utils_Tuple2(-5.659, 6.9170)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-6.917, 6.0786),
				_Utils_Tuple2(-8.174, 5.2401)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-9.327, 4.5065),
				_Utils_Tuple2(-10.48, 3.7729)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-11.42, 2.8296),
				_Utils_Tuple2(-12.36, 1.8864)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-13.62, 0.7336),
				_Utils_Tuple2(-14.88, -0.419)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.61, -0.943),
				_Utils_Tuple2(-16.34, -1.467)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-17.50, -2.200),
				_Utils_Tuple2(-18.65, -2.934)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-19.70, -3.772),
				_Utils_Tuple2(-20.75, -4.611)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-21.69, -5.659),
				_Utils_Tuple2(-22.63, -6.707)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-23.16, -7.650),
				_Utils_Tuple2(-23.68, -8.593)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-24, -9.327),
				_Utils_Tuple2(-24.31, -10.06)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-23.37, -9.013),
				_Utils_Tuple2(-22.42, -7.965)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-21.69, -6.812),
				_Utils_Tuple2(-20.96, -5.659)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-20.01, -4.716),
				_Utils_Tuple2(-19.07, -3.772)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-18.13, -3.144),
				_Utils_Tuple2(-17.18, -2.515)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.51, -1.467),
				_Utils_Tuple2(-13.83, -0.419)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.30, -1.781),
				_Utils_Tuple2(-16.76, -3.144)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-18.02, -4.506),
				_Utils_Tuple2(-19.28, -5.868)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-20.01, -7.126),
				_Utils_Tuple2(-20.75, -8.384)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-21.17, -9.327),
				_Utils_Tuple2(-21.58, -10.27)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-22.21, -11.73),
				_Utils_Tuple2(-22.84, -13.20)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-21.69, -11.94),
				_Utils_Tuple2(-20.54, -10.68)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-19.28, -9.013),
				_Utils_Tuple2(-18.02, -7.336)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-16.97, -5.868),
				_Utils_Tuple2(-15.93, -4.401)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-14.98, -3.144),
				_Utils_Tuple2(-14.04, -1.886)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-13.51, -1.467),
				_Utils_Tuple2(-12.99, -1.048)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-13.72, -2.305),
				_Utils_Tuple2(-14.46, -3.563)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-14.77, -5.030),
				_Utils_Tuple2(-15.09, -6.497)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.19, -7.965),
				_Utils_Tuple2(-15.30, -9.432)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.30, -10.58),
				_Utils_Tuple2(-15.30, -11.73)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-15.09, -10.16),
				_Utils_Tuple2(-14.88, -8.593)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-14.35, -6.812),
				_Utils_Tuple2(-13.83, -5.030)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-13.31, -3.668),
				_Utils_Tuple2(-12.78, -2.305)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-12.15, -1.257),
				_Utils_Tuple2(-11.52, -0.209)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-10.68, 0.8384),
				_Utils_Tuple2(-9.851, 1.8864)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-8.279, 3.1441),
				_Utils_Tuple2(-6.707, 4.4017)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-5.240, 5.1353),
				_Utils_Tuple2(-3.772, 5.8689)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-1.991, 6.8122),
				_Utils_Tuple2(-0.209, 7.7554)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(0.8384, 8.2794),
				_Utils_Tuple2(1.8864, 8.8034)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(1.6768, 7.8602),
				_Utils_Tuple2(1.4672, 6.9170)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(1.0480, 5.2401),
				_Utils_Tuple2(0.6288, 3.5633)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-0.209, 1.4672),
				_Utils_Tuple2(-1.048, -0.628)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-2.305, -3.039),
				_Utils_Tuple2(-3.563, -5.449)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(-0.628, 0.1048),
				_Utils_Tuple2(2.3056, 5.6593)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(2.7248, 7.7554),
				_Utils_Tuple2(3.1441, 9.8515)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(4.7161, 10.480),
				_Utils_Tuple2(6.2882, 11.109)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(8.3842, 11.842),
				_Utils_Tuple2(10.480, 12.576)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(10.689, 11.423),
				_Utils_Tuple2(10.899, 10.270)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(10.899, 8.9082),
				_Utils_Tuple2(10.899, 7.5458)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(10.585, 5.2401),
				_Utils_Tuple2(10.270, 2.9344)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(9.5371, 0.7336),
				_Utils_Tuple2(8.8034, -1.467)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(8.0698, -3.248),
				_Utils_Tuple2(7.3362, -5.030)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(6.6026, -6.183),
				_Utils_Tuple2(5.8689, -7.336)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(4.7161, -9.013),
				_Utils_Tuple2(3.5633, -10.68)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(2.4104, -11.63),
				_Utils_Tuple2(1.2576, -12.57)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(3.6681, -10.58),
				_Utils_Tuple2(6.0786, -8.593)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(7.2314, -6.602),
				_Utils_Tuple2(8.3842, -4.611)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(9.1179, -3.039),
				_Utils_Tuple2(9.8515, -1.467)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(10.165, -0.314),
				_Utils_Tuple2(10.480, 0.8384)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(10.899, 2.3056),
				_Utils_Tuple2(11.318, 3.7729)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(11.737, 5.7641),
				_Utils_Tuple2(12.157, 7.7554)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(12.366, 9.4323),
				_Utils_Tuple2(12.576, 11.109)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(12.681, 11.947),
				_Utils_Tuple2(12.786, 12.786)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(14.882, 13.414),
				_Utils_Tuple2(16.978, 14.043)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(18.026, 14.358),
				_Utils_Tuple2(19.074, 14.672)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(20.122, 13.938),
				_Utils_Tuple2(21.170, 13.205)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(21.799, 12.262),
				_Utils_Tuple2(22.427, 11.318)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.637, 10.375),
				_Utils_Tuple2(22.847, 9.4323)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.951, 8.3842),
				_Utils_Tuple2(23.056, 7.3362)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.951, 6.0786),
				_Utils_Tuple2(22.847, 4.8209)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.742, 2.9344),
				_Utils_Tuple2(22.637, 1.0480)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.427, -0.104),
				_Utils_Tuple2(22.218, -1.257)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(21.799, -2.620),
				_Utils_Tuple2(21.379, -3.982)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(20.331, -5.973),
				_Utils_Tuple2(19.283, -7.965)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(21.065, -5.135),
				_Utils_Tuple2(22.847, -2.305)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(23.266, -0.419),
				_Utils_Tuple2(23.685, 1.4672)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(23.895, 3.2489),
				_Utils_Tuple2(24.104, 5.0305)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(24.104, 6.8122),
				_Utils_Tuple2(24.104, 8.5938)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(23.475, 10.689),
				_Utils_Tuple2(22.847, 12.786)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(21.589, 14.043),
				_Utils_Tuple2(20.331, 15.301)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(22.951, 16.454),
				_Utils_Tuple2(25.572, 17.606)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(27.353, 19.074),
				_Utils_Tuple2(29.135, 20.541)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(29.973, 21.694),
				_Utils_Tuple2(30.812, 22.847)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(31.021, 23.895),
				_Utils_Tuple2(31.231, 24.943)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(31.126, 25.572),
				_Utils_Tuple2(31.021, 26.200)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(30.183, 26.724),
				_Utils_Tuple2(29.344, 27.248)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(28.925, 27.248),
				_Utils_Tuple2(28.506, 27.248)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(28.192, 26.934),
				_Utils_Tuple2(27.877, 26.620)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(27.668, 25.991),
				_Utils_Tuple2(27.458, 25.362)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(27.248, 24.943),
				_Utils_Tuple2(27.039, 24.524)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(26.934, 24.104),
				_Utils_Tuple2(26.829, 23.685)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
				_Utils_Tuple2(26.515, 23.371),
				_Utils_Tuple2(26.200, 23.056))
			])));
var $MacCASOutreach$graphicsvg$GraphicSVG$lightGreen = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 138, 226, 52, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$Unbroken = function (a) {
	return {$: 'Unbroken', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$solid = function (th) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Unbroken(th);
};
var $author$project$Master$bleaff = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
	$elm$core$Basics$degrees(-30),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.3,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(2),
					$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$lightGreen,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(28.087, 26.620),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.877, 26.096),
									_Utils_Tuple2(27.668, 25.572)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.039, 24.838),
									_Utils_Tuple2(26.410, 24.104)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(25.676, 23.266),
									_Utils_Tuple2(24.943, 22.427)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(24.104, 21.589),
									_Utils_Tuple2(23.266, 20.751)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.218, 19.912),
									_Utils_Tuple2(21.170, 19.074)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(20.436, 19.807),
									_Utils_Tuple2(19.703, 20.541)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(17.921, 21.589),
									_Utils_Tuple2(16.139, 22.637)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(14.148, 23.056),
									_Utils_Tuple2(12.157, 23.475)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(9.9563, 23.790),
									_Utils_Tuple2(7.7554, 24.104)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(5.2401, 24.209),
									_Utils_Tuple2(2.7248, 24.314)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(0.1048, 24),
									_Utils_Tuple2(-2.515, 23.685)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-4.506, 23.056),
									_Utils_Tuple2(-6.497, 22.427)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-9.117, 21.379),
									_Utils_Tuple2(-11.73, 20.331)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.10, 19.179),
									_Utils_Tuple2(-14.46, 18.026)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-16.55, 16.454),
									_Utils_Tuple2(-18.65, 14.882)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-19.59, 13.519),
									_Utils_Tuple2(-20.54, 12.157)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-21.69, 10.375),
									_Utils_Tuple2(-22.84, 8.5938)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-23.26, 7.3362),
									_Utils_Tuple2(-23.68, 6.0786)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-24.20, 4.5065),
									_Utils_Tuple2(-24.73, 2.9344)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-25.46, 0.6288),
									_Utils_Tuple2(-26.20, -1.676)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-26.51, -3.563),
									_Utils_Tuple2(-26.82, -5.449)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-26.72, -8.174),
									_Utils_Tuple2(-26.62, -10.89)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-26.30, -13.20),
									_Utils_Tuple2(-25.99, -15.51)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-25.15, -17.29),
									_Utils_Tuple2(-24.31, -19.07)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-22.21, -17.92),
									_Utils_Tuple2(-20.12, -16.76)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-17.92, -16.34),
									_Utils_Tuple2(-15.72, -15.93)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-12.57, -16.24),
									_Utils_Tuple2(-9.432, -16.55)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-5.449, -16.87),
									_Utils_Tuple2(-1.467, -17.18)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.5720, -17.29),
									_Utils_Tuple2(4.6113, -17.39)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(8.4890, -16.87),
									_Utils_Tuple2(12.366, -16.34)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(16.139, -14.88),
									_Utils_Tuple2(19.912, -13.41)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.637, -11.10),
									_Utils_Tuple2(25.362, -8.803)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.144, -5.868),
									_Utils_Tuple2(28.925, -2.934)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.659, 0.8384),
									_Utils_Tuple2(30.393, 4.6113)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.973, 7.2314),
									_Utils_Tuple2(29.554, 9.8515)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.772, 12.366),
									_Utils_Tuple2(25.991, 14.882)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(24.524, 15.615),
									_Utils_Tuple2(23.056, 16.349)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(25.886, 18.235),
									_Utils_Tuple2(28.716, 20.122)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.868, 22.323),
									_Utils_Tuple2(31.021, 24.524)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(33.851, 28.087),
									_Utils_Tuple2(36.681, 31.650)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(38.672, 34.375),
									_Utils_Tuple2(40.663, 37.100)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(43.074, 40.034),
									_Utils_Tuple2(45.484, 42.969)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(44.017, 44.122),
									_Utils_Tuple2(42.550, 45.275)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(40.873, 42.759),
									_Utils_Tuple2(39.196, 40.244)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(37.729, 38.043),
									_Utils_Tuple2(36.262, 35.842)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(33.117, 32.279),
									_Utils_Tuple2(29.973, 28.716)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.240, 27.668),
									_Utils_Tuple2(28.506, 26.620))
								])))),
					$author$project$Master$bleafVein
				]))));
var $author$project$Master$repeatDuration = F4(
	function (speed, duration, startPosition, time) {
		return (speed * (time - (duration * (($elm$core$Basics$floor(time) / duration) | 0)))) + startPosition;
	});
var $author$project$Master$bleaf = function (_v0) {
	var t = _v0.a;
	var _v1 = _v0.b;
	var x = _v1.a;
	var y = _v1.b;
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		A4($author$project$Master$repeatDuration, 0.1, 10, 0.5, t),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
			0.15,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(x, y + 25),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(
						(-1) * $elm$core$Basics$sin(
							A4($author$project$Master$repeatDuration, 1.5, 10, -4, t)),
						0),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(
							5 * $elm$core$Basics$sin(
								A4($author$project$Master$repeatDuration, 1, 10, 0, t))),
						$MacCASOutreach$graphicsvg$GraphicSVG$group(
							_List_fromArray(
								[
									$author$project$Master$bleafStem,
									$author$project$Master$bleaff,
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(46, 15),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
										$elm$core$Basics$degrees(180),
										$author$project$Master$bleaff))
								])))))));
};
var $author$project$Master$bleafGroup = function (t) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					0,
					A4($author$project$Master$repeatDuration, 10, 10, -50, t)),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					A2(
						$elm$core$List$map,
						$author$project$Master$bleaf,
						_List_fromArray(
							[
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-25, -450)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-25, -30)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-26, -60)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-27, -90)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-26, -120)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-25, -150)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-24, -180)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-23, -210)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-22, -240)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-23, -270)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-24, -300)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-25, -330)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-24, 0)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-23, 30)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-22, 60)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-26, -360)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-27, -390)),
								_Utils_Tuple2(
								t,
								_Utils_Tuple2(-26, -420))
							]))))
			]));
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
var $author$project$Master$seaweed = function (t) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(
			-2,
			A4($author$project$Master$repeatDuration, 10, 10, -230, t)),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
			A4($author$project$Master$repeatDuration, 0.1, 10, 1, t),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(10),
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(0, 0),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(
										(-8) * $elm$core$Basics$sin(t),
										50),
									_Utils_Tuple2(0, 100)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(
										8 * $elm$core$Basics$sin(t),
										150),
									_Utils_Tuple2(0, 200))
								])))
					]))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$clip = F2(
	function (shape1, shape2) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, shape1, shape2);
	});
var $author$project$Master$stem = function (_v0) {
	var t = _v0.a;
	var y = _v0.b;
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(-70, y),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(290),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
				1.2,
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(
						A4($author$project$Master$repeatDuration, 0.05, 10, 6, t)),
					$MacCASOutreach$graphicsvg$GraphicSVG$lightGreen,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(0, 0),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									(-3) * $elm$core$Basics$sin(t),
									50),
								_Utils_Tuple2(0, 100)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									3 * $elm$core$Basics$sin(t),
									150),
								_Utils_Tuple2(0, 100))
							]))))));
};
var $author$project$Master$stems = function (t) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$clip,
		$author$project$Master$seaweed(t),
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			A2(
				$elm$core$List$map,
				$author$project$Master$stem,
				_List_fromArray(
					[
						_Utils_Tuple2(t, 60),
						_Utils_Tuple2(t, 40),
						_Utils_Tuple2(t, 20),
						_Utils_Tuple2(t, 0),
						_Utils_Tuple2(t, -20),
						_Utils_Tuple2(t, -40),
						_Utils_Tuple2(t, -60),
						_Utils_Tuple2(t, -80)
					]))));
};
var $author$project$Master$beanstockmodel = function (time) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
				0.2,
				$author$project$Master$bleafGroup(time)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
				0.2,
				$author$project$Master$seaweed(time)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
				0.2,
				$author$project$Master$stems(time))
			]));
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
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
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
var $elm$core$Basics$ge = _Utils_ge;
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
var $MacCASOutreach$graphicsvg$GraphicSVG$hsl = F3(
	function (h, s, l) {
		var _v0 = A3($MacCASOutreach$graphicsvg$GraphicSVG$convert, h, s, l);
		var r = _v0.a;
		var g = _v0.b;
		var b = _v0.c;
		return A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, r, g, b, 1);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyTap = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Tap, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$RoundRect = F3(
	function (a, b, c) {
		return {$: 'RoundRect', a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$roundedRect = F3(
	function (w, h, r) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$RoundRect, w, h, r);
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
var $author$project$Master$button = F4(
	function (txt, width, hue, msg) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
			msg,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
						A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, hue, 0.25, 0.25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, hue, 1, 0.5),
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, width, 10, 3))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, -1.5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, hue, 0.25, 0.25),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$size,
								4,
								$MacCASOutreach$graphicsvg$GraphicSVG$centered(
									$MacCASOutreach$graphicsvg$GraphicSVG$text(txt)))))
					])));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Circle = function (a) {
	return {$: 'Circle', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$circle = function (r) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Circle(r);
};
var $author$project$Master$Winner = function (a) {
	return {$: 'Winner', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$red = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 204, 0, 0, 1);
var $author$project$Master$drawButton = F3(
	function (pointsSoFar, idx, buttonShape) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2((-80) + (20 * idx), -50),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
						$author$project$Master$Winner(idx),
						buttonShape),
						function () {
						var _v0 = A2($elm$core$Dict$get, idx, pointsSoFar);
						if (_v0.$ === 'Nothing') {
							return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
						} else {
							var newPoints = _v0.a;
							return A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 10),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$red,
									$MacCASOutreach$graphicsvg$GraphicSVG$text(
										'+' + $elm$core$String$fromInt(newPoints))));
						}
					}()
					])));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$darkBrown = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 143, 89, 2, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$Oval = F2(
	function (a, b) {
		return {$: 'Oval', a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$oval = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Oval, w, h);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Polygon = function (a) {
	return {$: 'Polygon', a: a};
};
var $elm$core$Basics$turns = function (angleInTurns) {
	return (2 * $elm$core$Basics$pi) * angleInTurns;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$wedgeHelper = F2(
	function (r, cn) {
		var angle = $elm$core$Basics$turns(0.5 * cn);
		return _Utils_Tuple2(
			r * $elm$core$Basics$cos(angle),
			r * $elm$core$Basics$sin(angle));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$wedge = F2(
	function (r, frac) {
		var n = ((frac * 360) / 10) + 5;
		var ni = $elm$core$Basics$round(n);
		var dlta = frac / ni;
		return $MacCASOutreach$graphicsvg$GraphicSVG$Polygon(
			(frac > 0) ? _Utils_ap(
				_List_fromArray(
					[
						_Utils_Tuple2(0, 0),
						A2($MacCASOutreach$graphicsvg$GraphicSVG$wedgeHelper, r, -frac)
					]),
				_Utils_ap(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeL,
							A2(
								$elm$core$Basics$composeL,
								$MacCASOutreach$graphicsvg$GraphicSVG$wedgeHelper(r),
								$elm$core$Basics$mul(dlta)),
							$elm$core$Basics$toFloat),
						A2($elm$core$List$range, -ni, ni)),
					_List_fromArray(
						[
							A2($MacCASOutreach$graphicsvg$GraphicSVG$wedgeHelper, r, frac),
							_Utils_Tuple2(0, 0)
						]))) : _List_Nil);
	});
var $author$project$Master$girlHCW = F3(
	function (hairColour, skinColour, eyeColour) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					hairColour,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 36, 36, 20)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 20),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						hairColour,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(10))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -3),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 30, 30, 10))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -7),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(270),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$wedge, 7, 0.5)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(90),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 8)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(90),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 8)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(90),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 8)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(90),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 8)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						eyeColour,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(2.75))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						eyeColour,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(2.75))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(5.5, 1),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(1.5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(5, 6),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							hairColour,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$curve,
								_Utils_Tuple2(0, 0),
								_List_fromArray(
									[
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(5, 0),
										_Utils_Tuple2(8, -5))
									]))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-4, 12),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							hairColour,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$curve,
								_Utils_Tuple2(0, 0),
								_List_fromArray(
									[
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(5, 0),
										_Utils_Tuple2(8, -5))
									]))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-17, -3),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							skinColour,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 9)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(17, -3),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(-25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							skinColour,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 9)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -20),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 11, 6)))
				]));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$lightBrown = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 233, 185, 110, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$darkBlue = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 32, 74, 135, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$purple = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 117, 80, 123, 1);
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
var $author$project$Master$uniform = function (skinColour) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-26, 3),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 9, 8)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(26, 3),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 9, 8)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(20, -7),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 28, 8)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-20, -7),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 28, 8)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-28.5, 0.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					skinColour,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(4))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(28.5, 0.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					skinColour,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(4))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-7, -25),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(88),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 50, 14)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(7, -25),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(92),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkBlue,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 50, 14)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$purple,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 30, 40)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-17, 11),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$purple,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 15)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(17, 11),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(45),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$purple,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 10, 15)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-1, 18),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(30),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						skinColour,
						$MacCASOutreach$graphicsvg$GraphicSVG$triangle(6.5)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(7, -52),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 13, 6, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-7, -52),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 13, 6, 3)))
			]));
};
var $author$project$Master$girl = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$move,
	_Utils_Tuple2(0, -37),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.2,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-30, 30),
					A3($author$project$Master$girlHCW, $MacCASOutreach$graphicsvg$GraphicSVG$darkBrown, $MacCASOutreach$graphicsvg$GraphicSVG$lightBrown, $MacCASOutreach$graphicsvg$GraphicSVG$darkGreen)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-29, -10),
					$author$project$Master$uniform($MacCASOutreach$graphicsvg$GraphicSVG$lightBrown))
				]))));
var $MacCASOutreach$graphicsvg$GraphicSVG$blue = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 52, 101, 164, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$brown = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 193, 125, 17, 1);
var $author$project$Master$hotAirBaloon = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$blue,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-13.10, -26.26),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-14.84, -24.39),
						_Utils_Tuple2(-16.58, -22.53)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-18.38, -20.31),
						_Utils_Tuple2(-20.19, -18.08)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-22.05, -15.50),
						_Utils_Tuple2(-23.91, -12.92)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-25.66, -9.855),
						_Utils_Tuple2(-27.40, -6.790)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.24, -4.567),
						_Utils_Tuple2(-29.08, -2.343)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.62, 0.7211),
						_Utils_Tuple2(-30.16, 3.7859)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-30.16, 4.5671),
						_Utils_Tuple2(-30.16, 5.3483)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-30.10, 6.0694),
						_Utils_Tuple2(-30.04, 6.7906)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.86, 7.8723),
						_Utils_Tuple2(-29.68, 8.9539)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-29.38, 10.276),
						_Utils_Tuple2(-29.08, 11.598)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-28.00, 14.182),
						_Utils_Tuple2(-26.92, 16.766)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-26.38, 17.667),
						_Utils_Tuple2(-25.84, 18.569)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-24.63, 20.191),
						_Utils_Tuple2(-23.43, 21.814)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-22.53, 22.655),
						_Utils_Tuple2(-21.63, 23.496)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-20.73, 24.338),
						_Utils_Tuple2(-19.83, 25.179)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-18.74, 25.840),
						_Utils_Tuple2(-17.66, 26.501)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-16.52, 27.222),
						_Utils_Tuple2(-15.38, 27.943)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-14.18, 28.364),
						_Utils_Tuple2(-12.98, 28.784)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-11.95, 29.145),
						_Utils_Tuple2(-10.93, 29.506)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-9.675, 29.686),
						_Utils_Tuple2(-8.413, 29.866)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-7.151, 29.926),
						_Utils_Tuple2(-5.889, 29.986)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-4.627, 29.926),
						_Utils_Tuple2(-3.365, 29.866)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.682, 29.566),
						_Utils_Tuple2(0, 29.265)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.3220, 28.784),
						_Utils_Tuple2(2.6441, 28.304)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(3.7258, 27.823),
						_Utils_Tuple2(4.8075, 27.342)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.1295, 26.561),
						_Utils_Tuple2(7.4516, 25.780)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.3530, 25.119),
						_Utils_Tuple2(9.2544, 24.458)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.155, 23.616),
						_Utils_Tuple2(11.057, 22.775)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(11.778, 21.934),
						_Utils_Tuple2(12.499, 21.092)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(13.280, 20.071),
						_Utils_Tuple2(14.061, 19.049)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(14.783, 17.968),
						_Utils_Tuple2(15.504, 16.886)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(15.984, 15.744),
						_Utils_Tuple2(16.465, 14.602)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(16.886, 13.461),
						_Utils_Tuple2(17.307, 12.319)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(17.667, 11.237),
						_Utils_Tuple2(18.028, 10.155)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(18.148, 8.9539),
						_Utils_Tuple2(18.268, 7.7521)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(18.448, 6.4300),
						_Utils_Tuple2(18.629, 5.1079)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(18.569, 4.0262),
						_Utils_Tuple2(18.508, 2.9446)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(18.448, 1.9830),
						_Utils_Tuple2(18.388, 1.0215)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(18.268, 0.3004),
						_Utils_Tuple2(18.148, -0.420)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(17.847, -1.322),
						_Utils_Tuple2(17.547, -2.223)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(17.246, -3.305),
						_Utils_Tuple2(16.946, -4.386)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(16.225, -5.889),
						_Utils_Tuple2(15.504, -7.391)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(14.662, -8.893),
						_Utils_Tuple2(13.821, -10.39)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(12.439, -12.43),
						_Utils_Tuple2(11.057, -14.48)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.035, -15.92),
						_Utils_Tuple2(9.0140, -17.36)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(7.9323, -18.62),
						_Utils_Tuple2(6.8507, -19.89)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.0694, -20.85),
						_Utils_Tuple2(5.2882, -21.81)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(4.4469, -22.71),
						_Utils_Tuple2(3.6056, -23.61)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.4037, -24.87),
						_Utils_Tuple2(1.2018, -26.14)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-6.069, -26.14),
						_Utils_Tuple2(-13.34, -26.14))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-12.40, -26.18),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-11.17, -32.91),
						_Utils_Tuple2(-9.952, -39.65)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-9.799, -39.65),
						_Utils_Tuple2(-9.645, -39.65)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-10.87, -32.91),
						_Utils_Tuple2(-12.09, -26.18)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-12.24, -26.18),
						_Utils_Tuple2(-12.40, -26.18))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(0.3004, -26.26),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-0.781, -32.93),
						_Utils_Tuple2(-1.862, -39.60)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.862, -39.60),
						_Utils_Tuple2(-1.862, -39.60)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.742, -39.60),
						_Utils_Tuple2(-1.622, -39.60)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-0.480, -32.93),
						_Utils_Tuple2(0.6610, -26.26)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(0.4807, -26.26),
						_Utils_Tuple2(0.3004, -26.26)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(0.1802, -26.26),
						_Utils_Tuple2(0.0600, -26.26))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$brown,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-13.34, -39.72),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-5.949, -39.66),
						_Utils_Tuple2(1.4422, -39.60)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-0.540, -44.83),
						_Utils_Tuple2(-2.523, -50.05)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-5.588, -50.05),
						_Utils_Tuple2(-8.653, -50.05)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-11.05, -44.95),
						_Utils_Tuple2(-13.46, -39.84))
					])))
		]));
var $author$project$Master$myBalloon = F2(
	function (t, score) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, ((9 * score) + 1) - 50),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.3,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					0.1 * $elm$core$Basics$sin(t),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[$author$project$Master$girl, $author$project$Master$hotAirBaloon])))));
	});
var $author$project$Master$balloon = F2(
	function (maybeTime, myScore) {
		return A2($author$project$Master$myBalloon, maybeTime, myScore);
	});
var $author$project$Master$scoredBeanstock = F2(
	function (time, score) {
		return (score < 10) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, (-60) + (1.5 * score)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
						0.5 + (0.015 * score),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
							1 + (0.25 * score),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.25,
								$author$project$Master$beanstockmodel(time)))))
				])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(
						0,
						A4($author$project$Master$repeatDuration, 9, 10, -45, time)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
						A4($author$project$Master$repeatDuration, 0.1, 10, 0.5, time),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
							A4($author$project$Master$repeatDuration, 1.5, 10, 1, time),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.25,
								$author$project$Master$beanstockmodel(time)))))
				]));
	});
var $author$project$Master$beanstockScene = F2(
	function (time, score) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 20),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$blue,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 150))),
					A2($author$project$Master$scoredBeanstock, time, score),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -100),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$brown,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 100)))
				]));
	});
var $author$project$Master$beanstock = F2(
	function (maybeTime, myScore) {
		return A2($author$project$Master$beanstockScene, maybeTime, myScore);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$rectangle = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rect, w, h);
	});
var $author$project$Master$caterpillarSegment = function (col) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -15),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(30),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$lightBrown,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 1, 5)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -15),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-30),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$lightBrown,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rectangle, 1, 5)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				col,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(15))
			]));
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Master$myCaterpillar = F3(
	function (n, startN, t) {
		var yPos = (!A2($elm$core$Basics$modBy, 2, n)) ? $elm$core$Basics$sin(t * 2) : (-$elm$core$Basics$sin(t * 2));
		var segment = _Utils_eq(n, startN) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					$author$project$Master$caterpillarSegment(
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$hsl,
						2 + $elm$core$Basics$sin(n * 0.25),
						1,
						0.5)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-2.5, 5),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(2.5))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(7.5, 5),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						$MacCASOutreach$graphicsvg$GraphicSVG$circle(2.5)))
				])) : $author$project$Master$caterpillarSegment(
			A3(
				$MacCASOutreach$graphicsvg$GraphicSVG$hsl,
				2 + $elm$core$Basics$sin(n * 0.25),
				1,
				0.5));
		return (_Utils_cmp(n, (-startN) + 2) < 0) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A3($author$project$Master$myCaterpillar, n - 1, startN, t),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2((n - 1) * 15, yPos),
					segment)
				]));
	});
var $author$project$Master$caterpillarr = function (t) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.5,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -140),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(90),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							0.5,
							A3($author$project$Master$myCaterpillar, 3, 3, 3 * t))))
				])));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$ghost = function (stencil) {
	return A3(
		$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
		$elm$core$Maybe$Just($MacCASOutreach$graphicsvg$GraphicSVG$blank),
		$elm$core$Maybe$Nothing,
		stencil);
};
var $author$project$Master$bite = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(x, y - 200),
		$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
			$MacCASOutreach$graphicsvg$GraphicSVG$circle(15)));
};
var $author$project$Master$bites = function (n) {
	return (!n) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$author$project$Master$bite(
				_Utils_Tuple2(0, 30 * n)),
				$author$project$Master$bites(n - 1)
			]));
};
var $author$project$Master$leaf = function (y) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(-5, (-180) + y),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(10),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(2),
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$lightGreen,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$curve,
								_Utils_Tuple2(28.087, 26.620),
								_List_fromArray(
									[
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(27.877, 26.096),
										_Utils_Tuple2(27.668, 25.572)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(27.039, 24.838),
										_Utils_Tuple2(26.410, 24.104)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(25.676, 23.266),
										_Utils_Tuple2(24.943, 22.427)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(24.104, 21.589),
										_Utils_Tuple2(23.266, 20.751)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(22.218, 19.912),
										_Utils_Tuple2(21.170, 19.074)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(20.436, 19.807),
										_Utils_Tuple2(19.703, 20.541)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(17.921, 21.589),
										_Utils_Tuple2(16.139, 22.637)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(14.148, 23.056),
										_Utils_Tuple2(12.157, 23.475)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(9.9563, 23.790),
										_Utils_Tuple2(7.7554, 24.104)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(5.2401, 24.209),
										_Utils_Tuple2(2.7248, 24.314)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(0.1048, 24),
										_Utils_Tuple2(-2.515, 23.685)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-4.506, 23.056),
										_Utils_Tuple2(-6.497, 22.427)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-9.117, 21.379),
										_Utils_Tuple2(-11.73, 20.331)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-13.10, 19.179),
										_Utils_Tuple2(-14.46, 18.026)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-16.55, 16.454),
										_Utils_Tuple2(-18.65, 14.882)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-19.59, 13.519),
										_Utils_Tuple2(-20.54, 12.157)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-21.69, 10.375),
										_Utils_Tuple2(-22.84, 8.5938)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-23.26, 7.3362),
										_Utils_Tuple2(-23.68, 6.0786)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-24.20, 4.5065),
										_Utils_Tuple2(-24.73, 2.9344)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-25.46, 0.6288),
										_Utils_Tuple2(-26.20, -1.676)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-26.51, -3.563),
										_Utils_Tuple2(-26.82, -5.449)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-26.72, -8.174),
										_Utils_Tuple2(-26.62, -10.89)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-26.30, -13.20),
										_Utils_Tuple2(-25.99, -15.51)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-25.15, -17.29),
										_Utils_Tuple2(-24.31, -19.07)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-22.21, -17.92),
										_Utils_Tuple2(-20.12, -16.76)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-17.92, -16.34),
										_Utils_Tuple2(-15.72, -15.93)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-12.57, -16.24),
										_Utils_Tuple2(-9.432, -16.55)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-5.449, -16.87),
										_Utils_Tuple2(-1.467, -17.18)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(1.5720, -17.29),
										_Utils_Tuple2(4.6113, -17.39)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(8.4890, -16.87),
										_Utils_Tuple2(12.366, -16.34)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(16.139, -14.88),
										_Utils_Tuple2(19.912, -13.41)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(22.637, -11.10),
										_Utils_Tuple2(25.362, -8.803)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(27.144, -5.868),
										_Utils_Tuple2(28.925, -2.934)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(29.659, 0.8384),
										_Utils_Tuple2(30.393, 4.6113)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(29.973, 7.2314),
										_Utils_Tuple2(29.554, 9.8515)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(27.772, 12.366),
										_Utils_Tuple2(25.991, 14.882)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(24.524, 15.615),
										_Utils_Tuple2(23.056, 16.349)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(25.886, 18.235),
										_Utils_Tuple2(28.716, 20.122)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(29.868, 22.323),
										_Utils_Tuple2(31.021, 24.524)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(33.851, 28.087),
										_Utils_Tuple2(36.681, 31.650)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(38.672, 34.375),
										_Utils_Tuple2(40.663, 37.100)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(43.074, 40.034),
										_Utils_Tuple2(45.484, 42.969)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(44.017, 44.122),
										_Utils_Tuple2(42.550, 45.275)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(40.873, 42.759),
										_Utils_Tuple2(39.196, 40.244)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(37.729, 38.043),
										_Utils_Tuple2(36.262, 35.842)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(33.117, 32.279),
										_Utils_Tuple2(29.973, 28.716)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(29.240, 27.668),
										_Utils_Tuple2(28.506, 26.620))
									])))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$curve,
							_Utils_Tuple2(26.410, 22.847),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(25.048, 21.589),
									_Utils_Tuple2(23.685, 20.331)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.637, 19.703),
									_Utils_Tuple2(21.589, 19.074)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(20.646, 18.445),
									_Utils_Tuple2(19.703, 17.816)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(18.340, 17.082),
									_Utils_Tuple2(16.978, 16.349)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(16.349, 16.034),
									_Utils_Tuple2(15.720, 15.720)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(14.672, 16.139),
									_Utils_Tuple2(13.624, 16.558)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(12.052, 16.978),
									_Utils_Tuple2(10.480, 17.397)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(8.1746, 17.921),
									_Utils_Tuple2(5.8689, 18.445)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(4.5065, 18.445),
									_Utils_Tuple2(3.1441, 18.445)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.1528, 18.340),
									_Utils_Tuple2(-0.838, 18.235)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-3.458, 17.502),
									_Utils_Tuple2(-6.078, 16.768)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-4.820, 16.978),
									_Utils_Tuple2(-3.563, 17.187)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-1.572, 17.606),
									_Utils_Tuple2(0.4192, 18.026)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.4672, 18.026),
									_Utils_Tuple2(2.5152, 18.026)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(3.5633, 17.816),
									_Utils_Tuple2(4.6113, 17.606)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(5.4497, 17.502),
									_Utils_Tuple2(6.2882, 17.397)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.7554, 17.187),
									_Utils_Tuple2(9.2227, 16.978)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.375, 16.663),
									_Utils_Tuple2(11.528, 16.349)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(12.786, 15.825),
									_Utils_Tuple2(14.043, 15.301)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(13.729, 15.091),
									_Utils_Tuple2(13.414, 14.882)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(12.681, 14.672),
									_Utils_Tuple2(11.947, 14.462)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(11.213, 14.148),
									_Utils_Tuple2(10.480, 13.834)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(9.6419, 13.519),
									_Utils_Tuple2(8.8034, 13.205)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.8602, 12.890),
									_Utils_Tuple2(6.9170, 12.576)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(5.4497, 12.786),
									_Utils_Tuple2(3.9825, 12.995)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.7248, 13.205),
									_Utils_Tuple2(1.4672, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(0.4192, 13.414),
									_Utils_Tuple2(-0.628, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-3.563, 13.414),
									_Utils_Tuple2(-6.497, 13.414)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-8.593, 13.100),
									_Utils_Tuple2(-10.68, 12.786)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.62, 11.633),
									_Utils_Tuple2(-16.55, 10.480)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-14.88, 10.899),
									_Utils_Tuple2(-13.20, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-11.10, 12.052),
									_Utils_Tuple2(-9.013, 12.786)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-7.441, 12.890),
									_Utils_Tuple2(-5.868, 12.995)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-4.506, 12.995),
									_Utils_Tuple2(-3.144, 12.995)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-1.886, 12.786),
									_Utils_Tuple2(-0.628, 12.576)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(0.2096, 12.576),
									_Utils_Tuple2(1.0480, 12.576)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.9912, 12.366),
									_Utils_Tuple2(2.9344, 12.157)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(4.1921, 12.052),
									_Utils_Tuple2(5.4497, 11.947)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(4.0873, 11.633),
									_Utils_Tuple2(2.7248, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.7816, 10.899),
									_Utils_Tuple2(0.8384, 10.480)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-0.628, 9.6419),
									_Utils_Tuple2(-2.096, 8.8034)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-2.934, 8.3842),
									_Utils_Tuple2(-3.772, 7.9650)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-5.240, 7.9650),
									_Utils_Tuple2(-6.707, 7.9650)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-8.174, 7.9650),
									_Utils_Tuple2(-9.641, 7.9650)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-12.05, 7.4410),
									_Utils_Tuple2(-14.46, 6.9170)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.72, 6.3930),
									_Utils_Tuple2(-16.97, 5.8689)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-18.44, 5.1353),
									_Utils_Tuple2(-19.91, 4.4017)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-20.96, 3.5633),
									_Utils_Tuple2(-22.00, 2.7248)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-23.05, 1.6768),
									_Utils_Tuple2(-24.10, 0.6288)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-22.74, 1.4672),
									_Utils_Tuple2(-21.37, 2.3056)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-19.59, 3.5633),
									_Utils_Tuple2(-17.81, 4.8209)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-16.34, 5.3449),
									_Utils_Tuple2(-14.88, 5.8689)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.41, 6.2882),
									_Utils_Tuple2(-11.94, 6.7074)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-10.48, 6.9170),
									_Utils_Tuple2(-9.013, 7.1266)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-7.336, 7.0218),
									_Utils_Tuple2(-5.659, 6.9170)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-6.917, 6.0786),
									_Utils_Tuple2(-8.174, 5.2401)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-9.327, 4.5065),
									_Utils_Tuple2(-10.48, 3.7729)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-11.42, 2.8296),
									_Utils_Tuple2(-12.36, 1.8864)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.62, 0.7336),
									_Utils_Tuple2(-14.88, -0.419)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.61, -0.943),
									_Utils_Tuple2(-16.34, -1.467)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-17.50, -2.200),
									_Utils_Tuple2(-18.65, -2.934)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-19.70, -3.772),
									_Utils_Tuple2(-20.75, -4.611)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-21.69, -5.659),
									_Utils_Tuple2(-22.63, -6.707)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-23.16, -7.650),
									_Utils_Tuple2(-23.68, -8.593)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-24, -9.327),
									_Utils_Tuple2(-24.31, -10.06)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-23.37, -9.013),
									_Utils_Tuple2(-22.42, -7.965)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-21.69, -6.812),
									_Utils_Tuple2(-20.96, -5.659)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-20.01, -4.716),
									_Utils_Tuple2(-19.07, -3.772)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-18.13, -3.144),
									_Utils_Tuple2(-17.18, -2.515)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.51, -1.467),
									_Utils_Tuple2(-13.83, -0.419)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.30, -1.781),
									_Utils_Tuple2(-16.76, -3.144)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-18.02, -4.506),
									_Utils_Tuple2(-19.28, -5.868)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-20.01, -7.126),
									_Utils_Tuple2(-20.75, -8.384)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-21.17, -9.327),
									_Utils_Tuple2(-21.58, -10.27)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-22.21, -11.73),
									_Utils_Tuple2(-22.84, -13.20)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-21.69, -11.94),
									_Utils_Tuple2(-20.54, -10.68)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-19.28, -9.013),
									_Utils_Tuple2(-18.02, -7.336)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-16.97, -5.868),
									_Utils_Tuple2(-15.93, -4.401)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-14.98, -3.144),
									_Utils_Tuple2(-14.04, -1.886)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.51, -1.467),
									_Utils_Tuple2(-12.99, -1.048)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.72, -2.305),
									_Utils_Tuple2(-14.46, -3.563)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-14.77, -5.030),
									_Utils_Tuple2(-15.09, -6.497)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.19, -7.965),
									_Utils_Tuple2(-15.30, -9.432)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.30, -10.58),
									_Utils_Tuple2(-15.30, -11.73)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-15.09, -10.16),
									_Utils_Tuple2(-14.88, -8.593)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-14.35, -6.812),
									_Utils_Tuple2(-13.83, -5.030)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-13.31, -3.668),
									_Utils_Tuple2(-12.78, -2.305)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-12.15, -1.257),
									_Utils_Tuple2(-11.52, -0.209)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-10.68, 0.8384),
									_Utils_Tuple2(-9.851, 1.8864)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-8.279, 3.1441),
									_Utils_Tuple2(-6.707, 4.4017)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-5.240, 5.1353),
									_Utils_Tuple2(-3.772, 5.8689)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-1.991, 6.8122),
									_Utils_Tuple2(-0.209, 7.7554)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(0.8384, 8.2794),
									_Utils_Tuple2(1.8864, 8.8034)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.6768, 7.8602),
									_Utils_Tuple2(1.4672, 6.9170)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(1.0480, 5.2401),
									_Utils_Tuple2(0.6288, 3.5633)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-0.209, 1.4672),
									_Utils_Tuple2(-1.048, -0.628)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-2.305, -3.039),
									_Utils_Tuple2(-3.563, -5.449)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(-0.628, 0.1048),
									_Utils_Tuple2(2.3056, 5.6593)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.7248, 7.7554),
									_Utils_Tuple2(3.1441, 9.8515)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(4.7161, 10.480),
									_Utils_Tuple2(6.2882, 11.109)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(8.3842, 11.842),
									_Utils_Tuple2(10.480, 12.576)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.689, 11.423),
									_Utils_Tuple2(10.899, 10.270)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.899, 8.9082),
									_Utils_Tuple2(10.899, 7.5458)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.585, 5.2401),
									_Utils_Tuple2(10.270, 2.9344)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(9.5371, 0.7336),
									_Utils_Tuple2(8.8034, -1.467)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(8.0698, -3.248),
									_Utils_Tuple2(7.3362, -5.030)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(6.6026, -6.183),
									_Utils_Tuple2(5.8689, -7.336)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(4.7161, -9.013),
									_Utils_Tuple2(3.5633, -10.68)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(2.4104, -11.63),
									_Utils_Tuple2(1.2576, -12.57)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(3.6681, -10.58),
									_Utils_Tuple2(6.0786, -8.593)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(7.2314, -6.602),
									_Utils_Tuple2(8.3842, -4.611)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(9.1179, -3.039),
									_Utils_Tuple2(9.8515, -1.467)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.165, -0.314),
									_Utils_Tuple2(10.480, 0.8384)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(10.899, 2.3056),
									_Utils_Tuple2(11.318, 3.7729)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(11.737, 5.7641),
									_Utils_Tuple2(12.157, 7.7554)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(12.366, 9.4323),
									_Utils_Tuple2(12.576, 11.109)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(12.681, 11.947),
									_Utils_Tuple2(12.786, 12.786)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(14.882, 13.414),
									_Utils_Tuple2(16.978, 14.043)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(18.026, 14.358),
									_Utils_Tuple2(19.074, 14.672)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(20.122, 13.938),
									_Utils_Tuple2(21.170, 13.205)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(21.799, 12.262),
									_Utils_Tuple2(22.427, 11.318)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.637, 10.375),
									_Utils_Tuple2(22.847, 9.4323)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.951, 8.3842),
									_Utils_Tuple2(23.056, 7.3362)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.951, 6.0786),
									_Utils_Tuple2(22.847, 4.8209)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.742, 2.9344),
									_Utils_Tuple2(22.637, 1.0480)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.427, -0.104),
									_Utils_Tuple2(22.218, -1.257)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(21.799, -2.620),
									_Utils_Tuple2(21.379, -3.982)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(20.331, -5.973),
									_Utils_Tuple2(19.283, -7.965)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(21.065, -5.135),
									_Utils_Tuple2(22.847, -2.305)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(23.266, -0.419),
									_Utils_Tuple2(23.685, 1.4672)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(23.895, 3.2489),
									_Utils_Tuple2(24.104, 5.0305)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(24.104, 6.8122),
									_Utils_Tuple2(24.104, 8.5938)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(23.475, 10.689),
									_Utils_Tuple2(22.847, 12.786)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(21.589, 14.043),
									_Utils_Tuple2(20.331, 15.301)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(22.951, 16.454),
									_Utils_Tuple2(25.572, 17.606)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.353, 19.074),
									_Utils_Tuple2(29.135, 20.541)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(29.973, 21.694),
									_Utils_Tuple2(30.812, 22.847)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(31.021, 23.895),
									_Utils_Tuple2(31.231, 24.943)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(31.126, 25.572),
									_Utils_Tuple2(31.021, 26.200)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(30.183, 26.724),
									_Utils_Tuple2(29.344, 27.248)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(28.925, 27.248),
									_Utils_Tuple2(28.506, 27.248)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(28.192, 26.934),
									_Utils_Tuple2(27.877, 26.620)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.668, 25.991),
									_Utils_Tuple2(27.458, 25.362)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(27.248, 24.943),
									_Utils_Tuple2(27.039, 24.524)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(26.934, 24.104),
									_Utils_Tuple2(26.829, 23.685)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
									_Utils_Tuple2(26.515, 23.371),
									_Utils_Tuple2(26.200, 23.056))
								])))
					]))));
};
var $author$project$Master$leafMunches = function (t) {
	var munches = ((0 <= t) && (t < 1)) ? $author$project$Master$bites(0) : (((1 <= t) && (t < 2)) ? $author$project$Master$bites(1) : (((2 <= t) && (t < 3)) ? $author$project$Master$bites(2) : (((3 <= t) && (t < 4)) ? $author$project$Master$bites(3) : (((4 <= t) && (t < 5)) ? $author$project$Master$bites(4) : (((5 <= t) && (t < 6)) ? $author$project$Master$bites(5) : (((6 <= t) && (t < 7)) ? $author$project$Master$bites(6) : (((7 <= t) && (t < 8)) ? $author$project$Master$bites(7) : (((8 <= t) && (t < 9)) ? $author$project$Master$bites(8) : (((9 <= t) && (t < 10)) ? $author$project$Master$bites(9) : $author$project$Master$bites(10))))))))));
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
		munches,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					$author$project$Master$leaf(280),
					$author$project$Master$leaf(240),
					$author$project$Master$leaf(200),
					$author$project$Master$leaf(160),
					$author$project$Master$leaf(120),
					$author$project$Master$leaf(80),
					$author$project$Master$leaf(40),
					$author$project$Master$leaf(0)
				])));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$lightBlue = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 114, 159, 207, 1);
var $author$project$Master$myCaterpillarr = F2(
	function (t, score) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$lightBlue,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 128)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(9, -8),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 112))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.3,
					$author$project$Master$leafMunches(
						A4($author$project$Master$repeatDuration, 1, score + 1, 0, t))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(
						0,
						A4($author$project$Master$repeatDuration, 8.3, 1 + score, 0, t)),
					$author$project$Master$caterpillarr(t))
				]));
	});
var $author$project$Master$caterpillar = F2(
	function (maybeTime, myScore) {
		return A2($author$project$Master$myCaterpillarr, maybeTime, myScore);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$darkOrange = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 206, 92, 0, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$yellow = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 237, 212, 0, 1);
var $author$project$Master$body = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 20, 30, 10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(5, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$brown,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 20, 30, 10))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 10))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$darkOrange,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 10))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$grey = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 211, 215, 207, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$Gradient = function (a) {
	return {$: 'Gradient', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$multAlpha = F2(
	function (color, n) {
		var colRec = $avh4$elm_color$Color$toRgba(color);
		return $avh4$elm_color$Color$fromRgba(
			_Utils_update(
				colRec,
				{alpha: colRec.alpha * n}));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent = F2(
	function (alpha, shape) {
		_v0$3:
		while (true) {
			switch (shape.$) {
				case 'Inked':
					if (shape.a.$ === 'Nothing') {
						if ((shape.b.$ === 'Just') && (shape.b.a.b.$ === 'Solid')) {
							var _v1 = shape.a;
							var _v2 = shape.b.a;
							var lineType = _v2.a;
							var colour = _v2.b.a;
							var st = shape.c;
							return A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
								$elm$core$Maybe$Nothing,
								$elm$core$Maybe$Just(
									_Utils_Tuple2(
										lineType,
										$MacCASOutreach$graphicsvg$GraphicSVG$Solid(
											A2($MacCASOutreach$graphicsvg$GraphicSVG$multAlpha, colour, alpha)))),
								st);
						} else {
							break _v0$3;
						}
					} else {
						if (shape.a.a.$ === 'Solid') {
							if (shape.b.$ === 'Just') {
								if (shape.b.a.b.$ === 'Solid') {
									var colour = shape.a.a.a;
									var _v3 = shape.b.a;
									var lineType = _v3.a;
									var sColour = _v3.b.a;
									var st = shape.c;
									return A3(
										$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
										$elm$core$Maybe$Just(
											$MacCASOutreach$graphicsvg$GraphicSVG$Solid(
												A2($MacCASOutreach$graphicsvg$GraphicSVG$multAlpha, colour, alpha))),
										$elm$core$Maybe$Just(
											_Utils_Tuple2(
												lineType,
												$MacCASOutreach$graphicsvg$GraphicSVG$Solid(
													A2($MacCASOutreach$graphicsvg$GraphicSVG$multAlpha, sColour, alpha)))),
										st);
								} else {
									break _v0$3;
								}
							} else {
								var colour = shape.a.a.a;
								var _v4 = shape.b;
								var st = shape.c;
								return A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
									$elm$core$Maybe$Just(
										$MacCASOutreach$graphicsvg$GraphicSVG$Solid(
											A2($MacCASOutreach$graphicsvg$GraphicSVG$multAlpha, colour, alpha))),
									$elm$core$Maybe$Nothing,
									st);
							}
						} else {
							break _v0$3;
						}
					}
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
				default:
					if (shape.c.$ === 'Solid') {
						var s = shape.a;
						var th = shape.b;
						var colour = shape.c.a;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper,
							s,
							th,
							$MacCASOutreach$graphicsvg$GraphicSVG$Solid(
								A2($MacCASOutreach$graphicsvg$GraphicSVG$multAlpha, colour, alpha)));
					} else {
						var s = shape.a;
						var th = shape.b;
						var gr = shape.c.a;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper,
							s,
							th,
							$MacCASOutreach$graphicsvg$GraphicSVG$Gradient(gr));
					}
			}
		}
		var a = shape.a;
		var b = shape.b;
		var c = shape.c;
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Inked, a, b, c);
	});
var $author$project$Master$fireflyy = F2(
	function (t, g) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.09,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
				$elm$core$Basics$sin(t + g),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(6, 15),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
								$elm$core$Basics$degrees(-25),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 10, 4)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-6, 15),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
								$elm$core$Basics$degrees(25),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 10, 4)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$clip,
							$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
								A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 17, 30, 10)),
							$author$project$Master$body),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(
								10 * $elm$core$Basics$sin(7 * t)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(20, -15),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(40),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$scale,
										0.8,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
											0.7,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$grey,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$curve,
													_Utils_Tuple2(0, 34),
													_List_fromArray(
														[
															A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
															_Utils_Tuple2(-18, 3),
															_Utils_Tuple2(0, 0)),
															A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
															_Utils_Tuple2(18, 3),
															_Utils_Tuple2(0, 34))
														])))))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(
								(-10) * $elm$core$Basics$sin(7 * t)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(-20, -15),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(-40),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$scale,
										0.8,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
											0.7,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$grey,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$curve,
													_Utils_Tuple2(0, 34),
													_List_fromArray(
														[
															A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
															_Utils_Tuple2(-18, 3),
															_Utils_Tuple2(0, 0)),
															A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
															_Utils_Tuple2(18, 3),
															_Utils_Tuple2(0, 34))
														])))))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -10),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
								0.4,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(25)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -10),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
								0.1,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(50))))
						]))));
	});
var $author$project$Master$fireflies = F3(
	function (point, t, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return (!point) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					((point === 1) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						$elm$core$Basics$sin(2 * t),
						-57)) : ((point === 2) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						3 * $elm$core$Basics$cos(t),
						-51)) : ((point === 3) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						4 * $elm$core$Basics$sin(2 * t),
						-45)) : ((point === 4) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						(-5) * $elm$core$Basics$cos(t),
						-39)) : ((point === 5) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						2 * $elm$core$Basics$sin(2 * t),
						-33)) : ((point === 6) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						(-1) * $elm$core$Basics$cos(t),
						-27)) : ((point === 7) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						3 * $elm$core$Basics$sin(2 * t),
						-21)) : ((point === 8) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						4 * $elm$core$Basics$cos(t),
						-15)) : ((point === 9) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						(-5) * $elm$core$Basics$sin(2 * t),
						-9)) : ((point === 10) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						2 * $elm$core$Basics$cos(t),
						-3)) : ((point === 11) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						(-1) * $elm$core$Basics$sin(2 * t),
						3)) : ((point === 12) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						3 * $elm$core$Basics$cos(t),
						9)) : ((point === 13) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						4 * $elm$core$Basics$sin(2 * t),
						15)) : ((point === 14) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						(-5) * $elm$core$Basics$cos(t),
						21)) : ((point === 15) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						2 * $elm$core$Basics$sin(2 * t),
						27)) : ((point === 16) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						(-1) * $elm$core$Basics$cos(t),
						33)) : ((point === 17) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						3 * $elm$core$Basics$sin(2 * t),
						39)) : ((point === 18) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						4 * $elm$core$Basics$cos(t),
						45)) : ((point === 19) ? $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						5 * $elm$core$Basics$sin(2 * t),
						51)) : $MacCASOutreach$graphicsvg$GraphicSVG$move(
					_Utils_Tuple2(
						2 * $elm$core$Basics$cos(t),
						57)))))))))))))))))))))(
					A2($author$project$Master$fireflyy, t, t + point)),
					A3(
					$author$project$Master$fireflies,
					point - 1,
					t,
					_Utils_Tuple2(x + 1, y + 1))
				]));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$rgb = F3(
	function (r, g, b) {
		return A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, r, g, b, 1);
	});
var $author$project$Master$fireFlies = F2(
	function (t, point) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 0, 70),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 128)),
					A3(
					$author$project$Master$fireflies,
					point,
					t,
					_Utils_Tuple2(0, 0))
				]));
	});
var $author$project$Master$firefly = F2(
	function (maybeTime, myScore) {
		return A2($author$project$Master$fireFlies, maybeTime, 2 * myScore);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$polygon = function (ptList) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Polygon(ptList);
};
var $author$project$Master$icicleShape = F2(
	function (time, score) {
		var scaleFactor = 0.1 * score;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(5, 0),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 170, 230, 255),
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(-9.314, 61.694),
									_Utils_Tuple2(-3.412, 61.510),
									_Utils_Tuple2(-7.838, 64 + (((-60) + 5.6253) * scaleFactor)),
									_Utils_Tuple2(-9.314, 61.694)
								]))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 184, 255, 255),
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(-14.10, 60.403),
									_Utils_Tuple2(-7.838, 64 + (((-60) - 62.80) * scaleFactor)),
									_Utils_Tuple2(-6.916, 61.510),
									_Utils_Tuple2(-14.10, 60.403)
								]))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 220, 255, 255),
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(-11.71, 60.587),
									_Utils_Tuple2(-8.207, 61.141),
									_Utils_Tuple2(-8.760, 64 + (((-60) - 19.27) * scaleFactor)),
									_Utils_Tuple2(-11.71, 60.587)
								]))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 153, 210, 255),
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(-10.60, 60.587),
									_Utils_Tuple2(-8.760, 64 + (((-60) + 20.195) * scaleFactor)),
									_Utils_Tuple2(-4.703, 60.956),
									_Utils_Tuple2(-10.60, 60.587)
								])))
					])));
	});
var $author$project$Master$cloudAndThunder = F2(
	function (time, score) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, (score * 10) - 50),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				function () {
					var lightningClr = (($elm$core$Basics$abs(
						$elm$core$Basics$sin(2 * time)) > 0.9) && ($elm$core$Basics$abs(
						$elm$core$Basics$sin(2 * time)) < 0.95)) ? $MacCASOutreach$graphicsvg$GraphicSVG$yellow : $MacCASOutreach$graphicsvg$GraphicSVG$white;
					return _Utils_ap(
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.3 + (0.2 * score),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(10),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(0, -15),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
											$elm$core$Basics$degrees(5),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
												-4,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
													$elm$core$Basics$degrees(30),
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$filled,
														lightningClr,
														$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5)))))))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.3 + (0.2 * score),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(10),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(0, -15),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
											$elm$core$Basics$degrees(-5),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$move,
												_Utils_Tuple2(-5, -15),
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
													4,
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
														$elm$core$Basics$degrees(30),
														A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$filled,
															lightningClr,
															$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5)))))))))
							]),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.5,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 125, 160, 168),
									A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 65, 15))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.5,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(0, 10),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 125, 160, 168),
										A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 25, 20)))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.5,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(13, 5),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 125, 160, 168),
										A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 20, 15)))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.5,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(-13, 5),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 125, 160, 168),
										A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 20, 15))))
							]));
				}()));
	});
var $author$project$Master$lightning = F2(
	function (maybeTime, myScore) {
		return A2($author$project$Master$cloudAndThunder, maybeTime, myScore);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$darkGray = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 186, 189, 182, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$gray = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 211, 215, 207, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$orange = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 245, 121, 0, 1);
var $author$project$Master$rocketShip = F2(
	function (time, score) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, (-50) + (10 * score)),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.5,
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -35),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
								2,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(30),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$darkOrange,
										$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -35),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
								$elm$core$Basics$degrees(90),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$orange,
									A2($MacCASOutreach$graphicsvg$GraphicSVG$wedge, 7, 0.65)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-8, -20),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
								2,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(210),
									A3(
										$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
										$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
										$MacCASOutreach$graphicsvg$GraphicSVG$black,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
											$MacCASOutreach$graphicsvg$GraphicSVG$triangle(7)))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(8, -20),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
								2,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(210),
									A3(
										$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
										$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
										$MacCASOutreach$graphicsvg$GraphicSVG$black,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
											$MacCASOutreach$graphicsvg$GraphicSVG$triangle(7)))))),
							A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$gray,
								A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 20, 60))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -20),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
								2,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
									0.3,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
										$elm$core$Basics$degrees(210),
										A3(
											$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
											$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
											$MacCASOutreach$graphicsvg$GraphicSVG$black,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$darkGray,
												$MacCASOutreach$graphicsvg$GraphicSVG$triangle(7))))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, 6),
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 113, 124, 128),
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(6.5)))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, 6),
							A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
								$MacCASOutreach$graphicsvg$GraphicSVG$black,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 181, 219, 232),
									$MacCASOutreach$graphicsvg$GraphicSVG$circle(5))))
						]))));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$darkGrey = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 186, 189, 182, 1);
var $author$project$Master$myTornado = function (time) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 2),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 50, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 1),
					0),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 40, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 2),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -2),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.95),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 36, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 3),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -4),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.9),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 30, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 4),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -6),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.9),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 26, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 5),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -8),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.9),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 24, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 6),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -10),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.9),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 20, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 7),
					0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -12),
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.9),
						$MacCASOutreach$graphicsvg$GraphicSVG$grey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 18, 3)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 8),
					-14),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.85),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 16, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 9),
					-16),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.85),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 14, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 9),
					-18),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.65),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 12, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 10),
					-20),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.85),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 10, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 11),
					-22),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.7),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 8, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 12),
					-24),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.7),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 6, 3))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 13),
					-24.5),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 5, 2))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 13.5),
					-25),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.4),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 4, 2))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 13.5),
					-25.5),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 3, 2))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					4 * $elm$core$Basics$sin(time - 13.5),
					-26),
				A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.3),
					$MacCASOutreach$graphicsvg$GraphicSVG$grey,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 2, 2)))
			]));
};
var $author$project$Master$scoredTornado = F2(
	function (time, score) {
		return (score < 10) ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, (-50) + (9 * score)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
						0.5 + (0.1 * score),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
							1 + (1.5 * score),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.25,
								$author$project$Master$myTornado(time)))))
				])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(
						0,
						A4($author$project$Master$repeatDuration, 9, 10, -45, time)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scaleX,
						A4($author$project$Master$repeatDuration, 0.1, 10, 0.5, time),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
							A4($author$project$Master$repeatDuration, 1.5, 10, 1, time),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.25,
								$author$project$Master$myTornado(time)))))
				]));
	});
var $author$project$Master$tornadoScene = F2(
	function (time, score) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -100),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGreen,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 100))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 20),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$darkGrey,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 150))),
					A2($author$project$Master$scoredTornado, time, score)
				]));
	});
var $author$project$Master$tornado = F2(
	function (maybeTime, myScore) {
		return A2($author$project$Master$tornadoScene, maybeTime, myScore);
	});
var $author$project$Master$whaleChar = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 100, 150),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-3.857, -61.27),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-0.717, -62.81),
						_Utils_Tuple2(2.4224, -62.35)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.0383, -62.03),
						_Utils_Tuple2(8.2542, -59.03))
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 100, 150),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-5.472, -61.54),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-3.585, -62.68),
						_Utils_Tuple2(-0.897, -62.89)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.0186, -63.33),
						_Utils_Tuple2(4.9345, -62.17))
					]))),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 100, 150),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-6.639, -61.54),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-6.018, -62.65),
						_Utils_Tuple2(-3.678, -63.16)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.614, -63.58),
						_Utils_Tuple2(0.4485, -63.61)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.6598, -63.52),
						_Utils_Tuple2(2.8710, -63.16))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 100, 200, 250),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$curve,
				_Utils_Tuple2(-2.601, -61.00),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-5.148, -61.81),
						_Utils_Tuple2(-8.254, -61.90)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-8.757, -61.80),
						_Utils_Tuple2(-9.061, -61.18)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-8.991, -59.70),
						_Utils_Tuple2(-9.241, -58.22)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-9.103, -56.22),
						_Utils_Tuple2(-7.446, -54.81)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-5.879, -53.95),
						_Utils_Tuple2(-2.512, -53.65)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.057, -53.62),
						_Utils_Tuple2(0.7177, -54.54)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.4061, -55.45),
						_Utils_Tuple2(4.9345, -55.71)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.7403, -55.78),
						_Utils_Tuple2(7.6261, -55.44)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.4001, -54.77),
						_Utils_Tuple2(8.2542, -53.47)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.4196, -52.86),
						_Utils_Tuple2(7.9850, -52.57)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(7.4456, -51.67),
						_Utils_Tuple2(7.6261, -50.78)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(7.9401, -50.51),
						_Utils_Tuple2(8.2542, -50.96)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.5428, -51.57),
						_Utils_Tuple2(9.1514, -51.67)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(9.6502, -51.92),
						_Utils_Tuple2(9.8691, -52.57)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.881, -52.33),
						_Utils_Tuple2(11.573, -53.29)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(11.856, -53.98),
						_Utils_Tuple2(13.099, -54.28)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(12.691, -54.87),
						_Utils_Tuple2(11.484, -54.99)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(10.631, -55.08),
						_Utils_Tuple2(9.7794, -54.81)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(9.4848, -55.05),
						_Utils_Tuple2(9.5102, -55.44)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(9.4908, -56.19),
						_Utils_Tuple2(9.1514, -57.15)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(8.7785, -58.33),
						_Utils_Tuple2(7.8056, -59.12)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(6.6285, -60.82),
						_Utils_Tuple2(2.6915, -61.36)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(2.6353, -61.97),
						_Utils_Tuple2(3.4990, -62.98)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(1.4749, -63.40),
						_Utils_Tuple2(-0.269, -61.54)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(-1.345, -61.05),
						_Utils_Tuple2(-2.601, -61.00))
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-3, -60),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 50, 25),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(0.5)))
		]));
var $author$project$Master$whale = F2(
	function (time, score) {
		var growTo = function (top) {
			return A2($elm$core$Basics$max, top - (120 * (1 - (0.1 * score))), -55);
		};
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 100, 150),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-4.306, -54.45),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-4.958,
									growTo(0.4485)),
								_Utils_Tuple2(
									-6.370,
									growTo(55.357))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-6.633,
									growTo(56.011)),
								_Utils_Tuple2(
									-7.536,
									growTo(55.985))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-8.034,
									growTo(56.051)),
								_Utils_Tuple2(
									-8.613,
									growTo(55.357)))
							]))),
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 100, 150),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-4.037, -54.28),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-4.934,
									growTo(0.8971)),
								_Utils_Tuple2(
									-5.831,
									growTo(56.074))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-5.937,
									growTo(57.017)),
								_Utils_Tuple2(
									-5.203,
									growTo(57.241)))
							]))),
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.2),
					A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 100, 150),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(-3.947, -54.10),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-4.755,
									growTo(0.6728)),
								_Utils_Tuple2(
									-5.562,
									growTo(55.446))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-5.399,
									growTo(55.865)),
								_Utils_Tuple2(
									-4.396,
									growTo(56.164))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(
									-3.787,
									growTo(56.145)),
								_Utils_Tuple2(
									-3.499,
									growTo(55.446)))
							]))),
					$author$project$Master$whaleChar
				]));
	});
var $author$project$Master$drawColumn = F3(
	function (bestScore, time, _v0) {
		var idx = _v0.a;
		var myScore = _v0.b;
		var maybeTime = (_Utils_cmp(bestScore, myScore) > 0) ? 0 : time;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2((-80) + (20 * idx), 0),
			A2(
				function () {
					switch (idx) {
						case 0:
							return $author$project$Master$beanstock;
						case 1:
							return $author$project$Master$whale;
						case 2:
							return $author$project$Master$tornado;
						case 3:
							return $author$project$Master$icicleShape;
						case 4:
							return $author$project$Master$balloon;
						case 5:
							return $author$project$Master$caterpillar;
						case 6:
							return $author$project$Master$lightning;
						case 7:
							return $author$project$Master$firefly;
						case 8:
							return $author$project$Master$rocketShip;
						default:
							return F2(
								function (_v2, _v3) {
									return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
								});
					}
				}(),
				maybeTime,
				myScore));
	});
var $author$project$Master$PlaySound = function (a) {
	return {$: 'PlaySound', a: a};
};
var $author$project$ElmMusic$Slur = {$: 'Slur'};
var $author$project$ElmMusic$Tie = {$: 'Tie'};
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
var $author$project$DrawElmMusic$addDot = function (num) {
	if (!num) {
		return _List_Nil;
	} else {
		return A2(
			$elm$core$List$cons,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(3.0 + (2.5 * num), 0),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(1))),
			$author$project$DrawElmMusic$addDot(num - 1));
	}
};
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
var $author$project$DrawElmMusic$drawAccidential = function (accidential) {
	_v0$3:
	while (true) {
		if (accidential.$ === 'Just') {
			switch (accidential.a.$) {
				case 'Sharp':
					return $author$project$DrawMusic$sharp;
				case 'Flat':
					return $author$project$DrawMusic$flat;
				case 'Natural':
					return $author$project$DrawMusic$natural;
				default:
					break _v0$3;
			}
		} else {
			break _v0$3;
		}
	}
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
};
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
var $author$project$DrawMusic$detache = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-10, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
					'Georgia',
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						10,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('detache')))))
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
var $author$project$DrawMusic$legato = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-10, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$customFont,
					'Georgia',
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						10,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('legato')))))
		]));
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
var $author$project$DrawElmMusic$drawArticulation = function (articulation) {
	if (articulation.$ === 'Just') {
		switch (articulation.a.$) {
			case 'Staccato':
				var _v1 = articulation.a;
				return $author$project$DrawMusic$staccato;
			case 'Staccatissimo':
				var _v2 = articulation.a;
				return $author$project$DrawMusic$staccatissimo;
			case 'Fermata':
				return $author$project$DrawMusic$fermata;
			case 'Tenuto':
				var _v3 = articulation.a;
				return $author$project$DrawMusic$tenuto;
			case 'Accent':
				var _v4 = articulation.a;
				return $author$project$DrawMusic$accent;
			case 'Marcato':
				var _v5 = articulation.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
			case 'Tie':
				var _v6 = articulation.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
			case 'Slur':
				var _v7 = articulation.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
			case 'Detache':
				var _v8 = articulation.a;
				return $author$project$DrawMusic$detache;
			case 'Legato':
				var _v9 = articulation.a;
				return $author$project$DrawMusic$legato;
			default:
				var _v10 = articulation.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		}
	} else {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
	}
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
var $author$project$DrawElmMusic$drawDynamic = function (dynamic) {
	var dynamicString = function () {
		if (dynamic.$ === 'Just') {
			switch (dynamic.a.$) {
				case 'DynPianissimo':
					var _v1 = dynamic.a;
					return 'pp';
				case 'DynPiano':
					var _v2 = dynamic.a;
					return 'p';
				case 'DynMezzoPiano':
					var _v3 = dynamic.a;
					return 'mp';
				case 'DynMezzoForte':
					var _v4 = dynamic.a;
					return 'mf';
				case 'DynForte':
					var _v5 = dynamic.a;
					return 'f';
				case 'DynFortissimo':
					var _v6 = dynamic.a;
					return 'ff';
				default:
					var _v7 = dynamic.a;
					return '';
			}
		} else {
			return '';
		}
	}();
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
		$MacCASOutreach$graphicsvg$GraphicSVG$black,
		$MacCASOutreach$graphicsvg$GraphicSVG$serif(
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$size,
				9.5,
				$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
					$MacCASOutreach$graphicsvg$GraphicSVG$centered(
						$MacCASOutreach$graphicsvg$GraphicSVG$italic(
							$MacCASOutreach$graphicsvg$GraphicSVG$bold(
								$MacCASOutreach$graphicsvg$GraphicSVG$text(dynamicString))))))));
};
var $ianmackenzie$elm_units$Angle$cos = function (_v0) {
	var angle = _v0.a;
	return $elm$core$Basics$cos(angle);
};
var $ianmackenzie$elm_geometry$Geometry$Types$Direction2d = function (a) {
	return {$: 'Direction2d', a: a};
};
var $elm$core$Basics$sqrt = _Basics_sqrt;
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
var $author$project$DrawElmMusic$drawEighthNLine = F2(
	function (topBarLine, _v0) {
		var p1 = _v0.a;
		var p2 = _v0.b;
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
								p1.a,
								p1.b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 1.2)),
								_Utils_Tuple2(
								p2.a,
								p2.b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 1.2)),
								_Utils_Tuple2(
								p2.a,
								p2.b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 1.2)),
								_Utils_Tuple2(
								p1.a,
								p1.b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 1.2))
							])))
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
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
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
var $MacCASOutreach$graphicsvg$GraphicSVG$Path = function (a) {
	return {$: 'Path', a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$line = F2(
	function (p1, p2) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$Path(
			_List_fromArray(
				[p1, p2]));
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
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
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
var $author$project$DrawElmMusic$drawGroupNote = F3(
	function (topBarLine, ifPointUp, _v0) {
		var p1 = _v0.a;
		var p2 = _v0.b;
		var note = $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(25),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 23, 15)))
				]));
		var maybeLine = function () {
			var l2 = ifPointUp ? _Utils_Tuple2(p1 + 2.7, p2 + 100) : _Utils_Tuple2(p1 - 2.5, p2 - 100);
			var l1 = ifPointUp ? _Utils_Tuple2(p1 + 2.7, p2) : _Utils_Tuple2(p1 - 2.5, p2);
			return A2(
				$author$project$Line2dAssist$scale,
				A2($author$project$Line2dAssist$line, l1, l2),
				100);
		}();
		var defaultPos = $author$project$Line2dAssist$point(
			_Utils_Tuple2(0, 0));
		var maybepoint = $author$project$Line2dAssist$xy(
			A2(
				$elm$core$Maybe$withDefault,
				defaultPos,
				A2($author$project$Line2dAssist$intersection, topBarLine, maybeLine)));
		var shiftP1 = (_Utils_cmp(maybepoint.b, p2) > 0) ? _Utils_Tuple2(p1 + 2.7, p2) : _Utils_Tuple2(p1 - 2.5, p2);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(p1, p2),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.28, note)),
					A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
					$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.65),
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$line, shiftP1, maybepoint))
				]));
	});
var $author$project$DrawElmMusic$drawLyr = function (lyric) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$centered(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						5.2,
						$MacCASOutreach$graphicsvg$GraphicSVG$text(lyric))))
			]));
};
var $author$project$DrawElmMusic$drawsOtherLines = F4(
	function (secondLine, topBarLine, ifPointUp, _v0) {
		var p1 = _v0.a;
		var p2 = _v0.b;
		var maybeLine = function (p) {
			var l2 = ifPointUp ? _Utils_Tuple2(p.a + 2.1, p.b + 100) : _Utils_Tuple2(p.a - 2.5, p.b - 100);
			var l1 = ifPointUp ? _Utils_Tuple2(p.a + 2.5, p.b) : _Utils_Tuple2(p.a - 2.5, p.b);
			return A2(
				$author$project$Line2dAssist$scale,
				A2($author$project$Line2dAssist$line, l1, l2),
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
								maybepoint(p1).a,
								maybepoint(p1).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 1)),
								_Utils_Tuple2(
								maybepoint(p2).a,
								maybepoint(p2).b + A2($author$project$Line2dAssist$findOppSide, topBarLine, 1)),
								_Utils_Tuple2(
								maybepoint(p2).a,
								maybepoint(p2).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 1)),
								_Utils_Tuple2(
								maybepoint(p1).a,
								maybepoint(p1).b - A2($author$project$Line2dAssist$findOppSide, topBarLine, 1))
							])))
				]));
	});
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
var $author$project$DrawElmMusic$extraLines = function (height) {
	return (height >= 15) ? A2(
		$elm$core$List$cons,
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, 15),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 8, 0.5))),
		A2(
			$elm$core$List$map,
			$MacCASOutreach$graphicsvg$GraphicSVG$move(
				_Utils_Tuple2(0, 5)),
			$author$project$DrawElmMusic$extraLines(height - 5))) : ((_Utils_cmp(height, -15) < 1) ? A2(
		$elm$core$List$cons,
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -15),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 8, 0.5))),
		A2(
			$elm$core$List$map,
			$MacCASOutreach$graphicsvg$GraphicSVG$move(
				_Utils_Tuple2(0, -5)),
			$author$project$DrawElmMusic$extraLines(height + 5))) : _List_Nil);
};
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
				helper:
				while (true) {
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
						var $temp$scattered = remaining,
							$temp$gathered = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(toGather, gathering),
							gathered);
						scattered = $temp$scattered;
						gathered = $temp$gathered;
						continue helper;
					}
				}
			});
		return A2(helper, list, _List_Nil);
	});
var $elm_community$list_extra$List$Extra$gatherEquals = function (list) {
	return A2($elm_community$list_extra$List$Extra$gatherWith, $elm$core$Basics$eq, list);
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
var $author$project$MusicCreatorDef$moveYscore = -28;
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
var $author$project$DrawMusic$groupFindTopLinePos = F2(
	function (ifPointUp, posList) {
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
	});
var $author$project$DrawElmMusic$ifGroupNotePointUp = function (list) {
	var countPitch = A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, def) {
				var x = _v0.a;
				var y = _v0.b;
				return (!y) ? (def + 0) : ((y > 0) ? (def + 1) : (def - 1));
			}),
		0,
		list);
	return countPitch < 0;
};
var $author$project$Line2dAssist$midPoint = F2(
	function (p1, p2) {
		return $author$project$Line2dAssist$xy(
			$ianmackenzie$elm_geometry$LineSegment2d$midpoint(
				A2($author$project$Line2dAssist$line, p1, p2)));
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$ElmMusic$ifBassInstument = function (instrument) {
	switch (instrument.$) {
		case 'Bass':
			return true;
		case 'Cello':
			return true;
		case 'Tuba':
			return true;
		case 'Timpani':
			return true;
		case 'Custom':
			var b = instrument.b;
			return b;
		default:
			return false;
	}
};
var $author$project$ElmMusic$pitchHeight = F2(
	function (pitch, instrument) {
		var pitchH = function (x) {
			pitchH:
			while (true) {
				switch (x.$) {
					case 'Do':
						return -15;
					case 'Re':
						return -12.5;
					case 'Mi':
						return -10;
					case 'Fa':
						return -7.5;
					case 'Sol':
						return -5;
					case 'La':
						return -2.5;
					case 'Ti':
						return 0;
					case 'OctaveUp':
						var p = x.a;
						return (7 * 2.5) + pitchH(p);
					case 'OctaveDown':
						var p = x.a;
						return ((-7) * 2.5) + pitchH(p);
					case 'Sharp':
						var p = x.a;
						var $temp$x = p;
						x = $temp$x;
						continue pitchH;
					case 'Flat':
						var p = x.a;
						var $temp$x = p;
						x = $temp$x;
						continue pitchH;
					case 'Natural':
						var p = x.a;
						var $temp$x = p;
						x = $temp$x;
						continue pitchH;
					default:
						return 0;
				}
			}
		};
		return _Utils_eq(pitch, $author$project$ElmMusic$Rest) ? pitchH(pitch) : ($author$project$ElmMusic$ifBassInstument(instrument) ? (pitchH(pitch) + 30) : pitchH(pitch));
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
var $author$project$DrawElmMusic$drawGroup = function (measure) {
	var pitchH = function (note) {
		return A2($author$project$ElmMusic$pitchHeight, note.note.pitch, note.instrument);
	};
	var posList = A2(
		$elm$core$List$map,
		function (m) {
			return _Utils_Tuple2(
				m.xPos,
				pitchH(m));
		},
		measure);
	var markNforLine = F2(
		function (markDuration, list) {
			markNforLine:
			while (true) {
				var secondListP = function () {
					var _v2 = A2(
						$elm$core$List$drop,
						$elm$core$List$length(measure) - 2,
						measure);
					if (!_v2.b) {
						return _Utils_Tuple2(0, 0);
					} else {
						var x = _v2.a;
						var xs = _v2.b;
						return _Utils_Tuple2(
							x.xPos,
							pitchH(x));
					}
				}();
				var endPoint = F3(
					function (prePoint, ifdrawHalf, list2) {
						endPoint:
						while (true) {
							if (!list2.b) {
								return {point: prePoint, restList: _List_Nil};
							} else {
								var x = list2.a;
								var xs = list2.b;
								var p = _Utils_Tuple2(
									x.xPos,
									pitchH(x));
								if (_Utils_cmp(
									$author$project$ElmMusic$durationToFloat(x.note.duration),
									markDuration) < 0) {
									var $temp$prePoint = p,
										$temp$ifdrawHalf = false,
										$temp$list2 = xs;
									prePoint = $temp$prePoint;
									ifdrawHalf = $temp$ifdrawHalf;
									list2 = $temp$list2;
									continue endPoint;
								} else {
									if (ifdrawHalf) {
										return {
											point: A2($author$project$Line2dAssist$midPoint, prePoint, p),
											restList: A2($elm$core$List$cons, x, xs)
										};
									} else {
										return {
											point: prePoint,
											restList: A2($elm$core$List$cons, x, xs)
										};
									}
								}
							}
						}
					});
				if (!list.b) {
					return _List_Nil;
				} else {
					if (!list.b.b) {
						var x = list.a;
						var p = _Utils_Tuple2(
							x.xPos,
							pitchH(x));
						return (_Utils_cmp(
							$author$project$ElmMusic$durationToFloat(x.note.duration),
							markDuration) < 0) ? _List_fromArray(
							[
								_Utils_Tuple2(
								A2($author$project$Line2dAssist$midPoint, secondListP, p),
								p)
							]) : _List_Nil;
					} else {
						var x = list.a;
						var xs = list.b;
						var p = _Utils_Tuple2(
							x.xPos,
							pitchH(x));
						if (_Utils_cmp(
							$author$project$ElmMusic$durationToFloat(x.note.duration),
							markDuration) < 0) {
							return A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									p,
									A3(endPoint, p, true, xs).point),
								A2(
									markNforLine,
									markDuration,
									A3(endPoint, p, true, xs).restList));
						} else {
							var $temp$markDuration = markDuration,
								$temp$list = xs;
							markDuration = $temp$markDuration;
							list = $temp$list;
							continue markNforLine;
						}
					}
				}
			}
		});
	var ifPointUp = $author$project$DrawElmMusic$ifGroupNotePointUp(posList);
	var pos1 = A2($author$project$DrawMusic$groupFindTopLinePos, ifPointUp, posList).a;
	var pos1WH = F2(
		function (p, hight) {
			return ifPointUp ? _Utils_Tuple2(p.a + 2.4, p.b + hight) : _Utils_Tuple2(p.a - 2.5, p.b - hight);
		});
	var pos2 = A2($author$project$DrawMusic$groupFindTopLinePos, ifPointUp, posList).b;
	var minPos = function () {
		var p = A2($elm$core$Basics$min, pos1.b, pos2.b);
		return ifPointUp ? (p + 20) : (p - 20);
	}();
	var moveArt = function (n) {
		var _v3 = n.note.articulation;
		if (_v3.$ === 'Fermata') {
			return 5;
		} else {
			return (_Utils_eq(
				n._function.articulation,
				$elm$core$Maybe$Just($author$project$ElmMusic$Legato)) || _Utils_eq(
				n._function.articulation,
				$elm$core$Maybe$Just($author$project$ElmMusic$Detache))) ? (ifPointUp ? ((-1) * $elm$core$Basics$abs(
				(-19) - pitchH(n))) : (minPos - 2)) : (ifPointUp ? (-5) : 5);
		}
	};
	var moveDyn = function (note) {
		var adjArt = (!_Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) ? ((moveArt(note) < 0) ? moveArt(note) : 0) : 0;
		return ifPointUp ? ((_Utils_cmp(
			adjArt + pitchH(note),
			-10) < 0) ? (((-8) + adjArt) + pitchH(note)) : ((-1) * $elm$core$Basics$abs(
			(-25) - pitchH(note)))) : ((_Utils_eq(
			note._function.articulation,
			$elm$core$Maybe$Just($author$project$ElmMusic$Legato)) || _Utils_eq(
			note._function.articulation,
			$elm$core$Maybe$Just($author$project$ElmMusic$Detache))) ? ((minPos - 2) - 9) : (minPos - 3));
	};
	var moveLyric = function (note) {
		var adjArt = (!_Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) ? ((moveArt(note) < 0) ? ((_Utils_cmp(
			pitchH(note),
			-10) < 0) ? (moveArt(note) - 8) : ((-1) * $elm$core$Basics$abs(
			(-25) - pitchH(note)))) : ((-1) * $elm$core$Basics$abs(
			(-25) - pitchH(note)))) : 0;
		return (_Utils_eq(note._function.dynamic, $elm$core$Maybe$Nothing) && _Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) ? ((_Utils_cmp(minPos, -25) < 0) ? (minPos - 4) : ((_Utils_cmp(
			pitchH(note),
			-20) < 0) ? ((-8) + pitchH(note)) : (((-1) * $elm$core$Basics$abs(
			(-25) - pitchH(note))) + pitchH(note)))) : (((!_Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) && _Utils_eq(note._function.dynamic, $elm$core$Maybe$Nothing)) ? (adjArt + pitchH(note)) : (moveDyn(note) - 8));
	};
	var pos2WH = F2(
		function (p, hight) {
			return ifPointUp ? _Utils_Tuple2(p.a + 2.5, p.b + hight) : _Utils_Tuple2(p.a - 2.5, p.b - hight);
		});
	var topBarLine = A2(
		$author$project$Line2dAssist$scale,
		A2(
			$author$project$Line2dAssist$line,
			A2(pos1WH, pos1, 17),
			A2(pos2WH, pos2, 17)),
		20);
	var secondLine = ifPointUp ? A2($author$project$Line2dAssist$translateInNy, topBarLine, 4.5) : A2($author$project$Line2dAssist$translateInPy, topBarLine, 4.5);
	var thirdLine = ifPointUp ? A2($author$project$Line2dAssist$translateInNy, topBarLine, 7.5) : A2($author$project$Line2dAssist$translateInPy, topBarLine, 7.5);
	var drawLyric = function (note) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(note.xPos, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(
					0,
					moveLyric(note)),
				$author$project$DrawElmMusic$drawLyr(note.note.lyric)));
	};
	var drawExtraLine = function (n) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(n.xPos, 0),
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				$author$project$DrawElmMusic$extraLines(
					pitchH(n))));
	};
	var drawDyn = function (note) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(note.xPos, 0),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(
							0,
							moveDyn(note)),
						$author$project$DrawElmMusic$drawDynamic(note._function.dynamic)))
				]));
	};
	var drawArt = function (n) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(
						n.xPos,
						pitchH(n)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(
							0,
							moveArt(n)),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							0.5,
							$author$project$DrawElmMusic$drawArticulation(n._function.articulation))))
				]));
	};
	var drawAcc = function (note) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(
						note.xPos - 6,
						pitchH(note)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.5,
						$author$project$DrawElmMusic$drawAccidential(note._function.accidential)))
				]));
	};
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2(
					$elm$core$List$map,
					A2($author$project$DrawElmMusic$drawGroupNote, topBarLine, ifPointUp),
					posList)),
				A2(
				$author$project$DrawElmMusic$drawEighthNLine,
				topBarLine,
				_Utils_Tuple2(
					A2(pos1WH, pos1, 16),
					A2(pos2WH, pos2, 16))),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2(
					$elm$core$List$map,
					A3($author$project$DrawElmMusic$drawsOtherLines, secondLine, topBarLine, ifPointUp),
					A2(markNforLine, 0.125, measure))),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2(
					$elm$core$List$map,
					A3($author$project$DrawElmMusic$drawsOtherLines, thirdLine, topBarLine, ifPointUp),
					A2(markNforLine, 0.0625, measure))),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2($elm$core$List$map, drawExtraLine, measure)),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2(
					$elm$core$List$map,
					function (n) {
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(
								n.xPos,
								pitchH(n)),
							$MacCASOutreach$graphicsvg$GraphicSVG$group(
								$author$project$DrawElmMusic$addDot(n.dot)));
					},
					measure)),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2($elm$core$List$map, drawArt, measure)),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2($elm$core$List$map, drawDyn, measure)),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2($elm$core$List$map, drawLyric, measure)),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2($elm$core$List$map, drawAcc, measure))
			]));
};
var $author$project$DrawElmMusic$bass = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$move,
	_Utils_Tuple2(0, -1),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.18,
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
								_Utils_Tuple2(-57.6, -65.4),
								_Utils_Tuple2(-48.05, -57.55)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-39.34, -50.77),
								_Utils_Tuple2(-30.64, -43.98)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(-17.2, -33.34),
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
								_Utils_Tuple2(-32.9, 38.332)),
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
								_Utils_Tuple2(-31.2, 25.87),
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
								_Utils_Tuple2(20.466, 9.159)),
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
var $author$project$DrawElmMusic$drawMeasurescore = function (measureScorewidth) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 10),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, measureScorewidth, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, measureScorewidth, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, measureScorewidth, 0.5)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, measureScorewidth, 0.5))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, -10),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, measureScorewidth, 0.5)))
			]));
};
var $author$project$DrawElmMusic$ts22 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('2')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('2')))))
		]));
var $author$project$DrawElmMusic$ts24 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('2')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('4')))))
		]));
var $author$project$DrawElmMusic$ts34 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('3')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('4')))))
		]));
var $author$project$DrawElmMusic$ts38 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('3')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('8')))))
		]));
var $author$project$DrawElmMusic$ts44 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('4')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('4')))))
		]));
var $author$project$DrawElmMusic$ts58 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('5')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('8')))))
		]));
var $author$project$DrawElmMusic$ts68 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$bold(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$size,
					14.5,
					$MacCASOutreach$graphicsvg$GraphicSVG$text('6')))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, -10),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				$MacCASOutreach$graphicsvg$GraphicSVG$bold(
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$size,
						14.5,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('8')))))
		]));
var $author$project$DrawElmMusic$drawTs = function (ts) {
	switch (ts.$) {
		case 'FourFour':
			return $author$project$DrawElmMusic$ts44;
		case 'ThreeFour':
			return $author$project$DrawElmMusic$ts34;
		case 'ThreeEighths':
			return $author$project$DrawElmMusic$ts38;
		case 'TwoFour':
			return $author$project$DrawElmMusic$ts24;
		case 'SixEight':
			return $author$project$DrawElmMusic$ts68;
		case 'TwoTwo':
			return $author$project$DrawElmMusic$ts22;
		case 'FiveEight':
			return $author$project$DrawElmMusic$ts58;
		default:
			return A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$red,
				$MacCASOutreach$graphicsvg$GraphicSVG$centered(
					$MacCASOutreach$graphicsvg$GraphicSVG$text('TODO: implement time signatures')));
	}
};
var $author$project$DrawElmMusic$treble = A2(
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
					_Utils_Tuple2(-0.728, 3.7325),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-3.144, 9.1121),
							_Utils_Tuple2(-3.641, 15.931)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-4.56, 26.939),
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
							_Utils_Tuple2(-16.4, -22.52),
							_Utils_Tuple2(-11.1, -29.58)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-4.969, -39.51),
							_Utils_Tuple2(7.6472, -36.32)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(16.67, -31.04),
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
							_Utils_Tuple2(4.4608, -7.69),
							_Utils_Tuple2(11.288, -11.74)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(20.221, -19.21),
							_Utils_Tuple2(17.115, -29.4)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(13.768, -36.71),
							_Utils_Tuple2(5.4623, -38.5)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-4.83, -40.63),
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
							_Utils_Tuple2(6.1906, 16.66)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(10.506, 28.81),
							_Utils_Tuple2(5.4623, 29.041)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(1.5869, 29.399),
							_Utils_Tuple2(-0.728, 21.758)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-2.98, 13.581),
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
							_Utils_Tuple2(7.8293, -40.6),
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
							_Utils_Tuple2(-11.19, -51.7),
							_Utils_Tuple2(-8.739, -55.98)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-6.887, -59.99),
							_Utils_Tuple2(-1.274, -61.45)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(6.4788, -62.42),
							_Utils_Tuple2(9.8321, -55.8)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(11.436, -51.24),
							_Utils_Tuple2(10.56, -45.61)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(9.65, -41.42),
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
			])));
var $author$project$DrawElmMusic$drawScoreAndTsWhilePlayMusic = F3(
	function (ts, instrument, ifTs) {
		var clef = $author$project$ElmMusic$ifBassInstument(instrument) ? $author$project$DrawElmMusic$bass : $author$project$DrawElmMusic$treble;
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(10, 0),
					$author$project$DrawElmMusic$drawMeasurescore(9999)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-130, 4),
					A2($MacCASOutreach$graphicsvg$GraphicSVG$scaleY, 0.9, clef)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-120, 0),
					$author$project$DrawElmMusic$drawTs(ts))
				]));
	});
var $author$project$DrawElmMusic$bar = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 0.5, 20.5))
		]));
var $author$project$DrawElmMusic$flag = $MacCASOutreach$graphicsvg$GraphicSVG$group(
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
						_Utils_Tuple2(33.89, 32)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(39.335, 26.123),
						_Utils_Tuple2(39.021, 18.767)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(38.575, 12.972),
						_Utils_Tuple2(36.05, 8.7763)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(35.24, 8.5063),
						_Utils_Tuple2(34.43, 8.2362)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(34.565, 8.9113),
						_Utils_Tuple2(34.7, 9.5864)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(36.77, 15.057),
						_Utils_Tuple2(36.32, 22.008)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(34.534, 31.649),
						_Utils_Tuple2(24.708, 32.81)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(23.898, 32.945),
						_Utils_Tuple2(23.088, 33.08)),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
						_Utils_Tuple2(23.223, 40.236),
						_Utils_Tuple2(23.088, 48.202))
					])))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$mirrorX = function (shape) {
	return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, -1, 1, shape);
};
var $author$project$DrawElmMusic$eighthN = function (ifFlip) {
	var rotateD = ifFlip ? 180 : 0;
	var flipFlag = ifFlip ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-33, 14.8),
					$author$project$DrawElmMusic$flag))
			])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-12.3, 14.8),
				$author$project$DrawElmMusic$flag)
			]));
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
		$elm$core$Basics$degrees(rotateD),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.28,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 60))),
						flipFlag
					]))));
};
var $author$project$DrawElmMusic$eighthR = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.13,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$curve,
					_Utils_Tuple2(7.6962, 33.35),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(9.4514, 34.745),
							_Utils_Tuple2(11.206, 32.54)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(1.4852, -0.675),
							_Utils_Tuple2(-8.236, -33.89)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-14.57, -37.5),
							_Utils_Tuple2(-17.14, -34.16)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-7.966, -8.371),
							_Utils_Tuple2(1.2151, 17.417)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-19.61, 9.0579),
							_Utils_Tuple2(-27.4, 20.658)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-33.47, 31.949),
							_Utils_Tuple2(-20.65, 37.4)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-14.68, 39.81),
							_Utils_Tuple2(-9.586, 33.62)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-6.726, 28.894),
							_Utils_Tuple2(-6.345, 24.168)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(-3.745, 20.268),
							_Utils_Tuple2(0.135, 24.168)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
							_Utils_Tuple2(3.6455, 28.354),
							_Utils_Tuple2(7.6962, 33.35))
						])))
			])));
var $author$project$DrawElmMusic$halfN = function (ifFlip) {
	var rotateD = ifFlip ? 180 : 0;
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
		$elm$core$Basics$degrees(rotateD),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.28,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
						_Utils_Tuple2(9.9, 33),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$black,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 60)))
					]))));
};
var $author$project$DrawElmMusic$halfR = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.58,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 2.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 14, 5)))
			])));
var $author$project$DrawElmMusic$quarterN = function (ifFlip) {
	var rotateD = ifFlip ? 180 : 0;
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
		$elm$core$Basics$degrees(rotateD),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.28,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
					]))));
};
var $author$project$DrawElmMusic$quarterR = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.48,
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(-35, -17),
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$curve,
						_Utils_Tuple2(34.16, 30.919),
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(32.895, 32.009),
								_Utils_Tuple2(33.35, 30.379)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(35.49, 26.919),
								_Utils_Tuple2(35.51, 24.978)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(33.62, 22.388),
								_Utils_Tuple2(31.729, 20.118)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(34.16, 16.877),
								_Utils_Tuple2(36.59, 13.637)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(26.455, 13.091),
								_Utils_Tuple2(36.32, 4.1856)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(30.821, 12.051),
								_Utils_Tuple2(40.641, 10.396)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(38.751, 12.962),
								_Utils_Tuple2(36.86, 15.527)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(35.465, 20.288),
								_Utils_Tuple2(39.831, 23.088)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
								_Utils_Tuple2(37.4, 26.599),
								_Utils_Tuple2(34.16, 30.919))
							])))
				]))));
var $author$project$DrawElmMusic$flag2 = $MacCASOutreach$graphicsvg$GraphicSVG$group(
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
var $author$project$DrawElmMusic$sixteenthN = function (ifFlip) {
	var rotateD = ifFlip ? 180 : 0;
	var flipFlag = ifFlip ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-10, 32),
					$author$project$DrawElmMusic$flag2))
			])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(9.2, 32),
				$author$project$DrawElmMusic$flag2)
			]));
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
		$elm$core$Basics$degrees(rotateD),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.28,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 60))),
						flipFlag
					]))));
};
var $author$project$DrawElmMusic$sixteenthR = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.13,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
			])));
var $author$project$DrawElmMusic$thirtysecondN = function (ifFlip) {
	var rotateD = ifFlip ? 180 : 0;
	var flipFlag = ifFlip ? $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-10, 32),
					$author$project$DrawElmMusic$flag2)),
				$MacCASOutreach$graphicsvg$GraphicSVG$mirrorX(
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-33, -10),
					$author$project$DrawElmMusic$flag))
			])) : $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(9.2, 32),
				$author$project$DrawElmMusic$flag2),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-13, -10),
				$author$project$DrawElmMusic$flag)
			]));
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
		$elm$core$Basics$degrees(rotateD),
		A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.28,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 2, 60))),
						flipFlag
					]))));
};
var $author$project$DrawElmMusic$wholeN = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.11,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
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
			])));
var $author$project$DrawElmMusic$wholeR = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.58,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 6),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$black,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 14, 5)))
			])));
var $author$project$DrawElmMusic$drawDtoNR = function (note) {
	var pitchH = A2($author$project$ElmMusic$pitchHeight, note.note.pitch, note.instrument);
	var ifFlip = (pitchH > 0) ? true : false;
	var adjustedDuration = $author$project$ElmMusic$durationToFloat(note.note.duration);
	return (adjustedDuration >= 1) ? (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? $author$project$DrawElmMusic$wholeR : $author$project$DrawElmMusic$wholeN) : ((adjustedDuration >= 0.5) ? (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? $author$project$DrawElmMusic$halfR : $author$project$DrawElmMusic$halfN(ifFlip)) : ((adjustedDuration >= 0.25) ? (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? $author$project$DrawElmMusic$quarterR : $author$project$DrawElmMusic$quarterN(ifFlip)) : ((adjustedDuration >= 0.125) ? (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? $author$project$DrawElmMusic$eighthR : $author$project$DrawElmMusic$eighthN(ifFlip)) : ((adjustedDuration >= 0.0625) ? (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? $author$project$DrawElmMusic$sixteenthR : $author$project$DrawElmMusic$sixteenthN(ifFlip)) : ((adjustedDuration >= 0.03125) ? (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
		$MacCASOutreach$graphicsvg$GraphicSVG$black,
		$MacCASOutreach$graphicsvg$GraphicSVG$text('need thirtysecondR')) : $author$project$DrawElmMusic$thirtysecondN(ifFlip)) : A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
		$MacCASOutreach$graphicsvg$GraphicSVG$black,
		$MacCASOutreach$graphicsvg$GraphicSVG$text('Error in drawDtoNR')))))));
};
var $author$project$DrawElmMusic$endBar = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1.5, 20.5)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(-2, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$black,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1, 20.5)))
		]));
var $author$project$DrawElmMusic$drawSingleNote = function (note) {
	var pitchH = A2($author$project$ElmMusic$pitchHeight, note.note.pitch, note.instrument);
	var moveArt = function () {
		var _v3 = note.note.articulation;
		if (_v3.$ === 'Fermata') {
			return 5;
		} else {
			return (_Utils_eq(
				note._function.articulation,
				$elm$core$Maybe$Just($author$project$ElmMusic$Legato)) || _Utils_eq(
				note._function.articulation,
				$elm$core$Maybe$Just($author$project$ElmMusic$Detache))) ? ((_Utils_cmp(pitchH, -10) < 0) ? (-8) : ((-1) * $elm$core$Basics$abs((-15) - pitchH))) : ((pitchH <= 0) ? ((!_Utils_eq(note._function.tie, $elm$core$Maybe$Nothing)) ? (-10) : (-5)) : 5);
		}
	}();
	var moveDyn = function () {
		var adjArt = (!_Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) ? ((_Utils_cmp(pitchH + moveArt, -20) > 0) ? (-23) : moveArt) : (-19);
		return (_Utils_cmp(pitchH, adjArt) < 0) ? (-15) : ((-1) * $elm$core$Basics$abs(adjArt - pitchH));
	}();
	var moveLyric = function () {
		var adjArt = (!_Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) ? ((moveArt < 0) ? ((_Utils_cmp(pitchH, -10) < 0) ? (moveArt - 8) : ((-1) * $elm$core$Basics$abs((-25) - pitchH))) : ((-1) * $elm$core$Basics$abs((-25) - pitchH))) : 0;
		return (_Utils_eq(note._function.dynamic, $elm$core$Maybe$Nothing) && _Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) ? ((_Utils_cmp(pitchH, -25) < 0) ? (-8) : ((-1) * $elm$core$Basics$abs((-25) - pitchH))) : (((!_Utils_eq(note._function.articulation, $elm$core$Maybe$Nothing)) && _Utils_eq(note._function.dynamic, $elm$core$Maybe$Nothing)) ? adjArt : (moveDyn - 8));
	}();
	var drawNR = $author$project$DrawElmMusic$drawDtoNR(note);
	var drawLyric = A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(0, moveLyric),
		$author$project$DrawElmMusic$drawLyr(note.note.lyric));
	var drawExtraLine = A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$move,
		_Utils_Tuple2(0, (-1) * pitchH),
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			$author$project$DrawElmMusic$extraLines(pitchH)));
	var drawDyn = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, moveDyn),
				$author$project$DrawElmMusic$drawDynamic(note._function.dynamic))
			]));
	var drawDot = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		$author$project$DrawElmMusic$addDot(note.dot));
	var drawArt = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, moveArt),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$scale,
					0.5,
					$author$project$DrawElmMusic$drawArticulation(note._function.articulation)))
			]));
	var drawAcc = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.5,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-12, 0),
					$author$project$DrawElmMusic$drawAccidential(note._function.accidential)))
			]));
	var _v0 = note.bar;
	if (_v0.$ === 'Nothing') {
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[drawNR, drawDot, drawAcc, drawDyn, drawArt, drawLyric, drawExtraLine]));
	} else {
		if (_v0.a.$ === 'RegBar') {
			var _v1 = _v0.a;
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[$author$project$DrawElmMusic$bar]));
		} else {
			var _v2 = _v0.a;
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[$author$project$DrawElmMusic$endBar]));
		}
	}
};
var $author$project$DrawElmMusic$Group = function (a) {
	return {$: 'Group', a: a};
};
var $author$project$DrawElmMusic$Single = function (a) {
	return {$: 'Single', a: a};
};
var $author$project$DrawElmMusic$pointDirctUpdateGroup = function (note) {
	if (note.$ === 'Single') {
		var s = note.a;
		return (A2($author$project$ElmMusic$pitchHeight, s.note.pitch, s.instrument) >= 0) ? (-1) : 1;
	} else {
		var g = note.a;
		var posList = A2(
			$elm$core$List$map,
			function (n) {
				return _Utils_Tuple2(
					n.xPos,
					A2($author$project$ElmMusic$pitchHeight, n.note.pitch, n.instrument));
			},
			g);
		return $author$project$DrawElmMusic$ifGroupNotePointUp(posList) ? 1 : (-1);
	}
};
var $author$project$DrawMusic$slur2 = F3(
	function (_v0, _v1, pointDir) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		var x = x1 + ((x2 - x1) / 2);
		var ifPointUp = (pointDir > 0) ? true : false;
		var maybey = ifPointUp ? (A2($elm$core$Basics$min, y1, y2) - ((y1 - y2) / 2)) : (A2($elm$core$Basics$max, y1, y2) + ((y1 - y2) / 2));
		var moveSlur = ifPointUp ? _Utils_Tuple2(0, -5) : _Utils_Tuple2(0, 5);
		var slurY = ifPointUp ? (($elm$core$Basics$abs(y1 - y2) > 20) ? (-8) : (-8)) : (($elm$core$Basics$abs(y1 - y2) > 20) ? 8 : 8);
		var y = (!maybey) ? (y1 + slurY) : (maybey + slurY);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					moveSlur,
					A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
						$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.8),
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
var $author$project$DrawElmMusic$drawSlurTie = F2(
	function (music, slurOrTie) {
		var pointD = function (list) {
			return $author$project$DrawElmMusic$pointDirctUpdateGroup(list);
		};
		var pitchH = function (note) {
			return A2($author$project$ElmMusic$pitchHeight, note.note.pitch, note.instrument);
		};
		var drawSlurSVG = function (list) {
			return A2(
				$elm$core$List$map,
				function (slurInfo) {
					return A3($author$project$DrawMusic$slur2, slurInfo.p1, slurInfo.p2, slurInfo.point);
				},
				list);
		};
		var condition = function (n) {
			return _Utils_eq(slurOrTie, $author$project$ElmMusic$Slur) ? _Utils_eq(
				n._function.articulation,
				$elm$core$Maybe$Just($author$project$ElmMusic$Slur)) : _Utils_eq(
				n._function.tie,
				$elm$core$Maybe$Just($author$project$ElmMusic$Tie));
		};
		var secondSlurP = F2(
			function (list, dir) {
				secondSlurP:
				while (true) {
					if (!list.b) {
						return {
							p: _Utils_Tuple2(0, 0),
							point: 0,
							restList: _List_Nil
						};
					} else {
						if (list.a.$ === 'Single') {
							if (!list.b.b) {
								var s = list.a.a;
								return (dir > 0) ? {
									p: _Utils_Tuple2(s.xPos, -8),
									point: dir + 1,
									restList: _List_Nil
								} : {
									p: _Utils_Tuple2(s.xPos, 10),
									point: dir + 1,
									restList: _List_Nil
								};
							} else {
								var s = list.a.a;
								var _v1 = list.b;
								var x2 = _v1.a;
								var xs = _v1.b;
								if (condition(s)) {
									var $temp$list = A2($elm$core$List$cons, x2, xs),
										$temp$dir = dir + pointD(
										$author$project$DrawElmMusic$Single(s));
									list = $temp$list;
									dir = $temp$dir;
									continue secondSlurP;
								} else {
									if (!_Utils_eq(s.bar, $elm$core$Maybe$Nothing)) {
										var $temp$list = A2($elm$core$List$cons, x2, xs),
											$temp$dir = dir;
										list = $temp$list;
										dir = $temp$dir;
										continue secondSlurP;
									} else {
										return {
											p: _Utils_Tuple2(
												s.xPos,
												pitchH(s)),
											point: dir + pointD(
												$author$project$DrawElmMusic$Single(s)),
											restList: A2($elm$core$List$cons, x2, xs)
										};
									}
								}
							}
						} else {
							if (!list.a.a.b) {
								var xs = list.b;
								var $temp$list = xs,
									$temp$dir = dir;
								list = $temp$list;
								dir = $temp$dir;
								continue secondSlurP;
							} else {
								var _v2 = list.a.a;
								var g = _v2.a;
								var gs = _v2.b;
								var xs = list.b;
								if (condition(g)) {
									var $temp$list = A2(
										$elm$core$List$cons,
										$author$project$DrawElmMusic$Group(gs),
										xs),
										$temp$dir = dir + pointD(
										$author$project$DrawElmMusic$Group(
											A2($elm$core$List$cons, g, gs)));
									list = $temp$list;
									dir = $temp$dir;
									continue secondSlurP;
								} else {
									return {
										p: _Utils_Tuple2(
											g.xPos,
											pitchH(g)),
										point: dir + pointD(
											$author$project$DrawElmMusic$Group(
												A2($elm$core$List$cons, g, gs))),
										restList: A2(
											$elm$core$List$cons,
											$author$project$DrawElmMusic$Group(gs),
											xs)
									};
								}
							}
						}
					}
				}
			});
		var firstSlurP = function (list) {
			firstSlurP:
			while (true) {
				if (!list.b) {
					return _List_Nil;
				} else {
					if (list.a.$ === 'Single') {
						var s = list.a.a;
						var xs = list.b;
						var point2 = A2(
							secondSlurP,
							xs,
							pointD(
								$author$project$DrawElmMusic$Single(s)));
						if (condition(s)) {
							return A2(
								$elm$core$List$cons,
								{
									p1: _Utils_Tuple2(
										s.xPos,
										pitchH(s)),
									p2: point2.p,
									point: point2.point
								},
								firstSlurP(point2.restList));
						} else {
							var $temp$list = xs;
							list = $temp$list;
							continue firstSlurP;
						}
					} else {
						if (!list.a.a.b) {
							var xs = list.b;
							var $temp$list = xs;
							list = $temp$list;
							continue firstSlurP;
						} else {
							var _v4 = list.a.a;
							var g = _v4.a;
							var gs = _v4.b;
							var xs = list.b;
							var point2 = A2(
								secondSlurP,
								A2(
									$elm$core$List$cons,
									$author$project$DrawElmMusic$Group(gs),
									xs),
								pointD(
									$author$project$DrawElmMusic$Group(
										A2($elm$core$List$cons, g, gs))));
							if (condition(g)) {
								return A2(
									$elm$core$List$cons,
									{
										p1: _Utils_Tuple2(
											g.xPos,
											pitchH(g)),
										p2: point2.p,
										point: point2.point
									},
									firstSlurP(point2.restList));
							} else {
								var $temp$list = A2(
									$elm$core$List$cons,
									$author$project$DrawElmMusic$Group(gs),
									xs);
								list = $temp$list;
								continue firstSlurP;
							}
						}
					}
				}
			}
		};
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			drawSlurSVG(
				firstSlurP(
					$elm$core$List$concat(music))));
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
var $author$project$DrawElmMusic$filterEstimateX = function (list) {
	return A2(
		$elm$core$List$map,
		function (l) {
			return A2(
				$elm$core$List$map,
				function (_v0) {
					var m = _v0.a;
					var estimateX = _v0.b;
					return m;
				},
				l);
		},
		list);
};
var $author$project$ElmMusic$Eighth = {$: 'Eighth'};
var $author$project$DrawElmMusic$MarkedNote = F6(
	function (note, _function, xPos, dot, bar, instrument) {
		return {bar: bar, dot: dot, _function: _function, instrument: instrument, note: note, xPos: xPos};
	});
var $author$project$DrawElmMusic$defFunc = {accidential: $elm$core$Maybe$Nothing, articulation: $elm$core$Maybe$Nothing, dynamic: $elm$core$Maybe$Nothing, tie: $elm$core$Maybe$Nothing};
var $author$project$DrawElmMusic$defMarkedNote = A6(
	$author$project$DrawElmMusic$MarkedNote,
	$author$project$ElmMusic$quarter($author$project$ElmMusic$Rest),
	$author$project$DrawElmMusic$defFunc,
	0,
	0,
	$elm$core$Maybe$Nothing,
	$author$project$ElmMusic$Piano);
var $author$project$ElmMusic$durationToNoteType = function (d) {
	return 1 / d;
};
var $author$project$ElmMusic$noteBeats = F2(
	function (oneBeatNoteType, note) {
		return oneBeatNoteType / $author$project$ElmMusic$durationToNoteType(
			$author$project$ElmMusic$durationToFloat(note.duration));
	});
var $author$project$ElmMusic$oneBeatNote = function (ts) {
	switch (ts.$) {
		case 'SixFour':
			return 4;
		case 'FiveFour':
			return 4;
		case 'FourFour':
			return 4;
		case 'ThreeFour':
			return 4;
		case 'TwelveEighth':
			return 8;
		case 'ThreeEighths':
			return 8;
		case 'TwoFour':
			return 4;
		case 'NineEight':
			return 8;
		case 'SevenEight':
			return 8;
		case 'SixEight':
			return 8;
		case 'FiveEight':
			return 8;
		case 'ThreeTwo':
			return 2;
		case 'TwoTwo':
			return 2;
		case 'OpenEight':
			return 8;
		case 'OpenFour':
			return 4;
		default:
			return 2;
	}
};
var $author$project$DrawElmMusic$groupByBeaming = F2(
	function (ts, music) {
		var oneBeat = $author$project$ElmMusic$oneBeatNote(ts);
		var groupNote = F3(
			function (list, currentbeat, preList) {
				groupNote:
				while (true) {
					if (!list.b) {
						return {groupList: preList, restList: _List_Nil};
					} else {
						var x = list.a;
						var xs = list.b;
						var beat = A2($author$project$ElmMusic$noteBeats, oneBeat, x.note);
						if (!_Utils_eq(x.bar, $elm$core$Maybe$Nothing)) {
							return {
								groupList: preList,
								restList: A2($elm$core$List$cons, x, xs)
							};
						} else {
							if ((beat + currentbeat) < 1) {
								var $temp$list = xs,
									$temp$currentbeat = beat + currentbeat,
									$temp$preList = _Utils_ap(
									preList,
									_List_fromArray(
										[x]));
								list = $temp$list;
								currentbeat = $temp$currentbeat;
								preList = $temp$preList;
								continue groupNote;
							} else {
								if ((beat + currentbeat) === 1) {
									return {
										groupList: _Utils_ap(
											preList,
											_List_fromArray(
												[x])),
										restList: xs
									};
								} else {
									return {
										groupList: preList,
										restList: A2($elm$core$List$cons, x, xs)
									};
								}
							}
						}
					}
				}
			});
		var groupAllEighthN = function (measure) {
			var m = A2($elm$core$List$take, 8, measure);
			var last_bar = function () {
				var _v7 = A2($elm$core$List$drop, 8, measure);
				if (!_v7.b) {
					return $author$project$DrawElmMusic$defMarkedNote;
				} else {
					var x = _v7.a;
					var xs = _v7.b;
					return x;
				}
			}();
			return A2(
				$elm$core$List$cons,
				$author$project$DrawElmMusic$Group(
					A2($elm$core$List$take, 4, m)),
				A2(
					$elm$core$List$cons,
					$author$project$DrawElmMusic$Group(
						A2($elm$core$List$drop, 4, m)),
					A2(
						$elm$core$List$cons,
						$author$project$DrawElmMusic$Single(last_bar),
						_List_Nil)));
		};
		var countBeaming = function (measure) {
			if (!measure.b) {
				return _List_Nil;
			} else {
				if (!measure.b.b) {
					var x = measure.a;
					return _List_fromArray(
						[
							$author$project$DrawElmMusic$Single(x)
						]);
				} else {
					var x = measure.a;
					var _v2 = measure.b;
					var x2 = _v2.a;
					var xs = _v2.b;
					var filterRest = function (groupList) {
						var helper = F2(
							function (list, tmp) {
								helper:
								while (true) {
									if (!list.b) {
										return {group: tmp, restList: _List_Nil};
									} else {
										var k = list.a;
										var ks = list.b;
										if (!_Utils_eq(k.note.pitch, $author$project$ElmMusic$Rest)) {
											var $temp$list = ks,
												$temp$tmp = _Utils_ap(
												tmp,
												_List_fromArray(
													[k]));
											list = $temp$list;
											tmp = $temp$tmp;
											continue helper;
										} else {
											return {group: tmp, restList: ks};
										}
									}
								}
							});
						if (!groupList.b) {
							return _List_Nil;
						} else {
							if (!groupList.b.b) {
								var k = groupList.a;
								return _List_fromArray(
									[
										$author$project$DrawElmMusic$Single(k)
									]);
							} else {
								var k = groupList.a;
								var _v5 = groupList.b;
								var k2 = _v5.a;
								var ks = _v5.b;
								var checkRest = A2(
									helper,
									A2($elm$core$List$cons, k2, ks),
									_List_Nil);
								return _Utils_eq(k2.note.pitch, $author$project$ElmMusic$Rest) ? A2(
									$elm$core$List$cons,
									$author$project$DrawElmMusic$Single(k),
									A2(
										$elm$core$List$cons,
										$author$project$DrawElmMusic$Single(k2),
										filterRest(ks))) : A2(
									$elm$core$List$cons,
									$author$project$DrawElmMusic$Group(
										A2($elm$core$List$cons, k, checkRest.group)),
									filterRest(checkRest.restList));
							}
						}
					};
					var ifGroup = function (groupList) {
						var _v6 = groupList.groupList;
						if (!_v6.b) {
							return countBeaming(groupList.restList);
						} else {
							if (!_v6.b.b) {
								var a = _v6.a;
								return A2(
									$elm$core$List$cons,
									$author$project$DrawElmMusic$Single(a),
									countBeaming(groupList.restList));
							} else {
								var a = _v6.a;
								var as1 = _v6.b;
								return _Utils_ap(
									filterRest(groupList.groupList),
									countBeaming(groupList.restList));
							}
						}
					};
					var beat = A2($author$project$ElmMusic$noteBeats, oneBeat, x.note);
					var carry = beat - $elm$core$Basics$floor(beat);
					return (!(beat - $elm$core$Basics$floor(beat))) ? A2(
						$elm$core$List$cons,
						$author$project$DrawElmMusic$Single(x),
						countBeaming(
							A2($elm$core$List$cons, x2, xs))) : ((!_Utils_eq(x.bar, $elm$core$Maybe$Nothing)) ? A2(
						$elm$core$List$cons,
						$author$project$DrawElmMusic$Single(x),
						countBeaming(
							A2($elm$core$List$cons, x2, xs))) : ((beat > 1) ? A2(
						$elm$core$List$cons,
						$author$project$DrawElmMusic$Single(x),
						ifGroup(
							A3(
								groupNote,
								A2($elm$core$List$cons, x2, xs),
								carry,
								_List_Nil))) : ifGroup(
						A3(
							groupNote,
							A2(
								$elm$core$List$cons,
								x,
								A2($elm$core$List$cons, x2, xs)),
							0,
							_List_Nil))));
				}
			}
		};
		var allEighthNote = function (measure) {
			var m = A2($elm$core$List$take, 8, measure);
			return ($elm$core$List$length(measure) === 9) && (A2(
				$elm$core$List$all,
				function (n) {
					return _Utils_eq(n.note.duration, $author$project$ElmMusic$Eighth);
				},
				m) && A2(
				$elm$core$List$all,
				function (n) {
					return !_Utils_eq(n.note.pitch, $author$project$ElmMusic$Rest);
				},
				m));
		};
		return A2(
			$elm$core$List$map,
			function (list) {
				return A2(
					$elm$core$List$map,
					function (m) {
						return allEighthNote(m) ? groupAllEighthN(m) : countBeaming(m);
					},
					list);
			},
			music);
	});
var $author$project$ElmMusic$Flat = function (a) {
	return {$: 'Flat', a: a};
};
var $author$project$ElmMusic$Natural = function (a) {
	return {$: 'Natural', a: a};
};
var $author$project$ElmMusic$Sharp = function (a) {
	return {$: 'Sharp', a: a};
};
var $author$project$DrawElmMusic$markFunctions = function (music) {
	var oneMeasure = F4(
		function (noteL, accidentialDic, currentDym, currentArt) {
			var ifAcc = function (note) {
				switch (note.$) {
					case 'Flat':
						var p = note.a;
						return true;
					case 'Sharp':
						var p = note.a;
						return true;
					case 'Natural':
						var p = note.a;
						return true;
					default:
						var p = note;
						return false;
				}
			};
			var getTie = function (note) {
				return _Utils_eq(note.note.articulation, $author$project$ElmMusic$Tie) ? $elm$core$Maybe$Just($author$project$ElmMusic$Tie) : $elm$core$Maybe$Nothing;
			};
			var getNextDym = function (note) {
				return ((!_Utils_eq(note.note.dynamic, $author$project$ElmMusic$DynUnspecified)) && (!_Utils_eq(note.note.dynamic, currentDym))) ? note.note.dynamic : currentDym;
			};
			var getNextArt = function (note) {
				return ((!_Utils_eq(note.note.articulation, $author$project$ElmMusic$ArtUnspecified)) && (!_Utils_eq(note.note.articulation, currentArt))) ? note.note.articulation : currentArt;
			};
			var getDym = function (note) {
				return ((!_Utils_eq(note.note.dynamic, $author$project$ElmMusic$DynUnspecified)) && (!_Utils_eq(note.note.dynamic, currentDym))) ? $elm$core$Maybe$Just(note.note.dynamic) : $elm$core$Maybe$Nothing;
			};
			var getArticulation = F2(
				function (note, note2) {
					return (((!_Utils_eq(note.note.articulation, $author$project$ElmMusic$ArtUnspecified)) && (!_Utils_eq(note.note.articulation, currentArt))) || ((!_Utils_eq(note.note.articulation, $author$project$ElmMusic$Legato)) && (!_Utils_eq(note.note.articulation, $author$project$ElmMusic$Detache)))) ? (_Utils_eq(note.note.articulation, $author$project$ElmMusic$Tie) ? $elm$core$Maybe$Just(note2.note.articulation) : ((!_Utils_eq(note.note.articulation, currentArt)) ? $elm$core$Maybe$Just(note.note.articulation) : (((!_Utils_eq(note.note.articulation, $author$project$ElmMusic$Detache)) && (!_Utils_eq(note.note.articulation, $author$project$ElmMusic$Legato))) ? $elm$core$Maybe$Just(note.note.articulation) : $elm$core$Maybe$Nothing))) : $elm$core$Maybe$Nothing;
				});
			var converseAcc = function (note) {
				switch (note.$) {
					case 'Flat':
						var p = note.a;
						return $author$project$ElmMusic$Flat(p);
					case 'Sharp':
						var p = note.a;
						return $author$project$ElmMusic$Sharp(p);
					case 'Natural':
						var p = note.a;
						return $author$project$ElmMusic$Natural(p);
					default:
						var p = note;
						return $author$project$ElmMusic$Natural(p);
				}
			};
			var getAcc = function (note) {
				var pitchH = A2($author$project$ElmMusic$pitchHeight, note.note.pitch, note.instrument);
				var acc = A2($elm$core$Dict$get, pitchH, accidentialDic);
				if (acc.$ === 'Nothing') {
					return ifAcc(note.note.pitch) ? $elm$core$Maybe$Just(
						converseAcc(note.note.pitch)) : $elm$core$Maybe$Nothing;
				} else {
					var preAcc = acc.a;
					return _Utils_eq(
						preAcc,
						converseAcc(note.note.pitch)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						converseAcc(note.note.pitch));
				}
			};
			var updateAccDic = function (note) {
				var pitchH = A2($author$project$ElmMusic$pitchHeight, note.note.pitch, note.instrument);
				var acc = A2($elm$core$Dict$get, pitchH, accidentialDic);
				if (acc.$ === 'Nothing') {
					return ifAcc(note.note.pitch) ? A3(
						$elm$core$Dict$insert,
						pitchH,
						converseAcc(note.note.pitch),
						accidentialDic) : accidentialDic;
				} else {
					var preAcc = acc.a;
					return _Utils_eq(
						preAcc,
						converseAcc(note.note.pitch)) ? accidentialDic : A3(
						$elm$core$Dict$insert,
						pitchH,
						converseAcc(note.note.pitch),
						accidentialDic);
				}
			};
			if (!noteL.b) {
				return _List_Nil;
			} else {
				if (!noteL.b.b) {
					var x = noteL.a;
					var _function = x._function;
					var new_function = _Utils_update(
						_function,
						{
							accidential: getAcc(x),
							articulation: A2(getArticulation, x, $author$project$DrawElmMusic$defMarkedNote),
							dynamic: getDym(x),
							tie: getTie(x)
						});
					return _List_fromArray(
						[
							_Utils_update(
							x,
							{_function: new_function})
						]);
				} else {
					var x = noteL.a;
					var _v1 = noteL.b;
					var x2 = _v1.a;
					var xs = _v1.b;
					var note = x2.note;
					var new_note = _Utils_eq(x.note.articulation, $author$project$ElmMusic$Tie) ? _Utils_update(
						note,
						{articulation: $author$project$ElmMusic$Detache}) : note;
					var _function = x._function;
					var new_function = _Utils_update(
						_function,
						{
							accidential: getAcc(x),
							articulation: A2(getArticulation, x, x2),
							dynamic: getDym(x),
							tie: getTie(x)
						});
					return A2(
						$elm$core$List$cons,
						_Utils_update(
							x,
							{_function: new_function}),
						A4(
							oneMeasure,
							A2(
								$elm$core$List$cons,
								_Utils_update(
									x2,
									{note: new_note}),
								xs),
							updateAccDic(x),
							getNextDym(x),
							getNextArt(x)));
				}
			}
		});
	var nextDym = F2(
		function (list, currentDym) {
			nextDym:
			while (true) {
				if (!list.b) {
					return currentDym;
				} else {
					var x = list.a;
					var xs = list.b;
					if (!_Utils_eq(x.bar, $elm$core$Maybe$Nothing)) {
						return currentDym;
					} else {
						if ((!_Utils_eq(x.note.dynamic, $author$project$ElmMusic$DynUnspecified)) && (!_Utils_eq(x.note.dynamic, currentDym))) {
							var $temp$list = xs,
								$temp$currentDym = x.note.dynamic;
							list = $temp$list;
							currentDym = $temp$currentDym;
							continue nextDym;
						} else {
							var $temp$list = xs,
								$temp$currentDym = currentDym;
							list = $temp$list;
							currentDym = $temp$currentDym;
							continue nextDym;
						}
					}
				}
			}
		});
	var nextArt = F2(
		function (list, currentArt) {
			nextArt:
			while (true) {
				if (!list.b) {
					return currentArt;
				} else {
					var x = list.a;
					var xs = list.b;
					if (!_Utils_eq(x.bar, $elm$core$Maybe$Nothing)) {
						return currentArt;
					} else {
						if ((!_Utils_eq(x.note.articulation, $author$project$ElmMusic$ArtUnspecified)) && (!_Utils_eq(x.note.articulation, currentArt))) {
							var $temp$list = xs,
								$temp$currentArt = x.note.articulation;
							list = $temp$list;
							currentArt = $temp$currentArt;
							continue nextArt;
						} else {
							var $temp$list = xs,
								$temp$currentArt = currentArt;
							list = $temp$list;
							currentArt = $temp$currentArt;
							continue nextArt;
						}
					}
				}
			}
		});
	var scannMusic = F3(
		function (list, currentDym, currentArt) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				return A2(
					$elm$core$List$cons,
					A4(oneMeasure, x, $elm$core$Dict$empty, currentDym, currentArt),
					A3(
						scannMusic,
						xs,
						A2(nextDym, x, currentDym),
						A2(nextArt, x, currentArt)));
			}
		});
	return A3(scannMusic, music, $author$project$ElmMusic$DynUnspecified, $author$project$ElmMusic$Detache);
};
var $author$project$DrawElmMusic$noteToSpacing = F3(
	function (ifoneLine, ifFristnote, note) {
		var dotSpace = 0.5 * note.dot;
		var adjustedDuration = $author$project$ElmMusic$durationToFloat(note.note.duration);
		var xSpace = (!_Utils_eq(note.bar, $elm$core$Maybe$Nothing)) ? (18 - 5) : (ifFristnote ? 10 : ((adjustedDuration >= 1) ? (18 + 10) : ((adjustedDuration >= 0.5) ? (18 + 2) : ((adjustedDuration >= 0.25) ? 18 : ((adjustedDuration >= 0.125) ? (18 - 2) : ((adjustedDuration >= 0.0625) ? (18 - 3) : (18 - 5)))))));
		var accidentialSpace = (!_Utils_eq(note._function.accidential, $elm$core$Maybe$Nothing)) ? 3 : 0;
		return ifoneLine ? ((!_Utils_eq(note.bar, $elm$core$Maybe$Nothing)) ? 20 : (ifFristnote ? 16 : (_Utils_eq(note.note.pitch, $author$project$ElmMusic$Rest) ? 19 : 21.8))) : ((xSpace + accidentialSpace) + dotSpace);
	});
var $author$project$DrawElmMusic$placeMeasure = F3(
	function (ifoneLine, spaceConstraint, music) {
		var placeXOneMeaseure = F2(
			function (list, current) {
				var newX = F3(
					function (noteL, currentX, iffristnote) {
						if (!noteL.b) {
							return _List_Nil;
						} else {
							if (!noteL.b.b) {
								var x = noteL.a;
								return _List_fromArray(
									[
										_Utils_update(
										x,
										{
											xPos: (A3($author$project$DrawElmMusic$noteToSpacing, ifoneLine, iffristnote, x) + currentX) - 2
										})
									]);
							} else {
								var x = noteL.a;
								var _v2 = noteL.b;
								var x2 = _v2.a;
								var xs = _v2.b;
								return A2(
									$elm$core$List$cons,
									_Utils_update(
										x,
										{
											xPos: A3($author$project$DrawElmMusic$noteToSpacing, ifoneLine, iffristnote, x) + currentX
										}),
									A3(
										newX,
										A2($elm$core$List$cons, x2, xs),
										A3($author$project$DrawElmMusic$noteToSpacing, ifoneLine, iffristnote, x) + currentX,
										false));
							}
						}
					});
				var lastX = A3(
					$elm$core$List$foldl,
					F2(
						function (n, def) {
							return n.xPos;
						}),
					0,
					A3(newX, list, current, true));
				return _Utils_Tuple2(
					_Utils_Tuple2(
						A3(newX, list, current, true),
						lastX),
					lastX);
			});
		var scanMeasure = F3(
			function (list, startX, returnList) {
				scanMeasure:
				while (true) {
					var newX = function (x) {
						return A2(placeXOneMeaseure, x, startX).a;
					};
					var newStartX = function (x) {
						return A2(placeXOneMeaseure, x, startX).b;
					};
					if (!list.b) {
						return {
							oneLine: returnList,
							restLine: _List_fromArray(
								[_List_Nil])
						};
					} else {
						var x = list.a;
						var xs = list.b;
						if (_Utils_cmp(
							newStartX(x),
							spaceConstraint - 10) < 0) {
							var $temp$list = xs,
								$temp$startX = newStartX(x),
								$temp$returnList = _Utils_ap(
								returnList,
								_List_fromArray(
									[
										newX(x)
									]));
							list = $temp$list;
							startX = $temp$startX;
							returnList = $temp$returnList;
							continue scanMeasure;
						} else {
							return {
								oneLine: returnList,
								restLine: A2($elm$core$List$cons, x, xs)
							};
						}
					}
				}
			});
		var splitLines = function (list) {
			var getOneLine = A3(
				scanMeasure,
				list,
				0,
				_List_fromArray(
					[
						_Utils_Tuple2(_List_Nil, 0)
					]));
			return _Utils_eq(
				getOneLine.restLine,
				_List_fromArray(
					[_List_Nil])) ? _List_fromArray(
				[getOneLine.oneLine]) : A2(
				$elm$core$List$cons,
				getOneLine.oneLine,
				splitLines(getOneLine.restLine));
		};
		return splitLines(music);
	});
var $author$project$ElmMusic$EndBar = {$: 'EndBar'};
var $author$project$ElmMusic$RegBar = {$: 'RegBar'};
var $author$project$DrawElmMusic$restructureM = F2(
	function (instrument, measure) {
		var newMeasureList = function (_v2) {
			var m = _v2.a;
			return A2(
				$elm$core$List$map,
				function (n) {
					return A6(
						$author$project$DrawElmMusic$MarkedNote,
						n,
						$author$project$DrawElmMusic$defFunc,
						0,
						$author$project$ElmMusic$countDots(n.duration),
						$elm$core$Maybe$Nothing,
						instrument);
				},
				m);
		};
		var newList = function (list) {
			if (!list.b) {
				return _List_fromArray(
					[_List_Nil]);
			} else {
				if (!list.b.b) {
					var x = list.a;
					return _List_fromArray(
						[
							_Utils_ap(
							newMeasureList(x),
							_List_fromArray(
								[
									A6(
									$author$project$DrawElmMusic$MarkedNote,
									$author$project$ElmMusic$quarter($author$project$ElmMusic$Rest),
									$author$project$DrawElmMusic$defFunc,
									0,
									0,
									$elm$core$Maybe$Just($author$project$ElmMusic$EndBar),
									instrument)
								]))
						]);
				} else {
					var x = list.a;
					var _v1 = list.b;
					var x2 = _v1.a;
					var xs = _v1.b;
					return A2(
						$elm$core$List$cons,
						_Utils_ap(
							newMeasureList(x),
							_List_fromArray(
								[
									A6(
									$author$project$DrawElmMusic$MarkedNote,
									$author$project$ElmMusic$quarter($author$project$ElmMusic$Rest),
									$author$project$DrawElmMusic$defFunc,
									0,
									0,
									$elm$core$Maybe$Just($author$project$ElmMusic$RegBar),
									instrument)
								])),
						newList(
							A2($elm$core$List$cons, x2, xs)));
				}
			}
		};
		var musicL = $elm$core$List$concat(measure);
		return newList(
			$elm$core$List$concat(measure));
	});
var $author$project$DrawElmMusic$drawMusicOneScore = function (_v0) {
	var instrument = _v0.a;
	var timeSignature = _v0.b;
	var measure = _v0.c;
	var newLayout = A2(
		$author$project$DrawElmMusic$groupByBeaming,
		timeSignature,
		$author$project$DrawElmMusic$filterEstimateX(
			A3(
				$author$project$DrawElmMusic$placeMeasure,
				true,
				99999,
				$author$project$DrawElmMusic$markFunctions(
					A2($author$project$DrawElmMusic$restructureM, instrument, measure)))));
	var drawS = F2(
		function (list, currentY) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				return A2(
					$elm$core$List$cons,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.5,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, currentY),
							A2($author$project$DrawElmMusic$drawSlurTie, x, $author$project$ElmMusic$Slur))),
					A2(
						$elm$core$List$cons,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							0.5,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, currentY),
								A2($author$project$DrawElmMusic$drawSlurTie, x, $author$project$ElmMusic$Tie))),
						A2(drawS, xs, currentY - 50)));
			}
		});
	var drawOneLine = F2(
		function (list, currentY) {
			return A2(
				$elm$core$List$map,
				function (m) {
					return A2(
						$elm$core$List$map,
						function (n) {
							if (n.$ === 'Single') {
								var x = n.a;
								return A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$scale,
									0.5,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(
											x.xPos,
											A2($author$project$ElmMusic$pitchHeight, x.note.pitch, x.instrument) + currentY),
										$author$project$DrawElmMusic$drawSingleNote(x)));
							} else {
								var xs = n.a;
								return A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$scale,
									0.5,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(0, currentY),
										$author$project$DrawElmMusic$drawGroup(xs)));
							}
						},
						m);
				},
				list);
		});
	var drawM = F2(
		function (list, currentY) {
			var ifdrawScoreAndTs = _List_fromArray(
				[
					_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						0.5,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(110, currentY),
							A3($author$project$DrawElmMusic$drawScoreAndTsWhilePlayMusic, timeSignature, instrument, true)))
					])
				]);
			var ifTs = function (x) {
				return _Utils_eq(x, _List_Nil) ? false : true;
			};
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				return A2(
					$elm$core$List$cons,
					A2(drawOneLine, x, currentY),
					A2(
						$elm$core$List$cons,
						ifdrawScoreAndTs,
						A2(drawM, xs, currentY - 50)));
			}
		});
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				$elm$core$List$concat(
					$elm$core$List$concat(
						A2(drawM, newLayout, 0)))),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
				A2(
					drawS,
					A2(
						$elm$core$List$map,
						function (x) {
							return A2(
								$elm$core$List$filter,
								function (m) {
									return !(!$elm$core$List$length(m));
								},
								x);
						},
						newLayout),
					0))
			]));
};
var $author$project$Master$playButton = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5)),
			A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(7)))
		]));
var $author$project$Master$drawQuize = function (elm) {
	if (elm.$ === 'Animation') {
		var graphicSVG = elm.a;
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(graphicSVG);
	} else {
		var music = elm.a;
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-35, 0),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$scale,
						1.3,
						$author$project$DrawElmMusic$drawMusicOneScore(music))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
					$author$project$Master$PlaySound(music),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-45, 20),
						A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.7, $author$project$Master$playButton)))
				]));
	}
};
var $author$project$Master$drawQuizeAnswer = function (elm) {
	if (elm.$ === 'Animation') {
		var graphicSVG = elm.a;
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(graphicSVG);
	} else {
		var music = elm.a;
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-65, 50),
						$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 65, 15))),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-5, 50),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scale,
							1,
							$author$project$DrawElmMusic$drawMusicOneScore(music)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
					$author$project$Master$PlaySound(music),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-23, 50),
						A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.5, $author$project$Master$playButton)))
				]));
	}
};
var $author$project$Master$ffbutton1 = function (t) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.2,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(6, 15),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(-25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 10, 4)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(-6, 15),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(25),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$darkBrown,
							A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 2, 10, 4)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$clip,
					$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
						A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 17, 30, 10)),
					$author$project$Master$body),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(
						10 * $elm$core$Basics$sin(7 * t)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(20, -15),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(40),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.8,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
									0.7,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$grey,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$curve,
											_Utils_Tuple2(0, 34),
											_List_fromArray(
												[
													A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
													_Utils_Tuple2(-18, 3),
													_Utils_Tuple2(0, 0)),
													A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
													_Utils_Tuple2(18, 3),
													_Utils_Tuple2(0, 34))
												])))))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(
						(-10) * $elm$core$Basics$sin(7 * t)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-20, -15),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(-40),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								0.8,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
									0.7,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$grey,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$curve,
											_Utils_Tuple2(0, 34),
											_List_fromArray(
												[
													A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
													_Utils_Tuple2(-18, 3),
													_Utils_Tuple2(0, 0)),
													A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
													_Utils_Tuple2(18, 3),
													_Utils_Tuple2(0, 34))
												])))))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -10),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
						0.4,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
							$MacCASOutreach$graphicsvg$GraphicSVG$circle(25)))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -10),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
						0.1,
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
							$MacCASOutreach$graphicsvg$GraphicSVG$circle(50))))
				])));
};
var $author$project$Master$ffButton = function (t) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 0, 0, 75),
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 1),
				$author$project$Master$ffbutton1(t))
			]));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$green = A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 115, 210, 22, 1);
var $author$project$Master$lightningButton = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 6, 1, 0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.2,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(10),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -15),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
							-4,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
								$elm$core$Basics$degrees(30),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
									$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5)))))))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.2,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
				$elm$core$Basics$degrees(10),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -15),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
						$elm$core$Basics$degrees(-5),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-5, -15),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scaleY,
								4,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(30),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$yellow,
										$MacCASOutreach$graphicsvg$GraphicSVG$triangle(5)))))))))
		]));
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
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
var $author$project$Master$myShapes = function (model) {
	var undoButton = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$red,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(5)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
				$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
					$MacCASOutreach$graphicsvg$GraphicSVG$circle(2)),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-150),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$wedge, 3, 0.75)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(1, 2.3),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-2),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						$MacCASOutreach$graphicsvg$GraphicSVG$triangle(1.5))))
			]));
	var recordButton = $MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$green,
				$MacCASOutreach$graphicsvg$GraphicSVG$circle(5)),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-2.5, -1.3),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(30),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1, 3.5)))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(1, -0.5),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
					$elm$core$Basics$degrees(-57),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1, 7))))
			]));
	var _v0 = model.state;
	switch (_v0.$) {
		case 'Login':
			return _List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$filled,
					$MacCASOutreach$graphicsvg$GraphicSVG$red,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 120, 10)),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, -30),
					A4($author$project$Master$button, 'Start Game', 30, 1, $author$project$Master$StartGame))
				]);
		case 'Columns':
			var _v1 = _v0.a;
			var numTeams = _v1.a;
			var dict = _v1.b;
			var qs = _v0.b;
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					A2($author$project$Master$drawColumn, -1, model.time),
					$elm$core$Dict$toList(dict)),
				_List_fromArray(
					[
						A4($author$project$Master$button, 'Next Question', 30, 1, $author$project$Master$StartRound),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(0, -30),
						A4($author$project$Master$button, 'End Game', 30, 2, $author$project$Master$EndGame))
					]));
		case 'Question':
			var scores = _v0.a;
			var qs = _v0.b;
			var pointsSoFar = _v0.c;
			if (qs.b) {
				var _v3 = qs.a;
				var txt = _v3.a;
				var elm = _v3.b;
				return A2(
					$elm$core$List$cons,
					$author$project$Master$drawQuize(
						elm(model)),
					_Utils_ap(
						A2(
							$elm$core$List$indexedMap,
							$author$project$Master$drawButton(pointsSoFar),
							_List_fromArray(
								[
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 0, 1, 0.5),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(0, -12),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$scale,
												0.3,
												$author$project$Master$beanstockmodel(model.time)))
										])),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 1, 1, 0.5),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(-1, 47),
											A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.8, $author$project$Master$whaleChar))
										])),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 2, 1, 0.4),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(0, 2),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$scale,
												0.3,
												$author$project$Master$myTornado(model.time)))
										])),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 3, 1, 0.5),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(3, -58),
											A2($author$project$Master$icicleShape, model.time, 1))
										])),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 4, 1, 0.5),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(1, 32),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$scale,
												0.6,
												A2($author$project$Master$myBalloon, model.time, 0)))
										])),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 5, 1, 0.5),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$scale,
											0.15,
											A3($author$project$Master$myCaterpillar, 3, 3, 3 * model.time))
										])),
									$author$project$Master$lightningButton,
									$author$project$Master$ffButton(5 * model.time),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 8, 1, 0.5),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(10)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(0, 22),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$scale,
												0.5,
												A2($author$project$Master$rocketShip, model.time, 1)))
										]))
								])),
						_Utils_ap(
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(80, 10),
									A2($MacCASOutreach$graphicsvg$GraphicSVG$notifyTap, $author$project$Master$Undo, undoButton))
								]),
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(80, -10),
									A2($MacCASOutreach$graphicsvg$GraphicSVG$notifyTap, $author$project$Master$Record, recordButton))
								]))));
			} else {
				return _List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$red,
						$MacCASOutreach$graphicsvg$GraphicSVG$text('No more questions.'))
					]);
			}
		case 'Answer':
			var scores = _v0.a;
			var qs = _v0.b;
			return _Utils_ap(
				function () {
					if (qs.b) {
						var _v5 = qs.a;
						var txt = _v5.a;
						var elm = _v5.b;
						return A2(
							$elm$core$List$cons,
							$author$project$Master$drawQuizeAnswer(
								elm(model)),
							A2(
								$elm$core$List$cons,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
									0.3,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$lightBlue,
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 192, 128))),
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (idx, ln) {
											return A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$move,
												_Utils_Tuple2(-90, 50 - (7 * idx)),
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$filled,
													$MacCASOutreach$graphicsvg$GraphicSVG$black,
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$size,
														5.5,
														$MacCASOutreach$graphicsvg$GraphicSVG$selectable(
															$MacCASOutreach$graphicsvg$GraphicSVG$text(ln)))));
										}),
									txt)));
					} else {
						return _List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$red,
								$MacCASOutreach$graphicsvg$GraphicSVG$text('No more questions.'))
							]);
					}
				}(),
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(80, -50),
						A4($author$project$Master$button, 'See Score', 30, 4, $author$project$Master$BackToColumns))
					]));
		default:
			var _v6 = _v0.a;
			var numTeams = _v6.a;
			var dict = _v6.b;
			var teams = $elm$core$Dict$toList(dict);
			var bestScore = function () {
				var _v7 = $elm$core$List$maximum(
					A2($elm$core$List$map, $elm$core$Tuple$second, teams));
				if (_v7.$ === 'Just') {
					var m = _v7.a;
					return m;
				} else {
					return 999;
				}
			}();
			return _Utils_ap(
				A2(
					$elm$core$List$map,
					A2($author$project$Master$drawColumn, bestScore, model.time),
					teams),
				_List_fromArray(
					[
						A4($author$project$Master$button, 'Play Again', 30, 4, $author$project$Master$StartAgain)
					]));
	}
};
var $author$project$Master$view = function (model) {
	return {
		body: A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$collage,
			192,
			128,
			$author$project$Master$myShapes(model)),
		title: 'Quiz Game'
	};
};
var $author$project$Master$main = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$EllieApp$ellieAppWithTick,
	$author$project$Master$Tick,
	{init: $author$project$Master$init, subscriptions: $author$project$Master$subscriptions, update: $author$project$Master$update, view: $author$project$Master$view});
_Platform_export({'Master':{'init':$author$project$Master$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));