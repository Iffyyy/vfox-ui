import { mount } from '@vue/test-utils'
import { VfButton, VfButtonGroup } from '../../packages'
import {  createLocalVue } from '@vue/test-utils';
import UI from '../../packages/index';

const localVue = createLocalVue()
localVue.use(UI)

/////////////////////////////////VfButton

const factory = (props = {}, data = {}) => {
  return mount(VfButton, {
    propsData: {
      ...props
    },
    data() {
      return {
        ...data
      }
    }
  })
}

describe('VfButton', () => {

  it('测试click触发', async () => {
    const wrapper = factory();
    // 获取对应按钮
    const button = wrapper.find('button');
    // 点击按钮
    button.trigger('click');
    await wrapper.vm.$nextTick();
    // 断言$emit('click')函数被触发
    expect(wrapper.emitted().click).toBeTruthy();
  })
})

/////////////////////////////////VfButtonGroup

const factory1 = (props = {}, data = {}) => {
  return mount({
    render() {
      return (
        <VfButtonGroup attrs={{ ...props }}>
          <VfButton type="cloud"> Button1 </VfButton>
          <VfButton type="cloud"> Button2 </VfButton>
        </VfButtonGroup>
      );
    }
  }, {
    propsData: {
      ...props
    },
    data() {
      return {
        ...data
      }
    }
  })
}

describe('VfButtonGroup', () => {
  // 测试内容：snapshot->概括的测试DOM结构
  it('测试DOM结构', () => {
    const wrapper = factory1();
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('测试size属性', () => {
    const wrapper1 = factory1({
      size: 'small'
    });
    // 断言ant-btn-sm类名存在
    expect(wrapper1.classes()).toContain('ant-btn-group-sm');

    const wrapper2 = factory1({
      size: 'large'
    });
    // 断言ant-btn-lg类名存在
    expect(wrapper2.classes()).toContain('ant-btn-group-lg');
  })
})

