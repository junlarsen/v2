import React from 'react'
import { Nav } from '../../components/nav/Nav'
import * as Styled from './Styles'
import Icon from '../../icon.png'
import IconJS from '../../assets/javascript-original.svg'
import IconTS from '../../assets/typescript-original.svg'
import IconKt from '../../assets/kotlin-original.svg'

export const Slice = ({ children, ...props }: React.PropsWithChildren<{ size: number }>): JSX.Element => (
    <Styled.SliceContainer {...props}>
        {children}
    </Styled.SliceContainer>
)

export const Link = ({ children, ...props}: React.PropsWithChildren<{ url: string }>): JSX.Element => (
    <Styled.Label href={props.url} role="link" rel="noopener" target="_blank">{children}</Styled.Label>
)

export const Image = ({ ...props }): JSX.Element => (
    <Styled.Icon {...props} />
)

export const Content = ({ children, ...props }: React.PropsWithChildren<{ size:number}>): JSX.Element => (
    <Styled.Content {...props}>
        {children}
    </Styled.Content>
)

const Filler = ({ ...props }: React.PropsWithChildren<{ height: number }>): JSX.Element => (
    <Styled.Filler {...props} />
)

export const Logo = (): JSX.Element => (
    <Styled.LogoFrame>
        <Styled.Image src={Icon} alt="that silly fish icon" title="a silly fish" />
    </Styled.LogoFrame>
)

export const App = (): JSX.Element => (
    <Styled.Container>
        <Nav />
        <Content size={24}>
            <Slice size={4}>
                <Logo />

                <Filler height={24} />

                <Styled.Title>ABOUT ME</Styled.Title>
                <Styled.Text>High school student, programming hobbyist.</Styled.Text>

                <Filler height={40} />

                <Styled.Title>SKILLS</Styled.Title>
                <Content size={0}>
                    <Image src={IconJS} alt="JavaScript" title="JavaScript" />
                    <Image src={IconTS} alt="TypeScript" title="TypeScript" />
                    <Image src={IconKt} alt="Kotlin" title="Kotlin" />
                </Content>
            </Slice>
            <Slice size={8}>
                <Styled.Title>PROJECTS</Styled.Title>

                <Filler height={12} />

                <Link url="https://github.com/supergrecko/RiotQuest">RiotQuest</Link>
                <Styled.Text>Open source API wrapper for the Riot Games API for PHP 7.1+</Styled.Text>

                <Filler height={24} />

                <Link url="https://github.com/supergrecko/league-connect">LeagueConnect</Link>
                <Styled.Text>An open source node module for interacting with the League of Legends Client APIs</Styled.Text>

                <Filler height={24} />

                <Link url="https://github.com/messier-lang/messier">Messier</Link>
                <Styled.Text>A proof-of-concept programming language for the Arduino platform (work-in-progress)</Styled.Text>
            </Slice>
        </Content>
    </Styled.Container>
)
