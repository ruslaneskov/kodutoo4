function otp() {
    // kasutusel kui encrypt
    var input = document.getElementById("input").value.toLowerCase();
    var boolean = true;
    document.getElementById("output").innerHTML = result(input, boolean);
}
function otpBack() {
    // kasutusel kui decrypt
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
    // count näitab millise key chari juures ollakse
    for (var n = 0; n < input.length; n++) {
        // n näitab millise input chari juures ollakse
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

function md5f() {
    var n = 0; // for loop index
    var input = document.getElementById("input").value; // input
    var dataBase = "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/CommonCreds/10-million-password-list-top-100000.txt";
    // using xml for work with data
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", dataBase, false);
    xmlhttp.send(null);
    var text = xmlhttp.responseText;
    var regular = text.split('\n');
    for (n; n <= regular.length; n++) {
        if (n === regular.length) {
            return document.getElementById("output").innerHTML = "No marvelous result!";
        }
        else if (md5(regular[n]) === input) {
            return document.getElementById("output").innerHTML = regular[n];
            //tagastab
        }
    }
}