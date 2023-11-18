
export function getUser() {
    const userJSON = localStorage.getItem('currUser');
    return JSON.parse(userJSON) || userData;
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