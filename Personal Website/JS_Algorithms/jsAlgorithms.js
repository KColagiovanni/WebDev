//Sum of all odd Fibonacci Numbers
function sumFibs() {
    num = document.getElementById("fibNums").value;
    let regex = /[^0-9]/g;
    if(regex.test(num)){
      console.log("Thats not a number");
      document.getElementById("fibNums").value = "666";
      document.getElementById("fibNumsResult").innerHTML = "Enter Numbers Only";
      document.getElementById("showFibList").innerHTML = "";
    } else {
      console.log(num);
      let arr = [1, 1];
      let sum = 2;
      let numArr = [1, 1];
      for(let i = 2; i < num; i++){
        i = arr[0] + arr[1];
        if(i <= num){
          arr.shift();
          arr.push(i);
          if(i % 2 != 0){
            numArr.push(" " + i);
            sum = i + sum;
          }
        }
      }
      numArr = "The list of all the odd Fibonacci numbers that are being summed is: " + numArr;
      if(document.getElementById("showFibNums").checked){
        document.getElementById("fibNumsResult").innerHTML = `The sum of all the odd Fibonacci numbers from 1 to ${num} is ${sum}`;
        document.getElementById("showFibList").innerHTML = numArr;
      } else {
        document.getElementById("fibNumsResult").innerHTML = `The sum of all the odd Fibonacci numbers from 1 to ${num} is ${sum}`;
        document.getElementById("showFibList").innerHTML = "";
      }
      return sum;
    }
  }

//Sum of all Prime Numbers
function sumPrimes() {
  num = document.getElementById("sumOfAllPrimeNums").value;
  let regex = /[^0-9]/g;
  if(regex.test(num) || num == 0 || num == 1){
    console.log("Thats not a number");
    if(document.getElementById("showPrimeNums").checked){
      document.getElementById("primeNumList").innerHTML = "";
    }
    document.getElementById("sumOfAllPrimeNums").value = "666";
    document.getElementById("sumOfAllPrimeNumsResult").innerHTML = "Only enter numbers greater than 2";
  } else {
    let count = 0;
    let sum = 0;
    let numArr = [];
    console.log(`num is ${num}`);
    for(let i = 2; i <= num; i++){
      for(let j = i; j > 0; j--){
        if(i % j == 0){
          count++;
        }
      }
      if(count < 3){
        numArr.push(" " + i);
        sum = sum + i;
      }
      count = 0;
    }
    console.log(`Checked is ${document.getElementById("showPrimeNums").checked}`);
    console.log(`sum is ${sum}`);
    numArr = "The list of all the prime numbers that are being summed is: " + numArr;
    if(document.getElementById("showPrimeNums").checked){
      document.getElementById("primeNumList").innerHTML = numArr;
      document.getElementById("sumOfAllPrimeNumsResult").innerHTML = `The sum of all the prime numbers between 2 and ${num} is ${sum}`;
    } else {
      document.getElementById("primeNumList").innerHTML = "";
      document.getElementById("sumOfAllPrimeNumsResult").innerHTML = `The sum of all the prime numbers between 2 and ${num} is ${sum}`;;
    }
    return sum;
  }
}

//Smallest Common Multiple
/*function smallestCommons() {
  num1 = parseInt(document.getElementById("smallestCommonMultiple1").value);
  num2 = parseInt(document.getElementById("smallestCommonMultiple2").value);
  let arr = [num1, num2];
  console.log(arr);
  //Swap values if arr[0] is greater than arr[1]
  if(arr[0] > arr[1]){
    let x = arr[0];
    arr[0] = arr[1];
    arr[1] = x;
  }
  let newArr = [];
  //Creating an array of the range of numbers sorted highest to loswest
  for(let i = arr[1]; i >= arr[0]; i--){
    newArr.push(i);
  }
  let count = 0;
  console.log(`newArr is ${newArr} and it's length is ${newArr.length}`);
  let sum = 0;
  while(count <= newArr.length){
    sum += newArr[0];
    for(let i = 0; i < newArr.length; i++){
      console.log(`newArr[i] is ${newArr[i]}`);
      console.log(`sum is ${sum}`);
      if(sum % newArr[i] == 0){
        console.log(`count is ${count}`);
        count++;
      }
    }
  }
}*/

//Binary to Alpha Characters
function binaryAgent() {
  str = document.getElementById("binaryToAlpha").value;
  str = str.split(" ");
  let newStr = "";
//  console.log(str[0]);
  for(let i = 0; i < str.length; i++){
//    console.log('new word');
    let letter = 0;
    for(let j = 0; j < str[i].length; j++){
//      console.log(str[i][j]);
      if(j == 0 && str[i][j] == 1){
        letter = letter + 123;
      }
      if(j == 1 && str[i][j] == 1){
        letter = letter + 64;
      }
      if(j == 2 && str[i][j] == 1){
        letter = letter + 32;
      }
      if(j == 3 && str[i][j] == 1){
        letter = letter + 16;
      }
      if(j == 4 && str[i][j] == 1){
        letter = letter + 8;
      }
      if(j == 5 && str[i][j] == 1){
        letter = letter + 4;
      }
      if(j == 6 && str[i][j] == 1){
        letter = letter + 2;
      }
      if(j == 7 && str[i][j] == 1){
        letter = letter + 1;
      }
    }
//    console.log(`letter is ${letter}`);
    let hexToAlpha = String.fromCharCode(letter);
//    console.log(hexToAlpha);
    newStr = newStr + hexToAlpha;
  }
  newStr = `The binary string entered is "${newStr}" when converted to Alpha Characters`;
  console.log(newStr);
  document.getElementById("binaryToAlphaResult").innerHTML = newStr;
  return newStr;
}

