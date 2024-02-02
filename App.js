import logo from './logo.svg';
import './App.css';
import AddProject from './components/AddProject'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  return (
    <div>
      <Sidebar  className="App">
        <Menu>
          {/* <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu> */}
          <MenuItem> Dashboard </MenuItem>
          <MenuItem> TimeSheet </MenuItem>
          <MenuItem> Leave  </MenuItem>
          <MenuItem> Work from Home </MenuItem>
          <MenuItem> Feedback </MenuItem>
          <MenuItem> Survey </MenuItem>
          <MenuItem> Service Desk </MenuItem>
          <MenuItem> Forms </MenuItem>
          <MenuItem> Travel </MenuItem>
          <MenuItem> Expenses </MenuItem>
          <MenuItem> Resourcing </MenuItem>
        </Menu>
      </Sidebar>
      <AddProject/>
    </div>
  );
}

export default App;
