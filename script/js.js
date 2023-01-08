var form = document.getElementById("form");
var form2 = document.getElementById("form2");
var arrtext = [];
var hanldeview = document.getElementById("mensagem");
var crypt = document.getElementById("crypt");
var paragrafro = document.getElementById("paragrafro");
var botao2 = document.getElementById("decodificar");


//função codificar texto, aqui foi usado JS Vanila, mas pretendo mudar para jquery
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var texto = document.getElementById("textoforcodificar").value.toLowerCase();
  console.log("no input tem: " + texto);
  textoglobal = texto;
    var botao = document
      .getElementById("Codificar")
      .addEventListener("submit", cripto());

    
    function cripto() {
      arrtext = [];
      for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "e") {
          arrtext.push("enter");
        } else if (texto[i] == "i") {
          arrtext.push("imes");
        } else if (texto[i] == "a") {
          arrtext.push("ai");
        } else if (texto[i] == "o") {
          arrtext.push("ober");
        } else if (texto[i] == "u") {
          arrtext.push("ufat");
        } else {
          arrtext.push(texto[i]);
        }
      }
      hanldeview.classList.add("notview");
      crypt.classList.remove("notview");
      var text = arrtext.join("").toString();
      console.log(text);
      document.getElementById("paragrafro").value = text;
      e.preventDefault();
    }
  }
);

//função decodificar texto:

botao2.addEventListener("click", function (e) {
  $(document).ready(function () {
    var bla = $("#textoforcodificar").val().toLowerCase();
    var decoder = [
      ["a", "ai"],
      ["e", "enter"],
      ["i", "imes"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    for (var i = 0; i < decoder.length; i++) {
      if (bla.includes(decoder[i][0])) {
        bla = bla.replaceAll(decoder[i][1], decoder[i][0]);
      }
    }
    console.log(bla);
    hanldeview.classList.add("notview");
    crypt.classList.remove("notview");
    $('#paragrafro').val(bla);
    return bla;
  });
});


//função copiar texto:

$('#copiar').click(function(){
$('#paragrafro').select();
try {
      var ok = document.execCommand('copy');
      if (ok) { alert('Texto copiado para a área de transferência'); }
  } catch (e) {
  alert(e)
}
});
