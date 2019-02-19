/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let t = [];
    let counter = 0;
    let first;
    let firstIndex;
    let second;
    let secondIndex;
    let third;
    let thirdIndex;
    for (let i = 0, n = preferences.length; i < n; i++) {
        if (t.includes(i)) {
            continue;
        }
        firstIndex = i;
        first = preferences[i];
        if(first-1===firstIndex){continue;}

        secondIndex = first-1;
        second = preferences[secondIndex];
        if(second-1===secondIndex){continue;}

        thirdIndex = second-1;
        third = preferences[thirdIndex];
        if(third-1===thirdIndex){continue;}

        if (firstIndex === third-1 ) {
            t.push(firstIndex, secondIndex, thirdIndex);
            counter++;
        }
    }
    return counter;
};
