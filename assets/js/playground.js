var solution = function(isBadVersion) {

    return function(n) {
        for(let i = 0;i < n; i++) {
            if (isBadVersion(i)) {
                return i;
            } else {
                return 5;
            }
        }
    };
};

console.log(solution(11, 9));