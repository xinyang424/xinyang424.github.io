import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,e as d}from"./app-Ds4AiUcn.js";const a={},n=d('<table><thead><tr><th style="text-align:left;">选择器</th><th style="text-align:left;">示例</th><th style="text-align:left;">示例说明</th></tr></thead><tbody><tr><td style="text-align:left;">.class</td><td style="text-align:left;">.app{}</td><td style="text-align:left;">类选择器</td></tr><tr><td style="text-align:left;">#</td><td style="text-align:left;">#id{}</td><td style="text-align:left;">id选择器</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">*{}</td><td style="text-align:left;">通配符，选中所有元素</td></tr><tr><td style="text-align:left;">element</td><td style="text-align:left;">p{}</td><td style="text-align:left;">元素选择器</td></tr><tr><td style="text-align:left;">element,element</td><td style="text-align:left;">div,p{}</td><td style="text-align:left;">选择所有的div元素和p元素(不分是不是父子和同级)</td></tr><tr><td style="text-align:left;">element element</td><td style="text-align:left;">div p{}</td><td style="text-align:left;">选择div内所有的p元素(父子关系)</td></tr><tr><td style="text-align:left;">element&gt;element</td><td style="text-align:left;">div&gt;p</td><td style="text-align:left;">选择div下的p元素，仅是父子关系</td></tr><tr><td style="text-align:left;">element+element</td><td style="text-align:left;">div+p</td><td style="text-align:left;">有同一个父元素，然后选择紧跟div之后的第一个p元素，不用书写父元素</td></tr><tr><td style="text-align:left;">element~element</td><td style="text-align:left;">div~p</td><td style="text-align:left;">有同一个父元素，然后选择紧跟div之后的所有的p元素，不用书写父元素</td></tr><tr><td style="text-align:left;">[attribute]</td><td style="text-align:left;">[target]</td><td style="text-align:left;">选择所有带有target属性的元素</td></tr><tr><td style="text-align:left;">[attribute=value]</td><td style="text-align:left;">[target=-black]</td><td style="text-align:left;">选择所有target值为&quot;-black&quot;的元素</td></tr><tr><td style="text-align:left;">[attribute~=value]</td><td style="text-align:left;">[title=-flower]</td><td style="text-align:left;">选择标题属性包含单词&quot;flower&quot;的所有元素(跟上面的好像没啥区别)</td></tr><tr><td style="text-align:left;">[attribute|=language]</td><td style="text-align:left;">[lang|=en]</td><td style="text-align:left;">选择lang属性等于en，或者以en-为开头的所有元素</td></tr><tr><td style="text-align:left;">[attribute^=value]</td><td style="text-align:left;">a[src^=&quot;https&quot;]</td><td style="text-align:left;">选择每一个src属性以&quot;https&quot;开头的元素</td></tr><tr><td style="text-align:left;">[attribute$=value]</td><td style="text-align:left;">a[src$=&quot;.pdf&quot;]</td><td style="text-align:left;">选择每一个src属性以&quot;.pdf&quot;结尾的元素</td></tr><tr><td style="text-align:left;">[attribute*=value]</td><td style="text-align:left;">a[src*=&quot;runoob&quot;]</td><td style="text-align:left;">选择每一个src属性的值包含字符串&quot;runoob&quot;的元素</td></tr><tr><td style="text-align:left;">:link</td><td style="text-align:left;">a:link</td><td style="text-align:left;">选择所有未访问的链接</td></tr><tr><td style="text-align:left;">:visited</td><td style="text-align:left;">a:visited</td><td style="text-align:left;">选择所有访问过的链接</td></tr><tr><td style="text-align:left;">:active</td><td style="text-align:left;">a:active</td><td style="text-align:left;">选择活动链接</td></tr><tr><td style="text-align:left;">:hover</td><td style="text-align:left;">a:hover</td><td style="text-align:left;">选择鼠标在链接上面时</td></tr><tr><td style="text-align:left;">:focus</td><td style="text-align:left;">input:focus</td><td style="text-align:left;">选择具有焦点的输入元素</td></tr><tr><td style="text-align:left;">:first-letter</td><td style="text-align:left;">p:first-letter</td><td style="text-align:left;">选择每一个p元素的第一个字母</td></tr><tr><td style="text-align:left;">:first-line</td><td style="text-align:left;">p:first-line</td><td style="text-align:left;">选择每一个p元素的第一行</td></tr><tr><td style="text-align:left;">:first-child</td><td style="text-align:left;">p:first-child</td><td style="text-align:left;">指定只有当p元素是其父级的的第一个子级的样式</td></tr><tr><td style="text-align:left;">:before</td><td style="text-align:left;">p:before</td><td style="text-align:left;">在每个p元素之前插入内容</td></tr><tr><td style="text-align:left;">:after</td><td style="text-align:left;">p:after</td><td style="text-align:left;">在每个p元素之后插入内容</td></tr><tr><td style="text-align:left;">:lang(language)</td><td style="text-align:left;">p:lang(it)</td><td style="text-align:left;">选择一个lang属性的起始值=&quot;it&quot;的所有p元素</td></tr><tr><td style="text-align:left;">:first-of-type</td><td style="text-align:left;">p:first-of-type</td><td style="text-align:left;">选择每个p元素是其父级的第一个p元素</td></tr><tr><td style="text-align:left;">:last-of-type</td><td style="text-align:left;">p:last-of-type</td><td style="text-align:left;">选择每个p元素是其父级的最后一个p元素</td></tr><tr><td style="text-align:left;">:only-of-type</td><td style="text-align:left;">p:only-of-type</td><td style="text-align:left;">选择每个p元素是其父级的唯一p元素</td></tr><tr><td style="text-align:left;">:only-child</td><td style="text-align:left;">p:only-child</td><td style="text-align:left;">选择每个p元素是其父级的唯一子元素</td></tr><tr><td style="text-align:left;">:nth-child(n)</td><td style="text-align:left;">p:nth-child(2)</td><td style="text-align:left;">选择每个p元素是其父级的第二个子元素</td></tr><tr><td style="text-align:left;">:nth-last-child(n)</td><td style="text-align:left;">p:nth-last-child(2)</td><td style="text-align:left;">选择每个p元素的是其父级的第二个子元素，从最后一个子项计数</td></tr><tr><td style="text-align:left;">:nth-of-type(n)</td><td style="text-align:left;">p:nth-of-type(2)</td><td style="text-align:left;">选择每个p元素是其父级的第二个p元素</td></tr><tr><td style="text-align:left;">:nth-last-of-type(n)</td><td style="text-align:left;">p:nth-last-of-type(2)</td><td style="text-align:left;">选择每个p元素的是其父级的第二个元素，从最后一个子项计数</td></tr><tr><td style="text-align:left;">:last-child</td><td style="text-align:left;">p:last-child</td><td style="text-align:left;">选择每个p元素是其父级的最后一个子项</td></tr><tr><td style="text-align:left;">:root</td><td style="text-align:left;">:root</td><td style="text-align:left;">选择文档的根元素</td></tr><tr><td style="text-align:left;">:empty</td><td style="text-align:left;">p:empty</td><td style="text-align:left;">选择每个没有任何子级的p元素(包括文本节点)</td></tr><tr><td style="text-align:left;">:target</td><td style="text-align:left;">#news:target</td><td style="text-align:left;">选择当前活动的#news元素(包含该锚名称的点击的url)</td></tr><tr><td style="text-align:left;">:enabled</td><td style="text-align:left;">input:enabled</td><td style="text-align:left;">选择每一个已启用的输入元素</td></tr><tr><td style="text-align:left;">:disabled</td><td style="text-align:left;">input:disabled</td><td style="text-align:left;">选择每个选中的输入元素</td></tr><tr><td style="text-align:left;">:not(selectot)</td><td style="text-align:left;">:not(p)</td><td style="text-align:left;">选择每个并非p元素的元素</td></tr><tr><td style="text-align:left;">::selection</td><td style="text-align:left;">::selection</td><td style="text-align:left;">匹配元素中被用户选中或处于高亮状态的部分</td></tr><tr><td style="text-align:left;">:out-of-range</td><td style="text-align:left;">:out-of-range</td><td style="text-align:left;">匹配值在指定区间之外的input元素</td></tr><tr><td style="text-align:left;">:in-range</td><td style="text-align:left;">:in-range</td><td style="text-align:left;">匹配值在指定区间之内的input元素</td></tr><tr><td style="text-align:left;">:read-write</td><td style="text-align:left;">:read-write</td><td style="text-align:left;">用户匹配可读及可写的元素</td></tr><tr><td style="text-align:left;">:read-only</td><td style="text-align:left;">:read-only</td><td style="text-align:left;">用户匹配设置&quot;readonly&quot;(只读)属性的元素</td></tr><tr><td style="text-align:left;">:optional</td><td style="text-align:left;">:optional</td><td style="text-align:left;">用于匹配可选的输入元素</td></tr><tr><td style="text-align:left;">:required</td><td style="text-align:left;">:required</td><td style="text-align:left;">用于匹配设置了&quot;required&quot;属性的元素</td></tr><tr><td style="text-align:left;">:valid</td><td style="text-align:left;">:valid</td><td style="text-align:left;">用户匹配输入值为合法的元素</td></tr><tr><td style="text-align:left;">:invalid</td><td style="text-align:left;">:invalid</td><td style="text-align:left;">用户匹配输入值为非法的元素</td></tr></tbody></table>',1),i=[n];function s(r,g){return e(),l("div",null,i)}const x=t(a,[["render",s],["__file","css-selector.html.vue"]]),o=JSON.parse(`{"path":"/web/css/css-selector.html","title":"CSS选择器","lang":"zh-CN","frontmatter":{"title":"CSS选择器","date":"2022-03-01T00:00:00.000Z","category":["CSS"],"tag":["CSS选择器"],"head":[["meta",{"name":"keywords","content":"CSS选择器  | coder-new"}],["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/css/css-selector.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"CSS选择器"}],["meta",{"property":"og:description","content":" "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:tag","content":"CSS选择器"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS选择器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]],"description":" "},"headers":[],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":3.41,"words":1022},"filePathRelative":"web/css/css-selector.md","localizedDate":"2022年3月1日","autoDesc":true}`);export{x as comp,o as data};
