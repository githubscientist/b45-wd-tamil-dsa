// Recursion is a function which calls itself

// function repeat() {
//     console.log('hello');
//     repeat();
// }

// repeat();

/*
    repeat():
        - print hello
        - call repeat()
            - print hello
            - call repeat()
                - print hello
                - call repeat()
                    ...............

*/

// print hello 3 times using recursion function without using loop

// function printHello(times) {

//     if (times == 0) return;

//     console.log('hello');
//     printHello(times-1);
// }

// printHello(2);

/*
    printHello(3)
        - times: 3
        - console 'hello'
        - printHello(2)
            - times: 2
            - console 'hello'
            - printHello(1)
                - times: 1
                - console 'hello'
                - printHello(0)
                    - times: 0
                    - if times == 0 (True) return
    
    
    
    printHello(3)
*/

// write a function to print the first n natural numbers

/*
    Input: 5
    Output: 1 2 3 4 5

    Input: 7
    Output: 1 2 3 4 5 6 7

    Input: 10
    Output: 1 2 3 4 5 6 7 8 9 10

    Input: 4
    Output: 1 2 3 4
*/

// iterative way: loops

// function printNaturalNumbers(n) {
//     for (let number = 1; number <= n; number++){
//         console.log(number);
//     }
// }

// printNaturalNumbers(7);

// recursive way: recursion

// function recursivePrint(n) {
//     if (n == 0) return;
//     console.log(n);
//     recursivePrint(n - 1);
// }

// recursivePrint(5);

/*
    recursivePrint(5)
        - n = 5
        - print n # 5
        - recursivePrint(4) x
            - n = 4
            - print n # 4
            - recursivePrint(3) x
                - n = 3
                - print n # 3
                - recursivePrint(2) x
                    - n = 2
                    - print n # 2
                    - recursivePrint(1) x
                        - n = 1
                        - print n # 1
                        - recursivePrint(0) x
*/

// function recursivePrint(n) {
//     if (n == 0) return;
//     recursivePrint(n - 1);
//     console.log(n);
// }

// recursivePrint(5);

/*
    recursivePrint(5)
        - n = 5
        - 5 == 0 false
        - recursivePrint(4)
            - n = 4
            - 4 == 0 false
            - recursivePrint(3)
                - n = 3
                - 3 == 0 false
                - recursivePrint(2)
                    - n = 2
                    - 2 == 0 false
                    - recursivePrint(1)
                        - n = 1
                        - 1 == 0 false
                        - recursivePrint(0)
                            - n = 0
                            - if 0 == 0, true, return [e]
                        - console.log(n) [wte]
                    - console.log(n) [wte]
                - console.log(n) [wte]
            - console.log(n) [wte]
        - console.log(n) [wte]


        recursivePrint(5)

        Output:

        1
        2
        3
        4
        5

*/


// function using recursion to find the sum of N natural numbers

/*
    Input: 5
    Output: 15

    Explanation:

    Natural numbers from 1 to 5: 1, 2, 3, 4, 5
    Sum = 1 + 2 + 3 + 4 + 5
        = 15

    Input: 6
    Output: 21

    Input: 10
    Output: 55
*/

// function S(n) {
//     // ??
// }


// console.log(S(5));

/*
    Recurrence Relation
    S(n) = ?
    -----------------------------

    // base case
    For n = 1, S(1) = 1
    For n = 2, S(2) = 1 + 2 = 3
    -----------------------------

    For n = 3, S(3) = 1 + 2 + 3 = 6
    For n = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For n = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15
    
*/

/*
    Recurrence Relation
    S(n) = ?
    -----------------------------

    // base case
    For n = 1, S(1) = 1
    -----------------------------

    For n = 2, S(2) = S(1) + 2 = 3
    For n = 3, S(3) = S(2) + 3 = 6
    For n = 4, S(4) = S(3) + 4 = 10
    For n = 5, S(5) = S(4) + 5 = 15
    

    Backward Substitution

    Generalize the expression ?

    S(n) = S(n-1) + n #Recurrence Relation

    For n = 1, S(n) = 1
    For all n>1, S(n) = S(n-1) + n

    Example:

    n = 7

    S(7) = 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
*/


// For n = 1, S(n) = 1
// For all n>1, S(n) = S(n-1) + n
// function S(n) {
//     if (n == 1) return 1;
//     return S(n - 1) + n;
// }


// console.log(S(10));

/*
    Recursion Tree

    S(5)
        - n = 5
        - 5 == 1, false
        - return S(4) + 5
                 - n = 4
                 - 4 == 1, false
                 - return S(3) + 4
                          - n = 3
                          - 3 == 1, false
                          - return S(2) + 3
                                   - n = 2
                                   - 2 == 1, false
                                   - return S(1) + 2
                                            - n = 1
                                            - 1 == 1, true, return 1

    console.log(15);
                                           
*/

// write a recursion function to find the factorial of a number
/*
    For n = 0, F(n) = 1
    For n = 1, F(n) = 1
    For n > 1, F(n) = n * F(n-1)
*/
// function F(n) {
//     if (n == 0) return 1;
//     if (n == 1) return 1;
//     return n * F(n - 1);
// }

// console.log(F(0));

/*
    Hint:

    Special case: 

    For n = 0, F(0) = 1
    For n = 1, F(1) = 1
    ---------------------
    For n = 2, F(2) = 2 * 1 = 2
    For n = 3, F(3) = 3 * 2 * 1 = 6
    For n = 4, F(4) = 4 * 3 * 2 * 1 = 24
    For n = 5, F(5) = 5 * 4 * 3 * 2 * 1 = 120

    For n = 0, F(0) = 1
    For n = 1, F(1) = 1
    ---------------------
    For n = 2, F(2) = 2 * F(1) = 2
    For n = 3, F(3) = 3 * F(2) = 6
    For n = 4, F(4) = 4 * F(3) = 24
    For n = 5, F(5) = 5 * F(4) = 120

    For n = 0, F(n) = 1
    For n = 1, F(n) = 1
    For n > 1, F(n) = n * F(n-1)


*/

// homeworks:
// 1. reverse a string using recursion
// 2. using recursion, find the nth fibonacci number

