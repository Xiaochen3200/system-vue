<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-13 21:02:13
 * @LastEditors: Andy
 * @LastEditTime: 2022-10-23 22:00:46
-->
<template>
  <div class="">
    <common-table
      :tableForm="tableForm"
      @submit="submit"
      :header-cell-class-name="must"
    ></common-table>
    <el-button @click="handleNext">NEXT</el-button>
  </div>
</template>

<script>
import CommonTable from "../components/common-table-copy.vue";
export default {
  name: "",
  data() {
    return {
      tableForm: {
        tableHeader: [
          {
            prop: "valueType",
            label: "类型",
            type: "select",
            options: [
              { value: "0", label: "温度" },
              { value: "1", label: "湿度" },
              { value: "2", label: "氨气浓度" },
              { value: "3", label: "料塔预料" },
            ],
          },
          {
            prop: "minvalue",
            label: "最小值",
            type: "input",
            rules: [
              { required: true, message: "请输入最小值", trigger: "blur" },
            ],
          },
          {
            prop: "maxvalue2",
            label: "最大值",
            type: "input",
            rules: [
              { required: true, message: "请输入最大值", trigger: "blur" },
            ],
          },
        ],
        tableData: [],
      },
      bolForm: {
        bol: "",
        contrList: [],
      },
    };
  },
  // 父辈向子辈传参
  props: {},
  // 组件的引用
  components: {
    CommonTable,
  },
  // 计算属性
  computed: {},
  // 监测变化
  watch: {},
  // 实例被创建之后执行代码
  created() {
    let objData = JSON.parse(sessionStorage.getItem("bol"));
    if (objData && objData.length > 0) {
      this.tableForm.tableData = objData;
    }
  },
  // 方法
  methods: {
    submit(row, index) {
        console.log(this.tableForm.tableData);
      console.log("父组件接收的当前值--", row);
      this.bolForm.contrList.push(row);
    },
    handleNext() {
      this.$router.push("/users");
      sessionStorage.setItem("bol", JSON.stringify(this.tableForm.tableData));
    },
    must(obj) {
      if (obj.columnIndex == 0) {
        return "must";
      }
    },
  },
  // 页面进入时加载内容
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
<style>
.el-table th.must > .cell:before {
  content: "*";
  color: #ff1818;
}
</style>
