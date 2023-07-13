const data = {title:"Naked", artist:[{name:"James Arthur"}], duration:"200"}

const bool = true;
const wait = new Promise((resolve, reject) => {
    if (bool) {
        resolve(data)
    } else {
        reject("There is something error!")
    }
})

// wait
//     .then((resolve) => console.log(resolve))
//     .catch((error) => console.log(error))

