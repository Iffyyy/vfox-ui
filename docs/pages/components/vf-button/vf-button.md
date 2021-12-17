## 按钮
按钮用于开始一个即时操作。

### 使用示例
{{:docs/pages/components/vf-button}}

### 属性
|  参数  | 说明  |  类型  | 可选值 | 默认值 |
| :-----| :---- | :---- | :---- | :---- |
| type | 设置按钮类型 | String | primary, dashed, link, danger, 不设置（即default） | default
| size | 设置按钮大小 | String | large, 不设置（即default） | default
| disabled | 按钮失效状态 | Boolean |	true、false |	false
| htmlType | 设置 button 原生的 type 值 | String | submit、button、reset |	button
| loading | 设置按钮载入状态 |	Boolean | true、false、{ delay: number } |	false
| shape | 设置按钮形状 |	String | circle、round、不设置 | -
| block | 将按钮宽度调整为其父宽度的选项 |	Boolean |	true、false |	false

### 事件
|  名称  | 说明  |  参数  |
| :-----| :---- | :---- |
| click | 点击按钮时的回调 | (event) => void |