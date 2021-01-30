1. The value of ```i``` is printed without error because it was defined using ```var``` so it doesn't have block scope, meaning it can be accessed from anywhere within the function. (the value should be equal to ```prices.length```).

2. The discounted price of the last item in ```prices``` is printed without error. Again, this is because ```discountedPrice``` was declared using ```var``` so it can be accessed from anywhere within the function.  
(the value would be equal to ```discountedPrice[prices.length-1] * (1-discount)```)

3. The final price of the last item in ```prices``` will be printed without error because ```finalPrice``` is declared using ```var``` so it doesn't have block scope. (the value would equal ```discounted[prices.length-1]```)

4. ```[50, 100, 150]```  
   The for loop in ```discountPrices``` multiplies each item in prices by ```(1-discount)``` to find the discounted price. Then it rounds up in case there are extra decimals, and adds the price to the end of the ```discounted``` array. So in this case, it multiplies each item in ```[100,200,300]``` by ```0.5``` and adds each result to ```discounted```. This results in the array ```[50,100,150]``` which is then returned by the function.

5. This will cause an error because ```i``` was declared within the ```for``` loop using ```let``` so it has block scope and cannot be accessed outside the ```for``` loop.

6. This will also cause an error because ```discountedPrice``` was declared using ```let``` within the ```for``` loop so it has block scope and cannot be accessed outside the ```for``` loop.

7. The final price of the last item in ```prices``` will be printed without error because ```finalPrice``` is declared outside of the loop, so it can be accessed anywhere within the function.

8. ```[50,100,150]```  
   The function would run in pretty much the same way as in question 4. The loop still has access to the ```discounted``` and ```finalPrice``` variables, so the usage of ```let``` doesn't change anything for the calculations in the loop.

9. This causes an error because ```i``` was declared within the ```for``` loop using ```let``` so it has block scope and cannot be accessed outside the ```for``` loop. This is the same as in question 5.

10. This causes an error because ```discountedPrice``` was declared within the ```for``` loop using ```const```, which has the same behavior for scope as ```let```. So it has block scope and cannot be accessed outside the ```for``` loop. 

11. There would be an error in the preceding code when line 7 assigns a new value to ```finalPrice``` because ```finalPrice``` was declared using ```const``` so its initial value of ```0``` cannot be changed.  
Disregarding those errors, this line 13 would have to print a value of ```0``` since ```finalPrice``` is a constant and can't be changed from its initial value.

12. ```[50,100,150]```  
     Assuming any other variable assignments don't throw errors, this would again work the same way as in questions 4 and 8.  
     Even though ```discounted``` is declared with ```const```, there is no error caused by ```discounted.push(finalPrice)``` because it doesn't actually reassign the variable to a new value, it just modifies the current value.

13. a. ```student.name```  
    b. ```student['Grad Year']```  
    c. ```student.greeting()```  
    d. ```student['Favorite Teacher'].name```   
    e.   ```student.courseLoad[0]```

14. a. '32'  
    This is because '3' is a string, so the + is seen as concatenation and 2 is converted to a string.  
    b. 1  
    This is because it is a mathematical expression since the - is subtraction, so '3' is converted to a number.  
    c. 3   
    This is a mathmatical expression since 3 is a number, so null is converted to 0, and 3 + 0 is 3.  
    d. '3null'     
    '3' is a string so + is concatenation, and null is converted to a string as 'null'. Then '3' + 'null' is '3null'.  
    e. 4  
    This is a mathematical expression so true is converted to a number as 1. Then 1 + 3 is 4.  
    f. 0  
    This is a mathematical expression so false and null are both converted to the number 0. Then 0 + 0 is 0.  
    g. '3undefined'  
    "3" is a string so + is concatenation, and undefined is converted to a string as 'undefined'. Then "3" concatenated with 'undefined' is '3undefined'.  
    h. NaN  
    This is a mathematical expression since - is subtraction. So "3" is converted to the number 3. Then undefined is converted to the value NaN. Then the mathematical operation fails since NaN is not a valid number that can be subtracted, so the result is also NaN.   

15. a. true  
    '2' and 1 are different types so '2' is converted to the number 2. 2 is greater than 1, so the statement evaluates to true.   
    b. false  
    Since '2' and '12' are both the same type (string), no type conversion is necessary. '2' is greater than '12' using lexographical ordering (since '2' is greater than '1'), so the statement is false.  
    c. true  
    2 and '2' are different types, so '2' is converted to the number 2, which is equal to 2, so the statement is true.  
    d. false  
    === is the strict equality operator, so the statement evaluates as false because 2 and '2' are different types.   
    e. false  
    true and 2 are different types, so true is converted to the number 1. Then 1 and 2 are not equal, so the statement is false.  
    f. true  
    Boolean(2) converts 2 to the boolean true (any number other than 0 is converted to true). Then both values are the same type and true is equal to true, so the statement is true.

16. The main difference is that the == operator is a non-strict equality operator, so when comparing two values of different types, both values are converted to numbers before the comparison. The === operator is a strict equality check, so if the two values are different types, it returns false no matter what.

17. How are you?  
    This is printed because in ```2 == true``` the true is converted to the number 1 since they are different types. 2 is not equal to 1, so the statement evaluates as false, and the first if block does not run. Then it checks the else if, which has ```2``` as its conditional statement. The 2 is converted to a boolean value of true, so the else if block executes, printing 'How are you?' and then ignoring the line in the else block.

18. see [part1-question18.js](part1-question18.js)

19. ```[6,8,10]```   
    Essentially, ```modifyArray``` will go through each value in ```[1,2,3]``` and call the callback function, ```doSomething```, on each value in ```[1,2,3]```. When it calls ```doSomething```, it passes in ```function(x) { return x * 2; }``` as the callback for ```doSomething```.  
    So, each value in ```[1,2,3]``` will be added with 2, and then the result is multiplied by 2 before being added into ```newArr```. 

20. see [part1-question20.js](part1-question20.js)

21. 1  
    3  
    4  
    2
    
    (because the console.log(2) is delayed by 1 second)

