function updateResume() {
  document.getElementById("preview-name").textContent = document.getElementById("name").value;
  document.getElementById("preview-phone").textContent = document.getElementById("phone").value;
  document.getElementById("preview-email").textContent = document.getElementById("email").value;
  document.getElementById("preview-address").textContent = document.getElementById("address").value;
  document.getElementById("preview-skills").textContent = document.getElementById("skills").value;

  document.getElementById("preview-edu1").textContent = document.getElementById("edu1").value;
  document.getElementById("preview-edu2").textContent = document.getElementById("edu2").value;
  document.getElementById("preview-edu3").textContent = document.getElementById("edu3").value;

  const projectsText = document.getElementById("projects").value;
  document.getElementById("preview-projects").innerHTML = projectsText.replace(/\n/g, "<br>");

  document.getElementById("preview-hobbies").textContent = document.getElementById("hobbies").value;
}

function changeTemplate() {
  const resume = document.getElementById("resume");
  resume.classList.remove("classic-template", "modern-template", "colorful-template");

  const selected = document.getElementById("templateSelector").value;
  if (selected === "modern") resume.classList.add("modern-template");
  else if (selected === "colorful") resume.classList.add("colorful-template");
  else resume.classList.add("classic-template");
}

function downloadPDF() {
  updateResume(); // update the resume content before exporting

  setTimeout(() => {
    const element = document.getElementById("resume");

    const opt = {
      margin: 0,
      filename: 'Maleeha_Resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 3,   // higher scale for better quality
        scrollY: 0, // capture all content
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: [] } // 🚫 Disable page splitting
    };

    html2pdf().set(opt).from(element).save();
  }, 500);
}


