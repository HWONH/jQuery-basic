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
});
