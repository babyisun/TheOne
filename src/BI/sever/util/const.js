export const CODE = {
    SUCCESS: 200,
    ERROR: 201,
    NOLOGIN: 401,
    EXCEPTION: 500,
    NOACCESS: 503
};

export const RESPONSE = {
    code: CODE.SUCCESS,
    data: null,
    msg: "成功"
}

export const STATUS = {
    DELETE: -1, //删除
    DISABLE: 0, //停用
    SAVE: 1, //保存
}

export const TYPE_ITEM = {
    PAGE: "page", //页面位置信息
}