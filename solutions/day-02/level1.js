let challenge = "30 Days of Javascript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.includes("script"));
console.log(challenge.split(""));

let secondStr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(secondStr.split(" "));
console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let thirdStr =
  "You cannot end a sentence with because because because is a conjunction";
console.log(thirdStr.indexOf("because"));
console.log(thirdStr.lastIndexOf("because"));
console.log(thirdStr.search("because"));

let fourthStr = " 30 Day of Javascript ";
console.log(fourthStr.trim());

console.log(challenge.match("a"));

let str1 = "hello";

let str2 = " world";

let concatOut = str1.concat(str2);
console.log(concatOut);

console.log(challenge.repeat(2));
