export const projects = [
  {
    id: "movie-streaming-platform",
    title: "Movie Booking & Streaming Platform (Team Project)",
    category: "Full Stack",
    year: "2026",
    
    summary:
      "A full-stack MERN application for browsing movies, booking tickets, and streaming content with user authentication.",
    
    description:
      "Worked as part of a team to develop a movie booking and streaming platform using the MERN stack. The application allows users to explore movies, book tickets, and access streaming features through a responsive interface. Focused on both frontend development and backend integration, ensuring smooth data flow and user experience.",
    
    // image: "/projects/movie-streaming-platform.png",
    
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST API"],
    
    metrics: [
      "Movie listing and detail pages",
      "User authentication (JWT)",
      "Booking workflow system",
      "Responsive UI design"
    ],
    
    challenge:
      "Managing multiple features such as booking, streaming, and user authentication within a single application while maintaining a clean and scalable structure.",
    
    solution:
      "Implemented a modular architecture with clear separation between frontend and backend, used REST APIs for communication, and structured components to handle complex UI flows efficiently.",
    
    outcome:
      "Successfully delivered a functional full-stack platform demonstrating teamwork, MERN development skills, and the ability to handle real-world application complexity.",
    
    linkLabel: "View project details",
  },
  {
    id: "intern-management-system",
    title: "Comprehensive Intern Management System",
    category: "Full Stack",
    year: "2026",
    summary: "A comprehensive system for managing internships and related activities.",
    description:
      "This full-stack web application streamlines internship program management with dual dashboards for students and administrators. Students can track their performance with interactive charts, manage payments, apply for leave, and receive real-time notifications, while admins can oversee student records, approve requests, and upload schedules seamlessly.",
    image: "/projects/projectpic.png",
    stack: [ "Express.js","React.js", "Node.js", "MongoDB", "REST API"],
    metrics: [ "2 role-based views(Admin and User)", "Reusable UI blocks"],
    challenge:
      "The core challenge was students juggle assignments, daedlines, and attendance data across multiple platforms, leading to missed submissions and poor visibilty of perfomance in my Institute.",
    solution:
      "I used modular cards, clear metric grouping, and focused detail panels to create a calmer, more navigable dashboard.",
    outcome:
      "The result is a cleaner admin experience that presents key numbers quickly while still supporting deeper project analysis.",
    linkLabel: "View dashboard story",
  },
  {
    id: "Fragranzia-e-commerce",
    title: "Fragranzia E-Commerce",
    category: "Full Stack",
    year: "2025",
    summary: "Fragranzia is a modern e-commerce platform for discovering and purchasing premium fragrances with a smooth, user-friendly shopping experience.",
    description:
      "Fragranzia is a MERN-based e-commerce platform featuring dynamic product management, cart functionality, and secure JWT authentication for user sessions. The backend handles API requests, authentication, and data persistence, while the frontend delivers a responsive and intuitive shopping experience.",
    image: "/projects/",
    stack: ["React", "Express.js","JWT Authentication",  "MongoDB", "Node.js"],
    metrics: ["Mobile-first layout", "Collection filtering", "Editorial product modules"],
    challenge:
  "Managing user authentication, product data, and cart state across the application while ensuring smooth interaction between frontend and backend systems.",
    solution:
  "Implemented JWT-based authentication for secure user sessions, built REST APIs for product and user management, and structured the frontend using reusable components with proper state handling for cart and user flows.",
    outcome:
"Built a scalable full-stack e-commerce platform that showcases strong backend integration, secure user flows, and a clean, responsive interface." ,
   linkLabel: "Explore storefront case study",
    feature: ["Product catalog with detailed pages","Add to cart and checkout flow","JWT-based authentication (login/signup, protected routes)","Responsive UI across devices", "Backend APIs for data and user management"]
  },
  {
  id: "kiddy-ecommerce",
  title: "Kiddy E-Commerce",
  category: "Frontend",
  year: "2026",
  summary: "A frontend e-commerce application built using React, fetching real-time product data from an external API.",
  
  description:
    "Developed a responsive e-commerce interface that displays products, categories, and detailed views by integrating the FakeStore API. Focused on clean UI, component structure, and smooth user experience.",
  
  // image: "/projects/kiddy-ecommerce.png",
  
  stack: ["React", "JavaScript (ES6+)", "FakeStore API", "CSS / Tailwind"],
  
metrics: [
  "Dynamic product listing",
  "Category filtering",
  "Cart UI functionality",
  "API integration with loading states"
],
  
  challenge:
    "Handling external API data efficiently while maintaining a smooth and responsive user interface.",
  
  solution:
    "Implemented structured component architecture and used asynchronous data fetching to display products dynamically with proper loading states.",
  
  outcome:
    "Delivered a clean and functional e-commerce interface demonstrating frontend development skills and API integration.",
  
  linkLabel: "View project",
},
];
