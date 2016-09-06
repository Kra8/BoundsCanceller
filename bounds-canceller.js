/**
 * Bounds Canceller
 * 
 * you should
 * <div class = "bounds-canceller">
 *
 * windowに関してはChromeなど一部ブラウザでは正しく動かず...
 *
 * @author K.Asai asai@teaapplications.com
 * @update 2016/09/06
 */

(function () {
    "use strict";
    
    //--------------------------------------------------------
    // 基本設定
    // className    : bounds-cancellerを適応したいクラス名
    // windowBounds : windowにbounds-cancellerを適応するか否か
    //
    var className       = 'bounds-canceller',
        windowBoubds    = true,
    // 
    //--------------------------------------------------------
        
        // インスタンス
        forEach     = Array.prototype.forEach;
    
    /* content bounds canceller */
    function contentBoundsCancell(content) {
        content.addEventListener("scroll", function () {
            if (content.scrollLeft < 0.1) { content.scrollLeft = 0; }
            if (content.scrollTop < 0.1) { content.scrollTop  = 0; }
        });
    }
    
    /* window bounds canceller */
    function windowBoundsCancell() {
        window.addEventListener("scroll", function () {
            if (window.pageXOffset < 0.1) { window.scrollTo(0, 0); }
            if (window.pageYOffset < 0.1) { window.scrollTo(0, 0); }
        });
    }
    
    /* initialize */
    function init() {
        // get contents
        var contents = document.getElementsByClassName(className);
        
        // windowをboudnsさせるか否か
        if (windowBoubds) { windowBoundsCancell(); }
        
        // 例外
        if (contents.length === 0) { return false; }

        // 各コンテンツに対してboundsCancellを適応する
        forEach.call(contents, function (content) {
            contentBoundsCancell(content);
        });
    }
    
    init();
}());