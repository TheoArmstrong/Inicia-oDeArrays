lista=["Gervronilson", " Estrada A ", " Linha B", 1880, 18.5, true]

alert(lista)

/** Exibir elementos da lista usando laço de repetição e inserir dados no HTML */

for(i=0; i<lista.length; i++){
    document.write("<h2>"+lista[i]+"</h2>")
}
/**Adicionar elemnetos no fim da lista */
lista.push("84500-600")
alert(lista)

/**remover o ultimo elemento */
lista.pop()
alert(lista)

/**remover o primeiro elemento da lista */
lista.shift()
alert(lista)    

/**adicionar primeiro elemento na lista */
lista.unshift("Gervronisio")
alert(lista)