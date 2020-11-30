import React from 'react';
import { Grid } from 'semantic-ui-react';

const HeaderInfo = ({ header }) => {
  return (
    <Grid.Column width={16}>
      <h1>{header}</h1>
      <div className="ui divider"></div>
    </Grid.Column>
  );
};

export default HeaderInfo;
