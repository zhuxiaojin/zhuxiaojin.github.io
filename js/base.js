/**
 * Created by storm on 2017-6-22.
 * 朱晓进个人网站基本样式表
 * by phpstorm
 */
$(function () {
    // 初始化基本特效
    $('header span').click(function () {
        $('header span').removeClass('active');
        $(this).addClass('active');
    });
    $("#header").stick_in_parent();
    $('.banner').unslider({
        animation: 'vertical',
        delay: 3000,
        autoplay: true,
        infinite: true,
        arrows: false,
        fluid: true,
        nav: false
    });
});
function show(id) {
    layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        shade: false,
        title: false, //不显示标题
        area: ['420px', '140px'], //宽高
        shadeClose: true, //开启遮罩关闭
        content: $('#'+id), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        cancel: function(){
           // layer.msg('', {time: 5000, icon:6});
        }
    });
}