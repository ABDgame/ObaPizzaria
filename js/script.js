//funçoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const abrirModal = () => {
  seleciona('.pizzaWindowArea').style.opacity = 0
  seleciona('.pizzaWindowArea').style.display = 'flex'
  setTimeout(() => {
      seleciona('.pizzaWindowArea').style.opacity = 1
  }, 150)
}
const fecharModal = () => {
  seleciona('.pizzaWindowArea').style.opacity = 0
  setTimeout(() => {
      seleciona('.pizzaWindowArea').style.opacity = 1
  }, 500)
}
const botoesFechar = () => {
  // BOTÕES FECHAR MODAL
  selecionaTodos('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach(item) => {
    item.addEventListener('click', fecharModal)
  })
}
//MAPEAR pizzaJson para gerar lista de pizzas

pizzaJson.map((item,index ) => {
  //console.log(item)

  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
  //console.log(pizzaItem)
  //document.querySelector('.pizza-area').append(pizzaItem)
  seleciona('.pizza-area').append(pizzaItem)


  //preencher os dados de cada pizza
  pizzaItem.querySelector('.pizza-item--img img').src = item.img
  pizzaItem.querySelector('.pizza-item--price').innerHtml = 'R$ ${item.price.toFixed(2)}'
  pizzaItem.querySelector('.pizza-item--name').innerHtml = item.name
  pizzaItem.querySelector('.pizza-item--desc').innerHtml = item.description

  //pizza clicada
  pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
      e.preventDefault()
      console.log('Clicou na pizza')
     
      //abrir janela modal
      //document.querySelector('.pizzaWindowArea').style.display = 'flex'
      //preenchimento de dados
    //document.querySelector('.pizzaBig img').src = item.img
    //document.querySelector('.pizzaInfo h1').innerHTML = item.name
    //document.querySelector('.pizzaInfo--desc').innerHTML = item.description
    //document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
    seleciona('.pizzaBig img').src = item.img
    seleciona('.pizzaInfo h1').innerHTML = item.name
    seleciona('.pizzaInfo--desc').innerHTML = item.description
    seleciona('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
 })
 document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
   document.querySelector('.pizzaWindowArea').style.display = 'none'
 })
 document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
   document.querySelector('.pizzaWindowArea').style.display = 'none'
 })
})
