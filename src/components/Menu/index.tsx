import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface ITabs {
    selectedtab: (value: string) => void;
}


const ColorTabs: React.FC<ITabs> = ({selectedtab}) => {
  const [value, setValue] = React.useState('0');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    selectedtab(newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
         <Tab value="0" label="Todos" />
        <Tab value="1" label="Cafés" />
        <Tab value="2" label="Cappuccinos" />
        <Tab value="3" label="Cookies" />
      </Tabs>
    </Box>
  );
}

export default ColorTabs;