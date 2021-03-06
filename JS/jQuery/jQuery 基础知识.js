
// 通过W3CSchool学习到的jQuery基础知识：
// <1>jQuery 效果：
   1.隐藏hide（） 显示show（）  隐藏/显示toggle（）
   2.淡入fadeIn（）淡出fadeOut（） 切换fadeToggle().fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。
   3.滑动：向下滑动slideDown() 向上滑动slideUp() 切换slideToggle()
   4.jQuery animate() 方法用于创建自定义动画。
      语法：
      $(selector).animate({params},speed,callback);
      实例
      $("button").click(function(){
        $("div").animate({left:'250px'});
      }); 
      当然animate（）方法还有几种用法：
             操作多个属性，使用相对值（+=），使用预定义的值（hide），使用队列功能
   5.stop() 方法用于在动画或效果完成前对它们进行停止。
          语法
          $(selector).stop(stopAll,goToEnd);
          实例
          $("#stop").click(function(){
            $("#panel").stop();
          });
    6.jQuery Callback 函数
          当动画 100% 完成后，即调用 Callback 函数。
          典型的语法：
          $(selector).hide(speed,callback)
          callback 参数是一个在 hide 操作完成后被执行的函数。
          错误（没有 callback）
          $("p").hide(1000);
          alert("The paragraph is now hidden");
          亲自试一试
          正确（有 callback）
          $("p").hide(1000,function(){
          alert("The paragraph is now hidden");
          });
    7.chaining（）
             下面的例子把 css(), slideUp(), and slideDown() 链接在一起。"p1" 元素首先会变为红色
             然后向上滑动，然后向下滑动：
             $("#p1").css("color","red").slideUp(2000).slideDown(2000);
             
             
             
  // <2>jQuery HTML
      // 1.获得内容/设置内容 - text()、html() 以及 val()
              三个简单实用的用于 DOM 操作的 jQuery 方法：
              text() - 设置或返回所选元素的文本内容
              html() - 设置或返回所选元素的内容（包括 HTML 标记）
              val() - 设置或返回表单字段的值
      // 2.添加新的 HTML 内容
              append() - 在被选元素的结尾插入内容
              prepend() - 在被选元素的开头插入内容
              after() - 在被选元素之后插入内容
              before() - 在被选元素之前插入内容         
      // 3.删除元素/内容
              remove() - 删除被选元素（及其子元素）
              empty() - 从被选元素中删除子元素         
                
      // 4.jQuery 操作 CSS
              jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：
              addClass() - 向被选元素添加一个或多个类
              removeClass() - 从被选元素删除一个或多个类
              toggleClass() - 对被选元素进行添加/删除类的切换操作
              css() - 设置或返回样式属性 
              实例
                  $("button").click(function(){
                    $("h1,h2,p").addClass("blue");
                    $("div").addClass("important");
                  });
      // 5.jQuery css() 方法
                css() 方法设置或返回被选元素的一个或多个样式属性。
                实例
                $("p").css("background-color");
                实例
                $("p").css({"background-color":"yellow","font-size":"200%"});
      // 6.jQuery 尺寸 方法
              jQuery 提供多个处理尺寸的重要方法：
              width()
              height()
              innerWidth()
              innerHeight()
              outerWidth()
              outerHeight()                            
    // <3>遍历
      // 什么是遍历？
          jQuery 遍历，意为“移动”，用于根据其相对于其他元素的关系来“查找”（或选取）HTML 元素。
          以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。
      // 1.向上遍历 DOM 树
            parent()方法返回被选元素的直接父元素。该方法只会向上一级对 DOM 树进行遍历。
            parents()方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。
            parentsUntil()方法返回介于两个给定元素之间的所有祖先元素。
                  实例
                      $(document).ready(function(){
                        $("span").parentsUntil("div");
                      });
      // 2.向下遍历 DOM 树
            children()方法返回被选元素的所有直接子元素。该方法只会向下一级对 DOM 树进行遍历。
            find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。
      // 3.在 DOM 树中水平遍历
            siblings() 方法返回被选元素的所有同胞元素。
            next()方法返回被选元素的下一个同胞元素。
            nextAll()方法返回被选元素的所有跟随的同胞元素。
            nextUntil()方法返回介于两个给定参数之间的所有跟随的同胞元素。
            prev() prevAll()prevUntil()它们返回的是前面的同胞元素（在 DOM 树中沿着同胞元素向后遍历，而不是向前）。
      // 4.过滤
        缩写搜索元素的范围
            三个最基本的过滤方法是：first(), last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素。
            其他过滤方法，比如 filter() 和 not() 允许您选取匹配或不匹配某项指定标准的元素。
                        
        // 5.CSS 属性	描述
                  css()	设置或返回匹配元素的样式属性。
                  height()	设置或返回匹配元素的高度。
                  offset()	返回第一个匹配元素相对于文档的位置。
                  offsetParent()	返回最近的定位祖先元素。
                  position()	返回第一个匹配元素相对于父元素的位置。
                  scrollLeft()	设置或返回匹配元素相对滚动条左侧的偏移。
                  scrollTop()	设置或返回匹配元素相对滚动条顶部的偏移。
                  width()	设置或返回匹配元素的宽度。      
  
  // jQuery 核心函数
函数	描述
jQuery()	接受一个字符串，其中包含了用于匹配元素集合的 CSS 选择器。
jQuery.noConflict()	运行这个函数将变量 $ 的控制权让渡给第一个实现它的那个库。 
  
  
  
  
  
  
  
  
  
  
