pizzaJson.map((item,index ) => {
  //console.log(item)

  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
  //console.log(pizzaItem)

  document.querySelector('.pizza-area').append(pizzaItem)

  //preencher os dados de cada pizza
  pizzaItem.querySelector('.pizza-item--img ')




})
