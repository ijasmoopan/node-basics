function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = true;
            if (success) {
                resolve("success");
            }
            else {
                reject("error");
            }
        }, 2000);
    });
}
fetchData()
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
