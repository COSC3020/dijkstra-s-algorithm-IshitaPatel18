[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

My answer:

My implementation starts of by iterating over all of the vertices with a for loop 
to set their distance's from the source node to Infinity, which takes number
of vertices or |V| time. Then there is a while loop that has 2 for loops inside.
The first for loop inside the while loop will iterate for |V| because it is searching
dist to find the next smallest distance. Since this for loop is nested in the while loop,
which also iterates for |V|, we get $|V|^2$. The last for loop is trying to find any edges
connecting to neighboring nodes to see if it provides a shorter path to that node, which will
iterate for number of edges or |E| as it is checking the neighboring edges of each node. The if
statement checks and variable initializations are constant time and can be dropped for the
rest of the calculations. Now putting this all together we get $|V| + |V|^2 + |E|$, which
we can simply to $|V|^2 + |E|$ as |V| is a lower order term. The $\Theta$ complexity for
this implementation would be $/Theta(|V|^2 + |E|)$.
