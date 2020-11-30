import React, { Component } from 'react'
 
import CV from 'react-cv'
 
export default class LandingPage extends Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'Arkadiusz Kliś',
          title: 'Software Engineer',
          image: 'avatar.jpg',
          contacts: [
            { type: 'email', value: 'arek9513@gmail.com' },
            { type: 'phone', value: '+48 503 002 155' },
            { type: 'location', value: ' Cracow' },
            { type: 'github', value: 'github.com/Xanner' },
            { type: 'website', value: 'learn.unity.com/u/arkadiusz-klis' }
        ]}}
        sections= {[
            {
          type: 'text',
          title: 'Career Profile',
          content: 'When I was child, I always want to be a developer.',
          icon: 'usertie'
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
              {
                title: 'Computer Engineering (BS)',
                authority: 'University',
                authorityWebSite: 'https://sample.edu',
                rightSide: '2013 - 2017'
              },
              {
                title: 'Some Department (PHD)',
                authority: 'Another University',
                authorityWebSite: 'https://sample.edu',
                rightSide: '2017 - Present'
              }
            ]
          },
          {
            type: 'experiences-list',
            title: 'Experience',
            icon: 'archive',
            items: [
              {
                title: 'Lead Software Developer',
                company: 'Some Company Example INC',
                description: 'I\'m working as a lead developer yeeeey!',
                companyWebSite: 'http://somecompanyexample.com',
                companyMeta: '',
                datesBetween: '2017.10 - Present',
                descriptionTags: ['Javascript', 'React']
              },
              {
                title: 'Software Developer',
                company: 'Some Company Example INC',
                description: 'I\'m using ReactJS and working as a front-end developer',
                companyWebSite: 'http://somecompanyexample.com',
                companyMeta: 'Little info about company',
                datesBetween: '2016.8 - 2017.10'
              },
              {
                title: 'Intern',
                company: 'Some Software Example INC',
                description: 'I was warming up.',
                companyWebSite: 'http://someexamplecompany.com',
                companyMeta: 'SF USA',
                datesBetween: '2012.06 - 2012.10'
              }
            ]
          },
          {
            type: 'projects-list',
            title: 'Projects',
            description: 'Optional',
            icon: 'tasks',
            groups: [
              {
                sectionHeader: 'Company Name',
                description: 'Optional',
                items: [
                  { title: 'Project', projectUrl: 'optional', description: 'Optional' },
                  { title: 'Project', projectUrl: 'optional', description: 'Optional' },
                  { title: 'Project', projectUrl: 'optional', description: 'Optional' }
                ]
              }
            ]
          },
          {
            type: 'common-list',
            title: 'Conferences & Certificates',
            description: '',
            icon: 'comments',
            items: [
              {
                title: 'Some Conferences / 2019',
                authority: 'SomeConf',
                authorityWebSite: 'https://www.someconf.somesome'
              },
              {
                title: 'Some Conferences / 2019',
                authority: 'SomeConf',
                authorityMeta: 'Speaker',
                authorityWebSite: 'https://www.someconf.somesome',
                rightSide: 'test'
              },
              {
                title: 'Some Conferences / 2012',
                authorityMeta: 'Speaker'
              }
            ]
          },
          {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
              {
                authority: 'Polish',
                authorityMeta: 'Native'
              },
              {
                authority: 'English',
                authorityMeta: 'B2/C1'
              }
            ]
          },
          {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: ['C#','.NET','Unity','React', 'JavaScript', 'CSS', 'SQL']
          },
          {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Programing', 'Gaming', 'Abstract Art', 'Birdeaters', 'Learning']
          }
    ]}
        branding={false}
      />
    )
  }
}