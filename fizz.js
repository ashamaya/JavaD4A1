var number=20;

for(i=1;i<=number;i++){
    switch(true){
        case i%15==0:
            console.log("fizzbuzz");
            break;
        case i%3==0:
            console.log("fizz");
            break;
        case i%5==0:
        console.log("buzz");
        break;
        default:
        console.log(i);
    }
}