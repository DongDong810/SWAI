$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const email = $("#submit-email").val();
        const advice = $("#submit-advice").val();
        const rate = $("input[name='rate']:checked").val();

        // console.log("Email:", email);
        // console.log("Advice:", advice);
        // console.log("Rate:", rate);

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }

        if (email != "" && !validateEmail(email)) {
            alert("이메일이 유효하지 않아 알림을 드릴 수가 없습니다. ");
            return;
        }

        var finalData = JSON.stringify({
            "rate": rate,
            "email": email,
            "advice": advice
        });

        axios.get('https://script.google.com/macros/s/AKfycbyF199vqvP_BXvIUVfmyVs1GVlTq70wiA9Yu6IVTRK6MTiRFFC_-7L1IH7GZ9yAd34e/exec?action=insert&table=sheet3&data=' + finalData)
            .then(function (response) {
                alert("Successfully submitted!");
                console.log("Response:", response);
                location.reload(); // Refresh the page
            })
            .catch(function (error) {
                alert("Error submitting data: " + error);
                console.error("Error:", error);
            });
    });
});