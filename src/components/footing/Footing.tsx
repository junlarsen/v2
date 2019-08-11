import React from 'react'
import { Wrapper } from '../nav/Styles'
import { NavItem } from "../nav/Nav"

export const Footing = (): JSX.Element => (
    <Wrapper>
        <NavItem to="" hide={true}>&copy; 2019 supergrecko.dev</NavItem>
    </Wrapper>
)