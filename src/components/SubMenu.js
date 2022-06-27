import React, {useState} from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components"

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    align-items: center;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: rgba(130, 133, 182, 0.281);
        border-left: 4px solid #00FFFF;
        cursor: pointer;
    }
`

const SidebarLabel = styled.span`
    margin-left: 16px;
    `;

const DropdownLink = styled(Link)`
    background: rgba(130, 133, 182, 0.281);
    height: 60px;
    padding-left: 3rem;

    padding-bottom: 5px;
    padding-top: 5px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;

    &:hover{
        background: #ffffff;
        background: rgba(130, 133, 182, 0.581);
        cursor: pointer;
    }
`

const SubMenu = ({ item }) => {

    const [subnav, setSubNav] = useState(false)

    const showSubnav = () => setSubNav(!subnav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened
                    : item. subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>
                            {item.title}
                        </SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )

}


export default SubMenu 