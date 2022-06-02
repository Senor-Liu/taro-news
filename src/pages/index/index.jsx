import { useState } from 'react'
import './index.less'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import ThreadList from '../../components/ThreadList'
import { newsType } from '../../utils/api'

export default function Index() {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '精选' }, { title: '体育' }, { title: '娱乐' }]

  function handleClick(value) {
    setCurrent(value)
  }

  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={handleClick.bind(this)}>
        <AtTabsPane current={current} index={0} >
          <ThreadList newsType={newsType.featured} />
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <ThreadList newsType={newsType.sports} />
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <ThreadList newsType={newsType.entertainment} />
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
