const num = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const values = num.forEach((item)=>{
    console.log(item)
})

console.log(values)

const newNum = num.filter((num)=>(num>5))
console.log(newNum)

const blockNewNum = num.filter((num)=>{
    return num>5
})
console.log(blockNewNum)

const myNewNum=[]

num.forEach((num)=>{
    if(num>5){
        myNewNum.push(num)
    }
})
console.log(myNewNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
console.log(books)

const userBooks = books.filter(
    (bk)=>bk.genre==='History'
)
console.log(userBooks)

const userBooks1 = books.filter(
    (bk)=>{return bk.publish>=1995 && bk.genre==="History"}
)
console.log(userBooks1)

const newNumber = num.map((n)=>n+10)
console.log(newNumber)

const newNumber1 = num
                    .map((n)=>n*10)
                    .map((n)=>n+10)
                    .filter((n)=>n>=50)
console.log(newNumber1)

const num2=[0,1,2,3,4,5,6,7,8,9]

const myTotal = num2.reduce(function(acc,currVal){
    console.log(`acc:${acc},curr:${currVal}`)
    {return acc+currVal}
},0)
console.log(myTotal)

const shoppingCart=[
    {
        itemName:"Java Course",
        price:3000
    },
    {
        itemName:"Python Course",
        price:3000
    },
]
const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)