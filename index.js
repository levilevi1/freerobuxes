let name = prompt("What's your Username?")
alert("Hello " + name)
const amount = prompt("How many Robux do u want?")
if (amount > 500) {
    alert("Sorry maximum amount of robux is 500")
    const alternative = prompt("How many Robux do u want?")
    alert("Click on the button for your " + alternative + " Robux") 
} else {
    alert("Click on the button for your " + amount + " Robux")
}
