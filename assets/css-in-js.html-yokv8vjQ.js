import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as u,c as k,a as n,b as s,d as p,w as a,e as l}from"./app-gG6IvZ60.js";const d={},v=l('<p>CSS-IN-JS解决方案有insert-css和Emotion。</p><h2 id="为什么会有-css-in-js" tabindex="-1"><a class="header-anchor" href="#为什么会有-css-in-js"><span>为什么会有 CSS-IN-JS</span></a></h2><p>在我们的现有认知中，我们都是提倡将结构化样式和行为进行分离的，即html、css、js代码三者都分离编写。而CSS-IN-JS这种解决方案，它提倡我们把CSS代码写在JavaScript代码当中，这与我们传统认知是背道而驰的。</p><ol><li>第一个原因是因为开发方式上发生变化；以前我们开发前端项目的时候，都是以页面为单位的，这个时候，css文件都是通过link标签引入到html文件当中，由于css中并没有作用域的概念，所以整个css文件中的代码都会被应用到html文件当中，这在当时是没有问题的。但是现在在开发前端项目中，都是以组件为单位的，既然是以组件为单位的，我们就希望这个css代码只应用于某一个组件，使得css代码只在这个组件范围内生效，这样做的好处是，组件与组件当中的css代码它不会产生冲突，但是要实现这样的功能，需要css本身具有作用域的概念，但是css当中是没有这样的功能的。如果采用CSS-IN-JS这种解决方案，我们就可以模拟JavaScript的作用域去模拟css的作用域，这样css的代码就可以只作用域组件内部。</li><li>第二个原因是因为采用CSS-IN-JS解决方案，可以增加组件的独立性以及可移植性。如果说我们把css代码都写在不同的css文件当中，当我们想把这个组件移到其它地方的同时，我们还要多考虑这个组件的依赖性问题。如果采用CSS-IN-JS，这样这个组件就是一个单独的文件，也无需考虑是否少复制或移动某个css文件。</li><li>第三个原因是因为css本身是缺乏动态功能的，它无法通过条件来决定给某一个元素去添加什么样的样式，但把css写在js中，就可以利用js的动态功能，为元素动态添加样式了。</li></ol><p>总结来说，CSS-IN-JS这种解决方案解决了css没有作用域的问题、增加组件的独立性和可移植性、增加css的动态功能。</p><h2 id="css-in-js-介绍" tabindex="-1"><a class="header-anchor" href="#css-in-js-介绍"><span>CSS-IN-JS 介绍</span></a></h2><p>优点：</p><ol><li>让css代码拥有独立的作用域，阻止css代码泄露到组件外部，防止样式冲突。</li><li>让组件更具有可移植性，实现开箱即用，轻松创建松耦合的应用程序。</li><li>让组件更具有重用性，只需编写一次即可，可以在任何地方运行，不仅可以在同一应用程序中重用组件，而且可以在使用相同框架构建的其它应用程序中重用组件。</li><li>让样式具有动态功能，可以将复杂的逻辑应用于样式规则，如果要创建需要动态功能的复杂UI，它是理想的解决方案。</li></ol><p>缺点：</p><ol><li>为项目增加了额外的复杂性。</li><li>自动生成的选择器大大降低了代码的可读性。</li></ol><p>CSS-IN-JS更值得在react项目中进行推广。</p><h2 id="emotion-库" tabindex="-1"><a class="header-anchor" href="#emotion-库"><span>Emotion 库</span></a></h2><p>CSS-IN-JS只是一个解决方案，它并不是一个具体的库，而Emotion 库就是这个解决方案的具体实现，通过学习Emotion 库，可以知道CSS-IN-JS具体是怎么实施的。</p>',13),m={class:"hint-container tip"},b=n("p",{class:"hint-container-title"},"提示",-1),g={href:"https://emotion.sh/docs/introduction",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/emotion-js/emotion",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>Emotion诣在使用JavaScript编写css样式的库。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @emotion/react @emotion/styled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两种方式，但是这里推荐最值得的一种方式。<br> 注意react项目是用<code>npx create-react-app xxx</code>创建的</p><ol><li>终端分别运行：<code>npm run eject</code>和<code>npm i @emotion/babel-preset-css-prop -D</code></li><li>在<code>package.json</code>文件中，，在<code>package.json</code>修改配置：</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;babel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;react-app&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@emotion/babel-preset-css-prop&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在app.js中修改为以下代码</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//app.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p css<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;background-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Hello React<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>此时就可以看到p标签字体颜色为粉色，背景颜色为蓝色。</li></ol>`,8),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// app.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" css "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@emotion/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" style "),n("span",{class:"token operator"},"="),s(" css"),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
  width: 100px;
  height: 100px;
  background: skyblue;
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("div css"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("style"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("Hello React"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" App"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// app.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" css "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@emotion/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" style "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"css"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100px"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100px"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pink"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("div css"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("style"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("Hello React"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" App"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h3",{id:"css-属性优先级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css-属性优先级"},[n("span",null,"css 属性优先级")])],-1),q=n("p",null,"props 对象中的css属性优先级高于组件内部的css属性，在调用组件时可以在覆盖组件默认样式。",-1),j=n("p",null,"代码示例：",-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" css "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@emotion/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Css "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./Css"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" style "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"css"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100px"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100px"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"background"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"pink"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("Css css"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("style"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("Css"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" App"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" css "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@emotion/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" CssStyle "),n("span",{class:"token operator"},"="),s(" css"),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
  width: 200px;
  height: 500px;
  background: green;
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"Css"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"props"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("p css"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("CssStyle"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"..."),s("props"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
      我是`),n("span",{class:"token constant"},"CSS"),s(`组件
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("p"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" Css"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=l(`<p>最终呈现的样式为：宽高各100像素，背景色为粉色。</p><h3 id="styled-components样式化组件" tabindex="-1"><a class="header-anchor" href="#styled-components样式化组件"><span>Styled Components样式化组件</span></a></h3><p>样式化组件就是用来构成用户界面的，是emotion库提供的另一种为元素添加样式的方式。</p><p><strong>创建样式化组件</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;@emotion/styled&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// String Styles写法</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  border: none;
  padding: 10px 20px;
  background: blue;
  color: #fff;
  cursor: pointer;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// Object Styles写法</span>
<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;1000px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&quot;0 auto&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Container<span class="token operator">&gt;</span>
        Hello React<span class="token operator">!</span>
        <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>br<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Button<span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据props属性覆盖样式" tabindex="-1"><a class="header-anchor" href="#根据props属性覆盖样式"><span>根据props属性覆盖样式</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;@emotion/styled&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// String Styles</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  border: none;
  padding: 10px 20px;
  background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>bgColor <span class="token operator">||</span> <span class="token string">&quot;blue&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  color: #fff;
  cursor: pointer;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// Object Styles</span>
<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//w传的是字符串的话，要写像素单位，传对象的话，就不用写像素单位</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> props<span class="token punctuation">.</span>w <span class="token operator">||</span> <span class="token string">&quot;1000px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&quot;0 auto&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 另外一种写法</span>
<span class="token keyword">const</span> Container2 <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> props<span class="token punctuation">.</span>color<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Container w<span class="token operator">=</span><span class="token string">&quot;200px&quot;</span><span class="token operator">&gt;</span>
        Hello React<span class="token operator">!</span>
        <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>br<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Button bgColor<span class="token operator">=</span><span class="token string">&quot;purple&quot;</span><span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Container2<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Container2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为任何组件添加样式" tabindex="-1"><a class="header-anchor" href="#为任何组件添加样式"><span>为任何组件添加样式</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;@emotion/styled&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// String Styles</span>
<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> className <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span>Demo<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Fancy <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// Object Styles</span>
<span class="token keyword">const</span> Fancy2 <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;tomato&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Fancy<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Fancy<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Fancy2<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Fancy2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过父组件设置子组件的样式" tabindex="-1"><a class="header-anchor" href="#通过父组件设置子组件的样式"><span>通过父组件设置子组件的样式</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;@emotion/styled&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// String Styles</span>
<span class="token keyword">const</span> Child <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Parent <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Child<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> {
    color: green;
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// Object Styles</span>
<span class="token keyword">const</span> Child1 <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;tomato&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Parent1 <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Child1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;purple&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* 此字体为红色 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Child<span class="token operator">&gt;</span>Child<span class="token operator">&lt;</span><span class="token operator">/</span>Child<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Parent<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* 此字体会变成绿色 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Child<span class="token operator">&gt;</span>Child Parent<span class="token operator">&lt;</span><span class="token operator">/</span>Child<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Parent<span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* 此字体为番茄色 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Child1<span class="token operator">&gt;</span>Child1<span class="token operator">&lt;</span><span class="token operator">/</span>Child1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Parent1<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* 此字体为紫色 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Child1<span class="token operator">&gt;</span>Child1 Parent1<span class="token operator">&lt;</span><span class="token operator">/</span>Child1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Parent1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套选择器" tabindex="-1"><a class="header-anchor" href="#嵌套选择器"><span>嵌套选择器 &amp;</span></a></h3><p><code>&amp;</code>表示组件本身</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;@emotion/styled&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// String Styles</span>
<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
  &amp; &gt; a {
    color: purple;
  }
  &amp; &gt; a:hover {
    color: pink;
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// Object Styles</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Container<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;javascript:;&quot;</span><span class="token operator">&gt;</span>我是一个a标签<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="as-属性" tabindex="-1"><a class="header-anchor" href="#as-属性"><span>as 属性</span></a></h3><p>要使用组件中的样式，但要更改呈现的元素，可以使用as属性。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;@emotion/styled&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// String Styles</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button<span class="token operator">&gt;</span>This is a button<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;a&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;//www.baidu.com&quot;</span> target<span class="token operator">=</span><span class="token string">&quot;__blank&quot;</span><span class="token operator">&gt;</span>
        This is a link button
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式组合" tabindex="-1"><a class="header-anchor" href="#样式组合"><span>样式组合</span></a></h3><p>在样式组合后，后调用的样式优先级高于先调用的样式</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@emotion/react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> base <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: yellow;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> danger <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* 最终按钮的文字颜色为红色 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button css<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>base<span class="token punctuation">,</span> danger<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>This is a button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局样式" tabindex="-1"><a class="header-anchor" href="#全局样式"><span>全局样式</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> css<span class="token punctuation">,</span> Global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@emotion/react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Global styles<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;javascript:;&quot;</span><span class="token operator">&gt;</span>link<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用keyframes方法定义关键帧动画" tabindex="-1"><a class="header-anchor" href="#使用keyframes方法定义关键帧动画"><span>使用keyframes方法定义关键帧动画</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> css<span class="token punctuation">,</span> keyframes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@emotion/react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> move <span class="token operator">=</span> <span class="token function">keyframes</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;0%&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;100%&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;600px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;skyblue&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> box <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 100px;
  height: 100px;
  position: absolute;
  animation: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>move<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 2s ease infinite alternate;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">//infinite——无限循环 alternate——从终点运动回起点</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span>box<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载主题模块" tabindex="-1"><a class="header-anchor" href="#下载主题模块"><span>下载主题模块</span></a></h3>`,25),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ReactDOM "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react-dom/client"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ThemeProvider "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@emotion/react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./App"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"//添加主题对象"),s(`
`),n("span",{class:"token keyword"},"const"),s(" theme "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"primary"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"hotpink"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" root "),n("span",{class:"token operator"},"="),s(" ReactDOM"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createRoot"),n("span",{class:"token punctuation"},"("),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"root"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
root`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token operator"},"<"),s("React"),n("span",{class:"token punctuation"},"."),s("StrictMode"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("ThemeProvider theme"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("theme"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("App "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ThemeProvider"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("React"),n("span",{class:"token punctuation"},"."),s("StrictMode"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" css"),n("span",{class:"token punctuation"},","),s(" useTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@emotion/react"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//获取主题内容——方法一"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getPrimaryColor"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token parameter"},"props"),s(),n("span",{class:"token operator"},"=>"),s(" css"),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
  color: `),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("props"),n("span",{class:"token punctuation"},"."),s("colors"),n("span",{class:"token punctuation"},"."),s("primary"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},`;
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//获取主题内容——方法二"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" getTheme "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("getTheme"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("div css"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("getPrimaryColor"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("Hello React"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(" App"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function J(I,R){const c=i("ExternalLinkIcon"),o=i("CodeTabs");return u(),k("div",null,[v,n("div",m,[b,n("p",null,[n("a",g,[s("Emotion 官方文档"),p(c)]),n("a",y,[s("Emotion GitHub"),p(c)])])]),h,p(o,{id:"122",data:[{id:"String Styles写法"},{id:"Object Styles写法"}],"tab-id":"shell"},{title0:a(({value:t,isActive:e})=>[s("String Styles写法")]),title1:a(({value:t,isActive:e})=>[s("Object Styles写法")]),tab0:a(({value:t,isActive:e})=>[w]),tab1:a(({value:t,isActive:e})=>[f]),_:1}),S,q,j,p(o,{id:"139",data:[{id:"父组件"},{id:"子组件"}],"tab-id":"shell"},{title0:a(({value:t,isActive:e})=>[s("父组件")]),title1:a(({value:t,isActive:e})=>[s("子组件")]),tab0:a(({value:t,isActive:e})=>[x]),tab1:a(({value:t,isActive:e})=>[C]),_:1}),_,p(o,{id:"204",data:[{id:"index.js"},{id:"App.js"}],"tab-id":"shell"},{title0:a(({value:t,isActive:e})=>[s("index.js")]),title1:a(({value:t,isActive:e})=>[s("App.js")]),tab0:a(({value:t,isActive:e})=>[A]),tab1:a(({value:t,isActive:e})=>[N]),_:1},8,["data"])])}const P=r(d,[["render",J],["__file","css-in-js.html.vue"]]),B=JSON.parse('{"path":"/web/css/css-in-js.html","title":"Emotion(CSS-IN-JS)","lang":"zh-CN","frontmatter":{"title":"Emotion(CSS-IN-JS)","date":"2023-06-26T00:00:00.000Z","category":["实用技巧"],"description":"CSS-IN-JS解决方案有insert-css和Emotion。 为什么会有 CSS-IN-JS 在我们的现有认知中，我们都是提倡将结构化样式和行为进行分离的，即html、css、js代码三者都分离编写。而CSS-IN-JS这种解决方案，它提倡我们把CSS代码写在JavaScript代码当中，这与我们传统认知是背道而驰的。 第一个原因是因为开发方式上...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/css/css-in-js.html"}],["meta",{"property":"og:site_name","content":"杨不旧"}],["meta",{"property":"og:title","content":"Emotion(CSS-IN-JS)"}],["meta",{"property":"og:description","content":"CSS-IN-JS解决方案有insert-css和Emotion。 为什么会有 CSS-IN-JS 在我们的现有认知中，我们都是提倡将结构化样式和行为进行分离的，即html、css、js代码三者都分离编写。而CSS-IN-JS这种解决方案，它提倡我们把CSS代码写在JavaScript代码当中，这与我们传统认知是背道而驰的。 第一个原因是因为开发方式上..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨不旧"}],["meta",{"property":"article:published_time","content":"2023-06-26T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Emotion(CSS-IN-JS)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-26T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨不旧\\",\\"url\\":\\"https://blog.xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"为什么会有 CSS-IN-JS","slug":"为什么会有-css-in-js","link":"#为什么会有-css-in-js","children":[]},{"level":2,"title":"CSS-IN-JS 介绍","slug":"css-in-js-介绍","link":"#css-in-js-介绍","children":[]},{"level":2,"title":"Emotion 库","slug":"emotion-库","link":"#emotion-库","children":[{"level":3,"title":"css 属性优先级","slug":"css-属性优先级","link":"#css-属性优先级","children":[]},{"level":3,"title":"Styled Components样式化组件","slug":"styled-components样式化组件","link":"#styled-components样式化组件","children":[]},{"level":3,"title":"根据props属性覆盖样式","slug":"根据props属性覆盖样式","link":"#根据props属性覆盖样式","children":[]},{"level":3,"title":"为任何组件添加样式","slug":"为任何组件添加样式","link":"#为任何组件添加样式","children":[]},{"level":3,"title":"通过父组件设置子组件的样式","slug":"通过父组件设置子组件的样式","link":"#通过父组件设置子组件的样式","children":[]},{"level":3,"title":"嵌套选择器 &","slug":"嵌套选择器","link":"#嵌套选择器","children":[]},{"level":3,"title":"as 属性","slug":"as-属性","link":"#as-属性","children":[]},{"level":3,"title":"样式组合","slug":"样式组合","link":"#样式组合","children":[]},{"level":3,"title":"全局样式","slug":"全局样式","link":"#全局样式","children":[]},{"level":3,"title":"使用keyframes方法定义关键帧动画","slug":"使用keyframes方法定义关键帧动画","link":"#使用keyframes方法定义关键帧动画","children":[]},{"level":3,"title":"下载主题模块","slug":"下载主题模块","link":"#下载主题模块","children":[]}]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":7.22,"words":2167},"filePathRelative":"web/css/css-in-js.md","localizedDate":"2023年6月26日","autoDesc":true}');export{P as comp,B as data};
