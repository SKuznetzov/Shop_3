class Card {
    render(){

        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({id,price,name})=>{
            if (productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                <tr>
                    <td class="card-element__name">💥 ${name}</td>
                    <td class="card-element__price">${price.toLocaleString()} USD</td>
                </tr>
                `
            }
        })
        const html = `
            <div class="card-container">
                <table>
                    ${htmlCatalog}
                </table>
            </div>
            `
        ROOT_CARD.innerHTML = html
    }
}

const cardPage = new Card()