<template>
    <div>
        <div class="meta-info">
            <!-- <span>序号:</span> -->
            <!-- <el-input size="small" placeholder="请输入序号" v-model="orderNum" clearable>
            </el-input> -->
            <el-input size="small" placeholder="请输入序号" v-model="orderNum">
                <template slot="prepend">订单序号</template>
            </el-input>
            <span class="meta-info-divider"></span>
            <!-- <span>客户:</span> -->
            <el-input size="small" placeholder="请输入客户" v-model="customerName">
                <template slot="prepend">客户名称</template>
            </el-input>
        </div>

        <div class="at-table at-table--large">
            <div class="at-table__content">

                <div class="at-table__body">
                    <table>
                        <colgroup><col><col><col><col></colgroup>
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

                                    <at-select v-model="item.name" placeholder="请选择">
                                        <at-option v-for="(item,key) in priceList" :value="item.name" :key="key" v-if="priceList.length > 0">{{item.name}}</at-option>
                                    </at-select>
                                </td>
                                <td class="at-table__cell table-center">
                                    {{matchPrice(item)['price']}}
                                </td>
                                <td class="at-table__cell table-center">

                                    <at-button-group size="small">
                                        <at-button @click="reduce(index)">-</at-button>
                                        <at-button>{{item.count}}</at-button>
                                        <at-button @click="add(index)">+</at-button>
                                    </at-button-group>
                                </td>
                                <td v-if="item['name']" class="at-table__cell table-center">
                                    {{item.count * matchPrice(item)['price']}}
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
            <div class="flex column-end">
                <el-button id="login" style="margin-right:20px;" type="primary" @click="genOrder()" :disabled="orderNum === '' || customerName === '' || records[0]['name'] === '请选择'">提交订单</el-button>
            </div>
        </div>
        {{records}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            // item_name: "",
            records: [],
            // dataModel: [],
            priceList: [],
            orderNum: "",
            customerName: ""
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
            this.records.push({
                name: "请选择",
                price: 0,
                count: 0,
                orderNum: null,
                customerName: null
            });
        },
        resetOrder() {
            this.orderNum = "";
            this.customerName = "";
            this.records.length = 0;
            this.records.push({
                name: "请选择",
                price: 0,
                count: 0,
                orderNum: null,
                customerName: null
            });
        },
        processOrder(orderArray) {
            const ordersLen = orderArray.length;
            for (let i = 0; i < ordersLen; i++) {
                orderArray[i]["orderNum"] = this.orderNum;
                orderArray[i]["customerName"] = this.customerName;
                orderArray[i]["total"] =
                    Number(orderArray[i]["price"]) *
                    Number(orderArray[i]["count"]);
            }
        },
        genOrder() {
           
            this.processOrder(this.records);
            this.submitOrder(this.records);
            console.log(this.records);
            
        },
        submitOrder(orderArray) {
            let OrderList = AV.Object.extend("orderlist");
            let orderList = new OrderList();
            const ordersLen = orderArray.length;
            for(let i = 0; i < ordersLen; i++) {
                let orderList = new OrderList();
                orderList.set("orderNum", orderArray[i]['orderNum']);
                orderList.set("customerName", orderArray[i]['customerName']);
                orderList.set("name", orderArray[i]['name']);
                orderList.set("price", orderArray[i]['price']);
                orderList.set("count", orderArray[i]['count']);
                orderList.set("total", orderArray[i]['total']);
                orderList.save().then(
                function(orderList) {
                    console.log("发布成功!id是 " + orderList.id);

                },
                function(error) {
                    console.error(error);
                }
            );
            }
            this.resetOrder();
        }
    },
    mounted() {
        let record = {
            name: "请选择",
            price: 0,
            count: 0,
            orderNum: null,
            customerName: null
        };
        this.records.push(record);

        let _this = this;
        let query = new AV.Query("pricelist");
        query.descending("name");
        query.find().then(pricelist => {
            pricelist.map(item => {
                _this.priceList.push(item.attributes);
            });
        });
    },
    computed: {
        matchPrice: function() {
            return function(itemSelection) {
                if (this.priceList) {
                    let currentItem = this.priceList.find(
                        item => item.name == itemSelection["name"]
                    );
                    itemSelection["price"] = currentItem["price"];
                    return itemSelection;
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
                    item => item.name == this.records[i]["name"]
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
<style>
.at-table table {
    overflow: auto;
    background-color: #fff;
}
.at-table__thead {
    font-family: inherit;
    font-size: 14px;
}
.table-center {
    text-align: center;
}
tbody {
    font-size: larger;
}
.at-table--large {
    /* width:1020px;
    min-width:1020px;
    max-width:1020px; */
}

.at-table__thead > tr > th {
    background-color: #f5f7fa;
}
.at-table--large table th,
.at-table--large table td {
    height: 23px;
}
.at-table__cell {
    padding: 12px;
}
.statistic-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    margin: 12px auto;
    color: #3f536e;
    font-size: 14px;
    font-weight: bold;
}
.divider {
    display: inline-block;
    width: 10px;
}
.meta-info {
    display: flex;
    width: 505px;
    margin-bottom: 20px;
}
.meta-info-divider {
    display: inline-block;
    width: 20px;
}

.el-input-group__append,
.el-input-group__prepend {
    background-color: #f5f7fa;
    color: #3f536e;
    font-weight: bold;
}
</style>
