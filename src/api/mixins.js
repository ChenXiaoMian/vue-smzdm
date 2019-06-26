export const remMixin = {
  methods: {
    getRem () {
      var $html = document.querySelector('html');
      var oWidth = $html.clientWidth || document.documentElement.clientWidth;
      if (oWidth > 750) {
          $html.style.fontSize = 750 / 10 + 'px';
      } else {
          $html.style.fontSize = oWidth * .1 + 'px';
      }
    }
  },
  created () {
    this.getRem()
  }
}

export const filterMixin = {
  methods: {
    filterPic (pic) {
      if(pic.indexOf('https:')>-1) pic = pic.replace('https:','http:')
      if(pic.indexOf('tp-qna.smzdm.com')>-1) pic = pic.replace('tp-qna.smzdm.com','localhost:9191/tpQna')
      if(pic.indexOf('tp-y.zdmimg.com')>-1) pic = pic.replace('tp-y.zdmimg.com','localhost:9191/tpY')
      if(pic.indexOf('tp-qny.smzdm.com')>-1) pic = pic.replace('tp-qny.smzdm.com','localhost:9191/tpQny')
      if(pic.indexOf('qny.smzdm.com')>-1) pic = pic.replace('qny.smzdm.com','localhost:9191/qnY')
      if(pic.indexOf('y.zdmimg.com')>-1) pic = pic.replace('y.zdmimg.com','localhost:9191/y')
      if(pic.indexOf('tp-qnam.smzdm.com')>-1) pic = pic.replace('tp-qnam.smzdm.com','localhost:9191/tpQnam')
      return pic
    }
  }
}