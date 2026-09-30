        function calcularIMC() {

            let peso = Number(document.getElementById('peso').value);
            let altura = Number(document.getElementById('altura').value);
            
            altura = altura / 100;

            let imc = peso / (altura * altura);
            
            let classificacao = "";

            if (imc < 16) {
                classificacao = "Magreza grave";
            }

            else if (imc < 17) {
                classificacao = "Magreza moderada";
            }

            else if (imc < 18.5) {
                classificacao = "Magreza leve";
            }

            else if (imc < 25) {
                classificacao = "Peso normal";
            }

            else if (imc < 30) {
                classificacao = "Sobrepeso";
            }

            else if (imc < 35) {
                classificacao = "Obesidade grau I";
            }

            else if (imc < 40) {
                classificacao = "Obesidade grau II";
            }

            else {
                classificacao = "Obesidade grau III";
            }

            document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2) + "<br>Classificação: "+classificacao;

        }
