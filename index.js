
    function mostrarToast() {
        var toast = document.getElementById("toast");
        toast.style.display = "block"; // Mostrar el toast
        toast.style.opacity = "1"; 

        
        setTimeout(function() {
            toast.style.opacity = "0"; // Desvanecer el toast
            setTimeout(function() {
                toast.style.display = "none"; // Ocultar después del desvanecimiento
            }, 500); // Tiempo de desvanecimiento
        }, 6000); // Tiempo que el toast estará visible
    }
    // Mostrar el toast al cargar la página
    window.onload = function() {
        mostrarToast();
    };
