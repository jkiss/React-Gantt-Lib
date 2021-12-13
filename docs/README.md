<div align="center">
    <br>
    <br>
    <a href="https://www.npmjs.com/package/@j.k.bi/react-gantt">
        <img width="150" height="150" src="https://github.com/jkiss/Public/blob/master/2021/Logo.png?raw=true">
    </a>
    <br>
    <br>

[![NPM Version][npm-image]][npm-url] 
![License ISC][license-image] 
[![Gitter][gitter-image]][gitter-url]
![Nodejs][node-image]
![](https://badgen.net/bundlephobia/minzip/@j.k.bi/react-gantt)

<h1>React Gantt</h1>
<p>
    A simple gantt chart for react :)
</p>
</div>

[npm-image]: https://img.shields.io/badge/npm-%40j.k.bi%2Freact--gantt-yellow
[npm-url]: http://npmjs.org/package/@j.k.bi/react-gantt
[license-image]: https://img.shields.io/badge/License-ISC-blue
[gitter-image]: https://badges.gitter.im/j-k-bi-react-gantt/community.svg
[gitter-url]: https://gitter.im/j-k-bi-react-gantt/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[node-image]: https://img.shields.io/badge/node.js-v14.16.0-green

## Table of Contents

1. [Install](#install)
2. [Usage](#usage)
2. [Api](#api)
2. [Browser Support](#browser-support)

## Install

```bash
npm i @j.k.bi/react-gantt
```
[![NPM](https://nodeico.herokuapp.com/@j.k.bi/react-gantt.svg)](https://npmjs.com/package/@j.k.bi/react-gantt)

## Usage

[View the demo »](https://codesandbox.io/s/gantt-react-demo-d0j02)

```js
import GanttReact from '@j.k.bi/react-gantt'

const config = {
    title: "业务甘特图",
    width: 800,
    height: 600,
    showPercent: 0.2, // 显示百分比
    showStartPercent: 0.0, // 起始位置百分比
    startDate: '2021-03-31 22:15', // 图表起始日期
    endDate: '2021-04-02 23:45', // 图表终点日期
    nodes: [
        {
            id: '1',
            name: '小鹿1', // 任务所属人姓名
            yAxis: '任务1', // 任务名
            value: {
                startTime: '2021-03-31 23:00',
                endTime: '2021-04-01 02:25',
            },
            // averageTime: 3600000,  // 任务完成平均时间 - 毫秒
            // highlightPoints: [{ // 错误点
            //     time: '2021-04-01 02:10',
            // }]
        }, {
            id: '2',
            name: '小李', // 任务所属人姓名
            yAxis: '任务2', // 任务名
            value: {
                startTime: '2021-04-01 10:25',
                endTime: '2021-04-01 22:25',
            },
            averageTime: 3600000,  // 任务完成平均时间 - 毫秒
            highlightPoints: []
        }, {
            id: '3',
            name: '看电影', // 任务所属人姓名
            yAxis: '任务3', // 任务名
            value: {
                startTime: '2021-04-01 22:25',
                endTime: '2021-04-02 22:25',
            },
            averageTime: 3600000,  // 任务完成平均时间 - 毫秒
            highlightPoints: []
        },
    ]
}
...
<GanttReact config={config} />
```

## API

| props      | type           | default | description    |
|------------|----------------|---------|----------------|
| title | String | `""` | title for this chart |
| width | Number | `800` | chart width |
| height | Number | `600` | chart height |
| showPercent | Number | `0.2` | the percent to show this chart, `0.2` mean zoom in 5x and slider width is 1/5 of total |
| showStartPercent | Number | `0` | the slider start position |
| startDate | String | `Date string` | `e.g. '2021-03-31 22:15'`, chart start date |
| endDate | String | `Date string` | `e.g. '2021-03-31 22:15'`, chart end date |
| nodes | Array.<{}> | `[]` | list of task object |

## Dependencies

| Name               | Bundle size           | Bundle size (gzip)              | Dependencies       |
| ------------------ | --------------------- | ------------------------------- | ------------------ |
| classnames | ![](https://badgen.net/bundlephobia/min/classnames?color=6ead0a&label=)    | ![](https://badgen.net/bundlephobia/minzip/classnames?color=6ead0a&label=)   | ![](https://badgen.net/bundlephobia/dependency-count/classnames?color=6ead0a&label=)   |
| dayjs | ![](https://badgen.net/bundlephobia/min/dayjs?color=6ead0a&label=)    | ![](https://badgen.net/bundlephobia/minzip/dayjs?color=6ead0a&label=)   | ![](https://badgen.net/bundlephobia/dependency-count/dayjs?color=6ead0a&label=)   |
| react-calendar | ![](https://badgen.net/bundlephobia/min/react-calendar?color=red&label=)    | ![](https://badgen.net/bundlephobia/minzip/react-calendar?color=red&label=)   | ![](https://badgen.net/bundlephobia/dependency-count/react-calendar?color=red&label=)   |


## Browser Support

|![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true)|
| --- | --- | --- | --- | --- |
| Edge 12+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## License

React Gantt is licensed under a ISC License.
