"use strict";
// Organize code using TypeScript namespaces 
var A;
(function (A) {
    function fun() {
        return "Hola";
    }
    A.fun = fun;
})(A || (A = {}));
var B;
(function (B) {
    function fun() {
        return "Hello !";
    }
    B.fun = fun;
})(B || (B = {}));
console.log("Namespace A : ", A.fun());
console.log("Namespace B : ", B.fun());
