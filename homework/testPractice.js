//first
function assert(input, output, testFunction) {
    return output === testFunction(input);
}

function first(week) {
	return week[0];
}

console.log("first test?" + 
assert(["monday", "tuesday", "wednesday"], "monday", first)
);

console.log("second test?" +
assert(["thursday", "friday", "saturday"], "thursday", first)
);

//last
function assert(input, output, testFunction) {
    return output === testFunction(input);
}

function last(week) {
	return week[week.length - 1];
}

console.log("1" + 
	assert(["monday", "tuesday", "wednesday"], "wednesday", last)
);
console.log("2" +
	assert(["thursday", "friday", "saturday"], "saturday", last)
);

//min
function assert(input, output, testFunction) {
    return output === testFunction(input);
}

function min(n) {
	return n[n.min()];
}

console.log("1 " +
	assert([144, 12, 81, 9], 9, min)
);

console.log("2 " +
	assert([42, 17, 4, 9, -Infinity, 7], -Infinity, min)
);

//max

assert([2, 4, 8, 16, 32, 64, 10], 64, max)
assert([99,-1, Infinity, 0, 99], Infinity, max)

//0_0 












);