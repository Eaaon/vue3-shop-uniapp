import { defineStore } from 'pinia'
import cartApi from "@/api/cart"

interface CartState {
  list: any[],
  selectedIds: any[],
  isAllSelected: boolean,
  cartSelectedTotalPrice: string
}

const cart = defineStore({
  id: 'cart',
  state: (): CartState => ({
    list: [], // 购物车列表
    selectedIds: [], // 已选列表
    isAllSelected: false, //是否全选
    cartSelectedTotalPrice: '0.00', // 选中项总金额
  }),
  getters: {
    totalPriceSelected: (state) => {
      let price = 0;
      if (!state.selectedIds.length) return price.toFixed(2);
      state.list.forEach((item) => {
        price += state.selectedIds.includes(item.id)
          ? Number(item.sku_price.price) * item.goods_num
          : 0;
      });
      return price.toFixed(2);
    },
  },
  actions: {
    // 获取购物车列表
    async getList() {
      // const { data, error } = await cartApi.list();
      // if (error === 0) {
      //   this.list = data;
      // }
    },
    // 添加购物车
    async add(goodsInfo: any) {
      // const { error } = await cartApi.append({
      //   goods_id: goodsInfo.goods_id,
      //   goods_num: goodsInfo.goods_num,
      //   goods_sku_price_id: goodsInfo.id,
      // });
      // if (error === 0) {
      //   this.getList();
      // }
    },

    // 更新购物车
    async update(goodsInfo: any) {
      // const { error } = await cartApi.update({
      //   goods_id: goodsInfo.goods_id,
      //   goods_num: goodsInfo.goods_num,
      //   goods_sku_price_id: goodsInfo.goods_sku_price_id,
      // });
      // if (error === 0) {
      //   // this.getList();
      // }
    },

    // 移除购物车
    async delete(ids: any) {
      // if (typeof ids === 'array') {
      //   ids = ids.join(',');
      // }
      // const { error } = await cartApi.remove(ids);
      // if (error === 0) {
      //   this.selectAll(false);
      //   this.getList();
      // }
    },

    // 选择购物车商品
    selectSingle(goodsId: any) {
      if (!this.selectedIds.includes(goodsId)) {
        this.selectedIds.push(goodsId);
      } else {
        this.selectedIds.splice(this.selectedIds.indexOf(goodsId), 1);
      }
      this.isAllSelected = this.selectedIds.length === this.list.length;
    },

    // 全选
    selectAll(flag: any) {
      this.isAllSelected = flag;
      if (!flag) {
        this.selectedIds = [];
      } else {
        this.list.forEach((item: any) => {
          this.selectedIds.push(item.id);
        });
      }
    },

    // 清空购物车
    emptyList() {
      this.list = [];
      this.selectedIds = [];
      this.isAllSelected = false;
      this.cartSelectedTotalPrice = '0.00';
    },
  },
  persist: {
    enabled: true,
  },
});

export default cart;
