import { mapGetters,mapActions } from 'vuex'
  export const ebookMixin = {
    computed:{
      ...mapGetters(['menuVisible','fileName','settingVisible','defaultFontSize'])
    },
    methods:{
      ...mapActions(['setMenuVisible','setFileName','setSettingVisible','setDefaultFontSize'])
    }
   }
