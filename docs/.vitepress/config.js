export default {
    title: 'Kwan \' s Blog',

    description: '日志记录',
    
    lang:'zh-CN',

    lastUpdated: true,

    themeConfig: {
    
      siteTitle: 'Kwan \' s Blog',
    
      lastUpdatedText: '更新时间',

      nav: [
        { text: '主页', link: '/' },
        { text: '日志', link: '/blog/' },
        { text: '归档', link: '/archive/' },
      ],
      footer: {
        message: 'Powered By VitePress',
        copyright: 'Copyright © 2022-Kwan'
      },
      sidebar:{
        '/blog/': [
          {
            text: '日志记录',
            items: [
              { text: '目录', link: '/blog/' },
              { text: 'Linux', link: '/blog/Linux/' },
 { text: 'Spring Boot', link: '/blog/SpringBoot/' },
            ]
          } 
        ],
      }
      
    }

  }

 