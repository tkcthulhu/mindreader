```
Things to google:
  -Key value pairs
  -Dictionary object
  -json object
  -How to generate a button
  -How to hide a button

HTML
  *Elements
    -DIV Header text
    -DIV Blue Button
    -DIV Helper text
    -DIV GO/Reset button

JAVASCRIPT

  *I want to create a series of arrays for each value of each element of the page, then based of the state of the page number, I want my object to increment through the values for each element. 

  *Initialize variables

  *Create array of objects for:
    -Pages: 1-6*
      PROPERTIES
        +Header
          -Needs to increment through values for pg 1-6
        +Blue button
          -Needs to be hidden pg 1
          -Show 'NEXT' pg 2-4
          -Show 'REVEAL' pg 5
        +Example text
          -Needs to be hidden pg 1
          -Needs to increment though values for pg 2-6
        +Helper text
          -Needs to be hidden pg 1
          -Needs to increment through values for pg 2-6
        +GO/Reset button
          -Needs to show 'GO' pg 1
          -Needs to show 'reset image' pg 2-6

  *Functions

    GO/reset Button change
      IF page === page 1 -> show 'GO'
      ELSE show 'reset image'

    Blue button change
      IF page === page 5 -> show button w/ 'REVEAL'
      ELSE IF page === page 2 or 3 or 4 -> show button w/ 'NEXT'
      ELSE hide button

    Numbers cycle
      Multiples of 9 need to return '&'
        IF num % 9 === 0
        return '&';

    Create blue button
      Create element of button
      push values to button
      tie function to increment page to button

    Create go/reset button
      create element of button
      push go value/increment function to button if pg=1
      push reset value/reset function to button if pg > 1

    Update Page
      Increments page from 1 through 6
      Update states per page via array?

    Number/emoji Scramble
      create an array of emojis
      create an array shuffler
      create swtich statement that sets all the possibilities of remainders from 9 = a random value from the shuffled emjoi array
      create a for loop that increments 1-81
      return a concatenated string with the numbers = emoji value  
```
