//ANSWER FOR QUESTION 2

<script>
let year, month,  day, leapyear, number ;
year= parseInt(prompt('Please enter a year'))
month= parseInt(prompt('Please enter a month'))
day= parseInt(prompt('please enter a day'))

if(day > 31 || day == 0)
{
	alert('This Date is Invalid')
}

else if( month > 12 || month == 0)
{
	alert('This Date is Invalid')
}

else if(month == 2 && day == 29)
{
	leapyear= year/4
    	number= 1
    if(leapyear % number == 0)
    {
    alert('Date is Valid')
    }
    
    else
    {
    alert('Date is Invalid')
    }
}

else if (month == 4 || month == 6 || month == 9 || month == 11)
{
    if(day > 30)
    {
    	alert('This date is invalid')
    }
}

else
{
	alert('This is a Valid Date')
}