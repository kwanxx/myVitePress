# CSS选择器

## a标签伪类

顺序：L V H A，分别是：

L：link(正常)

v：visited（点击后）

h：hover（鼠标停留）

a：active（点击时显示）



📌超链接要跳转到其他网页才会有效果，跳转新页面，在a标签添加target="_blank"



例子：

给a标签添加在新标签页打开属性，取消文字下划线， 添加link\visited\hover\active伪类选择器，添加文字颜色分别为红绿黄蓝

**html**:

```html
    
    <nav>
        <ul>
            <li><a href="https://baidu.com">百度</a></li>
            <li><a href="https://sogou.com">搜狗</a></li>
            <li><a href="https://weixin.qq.com">微信</a></li>
        </ul>
    </nav>
```

**CSS:**

```css
   a {
            text-decoration: none;

        }

        a:link {

            color: red;

        }

        a:visited {
            color: blue;
        }

        a:hover {
            color: green;

        }

        a:active {
            color: orange;

        }
```

------

