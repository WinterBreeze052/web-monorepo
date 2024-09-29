import Mock, { Random } from 'mockjs'

export const useMock = () => {
  function getSongs() {
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|5-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'songName': `I got ${Random.word(5)}`,
          'singer': function () {
            return `城市 - ${Random.city()}`
          },
          'date': '@date("yyyy-MM-dd")',
          'img': Random.image('200x100', '#50B347', '#FFF', 'YYDZ'),
        },
      ],
    })
    return data.list
  }
  function getUser() {
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|15-20': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'userName': () => `姓名 - ${Random.cname()}`,
          'address': () => `籍贯 - ${Random.city()}`,
          'idn': () => `身份证号 - ${Random.id()}`,
          'img': function () {
          // 随机生成宽高、背景色和前景色
            const backgroundColor = Random.color() // 随机背景色
            const textColor = Random.color() // 随机前景色
            return Random.image(`50x50`, backgroundColor, textColor, 'Avatar')
          },
        },
      ],
    })
    return data.list
  }
  return {
    getSongs,
    getUser,
  }
}
