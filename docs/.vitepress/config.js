export default {
    title: 'Kwan \' s Blog',

    description: '日志记录',
    
    themeConfig: {
    
      siteTitle: 'Kwan \' s Blog',
    
      nav: [
        { text: '主页', link: '/home' },
        { text: '日志', link: '/blog/' },
        { text: '归档', link: '/archive/' },
      ],
      footer: {
        message: 'Make From VitePress',
        copyright: 'Copyright © 2022-Kwan'
      },
      sidebar:{
        '/blog/': [
          {
            text: '日志记录',
            items: [
              { text: '目录', link: '/blog/' },
            ]
          } 
        ],
      }
      
    }

  }

 