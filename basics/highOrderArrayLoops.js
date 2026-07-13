const arr = [1,2,3,4,5,6,7,8,9]

for(const num of arr){
    console.log(num)
}

const greeting = "Hello World"
for(const greet of greeting){
    console.log(`Each character in a given string are ${greet}`)
}

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("UK","United Kingdom")
map.set("Fr","France")
map.set("Jp","Japan")
map.set("Ch","China")
map.set("Br","Brazil")
map.set("IN","India")
console.log(map)

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key,"->",value)
}

const myObject={
    'IN':'India',
    'USA':'United States of America',
    'UK':"United Kingdom",
    'Fr':"France",
    'Jp':"Japan",
    "Ch":"China",
    "Br":"Brazil"
}

//for (const [key,value] of myObject){
//    console.log(key,'-',value)
//}

const newObject = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in newObject){
    console.log(`${key} => ${newObject[key]}`)
}

const programming = ["java","c","python"]

for(const key in programming){
    console.log(`${key} => ${programming[key]}`)
}


for(const key in map){
    console.log(key)
}

const coding = ["js","ruby","python","java","cpp"]
coding.forEach((item)=>{
    console.log(item+"1");
})

function printMe(item){
    console.log(item+"2")
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding = [
    {
        language:"Java",
        fileName:"IntellijIDEA2025"
    },
    {
        language:"SQL",
        fileName:"PostgreSQL"
    },
    {
        language:"J.R.X.M.L.",
        fileName:"Tibco JasperSoft Studio"
    },
    {
        language:"Python",
        fileName:"Jupyter Notebook"
    }
]
myCoding.forEach((item)=>{
    console.log(item)
    console.log(item.language)
})