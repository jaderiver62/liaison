module.exports = templateData => {
// const generateEmployees = (employeeArray)=>{
// 	if(employeeArray){
// 		for(let i=0; i<employeeArray.length; i++){
// 		// TO DO:  make cards in bulma displaying employee information

// 		};
// 	}
// 	// return employee card generating code
// }
// ${generateEmployees(templateData.addEmployess)}
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
	  <nav class="panel">
	  	<p class="panel-heading">
			<i class="fas fa-atom">
	  			${templateData.headLine}
			</i>
		</p>
	</nav>
	</header>
	<main class="container my-5">



	
	</main>
	<footer class="container text-center py-3">
		<h3 class="text-dark">&copy;2021 </h3>
	</footer>
	</body>
	</html>
  `;
};