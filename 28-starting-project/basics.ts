// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string | string[];
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};
person = {
    name: 'Max',
    age: 32
}

// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number;
}[];

// Type inference = 타입 추론

let course = 'React - The Complete Guide';
// course = 12341;

// 유니온 타입
let course2: string | number = 'React - The Complete Guide';
course2 = 12341;