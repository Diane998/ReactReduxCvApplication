import React from 'react';
import { Grid } from 'semantic-ui-react';

const HeaderView = ({
  name,
  jobTitle,
  phoneNumber,
  email,
  linkedin,
  github
}) => {
  return (
    <Grid.Column className="ui grid" width={16}>
      <Grid.Row>
        <Grid.Column width={16}>
          <h1>{name}</h1>
          <h2>{jobTitle}</h2>
        </Grid.Column>
        <Grid.Column width={8}>
          <strong>Phone</strong> {phoneNumber}
          <br />
          <strong>Email</strong> {email}
        </Grid.Column>
        <Grid.Column width={8}>
          <strong>Linkedin</strong> {linkedin}
          <br />
          <strong>Github</strong> {github}
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  );
};

export default HeaderView;
