import React from 'react'

const DetailsPresentational = (
  { dish, addControl, onCancel, price, numberOfGuests, inMenu }) => {

    const [addAction, addMessage] = addControl;
    const [cancelAction, cancelMessage] = onCancel;

    const h = React.createElement;

  return (
    h("div", {id: "details", className: "mainContent debug"},
      h("img", {src: dish.image, alt:""}),
        h("div", {},
          h("button", {onClick: () => cancelAction()}, cancelMessage),
          h("button", {onClick: () => addAction(dish), disabled: inMenu}, addMessage)
        ),
        h("p", {}, "Dish type: ", h("span", {}, dish.dishTypes[0])),
        h("p", {}, "Dish title: ", h("span", {}, dish.title)),
        h("p", {}, "Dish price: ", h("span", {}, price * numberOfGuests)),
        h("p", {}, "Recipee:"),
        h("ol", {}, dish.analyzedInstructions.length !== 0 ?
          dish.analyzedInstructions[0].steps.map(i => h("li", {key: i.number}, i.step)) : "-"),
        h("a", {href: dish.sourceUrl}, "More details"),
        h("p", {}, "Ingredients: ",
          dish.extendedIngredients.map((i, index) => h("span", {key: index}, i.name + ", ")))
    )
  )

}

export default DetailsPresentational
