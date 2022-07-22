var txts = ['Jsem vývojář.', 
            'Jsem programátor.', 
            'Jsem developer.', 
            'Poradím si s návrhem databází.', 
            'SSH, SCP, FTP mi není cizí.',
            'Aplikace nasazuji v Dockeru.',
            'Využívám asymetrické kryptografie.',
            'Nastavím CMS.', 
            'Navrhnu a naprogramuju informační systém.',
            'Jsem tady pro vás.'
          ];

    
    
var textPosition = 0; 
var speed = 150;
var index = 0;
typewriter = () => {
    document.querySelector("#who-i-am").innerHTML = 
    txts[index].substring(0, textPosition) + '<span class="blink-span-1s">\u25AE</span>';

    if(textPosition++ != txts[index].length)
        setTimeout(typewriter, speed);
    else if(index  +1 < txts.length){
        index++;
        textPosition = 0;
        setTimeout(typewriter, speed);
    }
    else{
        index = 0;
        textPosition = 0;
        setTimeout(typewriter, speed);
    }
}

$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'components/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})