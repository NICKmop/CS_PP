import React from "react";
import $ from 'jquery';
import './Myskills.css'

const Myskills = () => {
    return (
        <section id="Myskills_content">
            <div className="MyskillsBody">
            <h1>기술 및 경험</h1>
                <div className="MyskillsBody_cot">
                    <h5>제가 경험해본 프로젝트 등 회사에서 실행 및 진행해봣던 사항에 대해 잠깐 소개 하고 가겠습니다.<br/>
                        <ul>
                            <li>srping boot를 이용하여 사용자 평가페이지 제작</li>
                            <li>nifi 및 python을 이용한 데이터 스케쥴링 및 가공</li>
                            <li>python을 이용한 크롤링 데이터 excel 적재</li>
                            <li>docker jenkins를 이용하여 프로젝트 빌드 및 배포</li>
                            <li>ELK(elastic logstash kibana)를 이용한 로그 분석 및 검색엔진 구현</li>
                        </ul>
                        <h3>등으로 회사에서 진행했던 것들 이외로 사이드 프로젝트 같은 경우에는 github을 이용하여 지속적으로 경험을 적용해 가고 있습니다.</h3>
                    </h5>
                </div>
            </div>
        </section>
    )
}
export default Myskills;