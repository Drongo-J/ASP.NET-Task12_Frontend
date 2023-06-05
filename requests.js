var TOKEN = localStorage.getItem("MYTOKEN");
// YXl4YW46MTIzNDU=
console.log(TOKEN);

function request1click() {
    var REQUEST_URL = "https://localhost:7016/api/Student";
    console.log("TOKEN " + TOKEN);
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "basic " + TOKEN },
        success: function (data) {
            var obj = document.getElementById("request1response");
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function request2click() {
    var REQUEST_URL = "https://localhost:7016/api/Student/Best";
    console.log("TOKEN " + TOKEN);
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "basic " + TOKEN },
        success: function (data) {
            var obj = document.getElementById("request2response");
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function request3click() {
    var REQUEST_URL = "https://localhost:7016/api/Student/";
    console.log("TOKEN " + TOKEN);
    let id = document.getElementById("request3input").value;
    if (id != -1) {
        REQUEST_URL += id;
    }
    $.ajax({
        url: REQUEST_URL,
        type: 'GET',
        headers: { "Authorization": "basic " + TOKEN },
        success: function (data) {
            var obj = document.getElementById("request3response");
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = error;
        }
    });
}

function request4click() {
    var REQUEST_URL = "https://localhost:7016/api/Student/";
    console.log("TOKEN " + TOKEN);
    let id = document.getElementById("request4input").value;
    if (id != -1) {
        REQUEST_URL += id;
    }
    else {
        alert("Enter student ID to delete");
        return;
    }
    var obj = document.getElementById("request4response");
    $.ajax({
        url: REQUEST_URL,
        type: 'DELETE',
        headers: { "Authorization": "basic " + TOKEN },
        body: JSON.stringify(id),
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = JSON.stringify(error.responseText);
        }
    });
}

function request5click() {
    var REQUEST_URL = "https://localhost:7016/api/Student/";
    console.log("TOKEN " + TOKEN);
    var jsonString = document.getElementById("jsoninput").value;
    const modifiedJsonString = jsonString.replace(/\n/g, '').trim();
    const jsonObject = JSON.parse(modifiedJsonString);

    var obj = document.getElementById("request5response");
    $.ajax({
        url: REQUEST_URL,
        type: 'POST',
        headers: { "Authorization": "basic " + TOKEN },
        data: JSON.stringify(jsonObject),
        contentType: 'application/json',
        success: function (data) {
            obj.value = JSON.stringify(data);
        },
        error: function (error) {
            obj.value = JSON.stringify(error.responseText);
        }
    });
}
