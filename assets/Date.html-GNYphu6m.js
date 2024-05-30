import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as s}from"./app-Ds4AiUcn.js";const e={},l=s(`<h2 id="new-date" tabindex="-1"><a class="header-anchor" href="#new-date"><span>new Date()</span></a></h2><p>要创建日期对象，就使用 new 操作符来调用 Date 构造函数：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;December 17, 1995 03:24:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;1995-12-17T03:24:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1995</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> birthday <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1995</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在不给 Date 构造函数传参数的情况下，创建的对象将保存当前日期和时间。</li><li>要基于其他日期和时间创建日期对象，必须传入其毫秒表示（UNIX 纪元 1970 年 1 月 1 日午夜之后的毫秒数）。 ECMAScript为此提供了两个辅助方法：Date.parse()和 Date.UTC()。</li></ul><h2 id="date-parse" tabindex="-1"><a class="header-anchor" href="#date-parse"><span>Date.parse()</span></a></h2><p>Date.parse()方法接收一个表示日期的字符串参数，格式为：</p><ul><li>“月/日/年”，如&quot;5/23/2019&quot;；</li><li>“月名 日, 年”，如&quot;May 23, 2019&quot;；</li><li>“周几 月名 日 年 时:分:秒 时区”，如&quot;Tue May 23 2019 00:00:00 GMT-0700&quot;；</li><li>ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00（只适用于兼容 ES5 的实现）。</li></ul><div class="hint-container tip"><p class="hint-container-title">注意事项</p><p>不同的浏览器对 Date 类型的实现有很多问题。比如，很多浏览器会选择用当前日期替代越界的日期，因此有些浏览器会将&quot;January 32, 2019&quot;解释为&quot;February 1,2019&quot;。Opera 则会插入当前月的当前日，返回&quot;January 当前日, 2019&quot;。就是说，如果是在 9 月 21 日运行代码，会返回&quot;January 21, 2019&quot;。</p></div><h2 id="date-utc" tabindex="-1"><a class="header-anchor" href="#date-utc"><span>Date.UTC()</span></a></h2><p><code>Date.UTC()</code>方法也返回日期的毫秒表示，但使用的是跟 <code>Date.parse()</code>不同的信息来生成这个值。<br> 传给 Date.UTC()的参数是年、零起点月数（1 月是 0，2 月是 1，以此类推）、日（1~31）、时（0~23）、分、秒和毫秒。<br> 这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他参数的默认值都是 0。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// GMT 时间 2000 年 1 月 1 日零点</span>
<span class="token keyword">let</span> y2k <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token constant">UTC</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒</span>
<span class="token keyword">let</span> allFives <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token constant">UTC</span><span class="token punctuation">(</span><span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日期传参需要注意的是，月份是从0开始的，小时是24小时制。</p><h2 id="date-now" tabindex="-1"><a class="header-anchor" href="#date-now"><span>Date.now()</span></a></h2><p>Date.now()方法返回表示方法执行时日期和时间的毫秒数。这个方法可以方便地用在代码分析中：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 起始时间</span>
<span class="token keyword">let</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 调用函数</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 结束时间</span>
<span class="token keyword">let</span> stop <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
result <span class="token operator">=</span> stop <span class="token operator">-</span> start<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tolocalestring" tabindex="-1"><a class="header-anchor" href="#tolocalestring"><span>toLocaleString()</span></a></h2><p>Date 类型的 <code>toLocaleString()</code>方法返回与浏览器运行的本地环境一致的日期和时间。<br><strong>这通常意味着格式中包含针对时间的 AM（上午）或 PM（下午），但不包含时区信息（具体格式可能因浏览器而不同）。</strong></p><h2 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring"><span>toString()</span></a></h2><p>toString()方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（0~23）表示的。</p><h2 id="valueof-可用于比较两日期前后" tabindex="-1"><a class="header-anchor" href="#valueof-可用于比较两日期前后"><span>valueOf() - 可用于比较两日期前后</span></a></h2><p>Date 类型的 valueOf()方法根本就不返回字符串，这个方法被重写后返回的是日期的毫秒表示。因此，操作符（如小于号和大于号）可以直接使用它返回的值。比如下面的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2019 年 1 月 1 日 Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)  1546272000000</span>
<span class="token keyword">let</span> date2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2019 年 2 月 1 日 Fri Feb 01 2019 00:00:00 GMT+0800 (中国标准时间)  1548950400000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date1 <span class="token operator">&lt;</span> date2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>date1 <span class="token operator">&gt;</span> date2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日期格式化方法" tabindex="-1"><a class="header-anchor" href="#日期格式化方法"><span>日期格式化方法</span></a></h2><p>Date 类型有几个专门用于格式化日期的方法，它们都会返回字符串：</p><ul><li><code>toDateString()</code>显示日期中的周几、月、日、年（格式特定于实现）；</li><li><code>toTimeString()</code>显示日期中的时、分、秒和时区（格式特定于实现）；</li><li><code>toLocaleDateString()</code>显示日期中的周几、月、日、年（格式特定于实现和地区）；</li><li><code>toLocaleTimeString()</code>显示日期中的时、分、秒（格式特定于实现和地区）；</li><li><code>toUTCString()</code>显示完整的 UTC 日期（格式特定于实现）。</li></ul><p>注：这些方法的输出与 toLocaleString()和 toString()一样，会因浏览器而异。因此不能用于在用户界面上一致地显示日期。</p><h2 id="日期-时间组件方法" tabindex="-1"><a class="header-anchor" href="#日期-时间组件方法"><span>日期/时间组件方法</span></a></h2><p>Date 类型剩下的方法（见下表）直接涉及取得或设置日期值的特定部分。注意表中“UTC 日期”，指的是没有时区偏移（将日期转换为 GMT）时的日期。</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">getTime()</td><td style="text-align:left;">返回日期的毫秒表示；与 valueOf()相同</td></tr><tr><td style="text-align:left;">setTime(milliseconds)</td><td style="text-align:left;">设置日期的毫秒表示，从而修改整个日期</td></tr><tr><td style="text-align:left;">getFullYear()</td><td style="text-align:left;">返回 4 位数年（即 2019 而不是 19）</td></tr><tr><td style="text-align:left;">getUTCFullYear()</td><td style="text-align:left;">返回 UTC 日期的 4 位数年</td></tr><tr><td style="text-align:left;">setFullYear(year)</td><td style="text-align:left;">设置日期的年（year 必须是 4 位数）</td></tr><tr><td style="text-align:left;">setUTCFullYear(year)</td><td style="text-align:left;">设置 UTC 日期的年（year 必须是 4 位数）</td></tr><tr><td style="text-align:left;">getMonth()</td><td style="text-align:left;">返回日期的月（0 表示 1 月，11 表示 12 月）</td></tr><tr><td style="text-align:left;">getUTCMonth()</td><td style="text-align:left;">返回 UTC 日期的月（0 表示 1 月，11 表示 12 月）</td></tr><tr><td style="text-align:left;">setMonth(month)</td><td style="text-align:left;">设置日期的月（month 为大于 0 的数值，大于 11 加年）</td></tr><tr><td style="text-align:left;">setUTCMonth(month)</td><td style="text-align:left;">设置 UTC 日期的月（month 为大于 0 的数值，大于 11 加年）</td></tr><tr><td style="text-align:left;">getDate()</td><td style="text-align:left;">返回日期中的日（1~31）</td></tr><tr><td style="text-align:left;">getUTCDate()</td><td style="text-align:left;">返回 UTC 日期中的日（1~31）</td></tr><tr><td style="text-align:left;">setDate(date)</td><td style="text-align:left;">设置日期中的日（如果 date 大于该月天数，则加月）</td></tr><tr><td style="text-align:left;">setUTCDate(date)</td><td style="text-align:left;">设置 UTC 日期中的日（如果 date 大于该月天数，则加月）</td></tr><tr><td style="text-align:left;">getDay()</td><td style="text-align:left;">返回日期中表示周几的数值（0 表示周日，6 表示周六）</td></tr><tr><td style="text-align:left;">getUTCDay()</td><td style="text-align:left;">返回 UTC 日期中表示周几的数值（0 表示周日，6 表示周六）</td></tr><tr><td style="text-align:left;">getHours()</td><td style="text-align:left;">返回日期中的时（0~23）</td></tr><tr><td style="text-align:left;">getUTCHours()</td><td style="text-align:left;">返回 UTC 日期中的时（0~23）</td></tr><tr><td style="text-align:left;">setHours(hours)</td><td style="text-align:left;">设置日期中的时（如果 hours 大于 23，则加日）</td></tr><tr><td style="text-align:left;">setUTCHours(hours)</td><td style="text-align:left;">设置 UTC 日期中的时（如果 hours 大于 23，则加日）</td></tr><tr><td style="text-align:left;">getMinutes()</td><td style="text-align:left;">返回日期中的分（0~59）</td></tr><tr><td style="text-align:left;">getUTCMinutes()</td><td style="text-align:left;">返回 UTC 日期中的分（0~59）</td></tr><tr><td style="text-align:left;">setMinutes(minutes)</td><td style="text-align:left;">设置日期中的分（如果 minutes 大于 59，则加时）</td></tr><tr><td style="text-align:left;">setUTCMinutes(minutes)</td><td style="text-align:left;">设置 UTC 日期中的分（如果 minutes 大于 59，则加时）</td></tr><tr><td style="text-align:left;">getSeconds()</td><td style="text-align:left;">返回日期中的秒（0~59）</td></tr><tr><td style="text-align:left;">getUTCSeconds()</td><td style="text-align:left;">返回 UTC 日期中的秒（0~59）</td></tr><tr><td style="text-align:left;">setSeconds(seconds)</td><td style="text-align:left;">设置日期中的秒（如果 seconds 大于 59，则加分）</td></tr><tr><td style="text-align:left;">setUTCSeconds(seconds)</td><td style="text-align:left;">设置 UTC 日期中的秒（如果 seconds 大于 59，则加分）</td></tr><tr><td style="text-align:left;">getMilliseconds()</td><td style="text-align:left;">返回日期中的毫秒</td></tr><tr><td style="text-align:left;">getUTCMilliseconds()</td><td style="text-align:left;">返回 UTC 日期中的毫秒</td></tr><tr><td style="text-align:left;">setMilliseconds(milliseconds)</td><td style="text-align:left;">设置日期中的毫秒</td></tr><tr><td style="text-align:left;">setUTCMilliseconds(milliseconds)</td><td style="text-align:left;">设置 UTC 日期中的毫秒</td></tr><tr><td style="text-align:left;">getTimezoneOffset()</td><td style="text-align:left;">返回以分钟计的 UTC 与本地时区的偏移量（如美国 EST 即“东部标准时间” 返回 300，进入夏令时的地区可能有所差异）</td></tr></tbody></table><h2 id="utc和gmt" tabindex="-1"><a class="header-anchor" href="#utc和gmt"><span>UTC和GMT</span></a></h2><p>区分UTC格式和GMT格式的日期</p><p><code>Tue Feb 01 2022 00:00:00 GMT+0800 (中国标准时间)</code>——GMT格式时间</p><p>UTC格式日期比较好理解，月份从0开始，小时是二十四小时制，如<code>new Date(2005, 4, 5, 17, 55, 55)</code>，2005年，5月5日，17点55分55秒</p>`,34),p=[l];function o(c,i){return n(),a("div",null,p)}const u=t(e,[["render",o],["__file","Date.html.vue"]]),k=JSON.parse(`{"path":"/web/javascript/Date.html","title":"Date","lang":"zh-CN","frontmatter":{"title":"Date","date":"2022-02-01T00:00:00.000Z","category":["javascript"],"description":" new Date() 要创建日期对象，就使用 new 操作符来调用 Date 构造函数： 在不给 Date 构造函数传参数的情况下，创建的对象将保存当前日期和时间。 要基于其他日期和时间创建日期对象，必须传入其毫秒表示（UNIX 纪元 1970 年 1 月 1 日午夜之后的毫秒数）。 ECMAScript为此提供了两个辅助方法：Date.parse(...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/javascript/Date.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"Date"}],["meta",{"property":"og:description","content":" new Date() 要创建日期对象，就使用 new 操作符来调用 Date 构造函数： 在不给 Date 构造函数传参数的情况下，创建的对象将保存当前日期和时间。 要基于其他日期和时间创建日期对象，必须传入其毫秒表示（UNIX 纪元 1970 年 1 月 1 日午夜之后的毫秒数）。 ECMAScript为此提供了两个辅助方法：Date.parse(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-02-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Date\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"new Date()","slug":"new-date","link":"#new-date","children":[]},{"level":2,"title":"Date.parse()","slug":"date-parse","link":"#date-parse","children":[]},{"level":2,"title":"Date.UTC()","slug":"date-utc","link":"#date-utc","children":[]},{"level":2,"title":"Date.now()","slug":"date-now","link":"#date-now","children":[]},{"level":2,"title":"toLocaleString()","slug":"tolocalestring","link":"#tolocalestring","children":[]},{"level":2,"title":"toString()","slug":"tostring","link":"#tostring","children":[]},{"level":2,"title":"valueOf() - 可用于比较两日期前后","slug":"valueof-可用于比较两日期前后","link":"#valueof-可用于比较两日期前后","children":[]},{"level":2,"title":"日期格式化方法","slug":"日期格式化方法","link":"#日期格式化方法","children":[]},{"level":2,"title":"日期/时间组件方法","slug":"日期-时间组件方法","link":"#日期-时间组件方法","children":[]},{"level":2,"title":"UTC和GMT","slug":"utc和gmt","link":"#utc和gmt","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":5.7,"words":1709},"filePathRelative":"web/javascript/Date.md","localizedDate":"2022年2月1日","autoDesc":true}`);export{u as comp,k as data};
