import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text'
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'primary'
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
