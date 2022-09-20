```
HTML
  *Elements
    -DIV Header text
    -DIV Blue Button
    -DIV Helper text
    -DIV GO/Reset button

JAVASCRIPT
  *Initialize variables
    -Header text = []
    -Blue button text/state = []
    -Example text/state
    -Helper text/state = []
    -GO/Reset text/state = []

  *Create objects for:
    -Pages: 1-6*
      PROPERTIES
        +Header
          -Needs to increment through values for pg 1-6 (in an array)
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
    Update Page
      Increments page from 1 through 6
      Update states per page via array?

    GO/reset Button change
      IF page === page 1 -> show 'GO'
      ELSE show 'reset image'

    Blue button change
      IF page === page 5 -> show button w/ 'REVEAL'
      ELSE IF page === page 2, 3, 4 -> show button w/ 'NEXT'
      ELSE hide button

    Numbers cycle
      Multiples of 9 need to return '&'
        IF num % 9 === 0
        return '&';
```
