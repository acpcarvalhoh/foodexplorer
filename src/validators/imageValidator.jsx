export const validateImage = (file) => {
    if (!file) {
      return 'Selecione uma imagem';
    }

    const fileExtension = file.name.split('.').pop().toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png'];

    if (allowedExtensions.includes(fileExtension)) {
      return null; 

    } else {
      return 'Extensões permitidas(jpg, jpeg, png)';
    }
};