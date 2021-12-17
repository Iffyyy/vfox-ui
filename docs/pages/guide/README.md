## 组件库说明
`开始使用组件前，请仔细阅读组件库说明`

协同云组件库是基于Ant Design of Vue封装的一套UI组件库。<br />
使用antdv是为了利用开源的组件库，避免去开发重复的功能。<br />
封装是为了不直接去修改源码，做到与antdv源码的解耦，方便版本升级。

### 组件库使用

#### 代码引入
1. 全量使用（不推荐）
```js
// 引入组件库
import UI from 'vfox-ui';
Vue.use(UI);
```

2. 按需引入（推荐）

全局组件需在main.js提前引入
```js
import { VfButton } from 'vfox-ui';
Vue.use(VfButton);
```
业务代码中引用需要的组件
```js
import { VfButton } from 'vfox-ui';
...
components: { VfButton }
```