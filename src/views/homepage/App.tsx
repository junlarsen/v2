import React from 'react'
import { Nav } from '../../components/nav/Nav'
import { Footing } from '../../components/footing/Footing'
import { Container, Content, SliceContainer, Title, ListItem, Label, Text, Group, Image, LogoFrame } from './Styles'
import Icon from '../../icon.png';

export const Slice = ({ children, ...props }: React.PropsWithChildren<{ size: number }>): JSX.Element => (
    <SliceContainer {...props}>
        {children}
    </SliceContainer>
)

export const Logo = (): JSX.Element => (
    <LogoFrame>
        <Image src={Icon} alt="a fish shark thing icon" />
    </LogoFrame>
)

export const Item = ({ children, ...props }: React.PropsWithChildren<{ url: string, label: string }>): JSX.Element => (
    <ListItem>
        <Label role="link" href={props.url} rel="noopener" target="_blank">{props.label}</Label>
        {`: ${children}`}
    </ListItem>
)

export const Header = ({ children }: React.PropsWithChildren<{}>): JSX.Element => (
    <Title role="heading" aria-level={1} aria-label={children!.toString() || 'Missing Title'}>
        {children}
    </Title>
)

export const App = (): JSX.Element => (
    <Container>
        <Nav/>
        <Content>
            <Slice size={4}>
                <Logo />
            </Slice>
            <Slice size={8}>
                <Group>
                    <Header>About Me</Header>
                    <Text>Hey there, I enjoy writing lines of text in some text editor..</Text>
                </Group>

                <Group>
                    <Header>My Skills</Header>
                    <ListItem>JavaScript, TypeScript, VueJS & some React</ListItem>
                    <ListItem>PHP &amp; Laravel</ListItem>
                    <ListItem>Java &amp; Kotlin</ListItem>
                </Group>

                <Group>
                    <Header>Featured Projects</Header>
                    <Item label="RiotQuest" url="https://github.com/supergrecko/RiotQuest">
                        I enjoy messing with the Riot Games API so I built an open-source wrapper
                    </Item>
                    <Item label="LeagueVoice" url="https://github.com/supergrecko/LeagueVoice">
                        We made the Google Assistant use the League of Legends Client
                    </Item>
                    <Item label="LeagueConnect" url="https://github.com/supergrecko/league-connect">
                        A basic node module for interacting with the League Client APIs
                    </Item>
                    <Item label="Superlang" url="https://github.com/supergrecko/superlang">
                        A dummy programming language, tree-walk interpreter written in Kotlin
                    </Item>
                </Group>

                <Group>
                    <Header>Contact Me</Header>
                    <ListItem>Discord: supergrecko#3434</ListItem>
                    <ListItem>Email: me@supergrecko.com</ListItem>
                </Group>
            </Slice>
        </Content>
    </Container>
)