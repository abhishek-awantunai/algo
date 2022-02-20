const computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let length = 1;
    let bredth = 1;

    let finalx1, finalx2, finaly1, finaly2;

    let l1 = ax2-ax1;
    let b1 = ay2-ay1;
    let l2 = bx2-bx1;
    let b2 = by2-by1;

    finalx1 = (ax1 > bx1) ? ax1 : bx1;
    finalx2 = (ax2 < bx2) ? ax2 : bx2;
    finaly1 = (ay1 > by1) ? ay1 : by1;
    finaly2 = (ay2 < by2) ? ay2 : by2;

    length = finalx2 - finalx1;
    bredth = finaly2 - finaly1;

    let commonArea = (bx1 > ax2 || bx2 < ax1) ? 0 : (bredth*length);

    return (l1*b1 + l2*b2 - (commonArea > 0 ? commonArea : 0));
};

console.log(computeArea(-3,0,3,4,0,-1,9,2));