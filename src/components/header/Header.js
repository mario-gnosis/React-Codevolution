import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = props => {
    return (      
            <Menu>
                <Menu.Item as={Link} to='/'>Inicio</Menu.Item>
                <Menu.Item as={Link} to='/ClassClick'>ClassClick</Menu.Item>
                <Menu.Item as={Link} to='/FunctionClick'>FunctionClick</Menu.Item>
                <Menu.Item as={Link} to='/Table'>Table</Menu.Item>
                <Menu.Item as={Link} to='/FragmentDemo'>FragmentDemo</Menu.Item>
        </Menu>
     
    )

}

export default Header
