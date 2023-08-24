// -------------- Exercício 1 --------------
$("#botao-ex1").click(() => {
  $("#p-ex1").html("Estou estudando JQuery!");
});
// -----------------------------------------

// -------------- Exercício 2 --------------
$("#botao-ex2").click(() => {
  $("#nome-ex2").toggle();
});
// -----------------------------------------

// -------------- Exercício 3 --------------
$(".acordeon-itens").hide();
$(".acordeon-cabecalho").click((e) => {
  $(e.target.nextElementSibling).slideToggle(300);
});
// -----------------------------------------

// -------------- Exercício 4 --------------

$(".submit").click((e) => {
  e.preventDefault();
  const inputName = $("#inputName").val();
  let errosNome = "";

  $(".erroNome").html("");

  if (inputName.length < 5 || inputName.length > 40) {
    errosNome += `O nome precisa ter entre 5 e 40 caracteres! <br>`;
    $(".erroNome").html(errosNome);
  }

  if (inputName.search(" ") != -1) {
    errosNome += "O nome não pode conter espaços.";
    $(".erroNome").html(errosNome);
  }

  const inputEndereco = $("#inputEndereco").val();
  let errosEndereco = "";

  const tamValorEndereco = inputEndereco.split(" ").length;
  const existeMaisDeUmaPalavra = inputEndereco
    .split(" ")
    .every((item) => item != "");

  console.log(existeMaisDeUmaPalavra);

  if (inputEndereco.length < 1) {
    errosEndereco += `O endereço deve ser preenchido <br>`;
    $(".erroEndereco").html(errosEndereco);
  } else if (tamValorEndereco < 2 || !existeMaisDeUmaPalavra) {
    errosEndereco += `O endereço deve ter no mínimo 2 palavras <br>`;
    $(".erroEndereco").html(errosEndereco);
  } else {
    $(".erroEndereco").html("");
  }
});
// -----------------------------------------

// -------------- Exercício 5 --------------
let currentIndex = 0;
const imgs = $(".img");
const totalImgs = imgs.length;
$(".img:not(:first)").hide();

function showImage() {
  imgs.hide();
  $(`.img:eq(${currentIndex})`).fadeToggle();
}

$("#prox").click(() => {
  currentIndex = (currentIndex + 1) % totalImgs;
  showImage();
});

$("#ant").click(() => {
  currentIndex = (currentIndex - 1 + totalImgs) % totalImgs;
  showImage();
});
// -----------------------------------------
