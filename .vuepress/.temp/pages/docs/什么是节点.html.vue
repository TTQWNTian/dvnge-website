<template><div><h1 id="什么是节点" tabindex="-1"><a class="header-anchor" href="#什么是节点"><span>什么是节点？</span></a></h1>
<p>节点简单来讲就是“这一段话”（虽然不太严谨吧），在节点里面可以设置这里要有什么文本、立绘、背景等等，用户每点击一下屏幕就会切换到下一个节点。</p>
<p>比如之前我们写的这个：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#CBA6F7">var</span><span style="color:#CDD6F4"> 示例 </span><span style="color:#94E2D5">=</span><span style="color:#CDD6F4"> [</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        角色</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "Tian"</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        内容</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "你好，世界。"</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">]</span><span style="color:#9399B2">;</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#9399B2">{</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    角色</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> "Tian"</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    内容</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> "你好，世界。"</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>就是一个节点。</p>
<p>那么我们在后面再加一个节点：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#CBA6F7">var</span><span style="color:#CDD6F4"> 示例 </span><span style="color:#94E2D5">=</span><span style="color:#CDD6F4"> [</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        角色</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "Tian"</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        内容</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "你好，世界。"</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    },</span><span style="color:#9399B2;font-style:italic">// 注意：这里一定要加英文,号</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        角色</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "Tian"</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">        内容</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> "欢迎使用Dvnge~"</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">]</span><span style="color:#9399B2">;</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>运行 game.html 再点击一下屏幕就能看到切换对话了。</p>
</div></template>


