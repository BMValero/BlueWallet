module.exports = {
  _: {
    storage_is_encrypted: 'ที่เก็บข้อมูลของคุณถูกเข้ารหัส. ต้องการรหัสผ่านเพื่อถอดรหัส',
    enter_password: 'กรุณาใส่รหัสผ่าน',
    bad_password: 'รหัสผ่านไม่ถูกต้อง กรุณาใส่รหัสผ่านอีกครั้ง',
    months_ago: 'เดือนที่แล้ว',
    days_ago: 'วันที่แล้ว',
    hours_ago: 'ชั่วโมงที่แล้ว',
    minutes_ago: 'นาทีที่แล้ว',
    never: 'ไม่เคย',
  },
  wallets: {
    select_wallet: 'เลือกกระเป๋าสตางค์',
    options: 'ทางเลือก',
    list: {
      app_name: 'บูลวอลเล็ต',
      title: 'กระเป๋าสตางค์',
      header: 'กระเป๋าสตางค์คือที่เก็บไพร์เวทคีย์และแอดเดรส' + 'ที่คุณสามารถแชร์เพื่อโอนรับเหรียญ.',
      add: 'เพิ่มกระเป๋าสตางค์',
      create_a_wallet: 'สร้างกระเป๋าสตางค์',
      create_a_wallet1: 'ไม่มีค่าใช้จ่าย และคุณสามารถสร้างกระเป๋าสตางค์',
      create_a_wallet2: 'ได้มากเท่าที่ต้องการ',
      latest_transaction: 'ธุรกรรมล่าสุด',
      empty_txs1: 'ธุรกรรมจะปรากฏที่นี่,',
      empty_txs2: 'ไม่มี ณ ขณะนี้',
      tap_here_to_buy: 'กดที่นี่เพื่อซื้อบิตคอยน์',
    },
    reorder: {
      title: 'เปลี่ยนลำดับกระเป๋าสตางค์',
    },
    add: {
      title: 'เพิ่มกระเป๋าสตางค์',
      description:
        'คุณสามรถสแกนกระเป๋าสตางค์กระดาษ(ในรูปแบบ WIF - Wallet Import Format), หรือสร้างกระเป๋าสตางค์ใหม่.  กระเป๋าสตางค์ใหม่จะใช้ Segwit โดยอัตโนมัติ.',
      scan: 'สแกน',
      create: 'สร้าง',
      label_new_segwit: 'SegWit ใหม่',
      label_new_lightning: 'ไลท์นิงใหม่',
      wallet_name: 'ชื่อกระเป๋าสตางค์',
      wallet_type: 'ชนิด',
      or: 'หรือ',
      import_wallet: 'นำเข้ากระเป๋าสตางค์',
      imported: 'นำเข้าแล้ว',
      coming_soon: 'เร็วๆนี้',
      lightning: 'ไลท์นิง',
      bitcoin: 'บิตคอยน์',
    },
    details: {
      title: 'กระเป๋าสตางค์',
      address: 'แอดเดรส',
      type: 'ชนิด',
      label: 'ป้าย',
      destination: 'เป้าหมาย',
      description: 'คำอธิบาย',
      are_you_sure: 'คุณแน่ใจหรือไม่?',
      yes_delete: 'ใช่, ลบเลย',
      no_cancel: 'ไม่ใช่, ยกเลิก',
      delete: 'ลบ',
      save: 'เก็บ',
      delete_this_wallet: 'ลบกระเป๋าสตางค์อันนี้',
      export_backup: 'ส่งออก / สำรอง',
      buy_bitcoin: 'ซื้อบิตคอยน์',
      show_xpub: 'แสดง XPUB ของกระเป๋าสตางค์',
    },
    export: {
      title: 'ส่งออกกระเป๋าสตางค์',
    },
    xpub: {
      title: 'XPUB ของกระเป๋าสตางค์',
      copiedToClipboard: 'ก๊อปปี้ไปที่คลิปบอร์ดแล้ว.',
    },
    import: {
      title: 'นำเข้า',
      explanation: 'บันทึกนีโมนิค(สิ่งที่ช่วยให้จำได้), ไพร์เวทคีย์, WIF, และทุกๆอย่าง.  บูลวอลเล็ทจะพยายามนำเข้ากระเป๋าสตางค์ของคุณ',
      imported: 'นำเข้าแล้ว',
      error: 'ไม่สามารถนำเข้าได้. กรุณาตรวจสอบข้อมูลให้ถูกต้อง.',
      success: 'สำเร็จ',
      do_import: 'นำเข้า',
      scan_qr: 'หรือสแกนรหัสคิวอาร์แทน?',
    },
    scanQrWif: {
      go_back: 'กลับ',
      cancel: 'ยกเลิก',
      decoding: 'กำลังถอดรหัส',
      input_password: 'ใส่รหัสผ่าน',
      password_explain: 'นี่คือไพร์เวทคีย์ที่เข้ารหัสแบบ BIP38',
      bad_password: 'รหัสไม่ถูกต้อง',
      wallet_already_exists: 'กระเป๋าสตางค์นี้มีอยู่แล้ว',
      bad_wif: 'WIF ไม่ถูกต้อง',
      imported_wif: 'WIF ที่นำเข้า',
      with_address: ' ด้วยแอดเดรส ',
      imported_segwit: 'SegWit ที่นำเข้า',
      imported_legacy: 'Legacy ที่นำเข้า',
      imported_watchonly: 'Watch-only ที่นำเข้า',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'ธุรกรรม',
      title: 'ธุรกรรม',
      description: 'รายการธุรกรรมเข้าออกของกระเป๋าสตางค์ของคุณ',
      conf: 'conf',
    },
    details: {
      title: 'ธุรกรรม',
      from: 'อินพุท',
      to: 'เอ้าพุท',
      copy: 'ก๊อปปี้',
      transaction_details: 'รายละเอียดธุรกรรม',
      show_in_block_explorer: 'แสดงด้วย block explorer',
    },
  },
  send: {
    header: 'ส่ง',
    details: {
      title: 'สร้างธุรกรรม',
      amount_field_is_not_valid: 'จำนวนเงินไม่ถูกต้อง',
      fee_field_is_not_valid: 'ค่าธรรมเนียมไม่ถูกต้อง',
      address_field_is_not_valid: 'แอดเดรสไม่ถูกต้อง',
      total_exceeds_balance: 'จำนวนเงินที่จะส่งเกินเงินที่มี.',
      create_tx_error: 'ไม่สามารถสร้างธุรกรรมได้.  กรุณาตรวจสอบแอดเดรสให้ถูกต้อง.',
      address: 'แอดเดรส',
      amount_placeholder: 'จำนวนเงินที่ส่ง (หน่วย BTC)',
      fee_placeholder: 'รวมค่าธรรมเนียม (หน่วย BTC)',
      note_placeholder: 'หมายเหตุถึงตัวท่านเอง',
      cancel: 'ยกเลิก',
      scan: 'สแกน',
      send: 'ส่ง',
      create: 'สร้าง',
      remaining_balance: 'ยอดคงเหลือ',
    },
    confirm: {
      header: 'ยืนยัน',
      sendNow: 'ส่งเดี๋ยวนี้',
    },
    success: {
      done: 'สำเร็จ',
    },
    create: {
      details: 'รายละเอียด',
      title: 'สร้างธุรกรรม',
      error: 'ไม่สามารถสร้างธุรกรรมได้. แอดเดรสไม่ถูกต้อง หรือ จำนวนเงินไม่ถูกต้อง?',
      go_back: 'กลับ',
      this_is_hex: 'นี่คือ hex ของธุรกรรม, signed แล้วและพร้อมที่จะบรอดคาซท์ไปยังเน็ตเวิร์ค.',
      to: 'ถึง',
      amount: 'จำนวนเงิน',
      fee: 'ค่าธรรมเนียม',
      tx_size: 'ขนาดธุรกรรม',
      satoshi_per_byte: 'ซาโตชิต่อไบท์',
      memo: 'บันทึกช่วยจำ',
      broadcast: 'บรอดคาซท์',
      not_enough_fee: 'ค่าธรรมเนียมไม่เพียงพอ. กรุณาเพิ่มค่าธรรมเนียม',
    },
  },
  receive: {
    header: 'รับ',
    details: {
      title: 'แชร์แอดเดรสนี้กับผู้จ่าย',
      share: 'แชร์',
      copiedToClipboard: 'ก๊อปปี้ไปที่คลิปบอร์ดแล้ว.',
      label: 'คำอธิบาย',
      setAmount: 'รับด้วยจำนวน',
    },
  },
  buyBitcoin: {
    header: 'ซื้อบิตคอยน์',
    tap_your_address: 'กดที่แอดเดรสของคุณเพื่อก๊อปปี้ไปยังคลิปบอร์ด:',
    copied: 'ก๊อปปี้ไปที่คลิปบอร์ดแล้ว!',
  },
  settings: {
    header: 'ตั้งค่า',
    plausible_deniability: 'การปฏิเสธที่เป็นไปได้...',
    storage_not_encrypted: 'ที่เก็บข้อมูล: ยังไม่เข้ารหัส',
    storage_encrypted: 'ที่เก็บข้อมูล: เข้ารหัสแล้ว',
    password: 'รหัสผ่าน',
    password_explain: 'สร้างรหัสผ่านที่จะใช้ในการเข้ารหัสที่เก็บข้อมูล',
    retype_password: 'ใส่รหัสผ่านอีกครั้ง',
    passwords_do_not_match: 'รหัสผ่านไม่ตรงกัน',
    encrypt_storage: 'เข้ารหัสที่เก็บข้อมูล',
    about: 'เกี่ยวกับ',
    language: 'ภาษา',
    currency: 'เงินตรา',
  },
  plausibledeniability: {
    title: 'การปฏิเสธที่เป็นไปได้',
    help:
      'ภายใต้บางสถานการ์ณ, คุณอาจจะจำเป็นต้องเปิดเผย' +
      'รหัสผ่าน. เพื่อเก็บเหรียญให้ปลอดถัย บูลวอลเล็ทสามารถสร้างที่เก็บข้อมูล' +
      'อีกแห่งหนึ่งโดยใช้รหัสผ่านคนละอัน. ภายใต้สถานการ์ณที่จำเป็น ' +
      'คุณสามารถเปิดเลยรหัสผ่านนี้กับบุคคลที่สาม. และเมื่อใส่รหัสผ่านนี้ใน ' +
      'บลูวอลเล็ท ที่เก็บข้อมูลเทียมจะถูกเปิด. และ' +
      'น่าจะเป็นที่ยอมรับได้ต่อบุคลที่สาม, วิธีนี้จะทำให้ที่เก็บข้อมูลหลักมีความปลอดภัย' +
      'และเป็นความลับ.',
    help2: 'ที่เก็บข้อมูลอันใหม่จะทำงานได้สมบูรณ์ และคุณสามารถเก็บจำนวนเงินขั้นต่ำได้ ' + 'โดยที่มีความน่าเชื่อถือ.',
    create_fake_storage: 'สร้างที่เก็บข้อมูลเทียม',
    go_back: 'กลับ',
    create_password: 'สร้างรหัสผ่าน',
    create_password_explanation: 'รหัสผ่านสำหรับที่เก็บข้อมูลเทียมไม่ควรตรงกับรหัสผ่านที่ใช้กับที่เก็บข้อมูลเทียมจริง',
    password_should_not_match: 'รหัสผ่านสำหรับที่เก็บข้อมูลเทียมไม่ควรตรงกับรหัสผ่านที่ใช้กับที่เก็บข้อมูลเทียมจริง',
    retype_password: 'ใส่รหัสผ่านอีกครั้ง ใส่รหัสผ่านอีกครั้ง',
    passwords_do_not_match: 'รหัสผ่านไม่ตรงกัน ',
    success: 'Success',
  },
  lnd: {
    title: 'จัดการเงิน',
    choose_source_wallet: 'เลือกกระเป๋าสตางค์',
    refill_lnd_balance: 'เติมกระเป๋าสตางค์ไลท์นิง',
    refill: 'เติม',
    withdraw: 'ถอน',
    expired: 'หมดอายุแล้ว',
    sameWalletAsInvoiceError: 'คุณไม่สามารถจ่ายใบแจ้งหนี้นี้ด้วยกระเป๋าสตางค์อันเดียวกันกับที่ใช้สร้างมัน.',
  },
};
