import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import FooterInfo from "../basics/FooterInfo";
import Loader from "../basics/Loader";
import axios from "axios";

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );
    console.log(ports);
    //console.log(ports.data.data.ports);
    //this.setState({ ports, isLoading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading-active");
      document.querySelector("body").classList.add("black");
      document.querySelector("body").classList.remove("light");
      this.getPorts();
    }, 2000);
  }

  render() {
    const { isLoading, ports } = this.state;
    return (
      <div id="wrap">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Layout>
              <div>{ports}</div>
            </Layout>
            <FooterInfo />
          </>
        )}
      </div>
    );
  }
}

export default Portfolio;
