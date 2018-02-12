/**
 * Created by shiyang on 2016/8/12.
 */
export const CODE = {
    SUCCESS: 200,
    ERROR: 201,
    NOLOGIN: 401,
    EXCEPTION: 500,
    NOACCESS: 503
};

export class Ajax {

    constructor(Action) {
        this.Action = Action;
    }

    randomNum() {
        return {
            r: Math.random()
        };
    }

    get(url, data, callback, error) {
        $.ajax({
            type: "GET",
            url: this.Action + url,
            data: data,
            success: function (data) {
                if (!data) 
                    return;
                if (data.code == CODE.SUCCESS) {
                    if (callback) 
                        callback(data);
                    }
                else if (data.code == CODE.NOLOGIN) {
                    location.href = data.url;
                } else {
                    $.alert(data.msg, 2000, error);
                }
            },
            error: error
        });
    }

    post(url, data, callback, error) {
        //console.log(USER);
        $.ajax({
            type: "POST",
            url: this.Action + url,
            data: data,
            success: function (data) {
                if (!data) 
                    return;
                if (data.code == CODE.SUCCESS) {
                    if (callback) 
                        callback(data);
                    }
                else if (data.code == CODE.NOLOGIN) {
                    location.href = data.url;
                } else {
                    $.alert(data.msg, 2000, error);
                }
            },
            error: error
        });
    }

    jsonp(url, data, callback) {
        $.getJSON(url, data, callback);
    }

    toJson(obj) {
        var json = {};
        if (obj && obj instanceof Array) {
            $.each(obj, function (i, item) {
                    json[item.name] = item.value;
            });
        }
        return json;
    }
}