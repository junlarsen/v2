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
  margin: 0 1rem;
  color: #29b6f6;
  text-decoration: none;
  font-family: monospace;
  font-size: 1.5rem;
  
  border-bottom: 3px solid transparent;
  -o-transition: all .4s ease;
  -moz-transition: all .4s ease;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  
  &:hover {
    border-bottom: 3px solid #f7fafc;
  }
  
  &.hidden {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`