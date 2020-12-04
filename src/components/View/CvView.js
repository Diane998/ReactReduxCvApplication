import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import ContentList from './ContentList';
import Title from './Title';

const CvView = ({
  cv: {
    firstName,
    lastName,
    jobTitle,
    phoneNumber,
    email,
    linkedin,
    github,
    work,
    education,
    skills
  }
}) => {
  return (
    <Grid style={{ margin: '50px 0' }}>
      <Grid.Row>
        <Header
          name={`${firstName} ${lastName}`}
          jobTitle={jobTitle}
          phoneNumber={phoneNumber}
          email={email}
          linkedin={linkedin}
          github={github}
        />
      </Grid.Row>

      <Grid.Row>
        <Title header="Work Experience" />
        {work ? (
          <>
            {work.map(
              ({ workStartDate, workEndDate, company, jobTitle, tasks }, i) => (
                <ContentList
                  key={i}
                  startDate={workStartDate}
                  endDate={workEndDate}
                  bold={jobTitle}
                  paragrapgh={company}
                  list={tasks}
                />
              )
            )}
          </>
        ) : null}
      </Grid.Row>

      <Grid.Row>
        <Title header="Education" />
        {education ? (
          <>
            {education.map(({ eduEndDate, college, course }, i) => {
              return (
                <ContentList
                  key={i}
                  endDate={eduEndDate}
                  bold={college}
                  paragrapgh={course}
                />
              );
            })}
          </>
        ) : null}
      </Grid.Row>

      <Grid.Row>
        <Title header="Skills" />
        {skills ? (
          <>
            {skills.map((skills, i) => {
              return <ContentList key={i} skills={skills} />;
            })}
          </>
        ) : null}
      </Grid.Row>
    </Grid>
  );
};

export default CvView;
