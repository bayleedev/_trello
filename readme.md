## Trello

A coding challenge I found on a [trello job listing](https://trello.com/jobs/internal-software-developer).

## Solutions

### Math

The fastest solution, but requires knowledge of the hash algorithm and a few
reads to fully understand the code.

~~~js
node trello.js
~~~

### Brute Force

The slowest solution. It can make the least amount of assumptions about the
hashing algorithm. The recursion can be also hard to understand.

~~~js
node trello-brute.js
~~~

### Dictionary Attack

The dictionary solution is by far the easiest to read and understand. It's not
slow, but you'll notice it going slow if you try doing more than 1000 decrypts.

~~~js
node trello-dictionary.js
~~~
