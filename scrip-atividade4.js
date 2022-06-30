function msg(){
     console.log("E aí, quer namorar comigo?")
}
msg()

function myName(nome){
     console.log(`Bem-vindo(a), ${nome}!`)
 }
  
 myName("ricardo")
 myName("naiury")
 myName("daniel")

 function about(name, age, music){
       console.log(`Meu nome é ${name}, eu tenho ${age} anos e amo ouvir ${music}`)
   }
   about("daniel", 21, "pop")
   about("ricardo", 23, "rock")
   about("joao", 25, "funk")
   about("naiury", 32, "Imagine Dragons")

   function fun(movie, music){
         console.log(`Meu filme favorito é ${movie} e minha música favorita é ${music}`)
     }
     fun("vingadores", "photo")
     fun("a culpa e das estrelas", "imagine dragons")
     
     function calc(triplo){
           return triplo * 3
       }
      
       console.log(calc(11))