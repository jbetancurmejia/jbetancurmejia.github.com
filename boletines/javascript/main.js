
/*
let links= document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
})*/




let btnClose= document.querySelectorAll(".close");

btnClose.forEach(function(btn){
  btn.addEventListener('click',function(ev){
    ev.preventDefault();
    //selecciono un solo elemento con la clase content
    let content = document.querySelector(".content");


    //remover clases al elemnto obtenido
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");


     // agrego clases al elemento
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    return false;
  });
});
