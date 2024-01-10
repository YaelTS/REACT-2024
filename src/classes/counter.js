export class Counter {
    count = 0
    Initialize = (number)=> this.count = number
    Increment = ()=>this.count +=1
    Go = ()=> {for (let index = 0; index < this.count.length; index++) {
        console.log(index)
    }}
} 