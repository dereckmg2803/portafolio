export function downloadCV(event) {
    event.preventDefault(); // Evita que el enlace funcione normalmente
  
    const link = document.createElement('a');
    link.href = '/assets/docs/DERECK_MONTES_CV.pdf'; // Ruta correcta a tu archivo PDF
    link.download = 'DERECK_MONTES_CV.pdf'; // Nombre del archivo a descargar
  
    // Asegurarse de que el navegador soporte la descarga
    if (link.href) {
      link.click(); // Simula un clic en el enlace para iniciar la descarga
    } else {
      alert('No se pudo encontrar el archivo para descargar.');
    }
  }
  
  export default downloadCV;
  