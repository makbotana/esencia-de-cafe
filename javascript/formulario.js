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
    
    let validForm = true;

    if(data.nombre === ""){
        window.alert("Se require un nombre");
        validForm = false;
    }
    if(data.email === ""){
        window.alert("Se requiere un email");
        validForm = false;
    }
    if(data.telefono === ""){
        window.alert("Se requiere un número");
        validForm = false;
    }
    if(data.mensaje === ""){
        window.alert("Se requiere un mensaje");
        validForm = false;
    }

    if(
        !data.email.includes("@") || 
        !(data.email.endsWith(".com") ||
        data.email.endsWith(".org") ||
        data.email.endsWith(".edu") ||
        data.email.endsWith(".ar") ||
        data.email.endsWith(".gov")) 

    ){
        window.alert("No es un email válido");
        validForm = false;
    }

    if(isNaN(Number(data.telefono))){
        window.alert("Teléfono no es un número válido");
        validForm = false;
    }
    
    if(!validForm) return null;
    console.log(`Enviando formulario: ${JSON.stringify(data, null, 2)}`)
    
}