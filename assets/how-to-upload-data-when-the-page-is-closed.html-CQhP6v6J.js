import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Ds4AiUcn.js";const e={},p=t(`<p>以“前端监控上传数据”业务场景，重点在页面关闭时，将监控数据上传到服务端的解决方案。</p><p>🌰：表单提交后，页面跳转时需要上报数据，主要涉及到4种方案：</p><ul><li>同步XMLHttpRequest</li><li>img.src</li><li>navigator.sendBeason</li><li>fetch keepalive</li></ul><h2 id="_1-同步xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#_1-同步xmlhttprequest"><span>1. 同步XMLHttpRequest</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//第三个参数false，表示当前请求是同步</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://api.coder-new.cn/test&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//发送成功后，页面已销毁，所以这里执行不了</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么同步XMLHttpRequest可以在页面关闭时上传数据？</p><p>同步请求阻止代码的执行，这会导致屏幕上出现“冻结”和无响应的用户体验。在新版的Chrome（版本号大于80）官方的公告已经不支持。</p><p>缺点：</p><ul><li>用户体验差，会阻塞页面切换</li><li>只有旧版的浏览器支持</li><li>无法读取response的返回值</li></ul><h2 id="_2-img-src" tabindex="-1"><a class="header-anchor" href="#_2-img-src"><span>2. img.src</span></a></h2><p>创建一个元素，并设置src，部分的浏览器，会延迟卸载当前页面，优先加载图像。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.coder-new.cn/test?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：</p><ul><li>数据传输不可靠，有可能浏览器卸载当前页面，直接杀掉图像请求。</li><li>只能发起Get请求。</li><li>数据大小请求限制。</li></ul><h2 id="_3-navigator-sendbeacon" tabindex="-1"><a class="header-anchor" href="#_3-navigator-sendbeacon"><span>3. navigator.sendBeacon</span></a></h2><p>通过HTTP POST请求，将少量数据使用异步的方式，发送到服务器。</p><p>发送数据：浏览器自动判断合适的时机进行发送。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reportEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&quot;https://api.coder-new.cn/test&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;visibilitychange&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>visiblityState <span class="token operator">===</span> <span class="token string">&quot;hidden&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">reportEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不会产生阻塞，影响当前页面的卸载。不影响下个新页面的加载，不存在性能问题。另外，数据传输可靠。</p><p>缺点：</p><ul><li>只能发起POST请求</li><li>无法自定义请求头参数</li><li>数据大小有限制（Chrome限制大小为64KB）</li><li>只能在window事件visibilitychange和beforeunload中使用，其它事件中回调，会丢失数据。</li></ul><h2 id="_4-fetch-keepalive" tabindex="-1"><a class="header-anchor" href="#_4-fetch-keepalive"><span>4. fetch keepalive</span></a></h2><div class="hint-container note"><p class="hint-container-title">MDN web docs的描述如下</p><p>The keepalive option can be used to allow the request to outlive the page. Fetch with the keepalive flag is a replacement for the <code>Navigator.sendBeacon()</code> API.</p></div><p>标记<code>keepalive</code>的fetch请求允许在页面卸载后执行：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&quot;https://api.coder-cn.cn/test&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span>performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","how-to-upload-data-when-the-page-is-closed.html.vue"]]),k=JSON.parse(`{"path":"/web/practical-skills/how-to-upload-data-when-the-page-is-closed.html","title":"在页面关闭时如何上传数据","lang":"zh-CN","frontmatter":{"title":"在页面关闭时如何上传数据","date":"2023-06-30T00:00:00.000Z","category":["实用技巧"],"description":"以“前端监控上传数据”业务场景，重点在页面关闭时，将监控数据上传到服务端的解决方案。 🌰：表单提交后，页面跳转时需要上报数据，主要涉及到4种方案： 同步XMLHttpRequest img.src navigator.sendBeason fetch keepalive 1. 同步XMLHttpRequest 为什么同步XMLHttpRequest可...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/practical-skills/how-to-upload-data-when-the-page-is-closed.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"在页面关闭时如何上传数据"}],["meta",{"property":"og:description","content":"以“前端监控上传数据”业务场景，重点在页面关闭时，将监控数据上传到服务端的解决方案。 🌰：表单提交后，页面跳转时需要上报数据，主要涉及到4种方案： 同步XMLHttpRequest img.src navigator.sendBeason fetch keepalive 1. 同步XMLHttpRequest 为什么同步XMLHttpRequest可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-06-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在页面关闭时如何上传数据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 同步XMLHttpRequest","slug":"_1-同步xmlhttprequest","link":"#_1-同步xmlhttprequest","children":[]},{"level":2,"title":"2. img.src","slug":"_2-img-src","link":"#_2-img-src","children":[]},{"level":2,"title":"3. navigator.sendBeacon","slug":"_3-navigator-sendbeacon","link":"#_3-navigator-sendbeacon","children":[]},{"level":2,"title":"4. fetch keepalive","slug":"_4-fetch-keepalive","link":"#_4-fetch-keepalive","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"web/practical-skills/how-to-upload-data-when-the-page-is-closed.md","localizedDate":"2023年6月30日","autoDesc":true}`);export{d as comp,k as data};
