import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Ds4AiUcn.js";const e={},p=t(`<h2 id="基于-nodejs-express-实践" tabindex="-1"><a class="header-anchor" href="#基于-nodejs-express-实践"><span>基于 Nodejs + Express 实践</span></a></h2><p>自行封装 cors：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 设置响应头，允许所有网站都可以请求，当然也可以进行白名单配置，运行哪些可以通过访问，其它不可通过访问 */</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 设置我们的请求方式可以有以下这些 */</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GET, POST, PUT, DELETE,OPTIONS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 设置响应头可以有以下这些 */</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 放行 */</span>
    req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;OPTIONS&#39;</span> <span class="token operator">?</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用的时候一定要在所有请求之前调用：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./utils/cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> loginRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routers/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建express服务 http</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>cors<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//解决跨域问题</span>

<span class="token comment">// 使用路由</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> loginRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","cors.html.vue"]]),d=JSON.parse(`{"path":"/back/cors.html","title":"CORS","lang":"zh-CN","frontmatter":{"title":"CORS","date":"2023-05-20T00:00:00.000Z","icon":"cors","order":3,"description":"基于 Nodejs + Express 实践 自行封装 cors： 使用的时候一定要在所有请求之前调用： ","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/back/cors.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"CORS"}],["meta",{"property":"og:description","content":"基于 Nodejs + Express 实践 自行封装 cors： 使用的时候一定要在所有请求之前调用： "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-05-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CORS\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"基于 Nodejs + Express 实践","slug":"基于-nodejs-express-实践","link":"#基于-nodejs-express-实践","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":213},"filePathRelative":"back/cors.md","localizedDate":"2023年5月20日","autoDesc":true}`);export{k as comp,d as data};
