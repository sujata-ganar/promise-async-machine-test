let cl = console.log ;

const hrcall = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.5 ? false : true ;
            if(!error){
                resolve('candidate is shortlisted successfully')
            }else{
                reject("looking for another candidate")
            }
            
        },1500)
    })
}

const firsttechinter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.5 ? false : true ;
            if(!error){
                resolve('candidate is shortlisted for 2nd tech interview')
            }else{
                reject("candidate is weak in basics")
            }
            
        },1500)
        
    })
}

const secondtechinter = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.5 ? false : true ;
            if(!error){
                resolve('candidate is shortlisted for 3rd tech interview')
            }else{
                reject("candidate is struggling to write code")
            }
            
        },1500)
        
    })

} 

const mground = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.5 ? false : true ;
            if(!error){
                resolve('candidate is selected')
            }else{
                reject("candidate is rejected")
            }
            
        },1500)
        
    })

}



hrcall()
.then(res => {
    cl(res)
    return firsttechinter()
})
.then(res =>{
    cl(res)
    return secondtechinter()
})
.then(res =>{
    cl(res)
   return mground()
})
.then(res =>{
    cl(res)
})
.catch(err => {
    cl(err)
})