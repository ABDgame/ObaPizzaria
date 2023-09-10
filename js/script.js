pizzaJson.map((item,index ) => {
  //console.log(item)

  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
  //console.log(pizzaItem)

  document.querySelector('.pizza-area').append(pizzaItem)

  //preencher os dados de cada pizza
  pizzaItem.querySelector('.pizza-item--img img').src = item.img
  pizzaItem.querySelector('.pizza-item--price').innerHtml = 'R$ ${item.price.
  toFixed(2)}'
  pizzaItem.querySelector('.pizza-item--name').innerHtml = item.name
  pizzaItem.querySelector('.pizza-item--desc').innerHtml = item.description

  //pizza clicada
  pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
      e.preventDefault()
      console.log('Clicou na pizza')
     
      //abrir janela modal
      document.querySelector('.pizzaWindowArea').style.display = 'flex'
      //preenchimento de dados
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHtml = 'R$ ${item.price.toFixed(2)}'
    pizzaItem.querySelector('.pizza-item--name').innerHtml = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHtml = item.description

  })
 document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
   document.querySelector('.pizzaWindowArea').style.display = 'none'
 })
 document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
   document.querySelector('.pizzaWindowArea').style.display = 'none'
 })
})
