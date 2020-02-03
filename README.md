# 直播dislike

[![status](https://img.shields.io/badge/status-stable-green.svg)](https://github.com/tychxn/jd-assistant)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![star, issue](https://img.shields.io/badge/star%2C%20issue-welcome-brightgreen.svg)](https://github.com/tychxn/jd-assistant)


![直播dislike][logo]

[logo]: https://github.com/hangdra/StreamWebUnlike/blob/master/images/dislike218_235.png "Logo of 直播dislike"

  给[斗鱼]网页用户提供一款[Chrome 浏览器]扩展程序，屏蔽自己不喜欢的主播(只在网页端生效)。

### 有不喜欢的主播？每次在网页看直播都会刷出来？？屏蔽不了？而且还被直播间360了？？？一个chrome 浏览器扩展程序帮助你解决烦恼！！

### 简介

  本程序为 [Chrome 浏览器] 的扩展插件，用于在直播平台[斗鱼]，给网页用户提供一款chrome浏览器扩展程序，在页面屏蔽自己喜欢的主播，插件内所有操作可以撤销。

### 功能

1. 屏蔽主播。
2. 解除屏蔽。
3. 插件设置借助chrome.storage API 根据账户可夸设备使用。

## 目录

* [运行环境](#env)
* [可能需要的第三方软件](#third)
* [下载安装与使用](#howToUse)
* [使用教程图文版本](#howToUseInStoryMode)
* [依赖的权限](#privilege)
* [或许会添加的功能](#never)

### <div id="env">运行环境:</div>

- \[[Chrome 浏览器]\] \(<https://www.google.cn/intl/zh-CN/chrome/>\)

### <div id="third">运行环境:</div>

- \[*optional1*\] \[[360压缩]\]
- \[*optional1*\] \[[Git BASH]\]


### <div id="howToUse">下载安装与使用:</div>

>- 下载  
>>1. 通过 \[[Git BASH]\] 或者页面[Download Zip]的方式 下载本项目。  
>
>- 安装  
>>2. \[[Chrome 浏览器]\] 地址栏输入<chrome://extensions> 进入扩展程序页面。
>>3. 打开<kbd>开发者模式</kbd>（扩展程序页面右上角）。    
>>4. 点击<kbd>加载已解压的扩展程序</kbd>并选择项目下载目录  （例如：F:\code\StreamWebUnlike）。    
>
>- 使用     
>>5. 右键点击地址栏右侧<kbd>直播dislike</kbd>按钮，选择<kbd>选项</kbd> 。    
>>6. 在房间号一栏中**输入你不喜欢主播的房间号**，按  <kbd>Enter</kbd> （回车）直接屏蔽房间。  
>>7. 对已屏蔽的主播，在**Dislike**下面找到对应的房间号，点击<kbd>✘</kbd>按钮并确认，可以取消屏蔽。  
>>8. 点击 <kbd>清空dislike</kbd>并确认就可以使全播被屏蔽的主播复现。  

### <div id="howToUseInStoryMode">使用教程图文版本:</div>

- ✖️ 还未支持

### <div id="privilege">软件功能与依赖的权限:</div>

- 读取本地数据 [✘]
- 采集用户数据 [✘]
- 外网通信 [✘]
- 使用chrome.storage API存储，检索，追踪用户插件内设置数据 [✔]
- 可操作的域名：[斗鱼](https://www.douyu.com/)\(<https://www.douyu.com/>\) [✔]
- 使用chrome.tts API 进行语音提示 [✔]
- 使用chrome.webNavigation API 获取页面状态，便于在页面加载完成后与页面交互 [✔]
- 使用chrome.alarms API 进行代码调度，延迟或直接运行代码逻辑 [✔]


### <div id="never">或许会添加的功能:</div>

- [ ] 开播提醒
- [ ] 在网页上使用按钮直接屏蔽主播
- [ ] 国际化（英文播报，日文播报 等)

[Download Zip]: (/hangdra/StreamWebUnlike/archive/master.zip)
[360压缩]: (https://yasuo.360.cn/)
[Git BASH]: (https://gitforwindows.org/)
[斗鱼]: (https://www.douyu.com/)
[Chrome 浏览器]: (https://www.google.cn/intl/zh-CN/chrome/)
