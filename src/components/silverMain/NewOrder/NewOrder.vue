<template>
    <div>
        <div class="at-table at-table--large">
            <div class="at-table__content">

                <div class="at-table__body">
                    <table>
                        <colgroup><col width="117"><col width="124"><col width="230"><col width="292"></colgroup>
                        <thead class="at-table__thead">
                            <tr>

                                <th class="at-table__cell at-table__column">
                                    商品序号
                                    <span class="divider"></span>
                                    <i class="icon icon-plus-square" style="font-size:19px;" @click="newRecord()"></i>

                                </th>
                                <th class="at-table__cell at-table__column table-center">
                                    商品名称
                                </th>
                                <th class="at-table__cell at-table__column table-center">
                                    商品单价

                                </th>
                                <th class="at-table__cell at-table__column table-center">
                                    商品数量

                                </th>
                                <th class="at-table__cell at-table__column table-center">
                                    商品总价

                                </th>
                            </tr>
                        </thead>
                        <tbody class="at-table__tbody">
                            <tr v-for="(item,index,$key) in records" :key="$key" v-if="priceList.length > 0">

                                <td class="at-table__cell">
                                    {{index + 1}}
                                </td>
                                <td class="at-table__cell table-center">

                                    <at-select v-model="dataModel[index].model" placeholder="请选择" style="width:200px" filterable>
                                        <at-option v-for="(item,key) in priceList" :value="item.name" :key="key" v-if="priceList.length > 0">{{item.name}}</at-option>
                                    </at-select>
                                </td>
                                <td class="at-table__cell table-center">
                                    {{matchPrice(dataModel[index].model)['price']}}
                                </td>
                                <td class="at-table__cell table-center">

                                    <at-button-group size="small">
                                        <at-button @click="reduce(index)">-</at-button>
                                        <at-button>{{item.count}}</at-button>
                                        <at-button @click="add(index)">+</at-button>
                                    </at-button-group>
                                </td>
                                <td :if="dataModel[index].model" class="at-table__cell table-center">
                                    {{item.count * matchPrice(dataModel[index].model)['price']}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!---->
            <div class="statistic-panel">
                <span v-if="priceList.length > 0">{{totalCount}} 件商品</span>
                <span v-if="priceList.length > 0">总价：{{totalPrice}}</span>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            // item_name: "",
            records: [],
            dataModel: [],
            priceList: []
        };
    },
    methods: {
        add(index) {
            //获取当前点击事件上面商品的数量
            this.records[index].count++;
        },
        reduce(index) {
            let item_num = this.records[index].count;
            if (item_num < 1) return;
            this.records[index].count--;
        },
        newRecord() {
            this.dataModel.push({ model: "请选择" });
            this.records.push({ name: "请选择", price: 0, count: 0 });
        }
    },
    mounted() {
        for (let i = 0; i < 2; i++) {
            let item = { model: "请选择" };
            let record = { name: "default_item", price: 0, count: 0 };
            this.dataModel.push(item);
            this.records.push(record);
        }
        let _this = this;
        let query = new AV.Query("pricelist");
        query.descending("name");
        query.find().then(pricelist => {
            pricelist.map(item => {
                _this.priceList.push(item.attributes);
                console.log(_this.priceList);
            });
        });
    },
    computed: {
        matchPrice: function() {
            return function(itemSelection) {
                if (this.priceList) {
                    let price = this.priceList.find(
                        item => item.name == itemSelection
                    );
                    return price;
                }
            };
        },
        totalCount: function() {
            var totalCount = 0;
            for (let i = 0; i < this.records.length; i++) {
                totalCount += this.records[i].count;
            }
            return totalCount;
        },
        totalPrice: function() {
            var totalPrice = 0;
            for (let i = 0; i < this.records.length; i++) {
                let currentItem = this.priceList.find(
                    item => item.name == this.dataModel[i]["model"]
                );
                // console.log(currentItem['price'])
                totalPrice += currentItem["price"] * this.records[i].count;
            }
            return totalPrice;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.at-table table {
    overflow: auto;
    background-color: #fff;
}
.table-center {
    text-align: center;
}
tbody {
    font-size: larger;
}
.statistic-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    margin: 12px auto;
    color: #3f536e;
    font-size: 13px;
    font-weight: bold;
}
.divider {
    display: inline-block;
    width: 10px;
}
</style>
