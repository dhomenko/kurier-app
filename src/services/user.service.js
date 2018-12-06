'use stric'

var UserService = {
    getToken: function () {
        var promise = new Promise(function (resolve, reject) {
            // setTimeout(function(){
            //     resolve({token: "43h2fytfj45f234"});
            // },1000)                
            setTimeout(function () {
                reject({ token: "" });
            }, 1000)
        });
        return promise;
    },
    checkLogin: function (login, password) {
        var promise = new Promise(function (resolve, reject) {
            console.log("checkLogin",login,password)
            setTimeout(function(){
                resolve({token: "43h2fytfj45f234"});
            },1000)                
            // setTimeout(function () {
            //     reject({ token: "" });
            // }, 1000)
        });
        return promise;
    }
}

export default UserService;