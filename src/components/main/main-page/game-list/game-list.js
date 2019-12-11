import React, { Component } from 'react';
import GameBlock from "./game-thumbnail";
import { Row } from 'antd';


class GameList extends Component {
    render() {
        let games = [];
        for(let i = 0; i < 20; i++) {
            games[i] = <GameBlock/>
        }
        return(
            <div className="game-list">
                <div className="container-fluid">
                    <div className="row">
                        {games}
                    </div>
                </div>
            </div>
        )
    }
}

export default GameList;
