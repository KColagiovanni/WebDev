//********** Palindrome Checker **********//
function palindrome() {
  str = document.getElementById("palindromeChecker").value;
  let newStr = str.replace(/\s+|\W+|[_]/g, '');
  newStr = newStr.toLowerCase();
  strSplit = [];
  strSplit = newStr.split("");
  strSplit = strSplit.reverse();
  strSplit = strSplit.join("");
  if(newStr === strSplit){
    document.getElementById("pcResult").innerHTML = "Yes!, '" + newStr + "' is a palindrome";
    console.log("True, '" + newStr + "' is a palindrome");
  } else {
    document.getElementById("pcResult").innerHTML = "No, '" + newStr + "' is not a palindrome";
    console.log("False, '" + newStr + "' is not a palindrome");
  }
}

//********** Roman Numeral Converter **********//
function convertToRoman() {
  num = document.getElementById("romanNumeralConverter").value;
  //Check to see if a non-digit, non-integer, or integer < 1 was entered. If so have the user try again
  if(/[^0-9]/g.test(num) || num < 1) {
    console.log("A non-digit, non-integer, or integer < 1 was entered");
    document.getElementById("rncResult").innerHTML = "Enter Numeric Values Only";
    document.getElementById("romanNumeralConverter").value = "";
    alert(`Woh!! Easy there Cowboy, ${num} has a non-digit character, a non-integer, or a number < 1 in the value and cannot be converted to a Roman Numeral. Only enter integers > 0`);
  } else {
    //Check to see if the number entered is > 3999 and have the user verify that they want to continue
    if(num > 3999){
      console.log("Out of Range Alert (user entered a number > 3999)");
      if(confirm(`${num} will be converted, but technically the largest number that can be represented in this notation is 3,999, because no digit shall be repeated in succession more than thrice. By proceeding, there is a good chance that you will be haunted by the Romans for breaking their rules!!`)){
        document.getElementById("rncResult").style.color = "#f00";
        document.getElementById("rncResult").style.fontWeight = "bold";  
      } else{
        document.getElementById("rncResult").innerHTML = "Enter Numeric Values Only";
        document.getElementById("romanNumeralConverter").value = "";
        return;  
      }
    }
    if(num < 3999){
      document.getElementById("rncResult").style.color = "#000";
      document.getElementById("rncResult").style.fontWeight = "normal";
    }
    console.log(`num is ${num}`);
    let orig = num;
    var result = "";
    if(num >= 1000){
        for(let i = num; 1000 <= num; i--) {
            result = result.concat('M');
            num -= 1000;
        }
    }
    if (num >= 900){
        result = result.concat('CM');
        num -= 900;
    }
    if (num >= 500){
        for(let i = num; 500 <= num; i--) {
            result = result.concat('D');
            num -= 500;
        }
    }
    if (num >= 400){
        result = result.concat('CD');
        num -= 400;
    }
    if (num >= 100){
        for(let i = num; 100 <= num; i--) {
            result = result.concat('C');
            num -= 100;
        }
    }
    if (num >= 90){
        result = result.concat('XC');
        num -= 90;
    }
    if (num >= 50){
        for(let i = num; 50 <= num; i--) {
            result = result.concat('L');
            num -= 50;
        }
    }
    if (num >= 40){
        result = result.concat('XL');
        num -= 40;
    }
    if (num >= 10){
        for(let i = num; 10 <= num; i--) {
            result = result.concat('X');
            num -= 10;
        }
    }
    if (num >= 5 && num < 9){
        for(let i = num; 5 <= num; i--) {
            result = result.concat('V');
            num -= 5;
        }
    }
    if (num == 9){
        result = result.concat('IX');
        num -= 9;
    }
    if (num >= 1 && num < 4){
        for(let i = num; 1 <= num; i--) {
            result = result.concat('I');
            num -= 1;
        }
    }
    if (num == 4){
        result = result.concat('IV');
        num -= 4;
    }
    console.log(`${orig} is ${result}`);
    document.getElementById("rncResult").innerHTML = `The numner ${orig} converted to a Roman Numeral is ${result}`
    return result;
  }
}

