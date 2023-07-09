/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Formの部品を定義
const forms = {
  sample: {
    type: 'text', // 入力形式
    key: 'hostname', // jsonの該当する値（階層構造にはできません）
    name: '装置名', // 項目名
    default: '', // デフォルト値（現在動作させていない）
    rules: 'required', // バリデーションルール
    show: {}, // 表示条件を付けたい場合はshow
    items: {} // selectの場合はitems
  },
  hostname: {
    type: 'text',
    key: 'hostname',
    name: '装置名',
    default: '',
    rules: 'required'
  },
  dhcp: {
    type: 'switch',
    key: 'dhcp',
    name: 'DHCPクライアント機能',
    default: true,
    rules: 'required'
  },
  globalip: {
    type: 'switch',
    key: 'globalip',
    show: { key: 'dhcp', value: false }, // dhcpがfalseなら項目表示
    name: 'グローバルIPアドレス',
    default: false,
    rules: 'required'
  },
  ip: {
    type: 'text',
    key: 'ip',
    show: { key: 'dhcp', value: false },
    name: 'IPアドレス',
    default: true,
    rules: 'required|ippfx'
  },
  gateway: {
    type: 'text',
    key: 'gateway',
    show: { key: 'dhcp', value: false },
    name: 'ゲートウェイアドレス',
    default: true,
    rules: 'required|ip'
  },
  dns1: {
    type: 'text',
    key: 'dns1',
    show: { key: 'dhcp', value: false },
    name: 'プライマリDNS',
    default: '',
    rules: 'ip'
  },
  dns2: {
    type: 'text',
    key: 'dns2',
    show: { key: 'dhcp', value: false },
    name: 'セカンダリDNS',
    default: '',
    rules: 'ip'
  },
  wanEth: {
    type: 'select',
    key: 'wanEth',
    name: 'WAN側Ethernet設定',
    default: 'auto',
    rules: 'required',
    items: [
      { text: '自動設定', value: 'auto' },
      { text: '100Mbps/全二重', value: '100/full' },
      { text: '100Mbps/半二重', value: '100/half' },
      { text: '10Mbps/全二重', value: '10/full' },
      { text: '10Mbps/半二重', value: '10/half' }
    ]
  },
  lanJambo: {
    type: 'switch',
    key: 'lanJambo',
    name: 'LAN側ジャンボフレーム透過機能',
    default: false,
    rules: 'required'
  },
  lanPause: {
    type: 'switch',
    key: 'lanPause',
    name: 'LAN側Pause機能',
    default: true,
    rules: 'required'
  },
  media: {
    type: 'switch',
    key: 'media',
    name: 'メディアサーバ設定',
    default: true,
    rules: 'required'
  },
  verup: {
    type: 'switch',
    key: 'verup',
    name: 'メンテナンスバージョンアップ機能',
    default: true,
    rules: 'required'
  },
  homeIPLocation: {
    type: 'switch',
    key: 'homeIPLocation',
    name: 'ホームIPロケーション機能',
    default: false,
    rules: 'required'
  },
  srcValidate: {
    type: 'switch',
    key: 'srcValidate',
    name: '送信元検証機能',
    default: true,
    rules: 'required'
  },
  // wifi2
  wifi24g_wifi: {
    type: 'switch',
    key: 'wifi',
    name: 'Wi-Fi機能',
    default: true
  },
  wifi24g_ssid: {
    type: 'text',
    key: 'ssid',
    name: 'ネットワーク名(SSID)',
    default: '',
    rules: 'required|alpha_dash|max:32'
  },
  wifi24g_auto: {
    type: 'switch',
    key: 'auto',
    name: 'オートチャネルセレクト機能',
    default: true
  },
  wifi24g_dual: {
    type: 'select',
    key: 'dual',
    name: 'デュアルチャネル機能',
    default: 'auto',
    items: [
      { text: '使用する(自動切替)', value: 'auto' },
      { text: '使用する(優先)', value: 'pri' },
      { text: '使用しない', value: 'disable' }
    ]
  },
  wifi24g_channel: {
    type: 'select',
    key: 'channel',
    name: '使用チャネル',
    default: '1',
    items: [{ text: '1', value: '1' }]
  },
  wifi24g_isolate: {
    type: 'switch',
    key: 'isolate',
    name: 'ネットワーク分離機能',
    default: false
  },
  wifi24g_separate: {
    type: 'switch',
    key: 'separate',
    name: 'SSID内分離(セパレータ)',
    default: false
  },
  wifi24g_mode: {
    type: 'select',
    key: 'mode',
    name: '暗号化モード',
    default: 'WPA/WPA2-PSK(AES)',
    items: [
      { text: '暗号化無効', value: 'disable' },
      { text: 'WPA2-PSK(AES)', value: 'WPA2-PSK(AES)' },
      { text: 'WPA/WPA2-PSK(AES)', value: 'WPA/WPA2-PSK(AES)' },
      { text: 'WPA/WPA2-PSK(TKIP/AES)', value: 'WPA/WPA2-PSK(TKIP/AES)' }
    ]
  },
  wifi24g_psk: {
    type: 'text',
    key: 'psk',
    name: 'WPA暗号化キー(PSK)',
    default: '',
    rules: 'required|alpha_dash|max:32'
  },
  wifi24g_interval: {
    type: 'text',
    key: 'interval',
    name: '暗号化キー更新間隔(分)',
    default: '30',
    rules: 'required|max_value:1440'
  },
  wifi24g_stealth: {
    type: 'switch',
    key: 'stealth',
    name: 'ESS-IDステルス機能(SSIDの隠蔽)',
    default: ''
  },
  wifi24g_filter: {
    type: 'switch',
    key: 'filter',
    name: 'MACアドレスフィルタリング機能',
    default: ''
  },
  // 以下は中途半端
  wifi5g_quad: {
    type: 'select',
    default: 'enable',
    items: [
      { text: '使用する', value: 'enable' },
      { text: '使用しない', value: 'disable' }
    ]
  },
  wifi5g_tv: {
    type: 'select',
    default: 'enable',
    items: [
      { text: '使用する', value: 'enable' },
      { text: '使用しない', value: 'disable' }
    ]
  },
  wifi5g_channel: {
    type: 'select',
    default: 'auto',
    items: [
      { text: 'W52', value: 'w52' },
      { text: 'W53', value: 'w53' },
      { text: 'W56', value: 'w56' },
      { text: '自動', value: 'auto' }
    ]
  },
  wifi5g_mode: {
    type: 'select',
    default: 'WPA/WPA2-PSK(AES)',
    items: [
      { text: '暗号化無効', value: 'disable' },
      { text: 'WPA2-PSK(AES)', value: 'WPA2-PSK(AES)' },
      { text: 'WPA/WPA2-PSK(AES)', value: 'WPA/WPA2-PSK(AES)' },
      { text: 'WPA/WPA2-PSK(TKIP/AES)', value: 'WPA/WPA2-PSK(TKIP/AES)' }
    ]
  },
  misc_radio: {
    type: 'radio',
    default: 'a',
    items: [
      { text: 'Aの選択肢', value: 'a' },
      { text: 'Bの選択肢', value: 'b' },
      { text: 'Cの選択肢', value: 'c' }
    ]
  },
  misc_select: {
    type: 'select',
    default: null,
    items: [
      { text: '--- 選択してください ---', value: '' },
      { text: 'Aの選択肢', value: 'a' },
      { text: 'Bの選択肢', value: 'b' },
      { text: 'Cの選択肢', value: 'c' }
    ]
  }
}

