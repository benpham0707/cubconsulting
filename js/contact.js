function switchForm(type) {
    const clientForm = document.getElementById('client-form');
    const applicantForm = document.getElementById('applicant-form');
  
    if (type === 'client') {
      clientForm.style.display = 'block';
      applicantForm.style.display = 'none';
    } else {
      clientForm.style.display = 'none';
      applicantForm.style.display = 'block';
    }
  }
  