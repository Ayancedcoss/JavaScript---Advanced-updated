
let arr = [];
function update() {
    var id = document.getElementById("ids").value;
    var name = document.getElementById("names").value;
    var sal = document.getElementById("sal").value;
    var obj = { "Inpi": id, "inpna": name, "inps": sal };
    arr.push(obj);

    var head = { headid: "ID", headName: "Name", headtotal: "Total", headsal: "Salary", Action: "Action" };
    var ddd = "";
    ddd = "<tr><td>" + (head.headid) + "</td><td>" + (head.headName) + "</td><td>" + (head.headtotal) + "</td><td>" + (head.Action) + "</td></tr>"
    var i = 0;
    arr.forEach(element => {
        ddd += "<tr><td>" + (element.Inpi) + "</td><td>" + (element.inpna) + "</td><td>" + (element.inps) + "</td><td><a href='#'  onclick='del(" + i++ + ")'>delete</a></td></tr>"

    })
    document.getElementById("demo").innerHTML = ddd;


}
function del(i) {
    // alert(i);
    arr.splice(i, 1);
    var head = { headid: "ID", headName: "Name", headtotal: "Total", headsal: "Salary", Action: "Action" };
    var ddd = "";
    ddd = "<tr><td>" + (head.headid) + "</td><td>" + (head.headName) + "</td><td>" + (head.headtotal) + "</td><td>" + (head.Action) + "</td></tr>"
    var i = 0;
    arr.forEach(element => {
        ddd += "<tr><td>" + (element.Inpi) + "</td><td>" + (element.inpna) + "</td><td>" + (element.inps) + "</td><td><a href='#'  onclick='del(" + i++ + ")'>delete</a></td></tr>"
        // console.log(ddd);
    })
    document.getElementById("demo").innerHTML = ddd;
};