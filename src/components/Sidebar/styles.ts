'use client'

import styled from 'styled-components'

export const SidebarWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: ${(props) => (props.open ? 'flex-start' : 'center')};
  height: 100%;
  background-color: #1a202c; // bg-gray-900
  color: #a0aec0; // text-gray-400
  border-radius: 0.25rem;
  width: ${(props) => (props.open ? '200px' : '70px')};
  transition:
    width 0.3s ease,
    align-items 0.3s ease;
`

export const IconWrapper = styled.span<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.open ? 'flex-start' : 'center')};
  width: 100%;
  padding: 10px;
  color: inherit;
  text-decoration: none;
  transition: justify-content 0.3s;
  cursor: pointer;

  &.withMessage {
    position: relative;
  }

  &:hover {
    background-color: #2d3748;
    color: #e2e8f0;
  }

  span {
    display: ${(props) => (props.open ? 'inline' : 'none')};
    margin-left: 10px;
    font-size: 14px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.8rem 0;
  padding: 0.8rem 0;
  border-top: 1px solid #374151;
  width: 100%;

  &.last_section {
    flex: 1;
  }
`

export const NotificationDot = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #6366f1;
  border-radius: 50%;
`
