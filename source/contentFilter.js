(function(){
var anchors = document.getElementsByTagName('a');
for(var k=0; k<anchors.length; k++){
    var href = anchors[k].getAttribute('href');
    if (href) {
        anchors[k].setAttribute('href',scaleLink(href));
    }
}

function scaleLink(linkUrl){
    var accessUrl = linkUrl;
    try{
        var regexp = new RegExp("(^ext:.*[^http])http:");
        if (accessUrl.match(regexp)){
            accessUrl = accessUrl.replace(regexp, 'http:');
        }
        return accessUrl;
    }catch(e){
        return '#';
    }

}
})();
