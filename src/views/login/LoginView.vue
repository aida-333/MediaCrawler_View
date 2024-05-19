<template>
  <div class="login_page">
    <div class="login_box">
      <el-form
        ref="logintypeform"
        :model="loginTypeForm"
        label-width="80px"
        size="mini"
        aria-required="true"
        :boder="true"
        :rules="rules"
      >
        <el-form-item class="login_type" rules.platform>
          <h2>登录平台</h2>
          <el-radio-group
            class="radio_group"
            v-model="loginTypeForm.platform"
            size="medium"
            required
          >
            <el-radio border label="小红书"></el-radio>
            <el-radio border label="微博"></el-radio>
            <el-radio border label="抖音"></el-radio>
            <el-radio border label="快手"></el-radio>
            <el-radio border label="B站"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-divider class="divider"></el-divider>
        <el-form-item class="login_type">
          <h2>登录方式</h2>
          <el-radio-group
            class="radio_group"
            v-model="loginTypeForm.logintype"
            size="medium"
            required
          >
            <el-radio border label="cookie登录"></el-radio>
            <el-radio border label="二维码登录"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm('logintypeform')"
            >确认</el-button
          >
          <el-button @click="resetForm('logintypeform')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 弹出的对话框 -->
    <el-dialog
      title="登录方式"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
    >
      <div v-if="loginTypeForm.logintype === 'cookie登录'">
        <el-input v-model="cookieValue" placeholder="请输入cookie值"></el-input>
      </div>
      <div v-else-if="loginTypeForm.logintype === '二维码登录'">
        <img :src="qrCodeUrl" alt="二维码" />
        <p>请扫描二维码登录</p>
      </div>
      <div>
        <br>
        <br>
        <p align="center">保存此次登录信息: 
        <el-radio-group v-model="saveLoginInfo">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmLogin">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginTypeForm: {
        platform: [],
        logintype: "",
      
      },
      rules: {
          platform: [
            { required: true, message: "请选择登录平台", trigger: "change" },
          ],
          logintype: [
            { required: true, message: "请选择登录方式", trigger: "change" },
          ],
        },
      dialogVisible: false, // 控制对话框显示隐藏
      cookieValue: "", // 存储cookie值
      qrCodeUrl: "", // 存储二维码图片地址
      saveLoginInfo: '否'  // 默认不保存登录信息
    };
  },
  methods: {
    submitForm(logintypeform) {
      this.$refs[logintypeform].validate((valid) => {
        // 校验方法还未定义
        // 这里可以调用后端接口进行登录验证
        if (valid) {
          this.showLoginDialog();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(logintypeform) {
      this.$refs[logintypeform].resetFields();
      this.loginTypeForm.platform = "";
      this.loginTypeForm.logintype = "";
    },
    showLoginDialog() {
      // 显示登录方式的对话框
      this.dialogVisible = true;
    },
    confirmLogin() {
      // 确定按钮点击事件，根据不同的登录方式进行相应的处理
      if (this.loginTypeForm.logintype === "cookie登录") {
        // 处理cookie登录方式
        alert("使用Cookie登录，Cookie值为：" + this.cookieValue);
      } else if (this.loginTypeForm.logintype === "二维码登录") {
        // 处理二维码登录方式，向后端请求二维码图片数据
        // 假设请求成功后，将二维码图片地址赋值给qrCodeUrl
        this.qrCodeUrl = "https://example.com/qrcode.jpg"; // 替换为真实的二维码图片地址
      }

      console.log("保存登录信息：" + this.saveLoginInfo);  // 处理保存登录信息的逻辑(待实现)
      // 关闭对话框
      this.dialogVisible = false;
    },
  },
};
</script>
<style scoped>
.login_page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  /* position: relative; */
}

.login_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%; /* 使用百分比来代替固定的像素值 */
  max-width: 700px; /* 设置最大宽度以避免在大屏幕上过度拉伸 */
  background-color: blanchedalmond;
  /* left: 50%;
  top: 50%; */
  /* transform: translate(-50%, -50%);  这种写法的好处是在宽高都不知道的时候也可以居中 */
  border-radius: 3px;
  padding-top: 30px;
  padding-bottom: 30px;
  /* padding-left: 80px; */
  padding-right: 80px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* position: relative; */
  /* padding-right: 80px; */
}

/* align-items: center; 水平居中 */
/* background-color: blanchedalmond;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  padding: 30px 80px; 同时设置上下左右的 padding */

.login_box h2 {
  /* text-align: center; */
  margin: 0 auto; /* 水平居中 */
  margin-bottom: 20px;
  font-size: 15px;
}
.divider {
  width: 100%;
  position: relative;
  padding-right: 80px;
  background-color: #c0c6d4;
}
.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 600px;
  height: 1px;
  background-color: #c0c6d4; /* 使用分割线的颜色 */
}
</style>