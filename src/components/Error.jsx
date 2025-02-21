import React from 'react';
import JpgBackground from './Background/JpgBackground';
import Background from './Background/Background';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='relative min-h-screen'>
          {/* Backgroud */}
          <div className='absolute inset-0 z-0'>
            <JpgBackground className="opacity-20" /> 
          </div>
          <div className='absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2'>
            <Background/>
          </div>
          
          {/* Error Content */}
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-8">Something Went Wrong</h2>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 text-lg bg-violet-600 rounded hover:bg-violet-700 transition-colors duration-300"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Error;