import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as p,a as n,d as s,b as c,e as a}from"./app-Ds4AiUcn.js";const l={},r=a(`<h2 id="iife" tabindex="-1"><a class="header-anchor" href="#iife"><span>IIFE</span></a></h2><p>自执行函数，英文全称：<code>immediately invoked function expressions</code>。</p><p>符合下面格式的代码其实都算是 IIFE：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//....</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>适用场景</strong> 浏览器中带有<code>&lt;script&gt;</code>标签包裹的代码块，简单来说就是普通的业务应用都可，没啥兼容问题。</p><p><strong>优点</strong> 函数作用域避免了全局变量的污染</p>`,6),d={href:"http://hemin.cn/jq/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="cjs" tabindex="-1"><a class="header-anchor" href="#cjs"><span>CJS</span></a></h2><p>真正的模块化解决方案，最早从 Node 应用开始，英文全称：<code>CommonJS</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>EventEmitter<span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键词</strong>：<mark>module</mark>、<mark>exports</mark>、<mark>global</mark>、<mark>require</mark>。</p><p><strong>特点</strong></p><ul><li>模块加载require就是代码执行</li><li>所有代码运行在模块作用域中，不污染全局</li><li>模块可以多次加载，但是只在第一次加载运行，后面是缓存</li></ul><p><strong>使用场景</strong></p><ul><li>Nodejs，浏览器端需要用其他打包工具支持</li><li>如果在你的package.json下定义一个main的字段，值是文件的路径，那么require就会按这个优先加载，不然就是根目录下的index.js或index.node</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">//package.json</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;lib&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span><span class="token string">&quot;./lib/index.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用注意点</strong><code>export.xxx</code>不能和<code>module.exports</code>一起使用（推荐只用<code>module.exports</code>，不用<code>export.xxx</code>）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">showTips</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">&quot;TinssonTai&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码的showTips是无法引入的，因为在每个模块里，exports就是module.exports的引用，类似头部有这样的代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="amd" tabindex="-1"><a class="header-anchor" href="#amd"><span>AMD</span></a></h2><p>异步模块声明，英文全称：<code>Asynchronous module definition</code>。</p><p>amd可以理解是CommonJs在浏览器端的解决方案，cjs在服务端是同步加载依赖代码的，因为服务端都是本地磁盘读取文件，没有网络开销，速度很快，浏览器端要是也这么干，很有可能因为依赖在远程，因网络时间开销而导致出现“假死”，所以浏览器端采用异步加载模块的方式。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//定义模块</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span>moduleDeps<span class="token punctuation">]</span><span class="token punctuation">,</span> moduleFunc<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//引用模块</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span>module<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键词</strong>：<code>require</code>、<code>define</code></p><p>require的第一个参数是需要异步加载的依赖列表，第二个是模块异步加载后的执行代码，define第一个参数是模块的依赖模块，第二个是模块代码。</p><p><strong>优点</strong>：</p><ul><li>体积更小，代码按需加载</li><li>不堵塞js线程运行</li></ul><h2 id="umd" tabindex="-1"><a class="header-anchor" href="#umd"><span>UMD</span></a></h2><p>联合模块定义，英文全称：<code>Universal Module Definition</code>。</p><p>准确来说并不是一个独立的模块标准，而是集合了cjs，amd，iife等一体的打包模式，会自动判断当前可用环境。</p><p>优点：</p><ul><li>一套代码，多端使用，模块化兼容性好。</li><li>一般会在webpack中成为备用模块</li></ul><h2 id="esm" tabindex="-1"><a class="header-anchor" href="#esm"><span>ESM</span></a></h2><p>ES6标准中的模块规则，一统浏览器和服务端标准的解决方案。英文全称：<code>ES6 Module</code>。</p><p><strong>关键字</strong>：<code>import</code>、<code>export</code></p><p><strong>适用场景</strong>： 结合其它打包工具（webpack）使用或浏览器<code>&lt;script type=&quot;module&quot;&gt;</code>标签包裹。</p><p><strong>特点</strong>：</p><ul><li>浏览器端会异步加载，延续AMD的优势，但利用了浏览器原生的解析能力，代码体积更小。</li><li>模块内自动采用严格模式。</li><li>模块中的this指向并不是window或global，而是undefined</li></ul><p>上文有提到<code>cjs</code>一般会优先放<code>package.json</code>的<code>main</code>字段里，而这里的<code>esm</code>入口文件会优先放在<code>module</code>字段里。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span><span class="token string">&quot;./lib/index.js&quot;</span><span class="token punctuation">,</span><span class="token comment">//cjs</span>
    <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span><span class="token string">&quot;./lib/index.mjs&quot;</span><span class="token comment">//esm</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>esm和cjs的差异：</p><ul><li>cjs 模块输出的是一个值的拷贝（浅拷贝），esm输出的是值的引用。</li><li>cjs 模块是运行时加载，esm是编译时输出接口。</li><li>cjs同步加载模块，esm异步加载，有一个独立的模块依赖的解析阶段。</li></ul>`,36);function m(k,v){const e=o("ExternalLinkIcon");return i(),p("div",null,[r,n("p",null,[s("iife 也算是比较早期的模块化方案了，只需对外暴露一个全局变量，最知名的就是"),n("a",d,[s("jQuery"),c(e)])]),u])}const h=t(l,[["render",m],["__file","iife-cjs-amd-umd-esm.html.vue"]]),j=JSON.parse(`{"path":"/web/javascript/iife-cjs-amd-umd-esm.html","title":"IIFE CJS AMD UMD ESM","lang":"zh-CN","frontmatter":{"title":"IIFE CJS AMD UMD ESM","date":"2023-02-16T00:00:00.000Z","category":["javascript"],"description":" IIFE 自执行函数，英文全称：immediately invoked function expressions。 符合下面格式的代码其实都算是 IIFE： 适用场景 浏览器中带有<script>标签包裹的代码块，简单来说就是普通的业务应用都可，没啥兼容问题。 优点 函数作用域避免了全局变量的污染 iife 也算是比较早期的模块化方案了，只需对外暴露...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/javascript/iife-cjs-amd-umd-esm.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"IIFE CJS AMD UMD ESM"}],["meta",{"property":"og:description","content":" IIFE 自执行函数，英文全称：immediately invoked function expressions。 符合下面格式的代码其实都算是 IIFE： 适用场景 浏览器中带有<script>标签包裹的代码块，简单来说就是普通的业务应用都可，没啥兼容问题。 优点 函数作用域避免了全局变量的污染 iife 也算是比较早期的模块化方案了，只需对外暴露..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-02-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IIFE CJS AMD UMD ESM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"IIFE","slug":"iife","link":"#iife","children":[]},{"level":2,"title":"CJS","slug":"cjs","link":"#cjs","children":[]},{"level":2,"title":"AMD","slug":"amd","link":"#amd","children":[]},{"level":2,"title":"UMD","slug":"umd","link":"#umd","children":[]},{"level":2,"title":"ESM","slug":"esm","link":"#esm","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":3.11,"words":932},"filePathRelative":"web/javascript/iife-cjs-amd-umd-esm.md","localizedDate":"2023年2月16日","autoDesc":true}`);export{h as comp,j as data};
