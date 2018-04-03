# element-table-column
> A table-column component for element-ui. --base 2.2.2

## Installation
```shell
npm i element-table-column -D
```

## Usage
```javascript
import Vue from 'vue'
import TableColumn from 'element-table-column'

Vue.use(TableColumn)
```

or

```javascript
import Vue from 'vue'
import TableColumn from 'element-table-column'

Vue.component('table-column', TableColumn)
```
### Table-column Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 对应列的类型。如果设置了 `selection` 则显示多选框，如果设置了 `index` 则显示该行的索引（从 1 开始计算） | string | selection/index | — |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| render-header | 列标题 Label 区域渲染使用的 Function | Function(h, { column, $index }) | — | — |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean, string | true, false, 'custom' | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效 | Function(a, b) | — | — |
| sort-by | 对数据进行排序的时候按照 sort-by 排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 0 个排序，如果第 0 个相等，再按照第 1 个排序，以此类推。 | Function(row, index)/String/Array | — | — |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 用来格式化内容 | Function(row, column) | — | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | Boolean | — | false |
| inline-template | 指定该属性后可以自定义 column 模板，参考多选的时间列，通过 row 获取行信息。总共可以获取到 `{ row(当前行), column(当前列), $index(行数), store(table store) }` 以及 Table 所处的上下文环境。 | — | — |
| align | 对齐方式 | String | left, center, right | left |
| class-name | 列的 className | string | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |
| reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。 | Boolean | — | false |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | — | — |
| filter-multiple | 数据过滤的选项是否多选 | Boolean | — | true |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row) | — | — |
| filtered-value | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | Array | — | — |
| show-slot | 当存在 slot 内容时，是否渲染 slot 内容 | Boolean | — | true |

# License
[MIT](https://opensource.org/licenses/MIT)
