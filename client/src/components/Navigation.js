import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import TemporaryDrawer from './drawer';
import { Button } from '@material-ui/core';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Button style={{margin:10}} variant="contained" color="primary" href="/signup">
          Signup
        </Button>
        <Button style={{margin:10}} variant="contained" color="secondary" href="/signin">
          Signin
        </Button>
        <TemporaryDrawer />
      </Tabs>
    </Paper>
  );
}
