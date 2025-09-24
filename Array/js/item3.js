var frutas=[]

do{
    frutas.push(prompt("Digite o nome de uma fruta: ")) 
}while(confirm("Deseja adicionar outra fruta?"))

for(i=0; i<frutas.length; i++){
    document.write("<h2>"+frutas[i]+"</h2>")
}




