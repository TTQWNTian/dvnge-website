<template><div><h1 id="dvnge-更新日志" tabindex="-1"><a class="header-anchor" href="#dvnge-更新日志"><span>Dvnge 更新日志</span></a></h1>
<h2 id="v1-8-0-dev" tabindex="-1"><a class="header-anchor" href="#v1-8-0-dev"><span>v1.8.0-dev</span></a></h2>
<h3 id="新增" tabindex="-1"><a class="header-anchor" href="#新增"><span>新增</span></a></h3>
<ul>
<li>功能栏隐藏对话框按钮</li>
<li>多语言切换支持</li>
</ul>
<h3 id="多语言使用方法" tabindex="-1"><a class="header-anchor" href="#多语言使用方法"><span>多语言使用方法</span></a></h3>
<h4 id="_1-配置语言列表" tabindex="-1"><a class="header-anchor" href="#_1-配置语言列表"><span>1. 配置语言列表</span></a></h4>
<p>在 <code v-pre>js/语言配置.js</code> 中定义支持的语言：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#CBA6F7">const</span><span style="color:#CDD6F4"> 语言配置 </span><span style="color:#94E2D5">=</span><span style="color:#9399B2"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    默认语言</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> 'zh'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    语言列表</span><span style="color:#94E2D5">:</span><span style="color:#9399B2"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#A6E3A1">        'zh'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> '中文'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#A6E3A1">        'en'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> 'English'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#A6E3A1">        'ja'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> '日本語'</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">};</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-界面文字多语言" tabindex="-1"><a class="header-anchor" href="#_2-界面文字多语言"><span>2. 界面文字多语言</span></a></h4>
<p>在 <code v-pre>语言配置.界面文字</code> 中为每个界面元素添加多语言文本：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#CDD6F4">界面文字</span><span style="color:#9399B2">:</span><span style="color:#9399B2"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#A6E3A1">    '快进'</span><span style="color:#CDD6F4">: </span><span style="color:#9399B2">{</span><span style="color:#A6E3A1"> 'zh'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> '快进'</span><span style="color:#9399B2">,</span><span style="color:#A6E3A1"> 'en'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> 'Skip'</span><span style="color:#9399B2">,</span><span style="color:#A6E3A1"> 'ja'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> 'スキップ'</span><span style="color:#9399B2"> },</span></span></span>
<span class="line"><span class="line"><span style="color:#A6E3A1">    '隐藏'</span><span style="color:#CDD6F4">: </span><span style="color:#9399B2">{</span><span style="color:#A6E3A1"> 'zh'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> '隐藏'</span><span style="color:#9399B2">,</span><span style="color:#A6E3A1"> 'en'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> 'Hide'</span><span style="color:#9399B2">,</span><span style="color:#A6E3A1"> 'ja'</span><span style="color:#94E2D5">:</span><span style="color:#A6E3A1"> '隠す'</span><span style="color:#9399B2"> }</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-章节对话多语言" tabindex="-1"><a class="header-anchor" href="#_3-章节对话多语言"><span>3. 章节对话多语言</span></a></h4>
<p>在章节数据中为角色和内容添加多语言字段：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#9399B2">{</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    角色</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '中文角色名'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    角色_en</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'English Name'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    角色_ja</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '日本語名'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    内容</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '中文内容'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    内容_en</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'English Content'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    内容_ja</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '日本語内容'</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-选项多语言" tabindex="-1"><a class="header-anchor" href="#_4-选项多语言"><span>4. 选项多语言</span></a></h4>
<p>为选项按钮添加多语言文本字段：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#9399B2">{</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    文本</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '中文选项'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    文本_en</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'English Option'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    文本_ja</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '日本語選択肢'</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-输入组件多语言" tabindex="-1"><a class="header-anchor" href="#_5-输入组件多语言"><span>5. 输入组件多语言</span></a></h4>
<p>为输入节点添加多语言提示文字：</p>
<div class="language-javascript line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre  class="shiki catppuccin-mocha vp-code" style="background-color:#1e1e2e;color:#cdd6f4" v-pre=" language-javascript"><code><span class="line"><span class="line"><span style="color:#9399B2">{</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    提示文字</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '请输入名字'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    提示文字_en</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'Please enter your name'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    提示文字_ja</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '名前を入力してください'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    占位符</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '你的名字'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    占位符_en</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'Your name'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    占位符_ja</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'あなたの名前'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    按钮文字</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '确认'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    按钮文字_en</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> 'Confirm'</span><span style="color:#9399B2">,</span></span></span>
<span class="line"><span class="line"><span style="color:#CDD6F4">    按钮文字_ja</span><span style="color:#9399B2">:</span><span style="color:#A6E3A1"> '確認'</span></span></span>
<span class="line"><span class="line"><span style="color:#9399B2">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完成！</strong></p>
<h4 id="语言切换方式" tabindex="-1"><a class="header-anchor" href="#语言切换方式"><span>语言切换方式</span></a></h4>
<ul>
<li><strong>开始界面切换</strong>：点击开始界面的「语言」按钮，在弹层中选择语言</li>
<li><strong>自动记忆</strong>：切换后的语言偏好自动保存到 <code v-pre>localStorage</code>，下次打开时自动恢复</li>
<li><strong>运行时切换</strong>：在游戏内通过调用 <code v-pre>切换语言('语言代码')</code> 函数动态切换</li>
</ul>
<h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h4>
<ul>
<li>默认语言的内容使用基础字段名（如 <code v-pre>内容</code>、<code v-pre>角色</code>），无需加后缀</li>
<li>如果某语言字段缺失，引擎会自动回退到默认语言的内容</li>
<li>语言代码必须与 <code v-pre>语言列表</code> 中定义的键名一致</li>
</ul>
<h3 id="修复" tabindex="-1"><a class="header-anchor" href="#修复"><span>修复</span></a></h3>
<ul>
<li>隐藏对话框如果有交互节点点击空白处不能恢复对话框问题</li>
</ul>
<h3 id="相关修改文件" tabindex="-1"><a class="header-anchor" href="#相关修改文件"><span>相关修改文件</span></a></h3>
<ul>
<li>js/TTQ视觉小说引擎.js</li>
<li>css/样式.css</li>
<li>game.html</li>
<li>index.html</li>
</ul>
<h3 id="新增文件" tabindex="-1"><a class="header-anchor" href="#新增文件"><span>新增文件</span></a></h3>
<ul>
<li>js/语言配置.js</li>
</ul>
</div></template>


