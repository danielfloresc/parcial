var parte1=require('./parte1');
var parte2=require('./parte2');

const P2= parte2.suma([10,20]);
function P1(personas,hora,precio,totalmaterial) {
	// body...
	console.log(
		"horas que cada empleado ha trabajado: "  + hora + "\n" +
		"precio de las horas de cada empleado:" + precio);

	parte1(personas,hora,precio,totalmaterial, (error,nul)=>{
		if (error){
			console.log("ERROR:", error.message);
		}
		else{
			console.log("------------------------------------------------")
			console.log("Precio individual por el empleado:"+ nul.sueldoempleado());
			console.log("Total:" + nul.Total());
			console.log("holgura:" + nul.Holgura());
			console.log("sumatotal de todo el trabajo:"+ nul.sumatotal());
			console.log("materiales ah utilizar  :"+ P2);
		}
	});

}



P1(8,10,30,P2);
