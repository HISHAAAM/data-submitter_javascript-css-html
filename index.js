var studentDataArray = [];
var firstRow;
function viewDetail() {
  var studentName = document.getElementById("name").value;
  var studentAge = document.getElementById("age").value;
  var studentQualification = document.getElementById("qualification").value;
  var studentScore = document.getElementById("score").value;
  var errorLabel = document.getElementById("emptyError");

  errorLabel.innerText = "";
  if (studentName == "") {
    errorLabel.innerText = "name is empty";
    return;
  } else if (studentAge == "") {
    errorLabel.innerText = "age is empty";
    return;
  } else if (studentQualification == "") {
    errorLabel.innerText = "qualification is empty";
    return;
  } else if (studentScore == "") {
    errorLabel.innerText = "score is empty";
    return;
  }
  var newStudent = {
    name: studentName,
    age: studentAge,
    qualification: studentQualification,
    score: Number(studentScore),
  };
  studentDataArray.push(newStudent);
  var studentTable = document.getElementById("studentData");
  var currentRows = studentTable.rows.length;
  firstRow = studentTable.insertRow(currentRows);

  var namecell = firstRow.insertCell(0);
  namecell.innerHTML = studentName;

  var agecell = firstRow.insertCell(1);
  agecell.innerHTML = studentAge;

  var qualificationcell = firstRow.insertCell(2);
  qualificationcell.innerHTML = studentQualification;

  var scorecell = firstRow.insertCell(3);
  scorecell.innerHTML = studentScore;

  var totalScore = 0;
  var average = 0;

  for (index = 0; index < studentDataArray.length; index++) {
    var currentStudent = studentDataArray[index];
    totalScore = totalScore + currentStudent.score;
  }
  average = totalScore / studentDataArray.length;
  document.getElementById("avg").value = average;
}
clears = () => {
  var studentTable = document.getElementById("studentData");
  while (studentTable.rows.length > 1) {
    var lastRowIndex = studentTable.rows.length - 1;
    studentTable.deleteRow(lastRowIndex);
  }
};
minus = () => {
  var studentTable = document.getElementById("studentData");
  var lastRowIndex = studentTable.rows.length - 1;
  if(lastRowIndex>=1){
  studentTable.deleteRow(lastRowIndex);
  }
};
