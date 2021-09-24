class Products {
    render(){
        let htmlCatalog = ''

        CATALOG.forEach(({id,price,img,name})=>{
            htmlCatalog +=`
            <li>
                <span>${name}</span>
                <img src="${img}" />
                <span>${price}</span>
                <button>В корзину</button>
            </li>`
        })
        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
productsPage.render()