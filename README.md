# Personal Academic Website

This is a responsive academic portfolio template built with HTML, CSS, and JavaScript. It is designed for professors, admissions committees, and academic audiences.

## Features
- Home, About Me, Projects, Publications, Reports & Thesis, Contact pages
- Responsive design (mobile, tablet, desktop)
- Dark blue, white, and light grey color palette
- Sticky header and smooth scroll navigation
- FontAwesome icons
- Image/video gallery for projects
- Search filter for projects and publications
- Light/dark mode toggle (local storage)
- Contact form (EmailJS integration demo)
- Semantic HTML and accessibility best practices

## Folder Structure
```
website/
  ├── css/
  │     └── style.css
  ├── js/
  │     └── script.js
  ├── images/
  │     └── profile.jpg, project1.jpg, ...
  ├── pdf/
  │     └── cv.pdf, publication1.pdf, report1.pdf, thesis1.pdf, ...
  ├── videos/
  │     └── project1.mp4, ...
  ├── index.html
  ├── about.html
  ├── projects.html
  ├── publications.html
  ├── reports.html
  ├── contact.html
  └── README.md
```

## How to Replace Placeholder Content
1. **Profile Photo:** Replace `images/profile.jpg` with your own photo.
2. **Text Content:** Edit the HTML files to update your name, biography, project details, publication info, etc.
3. **CV & PDFs:** Add your CV and other documents to the `pdf/` folder and update the links in HTML.
4. **Project Images/Videos:** Add images to `images/` and videos to `videos/`. Update project cards in `projects.html`.
5. **Contact Info:** Update your email, LinkedIn, and GitHub links in `contact.html`.
6. **FontAwesome:** Replace `yourfontawesomekit.js` in the HTML `<script src="..."></script>` with your own FontAwesome kit link from https://fontawesome.com/start.
7. **Contact Form:** Integrate EmailJS by signing up at https://www.emailjs.com/, then replace the demo code in `js/script.js` with your EmailJS service/template IDs.

## How to Deploy on GitHub Pages
1. Create a new repository on GitHub (e.g., `yourusername/academic-website`).
2. Upload all files and folders inside the `website/` directory to your repository.
3. Go to your repository settings > Pages > Source, and select the `main` branch and `/ (root)` folder.
4. Save. Your site will be live at `https://yourusername.github.io/academic-website/`.

## Accessibility & Best Practices
- All images have `alt` tags.
- ARIA roles and labels are used for navigation and forms.
- Sufficient color contrast for readability.
- Semantic HTML structure.

---

**Replace all placeholder content with your real information for a professional academic portfolio!**
