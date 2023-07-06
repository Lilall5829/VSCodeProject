const averDo = (97 + 112 + 101) / 3;
const averKo = (109 + 95 + 106) / 3;
const minScore = 100;
if (averDo > averKo && averDo >= minScore) {
    console.log('Dolphins wins!')
} else if (averDo < averKo && averKo >= minScore) {
    console.log('Koalas wins!')
} else if (averDo === averKo && averDo >= minScore) {
    console.log('Draw!')
} else {
    console.log('No team wins!')
}