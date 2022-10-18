function climbingLeaderboard(ranked, player) {
    var scores = [];
    scores.push(...ranked);
    scores.push(...player);

    // sort ranked 
    ranked.sort((a,b)=>b-a);
    r=scores.sort((a,b)=>b-a);
    r

}

const ranked = [100,80,50,80];
const player = [80,40,20];
climbingLeaderboard(ranked , player);