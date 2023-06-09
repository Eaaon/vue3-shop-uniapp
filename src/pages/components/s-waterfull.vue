<template>
	<view class="padding-top-lg">
	<view class="waterfalls-flow">
		<view v-for="(item,index) in data.column" :key="index" class="waterfalls-flow-column" :style="{'width':w,'margin-left':index==0?0:m}" :id="`waterfalls_flow_column_${index+1}`">
			<view class="block w-full rounded-lg overflow-hidden bg-white mb-2 pb-2" v-for="(item2,index2) in data[`column_${index+1}`]" :key="index2">
				<image :src="item2.image" mode="widthFix" @load="imgLoad(item2)" @error="imgError(item2)" class="imgsty"></image>
				<view class="text-sm line-clamp-2 px-2 my-2 ">{{item2.title}}</view>
        <view class="inline-block text-xs text-red-ligth px-2">
          <view class="inline-block">￥</view>
          <view class="inline-block text-base font-medium">{{filters.getIntegerPart(item2.price)}}.</view>
          <view class="inline-block">{{filters.extractDecimal(item2.price)}}</view>
          <view class="inline-block ml-1 text-xs text-gray-999 line-through decoration-slate-500">￥{{item2.originPrice}}</view>
        </view>
			</view>
		</view>
	</view>
	</view>
</template>

<script setup lang="ts">

	import {
		ref,
		reactive,
		watch,
		computed,
		getCurrentInstance,
		onMounted
  } from 'vue'

  import filters from '@/utils/numberUtils'

	const _this = getCurrentInstance();

  interface productType{
    image: string
    title: string
    price: string,
    originPrice: string,
  }

  const data = reactive({
		list: [] as productType[],
		column: 2,
		columnSpace: 1,
	});

	// 数据赋值
	data.list = [{
			image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/96374/5/39427/159025/647fe8dcF4f700e98/74cb422b3e1fbe72.jpg!q70.dpg.webp',
			title: '李施德林Listerine漱口水多效全护含酒精清新口气500ml*3瓶减少细菌',
			price: '9.90',
      originPrice: '88.88'
		},
		{
			image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/62431/23/24714/156148/6479e798Fd72341d6/deaa27306ee49701.jpg!q70.dpg.webp',
			title: '良品铺子 牛轧奶芙 奶香味雪花酥饼干酥脆休闲零食120g',
			price: '9.91',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/200x100.png/FFB6C1',
			title: '我是标题3',
			price: '9.93',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/200x300.png/9400D3',
			title: '我是标题4',
			price: '9.94',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/100x240.png/B0E0E6',
			title: '我是标题5',
			price: '9.95',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/140x280.png/7FFFAA',
			title: '我是标题6',
			price: '9.96',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/40x60.png/EEE8AA',
			title: '我是标题7',
			price: '9.97',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/200x500.png/ff0000',
			title: '我是标题1',
			price: '9.91',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/200x200.png/2878ff',
			title: '我是标题2',
			price: '9.91',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/200x100.png/FFB6C1',
			title: '我是标题3',
			price: '9.93',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/200x300.png/9400D3',
			title: '我是标题4',
			price: '9.94',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/100x240.png/B0E0E6',
			title: '我是标题5',
			price: '9.95',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/140x280.png/7FFFAA',
			title: '我是标题6',
			price: '9.96',
      originPrice: '88.88'
		},
		{
			image: 'https://via.placeholder.com/40x60.png/EEE8AA',
			title: '我是标题7',
			price: '9.97',
      originPrice: '88.88'
		},
	];
	// 计算列宽
	const w = computed(() => {
		const column_rate = `${100 / data.column - (+data.columnSpace)}%`;
		return column_rate;
	})
	// 计算margin
	const m = computed(() => {
		const column_margin = `${(100-(100 / data.column - (+data.columnSpace)).toFixed(5)*data.column)/(data.column-1)}%`;
		return column_margin;
	})
	// 每列的数据初始化
	for (let i = 1; i <= data.column; i++) {
		data[`column_${i}`] = [];
	}
	// 获取最小值的对象
	const getMin = (a: any[], s: string) => {
		let m = a[0][s];
		let mo = a[0];
		for (var i = a.length - 1; i >= 0; i--) {
			if (a[i][s] < m) {
				m = a[i][s];
			}
		}
		mo = a.filter((i: { [x: string]: any; }) => i[s] == m);
		return mo[0];
	}
	// 计算每列的高度
	function getMinColumnHeight() {
		return new Promise(resolve => {
			const heightArr: { column: number; height: any; }[] = [];
			for (let i = 1; i <= data.column; i++) {
				const query = uni.createSelectorQuery().in(_this);
				query.select(`#waterfalls_flow_column_${i}`).boundingClientRect(data => {
					heightArr.push({
						column: i,
						height: data.height
					});
				}).exec(() => {
					if (data.column <= heightArr.length) {
						resolve(getMin(heightArr, 'height'));
					}
				});
			}
		})
	};
	async function initValue(i: number) {
		if (i >= data.list.length) return false;
		const minHeightRes = await getMinColumnHeight();
		data[`column_${minHeightRes.column}`].push({
			...data.list[i],
			index: i
		});
	}
	onMounted(() => {
		initValue(0);
	})
	// 图片加载完成
	function imgLoad(item:any) {
		const i = item.index;
		initValue(i + 1);
	}
	// 图片加载失败
	function imgError(item:any) {
		const i = item.index;
		initValue(i + 1);
	}
</script>

<style scoped lang="scss">
	.waterfalls-flow {
    margin: 0 20rpx;
		&-column {
			float: left;
      padding: 0 0 200upx;
		}
	}

	.imgsty {
		width: 100%
	}
</style>
