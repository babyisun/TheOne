export default class Domain {
    constructor() {
        this.DOMAIN = {
            ONLINE: "static.dma.cig.com.cn",
            TEST: "static.dmas.cig.com.cn",
            MOBILE_TEXT: "static2.testdma.cig.com.cn"
        };
        this.HOST = {
            "dma.zznissan.com.cn": this.DOMAIN["ONLINE"],
            "dma.landwind.com": this.DOMAIN["ONLINE"],
            "dmp.faw-mazda.com": this.DOMAIN["ONLINE"],
            "dfyuan.dma.cig.com.cn": this.DOMAIN["ONLINE"],
            "test.dmas25.cig.com.cn": this.DOMAIN["TEST"],
            "wx25.testdma.cig.com.cn": this.DOMAIN["MOBILE_TEXT"]
        };
        this.UPLOADURL = {
            ONLINE: "uploadfile.dma.cig.com.cn",
            TEST: "up.dmas.cig.com.cn"
        };
    }

    get Protocol() {
        return location.protocol + "//";
    }
    //Protocol=location.protocol + "//";

    staticUrl() {
        let _host = location.host.toLowerCase();
        if (this.HOST.hasOwnProperty(_host)) {
            return this.HOST[_host];
        }
        if (_host.indexOf("dma.cig.com.cn") >= 0) {
            return this.DOMAIN["ONLINE"];
        } else if (_host.indexOf("dmas.cig.com.cn") >= 0 || _host.indexOf("test") >= 0) {
            return this.DOMAIN["TEST"];
        } else {
            return this.DOMAIN["ONLINE"];
        }
    }

    uploadUrl() {
        let _host = location.host.toLowerCase();
        if (_host.indexOf("dma.cig.com.cn") >= 0) {
            return this.UPLOADURL["ONLINE"];
        } else if (_host.indexOf("dmas.cig.com.cn") >= 0) {
            return this.UPLOADURL["TEST"];
        } else {
            return this.UPLOADURL["ONLINE"];
        }
    }
}