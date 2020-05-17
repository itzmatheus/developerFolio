
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Matheus Leite",
  title: "Olá, me chamo Matheus Leite",
  subTitle: emoji("Apaixonado por desenvolvimento de software, possuo experiência na construção de aplicações web 💻 e mobile 📱 com as melhores tecnologias do mercado 🚀."),
  // subTitle: emoji("Apaixonado por Desenvolvimento de Software 🚀 possuo an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1xayYPLDE6s2nsZcl66eLBHHuoryAhkJg/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/itzmatheus",
  linkedin: "https://www.linkedin.com/in/matheus-jose-leite/",
  gmail: "matheusjoselfm@gmail.com",
  instagram: "https://www.instagram.com/matheusjlfm",
  medium: "https://medium.com/@matheusjoselfm"
};

// Your Skills Section

const skillsSection = {
  title: "Conhecimentos",
  subTitle: "FULL STACK DEVELOPER QUE GOSTA DE EXPLORAR VÁRIAS TECNOLOGIAS",
  skills: [
    emoji("⚡ Desenvolvimento de Aplicações Interativas Web 💻 e Mobile 📱"),
    emoji("⚡ Criação de API's Integradas a Serviços ☁️ e Bots 🤖"),
    emoji("⚡ Integrações com Serviços Terceiros como AWS / Heroku / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
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
      skillName: "digital-ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Desenvolvimento Back-end & Front-End",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Engenharia de Software",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL / Banco de Dados",
      progressPercentage: "60%"
    },
    {
      Stack: "Infraestrutura / DevOps",
      progressPercentage: "30%"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubUserName: "itzmatheus",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projetos Voluntários",
  subtitle: "ALGUMAS EMPRESAS OU NEGÓCIOS QUE AJUDEI NA CONSTRUÇÃO DAS TECNOLOGIAS",
  projects: [
    {
      image: "https://media-exp1.licdn.com/dms/image/C510BAQGoVm4l5w0oBQ/company-logo_200_200/0?e=1597881600&v=beta&t=CvGCggmrglcIOy6pXvB4uzq_Z0cW0rGiKpdb60rFljM",
      link: "https://abrhpb.com.br"
    },
    {
      image: "https://i.imgur.com/lARsTh6.png",
      link: "https://www.instagram.com/fabricadesoftwareunipe/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Conquistas e Certificações 🏆 "),
  subtitle: "Conquistas, Certificações, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Profissional de Destaque 2019",
      subtitle: "Minha primeira conquista na ServiceNet onde consegui me destacar diante de várias pessoas excepcionais.",
      image:
        "https://i.imgur.com/rkXEcWA.png",
      footerLink: [
        { name: "Carta de Premiação", url: "https://drive.google.com/file/d/12BKLScmszRhhDon3Mvb7XuJuzW_TZc4Y/view?usp=sharing" },
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Postagens / Artigos",
  subtitle: "O amor pela área de software me faz gostar de compartilhar conhecimentos através da publicações",

  blogs: [
    {
      url: "https://medium.com/@matheusjoselfm/tutorial-enviando-e-mail-utilizando-a-biblioteca-smtplib-do-python-2adfb3768a08",
      title: "TUTORIAL: Enviando e-mail utilizando a biblioteca SMTPLib do Python",
      description: "Já se depararam com uma simples, porém chata tarefa de ficar enviando e-mail para várias pessoas ? Mesmo que seja um e-mail simples com título, subtítulo e mensagem até um e-mail com anexo."
    },
    {
      url: "https://medium.com/@matheusjoselfm/tutorial-gerando-pdf-simples-com-reportlab-e-python-6b67e3692bef",
      title: "TUTORIAL: Gerando PDF simples com reportlab e Python",
      description: "Nesse tutorial demonstro como gerar pdf utilizando a liguagem de programação Python",
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "#",
      event_url: "",
      image:
        ""
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contatos ☎️"),
  subtitle: "Deseja conversar comigo ? Pois entre em contato :)",
  number: "+55 83 99371-8506",
  email_address: "matheusjoselfm@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "@matheusjlfm"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
