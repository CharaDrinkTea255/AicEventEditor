# AliceInCradle事件编辑器
> 可怜意味着什么？可怖／可爱／可靠

《AliceInCradle》是由 ひなゆあ 和 橋野みずは 制作的一款轻度 Ryona 类银河恶魔城 ARPG（https://fantia.jp/fanclubs/24531/posts）。
本编辑器用于生成其 StreamingAssets/evt 文件夹下的 .cmd 文件（注意不是 m2d 文件夹的），从而自定义游戏中的剧情事件。
这种 .cmd 文件的内容称为「哈语言」（因为 橋野みずは 俗称「哈酱」），注意它不是 Windows 的批处理脚本，在任何情况下请勿双击运行，尤其是来源不明的时候。

编辑器由 zhaouv 的 [antlr-blockly](https://github.com/zhaouv/antlr-blockly) 项目部署得到，
图形化部分采用了谷歌 Blockly 的较旧版本（内部状态为 xml 格式），通过 antlr 语法的 .g4 文件定义。

## 使用步骤
1. 点击绿色按钮 `<>Code▼` 再点击 "Download ZIP"。
2. 解压后先阅读 HowToUse.txt，再双击 index.html。

## 更新日志
2026-01 V1.2: 对话导出改回游戏原生格式，新增了基于 heredoc 语法（`<<<EOF`）的编译方式，使对话内嵌在.cmd文件中。
2024-01 V1.1: 为适配 e9ae9933 的 yaml 格式 localization，将对话导出格式改为 json。
2023-07 V1.0: 初版发布，基于 凌空の猫 的 anyincradle 重定向器。

# AliceInCradle Event Editor
> Kawaisou is ... Kowai / Kawaii / Kakkoii ?

[AliceInCradle](https://fantia.jp/fanclubs/24531/posts) is a Japanese ryona ARPG developed by Hinayua and Hashino Mizuha.
This editor can generate the ".cmd" files in the "StreamingAssets/evt" folder, to customize the events in the game.
The content of the ".cmd" files is a new programming language designed by Mizuha, which is called "Ha-chan lang" in player community.
These ".cmd" files are NOT "Windows batch" so do NOT double-click them to execute, especially when they are from unknown sources.
This editor is deployed by zhaouv's [antlr-blockly](https://github.com/zhaouv/antlr-blockly), and the graphical part is Google's "Blockly".

## How to use
1. Click the green button `<>Code▼` then click "Download ZIP".
2. Unzip the archive, read "HowToUse.txt", open "index.html".

## Update Log
2026-01 V1.2: Changed back to export the original conversation format, and added "heredoc" (`<<<EOF`) mode to let conversations be in the ".cmd" file.
2024-01 V1.1: Changed the exported conversation format to "json" (to be compatible with e9ae9933's localization format "yaml").
2023-07 V1.0: Initial version, the runtime environment is the redirector "anyincradle" by 凌空の猫.
