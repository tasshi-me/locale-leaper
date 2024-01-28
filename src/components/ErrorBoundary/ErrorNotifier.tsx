import React from "react";
import styled from "styled-components";


type Props = React.PropsWithChildren<{
  className?: string
  message: string
}>

const Component: React.FC<Props> = ({className, message}) => {
  return (
    <div className={className}><h2>Error</h2><p>{message}</p></div>)
}

const StyledComponent = styled(Component)`
    padding: 2em;
    background: maroon;
    border-color: brown;
    color: white
` as typeof Component

export const ErrorNotifier = StyledComponent as typeof Component
