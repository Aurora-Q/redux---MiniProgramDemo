import { clear } from '../actions'
import { connect } from '../lib/mp-redux'
import getInitialState from '../getInitialState'

const pageConfig = {
  data: {
    mobile: '',
    code: '',
    companyName: '',
  },

  onShow() {
    console.log('getInitialState', getInitialState());
  },

  onGetMobileMessage(e) {
    this.data.mobile = e.detail;
  },
  onGetCode(e) {
    this.data.code = e.detail;
  },
  onGetCompanyName(e) {
    this.data.companyName = e.detail;
  },

  onClear() {
    const message = {
      mobile: this.data.mobile,
      code: this.data.code,
      companyName: this.data.companyName,
    }
    // 并不能直接修改state,只能通过view视图，去触发相对应的action: action.js
    this.clear(message)
  }

}
const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = {
  clear
}

Page(connect(mapStateToProps, mapDispatchToProps)(pageConfig))