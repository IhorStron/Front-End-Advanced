const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій","Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів","Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// --------------------------
function getPairs(students) {
   const pairs = [];
 
   const maleStudents = students.filter(student => !student.endsWith("а"));
   const femaleStudents = students.filter(student => student.endsWith("а"));
 
   const minPairsCount = Math.min(maleStudents.length, femaleStudents.length);
 
   for (let i = 0; i < minPairsCount; i++) {
     pairs.push([maleStudents[i], femaleStudents[i]]);
   }
 
   return pairs;
 }
 
 
 const pairs = getPairs(students);

 // --------------------------
 function getProjects(pairs, themes) {
   const projects = [];
   for (let i = 0; i < pairs.length; i++) {
       const pair = pairs[i];
       const project = [pair.join(" і "), themes[i]];
       projects.push(project);
   }
   return projects;
}
const projects = getProjects(pairs, themes);

// --------------------------
function combineStudentsWithMarks(students, marks) {
   const combinedArray = [];
 
   for (let i = 0; i < students.length; i++) {
     const student = students[i];
     const mark = marks[i];
     const combinedItem = [student, mark];
     combinedArray.push(combinedItem);
   }
 
   return combinedArray;
 }
 
 
 
 const combinedArray = combineStudentsWithMarks(students, marks);
 
 // --------------------------
 function assignRandomMarks(projects) {
   const markedProjects = [];
   for (let i = 0; i < projects.length; i++) {
     const project = projects[i];
     const randomMark = Math.floor(Math.random() * 5 + 1);
     const markedProject = [...project, randomMark];
     markedProjects.push(markedProject);
   }
   return markedProjects;
 }
const markedProject = assignRandomMarks(projects);

 
 




console.log("Pairs:", pairs);
console.log("Projects:", projects);
console.log("Student Marks:", combinedArray);
console.log("Marked Projects:", markedProject);

 