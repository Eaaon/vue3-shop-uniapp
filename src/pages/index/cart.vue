<template>
  <view class="content">
    <s-empty v-if="state.list.length === 0" text="购物车空空如也,快去逛逛吧~" icon="/static/cart-empty.png" />
    <view class="cart-box flex flex-col">
      <header>
        共{{ state.list.length }}件商品
      </header>
      <main class="flex-1">
        <view class="goods-box bg-white mb-3 px-3" v-for="item in state.list" :key="item.id">
          <view class="flex items-center">
            <label class="check-box flex items-center" @tap="onSelectSingle(item.id)">
              <!-- <radio :checked="state.selectedIds.includes(item.id)" color="var(--ui-BG-Main)"
                style="transform: scale(0.8)" @tap.stop="onSelectSingle(item.id)" /> -->
            </label>
            <s-goods-item class="flex-1" :title="item.goods.title" :img="item.sku_price.image || item.goods.image"
              :price="item.sku_price.price" :skuText="item.sku_price.goods_sku_text" priceColor="#FF3000"
              :titleWidth="400">
              <!-- <template v-if="!state.editMode" v-slot:tool>
              <su-number-box :min="0" :max="item.sku_price.stock" :step="1" v-model="item.goods_num"
                @change="onNumberChange($event, item)"></su-number-box>
            </template> -->
            </s-goods-item>
          </view>
        </view>
      </main>
    </view>
    <s-tabbar :selected="2"></s-tabbar>
  </view>
</template>

<script setup>
import { computed, reactive, unref } from 'vue';
import cart from '@/store/cart';
const state = reactive({
  editMode: false,
  // list: computed(() => cart.list),
  list: [
    {
      "id": 841,
      "goods_id": 29,
      "user_id": 6,
      "goods_sku_price_id": 89,
      "goods_num": 6,
      "snapshot_price": "298.00",
      "create_time": "2023-06-27 16:21:30",
      "update_time": "2023-06-27 16:21:30",
      "tags": null,
      "status": "normal",
      "goods": {
        "id": 29,
        "type": "normal",
        "title": "水星家纺 床上四件套100%纯棉被套床单枕套床上用品套件全棉被罩被单1.8米床弗利安",
        "subtitle": "100%纯棉",
        "category_ids": "6,54,55,76,77,80,37",
        "image": "http:\/\/file.sheepjs.com\/storage\/test\/20220825\/756e67140b2097ae9ad4c70efa04d97c.jpg",
        "images": [
          "http:\/\/file.sheepjs.com\/storage\/test\/20220825\/756e67140b2097ae9ad4c70efa04d97c.jpg",
          "http:\/\/file.sheepjs.com\/storage\/test\/20220825\/b28a21b0977c85d380cf9fadaa959d8f.jpg",
          "\/storage\/default\/20230316\/d18ae1e410c1e61b2910a7d909305147.mp4"
        ],
        "params": [
          {
            "title": "品牌",
            "content": "水星家纺"
          },
          {
            "title": "材质",
            "content": "纯棉"
          },
          {
            "title": "尺码",
            "content": "180*200"
          }
        ],
        "original_price": "368.00",
        "price": [
          "298.00"
        ],
        "is_sku": 0,
        "limit_type": "none",
        "limit_num": 0,
        "likes": 0,
        "views": 1011,
        "sales": 14,
        "sales_show_type": "exact",
        "stock_show_type": "exact",
        "show_sales": 0,
        "service_ids": [
          1,
          2,
          3,
          4
        ],
        "dispatch_type": null,
        "dispatch_id": 1,
        "is_offline": 0,
        "status": "up",
        "weigh": 0,
        "create_time": "2022-11-21 13:31:52",
        "update_time": "2023-03-16 17:26:11",
        "delete_time": null,
        "status_text": "上架中",
        "type_text": "实体商品",
        "dispatch_type_text": ""
      },
      "sku_price": {
        "id": 89,
        "goods_sku_ids": null,
        "goods_sku_text": [

        ],
        "goods_id": 29,
        "image": null,
        "stock": 999,
        "stock_warning": null,
        "sales": 14,
        "sn": "",
        "weight": "2.00",
        "cost_price": "120.00",
        "original_price": "368.00",
        "price": "298.00",
        "status": "up",
        "weigh": 0,
        "create_time": "2022-11-21 13:31:52",
        "update_time": "2022-11-21 13:31:52",
        "status_text": "上架"
      }
    },
    {
      "id": 839,
      "goods_id": 21,
      "user_id": 6,
      "goods_sku_price_id": 117,
      "goods_num": 3,
      "snapshot_price": "99.00",
      "create_time": "2023-06-27 15:37:25",
      "update_time": "2023-06-27 15:52:22",
      "tags": null,
      "status": "normal",
      "goods": {
        "id": 21,
        "type": "normal",
        "title": "CACUSS B0520帽子男百搭潮流棒球帽女休闲户外鸭舌帽时尚情侣款遮阳帽教师节礼物 卡其色均码适用头围57-59CM",
        "subtitle": "百搭潮流棒球帽",
        "category_ids": "4,10,45,33",
        "image": "https://file.sheepjs.com/storage/default/20221208/6523b862fedf97783876280a2586fa83.jpeg",
        "images": [
          "http:\/\/file.sheepjs.com\/storage\/test\/20220822\/99e3ee9dcb098d68d2a2c13f6c9a7a14.jpg",
          "http:\/\/file.sheepjs.com\/storage\/test\/20220822\/0867cf2e79e2c6ac14c81b99cfffefa5.jpg",
          "http:\/\/file.sheepjs.com\/storage\/test\/20220822\/05ced38170a2ea26b3b9d26f9d97bc26.jpg",
          "http:\/\/file.sheepjs.com\/storage\/test\/20220822\/1759c168b6214b970c8e79350fb6100f.jpg"
        ],
        "params": [
          {
            "title": "商品编号",
            "content": "190395003"
          },
          {
            "title": "适用性别",
            "content": "通用"
          },
          {
            "title": "材质",
            "content": "棉"
          },
          {
            "title": "流行元素",
            "content": "车缝线"
          },
          {
            "title": "风格",
            "content": "百搭"
          },
          {
            "title": "适用季节",
            "content": "四季通用"
          }
        ],
        "original_price": "136.00",
        "price": [
          "99.00"
        ],
        "is_sku": 1,
        "limit_type": "none",
        "limit_num": 0,
        "likes": 0,
        "views": 1564,
        "sales": 207,
        "sales_show_type": "exact",
        "stock_show_type": "exact",
        "show_sales": 0,
        "service_ids": [
          1,
          2,
          3,
          4
        ],
        "dispatch_type": null,
        "dispatch_id": 1,
        "is_offline": 0,
        "status": "up",
        "weigh": 0,
        "create_time": "2022-11-21 13:31:52",
        "update_time": "2022-12-08 09:41:18",
        "delete_time": null,
        "status_text": "上架中",
        "type_text": "实体商品",
        "dispatch_type_text": ""
      },
      "sku_price": {
        "id": 117,
        "goods_sku_ids": "50",
        "goods_sku_text": [
          "卡其色"
        ],
        "goods_id": 21,
        "image": "https://file.sheepjs.com/storage/default/20221208/6523b862fedf97783876280a2586fa83.jpeg",
        "stock": 198,
        "stock_warning": null,
        "sales": 14,
        "sn": "",
        "weight": "0.00",
        "cost_price": "60.00",
        "original_price": "136.00",
        "price": "99.00",
        "status": "up",
        "weigh": 0,
        "create_time": "2022-12-08 09:41:18",
        "update_time": "2023-04-27 14:34:09",
        "status_text": "上架"
      }
    }
  ],
  selectedList: [],
  selectedIds: computed(() => cart.selectedIds),
  isAllSelected: computed(() => cart.isAllSelected),
  totalPriceSelected: computed(() => cart.totalPriceSelected),
});


