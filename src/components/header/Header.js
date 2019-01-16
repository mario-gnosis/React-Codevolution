/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

const HeaderM = () => (

  <div>  
    <Menu attached='top' secondary>
    <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>     
      <Dropdown item icon='unordered list' simple position='left' >
        <Dropdown.Menu>
          <Dropdown.Item><Link as={Link} to='/Form'>Form</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/EventBind'>EventBind</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Welcome'>Welcome</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/LifecicleA'>Lifecicle</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/UserGreeting'>UserGreeting</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/ClassClick'>ClassClick</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/FunctionClick'>FunctionClick</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/FRParentInput'>FRParentInput</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/FocusInput'>FocusInput</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/RefsDemo'>RefsDemo</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/ParentComp2'>ParentComp2</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/ParentComp'>ParentComp</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Table'>Table</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/FragmentDemo'>FragmentDemo</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Inline'>Inline</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Stylesheet'>Stylesheet</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/IndexKey'>IndexKey</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/NameList'>NameList</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/ParentComponent'>ParentComponent</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Counter'>Counter</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Message'>Message</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Hello'>Hello</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/PortalDemo'>PortalDemo</Link></Dropdown.Item>
          <Dropdown.Item><Link as={Link} to='/Hero'>Error Boundary</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item><Link as={Link} to='/'>Inicio</Link></Menu.Item>
      <Menu.Menu block><Menu.Item textAlign='center' ><h3>Curso de React on-line</h3></Menu.Item> </Menu.Menu>
    </Menu>
  </div>
)

export default HeaderM
