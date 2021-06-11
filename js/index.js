$(document).ready(function(){
    /////////////////메인 정보 불러오기/////////////////

    for(i=0; i<MAIN_SLIDE_LIST.length; i++) {
        let list  = '<li class="main_slide_box" id="tmp_'+i+'">';
            list +=     '<div class="main_slide_inner">';
            list +=         '<div class="main_img_box">';
            list +=             '<div class="main_img ">';
            list +=                 '<img src="img/main/'+(i+1)+'_'+BRAND_NAME[i]+'/main_'+MAIN_SLIDE_LIST[i].main_src+'" alt="main_img">';
            list +=             '</div>';
            list +=         '</div>';
            list +=         '<div class="main_desc_box">';
            list +=             '<div class="main_info_box">';
            list +=                 '<div class="banner_no m_sp_active">';
            list +=                     '<span>'+MAIN_SLIDE_LIST[i].ban_no+'</span>';
            list +=                     '<span>/</span>';
            list +=                     '<span>22</span>';
            list +=                 '</div>';
            list +=                 '<div class="main_brand_logo s_sp_active">';
            list +=                     '<a href="collection.html"><img src="img/main/'+(i+1)+'_'+BRAND_NAME[i]+'/logo_'+MAIN_SLIDE_LIST[i].logo_src+'" alt="logo"></a>';
            list +=                 '</div>';
            list +=                 '<div class="main_brand_info s_sp_active">'+MAIN_SLIDE_LIST[i].info+'</div>';
            list +=                 '<div class="main_more m_sp_active">';
            list +=                     '<a href="item.html?cate_no=0&item_no=11">EXPLORE MORE';
            list +=                         '<div class="main_more_line"></div>';
            list +=                         '<div class="main_more_circle"></div>';
            list +=                     '</a>';
            list +=                 '</div>';
            list +=             '</div>';
            list +=             '<div class="main_item_img m_sp_active">';
            list +=             '<a href="item.html?cate_no=1&item_no=13">';
            list +=                 '<img src="img/main/'+(i+1)+'_'+BRAND_NAME[i]+'/item'+MAIN_SLIDE_LIST[i].item_src+'" alt="item">';
            list +=             '</a>';
            list +=             '</div>';
            list +=         '</div>';
            list +=     '</div>';
            list += '</li>';
        $('.main_container').append(list);
    };
    
    //인디
    for(i=0; i<MAIN_SLIDE_LIST.length; i++) {
        let list  = '<li class="indi_li">';
            list +=     '<a href="#">';
            list +=         '<div class="indi_li_circle"></div>';
            list +=         '<div class="indi_li_dot"></div>';
            list +=         '<div class="indi_hov_box">';
            list +=             '<div class="indi_hov_img">';
            list +=                 '<img src="img/main/'+(i+1)+'_'+BRAND_NAME[i]+'/hov_'+MAIN_SLIDE_LIST[i].main_src+'" alt="hov_img">';
            list +=             '</div>';
            list +=             '<p class="indi_name">'+BRAND_NAME[i]+'</p>';
            list +=         '</div>';
            list +=     '</a>';
            list += '</li>';
        $('.indi_ul').append(list);
    };

    /////////////////메인 슬라이드/////////////////
    let ms_index = 0; // 현재 보고있는 방
    let ms_count = $('.main_slide_box').length; // 전체 개수
    let sl_timer = 1100;
    // 슬라이드 함수
    function main_slide(c_ind,c_pos,o_ind,o_pos) {
        // console.log(c_ind,c_pos,o_ind,o_pos);
        
        // 들어올판
        $('.main_slide_box').eq(c_ind).css({
            left: c_pos,
            display:'block'
        }).animate({
            left: 0
        },sl_timer)
        // 나갈판
        $('.main_slide_box').eq(o_ind).animate({
            left: o_pos,
            display:'none'
        },sl_timer)

        indi_act(c_ind);
        trans_ani(c_ind);
        change_thing(c_ind);
    };

    // 인디_active
    function indi_act(c_ind) {
        $('.indi_li_circle').removeClass('indi_circle_active');
        $('.indi_name').removeClass('indi_name_active');
        $('.indi_li_circle').eq(c_ind).addClass('indi_circle_active');
        $('.indi_name').eq(c_ind).addClass('indi_name_active');
    };
    let trans;

    // 슬라이드 애니메이션(transform)
    function trans_ani(c_ind) { 

        trans = setTimeout(function(){  
            $('.main_slide_box').find('.main_img').removeClass('main_img_init_pos');
            $('.main_slide_box').eq(c_ind).find('.main_img').addClass('main_img_init_pos')
    
            $('.main_slide_box').find('.banner_no, .main_brand_logo, .main_brand_info, .main_more, .main_item_img').removeClass('init_pos')
            $('.main_slide_box').eq(c_ind).find('.banner_no, .main_brand_logo, .main_brand_info, .main_more, .main_item_img').addClass('init_pos')
        },1000);
    };

    //색 바꾸기
    function change_thing(c_ind) {
        if(c_ind % 2 == 1) {//홀수
            change_color('.h_logo, .h_menu b', '#fff');
            change_back('.menu_btn_line','#fff');
            change_display('.sh_w','block');
            change_display('.sh_b','none');

            change_back('.indi_line2','#fff');
            change_back('.indi_li_dot','#fff');
            change_color('.indi_name', '#fff');
            $('.indi_li_circle').attr('style', 'border: 1px solid #fff')
        }
        else if(c_ind % 2 == 0) {//짝수
            change_color('.h_logo, .h_menu b', '#222');
            change_back('.menu_btn_line','#222');
            change_display('.sh_w','none');
            change_display('.sh_b','block');

            change_back('.indi_line2','#222');
            change_back('.indi_li_dot','#222');
            change_color('.indi_name', '#222');
            $('.indi_li_circle').attr('style', 'border: 1px solid #222')
        }
    };
    /////// 인디 라인 색 함수///////
    function re_line2() {
// console.log("ms_index: " + ms_index)

        let clicked_left = $('.indi_li').eq(ms_index % ms_count).offset().left;
        let dot_o_left = $('.indi_box').offset().left;
        let tmp = clicked_left - dot_o_left - 4;
        $('.indi_line2').css({
            width: tmp
        });
    };
    $(window).resize(function(){
        //인디라인1
        let ul_width = $('.indi_ul').width();
        let li_width = $('.indi_li').width();
        $('.indi_line').css({
            width: ul_width - li_width
        })

        //인디라인2
        re_line2();
    });
    // 인디 라인1 길이 색
    let ul_width = $('.indi_ul').width();
    let li_width = $('.indi_li').width();
    $('.indi_line').css({
        width: ul_width - li_width
    });

    // 자동 슬라이드
    let main_auto_inter;
    function main_auto() {
        
        main_auto_inter = setInterval(function(){
            main_slide((ms_index+1) % ms_count,'100%',(ms_index) % ms_count,'-100%');
            ms_index++;
            //인디 라인 색
            re_line2();
        }, sl_timer + 2200);
    };
    main_auto();

    // 처음판 애니메이션 빼기
    $('.main_slide_box').eq(0).find('.main_img').addClass('main_img_init_pos');
    $('.main_slide_box').eq(0).find('.banner_no, .main_brand_logo, .main_brand_info, .main_more, .main_item_img').addClass('init_pos');
    
    // 처음판 인디액티브 넣어주기
    $('.indi_li').eq(0).find('.indi_name').addClass('indi_name_active')
    $('.indi_li').eq(0).find('.indi_li_circle').addClass('indi_circle_active');
    

    ////////////////// 휠 이벤트 //////////////////
    let chk = true;
    $('.main_slide_box').on("mousewheel DOMMouseScroll", function(e){
        
        if(chk) {
            // 버튼막기
            chk = false;
            clearInterval(main_auto_inter);
            setTimeout(function(){
                chk = true;
                main_auto();
            }, sl_timer + 500 + 300); // 2100
            // // 휠 위로 - 전판
            if(e.originalEvent.wheelDelta >= 0) {
                main_slide((ms_index-1) % ms_count,'-100%',(ms_index) % ms_count,'100%')
                ms_index--;
            }
            // // 휠 아래로 - 다음판
            else if(e.originalEvent.wheelDelta < 0) {
                main_slide((ms_index+1) % ms_count,'100%',(ms_index) % ms_count,'-100%')
                ms_index++; 
            } 
            re_line2();
        };

    }); //휠이벤트 끝
    
    //////// 인디 슬라이드 //////////
    $('.indi_li').click(function(){
        clearInterval(main_auto_inter);
        clearInterval(trans);
        
        main_slide($(this).index(),'100%',(ms_index) % ms_count,'-100%');
        
        indi_act($(this).index());
        ms_index = $(this).index();

        re_line2();
    });
    
    //인디호버시
    $('.indi_li').hover(function(){
        clearInterval(main_auto_inter);
        
        // 이미지 나타나게 하기
        $(this).find('.indi_hov_img').fadeIn(0)

    },function(){
        // 이미지 나타나게 하기
        $(this).find('.indi_hov_img').fadeOut(0)
        
    });


});