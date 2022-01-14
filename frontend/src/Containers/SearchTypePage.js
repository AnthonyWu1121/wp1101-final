import React, { useEffect, useState } from 'react';
//import Calendar from './Calendar/Calendar.js';
import { Button, Card, Col, Layout, Row} from "antd"
import "antd/dist/antd.css";
import { Header,Content,Footer } from 'antd/lib/layout/layout';
import MatchTable from './SearchTypeFuncs/MatchTable';
import RegisterTable from './SearchTypeFuncs/RegisterTable';
import LoginIdentity from './LoginIdentity';

const SearchType = ({setSearch, teamName}) => {
     //查詢登記(searchALL:登記紀錄)
    const [searchAll, setsearchAll] = useState(false)
    //查詢匹配(searchSuccess:成功匹配)
    const [searchSuccess, setsearchSuccess] = useState(false)

    //查詢選項頁面
    const SearchTypePage = <>
        <Layout>
            <Row>
                <Col md={24}><LoginIdentity teamName={teamName}></LoginIdentity><Header className="system__title" style={{backgroundColor: "transparent"}}>查詢選項</Header></Col>
            </Row>
            <Layout>
                <Content className="system__app">
                    <Card>
                        <Row justify='center'><Button className="system__margins" onClick={() => {
                            setsearchAll(true);
                            }}>查詢登記紀錄</Button></Row>
                        <Row justify='center'><Button className="system__margins" onClick={() => {
                            setsearchSuccess(true);
                            }}>查詢已匹配結果</Button></Row>
                        <Row justify='center'><Button className="system__margins" onClick={() => {
                            setSearch(false);
                            }}>返回功能列表</Button></Row>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </>
    //查詢登記紀錄頁面
    const RegisterRecordPage = <>
    <Layout>
        <Row>
            <Col md={24}><LoginIdentity teamName={teamName}></LoginIdentity><Header className="system__title" style={{backgroundColor: "transparent"}}>登記執行紀錄</Header></Col>
        </Row>
        <Layout className='system__table'>
            <Content><RegisterTable teamName={teamName}></RegisterTable></Content>
        </Layout>
        <Footer className="system__app"><Button className="system__margins" onClick={() => {
                setsearchAll(false);
                }}>返回查詢選項</Button>
        </Footer>
    </Layout>
    </>
    //查詢已匹配結果頁面
    const MatchResult = <>
    <Layout>
        <Row>
            <Col md={24}><LoginIdentity teamName={teamName}></LoginIdentity><Header className="system__title" style={{backgroundColor: "transparent"}}>已匹配結果</Header></Col>
        </Row>
        <Layout className='system__table'>
            <Content><MatchTable teamName={teamName}></MatchTable></Content>
        </Layout>
        <Footer className="system__app">
        <Button className="system__margins" onClick={() => {
                setsearchSuccess(false);
                }}>返回查詢選項</Button>
        </Footer>
    </Layout>
    </>


    return(<>{searchAll?RegisterRecordPage:(searchSuccess?MatchResult:SearchTypePage)}</>)
}

export default SearchType;
