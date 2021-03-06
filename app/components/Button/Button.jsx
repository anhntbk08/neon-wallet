// @flow
import React from 'react'
import classNames from 'classnames'
import { omit } from 'lodash-es'

import styles from './Button.scss'

type Props = {
  className?: ?string,
  renderIcon: ?Function,
  primary: ?boolean,
  active?: boolean,
  type: ?string,
  // will center label if rendered with icon
  shouldCenterButtonLabelText: boolean,
  children: React$Node,
}

class Button extends React.Component<Props> {
  static defaultProps = {
    primary: false,
    type: 'button',
    shouldCenterButtonLabelText: false,
  }

  render = () => {
    const { className, children } = this.props
    const passDownProps = omit(
      this.props,
      'primary',
      'renderIcon',
      'active',
      'shouldCenterButtonLabelText',
    )

    return (
      <button
        {...passDownProps}
        className={classNames(
          styles.button,
          className,
          this.getActiveButtonStyle(),
          this.getButtonStyle(),
        )}
      >
        {this.renderIcon()}
        <span>{children}</span>
      </button>
    )
  }

  renderIcon = () => {
    const { renderIcon, shouldCenterButtonLabelText } = this.props

    if (renderIcon) {
      return (
        <span
          className={classNames(
            styles.icon,
            { [styles.centeredLabel]: shouldCenterButtonLabelText },
            this.getIconStyle(),
          )}
        >
          {renderIcon()}
        </span>
      )
    }
    return null
  }

  getActiveButtonStyle = () => (this.props.active ? styles.active : undefined)

  getButtonStyle = () =>
    this.props.primary ? styles.primary : styles.secondary

  getIconStyle = () => (this.props.primary ? styles.primary : styles.secondary)
}

export default Button
