import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 25px;
`
export const Box = styled.div`
  height: ${props => props.height};
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => props.width};
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
  padding-top: ${props => props.paddingTop};
  border-radius: ${props => props.br};
`
export const Logo = styled.img`
  height: 40px;
  align-self: center;
`
export const Label = styled.label`
  padding-top: 13px;
`

export const Input = styled.input`
  height: 37px;
  width: 440px;
  align-self: ${props => props.alignSelf};
  outline: none;
  -webkit-text-security: none; /* For Safari/Chrome */
  text-security: none;
`
export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
  outline: none;
`
export const Button = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.br};
  border: ${props => props.border};
  margin-top: ${props => props.mTop};
  margin-left: ${props => props.mLeft};
  margin-bottom: ${props => props.mBottom};
  font-family: ${props => props.fontFamily};
  outline: none;
  cursor: pointer;
`
export const Para = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`
export const Img = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  margin-left: ${props => props.mLeft};
`
