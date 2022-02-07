




// Function Methods

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

//using myMath
myMath.square(2)
myMath.cube(2)

// shortcurt - shorthand to methods >>>>>>

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}