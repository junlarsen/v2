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
    <Title role="heading" aria-label={children!.toString() || 'Missing Title'}>
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
                    <Header>about me ...</Header>
                    <Text>hey there, i like to write code in a text editor</Text>
                </Group>

                <Group>
                    <Header>my skills</Header>
                    <ListItem>javascript, typescript, vuejs & some react</ListItem>
                    <ListItem>php & laravel</ListItem>
                    <ListItem>java & kotlin</ListItem>
                </Group>

                <Group>
                    <Header>featured projects</Header>
                    <Item label="RiotQuest" url="https://github.com/supergrecko/RiotQuest">
                        i like messing with the league of legends api so i built an open-source wrapper
                    </Item>
                    <Item label="LeagueVoice" url="https://github.com/supergrecko/LeagueVoice">
                        we made google assistant interact with the league of legends client
                    </Item>
                    <Item label="LeagueConnect" url="https://github.com/supergrecko/league-connect">
                        a very basic node module to connect to the league client apis
                    </Item>
                    <Item label="Superlang" url="https://github.com/supergrecko/superlang">
                        a programming language, basic tree walk interpreter written in kotlin
                    </Item>
                </Group>

                <Group>
                    <Header>contact</Header>
                    <ListItem>discord: supergrecko#3434</ListItem>
                    <ListItem>email: me@supergrecko.com</ListItem>
                </Group>
            </Slice>
        </Content>
        <Footing/>
    </Container>
)