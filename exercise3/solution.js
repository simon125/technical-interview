/**
 * Zadanie
 *
 * Obsłuż formularz dostępny w pliku index.html w elemencie z nagłówkiem Zadanie 3
 * Mając focus na jednym z inputów email/passowrd po naciśnięciu enter lub przycisnięciu
 * przycisku submit odczytaj wartości pól email oraz password
 *
 * sprwadź najdokładniej jak potrafisz czy wpisany email to email
 * jeżeli to nie jest raczej email tzn nie przypomina struktury emailu
 * wyświetl odpowiedni komunikat np używając funckji alert
 *
 * dodatkowo sprawdź długosc hasła jeżeli jest mniejsza niż 5 znaków
 * wyświetl stosowny komunikat
 *
 *
 * jeżeli wszystkie dane są poprawne
 * wyczyść pola formularza po 2 sekundach
 *
 */

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  if (password.trim().length <= 5) {
    alert("Hasło jest za krótkie!");
    return;
  }

  if (!re.test(email)) {
    alert("To nie jest email!");
    return;
  }

  setTimeout(() => {
    event.target.reset();
  }, 2000);
});
