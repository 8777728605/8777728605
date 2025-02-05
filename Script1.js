const user ={
    username :'Mohit',
    price :1000,

    welcomeMesssage: function(){
        console.log('${this.username},welcome to website');
         console.log(this);
         
        
    }
}
// user.welcomeMesssage()
// user.username ='shiv'
// user.welcomeMesssage()
// console.log(this);

function chai(){
    console.log(this);
    
}
chai()
let username='mohit'
console.log(this.username);
