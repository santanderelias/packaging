const lista = document.getElementById("myUL");
const creaitem = document.createElement("li");
function toDoc() {
  for (var i = 0; i < 1101; i++) {
    creaitem.innerHTML = `<a href="#">${db[i].nombre} <span class="badge bg-success">${db[i].etiquetado}</span></a `
    lista.appendChild(creaitem)
  }
}

// Declare variables
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById('myInput');
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName('li');

function filterClients() {
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}