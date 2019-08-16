import React from 'react'
import { Wrapper, LinkItem, Group } from './Styles'

export const NavItem = ({ children, ...props }: React.PropsWithChildren<{ to: string, hide: boolean }>): JSX.Element => (
    <LinkItem className={props.hide ? 'hidden' : ''} href={props.to} role="link" target="_blank" rel="noopener">
        {children}
    </LinkItem>
)

export const Nav = (): JSX.Element => (
    <Wrapper>
        <NavItem to="/" hide={false}>supergrecko.dev</NavItem>
        <Group>
            <NavItem to="mailto:me@supergrecko.com" hide={true}>email</NavItem>
            <NavItem to="https://github.com/supergrecko" hide={false}>github</NavItem>
        </Group>
    </Wrapper>
)