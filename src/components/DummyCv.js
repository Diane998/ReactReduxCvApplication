import React from 'react';
import CvView from './View/CvView';

const defaultCvApplication = {
  education: [
    {
      college: 'Penn State University',
      course: 'Bachelor of Science in Computer Engineering',
      eduEndDate: '2016-01-01',
      eduStartDate: '2012-01-01'
    }
  ],
  email: 'janedoe@example.com',
  lastName: 'Doe',
  firstName: 'Jane',
  github: 'github.com/janedoe',
  linkedin: 'linkedin.com/janedoe',
  phoneNumber: '212-098-456',
  profession: 'Full-Stack Developer',
  skills: [
    { proficiency: 9, programmingLanguage: 'Javascript' },
    { proficiency: 7, programmingLanguage: 'Ruby' },
    { proficiency: 6, programmingLanguage: 'x86 Assembly' },
    { proficiency: 5, programmingLanguage: 'Java' },
    { proficiency: 8, programmingLanguage: 'Python' }
  ],
  work: [
    {
      company: 'Lorem',
      jobTitle: 'Junior Developer',
      tasks: [
        {
          work:
            'Assisting the Development Manager with all aspects of software design and coding.'
        },
        { work: 'Attending and contributing to company development meetings.' },
        { work: 'Writing and maintaining code.' },
        { work: 'Working on minor bug fixes.' }
      ],
      workEndDate: '2016-01-01',
      workStartDate: '2016-01-01'
    },
    {
      company: 'Ipsum',
      jobTitle: 'React Developer',
      tasks: [
        {
          work: 'Developing new user-facing features using React.js.'
        },
        {
          work:
            'Building reusable components and front-end libraries for future use.'
        },
        { work: 'Translating designs and wireframes into high quality code.' }
      ],
      workEndDate: '2017-01-01',
      workStartDate: '2018-01-01'
    },
    {
      company: 'Dolor',
      jobTitle: 'Angular Developer',
      tasks: [
        {
          work:
            'Designing and developing user interfaces using AngularJS best practices.'
        },
        {
          work:
            'Adapting interface for modern internet applications using the latest front-end technologies.'
        },
        { work: 'Writing JavaScript, CSS, and HTML.' },
        { work: 'Developing product analysis tasks.' },
        {
          work:
            'Making complex technical and design decisions for AngularJS projects.'
        },
        {
          work:
            'Developing application codes and unit tests in AngularJS, Java Technologies, and Rest Web Services.'
        },
        { work: 'Conducting performance tests.' },
        { work: 'Consulting with the design team.' },
        {
          work:
            'Ensuring high performance of applications and providing support.'
        }
      ],
      workEndDate: '2019-01-01',
      workStartDate: '2018-01-01'
    },
    {
      company: 'Amet',
      jobTitle: 'Senior Developer',
      tasks: [
        {
          work: 'Developing front end website architecture.'
        },
        {
          work: 'Designing user interactions on web pages.'
        },
        { work: 'Developing back end website applications.' },
        { work: 'Creating servers and databases for functionality.' },
        {
          work: 'Ensuring cross-platform optimization for mobile phones.'
        },
        {
          work: 'Working alongside graphic designers for web design features.'
        },
        {
          work: 'Seeing through a project from conception to finished product.'
        },
        { work: 'Designing and developing APIs.' },
        {
          work: 'Meeting both technical and consumer needs.'
        },
        {
          work:
            'Staying abreast of developments in web applications and programming languages.'
        }
      ],
      workEndDate: '2020-01-01',
      workStartDate: '2019-01-01'
    }
  ]
};

const DummyCv = () => {
  return <CvView cv={defaultCvApplication} />;
};

export default DummyCv;
