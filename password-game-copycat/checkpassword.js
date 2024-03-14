/*-----===FUNCTIONS===-----*/
export function checkReq1(pw) {
    let regex = /[A-Z]/g;
    let letters = pw.match(regex);
    
    if(letters.length >= 1){return true;}
    else { return false;} }

export function checkReq2(pw) {
    let regex = /[a-zA-Z]/g;
    let wordcount = pw.match(regex);

    if(wordcount && wordcount.length >= 6){
        return true;}
    else{ return false;} }

export function checkReq3(pw) {
    let regex = /\d/g;
    let digits = pw.match(regex);
    let sum = 0;

    if(digits === null){
        return false; }
    else{
        for (let index = 0; index < digits.length; index++) {
            sum += parseInt(digits[index]);      }

        if(sum >= 22){
            return true;}
        else{
            return false;} } }

export function checkReq4(pw) {
    let regex = /[!;':",.?]/g;
    let specialCharacter = pw.match(regex);

    if(specialCharacter && specialCharacter.length >= 1) { return true; }
    else {return false;}
}

export function checkReq5(pw) {
    let pronouns = ["she", "him", "his", "her", "hers"];

    pw = pw.toLowerCase();

    for (let index = 0; index < pronouns.length; index++) {
        if(pw.includes(pronouns[index])){
            return false; } }
    return true;}

export function checkReq6(pw) {
    let regex = /([1]{2,})|([2]{2,})|([3]{2,})|([4]{2,})|([5]{2,})|([6]{2,})|([7]{2,})|([8]{2,})|([9]{2,})|([0]{2,})/g;
    let digitosSequenciados = pw.match(regex);

    if(digitosSequenciados >= 1){ return false;}

    else {return true;}
}

export function checkReq7(pw) {
    let regex = /\d/g;
    let digits = pw.match(regex);
    let soma = 0;
    let prime = true;

    if(digits === null){
        return false;
    }
    else{
        for (let index = 0; index < digits.length; index++) {
            soma += parseInt(digits[index]); }

        for (let i = 2; i < soma; i++){
            if (soma % i === 0) {
                prime = false; }
        }

        if(prime){ return false; }
        else { return true; } }

}

export function checkReq8(pw) {
    let word = ["Allegedly" , "Apparently"];

    pw = pw.toLowerCase();

    for (let index = 0; index < word.length; index++) {
        if(pw.includes(word[index])){
            return true; } }

    return false;}

export function checkReq9(pw) {
}

export function checkReq10(pw) {
}