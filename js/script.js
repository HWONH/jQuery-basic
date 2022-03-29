$(document).ready(function(){
    // 선택자에 스타일 적용하기
    // 01. 단일 스타일 적용
    $("h2").css("color", "blue");
    // 02. 단일 스타일을 2회 연속 적용하기(체이닝기법)
    $("h2").css("font-size", "16").css("background", "pink");
    // .의 의미 : and 개념
    // 03. 스타일의 그룹화;css에선 선택자{선언1: 선언값;선언2: 선언값2;}
    $("h2").css({"font-style":"italic", "border":"2px solid #ff0000"});

    $(".direct_selector .walk").css("font-size", "38px");
    $(".direct_selector #kickBoard").css("color", "red");
    $(".direct_selector p, .direct_selector .walk").css("background", "#ffaaaa");
    // 그룹선택자의 주의사항 : 하나의 큰 따옴표 또는 작은 따옴표 내부에 모든 선택자들이 존재해야함

    // 간접선택자
    $(".grandSon").parent().css("background", "#aaffff");
    $(".grandSon").parents().css("font-size", "24px");
    $(".grandSon").parents(".parent_selector").css("border", "2px solid blue");
    // parents() 메서드 : 상위 조상을 모두 선택
    // parents("조상 중에 일치하는 선택자") 메서드 : 조상 중에 일치하는 선택자를 찾아서 선택
    
    $(".headquarters").closest("li").css("background", "#ffffaa");
    // 단계별로 조상에게 접근하는 과정상 가장 가까운 조상을 선택(선택 기준:선택자)

    $(".children_selector").children().css("background", "#aaffaa");
    $(".children_selector").children("h4").css("color", "#008800");
    // children() 메서드 : 자식을 찾아서 선택

    $(".find_selector").find("p").css("color", "blue");
    $(".find_selector").find("div").css("border", "2px solid #aabbff");
    // find() 메서드 : 자식을 포함한 자손을 찾아서 선택, 동일한 선택자라면 자손을 다중으로 선택가능
    
    $(".green").prev().css("background", "#ffffaa");
    $(".green").next().css("background", "#aaffff");
    $(".green").prevAll().css("border-left", "10px solid #ffaaaa");
    $(".green").nextAll().css("border-right", "10px solid #aaaaff");

    $(".green").prevUntil(".red").css("color", "red");
    $(".green").nextUntil(".purple").css("color", "purple");
    $(".green").siblings().css("border-bottom", "2px solid #555");
    $(".green").siblings(".orange").css("background", "orange");

    $(".search_selector p:nth-child(2)").css("color", "#ff6600");
    
    /* first() : 동일한 선택자가 다수일 때 맨처음에 접하는 선택자를 지정 */
    $(".search_selector p").first().css("background", "#aaffaa");
    $(".search_selector p:first").css("font-size", "36px");
    /* last() : 동일한 선택자가 다수일 때 맨마지막에 접하는 선택자를 지정 */
    $(".search_selector p").last().css("background", "#ffaaaa");
    $(".search_selector p:last").css("font-size", "38px");
    
    // odd : 인덱스 번호에서는 홀수/순서상 개념은 짝수번째
    $(".search_selector p:odd").css("border-left", "4px solid red");
    // even : 인덱스 번호에서는 짝수/순서상 개념은 홀수번째
    $(".search_selector p:even").css("border-left", "4px solid blue");
    
    // eq(index) : 해당 index번호의 요소를 선택;equipment
    $(".search_selector p:eq(2)").css("font-style", "italic");
    $(".search_selector p").eq(1).css("background", "#aaaaff");
    
    // lt(index) : index번호보다 작은 요소들을 선택;less than
    $(".search_selector p:lt(2)").css("border-bottom", "2px solid orange");
    // gt(index) : index번호보다 큰 요소들을 선택;greater than
    $(".search_selector p:gt(2)").css("border-top", "3px solid green");

    $(".attr_selector p[class='my_car']").css("color", "blue");
    $(".attr_selector p[class~='car']").css("background", "#eeeeaa");
    $(".attr_selector p[class*='ca']").css("font-style", "italic");
    $(".attr_selector p[class$='ar']").css("font-weight", "bold");
    $(".attr_selector p[class^='m']").css("border-left", "5px solid red");

    // ~= : car라는 독립적인 클래스명을 가진 요소 즉, <p class="my_car">Kia</p>와 같이 car라는 단어를 포함한 클래스명을 가진 요소는 해당안됨
    // *= : ca라는 단어를 포함한 클래스명을 가진 요소
    // $= : 마지막 클래스명이 ar라는 단어로 끝나는 요소
    // ^= : 첫번째 클래스명이 m라는 단어로 시작하는 요소

    $(":password").css("background", "#aaffff");
    var $chk_hobby = $(":checked").val();
    console.log($chk_hobby);

    var $input_chk=$(":checked");
    console.log($input_chk);
    $(":checked").css("background", "#aaffaa");

    /* ---------------------------------------------------- */
    $(".run").click(function(){
        var $on=$(".run").hasClass("on");
        if($on==false){
         $(".run").addClass("on"); // setAttribute는 갱신의 의미이나 addClass는 추가의 의미
        }else{
         $(".run").removeClass("on");
        }
     });
    /* ---------------------------------------------------- */
     var $sel_region=$(":selected").val();
     console.log($sel_region);
 
     $(".contains_selector p:contains('신데렐라')").css("font-size", "36px");
 
     $(".contents_selector ul li a").contents("span").css("color", "red");
     // 하위요소 선택;선택자를 기준으로 가장 가까운 하위요소를 찾아 선택
     // depth1 span(.contents_selector ul li a span)만 css 적용([개발자 모드] 확인)
 
     $(".has_selector p:has('span')").css("font-weight", "bold");
     // 선택자 선택;하위요소를 포함하고 있는 선택자를 선택(중심 대상은 p)
     // p:nth-child(3)에 css 적용
 
     $(".not_selector p").not(":eq(1)").css("color", "#ee3535");
     // 제외요소를 배제하고 나머지를 모두 선택
 
     $(".find_selector li").find("span").css("color", "pink");
     // 하위에 있는 요소를 찾아 선택, 하위에 중복되는 요소가 있다면 모두 선택
     // contents(해당되는 하위요소 중 가장 가까운 하위요소) vs find(해당되는 하위요소 모두 선택)
 
     $("#festival").closest("div").css("border", "2px solid #ff0000");
 
     $("#myList li").not(":eq(0)").css("background", "blue");
     $("#myList li:eq(2)").css("background", "green");
 
     var $total_checked=$(".is_method input").is(":checked");
     console.log($total_checked);
     if($total_checked==true){
         $(".detail_unit input").attr("checked", "checked");
     }
 
     // each문의 원리
     var $txt_01="초기 이름";
     var $txt_02="추가 이름";
 
     $(".each_method p").each(function(num){ // num : 매개변수, each문 내 매개변수자리는 어떠한 매개변수를 선언해주어도 함수문 외부에 따로 선언해준 값이 없어 default값인 인덱스번호(each문의 매개변수일 때만 해당)를 가져온다
         $txt_01+=$txt_02;
         console.log($txt_01);
         $(this).text(num+$txt_01); // innerText의 역할을 제이쿼리에서는 text로!
     });
 
     var $txt_arr=["바람과 함께 사라지다", "애플 민트", "아몬드 봉봉", "슈팅스타"];
     $(".each_01 ul li").each(function(num){
         $(this).text($txt_arr[num]);
     });
 
     // each() 메서드의 역할은 선택자의 개수를 인지하고 있으며, 순차적으로 위(인덱스 번호=0)에서부터 접근하여 실행문을 동작시키는 역할
     // each() 메서드의 주의사항 : 구조가 존재해야만 해당하는 구조로 접근이 가능
 
     /* 
     하위요소를 저장
     var $el=변수명.innterHTML();  스크립트
     var $el=변수명.html();        제이쿼리
 
     하위요소의 변경(갱신)
     변수명.innterHtml=("새요소")  스크립트
     변수명.html("새요소")       제이쿼리
      */
     var $html=$(".html_method h4").html(); // 하위요소 저장
     console.log($html);
     var $html=$(".html_method h4").html("your <a href=''>Choice</a>"); // 하위요소 변경(갱신)
 
     var $text=$(".text_method h4").text(); // 하위요소 저장
     console.log($text);
     var $text=$(".text_method h4").text("오늘의 추천요리"); // 하위요소 변경(갱신)
 
     /* 
     var $score=$(".attr_method .average").attr("data-score");
     console.log($score);
     $(".attr_method .average .gage_bar").css("width", $score+"%");
      */
     var $student=["문강태", "고문영"];
     $(".attr_method .average").each(function(num){
         var $score=$(this).attr("data-score");
         console.log($score);
         $(this).find(".gage_bar").text($student[num]);
         $(this).find(".gage_bar").css("width", $score+"%");
 
         // $(this).attr("stuNum", num+1);
         // $(this).attr("name", $student[num]);
 
         $(this).attr({"stuNum":num+1, "name":$student[num]});
     });
 
     // 기존 속성을 제거시
     $(".removeAttr p").removeAttr("rel");
 
     $(".addClass_method .add").click(function(){
         $(this).siblings("div").find("img").addClass("active");
         return false;
     });
     $(".addClass_method .remove").click(function(){
         $(this).siblings("div").find("img").removeClass("active");
         return false;
     });
    /* ---------------------------------------------------- */
     $(".res_btn").click(function(){
         $(".res_menu").addClass("active");
         return false;
     });
     $(".close").click(function(){
         $(".res_menu").removeClass("active");
         return false;
     });
 
     /* 
     $(".both_aspect a").click(function(){
         $(this).addClass("active");
     });
     $(".both_aspect a").click(function(){
         $(this).removeClass("active");
     });
      */
 
     $(".both_aspect a").click(function(){
         var $active=$(this).hasClass("active");
         console.log($active);
         if($active==false){
             $(this).addClass("active");
         }else{
             $(this).removeClass("active");
         }
         return false;
     });
 
     $(".elevator_btn li").click(function(){
         var $on=$(this).hasClass("active");
         if($on==false){
             $(this).addClass("active");
         }else{
             $(this).removeClass("active");
         }
         return false;
     });
 
     $(".open_popup").click(function(){
             $(".dark_bg").addClass("active");
             $(".popup").addClass("active");
     });
 
     $(".dark_bg, .popup .close").click(function(){
         $(".dark_bg").removeClass("active");
         $(".popup").removeClass("active");
     })
 
     var $input_text=$(".val_method input").val();
     console.log($input_text);
     $(".val_method input").val("돌이");
 
     var $prop=$(".attribute_method img").prop("src");
     console.log("$prop의 속성값 : "+$prop); // 절대경로
     var $attr=$(".attribute_method img").attr("src");
     console.log("$attr의 속성값 : "+$attr); // 상대경로(실제로 존재하는 값)
});
