/*Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use
the typeof operator to check different data types.*/
 
let firstname="sakshi"
let lastname="mawar"
let country="India" 
let city="Indore"
let age=20;
let isMarried='false'
let year=2021;

console.log(firstname,lastname,country,city,age,isMarried,year)

let info=`I am ${firstname} ${lastname}. I live in ${city} ${country}. I am ${age} year old. `
console.log(info)

console.log( typeof (firstname) ,typeof(lastname), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year))

//Check if type of '10' is equal to 10

console.log(typeof'10')
console.log(typeof 10)

//Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') ==10)

console.log(typeof parseInt('9.8'))
//
//Write three JavaScript statements which provide truthy value.
x=9
y=6


console.log(x>y)
console.log(y<x)
console.log(x!=y)
console.log(x>=y)



//Write three JavaScript statements which provide falsy value.

a=3
b=5

console.log(a==b)
console.log(a>b)
console.log(a>=b)
console.log(b<a)

/*Figure out the result of the following comparison expression first without using console.log(). After
you decide the result confirm it using console.log()
o 4 > 3
ture
o 4 >= 3
true
o 4 < 3
false
o 4 <= 3
false
o 4 == 4
true
o 4 === 4
true
o 4 != 4
false
o 4 !== 4
false
o 4 != '4'
true
o 4 == '4'
false
o 4 === '4'
false
*/


console.log( 4 > 3)
console.log(4 >= 3)
console.log( 4 < 3)
console.log(4 <= 3)
console.log( 4 == 4)
console.log( 4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log (4 === '4')


//Find the length of python and jargon and make a falsy comparison statement.

let str="python".length
console.log(str)

let str2="jargon".length
console.log(str2)

console.log(str != str2)

/*Figure out the result of the following expressions first without using console.log(). After you decide the
result confirm it by using console.log()
o 4 > 3 && 10 < 12
true
o 4 > 3 && 10 > 12
false
o 4 > 3 || 10 < 12
true
o 4 > 3 || 10 > 12
true
o !(4 > 3)
false

o !(4 < 3)
o !(false)
o !(4 > 3 && 10 < 12)
false
o !(4 > 3 && 10 > 12)
true
o !(4 === '4')
true
o There is no 'on' in both dragon and python*/

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log( 4 > 3 || 10 > 12)
console.log( !(4 > 3))
console.log (!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a
triangle (area = 0.5 x b x h).
o Enter base: 20
o Enter height: 10
o The area of the triangle is 50*/


//If the length of your name is greater than 7 say, your name is long else say your name is short.

let name="sakshi".length

console.log(name)

if (name >=7){
    console.log("your name is long")
}
else{
    console.log("your name is short")
}

//Compare your first name length and your family name length and you should get this output.
let yourname = 'sakshi'.length
let familyName = 'mawar'.length

console.log(yourname)
console.log(familyName)

console.log(yourname==familyName)

/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if
not tell the user to wait a certain amount of years*/

let yourage= prompt("Enter your birth year","birth year")

if (yourage<=2003){
    console.log("you are allow to drive")
}
else{
    console.log("wait a certain amount of year")
}

//






