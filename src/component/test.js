// const number=[1,2,3]
// number[10]=11;
// console.log(number)
// number[100]=111;
// console.log(number)

const generateOTP =()=>{
    const length =6;
    let otp =""

    for (let i=0;i<length;i++){
        otp+=Math.floor(Math.random()*10)
    }
    return otp;
}
console.log(generateOTP());