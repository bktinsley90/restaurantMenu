function rockNRoll(){
    let d20 = Math.floor(Math.random() * 20 + 1);
    let msg = "";

if (d20 >= 15){
    msg= "Nice"
} else {
    msg="oof"
}
alert(`You rolled ${d20} ${msg}`)

}