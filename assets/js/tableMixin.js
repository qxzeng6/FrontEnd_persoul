import URL from '../constant/url'
const tableMixin = {
  data() {
    return {
      exportUrl: URL.EXPORT_URL
    }
  },
  methods: {
    inputHandleFn(params) {
      let { formData, flag} = params  // flag------1：查询；2：重置
      let queryParams = {}
      formData.forEach(item => {
        if(item.value) {
          queryParams[item.props] = item.value
        }
      })
      
      if(flag == 1) {   // 查询
        this.basicTableData.paginationData.pageNum = 1
        this.getListData(queryParams)
      } else {  // 导出
        // let exportUrl = process.env.VUE_APP_REQUIRE_URL + this.exportUrl
        // console.log('导出地址------------', exportUrl);
        // window.open(exportUrl)
        
      }

    },
    // 每页条数改变
    handleSizeChange(val) {
      this.basicTableData.paginationData.pageSize = val
      this.getListData()
    },
    // 当前页码改变
    handleCurrentChange(val) {
      this.basicTableData.paginationData.pageNum = val
      this.getListData()
    },
  }
}

export default tableMixin