<!--
    组件功能：组件功能
    开发人： 陈红亮（chenhongliang）
-->
<template>
  <div class="commonTableCopy">
    <el-form :model="tableForm" ref="rulesRef">
      <el-table
        v-bind="$attrs"
        v-on="$listeners"
        :data="tableForm.tableData"
        :header-cell-style="{
          background: 'rgb(238, 241, 246)',
          color: 'rgb(96, 98, 102)',
        }"
        highlight-current-row
        :cell-style="{ 'text-align': '' }"
        style="width: 100%"
        ref="tb"
        :row-class-name="rowClassName"
      >
        <el-table-column
          v-for="(item, index) in tableForm.tableHeader"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          :min-width="item.width ? item.width : 125"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.isSet">
              <el-form-item
                :prop="'tableData.' + scope.$index + '.' + item.prop"
                :rules="item.rules"
              >
                <el-input
                  v-if="item.type === 'input'"
                  class="iteminput"
                  placeholder="请输入"
                  v-model="scope.row[item.prop]"
                ></el-input>
                <el-select
                  v-if="item.type === 'select'"
                  v-model="scope.row[item.prop]"
                  placeholder="请选择"
                  :popper-append-to-body="true"
                  popper-class="abc"
                >
                  <el-option
                    v-for="el in item.options"
                    :key="el.value"
                    :label="el.label"
                    :value="el.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </span>
            <span v-else>
              <span v-if="item.type === 'input'">{{
                scope.row[item.prop]
              }}</span>
              <span v-else-if="item.type === 'select'">{{
                scope.row[item.prop]
              }}</span>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              v-if="scope.row.isSet"
              @click.stop="saveRow(scope.row, scope.$index)"
              >保存</el-button
            >
            <el-button
              size="mini"
              type="text"
              v-if="!scope.row.isSet"
              @click.stop="editRow(scope.row, scope.$index)"
              :disabled="btnDisabled"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="text"
              v-if="scope.row.isSet"
              @click="handleCancel(scope.row, scope.$index)"
              :disabled="btnDisabled"
              >取消</el-button
            >
            <el-button
              size="mini"
              type="text"
              :style="btnDisabled === false ? { color: 'red' } : {}"
              @click.stop="deleteRow(scope.row, scope.$index, tableData)"
              :disabled="btnDisabled"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-form>

    <el-col :span="24">
      <div>
        <el-button
          class="addBtn"
          type="text"
          icon="el-icon-plus"
          size="mini"
          @click="handleAddBtn()"
          :disabled="btnDisabled"
          c
          >添加集装箱</el-button
        >
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "commonTableCopy",
  props: {
    tableForm: {
      type: Object,
    },
    btnDisabled: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      // tableData: [],
      // tableTitle: [],
      // sel: {}, //选中行
    };
  },
  computed: {},
  watch: {
    tableData(newName, oldName) {
      this.tableData = newName;
    },
    btnDisabled(newFlag, oldFlag) {
      this.btnDisabled = newFlag;
    },
  },
  created() {},
  mounted() {
    if (this.tableForm != null) {
      this.tableData = this.tableForm.tableData;
      this.tableTitle = this.tableForm.tableTitle;
      if (!this.tableData) {
        this.tableData = [];
      }
    }
  },
  methods: {
    // 隔行变色
    rowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else {
        return "normal-row";
      }
    },
    // 添加集装箱
    handleAddBtn() {
      for (const i of this.tableForm.tableData) {
        if (i.isSet) {
          return;
        }
      }
      let data = {
        key: { isSet: true },
      };
      this.tableForm.tableHeader.forEach((item) => {
        data.key[item.prop] = "";
      });
      this.tableForm.tableData.push(JSON.parse(JSON.stringify(data.key)));
      // this.sel = JSON.parse(JSON.stringify(data.key));
    },
    //保存
    saveRow(row, index) {
      this.$refs["rulesRef"].validate((valid) => {
        if (valid) {
          this.tableForm.tableData.forEach((item, index) => {});
          row.isSet = false;
          this.$emit("submit", row, index);
          this.$set(this.tableForm.tableData);
        } else {
          return false;
        }
      });
    },
    //编辑
    editRow(row) {
      for (const j of this.tableData) {
        if (j.isSet) {
          this.$message({
            type: "warning",
            message: "请保存当前编辑项",
          });
          return;
        }
      }
      this.sel = row;
      row.isSet = true;
    },
    // 取消
    handleCancel(row, index) {
      this.tableData[index].isSet = !row.isSet;
    },
    //删除
    deleteRow(index, row, rows) {
      this.$emit("deleteRow", row, index, rows);
      rows.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.commonTableCopy {
  .el-table-add-row {
    margin-top: 10px;
    width: 100%;
    height: 34px;
    border: 1px dashed #c1c1cd;
    border-radius: 3px;
    cursor: pointer;
    justify-content: center;
    display: flex;
    line-height: 34px;
  }
}
</style>
<style></style>
