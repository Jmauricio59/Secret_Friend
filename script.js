document.getElementById('agregar').addEventListener('click', function() {
    let nombre = document.getElementById('nombre').value.trim();
    if (nombre) {
        let lista = document.getElementById('lista-nombres');
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
        document.getElementById('nombre').value = '';
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
});

document.getElementById('sortear').addEventListener('click', function() {
    let nombres = document.querySelectorAll('#lista-nombres li');
    let resultado = document.getElementById('resultado');
    let lista = document.getElementById('lista-nombres');
    
    if (nombres.length > 1) {
        let index = Math.floor(Math.random() * nombres.length);
        let seleccionado = nombres[index].textContent;
        
        resultado.textContent = `El amigo secreto sorteado es: ${seleccionado}`;
        resultado.classList.remove('hidden');
        
        lista.innerHTML = ''; // Elimina los nombres ingresados
    } else {
        alert('Debe agregar al menos dos nombres para sortear.');
    }
});