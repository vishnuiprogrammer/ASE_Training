document.cookie = "mobile=android";
document.cookie = "watch=boat";

console.log(document.cookie);


//  cookie values are visible to, and can be changed by, the end user.


// cookie + security -> Sent to server 
// cookie + http !-> Not sent to server  (cause man in middle attack)
// cookie + http + localhost -> sent to server


const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");


document.cookie = "name=Oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
    output.textContent = `> ${document.cookie}`;
});
clearBtn.addEventListener("click", () => {
    output.textContent = "";
});