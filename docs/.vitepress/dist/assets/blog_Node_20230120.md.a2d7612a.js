import{_ as s,c as n,o as a,a as l}from"./app.c2dd8913.js";const A=JSON.parse('{"title":"\u5B66\u4E60Node01\uFF1A \u521D\u6B65\u4E86\u89E3Modules","description":"","frontmatter":{},"headers":[],"relativePath":"blog/Node/20230120.md","lastUpdated":1674226690000}'),p={name:"blog/Node/20230120.md"},o=l(`<h4 id="\u5B66\u4E60node01\uFF1A-\u521D\u6B65\u4E86\u89E3modules" tabindex="-1">\u5B66\u4E60Node01\uFF1A \u521D\u6B65\u4E86\u89E3Modules <a class="header-anchor" href="#\u5B66\u4E60node01\uFF1A-\u521D\u6B65\u4E86\u89E3modules" aria-hidden="true">#</a></h4><p>2023-1-20</p><p>\u8BE6\u7EC6\u53EF\u67E5\u9605\u5B98\u7F51\u6587\u6863\uFF1A<a href="https://nodejs.org/api/modules.html#requireid" target="_blank" rel="noopener noreferrer">Modules: CommonJS modules | Node.js v19.4.0 Documentation (nodejs.org)</a></p><h6 id="_1-\u7AE0\u8282\u4E3B\u9898" tabindex="-1">1.\u7AE0\u8282\u4E3B\u9898 <a class="header-anchor" href="#_1-\u7AE0\u8282\u4E3B\u9898" aria-hidden="true">#</a></h6><ul><li><p>\u8BA4\u8BC6Node Module\uFF08\u6A21\u5757\uFF09</p></li><li><p>\u5B66\u4E60\u4F7F\u7528export\u548Crequire\u65B9\u6CD5</p></li></ul><h6 id="_2-\u7B80\u5355\u4ECB\u7ECD" tabindex="-1">2.\u7B80\u5355\u4ECB\u7ECD <a class="header-anchor" href="#_2-\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a></h6><p>Node.js\u6709\u4E24\u4E2A\u6A21\u5757\u7CFB\u7EDF\uFF1ACommonJS modules \u548C ECMAScript modules\u3002</p><p>CommonJS modules\uFF08\u6A21\u5757\uFF09\u662F Node.js\u6253\u5305\u4EE3\u7801\u5F97\u6807\u51C6\u6A21\u5757\uFF0CNode.js\u540C\u65F6\u652F\u6301ECMAScript modules\uFF08\u6A21\u5757\uFF09\u3002</p><p>Node.js\u4F1A\u628A\u6BCF\u4E2A\u6587\u4EF6\uFF08js\u3001json\uFF09\u89C6\u4E3A\u4E00\u4E2A\u6A21\u5757\uFF08module\uFF09\u3002module\u548Cmodule\u4E4B\u95F4\uFF0C\u51FD\u6570\u548C\u53D8\u91CF\u662F\u4E0D\u53EF\u76F8\u4E92\u8BBF\u95EE\u7684\u3002</p><p>\u56E0\u6B64\uFF0Cjs\u6587\u4EF6\u5185\uFF0C\u589E\u52A0\u53EF\u8BBF\u95EE\u65B9\u6CD5\u3001\u5C5E\u6027\u662F\uFF1A<a href="http://exports.xxx" target="_blank" rel="noopener noreferrer">exports.xxx</a> = function\uFF08field\uFF09 \uFF1B\u589E\u52A0\u53EF\u8BBF\u95EE\u7C7B\u662F\uFF1Amodule.export = class\u3002</p><h6 id="_3-\u5B9E\u8DF5\u4E00\u4E0B" tabindex="-1">3.\u5B9E\u8DF5\u4E00\u4E0B <a class="header-anchor" href="#_3-\u5B9E\u8DF5\u4E00\u4E0B" aria-hidden="true">#</a></h6><p>\uFF081\uFF09exports function</p><p>\u8FD9\u91CC\u6F14\u793A\u5982\u4F55\u5728\u6A21\u5757\u4E2D\u5BFC\u51FA\u65B9\u6CD5\uFF0C\u83B7\u5F97\u5916\u90E8\u5176\u4ED6\u6A21\u5757\u8BBF\u95EE\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// circle.js\uFF1A \u8FD9\u662F\u8BA1\u7B97\u5706\u7684\u9762\u79EF\u548C\u5468\u957F</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> PI </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5BFC\u51FA\u4E00\u4E2A\u5B57\u6BB5\uFF08\u53D8\u91CF\uFF09</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">myname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MING</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5BFC\u51FA\uFF08export\uFF09 \u4E00\u4E2A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#82AAFF;">area</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> PI </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5468\u957F</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#82AAFF;">circumference</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> PI </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//demo1.js \uFF1A\u8BA4\u8BC6 node \u7684module\u6A21\u5757\u7406\u5FF5\uFF0Crequire\u7684\u4F7F\u7528\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> circle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./circle.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">circle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myname</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">\uFF0C\u76F4\u5F84\u4E3A2\u7684\u5706\u7684\u9762\u79EF\u662F\uFF1A</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">circle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">area</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">, \u5468\u957F\u662F\uFF1A</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">circle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">circumference</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//MING\uFF0C\u8F93\u51FA\uFF1A\u76F4\u5F84\u4E3A2\u7684\u5706\u7684\u9762\u79EF\u662F\uFF1A12.566370614359172, \u5468\u957F\u662F\uFF1A12.566370614359172</span></span>
<span class="line"></span></code></pre></div><p><strong>\u6CE8\u610F</strong>\uFF1A</p><ol><li><p>require\u5F15\u5165\u6A21\u5757\u65F6\u5019\uFF0C\u5982\u679Cdemo1.js\u3001circle.js\u5728\u540C\u4E00\u8DEF\u5F84\uFF0C\u5F15\u5165\u6A21\u5757\u4E0D\u80FD\u5199\u4F5C\uFF1Arequire(&#39;circle.js&#39;) \uFF0C\u6B63\u786E\u5199\u6CD5\u5E94\u8BE5\u662F\uFF1Arequire(&#39;./circle.js&#39;) \u3002</p></li><li><p>circle.js \u7684 PI \u5E38\u91CF\u662F\u5C5E\u4E8Eprivate\uFF0C\u5916\u90E8\u5176\u4ED6\u6A21\u5757\u4E0D\u53EF\u8BBF\u95EE\u3002</p></li><li><p>exports.area \u662F\u5BFC\u51FA\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5916\u90E8\u5176\u4ED6\u6A21\u5757\u53EF\u4EE5\u8BBF\u95EE\u3002</p></li></ol><p>\uFF082\uFF09exports class</p><p>\u8FD9\u91CC\u6F14\u793A\u5982\u4F55\u5BFC\u51FA\u4E00\u4E2A\u7C7B\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//square.js \u8FD9\u91CC\u6F14\u793A\u5982\u4F55\u5BFC\u51FA\u4E00\u4E2A\u7C7B,\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u5E73\u65B9</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">square</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// this\u65B9\u6CD5\u5F15\u7528\u7C7B\u7684\u53D8\u91CF,\u8FD4\u56DE\u4E00\u4E2A\u6570\u7684\u5E73\u65B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">area</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">pow</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ol><li>this\u5F15\u7528\u7C7B\u5185\u90E8\u7684\u53D8\u91CF\u3002</li><li>constructor\u662F\u6784\u9020\u51FD\u6570\u3002</li><li>\u4E0D\u80FD\u5728\u7C7B\u5185\u90E8\u4F7F\u7528let\u3001var\u3001const\u53D8\u91CF\u3002</li></ol>`,21),e=[o];function r(t,c,D,y,F,i){return a(),n("div",null,e)}var d=s(p,[["render",r]]);export{A as __pageData,d as default};