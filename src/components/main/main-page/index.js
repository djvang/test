import React, { Component } from 'react';
import BannerWrap from "./banner-wrap/banner-wrap";
import FilterPanel from "./filter-panel/filter-panel";
import GameList from "./game-list/game-list";
import { Affix } from 'antd';

class Main extends Component {
    render() {
        return(
            <main>
                <BannerWrap/>
                <Affix offsetTop={41}>
                    <FilterPanel />
                </Affix>
                <GameList />
            </main>
        )
    }
}

export default Main;
