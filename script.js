function onHoverCV(x) {
    const image = document.getElementById("btn-cv-download");
    if (image) {
        if (x) {
            image.src = 'Assets/icon/btn_cv_hover.svg';
        } else {
            image.src = 'Assets/icon/btn_cv.svg';
        }
    }
}

// Skills Section
const skills = {
    hardSkills: [
        "Python", "SQL", "Cypher", "PySpark", "JavaScript", "Java", "C++", "C",
        "PyTorch", "TensorFlow", "HuggingFace", "TensorRT",
        "Redis", "Kafka", "Elasticsearch", "PostgreSQL", "Memgraph", "Nebula",
        "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD", "GCP", "Azure", "AWS",
        "OpenCV", "NLTK", "Pydantic", "OpenManus", "MCP", "ReAct", "SearXNG", "Puppeteer", "Trafilatura", "BeautifulSoup",
        "HTML", "CSS",
        "Computer Vision", "NLP", "LLMs", "Generative AI", "Deep Learning", "Machine Learning"
    ],
    softSkills: [
        "Problem Solving", "Critical Thinking", "Collaboration", "Adaptability",
        "Initiative", "Analytical Thinking", "Continuous Learning", "Time Management", "Code Quality"
    ]
};

// Render Skills
window.addEventListener('DOMContentLoaded', function() {
    const skillcontainer = document.getElementById("left-skill-content");
    if (skillcontainer) {
        let skillset = '';
        skills.hardSkills.forEach(skill => {
            skillset += `<div class="skillset">${skill}</div>`;
        });
        skills.softSkills.forEach(skill => {
            skillset += `<div class="skillset pink">${skill}</div>`;
        });
        skillcontainer.innerHTML = skillset;
    }
});

// Projects Data
const proj = [
    {
        id: 1,
        title: "AduMas AI Dashboard",
        shortDesc: "Multi-AI Agent System for Public Complaint Management",
        longDesc: "Led and deployed a dynamic and configurable multiple AI agents system with various state-of-the-art models for a Public Complaint (Aduan Masyarakat) AI-backbone dashboard engine. The system is currently used by 20+ government clients and features advanced NLP capabilities for complaint classification, sentiment analysis, and automated response generation. Achieved 200% improvement in end-to-end inference efficiency through optimization of the multi-AI-agent inference engine deployed in Kubernetes environment.",
        images: [
            "Assets/projects/AduMas/adumas_1.png",
            "Assets/projects/AduMas/adumas_2.png",
            "Assets/projects/AduMas/adumas_3.png",
            "Assets/projects/AduMas/adumas_4.png",
            "Assets/projects/AduMas/adumas_5.png",
            "Assets/projects/AduMas/adumas_6.png",
            "Assets/projects/AduMas/adumas_7.png"
        ]
    },
    {
        id: 2,
        title: "eBSearch - AI-Powered Web Search Platform",
        shortDesc: "Internal search platform with generative AI integration",
        longDesc: "Led the complete revamp and AI integration of the internal web search platform (eBSearch), achieving 250% faster performance and significantly higher accuracy with generative AI models. Implemented advanced retrieval-augmented generation (RAG) techniques, semantic search capabilities, and integration with multiple LLM providers. The platform now serves as the company's primary knowledge discovery tool with improved relevance scoring and context-aware responses.",
        images: [
            "Assets/projects/eBSearch/ebsearch_1.png"
        ]
    },
    {
        id: 3,
        title: "Low-Resolution Face Recognition Attendance System",
        shortDesc: "Smart Attendance System on Single CCTV Indoor Class",
        longDesc: "Developed an automatic attendance system using Python with enhanced input images using GAN technology to improve recognition accuracy on low-resolution feeds. Gathered data, preprocessed, fine-tuned existing pre-trained models, and evaluated the model for custom identification. Implemented numerous deployment models for Desktop and IoT devices like TensorRT and TensorFlow Lite Model with quantization optimizations for IoT devices to minimize inference time with acceptable accuracy trade-offs.",
        images: ["Assets/projects/Project_VBFRAS.png"]
    },
    {
        id: 4,
        title: "Masked Face Recognition Attendance System",
        shortDesc: "Portable attendance system using Edge Devices with mask detection",
        longDesc: "Developed a portable automatic attendance system using Python with mask and non-mask classification combined with identity recognition capabilities. Built using TensorFlow Framework to classify mask or non-mask persons followed by identification for the attendance system. Implemented Qt as a Visual Graphical User Interface based on Python and C++ programming languages. The system runs efficiently on Jetson Nano edge devices with TensorFlow Lite Model deployment.",
        images: ["Assets/projects/Project_MFRAS.png"]
    },
    {
        id: 5,
        title: "Point of Sales: SakuPOS",
        shortDesc: "POS Application integrated with IoT-based Laundry System",
        longDesc: "A Point-of-Sales Application integrated with a Laundry System using IoT Devices to Control the Laundry Token Mechanism. Served as IT Solution Specialist with responsibilities spanning from initial conceptualization through implementation and ongoing support. Delivered an innovative solution that optimized operational processes and enhanced user experience. The system successfully deployed across 40 outlets in Jabodetabek and Medan area, improving operational productivity by 25% through dedicated feature development.",
        images: ["Assets/projects/Project_Saku.jpg"]
    },
    {
        id: 6,
        title: "Desktop Apps: Just Du IT",
        shortDesc: "School project - GUI application with MySQL and Java",
        longDesc: "Developed a comprehensive GUI application using MySQL database and Java Programming Language as a team project. Successfully coordinated with a group of four members during the 2020 pandemic, utilizing GitHub for remote collaboration. Implemented full CRUD operations, user authentication, and data visualization features. The project demonstrated effective remote teamwork and version control practices, delivering on time despite challenges.",
        images: ["Assets/projects/Project_DuIt.png"]
    },
    {
        id: 7,
        title: "PyGame Tetris AI",
        shortDesc: "AI-powered Tetris game using reinforcement learning",
        longDesc: "Implemented a Tetris game with AI capabilities using Python and pygame library. The AI agent uses reinforcement learning techniques to play the game autonomously, achieving impressive scores reaching level 12, surpassing typical human performance. The project demonstrates practical application of game AI, state evaluation, and decision-making algorithms in a classic puzzle game environment.",
        images: ["Assets/projects/Project_TetrisAI.png"]
    },
    {
        id: 8,
        title: "Sudoku Checker in C",
        shortDesc: "Algorithm implementation for Sudoku validation",
        longDesc: "Developed a Sudoku validation algorithm using C Programming Language. This project represents foundational work in algorithm design and implementation, featuring efficient validation logic to check if a Sudoku puzzle solution is correct. The implementation demonstrates understanding of array manipulation, logic operations, and algorithm optimization in C.",
        images: ["Assets/projects/Project_C.png"]
    },
];

