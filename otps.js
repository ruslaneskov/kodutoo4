function otp() {
    var input = document.getElementById("input").value.toLowerCase();
    var boolean = true;
    document.getElementById("output").innerHTML = result(input, boolean);
}
function otpBack() {
    var input = document.getElementById("input").value.toLowerCase();
    var boolean = false;
    document.getElementById("output").innerHTML = result(input, boolean);
}
function sha5112() {
    var input = document.getElementById("input").value.toLowerCase();
    document.getElementById("output").innerHTML = sha512(input);
}
function isAlpha(ch){
  return /^[A-Z]$/i.test(ch);
}
function checkKey(key) {
    var truekey = "";
    for (var m = 0; m < key.length; m++) {
        if (isAlpha(key.charAt(m)) === true) {
            truekey += key.charAt(m);
        }
    }
    return truekey;
}
function result(input, boolean) {
    var result = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var truekey = checkKey(document.getElementById("key").value.toLowerCase());
    var count = 0;
    for (var n = 0; n < input.length; n++) {
        if (isAlpha(input.charAt(n)) === false) {
            result += input.charAt(n);
            continue
        }
        if (count < truekey.length && boolean === false) {
            if ((alphabet.indexOf(input.charAt(n)) - alphabet.indexOf(truekey.charAt(count)))%26 < 0) {
                result += alphabet.charAt(alphabet.length + (alphabet.indexOf(input.charAt(n)) - alphabet.indexOf(truekey.charAt(count))%26)&26);
                count += 1;
                continue;
            }
            result += alphabet.charAt((alphabet.indexOf(input.charAt(n)) - alphabet.indexOf(truekey.charAt(count)))%26);
            count = count + 1;
            continue;
        }
        if (count < truekey.length && boolean === true) {
            result += alphabet.charAt((alphabet.indexOf((input.charAt(n))) + alphabet.indexOf((truekey.charAt(count))))%26);
            count = count + 1;
            continue
            }
            result += input.charAt(n);
            count += 1;
    }
    document.getElementById("output").innerHTML = result;
    return result;
}