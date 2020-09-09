module.exports =(personas,hora,precio,totalmaterial,callback)=>{
	prueba1=0;
	if (hora <=0 ||  precio<=0){
			callback(new Error("No se permiten valores negativos o en 0"),null
				);
	}
	else {
			callback(null, {
				sueldoempleado:()=> (hora+precio),
				Total:()=> (prueba1 +=((hora*personas)*precio)),
				sumatotal:()=> (totalmaterial+prueba1),
				Holgura:()=> (prueba1*0.08), 
			});
	}
}

