// o(2a) omitte the constant -> o(a)
function twoloops(a) {
    for (let i = 0; i < a; i++) { // o(a)
    }
    for (let j = 0; j < a; j++) { // o(a)
    }
}

// o(a * b) omitte the constant
function twoInputsMult(a, b) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
        }
    }
}

// o(a ^ 2) omitte the constant
function oneInput(a) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
        }
    }
}


// o(a + b)
function twoInputsAdd(a, b) {
    for (let i = 0; i < a; i++) { // o(a)
    }
    for (let j = 0; j < b; j++) { // o(b)
    }
}