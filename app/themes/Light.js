const BASE = {
  '--base-scrollbar-track': '#fff',
  '--base-scrollbar-thumb': '#5c677f',
  '--base-main-background': '#EEF4F9',
  '--base-text': '#3D4D56',
  '--base-link-color': '#3063c9',
}

const BUTTON = {
  '--button-disabled': '#d6d9e0',
  '--button-primary-box-shadow':
    '-17px -17px 20px 0 rgba(255,255,255,0.54), 17px 17px 20px 0 #C6CCD1, inset -1px -1px 0 0 #A4B0C3, inset 1px 1px 0 0 #FFFFFF',
  '--button-primary-disabled-background-color': '#E0E9EF',
  '--button-primary-background-image':
    'linear-gradient(180deg, #EAF2F7 2%, #E6F0F6 97%)',
  '--button-primary-hover-background-image':
    'linear-gradient(180deg, #FFFFFF 2%, #E2EAEF 100%)',
  '--button-primary-disabled-text-color': '#acbbc4',
  '--button-secondary-background': '#fff',
  '--button-secondary-hover': '#f2f2f2',
  '--button-primary-text': '#394152',
  '--button-secondary-text': '#394152',
  '--button-icon-color': '#394152',
  '--secondary-button-icon-color': '#394152',
  '--button-priority-transfer-background': '#fff',
  '--button-priority-transfer-color': '#394152',
  '--button-priority-transfer-disabled': '#fff',
  '--button-max-amount-background': '#e6e6e6',
  '--button-max-amount-text': '#8f939b',
  '--button-flag-icon-color': '#394152',
  '--button-flag-icon-opacity': 0.3,
}

const INPUT = {
  '--input-background': '#F9FCFD',
  '--input-error': '#ee6d66',
  '--input-error-text': '#fff',
  '--input-text': '#282828',
  '--input-label': '#5c677f',
  '--input-label-opacity': 0.5,
  '--input-select-hover': '#e6e6e6',
  '--input-active':
    'linear-gradient(#f2f2f2, #f2f2f2), radial-gradient(circle at top left, #66eb8e, #6bdaf6)',
  '--input-icon': '#9ca0a9',
  '--input-placeholder': 'rgba(40, 40, 40, 0.5)',
}

const HEADER_BAR = {
  '--header-bar-default-icon-color': '#394152',
}

const TAB = {
  '--tab-text': '#394152',
  '--tab-border': '#394152',
}

const PANEL = {
  '--panel-icon': '#282828',
  '--panel-header': '#D4DEE4',
  '--panel-header-text': '#394152',
  '--panel-background': '#fff',
  '--panel-header-border': '#8d98ae',
  '--panel-label-text': '#8d98ae',
  '--panel-full-height-background': '#fff',
  '--panel-full-height-nav-background': '#f2f2f2',
  '--panel-full-height-instructions-text': '#5c677f',
  '--panel-full-height-instructions-border': 'rgba(0, 0, 0, 0.15)',
  '--panel-full-height-header-icon-color': '#394152',
  '--panel-receive-explanation': 'rgba(242, 242, 242, .5)',
}

const MODAL = {
  '--modal-overlay': 'rgba(26, 54, 80, 0.25)',
}

const AUTH_STYLES = {
  '--auth-main-container-background': '#EAF2F7',
  '--auth-scan-qr-border': '#f2f2f2',
  '--auth-inner-container-box-shadow': `-16px -16px 17px 0 rgba(255, 255, 255, 0.44),
  16px 16px 20px 0 rgba(18, 21, 23, 0.24)`,
}

const DASHBOARD = {
  '--dashboard-market-data-line': '#3fd0ae',
  '--dashboard-asset-panel-total-background': '#F1F5FC',
  '--dashboard-total-wallet-value-odd-row': '#f8f8f8',
  '--dashboard-total-wallet-value-total-text': '#394152',
  '--dashboard-asset-panel-asset-name': '#5c677f',
  '--dashboard-token-balances-divider-line': '#f2f2f2',
  '--dashboard-price-history-current-price': '#394152',
}

const SIDEBAR = {
  '--sidebar-background': '#fff',
  '--side-bar-disabled-item-background': '#fff',
  '--sidebar-icon': '#9599a2',
  '--sidebar-active-border': '#66EDCD',
  '--sidebar-active-background': '#F1F5FC',
  '--sidebar-active-icon': '#394152',
  '--sidebar-shadow':
    '-16px -16px 17px 0 rgba(255,255,255,0.44), -3px 16px 20px 0 rgba(18,21,23,0.24)',
}

const TX_LIST = {
  '--tx-list-odd-row': '#f2f2f2',
  '--tx-list-button-icon': '#394152',
  '--tx-list-copy-icon': '#9599a2',
}

const SETTINGS = {
  '--settings-item-label': '#343b4a',
  '--settings-item-icon': '#cccccc',
  '--settings-item-border-color': '#f2f2f2',
  '--settings-link-text': '#3DF4A6',
  '--settings-select-value-text': '#3DF4A6',
  '--settings-donation-text': '#5c677f',
  '--settings-spacer': 'rgba(170, 178, 189, 0.3)',
}

const NODE_SELECT = {
  '--node-select-header-background': '#f2f2f2',
  '--node-select-icon-color': '#3DF4A6',
  '--node-select-automatic-select-button-text': '#5c677f',
  '--node-select-refresh-icon': '#394152',
  '--node-select-node-count': '#5c677f',
}

const AMOUNTS_PANEL = {
  '--amounts-panel-first-row-background': '#f2f2f2',
  '--amounts-panel-second-row-background': '#fff',
  '--amounts-panel-asset-name-text': '#515151',
  '--amounts-panel-asset-amount-text': '#515151',
  '--amounts-panel-asset-worth-text': '#515151',
}

const CONTACTS = {
  '--contacts-odd-numbered-row': 'rgba(230, 230, 230, 0.1)',
  '--contacts-group-header-background': '#f6f7f8',
  '--contacts-group-header-text': '#394152',
}

const SEND = {
  '--send-success-row-info': '#394152',
}

const QR_SCANNER = {
  '--qr-scan-paused': 'rgba(102, 237, 135, 0.6)',
  '--qr-scan-animation-start': 'rgba(57, 65, 82, 1)',
  '--qr-scan-animation-end': 'rgba(57, 65, 82, 0)',
}

const NEWS = {
  '--news-content-border-color': '#ececec',
}

export const LIGHT_NETWORK_CONFIG_TOOLTIP = {
  '--network-config-tooltip-label': '#8D98AE',
  '--network-config-tooltip-background': '#f8f8f8',
  '--network-config-tooltip-color': '#394152',
}

export const NOTIFICATIONS = {
  '--notifications-error-icon-color': '#fff',
  '--notifications-success-icon-color': '#fff',
}

export default {
  ...NEWS,
  ...AMOUNTS_PANEL,
  ...NODE_SELECT,
  ...MODAL,
  ...AUTH_STYLES,
  ...BASE,
  ...BUTTON,
  ...INPUT,
  ...PANEL,
  ...TAB,
  ...DASHBOARD,
  ...SIDEBAR,
  ...TX_LIST,
  ...SETTINGS,
  ...HEADER_BAR,
  ...CONTACTS,
  ...SEND,
  ...QR_SCANNER,
  ...LIGHT_NETWORK_CONFIG_TOOLTIP,
  ...NOTIFICATIONS,
}
