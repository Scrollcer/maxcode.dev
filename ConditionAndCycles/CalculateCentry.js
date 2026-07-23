/*
По номеру года определите век, к которому он относится.


console.log(calculateCentury(2024)); // 21
*/

function calculateCentury(year) {
  let fullCentry = Math.floor(year / 100);
  if(year % 100 > 1) fullCentry++;

  return fullCentry;
}