// 单选选中
function onSelectSingle(id) {
  cart.selectSingle(id);
}
// 全选
function onSelectAll() {
  cart.selectAll(!state.isAllSelected);
}

// 结算
function onConfirm() {
  // let goods_list = [];
  // state.selectedList = state.list.filter((item) => state.selectedIds.includes(item.id));
  // state.selectedList.map((item) => {
  //   goods_list.push({
  //     goods_id: item.goods_id,
  //     goods_num: item.goods_num,
  //     goods_sku_price_id: item.goods_sku_price_id,
  //   });
  // });
  // if (goods_list.length === 0) {
  //   // sheep.$helper.toast('请选择商品');
  //   return;
  // }
  // sheep.$router.go('/pages/order/confirm', {
  //   data: JSON.stringify({
  //     order_type: 'goods',
  //     goods_list,
  //     from: 'cart',
  //   }),
  // });
}

function onNumberChange(e, cartItem) {
  if (e === 0) {
    cart.remove(cartItem.id);
    return;
  }
  if (cartItem.goods_num === e) return;
  cartItem.goods_num = e;
  cart.update({
    goods_id: cartItem.goods_id,
    goods_num: e,
    goods_sku_price_id: cartItem.goods_sku_price_id,
  });
}
async function onDelete() {
  cart.remove(state.selectedIds);
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

<style lang="scss" scoped>
:deep(.ui-fixed) {
  height: 72rpx;
}

.cart-box {
  width: 100%;

  .cart-header {
    height: 70rpx;
    background-color: #f6f6f6;
    width: 100%;
    position: fixed;
    left: 0;
    top: v-bind('sys_navBar') rpx;
    z-index: 1000;
    box-sizing: border-box;
  }

  .cart-footer {
    height: 100rpx;
    background-color: #fff;

    .pay-btn {
      width: 180rpx;
      height: 70rpx;
      font-size: 28rpx;
      line-height: 28rpx;
      font-weight: 500;
      border-radius: 40rpx;
    }
  }

  .cart-content {
    margin-top: 70rpx;

    .goods-box {
      background-color: #fff;
    }
  }
}
</style>