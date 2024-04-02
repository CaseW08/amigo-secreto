let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Você já adicionou esse amigo!');
    } else if (nomeAmigo == '') {
        alert('Preencha o nome do amigo!');
    } else {
        listaAmigos.push(nomeAmigo);
        document.getElementById('lista-amigos').textContent = listaAmigos;
    }
    
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    
    if (listaAmigos.length < 4) {
        alert('O número mínimo de 4 participantes não foi atingido. Adicione mais pessoas!');
    } else {
        embaralha(listaAmigos);

        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < listaAmigos.length; i++) {
        
        if(i == listaAmigos.length - 1) {

            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';

        } else {
            
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';

        }
    
    }
    }
    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML ='';
    listaAmigos = [];

}