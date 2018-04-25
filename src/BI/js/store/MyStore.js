import {observable, computed, action} from "mobx";

class MyStore {
    constructor() {
        //this.number = 10;
    }
    // 声明
    @observable number = 10;

    //自计算属性
    @computed get getNumberLength() {
        return ("" + this.number).length;
    }
    
    //方法
    @action setNumber(value) {
        this.number += value;
    }
}

export const myStore = new MyStore();