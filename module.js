function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function(){
  $("img").click(function(){
      if(/pic\/1/.test($(this).attr("src"))){
          $(this).attr('src','pic/1/1%20('+(getRandomInt(15)+1)+').png');
      }
      else if(/pic\/2/.test($(this).attr("src"))){
          $(this).attr('src','pic/2/2%20('+(getRandomInt(15)+1)+').png');
      }
      else if(/pic\/3/.test($(this).attr("src"))){
          $(this).attr('src','pic/3/3%20('+(getRandomInt(14)+1)+').png');
      }
  });
});