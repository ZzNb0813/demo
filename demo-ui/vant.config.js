module.exports = {
  name: 'creater-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/creater-ui/',
    },
  },
  site: {
    title: 'creater-ui',
    logo: '/public/img/lcz_logo_b.png',
    nav: [{
      items: [
    
      ],
    },
    {
      title: '基础组件',
      items: [
        {
          path: 'lcz-layout',
          title: 'lcz-layout 布局方式',
        },
        {
          path: 'lcz-picker',
          title: 'lcz-picker 选择器',
        },
      
      ],
    },


    ],
  },
};
