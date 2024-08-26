import{_ as a,c as o,o as t,a as i}from"./app.c2dd8913.js";const h=JSON.parse('{"title":"\u63A2\u7D22Spring Boot\u7684auto configuration\u7B56\u7565","description":"","frontmatter":{},"headers":[],"relativePath":"blog/SpringBoot/20230303.md","lastUpdated":1677822937000}'),r={name:"blog/SpringBoot/20230303.md"},n=i('<h4 id="\u63A2\u7D22spring-boot\u7684auto-configuration\u7B56\u7565" tabindex="-1">\u63A2\u7D22Spring Boot\u7684auto configuration\u7B56\u7565 <a class="header-anchor" href="#\u63A2\u7D22spring-boot\u7684auto-configuration\u7B56\u7565" aria-hidden="true">#</a></h4><p>Spring Boot\u5177\u6709\u5B8C\u6574\u7684\u81EA\u52A8\u914D\u7F6E\u7B56\u7565\uFF0C\u8FD9\u4E9B@Bean\u7C7B\u5728\u7279\u5B9A\u6761\u4EF6\u60C5\u51B5\u4E0B\u83B7\u5F97\u6CE8\u518C\uFF0C\u672C\u8282\u7B14\u8BB0\u4E3B\u8981\u8BB0\u5F55\uFF1A</p><ul><li>auto configuration\u5982\u4F55\u9A71\u52A8\u7B56\u7565</li><li>\u6269\u5C55\u7684\u9886\u57DF</li></ul><h5 id="auto-configuration\u5982\u4F55\u9A71\u52A8\u7B56\u7565" tabindex="-1">auto configuration\u5982\u4F55\u9A71\u52A8\u7B56\u7565 <a class="header-anchor" href="#auto-configuration\u5982\u4F55\u9A71\u52A8\u7B56\u7565" aria-hidden="true">#</a></h5><hr><p>\u5982\u679CSpring Boot\u68C0\u6D4B\u5230DataSource\u5728claspath\u6709\u5B9A\u4E49\uFF0C\u5728\u7C7B\u4E2D\u53D1\u73B0\u4E86\u91CC\u9762JDBC\u9A71\u52A8\uFF0CSpring Boot\u4F1A\u6FC0\u6D3B<em>DataSourceAutoConfiguration</em>\uFF0C\u8FD9\u4E2A\u7B56\u7565\u5C06\u4F1A\u4F7F\u7528DataSource Bean\u7684\u4E00\u4E9B\u7248\u672C\u3002</p><p>\u901A\u8FC7@ConditionalOnClass({DataSource.class})\u6CE8\u89E3\uFF08annotation\uFF09\u9A71\u52A8\u53D1\u73B0\u7684\u7B56\u7565\u3002</p><h4 id="starter\u63D0\u4F9B\u8DB3\u591F\u7684\u5E94\u7528\u5F00\u53D1\u57FA\u7840" tabindex="-1">Starter\u63D0\u4F9B\u8DB3\u591F\u7684\u5E94\u7528\u5F00\u53D1\u57FA\u7840 <a class="header-anchor" href="#starter\u63D0\u4F9B\u8DB3\u591F\u7684\u5E94\u7528\u5F00\u53D1\u57FA\u7840" aria-hidden="true">#</a></h4><hr><p><em>spring-boot-starter-web</em>\u63D0\u4F9B\uFF1A</p><ul><li>Spring MVC \u548C \u5173\u8054\u7684\u6CE8\u89E3\uFF08annotation\uFF09\uFF0C\u652F\u6301servlet-based\u7F51\u9875\u5E94\u7528\uFF1B</li><li>JSR310\uFF0C\u6765\u81EAJSON\u7684Jackson\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u6570\u636E\u7ED1\u5B9A\uFF1B</li><li>Apache Tomcat \u5BB9\u5668</li><li>SpringBoot\u7684\u6838\u5FC3starter</li><li>SpringBoot</li><li>Autoconfiguration</li><li>Logging</li><li>Jakarta \u6CE8\u89E3</li><li>Spring Framework\u6838\u5FC3</li><li>SnakeYAML\u63A7\u5236YAML\u5C5E\u6027\u6587\u4EF6</li></ul>',11),e=[n];function l(c,s,p,u,d,g){return t(),o("div",null,e)}var S=a(r,[["render",l]]);export{h as __pageData,S as default};