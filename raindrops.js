//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
     var outPut = ""
      if (num % 3 == 0){
        outPut = outPut+"Pling";}
      if (num % 5 == 0){
        outPut = outPut+"Plang";}
      if (num % 7 == 0){
        outPut = outPut+"Plong";}
      if (outPut == ""){
      return num.toString()}else{
        return outPut;
      }


};
