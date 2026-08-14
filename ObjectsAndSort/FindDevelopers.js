/*
Дан массив с информацией о командах разработки. Верните список имен всех разработчиков (член команды с ролью "developer"), отсортированных в лексикографическом порядке (по алфавиту).


const teams = [
  {
    name: "1",
    members: [
      { name: "Alice", role: "developer" },
      { name: "Bob", role: "designer" },
    ],
  },
  {
    name: "2",
    members: [
      { name: "Carol", role: "developer" },
      { name: "Dave", role: "qa" },
    ],
  },
];

console.log(findDevelopers(teams)); // ["Alice", "Carol"]
*/

function findDevelopers(teams) {
  let result = [];

  teams.forEach((team)=> {
    team.members.forEach((member)=> {
      if(member.role === "developer") result.push(member.name);
    });
  });

  return result.sort();
}
