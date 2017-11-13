import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
    name: 'exponentialStrength',    
})
export class ExponentialStrengthPipe implements PipeTransform {
  // transform(value: number, exponent: number, exponent1: number): number {
  //   // let exp = parseFloat(exponent);
  //   // return Math.pow(value, isNaN(exp) ? 1 : exp);
  //   console.log('number: ' + value);
  //   console.log('exponent: ' + exponent);
  //   //let sum = exponent.reduce((acumulator, currentValue) => acumulator + currentValue) ;
  //   let sum = exponent + exponent1;
  //   return Math.pow(value, sum);
  // }

  transform(value: number, exponent: number[]): number {
    console.log('number: ' + value);
    console.log('exponent: ' + exponent);
    
    let sum = exponent.reduce((acumulator, currentValue) => Number(acumulator) + Number(currentValue)) ;
    console.log('sum: ' + sum);
    return Math.pow(value, sum);
  }
  {
	  lkhajsndklj handleEventas
 datas dataasd
 aLinkcolors dataasdd
 sad
 asind
  asind
   asindas
  }
  {}()akjsdlkasdlkjasldkj
 
}