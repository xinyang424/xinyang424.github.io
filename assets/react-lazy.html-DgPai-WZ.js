import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Ds4AiUcn.js";const e={},o=t(`<p>React.lazy函数能让你像渲染常规组件一样动态引入组件。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// before</span>
<span class="token keyword">import</span> OtherComponent <span class="token keyword">from</span> <span class="token string">&quot;./otherComponent&quot;</span><span class="token punctuation">;</span>


<span class="token comment">// after</span>
<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./OtherComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此代码将会在组件首次渲染的时候，自动导入包含<code>OtherComponent</code>组件的包。</p><p><code>React.lazy</code>接受一个函数，这个函数需要动态调用<code>import()</code>。它必须返回一个<code>Promise</code>，该Promise需要resolve一个<code>defalut</code>export的React组件。</p><p>然后应在<code>Suspense</code>组件中渲染lazy组件，如此使得我们可以使用在等待加载lazy组件时做优雅降级（如loading指示器等）。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>OtherComponent <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Suspense</code> 组件还可以包裹多个懒加载组件：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./OtherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> AnotherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./AnotherComponent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>OtherComponent <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>AnotherComponent <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[o];function c(l,r){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","react-lazy.html.vue"]]),k=JSON.parse(`{"path":"/web/react/react-lazy.html","title":"React.lazy","lang":"zh-CN","frontmatter":{"title":"React.lazy","date":"2022-07-05T00:00:00.000Z","category":["React"],"description":"React.lazy函数能让你像渲染常规组件一样动态引入组件。 此代码将会在组件首次渲染的时候，自动导入包含OtherComponent组件的包。 React.lazy接受一个函数，这个函数需要动态调用import()。它必须返回一个Promise，该Promise需要resolve一个defalutexport的React组件。 然后应在Suspen...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/react/react-lazy.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"React.lazy"}],["meta",{"property":"og:description","content":"React.lazy函数能让你像渲染常规组件一样动态引入组件。 此代码将会在组件首次渲染的时候，自动导入包含OtherComponent组件的包。 React.lazy接受一个函数，这个函数需要动态调用import()。它必须返回一个Promise，该Promise需要resolve一个defalutexport的React组件。 然后应在Suspen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-07-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React.lazy\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"web/react/react-lazy.md","localizedDate":"2022年7月5日","autoDesc":true}`);export{d as comp,k as data};
