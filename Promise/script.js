
const fetch = require('node-fetch');

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("The task is done");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("The task is done 2nd task");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise consumed second time");
});

//............Sending Data through resolve() methos.................

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Ram", userID:123});
  }, 3000);
}).then((user)=>{
   console.log(user.username);
});


//.................Promise chaining>>>>>>>>

new Promise(function (resolve, reject) {
    setTimeout(() => {

        let error=true;
        if(!error){
            resolve({username:"Ram",id:1234})
        }
        else{
            reject(
                'Error:something went worng'
            )
        }
       resolve(
        { username: "Ram", userID:123}
       )
  
    }, 3000);
  }).then((user)=>{
     return(user.username);
  }).then((username1)=>{
    console.log(username1);
  })
  .catch((error)=>{
    console.log(error);
  }).finally(()=>{
    console.log("promise is done with it's work now take rest")
  }
  );
  


  // *********** Handling data using async await***********

  const promisefive=new Promise(function(resolve,reject){
        let error=true;
        if(!error){
            resolve({
                name:"JavaScript",
                Nolang:1234
            })
        }else{
            reject('Error:something is worng with JS')
        }
    
    });
// you should use try catch when you are dealing with async await
    async function handlepromise(){
        try {
            const handlefive=await promisefive;
        console.log(handlefive)
        } catch (error) {
            console.log(error);
        }
    }


    handlepromise();



    // fetch handling

    // async function getallpost(){
    //  try {
    //     await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const data= await response.json();   // beacuse it's takes time to convert the data in json format
    //     console.log(data)
    //  } catch (error) {
    //     console.log(error);
    //  }
    // }

    // getallpost();


//     async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))