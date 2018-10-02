<template>
  <div>
    <el-table :data="tableData5" show-summary :summary-method="getSummaries" :span-method="cellMerge" border :header-cell-style="{'background-color':'#f5f7fa','color':'#3F536E'}" style="width: 100%">
      <el-table-column prop="id" label="序号">
      </el-table-column>
      <el-table-column prop="customer" label="客户">
      </el-table-column>
      <el-table-column prop="item" label="商品">
      </el-table-column>
      <el-table-column prop="price" label="价格(元)">
      </el-table-column>
      <el-table-column prop="quantity" label="数量(件)">
      </el-table-column>
      <el-table-column prop="total" label="总价(元)">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: "Summary",
     data() {
        return {
            tableData5: [
                {
                    id: "12987122",
                    customer: "周嘉琪",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
                {
                    id: "12987122",
                    customer: "周嘉琪",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
                {
                    id: "12987123",
                    customer: "菜鸟驿站",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
                {
                    id: "12987123",
                    customer: "菜鸟驿站",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
                {
                    id: "12987123",
                    customer: "菜鸟驿站",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
                {
                    id: "12987124",
                    customer: "虹口龙之梦",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
                {
                    id: "12987124",
                    customer: "虹口龙之梦",
                    item: "Gucci水桶包",
                    price: "234",
                    quantity: "2",
                    total: "468"
                },
            ],
            spanArr: [],
            pos: 0
        };
    },
    created() {
        this.getSpanArr(this.tableData5);
    },
    methods: {
        getSpanArr(data) {
            for (var i = 0; i < data.length; i++) {
                if (i === 0) {
                    this.spanArr.push(1);
                    this.pos = 0;
                } else {
                    // 判断当前元素与上一个元素是否相同
                    if (data[i].id === data[i - 1].id) {
                        this.spanArr[this.pos] += 1;
                        this.spanArr.push(0);
                    } else {
                        this.spanArr.push(1);
                        this.pos = i;
                    }
                }
            }
        },
        cellMerge({ row, column, rowIndex, columnIndex }) {
            // 0 == id, 1 == 客户
            if (columnIndex === 0 || columnIndex === 1) {
                const _row = this.spanArr[rowIndex];
                const _col = _row > 0 ? 1 : 0;
                return {
                    rowspan: _row,
                    colspan: _col
                };
            }
        },
        getAttentions() {
            // attentions().then(res => {
            //     this.getSpanArr(res.data.dataList);
            //     this.tableData = res.data.dataList;
            // });
        },
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = "总价";
                    return;
                }
                if (index === 3) {
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
                    if (index === 4) {
                        sums[index] += " 件";
                    }
                    if (index === 5) {
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
.has-gutter {
    color: #3f536e;
    font-weight: bold;
    font-size: 14px;
}
</style>
