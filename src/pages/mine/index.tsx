import { View, Text } from '@tarojs/components';
import { useLoad, getCurrentPages } from '@tarojs/taro';
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded. getCurrentPages:', getCurrentPages())
  })

  return (
    <View className='index'>
      <Text>Hello mine!</Text>
    </View>
  )
}
