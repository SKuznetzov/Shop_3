class Card {
    render(){

        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({id,price,name})=>{
            if (productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                <tr>
                    <td>💥 ${name}</td>
                    <td>${price.toLocaleString()} USD</td>
                </tr>
                `
            }
        })
        const html = `
            <div>
                <table>
                    ${htmlCatalog}
                </table>
            </div>
            `
        ROOT_CARD.innerHTML = html
    }
}

const cardPage = new Card()