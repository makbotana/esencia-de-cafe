function enviarFormularioContacto(){
    const nombreElement = document.getElementById("name")
    const emailElement = document.getElementById("email")
    const telefonoElement = document.getElementById("tel")
    const mensajeElement = document.getElementById("message")

    const data = {
        nombre:nombreElement.value,
        email: emailElement.value, 
        telefono: telefonoElement.value,
        mensaje: mensajeElement.value, 
    }

    if(data.nombre === ""){
        window.alert("Se require un nombre");
        return null;
    }
    if(data.email === ""){
        window.alert("Se requiere un email");
        return null;
    }
    if(data.telefono === ""){
        window.alert("Se requiere un número");
        return null;
    }
    if(data.mensaje === ""){
        window.alert("Se requiere un mensaje");
        return null;
    }

    if(
        !data.email.includes("@") || 
        !data.email.endsWith(".com") ||
        !data.email.endsWith(".org") ||
        !data.email.endsWith(".edu") ||
        !data.email.endsWith(".ar") ||
        !data.email.endsWith(".gov") 

    ){
        window.alert("No es un email válido");
        return null;
    }

    if(isNaN(Number(data.telefono))){
        window.alert("Teléfono no es un número válido");
        return null;
    }
    
    console.log(`Enviando formulario: ${JSON.stringify(data, null, 2)}`)
    
}