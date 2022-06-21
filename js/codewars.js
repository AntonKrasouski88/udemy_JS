function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let number;
    if (nbPetals >arr.length) {
      number = nbPetals % arr.length;
      return console.log(arr[number - 1]);
    } else if (!nbPetals || nbPetals < 0) {
        return console.log(arr[5]);
    } else {
      number = arr.length - nbPetals;
      return console.log(arr[number - 1]);
    }
  }
  howMuchILoveYou(10);

function nameShuffler(str){
    let arr = str.split(" ");
    for (let i = arr.length - 2; i >= 0; i--) {
        arr.unshift(arr.pop());
    }
    return arr.join(" ");
}
nameShuffler('john McClane');

function sayHello( name, city, state ) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona');

function sayHello(name) {
  return `Hello ${name}`;
}
sayHello('Mr. Spock');

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    if(Number.isInteger(Math.sqrt(array[i]))) {
      array[i] = Math.sqrt(array[i]);
    } else {
      array[i] *= array[i];
    }
  }
  return array;  
}

squareOrSquareRoot([4,3,9,7,2,1]);

function sevenAte9(str){
  let arr = str.split('');
  arr.forEach((item, i)=> {
    if(item == '9' && arr[i+1] == 7 && arr[i-1] == 7) {
      delete arr[i];
    }
  })
  let strNo9 = arr.join('')
  return console.log (strNo9)
}

sevenAte9('165561786121789797')

function expressionMatter(a, b, c) {
  const arr = [];
  arr[0] =  a*(b + c);
  arr[1] = a * b * c;
  arr[2] =  a + b * c;
  arr[3] = (a + b) * c;
  arr[4] = a + b + c
  arr.sort(function(a, b) {
    return a - b});
  return console.log (arr[4])
}

expressionMatter(10, 5, 6)

function mergeArrays(arr1, arr2) {
 /*  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
  arr2.forEach((item, j) => {
    if(arr1[i] == arr2[j]) {
      delete arr2[j];
    }
  })
  arr2 = arr2.filter(function(num) {
    return (num != null && num != undefined)
  })
  }
  arr3 = [...arr1,...arr2];
  arr3.sort(function(a,b) {
  return a-b;
  })
  return arr3; */
  let arr3 = [...new Set(arr1.concat(arr2).sort((a,b)=>(a-b)))];
  console.log (arr3);
}

mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);