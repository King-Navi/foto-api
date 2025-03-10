const API_URL = 'http://localhost:3000/api/photos';

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const photo = document.getElementById('photo').files[0];

    if (!userId || !photo) {
        alert('Por favor ingrese todos los campos');
        return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('photo', photo);

    try {
        const response = await fetch(`${API_URL}/upload`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        alert(data.message);
        loadPhotos(userId);
    } catch (error) {
        console.log("Error al subir la foto", error);
    }
});

const loadPhotos = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`);
        const photos = await response.json();
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";

        photos.forEach((photo) => {
            const photoCard = document.createElement("div");
            photoCard.classList.add("photo-card");

            photoCard.innerHTML = `
                <img src="http://localhost:3000/${photo.imageUrl}" alt="Foto subida">
                <button onclick="deletePhoto('${photo._id}', '${userId}')">Eliminar</button>
            `;
            gallery.appendChild(photoCard);
        });
    }
    catch (error) {
        console.log("Error al cargar las fotos: ", error);
    }
};

const deletePhoto = async (photoId, userId) => {
    try {
        await fetch(`${API_URL}/${photoId}`, { method: "DELETE" });
        alert("Foto eliminada correctamente");
        loadPhotos(userId);
    } catch (error) {
        console.log("Error al eliminar la foto", error);
    }
};

loadPhotos(12345);

