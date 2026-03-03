export const projects = (showCard: string) =>{
    
    return [
       {
      id: 1,
      tags: ["web-apps", "AI", "Python", "FastAPI"],
      category:"web-apps",
      ImageHref: "/images/veroxos.png",
      title: "Veroxos",
      button: "Demo",
      buttonHref: "https://veroxos.com",
      github:"https://github.com/hikmat12345/veroxos-backend-services",
      behance:"",
      showCard: showCard,
      description: "Veroxos is an expance management platform that provides AI-powered code review automation for Bitbucket repositories, enhancing code quality and development efficiency.",
    }, 
  
      {
        id: 2,
        tags: ["web-apps",  "Next.js", "MUI", "TypeScript"],
        category:"web-apps",
        ImageHref: "/images/expert.png",
        title: "Expert Bookings Platform",
        button: "Demo",
        buttonHref: "https://expert.one/",
        github:"https://github.com/hikmat12345/new-expert",
        behance:"https://www.behance.net/gallery/137288555/Service-based-React-app",
        showCard: showCard,
      },
              {
        id: 1,
        tags: ["web-apps", "Next.js", "Python", "TypeScript"],
        category:"web-apps",
        ImageHref: "/images/best-tailwind-templates.webp",
        title: "Dogwood Analytic",
        button: "Demo",
        buttonHref: "https://dogwoodsuite.com/",
        github:"https://github.com/hikmat12345/dw-analytic",
        behance:"https://www.behance.net/gallery/173373739/Dogwood-analytic",
        description: "Data analytics dashboard built with Next.js and Tailwind CSS, featuring interactive visualizations and customizable themes for enhanced data insights.",
        showCard: showCard,
      },
    {
      id: 2,
      tags: ["web-apps", "Enterprise", "Nextjs", "Node.js"],
      category:"web-apps",
      ImageHref: "/images/cscs.jpg",
      title: "CSCS Platform",
      button: "Demo",
      buttonHref: "https://www.cscs.uk.com/",
      github:"",
      behance:"",
      description: "CSCS Construction Skills Certification Scheme platform for construction industry workforce management and certification",
      showCard: showCard,
    },
    {
      id: 18,
      tags: ["web-apps", "AI", "Nextjs", "Node.js"],
      category:"web-apps",
      ImageHref: "/images/artbase-ai.png",
      title: "Artbase.AI",
      button: "Demo",
      buttonHref: "https://artbase.ai",
      github:"",
      behance:"",
      description: "Video editing platform that uses AI to automate video generation and editing processes, enabling users to create professional-quality videos with ease.",
      showCard: showCard,
    },

      {
        id: 3,
        tags: ["web-apps", "React", "Tailwind"],
        category:"web-apps",
        ImageHref: "/images/dr-clinica.png",
        title: "ClinicsHub",
        button: "Demo",
        buttonHref: "https://clinicshub.app/",
        github:"https://github.com/hikmat12345/dr-clinica-customer",
        behance:"https://www.behance.net/gallery/173374311/Dr-clinica-partner",
        showCard: showCard,
      },
      {
        id: 66,
        tags: ["web-apps", "React", "Tailwind"],
        category:"web-apps",
        ImageHref: "/images/dr-clinica.png",
        title: "Dr Clinica",
        button: "Demo",
        buttonHref: "https://drclinica.com/",
        github:"https://github.com/hikmat12345/dr-clinica-customer",
        behance:"https://www.behance.net/gallery/173374311/Dr-clinica-partner",
        showCard: showCard,
      },
      {
        id: 4,
        tags: ["web-apps", "React", "Typescript", "MUI"],
        category:"web-apps",
        ImageHref: "/images/beeyond-boats.jpg",
        title: "Luxary Boat Rental Platform",
        button: "Demo",
        buttonHref: "https://beeyondboats.com/",
        github:"",
        behance:"https://www.behance.net/gallery/137289483/Beyond-Boats-(Service-base-app-)-MERN-stack",
        showCard: showCard,
      },
      
      {
        id: 5,
        tags: ["web-apps", "React",  "MUI", "TypeScript"],
        category:"web-apps",
        ImageHref: "/images/plexaar.png",
        title: "Plexar ERP System",
        button: "Demo",
        buttonHref: "https://plexaar.com/",
        github:"https://github.com/hikmat12345/Plexaar-ERP",
        behance:"",
        showCard: showCard,
      },
    
    
    {
      id: 6,
      tags: ["web-apps",  "Next.js", "Bootstrap"],
      category:"web-apps",
      ImageHref: "/images/chelsford.png",
      title: "Chelsford LMS System",
      button: "Demo",
      buttonHref: "https://chelsford.com/",
      github:"",
      behance:"",
      showCard: showCard,
    },
    {
      id: 7,
      tags: ["web-apps", "React",  "MUI"],
      category:"web-apps",
      ImageHref: "/images/calendex.png",
      title: "Calendex BP",
      button: "Internal",
      buttonHref: "#",
      github:"",
      behance:"",
      showCard: showCard,
    },
    {
      id: 8,
      tags: ["web-apps",  "Next.js", "Bootstrap"],
      category:"web-apps",
      ImageHref: "/images/rovel.png",
      title: "Rovel Inventory MS",
      button: "Internal",
      buttonHref: "#",
      github:"",
      behance:"",
      showCard: showCard,
    },
    {
      id: 9,
      tags: ["web-apps", "React",   "MUI"],
      category:"web-apps",
      ImageHref: "/images/docloud.png",
      title: "Docloud",
      button: "Internal",
      buttonHref: "#",
      github:"",
      behance:"",
      showCard: showCard,
    }
  ]
}

