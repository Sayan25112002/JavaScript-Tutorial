for(let i=0;i<10;i++){
    const element=i
    if(element%2==0){
        console.log(`${element} is an even number`)
    }
    else if(element==5){
        console.log(`${element} is an even odd number`)
    }
    else{
        console.log(`${element} is an odd number`)
    }
}

for(let i=0;i<10;i++){
    console.log(`Outer loop : ${i}`)
    for(let j=0;j<10;j++){
        console.log(`Inner Loop ${j}`)
        console.log(`${i}*${j}=${i*j}`)
    }
}

let array = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
for(let i=0;i<array.length;i++){
    const element = array[i]
    console.log(element)
}

for (let index = 1; index < 10; index++) {
    if(index==5){
        console.log(`Detected ${index}. PROCESSING ENDS`)
        break
    }
    console.log(`${index} continue processing`)
}

for (let index = 1; index < 10; index++) {
    if(index==5){
        console.log(`Detected ${index}. SKIP PROCESSING`)
        continue
    }
    console.log(`${index} continue processing`)
}

//WHILE LOOP
let index=0
while(index<=10){
    console.log(`Value of index is ${index}`)
    index=index+2
}

let whileArr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let arr=0
while(arr<whileArr.length){
    console.log(`Value is ${whileArr[arr]}`)
    arr=arr+2
}

//DO WHILE LOOP
let index1=0
do{
    console.log(`Value is ${index1}`)
    index1++
}while(index1<10)