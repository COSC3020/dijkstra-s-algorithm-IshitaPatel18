// Replit autofill helped format some of this code!

function dijkstra(graph, sourceNode) 
{
  let dist = [];
  let visitedNodes = [];
    
// set all the node distances to infinity, then set
// source node's distance to 0
  for (let i = 0; i < graph.length; i++) 
  {
    dist[i] = Infinity;
  }
    
  dist[sourceNode] = 0;

// Keep iterating until all nodes have been visitied/achieved shortest path
  while (visitedNodes.length != graph.length) 
  {
    let node = 0;
    let min = Infinity;
      
// iterate through all the distances to see which is the smallest.
//Check if current node is in visited nodes to avoid looking at the smaller distances again.
    for (let i = 0; i < graph.length; i++) 
    {
      if (dist[i] < min && visitedNodes.indexOf(i) === -1) 
      {
        min = dist[i];
        node = i;
      }
    }

    visitedNodes.push(node);
      
//Iterates through all of the edges connecting to neighbor nodes 
// and updates the distance to the neighbor node if the new distance 
// is smaller than the current distance.
      
    for (let nextNode = 0; nextNode < graph.length; nextNode++) 
    {
      let tempDistance = dist[node] + graph[node][nextNode];
      if (graph[node][nextNode] > 0 && dist[nextNode] > tempDistance) 
      {
        dist[nextNode] = tempDistance;
      }
    }
  }
  return dist;
}
