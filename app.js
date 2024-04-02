/*let object = {
	array : [],
};
		
		let prom = +prompt("Enter your value");
		for(let i = 1; i<=prom;i++){
			let user = +prompt("Enter your data");
			object.array.push(user);
		console.log(user)
		}*/
		let object = {
			array: [],
		}
		let promt = +prompt("Enter your name :");
		for(var i = 1; i<promt; i++){
			let user = +prompt("Enter your name :");
		 object.array.push(user);
		   
		}
		for(let x in object){
			 console.log(`${x}: ${object}`);
		}
		 
		 