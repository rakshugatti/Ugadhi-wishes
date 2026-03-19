const wishes = [
   "ನಿಮಗೆ ಸಂತೋಷಕರ ಮತ್ತು ಸಮೃದ್ಧಿಯ ಯುಗಾದಿ ಹಬ್ಬದ ಶುಭಾಶಯಗಳು!",
  "ಈ ಯುಗಾದಿ ನಿಮ್ಮ ಜೀವನಕ್ಕೆ ಸಂತೋಷ ಮತ್ತು ಯಶಸ್ಸು ತರಲಿ!",
  "ಹೊಸ ಆರಂಭವನ್ನು ಸಂತೋಷದಿಂದ ಆಚರಿಸಿ!",
  "ಯುಗಾದಿ ಶುಭಾಶಯಗಳು! ಸದಾ ಆಶೀರ್ವಾದವಾಗಿರಿ!",
  "ನಿಮ್ಮ ಜೀವನ ಬೆಲ್ಲದಂತೆ ಸಿಹಿಯಾಗಿರಲಿ!"
];

let index = 0;

function changeWish() {
  index = (index + 1) % wishes.length;
  document.getElementById("wishText").innerText = wishes[index];
}

// WhatsApp share
function shareWhatsApp() {
  const text = document.getElementById("wishText").innerText;
  const url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

// Instagram (just alert because direct share not possible)
function shareInstagram() {
  alert("Instagram sharing is not directly supported. Copy the message and post!");
}