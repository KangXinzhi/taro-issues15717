import { memo } from 'react';
import { Button, View } from '@tarojs/components';
import { getCurrentPages, navigateTo } from '@tarojs/taro';


export default memo(() => {
    console.log(getCurrentPages());

    return (
        <View>
            <Button
              onClick={()=>{
                navigateTo({url: '/pages/mine/index?word=你%好'})
              }}
            >
              点击跳转到 issues页面
            </Button>
        </View>
    );
});
