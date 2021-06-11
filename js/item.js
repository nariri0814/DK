const RELATED_ITEM = [
    {src:'DP-6660_S', brand:'S.T.DUPONT', item_name:'DP-6660'},
    {src:'DP-6661_S-1', brand:'S.T.DUPONT', item_name:'DP-6661'},
    {src:'EM-840P', brand:'ENDYMION', item_name:'EM-840P'},
    {src:'GG-0222SK', brand:'GUCCI', item_name:'GG-0222SK'},
    {src:'BY-7066K', brand:'BALLY', item_name:'BY-7066K'},
    {src:'DK-707SK_S-1', brand:'DKNY', item_name:'DK-707SK'},
    {src:'DP-6646-1', brand:'S.T.DUPONT', item_name:'DP-6646'},
    {src:'EM-219P', brand:'ENDYMION', item_name:'EM-219P'},
    {src:'BL-5129K-2', brand:'BALMAIN', item_name:'BL-5129K'},
    {src:'KP-223AU-1', brand:'KENZO', item_name:'KP-223AU'},
    {src:'BL-6054K_S', brand:'BALMAIN', item_name:'BL-6054K'},
    {src:'GG-0061S', brand:'GUCCI', item_name:'GG-0061S'},
    {src:'BY-7057K_S', brand:'BALLY', item_name:'BY-7057K'},
    {src:'GG-0590OK-1-2', brand:'GUCCI', item_name:'GG-0590OK'},
    {src:'BL-5128K_S-1', brand:'BALMAIN', item_name:'BL-5128K'},
]
function get_url_info(key) { 
    let url = location.href; // collection.html?cate_no=0&item_no=3

    url = url.split("?"); // [collection.html , cate_no=0&item_no=3]
    url = url[1].split("&"); // [cate_no=0 , item_no=3]

    for(let i=0; i<url.length; i++) {
        let tmp_url=url[i].split("="); // [cate_no, 0] [item_no, 3]

        if(tmp_url[0] == key) {
            return tmp_url[1];
        }
    };
};

const cate_num = Number(get_url_info("cate_no")); 
const item_num = Number(get_url_info("item_no"));
// console.log(item_num)
$(document).ready(function(){
    ///////헤더 스크롤///////
    let h_o_top = $('.header_wrap').height();
    $(window).scroll(function(){

        let s_top = $(window).scrollTop();
        if(h_o_top <= s_top) {
            $('.header_fixed').addClass('header_fixed_ac');
            $('.h_logo').addClass('h_logo_ac')
            $('.h_col_search').addClass('h_col_search_ac')
            $('.h_menu').addClass('h_menu_ac')
        }
        else {
            $('.header_fixed').removeClass('header_fixed_ac');
            $('.h_logo').removeClass('h_logo_ac')
            $('.h_col_search').removeClass('h_col_search_ac')
            $('.h_menu').removeClass('h_menu_ac')
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
        ctx.clearRect(0, 0, 65, 65);
        ctx.beginPath(); 
        ctx.arc(cav_width/2, cav_width/2, cav_width/2-0.5, pi * -90, pi * current_per, false);
        ctx.lineWidth=1;
        ctx.stroke();
    };
    scrolling()
    $(window).resize(function(){
        scrolling(current_per)
    })
    $('.top_btn').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('.wrap').offset().top
        }, 500)
    })

    ///////이미지 정보 불러오기///////
    
