
function getRandom() {
let length = 16;
let password = "";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numer = "0123456789";
let smber = "!@#$%*?/~|";
let allcare = upper + lower +  numer + smber;

    for(let i =  0; i < length; i++){
        let order = Math.floor(Math.random() * 4); //0, 1, 2, or 3
        switch (order) {
            case 0:
                careset = upper;
                break;
        
            case 1:
                careset = lower;
                break;

            case 2:
                careset = numer;
                break;

            case 3:
                careset = smber;
                break;
                
        }
        let passRandom = careset[Math.floor(Math.random() * careset.length)];
        password += passRandom;
    }

    
    
    console.log(document.getElementById("textbox").value = password);
}