# Math

sin x 、 cos x、arcsin x是周期函数，所以，必须取区间范围，转换为单值函数

## Latex

https://zhuanlan.zhihu.com/p/464237097

根号==+次幂==：
$$
\sqrt[n]{a}\\
$$
\left括号(\right)
$$
\left(a^{3}\right)
$$

数字上下标
 
$$
^{a}_{b}\\
^{3}_{9}
$$
求和$\sum$
$$
\sum_{i=0}^nf
$$

**分段函数**

f(x) = \left \{
\begin{aligned}
 a ,\quad x<0\\
 b ,\quad x=0\\
 c,\quad x>0\\
\end{aligned}
\right.（不要漏了.）
$$
f(x)=\left\{
\begin{aligned}
a ,\quad x<0\\
b ,\quad x=0\\
c,\quad x>0\\
\end{aligned}
\right.
$$

**符号**

https://zhuanlan.zhihu.com/p/686538247

|              |                     |
| ------------ | ------------------- |
| &            | 如果公式不对齐，加& |
| $\to$        | \to                 |
| $\infty$     | \infty              |
| $\le$        | \le                 |
| $\ge$        | \ge                 |
| $\cdots$     | \cdots              |
| $\because$   | \because            |
| $\therefore$ | \therefore          |
| $\alpha$     | \alpha              |
| $\theta$     | \theta              |
| $\delta$     | \delta              |
| $\lambda$    | \lambda             |
| $\sim$       | \sim                |



**极限公式**
$$
\lim_{x \to 1}f(x)
$$


## 代数学


### 幂和根式

$$
 x^mx^n=x^{m+n}\\
(x^m)^n=x^{mn}
$$


$$
（2）a^{\frac{m}{n}}=\sqrt[n]{a^m}\ = (\sqrt[n]{a})^m \
$$

$$
(16)^{-\frac{3}{4}}，解：\\\\
\frac{1}{\sqrt[4]{16^3}}\\\\
\frac{1}{(\sqrt[4]{16})^3}\\\\
(\frac{1}{2})^3=\frac{1}{8}\\
$$



### 有理根定理

$f(x) = 0$，则   $x=\pm1,\ x=\pm2\ ,x=\pm3,\ …$



### 因式定理

若$f(a)=0$，则(x-a)是其因式



### 因式分解

$$
x^2-y^2\ =\ (x+y)(x-y)\\\\
x^3+y^3\ = \ (x+y)(x^2-xy+y^2)\\\\
x^3-y^3\ = \ (x-y)(x^2+xy+y^2)\\\\
$$

### 二项式定理

==k是索引，从0开始==
$$
(x+y)^n\ =\ \left(_{n}^{k}\right)\ · \sum_{k}^{n}{x^{n-k}·y^k}
$$

## 极限



### 夹逼准则

如果
$$
\left\{
\begin{aligned}
&g(x)≤f(x)≤h(x) \\\\
&\lim_{x \to a}\ g(x) = lim\ h(x) =A \\
\end{aligned}
\right.
$$
则
$$
lim\ g(x)≤lim\ f(x)≤lim\ h(x)
$$





#### 01 $\lim_{n→∞}(a^n+b^n)^{\frac{1}{n}}$

$$
\lim_{n→∞}(2^n+4^n)^{\frac{1}{n}}
$$

1、取**主导项**（最大项）

n没有定义域限制，因此：$4^n>2^n$，==$4^n$是主导项==



2、
$$
4^n≤2^n+4^n≤2·4^n
$$
$2·4^n$ 是指 2倍的$4^n$ :     $2·4^n\ = (4^n+4^n)$



3、
$$
\lim_{n→∞}(2^n+4^n)^{\frac{1}{n}}
$$
解：

因为
$$
g(n)\ =\lim_{n→∞}(4^n)^{\frac{1}{n}}=4
$$

$$
h(n)\ = \lim_{n→∞}(2·4^n)^{\frac{1}{n}}=4\\\\
\lim_{n→∞}2^{\frac{1}{n}}\ ·\lim_{n→∞}4=1·4=4\\
$$

根据夹逼准则：$lim\ g(n)≤lim\ f(n)≤lim\ h(n)$，所以:
$$
f(n)\ =\lim_{n→∞}(2^n+4^n)^{\frac{1}{n}}=4
$$
------

这种类型的题，**找主导项时候**，底数是小数要小心：
$$
\lim_{n→∞}(\frac{1}{2}^n+\frac{1}{3}^n)^{\frac{1}{n}}
$$
找主导项
$$
(\frac{1}{2})^2 > (\frac{1}{3})^2
$$
主导项是：$(\frac{1}{2})^n$，所以极限为$\frac{1}{2}$



02



03
$$
\lim_{n \to \infty}{(\frac{1}{n^2+2}+\frac{2}{n^2+4}+···+\frac{n}{n^2+2n})}
$$
设

黎曼和公式
$$
S_n=\sum^{n}_{k=1}\frac{k}{n^2+2k}\\
k = 1,2,3,···,n
$$
根据==夹逼准则==
$$
\begin{aligned}
&\because\ 1 \le k \le n\\\\

&\therefore n^2+2 \le n^2+2k \le n^2+2n \\\\

\end{aligned}
$$
取倒数，要考虑不等号取反：
$$
\frac{1}{n^2+2n}\le\frac{1}{n^2+2k}\le\frac{1}{n^2+2}
$$
乘以k（正数）：
$$
\frac{k}{n^2+2n}\le\frac{k}{n^2+2k}\le\frac{k}{n^2+2}
$$
对k求和：
$$
\sum^{n}_{k=1}\frac{k}{n^2+2n}\le\sum^{n}_{k=1}\frac{k}{n^2+2k}\le\sum^{n}_{k=1}\frac{k}{n^2+2}
$$


计算：$\sum^{n}_{k=1}\frac{k}{n^2+2n}\\\\$

==先对k求和==：

想办法将这个求和化成n式，==$\frac{1}{n^2+2n}$是常数==
$$
\sum^{n}_{k=1}\frac{k}{n^2+2n}\\\\
=\frac{1}{n^2+2n}\sum^{n}_{k=1}k\\\\

\because\sum^{n}_{k=1}k=\frac{n(n+1)}{2}\\\\

\therefore\ \sum^{n}_{k=1}\frac{k}{n^2+2n} \ =\frac{1}{n^2+2n}·\frac{n(n+1)}{2}
$$
==再取极限==
$$
\begin{align}
&\lim_{n \to \infty}\sum^{n}_{k=1}\frac{k}{n^2+2n}\\\\
 \ &=\lim_{n \to \infty}
 \frac{1}{n^2+2n}·\frac{n(n+1)}{2}\\\\
 &=\frac{1}{2}
 \end{align}
$$

计算：$\sum^{n}_{k=1}\frac{k}{n^2+2}$

$$
\begin{aligned}
&\lim_{n \to \infty}\sum^{n}_{k=1}\frac{k}{n^2+2}\\\\
&=\lim_{n \to \infty}\frac{n^2+n}{2n^2+4}\\\\
&=\lim_{n \to \infty}\frac{(n^2+n)·\frac{1}{n^2}}{(2n^2+4)·\frac{1}{n^2}}\\\\
&=\frac{1}{2}
\end{aligned}
$$
所以$S_n=\frac{1}{2}$

---



==因为$\lim_{x \to \infty} \frac{C}{x}=0$  或  $\lim_{x \to \infty} \frac{C}{x^2}=0$，C是常数==





### 两个重要极限

$$
\lim_{x \to 0}\frac{sinx}{x}=1\\\\
\lim_{x \to 0}(1+x)^{\frac{1}{x}}=e
$$



### $1^\infty型$

什么是$1^\infty$极限？


$$
\lim_{x \to 0}(1+sinx^2)^{\frac{1}{1-cosx}}
$$
当$x\to0$，$1+sin\ x^2=1+sin0=1$，$\frac{1}{1-cos\ x}=\frac{1}{0}=\infty$

这是属于$1^{\infty}$极限

解：

**1 凑成重要极限形式**
$$
\lim_{x \to 0}\big((1+sinx^2)^\frac{1}{sinx^2}\big)^{\frac{sin\ x^2}{1-cosx}}
$$
**2 取对数**

公式：若$f(x)=1,g(x)=\infty$且，
$$
\lim_{x \to 0}f(x)·g(x)=L
$$
则
$$
e^{\lim_{x \to 0}f(x)·g(x)}=e^L
$$

---

证：
$$
lim(1+a(x))^{b(x)}=L
$$

### 对数化

$$
e^{ln(a^b)}=e^{b·lna}=a^b
$$

对数函数连续性
$$
\begin{aligned}
&ln\ L\ =ln\  \lim\ \ (1+a(x))^{b(x)}\\\\
&=\ \lim\ ln(1+a(x))^{ b(x)}\\\\
&=\ \lim\ b(x)·ln(1+a(x))\\\\
&\because\ ln(1+a(x))\sim\ a(x)\\\\
&\therefore\ =lim\ b(x)·a(x)=ln\ L\\\\
\end{aligned}
$$
因为对数化，

$e^{lnL}$，所以$e^{lim\ b(x)·a(x)}=L$



---




$$
\begin{aligned}
&\lim_{x \to 0}(1+sinx^2)^{\frac{1}{1-cosx}}\\\\
&=\lim_{x \to 0}\big((1+sinx^2)^\frac{1}{sinx^2}\big)^{\frac{sin\ x^2}{1-cosx}}\\\\
&=e^{\lim_{x\to0}\frac{sin\ x^2}{1-cosx}}
&=e^{\frac{1}{2}}
\end{aligned}
$$
求：$\lim_{x\to0}\frac{sin\ x^2}{1-cosx}$


$$
\begin{aligned}
&\lim_{x\to0}\frac{sin\ x^2}{1-cosx}\\\\
&\because 1-cosx\sim\frac{1}{2}x^2\\
&sinx^2\sim x^2\\\\
&\therefore=\frac{1}{2}
\end{aligned}
$$



## 隐函数

y是x的函数形式：
$$
xy = 1 \\
y = \frac{1}{x}
$$
对x求导按常规求导方法，==**对y求导用链式求导方法**== ：
$$
\frac{d}{dx}(y^3)\\
n·u^{n-1}·u'\\
↓\ \ \ \ \ \ \ \ \   ↓\\
3y^2\ \ \ \ \ \ \frac{dy}{dx}
$$

### 隐函数求解

$$
y^3+y^2-5y-x^2=-4
$$

1.等号两边对x求导
$$
3y^2\frac{dy}{dx}+2y\frac{dy}{dx}-5\frac{dy}{dx}-2x=0
$$
2.$\frac{dy}{dx}$项移到等号左边，其他移到等号右边
$$
3y^2\frac{dy}{dx}+2y\frac{dy}{dx}-5\frac{dy}{dx}=2x
$$
3.将$\frac{dy}{dx}$提取出来
$$
\frac{dy}{dx}(3y^2+2y-5)=2x
$$
4.求解$\frac{dy}{dx}$
$$
\frac{dy}{dx}=\frac{2x}{3y^2+2y-5}
$$


求解 ==$xy^2$==

1.把$y^2$看做是常数：
$$
\frac{d(x)}{dy}·y^2\\
1·y^2
$$
2.把x看做是常数：
$$
x·\frac{d(y^2)}{dy}\\
x·2y\frac{dy}{dx}
$$
3.两项合并
$$
y^2+x·2y\frac{dy}{dx}
$$


#### 不可求导

垂直线(x = 0)

不连续点

圆方程，不是==单值函数==

$x^2+y^2=1$

椭圆方程，不是==单值函数==

$x+y^2=1$

==是不可求导==



### 斜率与导数

已知点(2,0)，斜率m为$-\frac{4}{5}$（斜率可通过求导得出）
$$
m=\frac{上升(+)\ 或\ 下降(-)}{左移(-)\ 或\ 右移(+)}
$$
(1) $m=\frac{-4(向下降4位)}{5(向右移5位)}$

y = 0 - 4 = -4    x = 2+5 = 7   =>  (7，-4)

(1) $m=\frac{4(向上升4位)}{-5(向左移5位)}$

y = 0 + 4 = 4    x = 2-5 = -3   =>  (-3，4)

#### 点斜式方程

直线方程，检验点(x,y)是否在直线上
$$
y-y_{0} = m·(x-x_{0})
$$

$$
\begin{align}
y-0 = -\frac{4}{5}(x-2)\\
y = -\frac{4}{5}x+\frac{8}{5}
\end{align}
$$

代入点（-3,4）到方程
$$
 =-\frac{4}{5}·(-3)+\frac{8}{5}\\
 \frac{12}{5}+\frac{8}{5}=4
$$




## 序列（series）

序列是有序的，n为序列号码，有时候是n以0开始
$$
\{a_{0},\ a_{1},\ a_{2}\ …a_{n}\}
$$

### 序列极限

$$
lim_{n→∞}\ a_n
$$

序列极限性质、定理，跟极限性质、定理通用，再回顾极限的精准定义：

$$
lim_{n→∞}\ a_n =L
$$
存在任意的**ε>0**，ε是 $L-a_n$ 的差
$$
| L - a_n|<ε
$$
又有**m>0**，m和n是一样的，都是序列号码，不过**n>m**，

因为假设：

ε = $\frac{1}{100}$=0.01

m = 10，$a_m$  = L = $\frac{1}{101} $=0.0099

n = 11,12,13……，$a_{11}$ = $\frac{1}{102}$=0.0098

$| L - a_n|=(|0.0099-0.0098|=0.0001)<ε=0.01$

所以**n>m**



### 求和

一般式
$$
\sum^{n}_{k=1}c·f(k)\ =\ c·\sum^{n}_{k=1}f(k)
$$
根据分配律，这个求和等于：
$$
c·f(1)+c·f(2)+···c·f(n)=c[f(1)+f(2)+f(3)]
$$
