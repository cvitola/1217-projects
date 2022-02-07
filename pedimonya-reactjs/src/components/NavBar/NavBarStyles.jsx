import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height: 70px;
    background-color: #FAFAFA;
    color: darkblue;
    `;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    `;

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display:flex;
    align-items: center;
    font-size: 1.2rem;
       
    svg{
        /*fill:#FAFAFA;*/
        margin-right: 0.5rem;
        font-size: 4em; 
        }
    }
    `;

export const Menu = styled.ul`
    height: 100%;
    display:flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px){
        /*background-color: #23394D;*/
        position: absolute;
        top: 70px;
        left: ${( { open }) => open ? "0" : "-100%"};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
    `;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }
    `;

export const MenuItemLink = styled.a`
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    /*color: #64B2FF;*/
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color:#FAFAFA;
        background-color: #E0792A;
        transition: 0.5s all ease;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
    `;

export const CantidadItem = styled.div`
    margin-top: -20px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 14px;
    background: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
            fill: #E07924;
            margin-right: 0.5rem;
            font-size: 2em; 
        }

    }`;