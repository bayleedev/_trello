## Trello

A coding challenge I found on a [trello job listing](https://trello.com/jobs/internal-software-developer).

## Solutions

### Math

The fastest solution, but requires knowledge of the hash algorithm and a few
reads to fully understand the code.

Ideal solution if you had a pair or code review so other members can understand
it.

~~~js
node trello.js
~~~

### Brute Force

The slowest solution. It can make the least amount of assumptions about the
hashing algorithm. The recursion can be also hard to understand.

Ideal solution if you need to solve the hash once and know little about the
underlying implementation.

~~~js
node trello-brute.js
~~~

### Dictionary Attack

The dictionary solution is by far the easiest to read and understand. It's not
slow, but you'll notice it going slow if you try doing more than 1000 decrypts.

Ideal for a "lucky" guess. A bit of a middle point between the brute force and
the full implmenetation.

~~~js
node trello-dictionary.js
~~~
