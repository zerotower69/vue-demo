import { createApp } from "vue"
import {ElProgress} from "element-plus"

import Loading from "./Loading.vue"

let app = null;

const createInstance = (initFunc,options) => {
    const loadingNode = document.createElement("div");
    if (app && app.unmount) {
        app.unmount()
    }
    app = createApp(Loading, {
        init:initFunc,
        text: options?.text || '加载中',
        remove: handleRemove,
        successText: options?.successText || '加载成功',
        errorText:options?.errorText || '加载失败'
    });
    app.use(ElProgress)
    app.mount(loadingNode);

    document.body.appendChild(loadingNode);
    function handleRemove()  {
        app.unmount();
        document.body.removeChild(loadingNode);
    }
    app.close=handleRemove
    return app;
}

export default createInstance