// ページを定義
const pages = {
  general: {
    page_name: '一般設定',
    desc: 'テンプレートだけでページをつくる場合はこちら',
    debug: true,
    sections: [
      {
        section_name: '基本設定',
        items: [forms.hostname, forms.dhcp, forms.globalip, forms.ip, forms.gateway, forms.dns1, forms.dns2]
      },
      {
        section_name: 'インタフェース設定',
        items: [forms.wanEth, forms.lanJambo, forms.lanPause]
      },
      {
        section_name: 'その他の設定',
        items: [forms.media, forms.verup, forms.homeIPLocation, forms.srcValidate]
      }
    ]
  },
  wifi24g: {
    page_name: 'Wi-Fi詳細設定(2.4GHz)',
    desc: 'テンプレートだけでページをつくる場合はこちら',
    debug: true,
    sections: [
      {
        section_name: 'Wi-Fi機能設定',
        items: [
          forms.wifi24g_wifi,
          forms.wifi24g_ssid,
          forms.wifi24g_auto,
          forms.wifi24g_dual,
          forms.wifi24g_channel,
          forms.wifi24g_isolate,
          forms.wifi24g_separate
        ]
      },
      {
        section_name: '暗号化',
        items: [forms.wifi24g_mode, forms.wifi24g_psk, forms.wifi24g_interval]
      },
      {
        section_name: '子機の接続制限',
        items: [forms.wifi24g_stealth, forms.wifi24g_filter]
      }
    ]
  }
}

const template = {
  title: 'WebUI Sample',

  // 左メニュー
  navMenus: [
    { name: '現在の状態', icon: 'mdi-information-outline', to: '/state' },
    { name: '一般設定1', icon: 'mdi-cog', to: '/general' },
    { name: '一般設定2', icon: 'mdi-cog', to: '/_general' },
    { name: 'Wi-Fi基本設定', icon: 'mdi-wifi', to: '/wifi' },
    { name: 'Wi-Fi詳細設定(2.4GHz)1', icon: 'mdi-wifi', to: '/wifi24g' },
    { name: 'Wi-Fi詳細設定(2.4GHz)2', icon: 'mdi-wifi', to: '/_wifi24g' },
    { name: 'Wi-Fi詳細設定(5GHz)', icon: 'mdi-wifi', to: '/wifi5g' },
    { name: 'IPフィルタ', icon: 'mdi-file-table-outline', to: '/ipfilter' },
    { name: 'カード', icon: 'mdi-file-table-outline', to: '/card' },
    { name: 'その他', icon: 'mdi-help-circle', to: '/misc' }
  ],

  // ページテンプレート
  pages: pages,

  // Formテンプレート（Commonコンポーネントでは使わない）
  forms: forms
}
