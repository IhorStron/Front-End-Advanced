const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
   math: [4, 4, 3, 4],
   algorithms: [3, 3, 3, 4, 4, 4],
   data_science: [5, 5, 3, 4]
   }
   }, {
   name: "Victor",
   course: 4,
   subjects: {
   physics: [5, 5, 5, 3],
   economics: [2, 3, 3, 3, 3, 5],
   geometry: [5, 5, 2, 3, 5]
   }
   }, {
   name: "Anton",
   course: 2,
   subjects: {
   statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
   english: [5, 3],
   cosmology: [5, 5, 5, 5]
   }
   }];


   //1.
   const getSubjects = (student) => {
      const subjects = Object.keys(student.subjects);
      const formattedSubjects = subjects.map((subject) => {
        const words = subject.split("_");
        const capitalizedWords = words.map((word) =>
          word.charAt(0).toUpperCase() + word.slice(1)
        );
        return capitalizedWords.join(" ");
      });
      return formattedSubjects;
    };
    
    const subjects = getSubjects(students[0]);
    console.log(`1. getSubjects: `);
    console.log(subjects);

    //2.
    const getAverageMark = (student) => {
      const marks = Object.values(student.subjects).flat();
      const sum = marks.reduce((total, mark) => total + mark, 0);
      const average = sum / marks.length;
      return average.toFixed(2);
    };
    
    const averageMark = getAverageMark(students[0]);
    console.log(`2. getAverageMark: ` + averageMark);

    //3.
    const getStudentInfo = (student) => {
      const { course, name } = student;
      const averageMark = getAverageMark(student);
    
      return { course, name, averageMark };
    };
    
    const studentInfo = getStudentInfo(students[0]);
    console.log(`3. getStudentInfo :`);
    console.log(studentInfo);

    //4.
    const getStudentsNames = (students) => {
      const studentNames = students.map((student) => student.name);
      const sortedNames = studentNames.sort();
    
      return sortedNames;
    };
    
    const names = getStudentsNames(students);
    console.log(`4. getStudentsNames: `);
    console.log(names);

    //5.
    const getBestStudent = (students) => {
      let bestAverage = 0;
      let bestStudent = '';
    
      students.forEach((student) => {
        const averageMark = getAverageMark(student);
        
        if (averageMark > bestAverage) {
          bestAverage = averageMark;
          bestStudent = student.name;
        }
      });
    
      return bestStudent;
    };
    
    const bestStudent = getBestStudent(students);
    console.log(`5. getBestStudent: ` + getBestStudent(students));

    //6.
    const calculateWordLetters = (word) => {
      const letters = {};
      
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        
        if (letters[letter]) {
          letters[letter]++;
        } else {
          letters[letter] = 1;
        }
      }
      
      return letters;
    };
    
    const wordLetters = calculateWordLetters("тест");
    console.log(`6. calculateWordLetters: `);
    console.log(wordLetters);
    
    
    
    

    
    