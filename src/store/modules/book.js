const book = {
 state:{
  fileName: '',
     menuVisible: false,
     settingVisible: -1,
     defaultFontSize: 16,
     defaultFontFamily: 'Default',
     fontFamilyVisible: false,
     defaultTheme: 'Default',
     bookAvailable: false,
     progress: 0,
     section: 0,
     isPaginating: true,
     currentBook: null,
     navigation: null,
     cover: null,
     metadata: null,
     paginate: '',
     pagelist: null,
     offsetY: 0,
     isBookmark: null
 },
 mutations:{
   'SET_FILENAME':(state,fileName) => {
     state.fileName = fileName
   },
   'SET_MENUVISIBLE':(state,menuVisible) => {
     state.menuVisible = menuVisible
   },
   'SET_SETTINGVISIBLE':(state,settingVisible) => {
     state.settingVisible = settingVisible
    },
    'SET_DEFAULT_FONT_SIZE':(state,defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
     }
  }
}

export default book
