<template>
  <div id="magicalDragScene" class="mc-root">
    <el-page-header @back="goBack" content="参数调配系统"></el-page-header>
    <el-container class="container">
      <!-- 页头 -->
      <el-header class="header">
        <div class="header-controls">
          <el-button type="primary" @click="fetchData">获取数据</el-button>
          <el-checkbox v-model="paramA">参数A</el-checkbox>
          <el-checkbox v-model="paramB">参数B</el-checkbox>
          <el-input
            v-model="inputParam"
            placeholder="输入参数"
            class="input-param"
          ></el-input>
        </div>
      </el-header>
      <!-- 主内容 -->
      <el-main class="main">
        <el-table :data="paginatedData" border class="data-table" stripe>
          <el-table-column prop="id" label="ID" width="50"></el-table-column>
          <!-- <el-table-column
            prop="name"
            label="名称"
            width="180"
          ></el-table-column> -->
          <!-- <el-table-column prop="description" label="描述" width="220"> -->
            <!-- 当鼠标悬停在元素上时，会显示一个提示框，显示description属性的内容。如果description属性的长度大于20，那么只会显示前20个字符，后面用省略号（...）代替。 -->
            <!-- <template v-slot="scope">
              <el-tooltip
                class="item"
                effect="dark"
                :content="scope.row.description"
                placement="top"
              >
                <span>{{
                  scope.row.description.length > 20
                    ? scope.row.description.substr(0, 20) + "..."
                    : scope.row.description
                }}</span>
              </el-tooltip>
            </template>
          </el-table-column> -->
          <el-table-column
            prop="param1"
            label="note_id"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param2"
            label="type"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param3"
            label="title"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param4"
            label="desc"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param5"
            label="video_url"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param6"
            label="time"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param7"
            label="last_update_time"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param8"
            label="user_id"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param9"
            label="nickname"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param10"
            label="avatar"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param11"
            label="liked_count"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param12"
            label="collected_count"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param13"
            label="comment_count"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param14"
            label="share_count"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param15"
            label="ip_location"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param16"
            label="image_list"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param17"
            label="tag_list"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param18"
            label="last_modify_ts"
            width=auto
          ></el-table-column>
          <el-table-column
            prop="param19"
            label="note_url"
            width=auto
          ></el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total"

        >
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
  
  <script>
export default {
  name: "ParameterAllocationSystem",
  data() {
    return {
      paramA: false,
      paramB: false,
      inputParam: "",
      tableData: [],
      currentPage: 1,
      pageSize: 10,  /* 每页显示的数据量 */
      total: 0,
    };
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.tableData.slice(start, end);
    },
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.push("/login");
    },
    fetchData() {
      this.tableData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        // name: `名称${index + 1}`,
        // description: `这是描述信息${
        //   index + 1
        // }，可能会很长很长很长很长很长很长很长很长很长很长`,
        param1: `参数${index + 1}-1`,
        param2: `参数${index + 1}-2`,
        param3: `参数${index + 1}-3`,
        param4: `参数${index + 1}-4`,
        param5: `参数${index + 1}-5`,
        param6: `参数${index + 1}-6`,
        param7: `参数${index + 1}-7`,
        param8: `参数${index + 1}-8`,
        param9: `参数${index + 1}-9`,
        param10: `参数${index + 1}-10`,
        param11: `参数${index + 1}-11`,
        param12: `参数${index + 1}-12`,
        param13: `参数${index + 1}-13`,
        param14: `参数${index + 1}-14`,
        param15: `参数${index + 1}-15`,
        param16: `参数${index + 1}-16`,
        param17: `参数${index + 1}-17`,
        param18: `参数${index + 1}-18`,
        param19: `参数${index + 1}-19`,
      }));
      this.total = this.tableData.length;
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
  
  <style scoped>
element.style {
    position: static;
    display: none;
    width: 100%;
    height: 100%;
    visibility: visible;
    bottom: auto;
    left: auto;
    right: auto;
    top: auto;
    margin: 0px;
    padding: 0px;
    z-index: 0;
    background: none;
    border: none;
    opacity: 1;
    overflow: visible;
    text-align: left;
    clip: rect(0px, 0px, 0px, 0px);
    outline: none;
    border: none;
    padding: 0px;
    margin: 0px;
}

.mc-root {
  background-color: #f5f5f5;
  padding: 20px;
}

.container {
  left: 10%;
  top: 10%;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 60px;
}
/* 设置表头高度 */
.el-table__header {
    height: 50px; /* 你想要的表头高度 */
}
/* 设置表头中元素的居中展示 */
.el-table__header th {
    text-align: center; /* 水平居中 */
    vertical-align: middle; /* 垂直居中 */
}
.header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-param {
  width: 150px;
}

.main {
  overflow-x: 100%;
}

.data-table {
  width: 100%;
  min-width: 1200px;
  /* height: 60px; */
}


.el-container.is-vertical {
    flex-direction: column;
    align-items: flex-start;
}
.el-table__header-wrapper {
    overflow: hidden;
    height: 30px;
}
#magicalDragScene{
    background-color:white ;
}
</style>