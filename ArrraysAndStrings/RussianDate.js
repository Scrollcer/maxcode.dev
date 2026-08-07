/*
Во входной строке замените все даты в американском формате MM/DD/YYYY на отечественный формат DD.MM.YYYY.


const str = "World War I or the First World War (07/28/1914 – 11/11/1918) was a global conflict between two coalitions: the Allies and the Central Powers.";

console.log(changeDateFormat(str));
// "World War I or the First World War (28.07.1914 – 11.11.1918) was a global conflict between two coalitions: the Allies and the Central Powers.";
*/

function changeDateFormat(str) {
  const regex = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  const matches = str.match(regex);

  if(!matches) return str;

  let result = str;

  for (let match of matches) {
    const splittedMatch = match.split("/");
    const russianDate = `${splittedMatch[1]}.${splittedMatch[0]}.${splittedMatch[2]}`;
    result = result.replace(match, russianDate);
  }

  return result;
}

