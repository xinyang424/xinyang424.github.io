import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,a as e,d as t,b as n,w as c,e as i}from"./app-Ds4AiUcn.js";const p="/assets/nginx-V-D3awDW0L.png",g="/assets/root-nginx-Z5AzyFMi.png",h="/assets/nginx-configure-BebZQd0v.png",_="/assets/overwrite-sbin-2Oq6_RbD.png",m="/assets/nginx-V-2-Do70R-cZ.png",x="/assets/add-env-CYMi2RRn.png",u="/assets/upload-ssl-oV0VWHmS.png",f="/assets/whereis-nginx-conf-DTh0l8b3.png",S="/assets/find-https-3YbIifrM.png",y="/assets/conf-https-CAYsmWFC.png",w="/assets/nginx-t-Ce0wEHSu.png",L="/assets/not-safe-DctzSOn7.png",b={},v=e("p",null,"实现https需要有SSL证书，SSL证书可以自己生成，也可以通过CA机构免费获得。两者的区别是：自生成的证书在浏览器通过https访问网页的时候会提示网页不安全，而CA机构认证的SSL证书则不会。",-1),C=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作"},[e("span",null,"准备工作")])],-1),k=e("p",null,"但由于我的域名是腾讯云的，在阿里云下没有备案，我的服务器又来自于阿里云的，所以这里演示的是自生成的SSL证书。",-1),z=i('<li>先停止nginx服务：<code>nginx -s quit</code></li><li>查看http模块是否安装，可以通过<code>nginx -V</code>进行查看 <img src="'+p+'" alt="" loading="lazy"><br> 上图可以看到，如果<code>configure arguments:</code>右边值为空，代表没有安装。</li><li>找到之前下载nginx的解压后目录，注意不是安装目录，安装目录是你之前下载nginx解压后的文件夹，这里我的解压后的文件夹在根目录下，所以<code>cd /</code>然后<code>ls</code>就可以看到了 <img src="'+g+'" alt="" loading="lazy"></li>',3),A=e("code",null,"configure",-1),R=e("img",{src:h,alt:"",loading:"lazy"},null,-1),V=i('<li>执行这行命令：<code>./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module</code>，注意点是要进入<code>configure</code>这个所在的文件夹，还有就是这样命令要注意你nginx安装的路径，安装路径可以使用<code>whereis nginx</code>查看。</li><li>然后运行<code>make</code>进行编译。</li><li>等待编译完成后，覆盖原有<code>sbin</code>文件夹下的<code>nginx</code>文件：<code>cp ./objs/nginx /usr/local/nginx/sbin/</code>，它会询问你是否确认覆盖，输入<code>y</code>后回车就行，同样需要注意你实际的nginx安装路径 <img src="'+_+'" alt="" loading="lazy"></li><li>此时再运行<code>nginx- V</code>，可以看到<code>configure arguments:</code>右边的值已经不为空了，证明配置成功了。 <img src="'+m+'" alt="" loading="lazy"></li>',4),N=e("p",null,"至此，让nginx支持https的准备工作已经完成了，下面准备自签名证书。",-1),T=e("h2",{id:"自生成ssl证书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自生成ssl证书"},[e("span",null,"自生成SSL证书")])],-1),q=e("p",null,"自生成SSL证书可以在自己电脑进行完成，无需在服务器上安装。",-1),D={href:"https://www.openssl.org/source/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.oomake.com/download/openssl",target:"_blank",rel:"noopener noreferrer"},B={href:"https://gzc-download.weiyun.com/ftn_handler/13fd989e288bc0f15ae119956d73d673212e7934727908516ae87b22d2ca2595aa56239c3fb41aea000f42908c25c4ec889faa8bda7094d32f07ce9a8acc96d5/Win64OpenSSL-3_0_0.exe?fname=Win64OpenSSL-3_0_0.exe&from=30113&version=3.3.3.3",target:"_blank",rel:"noopener noreferrer"},Y=i('<p>下载完进行安装，安装好后，需要配置以下环境变量或者你可以利用cmd进入<code>openssl.exe</code>所在的目录，不过我还是建议加进电脑环境变量里面。 <img src="'+x+'" alt="" loading="lazy"></p><ol><li>可以新建一个空文件夹，因为生成证书过程中，会产生新的文件，避免你自己找不到对应的文件，然后进入空文件夹。</li><li>进入空文件夹后，输入这个命令：<code>openssl genrsa -out private.key 2048</code>，这命令意思是生成私钥文件(private key)，此时文件夹里会多一个<code>private.key</code>文件。</li><li>然后根据私钥文件生成证书签名请求文件（Certificate Signing Request，简称CSR文件）：<code>openssl req -new -key private.key -out cert.csr</code>，这一步我让你输入一些信息，分别是你的国家(CN)、省名、城市名、公司名、单位名称、你的名字、你的邮箱、输入密码、可选的公司名称。至此完成，会多一个<code>cert.csr</code>文件。</li><li>最后根据私钥对证书申请进行签名从而生成证书文件（pem文件）：<code>openssl x509 -req -in cert.csr -out cacert.pem -signkey private.key</code>，这一步会新增<code>cacert.pem</code>文件。</li><li>实际我们用到的就是<code>cacert.pem</code>文件和<code>private.key</code>文件。</li><li>利用XFTP进入nginx的安装目录，新增ssl文件夹，然后将<code>cacert.pem</code>文件和<code>private.key</code>文件上传到ssl文件夹下，并记录下该路径，待会配置<code>nginx.conf</code>配置文件的时候需要使用。 <img src="'+u+'" alt="" loading="lazy"></li><li>利用XSHELL进入nginx安装目录，进入<code>nginx.conf</code>所在的文件夹。 <img src="'+f+'" alt="" loading="lazy"></li><li><code>vim nginx.conf</code>编辑该文件，输入<code>i</code>从预览模式进入编辑模式，光标向下移动是可以看到<code>HTTPS SERVER</code>的配置项的，只不过是被注释了的。 <img src="'+S+'" alt="" loading="lazy"></li><li>根据下图配置好https： <img src="'+y+'" alt="" loading="lazy"></li><li>按<code>esc</code>退出编辑模式，输入<code>:wq</code>保存并退出。</li><li>输入<code>nginx -t</code>查看配置是否错误，显示有<code>successful</code>代表配置没有错 <img src="'+w+'" alt="" loading="lazy"></li><li>此时如果nginx在运行，你可以直接<code>nginx -s reload</code>回车后来重载配置文件，如果不在运行，直接<code>nginx</code>回车后运行。</li><li>然后在浏览器输入<code>https://你的服务器公网ip地址:端口号</code>，如<code>https://47.98.244.xx/</code>，如果显示下图，可以点击<code>高级</code>后，再点击<code>继续前往xx.xx.xx.xx（不安全）</code><img src="'+L+'" alt="" loading="lazy"></li><li>如果加载出页面了，说明至此，你的步骤完全正确，地址栏处显示https<code>不安全</code>是正常的，因为我们的ssl证书没有经过CA机构认证的。</li></ol><h2 id="ca机构获得ssl证书" tabindex="-1"><a class="header-anchor" href="#ca机构获得ssl证书"><span>CA机构获得SSL证书</span></a></h2>',3);function Z(H,O){const o=l("RouteLink"),s=l("ExternalLinkIcon");return d(),r("div",null,[v,C,k,e("p",null,[t("在开始之前，你需要知道的是，在本博客"),n(o,{to:"/devops/nginx.html"},{default:c(()=>[t("nginx介绍")]),_:1}),t("里面，已经介绍到如何开启https了，只不过不同的是，centos下的nginx不能直接这么进行配置，需要先进行一些操作。以下就对此步骤进行演示说明：")]),e("ol",null,[z,e("li",null,[t("你可以进入目录里面看看，如果有"),A,t("这个文件，证明这个文件夹就是解压后的nginx文件夹。如果没有，你可以"),n(o,{to:"/devops/centos/centos-install-nginx.html"},{default:c(()=>[t("重新安装nginx")]),_:1}),R]),V]),N,T,q,e("p",null,[t("在开始之前，需要下载openssl工具，这里提供两个地方，"),e("a",D,[t("英文版官网下载"),n(s)]),t("，"),e("a",E,[t("中文网下载"),n(s)])]),e("p",null,[t("如果你是window64位系统的，直接"),e("a",B,[t("点此下载"),n(s)])]),Y,e("p",null,[t("获取证书的方式可参考"),n(o,{to:"/devops/https/window-nginx-https.html"},{default:c(()=>[t("此文章")]),_:1}),t("，只是证书来源不同，一个是CA机构认可的证书，一个是自生成的证书，但是实际都会用到那两个文件的。")])])}const X=a(b,[["render",Z],["__file","centos-nginx-https.html.vue"]]),M=JSON.parse(`{"path":"/devops/https/centos-nginx-https.html","title":"Centos下nginx实现https","lang":"zh-CN","frontmatter":{"title":"Centos下nginx实现https","date":"2022-10-20T00:00:00.000Z","category":["运维"],"description":"实现https需要有SSL证书，SSL证书可以自己生成，也可以通过CA机构免费获得。两者的区别是：自生成的证书在浏览器通过https访问网页的时候会提示网页不安全，而CA机构认证的SSL证书则不会。 准备工作 但由于我的域名是腾讯云的，在阿里云下没有备案，我的服务器又来自于阿里云的，所以这里演示的是自生成的SSL证书。 在开始之前，你需要知道的是，在本...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/devops/https/centos-nginx-https.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"Centos下nginx实现https"}],["meta",{"property":"og:description","content":"实现https需要有SSL证书，SSL证书可以自己生成，也可以通过CA机构免费获得。两者的区别是：自生成的证书在浏览器通过https访问网页的时候会提示网页不安全，而CA机构认证的SSL证书则不会。 准备工作 但由于我的域名是腾讯云的，在阿里云下没有备案，我的服务器又来自于阿里云的，所以这里演示的是自生成的SSL证书。 在开始之前，你需要知道的是，在本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-10-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Centos下nginx实现https\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"自生成SSL证书","slug":"自生成ssl证书","link":"#自生成ssl证书","children":[]},{"level":2,"title":"CA机构获得SSL证书","slug":"ca机构获得ssl证书","link":"#ca机构获得ssl证书","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":4.64,"words":1393},"filePathRelative":"devops/https/centos-nginx-https.md","localizedDate":"2022年10月20日","autoDesc":true}`);export{X as comp,M as data};
