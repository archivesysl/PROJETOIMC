function calcularIMC() {
    // Obtém o valor da altura a partir do input no HTML e converte para número decimal (float)
    const altura = parseFloat(document.getElementById('altura').value);
  
    // Obtém o valor do peso a partir do input no HTML e converte para número decimal (float)
    const peso = parseFloat(document.getElementById('peso').value);
  
    // Verifica se os valores de altura e peso são válidos
    if (!altura || !peso || altura <= 0 || peso <= 0) {
      // Se os valores não forem válidos (ou seja, se forem zero, negativos ou não numéricos),
      // exibe uma mensagem de erro no elemento com id "resultado"
      document.getElementById('resultado').textContent = "Por favor, insira valores válidos.";
      return; // Sai da função sem calcular o IMC
    }
  
    // Calcula o IMC usando a fórmula: IMC = peso / (altura * altura)
    const imc = peso / (altura * altura);
  
    // Variável para armazenar a classificação do IMC
    let classificacao = "";
  
    // Define a classificação com base no valor do IMC calculado
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }
  
    // Exibe o resultado do IMC no elemento com id "resultado"
    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  }

  
  // escolhi fazer ele todo comentado afinal fui fazendo e me virando sozinho, então acho que é importante explicar o que cada parte faz
  // e o que cada variável faz, assim fica mais fácil de entender o código e o que ele faz. :)