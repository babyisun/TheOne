import {observable, computed, action} from "mobx";

class MyStore {
    // constructor() {
    //     this.number = 10;
    // }

    @observable number = 10;

    @computed get getNumberLength() {
        return ("" + this.number).length;
    }
    @action setNumber(value) {
        this.number += value;
    }
}

export const myStore = new MyStore();