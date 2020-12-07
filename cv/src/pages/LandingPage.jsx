import React, { Component } from "react";

import CV from "react-cv";

export default class LandingPage extends Component {
  render() {
    const softwareEngineerDescription = `Design, implementation of the new functionalities 
    and maintenance of the Web CRM Application for the medical industry
    using React.js Node.js and PostgreSQL. Responsible of a maintenance 
    and development of the web applications using Aurelia,
    .NET, Oracle and PostgreSQL. Deploying applications, conducting 
    technical reviews and leading a team of 4 devs.`;
    const softwareEngineerTags = [
      "C#",
      "JavaScript",
      "SQL",
      ".NET",
      "React",
      "Aurelia",
      "Node",
      "Cypress",
      "GIT",
      "Scrum",
    ];

    const juniorEngineerDescription = `
      Responsible for both front and backend related development 
      tasks. Creating views and web user interface components in 
      Aurelia, designing and building a web medical application 
      backend based on .NET technology, writing unit tests, 
      working with PostgreSQL and Oracle databases.`;
    const juniorEngineerTags = [
      "C#",
      "JavaScript",
      "SQL",
      ".NET",
      "Aurelia",
      "PostgreSQL",
      "Oracle",
      "GIT",
      "Scrum",
    ];

    const boboDescription = `Bobo descrpition placeholder`;
    const unityLearnDescription = `Unity Learn descrpition placeholder`;

    return (
      <CV
        personalData={{
          name: "Arkadiusz Kliś",
          title: "Software Engineer",
          image: "avatar.jpg",
          contacts: [
            { type: "email", value: "arek9513@gmail.com" },
            { type: "phone", value: "+48 503 002 155" },
            { type: "location", value: " Cracow" },
            { type: "github", value: "github.com/Xanner" },
            { type: "website", value: "learn.unity.com/u/arkadiusz-klis" },
          ],
        }}
        sections={[
          {
            type: "text",
            title: "Career",
            content:
              "When I was child, I always want to be a game developer :).",
            icon: "usertie",
          },
          {
            type: "common-list",
            title: "Education",
            icon: "graduation",
            items: [
              {
                title: "Master’s degree - Applied Computer Science",
                authority: "Cracow University of Technology",
                authorityWebSite: "https://www.pk.edu.pl/index.php?lang=pl",
                rightSide: "2019.02 - 2020.09",
              },
              {
                title: "Bachelor’s degree - Applied Computer Science",
                authority: "Cracow University of Technology",
                authorityWebSite: "https://www.pk.edu.pl/index.php?lang=pl",
                rightSide: "2015.10 - 2019.02",
              },
            ],
          },
          {
            type: "experiences-list",
            title: "Experience",
            icon: "archive",
            items: [
              {
                title: "Software Engineer",
                company: "Itisit Sp. z o.o.",
                description: softwareEngineerDescription,
                datesBetween: "2018.10 - 2020.03",
                descriptionTags: softwareEngineerTags,
              },
              {
                title: "Junior Software Developer",
                company: "Itisit Sp. z o.o.",
                description: juniorEngineerDescription,
                datesBetween: "2018.07 - 2018.10",
                descriptionTags: juniorEngineerTags,
              },
              {
                title: "IT Intern",
                company: "Żywiec County Office",
                description:
                  "Development of the new website for the County Office in Żywiec, repairing hardware, preparing computer stations for schools.",
                companyWebSite: "http://www.zywiec.powiat.pl/",
                datesBetween: "2014.05 - 2014.05",
                descriptionTags: ["HTML", "CSS"],
              },
              {
                title: "IT Intern",
                company: "F + U Sachsen gGmbH",
                description:
                  "Designing LAN networks, assembling computers, installing software.",
                companyWebSite: "https://www.fuu-sachsen.de/",
                datesBetween: "2013.11 - 2013.11",
                descriptionTags: ["CISCO"],
              },
            ],
          },
          {
            type: "experiences-list",
            title: "Experience with Unity",
            icon: "archive",
            items: [
              {
                title:
                  "Developing casual, mobile game available on the Google Play store",
                company: "Bobo",
                companyWebSite:
                  "https://play.google.com/store/apps/details?id=com.Kvpaideas.Bobo",
                description: boboDescription,
                datesBetween: "2020.07 - currently",
              },
              {
                title: "Learning Unity due University",
                company: "Unity Learn",
                companyWebSite: "https://learn.unity.com/u/arkadiusz-klis",
                description: unityLearnDescription,
                datesBetween: "2020.02 - currently",
              },
            ],
          },
          {
            type: "experiences-list",
            title: "Activities",
            icon: "comments",
            items: [
              {
                title: "Co-Organizator",
                company: "IT Academic Day Conference",
                companyWebSite: "https://itad-pk.github.io/",
                description:
                  "ITAD is an annual IT conference dedicated to different aspects of technology. The initiative reflects concern and belief that students interested in technology should be able to broaden their knowledge and to develop their skills, get acquainted with the current trends and meet potential employers.",
                datesBetween: "2017.11.30 & 2018.12.04",
              },
              {
                title: "Participant and Lecturer",
                company: ".NET Group of the Cracow University of Technology",
                companyWebSite: "https://www.facebook.com/grupa.pk.net",
                description:
                  "The scientific club operating in the Faculty of Mechanical Engineering of the Cracow University of Technology conducts regular weekly meetings related to the .NET and C# technologies.",
                datesBetween: "2015.10 - 2020.09",
              },
            ],
          },
          {
            type: "common-list",
            title: "Languages",
            icon: "language",
            items: [
              {
                title: "Polish",
                authority: "Native",
              },
              {
                title: "English",
                authority: "B2",
              },
            ],
          },
          {
            type: "tag-list",
            title: "Skills & Tools",
            icon: "rocket",
            items: [
              "C#",
              "JavaScript",
              "SQL",
              "React",
              "HTML",
              "CSS",
              "GIT",
              ".NET",
              "Unity",
              "GitLab",
              "OOP",
              "SOLID",
              "SCRUM",
              "REST",
              "API",
              "E2E Tests",
              "Unit Tests",
              "Visual Studio",
              "Visual Studio Code",
              "Rider",
              "ReSharper",
              "Arduino",
              "Problem Solving",
              "Empathy",
              "Communication",
              "Accountability",
              "Helpfulness",
              "Patience",
            ],
          },
          {
            type: "tag-list",
            title: "Hobbies & Interests",
            icon: "cubes",
            items: [
              "Gamedev",
              "Programing",
              "Gaming",
              "Mobile Technologies",
              "Abstract Art",
              "Breeding Tarantulas",
            ],
          },
        ]}
        branding={false}
      />
    );
  }
}
