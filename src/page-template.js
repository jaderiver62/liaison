module.exports = templateData => {
const generateEmployees = (employeeArray)=>{
	let result= ``;
	if(employeeArray){

		for(let i=0; i<employeeArray.length; i++){
			result += `
				  <div class="column is-one-quarter">
		<div class="card">
			<header class="card-header">
				  <p class="card-header-title font-color is-centered">
				  ${templateData.employeeName}<br>
					`;
			if(employeeArray.employeeType === "Engineer"){
				result += `
				<i class="fas fa-laptop-code"></i>
				&nbsp;&nbsp;&nbsp;&nbsp;Engineer
				`;
			} else{
				result += `
				<i class="fas fa-book"></i>
				&nbsp;&nbsp;&nbsp;&nbsp;Intern
				`;
			}
			result += `
				</p>
				</header>
				<div class="card-content custom-padding">
					  <div class="content">
					  <ul style="list-style-type:none; margin: 32px;">
							<div class="list-item">
								<li>
									ID:
									&nbsp;&nbsp;&nbsp;&nbsp;
									${templateData.employeeId}
								</li>
							</div>
							<div class="list-item">
								<li>
								  E-mail:
									&nbsp;&nbsp;&nbsp;&nbsp;
									<a href="mailto: ${templateData.employeeEmail}"> ${templateData.employeeEmail}</a>
								</li>
							</div>
							<div class="list-item">
								<li>`;
								if(employeeArray.employeeType === "Engineer"){
									result += `
									GitHub:
									&nbsp;&nbsp;&nbsp;&nbsp;
									${templateData.engineerGitHub}
									`;
								} else{
									result += `
									School:
									&nbsp;&nbsp;&nbsp;&nbsp;
									${templateData.internSchool}
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
  </header>
  <main class="container">
	  <div class="column is-one-quarter">
		  <div class="card">
			  <header class="card-header">
					<p class="card-header-title font-color is-centered">
					${templateData.managerName}<br>  
					<i class="fas fa-lightbulb"></i>
					  &nbsp;&nbsp;&nbsp;&nbsp;Manager

				  </p>
				  </header>
				  <div class="card-content custom-padding">
						<div class="content">
						<ul style="list-style-type:none; margin: 32px;">
							  <div class="list-item">
								  <li>
									  ID:
									  &nbsp;&nbsp;&nbsp;&nbsp;
									  ${templateData.managerId}
								  </li>
							  </div>
							  <div class="list-item">
							  	<li>
									E-mail:
								  	&nbsp;&nbsp;&nbsp;&nbsp;
								  	<a href="mailto: ${templateData.managerEmail}"> ${templateData.managerEmail}</a>
							  	</li>
							  </div>
							  <div class="list-item">
							  	<li>
								  Phone Number:
								  &nbsp;&nbsp;&nbsp;&nbsp;
								  ${templateData.managerNumber}
							  	</li>
							  </div>
						  </ul>
					  </div>
				  </div>
			  </div>
		  </div>
		  ${generateEmplyoees(addEmployee)}
	  </main>
	  <footer class="container text-center py-3">
		  <h3 class="text-dark">&copy;2021 </h3>
	  </footer>
  </body>
</html>
		  `;
};