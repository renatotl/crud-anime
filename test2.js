// Noma da minha Class que se chama computador e será  o meu molde
class Computador {
   construtor(parametros){//construtor é exencial para constuirmos as variáveis
    this.marca = parametros.marca
    this.descktop = parametros.descktop
    this.estaCompleto = true
    this.ligado = true
// não usamos LET ou CONST e sim THIS.
   }
   //Nosso método de validação dos campos
   validateComputar() {
    if(!this.marca){// caso não passe na validação, joga um erro na tela tipo um prompt
        throw new Error("PC não tem marca. Tu comprou na China?")
    }
    if(!this.descktop){
        throw new Error("Notebook na Xuxa irmão?")
    }
    if(!this.estaCompleto){
        throw new Error("Comprou na Shopee e veio sem processador né?")
    }
    if(!this.ligado){
        throw new Error("Vamos ligar primeiro o pc né!")
    }
   }
//alterando o estado do computador de ligado ou desligado
   estadoDoComputador(){
    if(this.ligado){
        this.ligado = false
    }else{
        this.ligado = true
    }
   }
   //validando se o computador está completo.
   computadorCompleto(){
    if(this.estaCompleto){
        this.estaCompleto = false
    }else{
        this.estaCompleto = true
    }
   }

   //fazendo todos os métodos funcionárem no nosso molde computador
   preencherComputador(){
    if(!this.estaCompleto){
      this.computadorCompleto()
      this.estadoDoComputador()
    }
   }

   //retornado as informações 
   getComputador() {
    return {
      marca: this.marca,
      descktop: this.descktop,
      estaCompleto: this.estaCompleto,
      ligado: this.ligado,
    };
  }
}
// o new é para alterar as variáveis dentro de nossa class e compudator referindo a nossa class computador
const pc1 = new Computador({
    marca: "BlueEdtech",
    descktop: "descktop",
    // não botamos a variáveis booleanas
})

const pc2 = new Computador({
    marca: "pc da xuxa",
    descktop: "descktop",
    // não botamos a variáveis booleanas
})

const pc3 = new Computador({
    marca: "BlueEdtech",
    descktop: "descktop",
    // não botamos a variáveis booleanas
})

console.log(" \n Class Métodos \n");
// usandos os métodos // validando os campos
pc1.validateComputar()
pc2.validateComputar()
pc3.validateComputar()
//ligado/desligado
pc1.estadoDoComputador()
pc2.estadoDoComputador()
pc3.estadoDoComputador()
//completo ou não
pc1.computadorCompleto()
pc2.computadorCompleto()
pc3.computadorCompleto()
//método que chama outros métodos
pc1.preencherComputador()
pc2.preencherComputador()
pc3.preencherComputador()

//imprimindo os valores na tela
console.log(pc1.getComputador());
console.log(pc2.getComputador());
console.log(pc3.getComputador());