//Truthy
function truthCheck() {
  collection = [];
  collection1 = [];
  collection2 = [];
  collection3 = [];
  collection4 = [];
  collection5 = [];
  let regex = /[0-9]/g;
  key00 = "";
  val00 = "";
  key01 = "";
  val01 = "";
  key02 = "";
  val02 = "";
  key10 = "";
  val10 = "";
  key11 = "";
  val11 = "";
  key12 = "";
  val12 = "";
  key20 = "";
  val20 = "";
  key21 = "";
  val21 = "";
  key22 = "";
  val22 = "";
  key30 = "";
  val30 = "";
  key31 = "";
  val31 = "";
  key32 = "";
  val32 = "";
  key40 = "";
  val40 = "";
  key41 = "";
  val41 = "";
  key42 = "";
  val42 = "";

  //Object 1
  //Key/Value 1
  pre = document.getElementById("truthyPre").value;
  console.log(`The predicate is ${pre}`);

  for(let i = 0; i < 5; i++){
    for(let j = 0; j < 3; j++){
      key = document.getElementById(`obj${i}key${j}`).value;
      val = document.getElementById(`obj${i}value${j}`).value;    
//      console.log(`key is ${key} and the value is ${val}`);

//      console.log(regex.test(val));
//      console.log(document.getElementById("dontAskNums").checked);
      if(!document.getElementById("dontAskNums").checked && regex.test(val)){
        if(confirm(`You Entered a number in row ${i + 1} column 'Value ${j + 1}'. If you would like it to be parsed as a number, press 'Ok', otherwise press cancel and it will be parsed as a string.`)){
        val = Number(val);
        console.log(`${val} has been parsed as a number from unchecked if o${i + 1}v${j + 1}`);
        }
      }
      if(document.getElementById("dontAskNums").checked && regex.test(val)){
  //    if(regex.test(obj1value1)){
        val = Number(val);
        console.log(`${val} has been parsed as a number from checked if o${i + 1}v${j + 1}`);
      }
    //    }
      if(document.getElementById("dontAskBool").checked && typeof(val) == "string" && val.toLowerCase() == 'false'){
//        console.log(val.toLowerCase());
        val = false;
//        console.log(typeof(val));
      } else {
//        console.log(typeof(val));
//        console.log(val.toLowerCase());
        if(typeof(val) == 'string' && val.toLowerCase() == 'false'){
          if(confirm(`You Entered 'false' in row ${i + 1} column 'Value ${j + 1}'. If you would like it to be parsed as a boolean value, press 'Ok', otherwise press cancel and it will be parsed as a string.`)){
            val = false;
//            console.log(typeof(val));
          }
        }
      }
      console.log(`key is: ${key.length} and val is: ${val.length} which is a ${typeof(val)}`);

      //Row 1
      //Col 1
      if(i == 0 && j == 0 && key.length > 0){
//        if((typeof(val) == 'string' && val != "") || (typeof(val) == 'number' && val > 0) || (typeof(val) == 'boolean' && val != false)){
          key00 = key;
          val00 = val;
          collection1 = {[key00]: val00};  
//        }
//        console.log(`val is ${val}`);
//        console.log(Object.keys(collection1).length);
//        console.log(Object.values(collection1).length);
        }
      //Col 2
      if(i == 0 && j == 1 && key.length > 0 && key00.length > 0){
        key01 = key;
        val01 = val;
        collection1 = {[key00]: val00, [key01]: val01};
//        console.log(Object.keys(collection1));
//        console.log(Object.values(collection1));
        }
      //Col 3
      if(i == 0 && j == 2 && key.length > 0 && key01.length > 0){
        key02 = key;
        val02 = val;
        collection1 = {[key00]: val00, [key01]: val01, [key02]: val02};
//        console.log(Object.keys(collection1));
//        console.log(Object.values(collection1));
        }

      //Row 2
      //Col 1
      if(i == 1 && j == 0 && key.length > 0){
        key10 = key;
        val10 = val;
        collection2 = {[key10]: val10};
      }
      //Col 2
      if(i == 1 && j == 1 && key.length > 0 && key10.length > 0){
        key11 = key;
        val11 = val;
        collection2 = {[key10]: val10, [key11]: val11};
      }
      //Col 3
      if(i == 1 && j == 2 && key.length > 0 && key11.length > 0){
        key12 = key;
        val12 = val;
        collection2 = {[key10]: val10, [key11]: val11, [key12]: val12};
      }
      
      //Row 3
      //Col 1
      if(i == 2 && j == 0 && key != "" && val != ""){
        key20 = key;
        val20 = val;
        collection3 = {[key20]: val20};
      }
      //Col 2
      if(i == 2 && j == 1 && key.length > 0 && key20.length > 0){
        key21 = key;
        val21 = val;
        collection3 = {[key20]: val20, [key21]: val21};
      }
      //Col 3
      if(i == 2 && j == 2 && key.length > 0 && key21.length > 0){
        key22 = key;
        val22 = val;
        collection3 = {[key20]: val20, [key21]: val21, [key22]: val22};
      }

      //Row 4
      //Col 1
      if(i == 3 && j == 0 && key.length > 0){
        key30 = key;
        val30 = val;
        console.log(`val30 is ${val}`);
        collection4 = {[key30]: val30};
        console.log('colelction 4 is: ')
        console.log(collection4);
      }
      //Col 2
      if(i == 3 && j == 1 && key.length > 0 && key30.length > 0){
        key31 = key;
        val31 = val;
        console.log(`val31 is ${val}`);
        collection4 = {[key30]: val30, [key31]: val31};
      }
      //Col 3
      if(i == 3 && j == 2 && key.length > 0 && key31.length > 0){
        key32 = key;
        val32 = val;
        console.log(`val32 is ${val}`);
        collection4 = {[key30]: val30, [key31]: val31, [key32]: val32};
        console.log(collection4);
      }

      //Row 5
      //Col 1
      if(i == 4 && j == 0 && key.length > 0){
        key40 = key;
        val40 = val;
        collection5 = {[key40]: val40};
      }
      //Col 2
      if(i == 4 && j == 1 && key.length > 0 && key40.length > 0){
        key41 = key;
        val41 = val;
        collection5 = {[key40]: val40, [key41]: val41};
      }
      //Col 3
      if(i == 4 && j == 2 && key.length > 0 && key41.length > 0){
        key42 = key;
        val42 = val;
        collection5 = {[key40]: val40, [key41]: val41, [key42]: val42};
      }
/*      //Row 5
      //Col 1
      if(i == 4 && j == 0 && key != "" && val != ""){
        key40 = key;
        val40 = val;
        collection5 = {[key40]: val40};
      }
      //Col 2
      if(i == 4 && j == 1 && key != "" && val != "" && key40 != "" && val40 != ""){
        key41 = key;
        val41 = val;
        collection5 = {[key40]: val40, [key41]: val41};
      }
      //Col 3
      if(i == 4 && j == 2 && key != "" && val != "" && key41 != "" && val41 != ""){
        key42 = key;
        val42 = val;
        collection5 = {[key40]: val40, [key41]: val41, [key42]: val42};
      }*/
    }//end of j for loop
  }//end of i for loop

  console.log(`collection1[pre] is ${collection1[pre]}`);
  collection.push(collection1);
  console.log(`collection2[pre] is ${collection2[pre]}`);
  collection.push(collection2);
  console.log(`collection3[pre] is ${collection3[pre]}`);
  collection.push(collection3);
  console.log(`collection4[pre] is ${collection4[pre]}`);
  collection.push(collection4);
  console.log(`collection5[pre] is ${collection5[pre]}`);
  collection.push(collection5);

/*  console.log(`collection1[pre] is ${collection1[pre]}`);
  if(collection1[pre] != undefined){
    collection.push(collection1);
  }
  console.log(`collection2[pre] is ${collection2[pre]}`);
  if(collection2[pre] != undefined){
    collection.push(collection2);
  }
  console.log(`collection3[pre] is ${collection3[pre]}`);
  if(collection3[pre] != undefined){
    collection.push(collection3);
  }
  console.log(`collection4[pre] is ${collection4[pre]}`);
  if(collection4[pre] != undefined){
    collection.push(collection4);
  }
  console.log(`collection5[pre] is ${collection5[pre]}`);
  if(collection5[pre] != undefined){
    collection.push(collection5);
  }*/

  console.log(collection);
//  console.log(`collection.hasOwnProperty(pre) is ${collection.hasOwnProperty(pre)}`);
//  console.log(`collection.length is ${collection.length}`);
  let count = 0;
  for(let i in collection){
    console.log(collection[i].hasOwnProperty(pre));
    console.log(collection[i][pre]);
    if(collection[i].hasOwnProperty(pre) && collection[i][pre] != false && collection[i][pre] != 0){
//      console.log("True");
      count++;
    }
  };
  console.log(`count is ${count}`);
  console.log(`collection.length is ${collection.length}`);
  if(count == collection.length){
    console.log("true");
    document.getElementById("truthyResult").innerHTML = `True, the key '${pre}' with a value that does not equal 'false' is included in every object`;
    return true;
  } else {
    console.log("false")
    document.getElementById("truthyResult").innerHTML = `False, the key '${pre}' does not exist in every object or the value of the object is equal to false`;
    return false;
  }
}