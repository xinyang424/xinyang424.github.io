import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as t}from"./app-gG6IvZ60.js";const l="/assets/flutter-assembleDebug-CcxYvyH6.png",i="/assets/flutter-path-Dzwr6tBr.png",o="/assets/flutter-pathfile-setting2-Cx7-Z9ao.png",r="/assets/flutter-pathfile-setting1-D7uu9B3t.png",n="/assets/flutter-run-android-DgZUyqm1.png",c="/assets/gradle-path-DfSyvZjS.png",p="/assets/gradle-file-size-QOg0uA9o.png",u="/assets/gradle-version-Bt0jnVjs.png",d={},m=t('<p>错误图： <img src="'+l+'" alt="" loading="lazy"><br> 你可以一直等，但是显然这是非常影响开发效率的，下面是解决方案：</p><p>首先找到fultter sdk所在文件夹的位置：依次进flutter\\packages\\flutter_tools\\gradle 文件夹，然后打开flutter.gradle文件，如下图：<br><img src="'+i+'" alt="" loading="lazy"></p><p>然后进行以下修改：</p><ol><li>60行左右进行第一次修改： <img src="'+o+`" alt="" loading="lazy"></li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>repositories <span class="token punctuation">{</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google&#39; </span>
    <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google-plugin&#39; </span>
    <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/public&#39; </span>
    <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/jcenter&#39;</span>
    <span class="token punctuation">}</span>
    google()
    mavenCentral()
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>87行左右进行第二次修改： <img src="`+r+`" alt="" loading="lazy"></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//原镜像
//private static final String DEFAULT_MAVEN_HOST = &quot;https://storage.googleapis.com&quot;;
//网上也有人说有这个，但是又说不可用了，所以最好用下面的清华同方或者腾讯云镜像
//private static final String DEFAULT_MAVEN_HOST = &quot;https://storage.flutter-io.cn&quot;;
//清华同方镜像
private static final String DEFAULT_MAVEN_HOST = &quot;https://mirrors.tuna.tsinghua.edu.cn/flutter&quot;;
//腾讯云镜像
//private static final String DEFAULT_MAVEN_HOST = &quot;https://mirrors.cloud.tencent.com/flutter&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>回到flutter项目文件中的android/build.gradle <img src="`+n+`" alt="" loading="lazy"><br> 修改此文件的两个地方，分别是<code>buildscript.repositories</code>和<code>allprojects.repositories</code>：</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>buildscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google-plugin&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/public&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/jcenter&#39;</span>
        <span class="token punctuation">}</span>
        google()
        mavenCentral()
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google-plugin&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/public&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/jcenter&#39;</span>
        <span class="token punctuation">}</span>
        google()
        mavenCentral()
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>再次在项目目录路径下终端运行<code>flutter run</code></li></ol><p>若上述步骤都试过无效，删除下面路径的两个文件，分别是<code>caches</code>和<code>wrapper/dists</code>： <img src="`+c+'" alt="" loading="lazy"></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>上面步骤修改完，无论是AS上运行，还是终端上输入<code>flutter run</code>命令，可能还是会觉得有点慢<code>Running Gradle task &#39;assembleDebug&#39;</code>，此时你可以看<code>wrapper/dists</code>文件下的文件大小是否在增长，若增长可观，就代码等待一会，一般大小会是400M左右，具体可看下图。</p></div><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有可能你的<code>wrapper/dists</code>下有多个文件，你知道看哪一个，可以在项目的android文件夹下要下载哪个文件： <img src="'+u+'" alt="" loading="lazy"></p><p>还可以可能会提示报错如<code>Could not get source at xxxx</code>和<code>xecution failed for task &#39;&#39;:app:checkDebugAarMetadata&#39;</code>，大致意思意思不能在阿里云获取资源啥的，但是跑一会就莫名奇妙没报错了。以上也是我最终成功跑起来的配置。</p><p>上面的方法都是笔者总结出来的，然后最终运行成功：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),v=[m];function b(g,k){return e(),a("div",null,v)}const y=s(d,[["render",b],["__file","flutter-assembleDebug.html.vue"]]),_=JSON.parse(`{"path":"/bug/flutter-assembleDebug.html","title":"Flutter运行安卓模拟器上一直卡在Running Gradle task 'assembleDebug'","lang":"zh-CN","frontmatter":{"title":"Flutter运行安卓模拟器上一直卡在Running Gradle task 'assembleDebug'","date":"2023-05-29T00:00:00.000Z","category":["bug记录"],"description":" 错误图： 你可以一直等，但是显然这是非常影响开发效率的，下面是解决方案： 首先找到fultter sdk所在文件夹的位置：依次进flutter\\\\packages\\\\flutter_tools\\\\gradle 文件夹，然后打开flutter.gradle文件，如下图： 然后进行以下修改： 60行左右进行第一次修改： 87行左右进行第二次修改： 回到flut...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/bug/flutter-assembleDebug.html"}],["meta",{"property":"og:site_name","content":"杨不旧"}],["meta",{"property":"og:title","content":"Flutter运行安卓模拟器上一直卡在Running Gradle task 'assembleDebug'"}],["meta",{"property":"og:description","content":" 错误图： 你可以一直等，但是显然这是非常影响开发效率的，下面是解决方案： 首先找到fultter sdk所在文件夹的位置：依次进flutter\\\\packages\\\\flutter_tools\\\\gradle 文件夹，然后打开flutter.gradle文件，如下图： 然后进行以下修改： 60行左右进行第一次修改： 87行左右进行第二次修改： 回到flut..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨不旧"}],["meta",{"property":"article:published_time","content":"2023-05-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flutter运行安卓模拟器上一直卡在Running Gradle task 'assembleDebug'\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨不旧\\",\\"url\\":\\"https://blog.xinyang424.com\\"}]}"]]},"headers":[],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.03,"words":609},"filePathRelative":"bug/flutter-assembleDebug.md","localizedDate":"2023年5月29日","autoDesc":true}`);export{y as comp,_ as data};
