import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import FooterInfo from "../basics/FooterInfo";
import { gsap } from "gsap";

// function ReactDetail(props) {
//   console.log(props);
//   return <span>{props.location.state.desc}</span>;
// }

class ReactDetail extends React.Component {
  startAnimation = () => {
    gsap.to(".refer__cont", {
      duration: 0.4,
      y: 0,
      delay: 0.6,
      opacity: 1,
      ease: "power3.out",
    });
    gsap.to("#header", {
      duration: 0.4,
      top: 0,
      delay: 1,
    });
  };
  componentDidMount() {
    const { location, history } = this.props;
    //console.log(location, history);

    if (location.state === undefined) {
      history.push("/reference");
    }
    document.querySelector("body").classList.add("light");

    this.startAnimation();
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div id="wrap">
          <Header color="light" />
          <Layout>
            <section id="referCont">
              <div className="container">
                <div className="refer__cont">
                  <div className="refer-detail">
                    <h3>{location.state.title}</h3>
                    <p className="desc">
                      &lt;a&gt; 태그는 다른 페이지 이동을 설정합니다.
                    </p>
                    <div className="detail-info">
                      <table>
                        <thead>
                          <tr>
                            <th>특징</th>
                            <th>설명</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>요소</th>
                            <td>{location.state.element}</td>
                          </tr>
                          <tr>
                            <th>닫는 태그</th>
                            <td>{location.state.tag}</td>
                          </tr>
                          <tr>
                            <th>버전</th>
                            <td>{location.state.version}</td>
                          </tr>
                          <tr>
                            <th>시각적 표현</th>
                            <td>{location.state.view}</td>
                          </tr>
                          <tr>
                            <th>사용성</th>
                            <td>{location.state.use}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h4>정의(Definition)</h4>
                    <ul className="list">
                      {location.state.definition.map((defer, index) => (
                        <li>{defer[index]}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
          <FooterInfo />
        </div>
      );
    }
  }
}

export default ReactDetail;
