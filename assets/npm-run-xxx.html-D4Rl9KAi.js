import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as c,c as n,e as o}from"./app-Ds4AiUcn.js";const d={},i=o('<p>例如输入<code>npm run serve</code>回车，这时候会在我们在<code>package.json</code>文件下执行<code>script</code>属性的 <code>vue-cli-service serve</code>这条指令，那为什么不能执行<code>vue-cli-service serve</code>这条指令呢？</p><p>当我们直接运行<code>vue-cli-service serve</code>这条指令时，就会提示报错信息：<code>zsh:command not found:vue-cli-service</code>。</p><p>此时问题：当我们执行<code>npm run serve</code>的时候实际执行的是<code>vue-cli-service serve</code>，但是直接执行 <code>vue-cli-service serve</code>就会报错。原因是当我们执行<code>npm install</code>的时候下载了。 <code>node_modules</code>文件夹下的<code>.bin</code>文件下，比如<code>vue-cli-service</code>右侧有个箭头，这实际就是此文件的软链接脚本文件。 当我们执行<code>npm run serve</code>的时候，真实执行的是<code>./node_moudes/.bin/vue-cli-service serve</code>或<code>node_moudes/.bin/vue-cli-service serve</code>这条指令。如果我们直接执行<code>vue-cli-service serve</code>这条执行，系统会默认从系统的环境变量从去查找，而不是在当前目录下去执行<code>node_modules</code>文件夹的<code>.bin</code>文件夹下的<code>vue-cli-service</code>去执行<code>serve</code>，也就是说为什么直接运行会报错的原因是：直接运行默认是从系统环境变量里去找的，而不是在当前项目的根目录下的<code>node_modules</code>的<code>.bin</code>文件夹去执行对应的软链接。 <code>npm run </code>的时候，会把<code>node_modules</code>下的<code>.bin</code>文件夹的子目录暂时加入到PATH变量，执行结束后，再将PATH变量恢复原样。</p><p>软链接脚本文件指向哪里？ <code>vue-cli-service</code>这条指令在<code>package-lock.json</code>可以找到对应关系<code>bin/vue-cli-service.js</code>，这个是对应模块下的<code>bin</code>文件夹，此文件夹下有js文件 因此串联起来关系就是，当我们执行<code>npm run xxx</code>的时候，首先是从<code>node_modules</code>文件夹下的<code>.bin</code>文件夹下查找对应的软链接，在<code>package-lock.json</code>的文件夹下可以找到这条指令实际执行的js文件（大多数是<code>bin</code>文件夹下）</p><h3 id="cmd窗口可执行命令的逻辑" tabindex="-1"><a class="header-anchor" href="#cmd窗口可执行命令的逻辑"><span>cmd窗口可执行命令的逻辑？</span></a></h3><ol><li>它首先会判断这个文件名是否包含绝对路径，如果包含绝对路径，那它只会在绝对路径中寻找。此时如果没找到，会直接报错。</li><li>如果不包含绝对路径，会在当前路径下寻找。</li><li>如果没有找到，就会在操作系统的内置命令中找，如：<code>cd</code>、<code>dir</code>、<code>ls</code>、<code>cls</code>等</li><li>如果还没找到，就会去环境变量Path中记载的目录中找到。如果没找到，cmd就会报错。</li></ol><h3 id="可在cmd内直接执行的文件类型有哪些" tabindex="-1"><a class="header-anchor" href="#可在cmd内直接执行的文件类型有哪些"><span>可在cmd内直接执行的文件类型有哪些？</span></a></h3><p><code>.exe</code>、<code>.cmd</code></p><h3 id="为什么直接输入npm执行不会报错" tabindex="-1"><a class="header-anchor" href="#为什么直接输入npm执行不会报错"><span>为什么直接输入npm执行不会报错？</span></a></h3><p>因为node路径配置到系统环境变量中去的话，node路径下有<code>npm</code>和<code>npm.cmd</code>，所以在终端直接输入<code>npm</code>并不会报错。</p><h3 id="npm-run-serve发生了什么" tabindex="-1"><a class="header-anchor" href="#npm-run-serve发生了什么"><span>npm run serve发生了什么？</span></a></h3><h3 id="为什么直接执行vue-cli-service会报错" tabindex="-1"><a class="header-anchor" href="#为什么直接执行vue-cli-service会报错"><span>为什么直接执行vue-cli-service会报错？</span></a></h3><h3 id="什么是软链接" tabindex="-1"><a class="header-anchor" href="#什么是软链接"><span>什么是软链接？</span></a></h3><h3 id="bin文件夹下的软链接类型有哪些" tabindex="-1"><a class="header-anchor" href="#bin文件夹下的软链接类型有哪些"><span>.bin文件夹下的软链接类型有哪些？</span></a></h3><p><code>vite</code>——unit平台、<code>vite.cmd</code>——cmd窗口、<code>vite.ps1</code>——powerShell</p><h3 id="vue-cli-service的软链接实际执行的是什么-为什么不能直接执行" tabindex="-1"><a class="header-anchor" href="#vue-cli-service的软链接实际执行的是什么-为什么不能直接执行"><span>vue-cli-service的软链接实际执行的是什么？为什么不能直接执行？</span></a></h3><h3 id="总结npm-run-xxx发生了什么" tabindex="-1"><a class="header-anchor" href="#总结npm-run-xxx发生了什么"><span>总结npm run xxx发生了什么？</span></a></h3>',17),r=[i];function s(l,t){return c(),n("div",null,r)}const v=e(d,[["render",s],["__file","npm-run-xxx.html.vue"]]),m=JSON.parse(`{"path":"/interview/npm-run-xxx.html","title":"npm run xxx 发生了什么","lang":"zh-CN","frontmatter":{"title":"npm run xxx 发生了什么","date":"2023-03-01T00:00:00.000Z","category":["记八股文"],"description":"例如输入npm run serve回车，这时候会在我们在package.json文件下执行script属性的 vue-cli-service serve这条指令，那为什么不能执行vue-cli-service serve这条指令呢？ 当我们直接运行vue-cli-service serve这条指令时，就会提示报错信息：zsh:command not f...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/interview/npm-run-xxx.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"npm run xxx 发生了什么"}],["meta",{"property":"og:description","content":"例如输入npm run serve回车，这时候会在我们在package.json文件下执行script属性的 vue-cli-service serve这条指令，那为什么不能执行vue-cli-service serve这条指令呢？ 当我们直接运行vue-cli-service serve这条指令时，就会提示报错信息：zsh:command not f..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npm run xxx 发生了什么\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":3,"title":"cmd窗口可执行命令的逻辑？","slug":"cmd窗口可执行命令的逻辑","link":"#cmd窗口可执行命令的逻辑","children":[]},{"level":3,"title":"可在cmd内直接执行的文件类型有哪些？","slug":"可在cmd内直接执行的文件类型有哪些","link":"#可在cmd内直接执行的文件类型有哪些","children":[]},{"level":3,"title":"为什么直接输入npm执行不会报错？","slug":"为什么直接输入npm执行不会报错","link":"#为什么直接输入npm执行不会报错","children":[]},{"level":3,"title":"npm run serve发生了什么？","slug":"npm-run-serve发生了什么","link":"#npm-run-serve发生了什么","children":[]},{"level":3,"title":"为什么直接执行vue-cli-service会报错？","slug":"为什么直接执行vue-cli-service会报错","link":"#为什么直接执行vue-cli-service会报错","children":[]},{"level":3,"title":"什么是软链接？","slug":"什么是软链接","link":"#什么是软链接","children":[]},{"level":3,"title":".bin文件夹下的软链接类型有哪些？","slug":"bin文件夹下的软链接类型有哪些","link":"#bin文件夹下的软链接类型有哪些","children":[]},{"level":3,"title":"vue-cli-service的软链接实际执行的是什么？为什么不能直接执行？","slug":"vue-cli-service的软链接实际执行的是什么-为什么不能直接执行","link":"#vue-cli-service的软链接实际执行的是什么-为什么不能直接执行","children":[]},{"level":3,"title":"总结npm run xxx发生了什么？","slug":"总结npm-run-xxx发生了什么","link":"#总结npm-run-xxx发生了什么","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.74,"words":823},"filePathRelative":"interview/npm-run-xxx.md","localizedDate":"2023年3月1日","autoDesc":true}`);export{v as comp,m as data};