
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