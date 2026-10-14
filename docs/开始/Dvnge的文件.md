---
description: 说明Dvnge视觉小说引擎的项目结构和各个文件的作用，包括css、js、章节等目录说明。
---

# Dvnge的文件

下载Dvnge最新版之后解压，里面的文件大概是这样：

::: file-tree
- css/
  - 样式.css
  - 动画.css
- js/
  - TTQ视觉小说引擎.js
  - 自定义功能.js
  - 导出入存档功能.js
  - 游戏配置.js
- chapter/
  - 序章.dvns
  - tl/
    - en/
      - 序章.dvns
    - ja/
      - 序章.dvns
- game.html
- index.html
- LICENSE.txt
:::

::: warning 此目录更新于 `v1.10.0-dev` 版本
:::

## css/样式.css

顾名思义，就是给游戏定义样式的文件，只要会一点基础的css就可以在这个文件随心所欲的修改游戏UI啦~

当然也可以再创建一个css文件来写自定义样式，只需要之后在 `game.html` 引用就行。

## css/动画.css

专门用于存放动画代码的文件。

## js/TTQ视觉小说引擎.js

引擎的核心文件，建议是不要动此文件（熟悉 JavaScript 除外）。

## js/自定义功能.js

是专门写自定义功能的文件，这个属于是引擎的高级功能了，给一些会编程的用户大限度扩展自己游戏的功能。像预留在右上角的自定义功能按钮，还有其他任何自定义功能都可以在这里编写。

## js/导出入存档功能.js

导出入存档所需的功能代码。

## js/游戏配置.js

可更改一些游戏的配置、预设之类。

## chapter/

这个是我们编写游戏的主要文件夹，在里面创建任意名称的 `.dvns` 文件或 `js` 文件，然后在其中编写游戏逻辑。

## chapter/tl/

每个章节的翻译文件，放在 `chapter/tl/语言代码/章节名.dvns`。

```text
chapter/序章.dvns
chapter/tl/en/序章.dvns
chapter/tl/ja/序章.dvns
```

`.dvns`或者`.js`都可以使用，翻译文件的结构必须和主文件对应，可翻译的包括对话、选项文本、输入提示、占位符、按钮文字、标题内容，例如：

```dvns
@输入 占位符=Enter here,提示文字=Enter your name,按钮文字=Confirm$
"Tian": Who are you?$
@选项
Yes
No$
"Tian": I hate you {name}...$
"Tian": I like you {name}~$
```

## game.html

游戏运行的入口。

## index.html

如果有游戏标题界面，就写在这个文件。

## LICENSE.txt

引擎的开源许可证，无论如何更改引擎都**禁止删除**。遵守开源协议，守护开源社区。