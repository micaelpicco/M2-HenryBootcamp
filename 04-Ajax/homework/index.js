$("#loading").hide();

$("#boton").click(() => {
  let id = 0;
  if ($("#lista").children) $("#lista").empty();
  $.get(`http://localhost:5000/amigos/`, (data, status) => {
    console.log(data, status);
    while (id < data.length) {
      let li = document.createElement("li");
      li.innerText = `${data[id].name} X`;
      $("#lista").append(li);
      id++;
    }
  });
});

$("#search").text("Buscar amigos por ID");

$("#search").click(() => {
  let position = $("#input").val() - 1;
  $.get(`http://localhost:5000/amigos/`, (data) => {
    if (position + 1 < data.length && typeof position === "number") {
      $("#amigo").text(`${data[position].name}`);
    } else alert("No acepto inputs no válidos, gracias.");
  });
});

$("#delete").text("Eliminar amigo.");

let img = document.createElement("img");
img.id = "éxito";
img.src = "./éxito.jpg";

$("#delete").click(() => {
  $.ajax({ 
    url: `http://localhost:5000/amigos/${$("#inputDelete").val()}`,
    type: `DELETE`,
    success: () => {
      $("#success").text(`Tu amigo fue eliminado con ÉXXXITOOOO`);
      $("#aca").append(img);
    },
  });
});
