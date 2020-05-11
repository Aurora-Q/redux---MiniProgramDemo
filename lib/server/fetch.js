import { request } from './servers';

// export const getMenuListService = async({
//         token
//     }) => {
//         try {
//             const config = api.getMenuListService;
//             const data = await request(config, { token });
//             console.log('26 - data', data);
//             return data
//         } catch (e) {
//             console.log(e);
//         }
//     }
// 获取左侧菜单栏
export function getMenuListService(data, callback) {
    return request("/udata/menu/list", {
        data,
        success: (res) => {
            callback(res);
        }
    });
}

// 获取商品列表
export function getGoodsListService(data, callback) {
    return request("/udata/good/list", {
        data,
        success: (res) => {
            callback(res);
        }
    })
}