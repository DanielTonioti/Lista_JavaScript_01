function ordem() {
    let num01 = Math.floor(Math.random() *100);
    let num02 = Math.floor(Math.random() *100);
    if (num01 > num02) {
        console.log(num02, num01);
    }else{
        console.log(num01, num02);
    }
}