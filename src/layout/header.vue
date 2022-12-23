<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-16 14:36:57
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-23 10:50:00
-->
<!--
组件功能：header部分
组件开发人 ： chl
!-->
<template>
    <div class="headerContainer">
        <div class="left">
            <i v-if="isCollapse" class="el-icon-s-unfold" style="line-height: 60px; font-size: 26px; color: #ffffff" @click="changeShowNav"></i>
            <i v-else class="el-icon-s-fold" style="line-height: 60px; font-size: 26px; color: #ffffff" @click="changeShowNav"></i>
        </div>
        <div class="right">
            <div class="lang">
                <el-badge is-dot class="item">
                    <span @click="changeIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shouye"></use>
                        </svg>
                    </span>
                </el-badge>
                <el-badge is-dot>
                    <span @click="changeIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bangzhu"></use>
                        </svg>
                    </span>
                </el-badge>
                <span>
                    <el-popover placement="top" width="160" v-model="visible">
                        <el-button slot="reference" class="zBtn"><span>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-zhuti-04"></use>
                                </svg>
                            </span></el-button>
                        <el-color-picker v-model="color1"></el-color-picker>
                    </el-popover>
                </span>
                <span class="flagIcon">
                    <IsFullscreen />
                </span>
            </div>
            <div class="userName">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <span class="userImg">
                            <img src="../assets/img/user.webp" alt="" />
                        </span>
                        <span class="user">{{ userName }}</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="en">English</el-dropdown-item>
                        <el-dropdown-item>
                            <span class="out" @click="goOut">
                                <i class="el-icon-switch-button"></i>
                                {{ $t("user.signOut") }}</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import IsFullscreen from '../components/screenfull.vue'
export default {
    name: "headerContainer",
    data() {
        return {
            defaultLang: "中文",
            color1: '#409EFF',
            visible: false
        };
    },
    // 父辈向子辈传参
    props: {
        isCollapse: {
            type: Boolean,
            default: false,
        },
    },
    // 组件的引用
    components: { IsFullscreen },
    // 计算属性
    computed: {
        userName() {
            let userName = sessionStorage.getItem("username");
            var webName = userName;
            webName = webName.replace(/\"/g, "");
            return webName;
        },
    },
    // 监测变化
    watch: {},
    // 实例被创建之后执行代码
    created() { },
    // 方法
    methods: {
        goOut() {
            this.$store.commit("user/clearToken", "");
            this.$store.commit("user/clearAll");
            this.$router.push("/login");
        },
        changeShowNav() {
            this.$emit("changeShowNav");
        },
        handleCommand(command) {
            if (command === "zh") {
                (this.defaultLang = "中文"), (this.$i18n.locale = "zh");
            } else {
                (this.defaultLang = "English"), (this.$i18n.locale = "en");
            }
            localStorage.setItem("systemLanguage", this.$i18n.locale);
        },
        changeIcon() {
            this.$message.warning('该功能暂未开发！😊')
        }
    },
    // 页面进入时加载内容
    mounted() { },
};
</script>
<style scoped lang="scss">
.headerContainer {
    width: 100%;
    height: 100%;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .left {
        cursor: pointer;
    }
    .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .lang {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 130px;
            font-size: 25px;
            color: #fff;
            padding-right: 15px;
            .icon {
                height: 2.4rem;
            }
            ::v-deep .el-badge {
                .el-badge__content.is-fixed.is-dot {
                    right: 10px;
                    top: 25px;
                }
            }
            span {
                height: 60px;
                cursor: pointer;
               ::v-deep .el-popover{
                    text-align: center;
                }
                .zBtn {
                    border: 0px;
                    background: none;
                    padding: 0px;
                    font-size: 23px;
                    height: 60px;
                    line-height: 60px;
                    color: #ffffff;
                }
                ::v-deep .el-color-picker {
                    height: 60px;
                    line-height: 60px;
                    .el-color-picker__trigger {
                        border: 0px;
                        .el-color-picker__color {
                            border: 0px;
                        }
                        .el-icon-arrow-down:before {
                            content: '';
                        }
                    }
                }
            }
        }
        .userName {
            display: flex;
            align-items: center;
            flex-direction: row;
            cursor: pointer;
            .el-dropdown {
                .el-dropdown-link {
                    display: flex;
                    align-items: center;
                }
            }
            .userImg {
                display: flex;
                align-items: center;
                margin-right: 18px;
                height: 60px;
                width: 60px;
                box-shadow: 0 0 10px #ddd;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .user {
                display: flex;
                align-items: center;
                font-size: 20px;
                color: #ffffff;
            }
        }
    }
}
</style>