//********** Caesars Cipher **********//
function rot() {
    str = document.getElementById("caesarsCipher").value;
    //***** Added Functionality *****//
    //Ask user how much they want to shift the cipher by
    shiftAmount = parseInt(document.getElementById("shiftAmount").value);
    if(shiftAmount < 0 || shiftAmount > 25){
      document.getElementById("caesarsCipher").value = "FUVSG VF BHG BS ENATR!";
      document.getElementById("shiftAmount").value = 13;
      document.getElementById("ccResult").innerHTML = "";
      alert("Value out of range");
    } else {
      //Check if the user entry is a letter, if not, show an alert and clear the input and output fields
      let check = /[^A-Za-z ]+/g;
      if(check.test(str)){
        console.log("thats not a letter");
        alert("There is a non-alpha character in the input! Enter letters only!")
        document.getElementById("caesarsCipher").value = "Enter Letters Only";
        document.getElementById("ccResult").innerHTML = "";
      } else {
        //Converting input to uppercase if it's not already
        if(str != str.toUpperCase()){
          str = str.toUpperCase();
        }
        let result = [];
        //The array that will be converted into a string that the user input will be compared to
        let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let abcStr = abc.join('');
        for(let i in str){
          result.push(str[i]);
        }
        for(let i = 0; i < abcStr.length; i++){
          for(let j in str){
            if (abcStr[i] == str[j]){
              if (i > shiftAmount - 1){
                result[j] = abcStr[i + shiftAmount];
              }
              if (i <= shiftAmount - 1){
                result[j] = abcStr[i + shiftAmount];
              }
              if(result[j] == undefined){
                result[j] = abcStr[i - (26 - shiftAmount)];
              }
            }
          }
        }
        result = result.join('');
        console.log(`the decoded result of ${str} is ${result}`);
        document.getElementById("ccResult").innerHTML = `If you decode  ${str}  using Caesar's Cipher shifted by ${shiftAmount} the result is  ${result}`;
        return result;
      }
    }
  }

//********** Telephone Number Validator**********//
function telephoneCheck(){
  str = document.getElementById("telephoneNumberValidator").value;
  //Check if the number starts with a dash (-) or contains an alpha character
  let charCheck = /^[\-]|[A-Za-z]/g;
  let check = charCheck.test(str);
  console.log(`check is ${check}`);
  //Checking to see if the parentheses are in the correct posision
  if (str[0] == "(" && str[4] == ")" || str[1] == "(" && str[5] == ")"){
    console.log(`${str} is true from charCheck`);
    document.getElementById("tnvResult").innerHTML = "This is a valid US phone number";

  }
  //Checking for parentheses in an incorrect position
  if (str[0] == "(" && str[4] != ")" || str[1] == "(" && str[5] != ")" || str[0] != "(" && str[4] == ")" || str[1] != "(" && str[5] == ")" || str[3] == ")" || check == true){
    console.log(`${str} is false from charCheck`);
    document.getElementById("tnvResult").innerHTML = `${str} is NOT a valid US phone number`;
    return false;
  }
  for(let i = 7; i < str.length; i++){
    if (str[i] == "(" ||str[i] == ")"){
    console.log(`${str} is false from for loop`);
    document.getElementById("tnvResult").innerHTML = `${str} is NOT a valid US phone number`;
    return false;
    }
  }
  let numRegex = /\d/g;
  let result = str.match(numRegex);
  //Check to see that if the number starts with a 1, then there are 11 digits
  if (result.length == 11 && result[0] == 1){
    console.log(`${str} is true from numRegex`);
    document.getElementById("tnvResult").innerHTML = `${str} is a valid US phone number`;
    return true;
  }
  //Check to see that if the number doesn't start with a 1, then there are only 10 digits (No U.S. area code starts with a 1)
  if (result.length == 10 && str[0] != 1){
    console.log(`${str} is true from numRegex`);
    document.getElementById("tnvResult").innerHTML = `${str} is a valid US phone number`;
    return true;
  } else {
    console.log(`${str} is false from numRegex`);
    document.getElementById("tnvResult").innerHTML = `${str} is NOT a valid US phone number`;
    return false;
  }
}

