// 1.函数式组件
// export default () => <div>test</div>

import { defineComponent, ref, withModifiers } from 'vue'

// 2. defineComponent
// export default defineComponent({
//     render() {
//         return <div>test</div>
//     }
// })

// 3. defineComponent({setup() {}})
// 摒弃this,对于ts支持最好
// 借助babel-plugin-jsx插件来做到的
// vue独特概念：修饰符，slot,directive, emit
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  setup(_props, { slots }) {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    const list = ref<string[]>(['a', 'b', 'c'])
    return () => {
      const span = true ? <span>A</span> : <span>B</span>
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test: {count.value}
          <input type="text" v-focus v-model={count.value} />
          <div>{span}</div>
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          <div>{slots.default ? slots.default() : 'defalut content'}</div>
          <div>{slots.title ? slots.title() : 'title slot content'}</div>
        </div>
      )
    }
  }
})