// console.log(cate_num)
    //선글라스
    if(cate_num == 0) {
// console.log(item_num)
    // console.log(COLLECTION_ITEM_SUNG[item_num].item_no)
        let list =  '<div class="item_big_img_box">';
            list+=      '<div class="item_big_img">';

            for(let i =0; i<COLLECTION_ITEM_SUNG.length; i++){
                if(COLLECTION_ITEM_SUNG[i].item_no == item_num){
                    var tmp_src = COLLECTION_ITEM_SUNG[i].src;
                    var src_room = tmp_src.split(',');
                    for(let j =0; j<src_room.length;j++){
                        list+=     '<img src="img/dk_items/'+COLLECTION_ITEM_SUNG[item_num-1].item_no+'/'+src_room[j]+'.jpg" alt="sunglass" class="item_b_img">';
                    }
                }
            }
            list+=          '<div class="magnifier"></div>';
            list+=      '</div>';
            list+=      '<div class="item_txt">';
            list+=          '<p class="brand_name">'+COLLECTION_ITEM_SUNG[item_num].brand+'</p>';
            list+=          '<p class="item_name">'+COLLECTION_ITEM_SUNG[item_num].name+'</p>';
            list+=      '</div>';
            list+=      '<div class="item_color_box_wrap">';
            list+=          '<div class="item_color_box">';

            for(let i =0; i<COLLECTION_ITEM_SUNG.length; i++){
                if(COLLECTION_ITEM_SUNG[i].item_no == item_num){
                    let tmp_col = COLLECTION_ITEM_SUNG[i].color;
                    let col_room = tmp_col.split(',');
                    for(let j =0; j<col_room.length; j++){
                        list+=  '<div class="color_circle">';
                        list+=      '<div class="color_border"></div>';
                        list+=      '<div class="color_chip" style="background:'+col_room[j]+'"></div>';
                        list+=  '</div>';
                    }
                }
            }
            list+=          '</div>';
            list+=      '</div>';
            list+=  '</div>';
        $('.item_detail_sec').append(list)

    }

    //안경
    if(cate_num == 1) {
        let opt_list =  '<div class="item_big_img_box">';
            opt_list+=      '<div class="item_big_img">';

            for(let i =0; i<COLLECTION_ITEM_OPTI.length; i++){
// console.log(COLLECTION_ITEM_OPTI[i].item_no)
// console.log(item_num)
                if(COLLECTION_ITEM_OPTI[i].item_no == item_num){
                    let tmp_src = COLLECTION_ITEM_OPTI[i].src;
                    let src_room = tmp_src.split(',');
                    for(let j =0; j<src_room.length;j++){
                        opt_list+=     '<img src="img/dk_items/optical/'+COLLECTION_ITEM_OPTI[item_num-1].item_no+'/'+src_room[j]+'.jpg" alt="optical" class="item_b_img">';
                    }
                }
            }
            opt_list+=          '<div class="magnifier"></div>';
            opt_list+=      '</div>';
            opt_list+=      '<div class="item_txt">';
            opt_list+=          '<p class="brand_name">'+COLLECTION_ITEM_OPTI[item_num].brand+'</p>';
            opt_list+=          '<p class="item_name">'+COLLECTION_ITEM_OPTI[item_num].name+'</p>';
            opt_list+=      '</div>';
            opt_list+=      '<div class="item_color_box_wrap">';
            opt_list+=          '<div class="item_color_box">';

            for(let i =0; i<COLLECTION_ITEM_OPTI.length; i++){
                if(COLLECTION_ITEM_OPTI[i].item_no == item_num){
                    let tmp_col = COLLECTION_ITEM_OPTI[i].color;
                    let col_room = tmp_col.split(',');
                    for(let j =0; j<col_room.length; j++){
                        opt_list+=  '<div class="color_circle">';
                        opt_list+=      '<div class="color_border"></div>';
                        opt_list+=      '<div class="color_chip" style="background:'+col_room[j]+'"></div>';
                        opt_list+=  '</div>';
                    }
                }
            }
            opt_list+=          '</div>';
            opt_list+=      '</div>';
            opt_list+=  '</div>';
        $('.item_detail_sec').append(opt_list)
    }

    ///////돋보기///////
    let mag = $('.magnifier');
    let target = $('.item_big_img');
    let target_w = target.width();
    let target_h = target.height();

    $('.item_big_img').mousemove(function(event){
        let mouse_x = event.pageX - target.offset().left;
        let mouse_y = event.pageY - target.offset().top

        let pos_x = mouse_x - (mag.outerWidth () / 2);
        let pos_y = mouse_y - (mag.outerHeight() / 2);

        let rx = -1 * pos_x;
        let ry = -1 * pos_y;

        mag.css({
            left: pos_x,
            top: pos_y,
            backgroundPosition: rx+"px " + ry+"px",
            backgroundSize: target_w+"px " + target_h+"px",
            transform: 'scale(1.3)'
        })
    });

    $('.item_big_img').hover(function(){
        mag.fadeIn(100);
    }, function(){
        mag.fadeOut(100);
    })
    //돋보기 백그라운드 넣어주기
    let img_first = $('.item_b_img').eq(0).attr('src');
    $('.magnifier').css({
        background: 'url('+img_first+')'
    })

    ///////색상칩 이벤트///////
    //초기값: 첫번째사진 보여주기
    $('.color_circle').eq(0).children('.color_border').addClass('color_border_ac');
    $('.item_b_img').eq(0).css({opacity:1})

    //색상 클릭시
    $('.color_circle').click(function(){
        // 테두리 넣기
        $('.color_circle').children('.color_border').removeClass('color_border_ac');
        $(this).children('.color_border').addClass('color_border_ac');
// console.log($(this).eq())

        //큰 사진 바꾸기
        $('.item_b_img').css({opacity:0})

        let circle_ind = $(this).index();
        $('.item_b_img').eq(circle_ind).css({opacity:1})

        if($('.item_b_img').eq(circle_ind).css({opacity:1})) {
            // console.log("1이다")
            let img_src = $('.item_b_img').eq(circle_ind).attr('src');
            $('.magnifier').css({
                background: 'url('+img_src+')',
            });
        }

    })
    
    ///////관련상품 정보넣기///////
    for(i=0; i<$('.indi').length; i++) {
        let list =   '<div class="rel_img_ban_box">';
            list+=      '<div class="rel_box">';
            list+=          '<a href="item.html?cate_no=0&item_no=13">';
            list+=              '<img src="img/dk_items/related/'+RELATED_ITEM[(i*3)].src+'.jpg" alt="rel_sunglass">';
            list+=              '<p class="rel_brand_name">'+RELATED_ITEM[(i*3)].brand+'</p>';
            list+=              '<p class="rel_item_name">'+RELATED_ITEM[(i*3)].item_name+'</p>';
            list+=          '</a>';
            list+=      '</div>';
            list+=      '<div class="rel_box">';
            list+=          '<a href="item.html?cate_no=0&item_no=3">';
            list+=              '<img src="img/dk_items/related/'+RELATED_ITEM[(i*3)+1].src+'.jpg" alt="rel_sunglass">';
            list+=              '<p class="rel_brand_name">'+RELATED_ITEM[(i*3)+1].brand+'</p>';
            list+=              '<p class="rel_item_name">'+RELATED_ITEM[(i*3)+1].item_name+'</p>';
            list+=          '</a>';
            list+=      '</div>';
            list+=      '<div class="rel_box">';
            list+=          '<a href="item.html?cate_no=0&item_no=11">';
            list+=              '<img src="img/dk_items/related/'+RELATED_ITEM[(i*3)+2].src+'.jpg" alt="rel_sunglass">';
            list+=              '<p class="rel_brand_name">'+RELATED_ITEM[(i*3)+2].brand+'</p>';
            list+=              '<p class="rel_item_name">'+RELATED_ITEM[(i*3)+2].item_name+'</p>';
            list+=          '</a>';
            list+=      '</div>';
            list+=   '</div>';

            $('.rel_img_ban_outer').append(list) 
    }


    ///////관련상품 슬라이드///////
    let rel_timer = 400;
    let rel_index = 1;
    let rel_count = $('.rel_img_ban_box').length;

    // 이미지 박스 크기 지정
    setTimeout(function(){
        let rel_img_ban_outer = $('.rel_img_ban_outer').innerWidth();
        $('.rel_img_ban_outer .rel_img_ban_box').width(rel_img_ban_outer);
    },100)
    

    $(window).resize(function(){
        let rel_img_ban_outer = $('.rel_img_ban_outer').innerWidth();
        $('.rel_img_ban_outer .rel_img_ban_box').width(rel_img_ban_outer);
    });

    //초기값
    $('.rel_img_ban_box').eq(0).css({left:0})

    //슬라이드 함수
    function rel_slide(c_ind,c_pos,o_ind,o_pos) {
        //들어올
        $('.rel_img_ban_box').eq(c_ind).css({
            left: c_pos
        }).stop().animate({
            left:0
        },rel_timer)
        //나갈
        $('.rel_img_ban_box').eq(o_ind).animate({
            left: o_pos
        },rel_timer)
        indi_color(c_ind)
        rel_btn_init()
    };
    
    //버튼막기
    function rel_btn_init() {
        $('.rel_btn, .indi').css('pointerEvents', 'none');
        setTimeout(function(){
            $('.rel_btn, .indi').css('pointerEvents', 'auto');
        }, rel_timer);
    };

    //인디 색 변경
    function indi_color(c_ind) {
        $('.indi').removeClass('indi_ac');
        $('.indi').eq(c_ind).addClass('indi_ac');
    };
    //인디 슬라이드
    $('.indi').click(function(){
        if($('.indi_ac').index() > $(this).index()) {
            rel_slide($(this).index(), '-100%',(rel_index -1) %  rel_count, '100%');
        }
        else {
            rel_slide($(this).index(), '100%', (rel_index -1) %  rel_count, '-100%');
        }
        indi_color($(this).index());
        rel_index = $(this).index() + 1
    })

    //왼쪽버튼
    $('.prev_btn').click(function(){
        rel_index-=1;
        rel_slide((rel_index -1) %  rel_count, '-100%', rel_index % rel_count, '100%');
    })
    //오른쪽버튼
    $('.next_btn').click(function(){
        rel_slide(rel_index % rel_count, '100%', (rel_index -1) %  rel_count, '-100%');
        rel_index+=1;
    })

    /////////////////////반응형///////////////////////
    //관련상품 터치 슬라이드
    let rel_posx=0;
    let rel_posx2=0;

    $(document).bind('touchstart', function(){
        rel_posx=-1;
        rel_posx2=-1;

        rel_posx=event.touches[0].pageX;
    });

    $(document).bind('touchmove', function(){
        rel_posx2=event.touches[0].pageX;
    })
    
    $(document).bind('touchend', function(){
        if(rel_posx2 > -1 && rel_posx2 > rel_posx) {
            //왼쪽버튼
            $('.prev_btn').trigger('click')
        }
        else if(rel_posx2 > -1 && rel_posx2 < rel_posx) {
            //오른쪽버튼
            $('.next_btn').trigger('click')
        }
    })





});