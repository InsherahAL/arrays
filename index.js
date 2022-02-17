
//     const arr1 = ['lily' ,'Insherah', 'haneen']
//     const sayHello = function (Arr) {
//         for (let i = 0; i < Arr.length; i++) {
//             console.log('hello', Arr[i]);
            
//         }
//     }
// sayHello(arr1)
// sayHello(['may'])

// const formatArr = function (arr) {
//     for (let i= 0; i < arr.length; i++) {
//        arr[i] = 'hello ' + arr[i]
    
//     }
// }
// formatArr(arr1)
// console.log(arr1);

// const arr1 = ['lily' ,'Insherah', 'haneen']

// const capitalize = function (arr) {
 
//     for (let i = 0; i < arr.length; i++) {

           
//              arr[i] = arr[i].toUpperCase()
        
      
       
//     }
// }
// capitalize(arr1)
// console.log(arr1);
// const arr1 = ['lily',' Insherah', 'haneen']

// const capitalize = function (arr) {
// for (let i = 0; i < arr.length; i++) {
//   arr[i]=arr[i].split('')
//   arr[i][0]=arr[i][0].toUpperCase()
//   arr[i]= arr[i].join('')
// }
// }
// capitalize(arr1)
// console.log(arr1);


// let arr = 'asd,asd,asd,asd'
// let arr = str.split(' ')
// console.log(
//     arr[0].split
// );
// const arr1 = ['insherah','lily','haneen','clara']
// console.log(arr1);
// arr1.push('muna')
// arr1.push('lea')
// console.log(arr1);
// arr1.splice(3,1,'suad','sameera')
// console.log(arr1);
// const newArr = arr1.slice(4,arr1.length)
// console.log(arr1);
// console.log(newArr);

// const user = {
//      firstName : 'Insherah' ,
//       lastName : 'abu-libdeh' , 
//       age : 16 ,
//     isLoggedIn:false ,
//  signIn : function () {
//      this.isLoggedIn =true
//  },
// }
// user.mobileNO = '7456023754'
// const newUser = user
// console.log(user);
// user.signIn()
// console.log(user);


const user = {
    firstName : 'Insherah' ,
     lastName : 'abu-libdeh' , 
     age : 16 ,
   isLoggedIn:true,
signOut : function () {
    this.isLoggedIn = false
},
}
console.log(user);
user.signOut()
console.log(user);
