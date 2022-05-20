<template>
  <div class="hello">
    <div>
      <button v-if="!isLogin" @click="login">登录</button>
      <div v-else>
        <nav>
          <div
            v-for="({ name, meta: { title } }, index) in $router.getRoutes()"
            :key="index"
          >
            <router-link :to="name">{{ title }}</router-link>
          </div>
        </nav>
        <div class="showBox">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAnotherRoutes } from "../api/index";
import { addRoutes } from "../utils/index";
import baseRoutes from "../router/routes";
export default {
  name: "OrdinaryUser",
  data() {
    return {
      isLogin: false,
      route: baseRoutes,
    };
  },
  methods: {
    login: function () {
      const loginStatus = prompt(
        "请选择登录类型! 输入 员工 即普通用户, 输入 老板 即高权限用户"
      );
      // 识别登录身份，如果是老板就调用 getAnotherRoutes 接口 获取老板特有的路由
      const getLogin = (loginUser) => {
        const map = {
          老板: () => {
            getAnotherRoutes().then((res) => {
              addRoutes(res?.data, this.$router, "addRoute");
              this.isLogin = true;
              this.$forceUpdate();
            });
          },
          员工: () => {
            this.isLogin = true;
          },
        };
        map[loginUser] ? map[loginUser]() : alert("请输入 老板 或者 员工");
      };

      getLogin(loginStatus);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showBox {
  width: 50vh;
  height: 50vh;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>
