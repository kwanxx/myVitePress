# CSS优先级



## !important

加!important，不受CSS优先级影响，强制应用样式：

```css
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