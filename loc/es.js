module.exports = {
  _: {
    storage_is_encrypted: 'Su almacenamiento está cifrado. Se requiere contraseña para descifrarla.',
    enter_password: 'Inserte contraseña',
    bad_password: 'Contraseña incorrecta. Intente nuevamente.',
    months_ago: 'meses atras',
    days_ago: 'dias atras',
    hours_ago: 'horas atras',
    minutes_ago: 'minutos atras',
    never: 'nunca',
  },
  wallets: {
    options: 'opciones',
    list: {
      app_name: 'Blue Wallet',
      title: 'carteras',
      header: 'Un Monedero esta representado con secreto (clave privada) y una dirección' + 'que puedes compartir para recibir monedas.',
      add: 'Añadir Carterqa',
      create_a_wallet: 'Crear una cartera',
      create_a_wallet1: 'Es gratis y puedes crear cuantas deseas',
      create_a_wallet2: 'cuantas usted quiera',
      latest_transaction: 'última transacción',
      empty_txs1: 'Sus transacciones aparecerán aquí,',
      empty_txs2: 'ninguno por el momento.',
      tap_here_to_buy: 'Tap here to buy Bitcoin',
    },
    add: {
      title: 'Añadir cartera',
      description:
        'Puedes escanear la cartera de papel (en WIF - Formato de importación de carteras) o crear una nueva cartera. Las carteras SegWit estan compatibles por defecto.',
      scan: 'Escaniar',
      create: 'Crear',
      label_new_segwit: 'Nuevo SegWit',
      wallet_name: 'nombre de cartera',
      wallet_type: 'tipo de cartera',
      or: 'o',
      import_wallet: 'Importar cartera',
      imported: 'Importado',
      coming_soon: 'Viene pronto',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Detalles de la cartera',
      address: 'Dirección',
      type: 'Tipo',
      label: 'Etiqueta',
      delete: 'Eliminar',
      save: 'Guardar',
      destination: 'destino',
      description: 'descripcion',
      are_you_sure: '¿Estás seguro?',
      yes_delete: 'Si, eliminar',
      no_cancel: 'No, cancelar',
      delete_this_wallet: 'Eliminar esta carterqa',
      export_backup: 'Exportar / Guardar',
      buy_bitcoin: 'Buy Bitcoin',
    },
    export: {
      title: 'Exportacion de cartera',
    },
    import: {
      title: 'importar',
      explanation:
        'Escriba aquí mnemotécnica, clave privada, WIF o cualquier cosa que tenga. BlueWallet hará todo lo posible para adivinar el formato correcto e importar su cartera.',
      imported: 'Importado',
      error: 'No se pudo importar. ¿Es valido?',
      success: 'Exito',
      do_import: 'Importar',
      scan_qr: 'o escanear codigo QR?',
    },
    scanQrWif: {
      go_back: 'Regresar',
      cancel: 'Cancelar',
      decoding: 'Descodificación',
      input_password: 'Ingrese su contraseña',
      password_explain: 'Eso es BIP38 clave privada encriptada',
      bad_password: 'Contraseña equivocada',
      wallet_already_exists: 'Esa cartera ya existe',
      bad_wif: 'WIF equivocado',
      imported_wif: 'WIF importado ',
      with_address: ' con dirección ',
      imported_segwit: 'SegWit importado',
      imported_legacy: 'Legado importado',
      imported_watchonly: 'Watch-only importado',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacciónes',
      title: 'transacciónes',
      description: 'Una lista de las transacciones entrantes o salientes de sus carteras',
      conf: 'conf',
    },
    details: {
      title: 'Transaccion',
      from: 'De',
      to: 'A',
      copy: 'Copiar',
    },
  },
  send: {
    header: 'enviar',
    confirm: {
      header: 'Confirm',
      sendNow: 'Send now',
    },
    success: {
      done: 'Done',
    },
    details: {
      title: 'Crear Transaccion',
      amount_field_is_not_valid: 'La cantidad no es válida',
      fee_field_is_not_valid: 'La tasa no es válida',
      address_field_is_not_valid: 'La dirección no es válida',
      receiver_placeholder: 'La dirección de recipiente',
      amount_placeholder: 'cantidad para enviar (in BTC)',
      fee_placeholder: 'más tasa de transaccion (in BTC)',
      note_placeholder: 'comentario (para ti mismo)',
      create_tx_error: 'Se ha producido un error al crear la transacción. Por favor, asegúrese de que la dirección es válida.',
      cancel: 'Cancelar',
      scan: 'Escaniar',
      address: 'Direccion',
      create: 'Crear',
      send: 'Envíar',
      remaining_balance: 'Balance disponible',
      total_exceeds_balance: 'El monto excede el balance disponible.',
    },
    create: {
      title: 'Crear una Transaccion',
      details: 'Detalles',
      error: 'Error al crear una transacción. ¿Dirección o cantidad estan invalidas?',
      go_back: 'Regresar',
      this_is_hex: 'Este es representacion hex de transacción, firmado y listo para ser transmitido a la red. ¿Continuar?',
      to: 'A',
      amount: 'Cantidad',
      fee: 'Tasa',
      tx_size: 'tamaño de TX',
      satoshi_per_byte: 'satoshiPorByte',
      memo: 'Comentario',
      broadcast: 'Transmitir',
      not_enough_fee: 'Tasa no es suficiente. Incremente la tasa',
    },
  },
  receive: {
    header: 'Recibir',
    details: {
      title: 'Comparte esta dirección con el pagador',
      share: 'Compartir',
      copiedToClipboard: 'Copiado a portapapeles.',
    },
  },
  buyBitcoin: {
    header: 'Buy Bitcoin',
    tap_your_address: 'Tap your address to copy it to clipboard:',
    copied: 'Copied to Clipboard!',
  },
  settings: {
    tabBarLabel: 'Ajustes',
    header: 'Ajustes',
    plausible_deniability: 'Negación plausible...',
    storage_not_encrypted: 'Almacenamiento: no esta cifrado',
    storage_encrypted: 'Almacenamiento: cifrado',
    password: 'Contraseña',
    password_explain: 'Crea la contraseña que usarás para descifrar el almacenamiento',
    retype_password: 'Ingresa la contraseña nuevamente',
    passwords_do_not_match: 'Contraseñas deben ser iguales',
    encrypt_storage: 'Cifrar almacenamiento',
    about: 'Sobre nosotros',
    language: 'Idioma',
    currency: 'Moneda',
  },
  plausibledeniability: {
    title: 'Negación plausible',
    help:
      'Bajo ciertas circunstancias, usted podría verse obligado a revelar un ' +
      'contraseña. Para mantener sus monedas seguras, BlueWallet puede crear otro ' +
      'almacenamiento cifrado, con una contraseña diferente. Bajo la presión' +
      'puede revelar esta contraseña a un tercero. Si se ingresa en ' +
      'BlueWallet, desbloqueará un nuevo almacenamiento `falso`. Esto parecerá ' +
      'legítimo para un tercero, pero en secreto mantendrá su almacenamiento principal ' +
      'con monedas seguras.',
    help2: 'El nuevo almacen sera completamente funcional, y puedes almacenar ' + 'cantidades minimas para que sea mas creible.',
    create_fake_storage: 'Crear un almacen cifrado falso',
    go_back: 'Regresar',
    create_password: 'Crear una contraseña',
    create_password_explanation: 'La contraseña para el almacen falso no puede ser el mismo para su almacen principal.',
    password_should_not_match: 'La contraseña para el almacen falso no puede ser el mismo para su almacen principal.',
    retype_password: 'Volver a escribir contraseña',
    passwords_do_not_match: 'Las contraseñas no coinciden, intente nuevamente',
    success: 'Exitoso',
  },
  lnd: {
    title: 'manejar fondos',
    choose_source_wallet: 'Elija una cartera de fuente',
    refill_lnd_balance: 'Rellenar el balance de la cartera Lightning',
    refill: 'Rellenar',
    withdraw: 'Retirar',
  },
};
