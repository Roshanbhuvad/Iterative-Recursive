function palindromeChecker(text) {
	var textLen = text.length;
	for(var i = 0; i < textLen/2; i++) {
		if (text[i] !== text[textLen - 1 - i]) {
			return false;
		}
	}
	return false;

}

palindromeChecker("rotor");