function onHoverCV(x) {
    image = document.getElementById("btn-cv-download");
    if (x) {
        image.src = 'Assets/icon/btn_cv_hover.svg';
    } else {
        image.src = 'Assets/icon/btn_cv.svg';
    }
}

const skills = {
    hardSkills: [
        "Python",
        "Java",
        "C++",
        "C",
        "SQL",
        "Cypher",
        "HTML",
        "CSS",
        "JavaScript",
        "Computer Vision",
        "Artificial Intelligence",
        "Internet of Things"
    ],
    softSkills: [
        "Entrepreneur",
        "Collaborative",
        "Adaptive",
        "Problem Solving",
        "Critical Thinking",
        "Innovative"
    ]
};
        
let skillset = ``;
skillcontainer = document.getElementById("left-skill-content");
skills.hardSkills.forEach(skill => {
    skillset += `<div class="skillset">${skill}</div>`
});
skills.softSkills.forEach(skill => {
    skillset += `<div class="skillset pink">${skill}</div>`
});
skillcontainer.innerHTML = skillset;

const proj = [
    {
        id: 1,
        title: "Low-Resolution Face Recognition Attendance System",
        shortDesc: "Smart Attendance System on Single CCTV Indoor Class",
        longDesc: "Smart Attendance System on Single CCTV Indoor Class, with capabilities to recognise persons even very far away using GAN to enhance face recognition accuracy. build using the TensorFlow framework and deploy into edge AI with the TensorFlow Lite model and TensorRT model for IoT devices such as Jetson Nano or Rasberry Pi with half-precision quantization to mitigate limitness on edge devices. ",
        img: "Assets/projects/Project_VBFRAS.png",
    },
    {
        id: 2,
        title: "Masked Face Recogniton Attendance System",
        shortDesc: "Portable Attendance system using Edge Devices using Jetson Nano to identify Face identity even on masked persons.",
        longDesc: "Portable Attendance system using Edge Devices using Jetson Nano to identify Face identity even on masked persons. build using TensorFlow Framework and classify mask or non-mask person followed by identification for attendance system. the application also included Graphical User Interface with utilization of Qt Framework. ",
        img: "Assets/projects/Project_MFRAS.png",
    },
    {
        id: 3,
        title: "Point of Sales: SakuPOS",
        shortDesc: "Lorem Ipsum",
        longDesc: "A Point-of-Sales Application integrated with a Laundry System using IoT Devices to Control the Laundry Token Mechanism. The Role that I taken was  IT Solution Specialist. My responsibilities spanned from the initial conceptualization phase through to implementation and ongoing support Effective collaboration with stakeholders and cross-functional teams was paramount throughout the project, culminating in the delivery of an innovative solution that optimized operational processes and enhanced user experience.",
        img: "Assets/projects/Project_Saku.jpg",
    },
    {
        id: 4,
        title: "Desktop Apps: Just Du IT",
        shortDesc: "School project about make a GUI with MySQL and java Programming Language",
        longDesc: "We made a school project about make a GUI with MySQL and java Programming Language with a group of four, we know that day isn't an easy tasks since we need to work together without meeting face to face, like work from home since 2020's pandemic. so with help from GitHub, we made it proudly and on time without too much problem",
        img: "Assets/projects/Project_DuIt.png",
    },
    {
        id: 5,
        title: "PyGame tetris AI",
        shortDesc: "Tetris is a simple, tile-matching video games",
        longDesc: "Tetris is a simple, tile-matching video games, it is begin to viral in 90's to 21st century. but implementing with a simple AI with helped by python with pygame library, Our Team made it anyway, and it is awesome to see AI made quite abundant score and you know he can made it to level 12 which is even human cannot catch up. ",
        img: "Assets/projects/Project_TetrisAI.png",
    },
    {
        id: 6,
        title: "Sudoku Checker in C",
        shortDesc: "The First Algorithm code that executed in C Programming Language",
        longDesc: "Sudoku is a logic-based puzzle mathematical game. The First Algorithm code that executed in C Programming Language, This the very simple yet effective sudoku checker.",
        img: "Assets/projects/Project_C.png",
    },
]

projectContainer = document.getElementById("cardview-tableid");

proj.forEach(element => {
    projectContainer.innerHTML += `
        <div class="">
        <div class="card" id="card-projects" style="width: 22rem" data-id="${element.id}">
            <img src="${element.img}" alt="placeholder" class="card-img-top" style="width:100%">
            <div class="card-body">
            <h5>${element.title}</h5>
            <p>${element.shortDesc}</p>
            </div>
        </div>
        </div>
    `;
});

projectContainer.addEventListener('click', function(event) {
    let target = event.target;
    while (target && !target.classList.contains('card')) {
        target = target.parentElement;
    }
    if (target) {
        const id = target.getAttribute('data-id');
        const item = proj.find(d => d.id == id);
        
        if (item) {
        document.getElementById('exampleModalLabel').textContent = item.title;
        document.getElementById('exampleModalImage').src = item.img;
        document.getElementById('exampleModalDesc').textContent = item.longDesc;
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
        }
    }
});