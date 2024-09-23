# CSS文本属性

## 字体族

属性名：font-family

属性值："fangsong","arial","微软雅黑"

建议使用无衬线字体（电脑提），衬线字体（印刷体）



## 自定义字体（CSS3）

属性名：@font-face 

格式：

```css
@font-face{
​	font-family:'自定义名词',
​	src:url('叶根友字体.ttf')
}
```



## font复合属性

格式： 

**font: 是否倾斜 是否加粗 字号/行高 字体**

字号、字体是必须

简写版本：

**font: 字号 字体**



## 文本修饰线

属性名：text-decoration

属性值：

| underline    | 下划线 |      |
| ------------ | ------ | ---- |
| line-through | 删除线 |      |
| none         | 无线   |      |



## 文本转换

属性名：text-transform 

作用：1.将单词首字母转大写或小写；2.将单词转大小写。

属性值：

1.none:不转换(默认值)

2.capitalize:首字母大写 （📝**实测：全部字母大写无效**）

3.uppercase:全部字符转换为大写

4.lowercase:全部字符转换为小写
