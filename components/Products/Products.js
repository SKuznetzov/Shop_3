class Products {
    constructor(){
        this.classNameActive = 'products-element__btn_active'
        this.labelAdd = 'В корзину'
        this.labelRemove = 'Удалить из корзины'
    }
    handleSetLocationStorage(el,id){
        const {pushProduct,products} = localStorageUtil.putProducts(id)
        if (pushProduct) {
            el.classList.add(this.classNameActive)
            el.innerHTML = this.labelRemove
        } else {
            el.classList.remove(this.classNameActive)
            el.innerHTML = this.labelAdd
        }
    }
    render(){
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({id,price,img,name})=>{
            let activeClass = ''
            let activeText = ''

            if (productsStore.indexOf(id) === -1){
                activeText = this.labelAdd
            } else {
                activeClass = ' '+this.classNameActive
                activeText = this.labelRemove
            }
            htmlCatalog +=`
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" />
                <span class="products-element__price">💥 ${price.toLocaleString()} usd</span>
                <button class="products-element__btn${activeClass}"
                onClick="productsPage.handleSetLocationStorage(this,'${id}')">
                ${activeText}
                </button>
            </li>`
        })
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
productsPage.render()