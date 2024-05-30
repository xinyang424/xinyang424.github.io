import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as o,a as n,d as e,b as s,e as t}from"./app-Ds4AiUcn.js";const c={},p=t(`<h2 id="_1-标题语法" tabindex="-1"><a class="header-anchor" href="#_1-标题语法"><span>1 标题语法</span></a></h2><p>要创建标题，在单词或短语前面添加井号（<code>#</code>）。<code>#</code>的数量代表了标题的级别。</p><p>如添加三个<code>#</code>表示创建三级标题(<code>h3</code>)(例如：<code>### My Header</code>)</p><p><strong>可选语法：</strong><br> 可以在文本下方添加任意数量的 <code>==</code> 号来标识一级标题，或者 <code>--</code> 号来标识二级标题。</p><p><strong>注意：</strong><br> 不同的Markdown应用程序处理<code>#</code>和标题之间的空格方式并不一致。为了兼容考虑，需要用一个空格在<code>#</code>和标题之间进行分隔。</p><h2 id="_2-段落语法" tabindex="-1"><a class="header-anchor" href="#_2-段落语法"><span>2 段落语法</span></a></h2><p>要创建段落，需要使用空白行将一行或多行文本进行分隔。</p><p><strong>注意：</strong><br> 不要用空格(spaces)或制表符(tabs)缩进段落</p><h2 id="_3-换行语法" tabindex="-1"><a class="header-anchor" href="#_3-换行语法"><span>3 换行语法</span></a></h2><p>在一行的末尾添加两个或多个空格，然后按回车(Enter)键，即可创建一个换行(<code>&lt;br&gt;</code>)。</p><h2 id="_4-强调语法" tabindex="-1"><a class="header-anchor" href="#_4-强调语法"><span>4 强调语法</span></a></h2><p>通过将文本设置为粗体或斜体来强调其重要性。</p><h3 id="_4-1-粗体" tabindex="-1"><a class="header-anchor" href="#_4-1-粗体"><span>4.1 粗体</span></a></h3><p>要加粗文本，请在单词或短语的前后各添加两个星号，如<code>**strong text**</code></p><h3 id="_4-2-斜体" tabindex="-1"><a class="header-anchor" href="#_4-2-斜体"><span>4.2 斜体</span></a></h3><p>要用斜体显示文本，请在单词或短语前后添加一个星号，如<code>*Italic text*</code></p><h3 id="_4-3-斜体且加粗" tabindex="-1"><a class="header-anchor" href="#_4-3-斜体且加粗"><span>4.3 斜体且加粗</span></a></h3><p>要同时用粗体和斜体突出显示文本，请在单词或短语前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。</p><h2 id="_5-引用语法" tabindex="-1"><a class="header-anchor" href="#_5-引用语法"><span>5 引用语法</span></a></h2><p>要创建引用块，需要在段落前面添加一个<code>&gt;</code>符号。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Dorothy followed her through many of the beautiful rooms in her castle.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>渲染效果如下：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Dorothy followed her through many of the beautiful rooms in her castle.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-1-多个段落的块引用" tabindex="-1"><a class="header-anchor" href="#_5-1-多个段落的块引用"><span>5.1 多个段落的块引用</span></a></h3><p>块引用可以包含多个段落。为段落之间的空白行添加一个 <code> &gt;</code> 符号。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Dorothy followed her through many of the beautiful rooms in her castle.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染效果如下：</p><blockquote><p>Dorothy followed her through many of the beautiful rooms in her castle.</p><p>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.</p></blockquote><h3 id="_5-2-嵌套块引用" tabindex="-1"><a class="header-anchor" href="#_5-2-嵌套块引用"><span>5.2 嵌套块引用</span></a></h3><p>块引用可以嵌套。在要嵌套的段落前添加一个 <code>&gt;&gt;</code> 符号。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> Dorothy followed her through many of the beautiful rooms in her castle.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;&gt;</span> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染效果如下：</p><blockquote><p>Dorothy followed her through many of the beautiful rooms in her castle.</p><blockquote><p>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.</p></blockquote></blockquote><h3 id="_5-3-带有其它元素的块引用" tabindex="-1"><a class="header-anchor" href="#_5-3-带有其它元素的块引用"><span>5.3 带有其它元素的块引用</span></a></h3><p>块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，需要进行实验以查看哪些元素有效。如：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> <span class="token title important"><span class="token punctuation">####</span> The quarterly results look great!</span>
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">-</span> Revenue was off the chart.
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">-</span> Profits were higher than ever.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span>  <span class="token italic"><span class="token punctuation">*</span><span class="token content">Everything</span><span class="token punctuation">*</span></span> is going according to <span class="token bold"><span class="token punctuation">**</span><span class="token content">plan</span><span class="token punctuation">**</span></span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染效果如下：</p><blockquote><h4 id="the-quarterly-results-look-great" tabindex="-1"><a class="header-anchor" href="#the-quarterly-results-look-great"><span>The quarterly results look great!</span></a></h4><ul><li>Revenue was off the chart.</li><li>Profits were higher than ever.</li></ul><p><em>Everything</em> is going according to <strong>plan</strong>.</p></blockquote><h2 id="_6-列表语法" tabindex="-1"><a class="header-anchor" href="#_6-列表语法"><span>6 列表语法</span></a></h2><p>可以将多个条目组织成有序或无序列表</p><h3 id="_6-1-有序列表" tabindex="-1"><a class="header-anchor" href="#_6-1-有序列表"><span>6.1 有序列表</span></a></h3><p>要创建有序列表，需要在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字1开始。比如：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> First item
<span class="token list punctuation">2.</span> Second item
<span class="token list punctuation">3.</span> Third item
<span class="token list punctuation">4.</span> Fourth item

<span class="token list punctuation">1.</span> First item
<span class="token list punctuation">1.</span> Second item
<span class="token list punctuation">1.</span> Third item
<span class="token list punctuation">1.</span> Fourth item

<span class="token list punctuation">1.</span> First item
<span class="token list punctuation">8.</span> Second item
<span class="token list punctuation">3.</span> Third item
<span class="token list punctuation">5.</span> Fourth item

<span class="token list punctuation">1.</span> First item
<span class="token list punctuation">2.</span> Second item
<span class="token list punctuation">3.</span> Third item
    <span class="token list punctuation">1.</span> Indented item
    <span class="token list punctuation">2.</span> Indented item
<span class="token list punctuation">4.</span> Fourth item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-无序列表" tabindex="-1"><a class="header-anchor" href="#_6-2-无序列表"><span>6.2 无序列表</span></a></h3><p>要创建无序列表，需要在每个列表项前面添加破折号(<code>-</code>)、星号(<code>*</code>)、或加号(<code>+</code>)。缩进一个或多个列表项可创建嵌套列表。例如：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> First item
<span class="token list punctuation">-</span> Second item
<span class="token list punctuation">-</span> Third item
<span class="token list punctuation">-</span> Fourth item

<span class="token list punctuation">*</span> First item
<span class="token list punctuation">*</span> Second item
<span class="token list punctuation">*</span> Third item
<span class="token list punctuation">*</span> Fourth item

<span class="token list punctuation">+</span> First item
<span class="token list punctuation">+</span> Second item
<span class="token list punctuation">+</span> Third item
<span class="token list punctuation">+</span> Fourth item

<span class="token list punctuation">-</span> First item
<span class="token list punctuation">-</span> Second item
<span class="token list punctuation">-</span> Third item
    <span class="token list punctuation">-</span> Indented item
    <span class="token list punctuation">-</span> Indented item
<span class="token list punctuation">-</span> Fourth item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-在列表中嵌套其它元素" tabindex="-1"><a class="header-anchor" href="#_6-3-在列表中嵌套其它元素"><span>6.3 在列表中嵌套其它元素</span></a></h3><p>要在保留列表连续性的同时在列表中添加另一元素，请将该元素缩进四个空格或一个制表符。如下例所示：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">*</span>   This is the first list item.
<span class="token list punctuation">*</span>   Here&#39;s the second list item.

<span class="token code keyword">    I need to add another paragraph below the second list item.</span>

<span class="token list punctuation">*</span>   And here&#39;s the third list item.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引用块：</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">*</span>   This is the first list item.
<span class="token list punctuation">*</span>   Here&#39;s the second list item.

<span class="token code keyword">    &gt; A blockquote would look great below the second list item.</span>

<span class="token list punctuation">*</span>   And here&#39;s the third list item.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码块：</strong> 代码块通常采用四个空格或一个制表符缩进。当它们被放在列表中时，请将它们缩进八个空格或两个制表符。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span>  Open the file.
<span class="token list punctuation">2.</span>  Find the following code block on line 21:

<span class="token code keyword">        &lt;html&gt;
          &lt;head&gt;
            &lt;title&gt;Test&lt;/title&gt;
          &lt;/head&gt;</span>

<span class="token list punctuation">3.</span>  Update the title to match the name of your website.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片：</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span>  Open the file containing the Linux mascot.
<span class="token list punctuation">2.</span>  Marvel at its beauty.

<span class="token code keyword">    ![Tux, the Linux mascot](/assets/images/tux.png)</span>

<span class="token list punctuation">3.</span>  Close the file.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>列表：</strong></p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> First item
<span class="token list punctuation">2.</span> Second item
<span class="token list punctuation">3.</span> Third item
    <span class="token list punctuation">-</span> Indented item
    <span class="token list punctuation">-</span> Indented item
<span class="token list punctuation">4.</span> Fourth item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-代码语法" tabindex="-1"><a class="header-anchor" href="#_7-代码语法"><span>7 代码语法</span></a></h2><p>要将单词或短语表示为代码，请将其包裹在反引号(\`)中</p><h3 id="_7-1-转义反引号" tabindex="-1"><a class="header-anchor" href="#_7-1-转义反引号"><span>7.1 转义反引号</span></a></h3><p>如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双引号(<code>\`code\`</code>)中</p><h3 id="_7-2-代码块" tabindex="-1"><a class="header-anchor" href="#_7-2-代码块"><span>7.2 代码块</span></a></h3><p>要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符，要创建不用缩进的代码块，请使用围栏式代码块</p><h2 id="_8-分割线语法" tabindex="-1"><a class="header-anchor" href="#_8-分割线语法"><span>8 分割线语法</span></a></h2><p>要创建分隔线，请在单独一行上使用三个或多个破折号(<code>---</code>)，并且不能包含其它内容</p><h2 id="_9-链接语法" tabindex="-1"><a class="header-anchor" href="#_9-链接语法"><span>9 链接语法</span></a></h2><p>超链接Markdown语法代码：<code>[超链接显示名](超链接地址 &quot;超链接title&quot;)</code><br> 对应的HTML代码：<code>&lt;a href=&quot;超链接地址&quot; title=&quot;超链接title&quot;&gt;超链接显示名&lt;/a&gt;</code></p><h3 id="_9-1-网址和email地址" tabindex="-1"><a class="header-anchor" href="#_9-1-网址和email地址"><span>9.1 网址和Email地址</span></a></h3><p>使用尖括号可以很方便地把URL或者email地址变成可点击的链接。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>&lt;https://markdown.com.cn&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fake@example.com</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-带格式化的链接" tabindex="-1"><a class="header-anchor" href="#_9-2-带格式化的链接"><span>9.2 带格式化的链接</span></a></h3><p>强调链接，在链接语法前后增加星号。要将链接表示为代码，请在方括号中添加反引号。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>I love supporting the <span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token url">[<span class="token content">EFF</span>](<span class="token url">https://eff.org</span>)</span></span><span class="token punctuation">**</span></span>.
This is the <span class="token italic"><span class="token punctuation">*</span><span class="token content"><span class="token url">[<span class="token content">Markdown Guide</span>](<span class="token url">https://www.markdownguide.org</span>)</span></span><span class="token punctuation">*</span></span>.
See the section on <span class="token url">[<span class="token content"><span class="token code-snippet code keyword">\`code\`</span></span>](<span class="token url">#code</span>)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73),r={href:"https://eff.org",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.markdownguide.org",target:"_blank",rel:"noopener noreferrer"},m=n("a",{href:"#code"},[n("code",null,"code")],-1),h=t(`<h3 id="_9-3-引用类型链接" tabindex="-1"><a class="header-anchor" href="#_9-3-引用类型链接"><span>9.3 引用类型链接</span></a></h3><p>引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其它位置的部分，以使文本易于阅读。</p><p><strong>链接第一部分格式</strong><br> 引用类型的链接的第一部分使用两组括号进行格式设置。第一组方括号包围应显示为链接的文本。第二组括号显示了一个标签，该标签用于指向您存储在文档其它位置的链接。</p><p>尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写。可以包含字母，数字，空格或标点符号。如下例：</p><ul><li><code>[hobbit-hole][1]</code></li><li><code>[hobbit-hole] [1]</code></li></ul><p><strong>链接第二部分格式</strong><br> 引用类型链接的第二部分使用以下属性设置格式：</p><ol><li>放在括号中的标签，其后紧跟一个冒号和至少一个空格（例如<code>[label]:</code>）。</li><li>链接的URL，可以选择将其括号在尖括号中。</li><li>链接的可选标题，可以将其括在双引号，单引号或括号中。</li></ol><p>如下例：</p><ul><li><code>[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle</code></li><li><code>[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle &quot;Hobbit lifestyles&quot;</code></li><li><code>[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle &#39;Hobbit lifestyles&#39;</code></li><li><code>[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)</code></li><li><code>[1]: &lt;https://en.wikipedia.org/wiki/Hobbit#Lifestyle&gt; &quot;Hobbit lifestyles&quot;</code></li><li><code>[1]: &lt;https://en.wikipedia.org/wiki/Hobbit#Lifestyle&gt; &#39;Hobbit lifestyles&#39;</code></li><li><code>[1]: &lt;https://en.wikipedia.org/wiki/Hobbit#Lifestyle&gt; (Hobbit lifestyles)</code></li></ul><h2 id="_10-图片语法" tabindex="-1"><a class="header-anchor" href="#_10-图片语法"><span>10 图片语法</span></a></h2><p>要添加图像，需要使用感叹号(<code>!</code>)，然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。</p><p>插入图片Markdown语法代码：<code>![图片alt](图片链接 &quot;图片title&quot;)</code><br> 对应的HTML代码：<code>&lt;img src=&quot;图片链接&quot; alt=&quot;图片alt&quot; title=&quot;图片title&quot;&gt;</code></p><p>如：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">这是图片</span>](<span class="token url">/assets/img/philly-magic-garden.jpg</span> <span class="token string">&quot;Magic Gardens&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>链接图片：</strong><br> 给图片增加链接，需要将图像的Markdown括在方括号中，然后将链接添加在圆括号中。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">![沙漠中的岩石图片</span>](<span class="token url">/assets/img/shiprock.jpg</span> <span class="token string">&quot;Shiprock&quot;</span>)</span>](https://markdown.com.cn)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-1-转义字符语法" tabindex="-1"><a class="header-anchor" href="#_10-1-转义字符语法"><span>10.1 转义字符语法</span></a></h2><p>要显示原本用于格式化Markdown文档的字符，需要在字符前面添加反斜杠字符\\。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\* Without the backslash, this would be a bullet in an unordered list.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>渲染效果如下： * Without the backslash, this would be a bullet in an unordered list.</p><h3 id="_10-2-可做转义的字符" tabindex="-1"><a class="header-anchor" href="#_10-2-可做转义的字符"><span>10.2 可做转义的字符</span></a></h3><p>以下列出的字母都可以通过使用反斜杠字符从而达到转义目的。</p><table><thead><tr><th style="text-align:left;">Character</th><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;">\\</td><td style="text-align:left;">backslash</td></tr><tr><td style="text-align:left;">\`</td><td style="text-align:left;">backtick(see also scaping backticks in code)</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">asterisk</td></tr><tr><td style="text-align:left;">_</td><td style="text-align:left;">underscore</td></tr><tr><td style="text-align:left;">{}</td><td style="text-align:left;">curly braces</td></tr><tr><td style="text-align:left;">[]</td><td style="text-align:left;">brackets</td></tr><tr><td style="text-align:left;">()</td><td style="text-align:left;">parentheses</td></tr><tr><td style="text-align:left;">#</td><td style="text-align:left;">pound sign</td></tr><tr><td style="text-align:left;">+</td><td style="text-align:left;">plus sign</td></tr><tr><td style="text-align:left;">-</td><td style="text-align:left;">minus sign(hyphen)</td></tr><tr><td style="text-align:left;">.</td><td style="text-align:left;">dot</td></tr><tr><td style="text-align:left;">!</td><td style="text-align:left;">exclamation mark</td></tr><tr><td style="text-align:left;">|</td><td style="text-align:left;">pipe(see also escaping pipe in tables)</td></tr></tbody></table><h3 id="_10-3-特殊字符自动转义" tabindex="-1"><a class="header-anchor" href="#_10-3-特殊字符自动转义"><span>10.3 特殊字符自动转义</span></a></h3><p>在HTML文件中，有两个字符需要特殊处理：<code>&lt;</code>和<code>&amp;</code>。<code>&lt;</code>符号用于起始标签，<code>&amp;</code>符号用于标记HTML实体。如果只是想用这些符号，你必须使用实体的形式，像<code>&amp;lt;</code>和<code>&amp;amp;</code></p><p>比如：</p><ul><li><code>http://images.google.com/images?num=30&amp;q=larry+bird</code> -&gt; <code>http://images.google.com/images?num=30&amp;amp;q=larry+bird</code></li><li><code>AT&amp;T</code> -&gt; <code>AT&amp;amp;T</code></li><li><code>©</code> -&gt; <code>&amp;copy;</code></li><li><code>4 &lt; 5</code> -&gt; <code>4 &amp;lt; 5</code></li></ul><h2 id="_11-markdown内嵌html标签" tabindex="-1"><a class="header-anchor" href="#_11-markdown内嵌html标签"><span>11 Markdown内嵌HTML标签</span></a></h2><p>对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。</p><h2 id="_12-markdown扩展语法" tabindex="-1"><a class="header-anchor" href="#_12-markdown扩展语法"><span>12 Markdown扩展语法</span></a></h2><h3 id="_12-1-标题编号" tabindex="-1"><a class="header-anchor" href="#_12-1-标题编号"><span>12.1 标题编号</span></a></h3><p>所谓标题编号意思就是给这个标题设置一个ID：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> My Great Heading {#custom-id}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上写法实际渲染成下面的：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>My Great Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时可以通过a标签链接到标题ID：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#heading-ids<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Heading IDs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>	
<span class="token comment">&lt;!-- 或以下写法，意思是链接到某网页下的什么位置 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://markdown.com.cn/extended-syntax/heading-ids.html#headid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Heading IDs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-定义列表" tabindex="-1"><a class="header-anchor" href="#_12-2-定义列表"><span>12.2 定义列表</span></a></h3><p>简单来说允许你通过缩进来区分一些是主项还是子项，如下：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上语法在html中会渲染为：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>First Term<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>This is the definition of the first term.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Second Term<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>This is one definition of the second term. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>This is another definition of the second term.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现渲染呈现结果为：</p><dl><dt>First Term</dt><dd>This is the definition of the first term.</dd><dt>Second Term</dt><dd>This is one definition of the second term. </dd><dd>This is another definition of the second term.</dd></dl><h3 id="_12-3-删除线" tabindex="-1"><a class="header-anchor" href="#_12-3-删除线"><span>12.3 删除线</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content">世界是平坦的。</span><span class="token punctuation">~~</span></span> 我们现在知道世界是圆的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际渲染为： <s>世界是平坦的。</s> 我们现在知道世界是圆的。</p><h3 id="_12-4-任务列表语法" tabindex="-1"><a class="header-anchor" href="#_12-4-任务列表语法"><span>12.4 任务列表语法</span></a></h3><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [x] Write the press release
<span class="token list punctuation">-</span> [ ] Update the website
<span class="token list punctuation">-</span> [ ] Contact the media
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上渲染为：</p><ul><li>[x] Write the press release</li><li>[ ] Update the website</li><li>[ ] Contact the media</li></ul><h3 id="_12-5-使用emoji表情" tabindex="-1"><a class="header-anchor" href="#_12-5-使用emoji表情"><span>12.5 使用Emoji表情</span></a></h3><p>在Markdown中，有两种方法可以将表情符号添加到md文件中，一种是直接复制并粘贴到Markdown格式的文本中，或者输入emoji shortcodes。</p>`,53),k=n("strong",null,"复制和粘贴表情符号：",-1),g={href:"https://emojipedia.org/",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"许多Markdown应用程序会自动以Markdown格式的文本显示表情符号。从Markdown应用程序导出的HTML和PDF文件应显示表情符号。",-1),b=n("p",null,"Tip: 如果您使用的是静态网站生成器，请确保将HTML页面编码为UTF-8。",-1),_=n("strong",null,"使用表情符号简码：",-1),f={href:"https://github.com/markdown/markdown.github.com/wiki/Implementations",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>一些Markdown应用程序允许您通过键入表情符号短代码来插入表情符号。这些以冒号开头和结尾，并包含表情符号的名称，如：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>去露营了！ :tent: 很快回来。

真好笑！ :joy:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是推荐使用直接复制和粘贴表情符号，表情符号简码会在部分Markdown应用程序中支持。</p>`,3);function x(y,q){const a=l("ExternalLinkIcon");return d(),o("div",null,[p,n("p",null,[e("渲染效果如下： I love supporting the "),n("strong",null,[n("a",r,[e("EFF"),s(a)])]),e(". This is the "),n("em",null,[n("a",u,[e("Markdown Guide"),s(a)])]),e(". See the section on "),m,e(".")]),h,n("p",null,[k,n("a",g,[e("https://emojipedia.org/"),s(a)])]),v,b,n("p",null,[_,n("a",f,[e("https://github.com/markdown/markdown.github.com/wiki/Implementations"),s(a)])]),w])}const H=i(c,[["render",x],["__file","markdown-syntax.html.vue"]]),F=JSON.parse(`{"path":"/web/markdown/markdown-syntax.html","title":"Markdown 语法","lang":"zh-CN","frontmatter":{"title":"Markdown 语法","date":"2023-04-05T00:00:00.000Z","category":["Markdown"],"order":2,"description":" 1 标题语法 要创建标题，在单词或短语前面添加井号（#）。#的数量代表了标题的级别。 如添加三个#表示创建三级标题(h3)(例如：### My Header) 可选语法： 可以在文本下方添加任意数量的 == 号来标识一级标题，或者 -- 号来标识二级标题。 注意： 不同的Markdown应用程序处理#和标题之间的空格方式并不一致。为了兼容考虑，需要用...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/markdown/markdown-syntax.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"Markdown 语法"}],["meta",{"property":"og:description","content":" 1 标题语法 要创建标题，在单词或短语前面添加井号（#）。#的数量代表了标题的级别。 如添加三个#表示创建三级标题(h3)(例如：### My Header) 可选语法： 可以在文本下方添加任意数量的 == 号来标识一级标题，或者 -- 号来标识二级标题。 注意： 不同的Markdown应用程序处理#和标题之间的空格方式并不一致。为了兼容考虑，需要用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/xinyang424/assets/images/tux.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Markdown 语法"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-04-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 语法\\",\\"image\\":[\\"https://github.com/xinyang424/assets/images/tux.png\\",\\"https://github.com/xinyang424/assets/img/philly-magic-garden.jpg \\\\\\"Magic Gardens\\\\\\"\\",\\"https://github.com/xinyang424/assets/img/shiprock.jpg \\\\\\"Shiprock\\\\\\"\\"],\\"datePublished\\":\\"2023-04-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"1 标题语法","slug":"_1-标题语法","link":"#_1-标题语法","children":[]},{"level":2,"title":"2 段落语法","slug":"_2-段落语法","link":"#_2-段落语法","children":[]},{"level":2,"title":"3 换行语法","slug":"_3-换行语法","link":"#_3-换行语法","children":[]},{"level":2,"title":"4 强调语法","slug":"_4-强调语法","link":"#_4-强调语法","children":[{"level":3,"title":"4.1 粗体","slug":"_4-1-粗体","link":"#_4-1-粗体","children":[]},{"level":3,"title":"4.2 斜体","slug":"_4-2-斜体","link":"#_4-2-斜体","children":[]},{"level":3,"title":"4.3 斜体且加粗","slug":"_4-3-斜体且加粗","link":"#_4-3-斜体且加粗","children":[]}]},{"level":2,"title":"5 引用语法","slug":"_5-引用语法","link":"#_5-引用语法","children":[{"level":3,"title":"5.1 多个段落的块引用","slug":"_5-1-多个段落的块引用","link":"#_5-1-多个段落的块引用","children":[]},{"level":3,"title":"5.2 嵌套块引用","slug":"_5-2-嵌套块引用","link":"#_5-2-嵌套块引用","children":[]},{"level":3,"title":"5.3 带有其它元素的块引用","slug":"_5-3-带有其它元素的块引用","link":"#_5-3-带有其它元素的块引用","children":[]}]},{"level":2,"title":"6 列表语法","slug":"_6-列表语法","link":"#_6-列表语法","children":[{"level":3,"title":"6.1 有序列表","slug":"_6-1-有序列表","link":"#_6-1-有序列表","children":[]},{"level":3,"title":"6.2 无序列表","slug":"_6-2-无序列表","link":"#_6-2-无序列表","children":[]},{"level":3,"title":"6.3 在列表中嵌套其它元素","slug":"_6-3-在列表中嵌套其它元素","link":"#_6-3-在列表中嵌套其它元素","children":[]}]},{"level":2,"title":"7 代码语法","slug":"_7-代码语法","link":"#_7-代码语法","children":[{"level":3,"title":"7.1 转义反引号","slug":"_7-1-转义反引号","link":"#_7-1-转义反引号","children":[]},{"level":3,"title":"7.2 代码块","slug":"_7-2-代码块","link":"#_7-2-代码块","children":[]}]},{"level":2,"title":"8 分割线语法","slug":"_8-分割线语法","link":"#_8-分割线语法","children":[]},{"level":2,"title":"9 链接语法","slug":"_9-链接语法","link":"#_9-链接语法","children":[{"level":3,"title":"9.1 网址和Email地址","slug":"_9-1-网址和email地址","link":"#_9-1-网址和email地址","children":[]},{"level":3,"title":"9.2 带格式化的链接","slug":"_9-2-带格式化的链接","link":"#_9-2-带格式化的链接","children":[]},{"level":3,"title":"9.3 引用类型链接","slug":"_9-3-引用类型链接","link":"#_9-3-引用类型链接","children":[]}]},{"level":2,"title":"10 图片语法","slug":"_10-图片语法","link":"#_10-图片语法","children":[]},{"level":2,"title":"10.1 转义字符语法","slug":"_10-1-转义字符语法","link":"#_10-1-转义字符语法","children":[{"level":3,"title":"10.2 可做转义的字符","slug":"_10-2-可做转义的字符","link":"#_10-2-可做转义的字符","children":[]},{"level":3,"title":"10.3 特殊字符自动转义","slug":"_10-3-特殊字符自动转义","link":"#_10-3-特殊字符自动转义","children":[]}]},{"level":2,"title":"11 Markdown内嵌HTML标签","slug":"_11-markdown内嵌html标签","link":"#_11-markdown内嵌html标签","children":[]},{"level":2,"title":"12 Markdown扩展语法","slug":"_12-markdown扩展语法","link":"#_12-markdown扩展语法","children":[{"level":3,"title":"12.1 标题编号","slug":"_12-1-标题编号","link":"#_12-1-标题编号","children":[]},{"level":3,"title":"12.2 定义列表","slug":"_12-2-定义列表","link":"#_12-2-定义列表","children":[]},{"level":3,"title":"12.3 删除线","slug":"_12-3-删除线","link":"#_12-3-删除线","children":[]},{"level":3,"title":"12.4 任务列表语法","slug":"_12-4-任务列表语法","link":"#_12-4-任务列表语法","children":[]},{"level":3,"title":"12.5 使用Emoji表情","slug":"_12-5-使用emoji表情","link":"#_12-5-使用emoji表情","children":[]}]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":10.01,"words":3002},"filePathRelative":"web/markdown/markdown-syntax.md","localizedDate":"2023年4月5日","autoDesc":true}`);export{H as comp,F as data};
