var API_SIGN_IN_REQUEST_URL = "https://localhost:7016/api/Account/SignIn"
var TOKEN = "";

// var username = document.getElementById("s-6-username");
// var password = document.getElementById("s-6-password");

// function SignIn() {
//     var obj = {
//         username: username.value,
//         password: password.value
//     };

//     $.ajax({
//         url: API_SIGN_IN_REQUEST_URL,
//         type: 'POST',
//         dataType: 'json',
//         contentType: 'application/json',
//         data: JSON.stringify(obj),
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (error) {
//             console.error(error);
//         }
//     });
// }

$(document).ready(function () {
    $("#s-6-form").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var username = $("#s-6-username").val();
        var password = $("#s-6-password").val();

        var obj = {
            username: username,
            password: password
        };


        $.ajax({
            url: API_SIGN_IN_REQUEST_URL,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function (data) {
                console.log(data);
                TOKEN = data;
                localStorage.setItem("MYTOKEN", TOKEN);
                document.location.href = "requests.html";
                // Next page
            },
            error: function (error) {
                alert(error.responseJSON.title);
            }
        });
    });
});
