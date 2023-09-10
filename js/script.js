pizzaJson.map((item,index ) => {
  //console.log(item)

  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
  //console.log(pizzaItem)

  document.querySelector('.pizza-area').append(pizzaItem)

  //preencher os dados de cada pizza
  pizzaItem.querySelector('.pizza-item--img img').src = item.img
  pizzaItem.querySelector('.pizza-item--price').innerHtml = item.price
  pizzaItem.querySelector('.pizza-item--name').innerHtml = item.name
  pizzaItem.querySelector('.pizza-item--desc').innerHtml = item.description


})
