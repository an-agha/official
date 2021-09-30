$(document).ready(function () {
    $("#next").on('click', nextDeal);
    $("#prev").on('click', prevDeal);
});

function nextDeal()
{
    if(! $('#last').hasClass('active-3'))
    {
    $('.active-1').removeClass('active-1');
    $('.active-2').addClass('active-1');
    $('.active-2').removeClass('active-2');
    $('.active-3').addClass('active-2');
    $('.active-3').removeClass('active-3');
    $('.active-2').next().addClass('active-3')
    }
}

function prevDeal()
{
    if(! $('#first').hasClass('active-1'))
    {
    $('.active-3').removeClass('active-3');
    $('.active-2').addClass('active-3');
    $('.active-2').removeClass('active-2');
    $('.active-1').addClass('active-2');
    $('.active-1').removeClass('active-1');
    $('.active-2').prev().addClass('active-1')
    }
} 

$(document).ready(function () {
    $("#next_page").on('click', nextLoc);
    $("#prev_page").on('click', prevLoc);
});

function nextLoc()
{
    if(! $('#last_item').hasClass('active4'))
    {
    $('.active1').removeClass('active1');
    $('.active2').addClass('active1');
    $('.active2').removeClass('active2');
    $('.active3').addClass('active2');
    $('.active3').removeClass('active3');
    $('.active4').addClass('active3');
    $('.active4').removeClass('active4');
    $('.active3').next().addClass('active4')
    }
}

function prevLoc()
{
    if(! $('#first_item').hasClass('active1'))
    {
    $('.active4').removeClass('active4');
    $('.active3').addClass('active4');
    $('.active3').removeClass('active3');
    $('.active2').addClass('active3');
    $('.active2').removeClass('active2');
    $('.active1').addClass('active2');
    $('.active1').removeClass('active1');
    $('.active2').prev().addClass('active1')
    }
} 


                    