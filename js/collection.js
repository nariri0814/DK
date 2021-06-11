
$(document).ready(function(){
    ///////헤더 스크롤///////
    let h_o_top = $('.header_wrap').height();
    $(window).scroll(function(){

        let s_top = $(window).scrollTop();
        if(h_o_top <= s_top) {
            $('.header_fixed').css({
                position: 'fixed',
                top: 0,
                left: 0,
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 15%)',
                transition: 'all 0.3s',
                zIndex: '999'
            })
            $('.h_logo').css({
                top: '50%',
                transform: 'translateY(-40%)'
            })
            $('.h_col_search').css({
                top: '50%',
                transform: 'translateY(-35%)'
            })
            $('.h_menu').css({
                top: '50%',
                transform: 'translateY(-35%)'
            })
        }
        else {
            $('.header_fixed').css({
                position: "absolute",
                top: 0,
                background: '#fff',
                boxShadow: 'none'
            })
            $('.h_logo').css({
                top: '43px',
                transform: 'translateY(0)'
            })
            $('.h_col_search').css({
                top: '50px',
                transform: 'translateY(0)'
            })
            $('.h_menu').css({
                top: '42px',
                transform: 'translateY(0)'
            })
        }
        
    });

    ///////탑버튼 캔버스/////// 
    let current_per=0;
    let canvas = $('.top_canvas');
    let ctx = canvas[0].getContext("2d");
    let pi = (Math.PI / 180);
    let cav_width = $('.top_btn').width();

    $(window).scroll(function(){
        current_per = -90 + (($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 360);
        scrolling(current_per);
        if($(window).scrollTop() == 0) {
            $('.scr_arrow').removeClass('scr_arrow_ac');
        }
        else{
            $('.scr_arrow').addClass('scr_arrow_ac');
        }
    });

    function scrolling(current_per) {
        ctx.clearRect(0, 0, cav_width, cav_width);
        ctx.beginPath(); 
        ctx.arc(cav_width/2, cav_width/2, cav_width/2-0.5, pi * -90, pi * current_per, false);
        ctx.lineWidth=1;
        ctx.stroke();
    };

    $('.top_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.wrap').offset().top
        }, 500)
    })


    ///////아이템 정보 불러오기///////

    //선글라스
    for(let j = 0; j < $('.col_sunglasses').length; j++) {
        if(j % 2 == 0) {
            for(let i=j; i< COLLECTION_ITEM_SUNG.length / 2 + j; i++) {

                let item_src = COLLECTION_ITEM_SUNG[i].src;
                item_src = item_src.split(",");

                let list  = '<div class="col_item_box">';
                    list +=     '<a href="item.html?cate_no=0&item_no='+COLLECTION_ITEM_SUNG[i].item_no+'">';
                    list +=         '<div class="item_img">';
                    list +=             '<img src="img/dk_items/'+COLLECTION_ITEM_SUNG[i].item_no+'/'+item_src[0]+'.jpg" alt="sunglass">';
                    list +=         '</div>';
                    list +=         '<div class="col_item_txt">';
                    list +=             '<p>'+COLLECTION_ITEM_SUNG[i].brand+'</p>';
                    list +=             '<p>'+COLLECTION_ITEM_SUNG[i].name+'</p>';
                    list +=         '</div>';
                    list +=     '</a>';
                    list += '</div>';

                $('.col_sunglasses').eq(j).append(list);
            }
        }
        else {
            for(let i=COLLECTION_ITEM_SUNG.length / 2-j; i< COLLECTION_ITEM_SUNG.length-j; i++) {

                let item_src = COLLECTION_ITEM_SUNG[i].src;
                item_src = item_src.split(",");

                let list  = '<div class="col_item_box">';
                    list +=     '<a href="item.html?cate_no=0&item_no='+COLLECTION_ITEM_SUNG[i].item_no+'">';
                    list +=         '<div class="item_img">';
                    list +=             '<img src="img/dk_items/'+COLLECTION_ITEM_SUNG[i].item_no+'/'+item_src[0]+'.jpg" alt="sunglass">';
                    list +=         '</div>';
                    list +=         '<div class="col_item_txt">';
                    list +=             '<p>'+COLLECTION_ITEM_SUNG[i].brand+'</p>';
                    list +=             '<p>'+COLLECTION_ITEM_SUNG[i].name+'</p>';
                    list +=         '</div>';
                    list +=     '</a>';
                    list += '</div>';

                    $('.col_sunglasses').eq(j).append(list);
            }

        }
    }

    //안경
    for(let j = 0; j < $('.col_sunglasses').length; j++) {

        if(j % 2 == 0) {
            for(let i=j; i< COLLECTION_ITEM_OPTI.length/2+j; i++) {

                let item_src = COLLECTION_ITEM_OPTI[i].src;
                item_src = item_src.split(",");

                let list  = '<div class="col_item_box">';
                    list +=     '<a href="item.html?cate_no=1&item_no='+COLLECTION_ITEM_OPTI[i].item_no+'">';
                    list +=         '<div class="item_img">';
                    list +=             '<img src="img/dk_items/optical/'+(i+1)+'/'+item_src[0]+'.jpg" alt="optical">';
                    list +=         '</div>';
                    list +=         '<div class="col_item_txt">';
                    list +=             '<p>'+COLLECTION_ITEM_OPTI[i].brand+'</p>';
                    list +=             '<p>'+COLLECTION_ITEM_OPTI[i].name+'</p>';
                    list +=         '</div>';
                    list +=     '</a>';
                    list += '</div>';

                $('.col_optical').eq(j).append(list);
            }
        }
        else {
            for(let i=COLLECTION_ITEM_OPTI.length / 2-j; i< COLLECTION_ITEM_OPTI.length-j; i++) {

                let item_src = COLLECTION_ITEM_OPTI[i].src;
                item_src = item_src.split(",");

                let list  = '<div class="col_item_box">';
                    list +=     '<a href="item.html?cate_no=1&item_no='+COLLECTION_ITEM_OPTI[i].item_no+'">';
                    list +=         '<div class="item_img">';
                    list +=             '<img src="img/dk_items/optical/'+(i+1)+'/'+item_src[0]+'.jpg" alt="optical">';
                    list +=         '</div>';
                    list +=         '<div class="col_item_txt">';
                    list +=             '<p>'+COLLECTION_ITEM_OPTI[i].brand+'</p>';
                    list +=             '<p>'+COLLECTION_ITEM_OPTI[i].name+'</p>';
                    list +=         '</div>';
                    list +=     '</a>';
                    list += '</div>';

                    $('.col_optical').eq(j).append(list);
            }
        }
    }

   
    ///////카테고리 박스 이벤트///////
    $('.company_box, .brand_box').click(function(){
        // 화살표 돌아감
        $(this).find('.opt_arrow').toggleClass('opt_arrow_ac');
        // 밑에 카테고리 나옴
        $(this).next('.col_content').slideToggle(300);
    })
    $('.col_opt_li').click(function(){
        // 라디오 버튼 누르면 변경
        $('.radio_big, .radio_small').css({display:'none'})
        $(this).find('.radio_big, .radio_small').css({display:'block'})
    })
    $('.col_opt_li').hover(function(){
        $(this).find('.radio_border').css({
            border: '1px solid #000'
        })
        $(this).children().css({
            color: '#000'
        })
    },function(){
        $(this).find('.radio_border').css({
            border: '1px solid #aaa'
        })
        $(this).children().css({
            color: '#aaa'
        })
    })

    ///////아이템섹션///////
    //초기값
    $('.sunglasses').addClass('col_sort_item_ac');
    $('.col_sunglasses, .col_optical').css({display: 'none'});
    $('.col_sunglasses').eq(0).css({display: 'block'});
    //페이지 마다 아이템 판 display
    function page_no_op_chk(room_no) {
        $('.page_no').eq(room_no).click(function(){
            $('.col_optical').css({display: 'none'})
            $('.col_optical').eq(room_no).css({display: 'block'});
            $('.col_sunglasses').css({display: 'none'});
        })
    };
    function page_no_su_chk(room_no) {
        $('.page_no').eq(room_no).click(function(){
            $('.col_optical').css({display: 'none'})
            $('.col_sunglasses').css({display: 'none'});
            $('.col_sunglasses').eq(room_no).css({display: 'block'});
        })
    };
    //선글라스/옵티컬 누르면 클래스 추가
    function s_o_chk(room_no) {
        $('.optical').click(function(){
            event.preventDefault();
            $('.sunglasses').removeClass('col_sort_item_ac');
            $('.optical').addClass('col_sort_item_ac');
            $('.col_optical, .col_sunglasses').css({display: 'none'});
            $('.col_optical').eq(room_no).css({display:'block'});
            page_no_op_chk(room_no)
        });
        $('.sunglasses').click(function(){
            event.preventDefault();
            $('.optical').removeClass('col_sort_item_ac');
            $('.sunglasses').addClass('col_sort_item_ac');
            $('.col_optical, .col_sunglasses').css({display: 'none'});
            $('.col_sunglasses').eq(room_no).css({display:'block'});
            page_no_su_chk(room_no)
        });
    }
    page_no_su_chk(0);
    page_no_su_chk(1);
    page_no_su_chk(2);
    page_no_su_chk(3);
    page_no_su_chk(4);
    s_o_chk(0);
    s_o_chk(1);
    s_o_chk(2);
    s_o_chk(3);
    s_o_chk(4);

    //페이지네이션 누르면 색 변경
    $('.page_no').eq(0).addClass('page_no_ac');
    $('.page_no').click(function(){
        $('.page_no').removeClass('page_no_ac')
        $(this).addClass('page_no_ac')
    })




    
});