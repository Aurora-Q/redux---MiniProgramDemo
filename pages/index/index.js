import { connect } from '../../lib/mp-redux';
// 引入redux层的action
import { getMenuList, getGoodsList, getCurrentMenuId, getDetailInfo } from '../../redux/index/index.redux';
// import { getMenuListService, getGoodsListService } from '../../lib/server/fetch';
// 引入mock假数据
import { menuListMock, goodListMock } from '../../redux/index/index.mock'

const pageConfig = {
        data: {},

        onShow() {
            let that = this;
            // 当一个action依赖另一个ation的数据时,采用回调的方式去处理，回调成功拿到所依赖的action数据时，再去处理下一个action
            that.getMenuList({ menuListMock }, res => {
                if (res.errcode === 0) {
                    that.getGoodsList(goodListMock);
                }
            });


            // 当有api进行数据调用时，这里直接用mock数据进行
            /** 
             * getMenuListService({ token: '530b984bf85b7db3224ff76bbe13f790' }, res => {
                if (res.errcode === 0) {
                    that.getMenuList(res.data);
                }
                getGoodsListService({
                    token: '530b984bf85b7db3224ff76bbe13f790',
                    menu_id: that.data.menuId
                }, res => {
                    if (res.errcode === 0) {
                        that.getGoodsList(res.data);
                    }
                })
            })
            */

        },

        onToDetail({
            currentTarget: {
                dataset: {
                    item
                }
            }
        }) {
            this.getDetailInfo(item); // 写一个action来存储点击的某个商品详情信息
            wx.navigateTo({
                url: '/pages/detail/detail',
            })
        },

        // 点击菜单栏
        onClickMenu({
            currentTarget: {
                dataset: {
                    item
                }
            }
        }) {
            //当切换菜单栏的时候，应该去调用api,这里就还是假数据吧，害
            if (this.data.selectedMenuId && this.data.selectedMenuId === item.menu_id) return;
            this.getCurrentMenuId(item.menu_id); // 写一个action来处理选中的菜单栏
        }


    }
    // 返回的新的state
const mapStateToProps = state => {
    return {
        ...state,
        menuId: state.indexReducer.menuId,
        list: state.indexReducer.list,
        goods: state.indexReducer.goods,
        selectedMenuId: state.indexReducer.selectedMenuId
    }
}

// 相对应触发的action
const mapDispatchToProps = {
    getMenuList,
    getGoodsList,
    getCurrentMenuId,
    getDetailInfo
}

// connect函数将state,页面state，action连接起来
Page(connect(mapStateToProps, mapDispatchToProps)(pageConfig));