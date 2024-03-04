import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-gG6IvZ60.js";const t={},c=a(`<h2 id="文件配置" tabindex="-1"><a class="header-anchor" href="#文件配置"><span>文件配置</span></a></h2><p>此文件可以通过GitHub Actions添加文件。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 名字</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> auto<span class="token punctuation">-</span>build

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 当main分支有推送记录时触发以下操作</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token comment"># 运行在ubuntu上</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token comment"># 修改node内存大小，避免打包时候内存溢出</span>
      <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token string">&quot;--max_old_space_size=40960&quot;</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
        <span class="token comment"># 拉去代码到工作区</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

        <span class="token comment"># 准备node环境，版本为16.16.0</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js environment
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&quot;16.16.0&quot;</span>

        <span class="token comment"># 安装并打包</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install &amp; Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run build

      <span class="token comment"># 该操作是将打包后的文件放在当前仓库的分支下，分支名为production</span>
      <span class="token comment"># - name: Deploy</span>
      <span class="token comment">#   uses: JamesIves/github-pages-deploy-action@releases/v3</span>
      <span class="token comment">#   with:</span>
      <span class="token comment">#     ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}</span>
      <span class="token comment">#     BRANCH: production</span>
      <span class="token comment">#     FOLDER: src/.vuepress/dist</span>

      <span class="token comment"># 该操作是将打包后的文件放在另外一个仓库里，仓库名为cdmcs.github.io，分支为main</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2.2.0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># / 的左边是你的GitHub用户名，右边是你仓库名，这里我是将打包好的文件，放在另外一个仓库的。 </span>
          <span class="token key atrule">repo</span><span class="token punctuation">:</span> your_github_name/your_repo_name
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> main
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> src/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GH_PAT</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-access-token" tabindex="-1"><a class="header-anchor" href="#创建-access-token"><span>创建 ACCESS_TOKEN</span></a></h2><ol><li>进入GitHub，点击个人头像，选择<code>Settings</code>。</li><li>下滑找到<code>Developer Settings</code>。</li><li>依次选择<code>Personal access tokens</code>、<code>Tokens(classic)</code>。</li><li>在页面右边找到<code>Generate new token</code>，下拉的两个选项中，选择<code>Generate new token(classic)</code>。</li><li>在<code>Note</code>输入框中给你这个token命名，<code>Expiration</code>中设置token过期时间，可以选择<code>No expiration</code>永不过期。</li><li>勾选<code>repo</code>即可，自动就选中了所有<code>repo</code>的子项，然后点击<code>Generate token</code>生成token，记得复制生成的token，这个生成后是不方便进行二次查看的，二次查看好像相当于重新生成了。</li><li>然后刚刚上一节这个仓库里要用到这个token，就进入到这个仓库。</li><li>进入仓库后，点击<code>Settings</code>。</li><li>依次点击<code>Actions secrets and variables</code>、<code>Actions</code>，右边选择<code>New repository secret</code>按钮，<code>Name</code>就是为token取名，上一节我取名是<code>ACCESS_TOKEN</code>，这里我也取名为<code>ACCESS_TOKEN</code>，当然也可以是其它的，对应配置文件的<code>secrets.xxx</code>，xxx就是你的token名字，<code>Secret</code>就是刚刚复制的token，完事点击<code>Add secret</code>按钮。</li><li>至此，当配置文件和token都配置好后，只要推送代码，就应该看到此仓库会自动打包，自动打包进程可以进入对应仓库，然后点击<code>Actions</code>，黄色圆圈是正在打包，绿色圆圈是打包完成，红色圆圈是打包失败，可以点进入查看日志信息。</li><li>最后，如果打包后你要放在其它仓库，如上图配置文件注释，记得创建对应仓库哦，空仓库也行，一定要有，打包完成，会自动推送到这个仓库的。</li></ol>`,5),i=[c];function o(l,p){return s(),e("div",null,i)}const r=n(t,[["render",o],["__file","auto-build.html.vue"]]),m=JSON.parse('{"path":"/web/github/auto-build.html","title":"自动打包","lang":"zh-CN","frontmatter":{"title":"自动打包","date":"2023-03-01T00:00:00.000Z","category":["GitHub"],"tag":["推送代码自动打包"],"description":" 文件配置 此文件可以通过GitHub Actions添加文件。 创建 ACCESS_TOKEN 进入GitHub，点击个人头像，选择Settings。 下滑找到Developer Settings。 依次选择Personal access tokens、Tokens(classic)。 在页面右边找到Generate new token，下拉的两个选...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/github/auto-build.html"}],["meta",{"property":"og:site_name","content":"杨不旧"}],["meta",{"property":"og:title","content":"自动打包"}],["meta",{"property":"og:description","content":" 文件配置 此文件可以通过GitHub Actions添加文件。 创建 ACCESS_TOKEN 进入GitHub，点击个人头像，选择Settings。 下滑找到Developer Settings。 依次选择Personal access tokens、Tokens(classic)。 在页面右边找到Generate new token，下拉的两个选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨不旧"}],["meta",{"property":"article:tag","content":"推送代码自动打包"}],["meta",{"property":"article:published_time","content":"2023-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动打包\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨不旧\\",\\"url\\":\\"https://blog.xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"文件配置","slug":"文件配置","link":"#文件配置","children":[]},{"level":2,"title":"创建 ACCESS_TOKEN","slug":"创建-access-token","link":"#创建-access-token","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":700},"filePathRelative":"web/github/auto-build.md","localizedDate":"2023年3月1日","autoDesc":true}');export{r as comp,m as data};
