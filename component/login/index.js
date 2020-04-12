import { clear } from '../../actions'
import { connectComponent } from '../../lib/mp-redux'

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = {
   clear
}

Component(
    connectComponent(mapStateToProps, mapDispatchToProps)({
      properties: {
        mobile: {
          type: Number,
          value: '',
        }
      },
      data: {
        mobile: '',
      },
        methods: {
            onMobileInput({
              detail: {
                value
              }
            }) {
              this.triggerEvent('mobile', value);
            },
            onMobileImgCode({
              detail: {
                value
              }
            }) {
              this.triggerEvent('code', value);
            },
            onCompanyName({
              detail: {
                value
              }
            }) {
              this.triggerEvent('company', value);
            }
        }
    })
)