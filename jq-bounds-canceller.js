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

/*global $, jQuery*/


if (typeof jQuery === "undefined") {
    throw "require jQuery ...";
}

(function ($) {
    "use strict";
    
    //--------------------------------------------------------
    // 基本設定
    // className    : bounds-cancellerを適応したいクラス名
    // windowBounds : windowにbounds-cancellerを適応するか否か
    //
    var className       = '.bounds-canceller',
        windowBoubds    = true,
    // 
    //--------------------------------------------------------
        
        // インスタンス
        forEach     = Array.prototype.forEach;
    
    /* content bounds canceller */
    function contentBoundsCancell(content) {
        var $content = $(content);
        $content.scroll(function () {
            window.console.log($content.scrollTop());
            if ($content.scrollTop() < 0.1) { $content.scrollTop(0.0); }
            if ($content.scrollLeft() < 0.1) { $content.scrollLeft(0.0); }
        });
    }
    
    // windowをboundsさせない
    function windowBoundsCancell() { contentBoundsCancell(window); }
    
    /* initialize */
    function init() {
        // get contents
        var $contents = $(className);
    
        // windowをboundsさせるか否か
        if (windowBoubds) { windowBoundsCancell(); }
        
        // 例外
        if ($contents.length === 0) { return false; }

        // 各コンテンツに対してboundsCancellを適応する
        forEach.call($contents, function ($content) {
            contentBoundsCancell($content);
        });
    }
    
    init();
}(jQuery));