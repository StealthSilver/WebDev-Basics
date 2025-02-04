let url = "https://catfact.ninja/fact"

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log("data 1 = ", data);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2  = ", data2)
    })
    .catch((err) => {
        console.log("Error - ", err);
    });

console.log("they are async the code will go ahead and will not wait for them")