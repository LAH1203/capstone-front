import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return {
      isError: true,
    };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (!this.state.isError) {
      return <>{this.props.children}</>;
    }

    return <>{this.props.fallback || <p>에러가 발생했어요 😥</p>}</>;
  }
}

export default ErrorBoundary;
