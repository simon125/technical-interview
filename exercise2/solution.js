/**
 * Zadanie
 *
 * Twoim zadaniem jest pobranie danych za pomocą dowolnej znanej Ci metody
 * a następnie wyswietlenie tych danych za pomocą tabelki htmlowej
 * w dokumencie index.html w śrokdu div-a z id = output2
 *
 * przeanalizuj pobrane dane i wyświel kolejne kolumny z danymi:
 *
 * kolumna 1: nazwa użytkownika
 * kolumna 2: email
 * kolumna 3: nazwa miejsca zamieszkania (miasto)
 * kolumna 4: dane geolokalizacyjne latitude
 * kolumna 5: dane geolokalizacyjne longitude
 * kolumna 6: nazwa firmy
 *
 * endpoint jaki należy wykorzystać do pobrania danych to:
 * https://jsonplaceholder.typicode.com/users
 *
 * metoda jakiej należy użyć to: GET
 *
 * w razie problemów możesz skorzystać z dokumnetjacji dostępnej pod tym adresem:
 * https://jsonplaceholder.typicode.com/
 *
 * tabelka powinna posiadać odpowiednie nagłówki tzn
 * kolumna 1 powinna zawierać nagłówek Name
 * kolumna 2 powinna zawierać nagłówek Email
 * kolumna 3 powinna zawierać nagłówek City
 * itd.
 *
 * Do realizacji zadania MOŻESZ edytować kod HTML w pliku index.html
 *
 */

const output2 = document.querySelector("#output2");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Coś poszło nie tak!");
    }
  })
  .then((users) => {
    let trs = "";
    users.forEach((user) => {
      const tr = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.address.geo.lat}</td>
                <td>${user.address.geo.lng}</td>
                <td>${user.company.name}</td>
            </tr>
        `;
      trs += tr;
    });
    output2.innerHTML = trs;
  })
  .catch((err) => {
    alert(err);
  });
