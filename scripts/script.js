/*
Написати Todo-list де можна створювати, видаляти елементи та реалізувати збереження списку в локал сторедж
Стилі та розмітку можна взяти тут - 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*
- без локального сховища
    1. написати логіку додавання задачі по натисканню на кнопку едд
        1.1. зчитати значення з поля вводу
        1.2. робимо перевірку на пусту строку, якщо вона пуста, повідомляємо про це користувача і не додаємо задачу
        1.3. якщо задача є, то створюємо пункт списку в який додаємо текст задачі
        1.4. додати хрестик до пункту списку
        1.5. очистити поле вводу
    2. написати логіку стану задачі(виконана чи ні)
        2.1. по натисканню на лішку - тоглити класс чекд
    3. написати логіку видалення задачі зі списку
        3.1. якщо ми натиснули на хрестик - видаляємо лішку зі сторінки
- з локальним сховищем
    1. будемо зберігати задачі у вигляді масиву обʼєктів
        1.1. обʼєкт з полями: text, isDone, id. ID потрібне для пошуку елементів, для видалення елементів і для оновлення статусу елементів. Ідентифікатор повинен бути як і у елементу, так і у обʼєкту у сховищі.
    2. коли ми додаємо лі на сторінку, будемо додавати її у сторедж
    3. написати логіку функції, яка буде діставати дані з стореджа і додавти їх на сторінку у вигляді лішок
    4. написати логіку для видалення таски зі стору і для оновлення стану таски.
*/

// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }