import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,e as t}from"./app-Ds4AiUcn.js";const s="/assets/flex-intro-CDm43jw5.png",n={},a=t('<p>flex布局时目前web开发中使用最多的布局方案。</p><p>flex布局，flexible布局，弹性布局，都是指的flex布局，IE6-9不可用flex布局。</p><ul><li>开启flex布局的叫flex-container</li><li>flex-container里面的直接子元素叫做flex-items</li></ul><p>两个可以开启flex布局：</p><ul><li>flex：开启后变成块级元素</li><li>inline-flex：开启后变成行内元素</li></ul><p>开启后有两种轴：</p><ul><li>主轴：main axis，主轴开始位置：main start，主轴结束位置：main end，主轴大小：mian size</li><li>交叉轴：cross axis，交叉轴开始位置：cross start，交叉轴结束位置：cross end，交叉轴大小：cross size</li></ul><p><img src="'+s+`" alt="主轴和交叉轴图片说明" loading="lazy"> 应用在flex container上的css属性：</p><ul><li><p>flex-direction，决定侧轴的方向，取值：row(默认值)、row-reverse、column、column-reverse</p><p>​ row——从左到右</p><p>​ row-reverse——从右到左</p><p>​ column——从上到下</p><p>​ column-reverse——从下到上</p></li><li><p>flex-wrap</p></li></ul><p>​ nowrap，默认值，不换行 ​ wrap，换行 ​ wrap-reverse，多行(对比wrap，cross start与cross end相反)</p><ul><li><p>flex-flow</p><pre><code>  flex-direction或flex-wrap的简写，可以省略其中一个，顺序任意
</code></pre></li><li><p>justify-content决定了flex-items在 main axis上的对齐方式。</p></li></ul><p>​ flex-start(默认值)：与main start对齐 ​ flex-end：与main end对齐 ​ center 居中对齐 ​ space-between ​ a.flex items之间的距离相等 ​ b.与main start、main end两端对齐 ​ space-evenly ​ a.flex items之间的距离相等<br> ​ b.flex items与main start、main end之间的距离等于flex items之间的距离 ​ c.容器之间以及容器和父同期的距离相等 ​ space-around ​ a. flex items之间的距离相等 ​ b. flex items与main start、main end之间的距离是flex items 之间距离的一半 ​ c.仅是容器之间的距离相等</p><ul><li>align-items，决定了flex items在cross axis上的对齐方式</li></ul><p>​ normal，在弹性布局中，效果跟stretch一样 ​ stretch，当flex items在cross axis方向的size为auto时，会自动拉伸至填充flex container ​ flex-start，与cross start对齐 ​ flex-end，与cross end对齐 ​ center，居中对齐 ​ baseline，与基准线对齐，与flex-start相似，改变第一个容器文字大小就会有不一样的效果</p><ul><li>align-content，决定了多行flex items在cross axis上的对齐方式，用法与justify-content类似</li></ul><p>​ stretch，默认值，与align-items的stretch类似 ​ flex-start，与cross start对齐 ​ flex-end，与cross end对齐 ​ center，居中对齐 ​ space-between ​ a. flex items之间的距离相等 ​ b. 与cross start、cross end两端对齐 ​ space-around ​ a. flex items之间的距离相等 ​ b. flex items与cross start、cross end之间的距离是flex items之间距离的一半 ​ c.容器之间的距离是容器距离边缘的两倍 ​ space-evenly ​ a. flex items之间的距离相等 ​ b. flex items与cross start、cross end之间的距离等于flex items之间的距离</p><p>应用在flex items上的css属性：</p><ul><li><p>flex是flex-grow || flex-shrink || flex-basis的简写，flex属性可以指定1个，2个或三个值。 单值语法：值必须为以下其中之一： a. 一个无单位数：它会被当作flex-grow的值 b. 一个有效的宽度值：它会被当做flex-basis的值 c. 关键字none，auto或initial 双值语法：第一个值必须为一个无单位数，并且它会被当作flex-grow的值 第二个值必须为以下之一： 一个无单位数：它会被当作flex-shrink的值 一个有效的宽度值：它会被当作flex-basis的值 三值语法： 第一个值必须为一个无单位数，并且它会被当作flex-grow的值 第二个值必须为一个无单位数，并且它会被当作flex-shrink的值 第三个值必须为一个有效的宽度值，并且它会被flex-basis的值</p></li><li><p>flex-grow，决定了flex items如何扩展。</p></li></ul><p>​ 可以设置任意非负数字(正小数、正整数、0)，默认值是0 ​ 当flex container在main axis方向上有剩余size时，flex-grow属性才会有效 如果所有flex items的flex-grow总和sum超过1，每个flex items扩展的size为 ​ flex container的剩余size<em>flex-grow / sum 如果所有flex items 的flex-grow总和不超过1，每个flex item扩展的size为 ​ flex container的剩余size</em>flex-grow ​ flex items扩展后的最终size不能超过max-width/max-height</p><ul><li>flex-basis用来设置flex items在main axis方向上的base size</li></ul><p>​ auto，默认值 ​ 具体的宽度数值，如：100px ​ 决定flex items最终base size的因素，从优先级高到低： ​ max-width/max-height/min-width/min-height ​ flex-basis ​ width/height ​ 内容本身的size</p><ul><li>flex-shrink，可以控制容器不收缩，尤其默认为nowrap情况下，决定了flex items如何收缩</li></ul><p>​ 可以设置任意非负数字(正小数、正整数、0)，默认值是1 ​ 当flex items在main axis方向上超过了flex container的size，flex-shrink属性才会有效 ​ 如果所有flex items的flex-shrink总和超过1，每个flex item收缩的size为： ​ a. flex items超出flex container的size<em>收缩比例/所有flex items的收缩比例之和 ​ b. 收缩比例=flex-shrink</em>flex item的base size ​ c. base size就是flex item放入flex container之前的size ​ flex items收缩后的最终size不能小于min-width\\min-height</p><ul><li>order，决定了flex items的排列顺序</li></ul><p>​ 可以设置任意整数(正整数、负整数、0)值越小就越排在前面，默认值是0</p><ul><li>align-self，覆盖flex container设置的align-items</li></ul><p>​ auto，默认值，遵从flex container的align-items设置 ​ stretch、flex-start、flex-end、center、baseline，效果跟align-items一致</p>`,27),r=[a];function x(o,f){return l(),i("div",null,r)}const p=e(n,[["render",x],["__file","flex.html.vue"]]),d=JSON.parse(`{"path":"/web/css/flex.html","title":"Flex布局","lang":"zh-CN","frontmatter":{"title":"Flex布局","date":"2022-03-01T00:00:00.000Z","category":["CSS"],"description":"flex布局时目前web开发中使用最多的布局方案。 flex布局，flexible布局，弹性布局，都是指的flex布局，IE6-9不可用flex布局。 开启flex布局的叫flex-container flex-container里面的直接子元素叫做flex-items 两个可以开启flex布局： flex：开启后变成块级元素 inline-flex：...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/css/flex.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"Flex布局"}],["meta",{"property":"og:description","content":"flex布局时目前web开发中使用最多的布局方案。 flex布局，flexible布局，弹性布局，都是指的flex布局，IE6-9不可用flex布局。 开启flex布局的叫flex-container flex-container里面的直接子元素叫做flex-items 两个可以开启flex布局： flex：开启后变成块级元素 inline-flex：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flex布局\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":4.63,"words":1389},"filePathRelative":"web/css/flex.md","localizedDate":"2022年3月1日","autoDesc":true}`);export{p as comp,d as data};