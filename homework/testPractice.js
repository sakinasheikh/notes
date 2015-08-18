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
	return week[last];
}

console.log("1" + 
	assert(["monday", "tuesday", "wednesday"], "wednesday", last)
);
console.log("2" +
	assert(["thursday", "friday", "saturday"], "saturday", last)
);