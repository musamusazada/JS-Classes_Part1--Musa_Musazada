function isInRange(num, obj) {

    if (num <= obj.max && num >= obj.min) {
        return true;
    } else {
        return false;
    }

    //(num<=obj.max && num>=obj.max) ? true : false;

}

console.log(isInRange(1, { min: 2, max: 10 }));