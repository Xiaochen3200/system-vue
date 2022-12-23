<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-16 15:34:58
 * @LastEditors: Andy
 * @LastEditTime: 2022-09-03 10:22:31
-->
<!--
组件功能：左侧导航菜单
组件开发人 ： chl
!-->
<template>
    <div class='navMenu'>
        <el-menu class="elMenu" :default-active="activePath" :unique-opened="true" :collapse="isCollapse" :collapse-transition="true" :router="true" background-color="#99ccff" text-color="#ffffff" active-text-color="#0066ff" :width="isCollapse ? '64' : '218'">
            <div class="logo">
                <span class="logoIcon"><img src="../assets/img/WechatIMG96.png" alt="" style=" width: 60px;
                height: 60px;"></span>
                <span class="logoName">VUE System</span>
            </div>
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
                <template slot="title">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="iconObj[item.id]"></use>
                    </svg>
                    <span>{{ item.authName }}</span>
                </template>
                <template v-for="subItem in item.children">
                    <!-- 二级菜单 -->
                    <el-menu-item v-if="item.chilfren == null" :key="subItem.id" :index="'/' + subItem.path" @click="saveMenuStatus('/' + subItem.path)">
                        <template slot="title">
                            <!-- <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yingyongliebiao"></use>
                            </svg> -->
                            <!-- <span>{{ subItem.authName }}</span> -->
                            <span>{{ $t(`menus.${subItem.path}`) }}</span>
                        </template>
                    </el-menu-item>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>

export default {
    name: 'navMenu',
    data() {
        return {
            menuList: [],
            iconObj: {
                125: "#icon-user",
                103: "#icon-quanxianguanli",
                101: "#icon-shangpinguanli",
                102: "#icon-dingdan",
                145: "#icon-shuju",
            },
        }
    },
    // 父辈向子辈传参
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    // 组件的引用
    components: {},
    // 计算属性
    computed: {
        activePath() {
            return sessionStorage.getItem("activePath");
        },
    },
    // 监测变化
    watch: {},
    // 实例被创建之后执行代码
    created() {
        this.getNavMenu()
    },
    // 方法
    methods: {
        async getNavMenu() {
            const res = await this.$axios.getMenu();
            if (res.data.meta.status === 200) {
                this.menuList = res.data.data;
                console.log(this.menuList);
                this.$store.commit("user/setCollapse", this.isCollapse);
            } else {
                return this.$message.error("菜单列表获取失败！");
            }
        },
        saveMenuStatus(activePath) {
            sessionStorage.setItem("activePath", activePath);
        },
    },
    // 页面进入时加载内容
    mounted() { },
}
</script>
<style scoped lang='scss'>
.navMenu {
    // height: calc(100vh - 60px);
    height: calc(100vh - 0px);
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    user-select: none;
    .logo {
        padding-left: 2px;
        display: flex;
        align-items: center;
        flex-direction: row;
        background: $blue;
        .logo {
            display: flex;
            align-items: center;
            margin-right: 18px;
            height: 60px;
            width: 60px;
            .logoIcon {
                width: 60px;
                height: 60px;
            }
        }
        .logoName {
            width: 90px;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            color: #ffffff;
            padding-left: 12px;
        }
    }
    .icon {
        font-size: 20px;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    ::v-deep .el-menu {
        border-right: 0px;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
        background: #99ccff;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        .el-submenu {
            .el-submenu__title {
                width: 218px;
                height: 48px;
                line-height: 48px;
                font-size: 16px;
                // padding: 0 160px;
                list-style: none;
                cursor: pointer;
                position: relative;
                transition: border-color 0.3s, background-color 0.3s, color 0.3s;
                box-sizing: border-box;
                white-space: nowrap;
                span {
                    padding-left: 10px;
                }
                i {
                    color: #ffffff;
                    font-size: 16px;
                }
            }
        }
        .el-submenu .el-menu-item {
            height: 50px;
            line-height: 50px;
            padding: 0 50px;
            min-width: 200px;
            span {
                font-size: 16px;
                // padding-left: 25px;
            }
        }
    }
    .elMenu:not(.el-menu--collapse) {
        width: 218px;
    }
    ::v-deep .el-menu--collapse {
        width: 64px;
        .el-submenu__icon-arrow {
            display: none;
        }
        .el-submenu__title {
            display: block;
        }
    }
}
</style>