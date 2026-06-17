<template><div><h1 id="章节概念" tabindex="-1"><a class="header-anchor" href="#章节概念"><span>章节概念</span></a></h1>
<p>章节是使用Dvnge制作游戏的基本，它们是在 <code v-pre>章节/</code> 文件夹中的 <code v-pre>js</code> 文件，我们编写游戏的运行逻辑就是在这些文件中。</p>
<p><strong>那么该怎么使用呢？</strong></p>
<p>这里我们在 <code v-pre>章节/</code> 文件夹中创建一个 <code v-pre>示例.js</code> 文件,然后里面写上这样的代码：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#CBA6F7">var</span><span style="color:#CDD6F4"> 示例 </span><span style="color:#94E2D5">=</span><span style="color:#CDD6F4"> [</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        角色</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "Tian"</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        内容</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "你好，世界。"</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">]</span><span style="color:#9399B2">;</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>之后保存代码文件，这样就写好了一个基础的对话（现在看不懂为什么这么写不要紧，之后都会详细讲解）。</p>
<p>当然只创建文件是不起作用的，我们还需要在 <code v-pre>TTQ视觉小说引擎.js</code> 中加上所添加的章节路径。</p>
<p>在 <code v-pre>TTQ视觉小说引擎.js</code> 文件中找到 章节文件列表（大概在第十二行左右），然后在末尾添加这一行的代码：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#9399B2">{</span><span style="color:#CDD6F4"> 名称</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> "示例"</span><span style="color:#9399B2">,</span><span style="color:#CDD6F4"> 路径</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> "章节/示例.js"</span><span style="color:#9399B2"> }</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>加上后完整的 <code v-pre>章节文件列表</code> 代码是这样的：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#CBA6F7">const</span><span style="color:#CDD6F4"> 章节文件列表 </span><span style="color:#94E2D5">=</span><span style="color:#9399B2"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    {</span><span style="color:#CDD6F4"> 名称</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> "示例"</span><span style="color:#9399B2">,</span><span style="color:#CDD6F4"> 路径</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> "章节/示例.js"</span><span style="color:#9399B2"> }</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">};</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下载的引擎文件可能还会有“序章”，那个可以暂时先删掉，替换为本教学的“示例”，然后再用搜索替换来把 <code v-pre>TTQ视觉小说引擎.js</code> 的所有“序章”文本换成“示例”。</p>
<p>这样添加章节的配置就完成了！运行 game.html 就可以看到我们写的对话了。</p>
<p><img src="/docsImg/helloworld.webp" alt="helloworld.webp"></p>
</div></template>


