import { connect } from '../../lib/mp-redux';

const pageConfig = {
    data: {},

}

const mapStateToProps = state => {
    return {
        ...state,
        detail: state.indexReducer.detail
    }
}

const mapDispatchToProps = {

}

Page(connect(mapStateToProps, mapDispatchToProps)(pageConfig))