var myStr = "paz e amor";

var resultado = reverseAString(myStr);
console.log(resultado);


function reverseAString(str){
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    return newStr
}