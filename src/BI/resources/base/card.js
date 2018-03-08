import "./card.scss";

const item = {
    title: "双臂扣用户数量",
    unit: "单位：元",
    number: "3,333,222",
    subtitle: "净值",
    rate: "88%"
};

export default class Card {
    constructor() {
        this.html = this.render();
    }

    render() {
        return `<div class="card row">
        <div class="col-md-3">
            <div class="title">
                <h3>${item.title}</h3>
                <span class="btn bg-primary">${item.unit}</span>
            </div>
            <div class="number">${item.number}</div>
            <p>
                ${item.subtitle}
                <span class="fright">${item.rate}</span>
            </p>
        </div>
    </div>`;
    }
}