import {observable, computed, action} from "mobx";
import Components from "../core/components";

class ConponentsStore {
    @observable components = [ 
        {x: 0, y: 0, width: 2, height: 2},
        {x: 2, y: 0, width: 4, height: 2},
        {x: 6, y: 0, width: 2, height: 4},
        {x: 1, y: 2, width: 4, height: 2}];

    @action add(value) {
        //this.components.add();
    }
}

export const conponentsStore = new ConponentsStore();