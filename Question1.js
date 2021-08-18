//Question1.  A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name,
//           skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const names = student[0];
const skills = student[1];
const scores = student[2];
const jsScore = student[2][3];
const reactScore = student[2][3];

console.log(names, skills, scores);
console.log(jsScore, reactScore);

//Question2. Write a function called convertArrayToObject which can convert the array to a structured object.

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject() {
  const allDetails = students.map((item, index) => {
    const newObj = {
      name: item[0],
      skills: item[1],
      scores: item[2],
    };
    return newObj;
  });
  return allDetails;
}

console.log(convertArrayToObject());


//Question3. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 	1. Add Bootstrap with level 8 to the front end skill sets
// 	2. Add Express with level 9 to the back end skill sets
// 	3. Add SQL with level 8 to the data base skill sets
// 	4. Add SQL without level to the data science skill sets

const student1 = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
};


const newStudent = { ...student1 };

newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({skill: 'Express',level: 9});
newStudent.skills.dataBase.push({ skill: 'SQL',level: 8});
newStudent.skills.dataScience.push('SQL');

console.log(newStudent.skills);


//Question4. Use the student object to solve the following questions: 

//a. Find the length of student object keys 
const objectkeys = Object.keys(newStudent);
console.log("length", objectkeys.length);

//b. Find the length of the student object values
const objectValues = Object.values(newStudent);
console.log(objectValues.length);

//c. Find the length of skills object keys 
const skillkey = newStudent.skills;
console.log(Object.keys(skillkey).length);

//d. check if the student object has graphicDesign property 
const checkGraphicDesignProp = (student, checkkey) => {
  check = Object.keys(student).filter((item) => item == checkkey);
  if (check.length == 0) {
    console.log(false);
  } else console.log(true);
};
checkGraphicDesignProp(newStudent, "graphicDesign");

//e. Iterate the keys of the student object
const iterateItem = Object.keys(newStudent).map((item) => item);
console.log(iterateItem);
