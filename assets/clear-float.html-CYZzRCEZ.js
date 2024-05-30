import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as n}from"./app-Ds4AiUcn.js";const i={},o=n(`<h2 id="使用空标签清除浮动clear-both" tabindex="-1"><a class="header-anchor" href="#使用空标签清除浮动clear-both"><span>使用空标签清除浮动clear:both</span></a></h2><p>原理：添加一个空div，利用css属性的clear:both来清除浮动，让父级div能自动获取高度。</p><p>优点：通俗易懂，容易掌握</p><p>缺点：会添加很多无意义的空标签，有违结构与表现的分离，在后期维护较为麻烦</p><p>建议：不推荐使用，但此方法是以前主要使用的一种清除浮动的方法</p><h2 id="父级div定义overflow-hidden" tabindex="-1"><a class="header-anchor" href="#父级div定义overflow-hidden"><span>父级div定义overflow:hidden</span></a></h2><p>原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度</p><p>优点：简单，代码少，浏览器支持好</p><p>缺点：不能和position配合使用，因为超出的尺寸的会被隐藏，不能给父元素设置高度</p><p>建议：只推荐没有使用position或对overflow:hidden理解比较深的可以使用</p><h2 id="父级div定义overflow-auto" tabindex="-1"><a class="header-anchor" href="#父级div定义overflow-auto"><span>父级div定义overflow:auto</span></a></h2><p>原理：触发BFC进行布局，必须定义width不能定义height，使用overflow:auto时，浏览器会自动检查浮动区域的高度。</p><p>优点：简单，代码少，浏览器支持好</p><p>缺点：内部宽高超过父级div时，会出现滚动条</p><p>建议：不推荐使用，如果需要出现滚动条或确保不会出现滚动条可以使用</p><h2 id="父级div定义伪类-after和zoom-用于非ie浏览器" tabindex="-1"><a class="header-anchor" href="#父级div定义伪类-after和zoom-用于非ie浏览器"><span>父级div定义伪类::after和zoom(用于非IE浏览器)</span></a></h2><p>原理：IE8以上和非IE浏览器才支持::after，原理和方法一类似，zoom（IE转有属性）可解决IE6、IE7浮动问题。</p><p>优点：浏览器支持好，不容易出现怪问题(目前：大型网站都有使用，如：腾讯，网易，等)</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.clear::after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p><ul><li>content:&quot;&quot;生成内容作为最后一个元素，可以是一个点，也可以是其它，但是不推荐为空，因为火狐7.0为空会产生额外的空隙。</li><li>display:block 使生成的元素以块级元素显示，并占满剩余的空间。</li><li>visibility:hidden使生成内容不可见，并允许可能被生成的内容盖住的内容可以进行点击和交互。</li><li>height:0避免生成内容破坏原有布局的高度</li><li>clear:both清除浮动</li><li>zoom:1，触发IE的hasLayout</li></ul><h2 id="父级div定义height" tabindex="-1"><a class="header-anchor" href="#父级div定义height"><span>父级div定义height</span></a></h2><p>原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题</p><p>优点：简单，代码少，容易掌握</p><p>缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题</p>`,25),s=[o];function l(p,r){return t(),a("div",null,s)}const h=e(i,[["render",l],["__file","clear-float.html.vue"]]),v=JSON.parse(`{"path":"/web/css/clear-float.html","title":"清除浮动","lang":"zh-CN","frontmatter":{"title":"清除浮动","date":"2022-03-01T00:00:00.000Z","category":["CSS"],"tag":["CSS清除浮动的方式","CSS清除浮动方式的优缺点"],"description":"使用空标签清除浮动clear:both 原理：添加一个空div，利用css属性的clear:both来清除浮动，让父级div能自动获取高度。 优点：通俗易懂，容易掌握 缺点：会添加很多无意义的空标签，有违结构与表现的分离，在后期维护较为麻烦 建议：不推荐使用，但此方法是以前主要使用的一种清除浮动的方法 父级div定义overflow:hidden 原理...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/css/clear-float.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"清除浮动"}],["meta",{"property":"og:description","content":"使用空标签清除浮动clear:both 原理：添加一个空div，利用css属性的clear:both来清除浮动，让父级div能自动获取高度。 优点：通俗易懂，容易掌握 缺点：会添加很多无意义的空标签，有违结构与表现的分离，在后期维护较为麻烦 建议：不推荐使用，但此方法是以前主要使用的一种清除浮动的方法 父级div定义overflow:hidden 原理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:tag","content":"CSS清除浮动的方式"}],["meta",{"property":"article:tag","content":"CSS清除浮动方式的优缺点"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"清除浮动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"使用空标签清除浮动clear:both","slug":"使用空标签清除浮动clear-both","link":"#使用空标签清除浮动clear-both","children":[]},{"level":2,"title":"父级div定义overflow:hidden","slug":"父级div定义overflow-hidden","link":"#父级div定义overflow-hidden","children":[]},{"level":2,"title":"父级div定义overflow:auto","slug":"父级div定义overflow-auto","link":"#父级div定义overflow-auto","children":[]},{"level":2,"title":"父级div定义伪类::after和zoom(用于非IE浏览器)","slug":"父级div定义伪类-after和zoom-用于非ie浏览器","link":"#父级div定义伪类-after和zoom-用于非ie浏览器","children":[]},{"level":2,"title":"父级div定义height","slug":"父级div定义height","link":"#父级div定义height","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"web/css/clear-float.md","localizedDate":"2022年3月1日","autoDesc":true}`);export{h as comp,v as data};