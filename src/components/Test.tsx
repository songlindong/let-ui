// 1.函数式组件
// export default () => <div>test</div>

import { defineComponent } from 'vue'

// 2. defineComponent
// export default defineComponent({
//     render() {
//         return <div>test</div>
//     }
// })

// 3. defineComponent({setup() {}})

export default defineComponent({
  setup() {
    return () => {
      return <div>test</div>
    }
  }
})
