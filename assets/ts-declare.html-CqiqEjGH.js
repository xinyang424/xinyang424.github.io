import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as t,e}from"./app-Ds4AiUcn.js";const a={},o=e(`<h2 id="如何将ts的声明文件都归纳到一个文件夹里面" tabindex="-1"><a class="header-anchor" href="#如何将ts的声明文件都归纳到一个文件夹里面"><span>如何将TS的声明文件都归纳到一个文件夹里面</span></a></h2><ol><li>在项目的根目录下新建一个<code>types</code>文件夹。</li><li>在<code>tsconfig.config.json</code>文件里或者<code>tsconfig.node.json</code>文件里：</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/tsconfig/tsconfig.node.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;vite.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vitest.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cypress.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;playwright.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;types/*&quot;</span>  <span class="token comment">//在这里加上types/*，types就是在根目录下新建的文件夹，types/*代表的意思是types文件夹下的所有文件。</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[o];function c(p,l){return s(),t("div",null,i)}const d=n(a,[["render",c],["__file","ts-declare.html.vue"]]),m=JSON.parse(`{"path":"/web/practical-skills/ts-declare.html","title":"TS声明文件","lang":"zh-CN","frontmatter":{"title":"TS声明文件","date":"2022-03-01T00:00:00.000Z","category":["实用技巧"],"description":" 如何将TS的声明文件都归纳到一个文件夹里面 在项目的根目录下新建一个types文件夹。 在tsconfig.config.json文件里或者tsconfig.node.json文件里： ","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/practical-skills/ts-declare.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"TS声明文件"}],["meta",{"property":"og:description","content":" 如何将TS的声明文件都归纳到一个文件夹里面 在项目的根目录下新建一个types文件夹。 在tsconfig.config.json文件里或者tsconfig.node.json文件里： "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TS声明文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"如何将TS的声明文件都归纳到一个文件夹里面","slug":"如何将ts的声明文件都归纳到一个文件夹里面","link":"#如何将ts的声明文件都归纳到一个文件夹里面","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"web/practical-skills/ts-declare.md","localizedDate":"2022年3月1日","autoDesc":true}`);export{d as comp,m as data};
