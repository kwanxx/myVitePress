import{_ as s,c as a,o as n,a as l}from"./app.c2dd8913.js";const C=JSON.parse('{"title":"\u65B9\u6CD5\u7B7E\u540D","description":"","frontmatter":{},"headers":[],"relativePath":"blog/Java/20230313.md","lastUpdated":1678785046000}'),p={name:"blog/Java/20230313.md"},o=l(`<h4 id="\u65B9\u6CD5\u7B7E\u540D" tabindex="-1">\u65B9\u6CD5\u7B7E\u540D <a class="header-anchor" href="#\u65B9\u6CD5\u7B7E\u540D" aria-hidden="true">#</a></h4><h5 id="\u672C\u8282\u63D0\u8981" tabindex="-1">\u672C\u8282\u63D0\u8981 <a class="header-anchor" href="#\u672C\u8282\u63D0\u8981" aria-hidden="true">#</a></h5><ul><li>Java\u4EE3\u7801\u7684\u7F16\u8BD1\u8FC7\u7A0B</li><li>\u65B9\u6CD5\u7B7E\u540D\uFF08<em>method signature</em>\uFF09</li><li><em>Varargs</em>\u7684\u7528\u6CD5</li></ul><h5 id="java\u4EE3\u7801\u7F16\u8BD1\u8FC7\u7A0B" tabindex="-1">Java\u4EE3\u7801\u7F16\u8BD1\u8FC7\u7A0B <a class="header-anchor" href="#java\u4EE3\u7801\u7F16\u8BD1\u8FC7\u7A0B" aria-hidden="true">#</a></h5><p>Java\u4EE3\u7801\uFF08.java\uFF09\u9996\u5148\u901A\u8FC7javac\u7F16\u8BD1\u547D\u4EE4\u8F6C\u6362\u4E3A\u5B57\u8282\u7801\uFF08<em>bytecode</em>\uFF09\uFF0C\u7136\u540E\u7531JVM\u8BFB\u53D6\u5B57\u8282\u7801\u6267\u884C\u64CD\u4F5C\u3002</p><h5 id="\u65B9\u6CD5\u7B7E\u540D\uFF08method-signature\uFF09" tabindex="-1">\u65B9\u6CD5\u7B7E\u540D\uFF08<em>method signature</em>\uFF09 <a class="header-anchor" href="#\u65B9\u6CD5\u7B7E\u540D\uFF08method-signature\uFF09" aria-hidden="true">#</a></h5><p>\u65B9\u6CD5\u540D\u548C\u53C2\u6570\u7C7B\u578B\u7EC4\u5408\u4E00\u8D77\u7684\u5C31\u662F\u65B9\u6CD5\u7B7E\u540D\u3002\u4E00\u4E2AJava\u65B9\u6CD5\uFF08<em>Method</em>\uFF09\u7ED3\u6784\u662F\u8FD9\u6837\uFF1A</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> \u7C7B\u578B</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u65B9\u6CD5\u540D</span><span style="color:#89DDFF;">&gt;(&lt;</span><span style="color:#A6ACCD;">\u53C2\u6570\u7C7B\u578B\u5217\u8868</span><span style="color:#89DDFF;">&gt;){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4EE3\u7801</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u53C2\u6570\u7C7B\u578B\u5217\u8868\u987A\u5E8F\u4E0D\u540C\uFF0C\u90A3\u4E48\u65B9\u6CD5\u7B7E\u540D\u5C31\u4E0D\u540C\uFF1A</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSth</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// code</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSth</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// code </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u6BD4\u53C2\u6570\u5217\u8868\u7C7B\u578B\uFF0C\u7B2C\u4E00\u4E2A\u65B9\u6CD5\uFF1Astring \u548Cint\uFF0C\u7B2C\u4E8C\u65B9\u6CD5\uFF1Aint\u548Cstring\u3002</p><h5 id="varargs\u7684\u7528\u6CD5" tabindex="-1"><em>Varargs</em>\u7684\u7528\u6CD5 <a class="header-anchor" href="#varargs\u7684\u7528\u6CD5" aria-hidden="true">#</a></h5><p>varargs\u662F\u4F5C\u4E3A\u4E00\u4E2A\u65B9\u6CD5\u53C2\u6570\u4F7F\u7528\uFF0C\u53EA\u80FD\u5728\u6700\u540E\uFF08\u53F3\u62EC\u53F7\uFF09\u653E\u7F6E\uFF1A</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> \u7C7B\u578B</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u65B9\u6CD5\u540D</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;"> \u7C7B\u578B \u53C2\u65701</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> \u7C7B\u578B \u53C2\u65702</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\u7C7B\u578B</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> \u53C2\u65703</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4EE3\u7801</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5199\u6CD5\u662F\uFF1A double... args \uFF0C\u5B83\u5176\u5B9E\u662F\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-java"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//Varargs\u7528\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">whatIsVarargs</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">double</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">double</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> args</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">whatIsVarargs</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//\u8F93\u51FA\uFF0C3.0 \u3001 4.0</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function t(c,r,D,y,F,i){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};