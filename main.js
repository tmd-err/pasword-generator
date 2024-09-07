const passwordInput = document.getElementById('password') ;
console.log(length)
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
const numbers = "01234567890" ;
const symbols = "@#$%^&*()_+~{}[]<>/-=" ;

const char = upperCase + lowerCase + symbols + numbers ;

document.getElementById('generate').addEventListener('click',()=>{
const length = Math.floor(Math.random()*(12-8+1)+8) ; 

    let password = "" ; 
        password+=upperCase[Math.floor(Math.random()*upperCase.length)] ;
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)] ;
        password+= numbers[Math.floor(Math.random()*numbers.length)] ;
        password+= symbols[Math.floor(Math.random()*symbols.length)] ;
    while(password.length < length) {
        password+= char[Math.floor(Math.random()*char.length)] ;
    }
    console.log(length)
    passwordInput.value = password ;
})
document.getElementById('copy').addEventListener('click',()=>{
    passwordInput.select() ;
    document.execCommand('copy') ;
    document.getElementById('copiedMsg').textContent ="Copied !"
    setInterval(() => {
        document.getElementById('copiedMsg').textContent =""
    }, 5000);
})
