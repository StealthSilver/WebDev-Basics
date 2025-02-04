function savetoDB(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            success("success : data was saved");
        } else {
            failure("failure : weak connection");
        }
    });
}


savetoDB("pogo")
    .then((result) => {
        console.log("data1 was saved");
        console.log("result of promise", result);

        return savetoDB("helloworld");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise", result);
        return savetoDB("hello");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise ", error);
    });

