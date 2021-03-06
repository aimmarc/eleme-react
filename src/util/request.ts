import axios from "axios";

const codeMessage = {
    200: "服务器成功返回请求的数据。",
    201: "新建或修改数据成功。",
    202: "一个请求已经进入后台排队（异步任务）。",
    204: "删除数据成功。",
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌、用户名、密码错误）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。"
};

interface IOptions {
    headers?: object;
    timeout?: number;
    method?: string;
}

export default function request(url: string, options: IOptions) {
    const defaultOptions = {
        headers: {},
        withCredentials: true,
        timeout: 20000,
    };
    const newOptions: any = {...defaultOptions, ...options};

    if (
        newOptions.method === "POST" ||
        newOptions.method === "PUT" ||
        newOptions.method === "DELETE"
    ) {
        newOptions.headers = {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
            ...newOptions.headers
        };
    } else {
        // newOptions.body is FormData
        newOptions.headers = {
            Accept: "application/json",
            ...newOptions.headers,
        };
    }
    return new Promise((resolve: any, reject: any): any => {
        axios(url, newOptions).then((json: any) => {
            try {
                const data = json.data;
                if (data.code === 0) {
                    resolve(data.data);
                } else {
                    reject(data.msg);
                }
            } catch (e) {
                throw e;
            }
        }).catch((error: any) => {
            if (error.response) {
                const status = error.response.status;
                if (status === 401) {
                    // @ts-ignore
                    window.location.hash = '#/login';
                }
                // @ts-ignore
                throw codeMessage[error.response.status];
            }
            throw '未知错误';
        })
    });
}
