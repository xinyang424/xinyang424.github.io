import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as i,c as l,a as t,d as c,w as p,e as n,b as o}from"./app-gG6IvZ60.js";const d="/assets/nginx-worker-CwhJj1wG.png",r="/assets/http-https-B-5AeO4N.png",u={},v=n(`<h2 id="什么是nginx" tabindex="-1"><a class="header-anchor" href="#什么是nginx"><span>什么是Nginx？</span></a></h2><p>Nginx是一款高性能的开源Web服务器和反向代理服务器。它具有轻量级、高并发处理能力和低内存消耗的特点，被广泛应用于构建高性能的网络功能</p><p>Nginx 最初由俄罗斯的工程师Igor Sysoev开发，首次发布于2004年。它的设计目标是解决C10k问题，即在高并发环境下保持高性能和可靠性。</p><p>当时的服务器软件都是单线程的，导致在高并发的情况下，服务器性能会变得非常的差，Nginx的出现便很好的解决了这个问题。</p><p>在官方给出的数据当中，Nginx可以支持5万个并发连接，epoll-IO多路复用、高并发，最大50000个连接，高性能、低内存消耗，热部署。</p><p>Nginx 的主要特点包括：</p><ol><li>高性能：Nginx 使用事件驱动和异步非阻塞的工作模式，能够处理大量并发连接，具有出色的性能表现。</li><li>负载均衡：作为反向代理服务器，Nginx 可以将请求分发到多个后端服务器，实现负载均衡，提高系统的可扩展性和稳定性。</li><li>反向代理：Nginx 可以作为反向代理，接收客户端请求，并将请求转发到后端服务器，隐藏后端服务器的真实地址。</li><li>静态文件服务：Nginx 可以快速、高效地提供静态文件的访问，通过将静态文件缓存到内存中，减轻后端服务器的负载。</li><li>动态内容支持：除了静态文件服务，Nginx 还可以与后端应用程序（如 PHP、Node.js）进行集成，处理动态内容的请求。</li><li>可扩展性：Nginx 可以通过添加模块进行功能扩展，满足不同的需求。</li></ol><p>Nginx具有卓越的性能和灵活性，Nginx 在互联网应用中被广泛使用，包括网站服务器、反向代理、负载均衡、缓存服务器、媒体流服务器等。它已经成为构建高性能和可靠性的现代 Web 架构中的重要组件之一。</p><p>Web服务器还有：Apache、Cloudflare、OpenResty</p><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装Nginx</span></a></h2><p><strong>方式一：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># linux</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx

<span class="token comment"># macos</span>
brew <span class="token function">install</span> nginx

<span class="token comment"># windows</span>
scoop <span class="token function">install</span> nginx
choco <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：</strong></p><p>源码编译安装：</p><ol><li>下载nginx源码到自己电脑上</li><li>执行预编译：<code>./configure</code></li><li>编译：<code>make</code></li><li>安装：<code>make install</code></li></ol><p>这种方式比较灵活，可以自定义配置各种参数，适合于一些特殊的应用场景，比如想安装一些特殊模块或者想修改一些源码来自定义一些功能，再或者要求安装在服务器上的Nginx不能访问外网等。</p><p><strong>方式三：</strong></p><p>适用docker进行安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务启停止" tabindex="-1"><a class="header-anchor" href="#服务启停止"><span>服务启停止</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># linux 回车后没有提示消息即成功</span>
nginx

<span class="token comment"># windows</span>
start nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看nginx后台进程</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关注两个进程，一个master进程，一个worker进程</p><figure><img src="`+d+`" alt="nginx进程模型" tabindex="0" loading="lazy"><figcaption>nginx进程模型</figcaption></figure><p>这里的master进程就是nginx的主进程，它主要负责读取和验证配置文件以及管理worker进程，worker进程就是nginx的工作进程，负责处理实际的请求，master进程只有一个，而worker进程可以有多个。</p><p>worker进程的数量可以通过配置文件进行修改</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看端口号占用情况</span>
<span class="token function">lsof</span> -i:端口号

<span class="token comment"># 优雅停止服务器</span>
nginx <span class="token parameter variable">-s</span> quit

<span class="token comment"># 立即停止</span>
nginx <span class="token parameter variable">-s</span> stop

<span class="token comment"># 重载配置文件</span>
nginx <span class="token parameter variable">-s</span> reload

<span class="token comment"># 重新打开日志文件</span>
nginx <span class="token parameter variable">-s</span> reopen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态站点部署" tabindex="-1"><a class="header-anchor" href="#静态站点部署"><span>静态站点部署</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看nginx的安装目录、编译参数以及配置文件和日志文件的位置等各种信息，尤其是nginx配置文件的位置，也就是nginx.conf这个文件</span>
<span class="token comment"># 这个文件位置和使用的操作系统以及安装的nginx方式有关</span>
nginx <span class="token parameter variable">-V</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以输入<code>nginx -t</code>回车后,<code>--con-path=</code>后面的就是配置文件的路径，常见位置：</p><ul><li><code>/etc/nginx/conf</code></li><li><code>/usr/local/etc/nginx</code></li><li><code>/opt/homebrew/etc/nginx</code></li></ul><p><code>nginx.conf</code>常见配置：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>worker_processes  <span class="token number">10</span>; <span class="token comment">//worker进程数量，一般来说，修改为同服务器CPU内核数量是比较合适的，也可以设置为auto，这样就会自动根据CPU内核的数量来自动设置worker进程的数量</span>
server<span class="token punctuation">{</span>
    listen       <span class="token number">80</span>; <span class="token comment">//端口号</span>
    location / <span class="token punctuation">{</span>    <span class="token comment">//匹配浏览器输入的 / 路径</span>
        root   html;  <span class="token comment">//进入html文件夹，相当于根目录的</span>
        index  index.html index.htm; <span class="token comment">//匹配index.html文件或index.htm文件</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成<code>nginx.conf</code>配置文件后，可使用<code>nginx -t</code>来检查配置文件是否错误，每次修改完都要利用<code>nginx -s reload</code>重新加载配置文件。</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span><span class="token comment">//主要是一些服务器和客户端之间网络连接的一些配置，比如指定每个worker进程可以同时接收多少个网络连接、网络IO模型等等 </span>
<span class="token punctuation">}</span>
http<span class="token punctuation">{</span>
    include  mine<span class="token punctuation">.</span>types<span class="token punctuation">;</span><span class="token comment">//这句话意思就是把mine.types这个文件包含进来，这个文件中包含了很多MINE文件类型，这样nginx就可以根据文件的后缀名来判断文件的类型，然后再根据不同的文件类型做不同的处理</span>
    <span class="token comment">//这一部分是修改最频繁的部分，比如虚拟主机、反向代理、负载均衡等等</span>
    <span class="token comment">//这一部分可以包括多个serve块，也就是虚拟主机</span>

    include servers<span class="token comment">/*; //把servers目录下的所有配置文件都包含进来，这样就可以把每个虚拟主机的配置都放在一个单独的文件里，让主配置文件看起来更加简洁清晰
}

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>include字段：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 绝对路径</span>
include /etc/conf/nginx.conf

<span class="token comment"># 相对路径 相对路径中文件必须在正在编辑的nginx配置文件所在的目录中，Nginx会自动查找该文件</span>
include port/80.conf

<span class="token comment"># 通配符</span>
include *.conf

<span class="token comment"># 宏</span>
include /path/to/<span class="token variable">$ENV</span><span class="token punctuation">(</span>FILE<span class="token punctuation">}</span>:
<span class="token comment"># 宏是可以替换为具体路径的字符串。例如在上面的例子中，变量SENV{FILE)表示一个指定路径，它可以被替换为一个具体的文件路径它可以避免将诸如 passwords 或类似信息写到配置文件中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举个例子，将http下的server配置，一个配置http，一个配置https拆分开：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># nginx.conf里</span>
worker_processes  auto<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

     upstream backend <span class="token punctuation">{</span>
         ip_hash<span class="token punctuation">;</span>
         server <span class="token number">127.0</span>.0.1:3000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    include servers/*<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>servers文件夹有http和https两个文件：<br><img src="`+r+`" alt="" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># http文件里</span>
<span class="token comment"># HTTP server</span>
server <span class="token punctuation">{</span>
   listen       <span class="token number">80</span><span class="token punctuation">;</span>
   server_name  localhost<span class="token punctuation">;</span>

   location / <span class="token punctuation">{</span>
     <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># https文件里</span>
<span class="token comment"># HTTPS server</span>
server <span class="token punctuation">{</span>
   listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
   server_name  localhost<span class="token punctuation">;</span>

   ssl_certificate      /usr/local/nginx/ssl/cacert.pem<span class="token punctuation">;</span>
   ssl_certificate_key  /usr/local/nginx/ssl/private.key<span class="token punctuation">;</span>

   ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
   ssl_session_timeout  5m<span class="token punctuation">;</span>

   ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
   ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

   location / <span class="token punctuation">{</span>
      <span class="token comment"># root   html;</span>
      <span class="token comment"># index  index.html index.htm;</span>
       proxy_pass http://backend<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向代理和负载均衡" tabindex="-1"><a class="header-anchor" href="#反向代理和负载均衡"><span>反向代理和负载均衡</span></a></h2><p>反向代理是相对正向代理来说的，正向代理就是代理客户端，反向代理就是代理服务器端。</p><p>比如挂VPN访问国外网站，让VPN代替我们访问国外的网站，然后把返回结果返回到我们客户端，这就是一个典型的正向代理例子。这里的代理服务器代理的是客户端，且这个过程客户端是知道的，但是对于服务端是透明的。</p><p>而反向代理就是代理服务端，比如当我们访问一个网站的时候，比如我们访问Google，而Google域名只有一个，但是Google后面有很多的服务器，客户端请求Google网页，而Google服务器会将请求转发到后面的服务器上，从而隐藏了真实的服务器地址，端口等信息，这就是反向代理的典型例子。这里的代理服务器就是代理的服务端，而且这个过程对于客户端是透明的。Nginx就是一个非常好的反向代理服务器。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>http <span class="token punctuation">{</span>
    upstream backend <span class="token punctuation">{</span>
        ip_hash<span class="token punctuation">;</span>
        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8001</span> weight<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8002</span><span class="token punctuation">;</span>
        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8003</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        location <span class="token operator">/</span>app <span class="token punctuation">{</span>
            proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>backend<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nginx -t</code>检查配置文件是否错误，<code>nginx -s reload</code>重载配置文件。</p><p>默认是以轮询的方式来代理的，但是如果当服务器配置不一样的时候，我们想性能更好的服务器代理更多一点，那就可以添加关键字<code>weight</code>来设置权重。</p><p><code>ip_hash</code>这个策略会根据客户端的IP地址来进行一个哈希，同一个客户端请求就会被分配到同一个服务器上，这样就能解决一些session性上的问题。</p><p>同一台服务器，3000端口由pm2启动的，现在用nginx进行代理：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>http<span class="token punctuation">{</span>
    upstream backend <span class="token punctuation">{</span>
       ip_hash<span class="token punctuation">;</span>
       server <span class="token number">127.0</span>.0.1:3000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># HTTP</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
           <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># HTTPS server</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        ssl_certificate      /usr/local/nginx/ssl/cacert.pem<span class="token punctuation">;</span>
        ssl_certificate_key  /usr/local/nginx/ssl/private.key<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

        ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
           proxy_pass http://backend<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https配置" tabindex="-1"><a class="header-anchor" href="#https配置"><span>HTTPS配置</span></a></h2><p>HTTP + SSL = HTTPS</p><p>HTTP默认端口为80，HTTPS默认端口为443。在浏览器地址栏中，这两个端口号都不会显示。</p><p>可以通过openssl来生成一个自签名证书：</p><ol><li>生成私钥文件(private key)：<code>openssl genrsa -out private.key 2048</code></li><li>根据私钥文件生成证书签名请求文件（Certificate Signing Request，简称CSR文件）：<code>openssl req -new -key private.key -out cert.csr</code></li><li>根据私钥对证书申请进行签名从而生成证书文件（pem文件）：<code>openssl x509 -req -in cert.csr -out cacert.pem -signkey private.key</code></li></ol><p>生成过程中会提示输入一些信息，如国家(Country)、省份(Province)、城市(Locality Name)、公司(Unit Name)、名字(Common Name)、邮箱(Email Address)等等</p><p>最后需要两个文件，一个pem文件，一个key文件，需要放在服务器上。然后在nginx的配置文件下进行配置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen      <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    <span class="token comment"># 证书文件名称</span>
    ssl_certificate     /opt/homebrew/etc/nginx/cacert.pem<span class="token punctuation">;</span>
    <span class="token comment"># 证书私钥文件名称</span>
    ssl_certificate_key /opt/homebrew/etc/nginx/private.key<span class="token punctuation">;</span>
    <span class="token comment"># ssl验证配置</span>
    ssl_session_timeout 5m<span class="token punctuation">;</span> <span class="token comment">#缓存有效期</span>
    <span class="token comment"># 安全连接可选的加密协议</span>
    ssl_protocols   TLSv1 TLSv1.1 TLSv1.2 TLSv1.3<span class="token punctuation">;</span>
    <span class="token comment"># 配置加密套件/加密算法，写法遵循 openssl 标准</span>
    ssl_ciphers ECDHE-RSA-ASS128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span>
    <span class="token comment"># 使用服务端首选算法</span>
    ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># http重定向到https</span>
server <span class="token punctuation">{</span>
    listen  <span class="token number">80</span><span class="token punctuation">;</span>
    server_name geekhour.net  www.geekhour.net<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># return 301 https://$server_name$request-uri;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**自签名证书未经过CA机构的验证，所以浏览器访问会报不安全的，选择继续访问即可。</p>`,62),m=n(`<h2 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机"><span>虚拟主机</span></a></h2><p>虚拟主机可以在一台主机上部署多个站点，很多时候网站在起步阶段并没有非常大的访问量，把多个网站部署在一起也不会对服务器造成太大的压力，而且这样可以节省服务器的资源和成本，nginx的虚拟主机就是通过<code>server</code>块来进行配置的。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 每个虚拟块就是一个虚拟主机</span>
server <span class="token punctuation">{</span>
    listen  <span class="token number">8088</span><span class="token punctuation">;</span>
    listen  somename:8088<span class="token punctuation">;</span>
    server_name somename <span class="token builtin class-name">alias</span> anthor.alias<span class="token punctuation">;</span> <span class="token comment"># 通过配置server_name来指定这个虚拟主机的域名，这样当访问这个域名的时候，就会匹配这个server块，这样就可以在一台服务器上配置多个虚拟机了</span>

    location / <span class="token punctuation">{</span>
        root html<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以把<code>server</code>块的内容复制，然后在<code>server</code>文件夹下新建文件，这样主配置文件就看起来更干净、简洁。</p><h2 id="允许跨域与允许使用history路由" tabindex="-1"><a class="header-anchor" href="#允许跨域与允许使用history路由"><span>允许跨域与允许使用history路由</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    add_header Access-Control-Allow-Origin *<span class="token punctuation">;</span> //允许跨域
    try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>//避免网页使用history模式下，显示错误。
    root   html<span class="token punctuation">;</span>
    index  index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(k,h){const s=e("RouteLink");return i(),l("div",null,[v,t("p",null,[c(s,{to:"/devops/https/centos-nginx-https.html"},{default:p(()=>[o("详细Centos玩转https可以参考此文章")]),_:1})]),m])}const _=a(u,[["render",b],["__file","nginx.html.vue"]]),f=JSON.parse('{"path":"/devops/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{"title":"nginx","date":"2022-03-20T00:00:00.000Z","icon":"nginx","category":["运维"],"description":" 什么是Nginx？ Nginx是一款高性能的开源Web服务器和反向代理服务器。它具有轻量级、高并发处理能力和低内存消耗的特点，被广泛应用于构建高性能的网络功能 Nginx 最初由俄罗斯的工程师Igor Sysoev开发，首次发布于2004年。它的设计目标是解决C10k问题，即在高并发环境下保持高性能和可靠性。 当时的服务器软件都是单线程的，导致在高并...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/devops/nginx.html"}],["meta",{"property":"og:site_name","content":"杨不旧"}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:description","content":" 什么是Nginx？ Nginx是一款高性能的开源Web服务器和反向代理服务器。它具有轻量级、高并发处理能力和低内存消耗的特点，被广泛应用于构建高性能的网络功能 Nginx 最初由俄罗斯的工程师Igor Sysoev开发，首次发布于2004年。它的设计目标是解决C10k问题，即在高并发环境下保持高性能和可靠性。 当时的服务器软件都是单线程的，导致在高并..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨不旧"}],["meta",{"property":"article:published_time","content":"2022-03-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨不旧\\",\\"url\\":\\"https://blog.xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是Nginx？","slug":"什么是nginx","link":"#什么是nginx","children":[]},{"level":2,"title":"安装Nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":2,"title":"服务启停止","slug":"服务启停止","link":"#服务启停止","children":[]},{"level":2,"title":"静态站点部署","slug":"静态站点部署","link":"#静态站点部署","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"反向代理和负载均衡","slug":"反向代理和负载均衡","link":"#反向代理和负载均衡","children":[]},{"level":2,"title":"HTTPS配置","slug":"https配置","link":"#https配置","children":[]},{"level":2,"title":"虚拟主机","slug":"虚拟主机","link":"#虚拟主机","children":[]},{"level":2,"title":"允许跨域与允许使用history路由","slug":"允许跨域与允许使用history路由","link":"#允许跨域与允许使用history路由","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":9.71,"words":2913},"filePathRelative":"devops/nginx.md","localizedDate":"2022年3月20日","autoDesc":true}');export{_ as comp,f as data};
