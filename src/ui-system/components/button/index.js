import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  appearance: none;
  font: inherit;
  color: inherit;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.hasChildren && `var(--textbox-x)`};
  width: ${p => !p.hasChildren && p.icon && `var(--buttonHeight)`};
  background: var(--c-button);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 50px;
  font-size: 0.7rem;
  line-height: 1.3;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  min-height: var(--buttonHeight);
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--c-buttonHover);
  }

  &:active {
    background-color: var(--c-buttonActive);
  }
`

const Button = ({ children, icon, ...props }) => {
  return (
    <ButtonWrapper icon={icon} hasChildren={children} {...props}>
      {children}
      {icon && icon}
    </ButtonWrapper>
  )
}

export default Button