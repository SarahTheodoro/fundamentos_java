
function inicio() {
    const texto = document.querySelector("h1");
    const descri = document.querySelector("p");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
   
    if((valor=="Objeto") || (valor=="objeto") || (valor=="OBJETO")){
        texto.innerHTML = "Objeto";
        descri.innerHTML = " Uma entidade que possui estado e comportamento é conhecida como um objeto, por exemplo, cadeira, bicicleta, marcador, caneta, mesa, carro, etc. Pode ser física ou lógica (tangível e intangível). O exemplo de um objeto intangível é o sistema bancário. Por exemplo, caneta é um objeto. O nome é Reynolds; a cor é branca, são conhecidos como estado. É usado para escrever, então escrever é o seu comportamento. Um objeto é uma instância de uma classe. Uma classe é um modelo ou blueprint a partir do qual os objetos são criados. Portanto, um objeto é a instância (resultado) de uma classe. Definições de objeto: Um objeto é uma entidade do mundo real. Um objeto é uma entidade de tempo de execução. O objeto é uma entidade que possui estado e comportamento. LINK: https://www.alura.com.br/artigos/como-comparar-objetos-em-java";                       
        imagem.setAttribute("src","img/objeto.png");
        imagem.setAttribute("width","300px");
     

    }

    else if((valor=="Classe") || (valor=="classe") || (valor=="CLASSE")){
        texto.innerHTML = "Classe"; 
        descri.innerHTML = "CLASSES: Uma classe em programação orientada a objetos (POO) é uma estrutura que define o comportamento e as características de um objeto. Ela serve como um modelo ou plano para criar objetos. Em resumo, uma classe contém: 1. Atributos 2. Métodos 3. Construtores 4. Membros 5. Herança 6. Encapsulamento 7. Abstração 8. Polimorfismo. Uma classe serve como um modelo a partir do qual objetos podem ser instanciados. É uma maneira de organizar e estruturar código, promovendo a reutilização e a manutenção do software. LINK: https://www.alura.com.br/artigos/como-comparar-objetos-em-java";
        imagem.setAttribute("src","img/classe.webp");
        imagem.setAttribute("width","300px");
      }
    
    else {
        texto.innerHTML = "Deu ruim... =(";
    }
}
(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();
  