import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as t,a as n,d as e,b as r,e as d}from"./app-Ds4AiUcn.js";const o="/assets/nvm-release-D39KCoPF.png",c="/assets/how-to-use-admin-BkPq1NYx.png",m={},v=n("h2",{id:"nvm是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvm是什么"},[n("span",null,"nvm是什么")])],-1),p=n("p",null,"简单来说，nvm就是node的版本管理工具，通过nvm可以帮助用户在电脑上安装多版本的node。",-1),h=n("h2",{id:"nvm下载与安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvm下载与安装"},[n("span",null,"nvm下载与安装")])],-1),u=n("li",null,"安装之前需要先删除已经安装好的node",-1),g={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"选择如下如下载的即可：",-1),x=d('<figure><img src="'+o+`" alt="nvm-release" tabindex="0" loading="lazy"><figcaption>nvm-release</figcaption></figure><ol><li>安装过程没有太大难度，也可以选择nvm的安装路径，可以不用安装在C盘。</li></ol><h2 id="nvm配置" tabindex="-1"><a class="header-anchor" href="#nvm配置"><span>nvm配置</span></a></h2><p>nvm安装好后并不代表你电脑已经有node了，需要什么版本的node就对应安装相应版本的。 不过在下载node之前要配置基本nvm的镜像源地址，否则会下载不了、出现网络错误。</p><h3 id="配置镜像源" tabindex="-1"><a class="header-anchor" href="#配置镜像源"><span>配置镜像源</span></a></h3><ol><li>键盘上同时按下win + r，然后输入cmd后，再按下enter回车。</li><li>在打开的cmd窗口分别输入以下一行的命令后回车。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm常用命令合集" tabindex="-1"><a class="header-anchor" href="#nvm常用命令合集"><span>nvm常用命令合集</span></a></h2><p>以下命令还是在cmd窗口命令中运行，具体怎么打开看上面。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm list                   //查看当前本机已安装的node版本
nvm arch                   //查看当前本机是32位还是64位
nvm <span class="token function">install</span> xx.xx.xx       //安装指定版本的node
nvm <span class="token function">install</span> latest         //安装最新版的node
nvm uninstall xx.xx.xx     //卸载指定版本的node
nvm use xx.xx.xx          //指定当前使用node的版本，这一步要以管理员身份运行cmd，否则会报错
nvm root                  //查看本机安装nvm的路径
nvm list available        //windows查看可安装node版本命令
nvm ls-remote             //mac查看可安装node版本命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何以管理员身份运行cmd" tabindex="-1"><a class="header-anchor" href="#如何以管理员身份运行cmd"><span>如何以管理员身份运行cmd</span></a></h2><ol><li>点击搜索按钮（桌面底部任务栏）</li><li>输入cmd，选择上面的命令提示符，右键选择点击以以管理员身份运行，如下图</li></ol><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改npm镜像源" tabindex="-1"><a class="header-anchor" href="#修改npm镜像源"><span>修改npm镜像源</span></a></h2><p>之所以修改npm镜像源，本质上是为了加快下载速度，下载node中的npm默认镜像源是国外的，我们可以修改为国内的镜像源以加快访问速度</p><h3 id="设置淘宝镜像源" tabindex="-1"><a class="header-anchor" href="#设置淘宝镜像源"><span>设置淘宝镜像源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>//设置淘宝镜像源
npx nrm use taobao
//or
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重置为官方镜像源" tabindex="-1"><a class="header-anchor" href="#重置为官方镜像源"><span>重置为官方镜像源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>//重置为官方源
npx nrm use <span class="token function">npm</span>   
//or   
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看当前镜像源地址" tabindex="-1"><a class="header-anchor" href="#查看当前镜像源地址"><span>查看当前镜像源地址</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>//查看当前镜像源地址
<span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可选镜像源" tabindex="-1"><a class="header-anchor" href="#可选镜像源"><span>可选镜像源</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>// 腾讯镜像
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://mirrors.cloud.tencent.com/npm/

// 淘宝镜像 <span class="token punctuation">(</span>官网 https://npmmirror.com/<span class="token punctuation">)</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/

// 华为镜像
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry  https://mirrors.huaweicloud.com/repository/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在mac可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#在mac可能遇到的问题"><span>在mac可能遇到的问题</span></a></h2><p>mac电脑在终端切换node版本后，关闭终端再次打开终端发现还原回去之前的版本了</p><p>解决办法：修改默认启用的版本号</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm <span class="token builtin class-name">alias</span> default <span class="token number">16.16</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27);function f(_,k){const a=i("ExternalLinkIcon");return l(),t("div",null,[v,p,h,n("ol",null,[u,n("li",null,[e("windows下载地址："),n("a",g,[e("https://github.com/coreybutler/nvm-windows/releases"),r(a)])]),b]),x])}const N=s(m,[["render",f],["__file","nvm.html.vue"]]),B=JSON.parse(`{"path":"/web/version-management-tools/nvm.html","title":"nvm","lang":"zh-CN","frontmatter":{"title":"nvm","date":"2022-03-01T00:00:00.000Z","category":["版本管理工具"],"tag":["node版本管理工具","windows&mac"],"description":"nvm是什么 简单来说，nvm就是node的版本管理工具，通过nvm可以帮助用户在电脑上安装多版本的node。 nvm下载与安装 安装之前需要先删除已经安装好的node windows下载地址：https://github.com/coreybutler/nvm-windows/releases 选择如下如下载的即可： nvm-releasenvm-r...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/version-management-tools/nvm.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"nvm"}],["meta",{"property":"og:description","content":"nvm是什么 简单来说，nvm就是node的版本管理工具，通过nvm可以帮助用户在电脑上安装多版本的node。 nvm下载与安装 安装之前需要先删除已经安装好的node windows下载地址：https://github.com/coreybutler/nvm-windows/releases 选择如下如下载的即可： nvm-releasenvm-r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:tag","content":"node版本管理工具"}],["meta",{"property":"article:tag","content":"windows&mac"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nvm\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"nvm是什么","slug":"nvm是什么","link":"#nvm是什么","children":[]},{"level":2,"title":"nvm下载与安装","slug":"nvm下载与安装","link":"#nvm下载与安装","children":[]},{"level":2,"title":"nvm配置","slug":"nvm配置","link":"#nvm配置","children":[{"level":3,"title":"配置镜像源","slug":"配置镜像源","link":"#配置镜像源","children":[]}]},{"level":2,"title":"nvm常用命令合集","slug":"nvm常用命令合集","link":"#nvm常用命令合集","children":[]},{"level":2,"title":"如何以管理员身份运行cmd","slug":"如何以管理员身份运行cmd","link":"#如何以管理员身份运行cmd","children":[]},{"level":2,"title":"修改npm镜像源","slug":"修改npm镜像源","link":"#修改npm镜像源","children":[{"level":3,"title":"设置淘宝镜像源","slug":"设置淘宝镜像源","link":"#设置淘宝镜像源","children":[]},{"level":3,"title":"重置为官方镜像源","slug":"重置为官方镜像源","link":"#重置为官方镜像源","children":[]},{"level":3,"title":"查看当前镜像源地址","slug":"查看当前镜像源地址","link":"#查看当前镜像源地址","children":[]},{"level":3,"title":"可选镜像源","slug":"可选镜像源","link":"#可选镜像源","children":[]}]},{"level":2,"title":"在mac可能遇到的问题","slug":"在mac可能遇到的问题","link":"#在mac可能遇到的问题","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.5,"words":750},"filePathRelative":"web/version-management-tools/nvm.md","localizedDate":"2022年3月1日","autoDesc":true}`);export{N as comp,B as data};
