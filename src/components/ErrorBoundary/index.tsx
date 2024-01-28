import React, {GetDerivedStateFromError} from "react";
import {ErrorNotifier} from "./ErrorNotifier.tsx";

type Props = React.PropsWithChildren

type State = {
  hasError: boolean,
  error?: Error
  unhandledrejection: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {hasError: false, unhandledrejection: false}
  }

  componentDidMount = ()=> {
    window.addEventListener("unhandledrejection", this.onUnhandledRejection)
  }

  componentWillUnmount = ()=> {
    window.removeEventListener("unhandledrejection", this.onUnhandledRejection)
  }

  static getDerivedStateFromError: GetDerivedStateFromError<Props, State> =(error: Error)=>{
    return {hasError: true, error}
  }

  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo)=> {
    console.error("componentDidCatch")
    console.error(error, errorInfo)
  }

  onUnhandledRejection = (event: PromiseRejectionEvent)=>{
    console.error("onUnhandledRejection")
    event.promise.catch((error)=> {
      console.error(error)
      this.setState({hasError: true, error: error, unhandledrejection: true})
    })
  }

  render() {
    if (this.state.hasError){
      if(this.state.unhandledrejection){
        if(this.state.error){
          return  (<>{this.props.children}
            <div>{this.state.error.message}</div>
          </>)
        }
        return (<>
          {this.props.children}
          <div>Unknown Error</div>
        </>)
      } else {
        if(this.state.error){
          return (<ErrorNotifier message={this.state.error.message}/>)
        }
        return (<ErrorNotifier message={"Unknown error"}/>)
      }
    }
    return this.props.children;
  }
}
