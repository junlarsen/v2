import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const LinkItem = styled.a`
  padding: 0 1rem;
  color: #48bb78;
  text-decoration: none;
  font-family: monospace;
  font-size: 1.5rem;
  
  &.hidden {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`