# CSS特性

## 1.继承性（inherit）

### 📝简介

子标签可以继承父标签的同名CSS属性，例如font文字CSS样式、color这些，但不是所有CSS属性都可以继承，像 width、margin、padding 和 border 不会被继承，[去看详情](https://web.dev/learn/css/inheritance?hl=zh-cn)。

试想一下，如果 **border 可以被继承**，每个列表和列表项都会获得一个边框——可能就不是我们想要的结果！我们通常可以通过常识来判断哪些属性属于默认继承。看例子：

**CSS**:

``` 
   body {
      font-size: 30px;
      color: red;
      font-weight: 100;
    }
```

**html:**

```html
  <div>div 标签</div>
  <p>p 标签</p>
  <span>span 标签</span>
  <a href="#">a 标签</a>
  <h1>h1 标签</h1>
```

❗输出效果：

1. div、p、span、h1标签的文字都会是红色，a标签不是红色
2. div、p、span、a标签字号都是30px和字体不是加粗，h1标签字体是60px（默认）和加粗。

<img src="../images/image-20240924222628410.png" alt="image-20240924222628410" style="zoom:55%;" />

⁉为什么部分标签不会继承全部样式？

如果标签自己有样式则生效自己的样式，不继承。

打开DevTool，点击其中一个标签，留意右边的Styles，画删除线的样式是不能被继承。为什么？

![image-20240924222023585](../images/image-20240924222023585.png)



再点击**Computed**，以H1标签为例，font-weight应用的是user agent stylesheet的bold属性值，不是body标签的100。

![image-20240924222135851](../images/image-20240924222135851.png)

所以，如果有user agent stylesheet或浏览器预先设定的样式，就会先被继承，如果没有就继承我们写的样式。



### 📝控制继承

作用：**让子标签的CSS属性选择是否继承父标签的同名CSS属性值**

属性值：

1.**inherit**：继承父标签的属性。

2.**initial**：沿用CSS属性原有的默认值，部分CSS属性没有默认值。

3.**unset**：设置自然值，如果CSS属性没有默认值，就继承父标签的属性（inherit）；如果没有继承父标签的属性，就沿用CSS默认值（initial）。



CSS:

``` 
  main{
      color:#ffffff;
    }
    a { 
      padding: 10px 20px;
      text-decoration: none;
      background: #eabdb3;
      text-align: center;   
    }
```

html：

```

```







|                                |                             |            |      |
| :----------------------------- | :-------------------------- | :--------- | :--- |
| 选择器的类型                   | 实例                        | 选择器权重 |      |
| !important                     | div{ color:red!important; } | 无穷大     |      |
| 行内样式（style 属性中样式）   | style='color:red;'          | 1000       |      |
| id 选择器                      | #id                         | 100        |      |
| class、属性选择器              | .box、:hover、[type='text'] | 10         |      |
| 标签选择器                     | div                         | 1          |      |
| 通配符、子选择器、相邻选择器等 | *、> 、+、~                 | 0000       |      |
| 继承的样式                     |                             | 0000       |      |

## 优先级



|                                | 内联样式 | ID   | class | 标签 |
| ------------------------------ | -------- | ---- | ----- | ---- |
| 权重（数值越大，优先级越高）： | 1000     | 100  | 10    | 1    |
| 例子：                         |          |      |       |      |
| #mySpan p .                    |          |      |       |      |





## !important

加!important，不受CSS优先级影响，强制应用样式：

``` 
p{
  color:#f00 !important;
}
```



## 层叠

按照以下顺序，样式会被覆盖：

1.CSS引入样式，是内联，还是外部link引入

2.样式直接加!important



## 导入样式顺序：

内联样式(style=)>内部样式（<style>）>外部样式(link)>浏览器默认