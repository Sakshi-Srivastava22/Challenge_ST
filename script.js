/*TASK 1 (ST class1)
let num1=parseInt(prompt("enter random number"));
console.log(num1);
let random=Math.floor(Math.random()*100);
console.log(random);
if(num1==random)
{
    console.log("equal");
}
else
{
    console.log("not equal");
}
*/
/*TASK 2 (ST class1)
function table(t){
    for(let i=1;i<=10;i++){
        
        console.log(t,"x",i,"=",t*i);
    }
    
    }
    table(2);
*/
/*TASK 3 (ST class1)
let fruit=["apple","mango","kiwi"];
for(value of  fruit)
{   console.log("value at every index of an array");
    console.log(value);
}
*/
/*TASK 4 (ST class1)
function prime_no(num1,num2)
{
for(let i=num1;i<=num2;i++)
{
    let count=1;
    for(let j=2;j<i;j++)
    {
        if(i%j==0 & i>j)
        {
            count++;
        }
    }
    if(count<2)
    {
        console.log(i);
    }
}  
}
prime_no(1,20);
*/
/*TASK 5 (ST class1)
function prime_no(num1,num2)
{
let sum=0;
for(let i=num1;i<=num2;i++)
{
    let count=1;
    for(let j=2;j<i;j++)
    {
        if(i%j==0 & i>j)
        {
            count++;
        }
    }
    if(count<2)
    {
        console.log(i);
        sum+=i;
    }
}
   console.log("sum of prime numbers between",num1,",",num2,"is :",sum);
}
prime_no(1,20);
*/

    
