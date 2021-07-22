(function(a,b,c){'use strict';var e=a(b),g=b.document,h=a(g),j=function(){for(var l,m=3,n=g.createElement('div'),o=n.getElementsByTagName('i');n.innerHTML='<!--[if gt IE '+ ++m+']><i></i><![endif]-->',o[0];);return 4<m?m:l}(),k=function(){var l=b.pageXOffset===c?'CSS1Compat'==g.compatMode?b.document.documentElement.scrollLeft:b.document.body.scrollLeft:b.pageXOffset,m=b.pageYOffset===c?'CSS1Compat'==g.compatMode?b.document.documentElement.scrollTop:b.document.body.scrollTop:b.pageYOffset;'undefined'==typeof k.x&&(k.x=l,k.y=m),'undefined'==typeof k.distanceX?(k.distanceX=l,k.distanceY=m):(k.distanceX=l-k.x,k.distanceY=m-k.y);var n=k.x-l,o=k.y-m;k.direction=0>n?'right':0<n?'left':0>=o?'down':0<o?'up':'first',k.x=l,k.y=m};e.on('scroll',k),a.fn.style=function(l){if(!l)return null;var n,m=a(this),o=m.clone().css('display','none');o.find('input:radio').attr('name','copy-'+Math.floor(100*Math.random()+1)),m.after(o);var p=function(q,r){var u;return q.currentStyle?u=q.currentStyle[r.replace(/-\w/g,function(w){return w.toUpperCase().replace('-','')})]:b.getComputedStyle&&(u=g.defaultView.getComputedStyle(q,null).getPropertyValue(r)),u=/margin/g.test(r)?parseInt(u)===m[0].offsetLeft?u:'auto':u,u};return'string'==typeof l?n=p(o[0],l):(n={},a.each(l,function(q,r){n[r]=p(o[0],r)})),o.remove(),n||null},a.fn.extend({hcSticky:function(l){return 0==this.length?this:(this.pluginOptions('hcSticky',{top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,className:'sticky',wrapperClassName:'wrapper-sticky',stickTo:null,responsive:!0,followScroll:!0,offResolutions:null,onStart:a.noop,onStop:a.noop,on:!0,fn:null},l||{},{reinit:function(){a(this).hcSticky()},stop:function(){a(this).pluginOptions('hcSticky',{on:!1}).each(function(){var m=a(this),n=m.pluginOptions('hcSticky'),o=m.parent('.'+n.wrapperClassName),p=m.offset().top-o.offset().top;m.css({position:'absolute',top:p,bottom:'auto',left:'auto',right:'auto'}).removeClass(n.className)})},off:function(){a(this).pluginOptions('hcSticky',{on:!1}).each(function(){var m=a(this),n=m.pluginOptions('hcSticky'),o=m.parent('.'+n.wrapperClassName);m.css({position:'relative',top:'auto',bottom:'auto',left:'auto',right:'auto'}).removeClass(n.className),o.css('height','auto')})},on:function(){a(this).each(function(){a(this).pluginOptions('hcSticky',{on:!0,remember:{offsetTop:e.scrollTop()}}).hcSticky()})},destroy:function(){var m=a(this),n=m.pluginOptions('hcSticky'),o=m.parent('.'+n.wrapperClassName);m.removeData('hcStickyInit').css({position:o.css('position'),top:o.css('top'),bottom:o.css('bottom'),left:o.css('left'),right:o.css('right')}).removeClass(n.className),e.off('resize',n.fn.resize).off('scroll',n.fn.scroll),m.unwrap()}}),l&&'undefined'!=typeof l.on&&(l.on?this.hcSticky('on'):this.hcSticky('off')),'string'==typeof l?this:this.each(function(){var m=a(this),n=m.pluginOptions('hcSticky'),o=function(){var C=m.parent('.'+n.wrapperClassName);return!!(0<C.length)&&(C.css({height:m.outerHeight(!0),width:function(){var D=C.style('width');return 0<=D.indexOf('%')||'auto'==D?('border-box'==m.css('box-sizing')||'border-box'==m.css('-moz-box-sizing')?m.css('width',C.width()):m.css('width',C.width()-parseInt(m.css('padding-left')-parseInt(m.css('padding-right')))),D):m.outerWidth(!0)}()}),C)}()||function(){var C=m.style(['width','margin-left','left','right','top','bottom','float','display']),D=m.css('display'),E=a('<div>',{'class':n.wrapperClassName}).css({display:D,height:m.outerHeight(!0),width:function(){return 0<=C.width.indexOf('%')||'auto'==C.width&&'inline-block'!=D&&'inline'!=D?(m.css('width',parseFloat(m.css('width'))),C.width):'auto'==C.width&&('inline-block'==D||'inline'==D)?m.width():'auto'==C['margin-left']?m.outerWidth():m.outerWidth(!0)}(),position:function(){var F=m.css('position');return'static'==F?'relative':F}(),float:C.float||null,left:C.left,right:C.right,top:C.top,bottom:C.bottom,'vertical-align':'top'});return m.wrap(E),7===j&&0===a('head').find('style#hcsticky-iefix').length&&a('<style id="hcsticky-iefix">.'+n.wrapperClassName+' {zoom: 1;}</style>').appendTo('head'),m.parent()}();if(!m.data('hcStickyInit')){m.data('hcStickyInit',!0);var p=n.stickTo&&('document'==n.stickTo||n.stickTo.nodeType&&9==n.stickTo.nodeType||'object'==typeof n.stickTo&&n.stickTo instanceof('undefined'==typeof HTMLDocument?Document:HTMLDocument)),q=n.stickTo?p?h:'string'==typeof n.stickTo?a(n.stickTo):n.stickTo:o.parent();m.css({top:'auto',bottom:'auto',left:'auto',right:'auto'}),e.load(function(){m.outerHeight(!0)>q.height()&&(o.css('height',m.outerHeight(!0)),m.hcSticky('reinit'))});var r=function(C){m.hasClass(n.className)||(C=C||{},m.css({position:'fixed',top:C.top||0,left:C.left||o.offset().left}).addClass(n.className),n.onStart.apply(m[0]),o.addClass('sticky-active'))},u=function(C){C=C||{},C.position=C.position||'absolute',C.top=C.top||0,C.left=C.left||0,'fixed'!=m.css('position')&&parseInt(m.css('top'))==C.top||(m.css({position:C.position,top:C.top,left:C.left}).removeClass(n.className),n.onStop.apply(m[0]),o.removeClass('sticky-active'))},w=function(){if(n.on&&m.is(':visible')){if(m.outerHeight(!0)>=q.height())return void u();var M,D=n.innerSticker?a(n.innerSticker).position().top:n.innerTop?n.innerTop:0,E=o.offset().top,F=q.height()-n.bottomEnd+(p?0:E),G=o.offset().top-n.top+D,H=m.outerHeight(!0)+n.bottom,I=e.height(),J=e.scrollTop(),K=m.offset().top,L=K-J;if('undefined'!=typeof n.remember&&n.remember){var N=K-n.top-D;return void(H-D>I&&n.followScroll?N<J&&J+I<=N+m.height()&&(n.remember=!1):n.remember.offsetTop>N?J<=N&&(r({top:n.top-D}),n.remember=!1):J>=N&&(r({top:n.top-D}),n.remember=!1))}J>G?F+n.bottom-(n.followScroll&&I<H?0:n.top)<=J+H-D-(H-D>I-(G-D)&&n.followScroll?0<(M=H-I-D)?M:0:0)?u({top:F-H+n.bottom-E}):H-D>I&&n.followScroll?L+H<=I?'down'==k.direction?r({top:I-H}):0>L&&'fixed'==m.css('position')&&u({top:K-(G+n.top-D)-k.distanceY}):'up'==k.direction&&K>=J+n.top-D?r({top:n.top-D}):'down'==k.direction&&K+H>I&&'fixed'==m.css('position')&&u({top:K-(G+n.top-D)-k.distanceY}):r({top:n.top-D}):u()}},x=!1,y=!1,z=function(){if(B(),A(),!!n.on){var C=function(){'fixed'==m.css('position')?m.css('left',o.offset().left):m.css('left',0)};if(n.responsive){y||(y=m.clone().attr('style','').css({visibility:'hidden',height:0,overflow:'hidden',paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}),o.after(y));var D=o.style('width'),E=y.style('width');'auto'==E&&'auto'!=D&&(E=parseInt(m.css('width'))),E!=D&&o.width(E),x&&clearTimeout(x),x=setTimeout(function(){x=!1,y.remove(),y=!1},250)}if(C(),m.outerWidth(!0)!=o.width()){var F='border-box'==m.css('box-sizing')||'border-box'==m.css('-moz-box-sizing')?o.width():o.width()-parseInt(m.css('padding-left'))-parseInt(m.css('padding-right'));F=F-parseInt(m.css('margin-left'))-parseInt(m.css('margin-right')),m.css('width',F)}m.trigger('resized.hcSticky',[m])}};m.pluginOptions('hcSticky',{fn:{scroll:w,resize:z}});var A=function(){if(n.offResolutions){a.isArray(n.offResolutions)||(n.offResolutions=[n.offResolutions]);var C=!0;a.each(n.offResolutions,function(D,E){0>E?e.width()<-1*E&&(C=!1,m.hcSticky('off')):e.width()>E&&(C=!1,m.hcSticky('off'))}),C&&!n.on&&m.hcSticky('on')}};A(),e.on('resize',z);var B=function(){var C=!1;a._data(b,'events').scroll!=c&&a.each(a._data(b,'events').scroll,function(D,E){E.handler==n.fn.scroll&&(C=!0)}),C||(n.fn.scroll(!0),e.on('scroll',n.fn.scroll))};B()}}))}})})(jQuery,this),function(a,b){'use strict';a.fn.extend({pluginOptions:function(c,d,e,g){return(this.data(c)||this.data(c,{}),c&&'undefined'==typeof d)?this.data(c).options:(e=e||d||{},'object'==typeof e||e===b?this.each(function(){var h=a(this);h.data(c).options?h.data(c,a.extend(h.data(c),{options:a.extend(h.data(c).options,e||{})})):(h.data(c,{options:a.extend(d,e||{})}),g&&(h.data(c).commands=g))}):'string'==typeof e?this.each(function(){a(this).data(c).commands[e].call(this)}):this)}})}(jQuery);