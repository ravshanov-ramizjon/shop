const addProductBtn = document.querySelector('.add-product-btn')
const addProductForm = document.querySelector('.add-product-form')
const backBtn = document.querySelector('.back-btn')

addProductBtn.onclick = () => {
    addProductForm.showModal();
}

backBtn.onclick = () => {
    addProductForm.close();
}
