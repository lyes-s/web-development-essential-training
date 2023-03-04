// Organize code using TypeScript namespaces 

namespace A {
    export function fun(): string {
        return "Hola"!
    }
}

namespace B {
    export function fun(): string {
        return "Hello !";
    }
}

console.log("Namespace A : ", A.fun());
console.log("Namespace B : ", B.fun());

