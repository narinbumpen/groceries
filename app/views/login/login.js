var Observable = require("data/observable").Observable;
var frameModule = require("ui/frame");
//const fetch=require('fetch');
var page 

var login = new Observable({
    email: "",
    pass: "",
});

exports.pageLoad = function(args) {  
    page = args.object;
    page.bindingContext = login;
};

// exports.checkLogin = ()=>{
//     fetch('').then((res)=>{
//         console.log('OK')
//     }).catch((err)=>{
//         console.log('error')
//         console.dump(err)
//     })
//     console.log('test')
// }
    exports.checkLogin = ()=>{
        fetch('http://192.168.8.179:3000/login', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({    
                email: login.email,    
                pass: login.pass, 
            })
        }).then((res)=> {  
            return res.json()
        }).then((data)=> {  
            console.log('OK')
            console.dump(data)
        }).catch((err)=> {
            console.log('error')
        })
            console.log('test')
    };
exports.goRegister = function(){
    var topmost = frameModule.topmost();    
    topmost.navigate("views/register/register");
};

