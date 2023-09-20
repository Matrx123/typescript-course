"use strict";
//Utility types
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
