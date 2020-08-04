import emoji from "react-easy-emoji";

const greeting = {

  username: "Kaustubh Sharma",
  title: "Hi all, I'm Kaustubh",
  nickname: "6R1nD3r",
  subTitle: emoji("A passionate Cyber Security enthusiast 🚀 having an experience of building Web applications with JavaScript / Python / Nodejs / Flask and some other cool libraries and frameworks."),
  resumeLink: "https://bit.ly/resume_kaustubhsh"
};

const socialMediaLinks = {

  github: "https://github.com/kaustubhsh",
  linkedin: "https://www.linkedin.com/in/kaustubh-sharma/",
  gmail: "kaustubhsharma97@gmail.com",
  gitlab: "https://gitlab.com/kaustubhsh",
  // facebook: "https://www.facebook.com/kaustubh"
  // Instagram and Twitter are also supported in the links!
  instagram: "https://instagram.com/_kaustubhsh"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CYBER ENTHUSIASTIC WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Experience of working with Computer Vision and NLP projects"),
    emoji("⚡ Experience in Cyber Security & Cloud"),
    emoji("⚡ Integration of third party services such as AWS/ Azure"),
    emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
    emoji("⚡ Deploying deep learning models on cloud to use on mobile devices"),
    emoji("Setting up streaming jobs from DB to Server or vice-versa on AWS and Azure")
  ],


  softwareSkills: [
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass",
    //   style: {
    //     color: "#CC6699"
    //   }
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      style: {
        // backgroundColor: "#000000",
        color: "#F7DF1E"
      }
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
      // <i class="fab fa-node-js"></i>
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "postgresql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
      style: {
        color: "#FF9900"
      }
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
    // {
    //   skillName: "Azure",
    //   fontAwesomeClassname: "simple-icons:microsoftazure",
    //   style: {
    //     color: "#0089D6"
    //   }
  // }
    
  ]
  
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Cyber Security",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "",  
      company: "Crio.Do",
      companylogo: require("./assets/images/gurugramLogo.png"),
      date: "June 2020 – July 2020",
      desc: "Gurugram Police Cyber Security Summer Internship Program 2020 (GPCSSIP2020)",
      descBullets: [
        "Developed live project for effective Policing under",
        "Working directly under Mr.Rakshit Tandon (Director Executive Council-Council of Information Security)."
      ]
    },
    {
      role: "Student Developer",   
      company: "Crio.Do",
      companylogo: require("./assets/images/crioLogo.png"),
      date: "Feb 2020 – April 2020",
      desc: "Worked mainly on three projects for CRIO.DO that can be found @ https://criodo.github.io/Crio-Launch-Feb-2020-kaustubhsharma97/"
    },
    {
      role: "Project Intern",  
      company: "AdHoc Networks Infotech Private Limited",
      companylogo: require("./assets/images/adhocLogo.jpeg"),
      date: "May 2019 – Feb 2020",
      desc: ""
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kaustubhsh", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
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
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://"
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9782004107",
  email_address: "kaustubhsharma97@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "kaustubhsh_"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
