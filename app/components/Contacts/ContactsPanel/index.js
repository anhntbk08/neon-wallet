// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { injectIntl } from 'react-intl'
import { compose } from 'recompose'
import { withActions } from 'spunky'
import { withRouter } from 'react-router-dom'

import ContactsPanel from './ContactsPanel'
import { deleteContactActions } from '../../../actions/contactsActions'
import withFailureNotification from '../../../hocs/withFailureNotification'
import {
  showErrorNotification,
  showSuccessNotification,
} from '../../../modules/notifications'
import { showModal } from '../../../modules/modal'

const actionCreators = {
  showModal,
  showErrorNotification,
  showSuccessNotification,
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const mapContactActionsToProps = actions => ({
  deleteContact: name => actions.call({ name }),
})

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withRouter,
  withActions(deleteContactActions, mapContactActionsToProps),
  withFailureNotification(deleteContactActions),
  injectIntl,
)(ContactsPanel)
