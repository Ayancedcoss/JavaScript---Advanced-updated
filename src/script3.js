let data = [
    { "Id": 1, "Name": "John", "Salary": 8000 },
    { "Id": 2, "Name": "Mark", "Salary": 0 },
];


var str = "<table>"
str += "<tr><th>" + 'ID' + "</th>" + "<th>" + 'Name' + "</th>" + "<th>" + 'Total Sal' + "</th>" + "<th>"
function debug() {
    data.forEach(element => {
        if (element.Salary <= 0) {
            alert('Salary is less')
            debugger;
        }
        else {
            str += "<tr> <td>" + element.Id + "</td>" + "<td>" + element.Name + "</td>" + "<td>" + element.Salary + "</td></tr>"
            str += "</table>"
            document.getElementById("demo").innerHTML = str;
        }
    });

}
