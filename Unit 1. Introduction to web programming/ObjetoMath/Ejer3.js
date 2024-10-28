//7.- Crea una web que genere ua tabla con dos columnas. En la primera
// un número ascendente y en la otra el valor de su seno


document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Seno</th></tr>");

for (let i = 0; i <= 10; i++) {
    document.write("<tr><td>" + i + "</td><td>" + Math.sin(i).toFixed(4) + "</td></tr>");
}
document.write("</table>");