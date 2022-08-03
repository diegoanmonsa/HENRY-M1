'use strict'

function BinarioADecimal(num) {
  const i=10;
  var helper=num, residue=0, count=1, result=0;
  while (helper>0){
    residue=helper%i;
    helper=Math.trunc(helper/i);
    result+=residue*count;
    count*=2;
  }
  return result;  
}

function DecimalABinario(num) {
  const i=2;
  var helper=num, residue=0, count=1, result=0;
  while(helper>0){
    residue=helper%i;
    helper=Math.trunc(helper/i);
    result+=residue*count;
    count*=10;
  }
  return result.toString();
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}