/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sumedh Vichare",
  title: "Hi all, I'm Sumedh",
  subTitle: emoji(
    "A Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VivZ5uWosUyEvEM4h7Ph9_MMZm_mkkEw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sumedhuv",
  linkedin: "https://www.linkedin.com/in/sumedh-vichare/",
  gmail: "sumedhuvichare@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/sumedh.vichare.5",
  instagram:"https://www.instagram.com/sumeddhhhh/",
  medium: "https://medium.com/@sumedhuvichare",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ High Level Designing for your web applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DJ Sanghvi College of Engineering",
      logo: require("./assets/images/DJSCE.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "August 2019 - June 2023, CGPA: 9.5/10",
      desc: "Relevant Coursework: Computer Networks, Data Structures, Algorithms, DBMS.",
      descBullets: [
        "Student Mentor at Unicode (Development Club)",
        "Chairperson at the IoT Club of Department of Computer Engineering"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming/DSA",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Reset Tech Pvt. Ltd",
      companylogo: require("./assets/images/rt.png"),
      date: "July 2022 – Jan 2023",
      desc: "Worked with a 5 member team on developing APIs to offer health consultation to clients on a mobile application",
      descBullets: [
        "Tech Used: MongoDb, ExpressJs, NodeJs, Swagger",
        "Optimised the customer support system and improved efficiency by 40-50%"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Meal Xpress",
      companylogo: require("./assets/images/mealxp.png"),
      date: "July 2021 – September 2021",
      desc: "Built a mobile application using react native for food delivery.",
      descBullets: [
        "Tech Used: React Native, Figma",
        "Built over 15 dynamic screens and deployed the app on Google Play Store"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Couple of interesting personal projects",
  projects: [
    {
      image: require("./assets/images/Qgen.png"),
      projectName: "QGen",
      projectDesc: "A novel approach for question generation using Natural Language Processing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://github.com/sumedhuv"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ImAud.png"),
      projectName: "ImAud",
      projectDesc: "A steganography technique that uses an unaltered audio file to hide images converted into base64 text format.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://github.com/sumedhuv"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


//research
const Research = {
  title: "Research and Publications",
  subtitle: "Publications done during my undergraduate studies.",
  projects: [
    {
      image: require("./assets/images/ipo.png"),
      projectName: "Online Examination Monitoring Device",
      projectDesc: "A patented device that facilitates hassle free conduction and proctoring of exam attendees.",
      footerLink: [
        {
          name: "Published Link",
          url: "https://patentscope.wipo.int/search/en/detail.jsf?docId=IN389949753&_cid=P21-LDREEW-40624-1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ieee.png"),
      projectName: "Intelligent Personal Secretariat for Effective Business Management",
      projectDesc: "A voice assistant enabled business management software solution. Paper in IEEE proceedings.",
      footerLink: [
        {
          name: "Conference Certificate",
          url: "https://drive.google.com/file/d/1ccs7ofR5lUPx0vf_4C4-Liyf1tegn0Ze/view?usp=share_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications and courses that I have completed !",

  achievementsCards: [
    {
      title: "AI for Everyone",
      subtitle:
        "Course by Deeplearning.ai taught by Dr. Andrew Ng.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13_bkl9RgzAbBAjyHXosceo17lywjs8NS/view?usp=share_link"
        },
        
      ]
    },
    {
      title: "Think Again I",
      subtitle:
        "Critical Thinking course by Duke University offered by Coursera.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1pL8j_fFxNxb7FiBYz5r0_EgMKJGme6AS/view?usp=share_link"
        },
        
      ]
    },
    {
      title: "Think Again II",
      subtitle:
        "Critical Thinking course by Duke University offered by Coursera.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1FNJVnWJ82PKjphXZwN-5c_CI7B0eJR97/view?usp=share_link"
        },
        
      ]
    },
    
    {
      title: "Modern Javascript",
      subtitle: "Course by Udemy covering the fundamentals of Javscript.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/10_4-yux4w-B0vOL0AV8QoQhVRyyK-fIq/view?usp=share_link"}
      ]
    },
    {
      title: "Mern Full Stack Course",
      subtitle:
        "Full Stack development course on LearnCodeOnline tutored by Hitesh Choudhary.",
      image: require("./assets/images/lco.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
           name: "Certification",
          url: "https://drive.google.com/file/d/10_4-yux4w-B0vOL0AV8QoQhVRyyK-fIq/view?usp=share_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sumedhvichare1", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  Research,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
