
  function calculo() {
    var armazem = Number(input_areaArmazem.value);
    var lucro = Number(input_lucroMensal.value);
    var qtdVinho = Number(input_mediaVinho.value);
    var servidor = input_vefServidor.value;
    var vfArmazem = armazem * 5;
    var perda = lucro * 0.2;
    var perda2 = perda - perda * 0.85;
    var parteLucro = lucro * 0.05;
    var qtdSensor = armazem / 5;
    var orcamento =
      parteLucro +
      vfArmazem +
      500 +
      60 +
      3000 +
      200 +
      qtdSensor * 20 +
      1500 +
      10000;

    if (servidor == `Sim`) {
      div_calculator.innerHTML = `

    Agradecemos por escolher a <b . class= textoRoxo> GrapeTec </b>  para resolver os seus desafios. Com base nos dados obtidos a partir do questionário, observamos o seguinte: <br><br>

    - A vinícola possui um armazém de tamanho: <u>${armazem}m² </u>. <br>
    - A produção anual é de ${qtdVinho} Litros. <br>
    - O lucro atual é de <b . class= textoVerde> R$${lucro} </b>. <br>
    - No entanto, notamos que há uma perda de <b . class= textoVermelho > R$${perda} </b>. <br><br>

    Com a nossa solução que ficaria no valor de <b . class = textoAzul> ${orcamento} </b>:. Acreditamos que podemos melhorar a eficiência e reduzir essa perda para <b . class= textoVerde> R$${perda2} </b>. 
    Estamos comprometidos em ajudá-lo a otimizar sua operação e maximizar seus resultados. Obrigado por confiar na <b . class= textoRoxo> GrapeTec </b> ."


    
    `;
    } else {
      div_calculator.innerHTML = `

    Agradecemos por escolher a <b . class= textoRoxo> GrapeTec </b>  para resolver os seus desafios. Com base nos dados obtidos a partir do questionário, observamos o seguinte: <br><br>

    - A vinícola possui um armazém de tamanho: <u>${armazem}m²</u>. <br>
    - A produção anual é de ${qtdVinho} Litros. <br>
    - O lucro atual é de <b . class= textoVerde> R$${lucro} </b>. <br>
    - No entanto, notamos que há uma perda de <b . class= textoVermelho > R$${perda} </b>. <br><br>

    Com a nossa solução que ficaria no valor de <b . class = textoAzul> ${orcamento + 5000} </b>:. Acreditamos que podemos melhorar a eficiência e reduzir essa perda para <b . class= textoVerde> R$${perda2} </b>. 
    Estamos comprometidos em ajudá-lo a otimizar sua operação e maximizar seus resultados. Obrigado por confiar na <b . class= textoRoxo> GrapeTec </b> ."  `;
    }
  }


   //Instalação: R$ 200,00

//Valor por sensor: R$20,00

//Valor Arduino: R$60,00

//Mão de obra: R$500,00

//Computador: R$ 3.000,00

//Painel de controle: 1.500,00

//Manutenção - Mão de obra: R$200,00 + reposição de peças

//Software: R$10.000,00 
