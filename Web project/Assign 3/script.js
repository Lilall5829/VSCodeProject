$(document).ready(function () {
  let RESUME_URL = "./resume.json";
  $.getJSON(RESUME_URL, function (data) {
    $("#name").text(data.name);
    $("#stuNumber").text(`Student Number: ${data.stuNumber}`);
    $("#email").text(`Condor Email: ${data.contactInformation.email}`);
    $("#phone").text(`Phone Number: ${data.contactInformation.phone}`);
    $("#github").text(
      `Welcome to Visit My Github: ${data.contactInformation.github}`
    );
    $("#aboutMe").text(data.aboutMe);
    $("#china").text(data.china);

    const educationList = $("#education");
    $.each(data.education, function (index, education) {
      const degree = $("<h6>").text(`${education.degree}  (${education.year})`);
      const university = $("<h6>").text(`${education.university}`);
      const courses = $("<h6>").text(`${education.courses}`);
      const br = $("<br>");
      educationList.append(degree, university, courses, br);
    });

    const workList = $("#workExp");
    $.each(data.workExp, (index, workExp) => {
      const item = $("<div>").html(
        `<h6>${workExp.title} (${workExp.duration})</h6><span>${workExp.company}</span><p>${workExp.responsibilities}</p>`
      );
      workList.append(item);
    });

    const skillsList = $("#techSkills");
    $.each(data.techSkills, (index, skill) => {
      const item = $("<li>").text(skill);
      skillsList.append(item);
    });

    const table = $("#availabilities");
    $.each(data.availabilities, (index, availability) => {
      const item = $("<tr>").html(
        `<td>${availability.date}</td><td>${availability.availability}</td>`
      );
      table.append(item);
    });
  });
});