//********** Cash Register **********//
function checkCashRegister() {
  document.getElementById("pennyTable").innerHTML = "";
  document.getElementById("nickelTable").innerHTML = "";
  document.getElementById("dimeTable").innerHTML = "";
  document.getElementById("quarterTable").innerHTML = "";
  document.getElementById("oneTable").innerHTML = "";
  document.getElementById("fiveTable").innerHTML = "";
  document.getElementById("tenTable").innerHTML = "";
  document.getElementById("twentyTable").innerHTML = "";
  document.getElementById("hundredTable").innerHTML = "";
price = document.getElementById("cashRegisterPrice").value;
  cash = document.getElementById("cashRegisterCash").value;
  let cid = []
  pennyVal = ["PENNY", parseFloat(document.getElementById("penny").value)];
  cid.push(pennyVal);
  nickelVal = ["NICKEL", parseFloat(document.getElementById("nickel").value)];
  cid.push(nickelVal);
  dimeVal = ["DIME", Number(document.getElementById("dime").value)];
  cid.push(dimeVal);
  quarterVal = ["QUARTER", parseFloat(document.getElementById("quarter").value)];
  cid.push(quarterVal);
  oneVal = ["ONE", parseFloat(document.getElementById("one").value)];
  cid.push(oneVal);
  fiveVal = ["FIVE", parseFloat(document.getElementById("five").value)];
  cid.push(fiveVal);
  tenVal = ["TEN", parseFloat(document.getElementById("ten").value)];
  cid.push(tenVal);
  twentyVal = ["TWENTY", parseFloat(document.getElementById("twenty").value)];
  cid.push(twentyVal);
  hundredVal = ["ONE HUNDRED", parseFloat(document.getElementById("hundred").value)];
  cid.push(hundredVal);
  console.log(`price is ${price}`);
  console.log(`cash is ${cash}`);
  console.log(`cid is ${cid}`);
  let changeResult = [];
  let change = 0;
  let cidAmount = 0;
  let hundred = 0;
  let twenty = 0;
  let ten = 0;
  let five = 0;
  let one = 0;
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  change = cash - price;
  let changeOwed = change.toFixed(2);
  if(changeOwed < 1){
    changeOwed = changeOwed + " cents";
  } else {
    changeOwed = "$" + changeOwed;
  }
  change = change.toFixed(2);
  console.log(`change before is ${change}`);
  for(let i = cid.length - 1; i >= 0; i--){
    cidAmount = cidAmount + cid[i][1];
  }
  console.log(`cidAmount at the begining of the function after the for loop is ${cidAmount}`);
  if(cidAmount > change){
    console.log('open');
    while(change > 0){
      //Hundred
      if(change >= 100.00 && cid[8][1] >= 100.00){
        console.log('change is one hundren dollars');
        change = (change - 100).toFixed(2);
        cid[8][1] -= 100.00;
        hundred += 100.00;
      //Twenty  
      } else if(change >= 20.00 && cid[7][1] >= 20.00){
        console.log('change is twenty dollars');
        change = (change - 20).toFixed(2);
        cid[7][1] -= 20.00;
        twenty += 20.00;
      //Ten
      } else if(change >= 10.00 && cid[6][1] >= 10.00){
        console.log('change is ten dollars');
        change = (change - 10).toFixed(2);
        cid[6][1] -= 10.00;
        ten += 10;
      //Five
      } else if(change >= 5 && cid[5][1] >= 5){
        console.log('change is five dollars');
        change = (change - 5).toFixed(2);
        cid[5][1] -= 5;
        five += 5;
      //One
      }else if(change >= 1 && cid[4][1] >= 1){
        console.log('change is a dollar');
        change = (change - 1).toFixed(2);
        cid[4][1] -= 1;
        one += 1;
      //Quarter
      }else if(change >= 0.25 && cid[3][1] >= 0.25){
        console.log('change is a quarter');
        change = (change - 0.25).toFixed(2);
        cid[3][1] -= 0.25;
        quarter += 0.25;
      //Dime
      }else if(change >= 0.1 && cid[2][1] >= 0.1){
        console.log('change is a dime');
        dimeVal[1] = (Math.round(dimeVal[1] * 100)) / 100;
        console.log(`dimeVal[1] is ${dimeVal[1]}`);
        change = (change - 0.1).toFixed(2);
        cid[2][1] -= 0.1;
        dime += 0.10;
      //Nickel
      }else if(change >= 0.05 && cid[1][1] >= 0.05){
        console.log('change is a nickel');
        change = (change - 0.05).toFixed(2);
        cid[1][1] -= 0.05;
        nickel += 0.05;
      //Penny
      }else if (change >= 0.01 && cid[0][1] >= 0.01 ){
        console.log('change is a penny');
        change = (change - 0.01).toFixed(2);
        cid[0][1] -= 0.01;
        penny += 0.01;
        console.log(`penny is ${penny}`);
      } else{
        console.log('insufficiant funds 1');
        result = {status: "INSUFFICIENT_FUNDS", change: ["Not enough cash in drawer to give change!!"]};
        document.getElementById("crResult").innerHTML = "Status: " + result.status + "<br />" + "Change Due: " + result.change;
        document.getElementById("pennyTable").innerHTML = "NSF";
        document.getElementById("nickelTable").innerHTML = "NSF";
        document.getElementById("dimeTable").innerHTML = "NSF";
        document.getElementById("quarterTable").innerHTML = "NSF";
        document.getElementById("oneTable").innerHTML = "NSF";
        document.getElementById("fiveTable").innerHTML = "NSF";
        document.getElementById("tenTable").innerHTML = "NSF";
        document.getElementById("twentyTable").innerHTML = "NSF";
        document.getElementById("hundredTable").innerHTML = "NSF";
        return result;
      }
      console.log(`change owed is ${change}`);
    }
    if(cid[0][1] != penny || penny != 0){
      cid[0][1] = penny;
      console.log('penny added to changeResult');
      changeResult.unshift(cid[0]);
      if(cid[0][1] != 0){
        document.getElementById("pennyTable").innerHTML = cid[0][1].toFixed(2);
      }
    }
    if(cid[1][1] != nickel || nickel != 0){
      cid[1][1] = nickel;
      changeResult.unshift(cid[1]);
      if(cid[1][1] != 0){
        document.getElementById("nickelTable").innerHTML = cid[1][1].toFixed(2);
      }
    }
    if(cid[2][1] != dime || dime != 0){
      cid[2][1] = dime;
      changeResult.unshift(cid[2]);    
      if(cid[2][1] != 0){
        document.getElementById("dimeTable").innerHTML = cid[2][1].toFixed(2);
      }
    }
    if(cid[3][1] != quarter || quarter != 0){
      cid[3][1] = quarter;
      changeResult.unshift(cid[3]);
      if(cid[3][1] != 0){
        document.getElementById("quarterTable").innerHTML = cid[3][1].toFixed(2);
      }
    }
    if(cid[4][1] != one || one != 0){
      cid[4][1] = one;
      changeResult.unshift(cid[4]);
      if(cid[4][1] != 0){
        document.getElementById("oneTable").innerHTML = cid[4][1].toFixed(2);
      }
    }
    if(cid[5][1] != five || five != 0){
      cid[5][1] = five;
      changeResult.unshift(cid[5]);
      if(cid[5][1] != 0){
        document.getElementById("fiveTable").innerHTML = cid[5][1].toFixed(2);
      }
    }
    if(cid[6][1] != ten || ten != 0){
      cid[6][1] = ten;
      changeResult.unshift(cid[6]);
      if(cid[6][1] != 0){
        document.getElementById("tenTable").innerHTML = cid[6][1].toFixed(2);
      }
    }
    if(cid[7][1] != twenty || twenty != 0 ){
      cid[7][1] = twenty;
      changeResult.unshift(cid[7]);
      if(cid[7][1] != 0){
        document.getElementById("twentyTable").innerHTML = cid[7][1].toFixed(2);
      }
    }
    if(cid[8][1] != hundred || hundred != 0){
      cid[8][1] = hundred;
      changeResult.unshift(cid[8]);
      if(cid[8][1]){
        document.getElementById("hundredTable").innerHTML = cid[8][1].toFixed(2);
      }
    }
    console.log(`changeResult is ${changeResult}`);
    console.log(`cid at the end is ${cid}`);
    console.log(`cidAmount at the end of the function is ${cidAmount}`);
    result = {status: 'OPEN' , change: changeOwed}
    document.getElementById("crResult").innerHTML = "Status: " + result.status + "<br />" + "Change Due: " + result.change;
    return result;
  } else if(cidAmount == change){
    console.log('closed');
    result = {status: 'CLOSED', change: cid}
    document.getElementById("crResult").innerHTML = "Status: " + result.status + "<br />" + "Change Due: There is no more change left in the drawer!";
    document.getElementById("pennyTable").innerHTML = cid[0][1];
    document.getElementById("nickelTable").innerHTML = cid[1][1];
    document.getElementById("dimeTable").innerHTML = cid[2][1];
    document.getElementById("quarterTable").innerHTML = cid[3][1];
    document.getElementById("oneTable").innerHTML = cid[4][1];
    document.getElementById("fiveTable").innerHTML = cid[5][1];
    document.getElementById("tenTable").innerHTML = cid[6][1];
    document.getElementById("twentyTable").innerHTML = cid[7][1];
    document.getElementById("hundredTable").innerHTML = cid[8][1];
    return result;
  } else{
    console.log('insufficient funds 2');
    result = {status: "INSUFFICIENT_FUNDS", change: ["Not enough cash in drawer to give change!!"]};
    document.getElementById("crResult").innerHTML =  "Status: " + result.status + "<br />" + "Change Due: " + result.change;
    document.getElementById("pennyTable").innerHTML = "NSF";
    document.getElementById("nickelTable").innerHTML = "NSF";
    document.getElementById("dimeTable").innerHTML = "NSF";
    document.getElementById("quarterTable").innerHTML = "NSF";
    document.getElementById("oneTable").innerHTML = "NSF";
    document.getElementById("fiveTable").innerHTML = "NSF";
    document.getElementById("tenTable").innerHTML = "NSF";
    document.getElementById("twentyTable").innerHTML = "NSF";
    document.getElementById("hundredTable").innerHTML = "NSF";
    return result;
  }
}
//[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]