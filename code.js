function tsp_hk(distance_matrix) {
    cities = new Array(distance_matrix.length);
    for (i = 0; i < distance_matrix.length; i++) {
        cities[i] = i;
    }

    return heldKarp(distance_matrix, cities, 0);
}

function heldKarp(graph, cities, start, distance = 0) {
    if (cities.length == 2) {
        shifted = cities.shift();
        if (shifted === start) {
            return (distance + graph[start][cities[0]]);
        } else {
            return (distance + graph[start][shifted]);
        }
    }
}

dm = [[0, 1],
    [1, 0]];

tsp_hk(dm);
