document.addEventListener('DOMContentLoaded'), function(evento) {
    evento.preventDefault();
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('reultado-valor').innerHTML = numeroAleatorio;
        document.querySelector('resultado').computedStyleMap.diplay = 'block';
    })
}