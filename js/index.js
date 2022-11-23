$(document).ready(function() {
    // fullpage
	$('#fullpage').fullpage({
		//options here
        anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],
        navigation: true,
        sectionsColor : ['#fff','#a3b5ce', '#c3b18f', "#99cf99 ", '#d2aaa6', '#c8aab2', '#66c0c3', ,'rgb(128 128 128 / 25%)'],
        navigationTooltips: ['HOME', 'GATEMAN', '롯데리아','몽촌반찬','SSSAK','국립중앙박물관','COPYRIGHT'],
        slidesNavigation: true,
        loopTop: true,
        loopBottom: true
	});

    // fancybox
    $(".fancybox").fancybox();
    $(".design_wrap a").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic',

        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

});
