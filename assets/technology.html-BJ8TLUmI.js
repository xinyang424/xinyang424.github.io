import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,e as t}from"./app-Ds4AiUcn.js";const n={},l=t('<h2 id="手机app的技术栈" tabindex="-1"><a class="header-anchor" href="#手机app的技术栈"><span>手机app的技术栈</span></a></h2><ol><li>原生App技术栈（native technology stack） 原生技术栈指的是，只能用于特定手机平台的开发技术。比如，安卓平台的Java技术栈，ios平台的Obejct-C技术栈和Swifs技术栈。 这种技术栈只能用在一个平台，不能跨平台。</li><li>很合App技术栈（bybrid technology stack） 混合技术栈指的是开发混合app的技术，也就是web网页放到特定特定的容器中，然后再打包成各个平台的原生app。所以，混合技术栈其实是web技术栈 + 容器技术栈，典型代表是phoneGap、Cordova、Ionic等框架。 如果已经掌握了web技术，这个技术栈就主要学习容器提供的API Bridge，网页通过它们去调用底层硬件的API。</li><li>跨平台技术栈（cross-platform technology stack） 跨平台技术栈指的是使用一种技术，同时支持多个手机平台。它与混合技术栈的区别是，不使用web技术，即它的页面不是HTML5页面，而是使用自己的语法写UI层，然后编译成各平台的原生App。 这个技术栈就是纯粹的容器技术栈，React Native、Xamarin、Flutter都属于这一类。学习时，除了学习容器的API Bridge，还要学习容器提供的UI层，即怎么写页面。</li><li>小结 H5开发主要用在混合技术栈。但是跨平台技术栈的某些也会用到（比如react native），因为它们的UI层借鉴了web模型。<br> 另外，混合技术栈和跨平台技术栈的基础，都是原生技术栈，因为最终都要编译成原生App。所以，不管使用哪一种技术栈，多多少少要了解一些个平台的原生技术。</li></ol><h2 id="webview控件" tabindex="-1"><a class="header-anchor" href="#webview控件"><span>WebView控件</span></a></h2><p>通常情况下，App内部会使用WebView控件作为网页引擎。这是系统自带的控件，专门用来显示网页。应用程序的界面，只要放在WebView，就好像内嵌了浏览器窗口，可以显示网页。<br> 不同的App技术栈要显示网页，区别仅仅在于怎么处理WebView这个原生控件</p><ul><li>原生技术栈：需要开发者自己把WebView控件放在页面上。</li><li>混合技术栈：页面本身就是网页，默认在WebView中显示。</li><li>跨平台技术栈：提供一个WebView的语法，编译的时候将其它换成原生的WebView。</li></ul><p>注意：不同系统的webView控件名称不一样，安卓系统就叫WebView，ios系统有较老的UIWebView，也有较新的WKWebView，作用都是一样的，差异在于功能的强弱。</p><h2 id="原生技术栈" tabindex="-1"><a class="header-anchor" href="#原生技术栈"><span>原生技术栈</span></a></h2><h3 id="xcode" tabindex="-1"><a class="header-anchor" href="#xcode"><span>xcode</span></a></h3><h3 id="android-studio" tabindex="-1"><a class="header-anchor" href="#android-studio"><span>Android Studio</span></a></h3><h2 id="混合技术栈" tabindex="-1"><a class="header-anchor" href="#混合技术栈"><span>混合技术栈</span></a></h2><h3 id="adobe-phonegap" tabindex="-1"><a class="header-anchor" href="#adobe-phonegap"><span>Adobe PhoneGap</span></a></h3><h3 id="apache-cordova" tabindex="-1"><a class="header-anchor" href="#apache-cordova"><span>Apache Cordova</span></a></h3><h3 id="ionic" tabindex="-1"><a class="header-anchor" href="#ionic"><span>Ionic</span></a></h3><h2 id="跨平台技术栈" tabindex="-1"><a class="header-anchor" href="#跨平台技术栈"><span>跨平台技术栈</span></a></h2><h3 id="react-native" tabindex="-1"><a class="header-anchor" href="#react-native"><span>React Native</span></a></h3><p>使用 JavaScipt 语言编写页面</p><h3 id="xamarin" tabindex="-1"><a class="header-anchor" href="#xamarin"><span>Xamarin</span></a></h3><p>使用 C# 语言编写页面</p><h3 id="flutter" tabindex="-1"><a class="header-anchor" href="#flutter"><span>Flutter</span></a></h3><p>使用 Dart 语言编写页面</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ol><li>原生技术栈的性能和体验最好，对于复杂的大型App，如果条件允许，应该采用这种方式开发。</li><li>混合技术栈的成本低，灵活性好，对性能要求不高的简单App，尤其是纯展示性的页面，可以采用这种方式开发。</li><li>跨平台技术栈适用于存在外部或内部条件的限制，只有一个团队开发跨平台app的情况。</li></ol>',22),o=[l];function r(c,p){return a(),i("div",null,o)}const s=e(n,[["render",r],["__file","technology.html.vue"]]),b=JSON.parse(`{"path":"/web/mobile-dev/technology.html","title":"移动开发技术","lang":"zh-CN","frontmatter":{"title":"移动开发技术","date":"2022-03-01T00:00:00.000Z","category":["移动开发"],"order":2,"description":"手机app的技术栈 原生App技术栈（native technology stack） 原生技术栈指的是，只能用于特定手机平台的开发技术。比如，安卓平台的Java技术栈，ios平台的Obejct-C技术栈和Swifs技术栈。 这种技术栈只能用在一个平台，不能跨平台。 很合App技术栈（bybrid technology stack） 混合技术栈指的是开...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/mobile-dev/technology.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"移动开发技术"}],["meta",{"property":"og:description","content":"手机app的技术栈 原生App技术栈（native technology stack） 原生技术栈指的是，只能用于特定手机平台的开发技术。比如，安卓平台的Java技术栈，ios平台的Obejct-C技术栈和Swifs技术栈。 这种技术栈只能用在一个平台，不能跨平台。 很合App技术栈（bybrid technology stack） 混合技术栈指的是开..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"移动开发技术\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"手机app的技术栈","slug":"手机app的技术栈","link":"#手机app的技术栈","children":[]},{"level":2,"title":"WebView控件","slug":"webview控件","link":"#webview控件","children":[]},{"level":2,"title":"原生技术栈","slug":"原生技术栈","link":"#原生技术栈","children":[{"level":3,"title":"xcode","slug":"xcode","link":"#xcode","children":[]},{"level":3,"title":"Android Studio","slug":"android-studio","link":"#android-studio","children":[]}]},{"level":2,"title":"混合技术栈","slug":"混合技术栈","link":"#混合技术栈","children":[{"level":3,"title":"Adobe PhoneGap","slug":"adobe-phonegap","link":"#adobe-phonegap","children":[]},{"level":3,"title":"Apache Cordova","slug":"apache-cordova","link":"#apache-cordova","children":[]},{"level":3,"title":"Ionic","slug":"ionic","link":"#ionic","children":[]}]},{"level":2,"title":"跨平台技术栈","slug":"跨平台技术栈","link":"#跨平台技术栈","children":[{"level":3,"title":"React Native","slug":"react-native","link":"#react-native","children":[]},{"level":3,"title":"Xamarin","slug":"xamarin","link":"#xamarin","children":[]},{"level":3,"title":"Flutter","slug":"flutter","link":"#flutter","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.93,"words":878},"filePathRelative":"web/mobile-dev/technology.md","localizedDate":"2022年3月1日","autoDesc":true}`);export{s as comp,b as data};