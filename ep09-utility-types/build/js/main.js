"use strict";
//Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compSci123",
    title: "Data structures",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 90 }));
const assignGraded = updateAssignment(assign1, { grade: 80 });
console.log("graded >>>", assignGraded);
////////////////////////////////////////////////////////////////////////////////
//2-Required and Readonly
//when used required its compulsary to provide all teh values on which its used
//when used Readonly it becomes readonly
const recordAssignment = (assign) => {
    //send to database, etc
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//error
// assignVerified.grade = 70;
//error
//recordAssignment(assignGraded)
//fix
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//////////////////////////////////////////////////////////////////////////////
//3- Record
//when used create a key-value record with strict provided types or interface
const hexCode = {
    red: "FF000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrade = {
    kelly: "A",
    sara: "B",
};
const gradeData = {
    kelly: { assign1: 90, assign2: 95 },
    sara: { assign1: 87, assign2: 98 },
};
///////////////////////////////////////////////////////////////////////////
//Returntype
// type NewAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return {
        title,
        points,
    };
};
//now its type is same as return of createNewAssign
//usefull in function which changes return type so it will dynamically change the return type for the dependents as well
//practical use
const tsAssign = createNewAssign("utility types", 100);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
