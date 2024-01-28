import React from "react";
import styled from "styled-components";

type Props = {
  className?: string
  visible: boolean
  callback: ()=>void
}

const Component: React.FC<Props> = ({className, visible, callback})=> {
  return visible && (
    <button className={className} onClick={async ()=> {
      await chrome.tabs.reload()
      // window.location.reload()
      callback()
    }
    }>Reload to apply changes!</button>)
}

const StyledComponent = styled(Component)`
    background: dodgerblue;
    border-color: deepskyblue;
`

export const Reload = StyledComponent as typeof Component
