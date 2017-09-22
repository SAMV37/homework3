function sumof3(a, b, c){
    return a + b - c;
}

function randomNumberGenerator(){
    return parseInt(Math.random() * (100));
}

function noReturn(a, b, c){
    const numberA = a;
    const numberB = b;
    const numberC = c;
    const sum = numberA + numberB + numberC;
    const multi = numberA * numberb * numberC;
    console.log("Sum: " + sum);
    console.log("Multi: " + multi);
}

function fullNameGenerator(name, surname){
    return name + " " + surname;
}

function stringLenghtCheck(str1, str2, str3){
    if(str1.length > str2.length && str1.length > str3.length){
        return str1;
    }else if(str2.length > str1.length && str2.length > str3.length){
        return str2;
    }else if(str3.length > str2.length && str3.length > str1.length){
        return str3;
    }else if(str1.lenght === str2.lenght === str3.lenght){
        return "Your strings length are equal";
    }else if(str1.lenght === str2.length || str1.lenght === str3.lenght || str2.length === str3.lenght){
        return "Two of your strings lengths are equal";
    }

}

function comparing(a, b){
    if(a === b){
        return 0;
    }else if(a > b){
        return 1;
    }else{
        return -1;
    }
}

function truethy(a, b, c ){
    if(a){
        return a;
    }else if(b){
        return b;
    }else if(c){
        return c;
    }
}