export const data = {
    name: "Hikmat Ullah Khan",
    description:
      "Senior Full-Stack Developer with 6+ years of experience specializing in modern web technologies. Expert in React.js, Next.js, Node.js, and Python FastAPI. Proficient in AI integration, vector databases, Retrieval-Augmented Generation (RAG), and prompt engineering. AWS Certified Developer with extensive cloud solutions expertise. Passionate about building scalable, secure, and high-performance applications with focus on user experience and code quality.",
    resumeLink: "/resume.pdf",
    contactLink: "https://calendly.com/hikmatullahit/30min",
  };
export const skillsData :{title: string, tools: {name: string, icon: string, skillSet: {name: string, skillNameLink: string}[]}[]} =
    {
      title: "Design Skills",
      tools : [
        {
          name: "Frontend Development",
          icon: "/img/reactjs.png",
          skillSet: [
            {name: "React.js", skillNameLink : "https://reactjs.org/",},
            {name: "Next.js", skillNameLink : "https://nextjs.org/",},
            {name: "Angular", skillNameLink : "https://angular.io/",},
            {name: "Vue.js", skillNameLink : "https://vuejs.org/",},
            {name: "TypeScript", skillNameLink : "https://www.typescriptlang.org/",},
            {name: "JavaScript", skillNameLink : "https://www.javascript.com/",},
            {name: "CSS", skillNameLink : "https://developer.mozilla.org/en-US/docs/Web/CSS",},
            {name: "HTML", skillNameLink : "https://developer.mozilla.org/en-US/docs/Web/HTML",},
            {name: "Three.js", skillNameLink : "https://threejs.org/",},
            {name: "D3.js", skillNameLink : "https://d3js.org/",},
            {name: "Jest", skillNameLink : "https://jestjs.io/",},
            {name: "Cypress", skillNameLink : "https://www.cypress.io/",},
            {name: "Socket.io", skillNameLink : "https://socket.io/",},
            {name: "WebRTC", skillNameLink : "https://webrtc.org/",},
            {name: "WordPress & Hubspot", skillNameLink : "https://wordpress.org/",},
          ]
        }, 
        {
          name: "Backend Development",
          icon: "/img/nodejs.png",
          skillSet: [
            {name:"Express.js",skillNameLink : "https://expressjs.com/",},
            {name:"Nest.js",skillNameLink : "https://nestjs.com/",},
            {name:"Python FastAPI",skillNameLink : "https://fastapi.tiangolo.com/",},
            {name:"Django",skillNameLink : "https://www.djangoproject.com/",},
            {name:"TypeScript",skillNameLink : "https://www.typescriptlang.org/",},
            {name:"ORMs",skillNameLink : "https://www.prisma.io/",},
            {name:"MySQL",skillNameLink : "https://www.mysql.com/",},
            {name:"GraphQL",skillNameLink : "https://graphql.org/",},
            {name:"Postgre",skillNameLink : "https://www.postgresql.org/",},
            {name:"MongoDB",skillNameLink : "https://www.mongodb.com/",},
            {name:"Redis",skillNameLink : "https://redis.io/",},
            {name:"Socket & WebRTC",skillNameLink : "https://socket.io/",},
            {name : "Serverless", skillNameLink : "https://www.serverless.com/",},
            {name: "DynamoDB", skillNameLink : "https://aws.amazon.com/dynamodb/",},
          ]
        },
        {
          name: "DevOps",
          icon: "/img/devops.png",
          skillSet: [
            {name:"Git",skillNameLink : "https://git-scm.com/",}, 
            {name:"CD/CI", skillNameLink : "",},
            {name:"Docker",skillNameLink : "https://www.docker.com/",},
            {name:"AWS",skillNameLink : "https://aws.amazon.com/",},
            {name:"Heroku",skillNameLink : "https://www.heroku.com/",},
            {name:"Netlify",skillNameLink : "https://www.netlify.com/",},
            {name:"Vercel",skillNameLink : "https://vercel.com/",},
            {name:"Digital Ocean",skillNameLink : "https://www.digitalocean.com/",},
          ]
        }
      ]
    } 
 export const educationData = [
    {
      period:  "2015 - 2019",
      company: "KUST University",
      title: "Bachelor of Computer Science",
      description: "Graduated with a Bachelor's degree in Computer Science from KUST University. Developed a strong foundation in computer science principles, algorithms, and data structures. Completed coursework in software engineering, database management, and web development. Participated in various projects, gaining hands-on experience in developing scalable web applications.",
    }
    
  ];

 export const experienceData = [
    {
      period:  "2024 - Present",
      company: "TEO",
      title: "Senior Frontend Engineer - React.js & Python FastAPI",
      description: "Senior Full-stack Developer specializing in React.js and Python FastAPI with expertise in AI-powered features. Integrated AI-powered customer support systems using LLM technology, developed offline-capable chat modules, and created code review automation for Bitbucket. Working on enterprise applications with vector databases, RAG implementations, and Generative AI solutions.",
    },
    {
      period:  "2023 - Present",
      company: "Selteq IT Solution",
      title: "Fullstack Developer",
      description: "Working as a Fullstack Developer at Selteq IT Solution, Islamabad. Responsible for developing scalable web applications using modern JavaScript frameworks like React, Next, Angular, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    }, 
    {
      period:  "2022 - 2023",
      company: "VOUS(LeadVy)",
      title: "Fullstack Software Engineer",
      description: "Worked as a Fullstack Software Engineer at VOUS(LeadVy), Dubai. Developed and maintained web applications using React, Next.js, and Node.js. Implemented RESTful APIs and GraphQL endpoints for secure and efficient communication between services.",
    },
    {
      period:  "2020 - 2022",
      company: "AIVATEK",
      title: "Fullstack Software Engineer",
      description: "Worked as a Fullstack Software Engineer at AIVATEK, Islamabad. Developed and maintained web applications using React, Angular, and Node.js. Implemented secure and efficient code practices to optimize application performance.",
    },
    {
      period:  "2019 - 2020",
      company: "Cyber Peak Solution",
      title: "Frontend Developer",
      description: "Worked as a Frontend Developer at Cyber Peak Solution, Rawalpindi. Developed and maintained web applications using React, Angular, and Vue.js. Collaborated with UX/UI designers to create visually appealing and user-friendly interfaces.",
    }
  ];

 export  const certificatesData = [
    {
      logo: "/images/aws-certificate.jpg",
      title: "AWS Certified Developer - Associate",
      membershipId: "XXXX",
      date: "26 Dec 2024",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e964a9ce2a214709820a07544730daa0",
    },
    {
      logo: "/images/aws-certificate.jpg",
      title: "AWS Certified Developer - Associate",
      membershipId: "XXXX",
      date: "26 Dec 2024",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e964a9ce2a214709820a07544730daa0",
    },
  ];

  export const services = [
    {
      title: "Full-Stack Development",
      description:  "Building end-to-end web applications, skilled in creating scalable and efficient solutions tailored to client needs. Focused on implementing <strong style=' color: #333333; font-weight: 500;'>secure mechanisms</strong>, <strong style=' color: #333333; font-weight: 500;'>multi-layer security</strong>, and efficient <strong style=' color: #333333; font-weight: 500;'>caching strategies</strong> to ensure optimal performance. Experienced in <strong style=' color: #333333; font-weight: 500;'>optimizing UI</strong> and utilizing <strong style=' color: #333333; font-weight: 500;'>loading mechanisms</strong> to enhance user experience.",
      icon: "fa-stack",
    },
    {
      title: "Languages and Tools",
      description: "Proficient in <span style=' color: #54ca95; font-weight: bold;'>primary languages:</span> like <strong style=' color: #333333; font-weight: 500;'>TypeScript</strong>, <strong style=' color: #333333; font-weight: 500;'>JavaScript</strong>, <strong style=' color: #333333; font-weight: 500;'>CSS</strong>, and <strong style=' color: #333333; font-weight: 500;'>HTML</strong>. Experienced with <strong style=' color: #333333; font-weight: 500;'>React</strong>, <strong style=' color: #333333; font-weight: 500;'>Next.js</strong>, <strong style=' color: #333333; font-weight: 500;'>Angular</strong>, <strong style=' color: #333333; font-weight: 500;'>Vue.js</strong>, and testing frameworks such as <strong style=' color: #333333; font-weight: 500;'>Jest</strong>, <strong style=' color: #333333; font-weight: 500;'>Mocha</strong>, and <strong style=' color: #333333; font-weight: 500;'>Cypress</strong>. Proficient in <span style='color: #3b82f6;font-weight: bold;'>backend technologies:</span> including <strong style=' color: #333333; font-weight: 500;'>Node.js</strong>, <strong style=' color: #333333; font-weight: 500;'>Express</strong>, <strong style=' color: #333333; font-weight: 500;'>Nest.js</strong>, <strong style=' color: #333333; font-weight: 500;'>Python FastAPI</strong>, <strong style=' color: #333333; font-weight: 500;'>Django</strong>, and <strong style=' color: #333333; font-weight: 500;'>Java Spring Boot</strong>.",
      icon: "fa-code",
    },
    {
      title: "API Development",
      description: "Designing and implementing <strong style=' color: #333333; font-weight: 500;'>RESTful</strong> and <strong style=' color: #333333; font-weight: 500;'>GraphQL</strong> APIs, focused on secure, high-performance communication between services. Experienced in <strong style=' color: #333333; font-weight: 500;'>Redis</strong> and caching mechanisms to optimize API performance, ensuring fast and high-throughput APIs.",
      icon: "fa-server",
    },
    {
      title: "WebSocket and WebRTC",
      description: "Proficient in using <strong style=' color: #333333; font-weight: 500;'>WebSocket</strong> for real-time communication and <strong style=' color: #333333; font-weight: 500;'>WebRTC</strong> for peer-to-peer media exchange, enabling seamless video and audio interactions.",
      icon: "fa-mobile-alt",
    },
    {
      title: "Database Management",
      description: "Experienced in managing relational databases like <strong style=' color: #333333; font-weight: 500;'>PostgreSQL</strong> and <strong style=' color: #333333; font-weight: 500;'>MySQL</strong>, as well as <strong style=' color: #333333; font-weight: 500;'>NoSQL</strong> solutions like <strong style=' color: #333333; font-weight: 500;'>MongoDB</strong> for dynamic data handling.",
      icon: "fa-database",
    },
    {
      title: "Optimization and Debugging",
      description: "Improving performance of existing codebases and resolving complex technical issues. Ensuring clean, efficient, and reusable code practices.",
      icon: "fa-code",
    },
    {
      title: "AWS Services and Security",
      description: "Proficient in using <strong style=' color: #333333; font-weight: 500;'>AWS</strong> services for building scalable cloud solutions and implementing robust security protocols to safeguard applications.",
      icon: "fa-aws",
    },
    {
      title: "Attractive Frontend UI & Data Visualization",
      description: "Creating visually appealing and user-friendly interfaces to enhance the overall user experience. Expertise includes <strong style=' color: #333333; font-weight: 500;'>Tailwind CSS</strong>, <strong style=' color: #333333; font-weight: 500;'>Shadcn/ui</strong>, <strong style=' color: #333333; font-weight: 500;'>Three.js</strong> for 3D graphics, <strong style=' color: #333333; font-weight: 500;'>D3.js</strong> for data visualizations, and <strong style=' color: #333333; font-weight: 500;'>Remotion</strong> for video generation.",
      icon: "fa-paint-brush",
    }
  ];

export const socialLinks = {
  github: "https://github.com/hikmat12345",
  linkedin: "https://linkedin.com/in/hikmatullahkhan",
  medium: "https://medium.com/@hikmatullahmcs",
  awsCertificate: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e964a9ce2a214709820a07544730daa0",
  calendly: "https://calendly.com/hikmatullahit/30min"
};

export const githubProjects = [
  { name: "veroxos-backend-services", link: "https://github.com/hikmat12345/veroxos-backend-services", description: "Backend services framework" },
  { name: "customer-admin-portal-frontend", link: "https://github.com/hikmat12345/customer-admin-portal-frontend", description: "Admin dashboard frontend" },
  { name: "python-fastapi", link: "https://github.com/hikmateduta-stse/eduta-backend", description: "FastAPI backend services" },
  { name: "pr-validation-copilot", link: "https://github.com/hikmat12345/pr-validation-copilot", description: "PR validation automation tool" },
  { name: "code-evaluation", link: "https://github.com/hikmat12345/code-evaluation", description: "Code quality evaluation tool" },
  { name: "dr-clinica-customer", link: "https://github.com/hikmat12345/dr-clinica-customer", description: "Dr Clinica customer portal" },
  { name: "dr-clinica-partner", link: "https://github.com/hikmat12345/dr-clinica-partner", description: "Dr Clinica partner portal" },
  { name: "Expert-Frontend", link: "https://github.com/hikmat12345/Expert-Frontend", description: "Expert platform frontend" },
  { name: "new-expert", link: "https://github.com/hikmat12345/new-expert", description: "Expert platform - latest version" },
  { name: "dogwood", link: "https://github.com/hikmat12345/dogwood", description: "Dogwood Analytics" },
  { name: "fiducia", link: "https://github.com/hikmat12345/fiducia", description: "Fiducia dashboard" },
  { name: "teaching-ai-nodejs", link: "https://github.com/hikmat12345/teaching-ai-nodejs", description: "AI with Node.js tutorial" },
];
  
  