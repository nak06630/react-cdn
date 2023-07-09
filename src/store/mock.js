/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mock = {
  state: {
    host: {
      hostname: 'ATERM-123456',
      version: '1.0.15',
      mac: '00:11:22:33:44:55'
    },
    wifi24g: {
      name: 'aterm-123456-g',
      mode: '2.4GHz',
      channel: '6',
      ssid: 'ateam-123456-g',
      mac: '00:11:22:33:55:aa',
      isolation: '未使用'
    },
    wifi5g: {
      name: 'aterm-123456-a',
      mode: '5GHz',
      channel: '36&40&44&48',
      ssid: 'ateam-123456-a',
      mac: '00:11:22:33:55:bb',
      isolation: '未使用'
    },
    state: {
      mode: 'ブリッジモード',
      ip: '192.168.1.9/24',
      gateway: '192.168.1.1',
      dns1: '192.168.1.1',
      dns2: '未使用'
    },
    internetAccess: {
      usb_storage: 'アクセス不可',
      usb_camera: 'アクセス不可',
      remoteBoot: 'アクセス不可',
      ddnsUpdate: '未使用'
    },
    homeIPLocation: {
      name: '未使用'
    }
  },
  config: {
    general: {
      hostname: 'ATERM-123456',
      dhcp: true,
      globalip: false,
      ip: '192.168.0.1/24',
      gateway: '192.168.0.254',
      dns1: '',
      dns2: '',
      wanEth: 'auto',
      lanJambo: false,
      lanPause: true,
      media: true,
      verup: true,
      homeIPLocation: false,
      srcValidate: true
    },
    wifi: {},
    wifi24g: {
      wifi: true,
      ssid: 'aterm-123456-g',
      auto: true,
      dual: 'auto',
      channel: '1',
      isolate: false,
      separate: false,
      mode: 'WPA/WPA2-PSK(AES)',
      psk: '001234456789abcdef',
      interval: '30',
      stealth: true,
      filter: true
    },
    wifi5g: {
      wifi: true,
      ssid: 'aterm-123456-a',
      quad: 'enable',
      channel: 'w52',
      isolate: false,
      separate: false,
      tv: 'enable',
      mode: 'WPA/WPA2-PSK(AES)',
      psk: '001234456789abcdef',
      interval: '30',
      stealth: true,
      filter: true
    },
    misc: {
      radio: 'b',
      select: 'b',
      email: 'user1@misc.com',
      ip: '192.168.10.1/24',
      switch: true
    },
    ipfilter: {
      items: [
        {
          type: '透過',
          dir: '送信(OUT)',
          proto: 'TCP',
          srcaddr: '192.168.0.0/24',
          srcport: 'any',
          dstaddr: '192.168.1.0/24',
          dstport: '80'
        },
        {
          type: '廃棄',
          dir: '受信(IN)',
          proto: 'UDP',
          srcaddr: 'any',
          srcport: 'any',
          dstaddr: 'any',
          dstport: '1000-2000'
        },
        {
          type: '廃棄',
          dir: '送信(OUT)',
          proto: 'IP',
          srcaddr: 'any',
          srcport: '',
          dstaddr: 'any',
          destport: ''
        }
      ]
    },
    card: [
      // cat: 1: adult, 0: child
      { mac: '00:11:22:33:44:55', cat: 1, reg: 1, res: 4, desc: 'SO-04J' },
      { mac: '00:11:22:33:44:66', cat: 0, reg: 1, res: 3, desc: 'SO-04J' },
      { mac: '00:11:22:33:44:77', cat: 1, reg: 0, res: 2, desc: '端末1' },
      { mac: '00:11:22:33:44:88', cat: 1, reg: 0, res: 2, desc: '端末2' },
      { mac: '00:11:22:33:44:99', cat: 1, reg: 0, res: 2, desc: '端末3' },
      { mac: '00:11:22:33:44:aa', cat: 1, reg: 0, res: 1, desc: '端末4' },
      { mac: '00:11:22:33:44:bb', cat: 1, reg: 0, res: 0, desc: '端末5' }
    ]
  }
}
