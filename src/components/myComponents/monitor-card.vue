<template>
<div>
        <div class='monitor-con' @click='click'>
            <img class='monitor-pic' :src='imgURL' alt='' :style='{height:imgHeight,width:imgWidth}'>
            <Row class='margin-top-8'>
                <Col span='8'><p class='notwrap'>文件名:</p></Col>
                <Col span='16' class='padding-left-8'>{{fileName}}</Col>
            </Row>
            <Row class='margin-top-8'>
                <Col span='8'><p class='notwrap'>时间:</p></Col>
                <Col span='16' class='padding-left-8'>{{time}}</Col>
            </Row>
            <Row class='margin-top-8'>
                <Col span='8'><p class='notwrap'>相似度:</p></Col>
                <Col span='16' class='padding-left-8'>{{similarity}}</Col>
            </Row>
        </div>
        <Modal
        v-model='modal1'
        title='详细信息'
        width=1000
        :styles="{top:'20px'}"
        @on-ok='ok'
        @on-cancel='cancel'>
         <Card>
        <Row :gutter=22>
            <Col span='12'>
                <div style='text-align:center;height:200px'>
                    <img :src='imgURL' alt='' style='height:100%;width:100%'>
                </div>
            </Col>
            <Col span='12'>
                <div style='text-align:center;height:200px'>
                    <img :src='imgURL' alt='' style='height:100%;width:100%'>
                </div>
            </Col>
        </Row>
        <Row :gutter='20'>
            <Col span='6' class="col-con">
                <div>
                    <Form :model='formItem' :label-width='80'>
                    <FormItem label='车牌类型'>
                        <Select v-model='formItem.select'>
                            <Option value='beijing'>New York</Option>
                            <Option value='shanghai'>London</Option>
                            <Option value='shenzhen'>Sydney</Option>
                        </Select>
                    </FormItem>
                    <FormItem label='车牌号码'>
                        <Select v-model='formItem.select'>
                            <Option value='beijing'>New York</Option>
                            <Option value='shanghai'>London</Option>
                            <Option value='shenzhen'>Sydney</Option>
                        </Select>
                    </FormItem>
                    </Form>
                </div>
            </Col>
            <Col span='6'  class="col-con">
              <Table border :columns="columns1" :data="data1" :show-header=false></Table>
            </Col>
            <Col span='12'  class="col-con">
              <Table border :columns="columns2" :data="data2" :show-header=false></Table>
            </Col>
        </Row>
            </Card>

    </Modal>
</div>
</template>
<script>
export default {
  data () {
    return {
      modal1: false,
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      },
      columns1: [
        {
          title: 'col1',
          key: 'col1'
        },
        {
          title: 'col2',
          key: 'col2'
        }
      ],
      data1: [
        {
          col1: '车辆品牌：',
          col2: '福克斯'
        },
        {
          col1: '车辆类型：',
          col2: '小型轿车'
        },
        {
          col1: '车主姓名：',
          col2: '刘云生'
        },
        {
          col1: '手机号码：',
          col2: 14652378524
        },
        {
          col1: '年检时间：',
          col2: 2017
        },
        {
          col1: '详细地址',
          col2: '河南省南阳市'
        }
      ],
      columns2: [
        {
          title: 'col1',
          key: 'col1'
        },
        {
          title: 'col2',
          key: 'col2'
        },
        {
          title: 'col3',
          key: 'col3'
        },
        {
          title: 'col4',
          key: 'col4'
        }
      ],
      data2: [
        {
          col1: '车辆品牌：',
          col2: '福克斯',
          col3: '福克斯',
          col4: '福克斯'
        },
        {
          col1: '车辆品牌：',
          col2: '福克斯',
          col3: '福克斯',
          col4: '福克斯'
        },
        {
          col1: '车辆品牌：',
          col2: '福克斯',
          col3: '福克斯',
          col4: '福克斯'
        },
        {
          col1: '车辆品牌：',
          col2: '福克斯',
          col3: '福克斯',
          col4: '福克斯'
        }
      ]
    };
  },
  props: {
    fileName: String,
    title: String,
    similarity: String,
    time: String,
    imgURL: String,
    imgHeight: {
      type: String,
      default: '130px'
    },
    imgWidth: {
      type: String,
      default: '130px'
    }
  },
  methods: {
    click () {
      this.modal1 = true;
    },
    ok () {
      this.$Message.info('点击确认');
      this.$router.push('main1');
    },
    cancel () {
      this.$Message.warning('点击取消');
    }
  }
};
</script>

<style lang='less' scoped>
.monitor-con {
  height: 100%;
  width: 80%;
  cursor: pointer;
  .monitor-pic {
    height: 100%;
    width: 100%;
  }
}
.margin-top-8 {
  font-size: 5px;
}
.col-con{
    padding-top: 20px
}
</style>
