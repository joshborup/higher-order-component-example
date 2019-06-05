import React from "react";
import axios from "axios";

export default function enhancer(Component) {
  const data = " || this is from the higher order component";
  return function(props) {
    return <Component {...props} data={data} />;
  };
}

export function enhancerClass(Component) {
  return class extends React.Component {
    state = {
      data: []
    };
    componentDidMount() {
      axios.get("https://api.pokemontcg.io/v1/cards").then(res => {
        this.setState({
          data: res.data.cards
        });
      });
    }
    render() {
      const { data } = this.state;

      const cleanData = data.map(elem => {
        return elem.name;
      });

      return <Component {...this.props} data={cleanData} />;
    }
  };
}
