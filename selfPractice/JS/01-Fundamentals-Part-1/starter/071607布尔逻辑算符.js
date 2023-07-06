//&& AND与, || OR或, ! NOT非 算符
const hasLicense = true;
const hasVision = true;
console.log(hasLicense && hasVision);
console.log(hasLicense || hasVision);
console.log(!hasVision);

const shouldDrive = hasLicense && hasVision;
if (shouldDrive) {
    console.log('She is able to drive!')
} else {
    console.log('Nono');
}

const isTired = false;
console.log(hasLicense && hasVision && isTired);
if (hasLicense && hasVision && !isTired) {
    console.log('She is able to drive!')
} else {
    console.log('Nono');
}