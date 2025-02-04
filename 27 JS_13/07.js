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
    .then(() => {
        console.log("data1 was saved");

        return savetoDB("helloworld");
    })
    .then(() => {
        console.log("data2 saved");
        return savetoDB("hello");
    })
    .then(() => {
        console.log("data3 saved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });

