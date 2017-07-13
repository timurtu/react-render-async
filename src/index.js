const React = require('react');

const asyncrify = AsyncComponent => {

  return class extends React.Component {

    constructor(props) {

      super(props);

      this.state = {
        instance: null,
      }
    }

    componentWillMount() {

      const asyncRender = new AsyncComponent().render();

      asyncRender.then(instance => {

        this.setState({
          instance
        });
      })
    }

    render() {

      const instance = this.state.instance;
      const Component = this.props.loadingComponent;

      return instance ? instance : <Component {...this.props} />;
    }
  }
};

module.exports = asyncrify;
