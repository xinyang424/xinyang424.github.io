import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-Ds4AiUcn.js";const t={},p=e(`<h2 id="预渲染" tabindex="-1"><a class="header-anchor" href="#预渲染"><span>预渲染</span></a></h2><h2 id="同构" tabindex="-1"><a class="header-anchor" href="#同构"><span>同构</span></a></h2><h2 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr"><span>SSR</span></a></h2><p>服务端渲染也可以解决首屏加载慢这个问题，因为服务端会把所有数据全部渲染完成再返回给客户端</p><p>ssr =&gt;请求-&gt;node-&gt;解析 -&gt;吐回给客户端(带请求数据)</p><p>但是有一个大问题，重要的是node层，高并发的解决</p><h2 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载"><span>路由懒加载</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/AboutView.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quicklink" tabindex="-1"><a class="header-anchor" href="#quicklink"><span>quicklink</span></a></h2><p>quicklink就是在浏览器空闲的时候去指定需要加载的数据,这个是谷歌开源的，</p><h2 id="使用gzip压缩" tabindex="-1"><a class="header-anchor" href="#使用gzip压缩"><span>使用Gzip压缩</span></a></h2><p>减少文件体积，加快首屏页面打开速度</p><p>前提是服务器那边得开启gzip</p><p>前端需要做的事：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i compression-webpack-plugin <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vue.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;compression-webpack-plugin&quot;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.html$|\\.css$|\\.jpg$|\\.jpeg$|\\.png</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 需要压缩的文件类型</span>
            <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩</span>
            <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否删除原文件</span>
            <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sourcemap" tabindex="-1"><a class="header-anchor" href="#sourcemap"><span>sourcemap</span></a></h2><p>打包的时候不生成sourcemap文件，进而减小包体积</p><h2 id="外链css、js文件" tabindex="-1"><a class="header-anchor" href="#外链css、js文件"><span>外链css、js文件</span></a></h2><p>很多时候我们在main.js中直接import一些ui库或者css文件啥的，以后可以在index.html，通过script外链引入，这样就不会通过我们的webpack打包。</p><h2 id="webpack-entry" tabindex="-1"><a class="header-anchor" href="#webpack-entry"><span>webpack entry</span></a></h2><p>这个就是将单页改成多页应用,比如一些组件中，vue.js vue-router等插件已经在某个页面使用了，然后给它缓存起来，下次就无需加载。</p><h2 id="使用cdn加速" tabindex="-1"><a class="header-anchor" href="#使用cdn加速"><span>使用cdn加速</span></a></h2><h2 id="打包文件分包-提取公共文件包" tabindex="-1"><a class="header-anchor" href="#打包文件分包-提取公共文件包"><span>打包文件分包，提取公共文件包</span></a></h2><h2 id="骨架屏" tabindex="-1"><a class="header-anchor" href="#骨架屏"><span>骨架屏</span></a></h2><p>骨架屏就是在进入项目的FP阶段，给它来一个类似轮廓的东西，当我们的页面加载完成之后就消失。</p><h2 id="loading" tabindex="-1"><a class="header-anchor" href="#loading"><span>loading</span></a></h2><p>首页加一个loading，在index.html里加一个loadingcss效果，当页面加载完成消失</p>`,29),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","how-to-solve-the-problem-of-loading-a-white-screen-on-the-homepage.html.vue"]]),h=JSON.parse(`{"path":"/web/vue3/how-to-solve-the-problem-of-loading-a-white-screen-on-the-homepage.html","title":"如何解决vue首页加载白屏问题","lang":"zh-CN","frontmatter":{"title":"如何解决vue首页加载白屏问题","date":"2020-01-10T00:00:00.000Z","category":["vue3"],"tag":["首页加载白屏"],"description":"预渲染 同构 SSR 服务端渲染也可以解决首屏加载慢这个问题，因为服务端会把所有数据全部渲染完成再返回给客户端 ssr =>请求->node->解析 ->吐回给客户端(带请求数据) 但是有一个大问题，重要的是node层，高并发的解决 路由懒加载 quicklink quicklink就是在浏览器空闲的时候去指定需要加载的数据,这个是谷歌开源的， 使用G...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/vue3/how-to-solve-the-problem-of-loading-a-white-screen-on-the-homepage.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"如何解决vue首页加载白屏问题"}],["meta",{"property":"og:description","content":"预渲染 同构 SSR 服务端渲染也可以解决首屏加载慢这个问题，因为服务端会把所有数据全部渲染完成再返回给客户端 ssr =>请求->node->解析 ->吐回给客户端(带请求数据) 但是有一个大问题，重要的是node层，高并发的解决 路由懒加载 quicklink quicklink就是在浏览器空闲的时候去指定需要加载的数据,这个是谷歌开源的， 使用G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:tag","content":"首页加载白屏"}],["meta",{"property":"article:published_time","content":"2020-01-10T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何解决vue首页加载白屏问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-10T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"预渲染","slug":"预渲染","link":"#预渲染","children":[]},{"level":2,"title":"同构","slug":"同构","link":"#同构","children":[]},{"level":2,"title":"SSR","slug":"ssr","link":"#ssr","children":[]},{"level":2,"title":"路由懒加载","slug":"路由懒加载","link":"#路由懒加载","children":[]},{"level":2,"title":"quicklink","slug":"quicklink","link":"#quicklink","children":[]},{"level":2,"title":"使用Gzip压缩","slug":"使用gzip压缩","link":"#使用gzip压缩","children":[]},{"level":2,"title":"sourcemap","slug":"sourcemap","link":"#sourcemap","children":[]},{"level":2,"title":"外链css、js文件","slug":"外链css、js文件","link":"#外链css、js文件","children":[]},{"level":2,"title":"webpack entry","slug":"webpack-entry","link":"#webpack-entry","children":[]},{"level":2,"title":"使用cdn加速","slug":"使用cdn加速","link":"#使用cdn加速","children":[]},{"level":2,"title":"打包文件分包，提取公共文件包","slug":"打包文件分包-提取公共文件包","link":"#打包文件分包-提取公共文件包","children":[]},{"level":2,"title":"骨架屏","slug":"骨架屏","link":"#骨架屏","children":[]},{"level":2,"title":"loading","slug":"loading","link":"#loading","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.65,"words":496},"filePathRelative":"web/vue3/how-to-solve-the-problem-of-loading-a-white-screen-on-the-homepage.md","localizedDate":"2020年1月10日","autoDesc":true}`);export{u as comp,h as data};
