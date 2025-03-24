function getFormvalue() {
    //Write your code here
	
let fname = document.querySelector('input[name="fname"]').value;
let lname = document.querySelector('input[name="lname"]').value;
let fullName = fname + " " + lname;
alert(fullName);
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    getFormvalue();
});
	
}

