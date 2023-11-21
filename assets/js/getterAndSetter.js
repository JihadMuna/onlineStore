
export function getUser() {
    const userJSON = localStorage.getItem('currUser');
    return JSON.parse(userJSON) || [];
}
  
export function updateUser(currUser) {
    const userJSON = JSON.stringify(currUser);
    localStorage.setItem('currUser', userJSON);
 }


 export function getSpecificPerfume() {
    const perfumeJSON = localStorage.getItem('perfume');
    return JSON.parse(perfumeJSON) || [];
}
  
export function updateSpecificPerfume(specificPerfume) {
    const perfumeJSON = JSON.stringify(specificPerfume);
    localStorage.setItem('perfume', perfumeJSON);
 }

 export function getAllPerfume() {
    const perfumeJSON = localStorage.getItem('perfumes');
    return JSON.parse(perfumeJSON) || [];
}
  
export function updatePerfumeArr(perfumes) {
    const perfumeJSON = JSON.stringify(perfumes);
    localStorage.setItem('perfumes', perfumeJSON);
 }



export function getCart() {
    const cartJSON = localStorage.getItem('carts');
    return JSON.parse(cartJSON) || [];
}


export function updateCart(cart) {
    const carts = getCart();
    const findIndex = carts.findIndex(c => c.id == cart.id);
    if(findIndex == -1)
    {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('carts', cartJSON);
    }  
  
  }
 
 export function getPastOrders() {
    const orderJSON = localStorage.getItem('orders');
    return JSON.parse(orderJSON) || [];
}
  
export function updateOrders(order) {
    const orderJSON = JSON.stringify(order);
    localStorage.setItem('orders', orderJSON);
 }


 export function getNumOrders() {
    const orderNumJSON = localStorage.getItem('orderNum');
    return parseInt(orderNumJSON) || 0;
}
  
export function updateNumOrder(order) {
    const orderNumJSON = order;
    localStorage.setItem('orderNum', parseInt(orderNumJSON));
 }