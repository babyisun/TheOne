import {observable, computed, action} from "mobx";

class ModalStore {
    @observable projectModal_Show = false;

    @action setProjectModal_Show(value) {
        this.projectModal_Show = value;
        console.log(this);
    }
}

export const modalStore = new ModalStore();