function switchForm(formType) {
    const clientForm = document.getElementById("client-form");
    const applicantForm = document.getElementById("applicant-form");
    const clientButton = document.getElementById("client-button");
    const applicantButton = document.getElementById("applicant-button");
  
    if (formType === "client") {
      clientForm.style.display = "block";
      applicantForm.style.display = "none";
      clientButton.classList.add("active");
      applicantButton.classList.remove("active");
    } else {
      clientForm.style.display = "none";
      applicantForm.style.display = "block";
      clientButton.classList.remove("active");
      applicantButton.classList.add("active");
    }
  }
  