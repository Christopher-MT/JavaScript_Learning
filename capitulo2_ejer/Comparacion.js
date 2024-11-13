
let size = 30;
let Number = " ";

for(let j = 0; j < size; j++){
    for(let h = 0; h < size; h++){
        if((h + j)% 2 == 0){
        Number += " ";
        } else {
         Number += "#";
         } 
    }
     Number += "\n";
}
console.log(Number);