import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,a as n,b as s,d as l,e as i}from"./app-gG6IvZ60.js";const c={},r={class:"hint-container info"},u=n("p",{class:"hint-container-title"},"前言",-1),d={href:"https://cn.rollupjs.org/",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),v=i(`<h2 id="rollup优点" tabindex="-1"><a class="header-anchor" href="#rollup优点"><span>rollup优点</span></a></h2><ol><li>rollup支持许多输出格式：ES模块、CommonJS、UMD、SystemJS等，不仅可以为web打包，还可以为许多其它平台打包。</li><li>使用了Tree-shaking。</li><li>虽然使用到了ES6新标准化代码的模块格式，但是也支持之前的CommonJS使用。</li><li>根据不同的入口点和动态导入将代码拆分，只需适合用输出格式的导入机制，无需使用自定义加载器代码。</li><li>强大的插件机制</li><li>vite打包也是使用的rollup</li></ol><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> rollup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件rollup-config-js" tabindex="-1"><a class="header-anchor" href="#配置文件rollup-config-js"><span>配置文件rollup.config.js</span></a></h2><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常配置文件以<code>rollup.config.js</code>或<code>rollup.config.mjs</code>命名，它位于项目的根目录中。<br> 除非使用<code>--configPlugin</code>或<code>--bundleConfigAsCjs</code>选项，否则rollup将直接使用Node导入该文件。<br> 因为rollup遵循Node ESM语义，若想使用<code>require</code>导入模块或<code>module.exports</code>导出模块，使用这类的CommonJS模块的配置文件，需要将文件的扩展名/后缀名改为<code>.cjs</code>。</p><p>如果想支持ts语法，可以安装插件<code>@rollup/plugin-typescript</code></p><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h3><details class="hint-container details"><summary>查看详情</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>

<span class="token comment">// 可以是数组（即多个输入源）</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token comment">// 核心输入选项</span>
	external<span class="token punctuation">,</span>
	input<span class="token punctuation">,</span> <span class="token comment">// 有条件地需要</span>
	plugins<span class="token punctuation">,</span>

	<span class="token comment">// 进阶输入选项</span>
	cache<span class="token punctuation">,</span>
	onwarn<span class="token punctuation">,</span>
	preserveEntrySignatures<span class="token punctuation">,</span>
	strictDeprecations<span class="token punctuation">,</span>

	<span class="token comment">// 危险区域</span>
	acorn<span class="token punctuation">,</span>
	acornInjectPlugins<span class="token punctuation">,</span>
	context<span class="token punctuation">,</span>
	moduleContext<span class="token punctuation">,</span>
	preserveSymlinks<span class="token punctuation">,</span>
	shimMissingExports<span class="token punctuation">,</span>
	treeshake<span class="token punctuation">,</span>

	<span class="token comment">// 实验性</span>
	experimentalCacheExpiry<span class="token punctuation">,</span>
	experimentalLogSideEffects<span class="token punctuation">,</span>
	perf<span class="token punctuation">,</span>

	<span class="token comment">// 必需（可以是数组，用于描述多个输出）</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// 核心输出选项</span>
		dir<span class="token punctuation">,</span>
		file<span class="token punctuation">,</span>
		format<span class="token punctuation">,</span>
		globals<span class="token punctuation">,</span>
		name<span class="token punctuation">,</span>
		plugins<span class="token punctuation">,</span>

		<span class="token comment">// 进阶输出选项</span>
		assetFileNames<span class="token punctuation">,</span>
		banner<span class="token punctuation">,</span>
		chunkFileNames<span class="token punctuation">,</span>
		compact<span class="token punctuation">,</span>
		entryFileNames<span class="token punctuation">,</span>
		extend<span class="token punctuation">,</span>
		footer<span class="token punctuation">,</span>
		hoistTransitiveImports<span class="token punctuation">,</span>
		inlineDynamicImports<span class="token punctuation">,</span>
		interop<span class="token punctuation">,</span>
		intro<span class="token punctuation">,</span>
		manualChunks<span class="token punctuation">,</span>
		minifyInternalExports<span class="token punctuation">,</span>
		outro<span class="token punctuation">,</span>
		paths<span class="token punctuation">,</span>
		preserveModules<span class="token punctuation">,</span>
		preserveModulesRoot<span class="token punctuation">,</span>
		sourcemap<span class="token punctuation">,</span>
		sourcemapBaseUrl<span class="token punctuation">,</span>
		sourcemapExcludeSources<span class="token punctuation">,</span>
		sourcemapFile<span class="token punctuation">,</span>
		sourcemapIgnoreList<span class="token punctuation">,</span>
		sourcemapPathTransform<span class="token punctuation">,</span>
		validate<span class="token punctuation">,</span>

		<span class="token comment">// 危险区域</span>
		amd<span class="token punctuation">,</span>
		esModule<span class="token punctuation">,</span>
		exports<span class="token punctuation">,</span>
		externalLiveBindings<span class="token punctuation">,</span>
		freeze<span class="token punctuation">,</span>
		indent<span class="token punctuation">,</span>
		namespaceToStringTag<span class="token punctuation">,</span>
		noConflict<span class="token punctuation">,</span>
		preferConst<span class="token punctuation">,</span>
		sanitizeFileName<span class="token punctuation">,</span>
		strict<span class="token punctuation">,</span>
		systemNullSetters<span class="token punctuation">,</span>

		<span class="token comment">// 实验性</span>
		experimentalMinChunkSize
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		buildDelay<span class="token punctuation">,</span>
		chokidar<span class="token punctuation">,</span>
		clearScreen<span class="token punctuation">,</span>
		skipWrite<span class="token punctuation">,</span>
		exclude<span class="token punctuation">,</span>
		include
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="配置rollup时有智能提示" tabindex="-1"><a class="header-anchor" href="#配置rollup时有智能提示"><span>配置rollup时有智能提示</span></a></h2><p><strong>方法一</strong> 由于rollup随附ts类型定义，因此可以使用JSDoc类型提示来利用IDE智能感知功能：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;rollup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RollupOptions<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">/* 你的配置 */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法二</strong> 依靠<code>defineConfig</code>辅助函数，无需JSDoc注释即可使用智能感知功能：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">/* 你的配置 */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法三</strong> 依靠导入ts类型声明</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> RollupOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> RollupOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">/* 你的配置 */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用原生node-es模块时得注意事项" tabindex="-1"><a class="header-anchor" href="#使用原生node-es模块时得注意事项"><span>使用原生Node ES模块时得注意事项</span></a></h2><h3 id="获取当前目录" tabindex="-1"><a class="header-anchor" href="#获取当前目录"><span>获取当前目录</span></a></h3><p>对于CommonJS文件，以前经常使用<code>__dirname</code>访问当前目录并将相对路径解析为绝对路径。 这在原生ES模块中不被支持，所以建议以下方法:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:url&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token comment">// 为 &lt;currentdir&gt;/src/some-file.js 生成绝对路径</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;src/some-file.js&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入package-json文件" tabindex="-1"><a class="header-anchor" href="#导入package-json文件"><span>导入package.json文件</span></a></h3><ul><li>node 17.5+，可以使用导入断言</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> pkg <span class="token keyword">from</span> <span class="token string">&#39;./package.json&#39;</span> <span class="token keyword">assert</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token comment">// Mark package dependencies as &quot;external&quot;. Rest of configuration</span>
	<span class="token comment">// omitted.</span>
	<span class="token literal-property property">external</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pkg<span class="token punctuation">.</span>dependencies<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于旧一些得Node版本，可以使用createRequire</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRequire <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> require <span class="token operator">=</span> <span class="token function">createRequire</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>直接从磁盘中读取并解析内容</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.mjs</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> readFileSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:fs&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 import.meta.url 可以使路径相对于当前源文件而不是 process.cwd()。</span>
<span class="token comment">// 更多信息参见：</span>
<span class="token comment">// https://nodejs.org/docs/latest-v16.x/api/esm.html#importmetaurl</span>
<span class="token keyword">const</span> packageJson <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>
	<span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行标志" tabindex="-1"><a class="header-anchor" href="#命令行标志"><span>命令行标志</span></a></h2><details class="hint-container details"><summary>查看详情</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">-</span>c<span class="token punctuation">,</span> <span class="token operator">--</span>config <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>     使用此配置文件
														（如果使用参数但未指定值，则默认为 rollup<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js）
<span class="token operator">-</span>d<span class="token punctuation">,</span> <span class="token operator">--</span>dir <span class="token operator">&lt;</span>dirname<span class="token operator">&gt;</span>         用于块的目录（如果不存在，则打印到 stdout）
<span class="token operator">-</span>e<span class="token punctuation">,</span> <span class="token operator">--</span>external <span class="token operator">&lt;</span>ids<span class="token operator">&gt;</span>        排除模块 <span class="token constant">ID</span> 的逗号分隔列表
<span class="token operator">-</span>f<span class="token punctuation">,</span> <span class="token operator">--</span>format <span class="token operator">&lt;</span>format<span class="token operator">&gt;</span>       输出类型（amd、cjs、es、iife、umd、system）
<span class="token operator">-</span>g<span class="token punctuation">,</span> <span class="token operator">--</span>globals <span class="token operator">&lt;</span>pairs<span class="token operator">&gt;</span>       <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">moduleID:Global</span><span class="token template-punctuation string">\`</span></span> 对的逗号分隔列表
<span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help                  显示此帮助消息
<span class="token operator">-</span>i<span class="token punctuation">,</span> <span class="token operator">--</span>input <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>      输入（替代 <span class="token operator">&lt;</span>entry file<span class="token operator">&gt;</span>）
<span class="token operator">-</span>m<span class="token punctuation">,</span> <span class="token operator">--</span>sourcemap             生成源映射（<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-m inline</span><span class="token template-punctuation string">\`</span></span> 为内联映射）
<span class="token operator">-</span>n<span class="token punctuation">,</span> <span class="token operator">--</span>name <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>           <span class="token constant">UMD</span> 导出的名称
<span class="token operator">-</span>o<span class="token punctuation">,</span> <span class="token operator">--</span>file <span class="token operator">&lt;</span>output<span class="token operator">&gt;</span>         单个输出文件（如果不存在，则打印到 stdout）
<span class="token operator">-</span>p<span class="token punctuation">,</span> <span class="token operator">--</span>plugin <span class="token operator">&lt;</span>plugin<span class="token operator">&gt;</span>       使用指定的插件（可重复）
<span class="token operator">-</span>v<span class="token punctuation">,</span> <span class="token operator">--</span>version               显示版本号
<span class="token operator">-</span>w<span class="token punctuation">,</span> <span class="token operator">--</span>watch                 监视产物文件并在更改时重新构建
<span class="token operator">--</span>amd<span class="token punctuation">.</span>autoId                基于块名称生成 <span class="token constant">AMD</span> <span class="token constant">ID</span>
<span class="token operator">--</span>amd<span class="token punctuation">.</span>basePath <span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>     要预先添加到自动生成的 <span class="token constant">AMD</span> <span class="token constant">ID</span> 的路径
<span class="token operator">--</span>amd<span class="token punctuation">.</span>define <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>         在 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">define</span><span class="token template-punctuation string">\`</span></span> 位置使用的函数
<span class="token operator">--</span>amd<span class="token punctuation">.</span>forceJsExtensionForImports 在 <span class="token constant">AMD</span> 导入中使用 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.js</span><span class="token template-punctuation string">\`</span></span> 扩展名
<span class="token operator">--</span>amd<span class="token punctuation">.</span>id <span class="token operator">&lt;</span>id<span class="token operator">&gt;</span>               <span class="token constant">AMD</span> 模块的 <span class="token constant">ID</span>（默认为匿名）
<span class="token operator">--</span>assetFileNames <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span>  发布资源的名称模式
<span class="token operator">--</span>banner <span class="token operator">&lt;</span>text<span class="token operator">&gt;</span>             在产物顶部插入的代码（位于包装器之外）
<span class="token operator">--</span>chunkFileNames <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span>  发布次要块的名称模式
<span class="token operator">--</span>compact                   缩小包装器代码
<span class="token operator">--</span>context <span class="token operator">&lt;</span>variable<span class="token operator">&gt;</span>        指定顶级 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">this</span><span class="token template-punctuation string">\`</span></span> 值
<span class="token operator">--</span>no<span class="token operator">-</span>dynamicImportInCjs     将外部动态 CommonJS 导入编写为 require
<span class="token operator">--</span>entryFileNames <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span>  发布入口块的名称模式
<span class="token operator">--</span>environment <span class="token operator">&lt;</span>values<span class="token operator">&gt;</span>      传递给配置文件的设置（请参阅示例）
<span class="token operator">--</span>no<span class="token operator">-</span>esModule               不添加 __esModule 属性
<span class="token operator">--</span>exports <span class="token operator">&lt;</span>mode<span class="token operator">&gt;</span>            指定导出模式（auto、<span class="token keyword">default</span>、named、none）
<span class="token operator">--</span>extend                    扩展由 <span class="token operator">--</span>name 定义的全局变量
<span class="token operator">--</span>no<span class="token operator">-</span>externalImportAssertions 在 <span class="token string">&quot;es&quot;</span> 输出中省略导入断言
<span class="token operator">--</span>no<span class="token operator">-</span>externalLiveBindings   不生成支持实时绑定的代码
<span class="token operator">--</span>failAfterWarnings         如果生成的构建产生警告，则退出并显示错误
<span class="token operator">--</span>footer <span class="token operator">&lt;</span>text<span class="token operator">&gt;</span>             在产物底部插入的代码（位于包装器之外）
<span class="token operator">--</span>no<span class="token operator">-</span>freeze                 不冻结命名空间对象
<span class="token operator">--</span>generatedCode <span class="token operator">&lt;</span>preset<span class="token operator">&gt;</span>    使用哪些代码特性（es5<span class="token operator">/</span>es2015）
<span class="token operator">--</span>generatedCode<span class="token punctuation">.</span>arrowFunctions 在生成的代码中使用箭头函数
<span class="token operator">--</span>generatedCode<span class="token punctuation">.</span>constBindings 在生成的代码中使用 <span class="token string">&quot;const&quot;</span>
<span class="token operator">--</span>generatedCode<span class="token punctuation">.</span>objectShorthand 在生成的代码中使用简写属性
<span class="token operator">--</span>no<span class="token operator">-</span>generatedCode<span class="token punctuation">.</span>reservedNamesAsProps 始终引用保留名称作为 props
<span class="token operator">--</span>generatedCode<span class="token punctuation">.</span>symbols     在生成的代码中使用符号
<span class="token operator">--</span>no<span class="token operator">-</span>hoistTransitiveImports 不将中转导入提升到入口块中
<span class="token operator">--</span>no<span class="token operator">-</span>indent                 不缩进结果
<span class="token operator">--</span>inlineDynamicImports      使用动态导入时创建单次打包
<span class="token operator">--</span>no<span class="token operator">-</span>interop                不包括交互操作块
<span class="token operator">--</span>intro <span class="token operator">&lt;</span>text<span class="token operator">&gt;</span>              在产物顶部插入的代码（位于包装器内部）
<span class="token operator">--</span>no<span class="token operator">-</span>makeAbsoluteExternalsRelative 不规范化外部导入
<span class="token operator">--</span>maxParallelFileOps <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> 并行读取的文件数
<span class="token operator">--</span>minifyInternalExports     强制或禁用内部导出的缩小
<span class="token operator">--</span>noConflict                为 <span class="token constant">UMD</span> 全局生成 noConflict 方法
<span class="token operator">--</span>outro <span class="token operator">&lt;</span>text<span class="token operator">&gt;</span>              在产物底部插入的代码（位于包装器内部）
<span class="token operator">--</span>perf                      显示性能计时
<span class="token operator">--</span>no<span class="token operator">-</span>preserveEntrySignatures 避免入口点的门面块
<span class="token operator">--</span>preserveModules           保留模块结构
<span class="token operator">--</span>preserveModulesRoot       将保留的模块放置在根路径下的此路径下
<span class="token operator">--</span>preserveSymlinks          解析文件时不要跟随符号链接
<span class="token operator">--</span>no<span class="token operator">-</span>sanitizeFileName       不要替换文件名中的无效字符
<span class="token operator">--</span>shimMissingExports        为丢失的导出创建卡扣变量
<span class="token operator">--</span>silent                    不打印警告
<span class="token operator">--</span>sourcemapBaseUrl <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>    使用给定的基本 <span class="token constant">URL</span> 发出绝对源映射 <span class="token constant">URL</span>
<span class="token operator">--</span>sourcemapExcludeSources   在源映射中不包括源代码
<span class="token operator">--</span>sourcemapFile <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>      指定源映射的包位置
<span class="token operator">--</span>stdin<span class="token operator">=</span>ext                 指定用于标准输入的文件扩展名
<span class="token operator">--</span>no<span class="token operator">-</span>stdin                  不要从 stdin 读取 <span class="token string">&quot;-&quot;</span>
<span class="token operator">--</span>no<span class="token operator">-</span>strict                 不在生成的模块中发出 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&quot;use strict&quot;;</span><span class="token template-punctuation string">\`</span></span>
<span class="token operator">--</span>strictDeprecations        抛出有关不推荐使用的功能的错误
<span class="token operator">--</span>no<span class="token operator">-</span>systemNullSetters      不要将空的 SystemJS setter 替换为 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">null</span><span class="token template-punctuation string">\`</span></span>
<span class="token operator">--</span>no<span class="token operator">-</span>treeshake              禁用除屑优化
<span class="token operator">--</span>no<span class="token operator">-</span>treeshake<span class="token punctuation">.</span>annotations 忽略纯调用注释
<span class="token operator">--</span>treeshake<span class="token punctuation">.</span>correctVarValueBeforeDeclaration 在声明之前将变量取消优化
<span class="token operator">--</span>treeshake<span class="token punctuation">.</span>manualPureFunctions <span class="token operator">&lt;</span>names<span class="token operator">&gt;</span> 手动将函数声明为纯函数
<span class="token operator">--</span>no<span class="token operator">-</span>treeshake<span class="token punctuation">.</span>moduleSideEffects 假设模块没有副作用
<span class="token operator">--</span>no<span class="token operator">-</span>treeshake<span class="token punctuation">.</span>propertyReadSideEffects 忽略属性访问副作用
<span class="token operator">--</span>no<span class="token operator">-</span>treeshake<span class="token punctuation">.</span>tryCatchDeoptimization 不要关闭 <span class="token keyword">try</span><span class="token operator">-</span>catch<span class="token operator">-</span>tree<span class="token operator">-</span>shaking
<span class="token operator">--</span>no<span class="token operator">-</span>treeshake<span class="token punctuation">.</span>unknownGlobalSideEffects 假设未知的全局变量不会抛出异常
<span class="token operator">--</span>validate                  验证输出
<span class="token operator">--</span>waitForBundleInput        等待打包输入文件
<span class="token operator">--</span>watch<span class="token punctuation">.</span>buildDelay <span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> 节流观察重建
<span class="token operator">--</span>no<span class="token operator">-</span>watch<span class="token punctuation">.</span>clearScreen      重建时不要清除屏幕
<span class="token operator">--</span>watch<span class="token punctuation">.</span>exclude <span class="token operator">&lt;</span>files<span class="token operator">&gt;</span>     排除要观察的文件
<span class="token operator">--</span>watch<span class="token punctuation">.</span>include <span class="token operator">&lt;</span>files<span class="token operator">&gt;</span>     限制观察到指定文件
<span class="token operator">--</span>watch<span class="token punctuation">.</span>onBundleEnd <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>   在 <span class="token string">&quot;BUNDLE_END&quot;</span> 事件上运行的 Shell 命令
<span class="token operator">--</span>watch<span class="token punctuation">.</span>onBundleStart <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span> 在 <span class="token string">&quot;BUNDLE_START&quot;</span> 事件上运行的 Shell 命令
<span class="token operator">--</span>watch<span class="token punctuation">.</span>onEnd <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>         在 <span class="token string">&quot;END&quot;</span> 事件上运行的 Shell 命令
<span class="token operator">--</span>watch<span class="token punctuation">.</span>onError <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>       在 <span class="token string">&quot;ERROR&quot;</span> 事件上运行的 Shell 命令
<span class="token operator">--</span>watch<span class="token punctuation">.</span>onStart <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>       在 <span class="token string">&quot;START&quot;</span> 事件上运行的 Shell 命令
<span class="token operator">--</span>watch<span class="token punctuation">.</span>skipWrite           在监视时不要将文件写入磁盘

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="rollup常用到的插件" tabindex="-1"><a class="header-anchor" href="#rollup常用到的插件"><span>rollup常用到的插件</span></a></h2><ol><li><code>@rollup/plugin-typescript</code>：识别ts文件</li><li><code> @rollup/plugin-json</code>：允许导入json文件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// src/main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> version <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;version &#39;</span> <span class="token operator">+</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>@rollup/plugin-terser</code>：压缩配置插件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> terser <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-terser&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;bundle.min.js&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;iife&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;version&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">terser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>@rollup/plugin-node-resolve</code>：让rollup在打包过程中处理第三方插件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><code>@rollup/plugin-commonjs</code>：让rollup处理依赖中使用到commonjs的模块。</li><li><code>@rollup/plugin-replace</code>：可以用于区分生产环境还是开发环境，此插件搭配<code>cross-env</code>进行使用</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> replace <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-replace&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;process.env.NODE_ENV&#39;</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li><code>cross-env</code>：设置环境变量</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development rollup -c -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production  rollup -c&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><code>rollup-plugin-node-externals</code>：自动排除<code>package.json</code>中一些模块为外部模块</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> externals <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-node-externals&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">externals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">devDeps</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//自动将dependencies下的依赖设为外部模块</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es-模块语法" tabindex="-1"><a class="header-anchor" href="#es-模块语法"><span>ES 模块语法</span></a></h2><h3 id="具名导入" tabindex="-1"><a class="header-anchor" href="#具名导入"><span>具名导入</span></a></h3><p>使用源模块中的原始名进行导入：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> something <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从源模块导入特定项目，并在导入时分配自定义名称：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> something <span class="token keyword">as</span> somethingElse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="名称空间导入" tabindex="-1"><a class="header-anchor" href="#名称空间导入"><span>名称空间导入</span></a></h3><p>将源模块中的所有内容作为一个对象导入，该对象将所有源模块的named exports公开为属性和方法。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> module <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="默认导入" tabindex="-1"><a class="header-anchor" href="#默认导入"><span>默认导入</span></a></h3><p>源模块以<code>export default</code>导出</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> something <span class="token keyword">from</span> <span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="无命名导入" tabindex="-1"><a class="header-anchor" href="#无命名导入"><span>无命名导入</span></a></h3><p>加载模块代码，但不要使任何新对象可用：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./module.js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这对于polyfill很有用，或者当导入代码的主要目的是处理prototypes时</p><h3 id="动态导入" tabindex="-1"><a class="header-anchor" href="#动态导入"><span>动态导入</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./modules.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> DefaultExport<span class="token punctuation">,</span> NamedExport <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用这个模块做点什么...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出"><span>导出</span></a></h2><h3 id="具名导出" tabindex="-1"><a class="header-anchor" href="#具名导出"><span>具名导出</span></a></h3><p>导出前先声明值</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> something <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> something <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>导出时重命名：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> something <span class="token keyword">as</span> somethingElse <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>声明后立即导出值：</p><div class="language-javacript line-numbers-mode" data-ext="javacript" data-title="javacript"><pre class="language-javacript"><code>// \`var\`, \`let\`, \`const\`, \`class\`, 和 \`function\` 都是有效的
export const something = true;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认导出" tabindex="-1"><a class="header-anchor" href="#默认导出"><span>默认导出</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> something<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,72);function m(b,g){const a=t("ExternalLinkIcon");return p(),o("div",null,[n("div",r,[u,n("p",null,[n("a",d,[s("rollup"),l(a)]),s("是一个 JavaScript 打包工具。"),k,s(" 它使用JavaScript的ES6版本中包含的新标准化代码模块格式，而不是以前的CommonJS的AMD等特殊解决方案。")])]),v])}const f=e(c,[["render",m],["__file","rollup.html.vue"]]),j=JSON.parse('{"path":"/web/build-tools/rollup.html","title":"rollup","lang":"zh-CN","frontmatter":{"title":"rollup","date":"2022-03-01T00:00:00.000Z","category":["构建工具"],"tag":["rollup","构建工具"],"description":" 前言 rollup是一个 JavaScript 打包工具。 它使用JavaScript的ES6版本中包含的新标准化代码模块格式，而不是以前的CommonJS的AMD等特殊解决方案。 rollup优点 rollup支持许多输出格式：ES模块、CommonJS、UMD、SystemJS等，不仅可以为web打包，还可以为许多其它平台打包。 使用了Tree-...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/build-tools/rollup.html"}],["meta",{"property":"og:site_name","content":"杨不旧"}],["meta",{"property":"og:title","content":"rollup"}],["meta",{"property":"og:description","content":" 前言 rollup是一个 JavaScript 打包工具。 它使用JavaScript的ES6版本中包含的新标准化代码模块格式，而不是以前的CommonJS的AMD等特殊解决方案。 rollup优点 rollup支持许多输出格式：ES模块、CommonJS、UMD、SystemJS等，不仅可以为web打包，还可以为许多其它平台打包。 使用了Tree-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"杨不旧"}],["meta",{"property":"article:tag","content":"rollup"}],["meta",{"property":"article:tag","content":"构建工具"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rollup\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"杨不旧\\",\\"url\\":\\"https://blog.xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"rollup优点","slug":"rollup优点","link":"#rollup优点","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置文件rollup.config.js","slug":"配置文件rollup-config-js","link":"#配置文件rollup-config-js","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"配置项","slug":"配置项","link":"#配置项","children":[]}]},{"level":2,"title":"配置rollup时有智能提示","slug":"配置rollup时有智能提示","link":"#配置rollup时有智能提示","children":[]},{"level":2,"title":"使用原生Node ES模块时得注意事项","slug":"使用原生node-es模块时得注意事项","link":"#使用原生node-es模块时得注意事项","children":[{"level":3,"title":"获取当前目录","slug":"获取当前目录","link":"#获取当前目录","children":[]},{"level":3,"title":"导入package.json文件","slug":"导入package-json文件","link":"#导入package-json文件","children":[]}]},{"level":2,"title":"命令行标志","slug":"命令行标志","link":"#命令行标志","children":[]},{"level":2,"title":"rollup常用到的插件","slug":"rollup常用到的插件","link":"#rollup常用到的插件","children":[]},{"level":2,"title":"ES 模块语法","slug":"es-模块语法","link":"#es-模块语法","children":[{"level":3,"title":"具名导入","slug":"具名导入","link":"#具名导入","children":[]},{"level":3,"title":"名称空间导入","slug":"名称空间导入","link":"#名称空间导入","children":[]},{"level":3,"title":"默认导入","slug":"默认导入","link":"#默认导入","children":[]},{"level":3,"title":"无命名导入","slug":"无命名导入","link":"#无命名导入","children":[]},{"level":3,"title":"动态导入","slug":"动态导入","link":"#动态导入","children":[]}]},{"level":2,"title":"导出","slug":"导出","link":"#导出","children":[{"level":3,"title":"具名导出","slug":"具名导出","link":"#具名导出","children":[]},{"level":3,"title":"默认导出","slug":"默认导出","link":"#默认导出","children":[]}]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":8.34,"words":2501},"filePathRelative":"web/build-tools/rollup.md","localizedDate":"2022年3月1日","autoDesc":true}');export{f as comp,j as data};
