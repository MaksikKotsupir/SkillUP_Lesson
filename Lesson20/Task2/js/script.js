var coll = $(".container").children();
i=0;
function ProgAddClass(){
    coll.eq(i).addClass('progress');
    i++;
}
function Load(){
    $('.title').text("Loaded!");
}
wrap1 = setInterval(ProgAddClass,700);
txt = setTimeout(Load,3500);