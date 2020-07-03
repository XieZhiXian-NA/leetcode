let promisefy = (fn)=>(...args)=>new Promise((resolve,reject)=>{
    try {
        let data = fn(...args)
        console.log('fhwifwehf')
         resolve(data)
    } catch (error) {
        reject(error)
    }
})
function lala(name){
    console.log(name)
    return name
}
const promise1 =  promisefy(lala)

const promise2 = promisefy(lala)

function *gen(){
   let re = yield promise1('xzx')
   console.log('re',re)
   let r = yield promise2('fzt')
   return r
}

function co(it){
    return new Promise((resolve,reject)=>{
        function next(data){
            let {value,done} = it.next(data)
            if(!done){
                value.then(data=>{
                    next(data)
                },reject)
            }else resolve(value)
        }
        next()
    })
}
co(gen()).then(data=>{
    console.log('gen',data)
})
 
// async await
// await 是primise.then()语法糖