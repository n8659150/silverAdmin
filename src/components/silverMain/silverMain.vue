<template>
    <el-main>
        <el-table show-summary :data="tableData5" :summary-method="getSummaries" :header-cell-style="{'background-color':'#f5f7fa'}" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand" style="display:flex;" v-for="(item,key) in props.row.items" :key="key">
                        <!-- <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item> -->

                        <el-form-item :label="'商品' + String(key + 1)">
                            <span>{{ item.name }}</span>
                        </el-form-item>
                        <el-form-item label="价格">
                            <span>{{ item.price }}</span>
                        </el-form-item>
                        <el-form-item label="数量">
                            <span>{{ item.quantity }}</span>
                        </el-form-item>
                        <el-form-item label="总价">
                            <span>{{item.price * item.quantity }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="单号" prop="id">
            </el-table-column>
            <el-table-column label="客户" prop="shop">
            </el-table-column>
            <el-table-column label="商品数量" prop="itemQty">
            </el-table-column>
            <el-table-column label="总价" prop="total">
            </el-table-column>
            <!-- <el-table-column label="店铺" prop="shop">
      </el-table-column>
      <el-table-column label="地址" prop="address">
      </el-table-column> -->
        </el-table>
    </el-main>
</template>

<script>
export default {
    name: "silverMain",
    data() {
        return {
            tableData5: [
                {
                    id: "001",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "002",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "003",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "004",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "005",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "006",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "007",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "008",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "009",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "010",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "011",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "012",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "013",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "014",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "015",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "016",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                },
                {
                    id: "017",
                    items: [
                        { name: "Gucci水桶包", price: "500", quantity: "2" },
                        { name: "LV水桶包", price: "260", quantity: "2" }
                    ],
                    shop: "周嘉琪",
                    itemQty: "2",
                    total: "1520"
                }
            ]
        };
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 1) {
                    sums[index] = "总价";
                    return;
                }
                
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    if (index === 3) {
                        sums[index] += " 件";
                    }
                    if (index === 4) {
                        sums[index] += " 元";
                    }
                } else {
                    return;
                }
            });

            return sums;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
