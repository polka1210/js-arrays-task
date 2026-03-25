// BEGIN
const getSuperSeriesWinner = (scores) => {
    let canadaScore = 0;
    let ussrScore = 0;
    for (let x = 0; x < scores.length; x++) {
        const match = scores[x];
        const canadaGoals = match[0];
        const ussrGoals = match[1];
        if (canadaGoals > ussrGoals) {
            canadaScore++;
        } else if (ussrGoals > canadaGoals) {
            ussrScore++;
        }
    }
    if (canadaScore > ussrScore) {
        return 'canada';
    } else if (ussrScore > canadaScore) {
        return 'ussr';
    } else {
        return null;
    }
};

export default getSuperSeriesWinner;
// END