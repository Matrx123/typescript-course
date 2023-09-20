//Utility types

//1-Partial
//syntax Partial<Name of interface or object on which we will perform update only on specific keys>

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compSci123",
  title: "Data structures",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 90 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 80 });
console.log("graded >>>", assignGraded);
////////////////////////////////////////////////////////////////////////////////

//2-Required and Readonly
//when used required its compulsary to provide all teh values on which its used
//when used Readonly it becomes readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database, etc
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

//error
// assignVerified.grade = 70;
//error
//recordAssignment(assignGraded)
//fix
recordAssignment({ ...assignGraded, verified: true });
//////////////////////////////////////////////////////////////////////////////

//3- Record
//when used create a key-value record with strict provided types or interface
const hexCode: Record<string, string> = {
  red: "FF000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "sara" | "kelly";
type LetterGrade = "A" | "B" | "C" | "D" | "U";

const finalGrade: Record<Students, LetterGrade> = {
  kelly: "A",
  sara: "B",
};
//can also be used with interfaces
interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  kelly: { assign1: 90, assign2: 95 },
  sara: { assign1: 87, assign2: 98 },
};
