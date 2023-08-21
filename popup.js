document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var buttonText = button.textContent;
      copyTextToClipboard(buttonText);
      showSwalAlert(buttonText);
    });
  });
});

function copyTextToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      console.log("Text copied successfully");
    })
    .catch(function (err) {
      console.error("Copy failed: ", err);
    });
}

function showSwalAlert(text) {
  Swal.fire({
    title: "تنبيه",
    text: "أنت نقرت على الزر: " + text,
    icon: "info",
    confirmButtonText: "موافق",
    allowOutsideClick: true, // تمكين إغلاق الرسالة بالنقر خارجها
    onClose: function () {
      console.log("تم إغلاق الرسالة");
    },
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("button1");
  button1.addEventListener("click", function () {
    window.open("https://example.com", "_blank");
  });

  document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.key === "9") {
      window.open("https://example.com", "_blank");
    }
  });
});

function showSwalAlerts() {
  Swal.fire({
    title: "تم فتح التبويب!",
    icon: "success",
    confirmButtonText: "موافق",
  });
}