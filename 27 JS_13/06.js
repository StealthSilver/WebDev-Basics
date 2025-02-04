function savetoDB(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            success("data was saved");
        } else {
            failure("failure: weak connection");
        }
    });
}

savetoDB("pogo")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });