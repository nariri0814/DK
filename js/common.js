const BRAND_NAME = [
    'cartier', 'gucci', 'balenciaga', 'chloe', 'montblanc', 'saintlaurent', 'bottegaveneta', 'dior', 'celine', 'kenzo', 'loewe', 'dupont', 'viviennewestwood', 'soniarykiel', 'kioyamato', 'dkny', 'balmain', 'kivuli', 'escada', 'police', 'paulsmith', 'mulberry'
];

const MAIN_SLIDE_LIST = [
    {ban_no: 01, main_src: 'cartier.jpg', logo_src: 'cartier.png', info: 'Cartier looks beyond the fleeting fashions of the day, forging a style out of<br>its extraordinary history, travels and encounters with exceptional personalities.', item_src: '1.png'},
    {ban_no: 02, main_src: 'gucci.jpg', logo_src: 'gucci.png', info: "Influential, innovative and progressive, Gucci is reinventing a wholly modern approach to fashion.<br>Under the new vision of creative director Alessandro Michele, the House has redefined luxury for the 21st century, further reinforcing its position as on of the world's most desirable fashion houses.", item_src: '2.png'},
    {ban_no: 03, main_src: 'balenciaga.jpg', logo_src: 'balenciaga.png', info: 'The iconic French fashion house defined the concept of modernity and elegance<br>through the mastery of techniques and the use of innovative fabrics.', item_src: '3.png'},
    {ban_no: 04, main_src: 'chloe.jpg', logo_src: 'chloe.png', info: 'Through the luxury eyewear offering, Chloé proposes singular styles characterized by bold and colourful forms. Occasionally whimsical, but always true to the Maison’s founding values of elegance and femininity, the sunglasses and optical options complement the face of the woman who wears them.', item_src: '4.png'},
    {ban_no: 05, main_src: 'montblanc.jpg', logo_src: 'montblanc.png', info: 'Montblanc unites fine European craftsmanship with time-honoured designs,<br>bringing pieces to life that emanate classic heritage and refined creation.', item_src: '5.png'},
    {ban_no: 06, main_src: 'saintlaurent.jpg', logo_src: 'saintlaurent.png', info: 'Identity of absolute modernity and today<br>it is one of the most prominent fashion houses of the twentieth century.', item_src: '6.png'},
    {ban_no: 07, main_src: 'bottegaveneta.jpg', logo_src: 'bottegaveneta.png', info: 'Discretion, quality, and craftsmanship — Bottega Veneta has created a new standard of luxury,<br>the qualities that define it are unchanging: outstanding craftsmanship, innovative design,<br>and contemporary functionality.', item_src: '7.png'},
    {ban_no: 08, main_src: 'dior.jpg', logo_src: 'dior.png', info: 'Christian Dior changed the rules of elegance around the world with his debut collection in 1947.<br>Today, this vision continues to be explored boldly and imaginatively.', item_src: '8.png'},
    {ban_no: 09, main_src: 'celine.jpg', logo_src: 'celine.png', info: 'Today, the Spirit of Celine is reinforced by Artistic Director Hedi Slimane. Combined with Ready to wear and accessories, his haute couture designs showcase the Meticulous possibilities of french craft. To celebrate this Heritage, the “TRIOMPHE” monogram returns - A symboling of the house of Celine since 1971.', item_src: '9.png'},
    {ban_no: 10, main_src: 'kenzo.jpg', logo_src: 'kenzo.png', info: 'For half a century, KENZO has been infusing positive energy and contagious freedom by claiming a polychrome, daring and borderless fashion that celebrates nature and cultural diversity. Founded in Paris in 1970 by Kenzo Takada, who opened his first boutique in Galerie Vivienne, the House continues to cultivate and reinterpret with modernity the codes that make its uniqueness.', item_src: '10.png'},
    {ban_no: 11, main_src: 'loewe.jpg', logo_src: 'loewe.png', info: 'LOEWE is one of the world´s major luxury houses. With over 170 years of history, today it is defined by the modernity of its past, an unwavering confidence in the present, and a firm look forward. Craftsmanship, progress and unequalled expertise with leather, LOEWE’s founding pillars, are reconfigured with a timely awareness evident in desirable and functional products across multiple categories', item_src: '11.png'},
    {ban_no: 12, main_src: 'dupont.jpg', logo_src: 'dupont.png', info: 'A passion for producing the finest in luxury products. A design atelier where<br>ideas and innovation are brought to life and where quality rings true.', item_src: '12.png'},
    {ban_no: 13, main_src: 'viviennewestwood.jpg', logo_src: 'viviennewestwood.png', info: "Vivienne's means of expression is profound. Her way of smashing<br>tradition to create something totally new, is wonderful.", item_src: '13.png'},
    {ban_no: 14, main_src: 'soniarykiel.jpg', logo_src: 'soniarykiel.png', info: 'Elegance, is not a question of luxury, of wealth.<br>But of attitude.', item_src: '14.png'},
    {ban_no: 15, main_src: 'kioyamato.jpg', logo_src: 'kioyamato.png', info: 'Dedicated to the craft of creating comfort and style through technical magnificence.<br> Our passion for the arts of engineering and fashion is seen first-hand in the details of all our eyepieces.', item_src: '15.png'},
    {ban_no: 16, main_src: 'dkny.jpg', logo_src: 'dkny.png', info: 'Donna Karan is one of the most iconic names in American fashion. Her iconic silhouettes and innovative system of dressing remain as relevant as ever, now reimagined in a modern-day Donna Karan New York and the next-generation counterpart, DKNY', item_src: '16.png'},
    {ban_no: 17, main_src: 'balmain.jpg', logo_src: 'balmain.png', info: "The name of our latest offering is more than a simple play on alliteration.<br>It reflects the exciting and engaging spirit of today's Balmain.", item_src: '17.png'},
    {ban_no: 18, main_src: 'kivuli.jpg', logo_src: 'kivuli.png', info: 'The KIVULI seeks to break the borders of nations, sex and race.<br>We want to reposition ourselves as a keyword for the future generations ', item_src: '18.png'},
    {ban_no: 19, main_src: 'escada.jpg', logo_src: 'escada.png', info: 'As one of the world’s leading luxury womenswear brands,<br>ESCADA stands for modern elegance, cool glamour,<br>and sensual femininity.', item_src: '19.png'},
    {ban_no: 20, main_src: 'police.jpg', logo_src: 'police.png', info: 'Passionate about freedom, since 1983. Right from the start,<br>Police has stood for defining your own style—<br>one that lives and thrives away<br>from the catwalks and<br>transient trends', item_src: '20.png'},
    {ban_no: 21, main_src: 'paulsmith.jpg', logo_src: 'paulsmith.png', info: 'London-based Paul Smith combines traditional craftsmanship with cutting-edge design to create a covetable and colourful aesthetic. Find razor sharp tailoring and contemporary style fused with cultural references and of course the iconic stripes', item_src: '21.png'},
    {ban_no: 22, main_src: 'mulberry.jpg', logo_src: 'mulberry.png', info: 'MULBERRY continues to celebrate the contradictions of a truly British identity,<br>looking back to our archives and rich British traditions<br>and examining them from a new perspective.', item_src: '22.png'}
];

const COLLECTION_ITEM_SUNG = [
    //1
    {item_no: 1, src: 'DK-709SK-210,DK-709SK-014,DK-709SK-240,DK-709SK-260', brand:'DKNY', name:'DK-709SK', color:'#000,#966422,#7c2a07,#dd8d8d'},
    //2
    {item_no: 2, src: 'DK-708SK-001,DK-708SK-200,DK-708SK-230,DK-708SK-240', brand:'DKNY', name:'DK-708SK', color:'#000,#703800,#bc7d2b,#dda48b'},
    //3
    {item_no: 3, src: 'DK-113SK-001,DK-113SK-035,DK-113SK-036,DK-113SK-717', brand:'DKNY', name:'DK-113SK', color:'#d8d8d8,#000000,#936222,#1b65ba'},
    //4
    {item_no: 4, src: 'MB-0137SK-1,MB-0137SK-2,MB-0137SK-3,MB-0137SK-4', brand:'MONBLANC', name:'DK-113SK', color:'#000,#b2b2b2,#208c4b,#84681a'},
    //5
    {item_no: 5, src: 'MB-0136SK-1,MB-0136SK-2,MB-0136SK-3,MB-0136SK-4', brand:'MONBLANC', name:'MB-0136SK', color:'#000,#bababa,#c98e28,#89471b'},
    //6
    {item_no: 6, src: 'BB-0102SA-1,BB-0102SA-2', brand:'BALENCIAGA', name:'BB-0102SA', color:'#000,#403e3d'},
    //7
    {item_no: 7, src: 'VW-7002-470,VW-7002-401,VW-7002-486,VW-7002-925', brand:'VIVIENNE WESTWOOD', name:'VW-7002', color:'#000e70,#825512,#ffc0ad,#f9aaff'},
    //8
    {item_no: 8, src: 'VW-7001-439,VW-7001-441,VW-7001-444,VW-7001-468', brand:'VIVIENNE WESTWOOD', name:'VW-7001', color:'#000000,#754311,#c92cac,#f29898'},
    //9
    {item_no: 9, src: 'VW-5004-001,VW-5004-170,VW-5004-268,VW-5004-336', brand:'VIVIENNE WESTWOOD', name:'VW-5004', color:'#000,#845015,#d18c81,#f2b5e7'},
    //10
    {item_no: 10, src: 'VW-5003-225,VW-5003-001,VW-5003-170', brand:'VIVIENNE WESTWOOD', name:'VW-5003', color:'#000,#8c411c,#d6a0c8'},
    //11
    {item_no: 11, src: 'VW-5002-001,VW-5002-239,VW-5002-336', brand:'VIVIENNE WESTWOOD', name:'VW-5002', color:'#000,#e9b6ea,#dd7c7c'},
    //12
    {item_no: 12, src: 'VW-5001-219,VW-5001-001,VW-5001-135', brand:'VIVIENNE WESTWOOD', name:'VW-5001', color:'#000,#7f4519,#dd8080'},
    //13
    {item_no: 13, src: 'DP-6675-1,DP-6675-2,DP-6675-3,DP-6675-4', brand:'S.T. DUPONT', name:'DP-6675', color:'#000,#824e1a,#629ec1,#307221'},
    //14
    {item_no: 14, src: 'DP-6674-1,DP-6674-2,DP-6674-3', brand:'S.T. DUPONT', name:'DP-6674', color:'#000,#87670e,#18752f'},
    //15
    {item_no: 15, src: 'DP-6673-3,DP-6673-1,DP-6673-2,DP-6673-4', brand:'S.T. DUPONT', name:'DP-6673', color:'#000,#8e5d1c,#4c89bf,#4b7a1f'},
    //16
    {item_no: 16, src: 'DP-6672-1,DP-6672-2,DP-6672-3', brand:'S.T. DUPONT', name:'DP-6672', color:'#000,#9b5222,#6d738c'},
    //17
    {item_no: 17, src: 'DP-6671-3,DP-6671-1,DP-6671-2', brand:'S.T. DUPONT', name:'DP-6671', color:'#000,#af7324,#f29feb'},
    //18
    {item_no: 18, src: 'DP-6670-3,DP-6670-1,DP-6670-2,DP-6670-4', brand:'S.T. DUPONT', name:'DP-6670', color:'#000,#664b03,#777777,#93c0e2'},
    //19
    {item_no: 19, src: 'VW46_2-1,VW43_2-1,VW44_2-1,VW45_2-1,VW47_2-1', brand:'VIVIENNE WESTWOOD', name:'VW-1535S', color:'#000,#914c1e,#a3a3a3,#cd4ed8,#dccdba'},
    //20
    {item_no: 20, src: 'VW31_2-1,VW28_2-1,VW29_2-1,VW30_2-1', brand:'VIVIENNE WESTWOOD', name:'VW-1531S', color:'#000,#4f2012,#dd9292,#e5e5e5'}
];

const COLLECTION_ITEM_OPTI = [
    {item_no: 1, src: 'KP-249AU-1,KP-249AU-2,KP-249AU-3,KP-249AU-4', brand:'KIO YAMATO', name:'KP-249', color:'#000,#7f6919,#7f3d1c,#3497aa'},
    {item_no: 2, src: 'KP-248AU-4,KP-248AU-1,KP-248AU-2,KP-248AU-3', brand:'KIO YAMATO', name:'KP-248', color:'#cecece,#000,#a37720,#6b4000'},
    {item_no: 3, src: 'KP-247AU-3,KP-247AU-1,KP-247AU-2,KP-247AU-4', brand:'KIO YAMATO', name:'KP-247', color:'#bababa,#000,#91621d'},
    {item_no: 4, src: 'KP-246-1,KP-246-2,KP-246-3,KP-246-4', brand:'KIO YAMATO', name:'KP-246', color:'#000,#8c6420,#dd7e7e,#afafaf'},
    {item_no: 5, src: 'MB-0141OK-1,MB-0141OK-2,MB-0141OK-3,MB-0141OK-4', brand:'MONTBLANC', name:'MB-0141OK', color:'#e8e8e8,#ddcc33,#757575,#775d16'},
    {item_no: 6, src: 'MB-0140OK-2,MB-0140OK-3', brand:'MONTBLANC', name:'MB-0140OK', color:'#e0d433,#dbdbdb'},
    {item_no: 7, src: 'MB-0139OK-1,MB-0139OK-2,MB-0139OK-3,MB-0139OK-4', brand:'MONTBLANC', name:'MB-0139OK', color:'#bfbfbf,#e2cf1f,#bfbfbf'},
    {item_no: 8, src: 'VW-430V-4,VW-430V-2,VW-430V-3', brand:'VIVIENNE WESTWOOD', name:'VW-430V', color:'#dd8585,#935220,#a32345'},
    {item_no: 9, src: 'VW-429V-4,VW-429V-1,VW-429V-2,VW-429V-3', brand:'VIVIENNE WESTWOOD', name:'VW-429V', color:'#d996f2,#000,#8e651d,#962241'},
    {item_no: 10, src: 'DP-6202-1,DP-6202-2,DP-6202-3', brand:'VIVIENNE WESTWOOD', name:'DP-6202', color:'#000,#701200,#ddbb33'},
    {item_no: 11, src: 'VW-427V-1,VW-427V-2,VW-427V-3,VW-427V-4', brand:'VIVIENNE WESTWOOD', name:'VW-427V', color:'#000,#9e6321,#af3224,#dd8989'},
    {item_no: 12, src: 'VW-426V-1,VW-426V-2,VW-426V-3,VW-426V-4', brand:'VIVIENNE WESTWOOD', name:'VW-426V', color:'#e5c834,#a06123,#dd8282,#cbb9c5'},
    {item_no: 13, src: 'DP-6210-1,DP-6210-2,DP-6210-3', brand:'S.T.DUPONT', name:'DP-6210', color:'#000,#ad7f4a,#6b4402'},
    {item_no: 14, src: 'DP-6209-3,DP-6209-1,DP-6209-2', brand:'S.T.DUPONT', name:'DP-6209', color:'#aaaaaa,#000,#916021'},
    {item_no: 15, src: 'DP-6208-1,DP-6208-2,DP-6208-3,DP-6208-4', brand:'S.T.DUPONT', name:'DP-6208', color:'#000,#a5a5a5,#5e5e5e,#84641a'},
    {item_no: 16, src: 'DP-6207-1,DP-6207-2,DP-6207-3,DP-6207-4', brand:'S.T.DUPONT', name:'DP-6207', color:'#000,#d1d1d1,#e0b833,#5e5e5e'},
    {item_no: 17, src: 'DP-6206-3,DP-6206-1,DP-6206-2', brand:'S.T.DUPONT', name:'DP-6206', color:'#e0b833,#000,#894b1b'},
    {item_no: 18, src: 'DP-6205-3,DP-6205-1,DP-6205-2', brand:'S.T.DUPONT', name:'DP-6205', color:'#566e79,#000,#6b2413'},
    {item_no: 19, src: 'DP-6204-1,DP-6204-2,DP-6204-3', brand:'S.T.DUPONT', name:'DP-6204', color:'#000,#a37025,#aa9f61'},
    {item_no: 20, src: 'DP-6203-1,DP-6203-2,DP-6203-4', brand:'S.T.DUPONT', name:'DP-6203', color:'#000,#91491f,#a3a3a3'}
];

$(document).ready(function(){
    
    ///////////햄버거 애니메이션///////////
    $('.h_menu').click(function(){
        $('.main_menu_container').toggleClass('menu_active');
        $('main, footer').css({display: 'none'});

        //메인헤더 감추기
        $('.header_fixed').addClass('h_fixed_ac');
        ////햄버거버튼 애니메이션
        $('#menu_ch_line_mid').stop().animate({
            opacity: 0
        },300);
        
        $('#menu_ch_line_top').addClass('menu_ch_line_top_ac');
        $('#menu_ch_line_bot').addClass('menu_ch_line_bot_ac');


        //////////브랜드 로고 슬라이드 너비 구하고 배치//////////
        let mc_count = $('.menu_collection .mc_count');
        let mc_li_count = $('.menu_collection .mc_count').length;

        // li 개수
        for(let i=0; i< mc_li_count; i++) {
            // 각각의 li 안의 menu_col_item 개수
            for(let j=0; j<mc_count.eq(i).find('.menu_col_move').length ; j++) {
                
                let menu_img_count = mc_count.eq(i).find('.menu_col_move').eq(j).children('.menu_img_box').length;

                let tmp_width = 0;

                // menu_img_box 개수
                for(let k = 0; k < menu_img_count; k++) {
                    // console.log(mc_count.eq(i).find('.menu_col_move').eq(j).children('.menu_img_box').eq(k).outerWidth());
                    tmp_width+=mc_count.eq(i).find('.menu_col_move').eq(j).children('.menu_img_box').eq(k).outerWidth()
                };
                // console.log("tmp_width: " + tmp_width)
                // console.log("")
                mc_count.eq(i).find('.menu_col_move').eq(j).css({
                    width: tmp_width + 3 
                });
            };
        };

        /////////////////브랜드 로고 슬라이드/////////////////////
        //2번째 로고박스 배치
        for(i=0; i<$('.menu_collection .mc_count').length; i++) { //4
            let m_col_m2_pos = $('.menu_collection .mc_count').eq(i).children('.menu_col_item').children().eq(0).outerWidth();
// console.log(m_col_m2_pos)
            $('.menu_collection .menu_li').eq(i).children('.menu_col_item').children().eq(1).css({
                left: m_col_m2_pos
            })
        }

        function interval_func(tmp, count, int_speed) {
            // 들어오는 판
            tmp.find('.menu_col_move').eq(count % 2).css({
                left: tmp.find('.menu_col_move').width()
            }).animate({
                left: 0
            },int_speed, 'linear')

            // 나갈판
            tmp.find('.menu_col_move').eq((count-1) % 2).animate({
                left: -1*(tmp.find('.menu_col_move').width())
            },int_speed, 'linear').animate({
                left: tmp.find('.menu_col_move').width()
            },0)
        };

        let logo_inter;
        $('.menu_collection .mc_count').hover(function(){
            
            let count = 1;
            let tmp = $(this);    
            let int_speed = (tmp.find('.menu_col_move').width() * 7) 
            clearInterval(logo_inter);
            interval_func(tmp, count, int_speed)
            count+=1;

            logo_inter = setInterval(function(){  
                interval_func(tmp, count, int_speed)

                count++
 
            },int_speed) 
        },function(){
            let tmp = $(this);
            // clearInterval(logo_inter)
            tmp.find('.menu_col_move').eq(0).stop().animate({
                left: 0
            }, 0)
            tmp.find('.menu_col_move').eq(1).stop().animate({
                left: tmp.find('.menu_col_move').eq(0).width()
            }, 0)

        });
            
    });
    
    $('.menu_ch_btn').click(function(){
        $('.main_menu_container').toggleClass('menu_active');
        $('main, footer').css({display: 'block'})

        $('#menu_ch_line_top').removeClass('menu_ch_line_top_ac');
        $('#menu_ch_line_bot').removeClass('menu_ch_line_bot_ac');

        $('.header_fixed').removeClass('h_fixed_ac');
    });
    
    ///////////브랜드 로고 슬라이드///////////
    $('.menu_collection .menu_li').hover(function(){
        $(this).find('.menu_col_item').addClass('menu_col_item_ac');
    },function(){
        $(this).find('.menu_col_item').removeClass('menu_col_item_ac');
    });
    
    ///////////휠 이벤트 메뉴 슬라이드///////////
    let chk = true;
    let menu_sc_timer = 400;
    let sc_index = 1;
    let mi_count = $('.menu_item').length;
    let menu_pos = 0;

     
    function chk_resize() {
        if($(window).width() < 855) {
            $('.main_menu_container').off("mousewheel DOMMouseScroll");
        }
        else {
            main_scroll()
        }
    };
    chk_resize();

    function main_scroll() {
        $('.main_menu_container').on("mousewheel DOMMouseScroll", function(e){
            // console.log($('.menu_outer .menu_item').eq(2).offset().left)
                    if(chk) {
                        // 버튼막기
                        chk = false;
                        setTimeout(function(){
                            chk = true;
                        }, menu_sc_timer + 700); // 500 + 800 + 100
             
                        // // 휠 위로 - 전판
                        if(e.originalEvent.wheelDelta >= 0  && sc_index > 0) {
                            sc_index--;
            
                            menu_pos = $(this).find('.menu_outer').children('.menu_item').eq(sc_index).position().left
                        }
                        // // 휠 아래로 - 다음판
                        else if(e.originalEvent.wheelDelta < 0 && sc_index < mi_count) {
                            menu_pos = $(this).find('.menu_outer').children('.menu_item').eq(sc_index).position().left
                                 
                            sc_index++;
            
                            if(sc_index == mi_count) {
                                sc_index -=1;
                            }
                            
                        } 
                        $('.menu_outer').animate({
                            left: -1 * menu_pos
                        },600);
                    };
            
                }); //휠이벤트 끝
    };
    // main_scroll();

    $(window).resize(function(){
        chk_resize();
    });

    ///////////타이틀 호버 시 배경 바꾸기///////////
    $('.menu_about').mouseenter(function(){
        $('.main_m_bg1').css({opacity:1})
        $('.main_m_bg2,.main_m_bg3,.main_m_bg4').css({opacity:0})
    });
    $('.menu_collection').mouseenter(function(){
        $('.main_m_bg2').css({opacity:1})
        $('.main_m_bg1,.main_m_bg3,.main_m_bg4').css({opacity:0})
    });
    $('.menu_guarantee').mouseenter(function(){
        $('.main_m_bg3').css({opacity:1})
        $('.main_m_bg1,.main_m_bg2,.main_m_bg4').css({opacity:0})
    });
    $('.menu_contact').mouseenter(function(){
        $('.main_m_bg4').css({opacity:1})
        $('.main_m_bg1,.main_m_bg2,.main_m_bg3').css({opacity:0})
    });


});

function change_color(ch_col_sec,ch_col) {
    $(ch_col_sec).css({
        color: ch_col
    })
};
function change_back(ch_bac_sect,ch_back) { 
    $(ch_bac_sect).css({
        background: ch_back
    })
};
function change_display(ch_dis_sect,ch_dis) {
    $(ch_dis_sect).css({
        display: ch_dis
    })
};