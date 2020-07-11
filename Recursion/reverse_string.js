function reverseString(str) {
	var newString = "";
	for(var i = str.length - 1; i >= 0; i-- ) {
		newString += str[i];
	}
	return newString
}

reverseString("Hello");


//Reverse a string with recursion

function reverseString(str) {
	if (str === "")
		return "";
	else 
		return reverseString(str.substr(1)) + str.charAt(0);
	
}

reverseString("Hello");




// Recursion 
function reverse(str){
 if(str === ""){
  return str 
 }else{
  return reverse(str.substr(1)) + str[0]
 }
}