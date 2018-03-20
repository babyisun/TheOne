import "./card.scss";
import {observable, computed, action} from "mobx";
import {observer} from "mobx-react";
import {conponentsStore} from "../../js/store/ConponentsStore";

const ITEM = {
    title: "双臂扣用户数量",
    unit: "单位：元",
    number: "3,333,222",
    subtitle: "净值",
    rate: "88%"
};

@observer
export default class Card {
    constructor(item) {
        this.item = item || ITEM;
        this.html = this.render();
    }

    render() {
        return `<div class="card row">
        <div class="col-md-3">
            <div class="title">
                <h3>${this.item.title}</h3>
                <span class="btn bg-primary">${this.item.unit}</span>
            </div>
            <div class="number">${this.item.number}</div>
            <p>
                ${this.item.subtitle}
                <span class="fright">${this.item.rate}</span>
            </p>
        </div>
    </div>`;
    }
}