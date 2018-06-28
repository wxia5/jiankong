<template>
<div>
    <div>
    <Dropdown placement="top">
    <Button type="primary">
            选择区域
            <Icon type="arrow-up-b"></Icon>
        </Button>
    <DropdownMenu slot="list">
        <DropdownItem>区域1</DropdownItem>
        <DropdownItem>区域2</DropdownItem>
        <DropdownItem>区域3</DropdownItem>
        <DropdownItem>区域4</DropdownItem>
        <DropdownItem>区域5</DropdownItem>
        <DropdownItem>区域6</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    <Tag checkable color="blue">摄像头1</Tag>
    <Tag checkable color="green">摄像头2</Tag>
    <Tag checkable color="red">摄像头3</Tag>
    <Tag checkable color="yellow">摄像头4</Tag>
    </div>
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
<img src="../../../static/img/people/people1.jpg" alt="">
    <img src="../../../static/img/people/people1.jpg" alt="">
    <Page :total="100"></Page>
</div>
</template>
<script>
export default {
};
</script>
