/**
 * Zadanie
 *
 * Twoim zadaniem jest policzenie na podstawie tablicy users
 * średniej arytmetycznej wieku wsyztskich userów i wyświetlenie tej wartośi w paragrafie <p></p>
 * w dokumencie na samym dole (index.html) w środku elementu z id="output1"
 *
 * jeżeli jeszcze nie wiesz jak wyświetlić rezultatu w dokumencie
 * możesz wyświetlić go w konsoli za pomocą console.log
 *
 * hint: średnia atytmetyczna to suma wszystkich wartości podzielona przez ilość tych wartości
 *
 */

const users = [
  { name: "John", profession: "developer", age: 25 },
  { name: "Jane", profession: "designer", age: 22 },
  { name: "Jack", profession: "developer", age: 30 },
  { name: "Julia", profession: "tester", age: 33 },
  { name: "Jackie", profession: "manager", age: 52 },
  { name: "Jerry", profession: "developer", age: 42 },
];

const avg = users.reduce((sum, user) => sum + user.age, 0) / users.length;

const output1 = document.querySelector("#output1");
const paragraph = document.createElement("p");

paragraph.innerText = `Avarage age: ${avg}`;
output1.appendChild(paragraph);

/**
 * Zadanie ⭐⭐
 *
 * Twoim zadaniem jest policzenie na podstawie tablicy users
 * średniej arytmetycznej wieku wsyztskich userów i wyświetlenie tej wartośi w paragrafie <p></p>
 * w dokumencie na samym dole (index.html) w środku elementu z id="output1"
 *
 */

const amoutnBasedOnProfession = users.reduce((usersAcc, user) => {
  if (usersAcc[user.profession]) {
    usersAcc[user.profession] = usersAcc[user.profession] + 1;
  } else {
    usersAcc[user.profession] = 1;
  }
  return usersAcc;
}, {});

Object.entries(amoutnBasedOnProfession).forEach((amount) => {
  const paragraph = document.createElement("p");

  paragraph.innerText = `${amount[0]}: ${amount[1]}`;
  output1.appendChild(paragraph);
});
