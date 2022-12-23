<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-13 21:02:02
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-23 14:53:11
-->

<template>
    <div class="System-login">
        <div class="log-top">
            <!-- <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{defaultLang}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zh">中文</el-dropdown-item>
                    <el-dropdown-item command="en">English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
        </div>
        <div class="login">
            <div class="login-title">{{$t('user.title')}}</div>
            <el-form class="login_form" ref="loginRef" :model="formData" :rules="loginRules">
                <el-form-item :label="$t('user.name')" prop="username">
                    <el-input type="text" v-model="formData.username" :placeholder="$t('user.username')"></el-input>
                </el-form-item>
                <el-form-item :label="$t('user.password')" prop="password">
                    <el-input type="password" v-model="formData.password" show-password :placeholder="$t('user.userPassword')"></el-input>
                </el-form-item>
                <el-form-item align="center">
                    <el-button class="login_button" @click="login">
                        <span class="login_text">{{$t('user.login')}}</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
    name: "login",
    data() {
        return {
            defaultLang: '中文',
            formData: {
                username: "",
                password: ""
            },
            loginRules: {
                username: [{ required: false, message: this.$t('user.username'), trigger: "blur" },],
                password: [{ required: true, message: this.$t('user.userPassword'), trigger: "blur" },],
            }
        };
    },
    // 父辈向子辈传参
    props: {},
    // 组件的引用
    components: {},
    // 计算属性
    computed: {},
    // 监测变化
    watch: {},
    // 实例被创建之后执行代码
    created() { },
    // 方法
    methods: {
        // handleCommand(command) {
        //     if (command === 'zh') {
        //         this.defaultLang = '中文',
        //             this.$i18n.locale = 'zh'
        //     } else {
        //         this.defaultLang = 'English',
        //             this.$i18n.locale = 'en'
        //     }
        //     localStorage.setItem('systemLanguage', this.$i18n.locale)
        // },
        login() {
            this.$refs['loginRef'].validate((valid) => {
                if (valid) {
                    let params = { ...this.formData };
                    this.$axios.login(params).then(res => {
                        if (res.data.meta.status === 200) {
                            this.$message.success(res.data.meta.msg);
                            sessionStorage.setItem('username', JSON.stringify(res.data.data.username))
                            this.$store.commit('user/setToken', res.data.data.token);
                            this.$goPage('/', true)
                        } else {
                            this.$message.error(res.data.meta.msg)
                        }
                    }
                    ).catch(err => {
                        console.log('err--', err);
                    })
                } else {
                    this.$message.error("请输入用户名和密码！");
                }
            })


        }
    },
    // 页面进入时加载内容
    mounted() { },
};
</script>
<style scoped lang='scss'>
.System-login {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/img/logUrl.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .log-top {
        position: absolute;
        top: 60px;
        right: 30px;
    }
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 380px;
        border-radius: 4px;
        background: $white;
        margin-right: 172px;
        box-shadow: 0px 6px 8px rgba(218, 221, 246, 0.25);
        .login-title {
            font-size: 20px;
            color: $white;
            font-weight: 500;
            font-family: pingFang SC;
            color: $theme-color;
            padding-top: 30px;
            line-height: 56px;
        }
        ::v-deep .login_form {
            padding: 16px 0 60px 0;
            .el-form-item {
                margin-bottom: 22px;
                width: 360px;
                height: 40px;
                .el-form-item__label {
                    width: 65px;
                    font-size: 16px;
                    color: $theme-color;
                    line-height: 40px;
                    padding: 0;
                    &::before {
                        content: '';
                    }
                }
                .el-form-item__content {
                    line-height: 40px;
                    .el-form-item__error {
                        left: 75px;
                    }
                    .el-input {
                        box-sizing: border-box;
                        width: 280px;
                        height: 40px;
                        margin-left: 10px;
                        border-radius: 5px;
                        border: 1px solid $theme-color;
                        .el-input-group__prepend {
                            background: transparent;
                            border: unset;
                            border: 0;
                        }
                        .el-input__inner {
                            color: #606266;
                            background: transparent;
                            font-size: 16px;
                            line-height: 40px;
                            height: 40px;
                            border: unset;
                            border: 0;
                        }
                        & ::placeholder {
                            color: #909399;
                        }
                    }
                }
            }
            .login_button {
                width: 280px;
                height: 40px;
                background: #5c71e6;
                border-radius: 2px;
                border: unset;
                border: 0;
                margin-left: 70px;
                .login_text {
                    font-size: 16px;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>