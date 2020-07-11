function isPalindrome(string) {
	if(string.length <= 1) {
		return true;
	}

	let [ firstLetter ] = string;
	let lastLetter = string[string.length - 1 ];

	if(firstLetter === lastLetter ){
		let strWithout = string.substring(1, string.length - 1);
		return isPalindrome(strWithout);
	} else {
		return false;
	}

}

isPalindrome("noon");


// Palindrome

var isPalindrome = function(str) {
	var strLen = str.length;
	if(strLen === 0 || strLen === 1) {
		return true;
	}


	if(str[0] === str[strLen - 1]) {
	return isPalindrome(str.slice(1, strLen - 1))
	} 

	return false;
};

console.log(isPalindrome("madam"));
