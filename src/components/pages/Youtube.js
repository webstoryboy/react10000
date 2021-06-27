import React from "react";
import Header from "../basics/Header";
import Layout from "../basics/Layout";
import FooterInfo from "../basics/FooterInfo";
import Loader from "../basics/Loader";
import WrapTitle from "../basics/WrapTitle";
import YoutubeSearch from "../pages/YoutubeSearch";
import Youtubelist from "./Youtubelist";
import { gsap } from "gsap";
import axios from "axios";

class Youtube extends React.Component {
  state = {
    isLoading: true,
    lists: [],
    searchs: [],
  };

  getYoutubes = async (query) => {
    const searchs = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAuTqa0-EWmo7QcS0lDxPVE45QJSRE1pp0`
    );

    const lists = await axios.get(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=webstoryboy&type=video&key=AIzaSyAuTqa0-EWmo7QcS0lDxPVE45QJSRE1pp0"
    );

    this.setState({ lists, searchs, isLoading: false });
    //console.log(searchs);
    this.startAnimation();
  };

  startAnimation = () => {
    gsap.to(".wrap__title h1 strong", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      ease: "power3.out",
    });
    gsap.to(".wrap__title h1 em", {
      duration: 0.4,
      y: 0,
      delay: 0.3,
      opacity: 1,
      ease: "power3.out",
    });
    gsap.to(".youtube__cont", {
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

  getSite = () => {
    setTimeout(() => {
      this.getYoutubes();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading-active");
      document.querySelector("body").classList.remove("black");
      document.querySelector("body").classList.add("light");
      this.getSite();
    }, 200);
  }

  render() {
    const { isLoading, lists, searchs } = this.state;
    return (
      <div id="wrap">
        {isLoading ? (
          <Loader color="light" />
        ) : (
          <>
            <Header />
            <Layout>
              <section id="youtubeCount">
                <div className="container">
                  <WrapTitle text={["Youtube", "book"]} />
                  <div className="youtube__cont">
                    <div className="site">
                      <h2>웹 표준 사이트 만들기</h2>
                      <div className="left">
                        <img
                          src="img/site01@2x.jpg"
                          alt="웹표준 사이트 만들기"
                        />
                      </div>
                      <div className="right">
                        <dl>
                          <dt>레이아웃</dt>
                          <dd>
                            레이아웃은 사이트를 만드는데 가장 기본적이
                            요소입니다. 레이아웃만 제대로 만들 수 있다면
                            사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼
                            레이아웃 제작은 상당히 중요합니다.
                          </dd>
                          <dt>플러그인</dt>
                          <dd>
                            제이쿼리를 통하여 이미지슬라이드, 라이트 박스를
                            구현합니다. 스크립트가 어려울 수 있지만 간단하게
                            설치하여 작동시켜 봅니다.
                          </dd>
                          <dt>CSS</dt>
                          <dd>
                            CSS의 다양한 속성을 사용하여 사이트의 디자인 작업을
                            구성합니다. CSS는 통해 디자인을 어떻게 꾸미는지
                            알아봅니다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="site">
                      <h2>반응형 사이트 만들기</h2>
                      <div className="left">
                        <img
                          src="img/site02@2x.jpg"
                          alt="웹표준 사이트 만들기"
                        />
                      </div>
                      <div className="right">
                        <dl>
                          <dt>레이아웃</dt>
                          <dd>
                            레이아웃은 사이트를 만드는데 가장 기본적이
                            요소입니다. 레이아웃만 제대로 만들 수 있다면
                            사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼
                            레이아웃 제작은 상당히 중요합니다.
                          </dd>
                          <dt>플러그인</dt>
                          <dd>
                            제이쿼리를 통하여 이미지슬라이드, 라이트 박스를
                            구현합니다. 스크립트가 어려울 수 있지만 간단하게
                            설치하여 작동시켜 봅니다.
                          </dd>
                          <dt>CSS</dt>
                          <dd>
                            CSS의 다양한 속성을 사용하여 사이트의 디자인 작업을
                            구성합니다. CSS는 통해 디자인을 어떻게 꾸미는지
                            알아봅니다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <YoutubeSearch search={searchs} />
                  <Youtubelist list={lists} />
                </div>
              </section>
            </Layout>
            <FooterInfo />
          </>
        )}
      </div>
    );
  }
}

export default Youtube;
