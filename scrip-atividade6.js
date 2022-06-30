let pessoas = [
  {
      nome: "Ricardo", 
      idade: 21, 
      amigos: ["Daniel", "Naiury"] 
  },
]
console.log(pessoas)

pessoas.genero = "masculino"
console.log(pessoas)

delete pessoas[0].amigos
console.log(pessoas)

const cadastro = [
  {
      nome: "Ricardo", 
      idade: 21, 
      telefone:234252352,
      amigos: ["Daniel", "Naiury","ricardo","samuel","davi"] 
  },
  {
      nome: "Ricardo", 
      idade: 21, 
      telefone:234252352,
      amigos: ["Daniel", "Naiury","ricardo","samuel","davi"] 
  },
  {
      nome: "Ricardo", 
      idade: 21, 
      telefone:234252352,
      amigos: ["Daniel", "Naiury","ricardo","samuel","davi"] 
  },
  {
      nome: "Ricardo", 
      idade: 21, 
      telefone:234252352,
      amigos: ["Daniel", "Naiury","ricardo","samuel","davi"] 
  },
  {
      nome: "Ricardo", 
      idade: 21, 
      telefone:234252352,
      amigos: ["Daniel", "Naiury","ricardo","samuel","davi"] 
  },
]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[4])