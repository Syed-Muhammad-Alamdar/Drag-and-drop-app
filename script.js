const fileInput = document.getElementById("file-input");
const fileName = document.getElementById("file-name");
const fileSize = document.getElementById("file-size");
const previewContainer = document.getElementById("preview-container");
const errorMessage = document.getElementById("error-message");
const preview = document.getElementById("preview");
const dropZone = document.getElementById("drop-zone");

const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress");
const progressPercent = document.getElementById("progress-percent");
const uploadStatus = document.getElementById("upload-status");

const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif"
];

function handleFile(file) {

    if (!allowedTypes.includes(file.type)) {
        errorMessage.textContent =
            "Invalid file type. Please select a JPG, PNG, or GIF image.";

        previewContainer.style.display = "none";
        progressContainer.style.display = "none";

        return;
    }

    errorMessage.textContent = "";

    fileName.textContent = file.name;

    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    fileSize.textContent = `${sizeMB} MB`;

    previewContainer.style.display = "flex";

    const reader = new FileReader();

    reader.onload = function (event) {

        preview.src = event.target.result;

        localStorage.setItem("uploadedImage", event.target.result);
        localStorage.setItem("uploadedImageName", file.name);
        localStorage.setItem("uploadedImageSize", fileSize.textContent);

    };

    reader.readAsDataURL(file);

    simulateUpload();
}

function simulateUpload() {

    let progress = 0;

    progressContainer.style.display = "block";
    uploadStatus.textContent = "Uploading...";
    progressBar.style.width = "0%";
    progressPercent.textContent = "0%";

    function updateProgress() {

        progress += 20;

        progressBar.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;

        if (progress < 100) {

            setTimeout(updateProgress, 1000);

        } else {

            uploadStatus.textContent = "Upload complete! ✅";

        }
    }

    updateProgress();
}

fileInput.addEventListener("change", function (event) {

    const file = event.target.files[0];

    handleFile(file);

});

dropZone.addEventListener("dragover", function (event) {

    event.preventDefault();

    dropZone.classList.add("drag-over");

});

dropZone.addEventListener("dragleave", function () {

    dropZone.classList.remove("drag-over");

});

dropZone.addEventListener("drop", function (event) {

    event.preventDefault();

    dropZone.classList.remove("drag-over");

    const file = event.dataTransfer.files[0];

    handleFile(file);

});

const savedImage = localStorage.getItem("uploadedImage");
const savedImageName = localStorage.getItem("uploadedImageName");
const savedImageSize = localStorage.getItem("uploadedImageSize");

if (savedImage) {

    preview.src = savedImage;

    fileName.textContent = savedImageName;
    fileSize.textContent = savedImageSize;

    previewContainer.style.display = "flex";

    uploadStatus.textContent = "Image restored from storage ✅";
}

const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", function () {

    localStorage.removeItem("uploadedImage");
    localStorage.removeItem("uploadedImageName");
    localStorage.removeItem("uploadedImageSize");

    preview.src = "";
    fileName.textContent = "File Name";
    fileSize.textContent = "0 MB";

    previewContainer.style.display = "none";
    progressContainer.style.display = "none";

    uploadStatus.textContent = "";
    progressBar.style.width = "0%";
    progressPercent.textContent = "0%";

    fileInput.value = "";

});