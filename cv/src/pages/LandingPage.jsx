import React, { Component } from "react";

import CV from "react-cv";

export default class LandingPage extends Component {
  render() {
    const aboutDescription = `It all started when I was 7 years old playing Warcraft III for 
    the first time. After high school, I wanted to be involved in game 
    development, so I chose Computer Science with the idea that I would 
    be a software developer. Then I came across the .NET science club, since 
    then I was a bit more related to web applications through cooperation with 
    Microsoft. I found my first job as a software engineer quickly learning 
    new things and teaching others for nearly 2 years, it allowed me to gain 
    knowledge in many areas of programming. Now I aspire to develop and gain knowledge in a gamedev.`;
    const softwareEngineerDescription = `Design, implementation of the new functionalities, 
    and maintenance of the Web CRM Application for the medical industry
    using React.js Node.js and PostgreSQL. Responsible for the maintenance 
    and development of web applications using Aurelia,
    .NET, Oracle, and PostgreSQL. Deploying applications, conducting 
    technical reviews, and leading a team of 4 devs.`;
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
      tasks. Creating views and web user interfaces components in 
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

    const boboDescription = `Bobo was an idea born during a funny outdoor game. 
    This free to play, casual game was created from scratch then released and is still being developed. 
    It currently includes 10 levels, star system, level pick system, currency system and skin system. 
    All this includes the player's save system on their device.
    The Unity ad system is also implemented, but ads are only on request so as not to spoil the player experience.`;
    const unityLearnDescription = `I started learning Unity in 2016 in my 
    spare time, starting with the Survival Shutter 
    tutorial and trying to do a game project as part of .NET Group meetings, 
    but I started studying Unity seriously during the last semester of my university. 
    Also in the last semester there was a subject closely related 
    to Unity called "Stereovision systems and virtual reality" where I could deepen my 
    knowledge additionally implementing a large project as part of the classes.
    Since the COVID outbreak, I have had the opportunity to use Unity Learn Pro where 
    I practiced a lot and I am gaining knowledge to this day.
    `;

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
            { type: "twitter", value: "Date of birth: 11-07-1995" },
          ],
        }}
        sections={[
          {
            type: "text",
            title: "About Me",
            content: aboutDescription,
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
                authorityMeta: `Master Thesis: Analysis of Google's cross-platform solution Flutter - mobile frameworks performance comparison. Final Grade: A-5.0`,
                rightSide: "2019.02 - 2020.09",
              },
              {
                title: "Bachelor’s degree - Applied Computer Science",
                authority: "Cracow University of Technology",
                authorityWebSite: "https://www.pk.edu.pl/index.php?lang=pl",
                authorityMeta: `Bachelor Thesis: Development of a simple House Security System - website managed security system based on Intel Edison and Arduino. Final Grade: B-4.5`,
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
                title: "Member",
                company: "KGD .NET - Kraków .NET Developers Group",
                companyWebSite: "https://www.meetup.com/pl-PL/KGD-NET",
                description:
                  "The Kraków .NET Developers Group brings together people related to .NET technology from Cracow and the surrounding area. KGD .NET is the oldest group of .NET specialists in Poland.",
                datesBetween: "2018.06 - currently",
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
