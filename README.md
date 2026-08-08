# 📁 Drag & Drop File Uploader

A modern and responsive **Drag & Drop File Uploader** built with HTML, CSS, and JavaScript. Users can select or drag an image into the upload area, preview it instantly, and see a simulated upload progress bar.

The project also uses **localStorage** to persist uploaded images even after refreshing the page.

## ✨ Features

* 📂 Browse and select image files
* 🖱️ Drag & drop functionality
* 🖼️ Instant image preview
* 📏 Displays file name and file size
* ✅ JPG, PNG, and GIF validation
* ❌ Error message for invalid file types
* ⏳ Simulated upload progress bar
* 💾 Saves uploaded images using localStorage
* 🔄 Restores the uploaded image after page refresh
* 🗑️ Remove uploaded image and clear saved data
* 📱 Responsive and modern UI
* 🎨 Animated gradient background

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* FileReader API
* Drag & Drop API
* localStorage API

## 🧠 Concepts Practiced

This project helped me practice:

* HTML5 File Input API
* Drag & Drop events
* `FileReader`
* File type validation
* DOM manipulation
* Event listeners
* `setTimeout()`
* localStorage
* CSS gradients and animations
* Responsive UI design

## 🚀 How It Works

1. Select an image using **Browse Files** or drag an image into the upload area.
2. JavaScript validates the file type.
3. `FileReader` converts the image into a Data URL for previewing.
4. The file information and preview are displayed.
5. A simulated upload progress bar runs using `setTimeout()`.
6. The image is stored in `localStorage`.
7. After refreshing the page, the saved image is automatically restored.
8. The **Remove** button clears the saved image and resets the uploader.

## 📂 Project Structure

```text
Drag-Drop-File-Uploader/
│
├── index.html
├── style.css
└── script.js
```

## 🎯 Allowed File Types

The uploader accepts:

* `.jpg`
* `.png`
* `.gif`

## Live Deployment
LinkedIn: www.linkedin.com/in/syed-muhammad-alamdar-a57a33179
Website: https://portfolio-alamdar.netlify.app/
Live deployment: 

## 📌 Note

The upload process is **simulated** using JavaScript `setTimeout()` and does not send files to a real server or backend.

## 👨‍💻 Author

**Syed Muhammad Alamdar**

Built as part of my HTML, CSS & JavaScript internship project at Internee.pk.

---

⭐ If you like the project, feel free to star the repository!
