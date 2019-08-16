import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: #2d3748;
  max-width: 1080px;
  margin: 0 auto;
`

export const Text = styled.p`
  margin: 0.4rem 0;
  color: #f7fafc;
  font-family: 'Nunito', sans-serif;
  font-size: 1.3rem;
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
  color: #ecc94b;
  margin: 0.4rem 0 0.7rem 0;
  font-size: 1.45rem;
`

export const Filler = styled.div`
  ${(props: any) => `
    height: ${props.height}px;
  `}
`

export const LogoFrame = styled.div`
  width: 100%;
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;
  
  @media (min-width: 678px) {
    width: 80%;
  }
`

export const SliceContainer = styled.div`
  padding: 12px;
  width: calc(100% - 24px);
  @media (min-width: 768px) {
    ${(props: any) => `
      width: calc(${((props.size / 12) * 100)}% - 24px);
    `}
  }
`

export const Label = styled.a`
  color: #48bb78;
  line-height: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.5px;
  font-size: 1.3rem;
`

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  padding: 4px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${(props: any) => `
    padding: ${props.size}px;
  `};
`