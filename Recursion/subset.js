function powerset(l) {
	return (function ps(list) {
		if (list.length === 0) {
			return [[]];
		}

		var head = list.pop();
		var tailPS = ps(list);
		return tailPS.concat(tailPS.map(function(e) { return [head].concat(e); }))
	})(l.slice());
}

console.log(powerset([1,2,3,4]));