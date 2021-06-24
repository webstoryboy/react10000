import React from "react";
import FooterInfo from "../basics/FooterInfo";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import Loader from "../basics/Loader";

class Script extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div id="wrap">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Layout>
              <div>메인</div>
            </Layout>
            <FooterInfo />
          </>
        )}
      </div>
    );
  }
}

export default Script;
