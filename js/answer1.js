//ANSWER FOR QUESTION 1
<script>

let name, side1, side2, side3, form;

name= prompt('Hello, what is your name?')
form= prompt('please enter which Form1 class you are in eg(1F,1L,1M etc)')

alert(`Hello ${name} of ${form} please enter the dimensions of the triangle`)

side1= parseFloat(prompt('please enter the lenght of side1'))

side2= parseFloat(prompt('please enter the lenght of side2'))

side3= parseFloat(prompt('please enter the lenght of side3'))

if(side1 == 0 || side2 == 0 || side3 == 0)
{
	alert(`A valid triangle must have sides greater than 0. 
    This triangle is invalid.`)
}

else if(side1 == side2 && side2 == side3)
{
	
	alert(`Equilateral triangle: An equilateral triangle is a triangle 
    that has three equal sides, thus all sides are equal to each other.
    This is an equilateral triangle.`)
    
}

else if(side1 != side2 && side2 != side3 && side3 != side1)
{
	alert(`Scalene triangle: A scalene triangle is a triangle that has 
    no equal sides thus all sides are not equal to each other. 
    This is a scalene triangle.`)
}

else
{
	alert(`Isosceles triangle: An isosceles triangle is a triangle that has 
    two equal sides, thus any two sides are equal to each other. 
    This is an isosceles triangle.`)
}
</script>



