function savetoDB(data, success, faliure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        success();

    } else {
        faliure();
    }
}

savetoDB("pogo", () => {
    console.log("your data was saved");
    savetoDB("hello world", () => {
        console.log("Success2: data2 was saved");
    }, () => {
        savetoDB("pogo", () => {
            console.log("data saved to DB");
            console.log("faliure 3: weak connection")
        })
    }, () => {
        console.log("faliure2 : weak connection")
    })
},
    () => {
        console.log("weak connection. data not saved");

    });

