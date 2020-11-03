import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    padding: 1.6rem 2.8rem;
    background: var(--dark-pink);
    border: 1px solid  var(--dark-pink);
    color: #fff;
    font-family: inherit;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: .8px;
    cursor: pointer;
    border-radius: 30px;
    transition: .3s;

    &:hover{
        background: #fff;
        color: var(--dark-pink);
    }
`