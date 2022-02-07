import React , { useState }from 'react';
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper, CantidadItem} from './NavBarStyles';
import { SiPokemon } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    const handleOnClick = () => {
        setShowMobileMenu(!showMobileMenu);
        navigate('/shopping');
    }

  return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <SiPokemon />
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                        showMobileMenu ? <FaTimes /> : <FaBars />
                    }
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <MenuItemLink>ABOUT</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <MenuItemLink>CONTACT</MenuItemLink>
                    </MenuItem>
                    {/*<MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>*/}
                    <MenuItem onClick={handleOnClick}>
                        <MenuItemLink>SHOP
                        <CantidadItem>0</CantidadItem>
                    </MenuItemLink>
                    </MenuItem>
                    
                </Menu>
            </Wrapper>
        </Container>

  )
};

export default NavBar;
