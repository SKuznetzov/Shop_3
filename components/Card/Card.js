class Card {
    handleClear(){
        ROOT_CARD.innerHTML = ''
    }
    render(){

        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0

        CATALOG.forEach(({id,price,name})=>{
            if (productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                <tr>
                    <td class="card-element__name">💥 ${name}</td>
                    <td class="card-element__price">${price.toLocaleString()} USD</td>
                </tr>
                `
                sumCatalog += price
            }
        })
        const html = `
            <div class="card-container">
                <div class="card__close" onClick="cardPage.handleClear()">X</div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="card-element__name">💥 Сумма:</td>
                        <td class="card-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
            `
        ROOT_CARD.innerHTML = html
    }
}

const cardPage = new Card()