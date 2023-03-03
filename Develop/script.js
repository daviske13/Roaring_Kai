// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked")
  return "Password Here";
}

var capLetter = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowLetter = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,,v,w,x,y,z";
var specialChar = "~!@#$%^&*()_+?<>?:{}|\][=-';./,]";
var numChar = "1,2,3,4,5,6,7,8,9,0";

//Password Prompts/Pop-ups
{ alert ("Password must be 8-128 characters")}
var passLength = prompt("How many total characters would you like your password to be?");
var capLetter = prompt ("Use Capital letter(s)?")
var lowLetter = prompt ("Use Lower case letter(s)?")
var specialChar = prompt ("Use Special Character(s)?")
var numChar = prompt ("Use Number(s)?")



// Write password to the #password input
input=passLength
  id="password"
  type="password"
  inputmode="numeric"
  minlength="8"
  maxlength="128" 

for (var i = 0; i < passLength; i++) {
  newPassword = Math.floor(Math.random());
}

document.getElementById("password".value = password);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
