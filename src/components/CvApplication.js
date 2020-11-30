import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { Grid } from 'semantic-ui-react';
import Header from './View/Header';

import ContentList from './View/ContentList';
import Title from './View/Title';

class CvApplication extends Component {
  render() {
    const { cvApplication } = this.props;
    if (cvApplication) {
      const {
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
      } = cvApplication;

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
                  (
                    { workStartDate, workEndDate, company, jobTitle, tasks },
                    i
                  ) => (
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
                {education.map(
                  ({ eduStartDate, eduEndDate, college, course }, i) => {
                    return (
                      <ContentList
                        key={i}
                        startDate={eduStartDate}
                        endDate={eduEndDate}
                        bold={college}
                        paragrapgh={course}
                      />
                    );
                  }
                )}
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
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { docId } = ownProps.match.params;
  const { cvApplications } = state.firestore.data;
  const cvApplication = cvApplications ? cvApplications[docId] : null;
  return { cvApplication };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'cvApplications' }])
)(CvApplication);
