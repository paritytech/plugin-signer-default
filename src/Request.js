// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

import React from 'react';
import PropTypes from 'prop-types';

import ConfirmViaKey from '@parity/ui/lib/Signer/ConfirmViaKey';
import SignerRequest from '@parity/ui/lib/Signer/Request';

export default function Request ({ accounts, className, date, gasLimit, id, isFocussed, isSending, netVersion, onConfirm, onReject, payload, origin }) {
  return (
    <SignerRequest
      accounts={ accounts }
      className={ className }
      confirmElement={ ConfirmViaKey }
      date={ date }
      gasLimit={ gasLimit }
      id={ id }
      isFocussed={ isFocussed }
      isSending={ isSending }
      netVersion={ netVersion }
      onConfirm={ onConfirm }
      onReject={ onReject }
      origin={ origin }
      payload={ payload }
    />
  );
}

Request.propTypes = {
  accounts: PropTypes.object.isRequired,
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  gasLimit: PropTypes.object.isRequired,
  id: PropTypes.object.isRequired,
  isFocussed: PropTypes.bool,
  isSending: PropTypes.bool.isRequired,
  netVersion: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  origin: PropTypes.object.isRequired,
  payload: PropTypes.oneOfType([
    PropTypes.shape({ decrypt: PropTypes.object.isRequired }),
    PropTypes.shape({ sendTransaction: PropTypes.object.isRequired }),
    PropTypes.shape({ sign: PropTypes.object.isRequired }),
    PropTypes.shape({ signTransaction: PropTypes.object.isRequired })
  ]).isRequired
};
