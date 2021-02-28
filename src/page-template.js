module.exports = templateData => {
    const Manager = require('../lib/Manager');
    const Engineer = require('../lib/Engineer');
    const Intern = require('../lib/Intern');


    let manager;
    let employeeObjArray = [];




    function generateEmployeeArray(array) {
        if (array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].employeeType === "Engineer") {
                    employeeObjArray.push(new Engineer(array[i].employeeName, array[i].employeeEmail, array[i].employeeId, array[i].engineerGitHub));
                } else {
                    employeeObjArray.push(new Intern(array[i].employeeName, array[i].employeeEmail, array[i].employeeId, array[i].internSchool));
                }
            }
            return generateEmployeeCode();
        }

    }

    function generateEmployeeCode() {
        let result = ``;
        if (employeeObjArray) {

            for (let i = 0; i < employeeObjArray.length; i++) {
                result += `
					  <div class="column is-one-quarter">
			<div class="card">
				<header class="card-header">
				<div class="media-content">
				<p class="title is-4">
					  ${employeeObjArray[i].getName()}</p>
					  <p class="subtitle is-6">
						`;
                if (employeeObjArray[i].getRole() === "Engineer") {
                    result += `
					<i class="fas fa-laptop-code"></i>
					&nbsp;&nbsp;&nbsp;&nbsp;Engineer
					`;
                } else {
                    result += `
					<i class="fas fa-book"></i>
					&nbsp;&nbsp;&nbsp;&nbsp;Intern
					`;
                }
                result += `
				</p>
				</div>
			</header>
					<div class="card-content custom-padding">
						  <div class="content">
						  <ul style="list-style-type:none; margin: 32px;">
								<div class="list-item">
									<li>
										ID:
										&nbsp;&nbsp;&nbsp;&nbsp;
										${employeeObjArray[i].getId()}
									</li>
								</div>
								<div class="list-item">
									<li>
									  E-mail:
										&nbsp;&nbsp;&nbsp;&nbsp;
										<a href="mailto: ${employeeObjArray[i].getEmail()}"> ${employeeObjArray[i].getEmail()}</a>
									</li>
								</div>
								<div class="list-item">
									<li>`;
                if (employeeObjArray[i].getRole() === "Engineer") {
                    result += `
										GitHub:
										&nbsp;&nbsp;&nbsp;&nbsp;
										<a href="https://github.com/${employeeObjArray[i].getGitHub()}">${employeeObjArray[i].getGitHub()}</a>
										`;
                } else {
                    result += `
										School:
										&nbsp;&nbsp;&nbsp;&nbsp;
										${employeeObjArray[i].getSchool()}
										`;
                }

                result += `
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>`

            }
        }
        return result;
    }

    console.log(templateData);
    generateManager();

    function generateManager() {
        let number = formatNumber(templateData.managerNumber);
        manager = new Manager(templateData.managerName, templateData.managerEmail, templateData.managerId, number);

    }

    function formatNumber(phoneNumber) {

        let result = ('' + phoneNumber).replace(/\D/g, '');


        let match = result.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

        if (match) {

            let internationalCode = (match[1] ? '+1 ' : '')
            return [internationalCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
        }

        return null;
    }
    return `<!DOCTYPE html>
		<html lang="en">
	
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta http-equiv="X-UA-Compatible" content="ie=edge">
		  <title>${templateData.headLine}</title>
		  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
		  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
		  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
		  <link rel="stylesheet" href="style.css">
		</head>
		
		<body>
		<header>
		  <div class="container-max-width has-text-centered custom-shadow">
				<section class="hero is-primary">
					<div class="hero-body">
						<p class="title is-1">
						  <i class="fas fa-atom"></i>
						  &nbsp;&nbsp;&nbsp;
						  ${templateData.headLine}
						</p>
				  </div>
			  </section>
			</div>
	  </header>
	  <main class="container">
	  <div class="columns is-mobile is-multiline is-centered">
		  <div class="column is-one-quarter">
			  <div class="card">
				  <header class="card-header">
				  	<div class="media-content">
				  		<p class="title is-4">
							${manager.getName()}</p>
							<p class="subtitle is-6"><i class="fas fa-lightbulb"></i>
								&nbsp;&nbsp;&nbsp;&nbsp;Manager
							</p>
						</div>
					</header>
					<div class="card-content custom-padding">
						<div class="content">
							<ul style="list-style-type:none; margin: 32px;">
								<div class="list-item">
								  <li>
										  ID:
										  &nbsp;&nbsp;&nbsp;&nbsp;
										  ${manager.getId()}
								  </li>
								</div>
								<div class="list-item">
								  <li>
										  E-mail:
										  &nbsp;&nbsp;&nbsp;&nbsp;
										  <a href="mailto: ${manager.getEmail()}"> ${manager.getEmail()}</a>
									  </li>
								  </div>
								  <div class="list-item">
									  <li>
									  Phone Number:
									  &nbsp;&nbsp;&nbsp;&nbsp;
									  ${manager.getOfficeNumber()}
									  </li>
								  </div>
							  </ul>
						  </div>
					  </div>
				  </div>
			  </div>
			  ${generateEmployeeArray(templateData.addEmployee)}
			  </div>
		  </main>
		  <footer class="container text-center py-3">
			  <h3 class="text-dark">&copy;2021 ${templateData.headLine}</h3>
		  </footer>
	  </body>
	</html>
			  `;
};