// Render Projects
window.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById("cardview-tableid");
    if (projectContainer) {
        let projectHTML = '';
        proj.forEach(element => {
            const thumbnailImg = element.images[0];
            projectHTML += `
                <div class="card" id="card-projects" style="width: 22rem" data-id="${element.id}">
                    <img src="${thumbnailImg}" alt="${element.title}" class="card-img-top" style="width:100%">
                    <div class="card-body">
                        <h5>${element.title}</h5>
                        <p>${element.shortDesc}</p>
                    </div>
                </div>
            `;
        });
        projectContainer.innerHTML += projectHTML;
        
        // Add event listener for project cards
        projectContainer.addEventListener('click', handleProjectClick);
    }
});

// Handle Project Card Click
function handleProjectClick(event) {
    let target = event.target;
    while (target && !target.classList.contains('card')) {
        target = target.parentElement;
    }
    
    if (target && target.hasAttribute('data-id')) {
        const id = parseInt(target.getAttribute('data-id'));
        const item = proj.find(d => d.id === id);
        
        if (item) {
            showProjectModal(item);
        }
    }
}

// Show Project Modal with Carousel
function showProjectModal(item) {
    // Set modal title
    const modalTitle = document.getElementById('exampleModalLabel');
    if (modalTitle) {
        modalTitle.textContent = item.title;
    }
    
    // Set modal description
    const modalDesc = document.getElementById('exampleModalDesc');
    if (modalDesc) {
        modalDesc.textContent = item.longDesc;
    }
    
    // Build carousel
    const carouselImagesContainer = document.getElementById('carouselImages');
    const carouselIndicatorsContainer = document.getElementById('carouselIndicators');
    const carousel = document.getElementById('projectCarousel');
    
    if (carouselImagesContainer && carouselIndicatorsContainer && carousel) {
        // Clear previous content
        carouselImagesContainer.innerHTML = '';
        carouselIndicatorsContainer.innerHTML = '';
        
        // Add images to carousel
        item.images.forEach((imgSrc, index) => {
            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `<img src="${imgSrc}" class="d-block w-100" alt="${item.title} - Image ${index + 1}">`;
            carouselImagesContainer.appendChild(carouselItem);
            
            // Create indicator
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.setAttribute('data-bs-target', '#projectCarousel');
            indicator.setAttribute('data-bs-slide-to', index.toString());
            if (index === 0) {
                indicator.className = 'active';
                indicator.setAttribute('aria-current', 'true');
            }
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            carouselIndicatorsContainer.appendChild(indicator);
        });
        
        // Hide carousel controls if only one image
        if (item.images.length === 1) {
            carousel.classList.add('carousel-single-image');
        } else {
            carousel.classList.remove('carousel-single-image');
        }
    }
    
    // Show modal
    const modalElement = document.getElementById('exampleModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
        const myModal = new bootstrap.Modal(modalElement);
        myModal.show();
    }
}