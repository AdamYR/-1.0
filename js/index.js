$(function () {
  var swiper = new Swiper('#char .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // 吸底到底部消失
  $(window).scroll(function () {
    // console.log('1111')
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (Math.floor(scrollTop + windowHeight) == scrollHeight) {
      $('#footer').hide();
    }else{
      $('#footer').show();
    }
  });
  //改变小人表情
  $('.study_topr').mouseover(function () {
    $('.study_bottom_middle').css("background-image", "url(../img/smile.png)")
    this.style.backgroundColor = '#f9b41b'
    $(this).prev().css({ "background": "#fff" })
    $('.study_topl p').attr("style", "color:#000;")
    $('.study_topr p').attr("style", "color:#fff;")

    $('.study_bottom_l').text("视频高质画面清主题鲜明有笑点播放量百万小case获赞百万很easy关注度高易传播")
    $('.study_bottom_r li').eq(0).text("有网感、懂产品").next().text("精运营、会策划、能推广").next().text("有渠道的综合性人才")
    // $('.study_bottom_l').text("这是一个很寂寞的天，下着有些伤心的雨")
    // $('.study_bottom_r li').eq(0).text("测试一").next().text("测试二").next().text("测试三")
  })
  $('.study_topl').mouseover(function () {
    $('.study_bottom_middle').css("background-image", "url(../img/cry.png)")
    this.style.backgroundColor = '#f9b41b'
    $(this).next().css({ "background": "#fff" })
    $('.study_topl p').attr("style", "color:#fff;")
    $('.study_topr p').attr("style", "color:#000;")
    $('.study_bottom_l').text("画面粗糙看不清不知所云没主题发的很多没关注播放量惨不忍睹没人点赞纯自嗨")

    $('.study_bottom_r li').eq(0).text("上线的活动没人参与？").next().text("做好的内容没推广渠道？").next().text("粉丝迟迟不增加？")
  })
  $('.course-clickbox li').mouseover(function () {
    var index = $(this).index();
    $('.course-text').eq(index).css('display', 'inline-block').siblings().css('display', 'none');
    $(this).addClass("course-active").siblings().removeClass("course-active");
  })
  $('.teacher-head li').mouseover(function () {
    var index = $(this).index() + 1;
    if (index < 5) {
      $('.first-ul img').attr("src", "../img/Teacher" + index + ".png");
      $(this).addClass("teacher-active").siblings().removeClass("teacher-active");
    }

    // $('.course-text').eq(index).css('display','inline-block').siblings().css('display','none');

    $('.teacher_main').eq(index - 1).addClass("teacher-block").siblings().removeClass("teacher-block");
  })
})