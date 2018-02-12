import { Ajax, CODE } from "./AJAX";
import Domain from "./Domain";

const USERCOOKIE = $
    .cookie
    .get("USERINFO");
export const USER = JSON.parse(USERCOOKIE || "{}");

const host = location.host;
const PROTOCOL = new Domain().Protocol;

export const STATIC = PROTOCOL + new Domain().staticUrl() + "/ReactUI/build/";
//站点根目录;
export const ROOTURL = PROTOCOL + host;
//站点地址;
export const SITEURL = ROOTURL + "/lms025/";
//API地址
export const ACTION = PROTOCOL + "biapi.cig.com.cn/";

/* export class AJAX {

    static randomNum() {
        new Ajax().randomNum();
    }

    static get(url, data, callback, error) {
        new Ajax(ACTION).get(url, data, callback, error);
    }

    static post(url, data, callback, error) {
        new Ajax(ACTION).post(url, data, callback, error);
    }
} */

export const AJAX = new Ajax(ACTION);

export class Common {

    static has(id, content) {
        if (USER && USER.auth_item && USER.auth_item.hasOwnProperty(id)) {
            return content;
        }
        return null;
    }

    static hasOne(ids) {
        if (USER && USER.auth_item) {
            if (typeof ids != "number") {
                for (let i = 0; i < ids.length; i++) {
                    if (USER.auth_item.hasOwnProperty(ids[i])) {
                        return true;
                    }
                }
            } else {
                return USER
                    .auth_item
                    .hasOwnProperty(ids);
            }
        }
        return false;
    }
}
