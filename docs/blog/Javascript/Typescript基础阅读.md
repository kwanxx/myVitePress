# Typescript基础阅读

## 📌安装

```bash
npm intall typescript --save-dev
# 全局安装
npm install -g typescript
# 编译
npx tsc index.ts
```

官网：https://www.typescriptlang.org/download/



## 📌语法

## 1.基本类型

**语法**： let/var  变量名字 : **类型**  =  值

```typescript
//数字:包含整数、小数
var num:number = 2014

var float_num:number = 0.012

//字符串
var hello:string = "hello world";

//布尔值
var isLive:boolean = false

//输出:num=2014,float_num=0.012,hello=hello world,有鬼吗？false
console.log(`num=${num},float_num=${float_num},hello=${hello},有鬼吗？${isLive}`);
```

------



## 2.数组

语法： 

1. var  array1:**number[]** = [1,2,3,4]
2. var  array2:**string[]** = [1,2,3,4]

------



## 3.函数

**语法： function fn(x:any, y:any):any ，返回的是any类型**



add函数，方法参数是a,b,c，三个参数都是数字型，对三个参数进行相加：

```typescript
function add( a:number ,  b:number, c:number ){
    return a+b+c;
}
console.log(add(2,3,4)); // 9
```



但如果你只给**add**方法的两个参数赋值，会报错：

```typescript
function add( a:number ,  b:number, c:number ){
    if(c==undefined)
        return a+b;
    return a+b+c
}
console.log(add(2,3)); // 报错，c没有赋值
```

 

要使用？和对值进行判断，给**c**加了**？**的变量参数空值是undefined

```typescript
function add( a:number ,  b:number, c?:number ){
    if(c==undefined)
        return a+b;
    return a+b+c
}
console.log(add(2,3));
```

 

------

## REST参数

函数要接受N个参数，可以使用**REST参数**：

**语法： ...变量名:any[]**

```typescript
function add( a:number ,  ...b:number[] ){
    
    var total:number = a;
    //获取REST参数b
    for(var t:number=0;t<b.length;t++){
        total += b[t];
    }
    return total;
}
console.log(add(2,3，4,5)); // 14
```

注意**REST参数...b**放最后

------



## Class类型

//ts声明类

```typescript
class Bycile{
    public wheels:number;
    public BikeType:String;

    constructor(wheels:number = 2 , BikeType){
        this.wheels = wheels;
        this.BikeType = BikeType
    }
    getBikeType(){
        return this.BikeType
    }
}
```

//实例化

```typescript
var CBycile:Bycile = new Bycile(10, "abike"); 

console.log(`单车的轮子数量：${CBycile.getBikeType()},类型${CBycile.getBikeType()}`);
```

