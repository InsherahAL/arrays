
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


// const user = {
//     firstName : 'Insherah' ,
//      lastName : 'abu-libdeh' , 
//      age : 16 ,
//    isLoggedIn:true,
// signOut : function () {
//     this.isLoggedIn = false
// },
// }
// console.log(user);
// user.signOut()
// console.log(user);

// const users = [{
//     firstName: "Ahmad",
//     lastName: 'kawasmi',
//     userName: 'kirdahi',
//     password: '276609',
//     type: 'admin',
//     age: 12,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// },
// {
//     firstName: "Yousef",
//     lastName: 'Hamouri',
//     type: 'teacher',
//     userName: 'bigJoe',
//     password: '276609',
//     age: 13,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// }, {
//     firstName: "Ibrahim",
//     lastName: 'Sharif',
//     type: 'teacher',
//     userName: 'Abra',
//     password: '276609',
//     age: 10,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// }, {
//     firstName: "Yazeed",
//     lastName: 'Salameh',
//     type: 'student',
//     userName: 'yizzy',
//     password: '276609',
//     age: 8,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// }, {
//     firstName: "Insherah",
//     lastName: 'Abu Libdeh',
//     type: 'student',
//     userName: 'inshallah',
//     password: '276609',
//     age: 8,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// }, {
//     firstName: "Hanin",
//     lastName: 'Farhat',
//     type: 'student',
//     userName: 'hani2005',
//     password: '276609',
//     age: 8,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// }, {
//     firstName: "Khaled",
//     lastName: 'Amro',
//     type: 'student',
//     userName: 'khokho',
//     password: '276609',
//     age: 7,
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// }, {
//     firstName: "Bahaa",
//     lastName: 'Jawabreh',
//     type: 'student',
//     age: 9,
//     userName: 'bobo',
//     password: '276609',
//     isLoggedIn: false,
//     signIn: function () {
//         this.isLoggedIn = true
//     },
//     signOut: function () {
//         this.isLoggedIn = false
//     }
// },
// ]
// console.log(users);
// const findUser = (userName) => {
//     for (let i = 0; i < users.length; i++) {
//        if (users[i].userName == userName) {
//            return  users[i]
//        }
        
//     }
//     return {err:true,msg : ' cannot find user'}
// }
// const signInByUser = (userName,password)=>{
//    const user = findUser(userName)
//    if (user.err) {
//        alert(user.msg)
//        return
//    }
//    else if (user.password == password) {
//        user.signIn()
//        alert('welcome back Mr. '+user.userName)

//    }else{
//        alert('wrong password!')
//    }
  

// }





