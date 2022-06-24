var modal = document.getElementById("modalForm");
var btn = document.getElementById("btnShowModal");
var span = document.getElementById("btnClose")[0];

btn.click = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};