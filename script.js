const projects = [
    { name: 'TezRaftaar', technology: ['EJS','ExpressJs','NodeJs','MySQL','Jest'] },
    { name: 'FASTicket', technology: ['ReactJs','ExpressJs','NodeJs','MySQL','Jest'] },
    { name: 'FAST Zakhira', technology: ['Lambda', 'EC2','Terraform','S3','API-Gateway','GitHub-Actions'] },
    { name: 'Omdi', technology: ['RASA 3.X','Python','OpenAI API','FAISS'] },
    
];

const education = [
    { course: 'English', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Maths', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Physics', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Chemistry', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Biology', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Islamiat', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Urdu', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Pakistan Studies', school: 'Foundation Public School', year: '9th Grade' },
    { course: 'Introduction to ICT', school: 'FAST', year: 'Semester 1' },
    { course: 'Programming Fundamentals', school: 'FAST', year: 'Semester 1' },
    { course: 'Applied Physics', school: 'FAST', year: 'Semester 1' },
    { course: 'Calculus & Analytical Geometry', school: 'FAST', year: 'Semester 1' },
    { course: 'Pakistan Studies', school: 'FAST', year: 'Semester 1' },
    { course: 'English Composition & Comprehension', school: 'FAST', year: 'Semester 1' },
    { course: 'Object Oriented Programming', school: 'FAST', year: 'Semester 2' },
    { course: 'Digital Logic Design', school: 'FAST', year: 'Semester 2' },
    { course: 'Differential Equations', school: 'FAST', year: 'Semester 2' },
    { course: 'Islamic Studies/Ethics', school: 'FAST', year: 'Semester 2' },
    { course: 'Communication & Presentation Skills', school: 'FAST', year: 'Semester 2' },
    { course: 'Data Structures', school: 'FAST', year: 'Semester 3' },
    { course: 'Computer Org. and Assembly Language', school: 'FAST', year: 'Semester 3' },
    { course: 'Discrete Structures', school: 'FAST', year: 'Semester 3' },
    { course: 'Linear Algebra', school: 'FAST', year: 'Semester 3' },
    { course: 'Psychology', school: 'FAST', year: 'Semester 3' },
    { course: 'Database Systems', school: 'FAST', year: 'Semester 4' },
    { course: 'Operating Systems', school: 'FAST', year: 'Semester 4' },
    { course: 'Design & Analysis of Algorithms', school: 'FAST', year: 'Semester 4' },
    { course: 'Probability & Statistics', school: 'FAST', year: 'Semester 4' },
    { course: 'Fundamentals of Management', school: 'FAST', year: 'Semester 4' },
    { course: 'Theory of Automata', school: 'FAST', year: 'Semester 5' },
    { course: 'Computer Networks', school: 'FAST', year: 'Semester 5' },
    { course: 'Software Design and Analysis', school: 'FAST', year: 'Semester 5' },
    { course: 'Technical & Business Writing', school: 'FAST', year: 'Semester 5' },
    { course: 'Numerical Computing', school: 'FAST', year: 'Semester 5' },
    { course: 'Software Engineering', school: 'FAST', year: 'Semester 6' },
    { course: 'Parallel & Distributed Computing', school: 'FAST', year: 'Semester 6' },
    { course: 'Artificial Intelligence', school: 'FAST', year: 'Semester 6' },
    { course: 'Recommender Systems', school: 'FAST', year: 'Semester 6' },
    { course: 'Graph Theory', school: 'FAST', year: 'Semester 6' },
    { course: 'Final Year Project-I', school: 'FAST', year: 'Semester 7' },
    { course: 'Information Security', school: 'FAST', year: 'Semester 7' },
    { course: 'Professional Practices', school: 'FAST', year: 'Semester 7' },
    { course: 'Software Requirements Engineering', school: 'FAST', year: 'Semester 7' },
    { course: 'Applied DevOps', school: 'FAST', year: 'Semester 7' },

];


function filterProjects() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const filteredProjects = projects.filter(project => {
        const technologies = project.technology.map(tech => tech.toLowerCase());
        return technologies.some(tech => tech.includes(filterValue));
    });
    displayProjects(filteredProjects);
}

function displayProjects(projects) {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const techList = project.technology.join(', ');
        listItem.textContent = `${project.name} - ${techList}`;
        projectList.appendChild(listItem);
    });
}


const certifications = [
    { name: 'Certification 1', year: '2022' },
    { name: 'Certification 2', year: '2023' },
];

function displayCertifications() {
    const certificationsList = document.getElementById('certificationsList');
    certificationsList.innerHTML = '';

    certifications.forEach(certification => {
        const listItem = document.createElement('li');
        listItem.textContent = `${certification.name} - ${certification.authority} (${certification.year})`;
        certificationsList.appendChild(listItem);
    });
}

function displayEducation() {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = '';

    education.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = `${course.course} at ${course.school} (${course.year})`;
        educationList.appendChild(listItem);
    });
    displayCertifications();
}

displayProjects(projects);
displayEducation();
displayCertifications();
