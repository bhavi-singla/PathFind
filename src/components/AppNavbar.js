import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonGroup
  } from 'reactstrap';
import ProgressBar from './progress/progress';  
  const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    console.log(props);
  
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">PathVisualizer</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id={"Tooltip-" + 4} nav caret>
                  Algorithms
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Button onClick={() => { props.handleDijkstra(); props.handleVisualization() }}
                    >Dijkstra</Button>
                  </DropdownItem>
                  <DropdownItem>
                    <Button onClick={() => { props.handleDFS(); props.handleVisualization() }}
                    >DFS</Button>              
                  </DropdownItem>
                  <DropdownItem>
                    <Button onClick={() => { props.handleBFS(); props.handleVisualization() }}
                    >BFS</Button>
                  </DropdownItem>
                  <DropdownItem>
                    <Button onClick={() => { props.handleAstar(); props.handleVisualization() }}
                    >A*</Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id={"Tooltip-" + 3} nav caret>
                  Generate Maze
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Button onClick={() => { props.handleMaze(); props.handleVisualization() }}
                    >Recursive Division</Button>
                  </DropdownItem>
                  <DropdownItem>
                      <Button onClick={props.handleRandomMaze}
                      >Random Maze</Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>  
          </Collapse>
          <NavbarText id={"Tooltip-" + 2} gap={3}>
            <ProgressBar visitedNodes={props.visitedNodes} shortestNodes={props.shortestNodes} 
            />
          </NavbarText>
          <NavbarText className="clear-functions">
            <ButtonGroup>
              <Button id={"Tooltip-" + 0} onClick={props.handleClearPath}
              >Clear Path</Button>
              <Button id={"Tooltip-" + 1} onClick={props.handleClearGrid}
              >Clear Grid</Button>
            </ButtonGroup>          
          </NavbarText>
        </Navbar>
      </div>
    );
  }
  
  export default AppNavbar;