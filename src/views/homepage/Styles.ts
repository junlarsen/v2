import styled from "styled-components"

export const Container = styled.div`
  background-color: #2d3748;
  max-width: 1080px;
  margin: 0 auto;
`

export const Text = styled.p`
  margin: 0.4rem 0;
  color: #f7fafc;
  font-family: monospace;
  font-size: 1.3rem;
`

export const Group = styled.div`
  margin-bottom: 2.5rem;
`

export const ListItem = styled.p`
  margin: 0.4rem 0;
  color: #f7fafc;
  font-family: monospace;
  font-size: 1.3rem;
  
  &:before {
    content: "- "
  }
`

export const Label = styled.a`
  color: #48bb78;
`

export const Title = styled.h1`
  font-family: monospace;
  color: #ecc94b;
  margin: 0.4rem 0;
  font-size: 1.75rem;
  
  &:before {
    content: "> "
  }
`

export const SliceContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    ${(props: any) => `
      width: ${(props.size / 12) * 100}%;
    `}
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
`