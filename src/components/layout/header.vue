<template>
<div>
<Header>
                <Menu
                mode="horizontal"
                theme="dark"
                active-name="1"
                @on-select="test"
                >
                    <div class="layout-logo">
                        <i class="iconfont icon-zhinengludeng"></i>
                    视频监控平台</div>
                    <div class="layout-nav">
                        <div class="header-middle-con">
                            <MenuItem name="1">
                            <i class="iconfont icon-guzhangguanli"></i>
                            图像信息库
                        </MenuItem>
                        <MenuItem name="2">
                            <i class="iconfont icon-rizhi"></i>
                            任务管理
                        </MenuItem>
                        <MenuItem name="3">
                            <i class="iconfont icon-chakan"></i>
                            视频应用
                        </MenuItem>
                        <MenuItem name="4">
                            <i class="iconfont icon-jinggao"></i>
                            告警信息
                        </MenuItem>
                        <MenuItem name="5">
                            <i class="iconfont icon-xitongshezhi"></i>
                            系统设置
                        </MenuItem>
                            <!-- <div class="user-dropdown-menu-con"> -->
                        <!-- <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon"> -->
                            <!-- <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                <a href="javascript:void(0)">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar> -->
                        <!-- </Row> -->
                    <!-- </div> -->
                        </div>
                    </div>
                </Menu>
            </Header>
            <Header style="border-top:1px solid white">
                <Row>
                    <Col span="18">
                        <videoApplication v-show="videoShow"></videoApplication>
                        <imgInfo v-show="imgInfo"></imgInfo>
                    </Col>
                    <Col span="6">
                        <Breadcrumb>
                            <BreadcrumbItem class='BreadItem'>图像信息库</BreadcrumbItem>
                            <BreadcrumbItem class='BreadItem'>图像信息库</BreadcrumbItem>
                            <BreadcrumbItem class='BreadItem'>图像信息库</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Header>
</div>
</template>
<script>
import videoApplication from '../headerMenu/videApplication';
import imgInfo from '../headerMenu/imgInfo';
require('../../../static/img/icon/iconfont.css');
require('../../../static/img/icon/geo/iconfont.css');
export default {
  data () {
    return {
      videoShow: false,
      imgInfo: false
    };
  },
  components: {
    videoApplication: videoApplication,
    imgInfo: imgInfo
  },
  methods: {
    test (val) {
      debugger;
      var value = parseInt(val);
      if (value === 1) {
        this.videoShow = true;
        this.imgInfo = false;
        this.$router.push('main');
      } else if (value === 2) {
        this.videoShow = false;
        this.imgInfo = true;
        this.$router.push('main1');
      }
    }
  }
};
</script>
<style scoped>
.layout-logo {
  /* width: 100px; */
  /* height: 30px; */
  /* background: #5b6270; */
  color: white;
  border-radius: 3px;
  float: left;
  position: relative;
  /* top: 15px; */
  /* left: 20px; */
}
.layout-nav {
    float: left;
    position: relative;
    left: 100px;
    width: 700px;
    margin: 0 auto;
    margin-right: 20px;
}
.sub-menu-item{
    font-size: 12px;
    font-weight: bold
}
.BreadItem{
    color: white
}
.user-dropdown-menu-con{
        position: absolute;
        right: 0;
        top: 0;
        width: 150px;
        height: 100%;
}
</style>
