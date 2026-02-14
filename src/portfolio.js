import emoji from "react-easy-emoji";

const greeting = {
  username: "Kaustubh Sharma",
  title: "Hi, I'm Kaustubh",
  subTitle: emoji("Platform Engineer & AI Infrastructure Architect 🚀 | LLM Platforms · GPU Optimization · AIOps · MCP Gateway · Agent Systems · Kubernetes")
};

const socialMediaLinks = {

  github: "https://github.com/kaustubhsh",
  linkedin: "https://www.linkedin.com/in/kaustubh-sharma/",
  gmail: "kaustubhsharma97@gmail.com",
  gitlab: "https://gitlab.com/kaustubhsh",
  // facebook: "https://www.facebook.com/kaustubh"
  // Instagram and Twitter are also supported in the links!
  instagram: "https://instagram.com/_kaustubhsh",
  twitter: "https://x.com/kaustubhsh_"
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Platform Engineering & AI Infrastructure at Scale",
  skills: [
    emoji("⚡ Platform Engineering for LLM — Kubernetes-native inference & training platforms"),
    emoji("⚡ GPU Infrastructure — NVIDIA MIG strategy, datacenter GPU orchestration & optimization"),
    emoji("⚡ AIOps & LLM Training Platforms — end-to-end ML lifecycle management"),
    emoji("⚡ C++ High Performance Computing — Multi-threading, Async IO, Modern C++ Standards (C++17/20)"),
    emoji("⚡ MCP Gateway & Agent Registry — LLM tool routing and agent discovery"),
    emoji("⚡ AI Agent HUB — centralized multi-agent orchestration & governance"),
    emoji("⚡ SDLC Automation & CI/CD — GitOps, ArgoCD, Kubernetes pipeline engineering")
  ],

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish",
      style: {
        color: "#00599C"
      }
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa-brands fa-kubernetes",
      style: {
        color: "#326CE5"
      }
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      style: {
        color: "#2496ED"
      }
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      style: {
        color: "#3776AB"
      }
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      style: {
        color: "#FF9900"
      }
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux",
      style: {
        color: "#FCC624"
      }
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      style: {
        color: "#F05032"
      }
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github",
      style: {
        color: "#181717"
      }
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
      style: {
        color: "#339933"
      }
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Kubernetes & Platform Engineering",
      progressPercentage: "95%"
    },
    {
      Stack: "GPU Infrastructure & NVIDIA Optimization",
      progressPercentage: "90%"
    },
    {
      Stack: "Modern C++ & High Performance Computing",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD & GitOps Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "LLM Platforms & AIOps",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false,
  experience: [
    {
      role: "Senior Platform Engineer — AI Infrastructure",
      company: "AI Infrastructure Solutions",
      companylogo: require("./assets/images/ai-logo.png"),
      date: "2023 - Present",
      desc: "Architecting and operating Kubernetes-based platforms for LLM training, inference, and agent orchestration at scale",
      descBullets: [
        "Designed LLM serving platform on Kubernetes with vLLM, Triton, and Ray for multi-model inference",
        "Implemented NVIDIA MIG strategy for GPU partitioning across datacenter GPU clusters",
        "Built MCP Gateway for LLM tool routing and Agent Registry for multi-agent discovery",
        "Created AIOps platform with real-time observability, anomaly detection, and auto-remediation",
        "Engineered CI/CD pipelines with ArgoCD, Helm, and GitOps for zero-downtime deployments"
      ]
    },
    {
      role: "Cloud & DevOps Engineer — AI Platforms",
      company: "Cloud AI Solutions",
      companylogo: require("./assets/images/cloud-logo.png"),
      date: "2022 - 2023",
      desc: "Built cloud-native AI infrastructure and SDLC automation frameworks",
      descBullets: [
        "Architected Kubernetes cluster fleet for ML workloads across AWS and Azure",
        "Built GPU scheduling and resource optimization layer for training jobs",
        "Implemented end-to-end SDLC automation with GitHub Actions, SonarQube, and Terraform",
        "Deployed AI Agent HUB for centralized agent lifecycle management and governance"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kaustubhsh", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I WORKED IN AND CREATED SOMETHING!!",
  projects: [
    {
      image: require("./assets/images/crioLogo.png"),
      link: "https://github.com/kaustubhsh/face-detection-on-server"
    },
    {
      image: require("./assets/images/code_buildLogo.png"),
      link: "https://github.com/kaustubhsh/Attendance-System-using-Group-Photo"
    },
    {
      image: require("./assets/images/adhocLogo.jpeg"),
      link: "https://github.com/kaustubhsh/streaming_over_the_server_facedetection"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    //   {
    //     // title: "Google Code-In Finalist",
    //     // subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //     // image: require("./assets/images/codeInLogo.webp"),
    //     // footerLink: [
    //       // { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
    //       // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
    //       // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
    //     // ]
    //   },
    //   {
    //     // title: "Google Assistant Action",
    //     // subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //     // image: require("./assets/images/googleAssistantLogo.webp"),
    //     // footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    //   },

    //   {
    //     // title: "PWA Web App Developer",
    //     // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //     // image: require("./assets/images/pwaLogo.webp"),
    //     // footerLink: [
    //     //   { name: "Certification", url: "" },
    //     //   { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //     // ]
    //   }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@kaustubhsh/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      // title: "Build Actions For Google Assistant",
      // subtitle: "Codelab at GDG DevFest Karachi 2019",
      // slides_url: "https://bit.ly/kaustubhsh-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECH, LISTEN TO PODCAST 🎙️",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://"
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1-",
  email_address: "kaustubhsharma97@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "kaustubhsh_"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
