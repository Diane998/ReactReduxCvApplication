import React from 'react';
import { Grid, Progress } from 'semantic-ui-react';

const renderList = list =>
  list.map((item, i) => <li key={`item ${i}`}>{item.work}</li>);

const InfoView = ({ skills, startDate, endDate, bold, paragrapgh, list }) => {
  return (
    <Grid.Column className="ui grid" width={16}>
      <Grid.Row>
        <Grid.Column width={4}>
          {skills ? (
            <strong>{skills.programmingLanguage}</strong>
          ) : (
            <strong>{`${startDate.slice(
              0,
              startDate.indexOf('-')
            )}-${endDate.slice(0, endDate.indexOf('-'))}`}</strong>
          )}
        </Grid.Column>
        <Grid.Column width={12}>
          {skills ? (
            <Progress
              size="small"
              percent={`${skills.proficiency * 10}`}
              progress
            />
          ) : (
            <>
              <strong>{bold}</strong>
              <p>{paragrapgh}</p>
              {list ? renderList(list) : null}
            </>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  );
};

export default InfoView;
